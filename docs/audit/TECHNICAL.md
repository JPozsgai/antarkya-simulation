# Technical specification

This specification follows the seven-part ODD reporting structure as an organizing aid: purpose and patterns; entities/state/scales; scheduling; design concepts; initialization; inputs; submodels. This is not an ODD certification. Stable mechanism IDs link to the narrative and full annotated code. Exact numeric expressions, action vectors and state assignments are supplied in generated appendices rather than hidden behind prose.

## 1. Purpose and patterns

The model explores the development of corrupt conduct and anti-corruption reforms in a synthetic society. Qualitative targets include heterogeneous choices, imperfect information, organizational resistance, delayed implementation, bounded learning, persistence of routines, resource competition and different policy trajectories. These are design targets, not a fitted list of empirical validation patterns. The model does not estimate a real country's treatment effect. A paired run estimates an effect **inside this model**, under its parameters, initial society and event seed.

Behavioral and display version are **3.0.0**, a provisional extension. The [extension specification](EXTENSION.html) supersedes older fixed-GDP, anonymous-income, wage-withholding, fixed capability-decay and once-per-month encounter descriptions. Schema identifiers version country evidence, reconstructed baselines, adaptation, observations and saved payloads separately. Exact expressions are authoritative in source; mechanism descriptions explain them without replacing code.

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

1. Advance the month and open shared person-time, monetary and stock-flow accounting.
2. Advance personal adaptation and retained influence decay.
3. Pay actual employer compensation and ordinary operating costs from named accounts.
4. Fund reforms; schedule staff, contacts and upkeep; perform maintenance, repair or rebuilding.
5. Implement reform work and synchronize actual personal time; learn from receipts.
6. Generate ordered, repeatable contacts; process service work and synchronize time.
7. Audit/select cases, perform case work and collect liabilities; synchronize time.
8. Circulate information; make funding, membership and organizational choices; conduct political review.
9. Process constrained governance proposals, costly coalitions and responses; review budgets.
10. Deliver demand-constrained production, process investment work and tax liabilities; close the economic and stock-flow record.
11. Recover integrity only under the existing meaningful-choice conditions; record macro developments, metrics and passive reporting.

The order is causally material: this month's funding affects this month's implementation, which may affect later opportunities and reports. Later communication can affect future choices, not an earlier completed choice. Within methods, loops and keyed draws define ordering. [Source](source/model.js.html) and the action catalogue expose those details. Worker execution advances reform then baseline with shared keyed event namespaces, not one mutable random cursor. Repetitions reconstruct paired branches from the same initial society with a changed replicate key; rendering pace is not a parameter of choice.

## 4. Design concepts

Decisions combine subjective consequential evaluation using nine motivational attachments, relevant-role expectations, perceived control and random utility; the highest sampled subjective utility wins among feasible supplied options. Mechanical accounting and case-work progress do not themselves choose. World completion probabilities can differ from perceived feasibility. Observation/reporting has access to truth for measurement, but agent information is limited to experience and accessed claims.

