'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { Simulation, validate } = require('./model.js');

test('same seed and settings reproduce full runs; changing seed changes initialization', () => {
  const a = new Simulation({ steps: 100 }), b = new Simulation({ steps: 100 });
  while (a.step()) b.step();
  assert.deepEqual(a.snapshot(), b.snapshot());
  assert.notEqual(a.agents[0].objective, new Simulation({ seed: 'different' }).agents[0].objective);
});
test('campaign recurs and clears on every election day', () => {
  const s = new Simulation({ steps: 100 });
  for (const [tick, campaign] of [[39, false], [40, true], [49, true], [50, false], [89, false], [90, true], [100, false]]) {
    s.tick = tick; assert.equal(s.campaign, campaign, `round ${tick}`);
  }
});
test('demotion requires BOTH strict thresholds and replacement preserves population', () => {
  const s = new Simulation({ citizens: 5, businesses: 0, officials: 0, politicians: 3, supportThreshold: 30 });
  const ps = s.agents.filter(a => a.type === 'Politician');
  ps[0].score = 11; ps[1].score = 10; ps[2].score = 50;
  s.supportProbability = (c, p) => p.id === ps[2].id ? 1 : 0;
  s.election();
  assert.equal(s.totals.demotions, 1); assert.equal(ps[0].type, 'Citizen'); assert.equal(ps[0].score, 0);
  assert.equal(ps[1].type, 'Politician'); assert.equal(ps[2].type, 'Politician');
  assert.equal(s.agents.length, 8); assert.equal(s.agents.filter(a => a.type === 'Politician').length, 3);
});
test('zero citizens skips elections, and vacant seats can be left unfilled', () => {
  const s = new Simulation({ citizens: 0, businesses: 2, officials: 0, politicians: 1 });
  s.election(); assert.match(s.events[0].message, /skipped/);
  const t = new Simulation({ citizens: 2, businesses: 0, officials: 0, politicians: 1, replacement: false });
  const p = t.agents.find(a => a.type === 'Politician'); p.score = 11; t.supportProbability = () => 0; t.election();
  assert.equal(t.agents.filter(a => a.type === 'Politician').length, 0);
});
test('neutral citizen-business trades leave scores and memories unchanged', () => {
  const s = new Simulation({ citizens: 1, businesses: 1, officials: 0, politicians: 0 });
  s.interact(...s.agents);
  assert.equal(s.totals.encounters, 1); assert.equal(s.totals.corruptExchanges, 0);
  for (const a of s.agents) { assert.equal(a.score, 0); assert.equal(a.decisions, 0); assert.equal(a.memory.size, 0); }
});
test('voluntary corruption requires bilateral willingness', () => {
  const s = new Simulation({ citizens: 0, businesses: 1, officials: 1, politicians: 0 });
  s.decision = a => a.type === 'Business'; s.interact(...s.agents);
  assert.equal(s.totals.corruptExchanges, 0);
  s.decision = () => true; s.punish = () => {}; s.interact(...s.agents);
  assert.equal(s.totals.corruptExchanges, 1); assert.equal(s.agents[0].corruptActions, 1);
});
test('extortion payments record victimization without marking the citizen corrupt', () => {
  const s = new Simulation({ citizens: 1, businesses: 0, officials: 1, politicians: 0, economy: 'low' });
  const [c, o] = s.agents; o.score = 5; o.decisions = 5; c.subjective = 0; c.objectiveCost = 0;
  s.decision = () => true; s.punish = () => {}; s.interact(c, o);
  assert.equal(s.totals.extortionPayments, 1); assert.equal(c.coercedPayments, 1);
  assert.equal(c.score, 0); assert.equal(c.decisions, 0); assert.equal(c.corruptActions, 0); assert.equal(o.score, 6);
});
test('population, grid bounds, counters and score ratios remain valid over 500 rounds', () => {
  const s = new Simulation({ steps: 500, economy: 'low', law: 'weak', decisionThreshold: 0.1 });
  while (s.step()) {
    assert.equal(s.agents.length, 170);
    for (const a of s.agents) { assert.ok(a.x >= 0 && a.x <= s.config.gridSize && a.y >= 0 && a.y <= s.config.gridSize);
      assert.ok(Math.abs(a.score) <= a.decisions); assert.ok(Number.isFinite(s.ratio(a))); }
    assert.ok(s.history.at(-1).fraction >= 0 && s.history.at(-1).fraction <= 1);
  }
  assert.equal(s.history.length, 501); assert.equal(s.step(), false);
  const counts = s.history.at(-1).counts; assert.equal(Object.values(counts).reduce((n, c) => n + c.total, 0), 170);
});
test('invalid numeric values and impossible campaign settings are rejected', () => {
  assert.throws(() => validate({ citizens: NaN })); assert.throws(() => validate({ citizens: 0.5 }));
  assert.throws(() => validate({ campaignDuration: 50 })); assert.throws(() => validate({ citizens: 800, officials: 200 }));
  assert.throws(() => validate({ citizens: 0, businesses: 0, officials: 0, politicians: 0 }));
});
