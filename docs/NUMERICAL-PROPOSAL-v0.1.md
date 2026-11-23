# Antarkya v2 — numerical specification for review

22 November 2026 · proposed implementation specification v0.1

The consolidated decision register remains authoritative. This document makes its mechanisms concrete enough to review before coding the v2 engine. **All numbers introduced here are proposed engineering/scenario assumptions unless explicitly identified as sourced observations.** They are not newly agreed empirical laws. The accompanying interface is a synthetic demonstration, not an implementation of these equations.

## 1. State, units and evidence status

Use 1,000 individual people and a monthly clock. Each person retains an immutable ID, principal role, home/work locations, organizational memberships, support, nine motive weights, perceived beliefs, lawful income/cost schedule, balances, formal authority, conduct history and directional relationship memories. Organizations retain IDs, category, members, leaders, mandate/jurisdiction, staff-hours, cash, operating costs, tasks and backlog. Membership, informal trust, support and funding are different edge types.

Every country input or coefficient needs `value`, `unit`, `reference_year`, `source`, `status` and optional uncertainty range. Status is `sourced`, `estimated_mapping`, or `scenario_assumption`. Null means unknown; it never becomes zero silently. Production readiness fails if a required field is null. A separate exploratory mode may substitute explicitly visible assumptions. No country ranking or prediction should be offered from that mode.

Define **1 resource unit (RU)** as one fixed baseline reference month's lawful individual income in the stylized society. Currency conversions, if used, must have a dated source and consistent base. GDP per capita PPP describes the economy; it does not determine that reference income or each household's disposable resources without a separate mapping. Preserve local-currency source amounts in metadata. Staff time is person-months (PM), with 1 PM = one worker's available modeled work-month; money and staff time are not interchangeable without wages, recruitment and training delays.

National GDP and background national indices stay fixed during a run. Individual income, organizational capacity, modeled public revenue, service backlogs and reform funding may change. An explicit outside-economy account supplies scheduled income/revenue and receives ordinary consumption/import costs; the 1,000 agents are not a closed national economy. Financial transfers between modeled accounts must sum to zero. Record destroyed resources/effort separately from transfers, fines and recovery.

## 2. Initialization and reproducibility

Build the initial society once from the country profile plus overrides and an initialization seed. Serialize the full state, not just the seed. Minimum representation is provisionally 20 persons per role; allocate the remaining 920 using empirically informed role weights with largest-remainder rounding. This oversamples small political roles; it is a simulation composition, not a population census. Country weights, organization counts, size distributions, multiple-membership probabilities and eligibility rules remain calibration gates. The mockup's 600/250/120/30 split is a **layout fixture**, identical across countries and without empirical meaning.

Place homes in a fixed stylized geographical grid and workplaces at organization locations. Sample primary employment/membership conditional on role, eligibility and organization size; sample other formal membership and support conditional on individual affinity and legal compatibility. Neither membership nor support implies trust. Until geographic evidence is selected, use a clearly labeled synthetic landscape, not a misleading country map. Randomly assigned membership means drawing from these conditional distributions, not uniformly assigning every person to every category.

Proposal for motive weights: draw nine nonnegative weights summing to one, `w_i ~ Dirichlet(kappa * mu_role)`. Start with `kappa=6` (sensitivity 3–18). Construct role means as an outer product of interest weights and beneficiary weights. For a **test fixture only**, use social/economic/political means Citizen .40/.35/.25, Business .25/.50/.25, Official .35/.35/.30, Politician .25/.30/.45; use self/group/public .40/.30/.30 for every role. All nine weights remain possible in every class. These are weak computational priors requiring review, not evidence that a class is more selfish. Hold motive attachments fixed within the first v2 run; support, beliefs and roles can change. Identify the relevant group by the current encounter's membership/affinity context rather than summing the same benefit over every group.

Create a configuration hash from the country/profile version, overrides, scenario parameters and full initial-society digest. Baseline and reform branches load byte-identical initial states. Repetitions also load that state; only subsequent event seeds vary. Paired baseline/reform runs use the same replicate event seed. Country overrides intentionally define a new configuration and society. Loading a saved scenario does not regenerate its population or automatically start it.

## 3. One choice rule for every intentional act

