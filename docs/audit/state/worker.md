# State definitions and writes — worker.js

[Inventory guide](../STATE.html). Whole-function source is authoritative for types, branches, bounds and update semantics.

| Source | Field / target | Operation / expression | Owner / mechanism |
| --- | --- | --- | --- |
| [worker.js:33](../source/worker.js.html#L33) | ` summary.version ` | object definition · ` Antarkya.VERSION ` | summary · [AK-OV-01](../TECHNICAL.html#ak-ov-01) |
| [worker.js:34](../source/worker.js.html#L34) | ` summary.month ` | object definition · ` s.month ` | summary · [AK-OV-01](../TECHNICAL.html#ak-ov-01) |
| [worker.js:35](../source/worker.js.html#L35) | ` summary.reporting ` | object definition · ` s.reporting() ` | summary · [AK-OV-01](../TECHNICAL.html#ak-ov-01) |
| [worker.js:36](../source/worker.js.html#L36) | ` summary.hybrid ` | object definition · ` Antarkya.Hybrid.summary(s) ` | summary · [AK-OV-01](../TECHNICAL.html#ak-ov-01) |
| [worker.js:37](../source/worker.js.html#L37) | ` summary.metrics ` | object definition · ` s.metrics() ` | summary · [AK-OV-01](../TECHNICAL.html#ak-ov-01) |
| [worker.js:38](../source/worker.js.html#L38) | ` summary.assessment ` | object definition · ` s.assessment() ` | summary · [AK-OV-01](../TECHNICAL.html#ak-ov-01) |
| [worker.js:39](../source/worker.js.html#L39) | ` summary.history ` | object definition · ` s.state.history ` | summary · [AK-OV-01](../TECHNICAL.html#ak-ov-01) |
| [worker.js:40](../source/worker.js.html#L40) | ` summary.classActivity ` | object definition · ` s.classActivity() ` | summary · [AK-OV-01](../TECHNICAL.html#ak-ov-01) |
| [worker.js:58](../source/worker.js.html#L58) | ` send.type ` | object definition · ` type ` | send · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:59](../source/worker.js.html#L59) | ` send.reform ` | object definition · ` view ` | send · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:60](../source/worker.js.html#L60) | ` send.baseline ` | object definition · ` base ` | send · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:61](../source/worker.js.html#L61) | ` send.comparison ` | object definition · ` Antarkya.comparison(view, base) ` | send · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:62](../source/worker.js.html#L62) | ` send.replicate ` | object definition · ` replicate + 1 ` | send · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:63](../source/worker.js.html#L63) | ` send.repetitions ` | object definition · ` config.repetitions ` | send · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:64](../source/worker.js.html#L64) | ` send.repeatMonth ` | object definition · ` reform.month ` | send · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:65](../source/worker.js.html#L65) | ` send.eventSeed ` | object definition · ` config.eventSeed ` | send · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:66](../source/worker.js.html#L66) | ` send.running ` | object definition · ` active ` | send · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:67](../source/worker.js.html#L67) | ` send.elapsed ` | object definition · ` performance.now() - started ` | send · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:81](../source/worker.js.html#L81) | ` finishPair.replicate ` | object definition · ` replicate + 1 ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:82](../source/worker.js.html#L82) | ` finishPair.eventSeed ` | object definition · ` config.eventSeed ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:83](../source/worker.js.html#L83) | ` finishPair.reformMetrics ` | object definition · ` r.metrics ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:84](../source/worker.js.html#L84) | ` finishPair.baselineMetrics ` | object definition · ` b.metrics ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:86](../source/worker.js.html#L86) | ` finishPair.policyOutcomes ` | object definition · ` Object.fromEntries( Antarkya.KEYS.map((id) => { const x = r.reporting.history.at(-1).tools[id].outcome, y = b.reporting.history.at(-1).tools[id].outcome; return [ id, { reform: x, basel… ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:92](../source/worker.js.html#L92) | ` finishPair.policyOutcomes.reform ` | object definition · ` x ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:92](../source/worker.js.html#L92) | ` finishPair.policyOutcomes.baseline ` | object definition · ` y ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:92](../source/worker.js.html#L92) | ` finishPair.policyOutcomes.difference ` | object definition · ` x === null &#124;&#124; y === null ? null : x - y ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:99](../source/worker.js.html#L99) | ` finishPair.reform ` | object definition · ` Object(5 entries); child fields listed separately ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:101](../source/worker.js.html#L101) | ` finishPair.reform.events ` | object definition · ` reform.state.events ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:102](../source/worker.js.html#L102) | ` finishPair.reform.cases ` | object definition · ` reform.state.cases ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:103](../source/worker.js.html#L103) | ` finishPair.reform.conduct ` | object definition · ` reform.state.conduct ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:104](../source/worker.js.html#L104) | ` finishPair.reform.agentProfiles ` | object definition · ` reform.agents.map((a) => ({ id: a.id, motives: a.motives, skill: a.skill, control: a.control, normCorrupt: a.normCorrupt, riskBelief: a.riskBelief, financialPressure: … ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:105](../source/worker.js.html#L105) | ` finishPair.reform.agentProfiles.id ` | object definition · ` a.id ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:106](../source/worker.js.html#L106) | ` finishPair.reform.agentProfiles.motives ` | object definition · ` a.motives ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:107](../source/worker.js.html#L107) | ` finishPair.reform.agentProfiles.skill ` | object definition · ` a.skill ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:108](../source/worker.js.html#L108) | ` finishPair.reform.agentProfiles.control ` | object definition · ` a.control ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:109](../source/worker.js.html#L109) | ` finishPair.reform.agentProfiles.normCorrupt ` | object definition · ` a.normCorrupt ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:110](../source/worker.js.html#L110) | ` finishPair.reform.agentProfiles.riskBelief ` | object definition · ` a.riskBelief ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:111](../source/worker.js.html#L111) | ` finishPair.reform.agentProfiles.financialPressure ` | object definition · ` a.financialPressure ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:112](../source/worker.js.html#L112) | ` finishPair.reform.agentProfiles.liabilities ` | object definition · ` a.liabilities ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:113](../source/worker.js.html#L113) | ` finishPair.reform.agentProfiles.experience ` | object definition · ` a.experience ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:114](../source/worker.js.html#L114) | ` finishPair.reform.agentProfiles.income ` | object definition · ` a.income ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:115](../source/worker.js.html#L115) | ` finishPair.reform.agentProfiles.cost ` | object definition · ` a.cost ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:116](../source/worker.js.html#L116) | ` finishPair.reform.agentProfiles.startingRole ` | object definition · ` a.startingRole ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:117](../source/worker.js.html#L117) | ` finishPair.reform.agentProfiles.psychology ` | object definition · ` a.psychology ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:120](../source/worker.js.html#L120) | ` finishPair.baseline ` | object definition · ` b ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:130](../source/worker.js.html#L130) | ` finishPair.type ` | object definition · ` 'complete' ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:132](../source/worker.js.html#L132) | ` finishPair.eventSeed ` | object definition · ` config.eventSeed ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:133](../source/worker.js.html#L133) | ` finishPair.repetitions ` | object definition · ` config.repetitions ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:134](../source/worker.js.html#L134) | ` finishPair.replicate ` | object definition · ` config.repetitions ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:135](../source/worker.js.html#L135) | ` finishPair.comparison ` | object definition · ` Antarkya.comparison(firstResult.reform, firstResult.baseline) ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:136](../source/worker.js.html#L136) | ` finishPair.replications ` | object definition · ` replications ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:137](../source/worker.js.html#L137) | ` finishPair.statistics ` | object definition · ` Object(3 entries); child fields listed separately ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:138](../source/worker.js.html#L138) | ` finishPair.statistics.meanDifference ` | object definition · ` differences.length ? differences.reduce((a, b) => a + b, 0) / differences.length : null ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:141](../source/worker.js.html#L141) | ` finishPair.statistics.minDifference ` | object definition · ` differences.length ? Math.min(...differences) : null ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:142](../source/worker.js.html#L142) | ` finishPair.statistics.maxDifference ` | object definition · ` differences.length ? Math.max(...differences) : null ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:144](../source/worker.js.html#L144) | ` finishPair.elapsed ` | object definition · ` performance.now() - started ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:145](../source/worker.js.html#L145) | ` finishPair.initialKey ` | object definition · ` initial.initialKey ` | finishPair · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:175](../source/worker.js.html#L175) | ` pump.type ` | object definition · ` 'error' ` | pump · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:175](../source/worker.js.html#L175) | ` pump.message ` | object definition · ` e.message ` | pump · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:211](../source/worker.js.html#L211) | ` module data.type ` | object definition · ` 'error' ` | module data · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [worker.js:211](../source/worker.js.html#L211) | ` module data.message ` | object definition · ` e.message ` | module data · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
