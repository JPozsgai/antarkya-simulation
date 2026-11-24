# Provisional hybrid release · v3.0.0

Created and owned by **Joseph Pozsgai-Alvarez**. © 2026 Joseph Pozsgai-Alvarez.

This is a new executable behavioral release, not the previously reported but unrecovered Peru pilot. Publication precedes empirical calibration at the project owner's request. New parameters are explicit engineering assumptions. No national forecast, fitted macroeconomic target, realistic service-delay distribution or validated policy effect is claimed.

The published v2.4 application remains [available separately](../../v2.4/index.html). Its scenarios belong to that version; recreate settings for v3. The new engine preserves the same people within each v3 pair and every repetition. It reconstructs a common pre-policy year under the new rules, so its starting history intentionally differs from v2.4.

## What changed

The four resolved structural choices remain: explicit compensation and eligible distributions; separate explicit-domestic/background-domestic/foreign components; an endogenous domestic-value-added index starting at 100; and a simplified business-value-added assessment/collection mechanism. Exactly 1,000 individuals remain across the original four principal roles. The existing twelve reforms, individual learning and policy-specific output–outcome–impact assessment remain in place.

The extension implements upkeep, repair and rebuilding; shared personal time; constrained governance procedures and appointments; active coalition commitments; separate policy value, implementation beliefs, attention and audience-specific credibility; repeated demand-driven contacts; productive capacity, orders, delivered production, investment and fiscal feedback. The system view reads their recorded flows and does not create a second engine.

## Reference units and update order

RU is a normalized purchasing-power unit with fixed reference prices, not yen or national GDP. PM is one normalized available person-month. Upkeep WU is normalized by an organization's fixed initial reference staff count; cross-organization backlog displays convert WU to PM before adding. Productive capacity is potential output RU/month. Capability and retained influence are bounded dimensionless stocks; plotted means aggregate individual/organizational stocks without independently changing them.

Each month opens finite personal time, advances retention, pays role compensation from named accounts, disburses reform resources, allocates shared public time, undertakes upkeep and reform work, executes repeated encounters, processes services/cases, communicates information, reviews organizations/political authority, undertakes governance/coalition responses, reviews resources, and settles demand/production/investment/tax before recording. Earlier experiences can affect later encounters in the ordered encounter agenda. The phased schedule remains an approximation; it is not a continuous-time solver.

## Numerical mechanisms and source routes

<a id="akx-scp-01"></a>

### AKX-SCP-01 — Scope and precedence

The release retains 1,000 people and all ten country profiles. Peru calibration and empirical pilot validation remain pending. The new economic and governance processes run with common, visibly declared engineering assumptions rather than fitted national response parameters.

Behavior version 3.0.0 replaces overlapping legacy accounts and encounter scheduling. Country GDP-PPP still sets a bounded initial resource scale, while realized domestic value added generates a separate endogenous index. No inflation, exchange-rate, banking or demographic model is added.

Decision provenance: D26, D30. Source: `hybrid.js:initialize`. See the [full annotated source](SOURCE-INDEX.html) and [controlled checks](source/hybrid.test.js.html).

<a id="akx-tim-01"></a>

### AKX-TIM-01 — Monthly reporting with repeated internal events

A reporting month contains ordered repeated encounters and progressive work. Available personal time is shared across primary employment, upkeep, contacts, governance and coalition activity; membership creates no additional time.

Each person starts with 1 PM. Organizational capacity is bounded by matching-primary-role staff time and competence. Existing public task debits are reconciled to individual ledgers between phases. Governance has work and approval minima; investment waits for delivery and actual installation work. The agenda is ordered within the encounter phase; this is not a full continuous-time scheduler.

Decision provenance: D17, D20. Source: `hybrid.js:open`, `hybrid.js:personalTime`, `hybrid.js:synchronizeTime`. See the [full annotated source](SOURCE-INDEX.html) and [controlled checks](source/hybrid.test.js.html).

<a id="akx-sta-01"></a>

### AKX-STA-01 — Single ownership of state and exact balances

Every modeled stock has an owner. Personal beliefs remain in individuals, organizational capability and productive capacity remain in organizations, and boundary cash has named counterpart accounts. Diagram means are derived observations.

