# State definitions and writes — visualization.js

[Inventory guide](../STATE.html). Whole-function source is authoritative for types, branches, bounds and update semantics.

| Source | Field / target | Operation / expression | Owner / mechanism |
| --- | --- | --- | --- |
| [visualization.js:34](../source/visualization.js.html#L34) | ` projection.other ` | object definition · ` other ` | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [visualization.js:34](../source/visualization.js.html#L34) | ` projection.weight ` | object definition · ` l.strength * (trust ?? 0) ` | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [visualization.js:48](../source/visualization.js.html#L48) | ` anchors.angle ` | object definition · ` angle ` | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [visualization.js:48](../source/visualization.js.html#L48) | ` anchors.rate ` | object definition · ` rate ` | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [visualization.js:48](../source/visualization.js.html#L48) | ` anchors.integrityRadius ` | object definition · ` rate > 0 ? 0.54 + 0.41 * Math.sqrt(rate) : 0 ` | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [visualization.js:56](../source/visualization.js.html#L56) | ` points.x ` | object definition · ` radius * Math.cos(angle) ` | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [visualization.js:56](../source/visualization.js.html#L56) | ` points.y ` | object definition · ` radius * Math.sin(angle) ` | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [visualization.js:114](../source/visualization.js.html#L114) | ` projection.x ` | object definition · ` a.integrityRadius * Math.cos(angle) ` | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [visualization.js:114](../source/visualization.js.html#L114) | ` projection.y ` | object definition · ` a.integrityRadius * Math.sin(angle) ` | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [visualization.js:119](../source/visualization.js.html#L119) | ` projection.x ` | object definition · ` x ` | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [visualization.js:119](../source/visualization.js.html#L119) | ` projection.y ` | object definition · ` y ` | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [visualization.js:126](../source/visualization.js.html#L126) | ` projection.id ` | object definition · ` a.id ` | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [visualization.js:128](../source/visualization.js.html#L128) | ` projection.radius ` | object definition · ` Math.hypot(p.x, p.y) ` | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [visualization.js:129](../source/visualization.js.html#L129) | ` projection.angle ` | object definition · ` Math.atan2(p.y, p.x) ` | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [visualization.js:130](../source/visualization.js.html#L130) | ` projection.rate ` | object definition · ` source.rate ` | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [visualization.js:131](../source/visualization.js.html#L131) | ` projection.integrityRadius ` | object definition · ` source.integrityRadius ` | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [visualization.js:132](../source/visualization.js.html#L132) | ` projection.band ` | object definition · ` source.rate > 0 ? 'participation' : 'integrity' ` | projection · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [visualization.js:169](../source/visualization.js.html#L169) | ` impactWindow.month ` | object definition · ` month ` | impactWindow · [AK-MEA-02](../TECHNICAL.html#ak-mea-02) |
| [visualization.js:170](../source/visualization.js.html#L170) | ` impactWindow.fromMonth ` | object definition · ` startMonth ` | impactWindow · [AK-MEA-02](../TECHNICAL.html#ak-mea-02) |
| [visualization.js:171](../source/visualization.js.html#L171) | ` impactWindow.months ` | object definition · ` month - startMonth ` | impactWindow · [AK-MEA-02](../TECHNICAL.html#ak-mea-02) |
| [visualization.js:172](../source/visualization.js.html#L172) | ` impactWindow.opportunities ` | object definition · ` opportunities ` | impactWindow · [AK-MEA-02](../TECHNICAL.html#ak-mea-02) |
| [visualization.js:173](../source/visualization.js.html#L173) | ` impactWindow.corrupt ` | object definition · ` corrupt ` | impactWindow · [AK-MEA-02](../TECHNICAL.html#ak-mea-02) |
| [visualization.js:174](../source/visualization.js.html#L174) | ` impactWindow.rate ` | object definition · ` opportunities ? (100 * corrupt) / opportunities : null ` | impactWindow · [AK-MEA-02](../TECHNICAL.html#ak-mea-02) |
| [visualization.js:189](../source/visualization.js.html#L189) | ` impactSeries.month ` | object definition · ` x.month ` | impactSeries · [AK-MEA-02](../TECHNICAL.html#ak-mea-02) |
| [visualization.js:190](../source/visualization.js.html#L190) | ` impactSeries.reform ` | object definition · ` r ` | impactSeries · [AK-MEA-02](../TECHNICAL.html#ak-mea-02) |
| [visualization.js:191](../source/visualization.js.html#L191) | ` impactSeries.baseline ` | object definition · ` b ` | impactSeries · [AK-MEA-02](../TECHNICAL.html#ak-mea-02) |
| [visualization.js:192](../source/visualization.js.html#L192) | ` impactSeries.difference ` | object definition · ` r && b && r.rate !== null && b.rate !== null ? r.rate - b.rate : null ` | impactSeries · [AK-MEA-02](../TECHNICAL.html#ak-mea-02) |
| [visualization.js:210](../source/visualization.js.html#L210) | ` api.directions ` | object definition · ` directions ` | module data · [AK-VIS-01](../TECHNICAL.html#ak-vis-01), [AK-MEA-02](../TECHNICAL.html#ak-mea-02) |
| [visualization.js:211](../source/visualization.js.html#L211) | ` api.core ` | object definition · ` core ` | module data · [AK-VIS-01](../TECHNICAL.html#ak-vis-01), [AK-MEA-02](../TECHNICAL.html#ak-mea-02) |
| [visualization.js:212](../source/visualization.js.html#L212) | ` api.projection ` | object definition · ` projection ` | module data · [AK-VIS-01](../TECHNICAL.html#ak-vis-01), [AK-MEA-02](../TECHNICAL.html#ak-mea-02) |
| [visualization.js:213](../source/visualization.js.html#L213) | ` api.importantEvents ` | object definition · ` importantEvents ` | module data · [AK-VIS-01](../TECHNICAL.html#ak-vis-01), [AK-MEA-02](../TECHNICAL.html#ak-mea-02) |
| [visualization.js:214](../source/visualization.js.html#L214) | ` api.impactWindow ` | object definition · ` impactWindow ` | module data · [AK-VIS-01](../TECHNICAL.html#ak-vis-01), [AK-MEA-02](../TECHNICAL.html#ak-mea-02) |
| [visualization.js:215](../source/visualization.js.html#L215) | ` api.impactSeries ` | object definition · ` impactSeries ` | module data · [AK-VIS-01](../TECHNICAL.html#ak-vis-01), [AK-MEA-02](../TECHNICAL.html#ak-mea-02) |
| [visualization.js:216](../source/visualization.js.html#L216) | ` api.impactDifference ` | object definition · ` impactDifference ` | module data · [AK-VIS-01](../TECHNICAL.html#ak-vis-01), [AK-MEA-02](../TECHNICAL.html#ak-mea-02) |
| [visualization.js:218](../source/visualization.js.html#L218) | ` module.exports ` | = · ` api ` | module data · [AK-VIS-01](../TECHNICAL.html#ak-vis-01), [AK-MEA-02](../TECHNICAL.html#ak-mea-02) |
| [visualization.js:219](../source/visualization.js.html#L219) | ` root.AntarkyaVisualization ` | = · ` api ` | module data · [AK-VIS-01](../TECHNICAL.html#ak-vis-01), [AK-MEA-02](../TECHNICAL.html#ak-mea-02) |
