# Antarkya version 2: consolidated rules and decision register

Discussion checkpoint: 22 November 2026, revised after the agreement on stable geography. This version incorporates the decisions made after the first consolidation and the audit of the original description. It does not implement the simulation or finalize its interface.

**Status convention.** “Agreed” records decisions explicitly accepted or stated by the user. “Consequence” explains how those decisions fit together and remains reviewable. “Open” identifies an unresolved model choice. Supporting suggestions from earlier replies are not treated as separately approved numerical rules. No numerical coefficient, country value, or policy effect is empirically calibrated by this document.

## Accepted amendments — 23 November 2026

These later user instructions resolve the corresponding earlier open questions and govern the current draft. Exact numerical coefficients remain modeling assumptions, separately documented for review in [POLICY-INFLUENCE.md](POLICY-INFLUENCE.md).

**Agreed AM01 — The full decision framework remains.** Decisions combine TPB with subjective utility maximization and the nine social/economic/political × self/group/public interests, role expectations, experience and practical constraints. Policy mapping must not narrow the model to TPB alone.

**Agreed AM02 — Policy- and element-specific probabilistic influence.** Each intervention targets only decision elements for which it has a relevant mechanism. Influence magnitude is drawn within a bounded range and interacts with the individual. Maxima differ by policy and element; 0–30% was an education-attitude example, not a universal policy-effect coefficient.

**Agreed AM03 — Numerical individual receptiveness.** The probability and strength of an agent's response depend on actual stored characteristics, interests, beliefs and history. Profiles and updates must be constructed and used by the code, rather than supplied as narrative descriptions.

**Agreed AM04 — Characteristics evolve.** Individual characteristics can change through history and environment. Intervention effects can wear off without reinforcement. Repeated interventions can continue to matter while their additional influence decreases.

**Agreed AM05 — Bound repeated direct influence.** Repeated delivery must not mechanically produce near-complete conversion by the end of a simulation. Diminishing influence, retention/decay, reinforcement and agent differences must be represented together. Exact ceiling and decay functions remain provisional numerical specifications, not empirically established effects.

**Consequence AM06 — Institutional and cognitive pathways remain distinct.** Real pay, legal powers, procedures, records, constraints and outcomes operate alongside changes in perceptions. The same consequence is not assigned multiple generic attitude/risk bonuses. A policy without a justified direct influence on an element receives no such direct bonus.

**Implementation checkpoint AM07.** The v2.2 review draft implements these mechanisms in `adaptation.js`, through encountered-event hooks in `model.js`, with inspection/export of numerical profiles and controlled tests. The draft is not yet a published or empirically calibrated national policy model. Publication remains separate from preparing the review version.

## 1. Purpose, scale, and time

**Agreed R01 — Purpose.** Simulate how corruption and corruption control develop through individual conduct, organizational relationships, institutionalized role expectations, and collective feedback. Country selection and anti-corruption reform selection are central to the intended user interaction.

**Agreed R02 — Population.** Begin with 1,000 individual people classified by principal role: Citizen (primarily outside business/government roles), Business (owner, manager, or employee), Official (public servant), and Politician (officeholder or candidate). Organizations aggregate these individuals; they are not another population of member agents. Composition is country-informed, with minimum representation for smaller classes so organizational interactions can function. Counts are a scaled simulation composition, not automatically national population percentages.

**Agreed R03 — Calendar.** One simulation round represents one month. A month can contain multiple encounters. Investigations, recruitment, organizational adaptation, and other processes can continue across months.

**Open for specification/calibration.** Exact class counts, minimum representation and any aggregation weights; monthly encounter scheduling and frequencies; default and permitted run durations. The user can choose duration in months.

## 2. Organizations, membership, support, and geography

**Agreed R04 — Organizational categories.** Use multiple distinct organizations within four corresponding categories. The table describes typical correspondence, not exclusive membership. Each organization has leadership and other members; authority and member influence depend on its procedures and country conditions. Category and stated mission do not determine whose interests the organization actually advances:

| Agent class | Corresponding organizational category |
|---|---|
| Citizen | Civil society organizations |
| Business | Business organizations |
| Official | Public agencies |
| Politician | Political parties |

**Agreed R05 — Membership and affinity are distinct.** Begin with existing organizations. Formal membership is separate from affinity/support. Agents may support organizations across organizational categories without becoming members. Formal membership can also cross categories where legally and practically compatible; principal role, membership, and support remain separate attributes. Membership and affinity are initially randomized using empirically informed probabilities, with individual and class variation. Neither uniform random assignment nor independent membership/support draws are required.

**Agreed R06 — Membership and support evolve.** Experience, information, and affinity can affect subsequent support and membership. Joining, leaving, appointment, and transfer must respect the relevant eligibility, procedures, costs, and practical constraints. Organizational relationships do not change freely and instantaneously merely because an attitude changes.

**Agreed R07 — Geography matters.** Agents have relatively stable home and organizational locations. Local visits and remote contacts replace random monthly wandering. Proximity affects local encounters and service access; organizational ties and media can connect distant agents. Temporary visits do not relocate the person. Changes such as employment or agency transfers can prompt relocation subject to practical constraints. Informal cooperation does not automatically move agents into geographic clusters. Exposure permits influence without guaranteeing agreement.

**Open for specification/calibration.** Organization counts and sizes, permissible membership combinations and nonmembership, admission/exit procedures, leadership selection, support updating, geography resolution, contact frequencies, and relocation costs. The two broad hierarchy levels and cross-category membership are settled; their numerical distributions are not.

