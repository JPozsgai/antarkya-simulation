# Policy influence and individual adaptation — executable rules v2.2

23 November 2026. This document describes actual code in `adaptation.js` and the event hooks in `model.js`. All numerical ranges, half-lives, learning rates and susceptibility functions below are **explicit exploratory priors**, not empirically established national or psychological effect sizes. The mapping is implemented for all twelve selectable reforms. It is not a claim that all twelve will succeed or reach every agent in every run.

## 1. Separate the physical intervention from the behavioral response

Selecting a reform changes its formal arrangements. Funding, setup, staff time, legal scope and organizational responses determine what actually operates. A person can then encounter a teaching session, intake instructions, an appointment, verification, an audit notice, a payment, a protection response or an accessed publication.

A selected policy alone cannot create a learning episode. `Simulation.operatingPolicy` requires the appropriate recipient allocation to be installed, active and recently delivering work. `Simulation.expose` is called at an actual encountered procedure. Independently experienced accountability also has a separate `experience` channel; it is not a thirteenth selectable policy.

Behavior combines nine overlapping social/economic/political × self/group/public attachments, subjective consequence evaluation and financial expectations, TPB reference expectations/control, role-linked institutions and actual feasibility constraints. This mapping does not replace those processes with a single corruption probability.

## 2. Full policy mapping

Percentages below are maximum **retained direct response strengths for the named element**, not the probability of corrupt conduct, the fraction of a country converted, or an empirical policy effect. The first substantive exposure can draw within the same element-specific maximum. Repeated exposure has diminishing new-learning capacity and can restore part of a previously retained effect. Empty direct mappings are intentional: actual money or access to information should not be accompanied by a fabricated generic honesty bonus.

| Policy | Direct influence ceilings | Eligible decision contexts | Reference half-life | Encountered channel | Actual institutional pathway |
| --- | --- | --- | --- | --- | --- |
| Anti-corruption body | Expected accountability cost: 0–25%; Lawful/reporting capability: 0–15% | integrity, report, refuse, recruit, implementation, case, retaliation | 10 months | Communicated screening/inquiry and actual staff training | Mandate, inquiry capacity, referrals and shared case work |
| Recruitment and promotion | Perceived reference expectations: 0–12%; Lawful/reporting capability: 0–15% | recruit | 12 months | Experienced appointment/review procedure | Actual selection and the competence of appointed staff |
| Staff rotation | Perceived reference expectations: 0–10% | integrity, case | 8 months | Actual transfer and new workplace induction | Changed staff locations and access; existing ties survive |
| Protect reporting persons | Lawful/reporting capability: 0–25%; Expected reporting safety: 0–35% | report, refuse | 8 months | Personally experienced protection or failure | Timely protection, staff work and actual victim costs |
| Asset, liability and gift declarations | Expected accountability cost: 0–15% | integrity, report, refuse, recruit, implementation, case, retaliation | 10 months | Personally communicated verification | Covered personal records used in real scrutiny |
| Conflict-of-interest disclosure | Perceived reference expectations: 0–10%; Feasibility of improper conduct: 0–25% | integrity, recruit, implementation | 10 months | Experienced conflict review or blocked exchange | Records, applicable review and actual prevention |
| Audits and investigations | Expected accountability cost: 0–30% | integrity, report, refuse, recruit, implementation, case, retaliation | 8 months | Communicated audit/inquiry; never hidden audit truth | Finite scrutiny, evidence quality and corrective work |
| Remuneration and incentives | None |  | 12 months | Actual pay receipts inform experienced financial security | Conserved supplements and actual income/cost valuations; no honesty bonus |
| Financial penalties | Expected accountability cost: 0–40% | integrity, report, refuse, recruit, implementation, case, retaliation | 8 months | Observed actual liability and collection | Lawful liability, collectible resources and collection capacity |
| Proactive public disclosure | None |  | 8 months | Accessed publications enter ordinary credibility-weighted belief learning | Real record visibility; no generic persuasion bonus |
| Reporting and complaints | Lawful/reporting capability: 0–30%; Usable knowledge: 0–20% | report | 8 months | Encountered reporting instructions and actual intake | Channel access, monetary cost and competent recipient |
| Awareness and education | Evaluation of corrupt conduct: 0–30%; Perceived reference expectations: 0–20%; Lawful/reporting capability: 0–25%; Usable knowledge: 0–35% | integrity, report, refuse, recruit, implementation, case, retaliation | 6 months | Delivered teaching/messages with a known source | Funded setup, staff time, content delivery and coverage |

For the anti-corruption-body policy, the control response is specifically restricted to reporting and case-handling contexts; its accountability-cost learning can inform the broader integrity contexts. Other context restrictions are executable in the mapping. Education targets the acceptability/evaluation of corrupt options, perceived reference expectations and perceived ability to act lawfully/report/refuse. It does not directly write organizational expectations or create an institution.

