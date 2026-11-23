# Numeric literals — worker.js

[Inventory guide](../NUMERICS.html). Exact contexts are accessible in the full source.

| Source | Literal | Unit / mechanism | Expression context |
| --- | --- | --- | --- |
| [worker.js:20](../source/worker.js.html#L20) | 0 | module data · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` replicate = 0 ` |
| [worker.js:22](../source/worker.js.html#L22) | 100 | module data · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` delay = 100 ` |
| [worker.js:26](../source/worker.js.html#L26) | 0 | module data · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` started = 0 ` |
| [worker.js:53](../source/worker.js.html#L53) | 0 | send · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` replicate === 0 ` |
| [worker.js:54](../source/worker.js.html#L54) | 0 | send · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` replicate === 0 ` |
| [worker.js:60](../source/worker.js.html#L60) | 1 | send · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` replicate + 1 ` |
| [worker.js:79](../source/worker.js.html#L79) | 1 | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` replicate + 1 ` |
| [worker.js:86](../source/worker.js.html#L86) | -1 | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` r.reporting.history.at(-1) ` |
| [worker.js:87](../source/worker.js.html#L87) | -1 | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` b.reporting.history.at(-1) ` |
| [worker.js:95](../source/worker.js.html#L95) | 0 | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` replicate === 0 ` |
| [worker.js:120](../source/worker.js.html#L120) | 1 | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` replicate + 1 ` |
| [worker.js:137](../source/worker.js.html#L137) | 0 | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` differences.reduce((a, b) => a + b, 0) ` |
| [worker.js:165](../source/worker.js.html#L165) | 0 | pump · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` replicate > 0 ` |
| [worker.js:165](../source/worker.js.html#L165) | 3 | pump · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` batch = replicate > 0 ? 3 : delay < 40 ? 3 : 1 ` |
| [worker.js:165](../source/worker.js.html#L165) | 40 | pump · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` delay < 40 ` |
| [worker.js:165](../source/worker.js.html#L165) | 3 | pump · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` batch = replicate > 0 ? 3 : delay < 40 ? 3 : 1 ` |
| [worker.js:165](../source/worker.js.html#L165) | 1 | pump · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` batch = replicate > 0 ? 3 : delay < 40 ? 3 : 1 ` |
| [worker.js:166](../source/worker.js.html#L166) | 0 | pump · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` i = 0 ` |
| [worker.js:170](../source/worker.js.html#L170) | 0 | pump · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` replicate > 0 ` |
| [worker.js:170](../source/worker.js.html#L170) | 0 | pump · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` setTimeout(pump, replicate > 0 ? 0 : delay) ` |
| [worker.js:185](../source/worker.js.html#L185) | 0 | module data · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) | ` replicate = 0 ` |
