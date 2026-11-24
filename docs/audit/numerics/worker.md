# Numeric literals — worker.js

[Inventory guide](../NUMERICS.html). Exact contexts are accessible in the full source.

| Source | Literal | Unit / mechanism | Expression context |
| --- | --- | --- | --- |
| [worker.js:21](../source/worker.js.html#L21) | 0 | module data · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` replicate = 0 ` |
| [worker.js:23](../source/worker.js.html#L23) | 100 | module data · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` delay = 100 ` |
| [worker.js:27](../source/worker.js.html#L27) | 0 | module data · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` started = 0 ` |
| [worker.js:55](../source/worker.js.html#L55) | 0 | send · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` replicate === 0 ` |
| [worker.js:56](../source/worker.js.html#L56) | 0 | send · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` replicate === 0 ` |
| [worker.js:62](../source/worker.js.html#L62) | 1 | send · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` replicate + 1 ` |
| [worker.js:81](../source/worker.js.html#L81) | 1 | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` replicate + 1 ` |
| [worker.js:88](../source/worker.js.html#L88) | -1 | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` r.reporting.history.at(-1) ` |
| [worker.js:89](../source/worker.js.html#L89) | -1 | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` b.reporting.history.at(-1) ` |
| [worker.js:97](../source/worker.js.html#L97) | 0 | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` replicate === 0 ` |
| [worker.js:122](../source/worker.js.html#L122) | 1 | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` replicate + 1 ` |
| [worker.js:139](../source/worker.js.html#L139) | 0 | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` differences.reduce((a, b) => a + b, 0) ` |
| [worker.js:167](../source/worker.js.html#L167) | 0 | pump · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` replicate > 0 ` |
| [worker.js:167](../source/worker.js.html#L167) | 3 | pump · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` batch = replicate > 0 ? 3 : delay < 40 ? 3 : 1 ` |
| [worker.js:167](../source/worker.js.html#L167) | 40 | pump · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` delay < 40 ` |
| [worker.js:167](../source/worker.js.html#L167) | 3 | pump · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` batch = replicate > 0 ? 3 : delay < 40 ? 3 : 1 ` |
| [worker.js:167](../source/worker.js.html#L167) | 1 | pump · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` batch = replicate > 0 ? 3 : delay < 40 ? 3 : 1 ` |
| [worker.js:168](../source/worker.js.html#L168) | 0 | pump · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` i = 0 ` |
| [worker.js:172](../source/worker.js.html#L172) | 0 | pump · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` replicate > 0 ` |
| [worker.js:172](../source/worker.js.html#L172) | 0 | pump · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` setTimeout(pump, replicate > 0 ? 0 : delay) ` |
| [worker.js:187](../source/worker.js.html#L187) | 0 | module data · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` replicate = 0 ` |