Cash total includes background domestic, treasury, all persons and organizations, reform allocations, foreign account and coalition escrow. Transfers clip to actual source funds. Transaction/flow IDs have separate counters from behavioral request and proposal IDs. Monthly histories are observer records and are not used to impose national belief changes.

Decision provenance: D19. Source: `hybrid.js:initialize`, `hybrid.js:recordTransfer`, `hybrid.js:stocks`. See the [full annotated source](SOURCE-INDEX.html) and [controlled checks](source/hybrid.test.js.html).

<a id="akx-cap-01"></a>

### AKX-CAP-01 — Persistent organizational capability

Capability persists through interruptions and is affected by actual upkeep. Current delivery also needs funds, staff time and authority; a capability stock alone cannot make a policy operate.

The old fixed per-tool .998 decay is removed. For each organization, missing its .02 reference-staff upkeep requirement causes loss C*.008*shortfall. Capability is bounded, recoverable loss is recorded, and prolonged neglect transfers a bounded share to irreversible loss. Rebuilding and existing installed reform work can add capability.

Decision provenance: D01. Source: `hybrid.js:care`. See the [full annotated source](SOURCE-INDEX.html) and [controlled checks](source/hybrid.test.js.html).

<a id="akx-mnt-01"></a>

### AKX-MNT-01 — Maintenance and unfinished work

Leaders choose maintenance, repair, rebuilding or deferral through the established utility framework. Each performed task consumes actual organizational money and the same finite time used by other activities.

Reference staff count is fixed at initialization. Backlog adds .02 reference WU/month and subtracts completed current upkeep or eligible repair. Public staff allocation includes maintenance as a fourth competing category. Upkeep costs .10 RU per performed PM; costs are charged once even when one action both clears neglected work and repairs damage.

Decision provenance: D02, D03. Source: `hybrid.js:maintenanceNeed`, `hybrid.js:care`. See the [full annotated source](SOURCE-INDEX.html) and [controlled checks](source/hybrid.test.js.html).

<a id="akx-mnt-02"></a>

### AKX-MNT-02 — Repair and rebuilding

Repair can restore only recorded recoverable damage. Rebuilding accumulates work toward reconstructing lost capability; resumed funding or elapsed months cannot complete that work by themselves.

Repair restoration is min(recorded recoverable loss,.25*completed repair WU). Rebuilding retains progress until 2 reference WU are performed; completion restores at most .10 of recorded irreversible loss and debits the completed work once. These defaults are uncalibrated assumptions, with no national estimate asserted.

Decision provenance: D03. Source: `hybrid.js:care`. See the [full annotated source](SOURCE-INDEX.html) and [controlled checks](source/hybrid.test.js.html).

<a id="akx-bel-01"></a>

### AKX-BEL-01 — Policy value versus implementation-performance beliefs

Agents distinguish the value they attach to a policy from their assessment of its implementation. Experience and accessed information can change these beliefs differently, so dissatisfaction need not imply abandoning the policy.

Each person holds separate policy value/performance fields and issue attention. A source/episode deduplication memory prevents repeated processing within 64 records. Performance learning uses .04*credibility*individual learning toward an interpreted episode. Policy-value learning is slower and also reflects public-regarding motives; hidden analyst results never update an audience.

Decision provenance: D04. Source: `hybrid.js:observe`. See the [full annotated source](SOURCE-INDEX.html) and [controlled checks](source/hybrid.test.js.html).

<a id="akx-agy-01"></a>

### AKX-AGY-01 — Office authority versus personal influence

Decision rights attach to the current position. A completed appointment changes the organizational decision maker; personal finances, networks, experience and audience-specific credibility remain with the person.

Rank is derived as national controller, organizational leader or ordinary member. Appointments change o.leader only after a valid procedure. Current national controller rights continue to use the inherited political review. Losing an organizational position does not erase personal agent fields or transfer their credibility to the successor.

Decision provenance: D05. Source: `hybrid.js:rank`, `hybrid.js:governance`. See the [full annotated source](SOURCE-INDEX.html) and [controlled checks](source/hybrid.test.js.html).

<a id="akx-agy-02"></a>