For person i, action a and perceived consequence k:

`A_i(a) = sum_k w_i[k] * E_i[z_k(a)] - E_i[effort_cost(a)]`.

Consequence valuations use a documented common utility scale, provisionally −1 to +1 for each dimension after declared saturation. Expected financial penalties, reputation, service benefits and group/public consequences belong here. The actor uses subjective estimates; actual world probabilities are stored separately. Avoid counting an economic cost once as money and again as an indistinguishable generic disadvantage.

`N_i(a) = sum_j ref_weight_ij * expected_approval_ij(role, a)` with reference weights summing to one. Expected approval lies in −1 to +1. This is **injunctive** expectation. Perceived prevalence `D_i(a)` is a separate belief updated by observations. It may inform perceived consequences or control where a mechanism justifies it, but never grants a second automatic norm bonus.

Let `C_i(a)` be residual perceived capability/support, in 0–1. Use `V_i(a)=A_i(a)+beta_N*N_i(a)+beta_C*(2*C_i(a)-1)`. Propose `beta_N=.5`, `beta_C=.25`, with each varied from zero to twice its initial value in sensitivity analysis. Costs, effort and expected success already represented in A cannot also enter C. C may represent remaining perceived self-efficacy/access only where this has not been represented in the consequence calculation. Set its coefficient to zero for an action if no independent residual control component can be identified. An explanatory component registry assigns each belief/cost to exactly one term. This partition must be checked per action; TPB labels alone do not prevent double counting.

Draw one Gumbel valuation error per feasible **perceived** option and choose `argmax_a[V_i(a)+tau*epsilon_i(a)]`. Proposed `tau=.20`, range .05–.60. This is utility maximization with uncertain assessments on each occasion, not a separate arbitrary corruption coin toss. A lawful option can maximize self-interest; a public motive can also rationalize an abusive action. Choosing a norm-compliant act is not automatic honesty. All acts—including complaints, sharing, organization joining, obstruction, leader choices and budget reviews—use this rule with their own option/consequence definitions.

Then apply actual eligibility, resources, counterpart cooperation, evidence and procedural constraints. An actor can wrongly believe an act feasible, form an intention, and fail. Record willingness, proposal, acceptance/refusal, completion and consequences separately. A coerced payer can minimize expected loss without being labeled a voluntary corrupt participant. An authority cannot choose a power it does not legally possess.

## 4. Encounters and bounded computation

Use sparse opportunity generation, not every possible pair. Candidate partners come from local service access, the relevant organization, existing ties, or a remote-contact pool. Candidate weight is proportional to `exp(-distance/d0) * relationship_access * jurisdiction_eligibility`, with a positive remote component where the encounter allows it. Geography changes only through constrained relocation/transfer events.

The following are proposed stress-test schedules, **not country-calibrated frequencies**. At most four primary discretionary encounters per person per month, excluding administrative queue processing. A person's overlapping activities draw on the same time budget.

| Context | Trial schedule | Actions and important separation |
|---|---|---|
| Ordinary consumption | one scheduled purchase/month | Honest baseline purchases; financial flows must not duplicate scheduled wages/sales. |
| Tax/public service | Poisson mean .5 per eligible person/month | Lawful service, request/offer of improper benefit, refusal, delay, extortion, complaint; fees/eligibility explicit. |
| Business permit/inspection | Poisson mean .5 per eligible business participant/month | Lawful compliance, lobbying where legal, bribe/proposal, pressure; counterpart jurisdiction required. |
| Political-business contact | Poisson mean .25 per eligible business/political actor/month | Lawful support or improper conditional exchange; campaign calendar affects contact opportunities, not an automatic corruption multiplier. |
| Official-political contact | Poisson mean .25 per eligible actor/month | Lawful direction, appointment, promotion, protection, interference; actual authority and costs constrain completion. |
| Voluntary organization decision | quarterly review, plus major events | Support may change before membership; applications/transfers obey eligibility, queues, notice and costs. |
| Public accountability and information | event-triggered, bounded attention | Publication, sharing, correction, complaint/referral and reaction; not each person reading every event. |

