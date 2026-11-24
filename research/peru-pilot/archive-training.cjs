"use strict";
// Deterministically replay the original training trajectories to retain their monthly observations.
const fs = require("node:fs"),
  { engine } = require("./engine.cjs"),
  { run } = require("./pilot.cjs"),
  protocol = require("./protocol.json");
(async () => {
  const grid = require("./calibration-grid.json"),
    out = [];
  for (const row of grid) {
    const e = await engine(row.overrides),
      initial = e.api.createInitial({ country: "PER" });
    for (let i = 0; i < protocol.trainingSeeds.length; i++) {
      const seed = protocol.trainingSeeds[i],
        r = await run(e.api, seed, [], 12, initial);
      if (Math.abs(r.summary.taxShareYear1 - row.runs[i].taxShareYear1) > 1e-12)
        throw Error("Training replay differs");
      out.push({
        label: "training",
        scenario: "baseline",
        seed,
        overrides: row.overrides,
        ...r,
      });
    }
    console.log("archived training", row.overrides);
  }
  fs.writeFileSync(
    __dirname + "/training-trajectories.json",
    JSON.stringify(out, null, 2) + "\n",
  );
})().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