The combined direct-response bounds for overlapping policies are separately defined by element: attitude .45, perceived norm .45, lawful/reporting control .50, improper-action control .50, accountability-cost learning .60, knowledge .60 and reporting-safety learning .60. These bounds prevent unrelated reforms from generating an unbounded sum on one belief. They do not constrain genuine changes in actual legal powers, resources, personal experience or institutional environments to the same percentage.

## 3. Every agent has an executable adaptation profile

`createInitial` calls `Adaptive.initialize` once per agent. Its separate keyed random stream does not shift homes, income, support or motive draws. Each profile stores:

- Original motive weights and skill, plus current motive weights and actual skill.
- Baseline and current openness, learning and retention traits. Initial trait values are individually drawn in [.20,.80]; these are relative model traits, not test results or Big Five personality estimates.
- Baseline knowledge, subjective accountability-cost expectation and a separately drawn initial reporting-safety belief in [.20,.80].
- Expected lawful monthly receipts, initialized from scheduled income and subsequently learned from actual receipts.
- Nine numerical salience memories, a feedback memory and policy-specific exposure memories.
- For each encountered policy and targeted component: current retained level, historical peak, exposure count, accepted count and, where applicable, the experienced evidence target.
- A last-exposure trace containing event/source/month, credibility, delivery quality, uptake probability, accepted/rejected outcome, available cap, new gain, restoration and retained level.

The profile is serialized and validated. Version 2.4 initial-state imports verify the exact reconstructed pre-policy snapshot, including real modeled exposure and experience histories; they do not require empty memories or unevolved traits. Live histories cannot silently masquerade as a pristine society. Current influential-agent inspection shows the numerical traits and component histories; complete results additionally export all 1,000 final agent profiles, not just the highlighted eight.

## 4. Agent-specific receptiveness

For an actually delivered episode, each targeted component obtains a separate uptake draw and conditional magnitude draw. The actor's initial class is not used as a direct honesty or persuasion coefficient.

Define P as the person's current public-oriented motive share; E as economic/self weight; H as the recent share of their own meaningful opportunities involving corrupt participation; J as the strength of their currently honest reference expectation; K as current usable knowledge; and T as experienced delivery trust.

The bounded alignment term is:

- Accountability-cost learning: `alignment = clamp(.45 + .40 E + .15 K)`.
- Attitude/norm learning: `alignment = clamp(.25 + .35 P + .30 J - .20 H)`.
- Other targeted learning: `alignment = clamp(.35 + .35 K + .30 T)`.

`uptake probability = clamp((.10 + .55 openness + .20 alignment + .15 learning) × source credibility)`.

`conditional strength = clamp(.25 + .45 learning + .30 alignment)`.

A keyed draw determines uptake. For an accepted episode, a separate uniform draw in [0,1] is multiplied by conditional strength and the quantity/quality actually delivered. Credibility therefore governs uptake; implementation quality governs the delivered dose. Rejection produces no component gain. Existing source trust and organizational affinity supply the actor's known source credibility, rather than hidden model truth.

Ordinary accessed news also uses the recipient's openness and learning through `messageRate`, in addition to source trust and supplied evidence. Relevant reference reactions retain their own directional-trust pathway. A message about another person's conduct is not proof of that conduct.

## 5. Diminishing returns, reinforcement and wear-off

For an element with maximum M and n prior substantively received episodes:

`new-learning cap(n) = M × max(.05, .70^n)`.

For education attitudes, this gives initial caps of .30, .21 and .147. After repeated exposure the cap retains a small floor of 5% of its original maximum. This allows a later change in receptiveness or credibility to matter; an initially resistant person does not become permanently incapable of learning. A retained ceiling is still necessary because diminishing exposure alone cannot prevent cumulative conversion.

Let I be the accepted intensity after individual strength, delivery quality and the random magnitude draw:

`new gain = available cap × I`.

`restoration = .35 × I × max(0, historical peak - currently retained level)`.

`new retained level = min(M, retained level + new gain + restoration)`.

All delivering organizations share the same policy/component memory for an agent. Renaming a source, changing office or restarting a programme does not reset fatigue or create a fresh cap. Exact repeated event IDs are deduplicated; bounded event lists are retained, while lifetime exposure counters and component ceilings persist.

Each month, retained influence decays by `exp(-ln(2)/half-life)`. The individual half-life is the policy reference half-life × `(.5 + current retention trait)`. Reinforcement can maintain earlier gains while additional persuasion remains small. Withdrawal or formal suspension stops new policy episodes; it does not instantly erase memories. Idle time does not clear conduct history, supply integrity choices or recover an integrity icon.

For accountability-cost and reporting-safety evidence, new accepted information updates the previously retained target gradually rather than replacing the entire earlier history. A personally experienced failure can therefore reduce expected safety or liability. The direction follows the information actually experienced, not an assumption that every policy episode is favorable.

