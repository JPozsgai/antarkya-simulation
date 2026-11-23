# Antarkya v2.2 — executable numerical specification

23 November 2026 · rules version 2.2.0 · exploratory implementation

**Current adaptation rules:** [POLICY-INFLUENCE.md](POLICY-INFLUENCE.md) specifies the full executable policy–element mapping, individual receptiveness, evolving motives/traits, bounded accumulation, reinforcement and wear-off. Its learning equations replace the earlier fixed-motive and education-risk update assumptions. All new coefficients remain explicit provisional priors.

This is the numerical rule set implemented by `model.js`, `adaptation.js`, `config.js`, `worker.js` and `visualization.js`. It replaces the earlier numerical proposal, preserved in [the v0.1 archive](NUMERICAL-PROPOSAL-v0.1.md). The agreed decisions remain in [AGREED-RULES.md](AGREED-RULES.md). A coefficient below is an explicit scenario/engineering assumption unless the country evidence identifies a sourced observation. Executable coverage is not empirical validation.

## 1. State and initialization

There are exactly 1,000 people, four principal roles, multiple organizations per category, and a monthly clock. Duration is any whole number from 6 to 240 months. Country role counts and organization/function lists are in `config.js`; all classes have at least 20 people. Primary role/employment, formal membership, support, directional trust and funding remain separate.

Every organization starts with at least one person of its principal class. Other membership sizes follow the existing skewed assignment prior. Every person has support values for all organizations; affinity need not imply membership. Homes occupy five synthetic geographical clusters; work locations belong to employers. This is not a national geographical map or a calibrated membership census.

Money is held by people, organizations, treasury, reform allocations and an outside account. Every financial flow uses a conserved transfer. RU are normalized resource units; PM are staff person-months. National GDP and background national indices stay fixed. No inflation, growth, recession or other additional economic variable is introduced.

The initial identity hashes the rules version, country, conditions and the society seed; parameter-independent characteristic streams remain separate. Random initial characteristics use a separate stream keyed by country and society seed, excluding parameter values. Each person's Dirichlet draw has its own keyed stream. Changing an override can therefore change its intended mapping without shifting everyone else's home, income, support and skill draws. The same complete initial state is cloned for baseline/reform and every repetition.

Event draws use `(event seed, replicate, month, process, stable context/actor IDs)`. Fresh runs generate fresh event seeds unless exact replay is explicitly selected. A seed fixes the draws, not a pre-scripted sequence of actions: agents respond to the evolving state, and a repeated seed reproduces those responses when the entire scenario is identical.

## 2. Nine motives and subjective decisions

Motive order is social/self, social/group, social/public; economic/self, economic/group, economic/public; political/self, political/group, political/public. All nine weights are positive and sum to one.

Draw weights from a Dirichlet distribution with concentration 6. Interest means by initial class are Citizen [.40,.35,.25], Business [.25,.50,.25], Official [.35,.35,.30], Politician [.25,.30,.45]. Beneficiary group share is `.30 + .002(kinship - 50)`; public share is `.30 + .002(public/private separation - 50)`; self is the remainder. These weak priors do not assign integrity to a class. Motives persist when employment or office changes.

Motive attachments now evolve slowly through bounded experience-weighted updates around the initial profile; they are preserved across role changes. Source credibility, receptiveness, actual exposure, diminishing returns and retention are numerically stored for each person.

Every intentional option supplies **nine explicit action-specific consequences**, through separate three-element social, economic and political arrays. They are not fixed multiples of a generic self/group/public benefit. [ACTION-CONSEQUENCES.md](ACTION-CONSEQUENCES.md) lists the action matrices and dynamic terms generated from the code.

For option a:

- Need multiplier: `q = clamp((recurring cost + .2)/(expected lawful receipts + .15 cash), .5, 2)`, denominator floor .2.
- Multiply only economic/self consequence by q. For a corrupt option, subtract `subjective expected financial risk` from that consequence, once.
- Attitude: `A = sum(weight[k] × subjective consequence[k]) - perceived effort`.
- Reference expectation N is the explicitly supplied expectation or, for ordinary integrity choices, the actor's honest/corrupt role expectation.
- Residual perceived capability C is separately represented in [0,1].
- Utility: `U = A + .5 N + .25(2C - 1) - .20 log(-log(u))`.
- Choose the maximum utility. u is a keyed draw specific to the option and encounter.

Social consequences represent effects such as esteem, solidarity or social harm; N represents expected reference approval. Economic risk appears once in attitude, not again as residual capability. Perceived control concerns access/ability, not an additional financial-risk penalty. Actual cash, legal coverage, counterpart agreement, staffing and procedures are checked separately. Actual outcomes and viewer integrity icons never provide omniscient beliefs to agents.

