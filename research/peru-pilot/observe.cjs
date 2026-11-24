"use strict";
const sum = (xs) => xs.reduce((a, b) => a + b, 0);
function point(s) {
  const h = s.state.hybrid,
    p = h.last,
    b = s.orgs.filter((o) => o.category === 1),
    m = s.metrics();
  const tax = sum(
    p.flows
      .filter((x) => x.stock === "treasury" && x.direction === "in")
      .map((x) => x.amount),
  );
  return {
    month: s.month,
    economy: p.economy,
    stocks: p.closing,
    flows: p.flows.reduce((a, f) => {
      const k =
        f.mechanism + "|" + f.stock + "|" + f.direction + "|" + f.detail;
      a[k] = (a[k] || 0) + f.amount;
      return a;
    }, {}),
    tax,
    investmentOrdered: sum(
      p.flows
        .filter((x) => x.stock === "investment" && x.direction === "in")
        .map((x) => x.amount),
    ),
    capacityInstalled: sum(
      p.flows
        .filter((x) => x.stock === "capital" && x.direction === "in")
        .map((x) => x.amount),
    ),
    capacityUtilization:
      sum(b.map((o) => o.economy.output)) /
      Math.max(1e-9, sum(b.map((o) => o.economy.openCapacity || 0))),
    privateOutput: sum(b.map((o) => o.economy.output)),
    taxArrears: sum(b.map((o) => o.economy.taxArrears)),
    householdPressure: sum(s.agents.map((a) => a.financialPressure)) / 1000,
    householdCash: sum(s.agents.map((a) => a.balance)),
    businessCash: sum(b.map((o) => o.balance)),
    backgroundCash: s.state.outside.balance,
    foreignCash: h.foreign.balance,
    metrics: m,
    coverage: p.coverage,
    counts: {
      agents: s.agents.length,
      firms: b.length,
      services: s.state.services.length,
      pending: s.state.services.length,
      completedOrders: h.counters.completedOrders,
      abandonedOrders: h.counters.abandonedOrders,
    },
    money: require("../../model").totalMoney(s.state),
  };
}
module.exports = { point };
if (require.main === module) {
  const A = require("../../model"),
    s = new A.Simulation({
      country: "PER",
      duration: 120,
      eventSeed: "peru-unmodified-diagnostic",
      policies: [],
    });
  const rows = [];
  for (let i = 0; i < 120; i++) {
    s.step();
    s.assertInvariants();
    rows.push(point(s));
  }
  require("node:fs").writeFileSync(
    "research/peru-pilot/unmodified-diagnostic.json",
    JSON.stringify(rows, null, 2) + "\n",
  );
  console.log(
    rows
      .filter((p) => [1, 12, 24, 60, 120].includes(p.month))
      .map((p) => ({
        month: p.month,
        index: p.economy.index,
        tax: p.tax,
        VA: p.economy.domesticVA,
        capital: p.stocks.capital,
        pressure: p.householdPressure,
      })),
  );
}
