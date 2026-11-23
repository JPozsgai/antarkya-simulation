/* AUDIT FILE — visualization.js
 * References: AK-MEA-02, AK-VIS-01, AK-VIS-02
 * See docs/audit/TECHNICAL.md and the line-linked full source in docs/audit/source/.
 * Documentation-only revision: execution is checked against the pinned pre-annotation AST.
 */

'use strict';
// Display-only layout. Neither its collisions nor its springs enter the simulation.
(function (root) {
  const directions = [(-3 * Math.PI) / 4, -Math.PI / 4, Math.PI / 4, (3 * Math.PI) / 4],
    core = 0.48;

  /** [AK-MEA-02] hash
   * Implementation unit for Package impact and paired comparison. Follow the reference IDs for its equations, assumptions and verification limits.
   */
  const hash = (s) => {
    let n = 2166136261;
    for (const c of String(s)) n = Math.imul(n ^ c.charCodeAt(0), 16777619);
    return (n >>> 0) / 4294967296;
  };

  /** [AK-VIS-01] projection
   * Compute deterministic analytical layout using conduct radius, affinity and bounded local collision/cooperation forces. Do not mutate physical locations or world randomness.
   */
  function projection(view) {
    const neighbors = new Map();
    for (const l of view.links) {
      if (l.strength <= 0.05 || l.lastKind === 'coercion') continue;
      for (const [id, other, trust] of [
        [l.a, l.b, l.trustAB],
        [l.b, l.a, l.trustBA],
      ]) {
        if (!neighbors.has(id)) neighbors.set(id, []);
        neighbors.get(id).push({ other, weight: l.strength * (trust ?? 0) });
      }
    }
    const anchors = view.agents.map((a) => {
      const affinity = a.affinityByRole || [0.5, 0.5, 0.5, 0.5];
      let x = 0.2 * Math.cos(directions[a.role]),
        y = 0.2 * Math.sin(directions[a.role]);
      for (let r = 0; r < 4; r++) {
        const w = 2 * (affinity[r] - 0.5);
        x += w * Math.cos(directions[r]);
        y += w * Math.sin(directions[r]);
      }
      const angle = Math.hypot(x, y) < 0.001 ? directions[a.role] : Math.atan2(y, x),
        rate = a.recentOpportunities ? a.recentCorrupt / a.recentOpportunities : 0;
      return { angle, rate, integrityRadius: rate > 0 ? 0.54 + 0.41 * Math.sqrt(rate) : 0 };
    });
    let points = anchors.map((a, i) => {
      const radius =
        a.rate > 0
          ? a.integrityRadius
          : 0.035 + 0.43 * Math.sqrt(hash(view.agents[i].id + '-spacing'));
      const angle = a.angle + (hash(i + '-angle') - 0.5) * 0.8;
      return { x: radius * Math.cos(angle), y: radius * Math.sin(angle) };
    });
    const initial = points.map((p) => ({ ...p })),
      cell = 0.032,
      minDistance = 0.023;
    for (let pass = 0; pass < 8; pass++) {
      const grid = new Map();
      for (let i = 0; i < points.length; i++) {
        const p = points[i],
          key = Math.floor(p.x / cell) + ':' + Math.floor(p.y / cell);
        if (!grid.has(key)) grid.set(key, []);
        grid.get(key).push(i);
      }
      points = points.map((p, id) => {
        const a = anchors[id],
          peers = neighbors.get(id) || [];
        let px = 0,
          py = 0,
          mass = 0;
        for (const l of peers) {
          const q = points[l.other];
          if (q) {
            px += q.x * l.weight;
            py += q.y * l.weight;
            mass += l.weight;
          }
        }
        let x = p.x + 0.18 * (initial[id].x - p.x),
          y = p.y + 0.18 * (initial[id].y - p.y);
        if (mass) {
          x += 0.05 * (px / mass - p.x);
          y += 0.05 * (py / mass - p.y);
        }
        const gx = Math.floor(p.x / cell),
          gy = Math.floor(p.y / cell);
        for (let dx = -1; dx <= 1; dx++)
          for (let dy = -1; dy <= 1; dy++)
            for (const other of grid.get(gx + dx + ':' + (gy + dy)) || []) {
              if (other === id) continue;
              const q = points[other];
              let vx = p.x - q.x,
                vy = p.y - q.y,
                d = Math.hypot(vx, vy);
              if (d < 1e-7) {
                const angle = hash(id + '-' + other) * Math.PI * 2;
                vx = Math.cos(angle) * 0.001;
                vy = Math.sin(angle) * 0.001;
                d = 0.001;
              }
              if (d < minDistance) {
                const force = (0.35 * (minDistance - d)) / d;
                x += vx * force;
                y += vy * force;
              }
            }
        const radius = Math.hypot(x, y),
          angle = radius > 1e-8 ? Math.atan2(y, x) : a.angle;
        if (a.rate > 0)
          return { x: a.integrityRadius * Math.cos(angle), y: a.integrityRadius * Math.sin(angle) };
        if (radius > core) {
          x *= core / radius;
          y *= core / radius;
        }
        return { x, y };
      });
    }
    return view.agents.map((a, id) => {
      const p = points[id],
        source = anchors[id];
      return {
        id: a.id,
        ...p,
        radius: Math.hypot(p.x, p.y),
        angle: Math.atan2(p.y, p.x),
        rate: source.rate,
        integrityRadius: source.integrityRadius,
        band: source.rate > 0 ? 'participation' : 'integrity',
      };
    });
  }

  /** [AK-VIS-02] importantEvents
   * Implementation unit for Influential actors and significant event feed. Follow the reference IDs for its equations, assumptions and verification limits.
   */
  function importantEvents(events, filter = 'major') {
    return events.filter((e) =>
      filter === 'major'
        ? e.salient || e.kind === 'macro' || e.kind === 'politics'
        : filter === 'all' || e.kind === filter,
    );
  }
  // Counts are cumulative in engine history. Subtract matching month boundaries
  // before dividing, so a rolling rate is weighted by actual encounters.

  /** [AK-MEA-02] impactWindow
   * Calculate interval counts before dividing, preserving each branch’s denominator. Missing observations return unavailable rather than manufactured zero.
   */
  function impactWindow(history, month, window = 0) {
    const end = history.find((x) => x.month === month),
      startMonth = window ? Math.max(0, month - window) : 0,
      start = history.find((x) => x.month === startMonth);
    if (!end || !start) return null;
    const opportunities = (end.encounterOpportunities || 0) - (start.encounterOpportunities || 0),
      corrupt = (end.encounterCorruptActs || 0) - (start.encounterCorruptActs || 0);
    if (
      !Number.isFinite(opportunities) ||
      !Number.isFinite(corrupt) ||
      opportunities < 0 ||
      corrupt < 0 ||
      corrupt > opportunities
    )
      return null;
    return {
      month,
      fromMonth: startMonth,
      months: month - startMonth,
      opportunities,
      corrupt,
      rate: opportunities ? (100 * corrupt) / opportunities : null,
    };
  }

  /** [AK-MEA-02] impactSeries
   * Align paired months and their chosen rate windows. An absent corresponding observation cannot be treated as a zero-effect month.
   */
  function impactSeries(reform, baseline, window = 0) {
    const months = new Set(baseline.map((x) => x.month));
    return reform
      .filter((x) => x.month > 0 && months.has(x.month))
      .map((x) => {
        const r = impactWindow(reform, x.month, window),
          b = impactWindow(baseline, x.month, window);
        return {
          month: x.month,
          reform: r,
          baseline: b,
          difference: r && b && r.rate !== null && b.rate !== null ? r.rate - b.rate : null,
        };
      });
  }

  /** [AK-MEA-02] impactDifference
   * Keep a tiny nonzero effect visible with three decimals or scientific notation; formatting precision is not empirical accuracy.
   */
  function impactDifference(value) {
    if (value === null || !Number.isFinite(value)) return '—';
    if (value === 0) return '0.000';
    // Never present a real nonzero effect as signed zero.
    return (
      (value > 0 ? '+' : '') +
      (Math.abs(value) < 0.0005 ? value.toExponential(1) : value.toFixed(3))
    );
  }
  const api = {
    directions,
    core,
    projection,
    importantEvents,
    impactWindow,
    impactSeries,
    impactDifference,
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.AntarkyaVisualization = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