Organizations and networks constrain interaction and resources; role expectations and experience can ease familiar practice. Slow feedback changes receptiveness and motives. Aggregate behavior, information, implementation and resource pressure feed into macro developments and political/budget review. These are coupled stocks, flows and delayed feedback inside an agent model, now include an endogenous domestic-value-added index, while national calibration, demographic growth and a complete macroeconomic sector remain outside the verified scope.

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
- [AKX-SCP-01 — Scope and precedence](#akx-scp-01)
- [AKX-TIM-01 — Monthly reporting with repeated internal events](#akx-tim-01)
- [AKX-STA-01 — Single ownership of state and exact balances](#akx-sta-01)
- [AKX-CAP-01 — Persistent organizational capability](#akx-cap-01)
- [AKX-MNT-01 — Maintenance and unfinished work](#akx-mnt-01)
- [AKX-MNT-02 — Repair and rebuilding](#akx-mnt-02)
- [AKX-BEL-01 — Policy value versus implementation-performance beliefs](#akx-bel-01)
- [AKX-AGY-01 — Office authority versus personal influence](#akx-agy-01)
- [AKX-AGY-02 — Supporter dependence within TPB–utility](#akx-agy-02)
- [AKX-GOV-01 — Hierarchy and relationship-based insiders](#akx-gov-01)
- [AKX-GOV-02 — Constrained appointment and removal](#akx-gov-02)
- [AKX-GOV-03 — Safeguard changes in all organizational categories](#akx-gov-03)
- [AKX-COL-01 — Costly coalition formation and commitments](#akx-col-01)
- [AKX-ATT-01 — Attention distinct from support](#akx-att-01)
- [AKX-STR-01 — Combinable political responses](#akx-str-01)
- [AKX-INF-01 — Audience-specific evolving personal influence](#akx-inf-01)
- [AKX-COV-01 — Realized coverage only](#akx-cov-01)
- [AKX-ENC-01 — Demand-generated encounters and capacity](#akx-enc-01)
- [AKX-ECO-01 — Investment choices including political connections](#akx-eco-01)
- [AKX-ECO-02 — Business productive-capacity stock](#akx-eco-02)
- [AKX-ECO-03 — Demand-constrained production and allocation](#akx-eco-03)
- [AKX-ECO-04 — Taxable activity, compliance and public receipts](#akx-eco-04)
- [AKX-ECO-05 — Economic boundaries and output index](#akx-eco-05)
- [AKX-MEA-01 — Monthly flow provenance and result explanations](#akx-mea-01)
- [AKX-CAL-01 — Peru pilot and evidence register](#akx-cal-01)
- [AKX-VAL-01 — Coupling, accounting, sensitivity and device validation](#akx-val-01)

</details>

<a id="ak-ov-01"></a>

### AK-OV-01 — Purpose, scope and version identity

[Accessible explanation](NARRATIVE.html#ak-ov-01) · [Decision crosswalk](RULE-CROSSWALK.html).

Behavioral and display version 3.0.0 introduce the provisional hybrid extension. Duration remains 6–240 months and repetitions {1,5,10,20}. The earlier behavior is archived under /v2.4/. New-model country realism is not validated.

**Implementation:** [`model.js:VERSION`](source/model.js.html#L28) · [`model.js:validate`](source/model.js.html#L127) · [`worker.js:summary`](source/worker.js.html#L32) · [`model.js:constructor`](source/model.js.html#L791) · [`app.js:profile`](source/app.js.html#L66) · [`app.js:summaryText`](source/app.js.html#L105).

**Assumptions / conformance limits:** All numerical response strengths and newly introduced governance/economic mappings remain uncalibrated. Archived v2.4 formulas are historical; current executable source and AKX mechanisms are authoritative.

**Provenance:** R01, R03, R54; [S01](SOURCES.html#s01), [S02](SOURCES.html#s02), [S03](SOURCES.html#s03). **Related engineering checks:** [model.test.js](source/model.test.js.html), [initialization.test.js](source/initialization.test.js.html), [reporting.test.js](source/reporting.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-pop-01"></a>

### AK-POP-01 — People and principal roles

[Accessible explanation](NARRATIVE.html#ak-pop-01) · [Decision crosswalk](RULE-CROSSWALK.html).

createPopulation loops over config.countries\[iso3\].counts, creating exactly 1,000 IDs, with role indices 0,1,2,3. Counts are NGA \[635,210,130,25\], ZAF \[610,220,145,25\], IDN \[625,220,130,25\], IND \[650,205,120,25\], CHN \[590,235,150,25\], PER \[630,210,135,25\], BRA \[600,230,145,25\], USA \[570,270,135,25\], DEU \[575,255,145,25\], ITA \[590,245,140,25\]. IDs and people persist; employment transitions update role and organization membership without allocating a new ID. assertInvariants requires agents.length===1000.

**Implementation:** [`model.js:createPopulation`](source/model.js.html#L223) · [`config.js:countries`](source/config.js.html#L9).

**Assumptions / conformance limits:** Country-informed composition has not been statistically calibrated; minimum representation disproportionately samples smaller roles.

**Provenance:** R02, R04, R09; [S01](SOURCES.html#s01). **Related engineering checks:** [initialization.test.js](source/initialization.test.js.html), [model.test.js](source/model.test.js.html), [stress.test.js](source/stress.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-pop-02"></a>

### AK-POP-02 — Heterogeneous starting profiles

[Accessible explanation](NARRATIVE.html#ak-pop-02) · [Decision crosswalk](RULE-CROSSWALK.html).

Agent initialization includes stable geography; org/memberships/support; nine motives; balance, income, living cost and six receipts; knowledge, disclosure completeness, control, descriptive conduct belief, normCorrupt, riskBelief, beliefs and sourceTrust; skill; decisions; last-24 meaningful opportunities; experience; office/eligibility; liabilities and financial pressure. Baseline knowledge .20+.55U, disclosure .15+.50U, control .25+.50U, skill U, norm clamp(−.45+.90U+(informality−50)/180,−1,1). Country shifts add (GE−50)/200 to control, (GE−50)/250 to knowledge, risk clamp(.10+.65RoL/100+centered noise,.05,.85), trust clamp(.15+.65GE/100). Psychological traits and their separate stream are specified in AK-ADP-01. Exact initialization expressions and numeric occurrences are indexed in the appendices.

**Implementation:** [`model.js:createPopulation`](source/model.js.html#L223) · [`adaptation.js:initialize`](source/adaptation.js.html#L175) · [`adaptation.js:recentParticipation`](source/adaptation.js.html#L205) · [`adaptation.js:summary`](source/adaptation.js.html#L521) · [`adaptation.js:valid`](source/adaptation.js.html#L546) · [`adaptation.js:validSummary`](source/adaptation.js.html#L620).

**Assumptions / conformance limits:** Generic heterogeneous priors are not surveys of personality, corruption tolerance, wealth or national inequality.

**Provenance:** R05, R09, R13, AM03; [S01](SOURCES.html#s01). **Related engineering checks:** [initialization.test.js](source/initialization.test.js.html), [adaptation.test.js](source/adaptation.test.js.html), [dynamics.test.js](source/dynamics.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-org-01"></a>

### AK-ORG-01 — Organizations, formal affiliation and affinity

[Accessible explanation](NARRATIVE.html#ak-org-01) · [Decision crosswalk](RULE-CROSSWALK.html).

There are 8 civic and 24 business orgs, country-configured public-function nodes plus 4 service orgs, and 5 parties except CHN’s 3 political organizations. Primary workplace assignment is rank-biased using floor(U^1.3 \* category size), with first members ensuring representation. All noncitizens have primary membership; citizens beyond category-seeding members join with .45 probability. Noncitizens may acquire extra civic membership with .20 probability; people in roles 0/1 may acquire party membership with .10 probability. Support combines .65 person/class affinity+.25 organization draw+.10 own-workplace term, clamped. Leaders are selected among matching-role members, falling back to available members. These assignments are not empirical probabilities.

**Implementation:** [`model.js:createPopulation`](source/model.js.html#L223) · [`model.js:org`](source/model.js.html#L2043) · [`model.js:relationship`](source/model.js.html#L1259).

**Assumptions / conformance limits:** One primary fn field represents each public body; multiple tool capabilities do not amount to a complete multifunctional mandate model. Membership draws are not empirically calibrated.

**Provenance:** R04, R05, R20; [S01](SOURCES.html#s01). **Related engineering checks:** [model.test.js](source/model.test.js.html), [initialization.test.js](source/initialization.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-org-02"></a>

### AK-ORG-02 — Membership, recruitment and continuity of identity

[Accessible explanation](NARRATIVE.html#ak-org-02) · [Decision crosswalk](RULE-CROSSWALK.html).

organizations runs every six months. Due requests are processed at those reviews even though due=month+1, so effective waits can be six months. Leaving secondary membership costs .03 RU, joining .05 RU; officials cannot freely apply to civic/party membership through this routine, and public agency admission occurs through employment. Per-agent review probability .04; low-affinity secondary membership threshold .30. Service agencies replace one eligible official per review; 24 keyed citizen applicants are ranked by skill, with connected/fallback patronage candidates. Employment transitions preserve IDs, homes, finances, expectations and ties, move workplace coordinates and scale income by the role ratio (official 1.05 versus other .95). Annual rotation transfers at most one nonleader official per service agency to the next agency after a decision and .05 RU cost.

**Implementation:** [`model.js:organizations`](source/model.js.html#L3042) · [`model.js:changeEmployment`](source/model.js.html#L3017).

**Assumptions / conformance limits:** No explicit retirement, birth/death, general private-sector hiring or residential relocation pipeline exists. Recruitment/turnover and leadership succession are simplified.

**Provenance:** R06, R53; [S01](SOURCES.html#s01). **Related engineering checks:** [audit.test.js](source/audit.test.js.html), [reporting.test.js](source/reporting.test.js.html), [model.test.js](source/model.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-geo-01"></a>

### AK-GEO-01 — Stable geography and selective encounters

[Accessible explanation](NARRATIVE.html#ak-geo-01) · [Decision crosswalk](RULE-CROSSWALK.html).

Homes cluster around five normalized centers; angle is uniform and radius sqrt(U)\*.18, with coordinates clamped inside \[.025,.975\]. Organization locations vary around the same centers. nearest samples up to six unique candidates, uses remote probability .15, otherwise distance weight exp(−4d), and multiplies by .4+affinity+.8\*relationship access. Contact is selected by −ln(U)/weight. Workplace distance is used for administrative and business-political contexts; home distance otherwise. Reporting cost additionally depends on geographic distance. No all-pairs encounter search is used.

**Implementation:** [`model.js:createPopulation`](source/model.js.html#L223) · [`model.js:nearest`](source/model.js.html#L1507) · [`model.js:encounters`](source/model.js.html#L2189).

**Assumptions / conformance limits:** Coordinates are stylized, dimensionless locations, not a geographic reconstruction of national cities. Homes never relocate in the current engine.

**Provenance:** R07; [S01](SOURCES.html#s01). **Related engineering checks:** [audit.test.js](source/audit.test.js.html), [visualization.test.js](source/visualization.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-mot-01"></a>

### AK-MOT-01 — Nine interests and beneficiaries

[Accessible explanation](NARRATIVE.html#ak-mot-01) · [Decision crosswalk](RULE-CROSSWALK.html).

Motive order is \[social/self, social/group, social/public, economic/self, economic/group, economic/public, political/self, political/group, political/public\]. Role-domain proportions are \[.40,.35,.25\], \[.25,.50,.25\], \[.35,.35,.30\], \[.25,.30,.45\]. Group beneficiary share=.30+.002(kinship−50); public=.30+.002(public/private separation−50); self is remainder. Independent gamma draws have shape 6\*domainShare\*beneficiaryShare and unit scale, then normalize to one. Positivity and unit sum are invariants. Long-run target is normalized originalWeight\*exp(.35\*salience), approached at .002/month. Group consequences are scenario-valued components, not a complete accounting of transfers to a named faction.

**Implementation:** [`model.js:motives`](source/model.js.html#L96) · [`adaptation.js:advance`](source/adaptation.js.html#L419).

**Assumptions / conformance limits:** The concentration 6, role shares, cultural mappings and motive drift are exploratory priors. Relevant-group utility is not fully resolved among multiple affiliations.

**Provenance:** R08, R09, R10, AM01; [S01](SOURCES.html#s01), [S04](SOURCES.html#s04), [S05](SOURCES.html#s05). **Related engineering checks:** [model.test.js](source/model.test.js.html), [adaptation.test.js](source/adaptation.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-dec-01"></a>

### AK-DEC-01 — Subjective choice, TPB and random utility

[Accessible explanation](NARRATIVE.html#ak-dec-01) · [Decision crosswalk](RULE-CROSSWALK.html).

The inherited nine-dimensional utility equation retains norm .50, perceived-control .25 and Gumbel scale .20. Actual receipt expectations replace the former .90 net-income adjustment. Bounded supporter and policy-value inputs are documented in AKX-AGY-02; actual constraints remain separate.

**Implementation:** [`model.js:choose`](source/model.js.html#L975) · [`adaptation.js:decision`](source/adaptation.js.html#L503) · [`adaptation.js:context`](source/adaptation.js.html#L490).

**Assumptions / conformance limits:** All numerical response strengths and newly introduced governance/economic mappings remain uncalibrated. Archived v2.4 formulas are historical; current executable source and AKX mechanisms are authoritative.

**Provenance:** R11, R12, R13, AM01; [S01](SOURCES.html#s01), [S04](SOURCES.html#s04), [S05](SOURCES.html#s05). **Related engineering checks:** [model.test.js](source/model.test.js.html), [adaptation.test.js](source/adaptation.test.js.html), [audit.test.js](source/audit.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-dec-02"></a>

### AK-DEC-02 — Action-specific perceived consequences

[Accessible explanation](NARRATIVE.html#ak-dec-02) · [Decision crosswalk](RULE-CROSSWALK.html).

effects(social,economic,political) concatenates three length-3 arrays and rejects a vector not containing nine finite values. Explicit effects are supplied at each choose call, including ordinary lawful options, improper offers, acceptance, extortion/refusal, case delay/dismissal, implementation/selective/resist/redirect, priority/allocation, budget authorization, publication/sharing, joining/exiting and candidate choice. The generated Action catalogue includes every effects() call, its exact expressions, option name/context, reference code and source location. Need/risk/policy adjustments are applied later in choose; no array is silently converted into a realized money transfer.

**Implementation:** [`model.js:effects`](source/model.js.html#L983) · [`model.js:encounter`](source/model.js.html#L2040) · [`model.js:budgetReview`](source/model.js.html#L1832) · [`model.js:processCases`](source/model.js.html#L2381).

**Assumptions / conformance limits:** Not every context described in the original Word document has a distinct implemented initiator or action set; see the gap register.

**Provenance:** R10, R12, R14, R44; [S01](SOURCES.html#s01), [S02](SOURCES.html#s02). **Related engineering checks:** [audit.test.js](source/audit.test.js.html), [model.test.js](source/model.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-act-01"></a>

### AK-ACT-01 — Encounters, corruption and victimization

[Accessible explanation](NARRATIVE.html#ak-act-01) · [Decision crosswalk](RULE-CROSSWALK.html).

Poisson count sampling uses role intensities \[.65,.85,.20,.20\]. Every completed contact requires .015 PM from both participants. Pending service retries can be abandoned after six months through utility choice. Campaign and business-political opportunities remain. Explicit request IDs and episode keys distinguish repeated contacts. Voluntary bilateral completion, extortion demand and coerced payment remain distinct. The historical headline encounter rate still includes extortion demands and excludes newly modeled private diversion and taxable-activity concealment; those enter other conduct counts.

**Implementation:** [`model.js:encounter`](source/model.js.html#L2040) · [`model.js:encounters`](source/model.js.html#L2189) · [`model.js:completeCorruption`](source/model.js.html#L1150) · [`model.js:act`](source/model.js.html#L1106).

**Assumptions / conformance limits:** All numerical response strengths and newly introduced governance/economic mappings remain uncalibrated. Archived v2.4 formulas are historical; current executable source and AKX mechanisms are authoritative.

**Provenance:** R14, R44, R45; [S01](SOURCES.html#s01). **Related engineering checks:** [model.test.js](source/model.test.js.html), [audit.test.js](source/audit.test.js.html), [dynamics.test.js](source/dynamics.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-act-02"></a>

### AK-ACT-02 — Meaningful choices and integrity recovery

[Accessible explanation](NARRATIVE.html#ak-act-02) · [Decision crosswalk](RULE-CROSSWALK.html).

A meaningful choice is created only for an option set of length&gt;1 containing at least one corrupt option. Its key includes month, context, action key and agent ID; the last 24 entries are retained. Lawful act() can complete only a still-open current-month keyed opportunity. Corrupt act() always records conduct, creating an entry if necessary. One corrupt act sets state=corrupt, lastCorrupt=current month and recoveryChoices=0. Recovery requires month−lastCorrupt&gt;=6 and recoveryChoices&gt;=3. Class activity uses current-role agents’ last-24 entries; its denominator includes attempted/uncompleted meaningful opportunities, not just successful acts. History does not fade with time alone.

**Implementation:** [`model.js:choose`](source/model.js.html#L975) · [`model.js:act`](source/model.js.html#L1106) · [`model.js:recover`](source/model.js.html#L3360) · [`model.js:classActivity`](source/model.js.html#L3416).

**Assumptions / conformance limits:** The criterion is an implemented option/record definition, not a complete legal adjudication. Map radial participation and icon recovery are different summaries of persistent history.

**Provenance:** R14, R60; [S01](SOURCES.html#s01). **Related engineering checks:** [dynamics.test.js](source/dynamics.test.js.html), [visualization.test.js](source/visualization.test.js.html), [audit.test.js](source/audit.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-ins-01"></a>

### AK-INS-01 — Role expectations and institutionalized ease

[Accessible explanation](NARRATIVE.html#ak-ins-01) · [Decision crosswalk](RULE-CROSSWALK.html).

A reference is relevant if it leads the counterpart’s organization or directional trust exceeds .45. For an encounter classed relevant, approval probability is clamp(.50+.40\*Nref) for improper conduct and clamp(.50−.40\*Nref) for lawful conduct. Observed approval/disapproval maps to a ±1 signal; the observing person’s normCorrupt moves .04 toward it, clamped \[−1,1\]. The corresponding organization/role practice strength moves .015 toward approval (0/1). Honest/corrupt practice priors each lie \[.20,.60\] and decay by .999/month. Familiarity multiplies certain decision efforts and service work by (1−.40\*practice). The macro .65 threshold only emits a consolidation/erosion event; it is not an institution switch that changes the rules.

**Implementation:** [`model.js:link`](source/model.js.html#L1433) · [`model.js:practice`](source/model.js.html#L3469) · [`model.js:processServices`](source/model.js.html#L2196).

**Assumptions / conformance limits:** Practical work reductions are implemented for routine services; many other reductions affect subjective effort rather than actual charged person-months. Reference transmission is not a complete multilayer institution model.

**Provenance:** R15, R16, R17; [S01](SOURCES.html#s01), [S04](SOURCES.html#s04). **Related engineering checks:** [dynamics.test.js](source/dynamics.test.js.html), [audit.test.js](source/audit.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-adp-01"></a>

### AK-ADP-01 — Individual receptiveness and numerical psychology

[Accessible explanation](NARRATIVE.html#ak-adp-01) · [Decision crosswalk](RULE-CROSSWALK.html).

Initial openness, retention and learning are .20+.60\*keyedU; baseline reporting safety .20+.60U. With public motive share P, economic-self E, honest reference J=(1−normCorrupt)/2, participation H, knowledge K and experienced trust T: alignment for risk=clamp(.45+.40E+.15K); for attitude/norm=clamp(.25+.35P+.30J−.20H); otherwise=clamp(.35+.35K+.30T). Uptake=clamp((.10+.55\*openness+.20\*alignment+.15\*learning)\*credibility). Conditional strength=clamp(.25+.45\*learning+.30\*alignment). Uptake and accepted magnitude use separate keyed uniforms. Feedback salience approaches experienced components at .08\*credibility; feedback memory uses .10 adjustment. These traits are relative model variables, not psychometric measurements.

**Implementation:** [`adaptation.js:initialize`](source/adaptation.js.html#L175) · [`adaptation.js:receptiveness`](source/adaptation.js.html#L213) · [`adaptation.js:feedback`](source/adaptation.js.html#L237) · [`model.js:expose`](source/model.js.html#L1059) · [`adaptation.js:knowledge`](source/adaptation.js.html#L378) · [`adaptation.js:safety`](source/adaptation.js.html#L387).

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

**Implementation:** [`model.js:relationship`](source/model.js.html#L1259) · [`model.js:related`](source/model.js.html#L1426) · [`model.js:link`](source/model.js.html#L1433) · [`model.js:tie`](source/model.js.html#L1419) · [`model.js:peers`](source/model.js.html#L1373) · [`model.js:index`](source/model.js.html#L836) · [`model.js:recentAmount`](source/model.js.html#L1407).

**Assumptions / conformance limits:** Relationships decay mainly through negative encounters, not a universal expiry timer. Strong access is a simplified protection opportunity; legal intervention still requires its actual process.

**Provenance:** R49, R37, R53; [S01](SOURCES.html#s01), [S02](SOURCES.html#s02). **Related engineering checks:** [audit.test.js](source/audit.test.js.html), [visualization.test.js](source/visualization.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-inf-01"></a>

### AK-INF-01 — Journalism, publication and funding leverage

[Accessible explanation](NARRATIVE.html#ak-inf-01) · [Decision crosswalk](RULE-CROSSWALK.html).

publish selects a media outlet by keyed draw; publication requires .06 RU and a publish/withhold utility choice. Funding dependence uses active donor payments within 12 months, specifically linking a subject’s organization to the outlet, divided by estimated outlet income plus recent total funding. Every six months up to three business→civic funding opportunities offer .80 RU, subject to both donor/recipient choices and actual balances. Accepted funding lowers editorialIndependence by .015, bounded. Record visibility informs scoop access; strategic contested claims occur every nine months. Published linked allegations can refer a matter with .20 probability. A correction is attempted annually for a previously false story older than two months. Final decision stories carry announced decision and collected amount, not hidden guilt.

**Implementation:** [`model.js:publish`](source/model.js.html#L2716) · [`model.js:funding`](source/model.js.html#L2928) · [`model.js:fundingDependence`](source/model.js.html#L1399).

**Assumptions / conformance limits:** No generated articles or complete social feed exist. Strategic misinformation content and correction discovery are simplified world-generator rules; editors do not explicitly optimize the falsity of content. Publication charges money but not a full shared newsroom time budget.

**Provenance:** R46, R47, R48, R50; [S01](SOURCES.html#s01), [S02](SOURCES.html#s02), [S06](SOURCES.html#s06). **Related engineering checks:** [audit.test.js](source/audit.test.js.html), [dynamics.test.js](source/dynamics.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-inf-02"></a>

### AK-INF-02 — Access, sharing and the separation of belief from truth

[Accessible explanation](NARRATIVE.html#ak-inf-02) · [Decision crosswalk](RULE-CROSSWALK.html).

information considers at most the last 12 stories from three months and at most three directly accessed stories/person/month. Exposure=clamp((.03+.15\*outletReach+.08\*localProximity)\*(.5+civilLiberties/100)). Credibility=sourceTrust\*storyEvidence\*(.25+.50\*openness+.25\*learning). Subject belief moves .15\*credibility toward .70 for a claim or .15 for a correction; descriptive belief moves .04\*credibility. Accepted correction raises sourceTrust .03; support for subject memberships moves −.025\*credibility, or +.020 for correction. Sharing uses utility and at most two trusted peers, changing peer belief by .08\*relationshipWeight\*credibility. Descriptive conduct beliefs and normative reference expectations are separate fields. Public-case risk learning is deduplicated against personal adjudication.

**Implementation:** [`model.js:information`](source/model.js.html#L2814) · [`adaptation.js:messageRate`](source/adaptation.js.html#L480) · [`model.js:communicatedDecision`](source/model.js.html#L2656).

**Assumptions / conformance limits:** Beliefs are bounded scalar memories rather than Bayesian probabilities. General descriptive belief directly informs political reputation defaults; it is not a separate universal norm term in every decision.

**Provenance:** R13, R46, R47, R48; [S01](SOURCES.html#s01), [S04](SOURCES.html#s04), [S06](SOURCES.html#s06). **Related engineering checks:** [audit.test.js](source/audit.test.js.html), [adaptation.test.js](source/adaptation.test.js.html), [dynamics.test.js](source/dynamics.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-eco-01"></a>

### AK-ECO-01 — Money, lawful receipts and living needs

[Accessible explanation](NARRATIVE.html#ak-eco-01) · [Decision crosswalk](RULE-CROSSWALK.html).

VA is explicit business output less imported consumed intermediates, plus background domestic production and performed public nonmarket output. Public output uses actual paid compensation times the performed-work share. The reference is the last reconstructed month’s VA and starts at 100. All prices are fixed normalized RU; no validated GDP-per-capita conversion is supplied. Initial boundary cash is a synthetic finite reserve, split 80% domestic/20% foreign. Primary-role compensation debits the actual employer account. The legacy 180\*g treasury grant and wage withholding are removed. Investment, reserve retention, eligible distribution and attempted diversion are distinct leader choices. Ownership is explicitly initialized to the organizational leader as a provisional prior; ordinary membership creates no dividend right. Diverted entrusted funds face internal review.

**Implementation:** [`model.js:totalMoney`](source/model.js.html#L185) · [`model.js:transfer`](source/model.js.html#L199) · [`model.js:monthlyAccounts`](source/model.js.html#L1543) · [`model.js:changeEmployment`](source/model.js.html#L3017).

**Assumptions / conformance limits:** All numerical response strengths and newly introduced governance/economic mappings remain uncalibrated. Archived v2.4 formulas are historical; current executable source and AKX mechanisms are authoritative.

**Provenance:** R30, R42, R43; [S01](SOURCES.html#s01). **Related engineering checks:** [dynamics.test.js](source/dynamics.test.js.html), [model.test.js](source/model.test.js.html), [stress.test.js](source/stress.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-eco-02"></a>

### AK-ECO-02 — Shared public staff capacity and priorities

[Accessible explanation](NARRATIVE.html#ak-eco-02) · [Decision crosswalk](RULE-CROSSWALK.html).

Each person starts with 1 PM. Organizational capacity is bounded by matching-primary-role staff time and competence. Existing public task debits are reconciled to individual ledgers between phases. Governance has work and approval minima; investment waits for delivery and actual installation work. The agenda is ordered within the encounter phase; this is not a full continuous-time scheduler. Reference staff count is fixed at initialization. Backlog adds .02 reference WU/month and subtracts completed current upkeep or eligible repair. Public staff allocation includes maintenance as a fourth competing category. Upkeep costs .10 RU per performed PM; costs are charged once even when one action both clears neglected work and repairs damage.

**Implementation:** [`model.js:monthlyAccounts`](source/model.js.html#L1543) · [`model.js:scheduleWork`](source/model.js.html#L1550) · [`model.js:priorities`](source/model.js.html#L1305).

**Assumptions / conformance limits:** All numerical response strengths and newly introduced governance/economic mappings remain uncalibrated. Archived v2.4 formulas are historical; current executable source and AKX mechanisms are authoritative.

**Provenance:** R33, R35, R39, R40, R41, R43; [S01](SOURCES.html#s01). **Related engineering checks:** [audit.test.js](source/audit.test.js.html), [dynamics.test.js](source/dynamics.test.js.html), [stress.test.js](source/stress.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-eco-03"></a>

### AK-ECO-03 — Service queues and bounded experience feedback

[Accessible explanation](NARRATIVE.html#ak-eco-03) · [Decision crosswalk](RULE-CROSSWALK.html).

Service priority is paid/preferential first, then arrival month and person ID. Work requirement is .025 PM service, .020 tax, .040 permit, multiplied by 1−.40\*honest practice; money cost .015 RU. A completed task contributes satisfaction clamp(1−delay/6); an unfinished task contributes zero and increments personal waiting once. All a person’s monthly task satisfactions are averaged. Trust adjusts .08 toward satisfaction; control .025 toward .20+.70\*satisfaction. Organizational support adjusts .04 times that organization’s request share; governing-party support .02 toward satisfaction. Service-contact count increments once at arrival. Aggregate serviceWait records completed delays, not a running sum for every still-pending request.

**Implementation:** [`model.js:addService`](source/model.js.html#L1974) · [`model.js:processServices`](source/model.js.html#L2196) · [`model.js:experienced`](source/model.js.html#L1275).

**Assumptions / conformance limits:** Service units/costs are normalized assumptions. Formal denial and detailed service quality are not independently modeled.

**Provenance:** R07, R43, R59; [S01](SOURCES.html#s01). **Related engineering checks:** [dynamics.test.js](source/dynamics.test.js.html), [audit.test.js](source/audit.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-cou-01"></a>

### AK-COU-01 — Country observations, proxies and uncertainty

[Accessible explanation](NARRATIVE.html#ak-cou-01) · [Decision crosswalk](RULE-CROSSWALK.html).

Country set NGA,ZAF,IDN,IND,CHN,PER,BRA,USA,DEU,ITA. profiles.js contains GDP PPP and WGI GE/RoL/regulatory-quality descriptors with source metadata; baseline.js adds FH 2026 civil liberties /60, FH2025 electoral-process /12 and participation /16 rescaled to percentages. Culture defaults are 50. Ordinary legal scope .75; ordinary capability .12+.65GE fraction plus ±.11 noise, bounded \[.08,.90\]. For mapped narrow OECD instruments scope=.40+.45\*regulations fraction; capability=.75\*ordinary+.25\*(.15+.65\*practice fraction) plus the same noise/bounds. Nigeria/India protection scope exceptions .40/.45 are explicit estimates. User overrides are validated and applied before warm-up. Generated country/data appendices retain every stored numeric value and URL.

**Implementation:** [`model.js:conditions`](source/model.js.html#L171) · [`baseline.js:conditions`](source/baseline.js.html#L81) · [`baseline.js:organization`](source/baseline.js.html#L100) · [`profiles.js:data`](source/profiles.js.html#L9).

**Assumptions / conformance limits:** No new source verification or live national updates are implied by this code audit. Regulatory quality is a proxy for business conditions; cultural scores, class composition, allocations and most costs lack comparable empirical calibration.

**Provenance:** R18, R19, R21, R54; [S01](SOURCES.html#s01), [S07](SOURCES.html#s07). **Related engineering checks:** [initialization.test.js](source/initialization.test.js.html), [stress.test.js](source/stress.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-cou-02"></a>

### AK-COU-02 — Functional architecture and jurisdiction

[Accessible explanation](NARRATIVE.html#ak-cou-02) · [Decision crosswalk](RULE-CROSSWALK.html).

eligibleTool gates public functions and, for pay/merit/rotation/declarations/conflicts, applicable individual roles. responsible routes civil matters to a civil body when present; China administrative decisions can use prevention; service-origin administrative cases can return to the employer. India complaints and Peru vote-buying use integrity intake. Covered NGA/IDN/CHN specialist matters may investigate through prevention. Criminal stage2 uses prosecution if available, otherwise investigation. Italy political-pressure conduct can take an administrative route. Service-origin intake uses jurisdiction, .12 PM/.01 RU and one-month handoff. Config nodes, names, political modes, cycles and relative first-review phases are enumerated in the generated configuration appendix.

**Implementation:** [`config.js:countries`](source/config.js.html#L9) · [`model.js:eligibleTool`](source/model.js.html#L1185) · [`model.js:responsible`](source/model.js.html#L2344) · [`model.js:makeCase`](source/model.js.html#L2237).

**Assumptions / conformance limits:** Routing is stylized, not a comprehensive current offence/jurisdiction map. Institutional independence, appointment protections and civil/criminal procedures are only partially represented.

**Provenance:** R19, R20, R25, R37, R45, R51; [S01](SOURCES.html#s01), [S07](SOURCES.html#s07). **Related engineering checks:** [initialization.test.js](source/initialization.test.js.html), [audit.test.js](source/audit.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-ini-01"></a>

### AK-INI-01 — A reconstructed pre-policy year

[Accessible explanation](NARRATIVE.html#ak-ini-01) · [Decision crosswalk](RULE-CROSSWALK.html).

createInitial starts a raw population at month −12, sets eligibility and psychological clocks accordingly, and runs twelve ordinary monthly steps with no selected reforms under a dedicated pre-policy stream derived from country and initialSeed. It preserves cases/services, receipts, beliefs, history and networks; retains the latest three realized decisions; stores warm-up history/metrics in initialization; resets intervention-period metric/distribution counters and event feed; and resets initial organizational controllers. An active configuration cache avoids repeated warm-up. validateInitial reconstructs and checks expected fields, exact identities/counters, money and role counts. initialDifference ignores object-key ordering and tolerates only finite noninteger relative rounding &lt;=1e−10; imported values are retained rather than replaced.

**Implementation:** [`model.js:createInitial`](source/model.js.html#L525) · [`model.js:initialDifference`](source/model.js.html#L593) · [`model.js:validateInitial`](source/model.js.html#L620) · [`reporting.js:remember`](source/reporting.js.html#L219) · [`app.js:signature`](source/app.js.html#L284) · [`app.js:initialFor`](source/app.js.html#L291).

**Assumptions / conformance limits:** Twelve months is a finite reconstruction, not a demonstrated equilibrium or estimated national backlog. Country-condition overrides change that reconstructed past; selecting different reforms or future event seeds does not.

**Provenance:** R13, R55, R60; [S01](SOURCES.html#s01). **Related engineering checks:** [initialization.test.js](source/initialization.test.js.html), [dynamics.test.js](source/dynamics.test.js.html), [reporting.test.js](source/reporting.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-rng-01"></a>

### AK-RNG-01 — Keyed probability, paired worlds and exact replay

[Accessible explanation](NARRATIVE.html#ak-rng-01) · [Decision crosswalk](RULE-CROSSWALK.html).

draw returns (hash(String(seed)+"|"+key.join("|"))+.5)/2^32. The 32-bit hash uses FNV-style accumulation and integer mixing, not cryptographic security. Runtime keys include eventSeed|replicate, month, process and stable IDs; initialization uses distinct country/society, motive and psychological namespaces. Occasion-specific Gumbel draws are keyed by option name. The browser uses crypto.getRandomValues to obtain a new event identity unless exact replay is requested; continuing/stepping preserves the stream. Replicates append the replicate index. Legal coverage and diagnostic draws have separate fixed namespaces. Divergent endogenous events need not have true counterparts even when common shocks are paired.

**Implementation:** [`model.js:hash`](source/model.js.html#L44) · [`model.js:draw`](source/model.js.html#L57) · [`model.js:rand`](source/model.js.html#L829) · [`model.js:generator`](source/model.js.html#L64) · [`run-seeds.js:newEventSeed`](source/run-seeds.js.html#L15) · [`run-seeds.js:prepareRun`](source/run-seeds.js.html#L30).

**Assumptions / conformance limits:** A 32-bit hash permits collisions and is not a security RNG or a proof of statistical independence. Determinism does not imply absence of probabilistic rules.

**Provenance:** R12, R55; [S01](SOURCES.html#s01). **Related engineering checks:** [run-seeds.test.js](source/run-seeds.test.js.html), [model.test.js](source/model.test.js.html), [worker.test.js](source/worker.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-ref-01"></a>

### AK-REF-01 — Formal reform selection and legal scope

[Accessible explanation](NARRATIVE.html#ak-ref-01) · [Decision crosswalk](RULE-CROSSWALK.html).

adopt creates a policy record with initialRate=rate=user mobilization, scope=originalScope=.85, formal=active, requirements, allocations, counters and reviews. Recipient organizations’ legal entry for that tool is set to scope. coverage returns eligible legal scope, constrained by policy.scope if selected. covered compares a fixed person/body/tool hash to that scope. operational is coverage\*capability for aggregate use or a covered 0/1 gate\*capability for a specified person. operatingPolicy additionally requires active formal status, installed allocation and last delivery at least currentMonth−1. expose requires that operating gate. Zero new funding preserves baseline capabilities but does not prevent the selected reform’s formal scope change.

**Implementation:** [`model.js:adopt`](source/model.js.html#L927) · [`model.js:coverage`](source/model.js.html#L1223) · [`model.js:covered`](source/model.js.html#L1234) · [`model.js:operational`](source/model.js.html#L1250) · [`model.js:cap`](source/model.js.html#L868).

**Assumptions / conformance limits:** The common .85 scope and generic country/tool uplift are not a complete set of 120 independently calibrated reforms. Coverage-sensitive diagnostics can improve on formal adoption without demonstrating new delivery.

**Provenance:** R22, R23, R24, R25, R26; [S01](SOURCES.html#s01), [S03](SOURCES.html#s03). **Related engineering checks:** [model.test.js](source/model.test.js.html), [adaptation.test.js](source/adaptation.test.js.html), [audit.test.js](source/audit.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-ref-02"></a>

### AK-REF-02 — Requirements, mobilization and initial allocation

[Accessible explanation](NARRATIVE.html#ak-ref-02) · [Decision crosswalk](RULE-CROSSWALK.html).

For eligible official+politician count n and GDP scale g, requirements are setup=(2+n\*a\_p)g, monthly=(1+n\*b\_p)g and time=1+n\*c\_p, with each tool’s \[a,b,c\] in config.costs. recipients selects function-eligible bodies; if both central and regional recipients exist, shares are centralShare/centralCount or (1−centralShare)/localCount; otherwise equal. Per month request=rate\*(monthly+setup/3 while any recipient is uninstalled). Disbursement is transfer(treasury,allocation,request\*share); requested and actually mobilized are distinct. Priority ordering is utility-based, not an independent random funding percentage. All cost tuples and allocation priors are reproduced in the generated parameter/configuration appendices.

**Implementation:** [`model.js:requirements`](source/model.js.html#L210) · [`model.js:recipients`](source/model.js.html#L885) · [`model.js:fundPolicies`](source/model.js.html#L1588) · [`config.js:costs`](source/config.js.html#L164).

**Assumptions / conformance limits:** Allocation is not measured national budget distribution. Shared infrastructure setup is not deduplicated across policies; cost tuples and 100% requirements remain exploratory.

**Provenance:** R27, R28, R29, R30, R33, R39, R40; [S01](SOURCES.html#s01). **Related engineering checks:** [audit.test.js](source/audit.test.js.html), [model.test.js](source/model.test.js.html), [stress.test.js](source/stress.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-ref-03"></a>

### AK-REF-03 — Implementation, resistance and setup

[Accessible explanation](NARRATIVE.html#ak-ref-03) · [Decision crosswalk](RULE-CROSSWALK.html).

Each allocation needs reqWork=requirement.time\*share and reqMoney=requirement.monthly\*share. If money is absent or available reform time&lt;.05 PM, response is awaiting resources. Resistance spends no delivery work; redirection transfers up to .45\*reqMoney to the leader and uses .05 PM, producing a conduct record. Fidelity=(.45 for selective else1)\*coverage/originalScope. Available dose=min(1,availableTime/reqWork,allocationBalance/reqMoney)\*fidelity; used=reqWork\*dose, operating money=reqMoney\*dose. Setup additionally spends up to setup\*share/3\*dose, accumulates dose/3 work and decrements its three-step delay on work attempts. Installation requires delay&lt;=0, setupWork&gt;=1 and at least .85 of estimated setup spending. Installed delivery raises capability .08\*dose toward .98 and invokes only the selected tool’s actual mechanisms.

**Implementation:** [`model.js:implementPolicies`](source/model.js.html#L1607) · [`model.js:priorities`](source/model.js.html#L1305) · [`model.js:operatingPolicy`](source/model.js.html#L1048).

**Assumptions / conformance limits:** Setup money and operating money can both be spent before installation. “Three months” is a minimum work-stage parameter, not a guaranteed completion time. Some prose channel descriptions are broader than actual exposure hooks.

**Provenance:** R31, R33, R34, R35, R40, R41; [S01](SOURCES.html#s01). **Related engineering checks:** [audit.test.js](source/audit.test.js.html), [model.test.js](source/model.test.js.html), [adaptation.test.js](source/adaptation.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-ref-04"></a>

### AK-REF-04 — Resource reviews, narrowing and suspension

[Accessible explanation](NARRATIVE.html#ak-ref-04) · [Decision crosswalk](RULE-CROSSWALK.html).

budgetReview runs every six months. Controller chooses increase/hold/decrease/narrow; budget leader chooses authorize/withhold, and a parliamentary coalition may require a second party leader’s approval. An authorized increase adds .10 to rate only if treasury&gt;3\*monthly requirements; decrease subtracts .10, clamped \[0,1\]. A later approved narrowing after at least one prior approved narrowing reduces scope .10, floor .20; at scope&lt;=.25 a .25 draw can set formal=suspended. Feedback delivery=sum allocation work/(time requirement\*max(1,month)), support=mean(.6 governing-party affinity+.4 experienced trust), resistance=share resist/redirect, waiting=mean personal wait/contact. No routine deposits are made by supporters.

**Implementation:** [`model.js:budgetReview`](source/model.js.html#L1832) · [`model.js:policyFeedback`](source/model.js.html#L1341) · [`model.js:politicalReview`](source/model.js.html#L3242).

**Assumptions / conformance limits:** Exceptional event-triggered reviews, full repeal, explicit reinstatement and automatic trajectory classification are not implemented. Narrowing consent is simplified and not full national legislative procedure.

**Provenance:** R31, R32, R36, R37, R38; [S01](SOURCES.html#s01), [S08](SOURCES.html#s08). **Related engineering checks:** [audit.test.js](source/audit.test.js.html), [model.test.js](source/model.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-cas-01"></a>

### AK-CAS-01 — Signals, reporting and case intake

[Accessible explanation](NARRATIVE.html#ak-cas-01) · [Decision crosswalk](RULE-CROSSWALK.html).

Report cost=.18\*(1−aggregate complaints access)+.03\*distance to subject organization. Reporting uses subjective safety and reporting-specific knowledge; submission requires chosen report, cost&lt;=.16 and cash&gt;=cost. makeCase de-duplicates by recordId. Initial evidence=clamp(.25+.35\*visibility+.30\*(U−.5)); stage0 screening is due next month, with one more month if outside specialist coverage. Audit bodies process up to min(12,floor(available case time/.25)) sampled records from the last six months; each check costs .25 PM. True-signal threshold is operative oversight\*(.35+.40\*verified declarations+.25\*target disclosure quality); lawful controls have .025 false-signal probability. Covered subjects may receive a .25-probability audit notice. Record source, jurisdiction, mandate, actors, reporter and route persist.

**Implementation:** [`model.js:report`](source/model.js.html#L1991) · [`model.js:makeCase`](source/model.js.html#L2237) · [`model.js:audit`](source/model.js.html#L2302).

**Assumptions / conformance limits:** A report’s viability threshold is .16 RU, not the earlier proposal’s .10. Detection sampling and reporting opportunity rates are assumptions, not observed national rates.

**Provenance:** R14, R37, R45, R47; [S01](SOURCES.html#s01). **Related engineering checks:** [audit.test.js](source/audit.test.js.html), [model.test.js](source/model.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-cas-02"></a>

### AK-CAS-02 — Staged processing, discretion and evidence

[Accessible explanation](NARRATIVE.html#ak-cas-02) · [Decision crosswalk](RULE-CROSSWALK.html).

Eligible case processing requires .55 PM at investigation, .25 at other stages and .04 RU; local intake additionally uses .12 PM/.01 RU. A related insider changes utility consequences of delay/dismissal; first corrupt obstruction can create conduct. Delay reschedules +2 months. Processing screening adds .08\*operative agency capability; evidence&lt;.32 screens out, otherwise investigation due+2. Investigation quality=max(operative oversight,operative agency)\*(.50+.25\*org skill+.25\*staff skill); truth-conditioned evidence signal=.55+.40quality, lawful signal=.12+.40U. New evidence=.45old+.55signal. Next stage due+2; criminal prosecution requires evidence&gt;=.40 and adds one month before decision. Adverse finding requires evidence&gt;.55+.08\*(1−decision-body skill). Controllers choose with subjective utility; evidence generation uses model truth as a world process, not information read by the controller’s choice function.

**Implementation:** [`model.js:processCases`](source/model.js.html#L2381) · [`model.js:responsible`](source/model.js.html#L2344).

**Assumptions / conformance limits:** Appeals, detailed legal proof rules, real judicial independence protections and all offence-specific national procedures are absent.

**Provenance:** R37, R45, R48; [S01](SOURCES.html#s01). **Related engineering checks:** [model.test.js](source/model.test.js.html), [audit.test.js](source/audit.test.js.html), [stress.test.js](source/stress.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-cas-03"></a>

### AK-CAS-03 — Assessed liability, collection and accountability learning

[Accessible explanation](NARRATIVE.html#ak-cas-03) · [Decision crosswalk](RULE-CROSSWALK.html).

Nominal liability is 2 RU, or 3 when the penalties reform is formally active, multiplied by operative collection capability/coverage. Initial payment is capped at .65 of current personal cash; unpaid remainder becomes a case/body-linked claim. Later collection costs .010 PM/.005 RU, preserves .50 month of living needs, and across all claims cannot exceed .15 of that month’s gross receipts. It reduces claims, increases treasury and case collections, but does not count a new sanction. Personal cost-belief update rate=.12+.12learning toward riskPrior+.35; public ordinary update=(.015+.025learning)\*credibility toward prior+.15; bounded \[.03,.95\] and relative prior bands. Base risk relaxes .005/month toward prior. Case IDs are deduplicated in a 64-event memory. Communicated decisions use a recently operative tool risk pathway or the ordinary path, never both, and a personally experienced decision cannot add another public update.

**Implementation:** [`model.js:collectLiabilities`](source/model.js.html#L2678) · [`model.js:communicatedDecision`](source/model.js.html#L2656) · [`adaptation.js:accountability`](source/adaptation.js.html#L396) · [`model.js:processCases`](source/model.js.html#L2381) · [`model.js:riskExperience`](source/model.js.html#L1082).

**Assumptions / conformance limits:** The risk score is relative expected cost, not a true probability of detection. Collection rules are generic assumptions and not claims about national garnishment law.

**Provenance:** R37, R43, R45, AM06; [S01](SOURCES.html#s01). **Related engineering checks:** [dynamics.test.js](source/dynamics.test.js.html), [adaptation.test.js](source/adaptation.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-gov-01"></a>

### AK-GOV-01 — Political support, officeholding and authority

[Accessible explanation](NARRATIVE.html#ak-gov-01) · [Decision crosswalk](RULE-CROSSWALK.html).

Public appointments can be initiated through the controller; category-specific internal initiators also exist. Candidate pools contain up to eight matching-primary-role staff. Proposals snapshot the current leader, approval roster and protection. They require at least two months and .03 PM of preparation, all required vote opportunities, a strict majority and satisfied removal protection. Inherited presidential, parliamentary and appointment-mode national review remains as documented in config.js.

**Implementation:** [`model.js:politicalReview`](source/model.js.html#L3242) · [`config.js:countries`](source/config.js.html#L9).

**Assumptions / conformance limits:** All numerical response strengths and newly introduced governance/economic mappings remain uncalibrated. Archived v2.4 formulas are historical; current executable source and AKX mechanisms are authoritative.

**Provenance:** R51, R52, R53, R31; [S01](SOURCES.html#s01). **Related engineering checks:** [model.test.js](source/model.test.js.html), [audit.test.js](source/audit.test.js.html), [initialization.test.js](source/initialization.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-mac-01"></a>

### AK-MAC-01 — Collective feedback and consequential developments

[Accessible explanation](NARRATIVE.html#ak-mac-01) · [Decision crosswalk](RULE-CROSSWALK.html).

VA is explicit business output less imported consumed intermediates, plus background domestic production and performed public nonmarket output. Public output uses actual paid compensation times the performed-work share. The reference is the last reconstructed month’s VA and starts at 100. All prices are fixed normalized RU; no validated GDP-per-capita conversion is supplied. Initial boundary cash is a synthetic finite reserve, split 80% domestic/20% foreign. Macro events observe economic/institutional development; an event label does not apply another generic effect.

**Implementation:** [`model.js:macroDevelopments`](source/model.js.html#L3434) · [`model.js:policyFeedback`](source/model.js.html#L1341) · [`model.js:metrics`](source/model.js.html#L3592).

**Assumptions / conformance limits:** All numerical response strengths and newly introduced governance/economic mappings remain uncalibrated. Archived v2.4 formulas are historical; current executable source and AKX mechanisms are authoritative.

**Provenance:** R36, R38, R42, R43, R59; [S01](SOURCES.html#s01), [S08](SOURCES.html#s08). **Related engineering checks:** [dynamics.test.js](source/dynamics.test.js.html), [visualization.test.js](source/visualization.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-pol-aca"></a>

### AK-POL-ACA — Anti-corruption body

[Accessible explanation](NARRATIVE.html#ak-pol-aca) · [Decision crosswalk](RULE-CROSSWALK.html).

Installed work raises organization skill .008\*dose and capability .08\*dose toward .98. Actual staff work uses Adaptive.work. Screened subjects receive a risk exposure and reporters a reporting-control exposure only if the relevant allocation is operative. Investigation evidence can use agency capability. Direct ceilings risk .25 and reporting/case control .15; half-life 10.

**Implementation:** [`adaptation.js:map.aca`](source/adaptation.js.html#L43) · [`config.js:costs.aca`](source/config.js.html#L166) · [`reporting.js:definitions.aca`](source/reporting.js.html#L39) · [`model.js:implementPolicies`](source/model.js.html#L1607).

**Assumptions / conformance limits:** The diagnostic is not a stratified exercise of mandate under observed high-power opposition.

**Provenance:** R22, R24, R57; [S01](SOURCES.html#s01), [S03](SOURCES.html#s03), [S09](SOURCES.html#s09). **Related engineering checks:** [adaptation.test.js](source/adaptation.test.js.html), [reporting.test.js](source/reporting.test.js.html), [audit.test.js](source/audit.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-pol-merit"></a>

### AK-POL-MERIT — Recruitment and promotion

[Accessible explanation](NARRATIVE.html#ak-pol-merit) · [Decision crosswalk](RULE-CROSSWALK.html).

Each six-month service vacancy uses a 24-candidate pool. Actual merit is a leader’s merit choice or review enforcement with probability operative merit\*recordQuality. A blocked connection override does not become a completed patronage act. Appointment/induction exposures target norm .12 and control .15 only in recruitment, half-life 12. New report outcome=merit appointments/all appointments over 12 months.

**Implementation:** [`adaptation.js:map.merit`](source/adaptation.js.html#L53) · [`config.js:costs.merit`](source/config.js.html#L169) · [`reporting.js:definitions.merit`](source/reporting.js.html#L50) · [`model.js:implementPolicies`](source/model.js.html#L1607).

**Assumptions / conformance limits:** No general promotion ladder, protected selection committee or country-specific appointment pipeline is simulated.

**Provenance:** R22, R57; [S01](SOURCES.html#s01), [S03](SOURCES.html#s03), [S09](SOURCES.html#s09). **Related engineering checks:** [adaptation.test.js](source/adaptation.test.js.html), [reporting.test.js](source/reporting.test.js.html), [audit.test.js](source/audit.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-pol-rotation"></a>

### AK-POL-ROTATION — Staff rotation

[Accessible explanation](NARRATIVE.html#ak-pol-rotation) · [Decision crosswalk](RULE-CROSSWALK.html).

Annual transfer opportunity is gated by operative rotation. A nonleader official can move to the next service agency after leader choice and .05 RU cost. Existing ties/home/identity persist; workplace and memberships change. Direct norm ceiling .10, integrity/case contexts, half-life 8. Continuity diagnostic checks same original leader, leader tie&gt;.30 or a remaining member’s tie&gt;.50 to original controller.

**Implementation:** [`adaptation.js:map.rotation`](source/adaptation.js.html#L62) · [`config.js:costs.rotation`](source/config.js.html#L172) · [`reporting.js:definitions.rotation`](source/reporting.js.html#L61) · [`model.js:implementPolicies`](source/model.js.html#L1607).

**Assumptions / conformance limits:** It evaluates four service functions and direct ties, not comprehensive informal control or all high-risk public posts.

**Provenance:** R22, R53, R57; [S01](SOURCES.html#s01), [S03](SOURCES.html#s03), [S09](SOURCES.html#s09). **Related engineering checks:** [adaptation.test.js](source/adaptation.test.js.html), [reporting.test.js](source/reporting.test.js.html), [audit.test.js](source/audit.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-pol-protection"></a>

### AK-POL-PROTECTION — Protection for reporting persons

[Accessible explanation](NARRATIVE.html#ak-pol-protection) · [Decision crosswalk](RULE-CROSSWALK.html).

Retaliation requires the perpetrator’s utility choice and &gt;.15 RU. Actual protection requires &gt;.25 remaining case time and a draw below operative protection, then uses .25 PM. Unprotected victim can lose up to .30 RU. Experience targets reporting safety1 or 0; successful protection may also improve lawful control. Direct control .25, safety .35, report/refuse contexts, half-life 8. Outcome=actual remedies/reported threats over 12 months; n=0 unavailable.

**Implementation:** [`adaptation.js:map.protection`](source/adaptation.js.html#L71) · [`config.js:costs.protection`](source/config.js.html#L175) · [`reporting.js:definitions.protection`](source/reporting.js.html#L72) · [`model.js:implementPolicies`](source/model.js.html#L1607).

**Assumptions / conformance limits:** Only modeled reported threats enter this realized denominator; missing complaints and unseen retaliation are not universal protection success.

**Provenance:** R22, R37, R57; [S01](SOURCES.html#s01), [S03](SOURCES.html#s03), [S09](SOURCES.html#s09). **Related engineering checks:** [adaptation.test.js](source/adaptation.test.js.html), [reporting.test.js](source/reporting.test.js.html), [audit.test.js](source/audit.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-pol-declarations"></a>

### AK-POL-DECLARATIONS — Asset, liability and gift declarations

[Accessible explanation](NARRATIVE.html#ak-pol-declarations) · [Decision crosswalk](RULE-CROSSWALK.html).

Installed work increases covered persons’ disclosure completeness by .04\*dose\*(1−completeness). Every six months communicated verification can create risk learning toward current belief+.10\*completeness\*(1−belief). Covered declarations enter audit detection through verification capability\*completeness. Direct risk ceiling .15, integrity contexts, half-life 10. Output counts actual additional-reform verification notices; outcome is a record-based capability diagnostic.

**Implementation:** [`adaptation.js:map.declarations`](source/adaptation.js.html#L80) · [`config.js:costs.declarations`](source/config.js.html#L178) · [`reporting.js:definitions.declarations`](source/reporting.js.html#L83) · [`model.js:implementPolicies`](source/model.js.html#L1607).

**Assumptions / conformance limits:** No itemized assets, gifts, liability forms or independent financial reconstruction are modeled.

**Provenance:** R22, R57; [S01](SOURCES.html#s01), [S03](SOURCES.html#s03), [S09](SOURCES.html#s09). **Related engineering checks:** [adaptation.test.js](source/adaptation.test.js.html), [reporting.test.js](source/reporting.test.js.html), [audit.test.js](source/audit.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-pol-conflicts"></a>

### AK-POL-CONFLICTS — Conflict-of-interest disclosure and review

[Accessible explanation](NARRATIVE.html#ak-pol-conflicts) · [Decision crosswalk](RULE-CROSSWALK.html).

Installed work increases recordQuality .03\*dose\*(1−quality). For a related bilateral exchange, review prevention probability=.35\*recordQuality\*operative conflict capability. Prevention generates actual contacts and can affect perceived norm .10 and improper control .25, in integrity/recruitment/implementation contexts, half-life 10. Output counts blocked exchanges once, rather than twice for the two contacted people.

**Implementation:** [`adaptation.js:map.conflicts`](source/adaptation.js.html#L89) · [`config.js:costs.conflicts`](source/config.js.html#L181) · [`reporting.js:definitions.conflicts`](source/reporting.js.html#L94) · [`model.js:implementPolicies`](source/model.js.html#L1607).

**Assumptions / conformance limits:** No comprehensive legal conflict taxonomy, recusal procedure or independent review appeal is simulated.

**Provenance:** R22, R57; [S01](SOURCES.html#s01), [S03](SOURCES.html#s03), [S09](SOURCES.html#s09). **Related engineering checks:** [adaptation.test.js](source/adaptation.test.js.html), [reporting.test.js](source/reporting.test.js.html), [audit.test.js](source/audit.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-pol-oversight"></a>

### AK-POL-OVERSIGHT — Audits and investigations

[Accessible explanation](NARRATIVE.html#ak-pol-oversight) · [Decision crosswalk](RULE-CROSSWALK.html).

Audit detection uses record visibility, verified declarations and operative capability; investigation quality also depends on organizational/staff skill. Installed capability approaches .98 through delivered work. Communicated audit/inquiry risk ceiling .30, integrity contexts, half-life 8. Output counts completed investigation stages. Outcome remains the fixed-reference scrutiny/correction capability proxy.

**Implementation:** [`adaptation.js:map.oversight`](source/adaptation.js.html#L98) · [`config.js:costs.oversight`](source/config.js.html#L184) · [`reporting.js:definitions.oversight`](source/reporting.js.html#L105) · [`model.js:implementPolicies`](source/model.js.html#L1607).

**Assumptions / conformance limits:** Actual completed correction is not separately tested in every diagnostic reference situation; independence and high-power opposition remain simplified.

**Provenance:** R22, R45, R57; [S01](SOURCES.html#s01), [S03](SOURCES.html#s03), [S09](SOURCES.html#s09). **Related engineering checks:** [adaptation.test.js](source/adaptation.test.js.html), [reporting.test.js](source/reporting.test.js.html), [audit.test.js](source/audit.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-pol-pay"></a>

### AK-POL-PAY — Remuneration and incentives

[Accessible explanation](NARRATIVE.html#ak-pol-pay) · [Decision crosswalk](RULE-CROSSWALK.html).

Actual regular and supplemental public receipts are no longer reduced by the superseded 10% wage withholding. Supplements remain conserved transfers from installed pay allocations. Adequacy compares actual receipts with ordinary needs over six observations.

**Implementation:** [`adaptation.js:map.pay`](source/adaptation.js.html#L107) · [`config.js:costs.pay`](source/config.js.html#L187) · [`reporting.js:definitions.pay`](source/reporting.js.html#L116) · [`model.js:implementPolicies`](source/model.js.html#L1607).

**Assumptions / conformance limits:** All numerical response strengths and newly introduced governance/economic mappings remain uncalibrated. Archived v2.4 formulas are historical; current executable source and AKX mechanisms are authoritative.

**Provenance:** R22, R43, R57, AM06; [S01](SOURCES.html#s01), [S03](SOURCES.html#s03), [S09](SOURCES.html#s09). **Related engineering checks:** [adaptation.test.js](source/adaptation.test.js.html), [reporting.test.js](source/reporting.test.js.html), [audit.test.js](source/audit.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-pol-penalties"></a>

### AK-POL-PENALTIES — Financial penalties

[Accessible explanation](NARRATIVE.html#ak-pol-penalties) · [Decision crosswalk](RULE-CROSSWALK.html).

Formal active reform changes nominal2→3 RU liability; operative capability determines assessment/collection. Persistent claims and personal/public risk learning are detailed in AK-CAS-03. Direct risk ceiling .40, integrity contexts, half-life 8. Report outcome uses a12-month extortion cohort ending 6 months earlier, at least 20 violations, and observed collections per violation; legacy outcome uses its cumulative matured cohort.

**Implementation:** [`adaptation.js:map.penalties`](source/adaptation.js.html#L116) · [`config.js:costs.penalties`](source/config.js.html#L190) · [`reporting.js:definitions.penalties`](source/reporting.js.html#L127) · [`model.js:implementPolicies`](source/model.js.html#L1607).

**Assumptions / conformance limits:** The reported realized ratio is not a calibrated probability of appropriate imposition times collectible amount, nor a complete violation-specific penalty schedule.

**Provenance:** R22, R45, R57, AM06; [S01](SOURCES.html#s01), [S03](SOURCES.html#s03), [S09](SOURCES.html#s09). **Related engineering checks:** [adaptation.test.js](source/adaptation.test.js.html), [reporting.test.js](source/reporting.test.js.html), [audit.test.js](source/audit.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-pol-disclosure"></a>

### AK-POL-DISCLOSURE — Proactive disclosure

[Accessible explanation](NARRATIVE.html#ak-pol-disclosure) · [Decision crosswalk](RULE-CROSSWALK.html).

Installed work increases disclosureQuality .04\*dose\*(1−quality). Record visibility is disclosureQuality\*(.4+.6\*operative disclosure) where applicable, influencing detection/publication access. Direct persuasion map is empty. Output counts delivered public-record implementation PM, not fabricated government documents; outcome is a practical-transparency capability proxy.

**Implementation:** [`adaptation.js:map.disclosure`](source/adaptation.js.html#L125) · [`config.js:costs.disclosure`](source/config.js.html#L193) · [`reporting.js:definitions.disclosure`](source/reporting.js.html#L138) · [`model.js:implementPolicies`](source/model.js.html#L1607).

**Assumptions / conformance limits:** No itemized publication registry, statutory request process or complete test of document timeliness/accessibility is implemented.

**Provenance:** R22, R47, R57, AM06; [S01](SOURCES.html#s01), [S03](SOURCES.html#s03), [S09](SOURCES.html#s09). **Related engineering checks:** [adaptation.test.js](source/adaptation.test.js.html), [reporting.test.js](source/reporting.test.js.html), [audit.test.js](source/audit.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-pol-complaints"></a>

### AK-POL-COMPLAINTS — Reporting and complaints

[Accessible explanation](NARRATIVE.html#ak-pol-complaints) · [Decision crosswalk](RULE-CROSSWALK.html).

Reporting cost and submission threshold are in AK-CAS-01. Encountered instructions require operative delivery; direct reporting control .30 and channel knowledge .20 apply only to report context, half-life 8. Actual submitted reports and complaint-source open files are observed. Outcome remains a fixed-reference intake/access proxy; the code does not execute100 independent real submissions for the diagnostic.

**Implementation:** [`adaptation.js:map.complaints`](source/adaptation.js.html#L134) · [`config.js:costs.complaints`](source/config.js.html#L196) · [`reporting.js:definitions.complaints`](source/reporting.js.html#L149) · [`model.js:implementPolicies`](source/model.js.html#L1607).

**Assumptions / conformance limits:** It does not directly estimate the approved chapter-level share able to submit within an independently modeled 1-month/.10-RU requirement.

**Provenance:** R22, R45, R57; [S01](SOURCES.html#s01), [S03](SOURCES.html#s03), [S09](SOURCES.html#s09). **Related engineering checks:** [adaptation.test.js](source/adaptation.test.js.html), [reporting.test.js](source/reporting.test.js.html), [audit.test.js](source/audit.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-pol-education"></a>

### AK-POL-EDUCATION — Awareness and education

[Accessible explanation](NARRATIVE.html#ak-pol-education) · [Decision crosswalk](RULE-CROSSWALK.html).

For each operative recipient, teaching contact probability=.06\*dose\*operative education. Contact invokes separate uptake/magnitude draws with actual source trust and dose. Ceilings: attitude .30, norm .20, control .25, knowledge .35; integrity/report/refuse/recruit/implementation/case/retaliation contexts; half-life 6 adjusted by retention. Output counts delivered episodes regardless of uptake; outcome=100\*mean usable knowledge across 1,000 agents. Conditions additionally show effective lawful reference approval, control and retained attitude influence.

**Implementation:** [`adaptation.js:map.education`](source/adaptation.js.html#L143) · [`config.js:costs.education`](source/config.js.html#L199) · [`reporting.js:definitions.education`](source/reporting.js.html#L160) · [`model.js:implementPolicies`](source/model.js.html#L1607).

**Assumptions / conformance limits:** No role-specific question bank or empirically validated knowledge test exists. Repeated delivery counts contacts, not unique people or verified comprehension.

**Provenance:** R22, R57, AM02, AM03, AM04, AM05; [S01](SOURCES.html#s01), [S03](SOURCES.html#s03), [S09](SOURCES.html#s09). **Related engineering checks:** [adaptation.test.js](source/adaptation.test.js.html), [reporting.test.js](source/reporting.test.js.html), [audit.test.js](source/audit.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-mea-01"></a>

### AK-MEA-01 — Institutional indicators and fixed reference diagnostics

[Accessible explanation](NARRATIVE.html#ak-mea-01) · [Decision crosswalk](RULE-CROSSWALK.html).

Legacy diagnostic n is 100 for complaints, number of services for rotation and current official count for most other tools; education instead uses the exact mean of all agents’ usable knowledge. Fixed draws use Antarkya-fixed-diagnostic, societyDrawKey,tool,index. Backlog factor=1/(1+(serviceBacklog+caseBacklog)/memberCount); capacity=clamp((.5orgSkill+.5staffSkill)\*(.4+.6backlogFactor)). Tool thresholds multiply coverage by their capability/record/verification formula, with score100\*passed/n. The reporting layer replaces merit/protection with trailing 12-month observed ratios when n&gt;0, penalties with its matured cohort, and otherwise uses legacy snapshot definitions. Legacy merit changes to observed cumulative appointments after 20; reporting merit does not. The measurement dictionary distinguish these two paths, denominators, units and missing values.

**Implementation:** [`model.js:diagnostic`](source/model.js.html#L3634) · [`model.js:assessment`](source/model.js.html#L3771) · [`reporting.js:sample`](source/reporting.js.html#L247) · [`reporting.js:outcomeMeta`](source/reporting.js.html#L509).

**Assumptions / conformance limits:** No stratified high-/low-power standardized case execution, full lawful-control diagnostic or uncertainty interval is implemented. The minimum 20-observation rule is not universal: new merit/protection ratios use n&gt;0 and show the count.

**Provenance:** R56, R57, R58; [S01](SOURCES.html#s01), [S09](SOURCES.html#s09). **Related engineering checks:** [reporting.test.js](source/reporting.test.js.html), [initialization.test.js](source/initialization.test.js.html), [adaptation.test.js](source/adaptation.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-mea-02"></a>

### AK-MEA-02 — Package impact and paired comparison

[Accessible explanation](NARRATIVE.html#ak-mea-02) · [Decision crosswalk](RULE-CROSSWALK.html).

Rate=100\*encounterCorruptActs/encounterOpportunities; zero denominator gives null. Paired difference is reformRate−baselineRate, in percentage points. For a trailing 12-month post-adoption window at t, subtract cumulative counters at s=max(0,t−12), then divide separately within each branch; never average unweighted monthly rates. Since-adoption uses s=0. The chart’s x-axis remains model months. Small differences use three decimals; nonzero magnitudes&lt;.0005 use scientific notation rather than signed zero. Repetition statistics report mean/min/max paired differences across new event streams with identical initial society. They are simulation variation, not an empirical confidence interval. Macro consequences remain separately named quantities; a bribe/fine transfer is not automatically net social loss.

**Implementation:** [`model.js:comparison`](source/model.js.html#L3944) · [`visualization.js:impactWindow`](source/visualization.js.html#L153) · [`visualization.js:impactSeries`](source/visualization.js.html#L181) · [`visualization.js:impactDifference`](source/visualization.js.html#L200) · [`visualization.js:hash`](source/visualization.js.html#L16).

**Assumptions / conformance limits:** No automatic leave-one-out attribution, full welfare account or comprehensive displacement estimator exists. Extortion demands count even when no payment completes.

**Provenance:** R55, R58, R59; [S01](SOURCES.html#s01), [S09](SOURCES.html#s09). **Related engineering checks:** [visualization.test.js](source/visualization.test.js.html), [model.test.js](source/model.test.js.html), [worker.test.js](source/worker.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-mea-03"></a>

### AK-MEA-03 — Policy-specific before/current/final monitoring

[Accessible explanation](NARRATIVE.html#ak-mea-03) · [Decision crosswalk](RULE-CROSSWALK.html).

Simulation.monitor is an observation-only sidecar, separate from state and from the report(record,witness) complaint method. The pre-policy observation archive is cached outside starting state and recreated through initial-state validation. start is captured before adopt(); subsequent monthly samples store counts, each tool’s outcome/conditions/scope/n and impact counters. Activity counters receive actual process hooks, not policy-selection bonuses. Output window at t subtracts counters at max(earliestMonth,t−12), allowing negative inherited months. New reports retain −12..240 history and a bounded event index. Saved reporting schema is antarkya.reporting.v1. Existing rules-2.4 results without monitoring still load, show an explicit missing-history notice and require rerunning for the new panels.

**Implementation:** [`reporting.js:init`](source/reporting.js.html#L192) · [`reporting.js:activity`](source/reporting.js.html#L181) · [`reporting.js:record`](source/reporting.js.html#L427) · [`reporting.js:windowValue`](source/reporting.js.html#L490) · [`reporting.js:sample`](source/reporting.js.html#L247) · [`model.js:record`](source/model.js.html#L2818) · [`model.js:reporting`](source/model.js.html#L3627) · [`reporting.js:remember`](source/reporting.js.html#L219) · [`reporting.js:counterAt`](source/reporting.js.html#L228) · [`reporting.js:recent`](source/reporting.js.html#L473) · [`reporting.js:view`](source/reporting.js.html#L481).

**Assumptions / conformance limits:** Some output categories are explicitly additional-reform contacts and have no modeled baseline delivery. General backlogs remain system context. Reporting does not empirically calibrate the observed processes.

**Provenance:** R55, R56, R58, R59; [S01](SOURCES.html#s01), [S10](SOURCES.html#s10). **Related engineering checks:** [reporting.test.js](source/reporting.test.js.html), [worker.test.js](source/worker.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-mea-04"></a>

### AK-MEA-04 — Interpretations and linked evidence

[Accessible explanation](NARRATIVE.html#ak-mea-04) · [Decision crosswalk](RULE-CROSSWALK.html).

interpret compares values using display-oriented tolerances: impact .0005 points, outcome .05 indicator units, output1e−8; indicator direction is explicit. Estimated diagnostics receive an estimated-capability prefix. eventsFor excludes future and initialization records, uses direct P-tool records and policy-relevant contextual cases, and ranks actual material setup/funding/suspension changes above routine reviews. Impact draws references from the whole package plus salient macro events, independently of selected policy. At most2 references appear inline, up to8 are available; the sidecar retains at most400 evidence records while protecting consequential per-policy candidates. Full completed logs are retained separately. All inserted text is escaped.

**Implementation:** [`reporting.js:interpret`](source/reporting.js.html#L591) · [`reporting.js:eventsFor`](source/reporting.js.html#L531) · [`app.js:reportMeaning`](source/app.js.html#L804) · [`app.js:showReportEvent`](source/app.js.html#L909).

**Assumptions / conformance limits:** Thresholds describe displayed precision, not statistical significance. Event ranking is explanatory selection, not causal identification or exhaustive evidence retrieval.

**Provenance:** R56, R58, R61; [S01](SOURCES.html#s01), [S10](SOURCES.html#s10). **Related engineering checks:** [reporting.test.js](source/reporting.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-vis-01"></a>

### AK-VIS-01 — Analytical integrity, affinity and cooperation map

[Accessible explanation](NARRATIVE.html#ak-vis-01) · [Decision crosswalk](RULE-CROSSWALK.html).

Recent participation r=recentCorrupt/recentOpportunities. Positive r fixes integrity radius .54+.41sqrt(r); r=0 lies inside core .48. Initial healthy spacing is .035+.43sqrt(display hash). Role anchors are −3π/4,−π/4,π/4,3π/4; directional vectors combine a .20 class anchor with2\*(affinity−.5) for every class. Eight deterministic local-grid passes use cell .032, minimum spacing .023, bounded repulsion and cooperative-neighbor attraction. Coercive links do not attract. Positive participation radius is reimposed after layout. Physical x/y are never changed. View retains up to2,400 ties; default drawing caps320, focus180, with role/link filters and pan/zoom. No baseline dot distribution is overlaid.

**Implementation:** [`visualization.js:projection`](source/visualization.js.html#L25) · [`app.js:drawMap`](source/app.js.html#L581).

**Assumptions / conformance limits:** Direction is a heuristic projection, not a geographic map, causal network embedding or literal degree of support for one adjacent quadrant.

**Provenance:** R07, R49, R60, R61; [S01](SOURCES.html#s01). **Related engineering checks:** [visualization.test.js](source/visualization.test.js.html), [dynamics.test.js](source/dynamics.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-vis-02"></a>

### AK-VIS-02 — Influential actors and significant event feed

[Accessible explanation](NARRATIVE.html#ak-vis-02) · [Decision crosswalk](RULE-CROSSWALK.html).

Influence score is weighted degree plus 12 for the current budget controller plus 3 for organizational leadership; top 8 are selected each view. Detailed psychology/motives/decision traces are supplied for that subset; full final profiles are exported separately. emit assigns event-family ID, update number, month, kind, actors, status and salient flag. Default significant filter includes salient/macro/politics; live view sends the most recent 200 events and renders at most80 matching cards. Full completed events override that slice in worker results. Highlighting, filtering and inspection do not run choose() or draw world randomness.

**Implementation:** [`model.js:influential`](source/model.js.html#L3806) · [`model.js:emit`](source/model.js.html#L848) · [`app.js:inspector`](source/app.js.html#L505) · [`app.js:renderFeed`](source/app.js.html#L542) · [`visualization.js:importantEvents`](source/visualization.js.html#L140) · [`model.js:view`](source/model.js.html#L3805) · [`app.js:learningPanel`](source/app.js.html#L446) · [`app.js:selectActor`](source/app.js.html#L529) · [`app.js:reportEventButtons`](source/app.js.html#L786).

**Assumptions / conformance limits:** Weighted degree plus leverage is a heuristic, not betweenness or a full power theory. The live last200 slice can omit older major records; the assessment evidence index mitigates this separately.

**Provenance:** R46, R49, R61; [S01](SOURCES.html#s01). **Related engineering checks:** [visualization.test.js](source/visualization.test.js.html), [worker.test.js](source/worker.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-vis-03"></a>

### AK-VIS-03 — One-page interface, synchronized assessment and review

[Accessible explanation](NARRATIVE.html#ak-vis-03) · [Decision crosswalk](RULE-CROSSWALK.html).

The one-page interface retains its existing map/assessment controls and adds a collapsible stock-and-flow view with a recorded-month slider, Next month, replay and policy/economic/governance selectors. Rendering never advances behavior except the explicit Next month action at the latest paused month.

**Implementation:** [`app.js:getConfig`](source/app.js.html#L73) · [`app.js:pending`](source/app.js.html#L132) · [`app.js:renderPolicyAssessment`](source/app.js.html#L961) · [`app.js:renderAssessment`](source/app.js.html#L1267) · [`app.js:render`](source/app.js.html#L1453) · [`app.js:status`](source/app.js.html#L58) · [`app.js:remember`](source/app.js.html#L94) · [`app.js:buildPolicies`](source/app.js.html#L149) · [`app.js:countryFields`](source/app.js.html#L181) · [`app.js:applyConfig`](source/app.js.html#L261) · [`app.js:baseSummary`](source/app.js.html#L303) · [`app.js:preview`](source/app.js.html#L317) · [`app.js:tinyComparison`](source/app.js.html#L761) · [`app.js:reportFormat`](source/app.js.html#L775) · [`app.js:reportChart`](source/app.js.html#L823) · [`app.js:renderReplications`](source/app.js.html#L1361) · [`app.js:selectedImpact`](source/app.js.html#L1414) · [`app.js:drawImpact`](source/app.js.html#L1423).

**Assumptions / conformance limits:** All numerical response strengths and newly introduced governance/economic mappings remain uncalibrated. Archived v2.4 formulas are historical; current executable source and AKX mechanisms are authoritative.

**Provenance:** R54, R61; [S01](SOURCES.html#s01). **Related engineering checks:** [reporting.test.js](source/reporting.test.js.html), [visualization.test.js](source/visualization.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-io-01"></a>

### AK-IO-01 — Saving, loading, import validation and exports

[Accessible explanation](NARRATIVE.html#ak-io-01) · [Decision crosswalk](RULE-CROSSWALK.html).

IndexedDB stores named scenarios, with localStorage fallback and remembered last setup. Payload schema antarkya.scenario.v2 includes modelVersion, profileVersion, creation time, validated config, initial and optional completed results. Import size limit 64 MiB; validation checks rules version, initial identity, finite/ranged data, person IDs, result structure, events, optional psychological profiles and optional monitoring schema. Old pre-2.4 starts require recreating settings. Existing 2.4 results without reporting remain readable with a missing-monitoring message. loadPayload terminates any worker, resets review state and renders without Run. JSON serializes full initial state and final results; CSV exports metrics, policy outcomes, agent summaries, events and decision/condition data according to each export handler. CSV guards leading formula characters in string cells.

**Implementation:** [`app.js:payload`](source/app.js.html#L1679) · [`app.js:validatePayload`](source/app.js.html#L1696) · [`app.js:loadPayload`](source/app.js.html#L1798) · [`app.js:storeAction`](source/app.js.html#L1617) · [`app.js:csv`](source/app.js.html#L1840) · [`app.js:openDB`](source/app.js.html#L1597) · [`app.js:refreshSaves`](source/app.js.html#L1663) · [`app.js:download`](source/app.js.html#L1827) · [`app.js:showStorage`](source/app.js.html#L1865).

**Assumptions / conformance limits:** Import validation is not a proof that every saved completed outcome was produced honestly; files are not signed. Full in-flight checkpoint/resume and arbitrary cross-version migration are not implemented.

**Provenance:** R55, R62; [S01](SOURCES.html#s01), [S10](SOURCES.html#s10). **Related engineering checks:** [model.test.js](source/model.test.js.html), [dynamics.test.js](source/dynamics.test.js.html), [reporting.test.js](source/reporting.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-ops-01"></a>

### AK-OPS-01 — Worker scheduling, repetitions and browser operation

[Accessible explanation](NARRATIVE.html#ak-ops-01) · [Decision crosswalk](RULE-CROSSWALK.html).

Workers import the twelve current runtime modules, including hybrid.js and system-view.js where appropriate. The same v3 engine runs in Node and the browser. First-run trajectories and paired baseline use the identical initialized society; repeats change only subsequent keyed draws.

**Implementation:** [`worker.js:makePair`](source/worker.js.html#L46) · [`worker.js:advance`](source/worker.js.html#L153) · [`worker.js:pump`](source/worker.js.html#L164) · [`worker.js:finishPair`](source/worker.js.html#L74) · [`app.js:initializeWorker`](source/app.js.html#L346) · [`app.js:stopWorker`](source/app.js.html#L336) · [`app.js:start`](source/app.js.html#L399) · [`app.js:reset`](source/app.js.html#L427) · [`worker.js:send`](source/worker.js.html#L54).

**Assumptions / conformance limits:** All numerical response strengths and newly introduced governance/economic mappings remain uncalibrated. Archived v2.4 formulas are historical; current executable source and AKX mechanisms are authoritative.

**Provenance:** R03, R55, R61; [S01](SOURCES.html#s01). **Related engineering checks:** [worker.test.js](source/worker.test.js.html), [run-seeds.test.js](source/run-seeds.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-val-01"></a>

### AK-VAL-01 — Engineering verification and audit reproducibility

[Accessible explanation](NARRATIVE.html#ak-val-01) · [Decision crosswalk](RULE-CROSSWALK.html).

Runtime invariants add finite productive capacity, maintained/repaired capability, foreign and coalition accounts and a shared 1-PM personal budget. Test catalogues and logs identify executed checks. Semantic fingerprints now pin the explicitly authorized v3 behavioral release, with the v2.4 fingerprints retained separately.

**Implementation:** [`model.js:assertInvariants`](source/model.js.html#L3906) · [`model.js:snapshot`](source/model.js.html#L3899) · [`reporting.js:valid`](source/reporting.js.html#L636) · [`model.js:finite`](source/model.js.html#L631) · [`model.js:ids`](source/model.js.html#L3683).

**Assumptions / conformance limits:** All numerical response strengths and newly introduced governance/economic mappings remain uncalibrated. Archived v2.4 formulas are historical; current executable source and AKX mechanisms are authoritative.

**Provenance:** R55, R58, R62; [S01](SOURCES.html#s01), [S11](SOURCES.html#s11). **Related engineering checks:** [model.test.js](source/model.test.js.html), [audit.test.js](source/audit.test.js.html), [adaptation.test.js](source/adaptation.test.js.html), [dynamics.test.js](source/dynamics.test.js.html), [initialization.test.js](source/initialization.test.js.html), [visualization.test.js](source/visualization.test.js.html), [reporting.test.js](source/reporting.test.js.html), [worker.test.js](source/worker.test.js.html), [run-seeds.test.js](source/run-seeds.test.js.html), [stress.test.js](source/stress.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="ak-val-02"></a>

### AK-VAL-02 — Evidence, assumptions, gaps and change control

[Accessible explanation](NARRATIVE.html#ak-val-02) · [Decision crosswalk](RULE-CROSSWALK.html).

Every reference entry carries agreement links, source functions, test-file evidence, implementation status and limitations. The generated rule crosswalk covers R01–R62 and AM01–AM06 plus later interface/reporting decisions. Evidence classes distinguish user decisions, conceptual publications, stored country observations, proxies, common engineering priors, generated model state and test evidence. Superseded original v1 rules (binary motives, random wandering, color-only integrity, immediate class-based punishment and score-reset demotion) are not current requirements. Gap records identify empirical, structural, measurement and operational limitations. Semantic hashes prohibit accidental behavioral edits during annotation; future semantic changes require a new reviewed baseline and updated technical entries.

**Implementation:** [`config.js:assumptions`](source/config.js.html#L202) · [`baseline.js:fieldStatus`](source/baseline.js.html#L121) · [`profiles.js:data`](source/profiles.js.html#L9).

**Assumptions / conformance limits:** This is documentation for inspection, not a claim of conformance to every original aspiration or certification under ODD/TRACE. Private supplied documents and copyrighted full texts are not redistributed by the audit package.

**Provenance:** R21, R23, R25, R58; [S01](SOURCES.html#s01), [S02](SOURCES.html#s02), [S11](SOURCES.html#s11). **Related engineering checks:** [initialization.test.js](source/initialization.test.js.html), [reporting.test.js](source/reporting.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="akx-scp-01"></a>

### AKX-SCP-01 — Scope and precedence

[Accessible explanation](NARRATIVE.html#akx-scp-01) · [Decision crosswalk](RULE-CROSSWALK.html).

Behavior version 3.0.0 replaces overlapping legacy accounts and encounter scheduling. Country GDP-PPP still sets a bounded initial resource scale, while realized domestic value added generates a separate endogenous index. No inflation, exchange-rate, banking or demographic model is added.

**Implementation:** [`hybrid.js:initialize`](source/hybrid.js.html#L82).

**Assumptions / conformance limits:** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

**Provenance:** D26, D30; [S09](SOURCES.html#s09). **Related engineering checks:** [hybrid.test.js](source/hybrid.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="akx-tim-01"></a>

### AKX-TIM-01 — Monthly reporting with repeated internal events

[Accessible explanation](NARRATIVE.html#akx-tim-01) · [Decision crosswalk](RULE-CROSSWALK.html).

Each person starts with 1 PM. Organizational capacity is bounded by matching-primary-role staff time and competence. Existing public task debits are reconciled to individual ledgers between phases. Governance has work and approval minima; investment waits for delivery and actual installation work. The agenda is ordered within the encounter phase; this is not a full continuous-time scheduler.

**Implementation:** [`hybrid.js:open`](source/hybrid.js.html#L253) · [`hybrid.js:personalTime`](source/hybrid.js.html#L351) · [`hybrid.js:synchronizeTime`](source/hybrid.js.html#L379).

**Assumptions / conformance limits:** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

**Provenance:** D17, D20; [S09](SOURCES.html#s09). **Related engineering checks:** [hybrid.test.js](source/hybrid.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="akx-sta-01"></a>

### AKX-STA-01 — Single ownership of state and exact balances

[Accessible explanation](NARRATIVE.html#akx-sta-01) · [Decision crosswalk](RULE-CROSSWALK.html).

Cash total includes background domestic, treasury, all persons and organizations, reform allocations, foreign account and coalition escrow. Transfers clip to actual source funds. Transaction/flow IDs have separate counters from behavioral request and proposal IDs. Monthly histories are observer records and are not used to impose national belief changes.

**Implementation:** [`hybrid.js:initialize`](source/hybrid.js.html#L82) · [`hybrid.js:recordTransfer`](source/hybrid.js.html#L176) · [`hybrid.js:stocks`](source/hybrid.js.html#L1692).

**Assumptions / conformance limits:** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

**Provenance:** D19; [S09](SOURCES.html#s09). **Related engineering checks:** [hybrid.test.js](source/hybrid.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="akx-cap-01"></a>

### AKX-CAP-01 — Persistent organizational capability

[Accessible explanation](NARRATIVE.html#akx-cap-01) · [Decision crosswalk](RULE-CROSSWALK.html).

The old fixed per-tool .998 decay is removed. For each organization, missing its .02 reference-staff upkeep requirement causes loss C\*.008\*shortfall. Capability is bounded, recoverable loss is recorded, and prolonged neglect transfers a bounded share to irreversible loss. Rebuilding and existing installed reform work can add capability.

**Implementation:** [`hybrid.js:care`](source/hybrid.js.html#L492).

**Assumptions / conformance limits:** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

**Provenance:** D01; [S09](SOURCES.html#s09). **Related engineering checks:** [hybrid.test.js](source/hybrid.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="akx-mnt-01"></a>

### AKX-MNT-01 — Maintenance and unfinished work

[Accessible explanation](NARRATIVE.html#akx-mnt-01) · [Decision crosswalk](RULE-CROSSWALK.html).

Reference staff count is fixed at initialization. Backlog adds .02 reference WU/month and subtracts completed current upkeep or eligible repair. Public staff allocation includes maintenance as a fourth competing category. Upkeep costs .10 RU per performed PM; costs are charged once even when one action both clears neglected work and repairs damage.

**Implementation:** [`hybrid.js:maintenanceNeed`](source/hybrid.js.html#L485) · [`hybrid.js:care`](source/hybrid.js.html#L492).

**Assumptions / conformance limits:** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

**Provenance:** D02, D03; [S09](SOURCES.html#s09). **Related engineering checks:** [hybrid.test.js](source/hybrid.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="akx-mnt-02"></a>

### AKX-MNT-02 — Repair and rebuilding

[Accessible explanation](NARRATIVE.html#akx-mnt-02) · [Decision crosswalk](RULE-CROSSWALK.html).

Repair restoration is min(recorded recoverable loss,.25\*completed repair WU). Rebuilding retains progress until 2 reference WU are performed; completion restores at most .10 of recorded irreversible loss and debits the completed work once. These defaults are uncalibrated assumptions, with no national estimate asserted.

**Implementation:** [`hybrid.js:care`](source/hybrid.js.html#L492).

**Assumptions / conformance limits:** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

**Provenance:** D03; [S09](SOURCES.html#s09). **Related engineering checks:** [hybrid.test.js](source/hybrid.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="akx-bel-01"></a>

### AKX-BEL-01 — Policy value versus implementation-performance beliefs

[Accessible explanation](NARRATIVE.html#akx-bel-01) · [Decision crosswalk](RULE-CROSSWALK.html).

Each person holds separate policy value/performance fields and issue attention. A source/episode deduplication memory prevents repeated processing within 64 records. Performance learning uses .04\*credibility\*individual learning toward an interpreted episode. Policy-value learning is slower and also reflects public-regarding motives; hidden analyst results never update an audience.

**Implementation:** [`hybrid.js:observe`](source/hybrid.js.html#L449).

**Assumptions / conformance limits:** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

**Provenance:** D04; [S09](SOURCES.html#s09). **Related engineering checks:** [hybrid.test.js](source/hybrid.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="akx-agy-01"></a>

### AKX-AGY-01 — Office authority versus personal influence

[Accessible explanation](NARRATIVE.html#akx-agy-01) · [Decision crosswalk](RULE-CROSSWALK.html).

Rank is derived as national controller, organizational leader or ordinary member. Appointments change o.leader only after a valid procedure. Current national controller rights continue to use the inherited political review. Losing an organizational position does not erase personal agent fields or transfer their credibility to the successor.

**Implementation:** [`hybrid.js:rank`](source/hybrid.js.html#L42) · [`hybrid.js:governance`](source/hybrid.js.html#L1173).

**Assumptions / conformance limits:** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

**Provenance:** D05; [S09](SOURCES.html#s09). **Related engineering checks:** [hybrid.test.js](source/hybrid.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="akx-agy-02"></a>

### AKX-AGY-02 — Supporter dependence within TPB–utility

[Accessible explanation](NARRATIVE.html#akx-agy-02) · [Decision crosswalk](RULE-CROSSWALK.html).

For relevant organizational/political choice contexts, at most two accessed trusted peers contribute bounded agreement and dependence. Political/self consequences add .15\*dependence\*agreement, norms add .08\*agreement and control .06\*dependence\*agreement. Personal credibility weights these relationships; implementation belief can also modify the public-economic valuation of substantive work.

**Implementation:** [`hybrid.js:options`](source/hybrid.js.html#L405).

**Assumptions / conformance limits:** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

**Provenance:** D06; [S09](SOURCES.html#s09). **Related engineering checks:** [hybrid.test.js](source/hybrid.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="akx-gov-01"></a>

### AKX-GOV-01 — Hierarchy and relationship-based insiders

[Accessible explanation](NARRATIVE.html#akx-gov-01) · [Decision crosswalk](RULE-CROSSWALK.html).

Rank is 3 for the budget controller, 2 for any organizational leader and 1 otherwise. The realized-coverage observer labels a subject connected when directional relationship access exceeds .12. The actual appointment, tax-concession and oversight choices still require authority, independent responses and available resources.

**Implementation:** [`hybrid.js:rank`](source/hybrid.js.html#L42) · [`hybrid.js:conduct`](source/hybrid.js.html#L1652).

**Assumptions / conformance limits:** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

**Provenance:** D07, D08; [S09](SOURCES.html#s09). **Related engineering checks:** [hybrid.test.js](source/hybrid.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="akx-gov-02"></a>

### AKX-GOV-02 — Constrained appointment and removal

[Accessible explanation](NARRATIVE.html#akx-gov-02) · [Decision crosswalk](RULE-CROSSWALK.html).

Public appointments can be initiated through the controller; category-specific internal initiators also exist. Candidate pools contain up to eight matching-primary-role staff. Proposals snapshot the current leader, approval roster and protection. They require at least two months and .03 PM of preparation, all required vote opportunities, a strict majority and satisfied removal protection.

**Implementation:** [`hybrid.js:propose`](source/hybrid.js.html#L1130) · [`hybrid.js:governance`](source/hybrid.js.html#L1173).

**Assumptions / conformance limits:** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

**Provenance:** D09; [S09](SOURCES.html#s09). **Related engineering checks:** [hybrid.test.js](source/hybrid.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="akx-gov-03"></a>

### AKX-GOV-03 — Safeguard changes in all organizational categories

[Accessible explanation](NARRATIVE.html#akx-gov-03) · [Decision crosswalk](RULE-CROSSWALK.html).

Oversight can trigger a separately chosen, time-consuming review that blocks diversion in public implementation or private organizational funds. Disclosure weights actual record visibility. Removal protection constrains appointments; the stricter original/current protection applies, preventing a proposal from weakening its own gate. Generic three-member profiles are engineering simplifications, not national corporate or public law.

**Implementation:** [`hybrid.js:propose`](source/hybrid.js.html#L1130) · [`hybrid.js:governance`](source/hybrid.js.html#L1173) · [`hybrid.js:review`](source/hybrid.js.html#L1097).

**Assumptions / conformance limits:** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

**Provenance:** D12, D13; [S09](SOURCES.html#s09). **Related engineering checks:** [hybrid.test.js](source/hybrid.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="akx-col-01"></a>

### AKX-COL-01 — Costly coalition formation and commitments

[Accessible explanation](NARRATIVE.html#akx-col-01) · [Decision crosswalk](RULE-CROSSWALK.html).

Up to eight civic initiators receive opportunities every three months. An accepted commitment transfers .05 RU into a named escrow account. Performed advocacy costs .005 RU and .015 PM per contribution. Unused contributions are returned on withdrawal or closure. Escrow is included in money conservation and never credits reform allocations.

**Implementation:** [`hybrid.js:coalitions`](source/hybrid.js.html#L1305).

**Assumptions / conformance limits:** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

**Provenance:** D10; [S09](SOURCES.html#s09). **Related engineering checks:** [hybrid.test.js](source/hybrid.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="akx-att-01"></a>

### AKX-ATT-01 — Attention distinct from support

[Accessible explanation](NARRATIVE.html#akx-att-01) · [Decision crosswalk](RULE-CROSSWALK.html).

Issue attention decays with a six-month half-life and is reinforced by accessed episodes. It affects the relative valuation of mobilizing versus declining engagement. Policy value, perceived implementation and attention are distinct stored fields; chart averages are derived from people.

**Implementation:** [`hybrid.js:open`](source/hybrid.js.html#L253) · [`hybrid.js:observe`](source/hybrid.js.html#L449) · [`hybrid.js:coalitions`](source/hybrid.js.html#L1305).

**Assumptions / conformance limits:** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

**Provenance:** D11; [S09](SOURCES.html#s09). **Related engineering checks:** [hybrid.test.js](source/hybrid.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="akx-str-01"></a>

### AKX-STR-01 — Combinable political responses

[Accessible explanation](NARRATIVE.html#akx-str-01) · [Decision crosswalk](RULE-CROSSWALK.html).

A recipient spends personal time evaluating each active delivered coalition demand. A substantive response changes a temporary work-priority input used by staff allocation. Symbolic/reframing communication spends ordinary organizational resources and reaches the actual coalition audience through credibility-filtered learning. Obstruction initiates a governance procedure rather than instantly changing a safeguard.

**Implementation:** [`hybrid.js:responses`](source/hybrid.js.html#L1486).

**Assumptions / conformance limits:** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

**Provenance:** D14; [S09](SOURCES.html#s09). **Related engineering checks:** [hybrid.test.js](source/hybrid.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="akx-inf-01"></a>

### AKX-INF-01 — Audience-specific evolving personal influence

[Accessible explanation](NARRATIVE.html#akx-inf-01) · [Decision crosswalk](RULE-CROSSWALK.html).

Source-specific credibility is held by the recipient. A processed episode changes it at .04\*reliability toward the interpreted performance. The relevant credibility enters later supporter weighting. Ordinary accessed stories, teaching episodes, coalition work and known governance episodes call this pathway; no global charisma or champion bonus exists.

**Implementation:** [`hybrid.js:observe`](source/hybrid.js.html#L449) · [`hybrid.js:options`](source/hybrid.js.html#L405).

**Assumptions / conformance limits:** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

**Provenance:** D16; [S09](SOURCES.html#s09). **Related engineering checks:** [hybrid.test.js](source/hybrid.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="akx-cov-01"></a>

### AKX-COV-01 — Realized coverage only

[Accessible explanation](NARRATIVE.html#akx-cov-01) · [Decision crosswalk](RULE-CROSSWALK.html).

The current proxy reports actors in eligible recorded acts whose case reached investigation or decision within a trailing-year cohort. Counts are stratified by three ranks and connected/other groups. Below 20 observations the UI flags insufficient evidence. This is a synthetic process proxy; it does not establish matched-case impartiality or legal guilt.

**Implementation:** [`hybrid.js:conduct`](source/hybrid.js.html#L1652) · [`hybrid.js:coverage`](source/hybrid.js.html#L1665).

**Assumptions / conformance limits:** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

**Provenance:** D15; [S09](SOURCES.html#s09). **Related engineering checks:** [hybrid.test.js](source/hybrid.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="akx-enc-01"></a>

### AKX-ENC-01 — Demand-generated encounters and capacity

[Accessible explanation](NARRATIVE.html#akx-enc-01) · [Decision crosswalk](RULE-CROSSWALK.html).

Poisson count sampling uses role intensities \[.65,.85,.20,.20\]. Every completed contact requires .015 PM from both participants. Pending service retries can be abandoned after six months through utility choice. Campaign and business-political opportunities remain. Explicit request IDs and episode keys distinguish repeated contacts.

**Implementation:** [`hybrid.js:encounters`](source/hybrid.js.html#L1564).

**Assumptions / conformance limits:** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

**Provenance:** D18; [S09](SOURCES.html#s09). **Related engineering checks:** [hybrid.test.js](source/hybrid.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="akx-eco-01"></a>

### AKX-ECO-01 — Investment choices including political connections

[Accessible explanation](NARRATIVE.html#akx-eco-01) · [Decision crosswalk](RULE-CROSSWALK.html).

Primary-role compensation debits the actual employer account. The legacy 180\*g treasury grant and wage withholding are removed. Investment, reserve retention, eligible distribution and attempted diversion are distinct leader choices. Ownership is explicitly initialized to the organizational leader as a provisional prior; ordinary membership creates no dividend right. Diverted entrusted funds face internal review.

**Implementation:** [`hybrid.js:accounts`](source/hybrid.js.html#L598) · [`hybrid.js:investment`](source/hybrid.js.html#L832).

**Assumptions / conformance limits:** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

**Provenance:** D22, D28; [S09](SOURCES.html#s09). **Related engineering checks:** [hybrid.test.js](source/hybrid.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="akx-eco-02"></a>

### AKX-ECO-02 — Business productive-capacity stock

[Accessible explanation](NARRATIVE.html#akx-eco-02) · [Decision crosswalk](RULE-CROSSWALK.html).

Capital consumes .08/year converted to a monthly fraction. Funded equipment projects wait one to three months, then require .05+.02\*paid RU of performed installation PM. A completed project adds paidRU/(12\*3) outputRU/month once. Missing work prevents completion even after the delivery date. Depreciation is a capacity flow rather than a second cash payment.

**Implementation:** [`hybrid.js:investment`](source/hybrid.js.html#L832).

**Assumptions / conformance limits:** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

**Provenance:** D23; [S09](SOURCES.html#s09). **Related engineering checks:** [hybrid.test.js](source/hybrid.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="akx-eco-03"></a>

### AKX-ECO-03 — Demand-constrained production and allocation

[Accessible explanation](NARRATIVE.html#akx-eco-03) · [Decision crosswalk](RULE-CROSSWALK.html).

Household purchases split .35 explicit/.65 background. Background purchasing responds to recent receipts and a reserve requirement; foreign reference demand is 60 RU/month. Production is bounded by available capacity, actual funds and private organizational time at 15 outputRU/PM. Imported intermediate inputs cost .20 of delivered output. Unfilled orders expire after six months; the current order list uses deterministic insertion order.

**Implementation:** [`hybrid.js:order`](source/hybrid.js.html#L660) · [`hybrid.js:demand`](source/hybrid.js.html#L692) · [`hybrid.js:production`](source/hybrid.js.html#L755).

**Assumptions / conformance limits:** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

**Provenance:** D24; [S09](SOURCES.html#s09). **Related engineering checks:** [hybrid.test.js](source/hybrid.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="akx-eco-04"></a>

### AKX-ECO-04 — Taxable activity, compliance and public receipts

[Accessible explanation](NARRATIVE.html#akx-eco-04) · [Decision crosswalk](RULE-CROSSWALK.html).

Assessment uses .22 of taxable business VA as an uncalibrated rate. Concealment and a requested concession have distinct choices; a concession requires an actual connected collector and their approval. Unpaid assessment persists. Actual collection is cash-limited and capped at .25 of business cash per round. Background private VA uses .85 aggregate compliance. Fines and identified domestic receipts remain transfers, not additional production.

**Implementation:** [`hybrid.js:taxation`](source/hybrid.js.html#L977).

**Assumptions / conformance limits:** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

**Provenance:** D25, D32; [S09](SOURCES.html#s09). **Related engineering checks:** [hybrid.test.js](source/hybrid.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="akx-eco-05"></a>

### AKX-ECO-05 — Economic boundaries and output index

[Accessible explanation](NARRATIVE.html#akx-eco-05) · [Decision crosswalk](RULE-CROSSWALK.html).

VA is explicit business output less imported consumed intermediates, plus background domestic production and performed public nonmarket output. Public output uses actual paid compensation times the performed-work share. The reference is the last reconstructed month’s VA and starts at 100. All prices are fixed normalized RU; no validated GDP-per-capita conversion is supplied. Initial boundary cash is a synthetic finite reserve, split 80% domestic/20% foreign.

**Implementation:** [`hybrid.js:initialize`](source/hybrid.js.html#L82) · [`hybrid.js:production`](source/hybrid.js.html#L755) · [`hybrid.js:close`](source/hybrid.js.html#L1739) · [`hybrid.js:anchor`](source/hybrid.js.html#L1808).

**Assumptions / conformance limits:** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

**Provenance:** D21, D29, D30, D31; [S09](SOURCES.html#s09). **Related engineering checks:** [hybrid.test.js](source/hybrid.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="akx-mea-01"></a>

### AKX-MEA-01 — Monthly flow provenance and result explanations

[Accessible explanation](NARRATIVE.html#akx-mea-01) · [Decision crosswalk](RULE-CROSSWALK.html).

system-view.js renders three pathway types: selected tool funding/retained influence, economy, and governance/upkeep. Solid bright pipes use recorded amounts; dashed links are structural dependencies without mediation claims or R/B labels. Detailed tables retain the last 35 flow records shown, the saved cash journal the last 1,000 transactions, and monthly diagrams retain the bounded run history. All transaction/flow counters are independent from behavioral IDs.

**Implementation:** [`hybrid.js:close`](source/hybrid.js.html#L1739) · [`hybrid.js:summary`](source/hybrid.js.html#L1816) · [`hybrid.js:recordTransfer`](source/hybrid.js.html#L176) · [`hybrid.js:exposure`](source/hybrid.js.html#L304) · [`hybrid.js:capabilityBuilt`](source/hybrid.js.html#L337).

**Assumptions / conformance limits:** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

**Provenance:** D27; [S09](SOURCES.html#s09). **Related engineering checks:** [hybrid.test.js](source/hybrid.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="akx-cal-01"></a>

### AKX-CAL-01 — Peru pilot and evidence register

[Accessible explanation](NARRATIVE.html#akx-cal-01) · [Decision crosswalk](RULE-CROSSWALK.html).

The retained decision register has 16 country/input records and 20 shared-parameter records. No newly fitted macro target, survey prevalence, governance distribution or policy effect is claimed. All ten profiles can execute the new module, but this is not ten-country calibration. Future fitting must reconcile units, coverage, data vintage, parameter identification and sensitivity.

**Implementation:** [`hybrid.js:parameters`](source/hybrid.js.html#L14).

**Assumptions / conformance limits:** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

**Provenance:** D26; [S09](SOURCES.html#s09). **Related engineering checks:** [hybrid.test.js](source/hybrid.test.js.html). These links identify relevant tests, not complete empirical validation.

<a id="akx-val-01"></a>

### AKX-VAL-01 — Coupling, accounting, sensitivity and device validation

[Accessible explanation](NARRATIVE.html#akx-val-01) · [Decision crosswalk](RULE-CROSSWALK.html).

New controlled tests exercise upkeep versus neglect, bounded repair, work-driven investment, private oversight, protected appointments, attention, accessed reputation, eligible coverage, foreign/escrow cash, tax arrears and observer invariance. Existing checks are retained, with explicitly documented adaptations for replaced wage accounting, new time-opening rules, cache versions and the archived historical engine. Actual Android performance and the Peru empirical pilot remain pending.

**Implementation:** [`hybrid.js:assert`](source/hybrid.js.html#L1862).

**Assumptions / conformance limits:** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

**Provenance:** D26; [S09](SOURCES.html#s09). **Related engineering checks:** [hybrid.test.js](source/hybrid.test.js.html). These links identify relevant tests, not complete empirical validation.