## 6. Where the retained influence enters decisions

The nine motive weights still evaluate the action's separately specified consequences. Financial pressure uses expected lawful receipts learned from actual payments, available cash and actual recurring costs. Expected accountability cost is subtracted once from the economic/self consequence. Generic knowledge no longer mechanically multiplies the expected penalty.

Education's attitude response moves the action-specific evaluation of a corrupt option partway toward a more unfavorable reference value. The change is a fraction of the remaining distance to that reference, not 30 percentage points of the corruption rate. Perceived norm moves toward disapproval of corrupt conduct or approval of the relevant lawful action. Control responses change the perceived ability to carry out the specifically targeted actions; they do not confer actual money, authority or counterpart consent. Conflict-review experience can reduce perceived feasibility of an improper action.

Reporting-channel knowledge is queried only in reporting contexts. Training about intake does not automatically increase knowledge for every unrelated decision. Reporting fear uses the person's own safety belief and experienced protection, never an exact read of true hidden protection capacity. Actual protection still depends on real scope, capability, staff time and outcome.

Accountability-cost learning is routed through the single `riskExperience` path. A communicated event is attributed to an applicable recently operating procedure, or to ordinary experience; the same event does not also receive the previous generic risk increment. Education no longer pushes everyone toward an arbitrary 30% risk estimate. One communicated decision uses either the attributable policy risk pathway or the ordinary experienced-information pathway, never both; a person cannot relearn a personally experienced decision as a second public-message cost increment. There is no generic extra norm/control bonus for penalties or remuneration.

The numerical decision trace records the base attitude/norm/control, the applicable retained influence and the final values used in utility maximization. Display controls and inspection never execute a learning update.

## 7. Characteristics evolve through history and environment

Current motives are no longer frozen. Carried-out decisions make their evaluated domains salient; service experiences, financial shortfalls, actual work and accessed reference/information reactions supply further feedback. Each salience update is `.08 × credibility × (experienced salience - existing salience)` and salience fades by .99 per month.

The moving motive target is proportional to `original weight[k] × exp(.35 × salience[k])`. Each month current weights move .002 toward the normalized target, then renormalize. All nine remain positive. This is a slow, bounded change around the original individual profile, not a class change or an instruction that every agent eventually becomes public-oriented.

Openness moves .01/month toward a target based on experienced delivery trust and own conduct history, within .15 of its initial value. Learning and retention traits change more slowly (.005/month) in response to experienced feedback, with bounded deviations from their original values. Professional skill improves only through performed work/training, at `.003 × work time × remaining skill gap`, up to .20 above initial skill and never above 1. Training cannot erase existing expertise.

Expected lawful receipts move toward actual total monthly receipts at rate `.05 + .25 × current learning`. Supplements count as part of that month's actual receipts. They are not treated as a second separate low-income observation, and transfers still conserve money. The resulting financial expectations enter the agent's subjective economic calculation.

Baseline beliefs, role expectations and actual environments can evolve separately from retained policy influence. The direct-learning bounds are not a hard-coded floor on corruption or a claim that substantial social change is impossible. They prevent repeated programme delivery from mechanically manufacturing complete conversion.

## 8. Assessment, observability and tests

Education's outcome now uses the exact mean retained modeled knowledge across all 1,000 agents as an expected capability diagnostic. It is not an observed national test result, and expanding formal education scope cannot increase it before anyone learns. The readout changes continuously with retained learning and wear-off. Other tools retain their measure-specific structural/realized outcome definitions.

`adaptation.test.js` verifies initialization, every policy mapping, no selection-only learning, varying susceptibility, separate uptake/magnitude draws, shared diminishing caps, bounded combinations, wear-off, reinforcement, late learning after resistance, contradictory experience, evolving motives/traits, skill and financial expectations, context targeting, real decision effects, replay, subjective reporting safety and long-run continuous intervention. The complete regression/causal/display/worker/stability suite must also pass. A 1,200-month isolated reinforcement stress check is separate from the application's maximum 240-month scenario duration.

The theory and evidence inform the choice of mechanisms, not these numeric priors. Relevant conceptual sources remain Ajzen's TPB intervention guidance (https://people.umass.edu/~aizen/pdf/tpb.intervention.pdf), the supplied policy-classification/assessment sources and reform-mobilization draft. Empirical calibration and systematic sensitivity analysis remain necessary before interpreting these simulations as country-specific policy predictions.


## v2.4 accountability clarification

The direct policy-element ceilings above remain unchanged. The relative accountability-cost belief now contributes explicit financial, reputational and career costs to the corresponding self-regarding motive dimensions, once per dimension. Observed adjudication, persistent assessed financial obligations and actual collection are distinct from direct persuasion and are specified in [DYNAMICS.md](DYNAMICS.md). No hidden capacity or violation truth enters a person’s information. The additional consequences are normalized scenario coefficients, not calibrated national effect estimates.
