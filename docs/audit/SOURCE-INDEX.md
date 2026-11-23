# Full annotated code and developer notes

All active runtime modules, the interface, tests and audit tooling are reproduced below. The JavaScript is formatted for inspection, with mechanism codes and developer notes in the actual files. These comments and formatting preserve the pinned runtime syntax-tree fingerprints. Anonymous callbacks belong to their nearest named unit; data definitions and writes are separately inventoried. Archived v1 is excluded.

| File | Purpose / source | SHA-256 |
| --- | --- | --- |
| model.js | [Full file](source/model.js.html) | 03ba8fea58d7c3a1f8e8f89cd648144a35d46670aafa940ec00017bebc2967b9 |
| adaptation.js | [Full file](source/adaptation.js.html) | 543896bbfba6d979b044dbf40aef74bbbbb2667cd8ef2f4a876c4b790ec52769 |
| reporting.js | [Full file](source/reporting.js.html) | b78cebda27694785fb32c4e29bc9005df3e8593d64aa86243d9cdfe73f3ce3ac |
| config.js | [Full file](source/config.js.html) | 0659d3d3d62a5dfe87681b47d4f6e7e07a77c50890f0f845e7c2ea3e1b2b2fc3 |
| baseline.js | [Full file](source/baseline.js.html) | 78064fd4cb790ab7df0fbba0041e75ba2a6eba9f11af0c5897d4f848ac6b7c6b |
| profiles.js | [Full file](source/profiles.js.html) | 6c056abb03086e688df88c9dc711dd746108263b818475b89f78895804c3b411 |
| run-seeds.js | [Full file](source/run-seeds.js.html) | 4ffae05af2e6e17b3caa06f377aef776b87a8ce898bee6a71a4865294a536bc6 |
| visualization.js | [Full file](source/visualization.js.html) | a0c3741075c37c41fc518f9f71b6c5fbd6b67cfd6ad2303ccd2ea97b178386af |
| worker.js | [Full file](source/worker.js.html) | cefb5f9948adc785a50de0875ca46c3bacdaff01aab130dcfd58f4aaccbcb609 |
| app.js | [Full file](source/app.js.html) | cea9b4ae47a2d8cb70e44fff080581f609d4dc3b36e4df44cb9d3afc10e93298 |
| adaptation.test.js | [Full file](source/adaptation.test.js.html) | 4e5ebc3edc78257033372a8404ae6fc211b53dd0b450c590985aed7cc98579fc |
| audit.test.js | [Full file](source/audit.test.js.html) | 139828e7ec490ad388c700369811ee0738f9cb5708ea039dd814069f62a0b22b |
| dynamics.test.js | [Full file](source/dynamics.test.js.html) | 0627e97128a74fcad724f335b3e49a08fc6843fd8071c2962c72c997f7828691 |
| initialization.test.js | [Full file](source/initialization.test.js.html) | d64221f033101aec3d99543cbe02ed7ae544a3aa41c43299df6d6ca20bfd6cbe |
| model.test.js | [Full file](source/model.test.js.html) | d12fd99f8db5363c4128429823030bdd31cee8373c2ec48cceab80e6fb28bb8f |
| reporting.test.js | [Full file](source/reporting.test.js.html) | aea86c4080cfbf643ed6e797430eaa8f4b05edc125008cd827ed5c33058d6f8f |
| run-seeds.test.js | [Full file](source/run-seeds.test.js.html) | 7f5bb4086ea7553f4909721ecffd60791e4b62f907f5d2de38fdde60f7c49b59 |
| stress.test.js | [Full file](source/stress.test.js.html) | e77b33102be8581dfec1fbdbb6a0cd74f5f0298b93327bf4e5041cc8e1e4057a |
| visualization.test.js | [Full file](source/visualization.test.js.html) | 00507f9bd62c2f55a944926005f587a17c02d9593a7dabcdffe3e01830614c7d |
| worker.test.js | [Full file](source/worker.test.js.html) | 9fc0d71016e4ee1e3b1481f59e2f848b3383b9ef9df9bf3f9eaf81f530ca3b97 |
| index.html | [Full file](source/index.html.html) | c78b1eb949a7fc208010876bcb1dcd6a465037e1f1b9e724fc53d121b6fd9f0c |
| style.css | [Full file](source/style.css.html) | 48253651f5fbf2ab0e951e696c31d2d0a8457eba91393713c2d005dd8312154a |
| scripts/audit-lib.mjs | [Full file](source/scripts__audit-lib.mjs.html) | 30ed055672b85bc56f33d317e53013d9c3d8489ca3ec8b23d5d17fae7e2cb99a |
| scripts/build-audit.mjs | [Full file](source/scripts__build-audit.mjs.html) | 90f29146bfc9840a7e77aa35469fb774fc27b19a04ffb7dd18d84dfd6d6ea4be |
| scripts/check-audit.mjs | [Full file](source/scripts__check-audit.mjs.html) | 6eeac4ed317d9e8e99b3c6724962861b23faabf20084cb501483ac70de6742cd |
| .github/workflows/model-checks.yml | [Full file](source/github__workflows__model-checks.yml.html) | c826b9d9129da51c002d2586f8a15ea78e8b1fd96263a543f078e1208dfd486b |
| package.json | [Full file](source/package.json.html) | 0978d90eda1b43066a6898371ff66ec66c83dac068c4106340db82ac09c9f11a |
| package-lock.json | [Full file](source/package-lock.json.html) | abfd2db3acbd654855495e4d7de70a8bd6702aa60ff4e4bf4efa6ad113f75695 |

## model.js