A failed corrupt proposal is not an integrity choice. A coerced payer is a victim, not a voluntary corrupt participant. Meaningful opportunities are recorded for actors facing integrity-related alternatives; actual completion updates their corresponding entry. Routine shopping, political voting and message-sharing do not mechanically count as recovery choices.

## 3. Relationships, encounters and information

Directional trust from a to b reads trustAB when a is the stored source and trustBA in the reverse direction. Access is `clamp(.15 × shared membership + tie strength × directional trust)`. Relationship-based procedural incentives use access above .12, never mere existence of an edge.

Positive encounters update the initiator's trust by .025 and the counterpart's by .020; adverse encounters reduce them by .080 and .040 respectively. Tie strength changes by +.03 or -.06. Support for the counterpart's organization changes by +.015 or -.04. All values are bounded. Cooperative corrupt participation and coercion have distinct labels; a coerced payer does not create a voluntary corrupt-cooperation count.

A contact samples six candidates. Its weight is `exp(-4 distance) × (.4 + affinity + .8 access)`; 15% of contacts instead use a remote pool with the distance factor set to one. Select with a keyed weighted exponential race. Administrative/work contacts use work coordinates; service access and other local contacts use home/geographical coordinates. Analytical plot coordinates never enter this procedure.

The existing activity schedules remain provisional: service demand .45/month for Citizens/Business and .12 for other classes; business/political contact .10; pressure by officeholders .20; citizen campaign contact .04 during the final six months before a competitive review. Initial economic descriptors do not become direct bribe probabilities.

Editors choose publication or withholding using their own utility. Editorial independence directly changes withholding incentives. Funding dependence is the target-related donor's actual transfers in the previous 12 months divided by estimated ordinary organizational income plus recent funding. Funding enters organizational accounts and never the public reform pool. Funding withdrawal and publication costs constrain real operation.

Each person accesses at most three stories per month from a bounded recent pool. Exposure depends on reach, local access and civil liberties. Beliefs and support update from accessed information and source trust, not hidden truth. Sharing selects at most two peers by tie strength × the **receiver's trust in the sender**; negligible/zero ties are excluded. Updates scale with that weight. Corrections and case developments retain their separate meanings. A publication is not proof; a dismissal is not evidence of a false allegation.

## 4. Expectations and institutions

A positive encounter with an organizational leader or a trusted reference (directional trust above .45) can transmit a role-linked expectation. The actor moves its norm .15 toward the accessed honest/corrupt signal (−.6 or +.6). The corresponding organizational role expectation increases by `.035 × (1 - existing strength)`. Mere repetition and coercion do not create a shared cooperative expectation.

Established honest/corrupt practice reduces the corresponding perceived coordination effort by up to 40%. Organizational expectation strengths decay by .999/month; capabilities by .998/month within their bounds. Institutionalization therefore changes subsequent choices and adaptation through accessed expectations and ease, rather than merely incrementing a label. A .65 expectation threshold is used only to report a major consolidation/erosion event; crossing it does not add a second behavioral bonus.

## 5. Staff, budgets and shared workloads

Effective organization capacity is:

`staff count × (.25 + .40 organizational skill + .35 mean skill of current principal-role staff)`.

Recruitment decisions and transfers therefore change subsequent productive capacity. They do not overwrite people's identity, home, money, motives, memories or ties. Merit enforcement uses actual record quality and operational merit coverage/capacity; rotation moves staff while informal links can persist.

Additional policy requirements retain `config.js` setup/monthly/time coefficients, scaled by `clamp(sqrt(GDP PPP/20,000), .6, 1.8)`. Monthly public revenue is 180 times this scale; starting treasury is 1,800 times it. These are modeling priors, not national budgets.

The user's mobilization is a persistent rate against additional requirements. Requested monthly disbursement is `rate × (recurring requirement + setup requirement/3 while setup remains)`. Treasury affordability constrains the actual transfer.

Funding priority is evaluated by the authorized political actor; implementation priority by each implementing leader. Prioritization uses utility evaluations, observed delivery/support and resource pressure, with stable keyed tie-breaking. Input array/menu order does not decide which reform gets first claim.

Each public organization separately evaluates reform, routine and case workload needs. Exponentials of their bounded utilities assign shares of the same monthly staff capacity. Work charges the relevant share and the common remaining stock. Audit, protection, prosecution, diversion effort and local intake also consume staff time. This prevents reform code order from exhausting all time before ordinary/case procedures can claim any. Unused reserved time may remain unused within that month.

Implementation choices are implement/selective/resist/redirect. No-resource/no-time situations wait rather than being miscounted as meaningful integrity opportunities. Selective compliance has fidelity .45; legal scope further constrains deployment. Actual diversion transfers allocation funds to the perpetrator and consumes .05 PM.

Setup needs at least three stages, accumulated setup work of 1 and 85% of setup-cost requirements. Installed capacity improves by `(.98 - current capability) × .08 × achieved work fraction`. Legal adoption does not instantly supply skill or verification.

