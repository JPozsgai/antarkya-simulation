# Accessible narrative of the simulation

This describes the model that actually executes, with its design reasoning and boundaries. Every section links to the corresponding technical rule and annotated implementation. Read the [audit guide](index.html) for scope and provenance. Unknown corruption history is treated as expected integrity in classification, while a reconstructed pre-policy year supplies actual modeled histories at month zero.

## Mechanism index

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

## AK-OV-01 — Purpose, scope and version identity

The provisional v3 release extends this mechanism through actual stock, resource and actor processes. Behavioral and display version 3.0.0 introduce the provisional hybrid extension. Duration remains 6–240 months and repetitions {1,5,10,20}. The earlier behavior is archived under /v2.4/. New-model country realism is not validated.

[Numerical operationalization](TECHNICAL.html#ak-ov-01).

<details><summary>Implementation references</summary>

[`model.js:VERSION`](source/model.js.html#L28) · [`model.js:validate`](source/model.js.html#L127) · [`worker.js:summary`](source/worker.js.html#L32) · [`model.js:constructor`](source/model.js.html#L791) · [`app.js:profile`](source/app.js.html#L66) · [`app.js:summaryText`](source/app.js.html#L105).

</details>

**Boundary.** All numerical response strengths and newly introduced governance/economic mappings remain uncalibrated. Archived v2.4 formulas are historical; current executable source and AKX mechanisms are authoritative.

Design provenance: R01, R03, R54; S01, S02, S03.

<a id="ak-pop-01"></a>

## AK-POP-01 — People and principal roles

Every dot is one person. Citizen, Business, Official and Politician describe a principal role rather than a moral character or an exclusive set of interests. Organizations contain those same people; adding organizations does not add another population. Small classes have enough representation for political and administrative interactions to occur. Role counts differ by country, but are model design choices rather than census shares. Individuals can retain multiple affiliations and support organizations outside their own category. A politician can lose office while remaining a politician; a change in a dot’s direction does not itself change anyone’s role.

[Numerical operationalization](TECHNICAL.html#ak-pop-01).

<details><summary>Implementation references</summary>

[`model.js:createPopulation`](source/model.js.html#L223) · [`config.js:countries`](source/config.js.html#L9).

</details>

**Boundary.** Country-informed composition has not been statistically calibrated; minimum representation disproportionately samples smaller roles.

Design provenance: R02, R04, R09; S01.

<a id="ak-pop-02"></a>

## AK-POP-02 — Heterogeneous starting profiles

People begin with different resources, competencies, knowledge, expectations, affinities and motivational attachments. These are actual numerical fields used by the code. Country descriptors shift some starting conditions, while individual draws preserve variation within each role. None of those fields alone determines whether someone acts corruptly. The model then lets a preliminary year of activity create prior choices, experience and relationships. The visible initial society is consequently more developed than a collection of people with empty histories.

[Numerical operationalization](TECHNICAL.html#ak-pop-02).

<details><summary>Implementation references</summary>

[`model.js:createPopulation`](source/model.js.html#L223) · [`adaptation.js:initialize`](source/adaptation.js.html#L175) · [`adaptation.js:recentParticipation`](source/adaptation.js.html#L205) · [`adaptation.js:summary`](source/adaptation.js.html#L521) · [`adaptation.js:valid`](source/adaptation.js.html#L546) · [`adaptation.js:validSummary`](source/adaptation.js.html#L620).

</details>

**Boundary.** Generic heterogeneous priors are not surveys of personality, corruption tolerance, wealth or national inequality.

Design provenance: R05, R09, R13, AM03; S01.

<a id="ak-org-01"></a>

## AK-ORG-01 — Organizations, formal affiliation and affinity

Eight civic organizations and twenty-four business organizations coexist with simplified public bodies, four regional service agencies and political organizations. A person’s primary workplace, formal membership and support are separate. Support can cross all four organizational categories. A civic organization may advance business interests, and an outlet’s organizational category does not guarantee independence. Leadership is held by a person already in the population. This allows personal motives and relationships to matter in organizational decisions without inventing an omniscient organizational will.

[Numerical operationalization](TECHNICAL.html#ak-org-01).

<details><summary>Implementation references</summary>

[`model.js:createPopulation`](source/model.js.html#L223) · [`model.js:org`](source/model.js.html#L2043) · [`model.js:relationship`](source/model.js.html#L1259).

</details>

**Boundary.** One primary fn field represents each public body; multiple tool capabilities do not amount to a complete multifunctional mandate model. Membership draws are not empirically calibrated.

Design provenance: R04, R05, R20; S01.

<a id="ak-org-02"></a>

## AK-ORG-02 — Membership, recruitment and continuity of identity

People can apply to join civic or political organizations, give notice to leave secondary affiliations, change public employment or transfer between agencies. These changes require decisions, costs, eligibility and processing time. They do not erase personal resources, beliefs or relationships. Formal membership remains distinct from sympathy. Recruitment uses actual candidates and their skills, with the possibility that connections override criteria or that review blocks the override. The resulting composition of an agency affects its work capacity.

[Numerical operationalization](TECHNICAL.html#ak-org-02).

<details><summary>Implementation references</summary>

[`model.js:organizations`](source/model.js.html#L3042) · [`model.js:changeEmployment`](source/model.js.html#L3017).

</details>

**Boundary.** No explicit retirement, birth/death, general private-sector hiring or residential relocation pipeline exists. Recruitment/turnover and leadership succession are simplified.

Design provenance: R06, R53; S01.

<a id="ak-geo-01"></a>

## AK-GEO-01 — Stable geography and selective encounters

Physical proximity affects whom people meet and how difficult access can be. Homes and workplaces remain relatively stable; agents do not wander randomly each month. Remote contact and organizational links allow influence across distance. The analytical integrity map is a separate display, so a dot moving toward a collaborator does not relocate its person in the geographic encounter model. Local and remote selection create opportunities, but do not determine agreement.

[Numerical operationalization](TECHNICAL.html#ak-geo-01).

<details><summary>Implementation references</summary>

[`model.js:createPopulation`](source/model.js.html#L223) · [`model.js:nearest`](source/model.js.html#L1507) · [`model.js:encounters`](source/model.js.html#L2189).

</details>

**Boundary.** Coordinates are stylized, dimensionless locations, not a geographic reconstruction of national cities. Homes never relocate in the current engine.

Design provenance: R07; S01.

<a id="ak-mot-01"></a>

## AK-MOT-01 — Nine interests and beneficiaries

All roles can value social, economic and political consequences for themselves, their group and the public. The resulting nine positive weights differ between people. Economic motivation is therefore not synonymous with corruption, and public-oriented motivation is not proof of integrity. Each option specifies what its consequences are expected to mean for these beneficiaries. Experience can slowly change the weights, but never replaces the profile with a single honesty score.

[Numerical operationalization](TECHNICAL.html#ak-mot-01).

<details><summary>Implementation references</summary>

[`model.js:motives`](source/model.js.html#L96) · [`adaptation.js:advance`](source/adaptation.js.html#L419).

</details>

**Boundary.** The concentration 6, role shares, cultural mappings and motive drift are exploratory priors. Relevant-group utility is not fully resolved among multiple affiliations.

Design provenance: R08, R09, R10, AM01; S01, S04, S05.

<a id="ak-dec-01"></a>

## AK-DEC-01 — Subjective choice, TPB and random utility

The provisional v3 release extends this mechanism through actual stock, resource and actor processes. The inherited nine-dimensional utility equation retains norm .50, perceived-control .25 and Gumbel scale .20. Actual receipt expectations replace the former .90 net-income adjustment. Bounded supporter and policy-value inputs are documented in AKX-AGY-02; actual constraints remain separate.

[Numerical operationalization](TECHNICAL.html#ak-dec-01).

<details><summary>Implementation references</summary>

[`model.js:choose`](source/model.js.html#L975) · [`adaptation.js:decision`](source/adaptation.js.html#L503) · [`adaptation.js:context`](source/adaptation.js.html#L490).

</details>

**Boundary.** All numerical response strengths and newly introduced governance/economic mappings remain uncalibrated. Archived v2.4 formulas are historical; current executable source and AKX mechanisms are authoritative.

Design provenance: R11, R12, R13, AM01; S01, S04, S05.

<a id="ak-dec-02"></a>

## AK-DEC-02 — Action-specific perceived consequences

The model uses different choices for bribery, refusal, implementation, reporting, staffing, voting, publication and funding. Each choice supplies social, economic and political consequences for self, group and public beneficiaries. The same person can therefore make different decisions in different situations without changing class. Those consequence arrays describe subjective valuations; they are not themselves transfers, tax receipts or a measure of social welfare. The physical effects of an accepted action are recorded separately.

[Numerical operationalization](TECHNICAL.html#ak-dec-02).

<details><summary>Implementation references</summary>

[`model.js:effects`](source/model.js.html#L983) · [`model.js:encounter`](source/model.js.html#L2040) · [`model.js:budgetReview`](source/model.js.html#L1832) · [`model.js:processCases`](source/model.js.html#L2381).

</details>

**Boundary.** Not every context described in the original Word document has a distinct implemented initiator or action set; see the gap register.

Design provenance: R10, R12, R14, R44; S01, S02.

<a id="ak-act-01"></a>

## AK-ACT-01 — Encounters, corruption and victimization

The provisional v3 release extends this mechanism through actual stock, resource and actor processes. Poisson count sampling uses role intensities \[.65,.85,.20,.20\]. Every completed contact requires .015 PM from both participants. Pending service retries can be abandoned after six months through utility choice. Campaign and business-political opportunities remain. Explicit request IDs and episode keys distinguish repeated contacts. Voluntary bilateral completion, extortion demand and coerced payment remain distinct. The historical headline encounter rate still includes extortion demands and excludes newly modeled private diversion and taxable-activity concealment; those enter other conduct counts.

[Numerical operationalization](TECHNICAL.html#ak-act-01).

<details><summary>Implementation references</summary>

[`model.js:encounter`](source/model.js.html#L2040) · [`model.js:encounters`](source/model.js.html#L2189) · [`model.js:completeCorruption`](source/model.js.html#L1150) · [`model.js:act`](source/model.js.html#L1106).

</details>

**Boundary.** All numerical response strengths and newly introduced governance/economic mappings remain uncalibrated. Archived v2.4 formulas are historical; current executable source and AKX mechanisms are authoritative.

Design provenance: R14, R44, R45; S01.

<a id="ak-act-02"></a>

## AK-ACT-02 — Meaningful choices and integrity recovery

Shape reflects recorded conduct in the simulation, not public reputation or a diagnosis of permanent character. A circle is the default; a qualifying corrupt act produces a triangle. Recovery requires both elapsed time without a new qualifying act and repeated integrity-preserving action. Routine one-option duties and inactivity cannot manufacture recovery. Histories remain available after the icon changes, and other people’s beliefs need not change at the same time.

[Numerical operationalization](TECHNICAL.html#ak-act-02).

<details><summary>Implementation references</summary>

[`model.js:choose`](source/model.js.html#L975) · [`model.js:act`](source/model.js.html#L1106) · [`model.js:recover`](source/model.js.html#L3360) · [`model.js:classActivity`](source/model.js.html#L3416).

</details>

**Boundary.** The criterion is an implemented option/record definition, not a complete legal adjudication. Map radial participation and icon recovery are different summaries of persistent history.

Design provenance: R14, R60; S01.

<a id="ak-ins-01"></a>

## AK-INS-01 — Role expectations and institutionalized ease

Repeated action is not automatically an institution. The mechanism requires an encountered reference to communicate approval or disapproval associated with a role. Stronger expectations can make a familiar lawful or corrupt practice easier to follow. Both directions are possible. Familiarity and approval remain different from objective guilt or public information; a relationship can facilitate cooperation without being corrupt.

[Numerical operationalization](TECHNICAL.html#ak-ins-01).

<details><summary>Implementation references</summary>

[`model.js:link`](source/model.js.html#L1433) · [`model.js:practice`](source/model.js.html#L3469) · [`model.js:processServices`](source/model.js.html#L2196).

</details>

**Boundary.** Practical work reductions are implemented for routine services; many other reductions affect subjective effort rather than actual charged person-months. Reference transmission is not a complete multilayer institution model.

Design provenance: R15, R16, R17; S01, S04.

<a id="ak-adp-01"></a>

## AK-ADP-01 — Individual receptiveness and numerical psychology

Interventions encounter people with different openness, learning, retention, interests, knowledge and histories. Delivery, acceptance and strength are separate. A credible lesson may still be rejected; a receptive agent may receive a weak dose. These characteristics are stored and exported numerical profiles. They do not appear only in explanatory prose. Prior corrupt participation can affect receptiveness, and experience can slowly alter the characteristics themselves.

[Numerical operationalization](TECHNICAL.html#ak-adp-01).

<details><summary>Implementation references</summary>

[`adaptation.js:initialize`](source/adaptation.js.html#L175) · [`adaptation.js:receptiveness`](source/adaptation.js.html#L213) · [`adaptation.js:feedback`](source/adaptation.js.html#L237) · [`model.js:expose`](source/model.js.html#L1059) · [`adaptation.js:knowledge`](source/adaptation.js.html#L378) · [`adaptation.js:safety`](source/adaptation.js.html#L387).

</details>

**Boundary.** Receptiveness coefficients and distributions are assumptions. There is no empirical individual personality calibration.

Design provenance: AM03, AM04, R13; S01, S04.

<a id="ak-adp-02"></a>

## AK-ADP-02 — Diminishing influence, reinforcement and wear-off

A repeated intervention can reinforce earlier learning, but does not receive a fresh unrestricted persuasion allowance every time. Its available new influence declines, and retained influence fades unless reinforced. Direct ceilings differ by policy and decision element. This prevents repeated delivery from mechanically converting the entire society. Structural effects—such as actual pay or an accessible procedure—remain separate from direct persuasion.

[Numerical operationalization](TECHNICAL.html#ak-adp-02).

<details><summary>Implementation references</summary>

[`adaptation.js:observe`](source/adaptation.js.html#L251) · [`adaptation.js:influence`](source/adaptation.js.html#L331) · [`adaptation.js:advance`](source/adaptation.js.html#L419) · [`adaptation.js:decision`](source/adaptation.js.html#L503) · [`adaptation.js:refresh`](source/adaptation.js.html#L367).

</details>

**Boundary.** Delivered-but-rejected episodes still consume novelty. Bounded event memories do not provide permanent global deduplication after older IDs expire; generated event IDs normally remain unique.

Design provenance: AM02, AM04, AM05, AM06; S01, S04.

<a id="ak-adp-03"></a>

## AK-ADP-03 — Evolving traits, motives, skill and income expectations

History changes more than a person’s conduct icon. Service experiences and enacted choices make particular interests salient; actual receipts change expected lawful income; work can improve competence. Openness can fall with negative experience or entrenched participation. These are slow, bounded adjustments around an individual’s starting profile. They do not guarantee movement toward integrity or erase earlier experience after a job change.

[Numerical operationalization](TECHNICAL.html#ak-adp-03).

<details><summary>Implementation references</summary>

[`adaptation.js:advance`](source/adaptation.js.html#L419) · [`adaptation.js:work`](source/adaptation.js.html#L457) · [`adaptation.js:incomeExperience`](source/adaptation.js.html#L470).

</details>

**Boundary.** No independent age process, personality test, retirement or general skill attrition is simulated.

Design provenance: AM04, R13, R53; S01.

<a id="ak-net-01"></a>

## AK-NET-01 — Directional trust and useful relationships

Membership, support and trust are different ways of being connected. A repeated useful interaction can strengthen an informal tie, including lawful cooperation. The two participants can trust one another differently. Coercion can weaken a relationship rather than being interpreted as mutual solidarity. Networks matter because they affect access, contact selection, reference influence and the opportunity to protect insiders; they are not a universal immunity score.

[Numerical operationalization](TECHNICAL.html#ak-net-01).

<details><summary>Implementation references</summary>

[`model.js:relationship`](source/model.js.html#L1259) · [`model.js:related`](source/model.js.html#L1426) · [`model.js:link`](source/model.js.html#L1433) · [`model.js:tie`](source/model.js.html#L1419) · [`model.js:peers`](source/model.js.html#L1373) · [`model.js:index`](source/model.js.html#L836) · [`model.js:recentAmount`](source/model.js.html#L1407).

</details>

**Boundary.** Relationships decay mainly through negative encounters, not a universal expiry timer. Strong access is a simplified protection opportunity; legal intervention still requires its actual process.

Design provenance: R49, R37, R53; S01, S02.

<a id="ak-inf-01"></a>

## AK-INF-01 — Journalism, publication and funding leverage

Media are functions of existing organizations and people, not a fifth class. Editors choose whether to publish under their own incentives, resources, independence and dependence on funders. Business support for civic organizations can create leverage without adding money to the reform implementation pool. Publication can prompt scrutiny, but does not establish wrongdoing. Corrections and contested claims coexist with case developments and final decisions.

[Numerical operationalization](TECHNICAL.html#ak-inf-01).

<details><summary>Implementation references</summary>

[`model.js:publish`](source/model.js.html#L2716) · [`model.js:funding`](source/model.js.html#L2928) · [`model.js:fundingDependence`](source/model.js.html#L1399).

</details>

**Boundary.** No generated articles or complete social feed exist. Strategic misinformation content and correction discovery are simplified world-generator rules; editors do not explicitly optimize the falsity of content. Publication charges money but not a full shared newsroom time budget.

Design provenance: R46, R47, R48, R50; S01, S02, S06.

<a id="ak-inf-02"></a>

## AK-INF-02 — Access, sharing and the separation of belief from truth

Agents act on what they encounter and accept, not on the analyst’s map or the simulation’s hidden truth. News exposure is limited by attention, geography and country media conditions. Credibility and personal learning traits affect belief change. Sharing can carry information beyond the outlet’s original audience. A dismissal does not automatically make an allegation false, and a correction influences only people who encounter it.

[Numerical operationalization](TECHNICAL.html#ak-inf-02).

<details><summary>Implementation references</summary>

[`model.js:information`](source/model.js.html#L2814) · [`adaptation.js:messageRate`](source/adaptation.js.html#L480) · [`model.js:communicatedDecision`](source/model.js.html#L2656).

</details>

**Boundary.** Beliefs are bounded scalar memories rather than Bayesian probabilities. General descriptive belief directly informs political reputation defaults; it is not a separate universal norm term in every decision.

Design provenance: R13, R46, R47, R48; S01, S04, S06.

<a id="ak-eco-01"></a>

## AK-ECO-01 — Money, lawful receipts and living needs

The provisional v3 release extends this mechanism through actual stock, resource and actor processes. VA is explicit business output less imported consumed intermediates, plus background domestic production and performed public nonmarket output. Public output uses actual paid compensation times the performed-work share. The reference is the last reconstructed month’s VA and starts at 100. All prices are fixed normalized RU; no validated GDP-per-capita conversion is supplied. Initial boundary cash is a synthetic finite reserve, split 80% domestic/20% foreign. Primary-role compensation debits the actual employer account. The legacy 180\*g treasury grant and wage withholding are removed. Investment, reserve retention, eligible distribution and attempted diversion are distinct leader choices. Ownership is explicitly initialized to the organizational leader as a provisional prior; ordinary membership creates no dividend right. Diverted entrusted funds face internal review.

[Numerical operationalization](TECHNICAL.html#ak-eco-01).

<details><summary>Implementation references</summary>

[`model.js:totalMoney`](source/model.js.html#L185) · [`model.js:transfer`](source/model.js.html#L199) · [`model.js:monthlyAccounts`](source/model.js.html#L1543) · [`model.js:changeEmployment`](source/model.js.html#L3017).

</details>

**Boundary.** All numerical response strengths and newly introduced governance/economic mappings remain uncalibrated. Archived v2.4 formulas are historical; current executable source and AKX mechanisms are authoritative.

Design provenance: R30, R42, R43; S01.

<a id="ak-eco-02"></a>

## AK-ECO-02 — Shared public staff capacity and priorities

The provisional v3 release extends this mechanism through actual stock, resource and actor processes. Each person starts with 1 PM. Organizational capacity is bounded by matching-primary-role staff time and competence. Existing public task debits are reconciled to individual ledgers between phases. Governance has work and approval minima; investment waits for delivery and actual installation work. The agenda is ordered within the encounter phase; this is not a full continuous-time scheduler. Reference staff count is fixed at initialization. Backlog adds .02 reference WU/month and subtracts completed current upkeep or eligible repair. Public staff allocation includes maintenance as a fourth competing category. Upkeep costs .10 RU per performed PM; costs are charged once even when one action both clears neglected work and repairs damage.

[Numerical operationalization](TECHNICAL.html#ak-eco-02).

<details><summary>Implementation references</summary>

[`model.js:monthlyAccounts`](source/model.js.html#L1543) · [`model.js:scheduleWork`](source/model.js.html#L1550) · [`model.js:priorities`](source/model.js.html#L1305).

</details>

**Boundary.** All numerical response strengths and newly introduced governance/economic mappings remain uncalibrated. Archived v2.4 formulas are historical; current executable source and AKX mechanisms are authoritative.

Design provenance: R33, R35, R39, R40, R41, R43; S01.

<a id="ak-eco-03"></a>

## AK-ECO-03 — Service queues and bounded experience feedback

Administrative requests remain in queues until the relevant organization has money and reserved time. Preferential access can move a paid request ahead of others; its harm depends on actual scarcity rather than being assumed for every payment. Waiting and successful delivery change experienced trust, perceived lawful control and support. These updates are bounded once per person each month so multiple pending requests cannot multiply opinion change without limit.

[Numerical operationalization](TECHNICAL.html#ak-eco-03).

<details><summary>Implementation references</summary>

[`model.js:addService`](source/model.js.html#L1974) · [`model.js:processServices`](source/model.js.html#L2196) · [`model.js:experienced`](source/model.js.html#L1275).

</details>

**Boundary.** Service units/costs are normalized assumptions. Formal denial and detailed service quality are not independently modeled.

Design provenance: R07, R43, R59; S01.

<a id="ak-cou-01"></a>

## AK-COU-01 — Country observations, proxies and uncertainty

Ten country profiles provide dated background conditions and simplified inherited anti-corruption arrangements. Observations, proxies and assumptions have different evidential status. GDP describes the resource scale; governance descriptors inform bounded priors; political descriptors affect particular procedures and information channels. Unmeasured cultural conditions remain editable neutral assumptions. Selecting a country does not assign a measured corruption prevalence or a national moral character.

[Numerical operationalization](TECHNICAL.html#ak-cou-01).

<details><summary>Implementation references</summary>

[`model.js:conditions`](source/model.js.html#L171) · [`baseline.js:conditions`](source/baseline.js.html#L81) · [`baseline.js:organization`](source/baseline.js.html#L100) · [`profiles.js:data`](source/profiles.js.html#L9).

</details>

**Boundary.** No new source verification or live national updates are implied by this code audit. Regulatory quality is a proxy for business conditions; cultural scores, class composition, allocations and most costs lack comparable empirical calibration.

Design provenance: R18, R19, R21, R54; S01, S07.

<a id="ak-cou-02"></a>

## AK-COU-02 — Functional architecture and jurisdiction

Country differences are represented partly through which organizations perform prevention, investigation, audit, prosecution, decision, integrity and budget functions. A specialist organization does not automatically control the entire accountability chain. Civil recovery differs from criminal punishment, and political authority does not follow a competitive-election template in every country. These distinctions give the model institutional structure without pretending to reproduce every agency or legal rule.

[Numerical operationalization](TECHNICAL.html#ak-cou-02).

<details><summary>Implementation references</summary>

[`config.js:countries`](source/config.js.html#L9) · [`model.js:eligibleTool`](source/model.js.html#L1185) · [`model.js:responsible`](source/model.js.html#L2344) · [`model.js:makeCase`](source/model.js.html#L2237).

</details>

**Boundary.** Routing is stylized, not a comprehensive current offence/jurisdiction map. Institutional independence, appointment protections and civil/criminal procedures are only partially represented.

Design provenance: R19, R20, R25, R37, R45, R51; S01, S07.

<a id="ak-ini-01"></a>

## AK-INI-01 — A reconstructed pre-policy year

The starting society includes a model-generated year of prior activity. This supplies past choices, service experience, ties, finances and unfinished cases before a new reform starts. “Inherited pending cases” therefore means files still open after those twelve preliminary months; it is not a national statistic. At adoption, new intervention-period counters begin while the unfinished work and people’s histories continue. Every comparison and repetition uses that same inherited society.

[Numerical operationalization](TECHNICAL.html#ak-ini-01).

<details><summary>Implementation references</summary>

[`model.js:createInitial`](source/model.js.html#L525) · [`model.js:initialDifference`](source/model.js.html#L593) · [`model.js:validateInitial`](source/model.js.html#L620) · [`reporting.js:remember`](source/reporting.js.html#L219) · [`app.js:signature`](source/app.js.html#L284) · [`app.js:initialFor`](source/app.js.html#L291).

</details>

**Boundary.** Twelve months is a finite reconstruction, not a demonstrated equilibrium or estimated national backlog. Country-condition overrides change that reconstructed past; selecting different reforms or future event seeds does not.

Design provenance: R13, R55, R60; S01.

<a id="ak-rng-01"></a>

## AK-RNG-01 — Keyed probability, paired worlds and exact replay

Probability is implemented through reproducible draws. The same initial state and future-event seed reproduce the same sequence of random assessments and world outcomes. Fresh event seeds produce new future events while preserving the initial society. Reform and baseline use matching keyed draws where their situations correspond, reducing accidental noise in their comparison. Rendering and inspection do not consume those random draws.

[Numerical operationalization](TECHNICAL.html#ak-rng-01).

<details><summary>Implementation references</summary>

[`model.js:hash`](source/model.js.html#L44) · [`model.js:draw`](source/model.js.html#L57) · [`model.js:rand`](source/model.js.html#L829) · [`model.js:generator`](source/model.js.html#L64) · [`run-seeds.js:newEventSeed`](source/run-seeds.js.html#L15) · [`run-seeds.js:prepareRun`](source/run-seeds.js.html#L30).

</details>

**Boundary.** A 32-bit hash permits collisions and is not a security RNG or a proof of statistical independence. Determinism does not imply absence of probabilistic rules.

Design provenance: R12, R55; S01.

<a id="ak-ref-01"></a>

## AK-REF-01 — Formal reform selection and legal scope

Selecting a reform makes the formal reform active at the start. It does not simulate a preliminary political fight over the user’s choice. Existing institutions and capabilities remain underneath the reform. Legal coverage, operational capacity, installed reform delivery and personal learning are different things. Formal expansion can change eligibility while implementation remains weak; delivery does not follow merely from selecting a checkbox.

[Numerical operationalization](TECHNICAL.html#ak-ref-01).

<details><summary>Implementation references</summary>

[`model.js:adopt`](source/model.js.html#L927) · [`model.js:coverage`](source/model.js.html#L1223) · [`model.js:covered`](source/model.js.html#L1234) · [`model.js:operational`](source/model.js.html#L1250) · [`model.js:cap`](source/model.js.html#L868).

</details>

**Boundary.** The common .85 scope and generic country/tool uplift are not a complete set of 120 independently calibrated reforms. Coverage-sensitive diagnostics can improve on formal adoption without demonstrating new delivery.

Design provenance: R22, R23, R24, R25, R26; S01, S03.

<a id="ak-ref-02"></a>

## AK-REF-02 — Requirements, mobilization and initial allocation

The user’s percentage sets the starting share of estimated additional resource requirements. It is not redrawn as a monthly success lottery. Public money must be available before it can be disbursed. Allocation follows a simplified country-specific central/local pattern and relevant institutional functions. Several reforms add their distinct setup and recurring requirements and compete for public resources. Outside stakeholder funding remains outside these implementation pools.

[Numerical operationalization](TECHNICAL.html#ak-ref-02).

<details><summary>Implementation references</summary>

[`model.js:requirements`](source/model.js.html#L210) · [`model.js:recipients`](source/model.js.html#L885) · [`model.js:fundPolicies`](source/model.js.html#L1588) · [`config.js:costs`](source/config.js.html#L164).

</details>

**Boundary.** Allocation is not measured national budget distribution. Shared infrastructure setup is not deduplicated across policies; cost tuples and 100% requirements remain exploratory.

Design provenance: R27, R28, R29, R30, R33, R39, R40; S01.

<a id="ak-ref-03"></a>

## AK-REF-03 — Implementation, resistance and setup

An implementing leader can implement, comply selectively, resist or redirect resources. Money, reserved time, coverage and organizational conditions constrain the result. Setup is a process: it must accumulate enough work and spending before new delivery becomes operative. A recipient can consequently remain unready for years. These decisions create the implementation gap rather than a universal policy-success probability.

[Numerical operationalization](TECHNICAL.html#ak-ref-03).

<details><summary>Implementation references</summary>

[`model.js:implementPolicies`](source/model.js.html#L1607) · [`model.js:priorities`](source/model.js.html#L1305) · [`model.js:operatingPolicy`](source/model.js.html#L1048).

</details>

**Boundary.** Setup money and operating money can both be spent before installation. “Three months” is a minimum work-stage parameter, not a guaranteed completion time. Some prose channel descriptions are broader than actual exposure hooks.

Design provenance: R31, R33, R34, R35, R40, R41; S01.

<a id="ak-ref-04"></a>

## AK-REF-04 — Resource reviews, narrowing and suspension

Initial mobilization is chosen by the user, but later resource decisions belong to modeled actors. Reviews can increase, hold or decrease resources and can narrow formal scope. Those choices depend on assessed delivery, support, resistance, waiting, priorities and authorization. A reform can therefore stagnate, be selectively implemented or become suspended. Such trajectories are descriptions of recorded processes rather than preset success and failure states.

[Numerical operationalization](TECHNICAL.html#ak-ref-04).

<details><summary>Implementation references</summary>

[`model.js:budgetReview`](source/model.js.html#L1832) · [`model.js:policyFeedback`](source/model.js.html#L1341) · [`model.js:politicalReview`](source/model.js.html#L3242).

</details>

**Boundary.** Exceptional event-triggered reviews, full repeal, explicit reinstatement and automatic trajectory classification are not implemented. Narrowing consent is simplified and not full national legislative procedure.

Design provenance: R31, R32, R36, R37, R38; S01, S08.

<a id="ak-cas-01"></a>

## AK-CAS-01 — Signals, reporting and case intake

A modeled corrupt act need not become a case. A victim or witness must decide to report, an audit may detect a signal, or publication can produce a referral. These are limited processes. The same act does not become several files merely because it has several signals. Files can concern lawful conduct too, and opening one is not proof. Where a service jurisdiction is involved, local intake adds work and delay before the case proceeds.

[Numerical operationalization](TECHNICAL.html#ak-cas-01).

<details><summary>Implementation references</summary>

[`model.js:report`](source/model.js.html#L1991) · [`model.js:makeCase`](source/model.js.html#L2237) · [`model.js:audit`](source/model.js.html#L2302).

</details>

**Boundary.** A report’s viability threshold is .16 RU, not the earlier proposal’s .10. Detection sampling and reporting opportunity rates are assumptions, not observed national rates.

Design provenance: R14, R37, R45, R47; S01.

<a id="ak-cas-02"></a>

## AK-CAS-02 — Staged processing, discretion and evidence

Case work requires a competent organization, staff time, money and elapsed process time. The controller can process, delay or dismiss, and connections change what those alternatives mean to the controller. Evidence develops through investigation; a case can close at several stages. Criminal prosecution, administrative remedy and civil recovery are distinct labels. The model can produce inappropriate adverse action as well as successful accountability, so detected cases and sanctions cannot be read as the true corruption rate.

[Numerical operationalization](TECHNICAL.html#ak-cas-02).

<details><summary>Implementation references</summary>

[`model.js:processCases`](source/model.js.html#L2381) · [`model.js:responsible`](source/model.js.html#L2344).

</details>

**Boundary.** Appeals, detailed legal proof rules, real judicial independence protections and all offence-specific national procedures are absent.

Design provenance: R37, R45, R48; S01.

<a id="ak-cas-03"></a>

## AK-CAS-03 — Assessed liability, collection and accountability learning

A financial order and actual collection are not the same. A person may owe money after the case closes, and future collections require both affordability and enforcement resources. Actual adjudication and accessed announcements can change perceived accountability costs, while duplicate messages are prevented from supplying repeated generic bonuses. Public communication announces what an authority decided rather than revealing hidden guilt.

[Numerical operationalization](TECHNICAL.html#ak-cas-03).

<details><summary>Implementation references</summary>

[`model.js:collectLiabilities`](source/model.js.html#L2678) · [`model.js:communicatedDecision`](source/model.js.html#L2656) · [`adaptation.js:accountability`](source/adaptation.js.html#L396) · [`model.js:processCases`](source/model.js.html#L2381) · [`model.js:riskExperience`](source/model.js.html#L1082).

</details>

**Boundary.** The risk score is relative expected cost, not a true probability of detection. Collection rules are generic assumptions and not claims about national garnishment law.

Design provenance: R37, R43, R45, AM06; S01.

<a id="ak-gov-01"></a>

## AK-GOV-01 — Political support, officeholding and authority

The provisional v3 release extends this mechanism through actual stock, resource and actor processes. Public appointments can be initiated through the controller; category-specific internal initiators also exist. Candidate pools contain up to eight matching-primary-role staff. Proposals snapshot the current leader, approval roster and protection. They require at least two months and .03 PM of preparation, all required vote opportunities, a strict majority and satisfied removal protection. Inherited presidential, parliamentary and appointment-mode national review remains as documented in config.js.

[Numerical operationalization](TECHNICAL.html#ak-gov-01).

<details><summary>Implementation references</summary>

[`model.js:politicalReview`](source/model.js.html#L3242) · [`config.js:countries`](source/config.js.html#L9).

</details>

**Boundary.** All numerical response strengths and newly introduced governance/economic mappings remain uncalibrated. Archived v2.4 formulas are historical; current executable source and AKX mechanisms are authoritative.

Design provenance: R51, R52, R53, R31; S01.

<a id="ak-mac-01"></a>

## AK-MAC-01 — Collective feedback and consequential developments

The provisional v3 release extends this mechanism through actual stock, resource and actor processes. VA is explicit business output less imported consumed intermediates, plus background domestic production and performed public nonmarket output. Public output uses actual paid compensation times the performed-work share. The reference is the last reconstructed month’s VA and starts at 100. All prices are fixed normalized RU; no validated GDP-per-capita conversion is supplied. Initial boundary cash is a synthetic finite reserve, split 80% domestic/20% foreign. Macro events observe economic/institutional development; an event label does not apply another generic effect.

[Numerical operationalization](TECHNICAL.html#ak-mac-01).

<details><summary>Implementation references</summary>

[`model.js:macroDevelopments`](source/model.js.html#L3434) · [`model.js:policyFeedback`](source/model.js.html#L1341) · [`model.js:metrics`](source/model.js.html#L3592).

</details>

**Boundary.** All numerical response strengths and newly introduced governance/economic mappings remain uncalibrated. Archived v2.4 formulas are historical; current executable source and AKX mechanisms are authoritative.

Design provenance: R36, R38, R42, R43, R59; S01, S08.

<a id="ak-pol-aca"></a>

## AK-POL-ACA — Anti-corruption body

Organizational reform can strengthen screening/inquiry capability and staff skill, but implementation and each recipient’s setup still matter. Cases can arrive faster than they can progress. Effective exercise against powerful actors remains a substantive objective; the current headline is only a simplified capability diagnostic.

[Numerical operationalization](TECHNICAL.html#ak-pol-aca).

<details><summary>Implementation references</summary>

[`adaptation.js:map.aca`](source/adaptation.js.html#L43) · [`config.js:costs.aca`](source/config.js.html#L166) · [`reporting.js:definitions.aca`](source/reporting.js.html#L39) · [`model.js:implementPolicies`](source/model.js.html#L1607).

</details>

**Boundary.** The diagnostic is not a stratified exercise of mandate under observed high-power opposition.

Design provenance: R22, R24, R57; S01, S03, S09.

<a id="ak-pol-merit"></a>

## AK-POL-MERIT — Recruitment and promotion

Merit reform changes actual review and staffing, not an honesty label assigned to incoming personnel. Candidates retain individual interests and histories; a skilled recruit can still act corruptly. Staffing affects agency competence and future public capacity.

[Numerical operationalization](TECHNICAL.html#ak-pol-merit).

<details><summary>Implementation references</summary>

[`adaptation.js:map.merit`](source/adaptation.js.html#L53) · [`config.js:costs.merit`](source/config.js.html#L169) · [`reporting.js:definitions.merit`](source/reporting.js.html#L50) · [`model.js:implementPolicies`](source/model.js.html#L1607).

</details>

**Boundary.** No general promotion ladder, protected selection committee or country-specific appointment pipeline is simulated.

Design provenance: R22, R57; S01, S03, S09.

<a id="ak-pol-rotation"></a>

## AK-POL-ROTATION — Staff rotation

Transfers can change who works together and who controls a service function, but do not dissolve relationships automatically. The target is reduced closed-network continuity, rather than simply a larger transfer count.

[Numerical operationalization](TECHNICAL.html#ak-pol-rotation).

<details><summary>Implementation references</summary>

[`adaptation.js:map.rotation`](source/adaptation.js.html#L62) · [`config.js:costs.rotation`](source/config.js.html#L172) · [`reporting.js:definitions.rotation`](source/reporting.js.html#L61) · [`model.js:implementPolicies`](source/model.js.html#L1607).

</details>

**Boundary.** It evaluates four service functions and direct ties, not comprehensive informal control or all high-risk public posts.

Design provenance: R22, R53, R57; S01, S03, S09.

<a id="ak-pol-protection"></a>

## AK-POL-PROTECTION — Protection for reporting persons

Protection must be encountered and delivered in time to matter. A reporter can learn from a remedy or from a failure; a statutory promise does not automatically remove fear. A coerced victim remains distinct from a corrupt participant.

[Numerical operationalization](TECHNICAL.html#ak-pol-protection).

<details><summary>Implementation references</summary>

[`adaptation.js:map.protection`](source/adaptation.js.html#L71) · [`config.js:costs.protection`](source/config.js.html#L175) · [`reporting.js:definitions.protection`](source/reporting.js.html#L72) · [`model.js:implementPolicies`](source/model.js.html#L1607).

</details>

**Boundary.** Only modeled reported threats enter this realized denominator; missing complaints and unseen retaliation are not universal protection success.

Design provenance: R22, R37, R57; S01, S03, S09.

<a id="ak-pol-declarations"></a>

## AK-POL-DECLARATIONS — Asset, liability and gift declarations

The model distinguishes the existence of a declaration obligation, record completeness, verification and useful scrutiny. Filing or an internal notice is not automatically public transparency. Financial records can assist a real audit and subsequent evidence process.

[Numerical operationalization](TECHNICAL.html#ak-pol-declarations).

<details><summary>Implementation references</summary>

[`adaptation.js:map.declarations`](source/adaptation.js.html#L80) · [`config.js:costs.declarations`](source/config.js.html#L178) · [`reporting.js:definitions.declarations`](source/reporting.js.html#L83) · [`model.js:implementPolicies`](source/model.js.html#L1607).

</details>

**Boundary.** No itemized assets, gifts, liability forms or independent financial reconstruction are modeled.

Design provenance: R22, R57; S01, S03, S09.

<a id="ak-pol-conflicts"></a>

## AK-POL-CONFLICTS — Conflict-of-interest disclosure and review

Relationships do not automatically prove an improper conflict. The implemented safeguard can identify a related exchange and prevent its completion, with limited records and operative review. A prevented exchange and completed corrupt act remain different events.

[Numerical operationalization](TECHNICAL.html#ak-pol-conflicts).

<details><summary>Implementation references</summary>

[`adaptation.js:map.conflicts`](source/adaptation.js.html#L89) · [`config.js:costs.conflicts`](source/config.js.html#L181) · [`reporting.js:definitions.conflicts`](source/reporting.js.html#L94) · [`model.js:implementPolicies`](source/model.js.html#L1607).

</details>

**Boundary.** No comprehensive legal conflict taxonomy, recusal procedure or independent review appeal is simulated.

Design provenance: R22, R57; S01, S03, S09.

<a id="ak-pol-oversight"></a>

## AK-POL-OVERSIGHT — Audits and investigations

Scrutiny depends on actual time, accessible records and competent work. Greater detection can coexist with unchanged or lower corruption. Notices and published developments affect only people who encounter them; hidden audit truth does not directly educate every agent.

[Numerical operationalization](TECHNICAL.html#ak-pol-oversight).

<details><summary>Implementation references</summary>

[`adaptation.js:map.oversight`](source/adaptation.js.html#L98) · [`config.js:costs.oversight`](source/config.js.html#L184) · [`reporting.js:definitions.oversight`](source/reporting.js.html#L105) · [`model.js:implementPolicies`](source/model.js.html#L1607).

</details>

**Boundary.** Actual completed correction is not separately tested in every diagnostic reference situation; independence and high-power opposition remain simplified.

Design provenance: R22, R45, R57; S01, S03, S09.

<a id="ak-pol-pay"></a>

## AK-POL-PAY — Remuneration and incentives

The provisional v3 release extends this mechanism through actual stock, resource and actor processes. Actual regular and supplemental public receipts are no longer reduced by the superseded 10% wage withholding. Supplements remain conserved transfers from installed pay allocations. Adequacy compares actual receipts with ordinary needs over six observations.

[Numerical operationalization](TECHNICAL.html#ak-pol-pay).

<details><summary>Implementation references</summary>

[`adaptation.js:map.pay`](source/adaptation.js.html#L107) · [`config.js:costs.pay`](source/config.js.html#L187) · [`reporting.js:definitions.pay`](source/reporting.js.html#L116) · [`model.js:implementPolicies`](source/model.js.html#L1607).

</details>

**Boundary.** All numerical response strengths and newly introduced governance/economic mappings remain uncalibrated. Archived v2.4 formulas are historical; current executable source and AKX mechanisms are authoritative.

Design provenance: R22, R43, R57, AM06; S01, S03, S09.

<a id="ak-pol-penalties"></a>

## AK-POL-PENALTIES — Financial penalties

A credible penalty requires an appropriate decision, assessable liability and actual collection. Increasing a nominal amount alone need not change behavior. Outstanding obligations persist and can be collected later, subject to resources and affordability.

[Numerical operationalization](TECHNICAL.html#ak-pol-penalties).

<details><summary>Implementation references</summary>

[`adaptation.js:map.penalties`](source/adaptation.js.html#L116) · [`config.js:costs.penalties`](source/config.js.html#L190) · [`reporting.js:definitions.penalties`](source/reporting.js.html#L127) · [`model.js:implementPolicies`](source/model.js.html#L1607).

</details>

**Boundary.** The reported realized ratio is not a calibrated probability of appropriate imposition times collectible amount, nor a complete violation-specific penalty schedule.

Design provenance: R22, R45, R57, AM06; S01, S03, S09.

<a id="ak-pol-disclosure"></a>

## AK-POL-DISCLOSURE — Proactive disclosure

Accessible information can make decisions more scrutinizable and supply journalists with material, but the model does not award a persuasion bonus merely for publishing. Disclosure quality and the actual information pathway should be read separately.

[Numerical operationalization](TECHNICAL.html#ak-pol-disclosure).

<details><summary>Implementation references</summary>

[`adaptation.js:map.disclosure`](source/adaptation.js.html#L125) · [`config.js:costs.disclosure`](source/config.js.html#L193) · [`reporting.js:definitions.disclosure`](source/reporting.js.html#L138) · [`model.js:implementPolicies`](source/model.js.html#L1607).

</details>

**Boundary.** No itemized publication registry, statutory request process or complete test of document timeliness/accessibility is implemented.

Design provenance: R22, R47, R57, AM06; S01, S03, S09.

<a id="ak-pol-complaints"></a>

## AK-POL-COMPLAINTS — Reporting and complaints

Access to an accountability channel differs from choosing to use it and from the case ultimately succeeding. Reporting depends on cost, geography, knowledge, safety, resources and a competent receiving process. Unresolved complaints are relevant here; the whole national service queue is not a universal complaints outcome.

[Numerical operationalization](TECHNICAL.html#ak-pol-complaints).

<details><summary>Implementation references</summary>

[`adaptation.js:map.complaints`](source/adaptation.js.html#L134) · [`config.js:costs.complaints`](source/config.js.html#L196) · [`reporting.js:definitions.complaints`](source/reporting.js.html#L149) · [`model.js:implementPolicies`](source/model.js.html#L1607).

</details>

**Boundary.** It does not directly estimate the approved chapter-level share able to submit within an independently modeled 1-month/.10-RU requirement.

Design provenance: R22, R45, R57; S01, S03, S09.

<a id="ak-pol-education"></a>

## AK-POL-EDUCATION — Awareness and education

Education is a delivered experience, not an automatic conversion rate. People may reject a message, retain different amounts, forget or need reinforcement. Knowledge, attitudes, perceived expectations and lawful control can respond differently. Direct attitude influence up to30% means a bounded change in a decision component, not a30-point reduction in national corruption.

[Numerical operationalization](TECHNICAL.html#ak-pol-education).

<details><summary>Implementation references</summary>

[`adaptation.js:map.education`](source/adaptation.js.html#L143) · [`config.js:costs.education`](source/config.js.html#L199) · [`reporting.js:definitions.education`](source/reporting.js.html#L160) · [`model.js:implementPolicies`](source/model.js.html#L1607).

</details>

**Boundary.** No role-specific question bank or empirically validated knowledge test exists. Repeated delivery counts contacts, not unique people or verified comprehension.

Design provenance: R22, R57, AM02, AM03, AM04, AM05; S01, S03, S09.

<a id="ak-mea-01"></a>

## AK-MEA-01 — Institutional indicators and fixed reference diagnostics

A policy is assessed against its particular institutional objective. The model keeps that assessment distinct from activities and from corruption impact. Some indicators summarize actual processes, while others estimate capability from a fixed reference set. A fixed reference set means repeated evaluation uses the same comparison situations; it does not mean the score is frozen. Those capability scores remain proxies and should not be described as observed success rates.

[Numerical operationalization](TECHNICAL.html#ak-mea-01).

<details><summary>Implementation references</summary>

[`model.js:diagnostic`](source/model.js.html#L3634) · [`model.js:assessment`](source/model.js.html#L3771) · [`reporting.js:sample`](source/reporting.js.html#L247) · [`reporting.js:outcomeMeta`](source/reporting.js.html#L509).

</details>

**Boundary.** No stratified high-/low-power standardized case execution, full lawful-control diagnostic or uncertainty interval is implemented. The minimum 20-observation rule is not universal: new merit/protection ratios use n&gt;0 and show the count.

Design provenance: R56, R57, R58; S01, S09.

<a id="ak-mea-02"></a>

## AK-MEA-02 — Package impact and paired comparison

Impact asks how actual modeled conduct and consequences differ from the no-new-reform baseline. The main rate concerns corrupt encounters per relevant encounter, not detected cases or a sum of personal icons. Counts, victim payments, diversion, tax advantages, service delays and sanctions provide additional context. For a combination of policies, this is the package’s joint impact; a component’s individual causal contribution requires another experiment.

[Numerical operationalization](TECHNICAL.html#ak-mea-02).

<details><summary>Implementation references</summary>

[`model.js:comparison`](source/model.js.html#L3944) · [`visualization.js:impactWindow`](source/visualization.js.html#L153) · [`visualization.js:impactSeries`](source/visualization.js.html#L181) · [`visualization.js:impactDifference`](source/visualization.js.html#L200) · [`visualization.js:hash`](source/visualization.js.html#L16).

</details>

**Boundary.** No automatic leave-one-out attribution, full welfare account or comprehensive displacement estimator exists. Extortion demands count even when no payment completes.

Design provenance: R55, R58, R59; S01, S09.

<a id="ak-mea-03"></a>

## AK-MEA-03 — Policy-specific before/current/final monitoring

The audit-facing assessment compares the inherited condition before formal adoption, the condition in the reform run and the matching baseline month. It reports actual activity over equal trailing-year windows rather than comparing a starting queue with a year of completed work. Policy-specific conditions replace universal case/service counts. The current column becomes final on completion, while the review control permits looking back without rerunning the model.

[Numerical operationalization](TECHNICAL.html#ak-mea-03).

<details><summary>Implementation references</summary>

[`reporting.js:init`](source/reporting.js.html#L192) · [`reporting.js:activity`](source/reporting.js.html#L181) · [`reporting.js:record`](source/reporting.js.html#L427) · [`reporting.js:windowValue`](source/reporting.js.html#L490) · [`reporting.js:sample`](source/reporting.js.html#L247) · [`model.js:record`](source/model.js.html#L2818) · [`model.js:reporting`](source/model.js.html#L3627) · [`reporting.js:remember`](source/reporting.js.html#L219) · [`reporting.js:counterAt`](source/reporting.js.html#L228) · [`reporting.js:recent`](source/reporting.js.html#L473) · [`reporting.js:view`](source/reporting.js.html#L481).

</details>

**Boundary.** Some output categories are explicitly additional-reform contacts and have no modeled baseline delivery. General backlogs remain system context. Reporting does not empirically calibrate the observed processes.

Design provenance: R55, R56, R58, R59; S01, S10.

<a id="ak-mea-04"></a>

## AK-MEA-04 — Interpretations and linked evidence

Each stage has a short interpretation based on the measured result and, where available, references to actual tracked developments. There are predefined statements for greater or lesser delivery, missing delivery, improvement, deterioration, limited institutional change despite activity, and insufficient observations. Clicking a reference opens the record and highlights its actors. A chronology is not automatically described as a cause; the model does not invent anecdotes to make a result sound convincing.

[Numerical operationalization](TECHNICAL.html#ak-mea-04).

<details><summary>Implementation references</summary>

[`reporting.js:interpret`](source/reporting.js.html#L591) · [`reporting.js:eventsFor`](source/reporting.js.html#L531) · [`app.js:reportMeaning`](source/app.js.html#L804) · [`app.js:showReportEvent`](source/app.js.html#L909).

</details>

**Boundary.** Thresholds describe displayed precision, not statistical significance. Event ranking is explanatory selection, not causal identification or exhaustive evidence retrieval.

Design provenance: R56, R58, R61; S01, S10.

<a id="ak-vis-01"></a>

## AK-VIS-01 — Analytical integrity, affinity and cooperation map

The map combines an integrity-related radial measure with affinity and cooperation. Colors identify principal role; shapes follow recorded conduct and recovery. Quadrants are reference directions, not membership boundaries. Someone can move toward agents from several other classes without changing role or physical home. The inner disc provides space for agents with no recent corrupt participation; distance within that disc is for legibility and networking, not a ranking of integrity.

[Numerical operationalization](TECHNICAL.html#ak-vis-01).

<details><summary>Implementation references</summary>

[`visualization.js:projection`](source/visualization.js.html#L25) · [`app.js:drawMap`](source/app.js.html#L581).

</details>

**Boundary.** Direction is a heuristic projection, not a geographic map, causal network embedding or literal degree of support for one adjacent quadrant.

Design provenance: R07, R49, R60, R61; S01.

<a id="ak-vis-02"></a>

## AK-VIS-02 — Influential actors and significant event feed

Inspection emphasizes people with network centrality or practical control over organizations and budgets. The reason for highlighting them is visible. The default event list focuses on major developments, with a full-process option for closer review. Stable tracking IDs connect disclosures, case stages and decisions. An event can highlight its participants without giving those agents access to the analyst’s true conduct classifications.

[Numerical operationalization](TECHNICAL.html#ak-vis-02).

<details><summary>Implementation references</summary>

[`model.js:influential`](source/model.js.html#L3806) · [`model.js:emit`](source/model.js.html#L848) · [`app.js:inspector`](source/app.js.html#L505) · [`app.js:renderFeed`](source/app.js.html#L542) · [`visualization.js:importantEvents`](source/visualization.js.html#L140) · [`model.js:view`](source/model.js.html#L3805) · [`app.js:learningPanel`](source/app.js.html#L446) · [`app.js:selectActor`](source/app.js.html#L529) · [`app.js:reportEventButtons`](source/app.js.html#L786).

</details>

**Boundary.** Weighted degree plus leverage is a heuristic, not betweenness or a full power theory. The live last200 slice can omit older major records; the assessment evidence index mitigates this separately.

Design provenance: R46, R49, R61; S01.

<a id="ak-vis-03"></a>

## AK-VIS-03 — One-page interface, synchronized assessment and review

The provisional v3 release extends this mechanism through actual stock, resource and actor processes. The one-page interface retains its existing map/assessment controls and adds a collapsible stock-and-flow view with a recorded-month slider, Next month, replay and policy/economic/governance selectors. Rendering never advances behavior except the explicit Next month action at the latest paused month.

[Numerical operationalization](TECHNICAL.html#ak-vis-03).

<details><summary>Implementation references</summary>

[`app.js:getConfig`](source/app.js.html#L73) · [`app.js:pending`](source/app.js.html#L132) · [`app.js:renderPolicyAssessment`](source/app.js.html#L961) · [`app.js:renderAssessment`](source/app.js.html#L1267) · [`app.js:render`](source/app.js.html#L1453) · [`app.js:status`](source/app.js.html#L58) · [`app.js:remember`](source/app.js.html#L94) · [`app.js:buildPolicies`](source/app.js.html#L149) · [`app.js:countryFields`](source/app.js.html#L181) · [`app.js:applyConfig`](source/app.js.html#L261) · [`app.js:baseSummary`](source/app.js.html#L303) · [`app.js:preview`](source/app.js.html#L317) · [`app.js:tinyComparison`](source/app.js.html#L761) · [`app.js:reportFormat`](source/app.js.html#L775) · [`app.js:reportChart`](source/app.js.html#L823) · [`app.js:renderReplications`](source/app.js.html#L1361) · [`app.js:selectedImpact`](source/app.js.html#L1414) · [`app.js:drawImpact`](source/app.js.html#L1423).

</details>

**Boundary.** All numerical response strengths and newly introduced governance/economic mappings remain uncalibrated. Archived v2.4 formulas are historical; current executable source and AKX mechanisms are authoritative.

Design provenance: R54, R61; S01.

<a id="ak-io-01"></a>

## AK-IO-01 — Saving, loading, import validation and exports

A saved scenario retains its setup and exact starting society. Completed results can be reviewed after loading without automatically starting a new run. Device storage can fail or be cleared, so JSON backup remains important. Results and profiles can also be exported for independent analysis. A saved completed result is not a resumable live execution checkpoint, and an old result does not acquire new measurements merely because the interface has been updated.

[Numerical operationalization](TECHNICAL.html#ak-io-01).

<details><summary>Implementation references</summary>

[`app.js:payload`](source/app.js.html#L1679) · [`app.js:validatePayload`](source/app.js.html#L1696) · [`app.js:loadPayload`](source/app.js.html#L1798) · [`app.js:storeAction`](source/app.js.html#L1617) · [`app.js:csv`](source/app.js.html#L1840) · [`app.js:openDB`](source/app.js.html#L1597) · [`app.js:refreshSaves`](source/app.js.html#L1663) · [`app.js:download`](source/app.js.html#L1827) · [`app.js:showStorage`](source/app.js.html#L1865).

</details>

**Boundary.** Import validation is not a proof that every saved completed outcome was produced honestly; files are not signed. Full in-flight checkpoint/resume and arbitrary cross-version migration are not implemented.

Design provenance: R55, R62; S01, S10.

<a id="ak-ops-01"></a>

## AK-OPS-01 — Worker scheduling, repetitions and browser operation

The provisional v3 release extends this mechanism through actual stock, resource and actor processes. Workers import the twelve current runtime modules, including hybrid.js and system-view.js where appropriate. The same v3 engine runs in Node and the browser. First-run trajectories and paired baseline use the identical initialized society; repeats change only subsequent keyed draws.

[Numerical operationalization](TECHNICAL.html#ak-ops-01).

<details><summary>Implementation references</summary>

[`worker.js:makePair`](source/worker.js.html#L46) · [`worker.js:advance`](source/worker.js.html#L153) · [`worker.js:pump`](source/worker.js.html#L164) · [`worker.js:finishPair`](source/worker.js.html#L74) · [`app.js:initializeWorker`](source/app.js.html#L346) · [`app.js:stopWorker`](source/app.js.html#L336) · [`app.js:start`](source/app.js.html#L399) · [`app.js:reset`](source/app.js.html#L427) · [`worker.js:send`](source/worker.js.html#L54).

</details>

**Boundary.** All numerical response strengths and newly introduced governance/economic mappings remain uncalibrated. Archived v2.4 formulas are historical; current executable source and AKX mechanisms are authoritative.

Design provenance: R03, R55, R61; S01.

<a id="ak-val-01"></a>

## AK-VAL-01 — Engineering verification and audit reproducibility

The provisional v3 release extends this mechanism through actual stock, resource and actor processes. Runtime invariants add finite productive capacity, maintained/repaired capability, foreign and coalition accounts and a shared 1-PM personal budget. Test catalogues and logs identify executed checks. Semantic fingerprints now pin the explicitly authorized v3 behavioral release, with the v2.4 fingerprints retained separately.

[Numerical operationalization](TECHNICAL.html#ak-val-01).

<details><summary>Implementation references</summary>

[`model.js:assertInvariants`](source/model.js.html#L3906) · [`model.js:snapshot`](source/model.js.html#L3899) · [`reporting.js:valid`](source/reporting.js.html#L636) · [`model.js:finite`](source/model.js.html#L631) · [`model.js:ids`](source/model.js.html#L3683).

</details>

**Boundary.** All numerical response strengths and newly introduced governance/economic mappings remain uncalibrated. Archived v2.4 formulas are historical; current executable source and AKX mechanisms are authoritative.

Design provenance: R55, R58, R62; S01, S11.

<a id="ak-val-02"></a>

## AK-VAL-02 — Evidence, assumptions, gaps and change control

Transparency requires showing what is missing as well as what is present. The agreed design is broader than some current implementations, and older numerical proposals contain suggestions that were never enacted or were later superseded. This audit preserves that history while specifying the code that actually runs. A parameter printed with several decimals is not necessarily an accurate country estimate. New behavioral repairs should be separate changes, with their own rationale, rather than being hidden inside documentation work.

[Numerical operationalization](TECHNICAL.html#ak-val-02).

<details><summary>Implementation references</summary>

[`config.js:assumptions`](source/config.js.html#L202) · [`baseline.js:fieldStatus`](source/baseline.js.html#L121) · [`profiles.js:data`](source/profiles.js.html#L9).

</details>

**Boundary.** This is documentation for inspection, not a claim of conformance to every original aspiration or certification under ODD/TRACE. Private supplied documents and copyrighted full texts are not redistributed by the audit package.

Design provenance: R21, R23, R25, R58; S01, S02, S11.

<a id="akx-scp-01"></a>

## AKX-SCP-01 — Scope and precedence

The release retains 1,000 people and all ten country profiles. Peru calibration and empirical pilot validation remain pending. The new economic and governance processes run with common, visibly declared engineering assumptions rather than fitted national response parameters.

[Numerical operationalization](TECHNICAL.html#akx-scp-01).

<details><summary>Implementation references</summary>

[`hybrid.js:initialize`](source/hybrid.js.html#L82).

</details>

**Boundary.** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

Design provenance: D26, D30; S09.

<a id="akx-tim-01"></a>

## AKX-TIM-01 — Monthly reporting with repeated internal events

A reporting month contains ordered repeated encounters and progressive work. Available personal time is shared across primary employment, upkeep, contacts, governance and coalition activity; membership creates no additional time.

[Numerical operationalization](TECHNICAL.html#akx-tim-01).

<details><summary>Implementation references</summary>

[`hybrid.js:open`](source/hybrid.js.html#L253) · [`hybrid.js:personalTime`](source/hybrid.js.html#L351) · [`hybrid.js:synchronizeTime`](source/hybrid.js.html#L379).

</details>

**Boundary.** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

Design provenance: D17, D20; S09.

<a id="akx-sta-01"></a>

## AKX-STA-01 — Single ownership of state and exact balances

Every modeled stock has an owner. Personal beliefs remain in individuals, organizational capability and productive capacity remain in organizations, and boundary cash has named counterpart accounts. Diagram means are derived observations.

[Numerical operationalization](TECHNICAL.html#akx-sta-01).

<details><summary>Implementation references</summary>

[`hybrid.js:initialize`](source/hybrid.js.html#L82) · [`hybrid.js:recordTransfer`](source/hybrid.js.html#L176) · [`hybrid.js:stocks`](source/hybrid.js.html#L1692).

</details>

**Boundary.** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

Design provenance: D19; S09.

<a id="akx-cap-01"></a>

## AKX-CAP-01 — Persistent organizational capability

Capability persists through interruptions and is affected by actual upkeep. Current delivery also needs funds, staff time and authority; a capability stock alone cannot make a policy operate.

[Numerical operationalization](TECHNICAL.html#akx-cap-01).

<details><summary>Implementation references</summary>

[`hybrid.js:care`](source/hybrid.js.html#L492).

</details>

**Boundary.** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

Design provenance: D01; S09.

<a id="akx-mnt-01"></a>

## AKX-MNT-01 — Maintenance and unfinished work

Leaders choose maintenance, repair, rebuilding or deferral through the established utility framework. Each performed task consumes actual organizational money and the same finite time used by other activities.

[Numerical operationalization](TECHNICAL.html#akx-mnt-01).

<details><summary>Implementation references</summary>

[`hybrid.js:maintenanceNeed`](source/hybrid.js.html#L485) · [`hybrid.js:care`](source/hybrid.js.html#L492).

</details>

**Boundary.** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

Design provenance: D02, D03; S09.

<a id="akx-mnt-02"></a>

## AKX-MNT-02 — Repair and rebuilding

Repair can restore only recorded recoverable damage. Rebuilding accumulates work toward reconstructing lost capability; resumed funding or elapsed months cannot complete that work by themselves.

[Numerical operationalization](TECHNICAL.html#akx-mnt-02).

<details><summary>Implementation references</summary>

[`hybrid.js:care`](source/hybrid.js.html#L492).

</details>

**Boundary.** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

Design provenance: D03; S09.

<a id="akx-bel-01"></a>

## AKX-BEL-01 — Policy value versus implementation-performance beliefs

Agents distinguish the value they attach to a policy from their assessment of its implementation. Experience and accessed information can change these beliefs differently, so dissatisfaction need not imply abandoning the policy.

[Numerical operationalization](TECHNICAL.html#akx-bel-01).

<details><summary>Implementation references</summary>

[`hybrid.js:observe`](source/hybrid.js.html#L449).

</details>

**Boundary.** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

Design provenance: D04; S09.

<a id="akx-agy-01"></a>

## AKX-AGY-01 — Office authority versus personal influence

Decision rights attach to the current position. A completed appointment changes the organizational decision maker; personal finances, networks, experience and audience-specific credibility remain with the person.

[Numerical operationalization](TECHNICAL.html#akx-agy-01).

<details><summary>Implementation references</summary>

[`hybrid.js:rank`](source/hybrid.js.html#L42) · [`hybrid.js:governance`](source/hybrid.js.html#L1173).

</details>

**Boundary.** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

Design provenance: D05; S09.

<a id="akx-agy-02"></a>

## AKX-AGY-02 — Supporter dependence within TPB–utility

Supporter dependence influences perceived consequences, expected approval and feasibility within the existing nine-interest TPB–utility mechanism. It is not a separate political-survival rule that overrides every other motive.

[Numerical operationalization](TECHNICAL.html#akx-agy-02).

<details><summary>Implementation references</summary>

[`hybrid.js:options`](source/hybrid.js.html#L405).

</details>

**Boundary.** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

Design provenance: D06; S09.

<a id="akx-gov-01"></a>

## AKX-GOV-01 — Hierarchy and relationship-based insiders

Authority tiers coexist within the four existing roles. Insider position is a relationship to the current controller, can cross organizational categories and is recorded at the event time. Connections are neither a permanent class nor immunity.

[Numerical operationalization](TECHNICAL.html#akx-gov-01).

<details><summary>Implementation references</summary>

[`hybrid.js:rank`](source/hybrid.js.html#L42) · [`hybrid.js:conduct`](source/hybrid.js.html#L1652).

</details>

**Boundary.** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

Design provenance: D07, D08; S09.

<a id="akx-gov-02"></a>

## AKX-GOV-02 — Constrained appointment and removal

Leadership replacement is a constrained process rather than a timer or a transfer of every personal characteristic. Candidates are evaluated for competence and relationships; each approver retains an independent decision.

[Numerical operationalization](TECHNICAL.html#akx-gov-02).

<details><summary>Implementation references</summary>

[`hybrid.js:propose`](source/hybrid.js.html#L1130) · [`hybrid.js:governance`](source/hybrid.js.html#L1173).

</details>

**Boundary.** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

Design provenance: D09; S09.

<a id="akx-gov-03"></a>

## AKX-GOV-03 — Safeguard changes in all organizational categories

Public agencies, businesses, parties and civic organizations have executable rules for proposals, approvals, removal protection, oversight and disclosure. A stored safeguard must affect an actual later procedure.

[Numerical operationalization](TECHNICAL.html#akx-gov-03).

<details><summary>Implementation references</summary>

[`hybrid.js:propose`](source/hybrid.js.html#L1130) · [`hybrid.js:governance`](source/hybrid.js.html#L1173) · [`hybrid.js:review`](source/hybrid.js.html#L1097).

</details>

**Boundary.** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

Design provenance: D12, D13; S09.

<a id="akx-col-01"></a>

## AKX-COL-01 — Costly coalition formation and commitments

Actors can organize support or opposition using private money and actual time. Recipients choose whether to commit, continue working or withdraw; the coalition is not equivalent to automatic consensus.

[Numerical operationalization](TECHNICAL.html#akx-col-01).

<details><summary>Implementation references</summary>

[`hybrid.js:coalitions`](source/hybrid.js.html#L1305).

</details>

**Boundary.** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

Design provenance: D10; S09.

<a id="akx-att-01"></a>

## AKX-ATT-01 — Attention distinct from support

Attention can decline while policy support persists. Accessed events and coalition activity can renew engagement without mechanically changing ethical commitments or imposing a national attention stock.

[Numerical operationalization](TECHNICAL.html#akx-att-01).

<details><summary>Implementation references</summary>

[`hybrid.js:open`](source/hybrid.js.html#L253) · [`hybrid.js:observe`](source/hybrid.js.html#L449) · [`hybrid.js:coalitions`](source/hybrid.js.html#L1305).

</details>

**Boundary.** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

Design provenance: D11; S09.

<a id="akx-str-01"></a>

## AKX-STR-01 — Combinable political responses

Different articulated demands can receive substantive, symbolic, reframing or obstructive responses. Claims, funded work and completed institutional changes remain distinct, allowing mixed responses by the same actor.

[Numerical operationalization](TECHNICAL.html#akx-str-01).

<details><summary>Implementation references</summary>

[`hybrid.js:responses`](source/hybrid.js.html#L1486).

</details>

**Boundary.** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

Design provenance: D14; S09.

<a id="akx-inf-01"></a>

## AKX-INF-01 — Audience-specific evolving personal influence

Personal influence develops by audience. Someone can become credible to one network and less credible elsewhere; hidden achievements or failures do not change everyone’s beliefs.

[Numerical operationalization](TECHNICAL.html#akx-inf-01).

<details><summary>Implementation references</summary>

[`hybrid.js:observe`](source/hybrid.js.html#L449) · [`hybrid.js:options`](source/hybrid.js.html#L405).

</details>

**Boundary.** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

Design provenance: D16; S09.

<a id="akx-cov-01"></a>

## AKX-COV-01 — Realized coverage only

Only realized accountability coverage is displayed. Its eligibility set is created at recorded conduct, before selective case opening or obstruction, and retains rank/group at that time.

[Numerical operationalization](TECHNICAL.html#akx-cov-01).

<details><summary>Implementation references</summary>

[`hybrid.js:conduct`](source/hybrid.js.html#L1652) · [`hybrid.js:coverage`](source/hybrid.js.html#L1665).

</details>

**Boundary.** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

Design provenance: D15; S09.

<a id="akx-enc-01"></a>

## AKX-ENC-01 — Demand-generated encounters and capacity

Role-specific demand can generate multiple contacts in a month, ordered by internal timestamps. Repeated attempts at unfinished service work update that request’s attempt history rather than creating duplicate queued demand.

[Numerical operationalization](TECHNICAL.html#akx-enc-01).

<details><summary>Implementation references</summary>

[`hybrid.js:encounters`](source/hybrid.js.html#L1564).

</details>

**Boundary.** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

Design provenance: D18; S09.

<a id="akx-eco-01"></a>

## AKX-ECO-01 — Investment choices including political connections

Business receipts support real compensation, eligible owner distributions, reserves and investment. Political connections affect perceived investment opportunities through the existing decision framework; they do not grant productivity automatically.

[Numerical operationalization](TECHNICAL.html#akx-eco-01).

<details><summary>Implementation references</summary>

[`hybrid.js:accounts`](source/hybrid.js.html#L598) · [`hybrid.js:investment`](source/hybrid.js.html#L832).

</details>

**Boundary.** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

Design provenance: D22, D28; S09.

<a id="akx-eco-02"></a>

## AKX-ECO-02 — Business productive-capacity stock

Productive capacity belongs to business organizations and differs from organizational capability. Equipment payment, delivery, installation work and usable capacity are separately recorded.

[Numerical operationalization](TECHNICAL.html#akx-eco-02).

<details><summary>Implementation references</summary>

[`hybrid.js:investment`](source/hybrid.js.html#L832).

</details>

**Boundary.** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

Design provenance: D23; S09.

<a id="akx-eco-03"></a>

## AKX-ECO-03 — Demand-constrained production and allocation

Demand, capacity, inputs, work and payment constrain realized production. Private demand and public procurement may distribute opportunities unevenly; rearranging orders alone does not create national output.

[Numerical operationalization](TECHNICAL.html#akx-eco-03).

<details><summary>Implementation references</summary>

[`hybrid.js:order`](source/hybrid.js.html#L660) · [`hybrid.js:demand`](source/hybrid.js.html#L692) · [`hybrid.js:production`](source/hybrid.js.html#L755).

</details>

**Boundary.** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

Design provenance: D24; S09.

<a id="akx-eco-04"></a>

## AKX-ECO-04 — Taxable activity, compliance and public receipts

Potential liability, declared or discovered assessment, compliance, arrears and actual collection remain separate. The simplified mechanism taxes private business value added; additional receipts expand fiscal choices without automatically funding reform.

[Numerical operationalization](TECHNICAL.html#akx-eco-04).

<details><summary>Implementation references</summary>

[`hybrid.js:taxation`](source/hybrid.js.html#L977).

</details>

**Boundary.** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

Design provenance: D25, D32; S09.

<a id="akx-eco-05"></a>

## AKX-ECO-05 — Economic boundaries and output index

Explicit domestic actors trade with a separate background domestic component and foreign account, preserving the existing 1,000-person structure. The real-activity index starts at 100 and follows delivered domestic value added.

[Numerical operationalization](TECHNICAL.html#akx-eco-05).

<details><summary>Implementation references</summary>

[`hybrid.js:initialize`](source/hybrid.js.html#L82) · [`hybrid.js:production`](source/hybrid.js.html#L755) · [`hybrid.js:close`](source/hybrid.js.html#L1739) · [`hybrid.js:anchor`](source/hybrid.js.html#L1808).

</details>

**Boundary.** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

Design provenance: D21, D29, D30, D31; S09.

<a id="akx-mea-01"></a>

## AKX-MEA-01 — Monthly flow provenance and result explanations

The monthly system view reads opening/closing stocks, realized gross flows and actual process records. Policy views emphasize the selected mechanism; education does not headline case files. Replay and historical review are observation-only.

[Numerical operationalization](TECHNICAL.html#akx-mea-01).

<details><summary>Implementation references</summary>

[`hybrid.js:close`](source/hybrid.js.html#L1739) · [`hybrid.js:summary`](source/hybrid.js.html#L1816) · [`hybrid.js:recordTransfer`](source/hybrid.js.html#L176) · [`hybrid.js:exposure`](source/hybrid.js.html#L304) · [`hybrid.js:capabilityBuilt`](source/hybrid.js.html#L337).

</details>

**Boundary.** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

Design provenance: D27; S09.

<a id="akx-cal-01"></a>

## AKX-CAL-01 — Peru pilot and evidence register

Calibration and the empirical Peru pilot are explicitly deferred. Existing country observations remain dated inputs; the new common economic, maintenance and governance coefficients are engineering assumptions exposed in the code and documentation.

[Numerical operationalization](TECHNICAL.html#akx-cal-01).

<details><summary>Implementation references</summary>

[`hybrid.js:parameters`](source/hybrid.js.html#L14).

</details>

**Boundary.** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

Design provenance: D26; S09.

<a id="akx-val-01"></a>

## AKX-VAL-01 — Coupling, accounting, sensitivity and device validation

Engineering verification checks accounting, physical feasibility, deterministic replay and specific causal pathways. Passing these checks does not validate country realism or establish an expected policy effect.

[Numerical operationalization](TECHNICAL.html#akx-val-01).

<details><summary>Implementation references</summary>

[`hybrid.js:assert`](source/hybrid.js.html#L1862).

</details>

**Boundary.** Uncalibrated common engineering parameters; compact generic procedures and recorded proxies are not a complete national system. See the v3 extension status and deferred calibration plan.

Design provenance: D26; S09.


## Reading one mechanism from decision to collective result

Consider education. The user selects the reform and a starting resource share. That creates a formal policy, not an immediate change in every person's attitude. The treasury must fund the appropriate organizations; their leaders choose how to respond; staff time and setup work constrain when teaching can begin. This connects the resource and implementation rules to the individual influence rules.

Once a teaching episode actually reaches a person, the model reads that person's openness, learning, existing expectations, interests and corrupt-participation history. It also considers the source's credibility and actual delivery quality. One draw decides acceptance; another determines strength. An attitude ceiling of 30% therefore does not mean that 30% of people convert or that corruption falls by 30 points. Repetition has diminishing new influence, earlier learning can be reinforced, and memory can wear off.

At the next relevant choice, the retained attitude influence adjusts the person's assessment of the corrupt option. Their interests, reference expectations, perceived control and occasion-specific uncertainty still matter. They might choose the lawful option, choose the corrupt option or intend something that practical constraints prevent. The code records these stages separately. Other people can respond to an interaction, information can spread, and familiar practice can become easier.

At the collective level, the education output counts delivered teaching contacts. Its outcome is the mean modeled usable knowledge, not a test of every person's comprehension. The package impact compares actual modeled corrupt encounters with the matched no-new-reform branch. These three results can move differently. A connected event is a real record useful for interpretation; it is not automatic proof that the event caused the measured difference.

To inspect this chain, follow **AK-REF-02 → AK-REF-03 → AK-POL-EDUCATION → AK-ADP-01/02 → AK-DEC-01 → AK-MEA-01/02/03**. Each mechanism has the same identifier in the technical specification, source comments and crosswalk. The same approach works for a report that becomes a case, a staffing decision or an implementation review.