### AKX-AGY-02 — Supporter dependence within TPB–utility

Supporter dependence influences perceived consequences, expected approval and feasibility within the existing nine-interest TPB–utility mechanism. It is not a separate political-survival rule that overrides every other motive.

For relevant organizational/political choice contexts, at most two accessed trusted peers contribute bounded agreement and dependence. Political/self consequences add .15*dependence*agreement, norms add .08*agreement and control .06*dependence*agreement. Personal credibility weights these relationships; implementation belief can also modify the public-economic valuation of substantive work.

Decision provenance: D06. Source: `hybrid.js:options`. See the [full annotated source](SOURCE-INDEX.html) and [controlled checks](source/hybrid.test.js.html).

<a id="akx-gov-01"></a>

### AKX-GOV-01 — Hierarchy and relationship-based insiders

Authority tiers coexist within the four existing roles. Insider position is a relationship to the current controller, can cross organizational categories and is recorded at the event time. Connections are neither a permanent class nor immunity.

Rank is 3 for the budget controller, 2 for any organizational leader and 1 otherwise. The realized-coverage observer labels a subject connected when directional relationship access exceeds .12. The actual appointment, tax-concession and oversight choices still require authority, independent responses and available resources.

Decision provenance: D07, D08. Source: `hybrid.js:rank`, `hybrid.js:conduct`. See the [full annotated source](SOURCE-INDEX.html) and [controlled checks](source/hybrid.test.js.html).

<a id="akx-gov-02"></a>

### AKX-GOV-02 — Constrained appointment and removal

Leadership replacement is a constrained process rather than a timer or a transfer of every personal characteristic. Candidates are evaluated for competence and relationships; each approver retains an independent decision.

Public appointments can be initiated through the controller; category-specific internal initiators also exist. Candidate pools contain up to eight matching-primary-role staff. Proposals snapshot the current leader, approval roster and protection. They require at least two months and .03 PM of preparation, all required vote opportunities, a strict majority and satisfied removal protection.

Decision provenance: D09. Source: `hybrid.js:propose`, `hybrid.js:governance`. See the [full annotated source](SOURCE-INDEX.html) and [controlled checks](source/hybrid.test.js.html).

<a id="akx-gov-03"></a>

### AKX-GOV-03 — Safeguard changes in all organizational categories

Public agencies, businesses, parties and civic organizations have executable rules for proposals, approvals, removal protection, oversight and disclosure. A stored safeguard must affect an actual later procedure.

Oversight can trigger a separately chosen, time-consuming review that blocks diversion in public implementation or private organizational funds. Disclosure weights actual record visibility. Removal protection constrains appointments; the stricter original/current protection applies, preventing a proposal from weakening its own gate. Generic three-member profiles are engineering simplifications, not national corporate or public law.

Decision provenance: D12, D13. Source: `hybrid.js:propose`, `hybrid.js:governance`, `hybrid.js:review`. See the [full annotated source](SOURCE-INDEX.html) and [controlled checks](source/hybrid.test.js.html).

<a id="akx-col-01"></a>

### AKX-COL-01 — Costly coalition formation and commitments

Actors can organize support or opposition using private money and actual time. Recipients choose whether to commit, continue working or withdraw; the coalition is not equivalent to automatic consensus.

Up to eight civic initiators receive opportunities every three months. An accepted commitment transfers .05 RU into a named escrow account. Performed advocacy costs .005 RU and .015 PM per contribution. Unused contributions are returned on withdrawal or closure. Escrow is included in money conservation and never credits reform allocations.

Decision provenance: D10. Source: `hybrid.js:coalitions`. See the [full annotated source](SOURCE-INDEX.html) and [controlled checks](source/hybrid.test.js.html).

<a id="akx-att-01"></a>

### AKX-ATT-01 — Attention distinct from support

Attention can decline while policy support persists. Accessed events and coalition activity can renew engagement without mechanically changing ethical commitments or imposing a national attention stock.

Issue attention decays with a six-month half-life and is reinforced by accessed episodes. It affects the relative valuation of mobilizing versus declining engagement. Policy value, perceived implementation and attention are distinct stored fields; chart averages are derived from people.