Each context must define eligible population, opportunity ID, obligation, alternatives, amounts, affected accounts, corrupt-act classification and spillovers. The source register already lists original encounters; this table does not authorize dropping them. A conduct catalog must identify a breach for private/sectional advantage independently of agent motives, and separately map that conduct to current country law. A modeled corrupt act can be outside a particular criminal offence's coverage. Ordinary Citizen–Business purchases are an honest baseline, not a rule that every possible interaction between those roles is honest.

## 5. Learning, expectation formation and institutions

For a belief b and received signal s, use `b_next=b+eta*credibility*relevance*(s-b)`, bounded to its meaningful range. Trial `eta=.15` (range .05–.35). Personal outcomes, observed behavior, attributed expectations and public allegations update the appropriate belief objects separately. A report of wrongdoing is not proof; a case dismissal is not proof the allegation was false. Actors do not see omniscient conduct records or map symbols.

Store role/action expectation strength e in 0–1, supported by accessible references and confidence. Reinforcing attributed expectation updates use the equation above. Contradictory expectations decrease e or split reference groups. Without reinforcing information, retain 99% of confidence each month (range .95–1); this is a test parameter. Repeated conduct can supply evidence about behavior without automatically supplying an injunctive expectation.

Actual coordination/effort for a role practice is `base_effort * (1-rho*e)`, proposed `rho=.40` (range 0–.70). This never waives legal eligibility, lack of funds, staff capacity, required counterpart consent or evidence. Learned perceived control moves toward experienced feasibility using its own belief update; it does not receive an additional identical effort bonus. Honest and corrupt practices use the same mechanism. There is no “after N corrupt acts, institution switches on” threshold.

For existing informal ties, keep directional trust, obligation and reliability memories. Successful willing interaction can increase trust; exploitation can decrease it. Coerced payments do not create mutual trust. New ties require meaningful contact; trial formation probability .10 conditional on a positive encounter, varied .02–.30. This is a proposed social-learning parameter, not a direct corruption contagion rate. Use bounded neighbor lists (provisional 24 salient ties/person) plus archived weaker relations. Any pruning must be explicit and must not erase memberships, financial obligations, case links or protected history. Test sensitivity before adopting the cap.

## 6. Journalism and social media

Assign media functions to existing organizations and working agents; do not add a fifth class. Potential stories compete for editorial attention, organizational resources and feasible evidence gathering. Editors and funders have the same nine-motive/TPB choice structure, so capture or interest-group representation emerges from incentives and dependencies rather than their organizational label.

A story stores claim ID, origin, subjects, underlying evidence and verification state. Public reach is bounded by organizational reach, audience connections, attention and sharing choices. Trial attention cap: 3 messages/person/month; consider at most 6 reference contacts to form that shortlist. Sharing requires an actor choice; proximity and network ties affect exposure, not automatic agreement. Publications can originate outside cases, trigger referrals, or follow case developments. Track updates, disputed claims and corrections under the original story ID. A correction need not reach everyone who saw the initial claim. Do not hardcode false claims as always more persuasive or faster-spreading.

## 7. Resources, implementation and system dynamics

For each policy p, the user selects initial mobilization `m_p` in 0–1. Proposed direct mapping: `r_p(0)=m_p`, the share of estimated additional requirements credibly mobilized. This interprets the user's probability control as the agreed initial rate; it is **not redrawn every month**. Show it in the interface as “Starting mobilization, % of estimated additional requirements.” At 100%, the estimate is funded; success is still constrained by implementation. Baseline inherited capacity and resources remain separate from the additional requirement, so they are not purchased twice.

Country/tool packages need estimated setup and recurring RU costs, PM needs, starting inherited capacity, authorized funding source, allocation recipient shares, appointment/procurement rules and legal scope. The current evidence profiles do not establish those values. Do not silently substitute workload-proportional allocation across all countries. Use explicit source-based allocations or visible scenario assumptions, with shares summing to one. Reallocations debit the donor public account/service and can create opportunity costs. Stakeholder money may fund media, CSOs or private activity but cannot directly replenish the implementation pool.

At scheduled six-month reviews, and exceptional consequential shocks, authorized budget actors choose increase, hold or decrease using TPB/utility and required approval procedures. A trial step is 10 percentage points of the estimated additional requirement (range 5–20). This is a proposal size, not an automatic adjustment. Affordability can block an intended increase; coalition/authority constraints can block passage; budget enactment and deployment have distinct dates. The original user-selected package stays fixed; endogenous formal narrowing/suspension/repeal is recorded with its lawful procedure and opposing reactions.