| Unit / line | Mechanism references | Developer note |
| --- | --- | --- |
| [model.js:35](source/model.js.html#L35) · clamp | [AK-OV-01](TECHNICAL.html#ak-ov-01), [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [model.js:36](source/model.js.html#L36) · sum | [AK-OV-01](TECHNICAL.html#ak-ov-01), [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [model.js:37](source/model.js.html#L37) · mean | [AK-OV-01](TECHNICAL.html#ak-ov-01), [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [model.js:38](source/model.js.html#L38) · clone | [AK-OV-01](TECHNICAL.html#ak-ov-01), [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [model.js:43](source/model.js.html#L43) · hash | [AK-RNG-01](TECHNICAL.html#ak-rng-01) | Hash an explicit namespace/key to an unsigned 32-bit integer. This is reproducible simulation randomization, not cryptography; changing mixing or key order changes every downstream experiment. |
| [model.js:56](source/model.js.html#L56) · draw | [AK-RNG-01](TECHNICAL.html#ak-rng-01) | Return a uniform value strictly inside (0,1) from the keyed hash. Keep this separate from display hashes and never call it to animate or inspect a result. |
| [model.js:63](source/model.js.html#L63) · generator | [AK-RNG-01](TECHNICAL.html#ak-rng-01) | Supply sequential initialization draws within a dedicated namespace. Runtime choices instead use stable semantic keys so policy branches do not shift a shared RNG cursor. |
| [model.js:71](source/model.js.html#L71) · gaussian | [AK-OV-01](TECHNICAL.html#ak-ov-01), [AK-VAL-01](TECHNICAL.html#ak-val-01) | Box–Muller helper used by initialization gamma draws. It is a numerical sampler, not an empirical behavioral distribution. |
| [model.js:78](source/model.js.html#L78) · gamma | [AK-OV-01](TECHNICAL.html#ak-ov-01), [AK-VAL-01](TECHNICAL.html#ak-val-01) | Generate positive gamma variates for nine heterogeneous motive weights. Rejection/shape transforms consume only the initialization generator. |
| [model.js:95](source/model.js.html#L95) · motives | [AK-MOT-01](TECHNICAL.html#ak-mot-01) | Construct all nine social/economic/political × self/group/public weights and normalize them. Role/domain and beneficiary proportions are provisional priors; a motive is not a conduct classification. |
| [model.js:126](source/model.js.html#L126) · validate | [AK-OV-01](TECHNICAL.html#ak-ov-01) | Normalize and reject unsupported setup values before constructing a world. Defaults, duration/repetition limits, override bounds and distinct policy IDs are part of the experiment contract. |
| [model.js:170](source/model.js.html#L170) · conditions | [AK-COU-01](TECHNICAL.html#ak-cou-01) | Combine dated stored descriptors, bounded country baseline mappings and explicit user overrides. An override deliberately changes the reconstructed past as well as future conditions. |
| [model.js:184](source/model.js.html#L184) · totalMoney | [AK-ECO-01](TECHNICAL.html#ak-eco-01) | Sum every modeled cash account, including outside and unspent policy allocations. Use this conserved total rather than treating a bribe/fine transfer as newly created or destroyed money. |
| [model.js:197](source/model.js.html#L197) · transfer | [AK-ECO-01](TECHNICAL.html#ak-eco-01) | Execute a clipped conserved transfer without negative cash. Requested and actually paid amounts can differ, and unpaid ordinary costs are not silently created as debt. |
| [model.js:207](source/model.js.html#L207) · requirements | [AK-REF-02](TECHNICAL.html#ak-ref-02) | Compute additional policy setup, recurring money and staff-time estimates. Cost tuples and GDP normalization are assumptions; this is not the existing institution’s entire budget. |
| [model.js:220](source/model.js.html#L220) · createPopulation | [AK-POP-01](TECHNICAL.html#ak-pop-01), [AK-POP-02](TECHNICAL.html#ak-pop-02), [AK-ORG-01](TECHNICAL.html#ak-org-01), [AK-GEO-01](TECHNICAL.html#ak-geo-01) | Build the raw fixed 1,000-person society and its organizations, profiles, account structure and initial links. Its parameters mix sourced descriptors with explicit generic distributions; createInitial supplies the experienced starting state. |
| [model.js:301](source/model.js.html#L301) · org | [AK-ORG-01](TECHNICAL.html#ak-org-01) | Create a simplified functional organization with capabilities, legal coverage, role practices and a leader/member roster. fn is one principal function, not a complete legal mandate description. |
| [model.js:522](source/model.js.html#L522) · createInitial | [AK-INI-01](TECHNICAL.html#ak-ini-01) | Execute the dedicated twelve-month pre-policy reconstruction and preserve unfinished work/history. Reset intervention counters, not people, finances or cases; cache the identical state for matched comparisons. |
| [model.js:589](source/model.js.html#L589) · initialDifference | [AK-INI-01](TECHNICAL.html#ak-ini-01) | Compare expected and imported starting states without replacing the imported values. Integers remain exact; only insignificant finite noninteger rounding and object-key order are tolerated. |
| [model.js:616](source/model.js.html#L616) · validateInitial | [AK-INI-01](TECHNICAL.html#ak-ini-01) | Enforce initial schema, IDs, role counts, memberships, finances and exact reconstructed provenance. A plausible-looking JSON society is not accepted merely because its total population is correct. |
| [model.js:627](source/model.js.html#L627) · finite | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by validateInitial; consult the linked technical rule and full function body. |
| [model.js:629](source/model.js.html#L629) · ids | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by validateInitial; consult the linked technical rule and full function body. |
| [model.js:787](source/model.js.html#L787) · constructor | [AK-OV-01](TECHNICAL.html#ak-ov-01) | Clone the supplied initial world, set the future-event stream/replicate, and create an observation sidecar before formal adoption. Only the reform branch adopts selected policies; baseline retains inherited arrangements. |
| [model.js:802](source/model.js.html#L802) · get agents | [AK-OV-01](TECHNICAL.html#ak-ov-01), [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [model.js:809](source/model.js.html#L809) · get orgs | [AK-OV-01](TECHNICAL.html#ak-ov-01), [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [model.js:816](source/model.js.html#L816) · get month | [AK-OV-01](TECHNICAL.html#ak-ov-01), [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [model.js:823](source/model.js.html#L823) · rand | [AK-RNG-01](TECHNICAL.html#ak-rng-01) | Owned by module; consult the linked technical rule and full function body. |
| [model.js:830](source/model.js.html#L830) · index | [AK-NET-01](TECHNICAL.html#ak-net-01) | Rebuild role/function/case lookup indexes after relevant transitions. These indexes accelerate access but do not create additional people or organizations. |
| [model.js:842](source/model.js.html#L842) · emit | [AK-VIS-02](TECHNICAL.html#ak-vis-02) | Append a tracked event/update without consuming world randomness. A tracking family can span case stages, resource reviews or a developing relationship. |
| [model.js:862](source/model.js.html#L862) · cap | [AK-REF-01](TECHNICAL.html#ak-ref-01) | Aggregate operative capability among the relevant public functions, or inspect one organization. Capability is a bounded scenario quantity, not an empirical success probability. |
| [model.js:879](source/model.js.html#L879) · recipients | [AK-REF-02](TECHNICAL.html#ak-ref-02) | Choose legally/functionally competent recipients and split reform funds using configured central/local shares. The shares are provisional country assumptions rather than measured budget allocations. |
| [model.js:921](source/model.js.html#L921) · adopt | [AK-REF-01](TECHNICAL.html#ak-ref-01) | Enact the user-selected formal reform and its common intended scope immediately. This does not install implementation capacity, deliver teaching or bypass practical funding/work constraints. |
| [model.js:959](source/model.js.html#L959) · effects | [AK-DEC-02](TECHNICAL.html#ak-dec-02) | Keep all nine consequence slots explicit and finite. The returned vector is an assessed valuation used by utility, not a physical resource transfer. |
| [model.js:969](source/model.js.html#L969) · choose | [AK-DEC-01](TECHNICAL.html#ak-dec-01), [AK-ACT-02](TECHNICAL.html#ak-act-02) | Score every available option under subjective motives, need, accountability expectations, TPB elements and keyed Gumbel uncertainty; take the maximum. Record meaningful opportunities only when a real alternative to a qualifying improper option exists. |
| [model.js:1041](source/model.js.html#L1041) · operatingPolicy | [AK-REF-03](TECHNICAL.html#ak-ref-03) | Require active formal status, completed setup and recent delivery at the specific recipient. The check gates new personal exposure without erasing older memories or baseline capability. |
| [model.js:1052](source/model.js.html#L1052) · expose | [AK-ADP-01](TECHNICAL.html#ak-adp-01) | Deliver a real encountered policy episode with known source credibility and actual dose. Count additional teaching/verification contacts only when delivery is substantive and not a duplicate; uptake may still fail. |
| [model.js:1073](source/model.js.html#L1073) · riskExperience | [AK-CAS-03](TECHNICAL.html#ak-cas-03) | Attribute communicated procedure-specific cost information to one operative tool, falling back to ordinary experience. Avoid stacking the same event as generic risk and several policy bonuses. |
| [model.js:1090](source/model.js.html#L1090) · practice | [AK-INS-01](TECHNICAL.html#ak-ins-01) | Read organization-and-role-specific honest/corrupt familiarity. This scalar affects particular effort/work expressions; its existence does not make repeated conduct an institution without reference reactions. |
| [model.js:1097](source/model.js.html#L1097) · act | [AK-ACT-01](TECHNICAL.html#ak-act-01), [AK-ACT-02](TECHNICAL.html#ak-act-02) | Complete the current meaningful choice or record an actual corrupt act, preserving the last-24 history. A one-option duty or repeated call cannot manufacture lawful recovery credits. |
| [model.js:1141](source/model.js.html#L1141) · completeCorruption | [AK-ACT-01](TECHNICAL.html#ak-act-01) | Record one qualifying act and its participants, roles, amount, source organization and visibility. Victim payments are accounted separately; records can exist before any case or public allegation. |
| [model.js:1175](source/model.js.html#L1175) · eligibleTool | [AK-COU-02](TECHNICAL.html#ak-cou-02) | Apply principal-function and covered-role gates. These are simplified modeled mandates and should not be presented as a comprehensive legal jurisdiction map. |
| [model.js:1213](source/model.js.html#L1213) · coverage | [AK-REF-01](TECHNICAL.html#ak-ref-01) | Return current formal scope, with any endogenous narrowing applied. Formal scope can change before new delivery, so scope-sensitive diagnostics are capability estimates rather than proof of implementation. |
| [model.js:1224](source/model.js.html#L1224) · covered | [AK-REF-01](TECHNICAL.html#ak-ref-01) | Use a fixed society/body/tool/person draw to keep legal coverage consistent over repeated encounters. Do not replace this with a fresh monthly compliance lottery. |
| [model.js:1240](source/model.js.html#L1240) · operational | [AK-REF-01](TECHNICAL.html#ak-ref-01) | Combine legal coverage with actual organization capability, using a deterministic coverage gate for a specified person. This differs from the extra installed-delivery gate required for persuasive exposure. |
| [model.js:1249](source/model.js.html#L1249) · relationship | [AK-ORG-01](TECHNICAL.html#ak-org-01), [AK-NET-01](TECHNICAL.html#ak-net-01) | Separate directional trust, shared membership, support affinity and effective access. Access can affect opportunity and insider incentives without providing automatic immunity. |
| [model.js:1265](source/model.js.html#L1265) · experienced | [AK-ECO-03](TECHNICAL.html#ak-eco-03) | Aggregate all service experiences into at most one bounded opinion/control update per person/month. Waiting files can increase actual burden without multiplying the learning rate indefinitely. |
| [model.js:1295](source/model.js.html#L1295) · priorities | [AK-ECO-02](TECHNICAL.html#ak-eco-02), [AK-REF-03](TECHNICAL.html#ak-ref-03) | Rank work/funding requests by the actor’s evaluated priority-versus-defer utility difference. Ranking does not create additional money or time, and the later feasibility checks still bind. |
| [model.js:1331](source/model.js.html#L1331) · policyFeedback | [AK-REF-04](TECHNICAL.html#ak-ref-04), [AK-MAC-01](TECHNICAL.html#ak-mac-01) | Compute observed delivery, governing support, resistance and waiting used in actor reviews. This is derived feedback, not a separately invented political-will coefficient. |
| [model.js:1363](source/model.js.html#L1363) · peers | [AK-NET-01](TECHNICAL.html#ak-net-01) | Select at most two accessible peers using directional relationship strength/trust. Sharing is selective and cannot broadcast omniscient world truth to the entire society. |
| [model.js:1389](source/model.js.html#L1389) · fundingDependence | [AK-INF-01](TECHNICAL.html#ak-inf-01) | Measure recent active funder leverage relevant to the story subject using actual private flows. These private payments never replenish the public reform implementation pool. |
| [model.js:1397](source/model.js.html#L1397) · recentAmount | [AK-NET-01](TECHNICAL.html#ak-net-01) | Owned by fundingDependence; consult the linked technical rule and full function body. |
| [model.js:1409](source/model.js.html#L1409) · tie | [AK-NET-01](TECHNICAL.html#ak-net-01) | Look up a single undirected link record whose two trust fields remain directional. An absent record is not the same as absent organizational affinity. |
| [model.js:1416](source/model.js.html#L1416) · related | [AK-NET-01](TECHNICAL.html#ak-net-01) | Translate the modeled relationship-access threshold into a connected/outsider gate. This is an operational threshold, not a permanent class characteristic or legal finding. |
| [model.js:1423](source/model.js.html#L1423) · link | [AK-INS-01](TECHNICAL.html#ak-ins-01), [AK-NET-01](TECHNICAL.html#ak-net-01) | Update useful/coercive ties and transmit a relevant reference’s approval/disapproval. Corrupt cooperation and coerced payment are distinct relationship kinds; neither repetition alone nor category membership establishes an institution. |
| [model.js:1497](source/model.js.html#L1497) · nearest | [AK-GEO-01](TECHNICAL.html#ak-geo-01) | Sample a small weighted candidate set using proximity, affinity and access, with possible remote contact. Despite the name it is stochastic weighted contact selection, not simply Euclidean nearest neighbor. |
| [model.js:1533](source/model.js.html#L1533) · monthlyAccounts | [AK-ECO-01](TECHNICAL.html#ak-eco-01), [AK-ECO-02](TECHNICAL.html#ak-eco-02) | Move ordinary income, organizational funding, modeled withholding and consumption through conserved accounts. Reset public staff budgets and record actual unmet-needs pressure; there is no endogenous GDP update. |
| [model.js:1591](source/model.js.html#L1591) · scheduleWork | [AK-ECO-02](TECHNICAL.html#ak-eco-02) | Reserve one finite public time budget across routine, reform and case categories using assessed priorities. Later operations debit both the relevant reservation and common remaining capacity. |
| [model.js:1628](source/model.js.html#L1628) · fundPolicies | [AK-REF-02](TECHNICAL.html#ak-ref-02) | Disburse actually available treasury resources against each policy’s starting/current rate and setup/recurring requirement. Requested amounts can exceed mobilized funds, and policy order matters under scarcity. |
| [model.js:1647](source/model.js.html#L1647) · implementPolicies | [AK-REF-03](TECHNICAL.html#ak-ref-03), [AK-POL-ACA](TECHNICAL.html#ak-pol-aca), [AK-POL-MERIT](TECHNICAL.html#ak-pol-merit), [AK-POL-ROTATION](TECHNICAL.html#ak-pol-rotation), [AK-POL-PROTECTION](TECHNICAL.html#ak-pol-protection), [AK-POL-DECLARATIONS](TECHNICAL.html#ak-pol-declarations), [AK-POL-CONFLICTS](TECHNICAL.html#ak-pol-conflicts), [AK-POL-OVERSIGHT](TECHNICAL.html#ak-pol-oversight), [AK-POL-PAY](TECHNICAL.html#ak-pol-pay), [AK-POL-PENALTIES](TECHNICAL.html#ak-pol-penalties), [AK-POL-DISCLOSURE](TECHNICAL.html#ak-pol-disclosure), [AK-POL-COMPLAINTS](TECHNICAL.html#ak-pol-complaints), [AK-POL-EDUCATION](TECHNICAL.html#ak-pol-education) | Execute actor-selected implementation/resistance/selectivity/diversion, shared-time/cash constraints and progressive setup. Apply only the operating tool’s named structural/learning hooks; full funding does not guarantee completion or integrity. |
| [model.js:1870](source/model.js.html#L1870) · budgetReview | [AK-DEC-02](TECHNICAL.html#ak-dec-02), [AK-REF-04](TECHNICAL.html#ak-ref-04) | Run six-month utility/authorization decisions that can change rates, narrow scope or suspend a reform. Exceptional reviews, full repeal and reinstatement are not implemented by this routine. |
| [model.js:2012](source/model.js.html#L2012) · addService | [AK-ECO-03](TECHNICAL.html#ak-eco-03) | Create one persistent administrative request and count a contact once at arrival. Pending work is not silently counted as a newly arriving contact every month. |
| [model.js:2029](source/model.js.html#L2029) · report | [AK-CAS-01](TECHNICAL.html#ak-cas-01) | Let a witness/victim choose whether to report under subjective knowledge/safety and real costs. A submitted signal is not proof and can fail the affordability/viability threshold. |
| [model.js:2078](source/model.js.html#L2078) · encounter | [AK-DEC-02](TECHNICAL.html#ak-dec-02), [AK-ACT-01](TECHNICAL.html#ak-act-01) | Separate proposer choice, counterpart response, extortion/refusal, prevention and physical completion. Only actual completed voluntary exchanges enter that category; extortion demands and victim payments have separate records. |
| [model.js:2227](source/model.js.html#L2227) · encounters | [AK-GEO-01](TECHNICAL.html#ak-geo-01), [AK-ACT-01](TECHNICAL.html#ak-act-01) | Schedule role-specific opportunities in keyed random order, including campaigns and political pressure. These opportunity frequencies are generic model priors, not national encounter statistics. |
| [model.js:2272](source/model.js.html#L2272) · processServices | [AK-INS-01](TECHNICAL.html#ak-ins-01), [AK-ECO-03](TECHNICAL.html#ak-eco-03) | Process prioritized requests with actual public staff/cash, preserving unresolved queues. Aggregate per-person experience once; completed waiting and unfinished waiting are distinct metrics. |
| [model.js:2313](source/model.js.html#L2313) · makeCase | [AK-COU-02](TECHNICAL.html#ak-cou-02), [AK-CAS-01](TECHNICAL.html#ak-cas-01) | De-duplicate an underlying signal and assign its route, jurisdiction, evidence and next-stage date. A new file is not a guilty verdict or a newly created corrupt act. |
| [model.js:2378](source/model.js.html#L2378) · audit | [AK-CAS-01](TECHNICAL.html#ak-cas-01) | Spend finite scrutiny time on recent conduct records, with detection depending on actual covered capabilities and records. Include a lawful-control false-signal pathway and communicate notices separately from hidden detection truth. |
| [model.js:2420](source/model.js.html#L2420) · responsible | [AK-COU-02](TECHNICAL.html#ak-cou-02), [AK-CAS-02](TECHNICAL.html#ak-cas-02) | Route a case stage to a configured competent function with explicit country exceptions. Fall-throughs and simplified mandates are intentional abstractions documented as limits. |
| [model.js:2425](source/model.js.html#L2425) · pick | [AK-COU-02](TECHNICAL.html#ak-cou-02), [AK-CAS-02](TECHNICAL.html#ak-cas-02) | Owned by responsible; consult the linked technical rule and full function body. |
| [model.js:2457](source/model.js.html#L2457) · processCases | [AK-DEC-02](TECHNICAL.html#ak-dec-02), [AK-CAS-02](TECHNICAL.html#ak-cas-02), [AK-CAS-03](TECHNICAL.html#ak-cas-03) | Apply stage readiness, actual staff/money, controller choices and evidence thresholds before advancing or closing a case. Separate administrative/civil/criminal labels, proven findings, actual collections and unlawful adverse actions. |
| [model.js:2732](source/model.js.html#L2732) · communicatedDecision | [AK-INF-02](TECHNICAL.html#ak-inf-02), [AK-CAS-03](TECHNICAL.html#ak-cas-03) | Update an accessed final decision once, using either one attributable operative policy or ordinary baseline-belief learning. A personally experienced decision cannot add a second public cost increment. |
| [model.js:2754](source/model.js.html#L2754) · collectLiabilities | [AK-CAS-03](TECHNICAL.html#ak-cas-03) | Collect only an existing assessed claim under cash, needs-buffer, per-month receipt cap and enforcement-resource constraints. Installments reduce debt and transfer money but do not create fresh sanction counts. |
| [model.js:2792](source/model.js.html#L2792) · publish | [AK-INF-01](TECHNICAL.html#ak-inf-01) | Make an editor’s publish/withhold choice before spending publication funds and creating a claim/decision/correction record. Publication and announced decisions remain distinct from hidden model guilt. |
| [model.js:2890](source/model.js.html#L2890) · information | [AK-INF-02](TECHNICAL.html#ak-inf-02) | Apply bounded attention, local/media exposure, credibility-weighted beliefs and selective social sharing. Descriptive conduct beliefs, reference expectations and objective truth are not interchangeable fields. |
| [model.js:3003](source/model.js.html#L3003) · funding | [AK-INF-01](TECHNICAL.html#ak-inf-01) | Execute bilateral business-to-civic funding or withdrawal choices with actual private money. Dependence can change editorial conditions without mechanically buying compliance or funding public implementation. |
| [model.js:3092](source/model.js.html#L3092) · changeEmployment | [AK-ORG-02](TECHNICAL.html#ak-org-02), [AK-ECO-01](TECHNICAL.html#ak-eco-01) | Move a person’s primary role/workplace membership while preserving identity, home, resources, history and ties. Count rotation only for an actual official-to-official organizational transfer. |
| [model.js:3117](source/model.js.html#L3117) · organizations | [AK-ORG-02](TECHNICAL.html#ak-org-02) | Process constrained affiliation requests and periodic staffing/rotation. Requests with due=next month are still processed only at six-month organizational reviews, a documented effective delay. |
| [model.js:3317](source/model.js.html#L3317) · politicalReview | [AK-REF-04](TECHNICAL.html#ak-ref-04), [AK-GOV-01](TECHNICAL.html#ak-gov-01) | Aggregate perceived conduct and affinity through the configured simplified election/appointment procedure. Update authority while retaining identity and history; this is not a national electoral forecast. |
| [model.js:3435](source/model.js.html#L3435) · recover | [AK-ACT-02](TECHNICAL.html#ak-act-02) | Change the display state only after both the six-month no-new-act interval and three genuine completed integrity choices. The underlying conduct record and other agents’ reputations persist. |
| [model.js:3449](source/model.js.html#L3449) · step | [AK-OV-01](TECHNICAL.html#ak-ov-01), [AK-VAL-01](TECHNICAL.html#ak-val-01) | Execute the authoritative monthly order. Moving a call here can alter both causal timing and random-key identity even if each submodel remains individually correct. |
| [model.js:3477](source/model.js.html#L3477) · classActivity | [AK-ACT-02](TECHNICAL.html#ak-act-02) | Summarize current-role agents’ last-24 meaningful opportunities. The denominator includes recorded attempted/uncompleted opportunities and is distinct from the common-encounter impact denominator. |
| [model.js:3495](source/model.js.html#L3495) · macroDevelopments | [AK-MAC-01](TECHNICAL.html#ak-mac-01) | Observe consequential treasury/service/pay, institution, public-disclosure and repeated-abuse developments. Notification thresholds do not themselves impose an extra behavioral corruption coefficient. |
| [model.js:3589](source/model.js.html#L3589) · find | [AK-MAC-01](TECHNICAL.html#ak-mac-01) | Owned by macroDevelopments; consult the linked technical rule and full function body. |
| [model.js:3653](source/model.js.html#L3653) · metrics | [AK-MAC-01](TECHNICAL.html#ak-mac-01) | Read cumulative process counters and current collective states. A transfer, backlog stock, completed waiting total and true-conduct rate have different interpretations and must not be added as one welfare score. |
| [model.js:3680](source/model.js.html#L3680) · record | [AK-MEA-03](TECHNICAL.html#ak-mea-03) | Append ordinary metrics and an observation-sidecar snapshot after all monthly processes. Recording is passive; do not let reporting consume RNG or alter actors/accounts. |
| [model.js:3688](source/model.js.html#L3688) · reporting | [AK-MEA-03](TECHNICAL.html#ak-mea-03) | Expose the observation-only sidecar separately from the complaint report() method and simulation state. Initial-state/save compatibility remains governed by behavioral schema2.4. |
| [model.js:3695](source/model.js.html#L3695) · diagnostic | [AK-MEA-01](TECHNICAL.html#ak-mea-01) | Calculate explicitly labeled fixed-reference capability proxies or special realized indicators. This does not run independent empirical tests of institutions or consume simulation randomness. |
| [model.js:3832](source/model.js.html#L3832) · assessment | [AK-MEA-01](TECHNICAL.html#ak-mea-01) | Collect the twelve legacy diagnostic definitions. New reporting overrides for rolling merit/protection/penalty cohorts are a distinct documented readout path. |
| [model.js:3839](source/model.js.html#L3839) · influential | [AK-VIS-02](TECHNICAL.html#ak-vis-02) | Rank weighted network degree plus control/leadership leverage and retain eight people for detailed inspection. This is a heuristic power/centrality proxy, not all-pairs centrality. |
| [model.js:3866](source/model.js.html#L3866) · view | [AK-VIS-02](TECHNICAL.html#ak-vis-02) | Prepare a display payload with all people but detailed traits/traces only for highlighted actors. Keep display transformations separate from state; completion exports fuller records. |
| [model.js:3951](source/model.js.html#L3951) · run | [AK-OV-01](TECHNICAL.html#ak-ov-01), [AK-VAL-01](TECHNICAL.html#ak-val-01) | Advance until the configured duration using the same step() implementation. No alternative batch behavior or stochastic shortcut is introduced. |
| [model.js:3959](source/model.js.html#L3959) · snapshot | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Serialize simulation state, excluding observation and UI sidecars. Used to verify exact replay, import identity and documentation-only non-mutation. |
| [model.js:3966](source/model.js.html#L3966) · assertInvariants | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Fail loudly on population, balances, money conservation, staff double spending or invalid bounded profiles/history. These checks establish engineering consistency, not country realism. |
| [model.js:4003](source/model.js.html#L4003) · comparison | [AK-MEA-02](TECHNICAL.html#ak-mea-02) | Compare reform and baseline rate/quantity indicators with their own denominators. A null denominator remains unavailable; package impacts do not imply individual tool attribution. |
| [model.js:4009](source/model.js.html#L4009) · rate | [AK-MEA-02](TECHNICAL.html#ak-mea-02) | Owned by comparison; consult the linked technical rule and full function body. |

## adaptation.js

| Unit / line | Mechanism references | Developer note |
| --- | --- | --- |
| [adaptation.js:13](source/adaptation.js.html#L13) · clamp | [AK-ADP-01](TECHNICAL.html#ak-adp-01), [AK-ADP-02](TECHNICAL.html#ak-adp-02) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.js:175](source/adaptation.js.html#L175) · initialize | [AK-POP-02](TECHNICAL.html#ak-pop-02), [AK-ADP-01](TECHNICAL.html#ak-adp-01) | Construct each person’s stored trait baselines, current traits, expectations, motive anchors and learning memories using separate keyed draws. |
| [adaptation.js:205](source/adaptation.js.html#L205) · recentParticipation | [AK-POP-02](TECHNICAL.html#ak-pop-02) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.js:213](source/adaptation.js.html#L213) · receptiveness | [AK-ADP-01](TECHNICAL.html#ak-adp-01) | Compute component-specific uptake and conditional strength from actual individual traits, motives, knowledge, trust and own history. Credibility controls uptake; delivery quality later controls dose. |
| [adaptation.js:237](source/adaptation.js.html#L237) · feedback | [AK-ADP-01](TECHNICAL.html#ak-adp-01) | Record bounded experienced/enacted salience and credibility feedback used for slow future adaptation; no conduct classification occurs here. |
| [adaptation.js:251](source/adaptation.js.html#L251) · observe | [AK-ADP-02](TECHNICAL.html#ak-adp-02) | Deduplicate substantive episodes, draw uptake and magnitude separately, and apply declining new-learning caps plus bounded restoration. Rejected delivery still advances the exposure counter; it is not successful learning. |
| [adaptation.js:331](source/adaptation.js.html#L331) · influence | [AK-ADP-02](TECHNICAL.html#ak-adp-02) | Sum retained eligible component levels and targets, applying context gates and cross-policy bounds. A non-targeted component must not receive a generic bonus. |
| [adaptation.js:367](source/adaptation.js.html#L367) · refresh | [AK-ADP-02](TECHNICAL.html#ak-adp-02) | Refresh derived knowledge/accountability expectations from retained memories without double-counting generic gains. |
| [adaptation.js:378](source/adaptation.js.html#L378) · knowledge | [AK-ADP-01](TECHNICAL.html#ak-adp-01) | Read context-specific usable knowledge from baseline and retained component influence. Reporting-channel instructions are not universal knowledge for unrelated conduct. |
| [adaptation.js:387](source/adaptation.js.html#L387) · safety | [AK-ADP-01](TECHNICAL.html#ak-adp-01) | Read subjective reporting safety from experienced baseline and retained target-specific learning. Do not replace it with omniscient true protection capacity. |
| [adaptation.js:396](source/adaptation.js.html#L396) · accountability | [AK-CAS-03](TECHNICAL.html#ak-cas-03) | Learn from one personally experienced or accessed announced decision with bounded prior-relative targets. Deduplication and forgetting limits are explicit and do not reveal hidden truth. |
| [adaptation.js:419](source/adaptation.js.html#L419) · advance | [AK-MOT-01](TECHNICAL.html#ak-mot-01), [AK-ADP-02](TECHNICAL.html#ak-adp-02), [AK-ADP-03](TECHNICAL.html#ak-adp-03) | Apply wear-off, bounded trait/motive evolution and ordinary risk relaxation exactly once per elapsed month. Never erase conduct or restore an integrity icon through this learning update. |
| [adaptation.js:457](source/adaptation.js.html#L457) · work | [AK-ADP-03](TECHNICAL.html#ak-adp-03) | Improve skill only through performed work, with a ceiling relative to initial skill. This is not an instant expertise gain from selecting a policy. |
| [adaptation.js:470](source/adaptation.js.html#L470) · incomeExperience | [AK-ADP-03](TECHNICAL.html#ak-adp-03) | Learn expected lawful receipts from one actual monthly observation, including supplements. It is separate from measured unmet-needs pressure and from new money creation. |
| [adaptation.js:480](source/adaptation.js.html#L480) · messageRate | [AK-INF-02](TECHNICAL.html#ak-inf-02) | Scale accessed information by credibility and the recipient’s openness/learning. This does not guarantee acceptance of a true or false claim. |
| [adaptation.js:490](source/adaptation.js.html#L490) · context | [AK-DEC-01](TECHNICAL.html#ak-dec-01) | Map action names to the policy-learning contexts actually used by decision(). A new action name needs an explicit context review. |
| [adaptation.js:503](source/adaptation.js.html#L503) · decision | [AK-DEC-01](TECHNICAL.html#ak-dec-01), [AK-ADP-02](TECHNICAL.html#ak-adp-02) | Adjust only the relevant attitude, norm and feasibility elements for the specific option/context. Actual resources, consent and law are still checked by the engine after intention. |
| [adaptation.js:521](source/adaptation.js.html#L521) · summary | [AK-POP-02](TECHNICAL.html#ak-pop-02) | Export interpretable numerical traits, retained influences and exposure histories for inspection. Summary values are model traits rather than validated psychological scores. |
| [adaptation.js:546](source/adaptation.js.html#L546) · valid | [AK-POP-02](TECHNICAL.html#ak-pop-02) | Validate complete stored numerical psychology, memories and bounds for initial/final profiles. |
| [adaptation.js:620](source/adaptation.js.html#L620) · validSummary | [AK-POP-02](TECHNICAL.html#ak-pop-02) | Validate the smaller inspection-summary structure accepted in completed saved results. |
| [adaptation.js:624](source/adaptation.js.html#L624) · unit | [AK-POP-02](TECHNICAL.html#ak-pop-02) | Owned by validSummary; consult the linked technical rule and full function body. |

## reporting.js

| Unit / line | Mechanism references | Developer note |
| --- | --- | --- |
| [reporting.js:34](source/reporting.js.html#L34) · clone | [AK-MEA-03](TECHNICAL.html#ak-mea-03), [AK-MEA-04](TECHNICAL.html#ak-mea-04) | Owned by module; consult the linked technical rule and full function body. |
| [reporting.js:35](source/reporting.js.html#L35) · sum | [AK-MEA-03](TECHNICAL.html#ak-mea-03), [AK-MEA-04](TECHNICAL.html#ak-mea-04) | Owned by module; consult the linked technical rule and full function body. |
| [reporting.js:36](source/reporting.js.html#L36) · mean | [AK-MEA-03](TECHNICAL.html#ak-mea-03), [AK-MEA-04](TECHNICAL.html#ak-mea-04) | Owned by module; consult the linked technical rule and full function body. |
| [reporting.js:175](source/reporting.js.html#L175) · finite | [AK-MEA-03](TECHNICAL.html#ak-mea-03), [AK-MEA-04](TECHNICAL.html#ak-mea-04) | Owned by module; consult the linked technical rule and full function body. |
| [reporting.js:176](source/reporting.js.html#L176) · pct | [AK-MEA-03](TECHNICAL.html#ak-mea-03), [AK-MEA-04](TECHNICAL.html#ak-mea-04) | Owned by module; consult the linked technical rule and full function body. |
| [reporting.js:181](source/reporting.js.html#L181) · activity | [AK-MEA-03](TECHNICAL.html#ak-mea-03) | Accumulate an actual delivered process hook only; selecting a policy or inspecting a panel cannot create output. |
| [reporting.js:188](source/reporting.js.html#L188) · init | [AK-MEA-03](TECHNICAL.html#ak-mea-03) | Capture conditions before adopt() and inherit the separately archived pre-policy observations. Keep the monitor outside state and separate from the complaint report() method. |
| [reporting.js:215](source/reporting.js.html#L215) · remember | [AK-INI-01](TECHNICAL.html#ak-ini-01), [AK-MEA-03](TECHNICAL.html#ak-mea-03) | Cache a cloned pre-policy observation archive keyed to the starting society without changing its serialized state. |
| [reporting.js:224](source/reporting.js.html#L224) · counterAt | [AK-MEA-03](TECHNICAL.html#ak-mea-03) | Owned by module; consult the linked technical rule and full function body. |
| [reporting.js:232](source/reporting.js.html#L232) · recent | [AK-MEA-03](TECHNICAL.html#ak-mea-03) | Owned by module; consult the linked technical rule and full function body. |
| [reporting.js:243](source/reporting.js.html#L243) · sample | [AK-MEA-01](TECHNICAL.html#ak-mea-01), [AK-MEA-03](TECHNICAL.html#ak-mea-03) | Read all policy-specific snapshot conditions and explicitly defined outcomes. Estimated capability, rolling realized ratios and matured violation cohorts remain distinct. |
| [reporting.js:253](source/reporting.js.html#L253) · pool | [AK-MEA-01](TECHNICAL.html#ak-mea-01), [AK-MEA-03](TECHNICAL.html#ak-mea-03) | Owned by sample; consult the linked technical rule and full function body. |
| [reporting.js:258](source/reporting.js.html#L258) · scope | [AK-MEA-01](TECHNICAL.html#ak-mea-01), [AK-MEA-03](TECHNICAL.html#ak-mea-03) | Owned by sample; consult the linked technical rule and full function body. |
| [reporting.js:263](source/reporting.js.html#L263) · cap | [AK-MEA-01](TECHNICAL.html#ak-mea-01), [AK-MEA-03](TECHNICAL.html#ak-mea-03) | Owned by sample; consult the linked technical rule and full function body. |
| [reporting.js:268](source/reporting.js.html#L268) · staff | [AK-MEA-01](TECHNICAL.html#ak-mea-01), [AK-MEA-03](TECHNICAL.html#ak-mea-03) | Owned by sample; consult the linked technical rule and full function body. |
| [reporting.js:311](source/reporting.js.html#L311) · relevant | [AK-MEA-01](TECHNICAL.html#ak-mea-01), [AK-MEA-03](TECHNICAL.html#ak-mea-03) | Owned by sample; consult the linked technical rule and full function body. |
| [reporting.js:404](source/reporting.js.html#L404) · related | [AK-MEA-03](TECHNICAL.html#ak-mea-03), [AK-MEA-04](TECHNICAL.html#ak-mea-04) | Owned by module; consult the linked technical rule and full function body. |
| [reporting.js:423](source/reporting.js.html#L423) · record | [AK-MEA-03](TECHNICAL.html#ak-mea-03) | Update passive counters/snapshots and a bounded real-event evidence index after the monthly world update. Protect important per-policy records from last-200 feed truncation. |
| [reporting.js:477](source/reporting.js.html#L477) · view | [AK-MEA-03](TECHNICAL.html#ak-mea-03) | Return the observation payload without recomputing actor decisions or consuming simulation draws. |
| [reporting.js:486](source/reporting.js.html#L486) · windowValue | [AK-MEA-03](TECHNICAL.html#ak-mea-03) | Subtract cumulative observed activities at equal month boundaries, including the inherited year. Never compare an opening queue stock with a year of activity or average unweighted monthly rates. |
| [reporting.js:505](source/reporting.js.html#L505) · outcomeMeta | [AK-MEA-01](TECHNICAL.html#ak-mea-01) | Name the rolling observed reporting overrides so they cannot be confused with the older aggregate diagnostic definitions. |
| [reporting.js:527](source/reporting.js.html#L527) · eventsFor | [AK-MEA-04](TECHNICAL.html#ak-mea-04) | Select existing records no later than the review month, prioritizing material implementation changes. Package impact uses the whole package independently of the policy selector; contextual connections do not identify causes. |
| [reporting.js:587](source/reporting.js.html#L587) · interpret | [AK-MEA-04](TECHNICAL.html#ak-mea-04) | Choose a predefined statement from measured levels/direction/missingness. Precision thresholds are not significance tests; no anecdote or causal explanation is generated from hidden assumptions. |
| [reporting.js:632](source/reporting.js.html#L632) · valid | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Validate optional saved observation histories, numeric fields, IDs and bounded event metadata. Absence in an older completed save is reported honestly rather than filled with invented data. |

## baseline.js

| Unit / line | Mechanism references | Developer note |
| --- | --- | --- |
| [baseline.js:13](source/baseline.js.html#L13) · clamp | [AK-COU-01](TECHNICAL.html#ak-cou-01) | Owned by module; consult the linked technical rule and full function body. |
| [baseline.js:54](source/baseline.js.html#L54) · sources | [AK-COU-01](TECHNICAL.html#ak-cou-01) | Owned by module; consult the linked technical rule and full function body. |
| [baseline.js:81](source/baseline.js.html#L81) · conditions | [AK-COU-01](TECHNICAL.html#ak-cou-01) | Rescale distinct dated political proxies and keep unmeasured cultural fields as explicit neutral editable assumptions. |
| [baseline.js:86](source/baseline.js.html#L86) · sum | [AK-COU-01](TECHNICAL.html#ak-cou-01) | Owned by conditions; consult the linked technical rule and full function body. |
| [baseline.js:100](source/baseline.js.html#L100) · organization | [AK-COU-01](TECHNICAL.html#ak-cou-01) | Map stored descriptors/narrow instrument observations to bounded provisional coverage/capability priors. Missing evidence is not absence of national safeguards. |
| [baseline.js:121](source/baseline.js.html#L121) · fieldStatus | [AK-VAL-02](TECHNICAL.html#ak-val-02) | Owned by module; consult the linked technical rule and full function body. |

## run-seeds.js

| Unit / line | Mechanism references | Developer note |
| --- | --- | --- |
| [run-seeds.js:15](source/run-seeds.js.html#L15) · newEventSeed | [AK-RNG-01](TECHNICAL.html#ak-rng-01) | Owned by module; consult the linked technical rule and full function body. |
| [run-seeds.js:30](source/run-seeds.js.html#L30) · prepareRun | [AK-RNG-01](TECHNICAL.html#ak-rng-01) | Preserve exact replay seeds when requested and otherwise assign a fresh future-event identity without redrawing the starting society. |

## visualization.js

| Unit / line | Mechanism references | Developer note |
| --- | --- | --- |
| [visualization.js:16](source/visualization.js.html#L16) · hash | [AK-MEA-02](TECHNICAL.html#ak-mea-02) | Owned by module; consult the linked technical rule and full function body. |
| [visualization.js:25](source/visualization.js.html#L25) · projection | [AK-VIS-01](TECHNICAL.html#ak-vis-01) | Compute deterministic analytical layout using conduct radius, affinity and bounded local collision/cooperation forces. Do not mutate physical locations or world randomness. |
| [visualization.js:140](source/visualization.js.html#L140) · importantEvents | [AK-VIS-02](TECHNICAL.html#ak-vis-02) | Owned by module; consult the linked technical rule and full function body. |
| [visualization.js:153](source/visualization.js.html#L153) · impactWindow | [AK-MEA-02](TECHNICAL.html#ak-mea-02) | Calculate interval counts before dividing, preserving each branch’s denominator. Missing observations return unavailable rather than manufactured zero. |
| [visualization.js:181](source/visualization.js.html#L181) · impactSeries | [AK-MEA-02](TECHNICAL.html#ak-mea-02) | Align paired months and their chosen rate windows. An absent corresponding observation cannot be treated as a zero-effect month. |
| [visualization.js:200](source/visualization.js.html#L200) · impactDifference | [AK-MEA-02](TECHNICAL.html#ak-mea-02) | Keep a tiny nonzero effect visible with three decimals or scientific notation; formatting precision is not empirical accuracy. |

## worker.js

| Unit / line | Mechanism references | Developer note |
| --- | --- | --- |
| [worker.js:31](source/worker.js.html#L31) · summary | [AK-OV-01](TECHNICAL.html#ak-ov-01) | Owned by module; consult the linked technical rule and full function body. |
| [worker.js:44](source/worker.js.html#L44) · makePair | [AK-OPS-01](TECHNICAL.html#ak-ops-01) | Construct reform and no-new-reform baseline from the exact same initialized state and replicate identity. |
| [worker.js:52](source/worker.js.html#L52) · send | [AK-OPS-01](TECHNICAL.html#ak-ops-01) | Owned by module; consult the linked technical rule and full function body. |
| [worker.js:72](source/worker.js.html#L72) · finishPair | [AK-OPS-01](TECHNICAL.html#ak-ops-01) | Check invariants, retain the first visible trajectory, export complete records and summarize repetitions. Simulation ranges are not empirical confidence intervals. |
| [worker.js:151](source/worker.js.html#L151) · advance | [AK-OPS-01](TECHNICAL.html#ak-ops-01) | Owned by module; consult the linked technical rule and full function body. |
| [worker.js:162](source/worker.js.html#L162) · pump | [AK-OPS-01](TECHNICAL.html#ak-ops-01) | Schedule bounded batches without changing monthly step order or random streams; pause/pace affect responsiveness only. |

## app.js

| Unit / line | Mechanism references | Developer note |
| --- | --- | --- |
| [app.js:17](source/app.js.html#L17) · $ | [AK-VIS-03](TECHNICAL.html#ak-vis-03), [AK-IO-01](TECHNICAL.html#ak-io-01) | Owned by module; consult the linked technical rule and full function body. |
| [app.js:22](source/app.js.html#L22) · esc | [AK-VIS-03](TECHNICAL.html#ak-vis-03), [AK-IO-01](TECHNICAL.html#ak-io-01) | Owned by module; consult the linked technical rule and full function body. |
| [app.js:31](source/app.js.html#L31) · number | [AK-VIS-03](TECHNICAL.html#ak-vis-03), [AK-IO-01](TECHNICAL.html#ak-io-01) | Owned by module; consult the linked technical rule and full function body. |
| [app.js:58](source/app.js.html#L58) · status | [AK-VIS-03](TECHNICAL.html#ak-vis-03) | Owned by module; consult the linked technical rule and full function body. |
| [app.js:66](source/app.js.html#L66) · profile | [AK-OV-01](TECHNICAL.html#ak-ov-01) | Owned by module; consult the linked technical rule and full function body. |
| [app.js:73](source/app.js.html#L73) · getConfig | [AK-VIS-03](TECHNICAL.html#ak-vis-03) | Read and validate draft setup independently of an active run. Source values, user overrides and initial/future seeds retain separate meanings. |
| [app.js:94](source/app.js.html#L94) · remember | [AK-VIS-03](TECHNICAL.html#ak-vis-03) | Owned by module; consult the linked technical rule and full function body. |
| [app.js:105](source/app.js.html#L105) · summaryText | [AK-OV-01](TECHNICAL.html#ak-ov-01) | Owned by module; consult the linked technical rule and full function body. |
| [app.js:132](source/app.js.html#L132) · pending | [AK-VIS-03](TECHNICAL.html#ak-vis-03) | Owned by module; consult the linked technical rule and full function body. |
| [app.js:149](source/app.js.html#L149) · buildPolicies | [AK-VIS-03](TECHNICAL.html#ak-vis-03) | Owned by module; consult the linked technical rule and full function body. |
| [app.js:181](source/app.js.html#L181) · countryFields | [AK-VIS-03](TECHNICAL.html#ak-vis-03) | Owned by module; consult the linked technical rule and full function body. |
| [app.js:261](source/app.js.html#L261) · applyConfig | [AK-VIS-03](TECHNICAL.html#ak-vis-03) | Owned by module; consult the linked technical rule and full function body. |
| [app.js:284](source/app.js.html#L284) · signature | [AK-INI-01](TECHNICAL.html#ak-ini-01) | Owned by module; consult the linked technical rule and full function body. |
| [app.js:291](source/app.js.html#L291) · initialFor | [AK-INI-01](TECHNICAL.html#ak-ini-01) | Owned by module; consult the linked technical rule and full function body. |
| [app.js:303](source/app.js.html#L303) · baseSummary | [AK-VIS-03](TECHNICAL.html#ak-vis-03) | Owned by module; consult the linked technical rule and full function body. |
| [app.js:316](source/app.js.html#L316) · preview | [AK-VIS-03](TECHNICAL.html#ak-vis-03) | Owned by module; consult the linked technical rule and full function body. |
| [app.js:335](source/app.js.html#L335) · stopWorker | [AK-OPS-01](TECHNICAL.html#ak-ops-01) | Owned by module; consult the linked technical rule and full function body. |
| [app.js:345](source/app.js.html#L345) · initializeWorker | [AK-OPS-01](TECHNICAL.html#ak-ops-01) | Start a fresh paired experiment and reset historical-review selection; use a new event seed unless exact replay was requested. |
| [app.js:398](source/app.js.html#L398) · start | [AK-OPS-01](TECHNICAL.html#ak-ops-01) | Owned by module; consult the linked technical rule and full function body. |
| [app.js:426](source/app.js.html#L426) · reset | [AK-OPS-01](TECHNICAL.html#ak-ops-01) | Owned by module; consult the linked technical rule and full function body. |
| [app.js:445](source/app.js.html#L445) · learningPanel | [AK-VIS-02](TECHNICAL.html#ak-vis-02) | Owned by module; consult the linked technical rule and full function body. |
| [app.js:504](source/app.js.html#L504) · inspector | [AK-VIS-02](TECHNICAL.html#ak-vis-02) | Explain why a highlighted actor matters and show recorded choices plus numerical learning. Perceived intentions and completed acts remain distinct. |
| [app.js:528](source/app.js.html#L528) · selectActor | [AK-VIS-02](TECHNICAL.html#ak-vis-02) | Owned by module; consult the linked technical rule and full function body. |
| [app.js:540](source/app.js.html#L540) · renderFeed | [AK-VIS-02](TECHNICAL.html#ak-vis-02) | Owned by module; consult the linked technical rule and full function body. |
| [app.js:579](source/app.js.html#L579) · drawMap | [AK-VIS-01](TECHNICAL.html#ak-vis-01) | Project observed conduct/affinity/network data for display without changing physical geography or simulation RNG. |
| [app.js:759](source/app.js.html#L759) · tinyComparison | [AK-VIS-03](TECHNICAL.html#ak-vis-03) | Owned by module; consult the linked technical rule and full function body. |
| [app.js:773](source/app.js.html#L773) · reportFormat | [AK-VIS-03](TECHNICAL.html#ak-vis-03) | Owned by module; consult the linked technical rule and full function body. |
| [app.js:784](source/app.js.html#L784) · reportEventButtons | [AK-VIS-02](TECHNICAL.html#ak-vis-02) | Owned by module; consult the linked technical rule and full function body. |
| [app.js:802](source/app.js.html#L802) · reportMeaning | [AK-MEA-04](TECHNICAL.html#ak-mea-04) | Insert an escaped predefined interpretation with at most two real linked records and expandable additional developments. |
| [app.js:821](source/app.js.html#L821) · reportChart | [AK-VIS-03](TECHNICAL.html#ak-vis-03) | Draw observational series and a shared review-month marker; impact uses paired difference against zero rather than an overlapping pair of cumulative curves. |
| [app.js:836](source/app.js.html#L836) · x | [AK-VIS-03](TECHNICAL.html#ak-vis-03) | Owned by reportChart; consult the linked technical rule and full function body. |
| [app.js:837](source/app.js.html#L837) · y | [AK-VIS-03](TECHNICAL.html#ak-vis-03) | Owned by reportChart; consult the linked technical rule and full function body. |
| [app.js:842](source/app.js.html#L842) · lines | [AK-VIS-03](TECHNICAL.html#ak-vis-03) | Owned by reportChart; consult the linked technical rule and full function body. |
| [app.js:907](source/app.js.html#L907) · showReportEvent | [AK-MEA-04](TECHNICAL.html#ak-mea-04) | Open an existing tracked record and its available updates in place, then highlight participants without rerunning the model. |
| [app.js:959](source/app.js.html#L959) · renderPolicyAssessment | [AK-VIS-03](TECHNICAL.html#ak-vis-03) | Connect one selected policy’s outputs/outcomes with the package impact, same-month baseline and fixed pre-adoption snapshot. Rendering must remain passive and preserve the real measurement windows. |
| [app.js:1265](source/app.js.html#L1265) · renderAssessment | [AK-VIS-03](TECHNICAL.html#ak-vis-03) | Coordinate the new stage panels with expandable full-package quantities and repetition summaries. Package totals remain separate from tool-specific conditions. |
| [app.js:1359](source/app.js.html#L1359) · renderReplications | [AK-VIS-03](TECHNICAL.html#ak-vis-03) | Owned by module; consult the linked technical rule and full function body. |
| [app.js:1412](source/app.js.html#L1412) · selectedImpact | [AK-VIS-03](TECHNICAL.html#ak-vis-03) | Owned by module; consult the linked technical rule and full function body. |
| [app.js:1421](source/app.js.html#L1421) · drawImpact | [AK-VIS-03](TECHNICAL.html#ak-vis-03) | Owned by module; consult the linked technical rule and full function body. |
| [app.js:1442](source/app.js.html#L1442) · label | [AK-VIS-03](TECHNICAL.html#ak-vis-03) | Owned by drawImpact; consult the linked technical rule and full function body. |
| [app.js:1451](source/app.js.html#L1451) · render | [AK-VIS-03](TECHNICAL.html#ak-vis-03) | Owned by module; consult the linked technical rule and full function body. |
| [app.js:1594](source/app.js.html#L1594) · openDB | [AK-IO-01](TECHNICAL.html#ak-io-01) | Owned by module; consult the linked technical rule and full function body. |
| [app.js:1614](source/app.js.html#L1614) · storeAction | [AK-IO-01](TECHNICAL.html#ak-io-01) | Persist named scenarios on device with IndexedDB and localStorage fallback, reporting failures instead of silently promising durable storage. |
| [app.js:1660](source/app.js.html#L1660) · refreshSaves | [AK-IO-01](TECHNICAL.html#ak-io-01) | Owned by module; consult the linked technical rule and full function body. |
| [app.js:1676](source/app.js.html#L1676) · payload | [AK-IO-01](TECHNICAL.html#ak-io-01) | Serialize setup, exact initial society and matching completed results. This is a scenario/result backup, not an in-flight checkpoint. |
| [app.js:1693](source/app.js.html#L1693) · validatePayload | [AK-IO-01](TECHNICAL.html#ak-io-01) | Validate untrusted JSON data and preserve exact starting-state identity; never execute imported content. Monitoring is optional for older2.4 results but checked when supplied. |
| [app.js:1792](source/app.js.html#L1792) · loadPayload | [AK-IO-01](TECHNICAL.html#ak-io-01) | Stop execution, reset review state and load for inspection only. Existing completed results do not gain missing monitoring data without a rerun. |
| [app.js:1821](source/app.js.html#L1821) · download | [AK-IO-01](TECHNICAL.html#ak-io-01) | Owned by module; consult the linked technical rule and full function body. |
| [app.js:1834](source/app.js.html#L1834) · csv | [AK-IO-01](TECHNICAL.html#ak-io-01) | Escape CSV values and guard formula-like string cells. CSV quantities retain their named units and are not a substitute for the full JSON state. |
| [app.js:1859](source/app.js.html#L1859) · showStorage | [AK-IO-01](TECHNICAL.html#ak-io-01) | Owned by module; consult the linked technical rule and full function body. |

## adaptation.test.js

| Unit / line | Mechanism references | Developer note |
| --- | --- | --- |
| [adaptation.test.js:16](source/adaptation.test.js.html#L16) · config | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.test.js:27](source/adaptation.test.js.html#L27) · simulation | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.test.js:32](source/adaptation.test.js.html#L32) · clone | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.test.js:37](source/adaptation.test.js.html#L37) · receptive | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.test.js:46](source/adaptation.test.js.html#L46) · maximal | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.test.js:51](source/adaptation.test.js.html#L51) · deliver | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.test.js:63](source/adaptation.test.js.html#L63) · operate | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.test.js:75](source/adaptation.test.js.html#L75) · test: all twelve policy mappings are explicit, distinct and leave untargeted elements absent | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.test.js:92](source/adaptation.test.js.html#L92) · test: profiles contain reproducible numerical susceptibility traits without redrawing other traits | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.test.js:107](source/adaptation.test.js.html#L107) · test: selecting education or funding a still-uninstalled programme cannot teach an agent | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.test.js:124](source/adaptation.test.js.html#L124) · test: receptiveness responds to source trust, individual traits, motives and own history | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.test.js:143](source/adaptation.test.js.html#L143) · test: uptake and conditional influence are distinct random draws | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.test.js:162](source/adaptation.test.js.html#L162) · test: repeat exposure caps diminish and are shared across organizational sources | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.test.js:177](source/adaptation.test.js.html#L177) · test: thousands of fully delivered exposures stay below per-policy and per-element ceilings | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.test.js:196](source/adaptation.test.js.html#L196) · test: wear-off changes retained influence without resetting exposure history or lifetime conduct | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.test.js:215](source/adaptation.test.js.html#L215) · test: reinforcement can restore lost influence after novelty is exhausted without raising the ceiling | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.test.js:232](source/adaptation.test.js.html#L232) · test: retention traits change decay rather than the original influence cap | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.test.js:257](source/adaptation.test.js.html#L257) · test: history and environment slowly change actual motives and traits while preserving positive weights | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.test.js:277](source/adaptation.test.js.html#L277) · test: professional skill changes with performed work and cannot jump or erase expertise | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.test.js:294](source/adaptation.test.js.html#L294) · test: education reaches attitude, norm and control in actual choices, keeping the nine interests | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.test.js:327](source/adaptation.test.js.html#L327) · test: a penalty exposure changes perceived cost once without adding attitude/norm/control bonuses | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.test.js:344](source/adaptation.test.js.html#L344) · test: report-channel knowledge and control are specific to reporting contexts | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.test.js:358](source/adaptation.test.js.html#L358) · test: identical exposure draws reproduce profiles and independent draws yield different histories | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.test.js:366](source/adaptation.test.js.html#L366) · rng | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.test.js:394](source/adaptation.test.js.html#L394) · test: skill learning feeds real subsequent organizational capacity | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.test.js:409](source/adaptation.test.js.html#L409) · test: a known inactive or suspended reform stops new exposures while memories can wear off | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.test.js:424](source/adaptation.test.js.html#L424) · test: continuous reinforcement over 1,200 months retains partial bounded influence | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.test.js:442](source/adaptation.test.js.html#L442) · test: financial expectations learn from actual total receipts with individual learning rates | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.test.js:459](source/adaptation.test.js.html#L459) · test: a later change in receptiveness can permit modest new learning after repeated rejected messages | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.test.js:477](source/adaptation.test.js.html#L477) · test: conflicting credible experience adjusts the retained target without deleting earlier history | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.test.js:490](source/adaptation.test.js.html#L490) · test: a corrupt staffing proposal prevented by real merit review is not a completed patronage act | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.test.js:509](source/adaptation.test.js.html#L509) · test: formal education adoption cannot manufacture knowledge before anyone learns | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.test.js:524](source/adaptation.test.js.html#L524) · test: knowledge assessment responds continuously to retained learning and subsequent wear-off | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.test.js:541](source/adaptation.test.js.html#L541) · test: agents do not read hidden true protection capacity when deciding whether to report | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.test.js:562](source/adaptation.test.js.html#L562) · option | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.test.js:572](source/adaptation.test.js.html#L572) · test: experienced protection and credible failure change subjective safety in opposite directions | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [adaptation.test.js:589](source/adaptation.test.js.html#L589) · test: inspection summaries stay numerical and reject malformed imported learning histories | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |

## audit.test.js

| Unit / line | Mechanism references | Developer note |
| --- | --- | --- |
| [audit.test.js:15](source/audit.test.js.html#L15) · config | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [audit.test.js:26](source/audit.test.js.html#L26) · sim | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [audit.test.js:31](source/audit.test.js.html#L31) · clone | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [audit.test.js:36](source/audit.test.js.html#L36) · pair | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [audit.test.js:45](source/audit.test.js.html#L45) · test: country overrides preserve underlying person draws while reconstructed histories can respond | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [audit.test.js:51](source/audit.test.js.html#L51) · traits | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [audit.test.js:79](source/audit.test.js.html#L79) · test: all nine consequence dimensions can independently affect the utility choice | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [audit.test.js:100](source/audit.test.js.html#L100) · test: implemented encounter consequences distinguish social, economic and political domains | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [audit.test.js:120](source/audit.test.js.html#L120) · test: directional trust changes only the intended direction and zero ties confer no access | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [audit.test.js:150](source/audit.test.js.html#L150) · test: affinity changes contact routing while locations and random keys stay fixed | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [audit.test.js:179](source/audit.test.js.html#L179) · test: individual staff competence contributes to effective organizational capacity | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [audit.test.js:196](source/audit.test.js.html#L196) · test: financial security changes subjective economic gains without knowledge of hidden corruption | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [audit.test.js:211](source/audit.test.js.html#L211) · test: verification of covered personal declarations affects audit detection | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [audit.test.js:248](source/audit.test.js.html#L248) · test: zero legal scrutiny scope prevents audit detection despite trained capacity | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [audit.test.js:276](source/audit.test.js.html#L276) · test: penalty collection capacity changes actual transferred resources after the same decision | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [audit.test.js:311](source/audit.test.js.html#L311) · test: policy ordering follows actor priorities independently of menu/storage order | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [audit.test.js:336](source/audit.test.js.html#L336) · values | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [audit.test.js:351](source/audit.test.js.html#L351) · test: experienced waiting changes support and perceived access without inventing corruption information | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [audit.test.js:376](source/audit.test.js.html#L376) · test: resource-review utility responds to experienced stakeholder support | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [audit.test.js:394](source/audit.test.js.html#L394) · score | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [audit.test.js:405](source/audit.test.js.html#L405) · test: social sharing uses receiver trust and ignores zero-strength links | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [audit.test.js:421](source/audit.test.js.html#L421) · test: editorial independence and real funding dependence enter publication incentives | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [audit.test.js:456](source/audit.test.js.html#L456) · test: recent participation denominators remain bounded and inactivity cannot erase history | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [audit.test.js:485](source/audit.test.js.html#L485) · test: a dense network alone does not produce a capture event; repeated abuse is required | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [audit.test.js:511](source/audit.test.js.html#L511) · test: country mandates change real referrals without merging investigation, prosecution and courts | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [audit.test.js:538](source/audit.test.js.html#L538) · test: out-of-scope audits cannot create false allegations through a false-positive draw | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |

## dynamics.test.js

| Unit / line | Mechanism references | Developer note |
| --- | --- | --- |
| [dynamics.test.js:17](source/dynamics.test.js.html#L17) · sim | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [dynamics.test.js:18](source/dynamics.test.js.html#L18) · clone | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [dynamics.test.js:23](source/dynamics.test.js.html#L23) · opportunity | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [dynamics.test.js:38](source/dynamics.test.js.html#L38) · test: a one-option duty and repeated calls without a new choice cannot inflate integrity or recovery | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [dynamics.test.js:73](source/dynamics.test.js.html#L73) · test: failed or deferred intentions do not become completed integrity choices | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [dynamics.test.js:87](source/dynamics.test.js.html#L87) · test: twenty waiting requests have one bounded monthly effect on trust and control | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [dynamics.test.js:114](source/dynamics.test.js.html#L114) · test: waiting is accumulated as request-months, without inventing new service contacts or recounting it at completion | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [dynamics.test.js:144](source/dynamics.test.js.html#L144) · test: living-needs priors share the earnings scale and retain heterogeneous financial pressure | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [dynamics.test.js:162](source/dynamics.test.js.html#L162) · test: uncollected adjudicated liability persists, and subsequent collection transfers real money once | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [dynamics.test.js:216](source/dynamics.test.js.html#L216) · test: personally experienced and communicated accountability updates are bounded, deduplicated and reversible over time | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [dynamics.test.js:238](source/dynamics.test.js.html#L238) · test: higher perceived accountability changes actual utility choices under identical event draws | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [dynamics.test.js:271](source/dynamics.test.js.html#L271) · test: reference disapproval can transmit an expectation instead of every lawful interaction manufacturing approval | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [dynamics.test.js:292](source/dynamics.test.js.html#L292) · test: network layout spreads the healthy disc while preserving participation bands, default integrity and physical geography | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [dynamics.test.js:313](source/dynamics.test.js.html#L313) · test: coercive ties cannot attract victims as though they indicated affinity or voluntary cooperation | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [dynamics.test.js:324](source/dynamics.test.js.html#L324) · test: a public decision has one cost-learning pathway and cannot replay an already personally experienced sanction | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [dynamics.test.js:348](source/dynamics.test.js.html#L348) · test: pay adequacy assesses modeled take-home receipts rather than gross receipts | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [dynamics.test.js:362](source/dynamics.test.js.html#L362) · test: saved-state verification accepts key order and insignificant floating rounding while rejecting substantive edits | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |

## initialization.test.js

| Unit / line | Mechanism references | Developer note |
| --- | --- | --- |
| [initialization.test.js:18](source/initialization.test.js.html#L18) · config | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [initialization.test.js:23](source/initialization.test.js.html#L23) · test: political defaults use sourced country scores and keep unmeasured culture explicit | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [initialization.test.js:46](source/initialization.test.js.html#L46) · test: instrument-specific observations inform bounded estimates without treating missing criteria as no safeguards | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [initialization.test.js:65](source/initialization.test.js.html#L65) · test: the pre-policy year executes all twelve months, with eligible actors throughout | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [initialization.test.js:85](source/initialization.test.js.html#L85) · test: month zero has coherent conduct, ongoing work, cross-class ties and behavior-derived map positions | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [initialization.test.js:113](source/initialization.test.js.html#L113) · test: pre-policy history is independent of reform, duration, repetitions and future-event seeds | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [initialization.test.js:136](source/initialization.test.js.html#L136) · test: a saved reconstructed snapshot is accepted exactly and rejects edited histories and old starts | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [initialization.test.js:155](source/initialization.test.js.html#L155) · test: inherited casework advances across adoption without duplicate IDs, invalid clocks or lost money | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |

## model.test.js

| Unit / line | Mechanism references | Developer note |
| --- | --- | --- |
| [model.test.js:17](source/model.test.js.html#L17) · config | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [model.test.js:30](source/model.test.js.html#L30) · test: ten country societies: 1,000 people, overlapping motives, independent support and membership | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [model.test.js:51](source/model.test.js.html#L51) · test: reform selection, mobilization, duration and future-event seed do not regenerate the initial society | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [model.test.js:67](source/model.test.js.html#L67) · test: paired no-new-reform branches are identical; repetitions share state but subsequent events differ | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [model.test.js:81](source/model.test.js.html#L81) · test: diagnostics, rendering and actor inspection do not mutate state or random events | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [model.test.js:101](source/model.test.js.html#L101) · test: each country conserves resources and shared time with all twelve reforms | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [model.test.js:124](source/model.test.js.html#L124) · test: initial zero mobilization is persistent until a review; full funding does not install capacity immediately | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [model.test.js:139](source/model.test.js.html#L139) · test: single act switches display; inactivity cannot recover; six months and three meaningful choices can | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [model.test.js:175](source/model.test.js.html#L175) · test: coercion records the official as perpetrator without marking the victim corrupt | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [model.test.js:201](source/model.test.js.html#L201) · test: unaccepted corrupt proposals are not counted as integrity by the proposer | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [model.test.js:223](source/model.test.js.html#L223) · test: employment transitions retain identity, money, history, home and existing ties | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [model.test.js:240](source/model.test.js.html#L240) · test: China uses personnel appointment; civil and criminal functions remain distinct | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [model.test.js:264](source/model.test.js.html#L264) · test: case deduplication and policy costs are explicit; diagnostics use observed denominators | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [model.test.js:287](source/model.test.js.html#L287) · test: reject invalid scenario settings | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [model.test.js:310](source/model.test.js.html#L310) · test: serialized initial society is structurally verified and retained without regeneration | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |

## reporting.test.js

| Unit / line | Mechanism references | Developer note |
| --- | --- | --- |
| [reporting.test.js:23](source/reporting.test.js.html#L23) · config | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [reporting.test.js:34](source/reporting.test.js.html#L34) · clone | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [reporting.test.js:39](source/reporting.test.js.html#L39) · test: all twelve tools have distinct output definitions and relevant starting conditions | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [reporting.test.js:61](source/reporting.test.js.html#L61) · test: policy starting snapshots precede formal adoption and remain fixed during the run | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [reporting.test.js:75](source/reporting.test.js.html#L75) · test: recording and interpretation do not consume RNG or change the simulated society | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [reporting.test.js:97](source/reporting.test.js.html#L97) · test: same published engine produces identical initialization and conduct with monitoring enabled | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [reporting.test.js:123](source/reporting.test.js.html#L123) · test: output uses weighted actual activity over equal historical windows | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [reporting.test.js:143](source/reporting.test.js.html#L143) · test: delivered teaching is distinct from accepted influence and duplicate contacts | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [reporting.test.js:164](source/reporting.test.js.html#L164) · test: generic activity does not get credited as a staff rotation | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [reporting.test.js:179](source/reporting.test.js.html#L179) · test: read-only event references are relevant, dated and distinguish material changes | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [reporting.test.js:245](source/reporting.test.js.html#L245) · test: interpretations handle delivery, lag, missing evidence and direction without claiming causation | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [reporting.test.js:264](source/reporting.test.js.html#L264) · test: optional monitoring roundtrips without changing initial-state compatibility and rejects malformed records | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [reporting.test.js:292](source/reporting.test.js.html#L292) · harness | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [reporting.test.js:298](source/reporting.test.js.html#L298) · $ | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by harness; consult the linked technical rule and full function body. |
| [reporting.test.js:325](source/reporting.test.js.html#L325) · esc | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by harness; consult the linked technical rule and full function body. |
| [reporting.test.js:330](source/reporting.test.js.html#L330) · number | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by harness; consult the linked technical rule and full function body. |
| [reporting.test.js:367](source/reporting.test.js.html#L367) · test: all twelve policy renderings show relevant before/current conditions and stage panels | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [reporting.test.js:404](source/reporting.test.js.html#L404) · test: completion updates the final comparison and review slider without changing results | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [reporting.test.js:431](source/reporting.test.js.html#L431) · test: older saved results get an honest monitoring-unavailable notice | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |

## run-seeds.test.js

| Unit / line | Mechanism references | Developer note |
| --- | --- | --- |
| [run-seeds.test.js:22](source/run-seeds.test.js.html#L22) · test: new runs get distinct event identities without modifying settings or society | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [run-seeds.test.js:27](source/run-seeds.test.js.html#L27) · fill | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [run-seeds.test.js:48](source/run-seeds.test.js.html#L48) · test: explicit exact replay consumes no new entropy and reproduces the entire event history | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [run-seeds.test.js:62](source/run-seeds.test.js.html#L62) · test: fresh event seeds retain matching baseline/reform randomness and separate initialization | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |

## stress.test.js

| Unit / line | Mechanism references | Developer note |
| --- | --- | --- |
| [stress.test.js:15](source/stress.test.js.html#L15) · test: Peru ACA completes maximum 240-month duration with finite and conserved state | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [stress.test.js:35](source/stress.test.js.html#L35) · test: all-country extreme conditions retain valid resources, workload and decision utilities | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |

## visualization.test.js

| Unit / line | Mechanism references | Developer note |
| --- | --- | --- |
| [visualization.test.js:17](source/visualization.test.js.html#L17) · fixture | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [visualization.test.js:22](source/visualization.test.js.html#L22) · test: impact preserves the small nonzero difference from the reported run | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [visualization.test.js:43](source/visualization.test.js.html#L43) · test: recent impact uses weighted encounter counts at matching month boundaries | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [visualization.test.js:66](source/visualization.test.js.html#L66) · test: recent paired impact respects each branch denominator and never mutates history | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [visualization.test.js:89](source/visualization.test.js.html#L89) · test: analytical projection preserves behavior radii when affinity and cooperation change | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [visualization.test.js:113](source/visualization.test.js.html#L113) · test: new meaningful choices change radial position; elapsed time and role do not | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [visualization.test.js:144](source/visualization.test.js.html#L144) · test: major event filter excludes routine case traffic without discarding the full log | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [visualization.test.js:159](source/visualization.test.js.html#L159) · test: entrypoint loads consistent versions and all UI hooks including arbitrary whole-month duration | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [visualization.test.js:180](source/visualization.test.js.html#L180) · test: startup map and class rates use completed choices from the reconstructed past | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |

## worker.test.js

| Unit / line | Mechanism references | Developer note |
| --- | --- | --- |
| [worker.test.js:17](source/worker.test.js.html#L17) · runtime | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [worker.test.js:24](source/worker.test.js.html#L24) · handler | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by runtime; consult the linked technical rule and full function body. |
| [worker.test.js:61](source/worker.test.js.html#L61) · test: worker step/pause retains paired months and does not automatically run after initialization | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [worker.test.js:83](source/worker.test.js.html#L83) · test: worker completes five paired repetitions and keeps the first reform trajectory for review | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [worker.test.js:117](source/worker.test.js.html#L117) · test: invalid worker initialization returns a useful error | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |

## scripts/audit-lib.mjs

| Unit / line | Mechanism references | Developer note |
| --- | --- | --- |
| [scripts/audit-lib.mjs:6](source/scripts__audit-lib.mjs.html#L6) · testFiles | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [scripts/audit-lib.mjs:7](source/scripts__audit-lib.mjs.html#L7) · sha | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [scripts/audit-lib.mjs:8](source/scripts__audit-lib.mjs.html#L8) · read | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [scripts/audit-lib.mjs:9](source/scripts__audit-lib.mjs.html#L9) · parse | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [scripts/audit-lib.mjs:11](source/scripts__audit-lib.mjs.html#L11) · canonical | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [scripts/audit-lib.mjs:19](source/scripts__audit-lib.mjs.html#L19) · semanticHash | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [scripts/audit-lib.mjs:20](source/scripts__audit-lib.mjs.html#L20) · walk | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [scripts/audit-lib.mjs:21](source/scripts__audit-lib.mjs.html#L21) · nameOf | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [scripts/audit-lib.mjs:22](source/scripts__audit-lib.mjs.html#L22) · refsFor | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [scripts/audit-lib.mjs:24](source/scripts__audit-lib.mjs.html#L24) · units | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [scripts/audit-lib.mjs:29](source/scripts__audit-lib.mjs.html#L29) · enclosing | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [scripts/audit-lib.mjs:30](source/scripts__audit-lib.mjs.html#L30) · anchor | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [scripts/audit-lib.mjs:31](source/scripts__audit-lib.mjs.html#L31) · escape | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [scripts/audit-lib.mjs:32](source/scripts__audit-lib.mjs.html#L32) · cell | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |

## scripts/build-audit.mjs

| Unit / line | Mechanism references | Developer note |
| --- | --- | --- |
| [scripts/build-audit.mjs:9](source/scripts__build-audit.mjs.html#L9) · put | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [scripts/build-audit.mjs:10](source/scripts__build-audit.mjs.html#L10) · table | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [scripts/build-audit.mjs:11](source/scripts__build-audit.mjs.html#L11) · json | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [scripts/build-audit.mjs:12](source/scripts__build-audit.mjs.html#L12) · code | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [scripts/build-audit.mjs:13](source/scripts__build-audit.mjs.html#L13) · prose | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [scripts/build-audit.mjs:14](source/scripts__build-audit.mjs.html#L14) · shell | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [scripts/build-audit.mjs:17](source/scripts__build-audit.mjs.html#L17) · page | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [scripts/build-audit.mjs:18](source/scripts__build-audit.mjs.html#L18) · build | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by module; consult the linked technical rule and full function body. |
| [scripts/build-audit.mjs:68](source/scripts__build-audit.mjs.html#L68) · loc | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by build; consult the linked technical rule and full function body. |
| [scripts/build-audit.mjs:68](source/scripts__build-audit.mjs.html#L68) · sourceLink | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by build; consult the linked technical rule and full function body. |
| [scripts/build-audit.mjs:69](source/scripts__build-audit.mjs.html#L69) · refLink | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by build; consult the linked technical rule and full function body. |
| [scripts/build-audit.mjs:70](source/scripts__build-audit.mjs.html#L70) · sourceCell | [AK-VAL-01](TECHNICAL.html#ak-val-01) | Owned by build; consult the linked technical rule and full function body. |
