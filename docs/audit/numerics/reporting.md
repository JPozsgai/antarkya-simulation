# Numeric literals — reporting.js

[Inventory guide](../NUMERICS.html). Exact contexts are accessible in the full source.

| Source | Literal | Unit / mechanism | Expression context |
| --- | --- | --- | --- |
| [reporting.js:35](../source/reporting.js.html#L35) | 0 | sum · [AK-MEA-03](../TECHNICAL.html#ak-mea-03), [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` a.reduce((x, y) => x + y, 0) ` |
| [reporting.js:176](../source/reporting.js.html#L176) | 100 | pct · [AK-MEA-03](../TECHNICAL.html#ak-mea-03), [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` 100 * mean(a) ` |
| [reporting.js:181](../source/reporting.js.html#L181) | 1 | activity · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` (function (root) { const Adaptive = typeof module !== 'undefined' && module.exports ? require('./adaptation.js') : root.AntarkyaAdaptation; const ids = [ 'aca', 'merit', 'rotation', 'protection', '… ` |
| [reporting.js:182](../source/reporting.js.html#L182) | 0 | activity · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` amount > 0 ` |
| [reporting.js:184](../source/reporting.js.html#L184) | 0 | activity · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` (counts[id] &#124;&#124; 0) + amount ` |
| [reporting.js:186](../source/reporting.js.html#L186) | 0 | activity · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` amount > 0 ` |
| [reporting.js:197](../source/reporting.js.html#L197) | 0 | init · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` [...ids, 'meritGood', 'threats'].map((id) => [id, pre?.counts[id] &#124;&#124; 0]) ` |
| [reporting.js:204](../source/reporting.js.html#L204) | 0 | init · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` eventCursor: 0 ` |
| [reporting.js:210](../source/reporting.js.html#L210) | 0 | init · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` opportunities: m.encounterOpportunities &#124;&#124; 0 ` |
| [reporting.js:211](../source/reporting.js.html#L211) | 0 | init · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` corrupt: m.encounterCorruptActs &#124;&#124; 0 ` |
| [reporting.js:222](../source/reporting.js.html#L222) | 2 | remember · [AK-INI-01](../TECHNICAL.html#ak-ini-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` archives.size > 2 ` |
| [reporting.js:236](../source/reporting.js.html#L236) | 12 | recent · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` (function (root) { const Adaptive = typeof module !== 'undefined' && module.exports ? require('./adaptation.js') : root.AntarkyaAdaptation; const ids = [ 'aca', 'merit', 'rotation', 'protection', '… ` |
| [reporting.js:238](../source/reporting.js.html#L238) | 0 | recent · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` earliest = r.history[0]?.month ?? sim.month ` |
| [reporting.js:250](../source/reporting.js.html#L250) | 2 | sample · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` a.role === 2 ` |
| [reporting.js:276](../source/reporting.js.html#L276) | 2 | staff · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` sim.agents[id].role === 2 ` |
| [reporting.js:277](../source/reporting.js.html#L277) | 0.25 | staff · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` 0.25 + 0.4 * o.skill ` |
| [reporting.js:277](../source/reporting.js.html#L277) | 0.4 | staff · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` 0.4 * o.skill ` |
| [reporting.js:277](../source/reporting.js.html#L277) | 0.35 | staff · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` 0.35 * (o.professionalSkill ?? o.skill) ` |
| [reporting.js:289](../source/reporting.js.html#L289) | 0 | sample · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` appointments > 0 ` |
| [reporting.js:289](../source/reporting.js.html#L289) | 100 | sample · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` 100 * merit ` |
| [reporting.js:290](../source/reporting.js.html#L290) | 0 | sample · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` threats > 0 ` |
| [reporting.js:290](../source/reporting.js.html#L290) | 100 | sample · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` 100 * protectedCount ` |
| [reporting.js:293](../source/reporting.js.html#L293) | 18 | sample · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` sim.month - 18 ` |
| [reporting.js:293](../source/reporting.js.html#L293) | 6 | sample · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` sim.month - 6 ` |
| [reporting.js:297](../source/reporting.js.html#L297) | 20 | sample · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` matured.length >= 20 ` |
| [reporting.js:308](../source/reporting.js.html#L308) | 0 | sample · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` s.cases .filter( (c) => matureIds.has(c.recordId) && c.truth && c.status === 'closed' && c.decision === 'sanction' && c.route !== 'civil', ) .map((c) => c.collected &#124;&#124; 0) ` |
| [reporting.js:319](../source/reporting.js.html#L319) | 1 | relevant · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` c.stage === 1 ` |
| [reporting.js:345](../source/reporting.js.html#L345) | 0 | sample · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` officials.map((a) => a.financialPressure &#124;&#124; 0) ` |
| [reporting.js:346](../source/reporting.js.html#L346) | 0.001 | sample · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` Math.max(0.001, a.cost) ` |
| [reporting.js:361](../source/reporting.js.html#L361) | 100 | sample · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` 100 * sim.cap('complaints') ` |
| [reporting.js:369](../source/reporting.js.html#L369) | 1 | sample · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` 1 - norm ` |
| [reporting.js:369](../source/reporting.js.html#L369) | 1 | sample · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` norm + e.norm * (1 - norm) + 1 ` |
| [reporting.js:369](../source/reporting.js.html#L369) | 2 | sample · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` (norm + e.norm * (1 - norm) + 1) / 2 ` |
| [reporting.js:374](../source/reporting.js.html#L374) | 1 | sample · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` 1 - a.control ` |
| [reporting.js:399](../source/reporting.js.html#L399) | 0 | sample · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` opportunities: s.metrics.encounterOpportunities &#124;&#124; 0 ` |
| [reporting.js:400](../source/reporting.js.html#L400) | 0 | sample · [AK-MEA-01](../TECHNICAL.html#ak-mea-01), [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` corrupt: s.metrics.encounterCorruptActs &#124;&#124; 0 ` |
| [reporting.js:439](../source/reporting.js.html#L439) | 0 | record · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` Math.max(0, (sim.state.metrics[key] &#124;&#124; 0) - (r.lastMetrics[key] &#124;&#124; 0)) ` |
| [reporting.js:439](../source/reporting.js.html#L439) | 0 | record · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` (sim.state.metrics[key] &#124;&#124; 0) - (r.lastMetrics[key] &#124;&#124; 0) ` |
| [reporting.js:439](../source/reporting.js.html#L439) | 0 | record · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` (sim.state.metrics[key] &#124;&#124; 0) - (r.lastMetrics[key] &#124;&#124; 0) ` |
| [reporting.js:445](../source/reporting.js.html#L445) | 0 | record · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` at >= 0 ` |
| [reporting.js:449](../source/reporting.js.html#L449) | 1 | record · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` ids.map((id) => [id, related(id, event, sim)]).filter((x) => x[1]) ` |
| [reporting.js:457](../source/reporting.js.html#L457) | 0 | record · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` change: review?.passed ? review.to - review.from : 0 ` |
| [reporting.js:467](../source/reporting.js.html#L467) | 400 | record · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` r.events.length > 400 ` |
| [reporting.js:470](../source/reporting.js.html#L470) | 0 | record · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` eventsFor({ events: r.events }, id, 'outcome', sim.month, 0) ` |
| [reporting.js:473](../source/reporting.js.html#L473) | 400 | record · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` 400 - keep.size ` |
| [reporting.js:490](../source/reporting.js.html#L490) | 12 | windowValue · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` (function (root) { const Adaptive = typeof module !== 'undefined' && module.exports ? require('./adaptation.js') : root.AntarkyaAdaptation; const ids = [ 'aca', 'merit', 'rotation', 'protection', '… ` |
| [reporting.js:494](../source/reporting.js.html#L494) | 0 | windowValue · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` earliest = report.history[0].month ` |
| [reporting.js:495](../source/reporting.js.html#L495) | 0 | windowValue · [AK-MEA-03](../TECHNICAL.html#ak-mea-03) | ` from = window ? Math.max(earliest, month - window) : 0 ` |
| [reporting.js:531](../source/reporting.js.html#L531) | 12 | eventsFor · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` (function (root) { const Adaptive = typeof module !== 'undefined' && module.exports ? require('./adaptation.js') : root.AntarkyaAdaptation; const ids = [ 'aca', 'merit', 'rotation', 'protection', '… ` |
| [reporting.js:533](../source/reporting.js.html#L533) | 0 | eventsFor · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` Math.max(0, month - window) ` |
| [reporting.js:533](../source/reporting.js.html#L533) | 0 | eventsFor · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` from = window ? Math.max(0, month - window) : 0 ` |
| [reporting.js:537](../source/reporting.js.html#L537) | 0 | eventsFor · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` e.month >= 0 ` |
| [reporting.js:558](../source/reporting.js.html#L558) | 4 | eventsFor · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` (direct ? 4 : 0) + (e.material ? 8 : 0) ` |
| [reporting.js:558](../source/reporting.js.html#L558) | 0 | eventsFor · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` (direct ? 4 : 0) + (e.material ? 8 : 0) ` |
| [reporting.js:559](../source/reporting.js.html#L559) | 8 | eventsFor · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` (direct ? 4 : 0) + (e.material ? 8 : 0) ` |
| [reporting.js:559](../source/reporting.js.html#L559) | 0 | eventsFor · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` (direct ? 4 : 0) + (e.material ? 8 : 0) ` |
| [reporting.js:560](../source/reporting.js.html#L560) | 3 | eventsFor · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` (direct ? 4 : 0) + (e.material ? 8 : 0) + (important ? 3 : 0) ` |
| [reporting.js:560](../source/reporting.js.html#L560) | 0 | eventsFor · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` (direct ? 4 : 0) + (e.material ? 8 : 0) + (important ? 3 : 0) ` |
| [reporting.js:561](../source/reporting.js.html#L561) | 2 | eventsFor · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` (direct ? 4 : 0) + (e.material ? 8 : 0) + (important ? 3 : 0) + (e.month >= from ? 2 : 0) ` |
| [reporting.js:561](../source/reporting.js.html#L561) | 0 | eventsFor · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` (direct ? 4 : 0) + (e.material ? 8 : 0) + (important ? 3 : 0) + (e.month >= from ? 2 : 0) ` |
| [reporting.js:562](../source/reporting.js.html#L562) | 1 | eventsFor · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` Math.max(1, month) ` |
| [reporting.js:567](../source/reporting.js.html#L567) | 0 | eventsFor · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` report.events .filter( (e) => e.month >= 0 && e.month <= month && !e.id.startsWith('INIT-') && (level === 'impact' ? e.salient &#124;&#124; Object.values(e.policies).includes('direct') : e.policies[id]), ) .… ` |
| [reporting.js:567](../source/reporting.js.html#L567) | 8 | eventsFor · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` report.events .filter( (e) => e.month >= 0 && e.month <= month && !e.id.startsWith('INIT-') && (level === 'impact' ? e.salient &#124;&#124; Object.values(e.policies).includes('direct') : e.policies[id]), ) .… ` |
| [reporting.js:604](../source/reporting.js.html#L604) | 0.0005 | interpret · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` tolerance = level === 'impact' ? 0.0005 : level === 'outcome' ? 0.05 : 1e-8 ` |
| [reporting.js:604](../source/reporting.js.html#L604) | 0.05 | interpret · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` tolerance = level === 'impact' ? 0.0005 : level === 'outcome' ? 0.05 : 1e-8 ` |
| [reporting.js:604](../source/reporting.js.html#L604) | 1e-8 | interpret · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` tolerance = level === 'impact' ? 0.0005 : level === 'outcome' ? 0.05 : 1e-8 ` |
| [reporting.js:623](../source/reporting.js.html#L623) | 0 | interpret · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` outputDelta > 0 ` |
| [reporting.js:624](../source/reporting.js.html#L624) | 0 | interpret · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` difference < 0 ` |
| [reporting.js:624](../source/reporting.js.html#L624) | 0 | interpret · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` difference > 0 ` |
| [reporting.js:626](../source/reporting.js.html#L626) | 0.0005 | interpret · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` Math.abs(impactDelta) < 0.0005 ` |
| [reporting.js:630](../source/reporting.js.html#L630) | 0 | interpret · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` text[0].toLowerCase() ` |
| [reporting.js:630](../source/reporting.js.html#L630) | 1 | interpret · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` text.slice(1) ` |
| [reporting.js:642](../source/reporting.js.html#L642) | 254 | valid · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` report.history.length > 254 ` |
| [reporting.js:644](../source/reporting.js.html#L644) | 400 | valid · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` report.events.length > 400 ` |
| [reporting.js:653](../source/reporting.js.html#L653) | -12 | valid · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` p.month < -12 ` |
| [reporting.js:654](../source/reporting.js.html#L654) | 240 | valid · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` p.month > 240 ` |
| [reporting.js:663](../source/reporting.js.html#L663) | 0 | valid · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` p.impact.opportunities < 0 ` |
| [reporting.js:664](../source/reporting.js.html#L664) | 0 | valid · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` p.impact.corrupt < 0 ` |
| [reporting.js:672](../source/reporting.js.html#L672) | 0 | valid · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` p.counts[id] < 0 ` |
| [reporting.js:695](../source/reporting.js.html#L695) | 0 | valid · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` x >= 0 ` |
| [reporting.js:695](../source/reporting.js.html#L695) | 1000 | valid · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` x < 1000 ` |