## 3. Motivational attachments

**Agreed R08 — All classes have the same possible motivational dimensions.** Every agent can be driven by social, economic, and political interests, oriented toward individual/self, group/factional, or societal/public/universal beneficiaries. This produces nine possible attachments:

| Interest | Individual | Group | Society |
|---|---|---|---|
| Social | Self-directed social interest | Group-directed social interest | Public-directed social interest |
| Economic | Self-directed economic interest | Group-directed economic interest | Public-directed economic interest |
| Political | Self-directed political interest | Group-directed political interest | Public-directed political interest |

**Agreed R09 — Heterogeneity.** Attachment strengths differ randomly between individuals and systematically in their distributions across classes. No class exclusively owns one motivation or beneficiary level.

**Consequence R10 — Motives do not classify conduct.** Economic interests cannot automatically mean corruption, and public-oriented interests cannot automatically establish integrity. Tangible/intangible gains, the recipient of gains, the agent's motivation, and whether conduct constitutes corruption are different properties.

**Open.** Attachment distributions and correlations; numerical normalization and update coefficients for evolving attachments (see the later amendments); how an agent identifies the relevant group when several affiliations exist. Country-wide economic resources must remain distinct from an individual's valuation of economic consequences.

## 4. Decision making: TPB and subjective utility

**Agreed R11 — Subjective evaluation.** Agents evaluate possible conduct according to their own perceived consequences and costs. Actual outcome probabilities belong to the model world and need not match an agent's beliefs.

**Agreed R12 — TPB structure.** For a specific action:

1. Attitude reflects the agent's beliefs about consequences and the value attached to those consequences.
2. Subjective norms reflect perceived expectations of relevant references and the significance of those references to the agent.
3. Perceived behavioral control reflects perceived feasibility, obstacles, and assistance.
4. These contribute to intention.
5. Actual opportunities, constraints, and outcome probabilities determine what conduct occurs and what follows.

**Agreed extension to R12 — Choice rule for all agents.** Embed subjective utility maximization within the TPB structure for all agents' decisions, including exchanges, reporting/sharing, joining organizations, and resource reviews. Attitudes, reference expectations, and perceived control shape assessments of the available options. The actor chooses the greatest assessed utility. Utility reflects its nine attachments and can include benefits to others. A random-utility mechanism represents uncertainty in information and valuations while retaining maximization on each occasion. Avoid counting the same consequence twice. Routine practices can make choices predictable. Mechanical accounting, elapsed time, and case progress follow their process rules rather than making choices.

**Agreed extension to R12 — Two beliefs.** Keep perceived common behavior distinct from perceived expectations of relevant references. Observation and information can update either without automatically changing both.

**Agreed R13 — Learning and limited information.** Experience and accessed information can update beliefs and expectations. Agents do not automatically know the simulation's true corruption prevalence, implementation quality, or outcome probabilities.

**Consequence R14 — Separate action stages.** Willingness, proposals, acceptance/refusal, completed conduct, and subsequent outcomes require separate records. A failed bilateral proposal cannot establish that both agents preferred honesty. An extortion victim's payment cannot alone establish voluntary corruption by the victim.

**Open for specification/calibration.** Action-specific utility functions and uncertainty distributions, belief initialization and learning rates, reference weights, credibility updates, and mechanisms linking actual constraints to completion. The combined TPB–utility approach and probabilistic choice through uncertain assessments are agreed. Empirical and assumed coefficients must be distinguished.

## 5. Institutionalization

**Agreed R15 — Definition.** Conduct becomes institutionalized when agents associate roles with behavioral expectations, accessed through information about what relevant references expect in encounters. Stronger expectations indicate stronger institutionalization of those role characteristics.

**Agreed R16 — Effect.** Institutionalization reduces effort and coordination costs for following a particular practice in a particular role, through familiar procedures and established relationships. Changing practices may initially require learning or new coordination. This affects actual difficulty and perceived control while other resource and cooperation constraints remain. Both corrupt and integrity-supporting expectations can institutionalize. Expectations may conflict across organizations and references.

**Consequence R17 — Repetition is insufficient alone.** Repeated conduct matters through its contribution to role expectations and their reproduction. An action count by itself is not an institution. Easier compliance should be distinguished between perceived ease and actual reductions in practical difficulty.

**Open for specification/calibration.** Evidence and updating rules for expectation strength, reference importance, transmission, persistence and erosion, and the magnitude of cost reductions. The practical mechanism is agreed; its numerical function is not. No fixed action-count switch is adopted.

## 6. Country profiles and the inherited national architecture

**Agreed R18 — Compact country conditions.** Retain five substantive domains, with a small number of meaningful underlying measures rather than a large unrestricted parameter list:

| Domain | Content to represent |
|---|---|
| Economic conditions | GDP per capita as the principal resource indicator; exact series and reference year remain open. |
| Business conditions | Practical conditions for formal business activity. The choice of current comparable measure remains open. |
| Political conditions | Civil liberties, political representation, and electoral integrity. |
| Legal and administrative conditions | Rule of law and quality of government, with administrative impartiality distinguished where needed. |
| Sociocultural conditions | Kinship obligations, informality, and public/private separation. |

The renamed domains organize the user's requested concepts; they do not authorize a single deterministic national culture score or a fixed GDP-to-corruption equation.

