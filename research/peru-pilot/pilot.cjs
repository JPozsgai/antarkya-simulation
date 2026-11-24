"use strict";
const fs = require("node:fs"),
  path = require("node:path");
const { engine, sha } = require("./engine.cjs"),
  { point } = require("./observe.cjs");
const protocol = require("./protocol.json"),
  dir = __dirname;
const sum = (xs) => xs.reduce((a, b) => a + b, 0),
  mean = (xs) => sum(xs) / xs.length;
function summarize(rows, initialMoney) {
  const yr = rows.slice(0, 12),
    end = rows.at(-1);
  return {
    taxShareYear1:
      sum(yr.map((p) => p.tax)) / sum(yr.map((p) => p.economy.domesticVA)),
    growthYear1: rows[11].economy.index / 100 - 1,
    indexFinal: end.economy.index,
    investmentOrdersShareYear1:
      sum(yr.map((p) => p.investmentOrdered)) /
      sum(yr.map((p) => p.economy.domesticVA)),
    capacityInstalledYear1: sum(yr.map((p) => p.capacityInstalled)),
    capitalFinal: end.stocks.capital,
    capabilityFinal: end.stocks.capability,
    pressureFinal: end.householdPressure,
    arrearsFinal: end.taxArrears,
    corruptionRateFinal:
      (100 *
        (end.metrics.encounterCorruptActs -
          (rows.length > 12
            ? rows[rows.length - 13].metrics.encounterCorruptActs
            : 0))) /
      Math.max(
        1,
        end.metrics.encounterOpportunities -
          (rows.length > 12
            ? rows[rows.length - 13].metrics.encounterOpportunities
            : 0),
      ),
    corruptActs: end.metrics.corruptActs,
    maxMoneyError: Math.max(
      ...rows.map((p) => Math.abs(p.money - initialMoney)),
    ),
    months: rows.length,
  };
}
async function run(A, seed, policies, months, initial) {
  const s = new A.Simulation(
    { country: "PER", eventSeed: seed, policies, duration: months },
    initial,
  );
  const initialMoney = A.totalMoney(s.state),
    rows = [];
  for (let i = 0; i < months; i++) {
    s.step();
    s.assertInvariants();
    const p = point(s);
    delete p.flows;
    rows.push(p);
  }
  return {
    summary: summarize(rows, initialMoney),
    rows,
    initialHash: sha(JSON.stringify(initial)),
    initialKey: initial.initialKey,
  };
}
async function main() {
  const begin = performance.now();
  let memoryPeak = 0;
  const checkpoint = () => {
    memoryPeak = Math.max(memoryPeak, process.memoryUsage().rss);
  };
  const calibration = [];
  for (const rate of protocol.grid.taxAssessmentRate)
    for (const compliance of protocol.grid.backgroundCompliance) {
      const e = await engine({
          taxAssessmentRate: rate,
          backgroundCompliance: compliance,
        }),
        initial = e.api.createInitial({ country: "PER" }),
        runs = [];
      for (const seed of protocol.trainingSeeds) {
        const r = await run(e.api, seed, [], 12, initial);
        runs.push(r.summary);
        checkpoint();
      }
      const fit = mean(runs.map((r) => r.taxShareYear1));
      calibration.push({
        overrides: e.overrides,
        fiscalShare: fit,
        loss: Math.abs(fit - protocol.fiscalTarget),
        runs,
        initialHash: sha(JSON.stringify(initial)),
      });
      console.log("fit", rate, compliance, fit);
      fs.writeFileSync(
        path.join(dir, "calibration-grid.json"),
        JSON.stringify(calibration, null, 2) + "\n",
      );
    }
  calibration.sort((a, b) => a.loss - b.loss);
  const selected = calibration[0].overrides;
  const pilot = [];
  for (const [label, overrides] of Object.entries({
    published: {},
    candidate: selected,
  })) {
    const e = await engine(overrides),
      initial = e.api.createInitial({ country: "PER" });
    for (const seed of protocol.holdoutSeeds)
      for (const [scenario, policies] of Object.entries(protocol.policies)) {
        const r = await run(e.api, seed, policies, 24, initial);
        pilot.push({ label, overrides, seed, scenario, ...r });
        checkpoint();
        console.log("pilot", label, seed, scenario, r.summary.indexFinal);
        fs.writeFileSync(
          path.join(dir, "pilot-results.json"),
          JSON.stringify(pilot, null, 2) + "\n",
        );
      }
  }
  const sensitivity = [];
  for (const [parameter, values] of Object.entries(protocol.sensitivity))
    for (const value of values) {
      const overrides = { ...selected, [parameter]: value },
        e = await engine(overrides),
        initial = e.api.createInitial({ country: "PER" }),
        r = await run(e.api, protocol.holdoutSeeds[0], [], 24, initial);
      sensitivity.push({ parameter, value, overrides, ...r });
      checkpoint();
      console.log("sensitivity", parameter, value, r.summary.indexFinal);
    }
  fs.writeFileSync(
    path.join(dir, "sensitivity-results.json"),
    JSON.stringify(sensitivity, null, 2) + "\n",
  );
  const e = await engine(selected),
    initial = e.api.createInitial({ country: "PER" }),
    long = await run(e.api, "PER-long-run-01", [], 120, initial);
  fs.writeFileSync(
    path.join(dir, "candidate-long-run.json"),
    JSON.stringify({ overrides: selected, ...long }, null, 2) + "\n",
  );
  checkpoint();
  fs.writeFileSync(
    path.join(dir, "run-manifest.json"),
    JSON.stringify(
      {
        protocol,
        selected,
        sourceHashes: e.sourceHashes,
        transformedHybridSHA256: e.transformedHybridSHA256,
        injectionMethod: e.method,
        modelVersion: e.api.VERSION,
        node: process.version,
        platform: process.platform,
        wallSeconds: (performance.now() - begin) / 1000,
        peakRSSSampledBytes: memoryPeak,
        runCount: 18 + 40 + 10 + 1,
        notes:
          "RSS sampled after each run; not peak-heap profiling or an Android result. One initial society per parameter set; matched baseline/reform states within each set.",
      },
      null,
      2,
    ) + "\n",
  );
}
module.exports = { run, summarize };
if (require.main === module)
  main().catch((e) => {
    console.error(e);
    process.exitCode = 1;
  });
