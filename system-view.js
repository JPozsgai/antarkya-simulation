/* [AKX-MEA-01] Observation-only stock-and-flow view. © 2026 Joseph Pozsgai-Alvarez. */
"use strict";
(function (root) {
  const esc = (x) =>
    String(x ?? "").replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
  const n = (x, places = 2) =>
    Number.isFinite(x)
      ? x.toLocaleString(undefined, { maximumFractionDigits: places })
      : "—";
  const total = (xs) => xs.reduce((a, b) => a + b, 0);
  const change = (opening, closing) => n(closing - opening, 3);
  let latest = null,
    pinned = null,
    identity = null;
  /** [AKX-MEA-01] Pick an existing recorded month without executing any model code. */
  function point(result, month) {
    return result?.hybrid?.history?.find((x) => x.month === month) || null;
  }
  function pipe(x1, y1, x2, y2, amount, label, unit, rule, id) {
    const cx = (x1 + x2) / 2,
      cy = (y1 + y2) / 2;
    return `<g class="sd-pipe ${amount > 1e-12 ? "operated" : ""}" data-flow="${esc(id)}"><title>${esc(rule)}: ${esc(label)} ${esc(n(amount, 5))} ${esc(unit)} this month</title><path d="M${x1},${y1} L${x2},${y2}" marker-end="url(#sd-head)"/><path class="sd-valve" d="M${cx - 9},${cy - 8} L${cx + 9},${cy + 8} L${cx + 9},${cy - 8} L${cx - 9},${cy + 8}Z"/><text x="${cx}" y="${cy + 29}" text-anchor="middle">${esc(label)}</text><text x="${cx}" y="${cy + 48}" text-anchor="middle" class="sd-number">${esc(n(amount, 4))} ${esc(unit)}</text></g>`;
  }
  function stock(x, y, title, value, unit, before) {
    return `<g class="sd-stock"><rect x="${x}" y="${y}" width="260" height="96" rx="2"/><text x="${x + 130}" y="${y + 27}" text-anchor="middle">${esc(title)}</text><text x="${x + 130}" y="${y + 55}" text-anchor="middle" class="sd-value">${esc(n(value, 4))} ${esc(unit)}</text><text x="${x + 130}" y="${y + 79}" text-anchor="middle" class="sd-small">Opening ${esc(n(before, 4))} · change ${esc(change(before, value))}</text></g>`;
  }
  const cloud = (x, y) =>
    `<path class="sd-cloud" d="M${x},${y} c-20,-18 -37,10 -20,24 c-6,22 25,26 39,13 c24,10 41,-12 22,-27 c2,-19 -23,-25 -41,-10Z"/>`;
  function influence(x1, y1, x2, y2, label = "") {
    return `<g class="sd-influence"><path d="M${x1},${y1} Q${x1 + 65},${y2} ${x2},${y2}" marker-end="url(#sd-thin)"/><text x="${x1 + 10}" y="${(y1 + y2) / 2}">${esc(label)}</text></g>`;
  }
  /** [AKX-MEA-01] Every solid pipe uses recorded gross flow, not an inferred causal effect. */
  function diagram(p, mode, component = "attitude") {
    if (!p) return "<p>No recorded month is available.</p>";
    const open = p.opening,
      end = p.closing;
    let svg = `<svg viewBox="0 0 1000 650" role="img" aria-label="Recorded stock and flow diagram for month ${p.month}"><defs><marker id="sd-head" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10Z" fill="currentColor"/></marker><marker id="sd-thin" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L10,5 L0,10Z" fill="#68889d"/></marker></defs>`;
    const flows = (stockName, direction) =>
      total(
        p.flows
          .filter((f) => f.stock === stockName && f.direction === direction)
          .map((f) => f.amount),
      );
    if (mode === "economy") {
      svg +=
        cloud(70, 55) +
        stock(
          370,
          30,
          "Productive capacity",
          end.capital,
          "output RU/month",
          open.capital,
        ) +
        cloud(930, 55);
      svg += pipe(
        100,
        78,
        370,
        78,
        flows("capital", "in"),
        "Completed installation",
        "capacity",
        "AKX-ECO-02",
        "capital-in",
      );
      svg += pipe(
        630,
        78,
        900,
        78,
        flows("capital", "out"),
        "Capital consumption",
        "capacity",
        "AKX-ECO-02",
        "capital-out",
      );
      svg +=
        stock(370, 265, "Public treasury", end.treasury, "RU", open.treasury) +
        cloud(70, 290) +
        cloud(930, 290);
      const received = p.economy.taxCollected;
      svg += pipe(
        100,
        313,
        370,
        313,
        received,
        "Tax collected",
        "RU",
        "AKX-ECO-04",
        "tax",
      );
      // The full cash identity includes ordinary disbursements and named residual receipts.
      const netOther = end.treasury - open.treasury - received;
      svg += `<text x="765" y="313" text-anchor="middle">Other treasury net flow ${esc(n(netOther, 3))} RU</text>`;
      svg += influence(500, 135, 500, 255, "Realized taxable activity");
      svg += `<g class="sd-aux"><circle cx="180" cy="505" r="12"/><text x="210" y="510">Domestic value added: ${esc(n(p.economy.domesticVA))} RU this month</text><circle cx="180" cy="555" r="12"/><text x="210" y="560">Economic activity index: ${esc(n(p.economy.index))} (reference = 100)</text><text x="210" y="590">Derived from delivered production; imports, wages and transfers are not added again.</text></g>`;
    } else if (mode === "governance") {
      svg += stock(
        370,
        30,
        "Unfinished maintenance",
        end.maintenance,
        "PM",
        open.maintenance,
      );
      svg += pipe(
        100,
        78,
        370,
        78,
        Math.max(
          0,
          end.maintenance - open.maintenance + flows("maintenance", "out"),
        ),
        "New upkeep due",
        "PM",
        "AKX-MNT-01",
        "maintenance-due",
      );
      svg += pipe(
        630,
        78,
        900,
        78,
        flows("maintenance", "out"),
        "Performed upkeep",
        "PM",
        "AKX-MNT-02",
        "upkeep",
      );
      svg += stock(
        370,
        265,
        "Mean persistent capability",
        end.capability,
        "",
        open.capability,
      );
      svg += pipe(
        100,
        313,
        370,
        313,
        flows("capability", "in") / Math.max(1, p.organizationCount || 1),
        "Repair and rebuilding",
        "mean fraction",
        "AKX-MNT-02",
        "repair",
      );
      svg += pipe(
        630,
        313,
        900,
        313,
        flows("capability", "out") / Math.max(1, p.organizationCount || 1),
        "Neglect damage",
        "mean fraction",
        "AKX-CAP-01",
        "damage",
      );
      svg += influence(500, 135, 500, 255, "Remaining upkeep constrains work");
      svg += `<g class="sd-aux"><circle cx="160" cy="505" r="12"/><text x="190" y="510">Pending governance procedures: ${p.proposals} · active coalitions: ${p.activeCoalitions}</text><circle cx="160" cy="555" r="12"/><text x="190" y="560">Mean issue attention: ${esc(n(end.attention * 100))}%</text><text x="190" y="595">Attention is derived from individuals. Authority changes only after the applicable procedure.</text></g>`;
    } else {
      const receipts = p.policyTransfers?.[mode] || { in: 0, out: 0 };
      svg +=
        cloud(70, 55) +
        stock(
          370,
          30,
          "Unspent reform allocations",
          end.reformFunds[mode] || 0,
          "RU",
          open.reformFunds[mode] || 0,
        ) +
        cloud(930, 55);
      svg += pipe(
        100,
        78,
        370,
        78,
        receipts.in,
        "Actual mobilization",
        "RU",
        "AK-REF-02",
        "funding",
      );
      svg += pipe(
        630,
        78,
        900,
        78,
        receipts.out,
        "Actual expenditure",
        "RU",
        "AK-REF-03",
        "spending",
      );
      const level = end.influence?.[mode]?.[component] || 0,
        before = open.influence?.[mode]?.[component] || 0;
      svg +=
        cloud(70, 290) +
        stock(
          370,
          265,
          "Mean retained " + component,
          level * 100,
          "% influence",
          before * 100,
        ) +
        cloud(930, 290);
      svg += pipe(
        100,
        313,
        370,
        313,
        flows(mode + ":" + component, "in") * 100,
        "Accepted learning",
        "mean points",
        "AK-ADP-01",
        "learning",
      );
      svg += pipe(
        630,
        313,
        900,
        313,
        flows(mode + ":" + component, "out") * 100,
        "Wear-off",
        "mean points",
        "AK-ADP-02",
        "decay",
      );
      svg += influence(
        630,
        130,
        220,
        265,
        "Delivered experience, uptake and quality",
      );
      const delivery = Math.max(
        0,
        (p.policyActivity?.[mode] || 0) -
          (p.previousPolicyActivity?.[mode] || 0),
      );
      svg += `<g class="sd-aux"><circle cx="160" cy="490" r="12"/><text x="190" y="495">Recorded policy activity this month: ${esc(n(delivery, 3))} (policy-specific unit)</text><circle cx="160" cy="535" r="12"/><text x="190" y="540">Upkeep backlog: ${esc(n(end.maintenance))} PM · mean capability ${esc(n(end.capability * 100))}%</text><text x="190" y="585">Delivered contacts, accepted influence and actual conduct are separate results.</text></g>`;
      if (
        ["aca", "oversight", "complaints", "protection", "penalties"].includes(
          mode,
        )
      )
        svg += `<text x="190" y="620">Related system context: ${end.openCases} open files; no file count is treated as policy success.</text>`;
    }
    return svg + "</svg>";
  }
  function render(result) {
    const host = document.getElementById("systemDiagram");
    if (!host) return;
    latest = result;
    const h = result?.reform?.hybrid;
    if (!h?.history?.length) {
      host.innerHTML =
        "<p>System records appear when the society is initialized. Older results require a new run.</p>";
      return;
    }
    const newIdentity = result.eventSeed + "|" + result.reform.version;
    if (identity !== newIdentity) {
      identity = newIdentity;
      pinned = null;
    }
    const select = document.getElementById("systemPolicy");
    const policyIds = result.reform.policies?.map((p) => p.id) || [];
    const modes = [...policyIds, "economy", "governance"];
    const previous = select.value;
    select.innerHTML = modes
      .map(
        (id) =>
          `<option value="${esc(id)}">${esc(root.AntarkyaProfiles?.policies.find((p) => p.id === id)?.label || (id === "economy" ? "Economic feedback" : "Governance and upkeep"))}</option>`,
      )
      .join("");
    select.value = modes.includes(previous) ? previous : modes[0];
    const range = document.getElementById("systemMonth");
    range.max = result.reform.month;
    range.value =
      pinned === null
        ? result.reform.month
        : Math.min(pinned, result.reform.month);
    const p = point(result.reform, Number(range.value));
    const b = point(result.baseline, Number(range.value));
    document.getElementById("systemMonthLabel").textContent =
      "Recorded month " + range.value + " / " + result.reform.month;
    const component = document.getElementById("systemElement").value;
    host.innerHTML = diagram(p, select.value, component);
    document.getElementById("systemNext").textContent =
      Number(range.value) < result.reform.month
        ? "Next recorded month"
        : "Next month";
    document.getElementById("systemNext").disabled =
      Number(range.value) >= result.reform.month && result.type === "complete";
    document.getElementById("systemMeaning").textContent = p
      ? `This month records ${p.transactionCount} cash transfers. Domestic activity index ${n(p.economy.index)}; baseline ${n(b?.economy.index)}. Bright pipes mark recorded flows. Dashed arrows describe a mechanism; they do not establish its causal contribution to the package impact.`
      : "No record for this month.";
    document.getElementById("systemClasses").innerHTML = (p?.classes || [])
      .map(
        (c) =>
          `<div class="classcard" style="border-color:${["#4585ad", "#d08b2f", "#31836b", "#996296"][c.role]}"><b>${["Citizen", "Business", "Official", "Politician"][c.role]}</b><span>Knowledge ${n(c.knowledge * 100)}%</span><span>Issue attention ${n(c.attention * 100)}%</span><span>Time used ${n(c.timeUsed * 100)}%</span></div>`,
      )
      .join("");
    document.getElementById("systemFlows").innerHTML =
      '<table class="compact-table"><thead><tr><th>Recorded flow</th><th>Amount</th><th>Rule</th></tr></thead><tbody>' +
      (p?.flows || [])
        .slice(-35)
        .map(
          (f) =>
            `<tr><td>${esc(f.detail)}</td><td>${n(f.amount, 5)} ${esc(f.unit)}</td><td><a href="docs/audit/${f.mechanism.startsWith("AKX-") ? "EXTENSION" : "TECHNICAL"}.html#${esc(f.mechanism.toLowerCase())}">${esc(f.mechanism)}</a></td></tr>`,
        )
        .join("") +
      '</tbody></table><p class="small">Detailed table shows the last 35 flow records in this month. Full monthly totals drive the diagram. The saved journal retains the latest 1,000 cash transactions.</p>';
    document.getElementById("systemCoverage").innerHTML =
      '<p class="small">Accountability coverage proxy: eligible recorded acts whose case reached investigation or decision, in the trailing 12 months. Rank and insider position are recorded at act time. Sparse groups are not evidence of impartiality.</p><table class="compact-table"><tr><th>Rank / group</th><th>Reached / eligible</th></tr>' +
      (p?.coverage || [])
        .map(
          (r) =>
            `<tr><td>${["", "Ordinary", "Organization leader", "National authority"][r.rank]} · ${r.insider ? "connected" : "other"}</td><td>${r.completed} / ${r.eligible}${r.eligible < 20 ? " · insufficient observations" : " · " + n(100 * r.rate) + "%"}</td></tr>`,
        )
        .join("") +
      "</table>";
  }
  function bind() {
    for (const id of ["systemPolicy", "systemElement"])
      document
        .getElementById(id)
        ?.addEventListener("change", () => render(latest));
    document.getElementById("systemMonth")?.addEventListener("input", (e) => {
      pinned = Number(e.target.value);
      render(latest);
    });
    document.getElementById("systemLatest")?.addEventListener("click", () => {
      pinned = null;
      render(latest);
    });
    document.getElementById("systemReplay")?.addEventListener("click", () => {
      const node = document.getElementById("systemDiagram");
      node.classList.remove("sd-replay");
      void node.offsetWidth;
      node.classList.add("sd-replay");
    });
    document.getElementById("systemNext")?.addEventListener("click", () => {
      const month = Number(document.getElementById("systemMonth").value);
      if (month < latest.reform.month) {
        pinned = month + 1;
        render(latest);
      } else {
        pinned = null;
        document.getElementById("step").click();
      }
    });
  }
  const api = { render, diagram, point, bind };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else {
    root.AntarkyaSystemView = api;
    if (document.readyState === "loading")
      document.addEventListener("DOMContentLoaded", bind);
    else bind();
  }
})(typeof globalThis !== "undefined" ? globalThis : this);