Decision provenance: D11. Source: `hybrid.js:open`, `hybrid.js:observe`, `hybrid.js:coalitions`. See the [full annotated source](SOURCE-INDEX.html) and [controlled checks](source/hybrid.test.js.html).

<a id="akx-str-01"></a>

### AKX-STR-01 — Combinable political responses

Different articulated demands can receive substantive, symbolic, reframing or obstructive responses. Claims, funded work and completed institutional changes remain distinct, allowing mixed responses by the same actor.

A recipient spends personal time evaluating each active delivered coalition demand. A substantive response changes a temporary work-priority input used by staff allocation. Symbolic/reframing communication spends ordinary organizational resources and reaches the actual coalition audience through credibility-filtered learning. Obstruction initiates a governance procedure rather than instantly changing a safeguard.

Decision provenance: D14. Source: `hybrid.js:responses`. See the [full annotated source](SOURCE-INDEX.html) and [controlled checks](source/hybrid.test.js.html).

<a id="akx-inf-01"></a>

### AKX-INF-01 — Audience-specific evolving personal influence

Personal influence develops by audience. Someone can become credible to one network and less credible elsewhere; hidden achievements or failures do not change everyone’s beliefs.

Source-specific credibility is held by the recipient. A processed episode changes it at .04*reliability toward the interpreted performance. The relevant credibility enters later supporter weighting. Ordinary accessed stories, teaching episodes, coalition work and known governance episodes call this pathway; no global charisma or champion bonus exists.

Decision provenance: D16. Source: `hybrid.js:observe`, `hybrid.js:options`. See the [full annotated source](SOURCE-INDEX.html) and [controlled checks](source/hybrid.test.js.html).

<a id="akx-cov-01"></a>

### AKX-COV-01 — Realized coverage only

Only realized accountability coverage is displayed. Its eligibility set is created at recorded conduct, before selective case opening or obstruction, and retains rank/group at that time.

The current proxy reports actors in eligible recorded acts whose case reached investigation or decision within a trailing-year cohort. Counts are stratified by three ranks and connected/other groups. Below 20 observations the UI flags insufficient evidence. This is a synthetic process proxy; it does not establish matched-case impartiality or legal guilt.

Decision provenance: D15. Source: `hybrid.js:conduct`, `hybrid.js:coverage`. See the [full annotated source](SOURCE-INDEX.html) and [controlled checks](source/hybrid.test.js.html).

<a id="akx-enc-01"></a>

### AKX-ENC-01 — Demand-generated encounters and capacity

Role-specific demand can generate multiple contacts in a month, ordered by internal timestamps. Repeated attempts at unfinished service work update that request’s attempt history rather than creating duplicate queued demand.

Poisson count sampling uses role intensities [.65,.85,.20,.20]. Every completed contact requires .015 PM from both participants. Pending service retries can be abandoned after six months through utility choice. Campaign and business-political opportunities remain. Explicit request IDs and episode keys distinguish repeated contacts.

Decision provenance: D18. Source: `hybrid.js:encounters`. See the [full annotated source](SOURCE-INDEX.html) and [controlled checks](source/hybrid.test.js.html).

<a id="akx-eco-01"></a>

### AKX-ECO-01 — Investment choices including political connections

Business receipts support real compensation, eligible owner distributions, reserves and investment. Political connections affect perceived investment opportunities through the existing decision framework; they do not grant productivity automatically.

Primary-role compensation debits the actual employer account. The legacy 180*g treasury grant and wage withholding are removed. Investment, reserve retention, eligible distribution and attempted diversion are distinct leader choices. Ownership is explicitly initialized to the organizational leader as a provisional prior; ordinary membership creates no dividend right. Diverted entrusted funds face internal review.

Decision provenance: D22, D28. Source: `hybrid.js:accounts`, `hybrid.js:investment`. See the [full annotated source](SOURCE-INDEX.html) and [controlled checks](source/hybrid.test.js.html).

<a id="akx-eco-02"></a>

### AKX-ECO-02 — Business productive-capacity stock

Productive capacity belongs to business organizations and differs from organizational capability. Equipment payment, delivery, installation work and usable capacity are separately recorded.

