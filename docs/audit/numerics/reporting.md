# Numeric literals — reporting.js

[Inventory guide](../NUMERICS.html). Exact contexts are accessible in the full source.

| Source | Literal | Unit / mechanism | Expression context |
| --- | --- | --- | --- |
| [reporting.js:35](../source/reporting.js.html#L35) | 0 | sum · [AK-MEA-03](../TECHNICAL.html#ak-mea-03), [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` a.reduce((x, y) => x + y, 0) ` |
| [reporting.js:176](../source/reporting.js.html#L176) | 100 | pct · [AK-MEA-03](../TECHNICAL.html#ak-mea-03), [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` 100 * mean(a) ` |
| [reporting.js:181](../source/reporting.js.html#L181) | 1 | activity · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` (function (root) { const Adaptive = typeof module !== 'undefined' && module.exports ? require('./adaptation.js') : root.AntarkyaAdaptation; const ids = [ 'aca', 'merit', 'rotation', 'protection', '… ` |
| [reporting.js:182](../source/reporting.js.html#L182) | 0 | activity · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` amount > 0 ` |
| [reporting.js:193](../source/reporting.js.html#L193) | 0 | init · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` [...ids, 'meritGood', 'threats'].map((id) => [id, pre?.counts[id] &#124;&#124; 0]) ` |
| [reporting.js:200](../source/reporting.js.html#L200) | 0 | init · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` eventCursor: 0 ` |
| [reporting.js:206](../source/reporting.js.html#L206) | 0 | init · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` opportunities: m.encounterOpportunities &#124;&#124; 0 ` |
| [reporting.js:207](../source/reporting.js.html#L207) | 0 | init · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` corrupt: m.encounterCorruptActs &#124;&#124; 0 ` |
| [reporting.js:218](../source/reporting.js.html#L218) | 2 | remember · [AK-INI-01](../TECHNICAL.html#ak-ini-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` archives.size > 2 ` |
| [reporting.js:232](../source/reporting.js.html#L232) | 12 | recent · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` (function (root) { const Adaptive = typeof module !== 'undefined' && module.exports ? require('./adaptation.js') : root.AntarkyaAdaptation; const ids = [ 'aca', 'merit', 'rotation', 'protection', '… ` |
| [reporting.js:234](../source/reporting.js.html#L234) | 0 | recent · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` earliest = r.history[0]?.month ?? sim.month ` |
| [reporting.js:246](../source/reporting.js.html#L246) | 2 | sample · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` a.role === 2 ` |
| [reporting.js:272](../source/reporting.js.html#L272) | 2 | staff · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` sim.agents[id].role === 2 ` |
| [reporting.js:273](../source/reporting.js.html#L273) | 0.25 | staff · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` 0.25 + 0.4 * o.skill ` |
| [reporting.js:273](../source/reporting.js.html#L273) | 0.4 | staff · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` 0.4 * o.skill ` |
| [reporting.js:273](../source/reporting.js.html#L273) | 0.35 | staff · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` 0.35 * (o.professionalSkill ?? o.skill) ` |
| [reporting.js:285](../source/reporting.js.html#L285) | 0 | sample · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` appointments > 0 ` |
| [reporting.js:285](../source/reporting.js.html#L285) | 100 | sample · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` 100 * merit ` |
| [reporting.js:286](../source/reporting.js.html#L286) | 0 | sample · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` threats > 0 ` |
| [reporting.js:286](../source/reporting.js.html#L286) | 100 | sample · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` 100 * protectedCount ` |
| [reporting.js:289](../source/reporting.js.html#L289) | 18 | sample · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` sim.month - 18 ` |
| [reporting.js:289](../source/reporting.js.html#L289) | 6 | sample · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` sim.month - 6 ` |
| [reporting.js:293](../source/reporting.js.html#L293) | 20 | sample · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` matured.length >= 20 ` |
| [reporting.js:304](../source/reporting.js.html#L304) | 0 | sample · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` s.cases .filter( (c) => matureIds.has(c.recordId) && c.truth && c.status === 'closed' && c.decision === 'sanction' && c.route !== 'civil', ) .map((c) => c.collected &#124;&#124; 0) ` |
| [reporting.js:315](../source/reporting.js.html#L315) | 1 | relevant · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` c.stage === 1 ` |
| [reporting.js:341](../source/reporting.js.html#L341) | 0 | sample · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` officials.map((a) => a.financialPressure &#124;&#124; 0) ` |
| [reporting.js:342](../source/reporting.js.html#L342) | 0.9 | sample · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` 0.9 * mean(a.receipts) ` |
| [reporting.js:342](../source/reporting.js.html#L342) | 0.001 | sample · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` Math.max(0.001, a.cost) ` |
| [reporting.js:357](../source/reporting.js.html#L357) | 100 | sample · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` 100 * sim.cap('complaints') ` |
| [reporting.js:365](../source/reporting.js.html#L365) | 1 | sample · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` 1 - norm ` |
| [reporting.js:365](../source/reporting.js.html#L365) | 1 | sample · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` norm + e.norm * (1 - norm) + 1 ` |
| [reporting.js:365](../source/reporting.js.html#L365) | 2 | sample · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` (norm + e.norm * (1 - norm) + 1) / 2 ` |
| [reporting.js:370](../source/reporting.js.html#L370) | 1 | sample · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` 1 - a.control ` |
| [reporting.js:395](../source/reporting.js.html#L395) | 0 | sample · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` opportunities: s.metrics.encounterOpportunities &#124;&#124; 0 ` |
| [reporting.js:396](../source/reporting.js.html#L396) | 0 | sample · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` corrupt: s.metrics.encounterCorruptActs &#124;&#124; 0 ` |
| [reporting.js:435](../source/reporting.js.html#L435) | 0 | record · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` Math.max(0, (sim.state.metrics[key] &#124;&#124; 0) - (r.lastMetrics[key] &#124;&#124; 0)) ` |
| [reporting.js:435](../source/reporting.js.html#L435) | 0 | record · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` (sim.state.metrics[key] &#124;&#124; 0) - (r.lastMetrics[key] &#124;&#124; 0) ` |
| [reporting.js:435](../source/reporting.js.html#L435) | 0 | record · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` (sim.state.metrics[key] &#124;&#124; 0) - (r.lastMetrics[key] &#124;&#124; 0) ` |
| [reporting.js:441](../source/reporting.js.html#L441) | 0 | record · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` at >= 0 ` |
| [reporting.js:445](../source/reporting.js.html#L445) | 1 | record · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` ids.map((id) => [id, related(id, event, sim)]).filter((x) => x[1]) ` |
| [reporting.js:453](../source/reporting.js.html#L453) | 0 | record · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` change: review?.passed ? review.to - review.from : 0 ` |
| [reporting.js:463](../source/reporting.js.html#L463) | 400 | record · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` r.events.length > 400 ` |
| [reporting.js:466](../source/reporting.js.html#L466) | 0 | record · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` eventsFor({ events: r.events }, id, 'outcome', sim.month, 0) ` |
| [reporting.js:469](../source/reporting.js.html#L469) | 400 | record · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` 400 - keep.size ` |
| [reporting.js:486](../source/reporting.js.html#L486) | 12 | windowValue · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` (function (root) { const Adaptive = typeof module !== 'undefined' && module.exports ? require('./adaptation.js') : root.AntarkyaAdaptation; const ids = [ 'aca', 'merit', 'rotation', 'protection', '… ` |
| [reporting.js:490](../source/reporting.js.html#L490) | 0 | windowValue · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` earliest = report.history[0].month ` |
| [reporting.js:491](../source/reporting.js.html#L491) | 0 | windowValue · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` from = window ? Math.max(earliest, month - window) : 0 ` |
| [reporting.js:527](../source/reporting.js.html#L527) | 12 | eventsFor · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` (function (root) { const Adaptive = typeof module !== 'undefined' && module.exports ? require('./adaptation.js') : root.AntarkyaAdaptation; const ids = [ 'aca', 'merit', 'rotation', 'protection', '… ` |
| [reporting.js:529](../source/reporting.js.html#L529) | 0 | eventsFor · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` Math.max(0, month - window) ` |
| [reporting.js:529](../source/reporting.js.html#L529) | 0 | eventsFor · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` from = window ? Math.max(0, month - window) : 0 ` |
| [reporting.js:533](../source/reporting.js.html#L533) | 0 | eventsFor · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` e.month >= 0 ` |
| [reporting.js:554](../source/reporting.js.html#L554) | 4 | eventsFor · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` (direct ? 4 : 0) + (e.material ? 8 : 0) ` |
| [reporting.js:554](../source/reporting.js.html#L554) | 0 | eventsFor · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` (direct ? 4 : 0) + (e.material ? 8 : 0) ` |
| [reporting.js:555](../source/reporting.js.html#L555) | 8 | eventsFor · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` (direct ? 4 : 0) + (e.material ? 8 : 0) ` |
| [reporting.js:555](../source/reporting.js.html#L555) | 0 | eventsFor · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` (direct ? 4 : 0) + (e.material ? 8 : 0) ` |
| [reporting.js:556](../source/reporting.js.html#L556) | 3 | eventsFor · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` (direct ? 4 : 0) + (e.material ? 8 : 0) + (important ? 3 : 0) ` |
| [reporting.js:556](../source/reporting.js.html#L556) | 0 | eventsFor · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` (direct ? 4 : 0) + (e.material ? 8 : 0) + (important ? 3 : 0) ` |
| [reporting.js:557](../source/reporting.js.html#L557) | 2 | eventsFor · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` (direct ? 4 : 0) + (e.material ? 8 : 0) + (important ? 3 : 0) + (e.month >= from ? 2 : 0) ` |
| [reporting.js:557](../source/reporting.js.html#L557) | 0 | eventsFor · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` (direct ? 4 : 0) + (e.material ? 8 : 0) + (important ? 3 : 0) + (e.month >= from ? 2 : 0) ` |
| [reporting.js:558](../source/reporting.js.html#L558) | 1 | eventsFor · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` Math.max(1, month) ` |
| [reporting.js:563](../source/reporting.js.html#L563) | 0 | eventsFor · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` report.events .filter( (e) => e.month >= 0 && e.month <= month && !e.id.startsWith('INIT-') && (level === 'impact' ? e.salient &#124;&#124; Object.values(e.policies).includes('direct') : e.policies[id]), ) .… ` |
| [reporting.js:563](../source/reporting.js.html#L563) | 8 | eventsFor · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` report.events .filter( (e) => e.month >= 0 && e.month <= month && !e.id.startsWith('INIT-') && (level === 'impact' ? e.salient &#124;&#124; Object.values(e.policies).includes('direct') : e.policies[id]), ) .… ` |
| [reporting.js:600](../source/reporting.js.html#L600) | 0.0005 | interpret · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` tolerance = level === 'impact' ? 0.0005 : level === 'outcome' ? 0.05 : 1e-8 ` |
| [reporting.js:600](../source/reporting.js.html#L600) | 0.05 | interpret · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` tolerance = level === 'impact' ? 0.0005 : level === 'outcome' ? 0.05 : 1e-8 ` |
| [reporting.js:600](../source/reporting.js.html#L600) | 1e-8 | interpret · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` tolerance = level === 'impact' ? 0.0005 : level === 'outcome' ? 0.05 : 1e-8 ` |
| [reporting.js:619](../source/reporting.js.html#L619) | 0 | interpret · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` outputDelta > 0 ` |
| [reporting.js:620](../source/reporting.js.html#L620) | 0 | interpret · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` difference < 0 ` |
| [reporting.js:620](../source/reporting.js.html#L620) | 0 | interpret · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` difference > 0 ` |
| [reporting.js:622](../source/reporting.js.html#L622) | 0.0005 | interpret · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` Math.abs(impactDelta) < 0.0005 ` |
| [reporting.js:626](../source/reporting.js.html#L626) | 0 | interpret · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` text[0].toLowerCase() ` |
| [reporting.js:626](../source/reporting.js.html#L626) | 1 | interpret · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` text.slice(1) ` |
| [reporting.js:638](../source/reporting.js.html#L638) | 254 | valid · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` report.history.length > 254 ` |
| [reporting.js:640](../source/reporting.js.html#L640) | 400 | valid · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` report.events.length > 400 ` |
| [reporting.js:649](../source/reporting.js.html#L649) | -12 | valid · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` p.month < -12 ` |
| [reporting.js:650](../source/reporting.js.html#L650) | 240 | valid · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` p.month > 240 ` |
| [reporting.js:659](../source/reporting.js.html#L659) | 0 | valid · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` p.impact.opportunities < 0 ` |
| [reporting.js:660](../source/reporting.js.html#L660) | 0 | valid · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` p.impact.corrupt < 0 ` |
| [reporting.js:668](../source/reporting.js.html#L668) | 0 | valid · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` p.counts[id] < 0 ` |
| [reporting.js:691](../source/reporting.js.html#L691) | 0 | valid · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` x >= 0 ` |
| [reporting.js:691](../source/reporting.js.html#L691) | 1000 | valid · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` x < 1000 ` |