**Agreed R19 — Existing anti-corruption architecture.** Each profile also estimates the country's current national anti-corruption arrangements: relevant functions, institutional relationships, authority, and implementation capacity. Keep formal provisions distinct from practical operation. Resource distribution follows prevailing country arrangements and patterns rather than a universal workload-proportional allocation.

**Agreed R20 — Simplified organizations.** Represent that architecture through simplified organizations corresponding to consequential real-world institutional functions and relationships. One organization can have several functions. Preserve important differences such as concentrated versus distributed responsibilities without recreating every national institution.

**Consequence R21 — Evidence status.** Country baselines need a reference date, sources, and clear distinctions between observed values, proxies, and estimates. Agent and organization heterogeneity remains possible within a country profile. Architecture is a compact institutional description, not necessarily a sixth scalar country score.

**Agreed additions — Countries, initial conditions, and overrides.** Use Nigeria, South Africa, Indonesia, India, China, Peru, Brazil, United States, Germany, and Italy. Italy replaces the previously proposed Japan. Profiles are editable estimates: users can override calibrated conditions before initialization. Agents start with heterogeneous prior experience and established corrupt and integrity-supporting role expectations, informed by country and organizational evidence. For a chosen configuration, preserve the same initialized society across baseline, reform, and repeated runs. Changing setup conditions creates a new starting configuration. Record source values, source dates, estimates, and user overrides.

**Agreed addition — Economic scope.** National economic indicators such as GDP per capita remain fixed background conditions during a run. Agents' resources, organizational capacity, and service outcomes evolve. The model does not infer national GDP growth from its resource balances.

**Open for specification/calibration.** Reference date/year, sources and missing-data estimates, mappings to model conditions, exact distributions and organizational architecture, and each country's procedures. The ten-country selection, editable profiles, heterogeneous prior experience, and stable starting society are settled.

## 7. Policy classification and country-specific reform packages

**Agreed R22 — Classification source.** Organize the policy menu using Villeneuve, Mugellini, and Heide, “International Anti-Corruption Initiatives: a Classification of Policy Interventions” (online 2019; journal issue 2020), DOI: 10.1007/s10610-019-09410-w. The four policy-tool families are organizational, authoritative, financial, and information-based.

**Consequence R23 — Classification is not an effect estimate.** The source's distinctions can describe tools and their intervention mechanisms. The classification does not supply numerical effectiveness coefficients. Concrete policy effects require mechanisms and calibration of their own. A policy's anticipated improvement does not guarantee beneficial results.

**Agreed R24 — Reform of an existing baseline.** Selecting a policy introduces a reform to its current real-world form in the chosen country. It does not create a country without prior anti-corruption arrangements. Existing policy and organizational capacity continue as the inherited baseline.

**Agreed R25 — Concrete packages.** Each selectable policy has a predefined reform package adapted to that baseline, identifying its intended changes and resource requirements. For asset declarations, the relevant change might be introducing a missing obligation, extending coverage, or strengthening verification, depending on what already exists. The twelve-tool menu is now selected (see Section 13); precise country-specific packages remain to be calibrated.

**Agreed R26 — Formal selection and implementation are separate.** User selection establishes the de jure reform for the scenario. Its practical implementation then depends on resources, organizational responses, and country conditions. We have not agreed to simulate an additional initial struggle over whether the user's selected reform is formally adopted.

**Agreed additions — Fixed user selection and endogenous rollback.** Users select the reform package before a run and cannot introduce or withdraw reforms midway through it in version 2. Actors may still weaken, suspend, narrow, or reverse formal provisions when they have authority and satisfy the procedures, subject to protections and opposition. Formal reversal differs from poor implementation and is a simulated outcome, not a user intervention.

**Open for specification/calibration.** Precise country-specific changes for the twelve tools, implementation chains, requirements, costs, intended coverage, legal procedures, and rollback thresholds or constraints. Policy names alone do not specify numerical effects.

## 8. Resource mobilization, allocation, and deployment

**Agreed R27 — User-set starting point.** As part of selecting a policy/reform, the user chooses a probability setting that establishes its initial resource mobilization rate. Political officeholders do not independently choose this starting setting. It is not a fresh independent funding lottery every month.

**Agreed R28 — Meaning of 100%.** Full mobilization means meeting the estimated resource requirements of the selected reform, given its scope and country conditions. Requirements must be assessed against inherited capacity, accounting for additions or reallocations without counting existing resources twice. The current architecture supplies a separate baseline.

**Agreed R29 — Initial distribution.** Distribute reform resources using the country's prevailing allocation arrangements and patterns, including existing inequalities or priorities where supported by the baseline. The earlier proposed universal workload-proportional starting allocation is superseded.

**Agreed R30 — Policy-driven resources.** Resources mobilized for reform implementation come from the policy's implementation pool. Stakeholders can influence its mobilization, allocation, and use but do not directly add their own resources to that pool. Their own capacity to mobilize, monitor, or resist remains a practical constraint on their actions, not an extra implementation contribution.

**Agreed R31 — Endogenous evolution.** During a run, actor reactions and changing conditions can increase, sustain, or decrease the mobilization rate. At reviews, the authorized political and administrative actors decide using the combined TPB–utility rule. The country architecture identifies authority, approval procedures, and constraints; shared authority requires the applicable approvals. Influence depends on procedures, relationships, and practical constraints. Support or opposition does not directly add or subtract funding. The user still establishes the initial rate.

**Agreed R32 — Reviews.** Routine resource reviews occur every six months. Major events can trigger exceptional reviews. A review may leave the rate unchanged. Implementation and actor learning continue between reviews.

