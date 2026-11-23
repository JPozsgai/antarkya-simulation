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
| [app.js:319](../source/app.js.html#L319) | 0 | preview · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` r = new A.Simulation(c, i, 0, false) ` |
| [app.js:320](../source/app.js.html#L320) | 0 | preview · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` b = new A.Simulation(c, i, 0, true) ` |
| [app.js:325](../source/app.js.html#L325) | 1 | preview · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` replicate: 1 ` |
| [app.js:459](../source/app.js.html#L459) | 2 | learningPanel · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) | ` number(p.traits.openness, 2) ` |
| [app.js:461](../source/app.js.html#L461) | 2 | learningPanel · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) | ` number(p.traits.learning, 2) ` |
| [app.js:463](../source/app.js.html#L463) | 2 | learningPanel · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) | ` number(p.traits.retention, 2) ` |
| [app.js:479](../source/app.js.html#L479) | 100 | learningPanel · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) | ` value.level * 100 ` |
| [app.js:513](../source/app.js.html#L513) | 100 | inspector · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) | ` actor.financialPressure * 100 ` |
| [app.js:514](../source/app.js.html#L514) | -3 | inspector · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) | ` decisions .slice(-3) ` |
| [app.js:518](../source/app.js.html#L518) | 2 | inspector · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) | ` number(d.perceived.attitude, 2) ` |
| [app.js:518](../source/app.js.html#L518) | 2 | inspector · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) | ` number(d.perceived.norm, 2) ` |
| [app.js:518](../source/app.js.html#L518) | 2 | inspector · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) | ` number(d.perceived.control, 2) ` |
| [app.js:522](../source/app.js.html#L522) | 100 | inspector · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) | ` actor.motives[i] * 100 ` |
| [app.js:522](../source/app.js.html#L522) | 0 | inspector · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) | ` number(actor.motives[i] * 100, 0) ` |
| [app.js:543](../source/app.js.html#L543) | -80 | renderFeed · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) | ` V.importantEvents(r.events, filter).slice(-80) ` |
| [app.js:588](../source/app.js.html#L588) | 1 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` Math.min(devicePixelRatio &#124;&#124; 1, 2) ` |
| [app.js:588](../source/app.js.html#L588) | 2 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` Math.min(devicePixelRatio &#124;&#124; 1, 2) ` |
| [app.js:589](../source/app.js.html#L589) | 0.43 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` Math.min(w, h) * 0.43 ` |
| [app.js:590](../source/app.js.html#L590) | 2 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` w / 2 ` |
| [app.js:591](../source/app.js.html#L591) | 2 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` h / 2 ` |
| [app.js:596](../source/app.js.html#L596) | 0 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` ctx.fillRect(0, 0, w, h) ` |
| [app.js:596](../source/app.js.html#L596) | 0 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` ctx.fillRect(0, 0, w, h) ` |
| [app.js:598](../source/app.js.html#L598) | 0 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` ctx.arc(cx, cy, size * V.core * zoom, 0, Math.PI * 2) ` |
| [app.js:598](../source/app.js.html#L598) | 2 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` Math.PI * 2 ` |
| [app.js:601](../source/app.js.html#L601) | 0.72 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` (() => { /** [AK-VIS-03] [AK-IO-01] $ * Implementation unit for One-page interface, synchronized assessment and review. Follow the reference IDs for its equations, assumptions and verification limi… ` |
| [app.js:601](../source/app.js.html#L601) | 0.95 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` (() => { /** [AK-VIS-03] [AK-IO-01] $ * Implementation unit for One-page interface, synchronized assessment and review. Follow the reference IDs for its equations, assumptions and verification limi… ` |
| [app.js:603](../source/app.js.html#L603) | 0 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` ctx.arc(cx, cy, size * radius * zoom, 0, Math.PI * 2) ` |
| [app.js:603](../source/app.js.html#L603) | 2 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` Math.PI * 2 ` |
| [app.js:605](../source/app.js.html#L605) | 1 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` ctx.lineWidth = 1 ` |
| [app.js:608](../source/app.js.html#L608) | 4 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` ctx.setLineDash([4, 7]) ` |
| [app.js:608](../source/app.js.html#L608) | 7 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` ctx.setLineDash([4, 7]) ` |
| [app.js:618](../source/app.js.html#L618) | 0.88 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` size * 0.88 ` |
| [app.js:619](../source/app.js.html#L619) | 0.88 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` size * 0.88 ` |
| [app.js:638](../source/app.js.html#L638) | 0.35 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` l.strength > 0.35 ` |
| [app.js:638](../source/app.js.html#L638) | 6 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` r.month - 6 ` |
| [app.js:641](../source/app.js.html#L641) | 3 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` r.month - 3 ` |
| [app.js:641](../source/app.js.html#L641) | 3 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` r.month - 3 ` |
| [app.js:655](../source/app.js.html#L655) | -1 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` born: -1 ` |
| [app.js:666](../source/app.js.html#L666) | 0.5 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` strength: 0.5 ` |
| [app.js:668](../source/app.js.html#L668) | -1 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` born: -1 ` |
| [app.js:678](../source/app.js.html#L678) | 1 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` Math.min(1, f.total / 5) ` |
| [app.js:678](../source/app.js.html#L678) | 5 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` f.total / 5 ` |
| [app.js:686](../source/app.js.html#L686) | 0 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` links .filter((l) => visible.has(l.a) && visible.has(l.b)) .slice(0, selected.length ? 180 : 320) ` |
| [app.js:686](../source/app.js.html#L686) | 180 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` links .filter((l) => visible.has(l.a) && visible.has(l.b)) .slice(0, selected.length ? 180 : 320) ` |
| [app.js:686](../source/app.js.html#L686) | 320 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` links .filter((l) => visible.has(l.a) && visible.has(l.b)) .slice(0, selected.length ? 180 : 320) ` |
| [app.js:704](../source/app.js.html#L704) | 0.8 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` ctx.globalAlpha = high ? 0.8 : 0.09 ` |
| [app.js:704](../source/app.js.html#L704) | 0.09 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` ctx.globalAlpha = high ? 0.8 : 0.09 ` |
| [app.js:707](../source/app.js.html#L707) | 1.3 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` 1.3 + l.strength ` |
| [app.js:707](../source/app.js.html#L707) | 0.5 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` 0.5 + l.strength ` |
| [app.js:708](../source/app.js.html#L708) | 3 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` ctx.setLineDash(kind === 'support' ? [3, 3] : []) ` |
| [app.js:708](../source/app.js.html#L708) | 3 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` ctx.setLineDash(kind === 'support' ? [3, 3] : []) ` |
| [app.js:716](../source/app.js.html#L716) | 0.72 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` (b.x - a.x) * 0.72 ` |
| [app.js:717](../source/app.js.html#L717) | 0.72 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` (b.y - a.y) * 0.72 ` |
| [app.js:720](../source/app.js.html#L720) | 5 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` 5 * Math.cos(angle - 0.45) ` |
| [app.js:720](../source/app.js.html#L720) | 0.45 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` angle - 0.45 ` |
| [app.js:720](../source/app.js.html#L720) | 5 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` 5 * Math.sin(angle - 0.45) ` |
| [app.js:720](../source/app.js.html#L720) | 0.45 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` angle - 0.45 ` |
| [app.js:721](../source/app.js.html#L721) | 5 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` 5 * Math.cos(angle + 0.45) ` |
| [app.js:721](../source/app.js.html#L721) | 0.45 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` angle + 0.45 ` |
| [app.js:721](../source/app.js.html#L721) | 5 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` 5 * Math.sin(angle + 0.45) ` |
| [app.js:721](../source/app.js.html#L721) | 0.45 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` angle + 0.45 ` |
| [app.js:726](../source/app.js.html#L726) | 1 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` ctx.globalAlpha = 1 ` |
| [app.js:731](../source/app.js.html#L731) | 4.2 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` radius = salient.has(a.id) ? 4.2 : 1.5 ` |
| [app.js:731](../source/app.js.html#L731) | 1.5 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` radius = salient.has(a.id) ? 4.2 : 1.5 ` |
| [app.js:735](../source/app.js.html#L735) | 1.25 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` radius * 1.25 ` |
| [app.js:739](../source/app.js.html#L739) | 0 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` ctx.arc(p.x, p.y, radius, 0, Math.PI * 2) ` |
| [app.js:739](../source/app.js.html#L739) | 2 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` Math.PI * 2 ` |
| [app.js:744](../source/app.js.html#L744) | 2 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` ctx.lineWidth = selected.includes(a.id) ? 2 : 1 ` |
| [app.js:744](../source/app.js.html#L744) | 1 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` ctx.lineWidth = selected.includes(a.id) ? 2 : 1 ` |
| [app.js:745](../source/app.js.html#L745) | 2.5 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` radius + 2.5 ` |
| [app.js:745](../source/app.js.html#L745) | 0 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` ctx.arc(p.x, p.y, radius + 2.5, 0, Math.PI * 2) ` |
| [app.js:745](../source/app.js.html#L745) | 2 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` Math.PI * 2 ` |
| [app.js:752](../source/app.js.html#L752) | 12 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` ctx.fillText('Inner disc: expected integrity', 12, h - 26) ` |
| [app.js:752](../source/app.js.html#L752) | 26 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` h - 26 ` |
| [app.js:753](../source/app.js.html#L753) | 1 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` zoom.toFixed(1) ` |
| [app.js:753](../source/app.js.html#L753) | 12 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` ctx.fillText('Outer bands: repeated participation · ' + zoom.toFixed(1) + '×', 12, h - 9) ` |
| [app.js:753](../source/app.js.html#L753) | 9 | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) | ` h - 9 ` |
| [app.js:761](../source/app.js.html#L761) | 1 | tinyComparison · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Math.max(1, base, reform) ` |
| [app.js:761](../source/app.js.html#L761) | 100 | tinyComparison · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` max = unit === 'RU' ? Math.max(1, base, reform) : 100 ` |
| [app.js:762](../source/app.js.html#L762) | 100 | tinyComparison · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Math.min(100, (100 * base) / max) ` |
| [app.js:762](../source/app.js.html#L762) | 100 | tinyComparison · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` 100 * base ` |
| [app.js:762](../source/app.js.html#L762) | 100 | tinyComparison · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Math.min(100, (100 * reform) / max) ` |
| [app.js:762](../source/app.js.html#L762) | 100 | tinyComparison · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` 100 * reform ` |
| [app.js:776](../source/app.js.html#L776) | 0 | reportFormat · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(value, unit === 'count' ? 0 : unit === 'ratio' ? 2 : 1) ` |
| [app.js:776](../source/app.js.html#L776) | 2 | reportFormat · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(value, unit === 'count' ? 0 : unit === 'ratio' ? 2 : 1) ` |
| [app.js:776](../source/app.js.html#L776) | 1 | reportFormat · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(value, unit === 'count' ? 0 : unit === 'ratio' ? 2 : 1) ` |
| [app.js:793](../source/app.js.html#L793) | 0 | reportEventButtons · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) | ` e.change < 0 ` |
| [app.js:793](../source/app.js.html#L793) | 0 | reportEventButtons · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) | ` e.change > 0 ` |
| [app.js:804](../source/app.js.html#L804) | 0 | reportMeaning · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` events.slice(0, 2) ` |
| [app.js:804](../source/app.js.html#L804) | 2 | reportMeaning · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` events.slice(0, 2) ` |
| [app.js:810](../source/app.js.html#L810) | 2 | reportMeaning · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` events.length > 2 ` |
| [app.js:812](../source/app.js.html#L812) | 2 | reportMeaning · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` events.slice(2) ` |
| [app.js:825](../source/app.js.html#L825) | 340 | reportChart · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` width = 340 ` |
| [app.js:826](../source/app.js.html#L826) | 155 | reportChart · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` height = 155 ` |
| [app.js:827](../source/app.js.html#L827) | 56 | reportChart · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` left = 56 ` |
| [app.js:828](../source/app.js.html#L828) | 12 | reportChart · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` right = 12 ` |
| [app.js:829](../source/app.js.html#L829) | 12 | reportChart · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` top = 12 ` |
| [app.js:830](../source/app.js.html#L830) | 120 | reportChart · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` bottom = 120 ` |
| [app.js:833](../source/app.js.html#L833) | 0 | reportChart · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Math.min(0, ...values) ` |
| [app.js:833](../source/app.js.html#L833) | 0 | reportChart · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` min = allowNegative ? Math.min(0, ...values) : 0 ` |
| [app.js:834](../source/app.js.html#L834) | 0.05 | reportChart · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Math.max(allowNegative ? 0.05 : 1, ...values) ` |
| [app.js:834](../source/app.js.html#L834) | 1 | reportChart · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Math.max(allowNegative ? 0.05 : 1, ...values) ` |
| [app.js:835](../source/app.js.html#L835) | 1 | reportChart · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` span = max - min &#124;&#124; 1 ` |
| [app.js:850](../source/app.js.html#L850) | 1 | lines · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` x(p.month).toFixed(1) ` |
| [app.js:850](../source/app.js.html#L850) | 1 | lines · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` y(p[key]).toFixed(1) ` |
| [app.js:879](../source/app.js.html#L879) | 0 | reportChart · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(max, unit === 'count' ? 0 : 2) ` |
| [app.js:879](../source/app.js.html#L879) | 2 | reportChart · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(max, unit === 'count' ? 0 : 2) ` |
| [app.js:883](../source/app.js.html#L883) | 0 | reportChart · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(min, unit === 'count' ? 0 : 2) ` |
| [app.js:883](../source/app.js.html#L883) | 2 | reportChart · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(min, unit === 'count' ? 0 : 2) ` |
| [app.js:889](../source/app.js.html#L889) | 1 | reportChart · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` x(month).toFixed(1) ` |
| [app.js:897](../source/app.js.html#L897) | 72 | reportChart · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` width - 72 ` |
| [app.js:934](../source/app.js.html#L934) | 1 | showReportEvent · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) | ` updates.length > 1 ` |
| [app.js:965](../source/app.js.html#L965) | 0 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` assessmentPolicy = chosen.some((p) => p.id === old) ? old : (chosen[0]?.id ?? null) ` |
| [app.js:1017](../source/app.js.html#L1017) | 0 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Q.windowValue(rp, id, 0, 12) ` |
| [app.js:1017](../source/app.js.html#L1017) | 12 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Q.windowValue(rp, id, 0, 12) ` |
| [app.js:1018](../source/app.js.html#L1018) | 12 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Q.windowValue(rp, id, month, 12) ` |
| [app.js:1019](../source/app.js.html#L1019) | 12 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Q.windowValue(bp, id, month, 12) ` |
| [app.js:1025](../source/app.js.html#L1025) | 100 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` 100 * rp.start.impact.corrupt ` |
| [app.js:1027](../source/app.js.html#L1027) | 0 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` p.month >= 0 ` |
| [app.js:1030](../source/app.js.html#L1030) | 12 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Q.windowValue(rp, id, p.month, 12) ` |
| [app.js:1031](../source/app.js.html#L1031) | 12 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Q.windowValue(bp, id, p.month, 12) ` |
| [app.js:1041](../source/app.js.html#L1041) | 0 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` baseline: p.difference === null ? null : 0 ` |
| [app.js:1067](../source/app.js.html#L1067) | 1 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` config.policies.length > 1 ` |
| [app.js:1114](../source/app.js.html#L1114) | 0 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Q.eventsFor(rp, id, p.id, month, Number($('impactWindow').value) &#124;&#124; 0) ` |
| [app.js:1120](../source/app.js.html#L1120) | 0 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` (output?.value ?? 0) - (baseOutput?.value ?? 0) ` |
| [app.js:1120](../source/app.js.html#L1120) | 0 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` (output?.value ?? 0) - (baseOutput?.value ?? 0) ` |
| [app.js:1138](../source/app.js.html#L1138) | 3 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(p.value, 3) ` |
| [app.js:1140](../source/app.js.html#L1140) | 3 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(p.baseline, 3) ` |
| [app.js:1148](../source/app.js.html#L1148) | 0 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(tool.n, 0) ` |
| [app.js:1188](../source/app.js.html#L1188) | 0 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` (all[k] &#124;&#124; 0) + 1 ` |
| [app.js:1188](../source/app.js.html#L1188) | 1 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` (all[k] &#124;&#124; 0) + 1 ` |
| [app.js:1236](../source/app.js.html#L1236) | 100 | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` flow.rate * 100 ` |
| [app.js:1278](../source/app.js.html#L1278) | 0 | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` 'Recent results · ' + (rw?.months ?? 0) ` |
| [app.js:1280](../source/app.js.html#L1280) | 1 | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` rw.fromMonth + 1 ` |
| [app.js:1282](../source/app.js.html#L1282) | 3 | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(bw?.rate, 3) ` |
| [app.js:1283](../source/app.js.html#L1283) | 3 | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(rw?.rate, 3) ` |
| [app.js:1290](../source/app.js.html#L1290) | 0 | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` difference < 0 ` |
| [app.js:1292](../source/app.js.html#L1292) | 0 | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` difference > 0 ` |
| [app.js:1323](../source/app.js.html#L1323) | 1 | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(x, label.includes('RU') ? 1 : 0) ` |
| [app.js:1323](../source/app.js.html#L1323) | 0 | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(x, label.includes('RU') ? 1 : 0) ` |
| [app.js:1325](../source/app.js.html#L1325) | 1 | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(y, label.includes('RU') ? 1 : 0) ` |
| [app.js:1325](../source/app.js.html#L1325) | 0 | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(y, label.includes('RU') ? 1 : 0) ` |
| [app.js:1342](../source/app.js.html#L1342) | 0 | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(x.wait, 0) ` |
| [app.js:1349](../source/app.js.html#L1349) | 1 | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` completed.replications.length > 1 ` |
| [app.js:1361](../source/app.js.html#L1361) | 2 | renderReplications · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` rows.length < 2 ` |
| [app.js:1362](../source/app.js.html#L1362) | 2 | renderReplications · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` rows.length < 2 ` |
| [app.js:1373](../source/app.js.html#L1373) | 0 | renderReplications · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(r.reformMetrics?.corruptActs, 0) ` |
| [app.js:1375](../source/app.js.html#L1375) | 0 | renderReplications · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(r.baselineMetrics?.corruptActs, 0) ` |
| [app.js:1415](../source/app.js.html#L1415) | -1 | selectedImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` series.at(-1) ` |
| [app.js:1422](../source/app.js.html#L1422) | 280 | drawImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Math.max(280, $('impactChart').getBoundingClientRect().width &#124;&#124; 620) ` |
| [app.js:1422](../source/app.js.html#L1422) | 620 | drawImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Math.max(280, $('impactChart').getBoundingClientRect().width &#124;&#124; 620) ` |
| [app.js:1423](../source/app.js.html#L1423) | 94 | drawImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` width - 94 ` |
| [app.js:1426](../source/app.js.html#L1426) | 0.05 | drawImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Math.max(0.05, ...values.map((x) => Math.abs(x.difference))) ` |
| [app.js:1426](../source/app.js.html#L1426) | 1.15 | drawImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Math.max(0.05, ...values.map((x) => Math.abs(x.difference))) * 1.15 ` |
| [app.js:1428](../source/app.js.html#L1428) | 94 | drawImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` zero = 94 ` |
| [app.js:1429](../source/app.js.html#L1429) | 62 | drawImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` 62 / extent ` |
| [app.js:1437](../source/app.js.html#L1437) | 70 | drawImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` 70 + (plot * x.month) / duration ` |
| [app.js:1437](../source/app.js.html#L1437) | 1 | drawImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` (70 + (plot * x.month) / duration).toFixed(1) ` |
| [app.js:1439](../source/app.js.html#L1439) | 1 | drawImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` (zero - scale * x.difference).toFixed(1) ` |
| [app.js:1442](../source/app.js.html#L1442) | 2 | label · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` x.toPrecision(2) ` |
| [app.js:1445](../source/app.js.html#L1445) | 24 | drawImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` width - 24 ` |
| [app.js:1445](../source/app.js.html#L1445) | 24 | drawImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` width - 24 ` |
| [app.js:1445](../source/app.js.html#L1445) | 82 | drawImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` width - 82 ` |
| [app.js:1455](../source/app.js.html#L1455) | 100 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` (r.month / duration) * 100 ` |
| [app.js:1464](../source/app.js.html#L1464) | 1 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` activeConfig?.repetitions > 1 ` |
| [app.js:1468](../source/app.js.html#L1468) | 1 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` current.repetitions > 1 ` |
| [app.js:1469](../source/app.js.html#L1469) | 1 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | `` `Repetition ${current.replicate &#124;&#124; current.replications?.length &#124;&#124; 1} / ${current.repetitions &#124;&#124; activeConfig.repetitions}` + (current.repeatMonth !== undefined ? ' · processing month ' + current.r… `` |
| [app.js:1492](../source/app.js.html#L1492) | 10 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` r.metrics.corruptState / 10 ` |
| [app.js:1493](../source/app.js.html#L1493) | 0 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(r.metrics.corruptActs, 0) ` |
| [app.js:1516](../source/app.js.html#L1516) | 0 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` delta > 0 ` |
| [app.js:1536](../source/app.js.html#L1536) | 100 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` r.metrics.meanTrust * 100 ` |
| [app.js:1536](../source/app.js.html#L1536) | 100 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` r.metrics.meanControl * 100 ` |
| [app.js:1538](../source/app.js.html#L1538) | 100 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` r.metrics.meanRisk * 100 ` |
| [app.js:1539](../source/app.js.html#L1539) | 0 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(r.metrics.cashConstrained, 0) ` |
| [app.js:1540](../source/app.js.html#L1540) | 100 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` r.metrics.meanFinancialPressure * 100 ` |
| [app.js:1549](../source/app.js.html#L1549) | 0 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(r.metrics.backlog, 0) ` |
| [app.js:1550](../source/app.js.html#L1550) | 0 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` number(r.metrics.caseBacklog, 0) ` |
| [app.js:1573](../source/app.js.html#L1573) | 100 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` r.metrics[key] * 100 ` |
| [app.js:1576](../source/app.js.html#L1576) | 0 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Math.max(0, Math.min(100, pm[key] * 100)) ` |
| [app.js:1576](../source/app.js.html#L1576) | 100 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Math.min(100, pm[key] * 100) ` |
| [app.js:1576](../source/app.js.html#L1576) | 100 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` pm[key] * 100 ` |
| [app.js:1578](../source/app.js.html#L1578) | 0 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Math.max(0, Math.min(100, r.metrics[key] * 100)) ` |
| [app.js:1578](../source/app.js.html#L1578) | 100 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` Math.min(100, r.metrics[key] * 100) ` |
| [app.js:1578](../source/app.js.html#L1578) | 100 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` r.metrics[key] * 100 ` |
| [app.js:1580](../source/app.js.html#L1580) | 100 | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) | ` pm[key] * 100 ` |
| [app.js:1601](../source/app.js.html#L1601) | 1 | openDB · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` indexedDB.open('antarkya-v2', 1) ` |
| [app.js:1704](../source/app.js.html#L1704) | 1000 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` result.reform?.agents?.length !== 1000 ` |
| [app.js:1710](../source/app.js.html#L1710) | 0 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` i = 0 ` |
| [app.js:1710](../source/app.js.html#L1710) | 1000 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` i < 1000 ` |
| [app.js:1715](../source/app.js.html#L1715) | 0 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` a.role < 0 ` |
| [app.js:1716](../source/app.js.html#L1716) | 3 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` a.role > 3 ` |
| [app.js:1719](../source/app.js.html#L1719) | 0 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` a.x < 0 ` |
| [app.js:1720](../source/app.js.html#L1720) | 1 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` a.x > 1 ` |
| [app.js:1721](../source/app.js.html#L1721) | 0 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` a.y < 0 ` |
| [app.js:1722](../source/app.js.html#L1722) | 1 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` a.y > 1 ` |
| [app.js:1731](../source/app.js.html#L1731) | 1000 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` result.reform.agentProfiles.length !== 1000 ` |
| [app.js:1737](../source/app.js.html#L1737) | 9 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` a.motives.length !== 9 ` |
| [app.js:1738](../source/app.js.html#L1738) | 0 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` x > 0 ` |
| [app.js:1739](../source/app.js.html#L1739) | 0 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` a.motives.reduce((x, y) => x + y, 0) ` |
| [app.js:1739](../source/app.js.html#L1739) | 1 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` a.motives.reduce((x, y) => x + y, 0) - 1 ` |
| [app.js:1739](../source/app.js.html#L1739) | 1e-6 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` Math.abs(a.motives.reduce((x, y) => x + y, 0) - 1) > 1e-6 ` |
| [app.js:1771](../source/app.js.html#L1771) | 0 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` id < 0 ` |
| [app.js:1771](../source/app.js.html#L1771) | 1000 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` id >= 1000 ` |
| [app.js:1778](../source/app.js.html#L1778) | 0 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` x.id < 0 ` |
| [app.js:1778](../source/app.js.html#L1778) | 1000 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` x.id >= 1000 ` |
| [app.js:1782](../source/app.js.html#L1782) | 4 | validatePayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` result.reform.distribution.length !== 4 ` |
| [app.js:1828](../source/app.js.html#L1828) | 2000 | download · [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` setTimeout(() => URL.revokeObjectURL(url), 2000) ` |
| [app.js:1909](../source/app.js.html#L1909) | 3 | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` Math.min(3, zoom + 0.25) ` |
| [app.js:1909](../source/app.js.html#L1909) | 0.25 | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` zoom + 0.25 ` |
| [app.js:1913](../source/app.js.html#L1913) | 1 | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` Math.max(1, zoom - 0.25) ` |
| [app.js:1913](../source/app.js.html#L1913) | 0.25 | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` zoom - 0.25 ` |
| [app.js:1914](../source/app.js.html#L1914) | 1 | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` zoom === 1 ` |
| [app.js:1914](../source/app.js.html#L1914) | 0 | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` x: 0 ` |
| [app.js:1914](../source/app.js.html#L1914) | 0 | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` y: 0 ` |
| [app.js:1922](../source/app.js.html#L1922) | 1 | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` zoom <= 1 ` |
| [app.js:1925](../source/app.js.html#L1925) | 5 | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` Math.hypot(dx, dy) > 5 ` |
| [app.js:1938](../source/app.js.html#L1938) | 0 | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` nearest = current.reform.influential .map((a) => ({ id: a.id, d: Math.hypot(positions[a.id].x - x, positions[a.id].y - y) })) .sort((a, b) => a.d - b.d)[0] ` |
| [app.js:1939](../source/app.js.html#L1939) | 25 | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` nearest?.d < 25 ` |
| [app.js:2022](../source/app.js.html#L2022) | 1 | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` rows.push([ A.VERSION, c.country, initial.initialKey, c.eventSeed, 1, branch, ...fields.map((k) => h[k] ?? 0), ]) ` |
| [app.js:2024](../source/app.js.html#L2024) | 0 | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` fields.map((k) => h[k] ?? 0) ` |
| [app.js:2090](../source/app.js.html#L2090) | 0 | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` file = e.target.files[0] ` |
| [app.js:2092](../source/app.js.html#L2092) | 64 | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` 64 * 1024 ` |
| [app.js:2092](../source/app.js.html#L2092) | 1024 | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` 64 * 1024 ` |
| [app.js:2092](../source/app.js.html#L2092) | 1024 | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) | ` 64 * 1024 * 1024 ` |
