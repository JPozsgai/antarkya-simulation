/* AUDIT FILE — reporting.js
 * References: AK-INI-01, AK-POL-ACA, AK-POL-MERIT, AK-POL-ROTATION, AK-POL-PROTECTION, AK-POL-DECLARATIONS, AK-POL-CONFLICTS, AK-POL-OVERSIGHT, AK-POL-PAY, AK-POL-PENALTIES, AK-POL-DISCLOSURE, AK-POL-COMPLAINTS, AK-POL-EDUCATION, AK-MEA-01, AK-MEA-03, AK-MEA-04, AK-VAL-01
 * See docs/audit/TECHNICAL.md and the line-linked full source in docs/audit/source/.
 * Documentation-only revision: execution is checked against the pinned pre-annotation AST.
 */

'use strict';
// Observation-only accounting. No function draws randomness or changes engine state.
(function (root) {
  const Adaptive =
    typeof module !== 'undefined' && module.exports
      ? require('./adaptation.js')
      : root.AntarkyaAdaptation;
  const ids = [
    'aca',
    'merit',
    'rotation',
    'protection',
    'declarations',
    'conflicts',
    'oversight',
    'pay',
    'penalties',
    'disclosure',
    'complaints',
    'education',
  ];

  /** [AK-MEA-03] [AK-MEA-04] clone
   * Implementation unit for Policy-specific before/current/final monitoring. Follow the reference IDs for its equations, assumptions and verification limits.
   */
  const schema = 'antarkya.reporting.v1',
    archives = new Map(),
    clone = (x) => JSON.parse(JSON.stringify(x)),
    sum = (a) => a.reduce((x, y) => x + y, 0),
    mean = (a) => (a.length ? sum(a) / a.length : null);
  const definitions = {
    /* [AK-POL-ACA] Data definition; numeric values are explicit model priors unless separately sourced. */
    aca: {
      output: 'Screenings completed',
      unit: 'count',
      conditions: [
        ['Relevant open case files', 'count'],
        ['Screening / inquiry staff capacity', 'PM'],
        ['Average mandate coverage', '%'],
      ],
    },

    /* [AK-POL-MERIT] Data definition; numeric values are explicit model priors unless separately sourced. */
    merit: {
      output: 'Appointments completed',
      unit: 'count',
      conditions: [
        ['Appointment criteria met, past 12 months', '%'],
        ['Average staff competence', '%'],
        ['Covered staffing scope', '%'],
      ],
    },

    /* [AK-POL-ROTATION] Data definition; numeric values are explicit model priors unless separately sourced. */
    rotation: {
      output: 'Staff transfers completed',
      unit: 'count',
      conditions: [
        ['Closed-network continuity', '%'],
        ['Current official staff', 'count'],
        ['Operating rotation capability', '%'],
      ],
    },

    /* [AK-POL-PROTECTION] Data definition; numeric values are explicit model priors unless separately sourced. */
    protection: {
      output: 'Threats remedied',
      unit: 'count',
      conditions: [
        ['Reported threats, past 12 months', 'count'],
        ['Expected reporting safety', '%'],
        ['Operating protection capability', '%'],
      ],
    },

    /* [AK-POL-DECLARATIONS] Data definition; numeric values are explicit model priors unless separately sourced. */
    declarations: {
      output: 'Reform verification notices',
      unit: 'count',
      conditions: [
        ['Financial record completeness', '%'],
        ['Covered declaration scope', '%'],
        ['Operating verification capability', '%'],
      ],
    },

    /* [AK-POL-CONFLICTS] Data definition; numeric values are explicit model priors unless separately sourced. */
    conflicts: {
      output: 'Improper exchanges blocked',
      unit: 'count',
      conditions: [
        ['Conflict-record quality', '%'],
        ['Covered conflict-review scope', '%'],
        ['Operating review capability', '%'],
      ],
    },

    /* [AK-POL-OVERSIGHT] Data definition; numeric values are explicit model priors unless separately sourced. */
    oversight: {
      output: 'Investigations completed',
      unit: 'count',
      conditions: [
        ['Audit / inquiry open files', 'count'],
        ['Audit / inquiry staff capacity', 'PM'],
        ['Operating scrutiny capability', '%'],
      ],
    },

    /* [AK-POL-PAY] Data definition; numeric values are explicit model priors unless separately sourced. */
    pay: {
      output: 'Net public pay delivered',
      unit: 'RU',
      conditions: [
        ['Reliable adequate net pay', '%'],
        ['Average official unmet-needs pressure', '%'],
        ['Average net pay / living needs', 'ratio'],
      ],
    },

    /* [AK-POL-PENALTIES] Data definition; numeric values are explicit model priors unless separately sourced. */
    penalties: {
      output: 'Liability actually collected',
      unit: 'RU',
      conditions: [
        ['Outstanding assessed liability', 'RU'],
        ['Officials’ expected accountability cost', '%'],
        ['Operating collection capability', '%'],
      ],
    },

    /* [AK-POL-DISCLOSURE] Data definition; numeric values are explicit model priors unless separately sourced. */
    disclosure: {
      output: 'Public-record delivery work',
      unit: 'PM',
      conditions: [
        ['Public-record quality', '%'],
        ['Covered disclosure scope', '%'],
        ['Operating disclosure capability', '%'],
      ],
    },

    /* [AK-POL-COMPLAINTS] Data definition; numeric values are explicit model priors unless separately sourced. */
    complaints: {
      output: 'Reports submitted',
      unit: 'count',
      conditions: [
        ['Unresolved complaint files', 'count'],
        ['Experienced reporting knowledge', '%'],
        ['Modeled reporting access', '%'],
      ],
    },

    /* [AK-POL-EDUCATION] Data definition; numeric values are explicit model priors unless separately sourced. */
    education: {
      output: 'Reform teaching contacts',
      unit: 'count',
      conditions: [
        ['Usable knowledge', '%'],
        ['Perceived approval of lawful conduct', '%'],
        ['Lawful-action capability', '%'],
        ['Retained attitude influence', '%'],
      ],
    },
  };

  /** [AK-MEA-03] [AK-MEA-04] finite
   * Implementation unit for Policy-specific before/current/final monitoring. Follow the reference IDs for its equations, assumptions and verification limits.
   */
  const finite = (x) => Number.isFinite(x),
    pct = (a) => (a.length ? 100 * mean(a) : null);

  /** [AK-MEA-03] activity
   * Accumulate an actual delivered process hook only; selecting a policy or inspecting a panel cannot create output.
   */
  function activity(sim, id, amount = 1) {
    if (sim.state.hybrid && finite(amount) && amount > 0) {
      const counts = sim.state.hybrid.activity ||= {};
      counts[id] = (counts[id] || 0) + amount;
    }
    if (sim.monitor && finite(amount) && amount > 0) sim.monitor.counts[id] += amount;
  }

  /** [AK-MEA-03] init
   * Capture conditions before adopt() and inherit the separately archived pre-policy observations. Keep the monitor outside state and separate from the complaint report() method.
   */
  function init(sim) {
    const pre = sim.state.initialization ? archives.get(sim.state.initialKey) : null;
    sim.monitor = {
      schema,
      counts: Object.fromEntries(
        [...ids, 'meritGood', 'threats'].map((id) => [id, pre?.counts[id] || 0]),
      ),
      history: pre ? clone(pre.history) : [],
      start: null,
      lastMetrics: { ...sim.state.metrics },
      lastMonth: sim.month,
      events: [],
      eventCursor: 0,
    };
    sim.monitor.start = sample(sim);
    if (sim.state.initialization) {
      const m = sim.state.initialization.metrics;
      sim.monitor.start.impact = {
        opportunities: m.encounterOpportunities || 0,
        corrupt: m.encounterCorruptActs || 0,
      };
    }
  }

  /** [AK-INI-01] [AK-MEA-03] remember
   * Cache a cloned pre-policy observation archive keyed to the starting society without changing its serialized state.
   */
  function remember(key, report) {
    if (!report) return;
    archives.set(key, { counts: clone(report.counts), history: clone(report.history) });
    if (archives.size > 2) archives.delete(archives.keys().next().value);
  }

  /** [AK-MEA-03] counterAt
   * Implementation unit for Policy-specific before/current/final monitoring. Follow the reference IDs for its equations, assumptions and verification limits.
   */
  function counterAt(report, month, key) {
    const p = report.history.find((x) => x.month === month);
    return p ? p.counts[key] : null;
  }

  /** [AK-MEA-03] recent
   * Implementation unit for Policy-specific before/current/final monitoring. Follow the reference IDs for its equations, assumptions and verification limits.
   */
  function recent(sim, key, months = 12) {
    const r = sim.monitor,
      earliest = r.history[0]?.month ?? sim.month,
      from = Math.max(earliest, sim.month - months),
      before = from === sim.month ? r.counts[key] : counterAt(r, from, key);
    return before === null ? null : r.counts[key] - before;
  }

  /** [AK-MEA-01] [AK-MEA-03] sample
   * Read all policy-specific snapshot conditions and explicitly defined outcomes. Estimated capability, rolling realized ratios and matured violation cohorts remain distinct.
   */
  function sample(sim) {
    const s = sim.state,
      r = sim.monitor,
      officials = sim.agents.filter((a) => a.role === 2),
      open = s.cases.filter((c) => c.status !== 'closed'),
      tools = {};

    /** [AK-MEA-01] [AK-MEA-03] pool
     * Local helper for sample; its inputs and return value are part of the enclosing mechanism. Institutional indicators and fixed reference diagnostics.
     */
    const pool = (id) => sim.publicOrgs.filter((o) => sim.eligibleTool(id, o));

    /** [AK-MEA-01] [AK-MEA-03] scope
     * Local helper for sample; its inputs and return value are part of the enclosing mechanism. Institutional indicators and fixed reference diagnostics.
     */
    const scope = (id) => pct(pool(id).map((o) => sim.coverage(id, o)));

    /** [AK-MEA-01] [AK-MEA-03] cap
     * Local helper for sample; its inputs and return value are part of the enclosing mechanism. Institutional indicators and fixed reference diagnostics.
     */
    const cap = (id) => pct(pool(id).map((o) => sim.operational(id, o)));

    /** [AK-MEA-01] [AK-MEA-03] staff
     * Local helper for sample; its inputs and return value are part of the enclosing mechanism. Institutional indicators and fixed reference diagnostics.
     */
    const staff = (orgs) =>
      sum(
        orgs.map(
          (o) =>
            o.members.filter((id) => sim.agents[id].role === 2).length *
            (0.25 + 0.4 * o.skill + 0.35 * (o.professionalSkill ?? o.skill)),
        ),
      );
    const pay = sim.diagnostic('pay'),
      edu = sim.diagnostic('education'),
      rotation = sim.diagnostic('rotation');
    const appointments = recent(sim, 'merit'),
      merit = recent(sim, 'meritGood'),
      threats = recent(sim, 'threats'),
      protectedCount = recent(sim, 'protection');
    const outcome = {};
    for (const id of ids) outcome[id] = sim.diagnostic(id).value;
    outcome.merit = appointments > 0 ? (100 * merit) / appointments : null;
    outcome.protection = threats > 0 ? (100 * protectedCount) / threats : null;
    const matured = s.conduct.filter(
        (x) =>
          x.truth && x.kind === 'extortion' && x.month > sim.month - 18 && x.month <= sim.month - 6,
      ),
      matureIds = new Set(matured.map((x) => x.id));
    outcome.penalties =
      matured.length >= 20
        ? sum(
            s.cases
              .filter(
                (c) =>
                  matureIds.has(c.recordId) &&
                  c.truth &&
                  c.status === 'closed' &&
                  c.decision === 'sanction' &&
                  c.route !== 'civil',
              )
              .map((c) => c.collected || 0),
          ) / matured.length
        : null;

    /** [AK-MEA-01] [AK-MEA-03] relevant
     * Local helper for sample; its inputs and return value are part of the enclosing mechanism. Institutional indicators and fixed reference diagnostics.
     */
    const relevant = (id, c) =>
      id === 'complaints'
        ? c.source === 'complaint'
        : id === 'oversight'
          ? c.source === 'audit' || c.stage === 1
          : ['prevention', 'integrity', 'investigation'].includes(
              sim.responsible(c.stage, c.route, c).fn,
            );
    const conditions = {
      aca: [open.filter((c) => relevant('aca', c)).length, staff(pool('aca')), scope('aca')],
      merit: [outcome.merit, pct(officials.map((a) => a.skill)), scope('merit')],
      rotation: [rotation.value, officials.length, cap('rotation')],
      protection: [threats, pct(sim.agents.map((a) => Adaptive.safety(a))), cap('protection')],
      declarations: [
        pct(officials.map((a) => a.disclosure)),
        scope('declarations'),
        cap('declarations'),
      ],
      conflicts: [
        pct(pool('conflicts').map((o) => o.recordQuality)),
        scope('conflicts'),
        cap('conflicts'),
      ],
      oversight: [
        open.filter((c) => relevant('oversight', c)).length,
        staff(pool('oversight')),
        cap('oversight'),
      ],
      pay: [
        pay.value,
        pct(officials.map((a) => a.financialPressure || 0)),
        mean(officials.map((a) => (mean(a.receipts)) / Math.max(0.001, a.cost))),
      ],
      penalties: [
        sum(sim.agents.flatMap((a) => (a.liabilities || []).map((c) => c.remaining))),
        pct(officials.map((a) => a.riskBelief)),
        cap('penalties'),
      ],
      disclosure: [
        pct(pool('disclosure').map((o) => o.disclosureQuality)),
        scope('disclosure'),
        cap('disclosure'),
      ],
      complaints: [
        open.filter((c) => c.source === 'complaint').length,
        pct(sim.agents.map((a) => Adaptive.knowledge(a, 'report'))),
        100 * sim.cap('complaints'),
      ],
      education: [
        edu.value,
        pct(
          sim.agents.map((a) => {
            const e = Adaptive.influence(a, 'integrity'),
              norm = -a.normCorrupt;
            return (norm + e.norm * (1 - norm) + 1) / 2;
          }),
        ),
        pct(
          sim.agents.map(
            (a) => a.control + Adaptive.influence(a, 'integrity').control * (1 - a.control),
          ),
        ),
        pct(sim.agents.map((a) => Adaptive.influence(a, 'integrity').attitude)),
      ],
    };
    for (const id of ids)
      tools[id] = {
        outcome: outcome[id],
        conditions: conditions[id],
        scope: scope(id),
        n:
          id === 'merit'
            ? appointments
            : id === 'protection'
              ? threats
              : id === 'penalties'
                ? matured.length
                : null,
      };
    return {
      month: sim.month,
      counts: { ...r.counts },
      tools,
      impact: {
        opportunities: s.metrics.encounterOpportunities || 0,
        corrupt: s.metrics.encounterCorruptActs || 0,
      },
    };
  }

  /** [AK-MEA-03] [AK-MEA-04] related
   * Implementation unit for Policy-specific before/current/final monitoring. Follow the reference IDs for its equations, assumptions and verification limits.
   */
  function related(id, event, sim) {
    if (event.id === 'P-' + id) return 'direct';
    const c = sim.caseIndex.get(event.id);
    if (!c) return null;
    if (
      (id === 'complaints' && c.source === 'complaint') ||
      (id === 'oversight' && c.source === 'audit') ||
      (id === 'protection' && event.title === 'A reporter faces retaliation') ||
      (id === 'penalties' && event.title === 'A case reaches a decision') ||
      (id === 'aca' &&
        ['A signal enters screening', 'A case reaches a decision'].includes(event.title))
    )
      return 'contextual';
    return null;
  }

  /** [AK-MEA-03] record
   * Update passive counters/snapshots and a bounded real-event evidence index after the monthly world update. Protect important per-policy records from last-200 feed truncation.
   */
  function record(sim) {
    const r = sim.monitor;
    if (!r) return;
    if (sim.month !== r.lastMonth) {
      for (const [id, key] of [
        ['merit', 'appointments'],
        ['meritGood', 'meritAppointments'],
        ['protection', 'remedied'],
        ['threats', 'retaliation'],
        ['penalties', 'collected'],
        ['complaints', 'reports'],
      ])
        r.counts[id] += Math.max(0, (sim.state.metrics[key] || 0) - (r.lastMetrics[key] || 0));
      r.lastMetrics = { ...sim.state.metrics };
      r.lastMonth = sim.month;
    }
    const point = sample(sim),
      at = r.history.findIndex((x) => x.month === sim.month);
    if (at >= 0) r.history[at] = point;
    else r.history.push(point);
    for (const event of sim.state.events.slice(r.eventCursor)) {
      const policies = Object.fromEntries(
        ids.map((id) => [id, related(id, event, sim)]).filter((x) => x[1]),
      );
      if (Object.keys(policies).length || event.salient) {
        const p = sim.state.policies.find((p) => event.id === 'P-' + p.id),
          review = p?.reviews.find((x) => x.month === event.month);
        r.events.push({
          ...clone(event),
          policies,
          change: review?.passed ? review.to - review.from : 0,
          material:
            event.status === 'Operating' ||
            event.status === 'Formal suspension' ||
            !!(review?.passed && (review.to !== review.from || review.choice === 'narrow')),
        });
      }
    }
    r.eventCursor = sim.state.events.length;
    // A bounded evidence index survives the live feed's last-200 truncation.
    if (r.events.length > 400) {
      const keep = new Set(
        ids
          .flatMap((id) => eventsFor({ events: r.events }, id, 'outcome', sim.month, 0))
          .map((e) => e.id + '.' + e.update),
      );
      const recent = r.events.slice(-(400 - keep.size));
      r.events = r.events.filter((e) => keep.has(e.id + '.' + e.update) || recent.includes(e));
    }
  }

  /** [AK-MEA-03] view
   * Return the observation payload without recomputing actor decisions or consuming simulation draws.
   */
  function view(sim) {
    if (!sim.monitor) return null;
    const r = sim.monitor;
    return { schema, start: r.start, history: r.history, events: r.events };
  }

  /** [AK-MEA-03] windowValue
   * Subtract cumulative observed activities at equal month boundaries, including the inherited year. Never compare an opening queue stock with a year of activity or average unweighted monthly rates.
   */
  function windowValue(report, id, month, window = 12) {
    if (!report || report.schema !== schema) return null;
    const point = report.history.find((x) => x.month === month);
    if (!point) return null;
    const earliest = report.history[0].month,
      from = window ? Math.max(earliest, month - window) : 0,
      start = report.history.find((x) => x.month === from);
    if (!start) return null;
    return {
      value: point.counts[id] - start.counts[id],
      months: month - from,
      fromMonth: from,
      month,
    };
  }

  /** [AK-MEA-01] outcomeMeta
   * Name the rolling observed reporting overrides so they cannot be confused with the older aggregate diagnostic definitions.
   */
  function outcomeMeta(id) {
    return id === 'merit'
      ? { method: 'Observed appointments in the trailing 12 months', unit: '%', lowerBetter: false }
      : id === 'protection'
        ? {
            method: 'Observed reporting threats in the trailing 12 months',
            unit: '%',
            lowerBetter: false,
          }
        : id === 'penalties'
          ? {
              method:
                'Actual collection per matured extortion violation; 12-month cohort ending six months earlier',
              unit: 'RU',
              lowerBetter: false,
            }
          : null;
  }

  /** [AK-MEA-04] eventsFor
   * Select existing records no later than the review month, prioritizing material implementation changes. Package impact uses the whole package independently of the policy selector; contextual connections do not identify causes.
   */
  function eventsFor(report, id, level, month, window = 12) {
    if (!report) return [];
    const from = window ? Math.max(0, month - window) : 0;
    return report.events
      .filter(
        (e) =>
          e.month >= 0 &&
          e.month <= month &&
          !e.id.startsWith('INIT-') &&
          (level === 'impact'
            ? e.salient || Object.values(e.policies).includes('direct')
            : e.policies[id]),
      )
      .map((e) => {
        const direct =
            level === 'impact'
              ? Object.values(e.policies).includes('direct')
              : e.policies[id] === 'direct',
          important =
            e.status === 'Formal suspension' ||
            e.status === 'Operating' ||
            e.kind === 'politics' ||
            e.salient;
        return {
          ...e,
          relation: direct ? 'direct policy record' : 'connected development',
          score:
            (direct ? 4 : 0) +
            (e.material ? 8 : 0) +
            (important ? 3 : 0) +
            (e.month >= from ? 2 : 0) +
            e.month / Math.max(1, month),
        };
      })
      .sort((a, b) => b.score - a.score || b.month - a.month || b.update - a.update)
      .filter((e, i, a) => a.findIndex((x) => x.id === e.id && x.status === e.status) === i)
      .slice(0, 8);
  }
  const templates = {
    outputMore:
      'More delivery is recorded than in the baseline; institutional change is assessed separately.',
    outputLess: 'Less delivery is recorded than in the baseline during this period.',
    outputSame: 'Delivery matches the baseline during this period.',
    noOutput: 'No delivery of this activity is recorded during this period.',
    outcomeBetter: 'The policy-specific institutional indicator improves against baseline.',
    outcomeWorse: 'The policy-specific institutional indicator worsens against baseline.',
    outcomeSame: 'The institutional indicator matches baseline at the displayed precision.',
    lag: 'Additional activity is recorded, while institutional change remains limited.',
    gap: 'Institutional conditions improve, while the package’s conduct effect remains limited.',
    impactBetter:
      'The reform package records fewer corrupt encounters per opportunity than baseline.',
    impactWorse:
      'The reform package records more corrupt encounters per opportunity than baseline.',
    impactSame: 'The package’s encounter rate matches baseline at the displayed precision.',
    missing: 'There are too few applicable observations to assess this result yet.',
  };

  /** [AK-MEA-04] interpret
   * Choose a predefined statement from measured levels/direction/missingness. Precision thresholds are not significance tests; no anecdote or causal explanation is generated from hidden assumptions.
   */
  function interpret(
    level,
    {
      value,
      baseline,
      lowerBetter = false,
      outputDelta = null,
      impactDelta = null,
      estimated = false,
    },
  ) {
    if (!finite(value) || !finite(baseline)) return templates.missing;
    const difference = value - baseline,
      tolerance = level === 'impact' ? 0.0005 : level === 'outcome' ? 0.05 : 1e-8;
    let text;
    if (level === 'output')
      text =
        !value && !baseline
          ? templates.noOutput
          : difference > tolerance
            ? templates.outputMore
            : difference < -tolerance
              ? templates.outputLess
              : templates.outputSame;
    else if (level === 'impact')
      text =
        difference < -tolerance
          ? templates.impactBetter
          : difference > tolerance
            ? templates.impactWorse
            : templates.impactSame;
    else if (Math.abs(difference) < tolerance)
      text = outputDelta > 0 ? templates.lag : templates.outcomeSame;
    else if (lowerBetter ? difference < 0 : difference > 0)
      text =
        finite(impactDelta) && Math.abs(impactDelta) < 0.0005
          ? templates.gap
          : templates.outcomeBetter;
    else text = templates.outcomeWorse;
    return estimated ? 'Estimated capability: ' + text[0].toLowerCase() + text.slice(1) : text;
  }

  /** [AK-VAL-01] valid
   * Validate optional saved observation histories, numeric fields, IDs and bounded event metadata. Absence in an older completed save is reported honestly rather than filled with invented data.
   */
  function valid(report) {
    if (
      !report ||
      report.schema !== schema ||
      !report.start ||
      !Array.isArray(report.history) ||
      report.history.length > 254 ||
      !Array.isArray(report.events) ||
      report.events.length > 400
    )
      return false;
    const points = [report.start, ...report.history],
      months = new Set();
    for (const p of points) {
      if (
        !p ||
        !Number.isInteger(p.month) ||
        p.month < -12 ||
        p.month > 240 ||
        !p.counts ||
        !p.tools ||
        !p.impact
      )
        return false;
      if (
        !finite(p.impact.opportunities) ||
        !finite(p.impact.corrupt) ||
        p.impact.opportunities < 0 ||
        p.impact.corrupt < 0 ||
        p.impact.corrupt > p.impact.opportunities
      )
        return false;
      for (const id of ids) {
        const t = p.tools[id];
        if (
          !finite(p.counts[id]) ||
          p.counts[id] < 0 ||
          !t ||
          (t.outcome !== null && !finite(t.outcome)) ||
          !Array.isArray(t.conditions) ||
          t.conditions.length !== definitions[id].conditions.length ||
          t.conditions.some((x) => x !== null && !finite(x)) ||
          (t.scope !== null && !finite(t.scope))
        )
          return false;
      }
    }
    for (const p of report.history) {
      if (months.has(p.month)) return false;
      months.add(p.month);
    }
    return report.events.every(
      (e) =>
        typeof e.id === 'string' &&
        Number.isInteger(e.update) &&
        Number.isInteger(e.month) &&
        typeof e.title === 'string' &&
        typeof e.text === 'string' &&
        Array.isArray(e.actors) &&
        e.actors.every((x) => Number.isInteger(x) && x >= 0 && x < 1000) &&
        e.policies &&
        Object.keys(e.policies).every((id) => ids.includes(id)),
    );
  }
  const api = {
    schema,
    ids,
    definitions,
    init,
    remember,
    activity,
    record,
    view,
    windowValue,
    outcomeMeta,
    eventsFor,
    templates,
    interpret,
    valid,
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.AntarkyaReporting = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