Represent collective stocks and flows explicitly:

| Stock | Inflow | Outflow / constraint |
|---|---|---|
| Available implementation funds | enacted disbursements, authorized transfers | setup/operating spending, lawful reallocation, diversion; no negative cash |
| Trained capacity | recruitment/training completion | turnover, retirement, reassignment, skill decay |
| Routine and reform backlog | new eligible tasks and referrals | completed tasks, documented lawful closures; one shared staff-time ceiling |
| Functional procedures | completed setup/learning | obsolescence, obstruction, formal rollback |
| Accessible information | valid publication and learning | expiry, limited attention, loss of access; corrections linked |
| Support and organized pressure | belief-driven choices/coordination | withdrawal, counter-mobilization, resource constraints |

`backlog_next=max(0,backlog+arrivals-completions-valid_closures)`. Completions are limited by funds, trained staff, system capacity, permissions and case-specific stage readiness. Recruitment and procured systems enter a pipeline, not capacity instantly. Trial setup lag 3 months, recruitment/training lag 2–6 months, monthly staff attrition .005; all require organizational evidence/sensitivity review. No exponential GDP model or universal reinforcing corruption coefficient is introduced.

Adding policies adds their distinct setup and operating costs and their tasks to the shared capacity pool. Shared infrastructure is paid once if genuinely reusable, but its throughput remains finite. Coordination overhead arises from actual cross-organization handoffs and competing approvals; avoid both a universal arbitrary package penalty and a free synergy bonus. Track routine services displaced by reform tasks. Funds spent, activities done and institutional capability remain different quantities.

## 8. Case and political processes

Use screening → investigation → decision, with separate criminal, administrative and civil routes. Each item carries jurisdiction, assigned body, evidence, deadline, workload requirement, legal options, status, reasons and linked appeal/recovery where applicable. Investigators, reviewers and decision makers may exert effort, prioritize, obstruct or redirect using TPB/utility, subject to actual capacity. Case progress is not an independent monthly sanction lottery. Closure after screening and dismissal after decision have different meanings. A successful civil recovery is not a conviction; a conviction does not guarantee collection.

Influential-actor advantages come from concrete access to controllers, resource dependence and applicable procedures. There is no fixed politician-immunity coefficient. Calculate officeholder succession, appointments, elections and leadership with country-specific authority/calendars. China must not receive a competitive national multiparty election template. Losing office changes authority/access and maybe employment; it does not delete identity, ties, history, liability or resources automatically.

## 9. Twelve tools: mechanism and outcome computation

Every package identifies original intended scope, current lawful scope, covered population and unserved eligible population. Define outcomes on a fixed reference set drawn from that scope. Rates must display numerator/denominator alongside changes. These are proposed operational computations of the already accepted indicators, not indicators claimed verbatim from the literature.

| Reform | State/process changed by reform | Proposed outcome numerator / denominator |
|---|---|---|
| Anti-corruption body | mandate, authority, skills, independence interfaces, cross-body capacity | Mandate-defined reference matters where the assigned function can actually be exercised / all reference matters, stratified by influential opposition. |
| Merit recruitment/promotion | published criteria, access to selection, review, decision constraints | Covered completed appointments where criteria govern and connections do not override / covered completed appointments; show vacancies and unfilled posts separately. |
| Rotation | actual transfer schedules, eligibility, replacement capacity and control paths | Targeted high-risk functions still controlled by the original informal network / targeted functions undergoing personnel change; lower is better. Also report functions not rotated. |
| Reporter protection | protected scope, remedies, timely intervention and enforcement | Standardized credible-threat situations without unremedied retaliation / comparable threat situations; distinguish eligibility and timely remedy. |
| Financial declarations | coverage, access, reliable records, checks and follow-up | Covered financial positions independently verifiable / all covered financial positions. Filing alone is output. |
| COI disclosure | identifiable relationships, disclosure, review/management authority | Covered material-conflict situations identifiable and actionable / covered material-conflict situations. Also report conflicts missed because coverage was narrowed. |
| Oversight | reviewer competence/access, workload and corrective authority | Reference irregular decisions detectable with an appropriate correction available / reference irregular decisions; report false adverse action on lawful controls separately. |
| Remuneration | lawful pay schedules, reliability, actual receipts and career rules | Target personnel reliably paid enough for recurring costs / all target personnel; “reliable” provisionally means paid on time in at least 5 of the last 6 months. Short windows are not rated. |
| Financial penalties | lawful penalty schedule, decision route, collection and affordability | For each specified violation, expected amount appropriately imposed and collectible; RU, not a generic percent score. Show likelihood and amount separately. |
| Proactive disclosure | timely accessible adequate information, discoverability | Covered decisions practically scrutinizable / all relevant covered decisions; show total decisions outside current scope. |
| Complaints | eligibility, channels, cost/time, recipient competence | Intended users able to submit a viable complaint within provisional 1 month and .10 RU / intended users in fixed situations. Choosing to report and subsequent action are separate. |
| Education | comprehension and usable obligations/channel knowledge | Correct role-specific diagnostic responses / fixed diagnostic items; attendance is output. |

