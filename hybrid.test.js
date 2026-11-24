/* [AKX-VAL-01] Controlled numerical checks; these are not the deferred Peru calibration/pilot. */
"use strict";
const test = require("node:test"),
  assert = require("node:assert/strict");
const A = require("./model"),
  H = A.Hybrid,
  S = require("./system-view");
const base = A.createInitial({ country: "PER" });
const clone = (x) => JSON.parse(JSON.stringify(x));
function world(policies = []) {
  return new A.Simulation(
    { country: "PER", duration: 6, eventSeed: "hybrid-controlled", policies },
    base,
  );
}
function begin(s) {
  s.state.month++;
  H.open(s);
  H.accounts(s);
}
function force(s, names) {
  const normal = s.choose.bind(s);
  s.choose = (a, context, options, key) => {
    const name =
      typeof names === "function" ? names(context, a, options) : names[context];
    return (
      options.find((o) => o.name === name) || normal(a, context, options, key)
    );
  };
}
test("new boundary and escrow accounts conserve the complete financial total", () => {
  const s = world();
  begin(s);
  const before = A.totalMoney(s.state),
    a = s.agents[0];
  A.transfer(s.state.hybrid.foreign, a, 1, "explicit boundary transfer");
  assert.ok(Math.abs(A.totalMoney(s.state) - before) < 1e-7);
  assert.ok(
    s.state.hybrid.journal.every(
      (t) => t.payer && t.recipient && t.purpose && t.amount > 0,
    ),
  );
  assert.equal(
    new Set(s.state.hybrid.journal.map((t) => t.id)).size,
    s.state.hybrid.journal.length,
  );
});
test("ordinary accounts replace anonymous treasury inflow and wage withholding", () => {
  const s = world();
  H.open(s);
  const before = s.state.treasury.balance,
    person = s.roles[2][0],
    cash = person.balance;
  H.accounts(s);
  assert.ok(s.state.treasury.balance <= before);
  assert.equal(person.balance - cash, person.receipts.at(-1));
  assert.ok(!s.state.hybrid.journal.some((t) => /withholding/.test(t.purpose)));
});
test("production needs an order and distinguishes domestic value added from imported inputs", () => {
  const s = world();
  begin(s);
  const o = s.orgs.find((o) => o.category === 1),
    buyer = s.agents[0];
  o.balance = 100;
  buyer.balance = 100;
  s.state.hybrid.orders = [];
  H.production(s);
  assert.equal(o.economy.output, 0);
  H.order(s, buyer, o, 2);
  H.production(s);
  assert.ok(o.economy.output > 0 && o.economy.output <= 2);
  assert.ok(Math.abs(o.economy.valueAdded - 0.8 * o.economy.output) < 1e-8);
});
test("unused productive capacity does not guarantee sales and unaffordable orders stay pending", () => {
  const s = world();
  begin(s);
  const o = s.orgs[8],
    a = s.agents[0];
  s.state.hybrid.orders = [];
  a.balance = 0;
  const x = H.order(s, a, o, 3);
  H.production(s);
  assert.equal(x.delivered, 0);
  assert.equal(x.remaining, 3);
  s.state.month += H.parameters.orderExpiry;
  H.production(s);
  assert.ok(!s.state.hybrid.orders.length);
});
test("investment cannot complete from calendar time alone or install the same project twice", () => {
  const s = world();
  begin(s);
  const o = s.orgs[8],
    h = s.state.hybrid;
  force(s, { "Business investment and retained funds": "retain reserves" });
  const p = {
    id: "controlled",
    org: o.id,
    amount: 6,
    work: 0,
    required: 0.1,
    due: s.month,
    completed: false,
  };
  h.projects = [p];
  o.time = 0;
  H.investment(s);
  assert.equal(p.completed, false);
  o.time = 1;
  for (const id of o.members) s.agents[id].hybrid.time = 1;
  const before =
    o.economy.capacity * (1 - H.parameters.annualDepreciation) ** (1 / 12);
  H.investment(s);
  assert.equal(p.completed, true);
  assert.ok(Math.abs(o.economy.capacity - before - p.amount / 36) < 1e-8);
  const prior = o.economy.capacity;
  H.investment(s);
  assert.ok(o.economy.capacity < prior);
});
test("tax assessment can create arrears without manufacturing collected cash", () => {
  const s = world();
  begin(s);
  force(s, { "Business tax compliance": "declare and pay" });
  const o = s.orgs[8];
  o.balance = 0;
  o.economy.valueAdded = 10;
  const before = o.economy.collected;
  H.taxation(s);
  assert.ok(o.economy.taxArrears >= 2.2 - 1e-8);
  assert.equal(o.economy.collected, before);
});
test("maintenance choices alter persistent capability and future unfinished work", () => {
  const yes = world(),
    no = world();
  begin(yes);
  begin(no);
  for (const s of [yes, no])
    for (const o of s.orgs) {
      o.balance += 10;
      delete o.limits;
    }
  force(yes, { "Maintain organizational capability": "maintain" });
  force(no, { "Maintain organizational capability": "defer upkeep" });
  H.care(yes);
  H.care(no);
  assert.ok(yes.orgs[8].care.capability > no.orgs[8].care.capability);
  assert.ok(yes.orgs[8].care.backlog < no.orgs[8].care.backlog);
});
test("repair is bounded by documented loss and rebuilding requires actual work", () => {
  const s = world();
  begin(s);
  const o = s.orgs[8];
  o.balance += 100;
  o.care.backlog = 0.2;
  o.care.recoverable = 0.001;
  force(s, { "Maintain organizational capability": "repair" });
  const old = o.care.capability;
  H.care(s);
  assert.ok(o.care.capability <= old + 0.001 + 1e-9);
  o.care.irreversible = 0.2;
  o.care.rebuild = 1.99;
  o.time = 0;
  force(s, { "Maintain organizational capability": "rebuild" });
  H.care(s);
  assert.equal(o.care.rebuild, 1.99);
});
test("overlapping memberships cannot create extra personal time", () => {
  const s = world(),
    a = s.agents[0];
  H.open(s);
  a.memberships = s.orgs.map((o) => o.id);
  a.hybrid.time = 0.02;
  a.hybrid.used = 0.98;
  assert.equal(H.personalTime(s, a, 0.015), true);
  assert.equal(H.personalTime(s, a, 0.015), false);
  assert.ok(a.hybrid.used <= 1);
});
test("governance changes cannot approve themselves using their proposed weaker protections", () => {
  const s = world();
  begin(s);
  const o = s.orgs[8],
    leader = s.agents[o.leader],
    candidate = o.members.find((id) => id !== o.leader);
  o.governance.removalProtection = 0.9;
  o.balance += 1;
  force(s, { "Approve governance proposal": "approve" });
  const p = H.propose(s, o, leader, "appointment", candidate, null);
  assert.ok(p);
  o.governance.removalProtection = 0;
  for (let i = 0; i < 3; i++) {
    s.state.month++;
    for (const a of s.agents) a.hybrid.time = 1;
    H.governance(s);
  }
  assert.equal(p.status, "blocked");
  assert.equal(o.leader, leader.id);
});
test("outsiders lack proposal authority and private oversight has an operative blocking route", () => {
  const s = world();
  begin(s);
  const o = s.orgs[8],
    outsider = s.agents.find((a) => !o.governance.initiators.includes(a.id));
  assert.equal(H.propose(s, o, outsider, "safeguard", "oversight", 0), null);
  o.governance.oversight = 1;
  const rand = s.rand.bind(s);
  s.rand = (process, ...keys) =>
    process === "internal-review" ? 0 : rand(process, ...keys);
  force(s, { "Internal oversight review": "block improper action" });
  assert.equal(H.review(s, o, s.agents[o.leader], "controlled"), true);
});
test("attention can fade while policy support remains unchanged", () => {
  const s = world(),
    a = s.agents[0];
  a.hybrid.attention.education = 0.8;
  a.hybrid.beliefs.education = { value: 0.8, performance: 0.3 };
  H.open(s);
  assert.ok(a.hybrid.attention.education < 0.8);
  assert.equal(a.hybrid.beliefs.education.value, 0.8);
});
test("personal credibility is audience-specific and hidden episodes change nobody", () => {
  const s = world(),
    a = s.agents[0],
    b = s.agents[1],
    source = s.state.politics.controller;
  const before = clone(b.hybrid);
  H.observe(s, a, "education", source, 1, 1, "known episode");
  assert.ok(a.hybrid.credibility[source] > 0.5);
  assert.deepEqual(b.hybrid, before);
  s.agents[source].office = false;
  assert.ok(a.hybrid.credibility[source] > 0.5);
});
test("realized coverage retains eligible acts even when no case is opened", () => {
  const s = world();
  const record = {
    id: "never-opened",
    actors: [s.roles[2][0].id],
    month: s.month,
  };
  H.conduct(s, record);
  const rows = H.coverage(s);
  assert.ok(rows.reduce((n, x) => n + x.eligible, 0) >= 1);
  assert.ok(
    s.state.hybrid.eligibility.some(
      (x) => x.record === record.id && !x.completed,
    ),
  );
});
test("system diagrams read recorded flows without changing state and education does not headline casework", () => {
  const s = world([{ id: "education", mobilization: 0.6 }]);
  s.step();
  const before = s.snapshot(),
    p = s.state.hybrid.last;
  const svg = S.diagram(p, "education", "attitude");
  assert.match(svg, /Mean retained attitude/);
  assert.ok(!svg.includes("open files"));
  S.diagram(p, "economy");
  S.diagram(p, "governance");
  assert.deepEqual(s.snapshot(), before);
});
test("passive reporting can be disabled without changing the coupled numerical state", () => {
  const yes = world([{ id: "education", mobilization: 0.6 }]),
    no = world([{ id: "education", mobilization: 0.6 }]);
  no.monitor = null;
  for (let i = 0; i < 2; i++) {
    yes.step();
    no.step();
    assert.deepEqual(yes.snapshot(), no.snapshot());
  }
});
test("transfer and flow logs use a separate ID namespace from behavioral event identities", () => {
  const s = world();
  begin(s);
  const serial = s.state.hybrid.serial;
  A.transfer(s.agents[0], s.agents[1], 0.01, "extra observed transfer");
  assert.equal(s.state.hybrid.serial, serial);
});
test("a coupled paired run preserves exact starting society and finite stock bounds", () => {
  const c = {
      country: "PER",
      duration: 6,
      policies: [{ id: "aca", mobilization: 0.6 }],
    },
    i = A.createInitial(c);
  const r = new A.Simulation(c, i),
    b = new A.Simulation(c, i, 0, true);
  assert.equal(r.state.initialKey, b.state.initialKey);
  r.run();
  b.run();
  assert.ok(r.assertInvariants());
  assert.ok(b.assertInvariants());
  assert.ok(
    r.state.hybrid.history.every((p) => Number.isFinite(p.economy.index)),
  );
});

test("saved monthly histories roundtrip and reject malformed or nonfinite records", () => {
  const s = world();
  s.step();
  const h = clone(H.summary(s));
  assert.equal(H.validSummary(h), true);
  h.last.economy.domesticVA = Infinity;
  assert.equal(H.validSummary(h), false);
  const missing = clone(H.summary(s));
  missing.history[0].classes = null;
  assert.equal(H.validSummary(missing), false);
  const oversized = clone(H.summary(s));
  oversized.journal = Array(1001).fill({});
  assert.equal(H.validSummary(oversized), false);
});
