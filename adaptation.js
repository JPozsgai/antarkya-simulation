/* AUDIT FILE — adaptation.js
 * References: AK-POP-02, AK-MOT-01, AK-DEC-01, AK-ADP-01, AK-ADP-02, AK-ADP-03, AK-INF-02, AK-CAS-03, AK-POL-ACA, AK-POL-MERIT, AK-POL-ROTATION, AK-POL-PROTECTION, AK-POL-DECLARATIONS, AK-POL-CONFLICTS, AK-POL-OVERSIGHT, AK-POL-PAY, AK-POL-PENALTIES, AK-POL-DISCLOSURE, AK-POL-COMPLAINTS, AK-POL-EDUCATION
 * See docs/audit/TECHNICAL.md and the line-linked full source in docs/audit/source/.
 * Documentation-only revision: execution is checked against the pinned pre-annotation AST.
 */

'use strict';
// Explicit exploratory priors. Policy selection alone never calls exposure().
(function (root) {
  /** [AK-ADP-01] [AK-ADP-02] clamp
   * Implementation unit for Individual receptiveness and numerical psychology. Follow the reference IDs for its equations, assumptions and verification limits.
   */
  const clamp = (x, l = 0, h = 1) => Math.max(l, Math.min(h, x));
  const elements = [
    'attitude',
    'norm',
    'control',
    'corruptControl',
    'risk',
    'knowledge',
    'reportSafety',
  ];
  const labels = {
    attitude: 'Evaluation of corrupt conduct',
    norm: 'Perceived reference expectations',
    control: 'Lawful/reporting capability',
    corruptControl: 'Feasibility of improper conduct',
    risk: 'Expected accountability cost',
    knowledge: 'Usable knowledge',
    reportSafety: 'Expected reporting safety',
  };
  const integrity = [
    'integrity',
    'report',
    'refuse',
    'recruit',
    'implementation',
    'case',
    'retaliation',
  ];
  const map = {
    /* [AK-POL-ACA] Data definition; numeric values are explicit model priors unless separately sourced. */
    aca: {
      elements: { risk: 0.25, control: 0.15 },
      contexts: integrity,
      elementContexts: { control: ['case', 'report'] },
      halfLife: 10,
      channel: 'Communicated screening/inquiry and actual staff training',
      structural: 'Mandate, inquiry capacity, referrals and shared case work',
    },

    /* [AK-POL-MERIT] Data definition; numeric values are explicit model priors unless separately sourced. */
    merit: {
      elements: { norm: 0.12, control: 0.15 },
      contexts: ['recruit'],
      halfLife: 12,
      channel: 'Experienced appointment/review procedure',
      structural: 'Actual selection and the competence of appointed staff',
    },

    /* [AK-POL-ROTATION] Data definition; numeric values are explicit model priors unless separately sourced. */
    rotation: {
      elements: { norm: 0.1 },
      contexts: ['integrity', 'case'],
      halfLife: 8,
      channel: 'Actual transfer and new workplace induction',
      structural: 'Changed staff locations and access; existing ties survive',
    },

    /* [AK-POL-PROTECTION] Data definition; numeric values are explicit model priors unless separately sourced. */
    protection: {
      elements: { control: 0.25, reportSafety: 0.35 },
      contexts: ['report', 'refuse'],
      halfLife: 8,
      channel: 'Personally experienced protection or failure',
      structural: 'Timely protection, staff work and actual victim costs',
    },

    /* [AK-POL-DECLARATIONS] Data definition; numeric values are explicit model priors unless separately sourced. */
    declarations: {
      elements: { risk: 0.15 },
      contexts: integrity,
      halfLife: 10,
      channel: 'Personally communicated verification',
      structural: 'Covered personal records used in real scrutiny',
    },

    /* [AK-POL-CONFLICTS] Data definition; numeric values are explicit model priors unless separately sourced. */
    conflicts: {
      elements: { norm: 0.1, corruptControl: 0.25 },
      contexts: ['integrity', 'recruit', 'implementation'],
      halfLife: 10,
      channel: 'Experienced conflict review or blocked exchange',
      structural: 'Records, applicable review and actual prevention',
    },

    /* [AK-POL-OVERSIGHT] Data definition; numeric values are explicit model priors unless separately sourced. */
    oversight: {
      elements: { risk: 0.3 },
      contexts: integrity,
      halfLife: 8,
      channel: 'Communicated audit/inquiry; never hidden audit truth',
      structural: 'Finite scrutiny, evidence quality and corrective work',
    },

    /* [AK-POL-PAY] Data definition; numeric values are explicit model priors unless separately sourced. */
    pay: {
      elements: {},
      contexts: [],
      halfLife: 12,
      channel: 'Actual pay receipts inform experienced financial security',
      structural: 'Conserved supplements and actual income/cost valuations; no honesty bonus',
    },

    /* [AK-POL-PENALTIES] Data definition; numeric values are explicit model priors unless separately sourced. */
    penalties: {
      elements: { risk: 0.4 },
      contexts: integrity,
      halfLife: 8,
      channel: 'Observed actual liability and collection',
      structural: 'Lawful liability, collectible resources and collection capacity',
    },

    /* [AK-POL-DISCLOSURE] Data definition; numeric values are explicit model priors unless separately sourced. */
    disclosure: {
      elements: {},
      contexts: [],
      halfLife: 8,
      channel: 'Accessed publications enter ordinary credibility-weighted belief learning',
      structural: 'Real record visibility; no generic persuasion bonus',
    },

    /* [AK-POL-COMPLAINTS] Data definition; numeric values are explicit model priors unless separately sourced. */
    complaints: {
      elements: { control: 0.3, knowledge: 0.2 },
      contexts: ['report'],
      halfLife: 8,
      channel: 'Encountered reporting instructions and actual intake',
      structural: 'Channel access, monetary cost and competent recipient',
    },

    /* [AK-POL-EDUCATION] Data definition; numeric values are explicit model priors unless separately sourced. */
    education: {
      elements: { attitude: 0.3, norm: 0.2, control: 0.25, knowledge: 0.35 },
      contexts: integrity,
      halfLife: 6,
      channel: 'Delivered teaching/messages with a known source',
      structural: 'Funded setup, staff time, content delivery and coverage',
    },
    experience: {
      elements: { risk: 0.2, reportSafety: 0.15 },
      contexts: integrity,
      halfLife: 6,
      channel: 'Policy-independent personally accessed experience',
      structural: 'Ordinary accountability and life experience',
    },
  };
  const bounds = {
    attitude: 0.45,
    norm: 0.45,
    control: 0.5,
    corruptControl: 0.5,
    risk: 0.6,
    knowledge: 0.6,
    reportSafety: 0.6,
  };
  // A first exposure can use the full per-element range; later new learning is smaller.
  const novelty = 0.7,
    noveltyFloor = 0.05,
    maintenance = 0.35;

  /** [AK-POP-02] [AK-ADP-01] initialize
   * Construct each person’s stored trait baselines, current traits, expectations, motive anchors and learning memories using separate keyed draws.
   */
  function initialize(a, random) {
    const base = {
      openness: 0.2 + 0.6 * random('openness'),
      retention: 0.2 + 0.6 * random('retention'),
      learning: 0.2 + 0.6 * random('learning'),
    };
    a.psychology = {
      version: 1,
      baseTraits: base,
      traits: { ...base },
      initialMotives: [...a.motives],
      initialSkill: a.skill,
      baseKnowledge: a.knowledge,
      baseRisk: a.riskBelief,
      riskPrior: a.riskBelief,
      accountabilityEvents: [],
      baseSafety: 0.2 + 0.6 * random('reporting-safety'),
      expectedIncome: a.income,
      salience: Array(9).fill(0),
      memories: {},
      feedback: 0,
      lastAdvance: 0,
      lastExposure: null,
    };
    return a.psychology;
  }

  /** [AK-POP-02] recentParticipation
   * Implementation unit for Heterogeneous starting profiles. Follow the reference IDs for its equations, assumptions and verification limits.
   */
  function recentParticipation(a) {
    const h = a.meaningful || [];
    return h.length ? h.filter((x) => x.corrupt).length / h.length : 0;
  }

  /** [AK-ADP-01] receptiveness
   * Compute component-specific uptake and conditional strength from actual individual traits, motives, knowledge, trust and own history. Credibility controls uptake; delivery quality later controls dose.
   */
  function receptiveness(a, element, credibility = 1) {
    const p = a.psychology,
      publicInterest = a.motives[2] + a.motives[5] + a.motives[8],
      economicSelf = a.motives[3],
      honestExpectation = (1 - clamp(a.normCorrupt, -1, 1)) / 2;
    const ownHistory = recentParticipation(a),
      alignment =
        element === 'risk'
          ? clamp(0.45 + 0.4 * economicSelf + 0.15 * a.knowledge)
          : element === 'attitude' || element === 'norm'
            ? clamp(0.25 + 0.35 * publicInterest + 0.3 * honestExpectation - 0.2 * ownHistory)
            : clamp(0.35 + 0.35 * a.knowledge + 0.3 * (a.experience?.trust ?? 0.5));
    // Trust controls uptake; history/traits also control conditional strength.
    const uptake = clamp(
      (0.1 + 0.55 * p.traits.openness + 0.2 * alignment + 0.15 * p.traits.learning) *
        clamp(credibility),
    );
    const strength = clamp(0.25 + 0.45 * p.traits.learning + 0.3 * alignment);
    return { uptake, strength, alignment };
  }

  /** [AK-ADP-01] feedback
   * Record bounded experienced/enacted salience and credibility feedback used for slow future adaptation; no conduct classification occurs here.
   */
  function feedback(a, signals = {}, credibility = 0.5) {
    const p = a.psychology,
      c = clamp(credibility);
    p.feedback = clamp(p.feedback + 0.1 * (c - p.feedback));
    for (const [index, value] of Object.entries(signals)) {
      const i = Number(index);
      if (i >= 0 && i < 9)
        p.salience[i] = clamp(p.salience[i] + 0.08 * c * (clamp(value) - p.salience[i]));
    }
  }

  /** [AK-ADP-02] observe
   * Deduplicate substantive episodes, draw uptake and magnitude separately, and apply declining new-learning caps plus bounded restoration. Rejected delivery still advances the exposure counter; it is not successful learning.
   */
  function observe(a, policy, event, month, random, options = {}) {
    const spec = map[policy];
    if (!spec) throw Error('Unknown adaptation policy ' + policy);
    const p = a.psychology,
      quality = clamp(options.quality ?? 1),
      credibility = clamp(options.credibility ?? 0.55);
    if (!quality || !credibility || !options.delivered) return { delivered: false, changed: false };
    let memory = p.memories[policy];
    if (!memory) memory = p.memories[policy] = { events: [], components: {} };
    // Deduplicate an event across sources; repetition gets a new explicit episode ID.
    if (memory.events.includes(event)) return { delivered: true, duplicate: true, changed: false };
    memory.events.push(event);
    if (memory.events.length > 32) memory.events.shift();
    const trace = {
      policy,
      event,
      month,
      source: options.source ?? null,
      quality,
      credibility,
      components: {},
    };
    let changed = false;
    const requested = options.elements || Object.keys(spec.elements);
    for (const element of requested) {
      const max = spec.elements[element];
      if (!max) continue;
      let state = memory.components[element];
      if (!state)
        state = memory.components[element] = {
          level: 0,
          peak: 0,
          count: 0,
          accepted: 0,
          target: element === 'reportSafety' ? 1 : 0,
        };
      const receptive = receptiveness(a, element, credibility),
        cap = max * Math.max(noveltyFloor, Math.pow(novelty, state.count++));
      const accepted = random('uptake', event, a.id, element) < receptive.uptake;
      let gain = 0,
        restoration = 0;
      if (accepted) {
        state.accepted++;
        const intensity =
          clamp(random('strength', event, a.id, element)) * receptive.strength * quality;
        gain = cap * intensity;
        restoration = maintenance * intensity * Math.max(0, state.peak - state.level);
        const next = Math.min(max, state.level + gain + restoration);
        changed ||= next > state.level;
        state.level = next;
        state.peak = Math.max(state.peak, next);
        if (options.targets && Number.isFinite(options.targets[element])) {
          const target = clamp(options.targets[element]);
          state.target =
            state.accepted === 1
              ? target
              : state.target + maintenance * intensity * (target - state.target);
        }
      }
      trace.components[element] = {
        accepted,
        probability: receptive.uptake,
        strength: receptive.strength,
        cap,
        gain,
        restoration,
        level: state.level,
        target: state.target,
      };
    }
    p.lastExposure = trace;
    refresh(a);
    if (changed)
      feedback(a, policy === 'education' ? { 2: 0.7, 5: 0.5, 8: 0.4 } : { 3: 0.5 }, credibility);
    return { delivered: true, changed, trace };
  }

  /** [AK-ADP-02] influence
   * Sum retained eligible component levels and targets, applying context gates and cross-policy bounds. A non-targeted component must not receive a generic bonus.
   */
  function influence(a, context) {
    const out = Object.fromEntries(elements.map((k) => [k, 0]));
    let riskTarget = 0,
      riskWeight = 0,
      safetyTarget = 0,
      safetyWeight = 0;
    for (const [policy, m] of Object.entries(a.psychology.memories)) {
      const spec = map[policy];
      if (context && !spec.contexts.includes(context)) continue;
      for (const [element, c] of Object.entries(m.components)) {
        if (
          context &&
          spec.elementContexts?.[element] &&
          !spec.elementContexts[element].includes(context)
        )
          continue;
        out[element] += c.level;
        if (element === 'risk') {
          riskTarget += c.level * c.target;
          riskWeight += c.level;
        }
        if (element === 'reportSafety') {
          safetyTarget += c.level * c.target;
          safetyWeight += c.level;
        }
      }
    }
    for (const k of elements) out[k] = Math.min(bounds[k], out[k]);
    out.riskTarget = riskWeight ? riskTarget / riskWeight : a.psychology.baseRisk;
    out.safetyTarget = safetyWeight ? safetyTarget / safetyWeight : 0.5;
    return out;
  }

  /** [AK-ADP-02] refresh
   * Refresh derived knowledge/accountability expectations from retained memories without double-counting generic gains.
   */
  function refresh(a) {
    const p = a.psychology,
      e = influence(a, 'integrity');
    // Reporting-specific channel knowledge is queried separately, not generalized to all conduct.
    a.knowledge = clamp(p.baseKnowledge + e.knowledge * (1 - p.baseKnowledge));
    a.riskBelief = clamp(p.baseRisk + e.risk * (e.riskTarget - p.baseRisk));
  }

  /** [AK-ADP-01] knowledge
   * Read context-specific usable knowledge from baseline and retained component influence. Reporting-channel instructions are not universal knowledge for unrelated conduct.
   */
  function knowledge(a, context) {
    const p = a.psychology,
      e = influence(a, context);
    return clamp(p.baseKnowledge + e.knowledge * (1 - p.baseKnowledge));
  }

  /** [AK-ADP-01] safety
   * Read subjective reporting safety from experienced baseline and retained target-specific learning. Do not replace it with omniscient true protection capacity.
   */
  function safety(a) {
    const p = a.psychology,
      e = influence(a, 'report');
    return clamp(p.baseSafety + e.reportSafety * (e.safetyTarget - p.baseSafety));
  }

  /** [AK-CAS-03] accountability
   * Learn from one personally experienced or accessed announced decision with bounded prior-relative targets. Deduplication and forgetting limits are explicit and do not reveal hidden truth.
   */
  function accountability(a, event, month, signal, personal = false, credibility = 1) {
    const p = a.psychology,
      key = (personal ? 'self:' : 'public:') + event;
    if (p.accountabilityEvents.includes(key)) return false;
    p.accountabilityEvents.push(key);
    if (p.accountabilityEvents.length > 64) p.accountabilityEvents.shift();
    const span = personal ? 0.35 : 0.15,
      target = clamp(p.riskPrior + span * clamp(signal), 0.03, 0.95),
      rate =
        (personal ? 0.12 + 0.12 * p.traits.learning : 0.015 + 0.025 * p.traits.learning) *
        clamp(credibility);
    p.baseRisk = clamp(
      p.baseRisk + rate * (target - p.baseRisk),
      Math.max(0.03, p.riskPrior - 0.15),
      Math.min(0.95, p.riskPrior + 0.35),
    );
    refresh(a);
    return true;
  }

  /** [AK-MOT-01] [AK-ADP-02] [AK-ADP-03] advance
   * Apply wear-off, bounded trait/motive evolution and ordinary risk relaxation exactly once per elapsed month. Never erase conduct or restore an integrity icon through this learning update.
   */
  function advance(a, month) {
    const p = a.psychology;
    if (month <= p.lastAdvance) return;
    for (let m = p.lastAdvance; m < month; m++) {
      p.baseRisk += 0.005 * (p.riskPrior - p.baseRisk);
      for (const [policy, memory] of Object.entries(p.memories)) {
        const halfLife = map[policy].halfLife * (0.5 + p.traits.retention);
        for (const state of Object.values(memory.components))
          state.level *= Math.exp(-Math.LN2 / halfLife);
      }
      const trust = a.experience?.trust ?? 0.5,
        openness = clamp(
          p.baseTraits.openness + 0.12 * (2 * trust - 1) - 0.08 * recentParticipation(a),
        );
      p.traits.openness = clamp(
        p.traits.openness + 0.01 * (openness - p.traits.openness),
        Math.max(0, p.baseTraits.openness - 0.15),
        Math.min(1, p.baseTraits.openness + 0.15),
      );
      const learning = clamp(p.baseTraits.learning + 0.15 * p.feedback);
      p.traits.learning = clamp(p.traits.learning + 0.005 * (learning - p.traits.learning));
      const retention = clamp(p.baseTraits.retention + 0.1 * p.feedback);
      p.traits.retention = clamp(p.traits.retention + 0.005 * (retention - p.traits.retention));
      const target = p.initialMotives.map((v, i) => v * Math.exp(0.35 * p.salience[i])),
        total = target.reduce((x, y) => x + y, 0);
      a.motives = a.motives.map((v, i) => v + 0.002 * (target[i] / total - v));
      const normal = a.motives.reduce((x, y) => x + y, 0);
      a.motives = a.motives.map((v) => v / normal);
      p.salience = p.salience.map((v) => v * 0.99);
      p.feedback *= 0.98;
    }
    p.lastAdvance = month;
    refresh(a);
  }

  /** [AK-ADP-03] work
   * Improve skill only through performed work, with a ceiling relative to initial skill. This is not an instant expertise gain from selecting a policy.
   */
  function work(a, time) {
    if (time <= 0) return;
    const p = a.psychology;
    a.skill += Math.min(
      Math.max(0, Math.min(1, p.initialSkill + 0.2) - a.skill),
      0.003 * time * Math.max(0, 1 - a.skill),
    );
    feedback(a, { 3: 0.25, 4: 0.15 }, 0.6);
  }

  /** [AK-ADP-03] incomeExperience
   * Learn expected lawful receipts from one actual monthly observation, including supplements. It is separate from measured unmet-needs pressure and from new money creation.
   */
  function incomeExperience(a, received) {
    const p = a.psychology,
      observed = Math.max(0, received);
    p.expectedIncome += (0.05 + 0.25 * p.traits.learning) * (observed - p.expectedIncome);
    feedback(a, { 3: clamp((a.cost - 0.9 * observed) / Math.max(0.1, a.cost)) }, 0.8);
  }

  /** [AK-INF-02] messageRate
   * Scale accessed information by credibility and the recipient’s openness/learning. This does not guarantee acceptance of a true or false claim.
   */
  function messageRate(a, credibility) {
    return (
      clamp(credibility) *
      (0.25 + 0.5 * a.psychology.traits.openness + 0.25 * a.psychology.traits.learning)
    );
  }

  /** [AK-DEC-01] context
   * Map action names to the policy-learning contexts actually used by decision(). A new action name needs an explicit context review.
   */
  function context(name, integrityChoice = false) {
    if (name === 'Report observed conduct') return 'report';
    if (name === 'Respond to extortion') return 'refuse';
    if (name === 'Recruitment / promotion') return 'recruit';
    if (name.startsWith('Implement ')) return 'implementation';
    if (name.startsWith('Case ')) return 'case';
    if (name === 'Response to reporting') return 'retaliation';
    return integrityChoice ? 'integrity' : 'other';
  }

  /** [AK-DEC-01] [AK-ADP-02] decision
   * Adjust only the relevant attitude, norm and feasibility elements for the specific option/context. Actual resources, consent and law are still checked by the engine after intention.
   */
  function decision(a, ctx, option, attitude, norm, control) {
    const e = influence(a, ctx),
      before = { attitude, norm, control };
    if (option.corrupt) attitude += e.attitude * (Math.min(-1, attitude) - attitude);
    if (ctx !== 'other') {
      norm += e.norm * ((option.corrupt ? -1 : 1) - norm);
      if (option.corrupt) control *= 1 - e.corruptControl;
      else if (
        !['stay silent', 'pay under coercion', 'decline / defer', 'resist'].includes(option.name)
      )
        control += e.control * (1 - control);
    }
    return { attitude, norm, control: clamp(control), before, influence: e };
  }

  /** [AK-POP-02] summary
   * Export interpretable numerical traits, retained influences and exposure histories for inspection. Summary values are model traits rather than validated psychological scores.
   */
  function summary(a) {
    return {
      traits: { ...a.psychology.traits },
      expectedIncome: a.psychology.expectedIncome,
      reportingSafety: safety(a),
      baseMotives: [...a.psychology.initialMotives],
      influence: influence(a),
      lastExposure: a.psychology.lastExposure,
      exposures: Object.fromEntries(
        Object.entries(a.psychology.memories).map(([k, m]) => [
          k,
          Object.fromEntries(
            Object.entries(m.components).map(([e, s]) => [
              e,
              { level: s.level, peak: s.peak, count: s.count, accepted: s.accepted },
            ]),
          ),
        ]),
      ),
    };
  }

  /** [AK-POP-02] valid
   * Validate complete stored numerical psychology, memories and bounds for initial/final profiles.
   */
  function valid(a) {
    const p = a.psychology;
    if (
      !p ||
      p.version !== 1 ||
      p.initialMotives?.length !== 9 ||
      p.salience?.length !== 9 ||
      !p.initialMotives.every((x) => Number.isFinite(x) && x > 0) ||
      Math.abs(p.initialMotives.reduce((x, y) => x + y, 0) - 1) > 1e-6 ||
      !p.salience.every((x) => Number.isFinite(x) && x >= 0 && x <= 1) ||
      !Number.isFinite(p.riskPrior) ||
      p.riskPrior < 0 ||
      p.riskPrior > 1 ||
      !Array.isArray(p.accountabilityEvents) ||
      p.accountabilityEvents.length > 64 ||
      !Number.isFinite(p.baseRisk) ||
      p.baseRisk < 0 ||
      p.baseRisk > 1 ||
      !Number.isFinite(p.baseKnowledge) ||
      p.baseKnowledge < 0 ||
      p.baseKnowledge > 1 ||
      !Number.isFinite(p.initialSkill) ||
      p.initialSkill < 0 ||
      p.initialSkill > 1 ||
      !Number.isInteger(p.lastAdvance) ||
      p.lastAdvance < -12
    )
      return false;
    if (
      !Number.isFinite(p.expectedIncome) ||
      p.expectedIncome < 0 ||
      !Number.isFinite(p.feedback) ||
      p.feedback < 0 ||
      p.feedback > 1 ||
      !Number.isFinite(p.baseSafety) ||
      p.baseSafety < 0 ||
      p.baseSafety > 1
    )
      return false;
    for (const t of [p.traits, p.baseTraits])
      if (
        !t ||
        !['openness', 'retention', 'learning'].every(
          (k) => Number.isFinite(t[k]) && t[k] >= 0 && t[k] <= 1,
        )
      )
        return false;
    if (!p.memories || Array.isArray(p.memories)) return false;
    for (const [policy, m] of Object.entries(p.memories)) {
      if (!map[policy] || !Array.isArray(m.events) || m.events.length > 32) return false;
      for (const [e, s] of Object.entries(m.components)) {
        const max = map[policy].elements[e];
        if (
          !max ||
          ![s.level, s.peak, s.target].every(Number.isFinite) ||
          s.level < 0 ||
          s.level > s.peak + 1e-9 ||
          s.peak > max + 1e-9 ||
          s.target < 0 ||
          s.target > 1 ||
          !Number.isInteger(s.count) ||
          !Number.isInteger(s.accepted) ||
          s.accepted < 0 ||
          s.accepted > s.count
        )
          return false;
      }
    }
    return true;
  }

  /** [AK-POP-02] validSummary
   * Validate the smaller inspection-summary structure accepted in completed saved results.
   */
  function validSummary(p) {
    /** [AK-POP-02] unit
     * Local helper for validSummary; its inputs and return value are part of the enclosing mechanism. Heterogeneous starting profiles.
     */
    const unit = (x) => Number.isFinite(x) && x >= 0 && x <= 1;
    if (
      !p ||
      !p.traits ||
      !['openness', 'retention', 'learning'].every((k) => unit(p.traits[k])) ||
      !Number.isFinite(p.expectedIncome) ||
      p.expectedIncome < 0 ||
      !unit(p.reportingSafety) ||
      !Array.isArray(p.baseMotives) ||
      p.baseMotives.length !== 9 ||
      !p.baseMotives.every(unit) ||
      Math.abs(p.baseMotives.reduce((x, y) => x + y, 0) - 1) > 1e-6 ||
      !p.influence ||
      !elements.every((k) => unit(p.influence[k]) && p.influence[k] <= bounds[k] + 1e-9) ||
      !p.exposures ||
      Array.isArray(p.exposures)
    )
      return false;
    for (const [policy, cs] of Object.entries(p.exposures)) {
      if (!Object.hasOwn(map, policy) || !cs || typeof cs !== 'object' || Array.isArray(cs))
        return false;
      for (const [k, s] of Object.entries(cs)) {
        const maximum = map[policy].elements[k];
        if (
          !maximum ||
          !s ||
          !unit(s.level) ||
          !unit(s.peak) ||
          s.level > s.peak + 1e-9 ||
          s.peak > maximum + 1e-9 ||
          !Number.isInteger(s.count) ||
          !Number.isInteger(s.accepted) ||
          s.accepted < 0 ||
          s.accepted > s.count
        )
          return false;
      }
    }
    const last = p.lastExposure;
    if (
      last !== null &&
      (!last ||
        !Object.hasOwn(map, last.policy) ||
        typeof last.event !== 'string' ||
        last.event.length > 500 ||
        !Number.isInteger(last.month) ||
        last.month < -12 ||
        !unit(last.quality) ||
        !unit(last.credibility))
    )
      return false;
    return true;
  }
  const api = {
    map,
    elements,
    labels,
    bounds,
    novelty,
    noveltyFloor,
    maintenance,
    initialize,
    receptiveness,
    feedback,
    observe,
    influence,
    refresh,
    knowledge,
    safety,
    accountability,
    advance,
    work,
    incomeExperience,
    messageRate,
    context,
    decision,
    summary,
    valid,
    validSummary,
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.AntarkyaAdaptation = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
