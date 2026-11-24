# State definitions and writes — app.js

[Inventory guide](../STATE.html). Whole-function source is authoritative for types, branches, bounds and update semantics.

| Source | Field / target | Operation / expression | Owner / mechanism |
| --- | --- | --- | --- |
| [app.js:25](../source/app.js.html#L25) | ` esc.& ` | object definition · ` '&amp;' ` | esc · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:25](../source/app.js.html#L25) | ` esc.< ` | object definition · ` '&lt;' ` | esc · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:25](../source/app.js.html#L25) | ` esc.> ` | object definition · ` '&gt;' ` | esc · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:25](../source/app.js.html#L25) | ` esc." ` | object definition · ` '&quot;' ` | esc · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:25](../source/app.js.html#L25) | ` esc.' ` | object definition · ` '&#39;' ` | esc · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:34](../source/app.js.html#L34) | ` number.maximumFractionDigits ` | object definition · ` d ` | number · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:34](../source/app.js.html#L34) | ` number.minimumFractionDigits ` | object definition · ` d ` | number · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:49](../source/app.js.html#L49) | ` pan.x ` | object definition · ` 0 ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:49](../source/app.js.html#L49) | ` pan.y ` | object definition · ` 0 ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:59](../source/app.js.html#L59) | ` $('status').textContent ` | = · ` message ` | status · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:77](../source/app.js.html#L77) | ` overrides[el.dataset.override] ` | = · ` Number(el.value) ` | getConfig · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:79](../source/app.js.html#L79) | ` getConfig.country ` | object definition · ` $('country').value ` | getConfig · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:80](../source/app.js.html#L80) | ` getConfig.duration ` | object definition · ` Number($('duration').value) ` | getConfig · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:81](../source/app.js.html#L81) | ` getConfig.repetitions ` | object definition · ` Number($('repetitions').value) ` | getConfig · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:82](../source/app.js.html#L82) | ` getConfig.eventSeed ` | object definition · ` $('eventSeed').value ` | getConfig · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:83](../source/app.js.html#L83) | ` getConfig.initialSeed ` | object definition · ` draftInitialSeed ` | getConfig · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:84](../source/app.js.html#L84) | ` getConfig.overrides ` | object definition · ` overrides ` | getConfig · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:85](../source/app.js.html#L85) | ` getConfig.policies ` | object definition · ` D.policies .filter((p) => $('p-' + p.id).checked) .map((p) => ({ id: p.id, mobilization: Number($('rate-' + p.id).value) / 100 })) ` | getConfig · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:87](../source/app.js.html#L87) | ` getConfig.policies.id ` | object definition · ` p.id ` | getConfig · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:87](../source/app.js.html#L87) | ` getConfig.policies.mobilization ` | object definition · ` Number($('rate-' + p.id).value) / 100 ` | getConfig · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:107](../source/app.js.html#L107) | ` $('eventSeed').readOnly ` | = · ` !$('reuseEventSeed').checked ` | summaryText · [AK-OV-01](../TECHNICAL.html#ak-ov-01) |
| [app.js:108](../source/app.js.html#L108) | ` $('policyCount').textContent ` | = · ` c.policies.length + ' selected' ` | summaryText · [AK-OV-01](../TECHNICAL.html#ak-ov-01) |
| [app.js:109](../source/app.js.html#L109) | ` $('setupSummary').textContent ` | = · `` `${profile().name} · ${c.policies.length} reform${c.policies.length === 1 ? '' : 's'} · ${c.duration} months · ` + (c.policies.length ? c.policies .map( (p) => D.policies.find((q) =… `` | summaryText · [AK-OV-01](../TECHNICAL.html#ak-ov-01) |
| [app.js:123](../source/app.js.html#L123) | ` $('composition').textContent ` | = · ` 'Provisional scaled composition: ' + counts.map((n, i) => n + ' ' + A.TYPES[i].toLowerCase()).join(', ') + '. These are model counts, not national population percentages.' ` | summaryText · [AK-OV-01](../TECHNICAL.html#ak-ov-01) |
| [app.js:151](../source/app.js.html#L151) | ` $('policies').innerHTML ` | = · `` families .map( (f) => `<details><summary>${esc(f)}</summary><div>${D.policies .filter((p) => p.family === f) .map( (p) => `<div class="policy"><label><input ty… `` | buildPolicies · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:165](../source/app.js.html#L165) | ` $('range-' + p.id).hidden ` | = · ` !$('p-' + p.id).checked ` | buildPolicies · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:171](../source/app.js.html#L171) | ` $('slide-' + p.id).value ` | = · ` value ` | buildPolicies · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:172](../source/app.js.html#L172) | ` $('rate-' + p.id).value ` | = · ` value ` | buildPolicies · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:183](../source/app.js.html#L183) | ` base.country ` | object definition · ` p.iso3 ` | countryFields · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:190](../source/app.js.html#L190) | ` $('macroFields').innerHTML ` | = · `` fields .map( ([key, label]) => `<div class="field"><label for="o-${key}">${esc(label)}</label><input type="number" id="o-${key}" data-override="${key}" min="${A.NUMERIC[key][0]}" max="${A.NUMERIC[key][1]}" step="0… `` | countryFields · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:205](../source/app.js.html#L205) | ` $('otherFields').innerHTML ` | = · `` other .map( ([key, label]) => `<div class="field"><label for="o-${key}">${esc(label)}</label><input type="number" id="o-${key}" data-override="${key}" min="0" max="100" step="0.01" value="${Number(base[key].toFixe… `` | countryFields · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:211](../source/app.js.html#L211) | ` $('countryFacts').innerHTML ` | = · ` '<h3>Inherited architecture</h3><ul>' + p.architecture.map((x) => '<li>' + esc(x) + '</li>').join('') + '</ul><p class="small"><b>Procedural constraint:</b> ' + esc(p.political.institutional_constraint) + '</p><p … ` | countryFields · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:219](../source/app.js.html#L219) | ` $('countrySources').innerHTML ` | = · `` A.Baseline.sources(p.iso3) .map( (x) => `<li><a href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.title)}</a></li>`, ) .join('') + p.sources .map( (id) => … `` | countryFields · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:233](../source/app.js.html#L233) | ` $('toolBaseline').innerHTML ` | = · ` '<p class="small">A verified instrument is not necessarily fully operational. An unscoped instrument is not absent.</p><ul class="small">' + D.policies .map( (q) => '<li>' + esc(q.label) + … ` | countryFields · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:243](../source/app.js.html#L243) | ` countryFields.existing_relevant_instrument ` | object definition · ` 'relevant existing instrument documented' ` | countryFields · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:244](../source/app.js.html#L244) | ` countryFields.existing_with_documented_scope_gap ` | object definition · ` 'existing instrument; documented scope gap' ` | countryFields · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:245](../source/app.js.html#L245) | ` countryFields.not_scoped_not_absent ` | object definition · ` 'not fully scoped in this evidence pass' ` | countryFields · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:253](../source/app.js.html#L253) | ` el.dataset.defaultValue ` | = · ` el.value ` | countryFields · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:263](../source/app.js.html#L263) | ` $('country').value ` | = · ` c.country ` | applyConfig · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:264](../source/app.js.html#L264) | ` $('duration').value ` | = · ` String(c.duration) ` | applyConfig · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:265](../source/app.js.html#L265) | ` $('repetitions').value ` | = · ` String(c.repetitions) ` | applyConfig · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:266](../source/app.js.html#L266) | ` $('eventSeed').value ` | = · ` c.eventSeed ` | applyConfig · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:268](../source/app.js.html#L268) | ` $('o-' + k).value ` | = · ` v ` | applyConfig · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:271](../source/app.js.html#L271) | ` $('p-' + p.id).checked ` | = · ` !!found ` | applyConfig · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:272](../source/app.js.html#L272) | ` $('range-' + p.id).hidden ` | = · ` !found ` | applyConfig · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:274](../source/app.js.html#L274) | ` $('rate-' + p.id).value ` | = · ` found.mobilization * 100 ` | applyConfig · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:275](../source/app.js.html#L275) | ` $('slide-' + p.id).value ` | = · ` found.mobilization * 100 ` | applyConfig · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:285](../source/app.js.html#L285) | ` signature.country ` | object definition · ` c.country ` | signature · [AK-INI-01](../TECHNICAL.html#ak-ini-01) |
| [app.js:285](../source/app.js.html#L285) | ` signature.env ` | object definition · ` A.conditions(c) ` | signature · [AK-INI-01](../TECHNICAL.html#ak-ini-01) |
| [app.js:285](../source/app.js.html#L285) | ` signature.initialSeed ` | object definition · ` c.initialSeed ` | signature · [AK-INI-01](../TECHNICAL.html#ak-ini-01) |
| [app.js:305](../source/app.js.html#L305) | ` baseSummary.reporting ` | object definition · ` b.reporting() ` | baseSummary · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:306](../source/app.js.html#L306) | ` baseSummary.hybrid ` | object definition · ` A.Hybrid.summary(b) ` | baseSummary · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:307](../source/app.js.html#L307) | ` baseSummary.metrics ` | object definition · ` b.metrics() ` | baseSummary · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:308](../source/app.js.html#L308) | ` baseSummary.assessment ` | object definition · ` b.assessment() ` | baseSummary · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:309](../source/app.js.html#L309) | ` baseSummary.history ` | object definition · ` b.state.history ` | baseSummary · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:310](../source/app.js.html#L310) | ` baseSummary.classActivity ` | object definition · ` b.classActivity() ` | baseSummary · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:323](../source/app.js.html#L323) | ` preview.reform ` | object definition · ` r.view() ` | preview · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:324](../source/app.js.html#L324) | ` preview.baseline ` | object definition · ` baseSummary(b) ` | preview · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:325](../source/app.js.html#L325) | ` preview.comparison ` | object definition · ` A.comparison(r.view(), baseSummary(b)) ` | preview · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:326](../source/app.js.html#L326) | ` preview.replicate ` | object definition · ` 1 ` | preview · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:327](../source/app.js.html#L327) | ` preview.repetitions ` | object definition · ` c.repetitions ` | preview · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:340](../source/app.js.html#L340) | ` $('run').textContent ` | = · ` 'Run' ` | stopWorker · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [app.js:348](../source/app.js.html#L348) | ` $('eventSeed').value ` | = · ` c.eventSeed ` | initializeWorker · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [app.js:354](../source/app.js.html#L354) | ` $('reportEventDetail').hidden ` | = · ` true ` | initializeWorker · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [app.js:359](../source/app.js.html#L359) | ` worker.onmessage ` | = · ` (e) => { const m = e.data; if (m.type === 'error') { running = false; $('run').textContent = 'Run'; status('Simulation stopped: ' + m.message, true); return; } if (m.type === 'compl… ` | initializeWorker · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [app.js:363](../source/app.js.html#L363) | ` $('run').textContent ` | = · ` 'Run' ` | initializeWorker · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [app.js:371](../source/app.js.html#L371) | ` $('run').textContent ` | = · ` 'Run again' ` | initializeWorker · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [app.js:380](../source/app.js.html#L380) | ` $('run').textContent ` | = · ` running ? 'Pause' : 'Run' ` | initializeWorker · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [app.js:384](../source/app.js.html#L384) | ` worker.onerror ` | = · ` (e) => { running = false; $('run').textContent = 'Run'; status( 'The simulation could not load or continue. Reload the page; if it persists, export your setup and report the error. ' + (e.message &#124;&#124; ''… ` | initializeWorker · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [app.js:386](../source/app.js.html#L386) | ` $('run').textContent ` | = · ` 'Run' ` | initializeWorker · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [app.js:393](../source/app.js.html#L393) | ` initializeWorker.type ` | object definition · ` 'init' ` | initializeWorker · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [app.js:393](../source/app.js.html#L393) | ` initializeWorker.config ` | object definition · ` c ` | initializeWorker · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [app.js:393](../source/app.js.html#L393) | ` initializeWorker.initial ` | object definition · ` initial ` | initializeWorker · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [app.js:402](../source/app.js.html#L402) | ` start.type ` | object definition · ` 'pause' ` | start · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [app.js:408](../source/app.js.html#L408) | ` start.type ` | object definition · ` 'run' ` | start · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [app.js:408](../source/app.js.html#L408) | ` start.delay ` | object definition · ` Number($('pace').value) ` | start · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [app.js:410](../source/app.js.html#L410) | ` $('run').textContent ` | = · ` 'Pause' ` | start · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [app.js:418](../source/app.js.html#L418) | ` start.behavior ` | object definition · ` 'auto' ` | start · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [app.js:418](../source/app.js.html#L418) | ` start.block ` | object definition · ` 'start' ` | start · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [app.js:450](../source/app.js.html#L450) | ` labels.attitude ` | object definition · ` 'Attitude' ` | learningPanel · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) |
| [app.js:451](../source/app.js.html#L451) | ` labels.norm ` | object definition · ` 'Perceived norm' ` | learningPanel · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) |
| [app.js:452](../source/app.js.html#L452) | ` labels.control ` | object definition · ` 'Lawful/reporting control' ` | learningPanel · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) |
| [app.js:453](../source/app.js.html#L453) | ` labels.corruptControl ` | object definition · ` 'Improper-action control' ` | learningPanel · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) |
| [app.js:454](../source/app.js.html#L454) | ` labels.risk ` | object definition · ` 'Accountability-cost learning' ` | learningPanel · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) |
| [app.js:455](../source/app.js.html#L455) | ` labels.knowledge ` | object definition · ` 'Knowledge' ` | learningPanel · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) |
| [app.js:456](../source/app.js.html#L456) | ` labels.reportSafety ` | object definition · ` 'Reporting safety' ` | learningPanel · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) |
| [app.js:513](../source/app.js.html#L513) | ` $('inspector').innerHTML ` | = · `` `<h3>${esc(actor.type)} #${actor.id}</h3><p>${esc(org?.name)} · ${actor.state === 'corrupt' ? 'Triangle: qualifying conduct recorded' : 'Circle: expected integrity / recovery criteria satisfied'}</p><p><b>Why highlighted:</b> ${esc(salie… `` | inspector · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) |
| [app.js:546](../source/app.js.html#L546) | ` $('feedCount').textContent ` | = · ` events.length ` | renderFeed · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) |
| [app.js:547](../source/app.js.html#L547) | ` $('feed').innerHTML ` | = · `` events.length ? events .map( (e) => `<button class="event" data-event="${esc(e.id + '.' + e.update)}" aria-pressed="${selectedEvent === e.id + '.' + e.update}"><span class="eventmeta"><span>${esc… `` | renderFeed · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) |
| [app.js:561](../source/app.js.html#L561) | ` $('inspector').innerHTML ` | = · ` '<h3>' + esc(e.id) + ' · ' + esc(e.status &#124;&#124; e.kind) + '</h3><p>' + esc(e.title) + '</p><p class="small">Month ' + e.month + ' · highlighted actors ' + … ` | renderFeed · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) |
| [app.js:594](../source/app.js.html#L594) | ` canvas.width ` | = · ` Math.round(w * dpr) ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:595](../source/app.js.html#L595) | ` canvas.height ` | = · ` Math.round(h * dpr) ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:597](../source/app.js.html#L597) | ` ctx.fillStyle ` | = · ` '#f6f8f5' ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:601](../source/app.js.html#L601) | ` ctx.fillStyle ` | = · ` '#e8f1eb' ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:606](../source/app.js.html#L606) | ` ctx.strokeStyle ` | = · ` '#d7e1da' ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:607](../source/app.js.html#L607) | ` ctx.lineWidth ` | = · ` 1 ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:616](../source/app.js.html#L616) | ` ctx.strokeStyle ` | = · ` '#c9d7cf' ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:620](../source/app.js.html#L620) | ` anchors.x ` | object definition · ` cx + size * 0.88 * zoom * Math.cos(angle) ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:621](../source/app.js.html#L621) | ` anchors.y ` | object definition · ` cy + size * 0.88 * zoom * Math.sin(angle) ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:623](../source/app.js.html#L623) | ` ctx.font ` | = · ` '14px system-ui' ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:624](../source/app.js.html#L624) | ` ctx.textAlign ` | = · ` 'center' ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:626](../source/app.js.html#L626) | ` ctx.fillStyle ` | = · ` colors[i] ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:630](../source/app.js.html#L630) | ` drawMap.x ` | object definition · ` cx + p.x * size * zoom ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:630](../source/app.js.html#L630) | ` drawMap.y ` | object definition · ` cy + p.y * size * zoom ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:653](../source/app.js.html#L653) | ` drawMap.a ` | object definition · ` a.id ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:654](../source/app.js.html#L654) | ` drawMap.b ` | object definition · ` r.organizations[t.org].leader ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:655](../source/app.js.html#L655) | ` drawMap.strength ` | object definition · ` t.affinity ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:656](../source/app.js.html#L656) | ` drawMap.lastKind ` | object definition · ` 'support' ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:657](../source/app.js.html#L657) | ` drawMap.born ` | object definition · ` -1 ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:666](../source/app.js.html#L666) | ` drawMap.a ` | object definition · ` a.id ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:667](../source/app.js.html#L667) | ` drawMap.b ` | object definition · ` r.organizations[org].leader ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:668](../source/app.js.html#L668) | ` drawMap.strength ` | object definition · ` 0.5 ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:669](../source/app.js.html#L669) | ` drawMap.lastKind ` | object definition · ` 'membership' ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:670](../source/app.js.html#L670) | ` drawMap.born ` | object definition · ` -1 ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:678](../source/app.js.html#L678) | ` drawMap.a ` | object definition · ` r.organizations[f.from].leader ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:679](../source/app.js.html#L679) | ` drawMap.b ` | object definition · ` r.organizations[f.to].leader ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:680](../source/app.js.html#L680) | ` drawMap.strength ` | object definition · ` Math.min(1, f.total / 5) ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:681](../source/app.js.html#L681) | ` drawMap.lastKind ` | object definition · ` 'funding' ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:682](../source/app.js.html#L682) | ` drawMap.born ` | object definition · ` f.last ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:706](../source/app.js.html#L706) | ` ctx.globalAlpha ` | = · ` high ? 0.8 : 0.09 ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:707](../source/app.js.html#L707) | ` ctx.strokeStyle ` | = · ` color ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:708](../source/app.js.html#L708) | ` ctx.fillStyle ` | = · ` color ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:709](../source/app.js.html#L709) | ` ctx.lineWidth ` | = · ` high ? 1.3 + l.strength : 0.5 + l.strength ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:728](../source/app.js.html#L728) | ` ctx.globalAlpha ` | = · ` 1 ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:734](../source/app.js.html#L734) | ` ctx.fillStyle ` | = · ` colors[a.role] ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:745](../source/app.js.html#L745) | ` ctx.strokeStyle ` | = · ` selected.includes(a.id) ? '#102f28' : '#fff' ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:746](../source/app.js.html#L746) | ` ctx.lineWidth ` | = · ` selected.includes(a.id) ? 2 : 1 ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:751](../source/app.js.html#L751) | ` ctx.font ` | = · ` '13px system-ui' ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:752](../source/app.js.html#L752) | ` ctx.textAlign ` | = · ` 'left' ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:753](../source/app.js.html#L753) | ` ctx.fillStyle ` | = · ` '#53645e' ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:921](../source/app.js.html#L921) | ` $('reportEventDetail').hidden ` | = · ` false ` | showReportEvent · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) |
| [app.js:922](../source/app.js.html#L922) | ` $('reportEventDetail').innerHTML ` | = · ` '<h3>' + esc(event.title) + '</h3><p class="small">Month ' + event.month + ' · ' + esc(event.id) + ' · update ' + event.update + ' · ' + esc(event.status &#124;&#124; event.kind) + '</p><… ` | showReportEvent · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) |
| [app.js:955](../source/app.js.html#L955) | ` showReportEvent.behavior ` | object definition · ` 'auto' ` | showReportEvent · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) |
| [app.js:955](../source/app.js.html#L955) | ` showReportEvent.block ` | object definition · ` 'nearest' ` | showReportEvent · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) |
| [app.js:969](../source/app.js.html#L969) | ` select.innerHTML ` | = · ` chosen .map( (p) => '<option value="' + esc(p.id) + '">' + esc(D.policies.find((q) => q.id === p.id).label) + '</option>', ) .join('') ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:979](../source/app.js.html#L979) | ` select.value ` | = · ` assessmentPolicy &#124;&#124; '' ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:980](../source/app.js.html#L980) | ` select.disabled ` | = · ` !chosen.length ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:984](../source/app.js.html#L984) | ` $('assessmentMonth').max ` | = · ` String(r.month) ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:985](../source/app.js.html#L985) | ` $('assessmentMonth').value ` | = · ` String(month) ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:986](../source/app.js.html#L986) | ` $('assessmentMonth').disabled ` | = · ` !r.month ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:987](../source/app.js.html#L987) | ` $('assessmentPhase').textContent ` | = · ` (final ? 'Run complete · Final conditions' : month === r.month ? 'Current conditions' : 'Reviewing conditions') + ' · month ' + month + (completed && month !== r.month ? ' · completed… ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:998](../source/app.js.html#L998) | ` $('assessment').innerHTML ` | = · ` '<p>No additional reform selected. Select a reform to inspect its delivery and policy-specific conditions; package impact remains available below.</p>' ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1000](../source/app.js.html#L1000) | ` $('reportEventDetail').hidden ` | = · ` true ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1008](../source/app.js.html#L1008) | ` $('reportEventDetail').hidden ` | = · ` true ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1009](../source/app.js.html#L1009) | ` $('assessment').innerHTML ` | = · ` '<p class="notice">Policy-specific starting conditions and delivery histories were not recorded in this saved result. Run the scenario again to create the new assessment. Existing results remain available in the package details below.</p>' ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1031](../source/app.js.html#L1031) | ` outSeries.month ` | object definition · ` p.month ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1032](../source/app.js.html#L1032) | ` outSeries.reform ` | object definition · ` Q.windowValue(rp, id, p.month, 12)?.value ?? null ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1033](../source/app.js.html#L1033) | ` outSeries.baseline ` | object definition · ` Q.windowValue(bp, id, p.month, 12)?.value ?? null ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1036](../source/app.js.html#L1036) | ` outcomeSeries.month ` | object definition · ` p.month ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1037](../source/app.js.html#L1037) | ` outcomeSeries.reform ` | object definition · ` p.tools[id].outcome ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1038](../source/app.js.html#L1038) | ` outcomeSeries.baseline ` | object definition · ` bp.history.find((q) => q.month === p.month)?.tools[id].outcome ?? null ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1041](../source/app.js.html#L1041) | ` impactSeries.month ` | object definition · ` p.month ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1042](../source/app.js.html#L1042) | ` impactSeries.reform ` | object definition · ` p.difference ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1043](../source/app.js.html#L1043) | ` impactSeries.baseline ` | object definition · ` p.difference === null ? null : 0 ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1047](../source/app.js.html#L1047) | ` levels.id ` | object definition · ` 'output' ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1048](../source/app.js.html#L1048) | ` levels.title ` | object definition · ` 'Output' ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1049](../source/app.js.html#L1049) | ` levels.label ` | object definition · ` def.output ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1050](../source/app.js.html#L1050) | ` levels.value ` | object definition · ` output?.value ?? null ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1051](../source/app.js.html#L1051) | ` levels.baseline ` | object definition · ` baseOutput?.value ?? null ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1052](../source/app.js.html#L1052) | ` levels.unit ` | object definition · ` def.unit ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1053](../source/app.js.html#L1053) | ` levels.period ` | object definition · ` 'Actual activity · trailing 12 months' ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1054](../source/app.js.html#L1054) | ` levels.series ` | object definition · ` outSeries ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1057](../source/app.js.html#L1057) | ` levels.id ` | object definition · ` 'outcome' ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1058](../source/app.js.html#L1058) | ` levels.title ` | object definition · ` 'Outcome' ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1059](../source/app.js.html#L1059) | ` levels.label ` | object definition · ` D.policies.find((p) => p.id === id).outcome ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1060](../source/app.js.html#L1060) | ` levels.value ` | object definition · ` tool.outcome ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1061](../source/app.js.html#L1061) | ` levels.baseline ` | object definition · ` baseTool.outcome ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1062](../source/app.js.html#L1062) | ` levels.unit ` | object definition · ` outcomeUnit ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1063](../source/app.js.html#L1063) | ` levels.period ` | object definition · ` meta.method ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1064](../source/app.js.html#L1064) | ` levels.series ` | object definition · ` outcomeSeries ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1067](../source/app.js.html#L1067) | ` levels.id ` | object definition · ` 'impact' ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1068](../source/app.js.html#L1068) | ` levels.title ` | object definition · ` 'Impact' ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1069](../source/app.js.html#L1069) | ` levels.label ` | object definition · ` config.policies.length > 1 ? 'Combined reform package' : 'Reform scenario' ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1070](../source/app.js.html#L1070) | ` levels.value ` | object definition · ` ip?.reform?.rate ?? null ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1071](../source/app.js.html#L1071) | ` levels.baseline ` | object definition · ` ip?.baseline?.rate ?? null ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1072](../source/app.js.html#L1072) | ` levels.unit ` | object definition · ` '%' ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1073](../source/app.js.html#L1073) | ` levels.period ` | object definition · ` 'Reform minus baseline, in percentage points · ' + (Number($('impactWindow').value) ? 'past 12 post-adoption months' : 'since adoption') ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1076](../source/app.js.html#L1076) | ` levels.series ` | object definition · ` impactSeries ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1119](../source/app.js.html#L1119) | ` interpret.value ` | object definition · ` p.value ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1120](../source/app.js.html#L1120) | ` interpret.baseline ` | object definition · ` p.baseline ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1121](../source/app.js.html#L1121) | ` interpret.lowerBetter ` | object definition · ` p.id === 'impact' &#124;&#124; !!meta.lowerBetter ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1122](../source/app.js.html#L1122) | ` interpret.outputDelta ` | object definition · ` (output?.value ?? 0) - (baseOutput?.value ?? 0) ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1123](../source/app.js.html#L1123) | ` interpret.impactDelta ` | object definition · ` ip?.difference ?? null ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1124](../source/app.js.html#L1124) | ` interpret.estimated ` | object definition · ` estimated ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1190](../source/app.js.html#L1190) | ` all[k] ` | = · ` (all[k] &#124;&#124; 0) + 1 ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1254](../source/app.js.html#L1254) | ` $('assessment').innerHTML ` | = · ` html ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1278](../source/app.js.html#L1278) | ` $('impactPeriod').textContent ` | = · ` impact.window ? 'Recent results · ' + (rw?.months ?? 0) + ' modeled months' + (rw?.months ? ' · months ' + (rw.fromMonth + 1) + '–' + rw.month : '') : 'Since reform adoption · months 1–' + r.month ` | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1284](../source/app.js.html#L1284) | ` $('baseImpact').textContent ` | = · ` number(bw?.rate, 3) ` | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1285](../source/app.js.html#L1285) | ` $('reformImpact').textContent ` | = · ` number(rw?.rate, 3) ` | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1286](../source/app.js.html#L1286) | ` $('impactDifference').textContent ` | = · ` V.impactDifference(difference) + (difference === null ? '' : ' percentage points') ` | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1288](../source/app.js.html#L1288) | ` $('impactExplanation').textContent ` | = · `` difference === null ? 'Advance the model to create comparable relevant encounters.' : `In this assessment period, reform: ${rw.corrupt} completed corrupt encounters / ${rw.opportunities} relevant encounters; baseline: ${b… `` | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1305](../source/app.js.html#L1305) | ` $('implementationStatus').textContent ` | = · `` flows.length ? `Implementation: ${installed} of ${allocations.length} policy-recipient setups completed; ${delivering} delivered reform work in month ${r.month}. Completed setup does not guarantee continued delivery or changed cond… `` | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1308](../source/app.js.html#L1308) | ` $('impactDetails').innerHTML ` | = · ` '<table class="compact-table"><tr><th>Whole-system consequence · since adoption</th><th>Baseline</th><th>Reform</th></tr>' + [ ['All qualifying acts', b.metrics.corruptActs, r.metrics.corruptActs], ['Coerced payment… ` | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1332](../source/app.js.html#L1332) | ` $('distribution').innerHTML ` | = · ` '<p class="small">Completed simulation participation counts by role at the time of the act; two-party acts can involve two people. Victim payment burdens and waiting are separate.</p><table class="compact-table"><tr><th>Role</th><th>Act … ` | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1350](../source/app.js.html#L1350) | ` $('repeatResults').textContent ` | = · `` stats && completed.replications.length > 1 ? `Across ${completed.replications.length} repetitions of the same starting society (since adoption): mean paired difference ${V.impactDifference(stats.meanDifference)} points; simulatio… `` | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1363](../source/app.js.html#L1363) | ` $('replicationDetails').hidden ` | = · ` rows.length < 2 ` | renderReplications · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1365](../source/app.js.html#L1365) | ` $('replicationTable').innerHTML ` | = · ` '' ` | renderReplications · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1408](../source/app.js.html#L1408) | ` $('replicationTable').innerHTML ` | = · ` html ` | renderReplications · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1417](../source/app.js.html#L1417) | ` selectedImpact.window ` | object definition · ` window ` | selectedImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1417](../source/app.js.html#L1417) | ` selectedImpact.series ` | object definition · ` series ` | selectedImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1417](../source/app.js.html#L1417) | ` selectedImpact.point ` | object definition · ` series.at(-1) ` | selectedImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1426](../source/app.js.html#L1426) | ` drawImpact.series ` | object definition · ` series ` | drawImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1426](../source/app.js.html#L1426) | ` drawImpact.window ` | object definition · ` window ` | drawImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1446](../source/app.js.html#L1446) | ` $('impactChart').innerHTML ` | = · `` `<svg viewBox="0 0 ${width} 210" role="img" aria-label="${mode} reform minus baseline corrupt-encounter rate, in percentage points. Negative values mean fewer corrupt encounters per opportunity."><title>Paired difference over time (${mod… `` | drawImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1458](../source/app.js.html#L1458) | ` $('progressFill').style.width ` | = · ` (r.month / duration) * 100 + '%' ` | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1462](../source/app.js.html#L1462) | ` $('progressLabel').textContent ` | = · `` (completed ? 'Complete' : running ? 'Running' : r.month ? 'Paused' : 'Ready') + ` · month ${r.month} / ${duration}` + (activeConfig ? ' · ' + D.profiles.find((p) => p.iso3 === activeConfig.country).name : '') `` | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1466](../source/app.js.html#L1466) | ` $('repeatStatus').textContent ` | = · `` completed && activeConfig?.repetitions > 1 ? 'All ' + activeConfig.repetitions + ' repetitions complete · map and cards show repetition 1' : current.repetitions > 1 ? `Repetition ${current.re… `` | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1478](../source/app.js.html#L1478) | ` $('runIdentity').textContent ` | = · ` 'Starting society ' + initial.initialKey + ' · Event seed ' + (activeConfig?.eventSeed &#124;&#124; getConfig().eventSeed) ` | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1483](../source/app.js.html#L1483) | ` $('snapshotNote').textContent ` | = · ` 'Initial society ' + initial.initialKey + ' · model ' + A.VERSION + ' · reconstructed pre-policy year' ` | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1489](../source/app.js.html#L1489) | ` $('initialConditions').textContent ` | = · ` 'Starting estimate: ' + initial.initialization.metrics.corruptState + ' agents with recorded qualifying conduct; ' + initial.initialization.metrics.encounterOpportunities + ' modeled encounters during the reconstr… ` | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1495](../source/app.js.html#L1495) | ` $('corruptStat').textContent ` | = · ` number(r.metrics.corruptState / 10) + '%' ` | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1496](../source/app.js.html#L1496) | ` $('actsStat').textContent ` | = · ` number(r.metrics.corruptActs, 0) ` | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1497](../source/app.js.html#L1497) | ` $('encounterStat').textContent ` | = · ` number(current.comparison.reformRate) ` | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1498](../source/app.js.html#L1498) | ` $('classActivity').innerHTML ` | = · ` (r.classActivity &#124;&#124; []) .map((x, i) => { const baseline = current.baseline.classActivity?.[i]?.rate, delta = x.rate === null &#124;&#124; baseline === null &#124;&#124; baseline === undefined ? null … ` | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1524](../source/app.js.html#L1524) | ` $('actors').innerHTML ` | = · `` r.influential .map((x) => `<button data-actor="${x.id}">${esc(r.agents[x.id].type)} #${x.id}</button>`) .join('') `` | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1529](../source/app.js.html#L1529) | ` $('systemStats').innerHTML ` | = · ` '<p class="small">Inherited system workload: ' + initial.cases.filter((c) => c.status !== 'closed').length + ' pending cases and ' + initial.services.length + ' pending services at reform adoption. These totals pr… ` | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1570](../source/app.js.html#L1570) | ` $('decisionPressures').innerHTML ` | = · ` pressures .map( ([label, key]) => '<div class="pressure"><span>' + label + '</span><b>' + number(r.metrics[key] * 100) + (key === 'meanRisk' ? ' / 100' : '%') + '<… ` | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1605](../source/app.js.html#L1605) | ` request.onupgradeneeded ` | = · ` () => request.result.createObjectStore('scenarios', { keyPath: 'name' }) ` | openDB · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1606](../source/app.js.html#L1606) | ` openDB.keyPath ` | object definition · ` 'name' ` | openDB · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1607](../source/app.js.html#L1607) | ` request.onsuccess ` | = · ` () => resolve(request.result) ` | openDB · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1608](../source/app.js.html#L1608) | ` request.onerror ` | = · ` () => reject(request.error) ` | openDB · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1609](../source/app.js.html#L1609) | ` request.onblocked ` | = · ` () => reject(Error('Storage is blocked by another tab.')) ` | openDB · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1630](../source/app.js.html#L1630) | ` request.onsuccess ` | = · ` () => { result = request.result; } ` | storeAction · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1633](../source/app.js.html#L1633) | ` tx.oncomplete ` | = · ` () => resolve(result) ` | storeAction · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1634](../source/app.js.html#L1634) | ` tx.onerror ` | = · ` () => reject(tx.error) ` | storeAction · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1635](../source/app.js.html#L1635) | ` tx.onabort ` | = · ` () => reject(tx.error &#124;&#124; Error('Storage transaction failed.')) ` | storeAction · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1647](../source/app.js.html#L1647) | ` storeAction.value ` | object definition · ` value ` | storeAction · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1648](../source/app.js.html#L1648) | ` storeAction.enumerable ` | object definition · ` true ` | storeAction · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1649](../source/app.js.html#L1649) | ` storeAction.writable ` | object definition · ` true ` | storeAction · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1650](../source/app.js.html#L1650) | ` storeAction.configurable ` | object definition · ` true ` | storeAction · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1666](../source/app.js.html#L1666) | ` $('savedNames').innerHTML ` | = · ` '<option value="">Choose a scenario</option>' + names .map((name) => '<option value="' + esc(name) + '">' + esc(name) + '</option>') .join('') ` | refreshSaves · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1683](../source/app.js.html#L1683) | ` payload.schema ` | object definition · ` 'antarkya.scenario.v2' ` | payload · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1684](../source/app.js.html#L1684) | ` payload.modelVersion ` | object definition · ` A.VERSION ` | payload · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1685](../source/app.js.html#L1685) | ` payload.profileVersion ` | object definition · ` D.schema ` | payload · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1686](../source/app.js.html#L1686) | ` payload.createdAt ` | object definition · ` new Date().toISOString() ` | payload · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1687](../source/app.js.html#L1687) | ` payload.config ` | object definition · ` c ` | payload · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1688](../source/app.js.html#L1688) | ` payload.initial ` | object definition · ` A.createInitial(c) ` | payload · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1689](../source/app.js.html#L1689) | ` payload.results ` | object definition · ` same ? completed : null ` | payload · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1802](../source/app.js.html#L1802) | ` $('reportEventDetail').hidden ` | = · ` true ` | loadPayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1815](../source/app.js.html#L1815) | ` $('run').textContent ` | = · ` 'Run again' ` | loadPayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1828](../source/app.js.html#L1828) | ` blob.type ` | object definition · ` type ` | download · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1831](../source/app.js.html#L1831) | ` link.href ` | = · ` url ` | download · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1832](../source/app.js.html#L1832) | ` link.download ` | = · ` name ` | download · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1867](../source/app.js.html#L1867) | ` el.hidden ` | = · ` false ` | showStorage · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1868](../source/app.js.html#L1868) | ` el.open ` | = · ` true ` | showStorage · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1870](../source/app.js.html#L1870) | ` showStorage.behavior ` | object definition · ` 'auto' ` | showStorage · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1870](../source/app.js.html#L1870) | ` showStorage.block ` | object definition · ` 'nearest' ` | showStorage · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1872](../source/app.js.html#L1872) | ` $('country').innerHTML ` | = · ` D.profiles .map((p) => '<option value="' + p.iso3 + '">' + esc(p.name) + '</option>') .join('') ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1875](../source/app.js.html#L1875) | ` $('country').value ` | = · ` 'PER' ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1902](../source/app.js.html#L1902) | ` module data.type ` | object definition · ` 'step' ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1909](../source/app.js.html#L1909) | ` module data.type ` | object definition · ` 'pace' ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1909](../source/app.js.html#L1909) | ` module data.delay ` | object definition · ` Number($('pace').value) ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1920](../source/app.js.html#L1920) | ` module data.x ` | object definition · ` 0 ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1920](../source/app.js.html#L1920) | ` module data.y ` | object definition · ` 0 ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1924](../source/app.js.html#L1924) | ` module data.x ` | object definition · ` e.clientX ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1924](../source/app.js.html#L1924) | ` module data.y ` | object definition · ` e.clientY ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1924](../source/app.js.html#L1924) | ` module data.startX ` | object definition · ` pan.x ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1924](../source/app.js.html#L1924) | ` module data.startY ` | object definition · ` pan.y ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1924](../source/app.js.html#L1924) | ` module data.moved ` | object definition · ` false ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1931](../source/app.js.html#L1931) | ` drag.moved ` | = · ` true ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1932](../source/app.js.html#L1932) | ` module data.x ` | object definition · ` drag.startX + dx ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1932](../source/app.js.html#L1932) | ` module data.y ` | object definition · ` drag.startY + dy ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1943](../source/app.js.html#L1943) | ` nearest.id ` | object definition · ` a.id ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1943](../source/app.js.html#L1943) | ` nearest.d ` | object definition · ` Math.hypot(positions[a.id].x - x, positions[a.id].y - y) ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1957](../source/app.js.html#L1957) | ` module data.name ` | object definition · ` name ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1957](../source/app.js.html#L1957) | ` module data.payload ` | object definition · ` payload() ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1957](../source/app.js.html#L1957) | ` module data.updated ` | object definition · ` Date.now() ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1959](../source/app.js.html#L1959) | ` $('savedNames').value ` | = · ` name ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:2103](../source/app.js.html#L2103) | ` e.target.value ` | = · ` '' ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:2108](../source/app.js.html#L2108) | ` $('reportEventDetail').hidden ` | = · ` true ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:2127](../source/app.js.html#L2127) | ` module data.type ` | object definition · ` 'pause' ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