**Consequence R33 — Distinct quantities.** Keep the user setting, realized mobilization rate, mobilized resources, distribution between organizations, usable capacity, and actual deployment separate. Sufficient resources do not guarantee faithful or effective implementation. Resource shortfalls and other implementation failures are different phenomena.

**Open.** Exact probability-to-starting-rate mapping; financial or normalized resource units; whether mobilization is bounded at 100%; country-specific review authority and approval procedures; exceptional-review triggers; rate adjustment magnitude and persistence; allocation and reallocation rules; national affordability constraints; resource-to-capacity conversion, hiring/training delays, recurring expenditure, and attrition. These need model definitions, not necessarily additional user controls.

## 9. Organizational implementation and political feedback

**Agreed R34 — Organizational responses.** Implementing organizations can comply selectively, resist, or redirect a reform. Responses reflect country-specific conditions, policy-driven resources, and internal organizational conditions. Organizations contain heterogeneous agents; membership does not imply identical preferences.

**Consequence R35 — Responses require actors and procedures.** Organizational decisions need a mechanism linking member and leadership actions to collective conduct. Leaders have defined authority, and members influence decisions through organizational procedures. Their evaluations can reflect funding pressure and internal disagreement. No separate omniscient organizational will or generic political-will coefficient is adopted.

**Discussion-derived R36 — Draft-inspired feedback to operationalize.** The supplied draft, *The Realistic Reformer*, provides the proposed framework for information/triggers, demands, responses, and changing implementation. Relevant mechanisms include selective attention, costly mobilization, coalition influence, competing priorities, organized resistance, bounded gains, and rollback. These are a theoretical basis for proposed rules; not every mechanism has yet been individually specified and approved.

**Agreed R37 — Selective accountability.** The draft's hierarchical reach and group scope inform the model. Organizations have leaders and other members. Insider/outsider position depends on relationships to whoever controls the relevant decision; it is not a permanent class attribute. Membership, support, informal ties, and funding can provide potential access/protection, and leadership/coalition changes can alter it. Protection requires an influential actor's intervention through a mechanism such as case prioritization, resource allocation, or pressure, subject to institutional constraints. No automatic immunity or fixed class punishment discount is adopted.

**Discussion-derived R38 — Trajectories.** Substantive implementation/consolidation, contestation, stagnation/decoupling, subversion/instrumentalization, and erosion/rollback are possible descriptive trajectories, not predetermined states or mutually exclusive simulation outcomes. If used, they should be identified from observed processes and outcomes.

## 10. Combined reforms and collective dynamics

**Agreed R39 — Combinations allowed.** A run can contain several selected reforms. Their individual costs accumulate, and a larger package can increase implementation challenges.

**Agreed R40 — Combined implementation demands.** Account for setup and continuing costs; coordination work generated by linked reforms; and shared personnel, systems, and organizational bottlenecks. Organizational prioritization, delay, or selective compliance can follow overload. Requirements must not count shared infrastructure twice.

**Consequence R41 — Interactions are mechanistic.** The number of policies matters through their costs and implementation complexity, not an unexplained penalty per policy. Complementarity is possible, but individual effects cannot simply be added. For example, reporting can generate case demand that exceeds investigative capacity. Exact interaction rules remain open.

**Agreed R42 — System dynamics component.** Include collective feedback and processes unfolding over time alongside agent interactions.

**Agreed extensions to R43 — Persistent resources and capacity.** Exchanges change agents' and organizations' resources persistently, affecting subsequent opportunities. Individuals receive role-appropriate monthly income; organizations receive regular funding; both incur recurring costs. Account for already simulated transactions without double counting. Service access and political support remain separate from money. Ordinary funding remains distinct from reform implementation resources. Ordinary work and reform duties share finite staff/system capacity where they use the same resources. Unfinished tasks carry forward as backlogs. Preferential treatment may delay others when capacity is constrained, but harm is not automatic when capacity is sufficient.

**Consequence R43 — Collective accounting.** Implementation capacity, pending workloads, resource balances, and role expectations are evolving states. Membership totals derive from the same agent transitions rather than changing independently in a second population equation. Exact stock-and-flow functions, units, and delays require specification.

**Open.** Shared versus separate budget constraints across reforms; how common capacity is allocated; coordination costs and genuine complementarities; the exact collective stocks; interactions between attention, coalitions, expectations, and implementation. Separate new mechanisms from duplicate representations of the same process.

## 11. Conduct classification, outcomes, and original-version inheritance

**Consequence R44 — Maintain distinct records.** Tolerance/attitudes, intentions, actual conduct, reputation, and public visibility are not interchangeable. Distinguish actual corruption from detected cases and sanctions. Increased detected cases cannot by itself establish increased underlying corruption. Reporting of voluntary exchanges and extortion victimization requires distinct categories.

**Agreed operational approach.** A comprehensive definition of corruption is not a prerequisite. Define the existing concrete encounter mechanisms through available actions, perceived and actual consequences, who receives information, and subsequent feedback. Effects may differ across participants, third parties, and the collective system. Conduct labels identify modeled mechanisms rather than substitute for their effects.

**Agreed R60 — Visual integrity status.** Principal role is encoded by color. Shape encodes current integrity status: a circle presumes integrity/ordinary health by default, and a triangle indicates recorded conduct meeting the corruption criterion. There is no separate insufficient-information symbol. Existing modeled history may establish a corrupt status at initialization; otherwise integrity is the default. A single qualifying corrupt act changes the shape. Extortion victimization alone does not establish voluntary corruption.