## 6. Legal scope, country baselines and accountability

An operational tool first needs a competent organizational function, then applicable legal coverage, then trained capability, records, cash, time and actual procedure. Ineligible functions receive no authority from an unrelated capability score. Baseline applicable scope .55 and adopted intended scope .85 are explicit **common exploratory coverage priors**, not measured country effectiveness.

Individual scope uses a fixed, parameter-independent coverage draw. A covered person's operational capability is the relevant trained capability; population-average capability is coverage × trained capability. Coverage is not applied twice to the same person. Narrowing an authorized reform narrows operative scope while leaving acquired skills in place.

E/P/U evidence tags retain their original evidential meaning. Existing instrument, documented scope gap and not-yet-scoped do not mean high/low/zero success, and no numeric strength is invented from them. Country-specific operational differences come from sourced functional architecture and explicit procedural routing:

| Country/function | Executed distinction |
| --- | --- |
| Nigeria / Indonesia / China specialist matters | Covered specialist matters can use the ICPC/KPK/supervision prevention-linked body for investigation; uncovered specialist matters require a general route/referral. |
| India complaints | Lokpal-type integrity intake/referral is separate from investigation; the simulation does not create a fully operating statutory prosecution wing. |
| Peru political finance | Vote-buying signals can enter the political-finance integrity function before subsequent procedures. |
| South Africa | SIU-type civil investigation/recovery remains distinct from criminal prosecution and court determination. |
| China | Supervision-linked administrative determination is separate from criminal prosecution/courts; authority changes through personnel appointment. |
| Italy | Political-pressure conduct can use the modeled administrative route rather than presuming a particular current criminal offence. |
| Brazil / United States / Germany and other distributed functions | Prevention, investigation, audit and court roles follow the distinct configured nodes; no all-purpose agency acquires every function. |

These are simplified routing rules, not complete contemporary national offence/jurisdiction maps. Regional service origins incur .12 PM/.01 RU local intake and a subsequent-month handoff; the jurisdiction field therefore changes work and delay. Formal national/subnational scope, detailed legal thresholds and baseline financial resources still need country calibration. Unknowns retain a common visible assumption rather than becoming absence.

Complaints, audits and publications generate signals. Audits use actual covered subjects' declaration verifiability, target disclosure and operational oversight. Declaration verifiability thus enters the detection calculation, not just an outcome card. Public disclosure affects actual record visibility. Internal declaration verification does not itself publish an asset register.

Cases use oldest-due/oldest-opened order with stable IDs. Screening, investigation, criminal prosecution and determination consume distinct work/time steps; prosecution can share an existing agency's resources where no separate configured node exists. Civil recovery is not a criminal conviction. Real relationships affect incentives to delay/dismiss, without fixed class immunity.

A proven financial obligation uses modeled liability 2 RU at baseline or 3 after a selected active de jure penalty reform. Actual collection is limited by legal coverage, penalty-collection capability and at most 65% of available cash. Appropriately collected amounts and unwarranted sanctions remain separate. No exact national statutory fine is inferred.

## 7. Deployment mechanisms and feedback

| Tool | Executed causal pathway |
| --- | --- |
| Anti-corruption body | Setup, mandate coverage and acquired organizational/case capacity affect screening, routing and inquiry; encountered procedures can also produce bounded risk/control learning. |
| Merit | Review/record capability changes actual appointment selection; hired staff skill changes productive capacity. |
| Rotation | Eligible transfers change work location/staffing while pre-existing networks can persist. |
| Protection | Credible responses require legal/capability coverage and shared case time; failed protection leaves victim costs. |
| Declarations | Covered personal verifiability changes actual audit evidence access. |
| Conflicts | Relevant ties, records and covered review capability can prevent a proposed improper exchange. |
| Oversight | Finite audit/inquiry work changes signal acquisition and evidence quality. |
| Pay | Actual supplements enter eligible staff receipts; delivery capability and cash constrain payments. Delivery overhead goes to operating costs. Lawful financial security changes economic valuations. |
| Penalties | Real capability and coverage change actual collection after a decision. |
| Disclosure | Legal/operational access changes visibility available to actual scrutiny/publication. |
| Complaints | Access, knowledge, cost and protection expectations affect attempted and viable reports. |
| Education | Delivered episodes probabilistically change targeted attitude, norm, control and usable knowledge through the individual adaptation profile; no universal risk target. |

After service completion or an experienced waiting month, an affected person updates perceived access/control, trust in delivery, support for the agency and a smaller share of support for the governing party. This does not invent a belief that an unobserved official is corrupt. Honest action may therefore remain attractive through service reliability, while poor delivery creates friction that influences later choices.

