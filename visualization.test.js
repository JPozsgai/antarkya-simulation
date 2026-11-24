/* AUDIT FILE — visualization.test.js
 * References: AK-VAL-01
 * See docs/audit/TECHNICAL.md and the line-linked full source in docs/audit/source/.
 * Engineering assertions; these do not establish empirical national validity.
 */

'use strict';
const test = require('node:test'),
  assert = require('node:assert/strict'),
  A = require('./model'),
  V = require('./visualization'),
  fs = require('node:fs');

/** [AK-VAL-01] fixture
 * Implementation unit for Engineering verification and audit reproducibility. Follow the reference IDs for its equations, assumptions and verification limits.
 */
const fixture = () => new A.Simulation({ country: 'PER', duration: 6, policies: [] });

/** [AK-VAL-01] test: impact preserves the small nonzero difference from the reported run
 * Verify impact preserves the small nonzero difference from the reported run. See the test body for controlled inputs and exact assertions.
 */
test('impact preserves the small nonzero difference from the reported run', () => {
  const baseline = [
      { month: 0 },
      { month: 120, encounterCorruptActs: 7117, encounterOpportunities: 50695 },
    ],
    reform = [
      { month: 0 },
      { month: 120, encounterCorruptActs: 7108, encounterOpportunities: 50695 },
    ],
    p = V.impactSeries(reform, baseline).at(-1);
  assert.ok(Math.abs(p.difference - -900 / 50695) < 1e-12);
  assert.equal(V.impactDifference(p.difference), '-0.018');
  assert.equal(V.impactDifference(0), '0.000');
  assert.equal(V.impactDifference(null), '—');
  assert.equal(V.impactDifference(-0.000001), '-1.0e-6');
  assert.equal(V.impactDifference(0.01), '+0.010');
});

/** [AK-VAL-01] test: recent impact uses weighted encounter counts at matching month boundaries
 * Verify recent impact uses weighted encounter counts at matching month boundaries. See the test body for controlled inputs and exact assertions.
 */
test('recent impact uses weighted encounter counts at matching month boundaries', () => {
  const history = [
    { month: 0 },
    { month: 1, encounterCorruptActs: 10, encounterOpportunities: 10 },
    { month: 2, encounterCorruptActs: 10, encounterOpportunities: 1000 },
    { month: 12, encounterCorruptActs: 100, encounterOpportunities: 2000 },
    { month: 13, encounterCorruptActs: 101, encounterOpportunities: 2100 },
  ];
  const result = V.impactWindow(history, 13, 12);
  assert.equal(result.corrupt, 91);
  assert.equal(result.opportunities, 2090);
  assert.equal(result.fromMonth, 1);
  assert.equal(result.months, 12);
  assert.equal(result.rate, (100 * 91) / 2090);
  assert.equal(V.impactWindow(history, 2, 12).rate, 1);
  assert.equal(V.impactWindow(history, 13).corrupt, 101);
  assert.equal(V.impactWindow(history, 0).rate, null);
  assert.equal(V.impactWindow(history, 14, 12), null);
});

/** [AK-VAL-01] test: recent paired impact respects each branch denominator and never mutates history
 * Verify recent paired impact respects each branch denominator and never mutates history. See the test body for controlled inputs and exact assertions.
 */
test('recent paired impact respects each branch denominator and never mutates history', () => {
  const r = [
      { month: 0 },
      { month: 1, encounterCorruptActs: 1, encounterOpportunities: 10 },
      { month: 13, encounterCorruptActs: 9, encounterOpportunities: 110 },
    ],
    b = [
      { month: 0 },
      { month: 1, encounterCorruptActs: 1, encounterOpportunities: 10 },
      { month: 13, encounterCorruptActs: 9, encounterOpportunities: 210 },
    ],
    before = JSON.stringify([r, b]),
    s = V.impactSeries(r, b, 12);
  assert.equal(s.at(-1).difference, 4);
  assert.equal(s.at(-1).reform.rate, 8);
  assert.equal(s.at(-1).baseline.rate, 4);
  assert.equal(JSON.stringify([r, b]), before);
  assert.equal(V.impactSeries([{ month: 0 }, { month: 1 }], b, 12)[0].difference, null);
});

/** [AK-VAL-01] test: analytical projection preserves behavior radii when affinity and cooperation change
 * Verify analytical projection preserves behavior radii when affinity and cooperation change. See the test body for controlled inputs and exact assertions.
 */
