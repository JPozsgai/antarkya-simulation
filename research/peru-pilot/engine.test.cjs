"use strict";
const test = require("node:test"),
  assert = require("node:assert/strict");
const { engine } = require("./engine.cjs");
test("isolated default engine reproduces published initial society and complete trajectory", async () => {
  const A = require("../../model"),
    B = (await engine()).api,
    c = {
      country: "PER",
      duration: 6,
      eventSeed: "research-replay",
      policies: [{ id: "education", mobilization: 0.7 }],
    };
  const initial = A.createInitial(c),
    other = B.createInitial(c);
  assert.deepEqual(other, initial);
  const a = new A.Simulation(c, initial),
    b = new B.Simulation(c, other);
  for (let i = 0; i < 6; i++) {
    a.step();
    b.step();
  }
  assert.deepEqual(b.state, a.state);
  assert.deepEqual(b.view(), a.view());
});
test("experimental parameters are bounded and isolated between engines", async () => {
  await assert.rejects(engine({ noSuchParameter: 1 }), /Unsupported/);
  await assert.rejects(engine({ backgroundCompliance: 2 }), /Unsupported/);
  const a = await engine({ taxAssessmentRate: 0.16 }),
    b = await engine({ taxAssessmentRate: 0.22 });
  assert.equal(a.api.Hybrid.parameters.taxAssessmentRate, 0.16);
  assert.equal(b.api.Hybrid.parameters.taxAssessmentRate, 0.22);
  assert.equal(require("../../hybrid").parameters.taxAssessmentRate, 0.22);
});
