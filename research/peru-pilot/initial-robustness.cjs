"use strict";
const fs = require("node:fs"),
  { engine } = require("./engine.cjs"),
  { run } = require("./pilot.cjs");
(async () => {
  const grid = require("./calibration-grid.json").sort(
      (a, b) => a.loss - b.loss,
    ),
    overrides = grid[0].overrides,
    rows = [];
  for (const initialSeed of ["PER-society-02", "PER-society-03"]) {
    const e = await engine(overrides),
      initial = e.api.createInitial({ country: "PER", initialSeed });
    for (const scenario of ["baseline", "combined"]) {
      const policies = require("./protocol.json").policies[scenario];
      const s = new e.api.Simulation(
        {
          country: "PER",
          initialSeed,
          eventSeed: "PER-initial-robustness",
          duration: 24,
          policies,
        },
        initial,
      );
      const { point } = require("./observe.cjs");
      const data = [],
        money = e.api.totalMoney(s.state);
      for (let i = 0; i < 24; i++) {
        s.step();
        s.assertInvariants();
        const p = point(s);
        delete p.flows;
        data.push(p);
      }
      rows.push({
        initialSeed,
        scenario,
        overrides,
        initialHash: require("./engine.cjs").sha(JSON.stringify(initial)),
        summary: require("./pilot.cjs").summarize(data, money),
        rows: data,
      });
      console.log(initialSeed, scenario, data.at(-1).economy.index);
    }
  }
  fs.writeFileSync(
    __dirname + "/initial-robustness.json",
    JSON.stringify(rows, null, 2) + "\n",
  );
})().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
