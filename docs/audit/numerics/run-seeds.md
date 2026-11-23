# Numeric literals — run-seeds.js

[Inventory guide](../NUMERICS.html). Exact contexts are accessible in the full source.

| Source | Literal | Unit / mechanism | Expression context |
| --- | --- | --- | --- |
| [run-seeds.js:10](../source/run-seeds.js.html#L10) | 0 | module data · [AK-RNG-01](../TECHNICAL.html#ak-rng-01) | ` serial = 0 ` |
| [run-seeds.js:16](../source/run-seeds.js.html#L16) | 4 | newEventSeed · [AK-RNG-01](../TECHNICAL.html#ak-rng-01) | ` words = new Uint32Array(4) ` |
| [run-seeds.js:21](../source/run-seeds.js.html#L21) | 16 | newEventSeed · [AK-RNG-01](../TECHNICAL.html#ak-rng-01) | ` n.toString(16) ` |
| [run-seeds.js:21](../source/run-seeds.js.html#L21) | 8 | newEventSeed · [AK-RNG-01](../TECHNICAL.html#ak-rng-01) | ` n.toString(16).padStart(8, '0') ` |
| [run-seeds.js:23](../source/run-seeds.js.html#L23) | 36 | newEventSeed · [AK-RNG-01](../TECHNICAL.html#ak-rng-01) | ` serial.toString(36) ` |