Capital consumes .08/year converted to a monthly fraction. Funded equipment projects wait one to three months, then require .05+.02*paid RU of performed installation PM. A completed project adds paidRU/(12*3) outputRU/month once. Missing work prevents completion even after the delivery date. Depreciation is a capacity flow rather than a second cash payment.

Decision provenance: D23. Source: `hybrid.js:investment`. See the [full annotated source](SOURCE-INDEX.html) and [controlled checks](source/hybrid.test.js.html).

<a id="akx-eco-03"></a>

### AKX-ECO-03 — Demand-constrained production and allocation

Demand, capacity, inputs, work and payment constrain realized production. Private demand and public procurement may distribute opportunities unevenly; rearranging orders alone does not create national output.

Household purchases split .35 explicit/.65 background. Background purchasing responds to recent receipts and a reserve requirement; foreign reference demand is 60 RU/month. Production is bounded by available capacity, actual funds and private organizational time at 15 outputRU/PM. Imported intermediate inputs cost .20 of delivered output. Unfilled orders expire after six months; the current order list uses deterministic insertion order.

Decision provenance: D24. Source: `hybrid.js:order`, `hybrid.js:demand`, `hybrid.js:production`. See the [full annotated source](SOURCE-INDEX.html) and [controlled checks](source/hybrid.test.js.html).

<a id="akx-eco-04"></a>

### AKX-ECO-04 — Taxable activity, compliance and public receipts

Potential liability, declared or discovered assessment, compliance, arrears and actual collection remain separate. The simplified mechanism taxes private business value added; additional receipts expand fiscal choices without automatically funding reform.

Assessment uses .22 of taxable business VA as an uncalibrated rate. Concealment and a requested concession have distinct choices; a concession requires an actual connected collector and their approval. Unpaid assessment persists. Actual collection is cash-limited and capped at .25 of business cash per round. Background private VA uses .85 aggregate compliance. Fines and identified domestic receipts remain transfers, not additional production.

Decision provenance: D25, D32. Source: `hybrid.js:taxation`. See the [full annotated source](SOURCE-INDEX.html) and [controlled checks](source/hybrid.test.js.html).

<a id="akx-eco-05"></a>

### AKX-ECO-05 — Economic boundaries and output index

Explicit domestic actors trade with a separate background domestic component and foreign account, preserving the existing 1,000-person structure. The real-activity index starts at 100 and follows delivered domestic value added.

VA is explicit business output less imported consumed intermediates, plus background domestic production and performed public nonmarket output. Public output uses actual paid compensation times the performed-work share. The reference is the last reconstructed month’s VA and starts at 100. All prices are fixed normalized RU; no validated GDP-per-capita conversion is supplied. Initial boundary cash is a synthetic finite reserve, split 80% domestic/20% foreign.

Decision provenance: D21, D29, D30, D31. Source: `hybrid.js:initialize`, `hybrid.js:production`, `hybrid.js:close`, `hybrid.js:anchor`. See the [full annotated source](SOURCE-INDEX.html) and [controlled checks](source/hybrid.test.js.html).

<a id="akx-mea-01"></a>

### AKX-MEA-01 — Monthly flow provenance and result explanations

The monthly system view reads opening/closing stocks, realized gross flows and actual process records. Policy views emphasize the selected mechanism; education does not headline case files. Replay and historical review are observation-only.

system-view.js renders three pathway types: selected tool funding/retained influence, economy, and governance/upkeep. Solid bright pipes use recorded amounts; dashed links are structural dependencies without mediation claims or R/B labels. Detailed tables retain the last 35 flow records shown, the saved cash journal the last 1,000 transactions, and monthly diagrams retain the bounded run history. All transaction/flow counters are independent from behavioral IDs.

Decision provenance: D27. Source: `hybrid.js:close`, `hybrid.js:summary`, `hybrid.js:recordTransfer`, `hybrid.js:exposure`, `hybrid.js:capabilityBuilt`. See the [full annotated source](SOURCE-INDEX.html) and [controlled checks](source/hybrid.test.js.html).

<a id="akx-cal-01"></a>

### AKX-CAL-01 — Peru pilot and evidence register

