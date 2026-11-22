'use strict';
// Browser and Node share this dependency-free simulation engine.
(function (root) {
  const TYPES = ['Citizen', 'Business', 'Official', 'Politician'];
  const DEFAULTS = Object.freeze({ citizens: 120, businesses: 25, officials: 20, politicians: 5,
    gridSize: 40, steps: 500, economy: 'medium', law: 'medium', enforcement: 'inequality',
    electionInterval: 50, electionThreshold: 10, supportThreshold: 30, campaignDuration: 10,
    radius: 4, contacts: 3, memoryWeight: 0.25, networkWeight: 0.15,
    decisionThreshold: 0.5, colorThreshold: 0.2, replacement: true, seed: 'Antarkya-1' });
  const ECONOMY = { low: { gain: 0.8, social: 0.2, stigma: 0.3 },
    medium: { gain: 0.65, social: 0.45, stigma: 0.4 }, high: { gain: 0.5, social: 0.7, stigma: 0.5 } };
  const LAW = { weak: { risk: 0.2, stigma: 0.3 }, medium: { risk: 0.45, stigma: 0.4 }, strong: { risk: 0.7, stigma: 0.5 } };
  const clamp = (v, lo = 0, hi = 1) => Math.max(lo, Math.min(hi, v));
  function randomGenerator(seed) {
    let x = 2166136261;
    for (const c of String(seed)) x = Math.imul(x ^ c.charCodeAt(0), 16777619);
    return () => { x |= 0; x = x + 0x6D2B79F5 | 0; let t = Math.imul(x ^ x >>> 15, 1 | x);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  }
  function validate(input) {
    const c = { ...DEFAULTS, ...input };
    const ranges = { citizens: [0, 800], businesses: [0, 200], officials: [0, 200], politicians: [0, 30],
      gridSize: [10, 100], steps: [1, 10000], electionInterval: [2, 1000], electionThreshold: [0, 1000],
      supportThreshold: [0, 100], campaignDuration: [0, 999], radius: [0.5, 20], contacts: [1, 10],
      memoryWeight: [0, 1], networkWeight: [0, 1], decisionThreshold: [-1, 2], colorThreshold: [0, 1] };
    const integers = new Set(['citizens', 'businesses', 'officials', 'politicians', 'gridSize', 'steps',
      'electionInterval', 'electionThreshold', 'campaignDuration', 'contacts']);
    for (const [key, [lo, hi]] of Object.entries(ranges)) {
      if (!Number.isFinite(c[key]) || c[key] < lo || c[key] > hi || (integers.has(key) && !Number.isInteger(c[key])))
        throw new Error(`${key} must be ${integers.has(key) ? 'a whole number' : 'a number'} between ${lo} and ${hi}.`);
    }
    if (c.citizens + c.businesses + c.officials + c.politicians < 2 || c.citizens + c.businesses + c.officials + c.politicians > 1000)
      throw new Error('Use between 2 and 1,000 agents in total.');
    if (!(c.economy in ECONOMY) || !(c.law in LAW) || !['equality', 'inequality'].includes(c.enforcement)) throw new Error('Invalid environment setting.');
    if (c.campaignDuration >= c.electionInterval) throw new Error('Campaign duration must be shorter than the election interval.');
    c.seed = String(c.seed || DEFAULTS.seed); c.replacement = Boolean(c.replacement); return c;
  }
  class Simulation {
    constructor(input = {}) {
      this.config = validate(input); this.random = randomGenerator(this.config.seed); this.tick = 0;
      this.agents = []; this.links = new Map(); this.events = []; this.history = [];
      this.totals = { encounters: 0, opportunities: 0, corruptExchanges: 0, extortionPayments: 0, punishments: 0, demotions: 0 };
      for (const [i, key] of ['citizens', 'businesses', 'officials', 'politicians'].entries())
        for (let n = 0; n < this.config[key]; n++) this.agents.push(this.makeAgent(TYPES[i]));
      this.record();
    }
    makeAgent(type) {
      const material = type === 'Business' || type === 'Politician';
      const objective = material ? this.uniform(0.6, 1) : this.uniform(0, 0.4);
      const subjective = material ? this.uniform(0, 0.4) : this.uniform(0.6, 1);
      return { id: this.agents.length, type, x: this.random() * this.config.gridSize, y: this.random() * this.config.gridSize,
        objective, subjective, objectiveCost: material ? this.uniform(0.6, 1) : this.uniform(0, 0.4),
        subjectiveCost: material ? this.uniform(0, 0.4) : this.uniform(0.6, 1),
        preference: this.random() < (material ? 0.8 : 0.2) ? 'objective' : 'subjective',
        score: 0, decisions: 0, interactions: 0, corruptActions: 0, punishmentCount: 0,
        coercedPayments: 0, blockedUntil: 0, memory: new Map(), loyalty: new Map(), support: null };
    }
    uniform(a, b) { return a + (b - a) * this.random(); }
    ratio(a) { return a.decisions ? a.score / a.decisions : 0; }
    isCorrupt(a) { return this.ratio(a) > this.config.colorThreshold; }
    get campaign() { const phase = this.tick % this.config.electionInterval; return phase > 0 && phase >= this.config.electionInterval - this.config.campaignDuration; }
    risk(a) { return LAW[this.config.law].risk * (this.config.enforcement === 'equality' ? 1 :
      { Citizen: 1, Business: 0.65, Official: 0.8, Politician: 0.25 }[a.type]); }
    linkKey(a, b) { return a.id < b.id ? `${a.id}:${b.id}` : `${b.id}:${a.id}`; }
    reputation(observer, subject) {
      const m = observer.memory.get(subject.id);
      return m ? m.corrupt / m.total : (this.isCorrupt(subject) ? 0.75 : 0.1);
    }
    decision(a, b, boost = 0) {
      const env = ECONOMY[this.config.economy], law = LAW[this.config.law];
      const rep = this.reputation(a, b);
      const tie = this.links.get(this.linkKey(a, b));
      // Corrupt social approval competes with the subjective benefit of honesty.
      const socialGain = env.social * (2 * rep - 1);
      const preferenceBoost = a.preference === 'objective' ? 0.08 : -0.08;
      let benefit = a.objective * this.uniform(0.5, 1.5) * env.gain + a.subjective * socialGain + preferenceBoost;
      benefit += this.config.memoryWeight * rep;
      if (tie && tie.count >= 3) benefit += this.config.networkWeight;
      if (a.type === 'Politician' && this.campaign) {
        if (this.random() < 0.2) benefit += 0.1;
        if (this.random() < 0.2) benefit += 0.1;
      }
      const cost = a.objectiveCost * this.risk(a) + a.subjectiveCost * (env.stigma + law.stigma) / 2;
      return benefit + boost - cost > this.config.decisionThreshold;
    }
    mark(a, corrupt) { a.decisions++; a.score += corrupt ? 1 : -1; if (corrupt) a.corruptActions++; }
    remember(a, b, corrupt) {
      const old = a.memory.get(b.id) || { total: 0, corrupt: 0 };
      old.total++; if (corrupt) old.corrupt++; a.memory.set(b.id, old);
    }
    log(message, kind = 'event') { this.events.push({ step: this.tick, kind, message }); }
    punish(a) {
      if (this.random() < this.risk(a)) {
        a.punishmentCount++; a.blockedUntil = this.tick + 4; this.totals.punishments++;
        this.log(`${a.type} ${a.id + 1} sanctioned; inactive for 3 following rounds.`, 'punishment');
      }
    }
    exchange(a, b, kind) {
      this.mark(a, true); this.mark(b, true);
      this.remember(a, b, true); this.remember(b, a, true);
      this.totals.corruptExchanges++;
      const key = this.linkKey(a, b), tie = this.links.get(key) || { a: a.id, b: b.id, count: 0, last: this.tick };
      tie.count++; tie.last = this.tick; this.links.set(key, tie);
      if (tie.count === 3) this.log(`Repeated corrupt tie: ${a.type} ${a.id + 1} and ${b.type} ${b.id + 1}.`, 'network');
      this.punish(a); this.punish(b);
      if (kind === 'vote-buying') {
        const citizen = a.type === 'Citizen' ? a : b, politician = a.type === 'Politician' ? a : b;
        citizen.loyalty.set(politician.id, clamp((citizen.loyalty.get(politician.id) || 0) + 0.25));
      }
    }
    interact(first, second) {
      if (first.blockedUntil > this.tick || second.blockedUntil > this.tick) return;
      first.interactions++; second.interactions++; this.totals.encounters++;
      const order = [...[first, second]].sort((a, b) => TYPES.indexOf(a.type) - TYPES.indexOf(b.type));
      const [a, b] = order, pair = `${a.type}/${b.type}`;
      if (pair === 'Citizen/Business' || a.type === b.type) return; // Neutral exchanges leave score and memory unchanged.
      if (!['Citizen/Official', 'Business/Official', 'Citizen/Politician', 'Business/Politician', 'Official/Politician'].includes(pair)) return;
      this.totals.opportunities++;
      if (pair === 'Citizen/Official' && this.isCorrupt(b) && this.decision(b, a, 0.15)) {
        // Victimization is measured separately from the citizen's voluntary corrupt conduct.
        const refusalCost = ECONOMY[this.config.economy].gain * this.uniform(0.4, 1.2);
        const pays = refusalCost > a.subjective * 0.35 + a.objectiveCost * this.risk(a);
        this.mark(b, true); this.remember(a, b, true);
        if (pays) { a.coercedPayments++; this.totals.extortionPayments++; this.punish(b); }
        return;
      }
      const da = this.decision(a, b), db = this.decision(b, a);
      if (da && db) this.exchange(a, b, pair === 'Citizen/Politician' ? 'vote-buying' : 'bribery');
      else { this.mark(a, false); this.mark(b, false); this.remember(a, b, false); this.remember(b, a, false); }
    }
    supportProbability(citizen, politician) {
      const rep = this.reputation(citizen, politician), loyalty = citizen.loyalty.get(politician.id) || 0;
      return clamp(0.5 + 0.35 * citizen.subjective - 0.8 * citizen.subjective * rep +
        0.2 * citizen.objective * loyalty + (citizen.preference === politician.preference ? 0.1 : 0));
    }
    estimateSupport(p) {
      const citizens = this.agents.filter(a => a.type === 'Citizen');
      return citizens.length ? citizens.reduce((sum, c) => sum + this.supportProbability(c, p), 0) / citizens.length : null;
    }
    election() {
      const citizens = this.agents.filter(a => a.type === 'Citizen');
      if (!citizens.length) { this.log('Election skipped: no citizens to evaluate support.', 'election'); return; }
      const politicians = this.agents.filter(a => a.type === 'Politician'), demoted = [];
      // All support is evaluated before any role changes. Support is independent approval, not exclusive votes.
      for (const p of politicians) {
        p.support = citizens.filter(c => this.random() < this.supportProbability(c, p)).length / citizens.length;
        const out = p.score > this.config.electionThreshold && p.support * 100 < this.config.supportThreshold;
        this.log(`Politician ${p.id + 1}: ${(p.support * 100).toFixed(0)}% approval, score ${p.score}${out ? '; demoted' : '; retained'}.`, 'election');
        if (out) demoted.push(p);
      }
      for (const p of demoted) { p.type = 'Citizen'; p.score = 0; p.decisions = 0; p.support = null; p.blockedUntil = 0; this.totals.demotions++; }
      if (this.config.replacement) {
        const candidates = citizens.filter(c => c.blockedUntil <= this.tick);
        for (const old of demoted) {
          if (!candidates.length) break;
          const next = candidates.splice(Math.floor(this.random() * candidates.length), 1)[0];
          next.type = 'Politician'; next.score = 0; next.decisions = 0; next.support = null;
          this.log(`Citizen ${next.id + 1} fills the seat vacated by ${old.id + 1}.`, 'election');
        }
      }
      for (const p of demoted) {
        for (const [key, link] of this.links) if (link.a === p.id || link.b === p.id) this.links.delete(key);
      }
    }
    step() {
      if (this.tick >= this.config.steps) return false;
      this.tick++;
      const c = this.config, size = c.gridSize;
      for (const [key, link] of this.links) if (this.tick - link.last > 50) this.links.delete(key);
      for (const a of this.agents) {
        for (const [key, loyalty] of a.loyalty) { if (loyalty < 0.001) a.loyalty.delete(key); else a.loyalty.set(key, loyalty * 0.97); }
        if (a.blockedUntil > this.tick) continue;
        let dx = this.uniform(-1, 1), dy = this.uniform(-1, 1);
        const ties = [...this.links.values()].filter(t => t.count >= 3 && (t.a === a.id || t.b === a.id));
        if (ties.length) { const tie = ties[Math.floor(this.random() * ties.length)], other = this.agents[tie.a === a.id ? tie.b : tie.a];
          dx += (other.x - a.x) * 0.08; dy += (other.y - a.y) * 0.08; }
        a.x = clamp(a.x + dx, 0, size); a.y = clamp(a.y + dy, 0, size);
      }
      const bins = new Map(), cell = a => [Math.floor(a.x / c.radius), Math.floor(a.y / c.radius)];
      for (const a of this.agents) { const k = cell(a).join(','); if (!bins.has(k)) bins.set(k, []); bins.get(k).push(a); }
      const order = [...this.agents];
      for (let i = order.length - 1; i > 0; i--) { const j = Math.floor(this.random() * (i + 1)); [order[i], order[j]] = [order[j], order[i]]; }
      const used = new Set();
      for (const a of order) {
        if (a.blockedUntil > this.tick) continue;
        const [x, y] = cell(a), nearby = [];
        for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++)
          for (const b of bins.get(`${x + dx},${y + dy}`) || [])
            if (a.id !== b.id && b.blockedUntil <= this.tick && Math.hypot(a.x - b.x, a.y - b.y) <= c.radius) nearby.push(b);
        for (let k = 0; k < Math.min(c.contacts, nearby.length); k++) {
          const j = k + Math.floor(this.random() * (nearby.length - k)); [nearby[k], nearby[j]] = [nearby[j], nearby[k]];
          const b = nearby[k], key = this.linkKey(a, b); if (!used.has(key)) { used.add(key); this.interact(a, b); }
        }
        if (a.type === 'Politician' && this.campaign && nearby.length && this.random() < 0.2) {
          const b = nearby[Math.floor(this.random() * nearby.length)], key = this.linkKey(a, b);
          if (!used.has(key)) { used.add(key); this.interact(a, b); }
        }
      }
      if (this.tick % c.electionInterval === 0) this.election();
      this.record(); return true;
    }
    record() {
      const counts = Object.fromEntries(TYPES.map(t => [t, { total: 0, corrupt: 0 }]));
      for (const a of this.agents) { counts[a.type].total++; if (this.isCorrupt(a)) counts[a.type].corrupt++; }
      const corrupt = Object.values(counts).reduce((sum, x) => sum + x.corrupt, 0);
      this.history.push({ step: this.tick, corrupt, honest: this.agents.length - corrupt, fraction: corrupt / this.agents.length,
        campaign: this.campaign, networkTies: [...this.links.values()].filter(t => t.count >= 3).length, ...this.totals, counts });
    }
    snapshot() { return { modelVersion: '1.0.0', config: this.config, history: this.history, events: this.events,
      agents: this.agents.map(a => ({ ...a, ratio: this.ratio(a), state: this.isCorrupt(a) ? 'corrupt' : 'honest',
        memory: Object.fromEntries(a.memory), loyalty: Object.fromEntries(a.loyalty) })), links: [...this.links.values()] }; }
  }
  const api = { Simulation, DEFAULTS, TYPES, validate };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.Antarkya = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