Recovery requires a sustained period of at least six months without another qualifying corrupt act and at least three meaningful opportunities during that period in which the integrity-preserving option is chosen. Routine purchases do not count, and inactivity alone does not establish recovery. A new qualifying act restarts the period. Recovery changes the display while retaining history; relationships and others' beliefs continue evolving independently. Actual agent choices remain governed by the combined TPB–utility mechanism and accessed information, not by omniscient access to the map.

**Open for specification/calibration.** Exact event/decision definitions and lawful alternatives, qualifying-act and meaningful-opportunity definitions, opportunity rates, measurable effects, indicator denominators and time windows, harm/severity parameters, and treatment of unavailable observations. The visual default, one-act transition, and recovery requirements are settled.

**Original-source requirements carried forward.** The original description remains authoritative where later decisions have not replaced it. Its examples specify contexts and intentions, not a complete economy or all numerical outcome mechanisms.

| Mechanism or feature | Inherited content and current qualification |
|---|---|
| Ordinary activity | Purchases, taxes, public services, business regulation, authorizations, and government contracts provide encounter contexts. |
| Citizen–official encounters | Citizens can offer bribes for tax/service advantages; officials accept/refuse; officials can demand payments with consequences for refusal. |
| Business–official encounters | Businesses can seek lower costs, faster permits, regulatory advantages, or overlooked violations. |
| Business–politician encounters | Businesses seek policy/contract advantages; politicians can initiate offers for financial support, loyalty, or endorsement. |
| Politician–official encounters | Political pressure can seek favorable administration; officials can comply/refuse and proactively seek protection, promotion, or continued appointment. |
| Political support | Citizens assess politicians using perceived conduct and preferences; politicians seek support, potentially exchanging selective benefits. |
| Ordinary citizen–business purchases | Retain the honest-purchase baseline. Other encounters depend on the activity, actual role, and authority, including civil society and media functions. |
| Networks and memory | Repeated encounters, remembered counterpart behavior, support/protection, and informal networks affect future choices. The original clustering section was explicitly marked PENDING, so its exact algorithm was not complete. |
| Elections and campaigns | Retain these processes, with the revised country procedures and campaign mechanisms in Section 12. |
| Outputs and controls | Live statistics, significant-event logs, an end summary, user-selected duration, and CSV/JSON exports remain requirements. Visual presentation is deferred. |

**Superseded or not carried over automatically from v1:**

- Hard class splits between objective and subjective motives, fixed ranges such as 0–0.4 versus 0.6–1, and a binary objective/subjective preference: replaced by heterogeneous nine-dimensional attachments and TPB.
- Low/medium/high national presets with direct fixed utility coefficients: replaced by country profiles whose causal mappings remain to be defined.
- All agents starting green and corruption defined by a signed action score: initial conditions and measurement must be newly specified.
- Failed bilateral proposals counted as honest decisions by both participants: incompatible with separating intention, refusal, and completed conduct.
- Red status as a prerequisite for initiating extortion: not an agreed v2 rule.
- Fixed class-based sanction multipliers, immediate punishment after an exchange, and three-round inactivity: require reconsideration against actual organizational processes, selectivity, and timing.
- Random monthly wandering and network ties automatically producing spatial clusters: replaced by stable geography, visits, remote ties, and constrained relocation. Contact frequencies remain to be calibrated. Ordinary citizen–business purchases retain the source's honest baseline; other activities use encounter-specific rules. Neutral treatment of all same-class encounters was a v1 assumption and is not a general v2 rule.
- Campaign corruption bonuses, a universal 50-round election interval, threshold-based demotion, and automatic history/score erasure: replaced by the agreed country-specific political processes, changed perceived stakes, and persistent identity/history.
- Fixed tie-formation and expiry thresholds based only on repeated corruption: not the new organizational or institutionalization rules.

No v2 model code, production site, repository content, or interface is changed by this consolidation.

## 12. Additional agreed mechanisms

**Agreed R45 — Compact case process.** Signals from reports, inspections, or audits can lead to screening, investigation, and decision. Stages require capacity and time and can be delayed, obstructed, dismissed, or pursued selectively. Signals do not establish wrongdoing; investigation does not guarantee punishment. Maintain compact case records. Verify phone performance before adding procedural detail; no full courtroom simulation is intended.

**Agreed R46 — Media representation.** Media outlets are specialized functions of existing organizations, with journalists among the existing individuals; no fifth principal agent class is added. Resources, interests, and editorial independence vary. Civil society organizations can represent business interests and journalists can promote owner/funder/factional positions. Stated mission and organizational category do not determine conduct.

**Agreed R47 — Public information and cases.** Public reporting can precede and prompt an investigation, and case developments can generate further coverage. Publication does not establish wrongdoing or automatically open a case. Responsible organizations respond under their procedures, capacity, and possible political influence. Agents can change beliefs and support before a formal decision.

**Agreed R48 — Error and manipulation.** Information can be inaccurate through misunderstanding or deliberate manipulation, including selective framing and misleading claims. Corrections and evidence may change beliefs/source credibility among those who encounter and accept them. An unproven claim differs from a demonstrated falsehood; case dismissal does not automatically make a report false.

**Proposed implementation detail for R46–48.** Use compact information records and selective, limited exposure/sharing rather than generated articles or complete social media feeds. Information can originate in experience, leaks, official releases, investigations, or strategic claims. Journalism and social circulation are linked but distinct. Exact attention limits, publication/sharing functions, editorial rules, and country media conditions remain to be specified.

