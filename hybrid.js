/* Antarkya provisional hybrid extension. © 2026 Joseph Pozsgai-Alvarez.
 * AKX codes connect executable processes to docs/HYBRID-EXTENSION.md.
 * All new coefficients are engineering assumptions, not fitted country estimates.
 */
"use strict";
(function (root) {
  let A,
    active = null;
  const clamp = (x, lo = 0, hi = 1) => Math.max(lo, Math.min(hi, x));
  const sum = (xs) => xs.reduce((a, b) => a + b, 0);
  const mean = (xs) => (xs.length ? sum(xs) / xs.length : 0);
  const copy = (x) => JSON.parse(JSON.stringify(x));
  /** [AKX-CAL-01] Published engineering priors, awaiting empirical calibration. */
  const parameters = Object.freeze({
    status:
      "Uncalibrated engineering assumptions; Peru calibration and pilot pending",
    maintenanceShare: 0.02,
    maintenanceCost: 0.1,
    damageRate: 0.008,
    repairEfficiency: 0.25,
    rebuildWork: 2,
    rebuildIncrement: 0.1,
    attentionHalfLife: 6,
    credibilityLearning: 0.04,
    annualDepreciation: 0.08,
    capitalOutputYears: 3,
    taxAssessmentRate: 0.22,
    backgroundCompliance: 0.85,
    intermediateShare: 0.2,
    explicitConsumptionShare: 0.35,
    exportDemand: 60,
    contactTime: 0.015,
    contactIntensity: [0.65, 0.85, 0.2, 0.2],
    orderExpiry: 6,
    reserveMonths: 1.5,
    transactionRetention: 1000,
  });
  function configure(api) {
    A = api;
  }
  /** [AKX-AGY-01] Formal authority is distinct from audience-held influence. */
  function rank(sim, a) {
    return a.id === sim.state.politics.controller
      ? 3
      : sim.orgs.some((o) => o.leader === a.id)
        ? 2
        : 1;
  }
  function option(sim, name, economic, political = 0, extra = {}) {
    return {
      name,
      effects: sim.effects([0, 0, 0.1], economic, [
        political,
        political * 0.5,
        0.1,
      ]),
      effort: 0.03,
      ...extra,
    };
  }
  function labelAccounts(sim) {
    const s = sim.state;
    s.outside.account = "background-domestic";
    s.treasury.account = "public-treasury";
    s.hybrid.foreign.account = "foreign-economy";
    for (const a of sim.agents) a.account = "person-" + a.id;
    for (const o of sim.orgs) o.account = "organization-" + o.id;
    for (const p of s.policies)
      for (const x of p.allocations) x.account = "reform-" + p.id + "-" + x.org;
    for (const c of s.hybrid.coalitions) c.account = "coalition-" + c.id;
    sim.hybridAccounts = new Set([
      s.outside,
      s.treasury,
      s.hybrid.foreign,
      ...s.agents,
      ...s.orgs,
      ...s.policies.flatMap((p) => p.allocations),
      ...s.hybrid.coalitions,
    ]);
  }
  /** [AKX-SCP-01] [AKX-STA-01] [AKX-ECO-05] Create nonoverlapping boundary accounts and real stocks. */
  function initialize(sim) {
    const s = sim.state;
    if (s.hybrid) {
      labelAccounts(sim);
      return;
    }
    const foreign = { balance: s.outside.balance * 0.2 };
    s.outside.balance -= foreign.balance;
    s.hybrid = {
      schema: "antarkya.hybrid.v1",
      status: parameters.status,
      foreign,
      background: {
        capacity: 1500,
        recentReceipts: 1100,
        reserve: 2000,
        output: 0,
      },
      orders: [],
      projects: [],
      proposals: [],
      coalitions: [],
      communications: [],
      eligibility: [],
      coverage: [],
      history: [],
      journal: [],
      serial: 0,
      referenceVA: null,
      last: null,
      counters: {
        completedOrders: 0,
        abandonedOrders: 0,
        encounters: 0,
        retries: 0,
      },
      flows: [],
      flowSerial: 0,
      transactionSerial: 0,
      policyTransfers: {},
      activity: {},
    };
    const scale = clamp(Math.sqrt(s.env.gdp_per_capita_ppp / 20000), 0.6, 1.8);
    s.hybrid.background.capacity *= scale;
    s.hybrid.background.recentReceipts *= scale;
    for (const a of sim.agents)
      a.hybrid = {
        time: 1,
        used: 0,
        attention: {},
        beliefs: {},
        credibility: {},
        observed: [],
        consentedDistributions: false,
        incomeReceived: 0,
        consumptionReceived: 0,
      };
    for (const o of sim.orgs) {
      const staff = o.members.filter(
        (id) => sim.agents[id].role === o.category,
      );
      o.care = {
        referenceStaff: Math.max(1, staff.length),
        backlog: 0,
        recoverable: 0,
        irreversible: 0,
        rebuild: 0,
        capability: mean(Object.values(o.caps)),
        lastMaintained: s.month,
      };
      o.governance = {
        initiators: [o.leader, ...staff.slice(0, 3)],
        approvers: staff.slice(0, 3),
        removalProtection: 0.45,
        oversight: 0.45,
        disclosure: 0.45,
        minimumWait: 2,
      };
      o.economy = {
        capacity: o.category === 1 ? (12 + staff.length * 1.4) * scale : 0,
        output: 0,
        valueAdded: 0,
        receipts: 0,
        taxArrears: 0,
        assessed: 0,
        collected: 0,
        owners: o.category === 1 ? [o.leader] : [],
        retained: 0,
        expectedDemand: 12 * scale,
      };
    }
    labelAccounts(sim);
  }
  /** [AKX-MEA-01] Record conserved payments; bounded detail cannot affect choices. */
  function recordTransfer(from, to, amount, purpose) {
    if (
      !active ||
      !amount ||
      !from.account ||
      !to.account ||
      !active.hybridAccounts.has(from) ||
      !active.hybridAccounts.has(to)
    )
      return;
    const h = active.state.hybrid;
    const entry = {
      id: "TX-" + active.month + "-" + ++h.transactionSerial,
      month: active.month,
      subtime: h.transactionSerial,
      payer: from.account,
      recipient: to.account,
      amount,
      purpose: purpose || h.phase || "ordinary operating transfer",
      unit: "RU",
    };
    h.journal.push(entry);
    if (h.journal.length > parameters.transactionRetention) h.journal.shift();
    h.monthTransfers = (h.monthTransfers || 0) + 1;
    h.policyTransfers ||= {};
    for (const [key, direction] of [
      [from.account, "out"],
      [to.account, "in"],
    ])
      if (key.startsWith("reform-")) {
        const id = key.split("-")[1],
          row = (h.policyTransfers[id] ||= { in: 0, out: 0 });
        row[direction] += amount;
      }
    if (to === active.state.outside)
      h.backgroundReceipts = (h.backgroundReceipts || 0) + amount;
    if (h.trade) {
      if (to === h.foreign) h.trade.imports += amount;
      if (from === h.foreign && /delivered export/.test(purpose || ""))
        h.trade.exports += amount;
      if (/funded imported productive equipment/.test(purpose || ""))
        h.trade.investment += amount;
      if (/tax collection|collection of assessed/.test(purpose || ""))
        h.trade.taxCollected += amount;
    }
  }
  function move(sim, from, to, amount, purpose) {
    active = sim;
    sim.hybridAccounts.add(from);
    sim.hybridAccounts.add(to);
    return A.transfer(from, to, amount, purpose);
  }
  function flow(
    sim,
    mechanism,
    stock,
    direction,
    amount,
    unit,
    detail,
    actor = null,
  ) {
    if (!Number.isFinite(amount) || Math.abs(amount) < 1e-12) return;
    const h = sim.state.hybrid;
    h.flows.push({
      id: "F-" + sim.month + "-" + ++h.flowSerial,
      month: sim.month,
      mechanism,
      stock,
      direction,
      amount,
      unit,
      detail,
      actor,
    });
  }
  /** [AKX-TIM-01] [AKX-STA-01] Open a month without resetting persistent stocks. */
  function open(sim) {
    initialize(sim);
    active = sim;
    const h = sim.state.hybrid;
    h.flows = [];
    h.flowSerial = 0;
    h.transactionSerial = 0;
    h.phase = "opening month";
    h.monthTransfers = 0;
    h.backgroundReceipts = 0;
    h.policyTransfers = {};
    h.trade = { imports: 0, exports: 0, investment: 0, taxCollected: 0 };
    h.opening = stocks(sim);
    for (const a of sim.agents) {
      a.hybrid.time = 1;
      a.hybrid.used = 0;
      a.hybrid.incomeReceived = 0;
      a.hybrid.consumptionReceived = 0;
      for (const id of Object.keys(a.hybrid.attention))
        a.hybrid.attention[id] *= 2 ** (-1 / parameters.attentionHalfLife);
    }
    for (const o of sim.orgs) {
      o.hybridCharged = 0;
      o.contactUsed = 0;
      o.maintenanceUsed = 0;
      o.economy.openCapacity = o.economy.capacity;
      o.economy.output = 0;
      o.economy.valueAdded = 0;
      o.economy.receipts = 0;
    }
    h.background.output = 0;
  }
  function phase(sim, name) {
    active = sim;
    sim.state.hybrid.phase = name;
  }
  function decay(sim) {
    const before = sim.state.hybrid.opening.influence,
      after = stocks(sim).influence;
    for (const id of A.KEYS)
      for (const element of A.Adaptation.elements)
        flow(
          sim,
          "AK-ADP-02",
          id + ":" + element,
          "out",
          Math.max(0, before[id][element] - after[id][element]),
          "mean influence",
          "Individual retained influence wore off",
        );
  }
  function exposure(
    sim,
    recipient,
    policy,
    episode,
    source,
    observed,
    previous,
  ) {
    if (observed.duplicate || !observed.delivered) return;
    for (const [element, value] of Object.entries(
      observed.trace?.components || {},
    ))
      flow(
        sim,
        "AK-ADP-01",
        policy + ":" + element,
        "in",
        Math.max(0, value.level - (previous[element] || 0)) / sim.agents.length,
        "mean influence",
        "Accepted learning or reinforcement",
        recipient.id,
      );
    observe(
      sim,
      recipient,
      policy,
      source,
      observed.changed ? 0.7 : 0.4,
      observed.trace?.credibility || 0.5,
      episode,
    );
  }
  function capabilityBuilt(sim, o, increment) {
    flow(
      sim,
      "AK-REF-03",
      "capability",
      "in",
      increment / A.KEYS.length,
      "capability",
      "Installed reform work built usable capability",
      o.leader,
    );
    o.care.capability = mean(Object.values(o.caps));
  }
  /** [AKX-TIM-01] One person's available time is shared across every affiliation. */
  function personalTime(sim, a, amount, debitOrganization = true) {
    if (!a || a.hybrid.time + 1e-10 < amount) return false;
    a.hybrid.time -= amount;
    a.hybrid.used += amount;
    const o = sim.orgs[a.org];
    if (debitOrganization && a.role === o.category && o.time >= amount) {
      o.time -= amount;
      o.contactUsed += amount;
      o.hybridCharged += amount;
    }
    return true;
  }
  function staff(sim, o) {
    return o.members
      .map((id) => sim.agents[id])
      .filter((a) => a.role === o.category && a.org === o.id);
  }
  function debitStaff(sim, o, amount) {
    let remaining = amount;
    for (const a of staff(sim, o)) {
      const used = Math.min(a.hybrid.time, remaining);
      a.hybrid.time -= used;
      a.hybrid.used += used;
      remaining -= used;
      if (remaining < 1e-10) break;
    }
    if (remaining > 1e-7) throw Error("Individual time would be used twice.");
  }
  function synchronizeTime(sim) {
    for (const o of sim.orgs) {
      const used = Math.max(0, o.capacity - o.time - o.hybridCharged);
      debitStaff(sim, o, used);
      o.hybridCharged += used;
    }
  }
  function work(sim, o, amount, category = "maintenance") {
    const limit = o.limits ? (o.limits[category] ?? 0) : o.time;
    const actual = Math.max(
      0,
      Math.min(
        amount,
        o.time,
        limit,
        sum(staff(sim, o).map((a) => a.hybrid.time)),
      ),
    );
    o.time -= actual;
    if (o.limits) o.limits[category] -= actual;
    o[category + "Used"] = (o[category + "Used"] || 0) + actual;
    debitStaff(sim, o, actual);
    o.hybridCharged += actual;
    return actual;
  }
  /** [AKX-AGY-02] Supporter dependence enters existing utility, norms and feasibility. */
  function options(sim, a, context, original) {
    if (
      !a.hybrid ||
      !/Implement|review|[Aa]ppoint|[Ss]afeguard|[Cc]oalition|[Ii]nvest|[Cc]ase|[Mm]aintain|[Pp]riorit|[Ss]taff/.test(
        context,
      )
    )
      return original;
    const peers = sim.peers(a, "supporters-" + context).slice(0, 2);
    const dependence = mean(
      peers.map(
        ({ peer, weight }) => weight * (a.hybrid.credibility[peer.id] ?? 0.5),
      ),
    );
    return original.map((x) => {
      const effects = [...x.effects];
      const agreement = mean(
        peers.map(
          ({ peer, weight }) =>
            weight * (x.corrupt ? peer.normCorrupt : -peer.normCorrupt),
        ),
      );
      // Valued cooperation is political/self; normative approval is a separate expectation.
      effects[6] += 0.15 * dependence * agreement;
      const issue = context.startsWith("Implement ") ? context.slice(10) : null;
      const belief = issue && a.hybrid.beliefs[issue];
      if (belief && ["implement", "selective"].includes(x.name))
        effects[5] += 0.15 * (belief.value - 0.5);
      return {
        ...x,
        effects,
        norm: clamp(
          (x.norm ?? (x.corrupt ? a.normCorrupt : -a.normCorrupt)) +
            0.08 * agreement,
          -1,
          1,
        ),
        control: clamp(
          (x.control ?? a.control) + 0.06 * dependence * agreement,
        ),
      };
    });
  }
  /** [AKX-ATT-01] [AKX-BEL-01] [AKX-INF-01] Update only an audience that accesses an episode. */
  function observe(
    sim,
    recipient,
    policy,
    source,
    performance,
    reliability = 0.5,
    episode = "",
  ) {
    const p = recipient.hybrid;
    const key = policy + "|" + source + "|" + episode;
    if (p.observed.includes(key)) return;
    p.observed.push(key);
    if (p.observed.length > 64) p.observed.shift();
    const b = (p.beliefs[policy] ||= { value: 0.5, performance: 0.5 });
    const rate =
      0.04 * clamp(reliability) * recipient.psychology.traits.learning;
    const target = clamp(performance);
    b.performance = clamp(b.performance + rate * (target - b.performance));
    // Interpretation can preserve policy support while criticizing delivery.
    const publicShare =
      recipient.motives[2] + recipient.motives[5] + recipient.motives[8];
    b.value = clamp(
      b.value + rate * 0.25 * (publicShare + target * 0.3 - b.value),
    );
    p.attention[policy] = clamp(
      (p.attention[policy] || 0.25) + 0.1 * reliability,
    );
    p.credibility[source] = clamp(
      (p.credibility[source] ?? 0.5) +
        parameters.credibilityLearning *
          reliability *
          (target - (p.credibility[source] ?? 0.5)),
    );
  }
  /** [AKX-MNT-01] Due work uses a fixed reference staff scale. */
  function maintenanceNeed(sim, o) {
    return (
      parameters.maintenanceShare * o.care.referenceStaff +
      o.care.backlog * o.care.referenceStaff * 0.25
    );
  }
  /** [AKX-CAP-01] [AKX-MNT-02] Maintenance preserves; repair restores recorded loss; rebuilding completes work. */
  function care(sim) {
    for (const o of sim.orgs) {
      const c = o.care,
        leader = sim.agents[o.leader],
        due = parameters.maintenanceShare;
      c.backlog += due;
      const choice = sim.choose(
        leader,
        "Maintain organizational capability",
        [
          option(sim, "maintain", [0, 0.3, 0.5]),
          option(sim, "repair", [-0.05, c.backlog, 0.6]),
          option(sim, "rebuild", [-0.1, c.irreversible + 0.2, 0.7]),
          option(sim, "defer upkeep", [0.15, 0.1, -0.2]),
        ],
        "care-" + o.id,
      ).name;
      let wanted =
        choice === "defer upkeep"
          ? 0
          : Math.min(0.05, c.backlog + (choice === "rebuild" ? 0.02 : 0));
      const affordable =
        o.balance / parameters.maintenanceCost / c.referenceStaff;
      const done =
        work(sim, o, Math.min(wanted, affordable) * c.referenceStaff) /
        c.referenceStaff;
      if (done)
        move(
          sim,
          o,
          sim.state.outside,
          done * c.referenceStaff * parameters.maintenanceCost,
          "organizational upkeep work",
        );
      const maintained = Math.min(due, done),
        repair =
          choice === "repair"
            ? Math.min(c.backlog - maintained, Math.max(0, done - maintained))
            : 0;
      c.backlog = Math.max(0, c.backlog - maintained - repair);
      const loss =
        c.capability * parameters.damageRate * (1 - maintained / due);
      const restored = Math.min(
        c.recoverable,
        parameters.repairEfficiency * repair,
      );
      c.recoverable = Math.max(0, c.recoverable + loss - restored);
      const permanent = c.recoverable * Math.min(0.02, c.backlog * 0.01);
      c.recoverable -= permanent;
      c.irreversible += permanent;
      let rebuilt = 0;
      if (choice === "rebuild") {
        c.rebuild += Math.max(0, done - maintained);
        if (c.rebuild >= parameters.rebuildWork && c.irreversible > 0) {
          rebuilt = Math.min(parameters.rebuildIncrement, c.irreversible);
          c.irreversible -= rebuilt;
          c.rebuild -= parameters.rebuildWork;
          sim.emit(
            "resources",
            "Organizational capability rebuilt",
            o.name +
              " completed funded rebuilding work; previous losses were partly recovered.",
            [o.leader],
            "BUILD-" + o.id + "-" + sim.month,
            "Completed work",
          );
        }
      }
      for (const id of Object.keys(o.caps))
        o.caps[id] = clamp(o.caps[id] - loss + restored + rebuilt, 0.001, 0.98);
      c.capability = mean(Object.values(o.caps));
      if (maintained >= due - 1e-10) c.lastMaintained = sim.month;
      flow(
        sim,
        "AKX-MNT-01",
        "capability",
        "out",
        loss,
        "capability",
        "Unmet maintenance",
        o.leader,
      );
      flow(
        sim,
        "AKX-MNT-02",
        "capability",
        "in",
        restored + rebuilt,
        "capability",
        "Completed repair/rebuilding",
        o.leader,
      );
      flow(
        sim,
        "AKX-MNT-01",
        "maintenance",
        "out",
        (maintained + repair) * c.referenceStaff,
        "PM",
        "Performed upkeep",
        o.leader,
      );
    }
    synchronizeTime(sim);
  }
  /** [AKX-ECO-01] Lawful income is paid from identified employer accounts; no legacy withholding. */
  function accounts(sim) {
    const s = sim.state,
      h = s.hybrid;
    phase(sim, "Income and ordinary funding");
    for (const o of sim.orgs) {
      const people = staff(sim, o);
      o.professionalSkill = mean(people.map((a) => a.skill));
      o.capacity = Math.min(
        sum(people.map((a) => a.hybrid.time)),
        people.length * (0.25 + 0.4 * o.skill + 0.35 * o.professionalSkill),
      );
      o.time = o.capacity;
      delete o.limits;
      o.routineUsed = o.reformUsed = o.caseUsed = 0;
      const wages = sum(people.map((a) => a.income));
      if (o.category === 2)
        move(
          sim,
          s.treasury,
          o,
          wages + 2,
          "authorized ordinary public payroll and operations",
        );
      else if (o.category !== 1)
        move(
          sim,
          s.outside,
          o,
          Math.min(wages, h.background.recentReceipts * 0.03),
          "domestic civic or political organizational funding",
        );
      for (const p of o.practice) {
        p.honest *= 0.999;
        p.corrupt *= 0.999;
      }
    }
    for (const a of sim.agents) {
      const employer = a.role === 0 ? s.outside : sim.orgs[a.org];
      const paid = move(
        sim,
        employer,
        a,
        a.income,
        "lawful compensation for primary role",
      );
      a.hybrid.incomeReceived = paid;
      a.receipts.push(paid);
      if (a.receipts.length > 6) a.receipts.shift();
      if (a.role === 2) A.Reporting.activity(sim, "pay", paid);
      a.descriptive = clamp(a.descriptive * 0.999 + 0.0003);
      if (a.role === 0) personalTime(sim, a, 0.55, false); // background employment, not a second organization job
    }
  }
  function account(sim, key) {
    if (key === "background-domestic") return sim.state.outside;
    if (key === "foreign-economy") return sim.state.hybrid.foreign;
    if (key === "public-treasury") return sim.state.treasury;
    if (key.startsWith("person-")) return sim.agents[Number(key.slice(7))];
    if (key.startsWith("organization-")) return sim.orgs[Number(key.slice(13))];
    throw Error("Unknown economic counterparty.");
  }
  /** [AKX-ECO-03] An order is neither a receipt nor completed production. */
  function order(sim, buyer, seller, amount, kind = "consumption") {
    if (!(amount > 1e-9)) return null;
    const h = sim.state.hybrid;
    const x = {
      id: "ORDER-" + ++h.serial,
      buyer: buyer.account,
      seller: seller.account,
      requested: amount,
      remaining: amount,
      kind,
      opened: sim.month,
      delivered: 0,
    };
    h.orders.push(x);
    return x;
  }
  function supplier(sim, buyer, key, preferConnected = false) {
    const firms = sim.orgs.filter((o) => o.category === 1);
    return firms
      .map((o) => ({
        o,
        score:
          -Math.log(sim.rand("hybrid-supplier", key, o.id)) /
          (0.5 +
            (buyer?.support?.find((x) => x.org === o.id)?.affinity || 0) +
            (preferConnected && buyer
              ? sim.relationship(buyer, sim.agents[o.leader]).access * 2
              : 0)),
      }))
      .sort((a, b) => a.score - b.score)[0].o;
  }
  /** [AKX-ECO-03] Private and public demand require money; connections distribute opportunities. */
  function demand(sim) {
    const s = sim.state,
      h = s.hybrid;
    for (const a of sim.agents) {
      const amount = Math.min(a.balance, a.cost);
      order(
        sim,
        a,
        supplier(sim, a, "household-" + a.id),
        amount * parameters.explicitConsumptionShare,
      );
      order(
        sim,
        a,
        s.outside,
        amount * (1 - parameters.explicitConsumptionShare),
      );
    }
    const bg = Math.min(
      h.background.recentReceipts * 0.25,
      Math.max(0, s.outside.balance - h.background.reserve) * 0.02,
    );
    for (const o of sim.orgs.filter((o) => o.category === 1)) {
      order(sim, s.outside, o, bg / 24, "background final demand");
      order(sim, h.foreign, o, parameters.exportDemand / 24, "export");
    }
    const leader = sim.agents[s.politics.controller];
    const choice = sim.choose(
      leader,
      "Public procurement allocation",
      [
        option(sim, "open procurement", [0, 0.1, 0.6]),
        option(sim, "connected procurement", [0.25, 0.5, -0.2], 0.2, {
          corrupt: true,
        }),
        option(sim, "defer procurement", [0.1, 0, -0.1]),
      ],
      "hybrid-procurement",
    );
    if (
      choice.name !== "defer procurement" &&
      personalTime(sim, leader, 0.01)
    ) {
      const o = supplier(
        sim,
        leader,
        "public",
        choice.name === "connected procurement",
      );
      const x = order(
        sim,
        s.treasury,
        o,
        Math.min(s.treasury.balance * 0.02, 30),
        "public procurement",
      );
      if (x) {
        x.preference = choice.name;
        x.actor = leader.id;
      }
    }
  }
  /** [AKX-ECO-03] Delivery consumes actual work and inputs. Domestic VA excludes imported production. */
  function production(sim) {
    const s = sim.state,
      h = s.hybrid;
    for (const x of h.orders) {
      if (x.remaining <= 1e-9) continue;
      if (sim.month - x.opened >= parameters.orderExpiry) {
        h.counters.abandonedOrders++;
        x.remaining = 0;
        continue;
      }
      const buyer = account(sim, x.buyer),
        seller = account(sim, x.seller);
      const business = seller.economy;
      const available = business
        ? Math.max(0, business.capacity - business.output)
        : Math.max(0, h.background.capacity - h.background.output);
      const timeLimit = business ? Math.max(0, seller.time) * 15 : available;
      const quantity = Math.min(
        x.remaining,
        buyer.balance,
        available,
        timeLimit,
      );
      if (quantity <= 1e-9) continue;
      const operating = business
        ? clamp(0.4 + 0.4 * seller.skill + 0.2 * seller.care.capability)
        : 1;
      const deliver = quantity * operating;
      if (business) {
        const inputCost = deliver * parameters.intermediateShare;
        if (seller.balance + 1e-9 < inputCost) continue;
        move(
          sim,
          seller,
          h.foreign,
          inputCost,
          "imported intermediate inputs consumed in production",
        );
        work(sim, seller, deliver / 15, "production");
        business.output += deliver;
        business.valueAdded += deliver - inputCost;
        business.receipts += deliver;
      } else h.background.output += deliver;
      const paid = move(
        sim,
        buyer,
        seller,
        deliver,
        "delivered " + x.kind + " / " + x.id,
      );
      x.delivered += paid;
      x.remaining -= paid;
      if (buyer.hybrid && x.kind === "consumption")
        buyer.hybrid.consumptionReceived += paid;
      if (
        x.kind === "public procurement" &&
        x.preference === "connected procurement" &&
        !x.recorded
      ) {
        const actor = sim.agents[x.actor],
          counterpart = sim.agents[seller.leader];
        sim.completeCorruption(
          [actor, counterpart],
          "procurement preference",
          0,
          seller.id,
          false,
          x.id,
        );
        sim.link(actor, counterpart, true, true);
        x.recorded = true;
      }
      if (x.remaining <= 1e-9) h.counters.completedOrders++;
    }
    h.orders = h.orders.filter((x) => x.remaining > 1e-9);
  }
  /** [AKX-ECO-01] [AKX-ECO-02] Investment builds capacity only after paid delivery and performed work. */
  function investment(sim) {
    const s = sim.state,
      h = s.hybrid;
    for (const o of sim.orgs.filter((o) => o.category === 1)) {
      const e = o.economy,
        leader = sim.agents[o.leader];
      const depreciation =
        e.capacity * (1 - (1 - parameters.annualDepreciation) ** (1 / 12));
      e.capacity = Math.max(0, e.capacity - depreciation);
      flow(
        sim,
        "AKX-ECO-02",
        "capital",
        "out",
        depreciation,
        "output RU/month",
        "Consumption of productive capital",
        o.leader,
      );
      const related = sim.parties.some(
        (p) => sim.relationship(leader, sim.agents[p.leader]).access > 0.12,
      );
      const reserve =
        sum(staff(sim, o).map((a) => a.income)) * parameters.reserveMonths;
      const cash = Math.max(0, o.balance - reserve),
        expected = e.expectedDemand;
      const choice = sim.choose(
        leader,
        "Business investment and retained funds",
        [
          option(
            sim,
            "invest",
            [0.15 + (expected / Math.max(1, e.capacity)) * 0.2, 0.4, 0.3],
            related ? 0.25 : 0,
          ),
          option(sim, "retain reserves", [0.2, 0.3, 0.05]),
          option(sim, "eligible distribution", [0.4, 0.05, 0]),
          option(sim, "divert entrusted funds", [0.65, -0.3, -0.4], 0.2, {
            corrupt: true,
          }),
        ],
        "investment-" + o.id,
      ).name;
      if (
        choice === "invest" &&
        cash > 0.1 &&
        personalTime(sim, leader, 0.01)
      ) {
        const paid = move(
          sim,
          o,
          h.foreign,
          Math.min(cash * 0.1, 10),
          "funded imported productive equipment",
        );
        h.projects.push({
          id: "INV-" + ++h.serial,
          org: o.id,
          amount: paid,
          work: 0,
          required: 0.05 + paid * 0.02,
          due:
            sim.month +
            1 +
            Math.floor(sim.rand("investment-delivery", o.id) * 3),
          completed: false,
        });
        flow(
          sim,
          "AKX-ECO-01",
          "investment",
          "in",
          paid,
          "RU",
          "Funded equipment order",
          o.leader,
        );
      } else if (
        choice === "divert entrusted funds" &&
        cash > 0.1 &&
        !review(sim, o, leader, "private-funds-" + sim.month)
      ) {
        const taken = move(
          sim,
          o,
          leader,
          cash * 0.08,
          "unauthorized diversion of entrusted organizational funds",
        );
        if (taken > 0)
          sim.completeCorruption(
            [leader],
            "private organizational diversion",
            taken,
            o.id,
            false,
            "private-diversion-" + o.id,
          );
      } else if (choice === "eligible distribution" && cash > 0) {
        // Ownership is explicit; ordinary membership never creates dividend rights.
        const owners = e.owners.filter((id) => sim.agents[id]);
        for (const id of owners)
          move(
            sim,
            o,
            sim.agents[id],
            (cash * 0.05) / Math.max(1, owners.length),
            "eligible owner distribution",
          );
      }
      e.retained = o.balance;
      e.expectedDemand += 0.15 * (e.output - e.expectedDemand);
    }
    for (const p of h.projects)
      if (!p.completed && sim.month >= p.due) {
        const o = sim.orgs[p.org];
        p.work += work(
          sim,
          o,
          Math.min(0.1, p.required - p.work),
          "production",
        );
        if (p.work + 1e-10 >= p.required) {
          const gain = p.amount / (12 * parameters.capitalOutputYears);
          o.economy.capacity += gain;
          p.completed = true;
          p.completedMonth = sim.month;
          flow(
            sim,
            "AKX-ECO-02",
            "capital",
            "in",
            gain,
            "output RU/month",
            "Equipment delivered and installation completed",
            o.leader,
          );
        }
      }
    h.projects = h.projects.filter(
      (p) => !p.completed || p.completedMonth >= sim.month - 12,
    );
  }
  /** [AKX-ECO-04] Assessment, assessed arrears, compliance and cash collection are different. */
  function taxation(sim) {
    const s = sim.state,
      h = s.hybrid;
    for (const o of sim.orgs.filter((o) => o.category === 1)) {
      const e = o.economy,
        leader = sim.agents[o.leader],
        potential = Math.max(0, e.valueAdded) * parameters.taxAssessmentRate;
      const decision = sim.choose(
        leader,
        "Business tax compliance",
        [
          option(sim, "declare and pay", [-potential, 0.1, 0.5]),
          option(
            sim,
            "conceal taxable activity",
            [potential * 0.3, 0.3, -0.4],
            0.1,
            { corrupt: true },
          ),
          option(
            sim,
            "request favorable treatment",
            [potential * 0.15, 0.2, -0.2],
            0.2,
            { corrupt: true },
          ),
        ],
        "tax-" + o.id,
      ).name;
      let liability = potential;
      const collectorOrg =
        sim.publicOrgs.find((q) => q.fn === "service") || sim.publicOrgs[0];
      const collector = sim.agents[collectorOrg.leader];
      if (decision === "conceal taxable activity") {
        const detected =
          sim.rand("tax-verification", o.id) <
          collectorOrg.recordQuality *
            sim.operational("oversight", collectorOrg);
        liability *= detected ? 1 : 0.6;
        if (potential > 0)
          sim.completeCorruption(
            [leader],
            "tax concealment",
            0,
            o.id,
            false,
            "hybrid-tax-" + o.id,
          );
      } else if (
        decision === "request favorable treatment" &&
        sim.related(leader, collector) &&
        personalTime(sim, collector, 0.01)
      ) {
        const response = sim.choose(
          collector,
          "Review requested tax concession",
          [
            option(sim, "apply assessment rule", [0, 0.1, 0.4]),
            option(sim, "grant improper concession", [0.3, 0.25, -0.5], 0.2, {
              corrupt: true,
            }),
          ],
          "tax-review-" + o.id,
        );
        if (response.corrupt) {
          liability *= 0.7;
          sim.completeCorruption(
            [leader, collector],
            "tax concession",
            0,
            o.id,
            false,
            "hybrid-concession-" + o.id,
          );
        }
      }
      e.assessed += liability;
      e.taxArrears += liability;
      const received = move(
        sim,
        o,
        s.treasury,
        Math.min(e.taxArrears, o.balance * 0.25),
        "collection of assessed business value-added tax",
      );
      e.taxArrears = Math.max(0, e.taxArrears - received);
      e.collected += received;
      flow(
        sim,
        "AKX-ECO-04",
        "treasury",
        "in",
        received,
        "RU",
        "Actual business tax receipts",
        o.leader,
      );
    }
    const bgTax =
      h.background.output *
      parameters.taxAssessmentRate *
      parameters.backgroundCompliance;
    const received = move(
      sim,
      s.outside,
      s.treasury,
      bgTax,
      "tax collection on background private domestic value added",
    );
    flow(
      sim,
      "AKX-ECO-04",
      "treasury",
      "in",
      received,
      "RU",
      "Background domestic tax receipts",
    );
  }
  /** [AKX-GOV-03] Actual internal oversight can block a leader; it uses independent decisions and work. */
  function review(sim, o, actor, key) {
    const reviewers = o.governance.approvers.filter((id) => id !== actor.id);
    const reviewer = sim.agents[reviewers[0]];
    if (
      !reviewer ||
      sim.rand("internal-review", key, o.id) >= o.governance.oversight ||
      !personalTime(sim, reviewer, 0.015)
    )
      return false;
    const decision = sim.choose(
      reviewer,
      "Internal oversight review",
      [
        option(sim, "block improper action", [-0.1, 0.2, 0.6]),
        option(sim, "permit action", [0.2, 0.1, -0.3], 0.1, { corrupt: true }),
      ],
      "internal-" + key,
    );
    if (decision.name === "block improper action") {
      sim.emit(
        "institutions",
        "Internal oversight blocks a proposal",
        o.name + " used an oversight right and performed review work.",
        [actor.id, reviewer.id],
        "INT-" + sim.month + "-" + key,
        "Blocked",
      );
      observe(sim, actor, "governance", reviewer.id, 1, 0.8, key);
      return true;
    }
    return false;
  }
  /** [AKX-GOV-01] [AKX-GOV-02] [AKX-GOV-03] Proposals retain original approval/protection rules. */
  function propose(sim, o, proposer, kind, target, value) {
    const authorized =
      o.governance.initiators.includes(proposer.id) ||
      (o.category === 2 && proposer.id === sim.state.politics.controller);
    if (
      !authorized ||
      sim.state.hybrid.proposals.some(
        (p) => p.org === o.id && p.status === "pending",
      )
    )
      return null;
    if (!personalTime(sim, proposer, 0.02) || o.balance < 0.05) return null;
    move(sim, o, sim.state.outside, 0.05, "governance proposal preparation");
    const p = {
      id: "GOVP-" + ++sim.state.hybrid.serial,
      org: o.id,
      proposer: proposer.id,
      kind,
      target,
      value,
      originalLeader: o.leader,
      originalProtection: o.governance.removalProtection,
      approvers: [...o.governance.approvers],
      votes: {},
      opened: sim.month,
      due: sim.month + o.governance.minimumWait,
      work: 0,
      status: "pending",
    };
    sim.state.hybrid.proposals.push(p);
    sim.emit(
      "institutions",
      "A governance change is proposed",
      o.name +
        ": " +
        kind +
        ". Existing approvals and protections still apply.",
      [proposer.id],
      p.id,
      "Pending procedure",
    );
    return p;
  }
  function governance(sim) {
    const h = sim.state.hybrid;
    if (sim.month % 6 === 0)
      for (const o of sim.orgs) {
        const proposer =
          sim.agents[
            o.category === 2 ? sim.state.politics.controller : o.leader
          ];
        const choice = sim.choose(
          proposer,
          "Institutional safeguards and appointments",
          [
            option(sim, "retain rules", [0.1, 0.1, 0.1]),
            option(sim, "strengthen oversight", [-0.1, 0.2, 0.6]),
            option(sim, "weaken oversight", [0.25, 0.3, -0.4], 0.2),
            option(sim, "leadership protection", [-0.1, 0.2, 0.4]),
            option(sim, "disclosure rights", [-0.1, 0.2, 0.5]),
            option(sim, "appoint leader", [0.1, 0.3, 0.3], 0.2),
          ],
          "governance-" + o.id,
        ).name;
        if (choice === "retain rules") continue;
        if (choice === "appoint leader") {
          const candidates = staff(sim, o)
            .filter((a) => a.id !== o.leader)
            .slice(0, 8);
          if (!candidates.length) continue;
          const selected = sim.choose(
            proposer,
            "Appointment candidate selection",
            candidates.map((a) =>
              option(
                sim,
                String(a.id),
                [sim.relationship(proposer, a).access * 0.25, 0.2, a.skill],
                a.skill * 0.2,
              ),
            ),
            "appoint-" + o.id,
          );
          propose(sim, o, proposer, "appointment", Number(selected.name), null);
        } else {
          const target =
            choice === "leadership protection"
              ? "removalProtection"
              : choice === "disclosure rights"
                ? "disclosure"
                : "oversight";
          propose(
            sim,
            o,
            proposer,
            "safeguard",
            target,
            clamp(
              o.governance[target] +
                (choice === "weaken oversight" ? -0.15 : 0.15),
            ),
          );
        }
      }
    for (const p of h.proposals.filter((p) => p.status === "pending")) {
      const o = sim.orgs[p.org],
        worker = sim.agents[p.proposer];
      if (personalTime(sim, worker, 0.015)) p.work += 0.015;
      for (const id of p.approvers)
        if (
          p.votes[id] === undefined &&
          personalTime(sim, sim.agents[id], 0.01)
        ) {
          const a = sim.agents[id],
            affinity = sim.relationship(a, worker).access;
          const d = sim.choose(
            a,
            "Approve governance proposal",
            [
              option(sim, "approve", [
                0.1,
                affinity,
                p.kind === "appointment" ? sim.agents[p.target].skill : p.value,
              ]),
              option(sim, "oppose", [0.2, 0.15, 0.2]),
            ],
            p.id + "-" + id,
          );
          p.votes[id] = d.name === "approve";
        }
      if (
        sim.month < p.due ||
        p.work < 0.03 ||
        Object.keys(p.votes).length < p.approvers.length
      )
        continue;
      const approved =
        sum(Object.values(p.votes).map(Number)) > p.approvers.length / 2;
      const protectedRemoval =
        p.kind === "appointment" &&
        Math.max(p.originalProtection, o.governance.removalProtection) > 0.7 &&
        !(sim.agents[p.originalLeader].eligibleUntil > sim.month);
      if (!approved || protectedRemoval || o.leader !== p.originalLeader)
        p.status = "blocked";
      else {
        p.status = "enacted";
        if (p.kind === "appointment") {
          const old = o.leader;
          o.leader = p.target;
          o.governance.initiators = [
            ...new Set([o.leader, ...o.governance.approvers]),
          ];
          observe(sim, sim.agents[old], "governance", p.proposer, 0.3, 1, p.id);
        } else o.governance[p.target] = p.value;
      }
      p.closed = sim.month;
      sim.emit(
        "institutions",
        p.status === "enacted"
          ? "Governance change takes effect"
          : "Governance change is blocked",
        o.name +
          ": " +
          p.kind +
          "; approval, work and protection requirements were applied.",
        [p.proposer, o.leader],
        p.id,
        p.status,
      );
    }
    h.proposals = h.proposals.filter(
      (p) => p.status === "pending" || p.closed >= sim.month - 24,
    );
  }
  /** [AKX-COL-01] Coalition escrow is real private money, never reform-pool funding. */
  function coalitions(sim) {
    const h = sim.state.hybrid,
      issues = sim.state.policies.map((p) => p.id);
    if (!issues.length) issues.push("integrity");
    if (sim.month % 3 === 0)
      for (const o of sim.orgs.filter((o) => o.category !== 2).slice(0, 8)) {
        const leader = sim.agents[o.leader],
          issue =
            issues[
              Math.floor(sim.rand("coalition-issue", o.id) * issues.length)
            ];
        if (
          h.coalitions.some(
            (c) =>
              c.leader === leader.id &&
              c.issue === issue &&
              c.status === "active",
          )
        )
          continue;
        const beliefs = leader.hybrid.beliefs[issue] || {
          value: 0.5,
          performance: 0.5,
        };
        const attention = leader.hybrid.attention[issue] ?? 0.25;
        const d = sim.choose(
          leader,
          "Build a reform coalition",
          [
            option(
              sim,
              "organize support",
              [-0.1, beliefs.value, 0.4],
              attention,
            ),
            option(
              sim,
              "organize opposition",
              [0.2, 1 - beliefs.value, -0.1],
              attention,
            ),
            option(sim, "do not mobilize", [0.2, 0.1, 0]),
          ],
          "coalition-" + o.id + "-" + issue,
        );
        if (
          d.name === "do not mobilize" ||
          !personalTime(sim, leader, 0.02) ||
          leader.balance < 0.05
        )
          continue;
        const c = {
          id: "COAL-" + ++h.serial,
          leader: leader.id,
          issue,
          stance: d.name,
          balance: 0,
          members: [],
          status: "active",
          opened: sim.month,
          delivered: 0,
          account: "coalition-COAL-" + h.serial,
        };
        h.coalitions.push(c);
        for (const a of [
          leader,
          ...sim.peers(leader, c.id).map((x) => x.peer),
        ]) {
          const join =
            a.id === leader.id ||
            sim.choose(
              a,
              "Coalition commitment",
              [
                option(sim, "commit", [
                  -0.05,
                  a.hybrid.beliefs[issue]?.value ?? 0.5,
                  0.4,
                ]),
                option(sim, "decline", [0.1, 0, 0]),
              ],
              c.id + "-" + a.id,
            ).name === "commit";
          if (join && a.balance >= 0.05 && personalTime(sim, a, 0.01)) {
            const paid = move(
              sim,
              a,
              c,
              0.05,
              "reserved private coalition contribution",
            );
            c.members.push({ id: a.id, reserve: paid, delivered: 0 });
          }
        }
        sim.emit(
          "politics",
          "A coalition begins mobilizing",
          "Actors committed their own money and time around " +
            issue +
            "; implementation funding remains separate.",
          c.members.map((m) => m.id),
          c.id,
          c.stance,
        );
      }
    for (const c of h.coalitions.filter((c) => c.status === "active")) {
      for (const m of c.members) {
        const a = sim.agents[m.id];
        const remain = sim.choose(
          a,
          "Sustain coalition engagement",
          [
            option(
              sim,
              "contribute work",
              [-0.02, a.hybrid.beliefs[c.issue]?.value ?? 0.5, 0.3],
              a.hybrid.attention[c.issue] ?? 0.2,
            ),
            option(sim, "withdraw backing", [0.15, 0, 0]),
          ],
          c.id + "-stay-" + a.id,
        ).name;
        if (remain === "withdraw backing") {
          move(
            sim,
            c,
            a,
            Math.min(m.reserve, c.balance),
            "return of unused coalition commitment",
          );
          m.reserve = 0;
          continue;
        }
        if (m.reserve > 0.005 && personalTime(sim, a, 0.015)) {
          const paid = move(
            sim,
            c,
            sim.state.outside,
            0.005,
            "performed advocacy and coalition communication",
          );
          m.reserve -= paid;
          m.delivered++;
          c.delivered++;
          observe(sim, a, c.issue, c.leader, 0.6, 0.6, c.id + "-" + sim.month);
          for (const { peer, weight } of sim.peers(a, c.id + "-notice"))
            observe(
              sim,
              peer,
              c.issue,
              c.leader,
              c.stance === "organize support" ? 0.65 : 0.35,
              weight,
              c.id + "-" + sim.month,
            );
        }
      }
      if (
        c.members.every((m) => m.reserve < 0.005) ||
        sim.month - c.opened > 24
      ) {
        for (const m of c.members)
          move(
            sim,
            c,
            sim.agents[m.id],
            Math.min(m.reserve, c.balance),
            "unused coalition funds returned",
          );
        c.status = "closed";
      }
    }
    // Closed zero-balance coalitions no longer need a cash account; keep bounded explanatory history.
    h.coalitions = h.coalitions.filter(
      (c) =>
        c.status === "active" ||
        c.balance > 1e-10 ||
        c.opened >= sim.month - 12,
    );
  }
  /** [AKX-STR-01] Responses can differ across demands; claims do not create capability. */
  function responses(sim) {
    const h = sim.state.hybrid;
    for (const c of h.coalitions.filter(
      (c) => c.status === "active" && c.delivered > 0,
    )) {
      const org =
          sim.publicOrgs[
            Math.floor(
              sim.rand("demand-recipient", c.id) * sim.publicOrgs.length,
            )
          ],
        a = sim.agents[org.leader];
      if (!personalTime(sim, a, 0.005)) continue;
      const d = sim.choose(
        a,
        "Response to articulated demand",
        [
          option(sim, "substantive response", [-0.1, 0.3, 0.6]),
          option(sim, "symbolic commitment", [0.15, 0.2, 0]),
          option(sim, "reframe demand", [0.2, 0.25, -0.1]),
          option(sim, "seek obstruction", [0.2, 0.3, -0.3], 0.2),
        ],
        c.id + "-response",
      );
      if (d.name === "substantive response") {
        observe(
          sim,
          a,
          c.issue,
          c.leader,
          0.6,
          0.8,
          c.id + "-demand-" + sim.month,
        );
        org.demandPriority = { issue: c.issue, until: sim.month + 3 };
      } else if (d.name === "seek obstruction")
        propose(
          sim,
          org,
          a,
          "safeguard",
          "oversight",
          clamp(org.governance.oversight - 0.15),
        );
      else if (org.balance >= 0.01) {
        move(
          sim,
          org,
          sim.state.outside,
          0.01,
          "public communication responding to a demand",
        );
        for (const m of c.members)
          observe(
            sim,
            sim.agents[m.id],
            c.issue,
            a.id,
            d.name === "symbolic commitment" ? 0.6 : 0.35,
            0.3,
            "claim-" + c.id + "-" + sim.month,
          );
      }
      if (sim.month % 6 === 0)
        sim.emit(
          "politics",
          "An articulated demand receives a response",
          org.name +
            ": " +
            d.name +
            ". Claims and completed implementation remain separate.",
          [a.id, c.leader],
          c.id + "-RESPONSE-" + sim.month,
          d.name,
        );
    }
  }
  /** [AKX-ENC-01] Demand has identity; retries do not manufacture new queued requests. */
  function encounters(sim) {
    const agenda = [];
    for (const a of sim.agents) {
      const rate = parameters.contactIntensity[a.role];
      let product = 1,
        n = -1;
      do {
        n++;
        product *= sim.rand("repeat-demand", a.id, n);
      } while (product > Math.exp(-rate));
      for (let i = 0; i < n; i++)
        agenda.push({ a, i, at: sim.rand("internal-time", a.id, i) });
      if (
        a.role === 0 &&
        sim.state.politics.mode !== "appointment" &&
        sim.state.politics.nextReview - sim.month <= 6 &&
        sim.rand("hybrid-campaign-contact", a.id) < 0.04
      )
        agenda.push({
          a,
          i: "campaign",
          at: sim.rand("hybrid-campaign-time", a.id),
          kind: "vote buying",
        });
    }
    agenda.sort((x, y) => x.at - y.at || x.a.id - y.a.id || x.i - y.i);
    for (const event of agenda) {
      const a = event.a,
        h = sim.state.hybrid;
      const pending = sim.state.services.find((x) => x.agent === a.id);
      if (pending && !event.kind) {
        pending.attempts = (pending.attempts || 1) + 1;
        h.counters.retries++;
        if (
          sim.month - pending.arrival >= 6 &&
          sim.choose(
            a,
            "Retry or abandon pending request",
            [
              option(sim, "continue waiting", [-0.05, 0.1, 0.3]),
              option(sim, "abandon request", [0.1, 0, -0.1]),
            ],
            pending.id + "-retry-" + event.i,
          ).name === "abandon request"
        ) {
          sim.state.services.splice(sim.state.services.indexOf(pending), 1);
          h.counters.abandonedRequests =
            (h.counters.abandonedRequests || 0) + 1;
        }
        continue;
      }
      let b, kind;
      if (event.kind) {
        b = sim.nearest(a, sim.roles[3], "repeat-campaign");
        kind = event.kind;
      } else if (
        a.role === 1 &&
        sim.rand("contact-kind", a.id, event.i) < 0.12
      ) {
        b = sim.nearest(a, sim.roles[3], "repeat-political-" + event.i);
        kind = "contract";
      } else if (a.role === 3 && a.office) {
        b = sim.nearest(a, sim.roles[2], "repeat-pressure-" + event.i);
        kind = "political pressure";
      } else {
        b = sim.nearest(
          a,
          sim.roles[2].filter((b) => sim.orgs[b.org].fn === "service"),
          "repeat-service-" + event.i,
        );
        kind = a.role === 1 ? "permit" : "service";
      }
      if (
        !b ||
        a.hybrid.time < parameters.contactTime ||
        b.hybrid.time < parameters.contactTime
      )
        continue;
      if (
        !personalTime(sim, a, parameters.contactTime) ||
        !personalTime(sim, b, parameters.contactTime)
      )
        continue;
      h.counters.encounters++;
      sim.encounter(a, b, kind, "repeat-" + a.id + "-" + event.i);
    }
  }
  /** [AKX-COV-01] Eligibility is recorded before later case selection/obstruction. */
  function conduct(sim, record) {
    const h = sim.state.hybrid,
      controller = sim.agents[sim.state.politics.controller];
    for (const id of record.actors)
      h.eligibility.push({
        record: record.id,
        actor: id,
        month: sim.month,
        rank: rank(sim, sim.agents[id]),
        insider: sim.relationship(controller, sim.agents[id]).access > 0.12,
        completed: false,
      });
  }
  function coverage(sim) {
    const h = sim.state.hybrid,
      progressed = new Set(
        sim.state.cases
          .filter((c) => c.stage >= 1 || c.decision !== null)
          .map((c) => c.recordId),
      );
    for (const x of h.eligibility)
      if (progressed.has(x.record)) x.completed = true;
    h.eligibility = h.eligibility.filter((x) => x.month > sim.month - 12);
    return [1, 2, 3].flatMap((level) =>
      [false, true].map((insider) => {
        const rows = h.eligibility.filter(
          (x) => x.rank === level && x.insider === insider,
        );
        return {
          rank: level,
          insider,
          eligible: rows.length,
          completed: rows.filter((x) => x.completed).length,
          rate: rows.length
            ? rows.filter((x) => x.completed).length / rows.length
            : null,
        };
      }),
    );
  }
  function stocks(sim) {
    const s = sim.state;
    return {
      treasury: s.treasury.balance,
      capital: sum(sim.orgs.map((o) => o.economy?.capacity || 0)),
      capability: mean(sim.orgs.map((o) => o.care?.capability || 0)),
      maintenance: sum(
        sim.orgs.map(
          (o) => (o.care?.backlog || 0) * (o.care?.referenceStaff || 1),
        ),
      ),
      rebuilding: sum(
        sim.orgs.map(
          (o) => (o.care?.rebuild || 0) * (o.care?.referenceStaff || 1),
        ),
      ),
      investment: sum(
        (s.hybrid?.projects || [])
          .filter((p) => !p.completed)
          .map((p) => p.amount),
      ),
      openCases: s.cases.filter((c) => c.status !== "closed").length,
      reformFunds: Object.fromEntries(
        s.policies.map((p) => [p.id, sum(p.allocations.map((a) => a.balance))]),
      ),
      influence: Object.fromEntries(
        A.KEYS.map((id) => [
          id,
          Object.fromEntries(
            A.Adaptation.elements.map((element) => [
              element,
              mean(
                sim.agents.map(
                  (a) =>
                    a.psychology.memories[id]?.components[element]?.level || 0,
                ),
              ),
            ]),
          ),
        ]),
      ),
      attention: mean(
        sim.agents.map((a) => mean(Object.values(a.hybrid?.attention || {}))),
      ),
    };
  }
  /** [AKX-ECO-05] [AKX-MEA-01] Close with realized domestic VA; summaries never act on agents. */
  function close(sim) {
    const s = sim.state,
      h = s.hybrid;
    phase(sim, "Demand, delivered production and investment");
    demand(sim);
    production(sim);
    investment(sim);
    taxation(sim);
    for (const a of sim.agents)
      a.financialPressure = clamp(
        0.9 * a.financialPressure +
          0.1 * (1 - a.hybrid.consumptionReceived / Math.max(0.001, a.cost)),
      );
    h.background.recentReceipts +=
      0.2 * ((h.backgroundReceipts || 0) - h.background.recentReceipts);
    const businessVA = sum(sim.orgs.map((o) => o.economy.valueAdded));
    const publicVA = sum(
      sim.publicOrgs.map(
        (o) =>
          sum(staff(sim, o).map((a) => a.hybrid.incomeReceived)) *
          clamp((o.capacity - o.time) / Math.max(0.01, o.capacity)),
      ),
    );
    const domesticVA = businessVA + h.background.output + publicVA;
    const closing = stocks(sim),
      transfers = h.journal.filter((t) => t.month === sim.month);
    const point = {
      month: sim.month,
      opening: h.opening,
      closing,
      flows: h.flows,
      economy: {
        businessVA,
        backgroundVA: h.background.output,
        publicVA,
        domesticVA,
        index: h.referenceVA ? (100 * domesticVA) / h.referenceVA : null,
        ...h.trade,
      },
      classes: [0, 1, 2, 3].map((role) => {
        const people = sim.agents.filter((a) => a.role === role);
        return {
          role,
          attention: mean(
            people.map((a) => mean(Object.values(a.hybrid.attention))),
          ),
          knowledge: mean(
            people.map((a) => A.Adaptation.knowledge(a, "integrity")),
          ),
          timeUsed: mean(people.map((a) => a.hybrid.used)),
        };
      }),
      coverage: coverage(sim),
      proposals: h.proposals.filter((p) => p.status === "pending").length,
      activeCoalitions: h.coalitions.filter((c) => c.status === "active")
        .length,
      organizationCount: sim.orgs.length,
      previousPolicyActivity: copy(h.last?.policyActivity || {}),
      transactionCount: h.monthTransfers,
      transactions: transfers.slice(-60),
      policyTransfers: copy(h.policyTransfers),
      accounts: { background: s.outside.balance, foreign: h.foreign.balance },
      policyActivity: copy(h.activity || {}),
    };
    h.last = point;
    h.history.push(point);
    if (h.history.length > 253) h.history.shift();
    active = null;
  }
  function anchor(sim) {
    const h = sim.state.hybrid;
    h.referenceVA = h.last?.economy.domesticVA || 1;
    if (h.last) {
      h.last.economy.index = 100;
      h.history = [copy(h.last)];
    }
  }
  function summary(sim) {
    return {
      schema: sim.state.hybrid.schema,
      status: parameters.status,
      parameters,
      history: sim.state.hybrid.history,
      last: sim.state.hybrid.last,
      proposals: sim.state.hybrid.proposals,
      coalitions: sim.state.hybrid.coalitions.map((c) => ({ ...c })),
      journal: sim.state.hybrid.journal,
    };
  }
  /** [AKX-VAL-01] Imported display records must contain bounded collections and finite numbers. */
  function validSummary(h) {
    if (
      !h ||
      h.schema !== "antarkya.hybrid.v1" ||
      !Array.isArray(h.history) ||
      h.history.length > 253 ||
      !Array.isArray(h.journal) ||
      h.journal.length > 1000 ||
      !Array.isArray(h.proposals) ||
      !Array.isArray(h.coalitions)
    )
      return false;
    const finite = (x, depth = 0) =>
      depth <= 32 &&
      (typeof x === "number"
        ? Number.isFinite(x)
        : !x ||
          typeof x !== "object" ||
          Object.values(x).every((v) => finite(v, depth + 1)));
    if (!finite(h)) return false;
    const point = (p) =>
      p &&
      Number.isInteger(p.month) &&
      p.opening &&
      p.closing &&
      p.economy &&
      Array.isArray(p.flows) &&
      Array.isArray(p.coverage) &&
      Array.isArray(p.classes) &&
      p.classes.length === 4;
    return h.history.every(point) && (h.last === null || point(h.last));
  }
  /** [AKX-VAL-01] Accounting and physical feasibility are independent of empirical fit. */
  function assert(sim) {
    const s = sim.state,
      h = s.hybrid;
    if (!h || !Number.isFinite(h.foreign.balance) || h.foreign.balance < -1e-8)
      throw Error("Invalid boundary account.");
    for (const a of sim.agents)
      if (
        !Number.isFinite(a.hybrid.time) ||
        a.hybrid.time < -1e-7 ||
        a.hybrid.used > 1 + 1e-7
      )
        throw Error("Person-month time exceeded.");
    for (const o of sim.orgs) {
      if (
        o.care.backlog < -1e-8 ||
        o.care.capability < 0 ||
        o.care.capability > 1 ||
        !Number.isFinite(o.economy.capacity) ||
        o.economy.capacity < 0 ||
        o.economy.taxArrears < -1e-8
      )
        throw Error("Invalid organizational stock.");
      if (
        o.economy.output >
        (o.economy.openCapacity ?? o.economy.capacity) + 1e-5
      )
        throw Error("Production exceeds productive capacity.");
    }
    for (const c of h.coalitions)
      if (!Number.isFinite(c.balance) || c.balance < -1e-8)
        throw Error("Invalid coalition escrow.");
    return true;
  }
  const api = {
    configure,
    parameters,
    initialize,
    labelAccounts,
    open,
    phase,
    decay,
    exposure,
    capabilityBuilt,
    options,
    observe,
    accounts,
    personalTime,
    synchronizeTime,
    work,
    care,
    maintenanceNeed,
    demand,
    production,
    investment,
    taxation,
    review,
    propose,
    governance,
    coalitions,
    responses,
    encounters,
    conduct,
    coverage,
    close,
    anchor,
    stocks,
    summary,
    validSummary,
    assert,
    recordTransfer,
    order,
    rank,
  };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.AntarkyaHybrid = api;
})(typeof globalThis !== "undefined" ? globalThis : this);