Calibration and the empirical Peru pilot are explicitly deferred. Existing country observations remain dated inputs; the new common economic, maintenance and governance coefficients are engineering assumptions exposed in the code and documentation.

The retained decision register has 16 country/input records and 20 shared-parameter records. No newly fitted macro target, survey prevalence, governance distribution or policy effect is claimed. All ten profiles can execute the new module, but this is not ten-country calibration. Future fitting must reconcile units, coverage, data vintage, parameter identification and sensitivity.

Decision provenance: D26. Source: `hybrid.js:parameters`. See the [full annotated source](SOURCE-INDEX.html) and [controlled checks](source/hybrid.test.js.html).

<a id="akx-val-01"></a>

### AKX-VAL-01 — Coupling, accounting, sensitivity and device validation

Engineering verification checks accounting, physical feasibility, deterministic replay and specific causal pathways. Passing these checks does not validate country realism or establish an expected policy effect.

New controlled tests exercise upkeep versus neglect, bounded repair, work-driven investment, private oversight, protected appointments, attention, accessed reputation, eligible coverage, foreign/escrow cash, tax arrears and observer invariance. Existing checks are retained, with explicitly documented adaptations for replaced wage accounting, new time-opening rules, cache versions and the archived historical engine. Actual Android performance and the Peru empirical pilot remain pending.

Decision provenance: D26. Source: `hybrid.js:assert`. See the [full annotated source](SOURCE-INDEX.html) and [controlled checks](source/hybrid.test.js.html).

## Explicit operational limits and next work

All 32 accepted decisions are mapped below; presence of a process does not establish calibrated realism. Governance approval rosters and thresholds are generic. Removal-for-cause is represented narrowly through eligibility/sanction status. Ownership is a declared initialization prior, not a census of real firms. Background production is a compact aggregate, not another set of agents. Prices and foreign reference demand are fixed. Initial boundary reserves are finite synthetic balances rather than inferred national wealth. Eligible coverage is a process proxy; no intended-coverage dashboard or automatic champion/trajectory effectiveness multiplier is added.

The economic index uses realized output minus consumed imported intermediate inputs, plus nonoverlapping background production and performed public output. Tax, wage, dividend, grant and bribe transfers are not added to production. The baseline can grow, contract, accumulate backlogs or become cash-constrained under these assumptions. Those dynamics are not empirical predictions. The current investigation-capability diagnostics still have the limitations listed in the measurement dictionary.

The diagram's full-month policy cash totals are accumulated before transaction detail is truncated. Solid pipes show recorded gross amounts; dashed influence arrows do not identify a causal contribution. No R/B feedback label is assigned without a sign-and-delay audit. Month-zero records describe the reconstructed month immediately before adoption. Educational mean influence is not an empirical attitude survey; activity counts are not unique learners. Replaying or reviewing a recorded month consumes no behavioral draw. Flow, transaction and behavioral identity counters are separate.

The saved journal retains the latest 1,000 cash transactions. Monthly detail tables show the last 35 flow records, while diagrams use complete gross-flow totals. Run history is bounded to the 240-month horizon plus reconstruction. These retention limits do not discard economic demand or alter actor decisions.

Next work is the separately requested Peru calibration and empirical pilot: harmonized source vintage and national coverage; realistic capital/output, fiscal and compensation mappings; plausible baseline dynamics; competing parameter sets; sensitivity and feedback ablation; matched survey definitions; and actual Android runtime/memory. Numerical checks below establish engineering properties only.

## Accepted decisions D01–D32