Resource reviews occur every six months. The review refreshes observed delivery, experienced waiting, public support and implementing-organization resistance. Those observations enter the political actor's nine-dimensional consequences; affordability, administrative authorization and coalition consent remain necessary. A successful review can change the rate by .10. Repeated authorized narrowing can reduce scope by .10 and eventually suspend the reform. Feedback is endogenous, not an automatic policy-success multiplier.

Political support uses accessible information and affinity under the configured presidential, parliamentary or personnel-review mode. Turnover changes authority while retaining people and histories. Calendar phases and numeric political/cultural values remain explicit assumptions.

## 8. Integrity records, analytical display and major events

Keep the last 24 meaningful integrity opportunities per person, including completed corrupt participation, completed integrity choices and unresolved/failed intentions. Lifetime history is also retained. The uncertain inherited conduct prior affects initial status/lifetime history but supplies no fabricated pre-run opportunity denominator; recent class rates are unassessable at startup. Role-at-action is recorded for cumulative distribution counts. Current-class cards aggregate the recent histories of the people currently in that class; changing roles does not erase their prior conduct.

Circle is default expected integrity; one qualifying act makes a triangle. Recover only after six months without new qualifying corruption and at least three meaningful completed integrity choices. Idle time and routine purchases cannot recover integrity or replace recent opportunities.

The analytical map has four soft class-reference quadrants. Role color identifies current class; crossing a quadrant does not change membership. Radius is `.30 + .65 × recent corrupt participations/recent meaningful opportunities` when participation is positive. Otherwise a stable jitter fills the central integrity zone, radius .04–.27. Angle combines four-category affinity and weighted cooperation using two bounded passes. Neither angle, plotted proximity nor radius affects geographical contacts or agent knowledge. No baseline distribution is overlaid.

Lines distinguish cooperation, corrupt cooperation, coercion, support to an organization's representative, membership and funding. Selection highlights relevant ties; only influential actors receive full inspection traces. Four compact class cards show recent participation denominators and paired baseline differences. Pending cases remain in process details.

The open-by-default feed starts with major developments. It reports actual authority changes, substantial six-month fiscal/service/pay changes, expectation consolidation/erosion, disclosures reaching 100 distinct people and consequential repeated coordinated abuse. A potential capture scheme needs at least three connected participants across classes, repeated willing corrupt ties and at least three recent qualifying abuses of public decisions. Network density alone is insufficient. These reporting thresholds do not themselves cause behavior or prove an allegation. The full process log remains available.

## 9. Assessment and comparisons

Inputs, deployment outputs, measure-specific institutional outcomes and joint impact remain separate. Fixed capability diagnostics now use applicable function, coverage, skill/records and workload. Education instead reports the exact mean retained individual knowledge over all 1,000 people as an expected capability diagnostic; it is independent of formal adoption. Pay/appointments/collection/network continuity retain their actual-observation definitions and minimum denominators. They are read-only; reporting scores do not feed back as automatic behavioral bonuses.

The common impact denominator is eligible service, permit, tax, contract, pressure and campaign encounters. Whole-system consequences separately retain diversion, victimization, waiting, retaliation, obstruction and patronage. Class participation rates use person-opportunities, so bilateral participation cannot push a rate over 100%.

Baseline/reform branches and replicate starting societies are identical. Package impacts are paired; individual credit inside a package still requires additional comparisons. Simulation ranges are not empirical confidence intervals.

## 10. Execution, tests and remaining limits

Monthly order starts with memory wear-off and slow profile adaptation, then accounts/capacity; actor funding priority/disbursement; staff reservations and local implementation priorities; financial-expectation learning from actual receipts; encounters; services; audits/cases; information/funding; membership/staffing; political/resource reviews; integrity recovery; major-event derivation and read-only history.

Run all executable checks with:

```sh
node --test model.test.js worker.test.js run-seeds.test.js audit.test.js visualization.test.js adaptation.test.js stress.test.js
```

The causal suite holds unrelated initialization traits and keyed random draws fixed while changing a specific mechanism. Stability tests cover ten countries/all tools, extreme conditions, conserved money/shared time, 240-month Peru/ACA, repeatability, diagnostics, coercion, recovery, imports and worker lifecycle. Projection tests check behavioral radius invariance under affinity changes and confirm display independence.

Rules version 2.2.0 intentionally rejects older saved initial-state formats; silent reuse would mix different numerical rules. Recreate a scenario from its settings rather than treating an older result as a v2.2 trajectory.

Remaining limits: real country membership/role distributions, political/cultural calibration, detailed jurisdiction/law, national allocation/cost data, empirical policy/outcome validation, broad sensitivity analysis and actual Android performance/browser QA. These gaps are not resolved by engineering tests. Conceptual references remain the supplied Ajzen, Mugellini/co-authors, assessment chapter and reform-mobilization draft; none establishes these numerical coefficients.

