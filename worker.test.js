/* AUDIT FILE — worker.test.js
 * References: AK-VAL-01
 * See docs/audit/TECHNICAL.md and the line-linked full source in docs/audit/source/.
 * Engineering assertions; these do not establish empirical national validity.
 */

'use strict';
const test = require('node:test'),
  assert = require('node:assert/strict'),
  vm = require('node:vm'),
  fs = require('node:fs'),
  path = require('node:path');

/** [AK-VAL-01] runtime
 * Implementation unit for Engineering verification and audit reproducibility. Follow the reference IDs for its equations, assumptions and verification limits.
 */
function runtime() {
  const messages = [],
    timers = new Set();

  /** [AK-VAL-01] handler
   * Local helper for runtime; its inputs and return value are part of the enclosing mechanism. Engineering verification and audit reproducibility.
   */
  let handler = () => {};
  const context = {
    performance,
    setTimeout: (f, n) => {
      const id = setTimeout(() => {
        timers.delete(id);
        f();
      }, n);
      timers.add(id);
      return id;
    },
    clearTimeout: (id) => {
      clearTimeout(id);
      timers.delete(id);
    },
    postMessage: (m) => {
      messages.push(JSON.parse(JSON.stringify(m)));
      handler(m);
    },
  };
  vm.createContext(context);
  context.importScripts = (...files) =>
    files.forEach((file) =>
      vm.runInContext(fs.readFileSync(path.join(__dirname, file.split('?')[0]), 'utf8'), context),
    );
  vm.runInContext(fs.readFileSync(path.join(__dirname, 'worker.js'), 'utf8'), context);
  return {
    messages,
    send: (m) => context.onmessage({ data: m }),
    onMessage: (f) => (handler = f),
    close: () => timers.forEach(clearTimeout),
  };
}

/** [AK-VAL-01] test: worker step/pause retains paired months and does not automatically run after initialization
 * Verify worker step/pause retains paired months and does not automatically run after initialization. See the test body for controlled inputs and exact assertions.
 */
test('worker step/pause retains paired months and does not automatically run after initialization', () => {
  const w = runtime();
  try {
    w.send({ type: 'init', config: { country: 'PER', duration: 6, policies: [] } });
    assert.equal(w.messages.at(-1).type, 'ready');
    assert.equal(w.messages.at(-1).reform.month, 0);
    w.send({ type: 'step' });
    const m = w.messages.at(-1);
    assert.equal(m.reform.month, 1);
    assert.equal(m.baseline.history.at(-1).month, 1);
    assert.equal(m.running, false);
    assert.equal(m.comparison.difference, 0);
    w.send({ type: 'pause' });
    assert.equal(w.messages.at(-1).type, 'paused');
  } finally {
    w.close();
  }
});

/** [AK-VAL-01] test: worker completes five paired repetitions and keeps the first reform trajectory for review
 * Verify worker completes five paired repetitions and keeps the first reform trajectory for review. See the test body for controlled inputs and exact assertions.
 */
test('worker completes five paired repetitions and keeps the first reform trajectory for review', async () => {
  const w = runtime();
  try {
    const complete = new Promise((resolve, reject) => {
      w.onMessage((m) =>
        m.type === 'complete' ? resolve(m) : m.type === 'error' ? reject(Error(m.message)) : null,
      );
    });
    w.send({
      type: 'init',
      config: {
        country: 'PER',
        duration: 6,
        repetitions: 5,
        policies: [{ id: 'oversight', mobilization: 0.6 }],
      },
    });
    w.send({ type: 'run', delay: 0 });
    const result = await complete;
    assert.equal(result.replications.length, 5);
    assert.equal(result.reform.month, 6);
    assert.equal(result.baseline.history.at(-1).month, 6);
    assert.ok(result.reform.agents.length === 1000);
    assert.ok(result.reform.events.length >= result.reform.eventCount);
    assert.ok(result.statistics.minDifference <= result.statistics.maxDifference);
    assert.ok(result.initialKey);
  } finally {
    w.close();
  }
});

/** [AK-VAL-01] test: invalid worker initialization returns a useful error
 * Verify invalid worker initialization returns a useful error. See the test body for controlled inputs and exact assertions.
 */
test('invalid worker initialization returns a useful error', () => {
  const w = runtime();
  try {
    w.send({ type: 'init', config: { country: 'invalid' } });
    assert.equal(w.messages.at(-1).type, 'error');
    assert.match(w.messages.at(-1).message, /country/);
  } finally {
    w.close();
  }
});
