# State definitions and writes — run-seeds.js

[Inventory guide](../STATE.html). Whole-function source is authoritative for types, branches, bounds and update semantics.

| Source | Field / target | Operation / expression | Owner / mechanism |
| --- | --- | --- | --- |
| [run-seeds.js:31](../source/run-seeds.js.html#L31) | ` prepareRun.eventSeed ` | object definition · ` reuseEventSeed ? config.eventSeed : newEventSeed(fill) ` | prepareRun · [AK-RNG-01](../TECHNICAL.html#ak-rng-01) |
| [run-seeds.js:33](../source/run-seeds.js.html#L33) | ` api.newEventSeed ` | object definition · ` newEventSeed ` | module data · [AK-RNG-01](../TECHNICAL.html#ak-rng-01) |
| [run-seeds.js:33](../source/run-seeds.js.html#L33) | ` api.prepareRun ` | object definition · ` prepareRun ` | module data · [AK-RNG-01](../TECHNICAL.html#ak-rng-01) |
| [run-seeds.js:34](../source/run-seeds.js.html#L34) | ` module.exports ` | = · ` api ` | module data · [AK-RNG-01](../TECHNICAL.html#ak-rng-01) |
| [run-seeds.js:35](../source/run-seeds.js.html#L35) | ` root.AntarkyaRunSeeds ` | = · ` api ` | module data · [AK-RNG-01](../TECHNICAL.html#ak-rng-01) |
