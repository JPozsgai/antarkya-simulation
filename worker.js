/* AUDIT FILE — worker.js
 * References: AK-OV-01, AK-OPS-01
 * See docs/audit/TECHNICAL.md and the line-linked full source in docs/audit/source/.
 * Documentation-only revision: execution is checked against the pinned pre-annotation AST.
 */

'use strict';
importScripts(
  'profiles.js?v=2.4.0',
  'config.js?v=2.4.0',
  'baseline.js?v=2.4.0',
  'adaptation.js?v=2.4.0',
  'reporting.js?v=2.4.2',
  'model.js?v=2.4.2',
);
let config,
  initial,
  reform,
  baseline,
  replicate = 0,
  active = false,
  delay = 100,
  timer = null,
  firstResult = null,
  replications = [],
  started = 0;

/** [AK-OV-01] summary
 * Implementation unit for Purpose, scope and version identity. Follow the reference IDs for its equations, assumptions and verification limits.
 */
const summary = (s) => ({
  version: Antarkya.VERSION,
  month: s.month,
  reporting: s.reporting(),
  metrics: s.metrics(),
  assessment: s.assessment(),
  history: s.state.history,
  classActivity: s.classActivity(),
});

/** [AK-OPS-01] makePair
 * Construct reform and no-new-reform baseline from the exact same initialized state and replicate identity.
 */
function makePair() {
  reform = new Antarkya.Simulation(config, initial, replicate, false);
  baseline = new Antarkya.Simulation(config, initial, replicate, true);
}

/** [AK-OPS-01] send
 * Implementation unit for Worker scheduling, repetitions and browser operation. Follow the reference IDs for its equations, assumptions and verification limits.
 */
function send(type = 'state') {
  const view = replicate === 0 ? reform.view() : firstResult.reform,
    base = replicate === 0 ? summary(baseline) : firstResult.baseline;
  postMessage({
    type,
    reform: view,
    baseline: base,
    comparison: Antarkya.comparison(view, base),
    replicate: replicate + 1,
    repetitions: config.repetitions,
    repeatMonth: reform.month,
    eventSeed: config.eventSeed,
    running: active,
    elapsed: performance.now() - started,
  });
}

/** [AK-OPS-01] finishPair
 * Check invariants, retain the first visible trajectory, export complete records and summarize repetitions. Simulation ranges are not empirical confidence intervals.
 */
function finishPair() {
  reform.assertInvariants();
  baseline.assertInvariants();
  const r = reform.view(),
    b = summary(baseline),
    c = Antarkya.comparison(r, b);
  replications.push({
    replicate: replicate + 1,
    eventSeed: config.eventSeed,
    reformMetrics: r.metrics,
    baselineMetrics: b.metrics,
    ...c,
    policyOutcomes: Object.fromEntries(
      Antarkya.KEYS.map((id) => {
        const x = r.reporting.history.at(-1).tools[id].outcome,
          y = b.reporting.history.at(-1).tools[id].outcome;
        return [
          id,
          { reform: x, baseline: y, difference: x === null || y === null ? null : x - y },
        ];
      }),
    ),
  });
  if (replicate === 0)
    firstResult = {
      reform: {
        ...r,
        events: reform.state.events,
        cases: reform.state.cases,
        conduct: reform.state.conduct,
        agentProfiles: reform.agents.map((a) => ({
          id: a.id,
          motives: a.motives,
          skill: a.skill,
          control: a.control,
          normCorrupt: a.normCorrupt,
          riskBelief: a.riskBelief,
          financialPressure: a.financialPressure,
          liabilities: a.liabilities,
          experience: a.experience,
          income: a.income,
          cost: a.cost,
          startingRole: a.startingRole,
          psychology: a.psychology,
        })),
      },
      baseline: b,
    };
  if (replicate + 1 < config.repetitions) {
    replicate++;
    makePair();
    return false;
  }
  active = false;
  const differences = replications.map((r) => r.difference).filter((x) => x !== null);
  postMessage({
    type: 'complete',
    ...firstResult,
    eventSeed: config.eventSeed,
    repetitions: config.repetitions,
    replicate: config.repetitions,
    comparison: Antarkya.comparison(firstResult.reform, firstResult.baseline),
    replications,
    statistics: {
      meanDifference: differences.length
        ? differences.reduce((a, b) => a + b, 0) / differences.length
        : null,
      minDifference: differences.length ? Math.min(...differences) : null,
      maxDifference: differences.length ? Math.max(...differences) : null,
    },
    elapsed: performance.now() - started,
    initialKey: initial.initialKey,
  });
  return true;
}

/** [AK-OPS-01] advance
 * Implementation unit for Worker scheduling, repetitions and browser operation. Follow the reference IDs for its equations, assumptions and verification limits.
 */
function advance() {
  if (reform.month >= config.duration) return finishPair();
  reform.step();
  baseline.step();
  if (reform.month >= config.duration) return finishPair();
  return false;
}

/** [AK-OPS-01] pump
 * Schedule bounded batches without changing monthly step order or random streams; pause/pace affect responsiveness only.
 */
function pump() {
  if (!active) return;
  try {
    const batch = replicate > 0 ? 3 : delay < 40 ? 3 : 1;
    for (let i = 0; i < batch; i++) {
      if (advance()) return;
    }
    send('state');
    timer = setTimeout(pump, replicate > 0 ? 0 : delay);
  } catch (e) {
    active = false;
    postMessage({ type: 'error', message: e.message });
  }
}
onmessage = (e) => {
  try {
    const m = e.data;
    if (m.type === 'init') {
      clearTimeout(timer);
      active = false;
      config = Antarkya.validate(m.config);
      initial = m.initial || Antarkya.createInitial(config);
      Antarkya.validateInitial(initial, config);
      replicate = 0;
      replications = [];
      firstResult = null;
      started = performance.now();
      makePair();
      send('ready');
    } else if (m.type === 'run') {
      if (!config) return;
      delay = m.delay ?? delay;
      if (!active) {
        active = true;
        pump();
      }
    } else if (m.type === 'pause') {
      active = false;
      clearTimeout(timer);
      send('paused');
    } else if (m.type === 'step') {
      active = false;
      clearTimeout(timer);
      if (!advance()) send('state');
    } else if (m.type === 'pace') delay = m.delay;
  } catch (e) {
    active = false;
    postMessage({ type: 'error', message: e.message });
  }
};