**Agreed R49 — Informal ties.** Repeated useful or trusted interactions can develop ties in lawful activity as well as corrupt cooperation. Track which relationships facilitate corrupt exchanges. Formal membership alone does not establish informal trust. Tie development reflects each participant's experience; repeated extortion payments do not establish mutual trust.

**Agreed R50 — Funding leverage.** Private/organizational funding relationships can affect priorities. A funder can offer money, attach conditions, or threaten withdrawal; leaders decide their response through TPB–utility. Dependence makes withdrawal consequential, while internal rules, editorial protections, and alternatives may limit leverage. Funding does not automatically purchase compliance. These flows remain separate from the reform implementation pool.

**Agreed R51 — Country-specific political turnover.** Replace the original corruption-score-and-support removal test with simplified country-specific electoral and officeholding procedures. Perceived conduct affects support. Relevant case decisions may affect eligibility or continued officeholding. Losing office changes authority and resources but does not automatically remove a candidate/party figure from the Politician class.

**Agreed R52 — Campaigns.** Follow the country electoral calendar. Campaign periods increase relevant political interaction and alter perceived stakes. Choices still use TPB–utility; heightened scrutiny can discourage questionable conduct, and there is no universal campaign corruption bonus.

**Agreed R53 — Persistent identity.** Role changes and loss of office preserve experience, accumulated resources, relationships, and reputation. Authority, duties, and role-dependent income change with the position. Relationships may weaken or end through subsequent events. Reputation persists in others' memories and can change with information. A new role exposes the person to its expectations without erasing learning.

**Agreed R54 — Scope of user action.** Core setup choices are country, overrides to estimated country conditions, one or several of the twelve reforms, initial mobilization setting for each selected reform, and duration in months. Users choose before the run. Subsequent actor adaptation and formal rollback are endogenous. Exact interface controls and advanced options are not designed yet.

**Agreed R55 — Fixed starting society and paired comparisons.** For each chosen configuration, preserve identical initial agents, resources, memberships, ties, locations, prior experiences, and expectations across baseline and reform runs. The comparison retains the existing national architecture without adding the selected reforms and continues evolving. Repetitions hold that initial society fixed and vary only subsequent random events. Changed user setup conditions deliberately create a different starting configuration. Record the starting state, overrides, model/profile versions, and event randomization for reproducibility.

**Agreed principle / technical work remaining.** Comparisons should distinguish consistent effects from stochastic variation. The default repetition count and matched-randomness implementation require performance testing. Runs can execute sequentially. Variation across runs describes the model under the specified conditions, not the empirical precision of a national forecast.

## 13. Agreed policy menu and assessment

**Agreed R56 — Four assessment levels.** Use the framework from the user's *Recalibrating anti-corruption assessment* chapter. The intermediate proposal to use prevention, detection, sanctioning, impartiality, and durability as five universal headline dimensions was rejected and is superseded. Keep inputs, outputs, outcomes, and impact distinct:

| Level | Assessment content |
|---|---|
| Inputs | Formal provisions in force, intended scope, and mobilized resources relative to requirements. |
| Outputs | Actual scope of action, activities, coverage, and fidelity. |
| Outcomes | The measure-specific practical institutional change contributing to the anti-corruption institutional framework (ACIF). This is the principal assessment of policy achievement. |
| Impact | Effects on actual modeled corruption and its consequences in the targeted domain and wider system, relative to the comparison run. |

**Agreed R57 — Twelve tools and primary institutional outcomes.** This table combines the approved menu with the proposed operationalizations subsequently accepted by the user. They are simulation specifications inspired by the chapter, not indicators claimed to be prescribed verbatim by it. Country-specific scopes, thresholds, and units remain to be defined.

| Family | Reform | Primary institutional outcome | Proposed operational indicator |
|---|---|---|---|
| Organizational | Establish or strengthen an anti-corruption body | Effective exercise of mandate | Share of mandate-defined matters for which its assigned function can be performed in practice, including under opposition from influential interests. |
| Organizational | Improve recruitment and promotion | Merit-based staffing | Share of covered positions filled according to published selection criteria without connections overriding those criteria. |
| Organizational | Staff rotation | Reduced closed-network continuity | Share of targeted high-risk functions still effectively controlled by the same informal network following personnel changes; lower is better. Rotation does not automatically delete ties. |
| Organizational | Protect reporting persons | Effective protection | Probability that a reporter facing a credible threat avoids unremedied retaliation under comparable threat conditions. |
| Authoritative | Strengthen asset, liability, and gift declarations | Financial verifiability | Share of the covered population whose relevant financial position can be independently checked using adequate reliable information. |
| Authoritative | Strengthen conflict-of-interest disclosure | Identifiable and actionable conflicts | Share of covered decision situations where material conflicts can be identified and subjected to applicable review or management. |
| Authoritative | Strengthen oversight audits and investigations | Effective scrutiny and correction | Share of covered decisions for which a competent reviewer can identify an irregularity and secure an appropriate corrective response where warranted. |
| Financial | Reform remuneration and incentives | Security of lawful remuneration | Share of targeted personnel whose reliably received lawful remuneration covers modeled ordinary recurring costs; career incentives also need predictable application of stated criteria. |
| Financial | Strengthen financial penalties | Credible financial liability | Expected collectible penalty for a specified violation: probability of appropriate imposition and collection multiplied by collectible amount. |
| Information-based | Expand proactive disclosure | Practical transparency | Share of relevant decisions outsiders can meaningfully scrutinize using accessible, timely, adequate information. |
| Information-based | Improve reporting/complaints channels | Effective access to accountability | Share of intended users able to submit a viable complaint to a competent recipient within specified time/resource limits, separately from choosing to report. |
| Information-based | Expand public awareness/education | Usable knowledge | Share of targeted agents correctly identifying the relevant obligation and appropriate response/channel in fixed role-specific situations. |

