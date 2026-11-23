# Numeric literals — visualization.js

[Inventory guide](../NUMERICS.html). Exact contexts are accessible in the full source.

| Source | Literal | Unit / mechanism | Expression context |
| --- | --- | --- | --- |
| [visualization.js:10](../source/visualization.js.html#L10) | -3 | module data · [AK-VIS-01](../TECHNICAL.html#ak-vis-01), [AK-MEA-02](../TECHNICAL.html#ak-mea-02) | ` -3 * Math.PI ` |
| [visualization.js:10](../source/visualization.js.html#L10) | 4 | module data · [AK-VIS-01](../TECHNICAL.html#ak-vis-01), [AK-MEA-02](../TECHNICAL.html#ak-mea-02) | ` (-3 * Math.PI) / 4 ` |
| [visualization.js:10](../source/visualization.js.html#L10) | 4 | module data · [AK-VIS-01](../TECHNICAL.html#ak-vis-01), [AK-MEA-02](../TECHNICAL.html#ak-mea-02) | ` -Math.PI / 4 ` |
| [visualization.js:10](../source/visualization.js.html#L10) | 4 | module data · [AK-VIS-01](../TECHNICAL.html#ak-vis-01), [AK-MEA-02](../TECHNICAL.html#ak-mea-02) | ` Math.PI / 4 ` |
| [visualization.js:10](../source/visualization.js.html#L10) | 3 | module data · [AK-VIS-01](../TECHNICAL.html#ak-vis-01), [AK-MEA-02](../TECHNICAL.html#ak-mea-02) | ` 3 * Math.PI ` |
| [visualization.js:10](../source/visualization.js.html#L10) | 4 | module data · [AK-VIS-01](../TECHNICAL.html#ak-vis-01), [AK-MEA-02](../TECHNICAL.html#ak-mea-02) | ` (3 * Math.PI) / 4 ` |
| [visualization.js:11](../source/visualization.js.html#L11) | 0.48 | module data · [AK-VIS-01](../TECHNICAL.html#ak-vis-01), [AK-MEA-02](../TECHNICAL.html#ak-mea-02) | ` core = 0.48 ` |
| [visualization.js:17](../source/visualization.js.html#L17) | 2166136261 | hash · [AK-MEA-02](../TECHNICAL.html#ak-mea-02) | ` n = 2166136261 ` |
| [visualization.js:18](../source/visualization.js.html#L18) | 0 | hash · [AK-MEA-02](../TECHNICAL.html#ak-mea-02) | ` c.charCodeAt(0) ` |
| [visualization.js:18](../source/visualization.js.html#L18) | 16777619 | hash · [AK-MEA-02](../TECHNICAL.html#ak-mea-02) | ` Math.imul(n ^ c.charCodeAt(0), 16777619) ` |
| [visualization.js:19](../source/visualization.js.html#L19) | 0 | hash · [AK-MEA-02](../TECHNICAL.html#ak-mea-02) | ` n >>> 0 ` |
| [visualization.js:19](../source/visualization.js.html#L19) | 4294967296 | hash · [AK-MEA-02](../TECHNICAL.html#ak-mea-02) | ` (n >>> 0) / 4294967296 ` |
| [visualization.js:28](../source/visualization.js.html#L28) | 0.05 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` l.strength <= 0.05 ` |
| [visualization.js:34](../source/visualization.js.html#L34) | 0 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` l.strength * (trust ?? 0) ` |
| [visualization.js:38](../source/visualization.js.html#L38) | 0.5 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` affinity = a.affinityByRole &#124;&#124; [0.5, 0.5, 0.5, 0.5] ` |
| [visualization.js:38](../source/visualization.js.html#L38) | 0.5 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` affinity = a.affinityByRole &#124;&#124; [0.5, 0.5, 0.5, 0.5] ` |
| [visualization.js:38](../source/visualization.js.html#L38) | 0.5 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` affinity = a.affinityByRole &#124;&#124; [0.5, 0.5, 0.5, 0.5] ` |
| [visualization.js:38](../source/visualization.js.html#L38) | 0.5 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` affinity = a.affinityByRole &#124;&#124; [0.5, 0.5, 0.5, 0.5] ` |
| [visualization.js:39](../source/visualization.js.html#L39) | 0.2 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` 0.2 * Math.cos(directions[a.role]) ` |
| [visualization.js:40](../source/visualization.js.html#L40) | 0.2 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` 0.2 * Math.sin(directions[a.role]) ` |
| [visualization.js:41](../source/visualization.js.html#L41) | 0 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` r = 0 ` |
| [visualization.js:41](../source/visualization.js.html#L41) | 4 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` r < 4 ` |
| [visualization.js:42](../source/visualization.js.html#L42) | 2 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` 2 * (affinity[r] - 0.5) ` |
| [visualization.js:42](../source/visualization.js.html#L42) | 0.5 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` affinity[r] - 0.5 ` |
| [visualization.js:46](../source/visualization.js.html#L46) | 0.001 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` Math.hypot(x, y) < 0.001 ` |
| [visualization.js:47](../source/visualization.js.html#L47) | 0 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` rate = a.recentOpportunities ? a.recentCorrupt / a.recentOpportunities : 0 ` |
| [visualization.js:48](../source/visualization.js.html#L48) | 0 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` rate > 0 ` |
| [visualization.js:48](../source/visualization.js.html#L48) | 0.54 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` 0.54 + 0.41 * Math.sqrt(rate) ` |
| [visualization.js:48](../source/visualization.js.html#L48) | 0.41 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` 0.41 * Math.sqrt(rate) ` |
| [visualization.js:48](../source/visualization.js.html#L48) | 0 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` integrityRadius: rate > 0 ? 0.54 + 0.41 * Math.sqrt(rate) : 0 ` |
| [visualization.js:52](../source/visualization.js.html#L52) | 0 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` a.rate > 0 ` |
| [visualization.js:54](../source/visualization.js.html#L54) | 0.035 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` 0.035 + 0.43 * Math.sqrt(hash(view.agents[i].id + '-spacing')) ` |
| [visualization.js:54](../source/visualization.js.html#L54) | 0.43 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` 0.43 * Math.sqrt(hash(view.agents[i].id + '-spacing')) ` |
| [visualization.js:55](../source/visualization.js.html#L55) | 0.5 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` hash(i + '-angle') - 0.5 ` |
| [visualization.js:55](../source/visualization.js.html#L55) | 0.8 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` (hash(i + '-angle') - 0.5) * 0.8 ` |
| [visualization.js:59](../source/visualization.js.html#L59) | 0.032 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` cell = 0.032 ` |
| [visualization.js:60](../source/visualization.js.html#L60) | 0.023 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` minDistance = 0.023 ` |
| [visualization.js:61](../source/visualization.js.html#L61) | 0 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` pass = 0 ` |
| [visualization.js:61](../source/visualization.js.html#L61) | 8 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` pass < 8 ` |
| [visualization.js:63](../source/visualization.js.html#L63) | 0 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` i = 0 ` |
| [visualization.js:72](../source/visualization.js.html#L72) | 0 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` px = 0 ` |
| [visualization.js:73](../source/visualization.js.html#L73) | 0 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` py = 0 ` |
| [visualization.js:74](../source/visualization.js.html#L74) | 0 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` mass = 0 ` |
| [visualization.js:83](../source/visualization.js.html#L83) | 0.18 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` 0.18 * (initial[id].x - p.x) ` |
| [visualization.js:84](../source/visualization.js.html#L84) | 0.18 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` 0.18 * (initial[id].y - p.y) ` |
| [visualization.js:86](../source/visualization.js.html#L86) | 0.05 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` 0.05 * (px / mass - p.x) ` |
| [visualization.js:87](../source/visualization.js.html#L87) | 0.05 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` 0.05 * (py / mass - p.y) ` |
| [visualization.js:91](../source/visualization.js.html#L91) | -1 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` dx = -1 ` |
| [visualization.js:91](../source/visualization.js.html#L91) | 1 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` dx <= 1 ` |
| [visualization.js:92](../source/visualization.js.html#L92) | -1 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` dy = -1 ` |
| [visualization.js:92](../source/visualization.js.html#L92) | 1 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` dy <= 1 ` |
| [visualization.js:99](../source/visualization.js.html#L99) | 1e-7 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` d < 1e-7 ` |
| [visualization.js:100](../source/visualization.js.html#L100) | 2 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` hash(id + '-' + other) * Math.PI * 2 ` |
| [visualization.js:101](../source/visualization.js.html#L101) | 0.001 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` Math.cos(angle) * 0.001 ` |
| [visualization.js:102](../source/visualization.js.html#L102) | 0.001 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` Math.sin(angle) * 0.001 ` |
| [visualization.js:103](../source/visualization.js.html#L103) | 0.001 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` d = 0.001 ` |
| [visualization.js:106](../source/visualization.js.html#L106) | 0.35 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` 0.35 * (minDistance - d) ` |
| [visualization.js:112](../source/visualization.js.html#L112) | 1e-8 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` radius > 1e-8 ` |
| [visualization.js:113](../source/visualization.js.html#L113) | 0 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` a.rate > 0 ` |
| [visualization.js:132](../source/visualization.js.html#L132) | 0 | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` source.rate > 0 ` |
| [visualization.js:153](../source/visualization.js.html#L153) | 0 | impactWindow · [AK-MEA-02](../TECHNICAL.html#ak-mea-02) | ` (function (root) { const directions = [(-3 * Math.PI) / 4, -Math.PI / 4, Math.PI / 4, (3 * Math.PI) / 4], core = 0.48; /** [AK-MEA-02] hash * Implementation unit for Package impact and paired compa… ` |
| [visualization.js:155](../source/visualization.js.html#L155) | 0 | impactWindow · [AK-MEA-02](../TECHNICAL.html#ak-mea-02) | ` Math.max(0, month - window) ` |
| [visualization.js:155](../source/visualization.js.html#L155) | 0 | impactWindow · [AK-MEA-02](../TECHNICAL.html#ak-mea-02) | ` startMonth = window ? Math.max(0, month - window) : 0 ` |
| [visualization.js:158](../source/visualization.js.html#L158) | 0 | impactWindow · [AK-MEA-02](../TECHNICAL.html#ak-mea-02) | ` (end.encounterOpportunities &#124;&#124; 0) - (start.encounterOpportunities &#124;&#124; 0) ` |
| [visualization.js:158](../source/visualization.js.html#L158) | 0 | impactWindow · [AK-MEA-02](../TECHNICAL.html#ak-mea-02) | ` (end.encounterOpportunities &#124;&#124; 0) - (start.encounterOpportunities &#124;&#124; 0) ` |
| [visualization.js:159](../source/visualization.js.html#L159) | 0 | impactWindow · [AK-MEA-02](../TECHNICAL.html#ak-mea-02) | ` (end.encounterCorruptActs &#124;&#124; 0) - (start.encounterCorruptActs &#124;&#124; 0) ` |
| [visualization.js:159](../source/visualization.js.html#L159) | 0 | impactWindow · [AK-MEA-02](../TECHNICAL.html#ak-mea-02) | ` (end.encounterCorruptActs &#124;&#124; 0) - (start.encounterCorruptActs &#124;&#124; 0) ` |
| [visualization.js:163](../source/visualization.js.html#L163) | 0 | impactWindow · [AK-MEA-02](../TECHNICAL.html#ak-mea-02) | ` opportunities < 0 ` |
| [visualization.js:164](../source/visualization.js.html#L164) | 0 | impactWindow · [AK-MEA-02](../TECHNICAL.html#ak-mea-02) | ` corrupt < 0 ` |
| [visualization.js:174](../source/visualization.js.html#L174) | 100 | impactWindow · [AK-MEA-02](../TECHNICAL.html#ak-mea-02) | ` 100 * corrupt ` |
| [visualization.js:181](../source/visualization.js.html#L181) | 0 | impactSeries · [AK-MEA-02](../TECHNICAL.html#ak-mea-02) | ` (function (root) { const directions = [(-3 * Math.PI) / 4, -Math.PI / 4, Math.PI / 4, (3 * Math.PI) / 4], core = 0.48; /** [AK-MEA-02] hash * Implementation unit for Package impact and paired compa… ` |
| [visualization.js:184](../source/visualization.js.html#L184) | 0 | impactSeries · [AK-MEA-02](../TECHNICAL.html#ak-mea-02) | ` x.month > 0 ` |
| [visualization.js:202](../source/visualization.js.html#L202) | 0 | impactDifference · [AK-MEA-02](../TECHNICAL.html#ak-mea-02) | ` value === 0 ` |
| [visualization.js:205](../source/visualization.js.html#L205) | 0 | impactDifference · [AK-MEA-02](../TECHNICAL.html#ak-mea-02) | ` value > 0 ` |
| [visualization.js:206](../source/visualization.js.html#L206) | 0.0005 | impactDifference · [AK-MEA-02](../TECHNICAL.html#ak-mea-02) | ` Math.abs(value) < 0.0005 ` |
| [visualization.js:206](../source/visualization.js.html#L206) | 1 | impactDifference · [AK-MEA-02](../TECHNICAL.html#ak-mea-02) | ` value.toExponential(1) ` |
| [visualization.js:206](../source/visualization.js.html#L206) | 3 | impactDifference · [AK-MEA-02](../TECHNICAL.html#ak-mea-02) | ` value.toFixed(3) ` |