Diagnostics use a frozen copy of state and their own RNG stream. They must not mutate beliefs, trust, evidence, cash or the simulation RNG. Use 100 fixed reference situations per relevant tool as a trial budget, stratified to include low/high-power opposition and scope groups; report uncertainty. When fewer real observations exist, distinguish diagnostic capability from realized experience. Zero denominator returns **not assessable**, not zero or 100%. Suppress a realized percentage with fewer than 20 eligible observations and show the count instead; this is a reviewable display rule, not a claim of statistical sufficiency at 20. For month-level charts, use a trailing 6-month window plus run-to-date counts.

For each selected tool show inputs (formal provision/scope, funds and staff versus requirement), outputs (activities and actual scope/coverage/fidelity), then the specified institutional outcome. Provide a concise explanation grounded in recorded events, distinguishing correlation/mechanism evidence from causal attribution. Do not assign an effect simply because the policy checkbox is selected.

## 10. Impact and comparisons

Scenario-level impact compares completed corrupt acts per relevant opportunity, by conduct type, against no-new-reform baseline. Separate offers, coercion, completed voluntary acts, allegations, detected cases and sanctions. Also compare victim burdens, diverted resources, service delays/denials and group/spatial distributions. A transfer of a bribe/fine/recovery is not automatically a net social loss. Record displacement to other practices, organizations or places and impacts outside selected-policy scope.

The principal comparison is paired `reform-minus-baseline` for the same initial society and event-seed replicate. Show absolute difference, both levels and denominators. If baseline=0, percentage change is undefined. One run is a scenario illustration, not an expected effect. Proposed first device benchmark: 120 months, one visible trajectory and its hidden baseline; optional 10 repetitions after the engine passes Android performance testing. A range across repetitions is labeled a simulation range, not an empirical confidence interval. The interface mockup does not perform these runs.

For combinations, report joint impact. Individual causal credit requires additional leave-one-out or factorial comparisons and an explicit interaction interpretation. Institutional outcomes can improve without near-term corruption reduction. Detection can rise while underlying conduct falls; this is not a contradiction.

## 11. Monthly order and random streams

1. Apply scheduled formal changes, recurring income/costs, enacted funding and pipeline completions.
2. Generate eligible ordinary/reform task arrivals and geographically/organizationally constrained encounter opportunities.
3. Process encounters in a keyed randomized order; record choices, attempted/completed acts, transfers and effects. Prevent staff/time double spending.
4. Process bounded information publication/exposure and case work using shared remaining capacity. New work that misses this month's processing cutoff waits until next month.
5. Update accessed beliefs, expectations, relationships, support and membership procedures; execute eligible authority/budget decisions. Newly enacted future disbursements cannot fund earlier work retroactively.
6. Reconcile accounts and stocks, record indicators, update integrity display, emit important event updates and snapshot chart data.

Use a counter-based or hash-keyed RNG by `(replicate_seed, month, process, stable actor/opportunity ID, draw purpose)`. Separate initialization, encounters, choice errors, world outcomes, information and diagnostics. Divergent policy branches must not shift unrelated draws by consuming a single shared RNG sequence. New endogenous events get branch-qualified IDs. Common shocks can still be paired; branch-specific events need not have a false counterpart. Rendering, charting, pacing and inspecting do not draw simulation randomness.