| Decision | Accepted requirement | Executable route |
| --- | --- | --- |
| D01 | Organizational capability persists separately from current delivery; funding interruptions and capability erosion have different time scales. | AKX-CAP-01 |
| D02 | Maintenance competes for real money/time and is chosen through the shared decision framework. | AKX-MNT-01 |
| D03 | Unfinished maintenance persists; maintenance, repair and rebuilding have different completion and recovery processes. | AKX-MNT-01, AKX-MNT-02 |
| D04 | Policy-value and implementation-performance beliefs are distinct, learned subjectively. | AKX-BEL-01 |
| D05 | Office carries decision rights; personal relationships and credibility remain with the person after office changes. | AKX-AGY-01 |
| D06 | Supporter dependence influences consequences, norms and perceived control within TPB–utility. | AKX-AGY-02 |
| D07 | Ordinary members, organizational leaders and national authorities are authority tiers where applicable, within four existing classes. | AKX-GOV-01 |
| D08 | Insiders can span organizational categories and change with relationships; no automatic immunity. | AKX-GOV-01 |
| D09 | Appointment and removal require the relevant authority, procedures and resources; appointees remain autonomous decision makers. | AKX-GOV-02 |
| D10 | Agents can build, sustain, alter or oppose coalitions through costly attempts and independently evaluated commitments. | AKX-COL-01 |
| D11 | Attention and active engagement can weaken without equivalent loss of policy support. | AKX-ATT-01 |
| D12 | Actors can attempt safeguard changes in every organizational category, through an available channel. | AKX-GOV-03 |
| D13 | A compact organization-specific governance profile defines initiators, approvers and protections. | AKX-GOV-03 |
| D14 | Political responses can be combined across demands or reform components; public claims differ from completed work. | AKX-STR-01 |
| D15 | Assess realized accountability coverage only, by relevant rank/group and eligibility. | AKX-COV-01 |
| D16 | Personal influence evolves by audience through accessed and interpreted information, not hidden analyst truth. | AKX-INF-01 |
| D17 | Month is a reporting/coupling period containing repeated, ordered interactions and appropriate process-specific updates. | AKX-TIM-01 |
| D18 | Demand generates attempted encounters; staff/resource constraints limit completion, with explicit retry/delay/abandonment rules. | AKX-ENC-01 |
| D19 | Shared stocks have balances; aggregates of agent beliefs are derived summaries, not duplicate autonomous stocks. | AKX-STA-01 |
| D20 | Delays follow completed work, interruptions and procedural minima rather than a guaranteed elapsed-time timer. | AKX-TIM-01 |
| D21 | Internal conditions can affect the economy, which feeds back into agents and organizations; GDP is not permanently fixed. | AKX-ECO-05 |
| D22 | Business investment uses the common choice framework, including political/organizational connections as perceived consequences, norms and feasibility. | AKX-ECO-01 |
| D23 | Completed business investment builds organization-held productive capacity, distinct from organizational capability. | AKX-ECO-02 |
| D24 | Actual production depends on demand and operating constraints; unused capacity is possible. | AKX-ECO-03 |
| D25 | Public revenue responds partly to realized economic activity and compliance; allocation remains a political/administrative choice. | AKX-ECO-04 |
| D26 | Use a compact Peru pilot, source-backed anchors, declared synthetic initialization and sensitivity analysis before expanding to ten countries. | AKX-SCP-01, AKX-CAL-01, AKX-VAL-01 |
| D27 | Result explanations connect consequential leadership/system events to the relevant output, outcome and impact, without claiming unsupported causality. | AKX-MEA-01 |
| D28 | Business-related income uses explicit compensation and eligible distributions from organizational funds, with retention for operations and investment; respect rights, obligations and actual resources. | AKX-ECO-01 |
| D29 | Use explicit domestic actors, an aggregate background domestic component for omitted activities, and a foreign component, with traceable transactions and stated adaptive/boundary rules; do not change the 1,000-agent classes. | AKX-ECO-05 |
| D30 | Use fixed reference prices for the pilot; leave endogenous inflation and exchange-rate dynamics outside it. No unexplained financing or overlap between explicit and background activities. | AKX-SCP-01, AKX-ECO-05 |
| D31 | Calculate an economic-activity index starting at 100 from realized domestic value added across explicit and background components. Starting country calibration is identical across paired runs; a GDP-per-capita equivalent requires validated scaling. | AKX-ECO-05 |
| D32 | Use one simplified tax mechanism on taxable business value added, separating assessment, compliance, actual collection and unpaid liabilities. Jointly calibrate parameters to starting receipts and identify other public-receipt flows. | AKX-ECO-04 |

The [machine-readable original decision and calibration register](../HYBRID-DECISIONS.json) preserves the four resolved questions and all 36 calibration records. Nulls remain unknown, not zero.
