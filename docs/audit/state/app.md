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
| [app.js:306](../source/app.js.html#L306) | ` baseSummary.metrics ` | object definition · ` b.metrics() ` | baseSummary · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:307](../source/app.js.html#L307) | ` baseSummary.assessment ` | object definition · ` b.assessment() ` | baseSummary · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:308](../source/app.js.html#L308) | ` baseSummary.history ` | object definition · ` b.state.history ` | baseSummary · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:309](../source/app.js.html#L309) | ` baseSummary.classActivity ` | object definition · ` b.classActivity() ` | baseSummary · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:322](../source/app.js.html#L322) | ` preview.reform ` | object definition · ` r.view() ` | preview · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:323](../source/app.js.html#L323) | ` preview.baseline ` | object definition · ` baseSummary(b) ` | preview · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:324](../source/app.js.html#L324) | ` preview.comparison ` | object definition · ` A.comparison(r.view(), baseSummary(b)) ` | preview · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:325](../source/app.js.html#L325) | ` preview.replicate ` | object definition · ` 1 ` | preview · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:326](../source/app.js.html#L326) | ` preview.repetitions ` | object definition · ` c.repetitions ` | preview · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:339](../source/app.js.html#L339) | ` $('run').textContent ` | = · ` 'Run' ` | stopWorker · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [app.js:347](../source/app.js.html#L347) | ` $('eventSeed').value ` | = · ` c.eventSeed ` | initializeWorker · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [app.js:353](../source/app.js.html#L353) | ` $('reportEventDetail').hidden ` | = · ` true ` | initializeWorker · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [app.js:358](../source/app.js.html#L358) | ` worker.onmessage ` | = · ` (e) => { const m = e.data; if (m.type === 'error') { running = false; $('run').textContent = 'Run'; status('Simulation stopped: ' + m.message, true); return; } if (m.type === 'compl… ` | initializeWorker · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [app.js:362](../source/app.js.html#L362) | ` $('run').textContent ` | = · ` 'Run' ` | initializeWorker · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [app.js:370](../source/app.js.html#L370) | ` $('run').textContent ` | = · ` 'Run again' ` | initializeWorker · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [app.js:379](../source/app.js.html#L379) | ` $('run').textContent ` | = · ` running ? 'Pause' : 'Run' ` | initializeWorker · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [app.js:383](../source/app.js.html#L383) | ` worker.onerror ` | = · ` (e) => { running = false; $('run').textContent = 'Run'; status( 'The simulation could not load or continue. Reload the page; if it persists, export your setup and report the error. ' + (e.message &#124;&#124; ''… ` | initializeWorker · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [app.js:385](../source/app.js.html#L385) | ` $('run').textContent ` | = · ` 'Run' ` | initializeWorker · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [app.js:392](../source/app.js.html#L392) | ` initializeWorker.type ` | object definition · ` 'init' ` | initializeWorker · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [app.js:392](../source/app.js.html#L392) | ` initializeWorker.config ` | object definition · ` c ` | initializeWorker · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [app.js:392](../source/app.js.html#L392) | ` initializeWorker.initial ` | object definition · ` initial ` | initializeWorker · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [app.js:401](../source/app.js.html#L401) | ` start.type ` | object definition · ` 'pause' ` | start · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [app.js:407](../source/app.js.html#L407) | ` start.type ` | object definition · ` 'run' ` | start · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [app.js:407](../source/app.js.html#L407) | ` start.delay ` | object definition · ` Number($('pace').value) ` | start · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [app.js:409](../source/app.js.html#L409) | ` $('run').textContent ` | = · ` 'Pause' ` | start · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [app.js:417](../source/app.js.html#L417) | ` start.behavior ` | object definition · ` 'auto' ` | start · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [app.js:417](../source/app.js.html#L417) | ` start.block ` | object definition · ` 'start' ` | start · [AK-OPS-01](../TECHNICAL.html#ak-ops-01) |
| [app.js:449](../source/app.js.html#L449) | ` labels.attitude ` | object definition · ` 'Attitude' ` | learningPanel · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) |
| [app.js:450](../source/app.js.html#L450) | ` labels.norm ` | object definition · ` 'Perceived norm' ` | learningPanel · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) |
| [app.js:451](../source/app.js.html#L451) | ` labels.control ` | object definition · ` 'Lawful/reporting control' ` | learningPanel · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) |
| [app.js:452](../source/app.js.html#L452) | ` labels.corruptControl ` | object definition · ` 'Improper-action control' ` | learningPanel · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) |
| [app.js:453](../source/app.js.html#L453) | ` labels.risk ` | object definition · ` 'Accountability-cost learning' ` | learningPanel · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) |
| [app.js:454](../source/app.js.html#L454) | ` labels.knowledge ` | object definition · ` 'Knowledge' ` | learningPanel · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) |
| [app.js:455](../source/app.js.html#L455) | ` labels.reportSafety ` | object definition · ` 'Reporting safety' ` | learningPanel · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) |
| [app.js:512](../source/app.js.html#L512) | ` $('inspector').innerHTML ` | = · `` `<h3>${esc(actor.type)} #${actor.id}</h3><p>${esc(org?.name)} · ${actor.state === 'corrupt' ? 'Triangle: qualifying conduct recorded' : 'Circle: expected integrity / recovery criteria satisfied'}</p><p><b>Why highlighted:</b> ${esc(salie… `` | inspector · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) |
| [app.js:544](../source/app.js.html#L544) | ` $('feedCount').textContent ` | = · ` events.length ` | renderFeed · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) |
| [app.js:545](../source/app.js.html#L545) | ` $('feed').innerHTML ` | = · `` events.length ? events .map( (e) => `<button class="event" data-event="${esc(e.id + '.' + e.update)}" aria-pressed="${selectedEvent === e.id + '.' + e.update}"><span class="eventmeta"><span>${esc… `` | renderFeed · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) |
| [app.js:559](../source/app.js.html#L559) | ` $('inspector').innerHTML ` | = · ` '<h3>' + esc(e.id) + ' · ' + esc(e.status &#124;&#124; e.kind) + '</h3><p>' + esc(e.title) + '</p><p class="small">Month ' + e.month + ' · highlighted actors ' + … ` | renderFeed · [AK-VIS-02](../TECHNICAL.html#ak-vis-02) |
| [app.js:592](../source/app.js.html#L592) | ` canvas.width ` | = · ` Math.round(w * dpr) ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:593](../source/app.js.html#L593) | ` canvas.height ` | = · ` Math.round(h * dpr) ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:595](../source/app.js.html#L595) | ` ctx.fillStyle ` | = · ` '#f6f8f5' ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:599](../source/app.js.html#L599) | ` ctx.fillStyle ` | = · ` '#e8f1eb' ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:604](../source/app.js.html#L604) | ` ctx.strokeStyle ` | = · ` '#d7e1da' ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:605](../source/app.js.html#L605) | ` ctx.lineWidth ` | = · ` 1 ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:614](../source/app.js.html#L614) | ` ctx.strokeStyle ` | = · ` '#c9d7cf' ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:618](../source/app.js.html#L618) | ` anchors.x ` | object definition · ` cx + size * 0.88 * zoom * Math.cos(angle) ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:619](../source/app.js.html#L619) | ` anchors.y ` | object definition · ` cy + size * 0.88 * zoom * Math.sin(angle) ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:621](../source/app.js.html#L621) | ` ctx.font ` | = · ` '14px system-ui' ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:622](../source/app.js.html#L622) | ` ctx.textAlign ` | = · ` 'center' ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:624](../source/app.js.html#L624) | ` ctx.fillStyle ` | = · ` colors[i] ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:628](../source/app.js.html#L628) | ` drawMap.x ` | object definition · ` cx + p.x * size * zoom ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:628](../source/app.js.html#L628) | ` drawMap.y ` | object definition · ` cy + p.y * size * zoom ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:651](../source/app.js.html#L651) | ` drawMap.a ` | object definition · ` a.id ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:652](../source/app.js.html#L652) | ` drawMap.b ` | object definition · ` r.organizations[t.org].leader ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:653](../source/app.js.html#L653) | ` drawMap.strength ` | object definition · ` t.affinity ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:654](../source/app.js.html#L654) | ` drawMap.lastKind ` | object definition · ` 'support' ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:655](../source/app.js.html#L655) | ` drawMap.born ` | object definition · ` -1 ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:664](../source/app.js.html#L664) | ` drawMap.a ` | object definition · ` a.id ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:665](../source/app.js.html#L665) | ` drawMap.b ` | object definition · ` r.organizations[org].leader ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:666](../source/app.js.html#L666) | ` drawMap.strength ` | object definition · ` 0.5 ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:667](../source/app.js.html#L667) | ` drawMap.lastKind ` | object definition · ` 'membership' ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:668](../source/app.js.html#L668) | ` drawMap.born ` | object definition · ` -1 ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:676](../source/app.js.html#L676) | ` drawMap.a ` | object definition · ` r.organizations[f.from].leader ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:677](../source/app.js.html#L677) | ` drawMap.b ` | object definition · ` r.organizations[f.to].leader ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:678](../source/app.js.html#L678) | ` drawMap.strength ` | object definition · ` Math.min(1, f.total / 5) ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:679](../source/app.js.html#L679) | ` drawMap.lastKind ` | object definition · ` 'funding' ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:680](../source/app.js.html#L680) | ` drawMap.born ` | object definition · ` f.last ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:704](../source/app.js.html#L704) | ` ctx.globalAlpha ` | = · ` high ? 0.8 : 0.09 ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:705](../source/app.js.html#L705) | ` ctx.strokeStyle ` | = · ` color ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:706](../source/app.js.html#L706) | ` ctx.fillStyle ` | = · ` color ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:707](../source/app.js.html#L707) | ` ctx.lineWidth ` | = · ` high ? 1.3 + l.strength : 0.5 + l.strength ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:726](../source/app.js.html#L726) | ` ctx.globalAlpha ` | = · ` 1 ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:732](../source/app.js.html#L732) | ` ctx.fillStyle ` | = · ` colors[a.role] ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:743](../source/app.js.html#L743) | ` ctx.strokeStyle ` | = · ` selected.includes(a.id) ? '#102f28' : '#fff' ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:744](../source/app.js.html#L744) | ` ctx.lineWidth ` | = · ` selected.includes(a.id) ? 2 : 1 ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:749](../source/app.js.html#L749) | ` ctx.font ` | = · ` '13px system-ui' ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:750](../source/app.js.html#L750) | ` ctx.textAlign ` | = · ` 'left' ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:751](../source/app.js.html#L751) | ` ctx.fillStyle ` | = · ` '#53645e' ` | drawMap · [AK-VIS-01](../TECHNICAL.html#ak-vis-01) |
| [app.js:919](../source/app.js.html#L919) | ` $('reportEventDetail').hidden ` | = · ` false ` | showReportEvent · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) |
| [app.js:920](../source/app.js.html#L920) | ` $('reportEventDetail').innerHTML ` | = · ` '<h3>' + esc(event.title) + '</h3><p class="small">Month ' + event.month + ' · ' + esc(event.id) + ' · update ' + event.update + ' · ' + esc(event.status &#124;&#124; event.kind) + '</p><… ` | showReportEvent · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) |
| [app.js:953](../source/app.js.html#L953) | ` showReportEvent.behavior ` | object definition · ` 'auto' ` | showReportEvent · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) |
| [app.js:953](../source/app.js.html#L953) | ` showReportEvent.block ` | object definition · ` 'nearest' ` | showReportEvent · [AK-MEA-04](../TECHNICAL.html#ak-mea-04) |
| [app.js:967](../source/app.js.html#L967) | ` select.innerHTML ` | = · ` chosen .map( (p) => '<option value="' + esc(p.id) + '">' + esc(D.policies.find((q) => q.id === p.id).label) + '</option>', ) .join('') ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:977](../source/app.js.html#L977) | ` select.value ` | = · ` assessmentPolicy &#124;&#124; '' ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:978](../source/app.js.html#L978) | ` select.disabled ` | = · ` !chosen.length ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:982](../source/app.js.html#L982) | ` $('assessmentMonth').max ` | = · ` String(r.month) ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:983](../source/app.js.html#L983) | ` $('assessmentMonth').value ` | = · ` String(month) ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:984](../source/app.js.html#L984) | ` $('assessmentMonth').disabled ` | = · ` !r.month ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:985](../source/app.js.html#L985) | ` $('assessmentPhase').textContent ` | = · ` (final ? 'Run complete · Final conditions' : month === r.month ? 'Current conditions' : 'Reviewing conditions') + ' · month ' + month + (completed && month !== r.month ? ' · completed… ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:996](../source/app.js.html#L996) | ` $('assessment').innerHTML ` | = · ` '<p>No additional reform selected. Select a reform to inspect its delivery and policy-specific conditions; package impact remains available below.</p>' ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:998](../source/app.js.html#L998) | ` $('reportEventDetail').hidden ` | = · ` true ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1006](../source/app.js.html#L1006) | ` $('reportEventDetail').hidden ` | = · ` true ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1007](../source/app.js.html#L1007) | ` $('assessment').innerHTML ` | = · ` '<p class="notice">Policy-specific starting conditions and delivery histories were not recorded in this saved result. Run the scenario again to create the new assessment. Existing results remain available in the package details below.</p>' ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1029](../source/app.js.html#L1029) | ` outSeries.month ` | object definition · ` p.month ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1030](../source/app.js.html#L1030) | ` outSeries.reform ` | object definition · ` Q.windowValue(rp, id, p.month, 12)?.value ?? null ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1031](../source/app.js.html#L1031) | ` outSeries.baseline ` | object definition · ` Q.windowValue(bp, id, p.month, 12)?.value ?? null ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1034](../source/app.js.html#L1034) | ` outcomeSeries.month ` | object definition · ` p.month ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1035](../source/app.js.html#L1035) | ` outcomeSeries.reform ` | object definition · ` p.tools[id].outcome ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1036](../source/app.js.html#L1036) | ` outcomeSeries.baseline ` | object definition · ` bp.history.find((q) => q.month === p.month)?.tools[id].outcome ?? null ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1039](../source/app.js.html#L1039) | ` impactSeries.month ` | object definition · ` p.month ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1040](../source/app.js.html#L1040) | ` impactSeries.reform ` | object definition · ` p.difference ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1041](../source/app.js.html#L1041) | ` impactSeries.baseline ` | object definition · ` p.difference === null ? null : 0 ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1045](../source/app.js.html#L1045) | ` levels.id ` | object definition · ` 'output' ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1046](../source/app.js.html#L1046) | ` levels.title ` | object definition · ` 'Output' ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1047](../source/app.js.html#L1047) | ` levels.label ` | object definition · ` def.output ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1048](../source/app.js.html#L1048) | ` levels.value ` | object definition · ` output?.value ?? null ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1049](../source/app.js.html#L1049) | ` levels.baseline ` | object definition · ` baseOutput?.value ?? null ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1050](../source/app.js.html#L1050) | ` levels.unit ` | object definition · ` def.unit ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1051](../source/app.js.html#L1051) | ` levels.period ` | object definition · ` 'Actual activity · trailing 12 months' ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1052](../source/app.js.html#L1052) | ` levels.series ` | object definition · ` outSeries ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1055](../source/app.js.html#L1055) | ` levels.id ` | object definition · ` 'outcome' ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1056](../source/app.js.html#L1056) | ` levels.title ` | object definition · ` 'Outcome' ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1057](../source/app.js.html#L1057) | ` levels.label ` | object definition · ` D.policies.find((p) => p.id === id).outcome ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1058](../source/app.js.html#L1058) | ` levels.value ` | object definition · ` tool.outcome ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1059](../source/app.js.html#L1059) | ` levels.baseline ` | object definition · ` baseTool.outcome ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1060](../source/app.js.html#L1060) | ` levels.unit ` | object definition · ` outcomeUnit ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1061](../source/app.js.html#L1061) | ` levels.period ` | object definition · ` meta.method ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1062](../source/app.js.html#L1062) | ` levels.series ` | object definition · ` outcomeSeries ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1065](../source/app.js.html#L1065) | ` levels.id ` | object definition · ` 'impact' ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1066](../source/app.js.html#L1066) | ` levels.title ` | object definition · ` 'Impact' ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1067](../source/app.js.html#L1067) | ` levels.label ` | object definition · ` config.policies.length > 1 ? 'Combined reform package' : 'Reform scenario' ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1068](../source/app.js.html#L1068) | ` levels.value ` | object definition · ` ip?.reform?.rate ?? null ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1069](../source/app.js.html#L1069) | ` levels.baseline ` | object definition · ` ip?.baseline?.rate ?? null ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1070](../source/app.js.html#L1070) | ` levels.unit ` | object definition · ` '%' ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1071](../source/app.js.html#L1071) | ` levels.period ` | object definition · ` 'Reform minus baseline, in percentage points · ' + (Number($('impactWindow').value) ? 'past 12 post-adoption months' : 'since adoption') ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1074](../source/app.js.html#L1074) | ` levels.series ` | object definition · ` impactSeries ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1117](../source/app.js.html#L1117) | ` interpret.value ` | object definition · ` p.value ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1118](../source/app.js.html#L1118) | ` interpret.baseline ` | object definition · ` p.baseline ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1119](../source/app.js.html#L1119) | ` interpret.lowerBetter ` | object definition · ` p.id === 'impact' &#124;&#124; !!meta.lowerBetter ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1120](../source/app.js.html#L1120) | ` interpret.outputDelta ` | object definition · ` (output?.value ?? 0) - (baseOutput?.value ?? 0) ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1121](../source/app.js.html#L1121) | ` interpret.impactDelta ` | object definition · ` ip?.difference ?? null ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1122](../source/app.js.html#L1122) | ` interpret.estimated ` | object definition · ` estimated ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1188](../source/app.js.html#L1188) | ` all[k] ` | = · ` (all[k] &#124;&#124; 0) + 1 ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1252](../source/app.js.html#L1252) | ` $('assessment').innerHTML ` | = · ` html ` | renderPolicyAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1276](../source/app.js.html#L1276) | ` $('impactPeriod').textContent ` | = · ` impact.window ? 'Recent results · ' + (rw?.months ?? 0) + ' modeled months' + (rw?.months ? ' · months ' + (rw.fromMonth + 1) + '–' + rw.month : '') : 'Since reform adoption · months 1–' + r.month ` | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1282](../source/app.js.html#L1282) | ` $('baseImpact').textContent ` | = · ` number(bw?.rate, 3) ` | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1283](../source/app.js.html#L1283) | ` $('reformImpact').textContent ` | = · ` number(rw?.rate, 3) ` | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1284](../source/app.js.html#L1284) | ` $('impactDifference').textContent ` | = · ` V.impactDifference(difference) + (difference === null ? '' : ' percentage points') ` | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1286](../source/app.js.html#L1286) | ` $('impactExplanation').textContent ` | = · `` difference === null ? 'Advance the model to create comparable relevant encounters.' : `In this assessment period, reform: ${rw.corrupt} completed corrupt encounters / ${rw.opportunities} relevant encounters; baseline: ${b… `` | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1303](../source/app.js.html#L1303) | ` $('implementationStatus').textContent ` | = · `` flows.length ? `Implementation: ${installed} of ${allocations.length} policy-recipient setups completed; ${delivering} delivered reform work in month ${r.month}. Completed setup does not guarantee continued delivery or changed cond… `` | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1306](../source/app.js.html#L1306) | ` $('impactDetails').innerHTML ` | = · ` '<table class="compact-table"><tr><th>Whole-system consequence · since adoption</th><th>Baseline</th><th>Reform</th></tr>' + [ ['All qualifying acts', b.metrics.corruptActs, r.metrics.corruptActs], ['Coerced payment… ` | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1330](../source/app.js.html#L1330) | ` $('distribution').innerHTML ` | = · ` '<p class="small">Completed simulation participation counts by role at the time of the act; two-party acts can involve two people. Victim payment burdens and waiting are separate.</p><table class="compact-table"><tr><th>Role</th><th>Act … ` | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1348](../source/app.js.html#L1348) | ` $('repeatResults').textContent ` | = · `` stats && completed.replications.length > 1 ? `Across ${completed.replications.length} repetitions of the same starting society (since adoption): mean paired difference ${V.impactDifference(stats.meanDifference)} points; simulatio… `` | renderAssessment · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1361](../source/app.js.html#L1361) | ` $('replicationDetails').hidden ` | = · ` rows.length < 2 ` | renderReplications · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1363](../source/app.js.html#L1363) | ` $('replicationTable').innerHTML ` | = · ` '' ` | renderReplications · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1406](../source/app.js.html#L1406) | ` $('replicationTable').innerHTML ` | = · ` html ` | renderReplications · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1415](../source/app.js.html#L1415) | ` selectedImpact.window ` | object definition · ` window ` | selectedImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1415](../source/app.js.html#L1415) | ` selectedImpact.series ` | object definition · ` series ` | selectedImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1415](../source/app.js.html#L1415) | ` selectedImpact.point ` | object definition · ` series.at(-1) ` | selectedImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1424](../source/app.js.html#L1424) | ` drawImpact.series ` | object definition · ` series ` | drawImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1424](../source/app.js.html#L1424) | ` drawImpact.window ` | object definition · ` window ` | drawImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1444](../source/app.js.html#L1444) | ` $('impactChart').innerHTML ` | = · `` `<svg viewBox="0 0 ${width} 210" role="img" aria-label="${mode} reform minus baseline corrupt-encounter rate, in percentage points. Negative values mean fewer corrupt encounters per opportunity."><title>Paired difference over time (${mod… `` | drawImpact · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1455](../source/app.js.html#L1455) | ` $('progressFill').style.width ` | = · ` (r.month / duration) * 100 + '%' ` | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1459](../source/app.js.html#L1459) | ` $('progressLabel').textContent ` | = · `` (completed ? 'Complete' : running ? 'Running' : r.month ? 'Paused' : 'Ready') + ` · month ${r.month} / ${duration}` + (activeConfig ? ' · ' + D.profiles.find((p) => p.iso3 === activeConfig.country).name : '') `` | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1463](../source/app.js.html#L1463) | ` $('repeatStatus').textContent ` | = · `` completed && activeConfig?.repetitions > 1 ? 'All ' + activeConfig.repetitions + ' repetitions complete · map and cards show repetition 1' : current.repetitions > 1 ? `Repetition ${current.re… `` | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1475](../source/app.js.html#L1475) | ` $('runIdentity').textContent ` | = · ` 'Starting society ' + initial.initialKey + ' · Event seed ' + (activeConfig?.eventSeed &#124;&#124; getConfig().eventSeed) ` | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1480](../source/app.js.html#L1480) | ` $('snapshotNote').textContent ` | = · ` 'Initial society ' + initial.initialKey + ' · model ' + A.VERSION + ' · reconstructed pre-policy year' ` | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1486](../source/app.js.html#L1486) | ` $('initialConditions').textContent ` | = · ` 'Starting estimate: ' + initial.initialization.metrics.corruptState + ' agents with recorded qualifying conduct; ' + initial.initialization.metrics.encounterOpportunities + ' modeled encounters during the reconstr… ` | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1492](../source/app.js.html#L1492) | ` $('corruptStat').textContent ` | = · ` number(r.metrics.corruptState / 10) + '%' ` | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1493](../source/app.js.html#L1493) | ` $('actsStat').textContent ` | = · ` number(r.metrics.corruptActs, 0) ` | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1494](../source/app.js.html#L1494) | ` $('encounterStat').textContent ` | = · ` number(current.comparison.reformRate) ` | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1495](../source/app.js.html#L1495) | ` $('classActivity').innerHTML ` | = · ` (r.classActivity &#124;&#124; []) .map((x, i) => { const baseline = current.baseline.classActivity?.[i]?.rate, delta = x.rate === null &#124;&#124; baseline === null &#124;&#124; baseline === undefined ? null … ` | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1521](../source/app.js.html#L1521) | ` $('actors').innerHTML ` | = · `` r.influential .map((x) => `<button data-actor="${x.id}">${esc(r.agents[x.id].type)} #${x.id}</button>`) .join('') `` | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1526](../source/app.js.html#L1526) | ` $('systemStats').innerHTML ` | = · ` '<p class="small">Inherited system workload: ' + initial.cases.filter((c) => c.status !== 'closed').length + ' pending cases and ' + initial.services.length + ' pending services at reform adoption. These totals pr… ` | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1567](../source/app.js.html#L1567) | ` $('decisionPressures').innerHTML ` | = · ` pressures .map( ([label, key]) => '<div class="pressure"><span>' + label + '</span><b>' + number(r.metrics[key] * 100) + (key === 'meanRisk' ? ' / 100' : '%') + '<… ` | render · [AK-VIS-03](../TECHNICAL.html#ak-vis-03) |
| [app.js:1602](../source/app.js.html#L1602) | ` request.onupgradeneeded ` | = · ` () => request.result.createObjectStore('scenarios', { keyPath: 'name' }) ` | openDB · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1603](../source/app.js.html#L1603) | ` openDB.keyPath ` | object definition · ` 'name' ` | openDB · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1604](../source/app.js.html#L1604) | ` request.onsuccess ` | = · ` () => resolve(request.result) ` | openDB · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1605](../source/app.js.html#L1605) | ` request.onerror ` | = · ` () => reject(request.error) ` | openDB · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1606](../source/app.js.html#L1606) | ` request.onblocked ` | = · ` () => reject(Error('Storage is blocked by another tab.')) ` | openDB · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1627](../source/app.js.html#L1627) | ` request.onsuccess ` | = · ` () => { result = request.result; } ` | storeAction · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1630](../source/app.js.html#L1630) | ` tx.oncomplete ` | = · ` () => resolve(result) ` | storeAction · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1631](../source/app.js.html#L1631) | ` tx.onerror ` | = · ` () => reject(tx.error) ` | storeAction · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1632](../source/app.js.html#L1632) | ` tx.onabort ` | = · ` () => reject(tx.error &#124;&#124; Error('Storage transaction failed.')) ` | storeAction · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1644](../source/app.js.html#L1644) | ` storeAction.value ` | object definition · ` value ` | storeAction · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1645](../source/app.js.html#L1645) | ` storeAction.enumerable ` | object definition · ` true ` | storeAction · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1646](../source/app.js.html#L1646) | ` storeAction.writable ` | object definition · ` true ` | storeAction · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1647](../source/app.js.html#L1647) | ` storeAction.configurable ` | object definition · ` true ` | storeAction · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1663](../source/app.js.html#L1663) | ` $('savedNames').innerHTML ` | = · ` '<option value="">Choose a scenario</option>' + names .map((name) => '<option value="' + esc(name) + '">' + esc(name) + '</option>') .join('') ` | refreshSaves · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1680](../source/app.js.html#L1680) | ` payload.schema ` | object definition · ` 'antarkya.scenario.v2' ` | payload · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1681](../source/app.js.html#L1681) | ` payload.modelVersion ` | object definition · ` A.VERSION ` | payload · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1682](../source/app.js.html#L1682) | ` payload.profileVersion ` | object definition · ` D.schema ` | payload · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1683](../source/app.js.html#L1683) | ` payload.createdAt ` | object definition · ` new Date().toISOString() ` | payload · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1684](../source/app.js.html#L1684) | ` payload.config ` | object definition · ` c ` | payload · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1685](../source/app.js.html#L1685) | ` payload.initial ` | object definition · ` A.createInitial(c) ` | payload · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1686](../source/app.js.html#L1686) | ` payload.results ` | object definition · ` same ? completed : null ` | payload · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1796](../source/app.js.html#L1796) | ` $('reportEventDetail').hidden ` | = · ` true ` | loadPayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1809](../source/app.js.html#L1809) | ` $('run').textContent ` | = · ` 'Run again' ` | loadPayload · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1822](../source/app.js.html#L1822) | ` blob.type ` | object definition · ` type ` | download · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1825](../source/app.js.html#L1825) | ` link.href ` | = · ` url ` | download · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1826](../source/app.js.html#L1826) | ` link.download ` | = · ` name ` | download · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1861](../source/app.js.html#L1861) | ` el.hidden ` | = · ` false ` | showStorage · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1862](../source/app.js.html#L1862) | ` el.open ` | = · ` true ` | showStorage · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1864](../source/app.js.html#L1864) | ` showStorage.behavior ` | object definition · ` 'auto' ` | showStorage · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1864](../source/app.js.html#L1864) | ` showStorage.block ` | object definition · ` 'nearest' ` | showStorage · [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1866](../source/app.js.html#L1866) | ` $('country').innerHTML ` | = · ` D.profiles .map((p) => '<option value="' + p.iso3 + '">' + esc(p.name) + '</option>') .join('') ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1869](../source/app.js.html#L1869) | ` $('country').value ` | = · ` 'PER' ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1896](../source/app.js.html#L1896) | ` module data.type ` | object definition · ` 'step' ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1903](../source/app.js.html#L1903) | ` module data.type ` | object definition · ` 'pace' ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1903](../source/app.js.html#L1903) | ` module data.delay ` | object definition · ` Number($('pace').value) ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1914](../source/app.js.html#L1914) | ` module data.x ` | object definition · ` 0 ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1914](../source/app.js.html#L1914) | ` module data.y ` | object definition · ` 0 ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1918](../source/app.js.html#L1918) | ` module data.x ` | object definition · ` e.clientX ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1918](../source/app.js.html#L1918) | ` module data.y ` | object definition · ` e.clientY ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1918](../source/app.js.html#L1918) | ` module data.startX ` | object definition · ` pan.x ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1918](../source/app.js.html#L1918) | ` module data.startY ` | object definition · ` pan.y ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1918](../source/app.js.html#L1918) | ` module data.moved ` | object definition · ` false ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1925](../source/app.js.html#L1925) | ` drag.moved ` | = · ` true ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1926](../source/app.js.html#L1926) | ` module data.x ` | object definition · ` drag.startX + dx ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1926](../source/app.js.html#L1926) | ` module data.y ` | object definition · ` drag.startY + dy ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1937](../source/app.js.html#L1937) | ` nearest.id ` | object definition · ` a.id ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1937](../source/app.js.html#L1937) | ` nearest.d ` | object definition · ` Math.hypot(positions[a.id].x - x, positions[a.id].y - y) ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1951](../source/app.js.html#L1951) | ` module data.name ` | object definition · ` name ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1951](../source/app.js.html#L1951) | ` module data.payload ` | object definition · ` payload() ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1951](../source/app.js.html#L1951) | ` module data.updated ` | object definition · ` Date.now() ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:1953](../source/app.js.html#L1953) | ` $('savedNames').value ` | = · ` name ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:2097](../source/app.js.html#L2097) | ` e.target.value ` | = · ` '' ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:2102](../source/app.js.html#L2102) | ` $('reportEventDetail').hidden ` | = · ` true ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
| [app.js:2121](../source/app.js.html#L2121) | ` module data.type ` | object definition · ` 'pause' ` | module data · [AK-VIS-03](../TECHNICAL.html#ak-vis-03), [AK-IO-01](../TECHNICAL.html#ak-io-01) |
