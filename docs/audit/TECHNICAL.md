# Technical specification

This specification follows the seven-part ODD reporting structure as an organizing aid: purpose and patterns; entities/state/scales; scheduling; design concepts; initialization; inputs; submodels. This is not an ODD certification. Stable mechanism IDs link to the narrative and full annotated code. Exact numeric expressions, action vectors and state assignments are supplied in generated appendices rather than hidden behind prose.

## 1. Purpose and patterns

The model explores the development of corrupt conduct and anti-corruption reforms in a synthetic society. Qualitative targets include heterogeneous choices, imperfect information, organizational resistance, delayed implementation, bounded learning, persistence of routines, resource competition and different policy trajectories. These are design targets, not a fitted list of empirical validation patterns. The model does not estimate a real country's treatment effect. A paired run estimates an effect **inside this model**, under its parameters, initial society and event seed.

Behavioral version is **2.4.0**, observation/display version **2.4.2**. Schema identifiers version country evidence, reconstructed baselines, adaptation, observations and saved payloads separately. Exact expressions are authoritative in source; mechanism descriptions explain them without replacing code.

## 2. Entities, state variables and scales

| Entity / storage | Meaning and principal state | Units / identity |
|---|---|---|
| Individual `state.agents` | Current/starting role, home/work coordinates, main organization, memberships, support, nine motives, balances/income/needs, knowledge/control/norm/risk beliefs, skill, role history, choices, liabilities, psychology | Exactly 1,000 indexed people; role 0 citizen, 1 business, 2 official, 3 politician; money RU; most traits [0,1], norm [-1,1] |
| Organization `state.orgs` | Category/function, members, leader, location, balance, competence, per-tool baseline caps/legal scope, role-specific practices, media/editorial/record attributes, implementation response/work counters | Integer organization IDs; categories 0–3; normalized capabilities; PM monthly staffing units |
| Support `agent.support` | Directional affinity toward every organization | Organization ID and [0,1] affinity; not formal membership |
| Informal tie `state.links` | Endpoints, directional trust, strength, contact/cooperation/corruption history and dates | Sorted endpoint key; directed trust [0,1]; counts and model months |
| Psychology `agent.psychology` | Learning/openness/retention, experience salience, retained policy memories, attempted/accepted exposures, influence bounds and evolving financial expectations | Versioned per-agent numerical structure; bounded scores, counts, months; see exact object paths below |
| Reform `state.policies` | Formal status, legal scope, mobilization rate, setup/recurring cash and staff requirements, allocations, delivery/install progress, response/review history | Policy keys; RU/PM/month; probability/rate [0,1]; normalized progress |
| Service `state.services` | Client, office/official, arrival and progress, status, help/wait experiences | IDs, month, work/progress; explicit queue, not a headline national statistic |
| Conduct `state.conduct` | True modeled act, participants, kind, amount, evidence, timing and subsequent records | Ground truth for engine; not automatically public knowledge |
| Case `state.cases` | Allegation/evidence, suspect, stage/status, responsible route, work, deadlines, liability/consequences and communication | Multi-stage process with separate true/false allegation and decision; counts, PM, RU, months |
| Information / funding | Claims, outlets, source trust, circulation/corrections, grants/transfers and dependency | Bounded credibility/reach, monetary RU, actual messages; not omniscient prevalence |
| Politics / budget | Controller/governing organization, review calendar, proposals, treasury/outside account | Person/organization identities, relative months, RU; simplified authority |
| Observation `sim.monitor` | Output counters, sampled conditions/outcomes, starting snapshot, monthly history and event links | Separate observation sidecar; must not influence decisions or consume event draws |

One step is one month and contains multiple opportunities. Run duration is 6–240 months; reconstructed history is months -12 through 0. Time is an update scale, not a literal duration for every encounter. Geography is the unit square; analytical map coordinates are a separate representation. One normalized resource unit (RU) is not a currency amount or per-capita GDP unit. PM is a normalized person-month staffing unit, not measured national employment. No expansion weights make the synthetic 1,000 a national census.

Arrays/indexed IDs and references are validated when initial states are constructed/imported. The [state and assignment inventory](STATE.html) lists object definitions and writes with exact source expressions. It is a source-derived field/assignment dictionary, not an assurance that saved arbitrary data are authentic. Internal `knowledge`, perceived knowledge, operational capability and reported percentages are different variables; follow the named accessors in the submodels.

## 3. Process overview and scheduling

Initialization validates setup → generates country-informed agents/organizations → runs the existing-rule pre-policy year → preserves people, cash, history, unfinished services/cases and relationships → resets intervention accounting → saves the common initial society → constructs paired reform/baseline simulations → captures initial observation → adopts additional reforms in the reform branch. The baseline retains inherited institutions.

Each `Simulation.step()` performs the following **in this exact order**:

1. Stop if the requested horizon is reached; otherwise advance the month.
2. Advance every person's memory decay and slow adaptation.
3. Monthly accounts: treasury inflows, earnings, needs, costs and resource constraints.
4. Fund selected reform allocations from actual available balances.
5. Schedule finite shared public staff time.
6. Implement reform work/setup/operation; then update personal receipt-based income expectations.
7. Generate encounters and decisions, including service and corruption opportunities.
8. Process service work; audit/select matters; process case stages; collect outstanding liabilities.
9. Disseminate information; make funding decisions; update organizations/membership/appointments.
10. Run scheduled political review; run six-month budget/formal reviews and feedback.
11. Recover integrity status only under its time/meaningful-choice conditions.
12. Record macro developments; append state metrics and observation-only reporting.

The order is causally material: this month's funding affects this month's implementation, which may affect later opportunities and reports. Later communication can affect future choices, not an earlier completed choice. Within methods, loops and keyed draws define ordering. [Source](source/model.js.html) and the action catalogue expose those details. Worker execution advances reform then baseline with shared keyed event namespaces, not one mutable random cursor. Repetitions reconstruct paired branches from the same initial society with a changed replicate key; rendering pace is not a parameter of choice.

## 4. Design concepts

Decisions combine subjective consequential evaluation using nine motivational attachments, relevant-role expectations, perceived control and random utility; the highest sampled subjective utility wins among feasible supplied options. Mechanical accounting and case-work progress do not themselves choose. World completion probabilities can differ from perceived feasibility. Observation/reporting has access to truth for measurement, but agent information is limited to experience and accessed claims.

Organizations and networks constrain interaction and resources; role expectations and experience can ease familiar practice. Slow feedback changes receptiveness and motives. Aggregate behavior, information, implementation and resource pressure feed into macro developments and political/budget review. These are coupled stocks, flows and delayed feedback inside an agent model, not a separately calibrated system-dynamics model with endogenous GDP, demographic growth or a complete macroeconomic sector.

Randomness is reproducible and keyed by explicit seed, replicate, month, process and actor/action keys. A probability range still produces one draw per keyed event; reusing all keys repeats that draw. New event seeds vary subsequent events while initial-seed/country/conditions preserve the starting society. Structural interventions can change which opportunities happen, so shared keys reduce noise without guaranteeing identical encounter paths.

## 5. Initialization

No policy selections or runtime event seed enter the common initial-society identity. Country, overridden starting conditions and initial seed do. Existing organizations, inherited capabilities, finite balances and explicit people are generated from source-informed mappings plus declared priors. Twelve months of existing-rule encounters, service/case work, learning and information generate prehistory. This creates actual modeled corrupt histories and heterogeneous ties; it is neither a backcast fitted to observed prevalence nor equilibrium initialization. See AK-INI-01, AK-COU-01 and [input tables](INPUTS.html).

## 6. Input data and parameters

Country data and institutional notes live in `profiles.js`; rescaling and limited inherited-instrument mappings in `baseline.js`; composition, organizational routing, cycles and costs in `config.js`; cognitive policy ceilings in `adaptation.js`. The generator reproduces their values and source dates in the [input inventory](INPUTS.html). All literal coefficients, numeric thresholds and numeric expressions in active JavaScript appear in the [numeric inventory](NUMERICS.html), with source context and mechanism ownership. Counts, indices, UI geometry and hash constants are not all substantive empirical parameters; the inventory labels this distinction rather than assigning fictitious empirical provenance.

Parameters without a stated observation or calibrated estimate remain engineering priors. Policy-specific influence maxima are fractions of the targeted remaining scale, filtered by uptake, receptiveness, delivery, novelty and retention; they are not guaranteed percentage-point changes in corruption prevalence. Country source values are dated descriptors/proxies, not encounter/sanction probabilities. Changing a source value, mapping or coefficient changes the experiment and must be versioned and tested.

## 7. Submodels and operational definitions

Each mechanism below supplies its numerical rule, source references, inherited design decisions, limits and relevant checks. Every accepted rule has a route in the crosswalk, but a route may end at a documented gap rather than complete conformance. Use [action consequences](ACTIONS.html), [state fields](STATE.html) and [full code](SOURCE-INDEX.html) for exact expressions that would be unwieldy to repeat in prose.


<details><summary>Browse all 57 mechanisms</summary>

