/* AUDIT FILE — run-seeds.test.js
 * References: AK-VAL-01
 * See docs/audit/TECHNICAL.md and the line-linked full source in docs/audit/source/.
 * Engineering assertions; these do not establish empirical national validity.
 */

'use strict';
const test = require('node:test'),
  assert = require('node:assert/strict'),
  R = require('./run-seeds'),
  A = require('./model');
const config = {
  country: 'PER',
  duration: 12,
  policies: [{ id: 'aca', mobilization: 0.6 }],
  eventSeed: 'replay-test',
};

/** [AK-VAL-01] test: new runs get distinct event identities without modifying settings or society
 * Verify new runs get distinct event identities without modifying settings or society. See the test body for controlled inputs and exact assertions.
 */
test('new runs get distinct event identities without modifying settings or society', () => {
  /** [AK-VAL-01] fill
   * Implementation unit for Engineering verification and audit reproducibility. Follow the reference IDs for its equations, assumptions and verification limits.
   */
  const before = JSON.stringify(config),
    fill = (words) => words.fill(42),
    one = R.prepareRun(config, false, fill),
    two = R.prepareRun(config, false, fill);
  assert.notEqual(one.eventSeed, two.eventSeed);
  assert.equal(JSON.stringify(config), before);
  assert.deepEqual(A.createInitial(one), A.createInitial(two));
  const initial = A.createInitial(one),
    first = new A.Simulation(one, initial).run(),
    second = new A.Simulation(two, initial).run();
  assert.notDeepEqual(first.state.history, second.state.history);
  assert.notEqual(
    A.hash(JSON.stringify(first.state.events)),
    A.hash(JSON.stringify(second.state.events)),
  );
  first.assertInvariants();
  second.assertInvariants();
});

/** [AK-VAL-01] test: explicit exact replay consumes no new entropy and reproduces the entire event history
 * Verify explicit exact replay consumes no new entropy and reproduces the entire event history. See the test body for controlled inputs and exact assertions.
 */
test('explicit exact replay consumes no new entropy and reproduces the entire event history', () => {
  const replay = R.prepareRun(config, true, () => {
    throw Error('Replay must not generate a fresh seed.');
  });
  assert.equal(replay.eventSeed, config.eventSeed);
  const initial = A.createInitial(replay),
    first = new A.Simulation(replay, initial).run(),
    second = new A.Simulation(replay, initial).run();
  assert.deepEqual(first.snapshot(), second.snapshot());
});

/** [AK-VAL-01] test: fresh event seeds retain matching baseline/reform randomness and separate initialization
 * Verify fresh event seeds retain matching baseline/reform randomness and separate initialization. See the test body for controlled inputs and exact assertions.
 */
test('fresh event seeds retain matching baseline/reform randomness and separate initialization', () => {
  const c = R.prepareRun({ ...config, policies: [] }, false, (words) => {
    for (let i = 0; i < words.length; i++) words[i] = i + 100;
  });
  const initial = A.createInitial(c),
    reform = new A.Simulation(c, initial).run(),
    baseline = new A.Simulation(c, initial, 0, true).run();
  assert.deepEqual(reform.snapshot(), baseline.snapshot());
  assert.equal(initial.initialKey, A.createInitial(config).initialKey);
});
