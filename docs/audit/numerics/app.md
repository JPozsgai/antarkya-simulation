# Numeric literals — app.js

[Inventory guide](../NUMERICS.html). Exact contexts are accessible in the full source.

| Source | Literal | Unit / mechanism | Expression context |
| --- | --- | --- | --- |
| [app.js:31](../source/app.js.html#L31) | 1 | number · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` number = (v, d = 1) => v === null &#124;&#124; v === undefined &#124;&#124; !Number.isFinite(Number(v)) ? '—' : Number(v).toLocaleString(undefined, { maximumFractionDigits: d, minimumFractionDigits: d }) ` |
| [app.js:48](../source/app.js.html#L48) | 1 | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` zoom = 1 ` |
| [app.js:49](../source/app.js.html#L49) | 0 | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` x: 0 ` |
| [app.js:49](../source/app.js.html#L49) | 0 | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` y: 0 ` |
| [app.js:87](../source/app.js.html#L87) | 100 | getConfig · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Number($('rate-' + p.id).value) / 100 ` |
| [app.js:110](../source/app.js.html#L110) | 1 | summaryText · [AK-OV-01](../TECHNICAL.html#ak-ov-01) | ` c.policies.length === 1 ` |
| [app.js:117](../source/app.js.html#L117) | 100 | summaryText · [AK-OV-01](../TECHNICAL.html#ak-ov-01) | ` p.mobilization * 100 ` |
| [app.js:170](../source/app.js.html#L170) | 0 | buildPolicies · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Math.max(0, Math.min(100, Number($(prefix + p.id).value) &#124;&#124; 0)) ` |
| [app.js:170](../source/app.js.html#L170) | 100 | buildPolicies · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Math.min(100, Number($(prefix + p.id).value) &#124;&#124; 0) ` |
| [app.js:170](../source/app.js.html#L170) | 0 | buildPolicies · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Math.min(100, Number($(prefix + p.id).value) &#124;&#124; 0) ` |
| [app.js:193](../source/app.js.html#L193) | 0 | countryFields · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | `` fields .map( ([key, label]) => `<div class="field"><label for="o-${key}">${esc(label)}</label><input type="number" id="o-${key}" data-override="${key}" min="${A.NUMERIC[key][0]}" max="${A.NUMERIC[k… `` |
| [app.js:193](../source/app.js.html#L193) | 1 | countryFields · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | `` fields .map( ([key, label]) => `<div class="field"><label for="o-${key}">${esc(label)}</label><input type="number" id="o-${key}" data-override="${key}" min="${A.NUMERIC[key][0]}" max="${A.NUMERIC[k… `` |
| [app.js:193](../source/app.js.html#L193) | 1 | countryFields · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` base[key].toFixed(1) ` |
| [app.js:208](../source/app.js.html#L208) | 2 | countryFields · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` base[key].toFixed(2) ` |
| [app.js:274](../source/app.js.html#L274) | 100 | applyConfig · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` found.mobilization * 100 ` |
| [app.js:275](../source/app.js.html#L275) | 100 | applyConfig · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` found.mobilization * 100 ` |
| [app.js:320](../source/app.js.html#L320) | 0 | preview · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` r = new A.Simulation(c, i, 0, false) ` |
| [app.js:321](../source/app.js.html#L321) | 0 | preview · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` b = new A.Simulation(c, i, 0, true) ` |
| [app.js:326](../source/app.js.html#L326) | 1 | preview · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` replicate: 1 ` |
| [app.js:460](../source/app.js.html#L460) | 2 | learningPanel · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) | ` number(p.traits.openness, 2) ` |
| [app.js:462](../source/app.js.html#L462) | 2 | learningPanel · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) | ` number(p.traits.learning, 2) ` |
| [app.js:464](../source/app.js.html#L464) | 2 | learningPanel · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) | ` number(p.traits.retention, 2) ` |
| [app.js:480](../source/app.js.html#L480) | 100 | learningPanel · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) | ` value.level * 100 ` |
| [app.js:514](../source/app.js.html#L514) | 100 | inspector · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) | ` actor.financialPressure * 100 ` |
| [app.js:515](../source/app.js.html#L515) | -3 | inspector · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) | ` decisions .slice(-3) ` |
| [app.js:519](../source/app.js.html#L519) | 2 | inspector · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) | ` number(d.perceived.attitude, 2) ` |
| [app.js:519](../source/app.js.html#L519) | 2 | inspector · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) | ` number(d.perceived.norm, 2) ` |
| [app.js:519](../source/app.js.html#L519) | 2 | inspector · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) | ` number(d.perceived.control, 2) ` |
| [app.js:523](../source/app.js.html#L523) | 100 | inspector · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) | ` actor.motives[i] * 100 ` |
| [app.js:523](../source/app.js.html#L523) | 0 | inspector · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) | ` number(actor.motives[i] * 100, 0) ` |
| [app.js:545](../source/app.js.html#L545) | -80 | renderFeed · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) | ` V.importantEvents(r.events, filter).slice(-80) ` |
| [app.js:590](../source/app.js.html#L590) | 1 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` Math.min(devicePixelRatio &#124;&#124; 1, 2) ` |
| [app.js:590](../source/app.js.html#L590) | 2 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` Math.min(devicePixelRatio &#124;&#124; 1, 2) ` |
| [app.js:591](../source/app.js.html#L591) | 0.43 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` Math.min(w, h) * 0.43 ` |
| [app.js:592](../source/app.js.html#L592) | 2 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` w / 2 ` |
| [app.js:593](../source/app.js.html#L593) | 2 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` h / 2 ` |
| [app.js:598](../source/app.js.html#L598) | 0 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` ctx.fillRect(0, 0, w, h) ` |
| [app.js:598](../source/app.js.html#L598) | 0 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` ctx.fillRect(0, 0, w, h) ` |
| [app.js:600](../source/app.js.html#L600) | 0 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` ctx.arc(cx, cy, size * V.core * zoom, 0, Math.PI * 2) ` |
| [app.js:600](../source/app.js.html#L600) | 2 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` Math.PI * 2 ` |
| [app.js:603](../source/app.js.html#L603) | 0.72 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` (() => { /** [AK-VIS-03] [AK-IO-01] $ * Implementation unit for One-page interface, synchronized assessment and review. Follow the reference IDs for its equations, assumptions and verification limi… ` |
| [app.js:603](../source/app.js.html#L603) | 0.95 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` (() => { /** [AK-VIS-03] [AK-IO-01] $ * Implementation unit for One-page interface, synchronized assessment and review. Follow the reference IDs for its equations, assumptions and verification limi… ` |
| [app.js:605](../source/app.js.html#L605) | 0 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` ctx.arc(cx, cy, size * radius * zoom, 0, Math.PI * 2) ` |
| [app.js:605](../source/app.js.html#L605) | 2 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` Math.PI * 2 ` |
| [app.js:607](../source/app.js.html#L607) | 1 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` ctx.lineWidth = 1 ` |
| [app.js:610](../source/app.js.html#L610) | 4 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` ctx.setLineDash([4, 7]) ` |
| [app.js:610](../source/app.js.html#L610) | 7 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` ctx.setLineDash([4, 7]) ` |
| [app.js:620](../source/app.js.html#L620) | 0.88 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` size * 0.88 ` |
| [app.js:621](../source/app.js.html#L621) | 0.88 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` size * 0.88 ` |
| [app.js:640](../source/app.js.html#L640) | 0.35 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` l.strength > 0.35 ` |
| [app.js:640](../source/app.js.html#L640) | 6 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` r.month - 6 ` |
| [app.js:643](../source/app.js.html#L643) | 3 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` r.month - 3 ` |
| [app.js:643](../source/app.js.html#L643) | 3 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` r.month - 3 ` |
| [app.js:657](../source/app.js.html#L657) | -1 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` born: -1 ` |
| [app.js:668](../source/app.js.html#L668) | 0.5 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` strength: 0.5 ` |
| [app.js:670](../source/app.js.html#L670) | -1 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` born: -1 ` |
| [app.js:680](../source/app.js.html#L680) | 1 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` Math.min(1, f.total / 5) ` |
| [app.js:680](../source/app.js.html#L680) | 5 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` f.total / 5 ` |
| [app.js:688](../source/app.js.html#L688) | 0 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` links .filter((l) => visible.has(l.a) && visible.has(l.b)) .slice(0, selected.length ? 180 : 320) ` |
| [app.js:688](../source/app.js.html#L688) | 180 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` links .filter((l) => visible.has(l.a) && visible.has(l.b)) .slice(0, selected.length ? 180 : 320) ` |
| [app.js:688](../source/app.js.html#L688) | 320 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` links .filter((l) => visible.has(l.a) && visible.has(l.b)) .slice(0, selected.length ? 180 : 320) ` |
| [app.js:706](../source/app.js.html#L706) | 0.8 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` ctx.globalAlpha = high ? 0.8 : 0.09 ` |
| [app.js:706](../source/app.js.html#L706) | 0.09 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` ctx.globalAlpha = high ? 0.8 : 0.09 ` |
| [app.js:709](../source/app.js.html#L709) | 1.3 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` 1.3 + l.strength ` |
| [app.js:709](../source/app.js.html#L709) | 0.5 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` 0.5 + l.strength ` |
| [app.js:710](../source/app.js.html#L710) | 3 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` ctx.setLineDash(kind === 'support' ? [3, 3] : []) ` |
| [app.js:710](../source/app.js.html#L710) | 3 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` ctx.setLineDash(kind === 'support' ? [3, 3] : []) ` |
| [app.js:718](../source/app.js.html#L718) | 0.72 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` (b.x - a.x) * 0.72 ` |
| [app.js:719](../source/app.js.html#L719) | 0.72 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` (b.y - a.y) * 0.72 ` |
| [app.js:722](../source/app.js.html#L722) | 5 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` 5 * Math.cos(angle - 0.45) ` |
| [app.js:722](../source/app.js.html#L722) | 0.45 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` angle - 0.45 ` |
| [app.js:722](../source/app.js.html#L722) | 5 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` 5 * Math.sin(angle - 0.45) ` |
| [app.js:722](../source/app.js.html#L722) | 0.45 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` angle - 0.45 ` |
| [app.js:723](../source/app.js.html#L723) | 5 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` 5 * Math.cos(angle + 0.45) ` |
| [app.js:723](../source/app.js.html#L723) | 0.45 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` angle + 0.45 ` |
| [app.js:723](../source/app.js.html#L723) | 5 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` 5 * Math.sin(angle + 0.45) ` |
| [app.js:723](../source/app.js.html#L723) | 0.45 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` angle + 0.45 ` |
| [app.js:728](../source/app.js.html#L728) | 1 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` ctx.globalAlpha = 1 ` |
| [app.js:733](../source/app.js.html#L733) | 4.2 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` radius = salient.has(a.id) ? 4.2 : 1.5 ` |
| [app.js:733](../source/app.js.html#L733) | 1.5 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` radius = salient.has(a.id) ? 4.2 : 1.5 ` |
| [app.js:737](../source/app.js.html#L737) | 1.25 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` radius * 1.25 ` |
| [app.js:741](../source/app.js.html#L741) | 0 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` ctx.arc(p.x, p.y, radius, 0, Math.PI * 2) ` |
| [app.js:741](../source/app.js.html#L741) | 2 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` Math.PI * 2 ` |
| [app.js:746](../source/app.js.html#L746) | 2 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` ctx.lineWidth = selected.includes(a.id) ? 2 : 1 ` |
| [app.js:746](../source/app.js.html#L746) | 1 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` ctx.lineWidth = selected.includes(a.id) ? 2 : 1 ` |
| [app.js:747](../source/app.js.html#L747) | 2.5 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` radius + 2.5 ` |
| [app.js:747](../source/app.js.html#L747) | 0 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` ctx.arc(p.x, p.y, radius + 2.5, 0, Math.PI * 2) ` |
| [app.js:747](../source/app.js.html#L747) | 2 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` Math.PI * 2 ` |
| [app.js:754](../source/app.js.html#L754) | 12 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` ctx.fillText('Inner disc: expected integrity', 12, h - 26) ` |
| [app.js:754](../source/app.js.html#L754) | 26 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` h - 26 ` |
| [app.js:755](../source/app.js.html#L755) | 1 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` zoom.toFixed(1) ` |
| [app.js:755](../source/app.js.html#L755) | 12 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` ctx.fillText('Outer bands: repeated participation · ' + zoom.toFixed(1) + '×', 12, h - 9) ` |
| [app.js:755](../source/app.js.html#L755) | 9 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` h - 9 ` |
| [app.js:763](../source/app.js.html#L763) | 1 | tinyComparison · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Math.max(1, base, reform) ` |
| [app.js:763](../source/app.js.html#L763) | 100 | tinyComparison · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` max = unit === 'RU' ? Math.max(1, base, reform) : 100 ` |
| [app.js:764](../source/app.js.html#L764) | 100 | tinyComparison · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Math.min(100, (100 * base) / max) ` |
| [app.js:764](../source/app.js.html#L764) | 100 | tinyComparison · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` 100 * base ` |
| [app.js:764](../source/app.js.html#L764) | 100 | tinyComparison · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Math.min(100, (100 * reform) / max) ` |
| [app.js:764](../source/app.js.html#L764) | 100 | tinyComparison · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` 100 * reform ` |
| [app.js:778](../source/app.js.html#L778) | 0 | reportFormat · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(value, unit === 'count' ? 0 : unit === 'ratio' ? 2 : 1) ` |
| [app.js:778](../source/app.js.html#L778) | 2 | reportFormat · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(value, unit === 'count' ? 0 : unit === 'ratio' ? 2 : 1) ` |
| [app.js:778](../source/app.js.html#L778) | 1 | reportFormat · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(value, unit === 'count' ? 0 : unit === 'ratio' ? 2 : 1) ` |
| [app.js:795](../source/app.js.html#L795) | 0 | reportEventButtons · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) | ` e.change < 0 ` |
| [app.js:795](../source/app.js.html#L795) | 0 | reportEventButtons · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) | ` e.change > 0 ` |
| [app.js:806](../source/app.js.html#L806) | 0 | reportMeaning · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` events.slice(0, 2) ` |
| [app.js:806](../source/app.js.html#L806) | 2 | reportMeaning · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` events.slice(0, 2) ` |
| [app.js:812](../source/app.js.html#L812) | 2 | reportMeaning · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` events.length > 2 ` |
| [app.js:814](../source/app.js.html#L814) | 2 | reportMeaning · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` events.slice(2) ` |
| [app.js:827](../source/app.js.html#L827) | 340 | reportChart · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` width = 340 ` |
| [app.js:828](../source/app.js.html#L828) | 155 | reportChart · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` height = 155 ` |
| [app.js:829](../source/app.js.html#L829) | 56 | reportChart · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` left = 56 ` |
| [app.js:830](../source/app.js.html#L830) | 12 | reportChart · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` right = 12 ` |
| [app.js:831](../source/app.js.html#L831) | 12 | reportChart · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` top = 12 ` |
| [app.js:832](../source/app.js.html#L832) | 120 | reportChart · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` bottom = 120 ` |
| [app.js:835](../source/app.js.html#L835) | 0 | reportChart · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Math.min(0, ...values) ` |
| [app.js:835](../source/app.js.html#L835) | 0 | reportChart · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` min = allowNegative ? Math.min(0, ...values) : 0 ` |
| [app.js:836](../source/app.js.html#L836) | 0.05 | reportChart · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Math.max(allowNegative ? 0.05 : 1, ...values) ` |
| [app.js:836](../source/app.js.html#L836) | 1 | reportChart · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Math.max(allowNegative ? 0.05 : 1, ...values) ` |
| [app.js:837](../source/app.js.html#L837) | 1 | reportChart · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` span = max - min &#124;&#124; 1 ` |
| [app.js:852](../source/app.js.html#L852) | 1 | lines · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` x(p.month).toFixed(1) ` |
| [app.js:852](../source/app.js.html#L852) | 1 | lines · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` y(p[key]).toFixed(1) ` |
| [app.js:881](../source/app.js.html#L881) | 0 | reportChart · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(max, unit === 'count' ? 0 : 2) ` |
| [app.js:881](../source/app.js.html#L881) | 2 | reportChart · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(max, unit === 'count' ? 0 : 2) ` |
| [app.js:885](../source/app.js.html#L885) | 0 | reportChart · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(min, unit === 'count' ? 0 : 2) ` |
| [app.js:885](../source/app.js.html#L885) | 2 | reportChart · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(min, unit === 'count' ? 0 : 2) ` |
| [app.js:891](../source/app.js.html#L891) | 1 | reportChart · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` x(month).toFixed(1) ` |
| [app.js:899](../source/app.js.html#L899) | 72 | reportChart · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` width - 72 ` |
| [app.js:936](../source/app.js.html#L936) | 1 | showReportEvent · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` updates.length > 1 ` |
| [app.js:967](../source/app.js.html#L967) | 0 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` assessmentPolicy = chosen.some((p) => p.id === old) ? old : (chosen[0]?.id ?? null) ` |
| [app.js:1019](../source/app.js.html#L1019) | 0 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Q.windowValue(rp, id, 0, 12) ` |
| [app.js:1019](../source/app.js.html#L1019) | 12 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Q.windowValue(rp, id, 0, 12) ` |
| [app.js:1020](../source/app.js.html#L1020) | 12 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Q.windowValue(rp, id, month, 12) ` |
| [app.js:1021](../source/app.js.html#L1021) | 12 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Q.windowValue(bp, id, month, 12) ` |
| [app.js:1027](../source/app.js.html#L1027) | 100 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` 100 * rp.start.impact.corrupt ` |
| [app.js:1029](../source/app.js.html#L1029) | 0 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` p.month >= 0 ` |
| [app.js:1032](../source/app.js.html#L1032) | 12 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Q.windowValue(rp, id, p.month, 12) ` |
| [app.js:1033](../source/app.js.html#L1033) | 12 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Q.windowValue(bp, id, p.month, 12) ` |
| [app.js:1043](../source/app.js.html#L1043) | 0 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` baseline: p.difference === null ? null : 0 ` |
| [app.js:1069](../source/app.js.html#L1069) | 1 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` config.policies.length > 1 ` |
| [app.js:1116](../source/app.js.html#L1116) | 0 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Q.eventsFor(rp, id, p.id, month, Number($('impactWindow').value) &#124;&#124; 0) ` |
| [app.js:1122](../source/app.js.html#L1122) | 0 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` (output?.value ?? 0) - (baseOutput?.value ?? 0) ` |
| [app.js:1122](../source/app.js.html#L1122) | 0 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` (output?.value ?? 0) - (baseOutput?.value ?? 0) ` |
| [app.js:1140](../source/app.js.html#L1140) | 3 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(p.value, 3) ` |
| [app.js:1142](../source/app.js.html#L1142) | 3 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(p.baseline, 3) ` |
| [app.js:1150](../source/app.js.html#L1150) | 0 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(tool.n, 0) ` |
| [app.js:1190](../source/app.js.html#L1190) | 0 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` (all[k] &#124;&#124; 0) + 1 ` |
| [app.js:1190](../source/app.js.html#L1190) | 1 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` (all[k] &#124;&#124; 0) + 1 ` |
| [app.js:1238](../source/app.js.html#L1238) | 100 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` flow.rate * 100 ` |
| [app.js:1280](../source/app.js.html#L1280) | 0 | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` 'Recent results · ' + (rw?.months ?? 0) ` |
| [app.js:1282](../source/app.js.html#L1282) | 1 | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` rw.fromMonth + 1 ` |
| [app.js:1284](../source/app.js.html#L1284) | 3 | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(bw?.rate, 3) ` |
| [app.js:1285](../source/app.js.html#L1285) | 3 | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(rw?.rate, 3) ` |
| [app.js:1292](../source/app.js.html#L1292) | 0 | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` difference < 0 ` |
| [app.js:1294](../source/app.js.html#L1294) | 0 | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` difference > 0 ` |
| [app.js:1325](../source/app.js.html#L1325) | 1 | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(x, label.includes('RU') ? 1 : 0) ` |
| [app.js:1325](../source/app.js.html#L1325) | 0 | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(x, label.includes('RU') ? 1 : 0) ` |
| [app.js:1327](../source/app.js.html#L1327) | 1 | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(y, label.includes('RU') ? 1 : 0) ` |
| [app.js:1327](../source/app.js.html#L1327) | 0 | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(y, label.includes('RU') ? 1 : 0) ` |
| [app.js:1344](../source/app.js.html#L1344) | 0 | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(x.wait, 0) ` |
| [app.js:1351](../source/app.js.html#L1351) | 1 | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` completed.replications.length > 1 ` |
| [app.js:1363](../source/app.js.html#L1363) | 2 | renderReplications · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` rows.length < 2 ` |
| [app.js:1364](../source/app.js.html#L1364) | 2 | renderReplications · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` rows.length < 2 ` |
| [app.js:1375](../source/app.js.html#L1375) | 0 | renderReplications · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(r.reformMetrics?.corruptActs, 0) ` |
| [app.js:1377](../source/app.js.html#L1377) | 0 | renderReplications · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(r.baselineMetrics?.corruptActs, 0) ` |
| [app.js:1417](../source/app.js.html#L1417) | -1 | selectedImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` series.at(-1) ` |
| [app.js:1424](../source/app.js.html#L1424) | 280 | drawImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Math.max(280, $('impactChart').getBoundingClientRect().width &#124;&#124; 620) ` |
| [app.js:1424](../source/app.js.html#L1424) | 620 | drawImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Math.max(280, $('impactChart').getBoundingClientRect().width &#124;&#124; 620) ` |
| [app.js:1425](../source/app.js.html#L1425) | 94 | drawImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` width - 94 ` |
| [app.js:1428](../source/app.js.html#L1428) | 0.05 | drawImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Math.max(0.05, ...values.map((x) => Math.abs(x.difference))) ` |
| [app.js:1428](../source/app.js.html#L1428) | 1.15 | drawImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Math.max(0.05, ...values.map((x) => Math.abs(x.difference))) * 1.15 ` |
| [app.js:1430](../source/app.js.html#L1430) | 94 | drawImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` zero = 94 ` |
| [app.js:1431](../source/app.js.html#L1431) | 62 | drawImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` 62 / extent ` |
| [app.js:1439](../source/app.js.html#L1439) | 70 | drawImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` 70 + (plot * x.month) / duration ` |
| [app.js:1439](../source/app.js.html#L1439) | 1 | drawImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` (70 + (plot * x.month) / duration).toFixed(1) ` |
| [app.js:1441](../source/app.js.html#L1441) | 1 | drawImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` (zero - scale * x.difference).toFixed(1) ` |
| [app.js:1444](../source/app.js.html#L1444) | 2 | label · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` x.toPrecision(2) ` |
| [app.js:1447](../source/app.js.html#L1447) | 24 | drawImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` width - 24 ` |
| [app.js:1447](../source/app.js.html#L1447) | 24 | drawImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` width - 24 ` |
| [app.js:1447](../source/app.js.html#L1447) | 82 | drawImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` width - 82 ` |
| [app.js:1458](../source/app.js.html#L1458) | 100 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` (r.month / duration) * 100 ` |
| [app.js:1467](../source/app.js.html#L1467) | 1 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` activeConfig?.repetitions > 1 ` |
| [app.js:1471](../source/app.js.html#L1471) | 1 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` current.repetitions > 1 ` |
| [app.js:1472](../source/app.js.html#L1472) | 1 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | `` `Repetition ${current.replicate &#124;&#124; current.replications?.length &#124;&#124; 1} / ${current.repetitions &#124;&#124; activeConfig.repetitions}` + (current.repeatMonth !== undefined ? ' · processing month ' + current.r… `` |
| [app.js:1495](../source/app.js.html#L1495) | 10 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` r.metrics.corruptState / 10 ` |
| [app.js:1496](../source/app.js.html#L1496) | 0 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(r.metrics.corruptActs, 0) ` |
| [app.js:1519](../source/app.js.html#L1519) | 0 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` delta > 0 ` |
| [app.js:1539](../source/app.js.html#L1539) | 100 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` r.metrics.meanTrust * 100 ` |
| [app.js:1539](../source/app.js.html#L1539) | 100 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` r.metrics.meanControl * 100 ` |
| [app.js:1541](../source/app.js.html#L1541) | 100 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` r.metrics.meanRisk * 100 ` |
| [app.js:1542](../source/app.js.html#L1542) | 0 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(r.metrics.cashConstrained, 0) ` |
| [app.js:1543](../source/app.js.html#L1543) | 100 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` r.metrics.meanFinancialPressure * 100 ` |
| [app.js:1552](../source/app.js.html#L1552) | 0 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(r.metrics.backlog, 0) ` |
| [app.js:1553](../source/app.js.html#L1553) | 0 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(r.metrics.caseBacklog, 0) ` |
| [app.js:1576](../source/app.js.html#L1576) | 100 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` r.metrics[key] * 100 ` |
| [app.js:1579](../source/app.js.html#L1579) | 0 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Math.max(0, Math.min(100, pm[key] * 100)) ` |
| [app.js:1579](../source/app.js.html#L1579) | 100 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Math.min(100, pm[key] * 100) ` |
| [app.js:1579](../source/app.js.html#L1579) | 100 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` pm[key] * 100 ` |
| [app.js:1581](../source/app.js.html#L1581) | 0 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Math.max(0, Math.min(100, r.metrics[key] * 100)) ` |
| [app.js:1581](../source/app.js.html#L1581) | 100 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Math.min(100, r.metrics[key] * 100) ` |
| [app.js:1581](../source/app.js.html#L1581) | 100 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` r.metrics[key] * 100 ` |
| [app.js:1583](../source/app.js.html#L1583) | 100 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` pm[key] * 100 ` |
| [app.js:1604](../source/app.js.html#L1604) | 1 | openDB · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` indexedDB.open('antarkya-v2', 1) ` |
| [app.js:1707](../source/app.js.html#L1707) | 1000 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` result.reform?.agents?.length !== 1000 ` |
| [app.js:1713](../source/app.js.html#L1713) | 0 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` i = 0 ` |
| [app.js:1713](../source/app.js.html#L1713) | 1000 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` i < 1000 ` |
| [app.js:1718](../source/app.js.html#L1718) | 0 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` a.role < 0 ` |
| [app.js:1719](../source/app.js.html#L1719) | 3 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` a.role > 3 ` |
| [app.js:1722](../source/app.js.html#L1722) | 0 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` a.x < 0 ` |
| [app.js:1723](../source/app.js.html#L1723) | 1 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` a.x > 1 ` |
| [app.js:1724](../source/app.js.html#L1724) | 0 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` a.y < 0 ` |
| [app.js:1725](../source/app.js.html#L1725) | 1 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` a.y > 1 ` |
| [app.js:1734](../source/app.js.html#L1734) | 1000 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` result.reform.agentProfiles.length !== 1000 ` |
| [app.js:1740](../source/app.js.html#L1740) | 9 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` a.motives.length !== 9 ` |
| [app.js:1741](../source/app.js.html#L1741) | 0 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` x > 0 ` |
| [app.js:1742](../source/app.js.html#L1742) | 0 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` a.motives.reduce((x, y) => x + y, 0) ` |
| [app.js:1742](../source/app.js.html#L1742) | 1 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` a.motives.reduce((x, y) => x + y, 0) - 1 ` |
| [app.js:1742](../source/app.js.html#L1742) | 1e-6 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` Math.abs(a.motives.reduce((x, y) => x + y, 0) - 1) > 1e-6 ` |
| [app.js:1777](../source/app.js.html#L1777) | 0 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` id < 0 ` |
| [app.js:1777](../source/app.js.html#L1777) | 1000 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` id >= 1000 ` |
| [app.js:1784](../source/app.js.html#L1784) | 0 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` x.id < 0 ` |
| [app.js:1784](../source/app.js.html#L1784) | 1000 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` x.id >= 1000 ` |
| [app.js:1788](../source/app.js.html#L1788) | 4 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` result.reform.distribution.length !== 4 ` |
| [app.js:1834](../source/app.js.html#L1834) | 2000 | download · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` setTimeout(() => URL.revokeObjectURL(url), 2000) ` |
| [app.js:1915](../source/app.js.html#L1915) | 3 | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` Math.min(3, zoom + 0.25) ` |
| [app.js:1915](../source/app.js.html#L1915) | 0.25 | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` zoom + 0.25 ` |
| [app.js:1919](../source/app.js.html#L1919) | 1 | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` Math.max(1, zoom - 0.25) ` |
| [app.js:1919](../source/app.js.html#L1919) | 0.25 | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` zoom - 0.25 ` |
| [app.js:1920](../source/app.js.html#L1920) | 1 | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` zoom === 1 ` |
| [app.js:1920](../source/app.js.html#L1920) | 0 | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` x: 0 ` |
| [app.js:1920](../source/app.js.html#L1920) | 0 | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` y: 0 ` |
| [app.js:1928](../source/app.js.html#L1928) | 1 | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` zoom <= 1 ` |
| [app.js:1931](../source/app.js.html#L1931) | 5 | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` Math.hypot(dx, dy) > 5 ` |
| [app.js:1944](../source/app.js.html#L1944) | 0 | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` nearest = current.reform.influential .map((a) => ({ id: a.id, d: Math.hypot(positions[a.id].x - x, positions[a.id].y - y) })) .sort((a, b) => a.d - b.d)[0] ` |
| [app.js:1945](../source/app.js.html#L1945) | 25 | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` nearest?.d < 25 ` |
| [app.js:2028](../source/app.js.html#L2028) | 1 | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` rows.push([ A.VERSION, c.country, initial.initialKey, c.eventSeed, 1, branch, ...fields.map((k) => h[k] ?? 0), ]) ` |
| [app.js:2030](../source/app.js.html#L2030) | 0 | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` fields.map((k) => h[k] ?? 0) ` |
| [app.js:2096](../source/app.js.html#L2096) | 0 | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` file = e.target.files[0] ` |
| [app.js:2098](../source/app.js.html#L2098) | 64 | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` 64 * 1024 ` |
| [app.js:2098](../source/app.js.html#L2098) | 1024 | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` 64 * 1024 ` |
| [app.js:2098](../source/app.js.html#L2098) | 1024 | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` 64 * 1024 * 1024 ` |