**Agreed R58 — Assessment safeguards.** Define scope and denominators for each package and report the rate alongside the target population size. Outcome scores must derive from actual model states and interactions, not an automatic benefit assigned when a tool is selected. Activity counts do not establish institutional improvement. Standardized diagnostic situations may assess capabilities without altering the simulated society. Tool combinations produce joint effects; separating an individual component's contribution requires another comparison. Exact zero-denominator and insufficient-observation handling should be explicit in the numerical specification.

**Agreed R59 — Impact remains explicit.** Assess actual completed conduct by type and relative to relevant opportunities, separately from allegations, detections, and perceptions. Assess victim burdens, diverted resources, and service effects, including distribution of gains/costs and displacement between organizations or groups. Keep transfers distinct from net societal losses. Compare both the targeted domain and broader modeled system against the no-new-reform run. Institutional outcomes can improve while aggregate corruption impact is small or delayed; report both. No automatic outcome-to-corruption reduction is adopted.

## 14. Current boundary between agreed rules and work remaining

The major conceptual decisions above are settled for design purposes. This is not yet an executable, empirically calibrated specification. Remaining work includes:

1. Country evidence: reference dates, sources, organizational mappings, class/organization counts, legal/administrative procedures, profile estimates and uncertainty.
2. Numerical decision specification: attachment distributions, utility and norm/control mappings, uncertainty distributions, learning/reference weights, and credibility.
3. Encounter mechanics: monthly demand/opportunity frequencies, context-specific action sets and authority, amounts, eligibility, bilateral sequencing, ordinary income/cost accounting, and third-party effects.
4. Implementation mechanics: initial probability-to-rate mapping, resource units, affordability and allocation, review step sizes and procedures, conversion to capacity, task costs, delays/attrition, shared workloads, and rollback rules.
5. Information and institutional dynamics: compact state definitions, exposure/publication/sharing, expectation updating, tie evolution and funding conditions.
6. Assessment computation: exact denominators and reference situations, comparable evidence/threat conditions, original and realized scope, measurement windows, diagnostic calculations, attribution rules, and the event/opportunity definitions underlying the agreed visual status transitions.
7. Validation: accounting consistency, comparison reproducibility, sensitivity to assumed parameters, and runtime/memory tests on an Android browser. Default durations/repetition counts should follow that evidence.

These tasks require numerical choices and implementation specifications. Any choice that materially changes agreed behavior should be brought back for discussion; the technical details need not each become a separate yes/no question. No v2 code or production deployment has been changed.

## 15. Agreed interface design

The agreed sequence is model rules, then interface discussion, then implementation. The main interface choices are now recorded below. Country calibration, numerical specification, and validation remain separate work; this record does not claim a v2 implementation exists.

**Agreed R61 — One-page workspace.** Keep Setup, Simulation, and Assessment as sections of one scrolling page. Do not make them separate screens or tabs. Use dropdowns for choices and collapsible panels for longer settings and explanations. Expanding/collapsing preserves contents and run state. A compact setup summary can show the chosen country, reforms, initial mobilization settings, and duration.

Minimal instruction near the top:

> Choose a country and reforms, adjust settings, then press **Run**.

**Agreed — Setup controls.** Country selection; editable estimated initial conditions; country-adapted reform selection in combinations; a starting mobilization setting for each selected reform; duration in months. Source dates/estimates and overrides must remain understandable. Changes prepare a new scenario rather than altering the active run. Exact widgets and field units follow the numerical specification.

**Agreed — Main map and networks.** The agent map receives the main visual emphasis. Node colors identify the four principal roles; circle/triangle status follows R60. Network links receive strong visual emphasis. Greater line thickness can encode stronger ties; strong and newly formed ties should be prominent, with a brief formation highlight. Provide relationship selection for informal ties, organizational membership, and funding. Agents retain their geography; network emphasis does not relocate them. Display filtering does not remove relationships from the model.

**Agreed — Influential-actor inspection.** Highlight selected agents because of network centrality or practical leverage over resources and decisions; update the selection as roles and networks change. Enlarged markers or an outer ring preserve the meanings of role color and integrity shape. Full agent inspection is focused on these highlighted actors, rather than offered for every agent. The panel shows why the person matters, relevant connections, and recent actions/decision explanations. Decision explanations distinguish perceived benefits/constraints and intentions from actual outcomes. Exact centrality/leverage measures, thresholds, and the number displayed remain design/technical choices to specify.

**Agreed — Live event tracker.** Display the live event panel open by default. It continuously updates as the simulation advances, with stable event IDs, simulation month, event type/description, involved people/organizations, status where relevant, and linked developments. Preserve tracking relationships across a disclosure, investigation, and decision, rather than presenting each as an unrelated event. Include consequential developments such as policy/resource reviews, important funding ties, major disclosures, and formal changes. Selecting an event highlights its actors and relevant links on the map. The simulation can continue, and users can pause for inspection. Event significance filters and retention limits still require a concrete design.