- [AK-OV-01 — Purpose, scope and version identity](#ak-ov-01)
- [AK-POP-01 — People and principal roles](#ak-pop-01)
- [AK-POP-02 — Heterogeneous starting profiles](#ak-pop-02)
- [AK-ORG-01 — Organizations, formal affiliation and affinity](#ak-org-01)
- [AK-ORG-02 — Membership, recruitment and continuity of identity](#ak-org-02)
- [AK-GEO-01 — Stable geography and selective encounters](#ak-geo-01)
- [AK-MOT-01 — Nine interests and beneficiaries](#ak-mot-01)
- [AK-DEC-01 — Subjective choice, TPB and random utility](#ak-dec-01)
- [AK-DEC-02 — Action-specific perceived consequences](#ak-dec-02)
- [AK-ACT-01 — Encounters, corruption and victimization](#ak-act-01)
- [AK-ACT-02 — Meaningful choices and integrity recovery](#ak-act-02)
- [AK-INS-01 — Role expectations and institutionalized ease](#ak-ins-01)
- [AK-ADP-01 — Individual receptiveness and numerical psychology](#ak-adp-01)
- [AK-ADP-02 — Diminishing influence, reinforcement and wear-off](#ak-adp-02)
- [AK-ADP-03 — Evolving traits, motives, skill and income expectations](#ak-adp-03)
- [AK-NET-01 — Directional trust and useful relationships](#ak-net-01)
- [AK-INF-01 — Journalism, publication and funding leverage](#ak-inf-01)
- [AK-INF-02 — Access, sharing and the separation of belief from truth](#ak-inf-02)
- [AK-ECO-01 — Money, lawful receipts and living needs](#ak-eco-01)
- [AK-ECO-02 — Shared public staff capacity and priorities](#ak-eco-02)
- [AK-ECO-03 — Service queues and bounded experience feedback](#ak-eco-03)
- [AK-COU-01 — Country observations, proxies and uncertainty](#ak-cou-01)
- [AK-COU-02 — Functional architecture and jurisdiction](#ak-cou-02)
- [AK-INI-01 — A reconstructed pre-policy year](#ak-ini-01)
- [AK-RNG-01 — Keyed probability, paired worlds and exact replay](#ak-rng-01)
- [AK-REF-01 — Formal reform selection and legal scope](#ak-ref-01)
- [AK-REF-02 — Requirements, mobilization and initial allocation](#ak-ref-02)
- [AK-REF-03 — Implementation, resistance and setup](#ak-ref-03)
- [AK-REF-04 — Resource reviews, narrowing and suspension](#ak-ref-04)
- [AK-CAS-01 — Signals, reporting and case intake](#ak-cas-01)
- [AK-CAS-02 — Staged processing, discretion and evidence](#ak-cas-02)
- [AK-CAS-03 — Assessed liability, collection and accountability learning](#ak-cas-03)
- [AK-GOV-01 — Political support, officeholding and authority](#ak-gov-01)
- [AK-MAC-01 — Collective feedback and consequential developments](#ak-mac-01)
- [AK-POL-ACA — Anti-corruption body](#ak-pol-aca)
- [AK-POL-MERIT — Recruitment and promotion](#ak-pol-merit)
- [AK-POL-ROTATION — Staff rotation](#ak-pol-rotation)
- [AK-POL-PROTECTION — Protection for reporting persons](#ak-pol-protection)
- [AK-POL-DECLARATIONS — Asset, liability and gift declarations](#ak-pol-declarations)
- [AK-POL-CONFLICTS — Conflict-of-interest disclosure and review](#ak-pol-conflicts)
- [AK-POL-OVERSIGHT — Audits and investigations](#ak-pol-oversight)
- [AK-POL-PAY — Remuneration and incentives](#ak-pol-pay)
- [AK-POL-PENALTIES — Financial penalties](#ak-pol-penalties)
- [AK-POL-DISCLOSURE — Proactive disclosure](#ak-pol-disclosure)
- [AK-POL-COMPLAINTS — Reporting and complaints](#ak-pol-complaints)
- [AK-POL-EDUCATION — Awareness and education](#ak-pol-education)
- [AK-MEA-01 — Institutional indicators and fixed reference diagnostics](#ak-mea-01)
- [AK-MEA-02 — Package impact and paired comparison](#ak-mea-02)
- [AK-MEA-03 — Policy-specific before/current/final monitoring](#ak-mea-03)
- [AK-MEA-04 — Interpretations and linked evidence](#ak-mea-04)
- [AK-VIS-01 — Analytical integrity, affinity and cooperation map](#ak-vis-01)
- [AK-VIS-02 — Influential actors and significant event feed](#ak-vis-02)
- [AK-VIS-03 — One-page interface, synchronized assessment and review](#ak-vis-03)
- [AK-IO-01 — Saving, loading, import validation and exports](#ak-io-01)
- [AK-OPS-01 — Worker scheduling, repetitions and browser operation](#ak-ops-01)
- [AK-VAL-01 — Engineering verification and audit reproducibility](#ak-val-01)
- [AK-VAL-02 — Evidence, assumptions, gaps and change control](#ak-val-02)

</details>

<a id="ak-ov-01"></a>

### AK-OV-01 — Purpose, scope and version identity

[Accessible explanation](NARRATIVE.html#ak-ov-01) · [Decision crosswalk](RULE-CROSSWALK.html).

Behavioral VERSION is 2.4.0 and the assessment display is 2.4.2 at audited commit 9ceb5ae38510f10d2211366406d150500a364a95. validate accepts duration 6–240 whole months, repetitions in {1,5,10,20}, a supported country, bounded numeric overrides, and distinct tool IDs with mobilization in \[0,1\]. Default country PER, duration 120, repetitions 1. Seeds are strings truncated to 100 characters. This documentation adds annotations and formatting, not a new behavior version. Profile, saved-result and observation schemas have separate identifiers.

**Implementation:** [`model.js:VERSION`](source/model.js.html#L28) · [`model.js:validate`](source/model.js.html#L126) · [`worker.js:summary`](source/worker.js.html#L31) · [`model.js:constructor`](source/model.js.html#L787) · [`app.js:profile`](source/app.js.html#L66) · [`app.js:summaryText`](source/app.js.html#L105).

**Assumptions / conformance limits:** Passing implementation checks is not empirical validation. There is no national population expansion weight, endogenous GDP, complete legal system or calibrated policy forecast.

**Provenance:** R01, R03, R54; [S01](SOURCES.html#s01), [S02](SOURCES.html#s02), [S03](SOURCES.html#s03). **Related engineering checks:** [model.test.js](source/model.test.js.html), [initialization.test.js](source/initialization.test.js.html), [reporting.test.js](source/reporting.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-pop-01"></a>

### AK-POP-01 — People and principal roles

[Accessible explanation](NARRATIVE.html#ak-pop-01) · [Decision crosswalk](RULE-CROSSWALK.html).

createPopulation loops over config.countries\[iso3\].counts, creating exactly 1,000 IDs, with role indices 0,1,2,3. Counts are NGA \[635,210,130,25\], ZAF \[610,220,145,25\], IDN \[625,220,130,25\], IND \[650,205,120,25\], CHN \[590,235,150,25\], PER \[630,210,135,25\], BRA \[600,230,145,25\], USA \[570,270,135,25\], DEU \[575,255,145,25\], ITA \[590,245,140,25\]. IDs and people persist; employment transitions update role and organization membership without allocating a new ID. assertInvariants requires agents.length===1000.

**Implementation:** [`model.js:createPopulation`](source/model.js.html#L220) · [`config.js:countries`](source/config.js.html#L9).

**Assumptions / conformance limits:** Country-informed composition has not been statistically calibrated; minimum representation disproportionately samples smaller roles.

**Provenance:** R02, R04, R09; [S01](SOURCES.html#s01). **Related engineering checks:** [initialization.test.js](source/initialization.test.js.html), [model.test.js](source/model.test.js.html), [stress.test.js](source/stress.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-pop-02"></a>

### AK-POP-02 — Heterogeneous starting profiles

[Accessible explanation](NARRATIVE.html#ak-pop-02) · [Decision crosswalk](RULE-CROSSWALK.html).

Agent initialization includes stable geography; org/memberships/support; nine motives; balance, income, living cost and six receipts; knowledge, disclosure completeness, control, descriptive conduct belief, normCorrupt, riskBelief, beliefs and sourceTrust; skill; decisions; last-24 meaningful opportunities; experience; office/eligibility; liabilities and financial pressure. Baseline knowledge .20+.55U, disclosure .15+.50U, control .25+.50U, skill U, norm clamp(−.45+.90U+(informality−50)/180,−1,1). Country shifts add (GE−50)/200 to control, (GE−50)/250 to knowledge, risk clamp(.10+.65RoL/100+centered noise,.05,.85), trust clamp(.15+.65GE/100). Psychological traits and their separate stream are specified in AK-ADP-01. Exact initialization expressions and numeric occurrences are indexed in the appendices.

**Implementation:** [`model.js:createPopulation`](source/model.js.html#L220) · [`adaptation.js:initialize`](source/adaptation.js.html#L175) · [`adaptation.js:recentParticipation`](source/adaptation.js.html#L205) · [`adaptation.js:summary`](source/adaptation.js.html#L521) · [`adaptation.js:valid`](source/adaptation.js.html#L546) · [`adaptation.js:validSummary`](source/adaptation.js.html#L620).

**Assumptions / conformance limits:** Generic heterogeneous priors are not surveys of personality, corruption tolerance, wealth or national inequality.

**Provenance:** R05, R09, R13, AM03; [S01](SOURCES.html#s01). **Related engineering checks:** [initialization.test.js](source/initialization.test.js.html), [adaptation.test.js](source/adaptation.test.js.html), [dynamics.test.js](source/dynamics.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-org-01"></a>

### AK-ORG-01 — Organizations, formal affiliation and affinity

[Accessible explanation](NARRATIVE.html#ak-org-01) · [Decision crosswalk](RULE-CROSSWALK.html).

There are 8 civic and 24 business orgs, country-configured public-function nodes plus 4 service orgs, and 5 parties except CHN’s 3 political organizations. Primary workplace assignment is rank-biased using floor(U^1.3 \* category size), with first members ensuring representation. All noncitizens have primary membership; citizens beyond category-seeding members join with .45 probability. Noncitizens may acquire extra civic membership with .20 probability; people in roles 0/1 may acquire party membership with .10 probability. Support combines .65 person/class affinity+.25 organization draw+.10 own-workplace term, clamped. Leaders are selected among matching-role members, falling back to available members. These assignments are not empirical probabilities.

**Implementation:** [`model.js:createPopulation`](source/model.js.html#L220) · [`model.js:org`](source/model.js.html#L2081) · [`model.js:relationship`](source/model.js.html#L1249).

**Assumptions / conformance limits:** One primary fn field represents each public body; multiple tool capabilities do not amount to a complete multifunctional mandate model. Membership draws are not empirically calibrated.

**Provenance:** R04, R05, R20; [S01](SOURCES.html#s01). **Related engineering checks:** [model.test.js](source/model.test.js.html), [initialization.test.js](source/initialization.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-org-02"></a>

### AK-ORG-02 — Membership, recruitment and continuity of identity

[Accessible explanation](NARRATIVE.html#ak-org-02) · [Decision crosswalk](RULE-CROSSWALK.html).

organizations runs every six months. Due requests are processed at those reviews even though due=month+1, so effective waits can be six months. Leaving secondary membership costs .03 RU, joining .05 RU; officials cannot freely apply to civic/party membership through this routine, and public agency admission occurs through employment. Per-agent review probability .04; low-affinity secondary membership threshold .30. Service agencies replace one eligible official per review; 24 keyed citizen applicants are ranked by skill, with connected/fallback patronage candidates. Employment transitions preserve IDs, homes, finances, expectations and ties, move workplace coordinates and scale income by the role ratio (official 1.05 versus other .95). Annual rotation transfers at most one nonleader official per service agency to the next agency after a decision and .05 RU cost.

**Implementation:** [`model.js:organizations`](source/model.js.html#L3117) · [`model.js:changeEmployment`](source/model.js.html#L3092).

**Assumptions / conformance limits:** No explicit retirement, birth/death, general private-sector hiring or residential relocation pipeline exists. Recruitment/turnover and leadership succession are simplified.

**Provenance:** R06, R53; [S01](SOURCES.html#s01). **Related engineering checks:** [audit.test.js](source/audit.test.js.html), [reporting.test.js](source/reporting.test.js.html), [model.test.js](source/model.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-geo-01"></a>

### AK-GEO-01 — Stable geography and selective encounters

[Accessible explanation](NARRATIVE.html#ak-geo-01) · [Decision crosswalk](RULE-CROSSWALK.html).

Homes cluster around five normalized centers; angle is uniform and radius sqrt(U)\*.18, with coordinates clamped inside \[.025,.975\]. Organization locations vary around the same centers. nearest samples up to six unique candidates, uses remote probability .15, otherwise distance weight exp(−4d), and multiplies by .4+affinity+.8\*relationship access. Contact is selected by −ln(U)/weight. Workplace distance is used for administrative and business-political contexts; home distance otherwise. Reporting cost additionally depends on geographic distance. No all-pairs encounter search is used.

**Implementation:** [`model.js:createPopulation`](source/model.js.html#L220) · [`model.js:nearest`](source/model.js.html#L1497) · [`model.js:encounters`](source/model.js.html#L2227).

**Assumptions / conformance limits:** Coordinates are stylized, dimensionless locations, not a geographic reconstruction of national cities. Homes never relocate in the current engine.

**Provenance:** R07; [S01](SOURCES.html#s01). **Related engineering checks:** [audit.test.js](source/audit.test.js.html), [visualization.test.js](source/visualization.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-mot-01"></a>

### AK-MOT-01 — Nine interests and beneficiaries

[Accessible explanation](NARRATIVE.html#ak-mot-01) · [Decision crosswalk](RULE-CROSSWALK.html).

Motive order is \[social/self, social/group, social/public, economic/self, economic/group, economic/public, political/self, political/group, political/public\]. Role-domain proportions are \[.40,.35,.25\], \[.25,.50,.25\], \[.35,.35,.30\], \[.25,.30,.45\]. Group beneficiary share=.30+.002(kinship−50); public=.30+.002(public/private separation−50); self is remainder. Independent gamma draws have shape 6\*domainShare\*beneficiaryShare and unit scale, then normalize to one. Positivity and unit sum are invariants. Long-run target is normalized originalWeight\*exp(.35\*salience), approached at .002/month. Group consequences are scenario-valued components, not a complete accounting of transfers to a named faction.

**Implementation:** [`model.js:motives`](source/model.js.html#L95) · [`adaptation.js:advance`](source/adaptation.js.html#L419).

**Assumptions / conformance limits:** The concentration 6, role shares, cultural mappings and motive drift are exploratory priors. Relevant-group utility is not fully resolved among multiple affiliations.

**Provenance:** R08, R09, R10, AM01; [S01](SOURCES.html#s01), [S04](SOURCES.html#s04), [S05](SOURCES.html#s05). **Related engineering checks:** [model.test.js](source/model.test.js.html), [adaptation.test.js](source/adaptation.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-dec-01"></a>

### AK-DEC-01 — Subjective choice, TPB and random utility

[Accessible explanation](NARRATIVE.html#ak-dec-01) · [Decision crosswalk](RULE-CROSSWALK.html).

For option o, need=clamp((cost+.20)/max(.20,.90\*expectedIncome+.15\*balance),.5,2)+.50\*financialPressure; multiply economic/self consequence by need. If corrupt, subtract riskBelief from economic/self, .30\*riskBelief from social/self, and (.60 if office else .15)\*riskBelief from political/self. Raw attitude=sum(w\[k\]\*effect\[k\])−effort; raw norm=explicit option.norm else (corrupt?normCorrupt:−normCorrupt); raw control=explicit option.control else agent.control. Adaptive.decision applies only eligible component memories. Utility=adjusted attitude+.50\*adjusted norm+.25\*(2\*adjusted control−1)−.20\*ln(−ln(U)). Select strict greatest utility in option order. This hybrid is the model’s operational choice, not an equation estimated by Ajzen. Context mapping limits policy effects to appropriate decisions.

**Implementation:** [`model.js:choose`](source/model.js.html#L969) · [`adaptation.js:decision`](source/adaptation.js.html#L503) · [`adaptation.js:context`](source/adaptation.js.html#L490).

**Assumptions / conformance limits:** Fixed consequence valuations, utility coefficients and Gumbel scale .20 are uncalibrated. Information uncertainty is not an explicit Bayesian model or a separately observed intention time series.

**Provenance:** R11, R12, R13, AM01; [S01](SOURCES.html#s01), [S04](SOURCES.html#s04), [S05](SOURCES.html#s05). **Related engineering checks:** [model.test.js](source/model.test.js.html), [adaptation.test.js](source/adaptation.test.js.html), [audit.test.js](source/audit.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-dec-02"></a>

### AK-DEC-02 — Action-specific perceived consequences

[Accessible explanation](NARRATIVE.html#ak-dec-02) · [Decision crosswalk](RULE-CROSSWALK.html).

effects(social,economic,political) concatenates three length-3 arrays and rejects a vector not containing nine finite values. Explicit effects are supplied at each choose call, including ordinary lawful options, improper offers, acceptance, extortion/refusal, case delay/dismissal, implementation/selective/resist/redirect, priority/allocation, budget authorization, publication/sharing, joining/exiting and candidate choice. The generated Action catalogue includes every effects() call, its exact expressions, option name/context, reference code and source location. Need/risk/policy adjustments are applied later in choose; no array is silently converted into a realized money transfer.

**Implementation:** [`model.js:effects`](source/model.js.html#L976) · [`model.js:encounter`](source/model.js.html#L2078) · [`model.js:budgetReview`](source/model.js.html#L1870) · [`model.js:processCases`](source/model.js.html#L2457).

**Assumptions / conformance limits:** Not every context described in the original Word document has a distinct implemented initiator or action set; see the gap register.

**Provenance:** R10, R12, R14, R44; [S01](SOURCES.html#s01), [S02](SOURCES.html#s02). **Related engineering checks:** [audit.test.js](source/audit.test.js.html), [model.test.js](source/model.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-act-01"></a>

### AK-ACT-01 — Encounters, corruption and victimization

[Accessible explanation](NARRATIVE.html#ak-act-01) · [Decision crosswalk](RULE-CROSSWALK.html).

Monthly administrative demand probability is .45 for roles 0/1 and .12 for roles 2/3. Businesses have .10 probability of a politician contract contact; officeholding politicians have .20 probability of administrative pressure. Campaign citizen contact is .04 during the last six months before a nonappointment review. Stakes: contract gain 1.20, political-pressure .75, other .60; bribe .25 for contracts else .10+.15U. Successful contract diversion transfers up to .80 RU treasury→business organization; tax advantage transfers up to .15 treasury→person and increments foregoneRevenue. Related-party conflict review can block completion with probability .35\*recordQuality\*operative conflict capability. Extortion records the demand even if the victim refuses or cannot pay; paid victim burden is recorded separately. encounterCorruptActs counts completed voluntary encounters and extortion demands, not payments alone.

**Implementation:** [`model.js:encounter`](source/model.js.html#L2078) · [`model.js:encounters`](source/model.js.html#L2227) · [`model.js:completeCorruption`](source/model.js.html#L1141) · [`model.js:act`](source/model.js.html#L1097).

**Assumptions / conformance limits:** The headline “completed corrupt encounters” includes extortion demands without successful payment. Administrative encounters themselves do not have a universal per-person or per-official time budget. Some original proactive politician/business and official/protection scenarios are absent.

**Provenance:** R14, R44, R45; [S01](SOURCES.html#s01). **Related engineering checks:** [model.test.js](source/model.test.js.html), [audit.test.js](source/audit.test.js.html), [dynamics.test.js](source/dynamics.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-act-02"></a>

### AK-ACT-02 — Meaningful choices and integrity recovery

[Accessible explanation](NARRATIVE.html#ak-act-02) · [Decision crosswalk](RULE-CROSSWALK.html).

A meaningful choice is created only for an option set of length&gt;1 containing at least one corrupt option. Its key includes month, context, action key and agent ID; the last 24 entries are retained. Lawful act() can complete only a still-open current-month keyed opportunity. Corrupt act() always records conduct, creating an entry if necessary. One corrupt act sets state=corrupt, lastCorrupt=current month and recoveryChoices=0. Recovery requires month−lastCorrupt&gt;=6 and recoveryChoices&gt;=3. Class activity uses current-role agents’ last-24 entries; its denominator includes attempted/uncompleted meaningful opportunities, not just successful acts. History does not fade with time alone.

**Implementation:** [`model.js:choose`](source/model.js.html#L969) · [`model.js:act`](source/model.js.html#L1097) · [`model.js:recover`](source/model.js.html#L3435) · [`model.js:classActivity`](source/model.js.html#L3477).

**Assumptions / conformance limits:** The criterion is an implemented option/record definition, not a complete legal adjudication. Map radial participation and icon recovery are different summaries of persistent history.

**Provenance:** R14, R60; [S01](SOURCES.html#s01). **Related engineering checks:** [dynamics.test.js](source/dynamics.test.js.html), [visualization.test.js](source/visualization.test.js.html), [audit.test.js](source/audit.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-ins-01"></a>

### AK-INS-01 — Role expectations and institutionalized ease

[Accessible explanation](NARRATIVE.html#ak-ins-01) · [Decision crosswalk](RULE-CROSSWALK.html).

A reference is relevant if it leads the counterpart’s organization or directional trust exceeds .45. For an encounter classed relevant, approval probability is clamp(.50+.40\*Nref) for improper conduct and clamp(.50−.40\*Nref) for lawful conduct. Observed approval/disapproval maps to a ±1 signal; the observing person’s normCorrupt moves .04 toward it, clamped \[−1,1\]. The corresponding organization/role practice strength moves .015 toward approval (0/1). Honest/corrupt practice priors each lie \[.20,.60\] and decay by .999/month. Familiarity multiplies certain decision efforts and service work by (1−.40\*practice). The macro .65 threshold only emits a consolidation/erosion event; it is not an institution switch that changes the rules.

**Implementation:** [`model.js:link`](source/model.js.html#L1423) · [`model.js:practice`](source/model.js.html#L3530) · [`model.js:processServices`](source/model.js.html#L2272).

**Assumptions / conformance limits:** Practical work reductions are implemented for routine services; many other reductions affect subjective effort rather than actual charged person-months. Reference transmission is not a complete multilayer institution model.

**Provenance:** R15, R16, R17; [S01](SOURCES.html#s01), [S04](SOURCES.html#s04). **Related engineering checks:** [dynamics.test.js](source/dynamics.test.js.html), [audit.test.js](source/audit.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-adp-01"></a>

### AK-ADP-01 — Individual receptiveness and numerical psychology

[Accessible explanation](NARRATIVE.html#ak-adp-01) · [Decision crosswalk](RULE-CROSSWALK.html).

Initial openness, retention and learning are .20+.60\*keyedU; baseline reporting safety .20+.60U. With public motive share P, economic-self E, honest reference J=(1−normCorrupt)/2, participation H, knowledge K and experienced trust T: alignment for risk=clamp(.45+.40E+.15K); for attitude/norm=clamp(.25+.35P+.30J−.20H); otherwise=clamp(.35+.35K+.30T). Uptake=clamp((.10+.55\*openness+.20\*alignment+.15\*learning)\*credibility). Conditional strength=clamp(.25+.45\*learning+.30\*alignment). Uptake and accepted magnitude use separate keyed uniforms. Feedback salience approaches experienced components at .08\*credibility; feedback memory uses .10 adjustment. These traits are relative model variables, not psychometric measurements.

**Implementation:** [`adaptation.js:initialize`](source/adaptation.js.html#L175) · [`adaptation.js:receptiveness`](source/adaptation.js.html#L213) · [`adaptation.js:feedback`](source/adaptation.js.html#L237) · [`model.js:expose`](source/model.js.html#L1052) · [`adaptation.js:knowledge`](source/adaptation.js.html#L378) · [`adaptation.js:safety`](source/adaptation.js.html#L387).

**Assumptions / conformance limits:** Receptiveness coefficients and distributions are assumptions. There is no empirical individual personality calibration.

**Provenance:** AM03, AM04, R13; [S01](SOURCES.html#s01), [S04](SOURCES.html#s04). **Related engineering checks:** [adaptation.test.js](source/adaptation.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-adp-02"></a>

### AK-ADP-02 — Diminishing influence, reinforcement and wear-off

[Accessible explanation](NARRATIVE.html#ak-adp-02) · [Decision crosswalk](RULE-CROSSWALK.html).

For element ceiling M and n previous delivered component exposures, cap=M\*max(.05,.70^n), incrementing n even if uptake is rejected. Accepted intensity I=U\*individual strength\*delivery quality. Gain=cap\*I; restoration=.35\*I\*max(0,peak−level); level=min(M,level+gain+restoration). Duplicate event IDs are ignored within a bounded 32-event memory; lifetime counters remain. Monthly decay is exp(−ln(2)/(policyHalfLife\*(.5+retention))). Cross-policy aggregate bounds are attitude .45, norm .45, lawful control .50, improper control .50, risk .60, knowledge .60, safety .60. Context and elementContext gates apply before decision adjustment. Education moves corrupt attitude toward min(−1,attitude); norm toward −1 for corrupt/+1 for lawful; lawful control toward one except silent/coerced/defer/resist options. Risk and safety use experience-specific targets, not automatic favorable directions.

**Implementation:** [`adaptation.js:observe`](source/adaptation.js.html#L251) · [`adaptation.js:influence`](source/adaptation.js.html#L331) · [`adaptation.js:advance`](source/adaptation.js.html#L419) · [`adaptation.js:decision`](source/adaptation.js.html#L503) · [`adaptation.js:refresh`](source/adaptation.js.html#L367).

**Assumptions / conformance limits:** Delivered-but-rejected episodes still consume novelty. Bounded event memories do not provide permanent global deduplication after older IDs expire; generated event IDs normally remain unique.

**Provenance:** AM02, AM04, AM05, AM06; [S01](SOURCES.html#s01), [S04](SOURCES.html#s04). **Related engineering checks:** [adaptation.test.js](source/adaptation.test.js.html), [reporting.test.js](source/reporting.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-adp-03"></a>

### AK-ADP-03 — Evolving traits, motives, skill and income expectations

[Accessible explanation](NARRATIVE.html#ak-adp-03) · [Decision crosswalk](RULE-CROSSWALK.html).

Each month salience fades by .99 and feedback by .98. Motives approach normalized initialWeights\*exp(.35\*salience) at .002. Openness approaches base+.12\*(2\*trust−1)−.08\*participation at .01/month, bounded within .15 of base and \[0,1\]. Learning and retention approach base+.15\*feedback and base+.10\*feedback at .005/month. Actual work improves skill by .003\*time\*(1−skill), capped at min(1,initialSkill+.20). Expected income moves toward actual gross lawful receipts at rate .05+.25\*learning; decision need uses .90 of that expectation for net receipts. Supplements enter the same month’s receipt observation, avoiding a second low-income update.

**Implementation:** [`adaptation.js:advance`](source/adaptation.js.html#L419) · [`adaptation.js:work`](source/adaptation.js.html#L457) · [`adaptation.js:incomeExperience`](source/adaptation.js.html#L470).

**Assumptions / conformance limits:** No independent age process, personality test, retirement or general skill attrition is simulated.

**Provenance:** AM04, R13, R53; [S01](SOURCES.html#s01). **Related engineering checks:** [adaptation.test.js](source/adaptation.test.js.html), [dynamics.test.js](source/dynamics.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-net-01"></a>

### AK-NET-01 — Directional trust and useful relationships

[Accessible explanation](NARRATIVE.html#ak-net-01) · [Decision crosswalk](RULE-CROSSWALK.html).

A link stores a,b, trustAB,trustBA,strength,count,corruptCount,born,last,lastKind. Access=clamp(.15 if shared membership + strength\*directional trust); related means access&gt;.12. Positive interactions can create a missing tie with probability .10 and initialize trust/strength .25/.10. Cooperation increments strength .03, forward trust .025, reverse .020; coercive/negative interaction decrements .06,.08,.04 respectively. Support toward the counterpart’s organization shifts +.015 or −.04. Each month .peers samples at most two sufficiently strong/trusted contacts using −ln(U)/(strength\*trust). Initial ties derive from primary organizational members and are not automatically cross-class clusters.

**Implementation:** [`model.js:relationship`](source/model.js.html#L1249) · [`model.js:related`](source/model.js.html#L1416) · [`model.js:link`](source/model.js.html#L1423) · [`model.js:tie`](source/model.js.html#L1409) · [`model.js:peers`](source/model.js.html#L1363) · [`model.js:index`](source/model.js.html#L830) · [`model.js:recentAmount`](source/model.js.html#L1397).

**Assumptions / conformance limits:** Relationships decay mainly through negative encounters, not a universal expiry timer. Strong access is a simplified protection opportunity; legal intervention still requires its actual process.

**Provenance:** R49, R37, R53; [S01](SOURCES.html#s01), [S02](SOURCES.html#s02). **Related engineering checks:** [audit.test.js](source/audit.test.js.html), [visualization.test.js](source/visualization.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-inf-01"></a>

### AK-INF-01 — Journalism, publication and funding leverage

[Accessible explanation](NARRATIVE.html#ak-inf-01) · [Decision crosswalk](RULE-CROSSWALK.html).

publish selects a media outlet by keyed draw; publication requires .06 RU and a publish/withhold utility choice. Funding dependence uses active donor payments within 12 months, specifically linking a subject’s organization to the outlet, divided by estimated outlet income plus recent total funding. Every six months up to three business→civic funding opportunities offer .80 RU, subject to both donor/recipient choices and actual balances. Accepted funding lowers editorialIndependence by .015, bounded. Record visibility informs scoop access; strategic contested claims occur every nine months. Published linked allegations can refer a matter with .20 probability. A correction is attempted annually for a previously false story older than two months. Final decision stories carry announced decision and collected amount, not hidden guilt.

**Implementation:** [`model.js:publish`](source/model.js.html#L2792) · [`model.js:funding`](source/model.js.html#L3003) · [`model.js:fundingDependence`](source/model.js.html#L1389).

**Assumptions / conformance limits:** No generated articles or complete social feed exist. Strategic misinformation content and correction discovery are simplified world-generator rules; editors do not explicitly optimize the falsity of content. Publication charges money but not a full shared newsroom time budget.

**Provenance:** R46, R47, R48, R50; [S01](SOURCES.html#s01), [S02](SOURCES.html#s02), [S06](SOURCES.html#s06). **Related engineering checks:** [audit.test.js](source/audit.test.js.html), [dynamics.test.js](source/dynamics.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-inf-02"></a>

### AK-INF-02 — Access, sharing and the separation of belief from truth

[Accessible explanation](NARRATIVE.html#ak-inf-02) · [Decision crosswalk](RULE-CROSSWALK.html).

information considers at most the last 12 stories from three months and at most three directly accessed stories/person/month. Exposure=clamp((.03+.15\*outletReach+.08\*localProximity)\*(.5+civilLiberties/100)). Credibility=sourceTrust\*storyEvidence\*(.25+.50\*openness+.25\*learning). Subject belief moves .15\*credibility toward .70 for a claim or .15 for a correction; descriptive belief moves .04\*credibility. Accepted correction raises sourceTrust .03; support for subject memberships moves −.025\*credibility, or +.020 for correction. Sharing uses utility and at most two trusted peers, changing peer belief by .08\*relationshipWeight\*credibility. Descriptive conduct beliefs and normative reference expectations are separate fields. Public-case risk learning is deduplicated against personal adjudication.

**Implementation:** [`model.js:information`](source/model.js.html#L2890) · [`adaptation.js:messageRate`](source/adaptation.js.html#L480) · [`model.js:communicatedDecision`](source/model.js.html#L2732).

**Assumptions / conformance limits:** Beliefs are bounded scalar memories rather than Bayesian probabilities. General descriptive belief directly informs political reputation defaults; it is not a separate universal norm term in every decision.

**Provenance:** R13, R46, R47, R48; [S01](SOURCES.html#s01), [S04](SOURCES.html#s04), [S06](SOURCES.html#s06). **Related engineering checks:** [audit.test.js](source/audit.test.js.html), [adaptation.test.js](source/adaptation.test.js.html), [dynamics.test.js](source/dynamics.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-eco-01"></a>

### AK-ECO-01 — Money, lawful receipts and living needs

[Accessible explanation](NARRATIVE.html#ak-eco-01) · [Decision crosswalk](RULE-CROSSWALK.html).

transfer clips finite requested amount to the source’s nonnegative balance. totalMoney includes outside, treasury, all persons, organizations and reform allocations. GDP scale g=clamp(sqrt(GDP-PPP/20000),.6,1.8); opening treasury=1800g and outside=10,000,000. Monthly outside→treasury=180g; public funding covers modeled official scheduled wages plus 3 RU; other org funding is 3+memberCount\*(business1.25,party1.80,other.35), followed by overhead 1+.04members. Wage withholding=.10 of actual receipt. Needs=.90\*initial income\*(.65+.50 fixed U), with GDP scaling. Consumption pays .72 outside and .28 a sampled business. Financial pressure=.90old+.10\*(1−actualConsumption/needs), clamped. Agent balance cannot be negative; unpaid ordinary needs do not become a separate debt stock.

**Implementation:** [`model.js:totalMoney`](source/model.js.html#L184) · [`model.js:transfer`](source/model.js.html#L197) · [`model.js:monthlyAccounts`](source/model.js.html#L1533) · [`model.js:changeEmployment`](source/model.js.html#L3092).

**Assumptions / conformance limits:** Outside is a large finite balancing account, not empirically modeled trade or taxation. GDP is fixed. Public transfers for a tax advantage are a stylized foregone-revenue mechanism, not a full tax-return model.

**Provenance:** R30, R42, R43; [S01](SOURCES.html#s01). **Related engineering checks:** [dynamics.test.js](source/dynamics.test.js.html), [model.test.js](source/model.test.js.html), [stress.test.js](source/stress.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-eco-02"></a>

### AK-ECO-02 — Shared public staff capacity and priorities

[Accessible explanation](NARRATIVE.html#ak-eco-02) · [Decision crosswalk](RULE-CROSSWALK.html).

Agency monthly capacity=matching-role staffCount\*(.25+.40\*organization skill+.35\*mean staff skill). scheduleWork scores reform/routine/case options, exponentiates clamp(utility,−3,3)\*2 and normalizes them into category time limits. Each task debits both remaining agency time and its relevant limit, recording reformUsed/routineUsed/caseUsed. Reform need=.60 if any active allocation; routine need=.50+serviceCount/memberCount for service agencies else .05; case need=.10+assignedOpenFiles/memberCount. Within categories priorities use utility difference between prioritize and defer. Cost, case readiness and money can prevent use even when category time remains. Invariant checks prevent category totals exceeding common capacity.

**Implementation:** [`model.js:monthlyAccounts`](source/model.js.html#L1533) · [`model.js:scheduleWork`](source/model.js.html#L1591) · [`model.js:priorities`](source/model.js.html#L1295).

**Assumptions / conformance limits:** There is no reusable shared-infrastructure asset deduplication across policy budgets, nor a general private-person time ledger. Reservations do not automatically rebalance unused time within the month.

**Provenance:** R33, R35, R39, R40, R41, R43; [S01](SOURCES.html#s01). **Related engineering checks:** [audit.test.js](source/audit.test.js.html), [dynamics.test.js](source/dynamics.test.js.html), [stress.test.js](source/stress.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-eco-03"></a>

### AK-ECO-03 — Service queues and bounded experience feedback

[Accessible explanation](NARRATIVE.html#ak-eco-03) · [Decision crosswalk](RULE-CROSSWALK.html).

Service priority is paid/preferential first, then arrival month and person ID. Work requirement is .025 PM service, .020 tax, .040 permit, multiplied by 1−.40\*honest practice; money cost .015 RU. A completed task contributes satisfaction clamp(1−delay/6); an unfinished task contributes zero and increments personal waiting once. All a person’s monthly task satisfactions are averaged. Trust adjusts .08 toward satisfaction; control .025 toward .20+.70\*satisfaction. Organizational support adjusts .04 times that organization’s request share; governing-party support .02 toward satisfaction. Service-contact count increments once at arrival. Aggregate serviceWait records completed delays, not a running sum for every still-pending request.

**Implementation:** [`model.js:addService`](source/model.js.html#L2012) · [`model.js:processServices`](source/model.js.html#L2272) · [`model.js:experienced`](source/model.js.html#L1265).

**Assumptions / conformance limits:** Service units/costs are normalized assumptions. Formal denial and detailed service quality are not independently modeled.

**Provenance:** R07, R43, R59; [S01](SOURCES.html#s01). **Related engineering checks:** [dynamics.test.js](source/dynamics.test.js.html), [audit.test.js](source/audit.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-cou-01"></a>

### AK-COU-01 — Country observations, proxies and uncertainty

[Accessible explanation](NARRATIVE.html#ak-cou-01) · [Decision crosswalk](RULE-CROSSWALK.html).

Country set NGA,ZAF,IDN,IND,CHN,PER,BRA,USA,DEU,ITA. profiles.js contains GDP PPP and WGI GE/RoL/regulatory-quality descriptors with source metadata; baseline.js adds FH 2026 civil liberties /60, FH2025 electoral-process /12 and participation /16 rescaled to percentages. Culture defaults are 50. Ordinary legal scope .75; ordinary capability .12+.65GE fraction plus ±.11 noise, bounded \[.08,.90\]. For mapped narrow OECD instruments scope=.40+.45\*regulations fraction; capability=.75\*ordinary+.25\*(.15+.65\*practice fraction) plus the same noise/bounds. Nigeria/India protection scope exceptions .40/.45 are explicit estimates. User overrides are validated and applied before warm-up. Generated country/data appendices retain every stored numeric value and URL.

**Implementation:** [`model.js:conditions`](source/model.js.html#L170) · [`baseline.js:conditions`](source/baseline.js.html#L81) · [`baseline.js:organization`](source/baseline.js.html#L100) · [`profiles.js:data`](source/profiles.js.html#L9).

**Assumptions / conformance limits:** No new source verification or live national updates are implied by this code audit. Regulatory quality is a proxy for business conditions; cultural scores, class composition, allocations and most costs lack comparable empirical calibration.

**Provenance:** R18, R19, R21, R54; [S01](SOURCES.html#s01), [S07](SOURCES.html#s07). **Related engineering checks:** [initialization.test.js](source/initialization.test.js.html), [stress.test.js](source/stress.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-cou-02"></a>

### AK-COU-02 — Functional architecture and jurisdiction

[Accessible explanation](NARRATIVE.html#ak-cou-02) · [Decision crosswalk](RULE-CROSSWALK.html).

eligibleTool gates public functions and, for pay/merit/rotation/declarations/conflicts, applicable individual roles. responsible routes civil matters to a civil body when present; China administrative decisions can use prevention; service-origin administrative cases can return to the employer. India complaints and Peru vote-buying use integrity intake. Covered NGA/IDN/CHN specialist matters may investigate through prevention. Criminal stage2 uses prosecution if available, otherwise investigation. Italy political-pressure conduct can take an administrative route. Service-origin intake uses jurisdiction, .12 PM/.01 RU and one-month handoff. Config nodes, names, political modes, cycles and relative first-review phases are enumerated in the generated configuration appendix.

**Implementation:** [`config.js:countries`](source/config.js.html#L9) · [`model.js:eligibleTool`](source/model.js.html#L1175) · [`model.js:responsible`](source/model.js.html#L2420) · [`model.js:makeCase`](source/model.js.html#L2313).

**Assumptions / conformance limits:** Routing is stylized, not a comprehensive current offence/jurisdiction map. Institutional independence, appointment protections and civil/criminal procedures are only partially represented.

**Provenance:** R19, R20, R25, R37, R45, R51; [S01](SOURCES.html#s01), [S07](SOURCES.html#s07). **Related engineering checks:** [initialization.test.js](source/initialization.test.js.html), [audit.test.js](source/audit.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-ini-01"></a>

### AK-INI-01 — A reconstructed pre-policy year

[Accessible explanation](NARRATIVE.html#ak-ini-01) · [Decision crosswalk](RULE-CROSSWALK.html).

createInitial starts a raw population at month −12, sets eligibility and psychological clocks accordingly, and runs twelve ordinary monthly steps with no selected reforms under a dedicated pre-policy stream derived from country and initialSeed. It preserves cases/services, receipts, beliefs, history and networks; retains the latest three realized decisions; stores warm-up history/metrics in initialization; resets intervention-period metric/distribution counters and event feed; and resets initial organizational controllers. An active configuration cache avoids repeated warm-up. validateInitial reconstructs and checks expected fields, exact identities/counters, money and role counts. initialDifference ignores object-key ordering and tolerates only finite noninteger relative rounding &lt;=1e−10; imported values are retained rather than replaced.

**Implementation:** [`model.js:createInitial`](source/model.js.html#L522) · [`model.js:initialDifference`](source/model.js.html#L589) · [`model.js:validateInitial`](source/model.js.html#L616) · [`reporting.js:remember`](source/reporting.js.html#L215) · [`app.js:signature`](source/app.js.html#L284) · [`app.js:initialFor`](source/app.js.html#L291).

**Assumptions / conformance limits:** Twelve months is a finite reconstruction, not a demonstrated equilibrium or estimated national backlog. Country-condition overrides change that reconstructed past; selecting different reforms or future event seeds does not.

**Provenance:** R13, R55, R60; [S01](SOURCES.html#s01). **Related engineering checks:** [initialization.test.js](source/initialization.test.js.html), [dynamics.test.js](source/dynamics.test.js.html), [reporting.test.js](source/reporting.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-rng-01"></a>

### AK-RNG-01 — Keyed probability, paired worlds and exact replay

[Accessible explanation](NARRATIVE.html#ak-rng-01) · [Decision crosswalk](RULE-CROSSWALK.html).

draw returns (hash(String(seed)+"|"+key.join("|"))+.5)/2^32. The 32-bit hash uses FNV-style accumulation and integer mixing, not cryptographic security. Runtime keys include eventSeed|replicate, month, process and stable IDs; initialization uses distinct country/society, motive and psychological namespaces. Occasion-specific Gumbel draws are keyed by option name. The browser uses crypto.getRandomValues to obtain a new event identity unless exact replay is requested; continuing/stepping preserves the stream. Replicates append the replicate index. Legal coverage and diagnostic draws have separate fixed namespaces. Divergent endogenous events need not have true counterparts even when common shocks are paired.

**Implementation:** [`model.js:hash`](source/model.js.html#L43) · [`model.js:draw`](source/model.js.html#L56) · [`model.js:rand`](source/model.js.html#L823) · [`model.js:generator`](source/model.js.html#L63) · [`run-seeds.js:newEventSeed`](source/run-seeds.js.html#L15) · [`run-seeds.js:prepareRun`](source/run-seeds.js.html#L30).

**Assumptions / conformance limits:** A 32-bit hash permits collisions and is not a security RNG or a proof of statistical independence. Determinism does not imply absence of probabilistic rules.

**Provenance:** R12, R55; [S01](SOURCES.html#s01). **Related engineering checks:** [run-seeds.test.js](source/run-seeds.test.js.html), [model.test.js](source/model.test.js.html), [worker.test.js](source/worker.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-ref-01"></a>

### AK-REF-01 — Formal reform selection and legal scope

[Accessible explanation](NARRATIVE.html#ak-ref-01) · [Decision crosswalk](RULE-CROSSWALK.html).

adopt creates a policy record with initialRate=rate=user mobilization, scope=originalScope=.85, formal=active, requirements, allocations, counters and reviews. Recipient organizations’ legal entry for that tool is set to scope. coverage returns eligible legal scope, constrained by policy.scope if selected. covered compares a fixed person/body/tool hash to that scope. operational is coverage\*capability for aggregate use or a covered 0/1 gate\*capability for a specified person. operatingPolicy additionally requires active formal status, installed allocation and last delivery at least currentMonth−1. expose requires that operating gate. Zero new funding preserves baseline capabilities but does not prevent the selected reform’s formal scope change.

**Implementation:** [`model.js:adopt`](source/model.js.html#L921) · [`model.js:coverage`](source/model.js.html#L1213) · [`model.js:covered`](source/model.js.html#L1224) · [`model.js:operational`](source/model.js.html#L1240) · [`model.js:cap`](source/model.js.html#L862).

**Assumptions / conformance limits:** The common .85 scope and generic country/tool uplift are not a complete set of 120 independently calibrated reforms. Coverage-sensitive diagnostics can improve on formal adoption without demonstrating new delivery.

**Provenance:** R22, R23, R24, R25, R26; [S01](SOURCES.html#s01), [S03](SOURCES.html#s03). **Related engineering checks:** [model.test.js](source/model.test.js.html), [adaptation.test.js](source/adaptation.test.js.html), [audit.test.js](source/audit.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-ref-02"></a>

### AK-REF-02 — Requirements, mobilization and initial allocation

[Accessible explanation](NARRATIVE.html#ak-ref-02) · [Decision crosswalk](RULE-CROSSWALK.html).

For eligible official+politician count n and GDP scale g, requirements are setup=(2+n\*a\_p)g, monthly=(1+n\*b\_p)g and time=1+n\*c\_p, with each tool’s \[a,b,c\] in config.costs. recipients selects function-eligible bodies; if both central and regional recipients exist, shares are centralShare/centralCount or (1−centralShare)/localCount; otherwise equal. Per month request=rate\*(monthly+setup/3 while any recipient is uninstalled). Disbursement is transfer(treasury,allocation,request\*share); requested and actually mobilized are distinct. Priority ordering is utility-based, not an independent random funding percentage. All cost tuples and allocation priors are reproduced in the generated parameter/configuration appendices.

**Implementation:** [`model.js:requirements`](source/model.js.html#L207) · [`model.js:recipients`](source/model.js.html#L879) · [`model.js:fundPolicies`](source/model.js.html#L1628) · [`config.js:costs`](source/config.js.html#L164).

**Assumptions / conformance limits:** Allocation is not measured national budget distribution. Shared infrastructure setup is not deduplicated across policies; cost tuples and 100% requirements remain exploratory.

**Provenance:** R27, R28, R29, R30, R33, R39, R40; [S01](SOURCES.html#s01). **Related engineering checks:** [audit.test.js](source/audit.test.js.html), [model.test.js](source/model.test.js.html), [stress.test.js](source/stress.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-ref-03"></a>

### AK-REF-03 — Implementation, resistance and setup

[Accessible explanation](NARRATIVE.html#ak-ref-03) · [Decision crosswalk](RULE-CROSSWALK.html).

Each allocation needs reqWork=requirement.time\*share and reqMoney=requirement.monthly\*share. If money is absent or available reform time&lt;.05 PM, response is awaiting resources. Resistance spends no delivery work; redirection transfers up to .45\*reqMoney to the leader and uses .05 PM, producing a conduct record. Fidelity=(.45 for selective else1)\*coverage/originalScope. Available dose=min(1,availableTime/reqWork,allocationBalance/reqMoney)\*fidelity; used=reqWork\*dose, operating money=reqMoney\*dose. Setup additionally spends up to setup\*share/3\*dose, accumulates dose/3 work and decrements its three-step delay on work attempts. Installation requires delay&lt;=0, setupWork&gt;=1 and at least .85 of estimated setup spending. Installed delivery raises capability .08\*dose toward .98 and invokes only the selected tool’s actual mechanisms.

**Implementation:** [`model.js:implementPolicies`](source/model.js.html#L1647) · [`model.js:priorities`](source/model.js.html#L1295) · [`model.js:operatingPolicy`](source/model.js.html#L1041).

**Assumptions / conformance limits:** Setup money and operating money can both be spent before installation. “Three months” is a minimum work-stage parameter, not a guaranteed completion time. Some prose channel descriptions are broader than actual exposure hooks.

**Provenance:** R31, R33, R34, R35, R40, R41; [S01](SOURCES.html#s01). **Related engineering checks:** [audit.test.js](source/audit.test.js.html), [model.test.js](source/model.test.js.html), [adaptation.test.js](source/adaptation.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-ref-04"></a>

### AK-REF-04 — Resource reviews, narrowing and suspension

[Accessible explanation](NARRATIVE.html#ak-ref-04) · [Decision crosswalk](RULE-CROSSWALK.html).

budgetReview runs every six months. Controller chooses increase/hold/decrease/narrow; budget leader chooses authorize/withhold, and a parliamentary coalition may require a second party leader’s approval. An authorized increase adds .10 to rate only if treasury&gt;3\*monthly requirements; decrease subtracts .10, clamped \[0,1\]. A later approved narrowing after at least one prior approved narrowing reduces scope .10, floor .20; at scope&lt;=.25 a .25 draw can set formal=suspended. Feedback delivery=sum allocation work/(time requirement\*max(1,month)), support=mean(.6 governing-party affinity+.4 experienced trust), resistance=share resist/redirect, waiting=mean personal wait/contact. No routine deposits are made by supporters.

**Implementation:** [`model.js:budgetReview`](source/model.js.html#L1870) · [`model.js:policyFeedback`](source/model.js.html#L1331) · [`model.js:politicalReview`](source/model.js.html#L3317).

**Assumptions / conformance limits:** Exceptional event-triggered reviews, full repeal, explicit reinstatement and automatic trajectory classification are not implemented. Narrowing consent is simplified and not full national legislative procedure.

**Provenance:** R31, R32, R36, R37, R38; [S01](SOURCES.html#s01), [S08](SOURCES.html#s08). **Related engineering checks:** [audit.test.js](source/audit.test.js.html), [model.test.js](source/model.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-cas-01"></a>

### AK-CAS-01 — Signals, reporting and case intake

[Accessible explanation](NARRATIVE.html#ak-cas-01) · [Decision crosswalk](RULE-CROSSWALK.html).

Report cost=.18\*(1−aggregate complaints access)+.03\*distance to subject organization. Reporting uses subjective safety and reporting-specific knowledge; submission requires chosen report, cost&lt;=.16 and cash&gt;=cost. makeCase de-duplicates by recordId. Initial evidence=clamp(.25+.35\*visibility+.30\*(U−.5)); stage0 screening is due next month, with one more month if outside specialist coverage. Audit bodies process up to min(12,floor(available case time/.25)) sampled records from the last six months; each check costs .25 PM. True-signal threshold is operative oversight\*(.35+.40\*verified declarations+.25\*target disclosure quality); lawful controls have .025 false-signal probability. Covered subjects may receive a .25-probability audit notice. Record source, jurisdiction, mandate, actors, reporter and route persist.

**Implementation:** [`model.js:report`](source/model.js.html#L2029) · [`model.js:makeCase`](source/model.js.html#L2313) · [`model.js:audit`](source/model.js.html#L2378).

**Assumptions / conformance limits:** A report’s viability threshold is .16 RU, not the earlier proposal’s .10. Detection sampling and reporting opportunity rates are assumptions, not observed national rates.

**Provenance:** R14, R37, R45, R47; [S01](SOURCES.html#s01). **Related engineering checks:** [audit.test.js](source/audit.test.js.html), [model.test.js](source/model.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-cas-02"></a>

### AK-CAS-02 — Staged processing, discretion and evidence

[Accessible explanation](NARRATIVE.html#ak-cas-02) · [Decision crosswalk](RULE-CROSSWALK.html).

Eligible case processing requires .55 PM at investigation, .25 at other stages and .04 RU; local intake additionally uses .12 PM/.01 RU. A related insider changes utility consequences of delay/dismissal; first corrupt obstruction can create conduct. Delay reschedules +2 months. Processing screening adds .08\*operative agency capability; evidence&lt;.32 screens out, otherwise investigation due+2. Investigation quality=max(operative oversight,operative agency)\*(.50+.25\*org skill+.25\*staff skill); truth-conditioned evidence signal=.55+.40quality, lawful signal=.12+.40U. New evidence=.45old+.55signal. Next stage due+2; criminal prosecution requires evidence&gt;=.40 and adds one month before decision. Adverse finding requires evidence&gt;.55+.08\*(1−decision-body skill). Controllers choose with subjective utility; evidence generation uses model truth as a world process, not information read by the controller’s choice function.

**Implementation:** [`model.js:processCases`](source/model.js.html#L2457) · [`model.js:responsible`](source/model.js.html#L2420).

**Assumptions / conformance limits:** Appeals, detailed legal proof rules, real judicial independence protections and all offence-specific national procedures are absent.

**Provenance:** R37, R45, R48; [S01](SOURCES.html#s01). **Related engineering checks:** [model.test.js](source/model.test.js.html), [audit.test.js](source/audit.test.js.html), [stress.test.js](source/stress.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-cas-03"></a>

### AK-CAS-03 — Assessed liability, collection and accountability learning

[Accessible explanation](NARRATIVE.html#ak-cas-03) · [Decision crosswalk](RULE-CROSSWALK.html).

Nominal liability is 2 RU, or 3 when the penalties reform is formally active, multiplied by operative collection capability/coverage. Initial payment is capped at .65 of current personal cash; unpaid remainder becomes a case/body-linked claim. Later collection costs .010 PM/.005 RU, preserves .50 month of living needs, and across all claims cannot exceed .15 of that month’s gross receipts. It reduces claims, increases treasury and case collections, but does not count a new sanction. Personal cost-belief update rate=.12+.12learning toward riskPrior+.35; public ordinary update=(.015+.025learning)\*credibility toward prior+.15; bounded \[.03,.95\] and relative prior bands. Base risk relaxes .005/month toward prior. Case IDs are deduplicated in a 64-event memory. Communicated decisions use a recently operative tool risk pathway or the ordinary path, never both, and a personally experienced decision cannot add another public update.

**Implementation:** [`model.js:collectLiabilities`](source/model.js.html#L2754) · [`model.js:communicatedDecision`](source/model.js.html#L2732) · [`adaptation.js:accountability`](source/adaptation.js.html#L396) · [`model.js:processCases`](source/model.js.html#L2457) · [`model.js:riskExperience`](source/model.js.html#L1073).

**Assumptions / conformance limits:** The risk score is relative expected cost, not a true probability of detection. Collection rules are generic assumptions and not claims about national garnishment law.

**Provenance:** R37, R43, R45, AM06; [S01](SOURCES.html#s01). **Related engineering checks:** [dynamics.test.js](source/dynamics.test.js.html), [adaptation.test.js](source/adaptation.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-gov-01"></a>

### AK-GOV-01 — Political support, officeholding and authority

[Accessible explanation](NARRATIVE.html#ak-gov-01) · [Decision crosswalk](RULE-CROSSWALK.html).

Configured modes are presidential, parliamentary or appointment; cycles are 48/60 months with scenario-specific first phases. Appointment considers up to eight eligible first-party politicians and uses incumbent utility. Other modes let all modeled persons choose an eligible party or abstain; options depend on candidate perceived conduct, affinity, representation and electoral-integrity-adjusted control. Party votes are aggregated; the top party supplies controller, and parliamentary coalitions add ranked parties until a majority of modeled votes. The former controller loses office, winner gains office; nextReview advances by cycle. A qualifying noncivil adverse case removes office and bars eligibility for six months. Other politicians are not automatically demoted to Citizen and histories/resources remain.

**Implementation:** [`model.js:politicalReview`](source/model.js.html#L3317) · [`config.js:countries`](source/config.js.html#L9).

**Assumptions / conformance limits:** All-person voting, simplified coalition formation, multiple office flags and relative calendars are scenario mechanisms rather than complete national electoral law. No legislature, campaign finance market or voter-demographic calibration is modeled.

**Provenance:** R51, R52, R53, R31; [S01](SOURCES.html#s01). **Related engineering checks:** [model.test.js](source/model.test.js.html), [audit.test.js](source/audit.test.js.html), [initialization.test.js](source/initialization.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-mac-01"></a>

### AK-MAC-01 — Collective feedback and consequential developments

[Accessible explanation](NARRATIVE.html#ak-mac-01) · [Decision crosswalk](RULE-CROSSWALK.html).

Every six months public delivery events can report treasury change&gt;.25, service queue change&gt;50, or pay-adequacy change&gt;.20. Role-expectation events use .65 practice thresholds. Major public-disclosure milestones require evidence&gt;=.60, a leader/officeholder, distinct reach&gt;=150 for decisions or 300 for allegations/developments and a three-month system interval. Emerging capture-risk components use ties with &gt;=3 corrupt collaborations, strength&gt;.25 and activity within 12 months; require &gt;=3 people, &gt;=2 roles, an official/officeholder and &gt;=3 recent relevant multi-actor abuses, and emit at most once per component key per 12 months. These events observe current processes; they do not directly add a generic corruption or economic shock.

**Implementation:** [`model.js:macroDevelopments`](source/model.js.html#L3495) · [`model.js:policyFeedback`](source/model.js.html#L1331) · [`model.js:metrics`](source/model.js.html#L3653).

**Assumptions / conformance limits:** There is no separate GDP-growth equation, protest/organized-demand process, complete state-capture model or automatic five-trajectory classifier. Some macro variables are derived observations rather than causal state variables.

**Provenance:** R36, R38, R42, R43, R59; [S01](SOURCES.html#s01), [S08](SOURCES.html#s08). **Related engineering checks:** [dynamics.test.js](source/dynamics.test.js.html), [visualization.test.js](source/visualization.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-pol-aca"></a>

### AK-POL-ACA — Anti-corruption body

[Accessible explanation](NARRATIVE.html#ak-pol-aca) · [Decision crosswalk](RULE-CROSSWALK.html).

Installed work raises organization skill .008\*dose and capability .08\*dose toward .98. Actual staff work uses Adaptive.work. Screened subjects receive a risk exposure and reporters a reporting-control exposure only if the relevant allocation is operative. Investigation evidence can use agency capability. Direct ceilings risk .25 and reporting/case control .15; half-life 10.

**Implementation:** [`adaptation.js:map.aca`](source/adaptation.js.html#L43) · [`config.js:costs.aca`](source/config.js.html#L166) · [`reporting.js:definitions.aca`](source/reporting.js.html#L39) · [`model.js:implementPolicies`](source/model.js.html#L1647).

**Assumptions / conformance limits:** The diagnostic is not a stratified exercise of mandate under observed high-power opposition.

**Provenance:** R22, R24, R57; [S01](SOURCES.html#s01), [S03](SOURCES.html#s03), [S09](SOURCES.html#s09). **Related engineering checks:** [adaptation.test.js](source/adaptation.test.js.html), [reporting.test.js](source/reporting.test.js.html), [audit.test.js](source/audit.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-pol-merit"></a>

### AK-POL-MERIT — Recruitment and promotion

[Accessible explanation](NARRATIVE.html#ak-pol-merit) · [Decision crosswalk](RULE-CROSSWALK.html).

Each six-month service vacancy uses a 24-candidate pool. Actual merit is a leader’s merit choice or review enforcement with probability operative merit\*recordQuality. A blocked connection override does not become a completed patronage act. Appointment/induction exposures target norm .12 and control .15 only in recruitment, half-life 12. New report outcome=merit appointments/all appointments over 12 months.

**Implementation:** [`adaptation.js:map.merit`](source/adaptation.js.html#L53) · [`config.js:costs.merit`](source/config.js.html#L169) · [`reporting.js:definitions.merit`](source/reporting.js.html#L50) · [`model.js:implementPolicies`](source/model.js.html#L1647).

**Assumptions / conformance limits:** No general promotion ladder, protected selection committee or country-specific appointment pipeline is simulated.

**Provenance:** R22, R57; [S01](SOURCES.html#s01), [S03](SOURCES.html#s03), [S09](SOURCES.html#s09). **Related engineering checks:** [adaptation.test.js](source/adaptation.test.js.html), [reporting.test.js](source/reporting.test.js.html), [audit.test.js](source/audit.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-pol-rotation"></a>

### AK-POL-ROTATION — Staff rotation

[Accessible explanation](NARRATIVE.html#ak-pol-rotation) · [Decision crosswalk](RULE-CROSSWALK.html).

Annual transfer opportunity is gated by operative rotation. A nonleader official can move to the next service agency after leader choice and .05 RU cost. Existing ties/home/identity persist; workplace and memberships change. Direct norm ceiling .10, integrity/case contexts, half-life 8. Continuity diagnostic checks same original leader, leader tie&gt;.30 or a remaining member’s tie&gt;.50 to original controller.

**Implementation:** [`adaptation.js:map.rotation`](source/adaptation.js.html#L62) · [`config.js:costs.rotation`](source/config.js.html#L172) · [`reporting.js:definitions.rotation`](source/reporting.js.html#L61) · [`model.js:implementPolicies`](source/model.js.html#L1647).

**Assumptions / conformance limits:** It evaluates four service functions and direct ties, not comprehensive informal control or all high-risk public posts.

**Provenance:** R22, R53, R57; [S01](SOURCES.html#s01), [S03](SOURCES.html#s03), [S09](SOURCES.html#s09). **Related engineering checks:** [adaptation.test.js](source/adaptation.test.js.html), [reporting.test.js](source/reporting.test.js.html), [audit.test.js](source/audit.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-pol-protection"></a>

### AK-POL-PROTECTION — Protection for reporting persons

[Accessible explanation](NARRATIVE.html#ak-pol-protection) · [Decision crosswalk](RULE-CROSSWALK.html).

Retaliation requires the perpetrator’s utility choice and &gt;.15 RU. Actual protection requires &gt;.25 remaining case time and a draw below operative protection, then uses .25 PM. Unprotected victim can lose up to .30 RU. Experience targets reporting safety1 or 0; successful protection may also improve lawful control. Direct control .25, safety .35, report/refuse contexts, half-life 8. Outcome=actual remedies/reported threats over 12 months; n=0 unavailable.

**Implementation:** [`adaptation.js:map.protection`](source/adaptation.js.html#L71) · [`config.js:costs.protection`](source/config.js.html#L175) · [`reporting.js:definitions.protection`](source/reporting.js.html#L72) · [`model.js:implementPolicies`](source/model.js.html#L1647).

**Assumptions / conformance limits:** Only modeled reported threats enter this realized denominator; missing complaints and unseen retaliation are not universal protection success.

**Provenance:** R22, R37, R57; [S01](SOURCES.html#s01), [S03](SOURCES.html#s03), [S09](SOURCES.html#s09). **Related engineering checks:** [adaptation.test.js](source/adaptation.test.js.html), [reporting.test.js](source/reporting.test.js.html), [audit.test.js](source/audit.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-pol-declarations"></a>

### AK-POL-DECLARATIONS — Asset, liability and gift declarations

[Accessible explanation](NARRATIVE.html#ak-pol-declarations) · [Decision crosswalk](RULE-CROSSWALK.html).

Installed work increases covered persons’ disclosure completeness by .04\*dose\*(1−completeness). Every six months communicated verification can create risk learning toward current belief+.10\*completeness\*(1−belief). Covered declarations enter audit detection through verification capability\*completeness. Direct risk ceiling .15, integrity contexts, half-life 10. Output counts actual additional-reform verification notices; outcome is a record-based capability diagnostic.

**Implementation:** [`adaptation.js:map.declarations`](source/adaptation.js.html#L80) · [`config.js:costs.declarations`](source/config.js.html#L178) · [`reporting.js:definitions.declarations`](source/reporting.js.html#L83) · [`model.js:implementPolicies`](source/model.js.html#L1647).

**Assumptions / conformance limits:** No itemized assets, gifts, liability forms or independent financial reconstruction are modeled.

**Provenance:** R22, R57; [S01](SOURCES.html#s01), [S03](SOURCES.html#s03), [S09](SOURCES.html#s09). **Related engineering checks:** [adaptation.test.js](source/adaptation.test.js.html), [reporting.test.js](source/reporting.test.js.html), [audit.test.js](source/audit.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-pol-conflicts"></a>

### AK-POL-CONFLICTS — Conflict-of-interest disclosure and review

[Accessible explanation](NARRATIVE.html#ak-pol-conflicts) · [Decision crosswalk](RULE-CROSSWALK.html).

Installed work increases recordQuality .03\*dose\*(1−quality). For a related bilateral exchange, review prevention probability=.35\*recordQuality\*operative conflict capability. Prevention generates actual contacts and can affect perceived norm .10 and improper control .25, in integrity/recruitment/implementation contexts, half-life 10. Output counts blocked exchanges once, rather than twice for the two contacted people.

**Implementation:** [`adaptation.js:map.conflicts`](source/adaptation.js.html#L89) · [`config.js:costs.conflicts`](source/config.js.html#L181) · [`reporting.js:definitions.conflicts`](source/reporting.js.html#L94) · [`model.js:implementPolicies`](source/model.js.html#L1647).

**Assumptions / conformance limits:** No comprehensive legal conflict taxonomy, recusal procedure or independent review appeal is simulated.

**Provenance:** R22, R57; [S01](SOURCES.html#s01), [S03](SOURCES.html#s03), [S09](SOURCES.html#s09). **Related engineering checks:** [adaptation.test.js](source/adaptation.test.js.html), [reporting.test.js](source/reporting.test.js.html), [audit.test.js](source/audit.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-pol-oversight"></a>

### AK-POL-OVERSIGHT — Audits and investigations

[Accessible explanation](NARRATIVE.html#ak-pol-oversight) · [Decision crosswalk](RULE-CROSSWALK.html).

Audit detection uses record visibility, verified declarations and operative capability; investigation quality also depends on organizational/staff skill. Installed capability approaches .98 through delivered work. Communicated audit/inquiry risk ceiling .30, integrity contexts, half-life 8. Output counts completed investigation stages. Outcome remains the fixed-reference scrutiny/correction capability proxy.

**Implementation:** [`adaptation.js:map.oversight`](source/adaptation.js.html#L98) · [`config.js:costs.oversight`](source/config.js.html#L184) · [`reporting.js:definitions.oversight`](source/reporting.js.html#L105) · [`model.js:implementPolicies`](source/model.js.html#L1647).

**Assumptions / conformance limits:** Actual completed correction is not separately tested in every diagnostic reference situation; independence and high-power opposition remain simplified.

**Provenance:** R22, R45, R57; [S01](SOURCES.html#s01), [S03](SOURCES.html#s03), [S09](SOURCES.html#s09). **Related engineering checks:** [adaptation.test.js](source/adaptation.test.js.html), [reporting.test.js](source/reporting.test.js.html), [audit.test.js](source/audit.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-pol-pay"></a>

### AK-POL-PAY — Remuneration and incentives

[Accessible explanation](NARRATIVE.html#ak-pol-pay) · [Decision crosswalk](RULE-CROSSWALK.html).

Installed reform operating funds pay covered officials supplements equal to operating cost\*pay capability divided by eligible staff; remaining operating cost leaves the pool. Net output includes actual regular and supplemental public receipts after modeled 10% withholding. Outcome requires &gt;=6 receipts and adequate net pay in at least 5 of6. Direct persuasion map is empty. Expected income and experienced financial pressure enter ordinary utility evaluation.

**Implementation:** [`adaptation.js:map.pay`](source/adaptation.js.html#L107) · [`config.js:costs.pay`](source/config.js.html#L187) · [`reporting.js:definitions.pay`](source/reporting.js.html#L116) · [`model.js:implementPolicies`](source/model.js.html#L1647).

**Assumptions / conformance limits:** Career incentives beyond simple role income/recruitment are not a full predictable promotion system.

**Provenance:** R22, R43, R57, AM06; [S01](SOURCES.html#s01), [S03](SOURCES.html#s03), [S09](SOURCES.html#s09). **Related engineering checks:** [adaptation.test.js](source/adaptation.test.js.html), [reporting.test.js](source/reporting.test.js.html), [audit.test.js](source/audit.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-pol-penalties"></a>

### AK-POL-PENALTIES — Financial penalties

[Accessible explanation](NARRATIVE.html#ak-pol-penalties) · [Decision crosswalk](RULE-CROSSWALK.html).

Formal active reform changes nominal2→3 RU liability; operative capability determines assessment/collection. Persistent claims and personal/public risk learning are detailed in AK-CAS-03. Direct risk ceiling .40, integrity contexts, half-life 8. Report outcome uses a12-month extortion cohort ending 6 months earlier, at least 20 violations, and observed collections per violation; legacy outcome uses its cumulative matured cohort.

**Implementation:** [`adaptation.js:map.penalties`](source/adaptation.js.html#L116) · [`config.js:costs.penalties`](source/config.js.html#L190) · [`reporting.js:definitions.penalties`](source/reporting.js.html#L127) · [`model.js:implementPolicies`](source/model.js.html#L1647).

**Assumptions / conformance limits:** The reported realized ratio is not a calibrated probability of appropriate imposition times collectible amount, nor a complete violation-specific penalty schedule.

**Provenance:** R22, R45, R57, AM06; [S01](SOURCES.html#s01), [S03](SOURCES.html#s03), [S09](SOURCES.html#s09). **Related engineering checks:** [adaptation.test.js](source/adaptation.test.js.html), [reporting.test.js](source/reporting.test.js.html), [audit.test.js](source/audit.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-pol-disclosure"></a>

### AK-POL-DISCLOSURE — Proactive disclosure

[Accessible explanation](NARRATIVE.html#ak-pol-disclosure) · [Decision crosswalk](RULE-CROSSWALK.html).

Installed work increases disclosureQuality .04\*dose\*(1−quality). Record visibility is disclosureQuality\*(.4+.6\*operative disclosure) where applicable, influencing detection/publication access. Direct persuasion map is empty. Output counts delivered public-record implementation PM, not fabricated government documents; outcome is a practical-transparency capability proxy.

**Implementation:** [`adaptation.js:map.disclosure`](source/adaptation.js.html#L125) · [`config.js:costs.disclosure`](source/config.js.html#L193) · [`reporting.js:definitions.disclosure`](source/reporting.js.html#L138) · [`model.js:implementPolicies`](source/model.js.html#L1647).

**Assumptions / conformance limits:** No itemized publication registry, statutory request process or complete test of document timeliness/accessibility is implemented.

**Provenance:** R22, R47, R57, AM06; [S01](SOURCES.html#s01), [S03](SOURCES.html#s03), [S09](SOURCES.html#s09). **Related engineering checks:** [adaptation.test.js](source/adaptation.test.js.html), [reporting.test.js](source/reporting.test.js.html), [audit.test.js](source/audit.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-pol-complaints"></a>

### AK-POL-COMPLAINTS — Reporting and complaints

[Accessible explanation](NARRATIVE.html#ak-pol-complaints) · [Decision crosswalk](RULE-CROSSWALK.html).

Reporting cost and submission threshold are in AK-CAS-01. Encountered instructions require operative delivery; direct reporting control .30 and channel knowledge .20 apply only to report context, half-life 8. Actual submitted reports and complaint-source open files are observed. Outcome remains a fixed-reference intake/access proxy; the code does not execute100 independent real submissions for the diagnostic.

**Implementation:** [`adaptation.js:map.complaints`](source/adaptation.js.html#L134) · [`config.js:costs.complaints`](source/config.js.html#L196) · [`reporting.js:definitions.complaints`](source/reporting.js.html#L149) · [`model.js:implementPolicies`](source/model.js.html#L1647).

**Assumptions / conformance limits:** It does not directly estimate the approved chapter-level share able to submit within an independently modeled 1-month/.10-RU requirement.

**Provenance:** R22, R45, R57; [S01](SOURCES.html#s01), [S03](SOURCES.html#s03), [S09](SOURCES.html#s09). **Related engineering checks:** [adaptation.test.js](source/adaptation.test.js.html), [reporting.test.js](source/reporting.test.js.html), [audit.test.js](source/audit.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-pol-education"></a>

### AK-POL-EDUCATION — Awareness and education

[Accessible explanation](NARRATIVE.html#ak-pol-education) · [Decision crosswalk](RULE-CROSSWALK.html).

For each operative recipient, teaching contact probability=.06\*dose\*operative education. Contact invokes separate uptake/magnitude draws with actual source trust and dose. Ceilings: attitude .30, norm .20, control .25, knowledge .35; integrity/report/refuse/recruit/implementation/case/retaliation contexts; half-life 6 adjusted by retention. Output counts delivered episodes regardless of uptake; outcome=100\*mean usable knowledge across 1,000 agents. Conditions additionally show effective lawful reference approval, control and retained attitude influence.

**Implementation:** [`adaptation.js:map.education`](source/adaptation.js.html#L143) · [`config.js:costs.education`](source/config.js.html#L199) · [`reporting.js:definitions.education`](source/reporting.js.html#L160) · [`model.js:implementPolicies`](source/model.js.html#L1647).

**Assumptions / conformance limits:** No role-specific question bank or empirically validated knowledge test exists. Repeated delivery counts contacts, not unique people or verified comprehension.

**Provenance:** R22, R57, AM02, AM03, AM04, AM05; [S01](SOURCES.html#s01), [S03](SOURCES.html#s03), [S09](SOURCES.html#s09). **Related engineering checks:** [adaptation.test.js](source/adaptation.test.js.html), [reporting.test.js](source/reporting.test.js.html), [audit.test.js](source/audit.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-mea-01"></a>

### AK-MEA-01 — Institutional indicators and fixed reference diagnostics

[Accessible explanation](NARRATIVE.html#ak-mea-01) · [Decision crosswalk](RULE-CROSSWALK.html).

Legacy diagnostic n is 100 for complaints, number of services for rotation and current official count for most other tools; education instead uses the exact mean of all agents’ usable knowledge. Fixed draws use Antarkya-fixed-diagnostic, societyDrawKey,tool,index. Backlog factor=1/(1+(serviceBacklog+caseBacklog)/memberCount); capacity=clamp((.5orgSkill+.5staffSkill)\*(.4+.6backlogFactor)). Tool thresholds multiply coverage by their capability/record/verification formula, with score100\*passed/n. The reporting layer replaces merit/protection with trailing 12-month observed ratios when n&gt;0, penalties with its matured cohort, and otherwise uses legacy snapshot definitions. Legacy merit changes to observed cumulative appointments after 20; reporting merit does not. The measurement dictionary distinguish these two paths, denominators, units and missing values.

**Implementation:** [`model.js:diagnostic`](source/model.js.html#L3695) · [`model.js:assessment`](source/model.js.html#L3832) · [`reporting.js:sample`](source/reporting.js.html#L243) · [`reporting.js:outcomeMeta`](source/reporting.js.html#L505).

**Assumptions / conformance limits:** No stratified high-/low-power standardized case execution, full lawful-control diagnostic or uncertainty interval is implemented. The minimum 20-observation rule is not universal: new merit/protection ratios use n&gt;0 and show the count.

**Provenance:** R56, R57, R58; [S01](SOURCES.html#s01), [S09](SOURCES.html#s09). **Related engineering checks:** [reporting.test.js](source/reporting.test.js.html), [initialization.test.js](source/initialization.test.js.html), [adaptation.test.js](source/adaptation.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-mea-02"></a>

### AK-MEA-02 — Package impact and paired comparison

[Accessible explanation](NARRATIVE.html#ak-mea-02) · [Decision crosswalk](RULE-CROSSWALK.html).

Rate=100\*encounterCorruptActs/encounterOpportunities; zero denominator gives null. Paired difference is reformRate−baselineRate, in percentage points. For a trailing 12-month post-adoption window at t, subtract cumulative counters at s=max(0,t−12), then divide separately within each branch; never average unweighted monthly rates. Since-adoption uses s=0. The chart’s x-axis remains model months. Small differences use three decimals; nonzero magnitudes&lt;.0005 use scientific notation rather than signed zero. Repetition statistics report mean/min/max paired differences across new event streams with identical initial society. They are simulation variation, not an empirical confidence interval. Macro consequences remain separately named quantities; a bribe/fine transfer is not automatically net social loss.

**Implementation:** [`model.js:comparison`](source/model.js.html#L4003) · [`visualization.js:impactWindow`](source/visualization.js.html#L153) · [`visualization.js:impactSeries`](source/visualization.js.html#L181) · [`visualization.js:impactDifference`](source/visualization.js.html#L200) · [`visualization.js:hash`](source/visualization.js.html#L16).

**Assumptions / conformance limits:** No automatic leave-one-out attribution, full welfare account or comprehensive displacement estimator exists. Extortion demands count even when no payment completes.

**Provenance:** R55, R58, R59; [S01](SOURCES.html#s01), [S09](SOURCES.html#s09). **Related engineering checks:** [visualization.test.js](source/visualization.test.js.html), [model.test.js](source/model.test.js.html), [worker.test.js](source/worker.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-mea-03"></a>

### AK-MEA-03 — Policy-specific before/current/final monitoring

[Accessible explanation](NARRATIVE.html#ak-mea-03) · [Decision crosswalk](RULE-CROSSWALK.html).

Simulation.monitor is an observation-only sidecar, separate from state and from the report(record,witness) complaint method. The pre-policy observation archive is cached outside starting state and recreated through initial-state validation. start is captured before adopt(); subsequent monthly samples store counts, each tool’s outcome/conditions/scope/n and impact counters. Activity counters receive actual process hooks, not policy-selection bonuses. Output window at t subtracts counters at max(earliestMonth,t−12), allowing negative inherited months. New reports retain −12..240 history and a bounded event index. Saved reporting schema is antarkya.reporting.v1. Existing rules-2.4 results without monitoring still load, show an explicit missing-history notice and require rerunning for the new panels.

**Implementation:** [`reporting.js:init`](source/reporting.js.html#L188) · [`reporting.js:activity`](source/reporting.js.html#L181) · [`reporting.js:record`](source/reporting.js.html#L423) · [`reporting.js:windowValue`](source/reporting.js.html#L486) · [`reporting.js:sample`](source/reporting.js.html#L243) · [`model.js:record`](source/model.js.html#L2894) · [`model.js:reporting`](source/model.js.html#L3688) · [`reporting.js:remember`](source/reporting.js.html#L215) · [`reporting.js:counterAt`](source/reporting.js.html#L224) · [`reporting.js:recent`](source/reporting.js.html#L469) · [`reporting.js:view`](source/reporting.js.html#L477).

**Assumptions / conformance limits:** Some output categories are explicitly additional-reform contacts and have no modeled baseline delivery. General backlogs remain system context. Reporting does not empirically calibrate the observed processes.

**Provenance:** R55, R56, R58, R59; [S01](SOURCES.html#s01), [S10](SOURCES.html#s10). **Related engineering checks:** [reporting.test.js](source/reporting.test.js.html), [worker.test.js](source/worker.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-mea-04"></a>

### AK-MEA-04 — Interpretations and linked evidence

[Accessible explanation](NARRATIVE.html#ak-mea-04) · [Decision crosswalk](RULE-CROSSWALK.html).

interpret compares values using display-oriented tolerances: impact .0005 points, outcome .05 indicator units, output1e−8; indicator direction is explicit. Estimated diagnostics receive an estimated-capability prefix. eventsFor excludes future and initialization records, uses direct P-tool records and policy-relevant contextual cases, and ranks actual material setup/funding/suspension changes above routine reviews. Impact draws references from the whole package plus salient macro events, independently of selected policy. At most2 references appear inline, up to8 are available; the sidecar retains at most400 evidence records while protecting consequential per-policy candidates. Full completed logs are retained separately. All inserted text is escaped.

**Implementation:** [`reporting.js:interpret`](source/reporting.js.html#L587) · [`reporting.js:eventsFor`](source/reporting.js.html#L527) · [`app.js:reportMeaning`](source/app.js.html#L802) · [`app.js:showReportEvent`](source/app.js.html#L907).

**Assumptions / conformance limits:** Thresholds describe displayed precision, not statistical significance. Event ranking is explanatory selection, not causal identification or exhaustive evidence retrieval.

**Provenance:** R56, R58, R61; [S01](SOURCES.html#s01), [S10](SOURCES.html#s10). **Related engineering checks:** [reporting.test.js](source/reporting.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-vis-01"></a>

### AK-VIS-01 — Analytical integrity, affinity and cooperation map

[Accessible explanation](NARRATIVE.html#ak-vis-01) · [Decision crosswalk](RULE-CROSSWALK.html).

Recent participation r=recentCorrupt/recentOpportunities. Positive r fixes integrity radius .54+.41sqrt(r); r=0 lies inside core .48. Initial healthy spacing is .035+.43sqrt(display hash). Role anchors are −3π/4,−π/4,π/4,3π/4; directional vectors combine a .20 class anchor with2\*(affinity−.5) for every class. Eight deterministic local-grid passes use cell .032, minimum spacing .023, bounded repulsion and cooperative-neighbor attraction. Coercive links do not attract. Positive participation radius is reimposed after layout. Physical x/y are never changed. View retains up to2,400 ties; default drawing caps320, focus180, with role/link filters and pan/zoom. No baseline dot distribution is overlaid.

**Implementation:** [`visualization.js:projection`](source/visualization.js.html#L25) · [`app.js:drawMap`](source/app.js.html#L579).

**Assumptions / conformance limits:** Direction is a heuristic projection, not a geographic map, causal network embedding or literal degree of support for one adjacent quadrant.

**Provenance:** R07, R49, R60, R61; [S01](SOURCES.html#s01). **Related engineering checks:** [visualization.test.js](source/visualization.test.js.html), [dynamics.test.js](source/dynamics.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-vis-02"></a>

### AK-VIS-02 — Influential actors and significant event feed

[Accessible explanation](NARRATIVE.html#ak-vis-02) · [Decision crosswalk](RULE-CROSSWALK.html).

Influence score is weighted degree plus 12 for the current budget controller plus 3 for organizational leadership; top 8 are selected each view. Detailed psychology/motives/decision traces are supplied for that subset; full final profiles are exported separately. emit assigns event-family ID, update number, month, kind, actors, status and salient flag. Default significant filter includes salient/macro/politics; live view sends the most recent 200 events and renders at most80 matching cards. Full completed events override that slice in worker results. Highlighting, filtering and inspection do not run choose() or draw world randomness.

**Implementation:** [`model.js:influential`](source/model.js.html#L3867) · [`model.js:emit`](source/model.js.html#L842) · [`app.js:inspector`](source/app.js.html#L504) · [`app.js:renderFeed`](source/app.js.html#L540) · [`visualization.js:importantEvents`](source/visualization.js.html#L140) · [`model.js:view`](source/model.js.html#L3866) · [`app.js:learningPanel`](source/app.js.html#L445) · [`app.js:selectActor`](source/app.js.html#L528) · [`app.js:reportEventButtons`](source/app.js.html#L784).

**Assumptions / conformance limits:** Weighted degree plus leverage is a heuristic, not betweenness or a full power theory. The live last200 slice can omit older major records; the assessment evidence index mitigates this separately.

**Provenance:** R46, R49, R61; [S01](SOURCES.html#s01). **Related engineering checks:** [visualization.test.js](source/visualization.test.js.html), [worker.test.js](source/worker.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-vis-03"></a>

### AK-VIS-03 — One-page interface, synchronized assessment and review

[Accessible explanation](NARRATIVE.html#ak-vis-03) · [Decision crosswalk](RULE-CROSSWALK.html).

getConfig validates the active form; pending warns when draft setup differs from activeConfig. Output/outcome follow assessmentPolicy, while impact remains the package comparison. assessmentMonth=null follows latest; user review pins a month; starting/loading/resetting a run clears that pin. At completion latest becomes Final; earlier review remains explicitly labeled. Output is trailing 12 months including inherited history; impact window is user-selected post-adoption12 months or cumulative; outcome method is named. Condition table compares start, selected reform month and same baseline month. Latest live resource details explicitly name their own month if the chart is reviewing earlier conditions. CSS switches at850px; display code only consumes observations.

**Implementation:** [`app.js:getConfig`](source/app.js.html#L73) · [`app.js:pending`](source/app.js.html#L132) · [`app.js:renderPolicyAssessment`](source/app.js.html#L959) · [`app.js:renderAssessment`](source/app.js.html#L1265) · [`app.js:render`](source/app.js.html#L1451) · [`app.js:status`](source/app.js.html#L58) · [`app.js:remember`](source/app.js.html#L94) · [`app.js:buildPolicies`](source/app.js.html#L149) · [`app.js:countryFields`](source/app.js.html#L181) · [`app.js:applyConfig`](source/app.js.html#L261) · [`app.js:baseSummary`](source/app.js.html#L303) · [`app.js:preview`](source/app.js.html#L316) · [`app.js:tinyComparison`](source/app.js.html#L759) · [`app.js:reportFormat`](source/app.js.html#L773) · [`app.js:reportChart`](source/app.js.html#L821) · [`app.js:renderReplications`](source/app.js.html#L1359) · [`app.js:selectedImpact`](source/app.js.html#L1412) · [`app.js:drawImpact`](source/app.js.html#L1421).

**Assumptions / conformance limits:** Automated DOM harnesses are not an actual Android or browser layout/performance benchmark.

**Provenance:** R54, R61; [S01](SOURCES.html#s01). **Related engineering checks:** [reporting.test.js](source/reporting.test.js.html), [visualization.test.js](source/visualization.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-io-01"></a>

### AK-IO-01 — Saving, loading, import validation and exports

[Accessible explanation](NARRATIVE.html#ak-io-01) · [Decision crosswalk](RULE-CROSSWALK.html).

IndexedDB stores named scenarios, with localStorage fallback and remembered last setup. Payload schema antarkya.scenario.v2 includes modelVersion, profileVersion, creation time, validated config, initial and optional completed results. Import size limit 64 MiB; validation checks rules version, initial identity, finite/ranged data, person IDs, result structure, events, optional psychological profiles and optional monitoring schema. Old pre-2.4 starts require recreating settings. Existing 2.4 results without reporting remain readable with a missing-monitoring message. loadPayload terminates any worker, resets review state and renders without Run. JSON serializes full initial state and final results; CSV exports metrics, policy outcomes, agent summaries, events and decision/condition data according to each export handler. CSV guards leading formula characters in string cells.

**Implementation:** [`app.js:payload`](source/app.js.html#L1676) · [`app.js:validatePayload`](source/app.js.html#L1693) · [`app.js:loadPayload`](source/app.js.html#L1792) · [`app.js:storeAction`](source/app.js.html#L1614) · [`app.js:csv`](source/app.js.html#L1834) · [`app.js:openDB`](source/app.js.html#L1594) · [`app.js:refreshSaves`](source/app.js.html#L1660) · [`app.js:download`](source/app.js.html#L1821) · [`app.js:showStorage`](source/app.js.html#L1859).

**Assumptions / conformance limits:** Import validation is not a proof that every saved completed outcome was produced honestly; files are not signed. Full in-flight checkpoint/resume and arbitrary cross-version migration are not implemented.

**Provenance:** R55, R62; [S01](SOURCES.html#s01), [S10](SOURCES.html#s10). **Related engineering checks:** [model.test.js](source/model.test.js.html), [dynamics.test.js](source/dynamics.test.js.html), [reporting.test.js](source/reporting.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-ops-01"></a>

### AK-OPS-01 — Worker scheduling, repetitions and browser operation

[Accessible explanation](NARRATIVE.html#ak-ops-01) · [Decision crosswalk](RULE-CROSSWALK.html).

worker imports the same model/config/profile/baseline/adaptation/reporting code used by Node tests. Each advance steps reform then baseline, and finishPair verifies invariants, stores the first visible trajectory, records per-repetition comparisons and continues if requested. Fast/repetition batches process up to3 months per pump; normal visible pace processes1. Completion includes full events/cases/conduct/final profiles and reporting; baseline summary includes metrics, history and reporting. Page visibility change pauses an active run. The app requires HTTP(S) for workers; GitHub Pages serves static assets with cache-version queries. The v1 directory is an archived earlier model, not a second current specification.

**Implementation:** [`worker.js:makePair`](source/worker.js.html#L44) · [`worker.js:advance`](source/worker.js.html#L151) · [`worker.js:pump`](source/worker.js.html#L162) · [`worker.js:finishPair`](source/worker.js.html#L72) · [`app.js:initializeWorker`](source/app.js.html#L345) · [`app.js:stopWorker`](source/app.js.html#L335) · [`app.js:start`](source/app.js.html#L398) · [`app.js:reset`](source/app.js.html#L426) · [`worker.js:send`](source/worker.js.html#L52).

**Assumptions / conformance limits:** No installed application, server-side simulation, external API key or live national data feed is required. Actual Android runtime/memory remains unbenchmarked.

**Provenance:** R03, R55, R61; [S01](SOURCES.html#s01). **Related engineering checks:** [worker.test.js](source/worker.test.js.html), [run-seeds.test.js](source/run-seeds.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-val-01"></a>

### AK-VAL-01 — Engineering verification and audit reproducibility

[Accessible explanation](NARRATIVE.html#ak-val-01) · [Decision crosswalk](RULE-CROSSWALK.html).

Runtime invariants require exactly 1,000 people, nonnegative finite balances, total-money conservation within.001 RU, no shared-time overspend beyond 1e−6, valid bounded psychological/financial profiles, &lt;=24 meaningful entries and positive unit-sum motives. Tests cover all ten profiles/extreme conditions, maximum 240-month scenarios, paired identity/replay, workers, policy learning, meaningful actions, observer non-mutation, saved-state verification and rendering harnesses. Audit tooling compares normalized parsed ASTs of all ten annotated runtime JS modules against the pinned baseline, ignoring only formatting/comments/locations; it validates reference IDs, links, manifests and generated indexes. Executed checks are recorded separately from the generated test catalogue; publication commits and workflow URLs identify subsequent CI runs. A passing test file is mapped as evidence of covered assertions, not proof of an entire social theory.

**Implementation:** [`model.js:assertInvariants`](source/model.js.html#L3966) · [`model.js:snapshot`](source/model.js.html#L3959) · [`reporting.js:valid`](source/reporting.js.html#L632) · [`model.js:finite`](source/model.js.html#L627) · [`model.js:ids`](source/model.js.html#L3744).

**Assumptions / conformance limits:** No comprehensive sensitivity analysis, out-of-sample calibration, national ranking validation, independent replication or Android performance certification has been completed.

**Provenance:** R55, R58, R62; [S01](SOURCES.html#s01), [S11](SOURCES.html#s11). **Related engineering checks:** [model.test.js](source/model.test.js.html), [audit.test.js](source/audit.test.js.html), [adaptation.test.js](source/adaptation.test.js.html), [dynamics.test.js](source/dynamics.test.js.html), [initialization.test.js](source/initialization.test.js.html), [visualization.test.js](source/visualization.test.js.html), [reporting.test.js](source/reporting.test.js.html), [worker.test.js](source/worker.test.js.html), [run-seeds.test.js](source/run-seeds.test.js.html), [stress.test.js](source/stress.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-val-02"></a>

### AK-VAL-02 — Evidence, assumptions, gaps and change control

[Accessible explanation](NARRATIVE.html#ak-val-02) · [Decision crosswalk](RULE-CROSSWALK.html).

Every reference entry carries agreement links, source functions, test-file evidence, implementation status and limitations. The generated rule crosswalk covers R01–R62 and AM01–AM06 plus later interface/reporting decisions. Evidence classes distinguish user decisions, conceptual publications, stored country observations, proxies, common engineering priors, generated model state and test evidence. Superseded original v1 rules (binary motives, random wandering, color-only integrity, immediate class-based punishment and score-reset demotion) are not current requirements. Gap records identify empirical, structural, measurement and operational limitations. Semantic hashes prohibit accidental behavioral edits during annotation; future semantic changes require a new reviewed baseline and updated technical entries.

**Implementation:** [`config.js:assumptions`](source/config.js.html#L202) · [`baseline.js:fieldStatus`](source/baseline.js.html#L121) · [`profiles.js:data`](source/profiles.js.html#L9).

**Assumptions / conformance limits:** This is documentation for inspection, not a claim of conformance to every original aspiration or certification under ODD/TRACE. Private supplied documents and copyrighted full texts are not redistributed by the audit package.

**Provenance:** R21, R23, R25, R58; [S01](SOURCES.html#s01), [S02](SOURCES.html#s02), [S11](SOURCES.html#s11). **Related engineering checks:** [initialization.test.js](source/initialization.test.js.html), [reporting.test.js](source/reporting.test.js.html). These links identify relevant tests, not complete empirical validation.