test('analytical projection preserves behavior radii when affinity and cooperation change', () => {
  const s = fixture(),
    view = s.view(),
    before = JSON.stringify(s.snapshot()),
    first = V.projection(view);
  for (const a of view.agents) a.affinityByRole = [1, 0, 0, 1];
  view.links = view.links.map((l) => ({ ...l, trustAB: 1, trustBA: 1, strength: 1 }));
  const next = V.projection(view);
  assert.deepEqual(
    first.map((p) => p.integrityRadius),
    next.map((p) => p.integrityRadius),
  );
  assert.notDeepEqual(
    first.map((p) => p.angle),
    next.map((p) => p.angle),
  );
  assert.equal(JSON.stringify(s.snapshot()), before);
  for (const p of next)
    assert.ok(Number.isFinite(p.x) && Number.isFinite(p.y) && p.radius <= 0.950000001);
});

/** [AK-VAL-01] test: new meaningful choices change radial position; elapsed time and role do not
 * Verify new meaningful choices change radial position; elapsed time and role do not. See the test body for controlled inputs and exact assertions.
 */
test('new meaningful choices change radial position; elapsed time and role do not', () => {
  const s = fixture(),
    a = s.agents[0];
  a.meaningful = [];
  a.lastDecision = null;
  s.act(a, true);
  const first = V.projection(s.view())[a.id];
  s.state.month += 12;
  const idle = V.projection(s.view())[a.id];
  assert.equal(first.integrityRadius, idle.integrityRadius);
  s.choose(
    a,
    'Integrity opportunity',
    [
      { name: 'lawful', effects: Array(9).fill(0) },
      { name: 'improper', corrupt: true, effects: Array(9).fill(0) },
    ],
    'display',
  );
  s.act(a, false);
  const lawful = V.projection(s.view())[a.id];
  assert.ok(lawful.integrityRadius < first.integrityRadius);
  const role = a.role;
  a.role = (role + 1) % 4;
  const moved = V.projection(s.view())[a.id];
  assert.equal(moved.integrityRadius, lawful.integrityRadius);
});

/** [AK-VAL-01] test: major event filter excludes routine case traffic without discarding the full log
 * Verify major event filter excludes routine case traffic without discarding the full log. See the test body for controlled inputs and exact assertions.
 */
test('major event filter excludes routine case traffic without discarding the full log', () => {
  const events = [
    { kind: 'case', title: 'Case update' },
    { kind: 'macro', title: 'Institution changes' },
    { kind: 'politics', title: 'Election' },
  ];
  assert.equal(V.importantEvents(events).length, 2);
  assert.equal(V.importantEvents(events, 'all').length, 3);
  assert.equal(V.importantEvents(events, 'case').length, 1);
  assert.equal(events.length, 3);
});

/** [AK-VAL-01] test: entrypoint loads consistent versions and all UI hooks including arbitrary whole-month duration
 * Verify entrypoint loads consistent versions and all UI hooks including arbitrary whole-month duration. See the test body for controlled inputs and exact assertions.
 */
test('entrypoint loads consistent versions and all UI hooks including arbitrary whole-month duration', () => {
  const html = fs.readFileSync('index.html', 'utf8'),
    app = fs.readFileSync('app.js', 'utf8'),
    ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((x) => x[1]));
  for (const m of app.matchAll(/\$\('([^']+)'\)/g))
    if (!m[1].endsWith('-')) assert.ok(ids.has(m[1]), 'Missing UI element ' + m[1]);
  assert.match(html, /<input\s+type="number"\s+id="duration"\s+min="6"\s+max="240"/);
  assert.match(html, /value="major" selected/);
  assert.ok(!ids.has('casesStat'));
  for (const file of ['profiles', 'config', 'baseline', 'adaptation', 'run-seeds', 'hybrid', 'system-view'])
    assert.ok(html.includes(file + '.js?v=3.0.0'));
  assert.ok(html.includes('visualization.js?v=3.0.0'));
  for (const file of ['reporting', 'model', 'app']) assert.ok(html.includes(file + '.js?v=3.0.0'));
  assert.ok(app.includes('worker.js?v=3.0.0'));
  assert.ok(html.indexOf('reporting.js') < html.indexOf('model.js'));
  assert.ok(html.indexOf('visualization.js') < html.indexOf('app.js'));
});

/** [AK-VAL-01] test: startup map and class rates use completed choices from the reconstructed past
 * Verify startup map and class rates use completed choices from the reconstructed past. See the test body for controlled inputs and exact assertions.
 */
test('startup map and class rates use completed choices from the reconstructed past', () => {
  const s = fixture(),
    v = s.view();
  assert.ok(s.agents.some((a) => a.corruptActions > 0));
  for (const x of s.classActivity()) {
    assert.ok(x.opportunities > 0);
    assert.ok(x.rate >= 0 && x.rate <= 100);
  }
  assert.ok(V.projection(v).some((p) => p.band === 'participation'));
  assert.ok(V.projection(v).some((p) => p.band === 'integrity'));
  assert.equal(s.metrics().corruptActs, 0);
  assert.equal(v.initialization.months, 12);
});