## 12. Interface behavior and limits

Color encodes principal role. Circle is default expected integrity/health; triangle follows one qualifying modeled corrupt act by that agent. Victimization, failed offers and missing information cannot alone switch the icon. Recover circle only after at least six months without a new qualifying act **and at least three meaningful integrity choices during that period**. Idle time and routine purchases do not qualify. Retain the history. Icons reflect model truth for the viewer; agents do not observe them.

Inspect at most eight highlighted actors at once: provisional union of top network-centrality and current decision/resource-leverage actors, with an explicit reason for inclusion. Use inexpensive weighted degree each month and sampled centrality less often, not all-pairs centrality every frame. Network filtering changes display only. Keep fixed coordinates; line thickness indicates tie strength. Clickable event cards select linked actors, organizations and ties, with stable event-family IDs and update IDs.

Proposed event display: retain 200 recent cards in the visible feed, keep significant histories in results/export, and group minor repeated occurrences into counts without erasing their underlying records. Feed open by default; policy explanations collapsed by default. The map and controls need readable legends, keyboard focus, accessible text alternatives and mobile tap targets. Do not depend solely on color or tiny triangles to convey the selected actor's role/status.

Save schema versions, full initial state, country observations/overrides, policies, requirements/rates and completed results on-device. Local persistence can fail; show errors and provide JSON backup. Imported JSON must pass size, schema, numeric-range and reference-integrity checks, with no execution of embedded content. Loading is review-only until Run. Live checkpoint/resume is outside the agreed scope.

## 13. Acceptance gates before production

- **Accounting:** internal transfers conserve money, no negative account/staff-time stock, no double income, penalties/recoveries distinct from losses, shared tasks cannot exceed common capacity.
- **Behavior:** all roles support all nine motives; subjective beliefs can diverge from outcomes; bilateral refusal/coercion and legal authority behave as specified; repetition alone does not create an institution.
- **Policy:** zero new funding does not erase the baseline; fully funded tools can fail through real constraints; added policies increase requirements; no automatic success scalar; country jurisdiction and procedures retained.
- **Comparison:** exact initial-state identity across branches/repetitions; save/load preserves that state; pacing, map filters, diagnostics and inspection cannot change outcomes.
- **Information and assessment:** claims/proof/dismissal remain distinct; scope/denominators and missing data are explicit; protected-victim status and icon recovery verified; joint impacts not attributed to individual tools without comparisons.
- **Sensitivity:** vary choice error, norm/control weights, learning, institution ease, media reach, task rates, costs/capacity and country mappings; report reversals/instability before claiming robust findings.
- **Device:** benchmark on an actual Android browser with 1,000 persons, sparse networks, paired 120-month runs and repetitions. Aim for responsive controls with worker/chunk execution and bounded memory; report measured times and memory before fixing defaults. No Android/browser performance claim is made at this stage.

## 14. Evidence and remaining decisions

The country JSON and readable profiles supply dated macro descriptors and bounded institutional baselines. Missing political/culture scores, class/membership distributions, resource allocation, costs and country-specific procedures remain explicit calibration work. Generic numbers above form a testable proposal, not a substitute for those country estimates. The interface may demonstrate the controls now without implying those gaps are solved.

Conceptual sources: [Ajzen, 2020: doi 10.1002/hbe2.195](https://doi.org/10.1002/hbe2.195), on TPB; [McFadden, economic choices](https://eml.berkeley.edu/wp/mcfadden0300.pdf), on random utility; [Villeneuve, Mugellini and Heide: doi 10.1007/s10610-019-09410-w](https://doi.org/10.1007/s10610-019-09410-w), for policy classification; Joseph's *The Realistic Reformer* draft for mobilization/reaction feedback; and [*Recalibrating anti-corruption assessment*: doi 10.4337/9781035337712.00043](https://doi.org/10.4337/9781035337712.00043), for the assessment architecture. The equations, parameters, display thresholds and specific operational metrics here are modeling proposals; those publications are not claimed to establish their numeric values.
