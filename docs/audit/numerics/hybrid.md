# Numeric literals — hybrid.js

[Inventory guide](../NUMERICS.html). Exact contexts are accessible in the full source.

| Source | Literal | Unit / mechanism | Expression context |
| --- | --- | --- | --- |
| [hybrid.js:9](../source/hybrid.js.html#L9) | 0 | clamp · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` clamp = (x, lo = 0, hi = 1) => Math.max(lo, Math.min(hi, x)) ` |
| [hybrid.js:9](../source/hybrid.js.html#L9) | 1 | clamp · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` clamp = (x, lo = 0, hi = 1) => Math.max(lo, Math.min(hi, x)) ` |
| [hybrid.js:10](../source/hybrid.js.html#L10) | 0 | sum · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` xs.reduce((a, b) => a + b, 0) ` |
| [hybrid.js:11](../source/hybrid.js.html#L11) | 0 | mean · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` mean = (xs) => (xs.length ? sum(xs) / xs.length : 0) ` |
| [hybrid.js:17](../source/hybrid.js.html#L17) | 0.02 | module data · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` maintenanceShare: 0.02 ` |
| [hybrid.js:18](../source/hybrid.js.html#L18) | 0.1 | module data · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` maintenanceCost: 0.1 ` |
| [hybrid.js:19](../source/hybrid.js.html#L19) | 0.008 | module data · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` damageRate: 0.008 ` |
| [hybrid.js:20](../source/hybrid.js.html#L20) | 0.25 | module data · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` repairEfficiency: 0.25 ` |
| [hybrid.js:21](../source/hybrid.js.html#L21) | 2 | module data · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` rebuildWork: 2 ` |
| [hybrid.js:22](../source/hybrid.js.html#L22) | 0.1 | module data · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` rebuildIncrement: 0.1 ` |
| [hybrid.js:23](../source/hybrid.js.html#L23) | 6 | module data · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` attentionHalfLife: 6 ` |
| [hybrid.js:24](../source/hybrid.js.html#L24) | 0.04 | module data · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` credibilityLearning: 0.04 ` |
| [hybrid.js:25](../source/hybrid.js.html#L25) | 0.08 | module data · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` annualDepreciation: 0.08 ` |
| [hybrid.js:26](../source/hybrid.js.html#L26) | 3 | module data · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` capitalOutputYears: 3 ` |
| [hybrid.js:27](../source/hybrid.js.html#L27) | 0.22 | module data · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` taxAssessmentRate: 0.22 ` |
| [hybrid.js:28](../source/hybrid.js.html#L28) | 0.85 | module data · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` backgroundCompliance: 0.85 ` |
| [hybrid.js:29](../source/hybrid.js.html#L29) | 0.2 | module data · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` intermediateShare: 0.2 ` |
| [hybrid.js:30](../source/hybrid.js.html#L30) | 0.35 | module data · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` explicitConsumptionShare: 0.35 ` |
| [hybrid.js:31](../source/hybrid.js.html#L31) | 60 | module data · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` exportDemand: 60 ` |
| [hybrid.js:32](../source/hybrid.js.html#L32) | 0.015 | module data · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` contactTime: 0.015 ` |
| [hybrid.js:33](../source/hybrid.js.html#L33) | 0.65 | module data · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` contactIntensity: [0.65, 0.85, 0.2, 0.2] ` |
| [hybrid.js:33](../source/hybrid.js.html#L33) | 0.85 | module data · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` contactIntensity: [0.65, 0.85, 0.2, 0.2] ` |
| [hybrid.js:33](../source/hybrid.js.html#L33) | 0.2 | module data · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` contactIntensity: [0.65, 0.85, 0.2, 0.2] ` |
| [hybrid.js:33](../source/hybrid.js.html#L33) | 0.2 | module data · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` contactIntensity: [0.65, 0.85, 0.2, 0.2] ` |
| [hybrid.js:34](../source/hybrid.js.html#L34) | 6 | module data · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` orderExpiry: 6 ` |
| [hybrid.js:35](../source/hybrid.js.html#L35) | 1.5 | module data · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` reserveMonths: 1.5 ` |
| [hybrid.js:36](../source/hybrid.js.html#L36) | 1000 | module data · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` transactionRetention: 1000 ` |
| [hybrid.js:44](../source/hybrid.js.html#L44) | 3 | rank · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-01](../TECHNICAL.html#akx-gov-01) | ` return a.id === sim.state.politics.controller ? 3 : sim.orgs.some((o) => o.leader === a.id) ? 2 : 1; ` |
| [hybrid.js:46](../source/hybrid.js.html#L46) | 2 | rank · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-01](../TECHNICAL.html#akx-gov-01) | ` return a.id === sim.state.politics.controller ? 3 : sim.orgs.some((o) => o.leader === a.id) ? 2 : 1; ` |
| [hybrid.js:47](../source/hybrid.js.html#L47) | 1 | rank · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-01](../TECHNICAL.html#akx-gov-01) | ` return a.id === sim.state.politics.controller ? 3 : sim.orgs.some((o) => o.leader === a.id) ? 2 : 1; ` |
| [hybrid.js:49](../source/hybrid.js.html#L49) | 0 | option · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` (function (root) { let A, active = null; const clamp = (x, lo = 0, hi = 1) => Math.max(lo, Math.min(hi, x)); const sum = (xs) => xs.reduce((a, b) => a + b, 0); const mean = (xs) => (xs.length ? sum… ` |
| [hybrid.js:52](../source/hybrid.js.html#L52) | 0 | option · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` sim.effects([0, 0, 0.1], economic, [ political, political * 0.5, 0.1, ]) ` |
| [hybrid.js:52](../source/hybrid.js.html#L52) | 0 | option · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` sim.effects([0, 0, 0.1], economic, [ political, political * 0.5, 0.1, ]) ` |
| [hybrid.js:52](../source/hybrid.js.html#L52) | 0.1 | option · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` sim.effects([0, 0, 0.1], economic, [ political, political * 0.5, 0.1, ]) ` |
| [hybrid.js:54](../source/hybrid.js.html#L54) | 0.5 | option · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` political * 0.5 ` |
| [hybrid.js:55](../source/hybrid.js.html#L55) | 0.1 | option · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` sim.effects([0, 0, 0.1], economic, [ political, political * 0.5, 0.1, ]) ` |
| [hybrid.js:57](../source/hybrid.js.html#L57) | 0.03 | option · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` effort: 0.03 ` |
| [hybrid.js:88](../source/hybrid.js.html#L88) | 0.2 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` s.outside.balance * 0.2 ` |
| [hybrid.js:95](../source/hybrid.js.html#L95) | 1500 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` capacity: 1500 ` |
| [hybrid.js:96](../source/hybrid.js.html#L96) | 1100 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` recentReceipts: 1100 ` |
| [hybrid.js:97](../source/hybrid.js.html#L97) | 2000 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` reserve: 2000 ` |
| [hybrid.js:98](../source/hybrid.js.html#L98) | 0 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` output: 0 ` |
| [hybrid.js:109](../source/hybrid.js.html#L109) | 0 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` serial: 0 ` |
| [hybrid.js:113](../source/hybrid.js.html#L113) | 0 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` completedOrders: 0 ` |
| [hybrid.js:114](../source/hybrid.js.html#L114) | 0 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` abandonedOrders: 0 ` |
| [hybrid.js:115](../source/hybrid.js.html#L115) | 0 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` encounters: 0 ` |
| [hybrid.js:116](../source/hybrid.js.html#L116) | 0 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` retries: 0 ` |
| [hybrid.js:119](../source/hybrid.js.html#L119) | 0 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` flowSerial: 0 ` |
| [hybrid.js:120](../source/hybrid.js.html#L120) | 0 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` transactionSerial: 0 ` |
| [hybrid.js:124](../source/hybrid.js.html#L124) | 20000 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` s.env.gdp_per_capita_ppp / 20000 ` |
| [hybrid.js:124](../source/hybrid.js.html#L124) | 0.6 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` clamp(Math.sqrt(s.env.gdp_per_capita_ppp / 20000), 0.6, 1.8) ` |
| [hybrid.js:124](../source/hybrid.js.html#L124) | 1.8 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` clamp(Math.sqrt(s.env.gdp_per_capita_ppp / 20000), 0.6, 1.8) ` |
| [hybrid.js:129](../source/hybrid.js.html#L129) | 1 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` time: 1 ` |
| [hybrid.js:130](../source/hybrid.js.html#L130) | 0 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` used: 0 ` |
| [hybrid.js:136](../source/hybrid.js.html#L136) | 0 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` incomeReceived: 0 ` |
| [hybrid.js:137](../source/hybrid.js.html#L137) | 0 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` consumptionReceived: 0 ` |
| [hybrid.js:144](../source/hybrid.js.html#L144) | 1 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` Math.max(1, staff.length) ` |
| [hybrid.js:145](../source/hybrid.js.html#L145) | 0 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` backlog: 0 ` |
| [hybrid.js:146](../source/hybrid.js.html#L146) | 0 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` recoverable: 0 ` |
| [hybrid.js:147](../source/hybrid.js.html#L147) | 0 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` irreversible: 0 ` |
| [hybrid.js:148](../source/hybrid.js.html#L148) | 0 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` rebuild: 0 ` |
| [hybrid.js:153](../source/hybrid.js.html#L153) | 0 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` staff.slice(0, 3) ` |
| [hybrid.js:153](../source/hybrid.js.html#L153) | 3 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` staff.slice(0, 3) ` |
| [hybrid.js:154](../source/hybrid.js.html#L154) | 0 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` staff.slice(0, 3) ` |
| [hybrid.js:154](../source/hybrid.js.html#L154) | 3 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` staff.slice(0, 3) ` |
| [hybrid.js:155](../source/hybrid.js.html#L155) | 0.45 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` removalProtection: 0.45 ` |
| [hybrid.js:156](../source/hybrid.js.html#L156) | 0.45 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` oversight: 0.45 ` |
| [hybrid.js:157](../source/hybrid.js.html#L157) | 0.45 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` disclosure: 0.45 ` |
| [hybrid.js:158](../source/hybrid.js.html#L158) | 2 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` minimumWait: 2 ` |
| [hybrid.js:161](../source/hybrid.js.html#L161) | 1 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` o.category === 1 ` |
| [hybrid.js:161](../source/hybrid.js.html#L161) | 12 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` 12 + staff.length * 1.4 ` |
| [hybrid.js:161](../source/hybrid.js.html#L161) | 1.4 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` staff.length * 1.4 ` |
| [hybrid.js:161](../source/hybrid.js.html#L161) | 0 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` capacity: o.category === 1 ? (12 + staff.length * 1.4) * scale : 0 ` |
| [hybrid.js:162](../source/hybrid.js.html#L162) | 0 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` output: 0 ` |
| [hybrid.js:163](../source/hybrid.js.html#L163) | 0 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` valueAdded: 0 ` |
| [hybrid.js:164](../source/hybrid.js.html#L164) | 0 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` receipts: 0 ` |
| [hybrid.js:165](../source/hybrid.js.html#L165) | 0 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` taxArrears: 0 ` |
| [hybrid.js:166](../source/hybrid.js.html#L166) | 0 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` assessed: 0 ` |
| [hybrid.js:167](../source/hybrid.js.html#L167) | 0 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` collected: 0 ` |
| [hybrid.js:168](../source/hybrid.js.html#L168) | 1 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` o.category === 1 ` |
| [hybrid.js:169](../source/hybrid.js.html#L169) | 0 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` retained: 0 ` |
| [hybrid.js:170](../source/hybrid.js.html#L170) | 12 | initialize · [AKX-SCP-01](../TECHNICAL.html#akx-scp-01), [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` 12 * scale ` |
| [hybrid.js:199](../source/hybrid.js.html#L199) | 0 | recordTransfer · [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-MEA-01](../TECHNICAL.html#akx-mea-01) | ` (h.monthTransfers &#124;&#124; 0) + 1 ` |
| [hybrid.js:199](../source/hybrid.js.html#L199) | 1 | recordTransfer · [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-MEA-01](../TECHNICAL.html#akx-mea-01) | ` (h.monthTransfers &#124;&#124; 0) + 1 ` |
| [hybrid.js:206](../source/hybrid.js.html#L206) | 1 | recordTransfer · [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-MEA-01](../TECHNICAL.html#akx-mea-01) | ` id = key.split("-")[1] ` |
| [hybrid.js:207](../source/hybrid.js.html#L207) | 0 | recordTransfer · [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-MEA-01](../TECHNICAL.html#akx-mea-01) | ` in: 0 ` |
| [hybrid.js:207](../source/hybrid.js.html#L207) | 0 | recordTransfer · [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-MEA-01](../TECHNICAL.html#akx-mea-01) | ` out: 0 ` |
| [hybrid.js:211](../source/hybrid.js.html#L211) | 0 | recordTransfer · [AKX-STA-01](../TECHNICAL.html#akx-sta-01), [AKX-MEA-01](../TECHNICAL.html#akx-mea-01) | ` (h.backgroundReceipts &#124;&#124; 0) + amount ` |
| [hybrid.js:238](../source/hybrid.js.html#L238) | 1e-12 | flow · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` Math.abs(amount) < 1e-12 ` |
| [hybrid.js:258](../source/hybrid.js.html#L258) | 0 | open · [AKX-TIM-01](../TECHNICAL.html#akx-tim-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` h.flowSerial = 0 ` |
| [hybrid.js:259](../source/hybrid.js.html#L259) | 0 | open · [AKX-TIM-01](../TECHNICAL.html#akx-tim-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` h.transactionSerial = 0 ` |
| [hybrid.js:261](../source/hybrid.js.html#L261) | 0 | open · [AKX-TIM-01](../TECHNICAL.html#akx-tim-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` h.monthTransfers = 0 ` |
| [hybrid.js:262](../source/hybrid.js.html#L262) | 0 | open · [AKX-TIM-01](../TECHNICAL.html#akx-tim-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` h.backgroundReceipts = 0 ` |
| [hybrid.js:264](../source/hybrid.js.html#L264) | 0 | open · [AKX-TIM-01](../TECHNICAL.html#akx-tim-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` imports: 0 ` |
| [hybrid.js:264](../source/hybrid.js.html#L264) | 0 | open · [AKX-TIM-01](../TECHNICAL.html#akx-tim-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` exports: 0 ` |
| [hybrid.js:264](../source/hybrid.js.html#L264) | 0 | open · [AKX-TIM-01](../TECHNICAL.html#akx-tim-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` investment: 0 ` |
| [hybrid.js:264](../source/hybrid.js.html#L264) | 0 | open · [AKX-TIM-01](../TECHNICAL.html#akx-tim-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` taxCollected: 0 ` |
| [hybrid.js:267](../source/hybrid.js.html#L267) | 1 | open · [AKX-TIM-01](../TECHNICAL.html#akx-tim-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` a.hybrid.time = 1 ` |
| [hybrid.js:268](../source/hybrid.js.html#L268) | 0 | open · [AKX-TIM-01](../TECHNICAL.html#akx-tim-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` a.hybrid.used = 0 ` |
| [hybrid.js:269](../source/hybrid.js.html#L269) | 0 | open · [AKX-TIM-01](../TECHNICAL.html#akx-tim-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` a.hybrid.incomeReceived = 0 ` |
| [hybrid.js:270](../source/hybrid.js.html#L270) | 0 | open · [AKX-TIM-01](../TECHNICAL.html#akx-tim-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` a.hybrid.consumptionReceived = 0 ` |
| [hybrid.js:272](../source/hybrid.js.html#L272) | 2 | open · [AKX-TIM-01](../TECHNICAL.html#akx-tim-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` 2 ** (-1 / parameters.attentionHalfLife) ` |
| [hybrid.js:272](../source/hybrid.js.html#L272) | -1 | open · [AKX-TIM-01](../TECHNICAL.html#akx-tim-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` -1 / parameters.attentionHalfLife ` |
| [hybrid.js:275](../source/hybrid.js.html#L275) | 0 | open · [AKX-TIM-01](../TECHNICAL.html#akx-tim-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` o.hybridCharged = 0 ` |
| [hybrid.js:276](../source/hybrid.js.html#L276) | 0 | open · [AKX-TIM-01](../TECHNICAL.html#akx-tim-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` o.contactUsed = 0 ` |
| [hybrid.js:277](../source/hybrid.js.html#L277) | 0 | open · [AKX-TIM-01](../TECHNICAL.html#akx-tim-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` o.maintenanceUsed = 0 ` |
| [hybrid.js:279](../source/hybrid.js.html#L279) | 0 | open · [AKX-TIM-01](../TECHNICAL.html#akx-tim-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` o.economy.output = 0 ` |
| [hybrid.js:280](../source/hybrid.js.html#L280) | 0 | open · [AKX-TIM-01](../TECHNICAL.html#akx-tim-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` o.economy.valueAdded = 0 ` |
| [hybrid.js:281](../source/hybrid.js.html#L281) | 0 | open · [AKX-TIM-01](../TECHNICAL.html#akx-tim-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` o.economy.receipts = 0 ` |
| [hybrid.js:283](../source/hybrid.js.html#L283) | 0 | open · [AKX-TIM-01](../TECHNICAL.html#akx-tim-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` h.background.output = 0 ` |
| [hybrid.js:299](../source/hybrid.js.html#L299) | 0 | decay · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` Math.max(0, before[id][element] - after[id][element]) ` |
| [hybrid.js:322](../source/hybrid.js.html#L322) | 0 | exposure · [AKX-MEA-01](../TECHNICAL.html#akx-mea-01) | ` Math.max(0, value.level - (previous[element] &#124;&#124; 0)) ` |
| [hybrid.js:322](../source/hybrid.js.html#L322) | 0 | exposure · [AKX-MEA-01](../TECHNICAL.html#akx-mea-01) | ` value.level - (previous[element] &#124;&#124; 0) ` |
| [hybrid.js:332](../source/hybrid.js.html#L332) | 0.7 | exposure · [AKX-MEA-01](../TECHNICAL.html#akx-mea-01) | ` observe( sim, recipient, policy, source, observed.changed ? 0.7 : 0.4, observed.trace?.credibility &#124;&#124; 0.5, episode, ) ` |
| [hybrid.js:332](../source/hybrid.js.html#L332) | 0.4 | exposure · [AKX-MEA-01](../TECHNICAL.html#akx-mea-01) | ` observe( sim, recipient, policy, source, observed.changed ? 0.7 : 0.4, observed.trace?.credibility &#124;&#124; 0.5, episode, ) ` |
| [hybrid.js:333](../source/hybrid.js.html#L333) | 0.5 | exposure · [AKX-MEA-01](../TECHNICAL.html#akx-mea-01) | ` observe( sim, recipient, policy, source, observed.changed ? 0.7 : 0.4, observed.trace?.credibility &#124;&#124; 0.5, episode, ) ` |
| [hybrid.js:352](../source/hybrid.js.html#L352) | 1e-10 | personalTime · [AKX-TIM-01](../TECHNICAL.html#akx-tim-01) | ` a.hybrid.time + 1e-10 ` |
| [hybrid.js:375](../source/hybrid.js.html#L375) | 1e-10 | debitStaff · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` remaining < 1e-10 ` |
| [hybrid.js:377](../source/hybrid.js.html#L377) | 1e-7 | debitStaff · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` remaining > 1e-7 ` |
| [hybrid.js:381](../source/hybrid.js.html#L381) | 0 | synchronizeTime · [AKX-TIM-01](../TECHNICAL.html#akx-tim-01) | ` Math.max(0, o.capacity - o.time - o.hybridCharged) ` |
| [hybrid.js:387](../source/hybrid.js.html#L387) | 0 | work · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` limit = o.limits ? (o.limits[category] ?? 0) : o.time ` |
| [hybrid.js:389](../source/hybrid.js.html#L389) | 0 | work · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` Math.max( 0, Math.min( amount, o.time, limit, sum(staff(sim, o).map((a) => a.hybrid.time)), ), ) ` |
| [hybrid.js:399](../source/hybrid.js.html#L399) | 0 | work · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` (o[category + "Used"] &#124;&#124; 0) + actual ` |
| [hybrid.js:413](../source/hybrid.js.html#L413) | 0 | options · [AKX-AGY-02](../TECHNICAL.html#akx-agy-02), [AKX-INF-01](../TECHNICAL.html#akx-inf-01) | ` sim.peers(a, "supporters-" + context).slice(0, 2) ` |
| [hybrid.js:413](../source/hybrid.js.html#L413) | 2 | options · [AKX-AGY-02](../TECHNICAL.html#akx-agy-02), [AKX-INF-01](../TECHNICAL.html#akx-inf-01) | ` sim.peers(a, "supporters-" + context).slice(0, 2) ` |
| [hybrid.js:416](../source/hybrid.js.html#L416) | 0.5 | options · [AKX-AGY-02](../TECHNICAL.html#akx-agy-02), [AKX-INF-01](../TECHNICAL.html#akx-inf-01) | ` weight * (a.hybrid.credibility[peer.id] ?? 0.5) ` |
| [hybrid.js:428](../source/hybrid.js.html#L428) | 6 | options · [AKX-AGY-02](../TECHNICAL.html#akx-agy-02), [AKX-INF-01](../TECHNICAL.html#akx-inf-01) | ` effects[6] += 0.15 * dependence * agreement ` |
| [hybrid.js:428](../source/hybrid.js.html#L428) | 0.15 | options · [AKX-AGY-02](../TECHNICAL.html#akx-agy-02), [AKX-INF-01](../TECHNICAL.html#akx-inf-01) | ` 0.15 * dependence ` |
| [hybrid.js:429](../source/hybrid.js.html#L429) | 10 | options · [AKX-AGY-02](../TECHNICAL.html#akx-agy-02), [AKX-INF-01](../TECHNICAL.html#akx-inf-01) | ` context.slice(10) ` |
| [hybrid.js:432](../source/hybrid.js.html#L432) | 5 | options · [AKX-AGY-02](../TECHNICAL.html#akx-agy-02), [AKX-INF-01](../TECHNICAL.html#akx-inf-01) | ` effects[5] += 0.15 * (belief.value - 0.5) ` |
| [hybrid.js:432](../source/hybrid.js.html#L432) | 0.15 | options · [AKX-AGY-02](../TECHNICAL.html#akx-agy-02), [AKX-INF-01](../TECHNICAL.html#akx-inf-01) | ` 0.15 * (belief.value - 0.5) ` |
| [hybrid.js:432](../source/hybrid.js.html#L432) | 0.5 | options · [AKX-AGY-02](../TECHNICAL.html#akx-agy-02), [AKX-INF-01](../TECHNICAL.html#akx-inf-01) | ` belief.value - 0.5 ` |
| [hybrid.js:438](../source/hybrid.js.html#L438) | 0.08 | options · [AKX-AGY-02](../TECHNICAL.html#akx-agy-02), [AKX-INF-01](../TECHNICAL.html#akx-inf-01) | ` 0.08 * agreement ` |
| [hybrid.js:439](../source/hybrid.js.html#L439) | -1 | options · [AKX-AGY-02](../TECHNICAL.html#akx-agy-02), [AKX-INF-01](../TECHNICAL.html#akx-inf-01) | ` clamp( (x.norm ?? (x.corrupt ? a.normCorrupt : -a.normCorrupt)) + 0.08 * agreement, -1, 1, ) ` |
| [hybrid.js:440](../source/hybrid.js.html#L440) | 1 | options · [AKX-AGY-02](../TECHNICAL.html#akx-agy-02), [AKX-INF-01](../TECHNICAL.html#akx-inf-01) | ` clamp( (x.norm ?? (x.corrupt ? a.normCorrupt : -a.normCorrupt)) + 0.08 * agreement, -1, 1, ) ` |
| [hybrid.js:443](../source/hybrid.js.html#L443) | 0.06 | options · [AKX-AGY-02](../TECHNICAL.html#akx-agy-02), [AKX-INF-01](../TECHNICAL.html#akx-inf-01) | ` 0.06 * dependence ` |
| [hybrid.js:455](../source/hybrid.js.html#L455) | 0.5 | observe · [AKX-BEL-01](../TECHNICAL.html#akx-bel-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01), [AKX-INF-01](../TECHNICAL.html#akx-inf-01) | ` (function (root) { let A, active = null; const clamp = (x, lo = 0, hi = 1) => Math.max(lo, Math.min(hi, x)); const sum = (xs) => xs.reduce((a, b) => a + b, 0); const mean = (xs) => (xs.length ? sum… ` |
| [hybrid.js:462](../source/hybrid.js.html#L462) | 64 | observe · [AKX-BEL-01](../TECHNICAL.html#akx-bel-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01), [AKX-INF-01](../TECHNICAL.html#akx-inf-01) | ` p.observed.length > 64 ` |
| [hybrid.js:463](../source/hybrid.js.html#L463) | 0.5 | observe · [AKX-BEL-01](../TECHNICAL.html#akx-bel-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01), [AKX-INF-01](../TECHNICAL.html#akx-inf-01) | ` value: 0.5 ` |
| [hybrid.js:463](../source/hybrid.js.html#L463) | 0.5 | observe · [AKX-BEL-01](../TECHNICAL.html#akx-bel-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01), [AKX-INF-01](../TECHNICAL.html#akx-inf-01) | ` performance: 0.5 ` |
| [hybrid.js:465](../source/hybrid.js.html#L465) | 0.04 | observe · [AKX-BEL-01](../TECHNICAL.html#akx-bel-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01), [AKX-INF-01](../TECHNICAL.html#akx-inf-01) | ` 0.04 * clamp(reliability) ` |
| [hybrid.js:470](../source/hybrid.js.html#L470) | 2 | observe · [AKX-BEL-01](../TECHNICAL.html#akx-bel-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01), [AKX-INF-01](../TECHNICAL.html#akx-inf-01) | ` recipient.motives[2] + recipient.motives[5] ` |
| [hybrid.js:470](../source/hybrid.js.html#L470) | 5 | observe · [AKX-BEL-01](../TECHNICAL.html#akx-bel-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01), [AKX-INF-01](../TECHNICAL.html#akx-inf-01) | ` recipient.motives[2] + recipient.motives[5] ` |
| [hybrid.js:470](../source/hybrid.js.html#L470) | 8 | observe · [AKX-BEL-01](../TECHNICAL.html#akx-bel-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01), [AKX-INF-01](../TECHNICAL.html#akx-inf-01) | ` recipient.motives[2] + recipient.motives[5] + recipient.motives[8] ` |
| [hybrid.js:472](../source/hybrid.js.html#L472) | 0.25 | observe · [AKX-BEL-01](../TECHNICAL.html#akx-bel-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01), [AKX-INF-01](../TECHNICAL.html#akx-inf-01) | ` rate * 0.25 ` |
| [hybrid.js:472](../source/hybrid.js.html#L472) | 0.3 | observe · [AKX-BEL-01](../TECHNICAL.html#akx-bel-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01), [AKX-INF-01](../TECHNICAL.html#akx-inf-01) | ` target * 0.3 ` |
| [hybrid.js:475](../source/hybrid.js.html#L475) | 0.25 | observe · [AKX-BEL-01](../TECHNICAL.html#akx-bel-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01), [AKX-INF-01](../TECHNICAL.html#akx-inf-01) | ` (p.attention[policy] &#124;&#124; 0.25) + 0.1 * reliability ` |
| [hybrid.js:475](../source/hybrid.js.html#L475) | 0.1 | observe · [AKX-BEL-01](../TECHNICAL.html#akx-bel-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01), [AKX-INF-01](../TECHNICAL.html#akx-inf-01) | ` 0.1 * reliability ` |
| [hybrid.js:478](../source/hybrid.js.html#L478) | 0.5 | observe · [AKX-BEL-01](../TECHNICAL.html#akx-bel-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01), [AKX-INF-01](../TECHNICAL.html#akx-inf-01) | ` (p.credibility[source] ?? 0.5) + parameters.credibilityLearning * reliability * (target - (p.credibility[source] ?? 0.5)) ` |
| [hybrid.js:481](../source/hybrid.js.html#L481) | 0.5 | observe · [AKX-BEL-01](../TECHNICAL.html#akx-bel-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01), [AKX-INF-01](../TECHNICAL.html#akx-inf-01) | ` target - (p.credibility[source] ?? 0.5) ` |
| [hybrid.js:488](../source/hybrid.js.html#L488) | 0.25 | maintenanceNeed · [AKX-MNT-01](../TECHNICAL.html#akx-mnt-01) | ` o.care.backlog * o.care.referenceStaff * 0.25 ` |
| [hybrid.js:502](../source/hybrid.js.html#L502) | 0 | care · [AKX-CAP-01](../TECHNICAL.html#akx-cap-01), [AKX-MNT-01](../TECHNICAL.html#akx-mnt-01), [AKX-MNT-02](../TECHNICAL.html#akx-mnt-02) | ` option(sim, "maintain", [0, 0.3, 0.5]) ` |
| [hybrid.js:502](../source/hybrid.js.html#L502) | 0.3 | care · [AKX-CAP-01](../TECHNICAL.html#akx-cap-01), [AKX-MNT-01](../TECHNICAL.html#akx-mnt-01), [AKX-MNT-02](../TECHNICAL.html#akx-mnt-02) | ` option(sim, "maintain", [0, 0.3, 0.5]) ` |
| [hybrid.js:502](../source/hybrid.js.html#L502) | 0.5 | care · [AKX-CAP-01](../TECHNICAL.html#akx-cap-01), [AKX-MNT-01](../TECHNICAL.html#akx-mnt-01), [AKX-MNT-02](../TECHNICAL.html#akx-mnt-02) | ` option(sim, "maintain", [0, 0.3, 0.5]) ` |
| [hybrid.js:503](../source/hybrid.js.html#L503) | -0.05 | care · [AKX-CAP-01](../TECHNICAL.html#akx-cap-01), [AKX-MNT-01](../TECHNICAL.html#akx-mnt-01), [AKX-MNT-02](../TECHNICAL.html#akx-mnt-02) | ` option(sim, "repair", [-0.05, c.backlog, 0.6]) ` |
| [hybrid.js:503](../source/hybrid.js.html#L503) | 0.6 | care · [AKX-CAP-01](../TECHNICAL.html#akx-cap-01), [AKX-MNT-01](../TECHNICAL.html#akx-mnt-01), [AKX-MNT-02](../TECHNICAL.html#akx-mnt-02) | ` option(sim, "repair", [-0.05, c.backlog, 0.6]) ` |
| [hybrid.js:504](../source/hybrid.js.html#L504) | -0.1 | care · [AKX-CAP-01](../TECHNICAL.html#akx-cap-01), [AKX-MNT-01](../TECHNICAL.html#akx-mnt-01), [AKX-MNT-02](../TECHNICAL.html#akx-mnt-02) | ` option(sim, "rebuild", [-0.1, c.irreversible + 0.2, 0.7]) ` |
| [hybrid.js:504](../source/hybrid.js.html#L504) | 0.2 | care · [AKX-CAP-01](../TECHNICAL.html#akx-cap-01), [AKX-MNT-01](../TECHNICAL.html#akx-mnt-01), [AKX-MNT-02](../TECHNICAL.html#akx-mnt-02) | ` c.irreversible + 0.2 ` |
| [hybrid.js:504](../source/hybrid.js.html#L504) | 0.7 | care · [AKX-CAP-01](../TECHNICAL.html#akx-cap-01), [AKX-MNT-01](../TECHNICAL.html#akx-mnt-01), [AKX-MNT-02](../TECHNICAL.html#akx-mnt-02) | ` option(sim, "rebuild", [-0.1, c.irreversible + 0.2, 0.7]) ` |
| [hybrid.js:505](../source/hybrid.js.html#L505) | 0.15 | care · [AKX-CAP-01](../TECHNICAL.html#akx-cap-01), [AKX-MNT-01](../TECHNICAL.html#akx-mnt-01), [AKX-MNT-02](../TECHNICAL.html#akx-mnt-02) | ` option(sim, "defer upkeep", [0.15, 0.1, -0.2]) ` |
| [hybrid.js:505](../source/hybrid.js.html#L505) | 0.1 | care · [AKX-CAP-01](../TECHNICAL.html#akx-cap-01), [AKX-MNT-01](../TECHNICAL.html#akx-mnt-01), [AKX-MNT-02](../TECHNICAL.html#akx-mnt-02) | ` option(sim, "defer upkeep", [0.15, 0.1, -0.2]) ` |
| [hybrid.js:505](../source/hybrid.js.html#L505) | -0.2 | care · [AKX-CAP-01](../TECHNICAL.html#akx-cap-01), [AKX-MNT-01](../TECHNICAL.html#akx-mnt-01), [AKX-MNT-02](../TECHNICAL.html#akx-mnt-02) | ` option(sim, "defer upkeep", [0.15, 0.1, -0.2]) ` |
| [hybrid.js:511](../source/hybrid.js.html#L511) | 0 | care · [AKX-CAP-01](../TECHNICAL.html#akx-cap-01), [AKX-MNT-01](../TECHNICAL.html#akx-mnt-01), [AKX-MNT-02](../TECHNICAL.html#akx-mnt-02) | ` wanted = choice === "defer upkeep" ? 0 : Math.min(0.05, c.backlog + (choice === "rebuild" ? 0.02 : 0)) ` |
| [hybrid.js:512](../source/hybrid.js.html#L512) | 0.05 | care · [AKX-CAP-01](../TECHNICAL.html#akx-cap-01), [AKX-MNT-01](../TECHNICAL.html#akx-mnt-01), [AKX-MNT-02](../TECHNICAL.html#akx-mnt-02) | ` Math.min(0.05, c.backlog + (choice === "rebuild" ? 0.02 : 0)) ` |
| [hybrid.js:512](../source/hybrid.js.html#L512) | 0.02 | care · [AKX-CAP-01](../TECHNICAL.html#akx-cap-01), [AKX-MNT-01](../TECHNICAL.html#akx-mnt-01), [AKX-MNT-02](../TECHNICAL.html#akx-mnt-02) | ` c.backlog + (choice === "rebuild" ? 0.02 : 0) ` |
| [hybrid.js:512](../source/hybrid.js.html#L512) | 0 | care · [AKX-CAP-01](../TECHNICAL.html#akx-cap-01), [AKX-MNT-01](../TECHNICAL.html#akx-mnt-01), [AKX-MNT-02](../TECHNICAL.html#akx-mnt-02) | ` c.backlog + (choice === "rebuild" ? 0.02 : 0) ` |
| [hybrid.js:529](../source/hybrid.js.html#L529) | 0 | care · [AKX-CAP-01](../TECHNICAL.html#akx-cap-01), [AKX-MNT-01](../TECHNICAL.html#akx-mnt-01), [AKX-MNT-02](../TECHNICAL.html#akx-mnt-02) | ` Math.max(0, done - maintained) ` |
| [hybrid.js:530](../source/hybrid.js.html#L530) | 0 | care · [AKX-CAP-01](../TECHNICAL.html#akx-cap-01), [AKX-MNT-01](../TECHNICAL.html#akx-mnt-01), [AKX-MNT-02](../TECHNICAL.html#akx-mnt-02) | ` repair = choice === "repair" ? Math.min(c.backlog - maintained, Math.max(0, done - maintained)) : 0 ` |
| [hybrid.js:531](../source/hybrid.js.html#L531) | 0 | care · [AKX-CAP-01](../TECHNICAL.html#akx-cap-01), [AKX-MNT-01](../TECHNICAL.html#akx-mnt-01), [AKX-MNT-02](../TECHNICAL.html#akx-mnt-02) | ` Math.max(0, c.backlog - maintained - repair) ` |
| [hybrid.js:533](../source/hybrid.js.html#L533) | 1 | care · [AKX-CAP-01](../TECHNICAL.html#akx-cap-01), [AKX-MNT-01](../TECHNICAL.html#akx-mnt-01), [AKX-MNT-02](../TECHNICAL.html#akx-mnt-02) | ` 1 - maintained / due ` |
| [hybrid.js:538](../source/hybrid.js.html#L538) | 0 | care · [AKX-CAP-01](../TECHNICAL.html#akx-cap-01), [AKX-MNT-01](../TECHNICAL.html#akx-mnt-01), [AKX-MNT-02](../TECHNICAL.html#akx-mnt-02) | ` Math.max(0, c.recoverable + loss - restored) ` |
| [hybrid.js:539](../source/hybrid.js.html#L539) | 0.02 | care · [AKX-CAP-01](../TECHNICAL.html#akx-cap-01), [AKX-MNT-01](../TECHNICAL.html#akx-mnt-01), [AKX-MNT-02](../TECHNICAL.html#akx-mnt-02) | ` Math.min(0.02, c.backlog * 0.01) ` |
| [hybrid.js:539](../source/hybrid.js.html#L539) | 0.01 | care · [AKX-CAP-01](../TECHNICAL.html#akx-cap-01), [AKX-MNT-01](../TECHNICAL.html#akx-mnt-01), [AKX-MNT-02](../TECHNICAL.html#akx-mnt-02) | ` c.backlog * 0.01 ` |
| [hybrid.js:542](../source/hybrid.js.html#L542) | 0 | care · [AKX-CAP-01](../TECHNICAL.html#akx-cap-01), [AKX-MNT-01](../TECHNICAL.html#akx-mnt-01), [AKX-MNT-02](../TECHNICAL.html#akx-mnt-02) | ` rebuilt = 0 ` |
| [hybrid.js:544](../source/hybrid.js.html#L544) | 0 | care · [AKX-CAP-01](../TECHNICAL.html#akx-cap-01), [AKX-MNT-01](../TECHNICAL.html#akx-mnt-01), [AKX-MNT-02](../TECHNICAL.html#akx-mnt-02) | ` Math.max(0, done - maintained) ` |
| [hybrid.js:545](../source/hybrid.js.html#L545) | 0 | care · [AKX-CAP-01](../TECHNICAL.html#akx-cap-01), [AKX-MNT-01](../TECHNICAL.html#akx-mnt-01), [AKX-MNT-02](../TECHNICAL.html#akx-mnt-02) | ` c.irreversible > 0 ` |
| [hybrid.js:561](../source/hybrid.js.html#L561) | 0.001 | care · [AKX-CAP-01](../TECHNICAL.html#akx-cap-01), [AKX-MNT-01](../TECHNICAL.html#akx-mnt-01), [AKX-MNT-02](../TECHNICAL.html#akx-mnt-02) | ` clamp(o.caps[id] - loss + restored + rebuilt, 0.001, 0.98) ` |
| [hybrid.js:561](../source/hybrid.js.html#L561) | 0.98 | care · [AKX-CAP-01](../TECHNICAL.html#akx-cap-01), [AKX-MNT-01](../TECHNICAL.html#akx-mnt-01), [AKX-MNT-02](../TECHNICAL.html#akx-mnt-02) | ` clamp(o.caps[id] - loss + restored + rebuilt, 0.001, 0.98) ` |
| [hybrid.js:563](../source/hybrid.js.html#L563) | 1e-10 | care · [AKX-CAP-01](../TECHNICAL.html#akx-cap-01), [AKX-MNT-01](../TECHNICAL.html#akx-mnt-01), [AKX-MNT-02](../TECHNICAL.html#akx-mnt-02) | ` due - 1e-10 ` |
| [hybrid.js:607](../source/hybrid.js.html#L607) | 0.25 | accounts · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01) | ` 0.25 + 0.4 * o.skill ` |
| [hybrid.js:607](../source/hybrid.js.html#L607) | 0.4 | accounts · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01) | ` 0.4 * o.skill ` |
| [hybrid.js:607](../source/hybrid.js.html#L607) | 0.35 | accounts · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01) | ` 0.35 * o.professionalSkill ` |
| [hybrid.js:611](../source/hybrid.js.html#L611) | 0 | accounts · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01) | ` o.caseUsed = 0 ` |
| [hybrid.js:613](../source/hybrid.js.html#L613) | 2 | accounts · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01) | ` o.category === 2 ` |
| [hybrid.js:618](../source/hybrid.js.html#L618) | 2 | accounts · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01) | ` wages + 2 ` |
| [hybrid.js:621](../source/hybrid.js.html#L621) | 1 | accounts · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01) | ` o.category !== 1 ` |
| [hybrid.js:626](../source/hybrid.js.html#L626) | 0.03 | accounts · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01) | ` h.background.recentReceipts * 0.03 ` |
| [hybrid.js:630](../source/hybrid.js.html#L630) | 0.999 | accounts · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01) | ` p.honest *= 0.999 ` |
| [hybrid.js:631](../source/hybrid.js.html#L631) | 0.999 | accounts · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01) | ` p.corrupt *= 0.999 ` |
| [hybrid.js:635](../source/hybrid.js.html#L635) | 0 | accounts · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01) | ` a.role === 0 ` |
| [hybrid.js:645](../source/hybrid.js.html#L645) | 6 | accounts · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01) | ` a.receipts.length > 6 ` |
| [hybrid.js:646](../source/hybrid.js.html#L646) | 2 | accounts · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01) | ` a.role === 2 ` |
| [hybrid.js:647](../source/hybrid.js.html#L647) | 0.999 | accounts · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01) | ` a.descriptive * 0.999 ` |
| [hybrid.js:647](../source/hybrid.js.html#L647) | 0.0003 | accounts · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01) | ` a.descriptive * 0.999 + 0.0003 ` |
| [hybrid.js:648](../source/hybrid.js.html#L648) | 0 | accounts · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01) | ` a.role === 0 ` |
| [hybrid.js:648](../source/hybrid.js.html#L648) | 0.55 | accounts · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01) | ` personalTime(sim, a, 0.55, false) ` |
| [hybrid.js:655](../source/hybrid.js.html#L655) | 7 | account · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` key.slice(7) ` |
| [hybrid.js:656](../source/hybrid.js.html#L656) | 13 | account · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` key.slice(13) ` |
| [hybrid.js:661](../source/hybrid.js.html#L661) | 1e-9 | order · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03) | ` amount > 1e-9 ` |
| [hybrid.js:671](../source/hybrid.js.html#L671) | 0 | order · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03) | ` delivered: 0 ` |
| [hybrid.js:677](../source/hybrid.js.html#L677) | 1 | supplier · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` o.category === 1 ` |
| [hybrid.js:683](../source/hybrid.js.html#L683) | 0.5 | supplier · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` 0.5 + (buyer?.support?.find((x) => x.org === o.id)?.affinity &#124;&#124; 0) ` |
| [hybrid.js:684](../source/hybrid.js.html#L684) | 0 | supplier · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` 0.5 + (buyer?.support?.find((x) => x.org === o.id)?.affinity &#124;&#124; 0) ` |
| [hybrid.js:686](../source/hybrid.js.html#L686) | 2 | supplier · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` sim.relationship(buyer, sim.agents[o.leader]).access * 2 ` |
| [hybrid.js:687](../source/hybrid.js.html#L687) | 0 | supplier · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` 0.5 + (buyer?.support?.find((x) => x.org === o.id)?.affinity &#124;&#124; 0) + (preferConnected && buyer ? sim.relationship(buyer, sim.agents[o.leader]).access * 2 : 0) ` |
| [hybrid.js:689](../source/hybrid.js.html#L689) | 0 | supplier · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` return firms .map((o) => ({ o, score: -Math.log(sim.rand("hybrid-supplier", key, o.id)) / (0.5 + (buyer?.support?.find((x) => x.org === o.id)?.affinity &#124;&#124; 0) + (preferConnected && buyer ? sim.relat… ` |
| [hybrid.js:707](../source/hybrid.js.html#L707) | 1 | demand · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03) | ` 1 - parameters.explicitConsumptionShare ` |
| [hybrid.js:711](../source/hybrid.js.html#L711) | 0.25 | demand · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03) | ` h.background.recentReceipts * 0.25 ` |
| [hybrid.js:712](../source/hybrid.js.html#L712) | 0 | demand · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03) | ` Math.max(0, s.outside.balance - h.background.reserve) ` |
| [hybrid.js:712](../source/hybrid.js.html#L712) | 0.02 | demand · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03) | ` Math.max(0, s.outside.balance - h.background.reserve) * 0.02 ` |
| [hybrid.js:714](../source/hybrid.js.html#L714) | 1 | demand · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03) | ` o.category === 1 ` |
| [hybrid.js:715](../source/hybrid.js.html#L715) | 24 | demand · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03) | ` bg / 24 ` |
| [hybrid.js:716](../source/hybrid.js.html#L716) | 24 | demand · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03) | ` parameters.exportDemand / 24 ` |
| [hybrid.js:723](../source/hybrid.js.html#L723) | 0 | demand · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03) | ` option(sim, "open procurement", [0, 0.1, 0.6]) ` |
| [hybrid.js:723](../source/hybrid.js.html#L723) | 0.1 | demand · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03) | ` option(sim, "open procurement", [0, 0.1, 0.6]) ` |
| [hybrid.js:723](../source/hybrid.js.html#L723) | 0.6 | demand · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03) | ` option(sim, "open procurement", [0, 0.1, 0.6]) ` |
| [hybrid.js:724](../source/hybrid.js.html#L724) | 0.25 | demand · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03) | ` option(sim, "connected procurement", [0.25, 0.5, -0.2], 0.2, { corrupt: true, }) ` |
| [hybrid.js:724](../source/hybrid.js.html#L724) | 0.5 | demand · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03) | ` option(sim, "connected procurement", [0.25, 0.5, -0.2], 0.2, { corrupt: true, }) ` |
| [hybrid.js:724](../source/hybrid.js.html#L724) | -0.2 | demand · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03) | ` option(sim, "connected procurement", [0.25, 0.5, -0.2], 0.2, { corrupt: true, }) ` |
| [hybrid.js:724](../source/hybrid.js.html#L724) | 0.2 | demand · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03) | ` option(sim, "connected procurement", [0.25, 0.5, -0.2], 0.2, { corrupt: true, }) ` |
| [hybrid.js:727](../source/hybrid.js.html#L727) | 0.1 | demand · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03) | ` option(sim, "defer procurement", [0.1, 0, -0.1]) ` |
| [hybrid.js:727](../source/hybrid.js.html#L727) | 0 | demand · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03) | ` option(sim, "defer procurement", [0.1, 0, -0.1]) ` |
| [hybrid.js:727](../source/hybrid.js.html#L727) | -0.1 | demand · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03) | ` option(sim, "defer procurement", [0.1, 0, -0.1]) ` |
| [hybrid.js:733](../source/hybrid.js.html#L733) | 0.01 | demand · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03) | ` personalTime(sim, leader, 0.01) ` |
| [hybrid.js:745](../source/hybrid.js.html#L745) | 0.02 | demand · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03) | ` s.treasury.balance * 0.02 ` |
| [hybrid.js:745](../source/hybrid.js.html#L745) | 30 | demand · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03) | ` Math.min(s.treasury.balance * 0.02, 30) ` |
| [hybrid.js:759](../source/hybrid.js.html#L759) | 1e-9 | production · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` x.remaining <= 1e-9 ` |
| [hybrid.js:762](../source/hybrid.js.html#L762) | 0 | production · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` x.remaining = 0 ` |
| [hybrid.js:769](../source/hybrid.js.html#L769) | 0 | production · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` Math.max(0, business.capacity - business.output) ` |
| [hybrid.js:770](../source/hybrid.js.html#L770) | 0 | production · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` Math.max(0, h.background.capacity - h.background.output) ` |
| [hybrid.js:771](../source/hybrid.js.html#L771) | 0 | production · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` Math.max(0, seller.time) ` |
| [hybrid.js:771](../source/hybrid.js.html#L771) | 15 | production · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` Math.max(0, seller.time) * 15 ` |
| [hybrid.js:778](../source/hybrid.js.html#L778) | 1e-9 | production · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` quantity <= 1e-9 ` |
| [hybrid.js:780](../source/hybrid.js.html#L780) | 0.4 | production · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` 0.4 + 0.4 * seller.skill ` |
| [hybrid.js:780](../source/hybrid.js.html#L780) | 0.4 | production · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` 0.4 * seller.skill ` |
| [hybrid.js:780](../source/hybrid.js.html#L780) | 0.2 | production · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` 0.2 * seller.care.capability ` |
| [hybrid.js:781](../source/hybrid.js.html#L781) | 1 | production · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` operating = business ? clamp(0.4 + 0.4 * seller.skill + 0.2 * seller.care.capability) : 1 ` |
| [hybrid.js:785](../source/hybrid.js.html#L785) | 1e-9 | production · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` seller.balance + 1e-9 ` |
| [hybrid.js:793](../source/hybrid.js.html#L793) | 15 | production · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` deliver / 15 ` |
| [hybrid.js:819](../source/hybrid.js.html#L819) | 0 | production · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` sim.completeCorruption( [actor, counterpart], "procurement preference", 0, seller.id, false, x.id, ) ` |
| [hybrid.js:827](../source/hybrid.js.html#L827) | 1e-9 | production · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` x.remaining <= 1e-9 ` |
| [hybrid.js:829](../source/hybrid.js.html#L829) | 1e-9 | production · [AKX-ECO-03](../TECHNICAL.html#akx-eco-03), [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` x.remaining > 1e-9 ` |
| [hybrid.js:835](../source/hybrid.js.html#L835) | 1 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` o.category === 1 ` |
| [hybrid.js:839](../source/hybrid.js.html#L839) | 1 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` 1 - (1 - parameters.annualDepreciation) ** (1 / 12) ` |
| [hybrid.js:839](../source/hybrid.js.html#L839) | 1 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` 1 - parameters.annualDepreciation ` |
| [hybrid.js:839](../source/hybrid.js.html#L839) | 1 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` 1 / 12 ` |
| [hybrid.js:839](../source/hybrid.js.html#L839) | 12 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` 1 / 12 ` |
| [hybrid.js:840](../source/hybrid.js.html#L840) | 0 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` Math.max(0, e.capacity - depreciation) ` |
| [hybrid.js:852](../source/hybrid.js.html#L852) | 0.12 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` sim.relationship(leader, sim.agents[p.leader]).access > 0.12 ` |
| [hybrid.js:856](../source/hybrid.js.html#L856) | 0 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` Math.max(0, o.balance - reserve) ` |
| [hybrid.js:865](../source/hybrid.js.html#L865) | 0.15 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` 0.15 + (expected / Math.max(1, e.capacity)) * 0.2 ` |
| [hybrid.js:865](../source/hybrid.js.html#L865) | 1 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` Math.max(1, e.capacity) ` |
| [hybrid.js:865](../source/hybrid.js.html#L865) | 0.2 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` (expected / Math.max(1, e.capacity)) * 0.2 ` |
| [hybrid.js:865](../source/hybrid.js.html#L865) | 0.4 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` option( sim, "invest", [0.15 + (expected / Math.max(1, e.capacity)) * 0.2, 0.4, 0.3], related ? 0.25 : 0, ) ` |
| [hybrid.js:865](../source/hybrid.js.html#L865) | 0.3 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` option( sim, "invest", [0.15 + (expected / Math.max(1, e.capacity)) * 0.2, 0.4, 0.3], related ? 0.25 : 0, ) ` |
| [hybrid.js:866](../source/hybrid.js.html#L866) | 0.25 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` option( sim, "invest", [0.15 + (expected / Math.max(1, e.capacity)) * 0.2, 0.4, 0.3], related ? 0.25 : 0, ) ` |
| [hybrid.js:866](../source/hybrid.js.html#L866) | 0 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` option( sim, "invest", [0.15 + (expected / Math.max(1, e.capacity)) * 0.2, 0.4, 0.3], related ? 0.25 : 0, ) ` |
| [hybrid.js:868](../source/hybrid.js.html#L868) | 0.2 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` option(sim, "retain reserves", [0.2, 0.3, 0.05]) ` |
| [hybrid.js:868](../source/hybrid.js.html#L868) | 0.3 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` option(sim, "retain reserves", [0.2, 0.3, 0.05]) ` |
| [hybrid.js:868](../source/hybrid.js.html#L868) | 0.05 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` option(sim, "retain reserves", [0.2, 0.3, 0.05]) ` |
| [hybrid.js:869](../source/hybrid.js.html#L869) | 0.4 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` option(sim, "eligible distribution", [0.4, 0.05, 0]) ` |
| [hybrid.js:869](../source/hybrid.js.html#L869) | 0.05 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` option(sim, "eligible distribution", [0.4, 0.05, 0]) ` |
| [hybrid.js:869](../source/hybrid.js.html#L869) | 0 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` option(sim, "eligible distribution", [0.4, 0.05, 0]) ` |
| [hybrid.js:870](../source/hybrid.js.html#L870) | 0.65 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` option(sim, "divert entrusted funds", [0.65, -0.3, -0.4], 0.2, { corrupt: true, }) ` |
| [hybrid.js:870](../source/hybrid.js.html#L870) | -0.3 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` option(sim, "divert entrusted funds", [0.65, -0.3, -0.4], 0.2, { corrupt: true, }) ` |
| [hybrid.js:870](../source/hybrid.js.html#L870) | -0.4 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` option(sim, "divert entrusted funds", [0.65, -0.3, -0.4], 0.2, { corrupt: true, }) ` |
| [hybrid.js:870](../source/hybrid.js.html#L870) | 0.2 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` option(sim, "divert entrusted funds", [0.65, -0.3, -0.4], 0.2, { corrupt: true, }) ` |
| [hybrid.js:878](../source/hybrid.js.html#L878) | 0.1 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` cash > 0.1 ` |
| [hybrid.js:879](../source/hybrid.js.html#L879) | 0.01 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` personalTime(sim, leader, 0.01) ` |
| [hybrid.js:885](../source/hybrid.js.html#L885) | 0.1 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` cash * 0.1 ` |
| [hybrid.js:885](../source/hybrid.js.html#L885) | 10 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` Math.min(cash * 0.1, 10) ` |
| [hybrid.js:892](../source/hybrid.js.html#L892) | 0 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` work: 0 ` |
| [hybrid.js:893](../source/hybrid.js.html#L893) | 0.05 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` 0.05 + paid * 0.02 ` |
| [hybrid.js:893](../source/hybrid.js.html#L893) | 0.02 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` paid * 0.02 ` |
| [hybrid.js:896](../source/hybrid.js.html#L896) | 1 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` sim.month + 1 ` |
| [hybrid.js:897](../source/hybrid.js.html#L897) | 3 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` sim.rand("investment-delivery", o.id) * 3 ` |
| [hybrid.js:912](../source/hybrid.js.html#L912) | 0.1 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` cash > 0.1 ` |
| [hybrid.js:919](../source/hybrid.js.html#L919) | 0.08 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` cash * 0.08 ` |
| [hybrid.js:922](../source/hybrid.js.html#L922) | 0 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` taken > 0 ` |
| [hybrid.js:931](../source/hybrid.js.html#L931) | 0 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` cash > 0 ` |
| [hybrid.js:939](../source/hybrid.js.html#L939) | 0.05 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` cash * 0.05 ` |
| [hybrid.js:939](../source/hybrid.js.html#L939) | 1 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` Math.max(1, owners.length) ` |
| [hybrid.js:944](../source/hybrid.js.html#L944) | 0.15 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` 0.15 * (e.output - e.expectedDemand) ` |
| [hybrid.js:952](../source/hybrid.js.html#L952) | 0.1 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` Math.min(0.1, p.required - p.work) ` |
| [hybrid.js:955](../source/hybrid.js.html#L955) | 1e-10 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` p.work + 1e-10 ` |
| [hybrid.js:956](../source/hybrid.js.html#L956) | 12 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` 12 * parameters.capitalOutputYears ` |
| [hybrid.js:973](../source/hybrid.js.html#L973) | 12 | investment · [AKX-ECO-01](../TECHNICAL.html#akx-eco-01), [AKX-ECO-02](../TECHNICAL.html#akx-eco-02) | ` sim.month - 12 ` |
| [hybrid.js:980](../source/hybrid.js.html#L980) | 1 | taxation · [AKX-ECO-04](../TECHNICAL.html#akx-eco-04) | ` o.category === 1 ` |
| [hybrid.js:983](../source/hybrid.js.html#L983) | 0 | taxation · [AKX-ECO-04](../TECHNICAL.html#akx-eco-04) | ` Math.max(0, e.valueAdded) ` |
| [hybrid.js:988](../source/hybrid.js.html#L988) | 0.1 | taxation · [AKX-ECO-04](../TECHNICAL.html#akx-eco-04) | ` option(sim, "declare and pay", [-potential, 0.1, 0.5]) ` |
| [hybrid.js:988](../source/hybrid.js.html#L988) | 0.5 | taxation · [AKX-ECO-04](../TECHNICAL.html#akx-eco-04) | ` option(sim, "declare and pay", [-potential, 0.1, 0.5]) ` |
| [hybrid.js:992](../source/hybrid.js.html#L992) | 0.3 | taxation · [AKX-ECO-04](../TECHNICAL.html#akx-eco-04) | ` potential * 0.3 ` |
| [hybrid.js:992](../source/hybrid.js.html#L992) | 0.3 | taxation · [AKX-ECO-04](../TECHNICAL.html#akx-eco-04) | ` option( sim, "conceal taxable activity", [potential * 0.3, 0.3, -0.4], 0.1, { corrupt: true }, ) ` |
| [hybrid.js:992](../source/hybrid.js.html#L992) | -0.4 | taxation · [AKX-ECO-04](../TECHNICAL.html#akx-eco-04) | ` option( sim, "conceal taxable activity", [potential * 0.3, 0.3, -0.4], 0.1, { corrupt: true }, ) ` |
| [hybrid.js:993](../source/hybrid.js.html#L993) | 0.1 | taxation · [AKX-ECO-04](../TECHNICAL.html#akx-eco-04) | ` option( sim, "conceal taxable activity", [potential * 0.3, 0.3, -0.4], 0.1, { corrupt: true }, ) ` |
| [hybrid.js:999](../source/hybrid.js.html#L999) | 0.15 | taxation · [AKX-ECO-04](../TECHNICAL.html#akx-eco-04) | ` potential * 0.15 ` |
| [hybrid.js:999](../source/hybrid.js.html#L999) | 0.2 | taxation · [AKX-ECO-04](../TECHNICAL.html#akx-eco-04) | ` option( sim, "request favorable treatment", [potential * 0.15, 0.2, -0.2], 0.2, { corrupt: true }, ) ` |
| [hybrid.js:999](../source/hybrid.js.html#L999) | -0.2 | taxation · [AKX-ECO-04](../TECHNICAL.html#akx-eco-04) | ` option( sim, "request favorable treatment", [potential * 0.15, 0.2, -0.2], 0.2, { corrupt: true }, ) ` |
| [hybrid.js:1000](../source/hybrid.js.html#L1000) | 0.2 | taxation · [AKX-ECO-04](../TECHNICAL.html#akx-eco-04) | ` option( sim, "request favorable treatment", [potential * 0.15, 0.2, -0.2], 0.2, { corrupt: true }, ) ` |
| [hybrid.js:1008](../source/hybrid.js.html#L1008) | 0 | taxation · [AKX-ECO-04](../TECHNICAL.html#akx-eco-04) | ` collectorOrg = sim.publicOrgs.find((q) => q.fn === "service") &#124;&#124; sim.publicOrgs[0] ` |
| [hybrid.js:1015](../source/hybrid.js.html#L1015) | 1 | taxation · [AKX-ECO-04](../TECHNICAL.html#akx-eco-04) | ` liability *= detected ? 1 : 0.6 ` |
| [hybrid.js:1015](../source/hybrid.js.html#L1015) | 0.6 | taxation · [AKX-ECO-04](../TECHNICAL.html#akx-eco-04) | ` liability *= detected ? 1 : 0.6 ` |
| [hybrid.js:1016](../source/hybrid.js.html#L1016) | 0 | taxation · [AKX-ECO-04](../TECHNICAL.html#akx-eco-04) | ` potential > 0 ` |
| [hybrid.js:1020](../source/hybrid.js.html#L1020) | 0 | taxation · [AKX-ECO-04](../TECHNICAL.html#akx-eco-04) | ` sim.completeCorruption( [leader], "tax concealment", 0, o.id, false, "hybrid-tax-" + o.id, ) ` |
| [hybrid.js:1028](../source/hybrid.js.html#L1028) | 0.01 | taxation · [AKX-ECO-04](../TECHNICAL.html#akx-eco-04) | ` personalTime(sim, collector, 0.01) ` |
| [hybrid.js:1034](../source/hybrid.js.html#L1034) | 0 | taxation · [AKX-ECO-04](../TECHNICAL.html#akx-eco-04) | ` option(sim, "apply assessment rule", [0, 0.1, 0.4]) ` |
| [hybrid.js:1034](../source/hybrid.js.html#L1034) | 0.1 | taxation · [AKX-ECO-04](../TECHNICAL.html#akx-eco-04) | ` option(sim, "apply assessment rule", [0, 0.1, 0.4]) ` |
| [hybrid.js:1034](../source/hybrid.js.html#L1034) | 0.4 | taxation · [AKX-ECO-04](../TECHNICAL.html#akx-eco-04) | ` option(sim, "apply assessment rule", [0, 0.1, 0.4]) ` |
| [hybrid.js:1035](../source/hybrid.js.html#L1035) | 0.3 | taxation · [AKX-ECO-04](../TECHNICAL.html#akx-eco-04) | ` option(sim, "grant improper concession", [0.3, 0.25, -0.5], 0.2, { corrupt: true, }) ` |
| [hybrid.js:1035](../source/hybrid.js.html#L1035) | 0.25 | taxation · [AKX-ECO-04](../TECHNICAL.html#akx-eco-04) | ` option(sim, "grant improper concession", [0.3, 0.25, -0.5], 0.2, { corrupt: true, }) ` |
| [hybrid.js:1035](../source/hybrid.js.html#L1035) | -0.5 | taxation · [AKX-ECO-04](../TECHNICAL.html#akx-eco-04) | ` option(sim, "grant improper concession", [0.3, 0.25, -0.5], 0.2, { corrupt: true, }) ` |
| [hybrid.js:1035](../source/hybrid.js.html#L1035) | 0.2 | taxation · [AKX-ECO-04](../TECHNICAL.html#akx-eco-04) | ` option(sim, "grant improper concession", [0.3, 0.25, -0.5], 0.2, { corrupt: true, }) ` |
| [hybrid.js:1042](../source/hybrid.js.html#L1042) | 0.7 | taxation · [AKX-ECO-04](../TECHNICAL.html#akx-eco-04) | ` liability *= 0.7 ` |
| [hybrid.js:1046](../source/hybrid.js.html#L1046) | 0 | taxation · [AKX-ECO-04](../TECHNICAL.html#akx-eco-04) | ` sim.completeCorruption( [leader, collector], "tax concession", 0, o.id, false, "hybrid-concession-" + o.id, ) ` |
| [hybrid.js:1059](../source/hybrid.js.html#L1059) | 0.25 | taxation · [AKX-ECO-04](../TECHNICAL.html#akx-eco-04) | ` o.balance * 0.25 ` |
| [hybrid.js:1062](../source/hybrid.js.html#L1062) | 0 | taxation · [AKX-ECO-04](../TECHNICAL.html#akx-eco-04) | ` Math.max(0, e.taxArrears - received) ` |
| [hybrid.js:1099](../source/hybrid.js.html#L1099) | 0 | review · [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` reviewer = sim.agents[reviewers[0]] ` |
| [hybrid.js:1103](../source/hybrid.js.html#L1103) | 0.015 | review · [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` personalTime(sim, reviewer, 0.015) ` |
| [hybrid.js:1110](../source/hybrid.js.html#L1110) | -0.1 | review · [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` option(sim, "block improper action", [-0.1, 0.2, 0.6]) ` |
| [hybrid.js:1110](../source/hybrid.js.html#L1110) | 0.2 | review · [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` option(sim, "block improper action", [-0.1, 0.2, 0.6]) ` |
| [hybrid.js:1110](../source/hybrid.js.html#L1110) | 0.6 | review · [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` option(sim, "block improper action", [-0.1, 0.2, 0.6]) ` |
| [hybrid.js:1111](../source/hybrid.js.html#L1111) | 0.2 | review · [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` option(sim, "permit action", [0.2, 0.1, -0.3], 0.1, { corrupt: true }) ` |
| [hybrid.js:1111](../source/hybrid.js.html#L1111) | 0.1 | review · [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` option(sim, "permit action", [0.2, 0.1, -0.3], 0.1, { corrupt: true }) ` |
| [hybrid.js:1111](../source/hybrid.js.html#L1111) | -0.3 | review · [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` option(sim, "permit action", [0.2, 0.1, -0.3], 0.1, { corrupt: true }) ` |
| [hybrid.js:1111](../source/hybrid.js.html#L1111) | 0.1 | review · [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` option(sim, "permit action", [0.2, 0.1, -0.3], 0.1, { corrupt: true }) ` |
| [hybrid.js:1124](../source/hybrid.js.html#L1124) | 1 | review · [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` observe(sim, actor, "governance", reviewer.id, 1, 0.8, key) ` |
| [hybrid.js:1124](../source/hybrid.js.html#L1124) | 0.8 | review · [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` observe(sim, actor, "governance", reviewer.id, 1, 0.8, key) ` |
| [hybrid.js:1133](../source/hybrid.js.html#L1133) | 2 | propose · [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` o.category === 2 ` |
| [hybrid.js:1141](../source/hybrid.js.html#L1141) | 0.02 | propose · [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` personalTime(sim, proposer, 0.02) ` |
| [hybrid.js:1141](../source/hybrid.js.html#L1141) | 0.05 | propose · [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` o.balance < 0.05 ` |
| [hybrid.js:1142](../source/hybrid.js.html#L1142) | 0.05 | propose · [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` move(sim, o, sim.state.outside, 0.05, "governance proposal preparation") ` |
| [hybrid.js:1156](../source/hybrid.js.html#L1156) | 0 | propose · [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` work: 0 ` |
| [hybrid.js:1175](../source/hybrid.js.html#L1175) | 6 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` sim.month % 6 ` |
| [hybrid.js:1175](../source/hybrid.js.html#L1175) | 0 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` sim.month % 6 === 0 ` |
| [hybrid.js:1179](../source/hybrid.js.html#L1179) | 2 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` o.category === 2 ` |
| [hybrid.js:1185](../source/hybrid.js.html#L1185) | 0.1 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` option(sim, "retain rules", [0.1, 0.1, 0.1]) ` |
| [hybrid.js:1185](../source/hybrid.js.html#L1185) | 0.1 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` option(sim, "retain rules", [0.1, 0.1, 0.1]) ` |
| [hybrid.js:1185](../source/hybrid.js.html#L1185) | 0.1 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` option(sim, "retain rules", [0.1, 0.1, 0.1]) ` |
| [hybrid.js:1186](../source/hybrid.js.html#L1186) | -0.1 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` option(sim, "strengthen oversight", [-0.1, 0.2, 0.6]) ` |
| [hybrid.js:1186](../source/hybrid.js.html#L1186) | 0.2 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` option(sim, "strengthen oversight", [-0.1, 0.2, 0.6]) ` |
| [hybrid.js:1186](../source/hybrid.js.html#L1186) | 0.6 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` option(sim, "strengthen oversight", [-0.1, 0.2, 0.6]) ` |
| [hybrid.js:1187](../source/hybrid.js.html#L1187) | 0.25 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` option(sim, "weaken oversight", [0.25, 0.3, -0.4], 0.2) ` |
| [hybrid.js:1187](../source/hybrid.js.html#L1187) | 0.3 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` option(sim, "weaken oversight", [0.25, 0.3, -0.4], 0.2) ` |
| [hybrid.js:1187](../source/hybrid.js.html#L1187) | -0.4 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` option(sim, "weaken oversight", [0.25, 0.3, -0.4], 0.2) ` |
| [hybrid.js:1187](../source/hybrid.js.html#L1187) | 0.2 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` option(sim, "weaken oversight", [0.25, 0.3, -0.4], 0.2) ` |
| [hybrid.js:1188](../source/hybrid.js.html#L1188) | -0.1 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` option(sim, "leadership protection", [-0.1, 0.2, 0.4]) ` |
| [hybrid.js:1188](../source/hybrid.js.html#L1188) | 0.2 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` option(sim, "leadership protection", [-0.1, 0.2, 0.4]) ` |
| [hybrid.js:1188](../source/hybrid.js.html#L1188) | 0.4 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` option(sim, "leadership protection", [-0.1, 0.2, 0.4]) ` |
| [hybrid.js:1189](../source/hybrid.js.html#L1189) | -0.1 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` option(sim, "disclosure rights", [-0.1, 0.2, 0.5]) ` |
| [hybrid.js:1189](../source/hybrid.js.html#L1189) | 0.2 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` option(sim, "disclosure rights", [-0.1, 0.2, 0.5]) ` |
| [hybrid.js:1189](../source/hybrid.js.html#L1189) | 0.5 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` option(sim, "disclosure rights", [-0.1, 0.2, 0.5]) ` |
| [hybrid.js:1190](../source/hybrid.js.html#L1190) | 0.1 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` option(sim, "appoint leader", [0.1, 0.3, 0.3], 0.2) ` |
| [hybrid.js:1190](../source/hybrid.js.html#L1190) | 0.3 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` option(sim, "appoint leader", [0.1, 0.3, 0.3], 0.2) ` |
| [hybrid.js:1190](../source/hybrid.js.html#L1190) | 0.3 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` option(sim, "appoint leader", [0.1, 0.3, 0.3], 0.2) ` |
| [hybrid.js:1190](../source/hybrid.js.html#L1190) | 0.2 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` option(sim, "appoint leader", [0.1, 0.3, 0.3], 0.2) ` |
| [hybrid.js:1198](../source/hybrid.js.html#L1198) | 0 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` staff(sim, o) .filter((a) => a.id !== o.leader) .slice(0, 8) ` |
| [hybrid.js:1198](../source/hybrid.js.html#L1198) | 8 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` staff(sim, o) .filter((a) => a.id !== o.leader) .slice(0, 8) ` |
| [hybrid.js:1207](../source/hybrid.js.html#L1207) | 0.25 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` sim.relationship(proposer, a).access * 0.25 ` |
| [hybrid.js:1207](../source/hybrid.js.html#L1207) | 0.2 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` option( sim, String(a.id), [sim.relationship(proposer, a).access * 0.25, 0.2, a.skill], a.skill * 0.2, ) ` |
| [hybrid.js:1208](../source/hybrid.js.html#L1208) | 0.2 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` a.skill * 0.2 ` |
| [hybrid.js:1229](../source/hybrid.js.html#L1229) | -0.15 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` o.governance[target] + (choice === "weaken oversight" ? -0.15 : 0.15) ` |
| [hybrid.js:1229](../source/hybrid.js.html#L1229) | 0.15 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` o.governance[target] + (choice === "weaken oversight" ? -0.15 : 0.15) ` |
| [hybrid.js:1237](../source/hybrid.js.html#L1237) | 0.015 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` personalTime(sim, worker, 0.015) ` |
| [hybrid.js:1237](../source/hybrid.js.html#L1237) | 0.015 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` p.work += 0.015 ` |
| [hybrid.js:1241](../source/hybrid.js.html#L1241) | 0.01 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` personalTime(sim, sim.agents[id], 0.01) ` |
| [hybrid.js:1250](../source/hybrid.js.html#L1250) | 0.1 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` option(sim, "approve", [ 0.1, affinity, p.kind === "appointment" ? sim.agents[p.target].skill : p.value, ]) ` |
| [hybrid.js:1254](../source/hybrid.js.html#L1254) | 0.2 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` option(sim, "oppose", [0.2, 0.15, 0.2]) ` |
| [hybrid.js:1254](../source/hybrid.js.html#L1254) | 0.15 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` option(sim, "oppose", [0.2, 0.15, 0.2]) ` |
| [hybrid.js:1254](../source/hybrid.js.html#L1254) | 0.2 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` option(sim, "oppose", [0.2, 0.15, 0.2]) ` |
| [hybrid.js:1262](../source/hybrid.js.html#L1262) | 0.03 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` p.work < 0.03 ` |
| [hybrid.js:1267](../source/hybrid.js.html#L1267) | 2 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` p.approvers.length / 2 ` |
| [hybrid.js:1270](../source/hybrid.js.html#L1270) | 0.7 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` Math.max(p.originalProtection, o.governance.removalProtection) > 0.7 ` |
| [hybrid.js:1282](../source/hybrid.js.html#L1282) | 0.3 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` observe(sim, sim.agents[old], "governance", p.proposer, 0.3, 1, p.id) ` |
| [hybrid.js:1282](../source/hybrid.js.html#L1282) | 1 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` observe(sim, sim.agents[old], "governance", p.proposer, 0.3, 1, p.id) ` |
| [hybrid.js:1301](../source/hybrid.js.html#L1301) | 24 | governance · [AKX-AGY-01](../TECHNICAL.html#akx-agy-01), [AKX-GOV-02](../TECHNICAL.html#akx-gov-02), [AKX-GOV-03](../TECHNICAL.html#akx-gov-03) | ` sim.month - 24 ` |
| [hybrid.js:1309](../source/hybrid.js.html#L1309) | 3 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` sim.month % 3 ` |
| [hybrid.js:1309](../source/hybrid.js.html#L1309) | 0 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` sim.month % 3 === 0 ` |
| [hybrid.js:1310](../source/hybrid.js.html#L1310) | 2 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` o.category !== 2 ` |
| [hybrid.js:1310](../source/hybrid.js.html#L1310) | 0 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` sim.orgs.filter((o) => o.category !== 2).slice(0, 8) ` |
| [hybrid.js:1310](../source/hybrid.js.html#L1310) | 8 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` sim.orgs.filter((o) => o.category !== 2).slice(0, 8) ` |
| [hybrid.js:1326](../source/hybrid.js.html#L1326) | 0.5 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` value: 0.5 ` |
| [hybrid.js:1327](../source/hybrid.js.html#L1327) | 0.5 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` performance: 0.5 ` |
| [hybrid.js:1329](../source/hybrid.js.html#L1329) | 0.25 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` attention = leader.hybrid.attention[issue] ?? 0.25 ` |
| [hybrid.js:1337](../source/hybrid.js.html#L1337) | -0.1 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` option( sim, "organize support", [-0.1, beliefs.value, 0.4], attention, ) ` |
| [hybrid.js:1337](../source/hybrid.js.html#L1337) | 0.4 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` option( sim, "organize support", [-0.1, beliefs.value, 0.4], attention, ) ` |
| [hybrid.js:1343](../source/hybrid.js.html#L1343) | 0.2 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` option( sim, "organize opposition", [0.2, 1 - beliefs.value, -0.1], attention, ) ` |
| [hybrid.js:1343](../source/hybrid.js.html#L1343) | 1 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` 1 - beliefs.value ` |
| [hybrid.js:1343](../source/hybrid.js.html#L1343) | -0.1 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` option( sim, "organize opposition", [0.2, 1 - beliefs.value, -0.1], attention, ) ` |
| [hybrid.js:1346](../source/hybrid.js.html#L1346) | 0.2 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` option(sim, "do not mobilize", [0.2, 0.1, 0]) ` |
| [hybrid.js:1346](../source/hybrid.js.html#L1346) | 0.1 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` option(sim, "do not mobilize", [0.2, 0.1, 0]) ` |
| [hybrid.js:1346](../source/hybrid.js.html#L1346) | 0 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` option(sim, "do not mobilize", [0.2, 0.1, 0]) ` |
| [hybrid.js:1352](../source/hybrid.js.html#L1352) | 0.02 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` personalTime(sim, leader, 0.02) ` |
| [hybrid.js:1353](../source/hybrid.js.html#L1353) | 0.05 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` leader.balance < 0.05 ` |
| [hybrid.js:1361](../source/hybrid.js.html#L1361) | 0 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` balance: 0 ` |
| [hybrid.js:1365](../source/hybrid.js.html#L1365) | 0 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` delivered: 0 ` |
| [hybrid.js:1380](../source/hybrid.js.html#L1380) | -0.05 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` option(sim, "commit", [ -0.05, a.hybrid.beliefs[issue]?.value ?? 0.5, 0.4, ]) ` |
| [hybrid.js:1381](../source/hybrid.js.html#L1381) | 0.5 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` option(sim, "commit", [ -0.05, a.hybrid.beliefs[issue]?.value ?? 0.5, 0.4, ]) ` |
| [hybrid.js:1382](../source/hybrid.js.html#L1382) | 0.4 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` option(sim, "commit", [ -0.05, a.hybrid.beliefs[issue]?.value ?? 0.5, 0.4, ]) ` |
| [hybrid.js:1384](../source/hybrid.js.html#L1384) | 0.1 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` option(sim, "decline", [0.1, 0, 0]) ` |
| [hybrid.js:1384](../source/hybrid.js.html#L1384) | 0 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` option(sim, "decline", [0.1, 0, 0]) ` |
| [hybrid.js:1384](../source/hybrid.js.html#L1384) | 0 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` option(sim, "decline", [0.1, 0, 0]) ` |
| [hybrid.js:1388](../source/hybrid.js.html#L1388) | 0.05 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` a.balance >= 0.05 ` |
| [hybrid.js:1388](../source/hybrid.js.html#L1388) | 0.01 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` personalTime(sim, a, 0.01) ` |
| [hybrid.js:1393](../source/hybrid.js.html#L1393) | 0.05 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` move( sim, a, c, 0.05, "reserved private coalition contribution", ) ` |
| [hybrid.js:1396](../source/hybrid.js.html#L1396) | 0 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` delivered: 0 ` |
| [hybrid.js:1420](../source/hybrid.js.html#L1420) | -0.02 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` option( sim, "contribute work", [-0.02, a.hybrid.beliefs[c.issue]?.value ?? 0.5, 0.3], a.hybrid.attention[c.issue] ?? 0.2, ) ` |
| [hybrid.js:1420](../source/hybrid.js.html#L1420) | 0.5 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` option( sim, "contribute work", [-0.02, a.hybrid.beliefs[c.issue]?.value ?? 0.5, 0.3], a.hybrid.attention[c.issue] ?? 0.2, ) ` |
| [hybrid.js:1420](../source/hybrid.js.html#L1420) | 0.3 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` option( sim, "contribute work", [-0.02, a.hybrid.beliefs[c.issue]?.value ?? 0.5, 0.3], a.hybrid.attention[c.issue] ?? 0.2, ) ` |
| [hybrid.js:1421](../source/hybrid.js.html#L1421) | 0.2 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` option( sim, "contribute work", [-0.02, a.hybrid.beliefs[c.issue]?.value ?? 0.5, 0.3], a.hybrid.attention[c.issue] ?? 0.2, ) ` |
| [hybrid.js:1423](../source/hybrid.js.html#L1423) | 0.15 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` option(sim, "withdraw backing", [0.15, 0, 0]) ` |
| [hybrid.js:1423](../source/hybrid.js.html#L1423) | 0 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` option(sim, "withdraw backing", [0.15, 0, 0]) ` |
| [hybrid.js:1423](../source/hybrid.js.html#L1423) | 0 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` option(sim, "withdraw backing", [0.15, 0, 0]) ` |
| [hybrid.js:1435](../source/hybrid.js.html#L1435) | 0 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` m.reserve = 0 ` |
| [hybrid.js:1438](../source/hybrid.js.html#L1438) | 0.005 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` m.reserve > 0.005 ` |
| [hybrid.js:1438](../source/hybrid.js.html#L1438) | 0.015 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` personalTime(sim, a, 0.015) ` |
| [hybrid.js:1443](../source/hybrid.js.html#L1443) | 0.005 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` move( sim, c, sim.state.outside, 0.005, "performed advocacy and coalition communication", ) ` |
| [hybrid.js:1449](../source/hybrid.js.html#L1449) | 0.6 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` observe(sim, a, c.issue, c.leader, 0.6, 0.6, c.id + "-" + sim.month) ` |
| [hybrid.js:1449](../source/hybrid.js.html#L1449) | 0.6 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` observe(sim, a, c.issue, c.leader, 0.6, 0.6, c.id + "-" + sim.month) ` |
| [hybrid.js:1456](../source/hybrid.js.html#L1456) | 0.65 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` observe( sim, peer, c.issue, c.leader, c.stance === "organize support" ? 0.65 : 0.35, weight, c.id + "-" + sim.month, ) ` |
| [hybrid.js:1456](../source/hybrid.js.html#L1456) | 0.35 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` observe( sim, peer, c.issue, c.leader, c.stance === "organize support" ? 0.65 : 0.35, weight, c.id + "-" + sim.month, ) ` |
| [hybrid.js:1463](../source/hybrid.js.html#L1463) | 0.005 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` m.reserve < 0.005 ` |
| [hybrid.js:1464](../source/hybrid.js.html#L1464) | 24 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` sim.month - c.opened > 24 ` |
| [hybrid.js:1481](../source/hybrid.js.html#L1481) | 1e-10 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` c.balance > 1e-10 ` |
| [hybrid.js:1482](../source/hybrid.js.html#L1482) | 12 | coalitions · [AKX-COL-01](../TECHNICAL.html#akx-col-01), [AKX-ATT-01](../TECHNICAL.html#akx-att-01) | ` sim.month - 12 ` |
| [hybrid.js:1489](../source/hybrid.js.html#L1489) | 0 | responses · [AKX-STR-01](../TECHNICAL.html#akx-str-01) | ` c.delivered > 0 ` |
| [hybrid.js:1498](../source/hybrid.js.html#L1498) | 0.005 | responses · [AKX-STR-01](../TECHNICAL.html#akx-str-01) | ` personalTime(sim, a, 0.005) ` |
| [hybrid.js:1503](../source/hybrid.js.html#L1503) | -0.1 | responses · [AKX-STR-01](../TECHNICAL.html#akx-str-01) | ` option(sim, "substantive response", [-0.1, 0.3, 0.6]) ` |
| [hybrid.js:1503](../source/hybrid.js.html#L1503) | 0.3 | responses · [AKX-STR-01](../TECHNICAL.html#akx-str-01) | ` option(sim, "substantive response", [-0.1, 0.3, 0.6]) ` |
| [hybrid.js:1503](../source/hybrid.js.html#L1503) | 0.6 | responses · [AKX-STR-01](../TECHNICAL.html#akx-str-01) | ` option(sim, "substantive response", [-0.1, 0.3, 0.6]) ` |
| [hybrid.js:1504](../source/hybrid.js.html#L1504) | 0.15 | responses · [AKX-STR-01](../TECHNICAL.html#akx-str-01) | ` option(sim, "symbolic commitment", [0.15, 0.2, 0]) ` |
| [hybrid.js:1504](../source/hybrid.js.html#L1504) | 0.2 | responses · [AKX-STR-01](../TECHNICAL.html#akx-str-01) | ` option(sim, "symbolic commitment", [0.15, 0.2, 0]) ` |
| [hybrid.js:1504](../source/hybrid.js.html#L1504) | 0 | responses · [AKX-STR-01](../TECHNICAL.html#akx-str-01) | ` option(sim, "symbolic commitment", [0.15, 0.2, 0]) ` |
| [hybrid.js:1505](../source/hybrid.js.html#L1505) | 0.2 | responses · [AKX-STR-01](../TECHNICAL.html#akx-str-01) | ` option(sim, "reframe demand", [0.2, 0.25, -0.1]) ` |
| [hybrid.js:1505](../source/hybrid.js.html#L1505) | 0.25 | responses · [AKX-STR-01](../TECHNICAL.html#akx-str-01) | ` option(sim, "reframe demand", [0.2, 0.25, -0.1]) ` |
| [hybrid.js:1505](../source/hybrid.js.html#L1505) | -0.1 | responses · [AKX-STR-01](../TECHNICAL.html#akx-str-01) | ` option(sim, "reframe demand", [0.2, 0.25, -0.1]) ` |
| [hybrid.js:1506](../source/hybrid.js.html#L1506) | 0.2 | responses · [AKX-STR-01](../TECHNICAL.html#akx-str-01) | ` option(sim, "seek obstruction", [0.2, 0.3, -0.3], 0.2) ` |
| [hybrid.js:1506](../source/hybrid.js.html#L1506) | 0.3 | responses · [AKX-STR-01](../TECHNICAL.html#akx-str-01) | ` option(sim, "seek obstruction", [0.2, 0.3, -0.3], 0.2) ` |
| [hybrid.js:1506](../source/hybrid.js.html#L1506) | -0.3 | responses · [AKX-STR-01](../TECHNICAL.html#akx-str-01) | ` option(sim, "seek obstruction", [0.2, 0.3, -0.3], 0.2) ` |
| [hybrid.js:1506](../source/hybrid.js.html#L1506) | 0.2 | responses · [AKX-STR-01](../TECHNICAL.html#akx-str-01) | ` option(sim, "seek obstruction", [0.2, 0.3, -0.3], 0.2) ` |
| [hybrid.js:1516](../source/hybrid.js.html#L1516) | 0.6 | responses · [AKX-STR-01](../TECHNICAL.html#akx-str-01) | ` observe( sim, a, c.issue, c.leader, 0.6, 0.8, c.id + "-demand-" + sim.month, ) ` |
| [hybrid.js:1517](../source/hybrid.js.html#L1517) | 0.8 | responses · [AKX-STR-01](../TECHNICAL.html#akx-str-01) | ` observe( sim, a, c.issue, c.leader, 0.6, 0.8, c.id + "-demand-" + sim.month, ) ` |
| [hybrid.js:1520](../source/hybrid.js.html#L1520) | 3 | responses · [AKX-STR-01](../TECHNICAL.html#akx-str-01) | ` sim.month + 3 ` |
| [hybrid.js:1528](../source/hybrid.js.html#L1528) | 0.15 | responses · [AKX-STR-01](../TECHNICAL.html#akx-str-01) | ` org.governance.oversight - 0.15 ` |
| [hybrid.js:1530](../source/hybrid.js.html#L1530) | 0.01 | responses · [AKX-STR-01](../TECHNICAL.html#akx-str-01) | ` org.balance >= 0.01 ` |
| [hybrid.js:1535](../source/hybrid.js.html#L1535) | 0.01 | responses · [AKX-STR-01](../TECHNICAL.html#akx-str-01) | ` move( sim, org, sim.state.outside, 0.01, "public communication responding to a demand", ) ` |
| [hybrid.js:1544](../source/hybrid.js.html#L1544) | 0.6 | responses · [AKX-STR-01](../TECHNICAL.html#akx-str-01) | ` observe( sim, sim.agents[m.id], c.issue, a.id, d.name === "symbolic commitment" ? 0.6 : 0.35, 0.3, "claim-" + c.id + "-" + sim.month, ) ` |
| [hybrid.js:1544](../source/hybrid.js.html#L1544) | 0.35 | responses · [AKX-STR-01](../TECHNICAL.html#akx-str-01) | ` observe( sim, sim.agents[m.id], c.issue, a.id, d.name === "symbolic commitment" ? 0.6 : 0.35, 0.3, "claim-" + c.id + "-" + sim.month, ) ` |
| [hybrid.js:1545](../source/hybrid.js.html#L1545) | 0.3 | responses · [AKX-STR-01](../TECHNICAL.html#akx-str-01) | ` observe( sim, sim.agents[m.id], c.issue, a.id, d.name === "symbolic commitment" ? 0.6 : 0.35, 0.3, "claim-" + c.id + "-" + sim.month, ) ` |
| [hybrid.js:1549](../source/hybrid.js.html#L1549) | 6 | responses · [AKX-STR-01](../TECHNICAL.html#akx-str-01) | ` sim.month % 6 ` |
| [hybrid.js:1549](../source/hybrid.js.html#L1549) | 0 | responses · [AKX-STR-01](../TECHNICAL.html#akx-str-01) | ` sim.month % 6 === 0 ` |
| [hybrid.js:1568](../source/hybrid.js.html#L1568) | 1 | encounters · [AKX-ENC-01](../TECHNICAL.html#akx-enc-01) | ` product = 1 ` |
| [hybrid.js:1569](../source/hybrid.js.html#L1569) | -1 | encounters · [AKX-ENC-01](../TECHNICAL.html#akx-enc-01) | ` n = -1 ` |
| [hybrid.js:1574](../source/hybrid.js.html#L1574) | 0 | encounters · [AKX-ENC-01](../TECHNICAL.html#akx-enc-01) | ` i = 0 ` |
| [hybrid.js:1577](../source/hybrid.js.html#L1577) | 0 | encounters · [AKX-ENC-01](../TECHNICAL.html#akx-enc-01) | ` a.role === 0 ` |
| [hybrid.js:1579](../source/hybrid.js.html#L1579) | 6 | encounters · [AKX-ENC-01](../TECHNICAL.html#akx-enc-01) | ` sim.state.politics.nextReview - sim.month <= 6 ` |
| [hybrid.js:1580](../source/hybrid.js.html#L1580) | 0.04 | encounters · [AKX-ENC-01](../TECHNICAL.html#akx-enc-01) | ` sim.rand("hybrid-campaign-contact", a.id) < 0.04 ` |
| [hybrid.js:1595](../source/hybrid.js.html#L1595) | 1 | encounters · [AKX-ENC-01](../TECHNICAL.html#akx-enc-01) | ` (pending.attempts &#124;&#124; 1) + 1 ` |
| [hybrid.js:1595](../source/hybrid.js.html#L1595) | 1 | encounters · [AKX-ENC-01](../TECHNICAL.html#akx-enc-01) | ` (pending.attempts &#124;&#124; 1) + 1 ` |
| [hybrid.js:1598](../source/hybrid.js.html#L1598) | 6 | encounters · [AKX-ENC-01](../TECHNICAL.html#akx-enc-01) | ` sim.month - pending.arrival >= 6 ` |
| [hybrid.js:1603](../source/hybrid.js.html#L1603) | -0.05 | encounters · [AKX-ENC-01](../TECHNICAL.html#akx-enc-01) | ` option(sim, "continue waiting", [-0.05, 0.1, 0.3]) ` |
| [hybrid.js:1603](../source/hybrid.js.html#L1603) | 0.1 | encounters · [AKX-ENC-01](../TECHNICAL.html#akx-enc-01) | ` option(sim, "continue waiting", [-0.05, 0.1, 0.3]) ` |
| [hybrid.js:1603](../source/hybrid.js.html#L1603) | 0.3 | encounters · [AKX-ENC-01](../TECHNICAL.html#akx-enc-01) | ` option(sim, "continue waiting", [-0.05, 0.1, 0.3]) ` |
| [hybrid.js:1604](../source/hybrid.js.html#L1604) | 0.1 | encounters · [AKX-ENC-01](../TECHNICAL.html#akx-enc-01) | ` option(sim, "abandon request", [0.1, 0, -0.1]) ` |
| [hybrid.js:1604](../source/hybrid.js.html#L1604) | 0 | encounters · [AKX-ENC-01](../TECHNICAL.html#akx-enc-01) | ` option(sim, "abandon request", [0.1, 0, -0.1]) ` |
| [hybrid.js:1604](../source/hybrid.js.html#L1604) | -0.1 | encounters · [AKX-ENC-01](../TECHNICAL.html#akx-enc-01) | ` option(sim, "abandon request", [0.1, 0, -0.1]) ` |
| [hybrid.js:1609](../source/hybrid.js.html#L1609) | 1 | encounters · [AKX-ENC-01](../TECHNICAL.html#akx-enc-01) | ` sim.state.services.splice(sim.state.services.indexOf(pending), 1) ` |
| [hybrid.js:1611](../source/hybrid.js.html#L1611) | 0 | encounters · [AKX-ENC-01](../TECHNICAL.html#akx-enc-01) | ` (h.counters.abandonedRequests &#124;&#124; 0) + 1 ` |
| [hybrid.js:1611](../source/hybrid.js.html#L1611) | 1 | encounters · [AKX-ENC-01](../TECHNICAL.html#akx-enc-01) | ` (h.counters.abandonedRequests &#124;&#124; 0) + 1 ` |
| [hybrid.js:1617](../source/hybrid.js.html#L1617) | 3 | encounters · [AKX-ENC-01](../TECHNICAL.html#akx-enc-01) | ` sim.nearest(a, sim.roles[3], "repeat-campaign") ` |
| [hybrid.js:1620](../source/hybrid.js.html#L1620) | 1 | encounters · [AKX-ENC-01](../TECHNICAL.html#akx-enc-01) | ` a.role === 1 ` |
| [hybrid.js:1621](../source/hybrid.js.html#L1621) | 0.12 | encounters · [AKX-ENC-01](../TECHNICAL.html#akx-enc-01) | ` sim.rand("contact-kind", a.id, event.i) < 0.12 ` |
| [hybrid.js:1623](../source/hybrid.js.html#L1623) | 3 | encounters · [AKX-ENC-01](../TECHNICAL.html#akx-enc-01) | ` sim.nearest(a, sim.roles[3], "repeat-political-" + event.i) ` |
| [hybrid.js:1625](../source/hybrid.js.html#L1625) | 3 | encounters · [AKX-ENC-01](../TECHNICAL.html#akx-enc-01) | ` a.role === 3 ` |
| [hybrid.js:1626](../source/hybrid.js.html#L1626) | 2 | encounters · [AKX-ENC-01](../TECHNICAL.html#akx-enc-01) | ` sim.nearest(a, sim.roles[2], "repeat-pressure-" + event.i) ` |
| [hybrid.js:1631](../source/hybrid.js.html#L1631) | 2 | encounters · [AKX-ENC-01](../TECHNICAL.html#akx-enc-01) | ` sim.roles[2].filter((b) => sim.orgs[b.org].fn === "service") ` |
| [hybrid.js:1634](../source/hybrid.js.html#L1634) | 1 | encounters · [AKX-ENC-01](../TECHNICAL.html#akx-enc-01) | ` a.role === 1 ` |
| [hybrid.js:1661](../source/hybrid.js.html#L1661) | 0.12 | conduct · [AKX-GOV-01](../TECHNICAL.html#akx-gov-01), [AKX-COV-01](../TECHNICAL.html#akx-cov-01) | ` sim.relationship(controller, sim.agents[id]).access > 0.12 ` |
| [hybrid.js:1669](../source/hybrid.js.html#L1669) | 1 | coverage · [AKX-COV-01](../TECHNICAL.html#akx-cov-01) | ` c.stage >= 1 ` |
| [hybrid.js:1674](../source/hybrid.js.html#L1674) | 12 | coverage · [AKX-COV-01](../TECHNICAL.html#akx-cov-01) | ` sim.month - 12 ` |
| [hybrid.js:1675](../source/hybrid.js.html#L1675) | 1 | coverage · [AKX-COV-01](../TECHNICAL.html#akx-cov-01) | ` [1, 2, 3].flatMap((level) => [false, true].map((insider) => { const rows = h.eligibility.filter( (x) => x.rank === level && x.insider === insider, ); return { rank: level, insider, eligible: rows.l… ` |
| [hybrid.js:1675](../source/hybrid.js.html#L1675) | 2 | coverage · [AKX-COV-01](../TECHNICAL.html#akx-cov-01) | ` [1, 2, 3].flatMap((level) => [false, true].map((insider) => { const rows = h.eligibility.filter( (x) => x.rank === level && x.insider === insider, ); return { rank: level, insider, eligible: rows.l… ` |
| [hybrid.js:1675](../source/hybrid.js.html#L1675) | 3 | coverage · [AKX-COV-01](../TECHNICAL.html#akx-cov-01) | ` [1, 2, 3].flatMap((level) => [false, true].map((insider) => { const rows = h.eligibility.filter( (x) => x.rank === level && x.insider === insider, ); return { rank: level, insider, eligible: rows.l… ` |
| [hybrid.js:1696](../source/hybrid.js.html#L1696) | 0 | stocks · [AKX-STA-01](../TECHNICAL.html#akx-sta-01) | ` sim.orgs.map((o) => o.economy?.capacity &#124;&#124; 0) ` |
| [hybrid.js:1697](../source/hybrid.js.html#L1697) | 0 | stocks · [AKX-STA-01](../TECHNICAL.html#akx-sta-01) | ` sim.orgs.map((o) => o.care?.capability &#124;&#124; 0) ` |
| [hybrid.js:1700](../source/hybrid.js.html#L1700) | 0 | stocks · [AKX-STA-01](../TECHNICAL.html#akx-sta-01) | ` (o.care?.backlog &#124;&#124; 0) * (o.care?.referenceStaff &#124;&#124; 1) ` |
| [hybrid.js:1700](../source/hybrid.js.html#L1700) | 1 | stocks · [AKX-STA-01](../TECHNICAL.html#akx-sta-01) | ` (o.care?.backlog &#124;&#124; 0) * (o.care?.referenceStaff &#124;&#124; 1) ` |
| [hybrid.js:1705](../source/hybrid.js.html#L1705) | 0 | stocks · [AKX-STA-01](../TECHNICAL.html#akx-sta-01) | ` (o.care?.rebuild &#124;&#124; 0) * (o.care?.referenceStaff &#124;&#124; 1) ` |
| [hybrid.js:1705](../source/hybrid.js.html#L1705) | 1 | stocks · [AKX-STA-01](../TECHNICAL.html#akx-sta-01) | ` (o.care?.rebuild &#124;&#124; 0) * (o.care?.referenceStaff &#124;&#124; 1) ` |
| [hybrid.js:1726](../source/hybrid.js.html#L1726) | 0 | stocks · [AKX-STA-01](../TECHNICAL.html#akx-sta-01) | ` sim.agents.map( (a) => a.psychology.memories[id]?.components[element]?.level &#124;&#124; 0, ) ` |
| [hybrid.js:1749](../source/hybrid.js.html#L1749) | 0.9 | close · [AKX-ECO-05](../TECHNICAL.html#akx-eco-05), [AKX-MEA-01](../TECHNICAL.html#akx-mea-01) | ` 0.9 * a.financialPressure ` |
| [hybrid.js:1750](../source/hybrid.js.html#L1750) | 0.1 | close · [AKX-ECO-05](../TECHNICAL.html#akx-eco-05), [AKX-MEA-01](../TECHNICAL.html#akx-mea-01) | ` 0.1 * (1 - a.hybrid.consumptionReceived / Math.max(0.001, a.cost)) ` |
| [hybrid.js:1750](../source/hybrid.js.html#L1750) | 1 | close · [AKX-ECO-05](../TECHNICAL.html#akx-eco-05), [AKX-MEA-01](../TECHNICAL.html#akx-mea-01) | ` 1 - a.hybrid.consumptionReceived / Math.max(0.001, a.cost) ` |
| [hybrid.js:1750](../source/hybrid.js.html#L1750) | 0.001 | close · [AKX-ECO-05](../TECHNICAL.html#akx-eco-05), [AKX-MEA-01](../TECHNICAL.html#akx-mea-01) | ` Math.max(0.001, a.cost) ` |
| [hybrid.js:1753](../source/hybrid.js.html#L1753) | 0.2 | close · [AKX-ECO-05](../TECHNICAL.html#akx-eco-05), [AKX-MEA-01](../TECHNICAL.html#akx-mea-01) | ` 0.2 * ((h.backgroundReceipts &#124;&#124; 0) - h.background.recentReceipts) ` |
| [hybrid.js:1753](../source/hybrid.js.html#L1753) | 0 | close · [AKX-ECO-05](../TECHNICAL.html#akx-eco-05), [AKX-MEA-01](../TECHNICAL.html#akx-mea-01) | ` (h.backgroundReceipts &#124;&#124; 0) - h.background.recentReceipts ` |
| [hybrid.js:1759](../source/hybrid.js.html#L1759) | 0.01 | close · [AKX-ECO-05](../TECHNICAL.html#akx-eco-05), [AKX-MEA-01](../TECHNICAL.html#akx-mea-01) | ` Math.max(0.01, o.capacity) ` |
| [hybrid.js:1775](../source/hybrid.js.html#L1775) | 100 | close · [AKX-ECO-05](../TECHNICAL.html#akx-eco-05), [AKX-MEA-01](../TECHNICAL.html#akx-mea-01) | ` 100 * domesticVA ` |
| [hybrid.js:1778](../source/hybrid.js.html#L1778) | 0 | close · [AKX-ECO-05](../TECHNICAL.html#akx-eco-05), [AKX-MEA-01](../TECHNICAL.html#akx-mea-01) | ` [0, 1, 2, 3].map((role) => { const people = sim.agents.filter((a) => a.role === role); return { role, attention: mean( people.map((a) => mean(Object.values(a.hybrid.attention))), ), knowledge: mean… ` |
| [hybrid.js:1778](../source/hybrid.js.html#L1778) | 1 | close · [AKX-ECO-05](../TECHNICAL.html#akx-eco-05), [AKX-MEA-01](../TECHNICAL.html#akx-mea-01) | ` [0, 1, 2, 3].map((role) => { const people = sim.agents.filter((a) => a.role === role); return { role, attention: mean( people.map((a) => mean(Object.values(a.hybrid.attention))), ), knowledge: mean… ` |
| [hybrid.js:1778](../source/hybrid.js.html#L1778) | 2 | close · [AKX-ECO-05](../TECHNICAL.html#akx-eco-05), [AKX-MEA-01](../TECHNICAL.html#akx-mea-01) | ` [0, 1, 2, 3].map((role) => { const people = sim.agents.filter((a) => a.role === role); return { role, attention: mean( people.map((a) => mean(Object.values(a.hybrid.attention))), ), knowledge: mean… ` |
| [hybrid.js:1778](../source/hybrid.js.html#L1778) | 3 | close · [AKX-ECO-05](../TECHNICAL.html#akx-eco-05), [AKX-MEA-01](../TECHNICAL.html#akx-mea-01) | ` [0, 1, 2, 3].map((role) => { const people = sim.agents.filter((a) => a.role === role); return { role, attention: mean( people.map((a) => mean(Object.values(a.hybrid.attention))), ), knowledge: mean… ` |
| [hybrid.js:1798](../source/hybrid.js.html#L1798) | -60 | close · [AKX-ECO-05](../TECHNICAL.html#akx-eco-05), [AKX-MEA-01](../TECHNICAL.html#akx-mea-01) | ` transfers.slice(-60) ` |
| [hybrid.js:1805](../source/hybrid.js.html#L1805) | 253 | close · [AKX-ECO-05](../TECHNICAL.html#akx-eco-05), [AKX-MEA-01](../TECHNICAL.html#akx-mea-01) | ` h.history.length > 253 ` |
| [hybrid.js:1810](../source/hybrid.js.html#L1810) | 1 | anchor · [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` h.referenceVA = h.last?.economy.domesticVA &#124;&#124; 1 ` |
| [hybrid.js:1812](../source/hybrid.js.html#L1812) | 100 | anchor · [AKX-ECO-05](../TECHNICAL.html#akx-eco-05) | ` h.last.economy.index = 100 ` |
| [hybrid.js:1834](../source/hybrid.js.html#L1834) | 253 | validSummary · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` h.history.length > 253 ` |
| [hybrid.js:1836](../source/hybrid.js.html#L1836) | 1000 | validSummary · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` h.journal.length > 1000 ` |
| [hybrid.js:1841](../source/hybrid.js.html#L1841) | 0 | finite · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` finite = (x, depth = 0) => depth <= 32 && (typeof x === "number" ? Number.isFinite(x) : !x &#124;&#124; typeof x !== "object" &#124;&#124; Object.values(x).every((v) => finite(v, depth + 1))) ` |
| [hybrid.js:1842](../source/hybrid.js.html#L1842) | 32 | finite · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` depth <= 32 ` |
| [hybrid.js:1847](../source/hybrid.js.html#L1847) | 1 | finite · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` depth + 1 ` |
| [hybrid.js:1858](../source/hybrid.js.html#L1858) | 4 | point · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` p.classes.length === 4 ` |
| [hybrid.js:1865](../source/hybrid.js.html#L1865) | -1e-8 | assert · [AKX-VAL-01](../TECHNICAL.html#akx-val-01) | ` h.foreign.balance < -1e-8 ` |
| [hybrid.js:1870](../source/hybrid.js.html#L1870) | -1e-7 | assert · [AKX-VAL-01](../TECHNICAL.html#akx-val-01) | ` a.hybrid.time < -1e-7 ` |
| [hybrid.js:1871](../source/hybrid.js.html#L1871) | 1 | assert · [AKX-VAL-01](../TECHNICAL.html#akx-val-01) | ` 1 + 1e-7 ` |
| [hybrid.js:1871](../source/hybrid.js.html#L1871) | 1e-7 | assert · [AKX-VAL-01](../TECHNICAL.html#akx-val-01) | ` 1 + 1e-7 ` |
| [hybrid.js:1876](../source/hybrid.js.html#L1876) | -1e-8 | assert · [AKX-VAL-01](../TECHNICAL.html#akx-val-01) | ` o.care.backlog < -1e-8 ` |
| [hybrid.js:1877](../source/hybrid.js.html#L1877) | 0 | assert · [AKX-VAL-01](../TECHNICAL.html#akx-val-01) | ` o.care.capability < 0 ` |
| [hybrid.js:1878](../source/hybrid.js.html#L1878) | 1 | assert · [AKX-VAL-01](../TECHNICAL.html#akx-val-01) | ` o.care.capability > 1 ` |
| [hybrid.js:1880](../source/hybrid.js.html#L1880) | 0 | assert · [AKX-VAL-01](../TECHNICAL.html#akx-val-01) | ` o.economy.capacity < 0 ` |
| [hybrid.js:1881](../source/hybrid.js.html#L1881) | -1e-8 | assert · [AKX-VAL-01](../TECHNICAL.html#akx-val-01) | ` o.economy.taxArrears < -1e-8 ` |
| [hybrid.js:1886](../source/hybrid.js.html#L1886) | 1e-5 | assert · [AKX-VAL-01](../TECHNICAL.html#akx-val-01) | ` (o.economy.openCapacity ?? o.economy.capacity) + 1e-5 ` |
| [hybrid.js:1891](../source/hybrid.js.html#L1891) | -1e-8 | assert · [AKX-VAL-01](../TECHNICAL.html#akx-val-01) | ` c.balance < -1e-8 ` |