**Agreed — Compact assessment with expandable detail.** Keep only key findings visible in simple charts and plain language. Each selected reform has an expandable card whose details are collapsed by default. Its compact summary shows the reform, primary institutional-outcome indicator, change against the baseline, and a small comparison/trend chart. Expanded detail explains what happened, what the recorded model events support as contributing mechanisms, and what it means for the intended goal. Organize supporting detail by inputs, outputs, and outcomes.

A separate scenario-level impact panel shows actual conduct and consequences for the complete reform package, with baseline comparison. For combinations, do not assign separate causal credit to each tool without an additional comparison. Keep institutional outcomes distinct from impact and both visible in the assessment structure. Do not replace them with a universal effectiveness score. Example explanations must be generated from actual recorded results and must not overstate causal attribution.

**Agreed — Run flow.** The main Run action begins one animated reform scenario and automatically computes its comparable baseline. Additional repetitions are available through an optional control. Repetitions preserve the initial society and vary subsequent random events. Default repetition count, duration, pacing, and implementation of paired random streams require numerical/performance work. Exact placement of run/pause/step/reset controls remains a layout detail.

**Agreed R62 — Saving and loading.** Users can save/reload named scenarios and completed results on their device. A saved scenario retains the country profile and overrides, selected reforms, mobilization settings, duration, and exact initialized society. Results retain assessment data, tracked events, and the model/profile versions used. Keep CSV/JSON exports for analysis and backup. Remember the last setup automatically. Offer compact Save/Load controls. Loading prepares a scenario for review and does not start a run automatically. Storage limits, version compatibility, import validation, and backup behavior require implementation; live-run checkpoint/resume was not separately agreed.

**Remaining concrete interface work.** Choose accessible colors, control/legend layouts, chart units/axes, mobile sizing, zoom/selection behavior, source/estimate explanations, default panel states beyond those settled above, retention limits, and save/load details. These can be developed into a reviewable mockup. Do not reopen the settled one-page structure, map emphasis, default-open event feed, default-collapsed assessment detail, limited influential-actor inspection, or fixed starting-society rule.

## 16. Sources and decision provenance

The user's decisions in this conversation are authoritative; later corrections supersede assistant proposals and source assumptions where specified.

- *script_explanation.docx*: original role activities, encounters, incentives, memory/network intentions, political processes, and output requirements. Reviewed end to end, including the explicit PENDING status of clustering.
- Existing v1 *MODEL.md*: reconstruction assumptions, distinguished from the original requirements.
- Villeneuve, Mugellini, and Heide, *International Anti-Corruption Initiatives: a Classification of Policy Interventions* (online 2019/issue 2020), DOI 10.1007/s10610-019-09410-w: four families and tool examples. Classification does not provide calibrated effectiveness coefficients.
- Pozsgai-Alvarez and Sotola, *The Realistic Reformer*, supplied draft POP-S-26-01321.pdf: political cycle, implementation trajectories, hierarchical reach and group scope.
- Pozsgai-Alvarez, *Recalibrating anti-corruption assessment: theories of change in a multi-level approach* (2026), DOI 10.4337/9781035337712.00043: four-level assessment, policy-specific institutional outcomes, and distinction from corruption impact. The uploaded PDF is a one-page image of the published chapter introduction, now opened and visually read. Its introduction confirms the four levels. The complete author-posted draft was read on ResearchGate; the rest of the published chapter was not supplied in that attachment and has not been compared against the draft.
- Ajzen (2020), DOI 10.1002/hbe2.195: TPB structure and subjective beliefs versus actual control.
- McFadden's random-utility work: conceptual connection between maximization and probabilistic choices. The exact integration with TPB here is a modeling choice.
- Ferraz and Finan (2008), DOI 10.1162/qjec.2008.123.2.703; Enikolopov, Petrova, and Sonin (2018), DOI 10.1257/app.20160089; Vosoughi, Roy, and Aral (2018), DOI 10.1126/science.aap9559: consulted for information dissemination, accountability, and misinformation. Their findings are not universal model coefficients.

No chapter is represented as prescribing the twelve proposed simulation indicators verbatim. Evidence, estimates, and new modeling assumptions remain distinguishable.



## Starting-state correction · 23 November 2026

The user requested correction and publication of the unrealistic starting state. v2.3 retains fixed paired starting societies but reconstructs a pre-policy year with the same numerical rules before adopting any selected reform. It carries prior actions, expectations, learning, ties, balances and ongoing work into month 0. The common inherited 8% flag is removed. Country political proxies and selected existing-instrument observations are sourced; mappings and missing cultural measures remain clearly identified estimates/assumptions. The complete numerical implementation and its evidence limits are in [INITIALIZATION.md](INITIALIZATION.md). This correction does not establish observed national corruption prevalence.


## Behavioral corrections authorized · 23 November 2026

The user requested correction and publication while retaining exactly 1,000 agents. v2.4 fixes genuine-opportunity/recovery counting, repeated waiting feedback, structurally excessive routine-service work units, income/needs consistency and uncollected financial obligations. It strengthens the actual experienced/communicated accountability pathway without a direct corruption-reduction multiplier. Reference reactions can approve or disapprove, rather than mechanically manufacturing honest expectations. The map retains conduct-based outer distance, class colors and integrity shapes while adding readable inner-disc spacing, cooperation constraints, class filtering and compact experienced-condition readouts. Numerical assumptions and verification limits are in [DYNAMICS.md](DYNAMICS.md).
