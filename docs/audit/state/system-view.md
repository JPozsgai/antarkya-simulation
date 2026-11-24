# State definitions and writes — system-view.js

[Inventory guide](../STATE.html). Whole-function source is authoritative for types, branches, bounds and update semantics.

| Source | Field / target | Operation / expression | Owner / mechanism |
| --- | --- | --- | --- |
| [system-view.js:9](../source/system-view.js.html#L9) | ` esc.& ` | object definition · ` "&amp;" ` | esc · [AK-VAL-01](../TECHNICAL.html#ak-val-01) |
| [system-view.js:10](../source/system-view.js.html#L10) | ` esc.< ` | object definition · ` "&lt;" ` | esc · [AK-VAL-01](../TECHNICAL.html#ak-val-01) |
| [system-view.js:11](../source/system-view.js.html#L11) | ` esc.> ` | object definition · ` "&gt;" ` | esc · [AK-VAL-01](../TECHNICAL.html#ak-val-01) |
| [system-view.js:12](../source/system-view.js.html#L12) | ` esc." ` | object definition · ` "&quot;" ` | esc · [AK-VAL-01](../TECHNICAL.html#ak-val-01) |
| [system-view.js:13](../source/system-view.js.html#L13) | ` esc.' ` | object definition · ` "&#39;" ` | esc · [AK-VAL-01](../TECHNICAL.html#ak-val-01) |
| [system-view.js:18](../source/system-view.js.html#L18) | ` n.maximumFractionDigits ` | object definition · ` places ` | n · [AK-VAL-01](../TECHNICAL.html#ak-val-01) |
| [system-view.js:176](../source/system-view.js.html#L176) | ` receipts.in ` | object definition · ` 0 ` | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) |
| [system-view.js:176](../source/system-view.js.html#L176) | ` receipts.out ` | object definition · ` 0 ` | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) |
| [system-view.js:273](../source/system-view.js.html#L273) | ` host.innerHTML ` | = · ` "<p>System records appear when the society is initialized. Older results require a new run.</p>" ` | render · [AK-VAL-01](../TECHNICAL.html#ak-val-01) |
| [system-view.js:286](../source/system-view.js.html#L286) | ` select.innerHTML ` | = · `` modes .map( (id) => `<option value="${esc(id)}">${esc(root.AntarkyaProfiles?.policies.find((p) => p.id === id)?.label &#124;&#124; (id === "economy" ? "Economic feedback" : "Governance and upkeep"))}</option>`, ) … `` | render · [AK-VAL-01](../TECHNICAL.html#ak-val-01) |
| [system-view.js:292](../source/system-view.js.html#L292) | ` select.value ` | = · ` modes.includes(previous) ? previous : modes[0] ` | render · [AK-VAL-01](../TECHNICAL.html#ak-val-01) |
| [system-view.js:294](../source/system-view.js.html#L294) | ` range.max ` | = · ` result.reform.month ` | render · [AK-VAL-01](../TECHNICAL.html#ak-val-01) |
| [system-view.js:295](../source/system-view.js.html#L295) | ` range.value ` | = · ` pinned === null ? result.reform.month : Math.min(pinned, result.reform.month) ` | render · [AK-VAL-01](../TECHNICAL.html#ak-val-01) |
| [system-view.js:301](../source/system-view.js.html#L301) | ` document.getElementById("systemMonthLabel").textContent ` | = · ` "Recorded month " + range.value + " / " + result.reform.month ` | render · [AK-VAL-01](../TECHNICAL.html#ak-val-01) |
| [system-view.js:304](../source/system-view.js.html#L304) | ` host.innerHTML ` | = · ` diagram(p, select.value, component) ` | render · [AK-VAL-01](../TECHNICAL.html#ak-val-01) |
| [system-view.js:305](../source/system-view.js.html#L305) | ` document.getElementById("systemNext").textContent ` | = · ` Number(range.value) < result.reform.month ? "Next recorded month" : "Next month" ` | render · [AK-VAL-01](../TECHNICAL.html#ak-val-01) |
| [system-view.js:309](../source/system-view.js.html#L309) | ` document.getElementById("systemNext").disabled ` | = · ` Number(range.value) >= result.reform.month && result.type === "complete" ` | render · [AK-VAL-01](../TECHNICAL.html#ak-val-01) |
| [system-view.js:311](../source/system-view.js.html#L311) | ` document.getElementById("systemMeaning").textContent ` | = · `` p ? `This month records ${p.transactionCount} cash transfers. Domestic activity index ${n(p.economy.index)}; baseline ${n(b?.economy.index)}. Bright pipes mark recorded flows. Dashed arrows describe a mechanism; they do not establi… `` | render · [AK-VAL-01](../TECHNICAL.html#ak-val-01) |
| [system-view.js:314](../source/system-view.js.html#L314) | ` document.getElementById("systemClasses").innerHTML ` | = · `` (p?.classes &#124;&#124; []) .map( (c) => `<div class="classcard" style="border-color:${["#4585ad", "#d08b2f", "#31836b", "#996296"][c.role]}"><b>${["Citizen", "Business", "Official", "Politician"][c.role]}</b><span>Knowled… `` | render · [AK-VAL-01](../TECHNICAL.html#ak-val-01) |
| [system-view.js:320](../source/system-view.js.html#L320) | ` document.getElementById("systemFlows").innerHTML ` | = · `` '<table class="compact-table"><thead><tr><th>Recorded flow</th><th>Amount</th><th>Rule</th></tr></thead><tbody>' + (p?.flows &#124;&#124; []) .slice(-35) .map( (f) => `<tr><td>${esc(f.detail)}</td><td>${… `` | render · [AK-VAL-01](../TECHNICAL.html#ak-val-01) |
| [system-view.js:330](../source/system-view.js.html#L330) | ` document.getElementById("systemCoverage").innerHTML ` | = · ` '<p class="small">Accountability coverage proxy: eligible recorded acts whose case reached investigation or decision, in the trailing 12 months. Rank and insider position are recorded at act time. Sparse groups are not evidence of impart… ` | render · [AK-VAL-01](../TECHNICAL.html#ak-val-01) |
| [system-view.js:370](../source/system-view.js.html#L370) | ` api.render ` | object definition · ` render ` | module data · [AK-VAL-01](../TECHNICAL.html#ak-val-01) |
| [system-view.js:370](../source/system-view.js.html#L370) | ` api.diagram ` | object definition · ` diagram ` | module data · [AK-VAL-01](../TECHNICAL.html#ak-val-01) |
| [system-view.js:370](../source/system-view.js.html#L370) | ` api.point ` | object definition · ` point ` | module data · [AK-VAL-01](../TECHNICAL.html#ak-val-01) |
| [system-view.js:370](../source/system-view.js.html#L370) | ` api.bind ` | object definition · ` bind ` | module data · [AK-VAL-01](../TECHNICAL.html#ak-val-01) |
| [system-view.js:371](../source/system-view.js.html#L371) | ` module.exports ` | = · ` api ` | module data · [AK-VAL-01](../TECHNICAL.html#ak-val-01) |
| [system-view.js:373](../source/system-view.js.html#L373) | ` root.AntarkyaSystemView ` | = · ` api ` | module data · [AK-VAL-01](../TECHNICAL.html#ak-val-01) |
