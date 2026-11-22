# Antarkya v2.0 — operational model

Implementation date: 22 November 2026. This replaces v1's signed-score model with an executable agent/organization process model. It implements the main agreed mechanisms, with transparent provisional numerical choices. It is **not a calibrated national forecast or complete national legal/electoral model**. The numerical proposal and agreed register remain available in `docs/` for review; this file describes the actual code.

## Evidence and assumptions

The ten profiles retain World Bank 2025 GDP per capita PPP and revised 0–100 WGI government effectiveness, rule of law and regulatory quality. Regulatory quality is an incomplete business-conditions proxy, and government effectiveness is not a literal impartiality score. Institutional descriptions retain major prevention, investigation, audit and adjudication distinctions. See [dated sources and gaps](docs/COUNTRY-EVIDENCE.md).

Political and cultural numeric calibration is incomplete. Common priors of 50 are visible scenario assumptions for liberties, representation, electoral integrity, kinship, informality and public/private separation. They are not estimated national scores. The profile architecture still imposes qualitative constraints, including China's non-competitive personnel route. Role counts, organization sizes/membership rates, allocation shares, resource requirements and procedural calendars are provisional approximations, editable in source or through supported setup overrides. No missing profile value has been silently interpreted as zero corruption or zero institutions.

## People, organizations and space

There are exactly 1,000 people. Four principal roles correspond to multiple civic organizations, businesses, public agencies and political parties. Public-agency labels simplify real functions; political/civic/business names are stylized. A person can support any organizational category without being a formal member. Primary employment, secondary membership and support remain distinct. Secondary admissions/exits incur time, eligibility and financial costs and are processed at six-month organizational reviews. Public employment transfers change work location and income, retaining home, money, history and existing ties.

Homes are stable in a synthetic landscape, not a country GIS map. Contacts sample local/organizational access with a 15% remote-contact component. Networks never pull nodes into geographical clusters. Lawful and corrupt interactions can develop directional trust; coercion weakens trust rather than establishing mutual cooperation. Full sparse networks remain in the engine; the live display limits lines for readability.

Every person has nine positive motive weights drawn from a Dirichlet distribution. Interest means differ weakly by role; beneficiary means overlap. Concentration is 6. The kinship and public/private scenario settings adjust beneficiary priors within bounded ranges; these are assumed mappings, not cultural effect estimates. An inherited 8% history prior creates some initial qualifying conduct across all countries. This is explicitly uncertain and is not a national prevalence estimate.

## Decision mechanism

For each intentional act, the actor compares options using:

`utility = weighted subjective consequences - perceived effort + .5 × expected reference approval + .25 × (2 × residual perceived capability - 1) + Gumbel(.20)`.

The actor chooses the maximum. Consequences include benefits/costs for self, relevant group and public. All roles use the same mechanism for exchanges, coercion responses, reporting, sharing/publication, membership, funding, implementation, budget consent, staffing and political support. Descriptive beliefs about common conduct differ from injunctive expectations. Actors do not see true model prevalence or the viewer's integrity icons.

Financial risks and effort belong to consequences/costs. Residual control covers perceived channel access/capability and is not an additional copy of the same financial risk. Informal access can affect perceived feasibility. Actual cash, counterpart agreement, review, staffing and procedure are checked afterward. Intentions, rejected proposals and completed acts remain distinct; a rejected corrupt proposer is not counted as making an integrity choice.

Learning uses bounded updates, usually .15 for accessed reference reactions. A relevant reference's response can strengthen honest or corrupt role expectations. Established practice reduces coordination effort by at most 40%; repetition by itself does not switch an institution on. Expectations and confidence decay slowly when unsupported. Exact numerical coefficients remain assumptions requiring sensitivity analysis.

## Resources, services and reforms

Resource units (RU) are normalized simulation units, not measured currency or GDP. Staff time is person-months (PM). All money moves between explicit individual, organizational, treasury, reform-allocation and outside-economy accounts. The outside account supplies ordinary external income/revenue and receives consumption/operating costs. GDP enters a bounded square-root prior for fiscal resources and reform cost scale; it does not forecast GDP or assign measured household disposable income. Regulatory quality adjusts a bounded business cost prior. Government effectiveness informs initial skills/capacity; rule of law informs record/procedural quality. These mappings are estimated engineering assumptions, never direct misconduct/sanction probabilities.

The reform's initial user setting directly establishes a persistent mobilization rate. Additional requirements contain setup, recurring money and staff-time needs, separate from inherited capacity. Disbursements debit the public treasury. Country/function allocation weights are explicit provisional estimates, not measured budget shares and not universal workload allocation. Private stakeholder funds can support organizations/media, not the implementation pool.

Organizations have staff, leaders and members. Leaders evaluate implementation, selective compliance, resistance and redirection, considering member reference expectations. Setup requires money, work and at least three monthly stages; only completed work builds practical capability. Ongoing deployment can increase skills, accessible records, usable knowledge or other relevant capacities. Redirected funds are actual transfers and recorded qualifying acts. Deployed scope narrows if a formal rollback succeeds; trained experience does not disappear automatically.

All twelve tools have implementation costs and processes. Remuneration deployment pays actual staff supplements. Rotation moves actual personnel without deleting ties. Merit procedures affect real appointment decisions. Declarations/COI/disclosure improve records/access; oversight uses audit work and evidence; reporting/protection affect access and responses; education updates actual knowledge; penalties change formal liability, with collection constrained by actual resources and capability. Anti-corruption-body work strengthens operational skills. There is no checkbox-to-success bonus or fixed class immunity factor.

Ordinary work, reforms, audits and cases share each organization's finite time. Services use queues; preferential access harms others only through actual constrained capacity. Six-month budget reviews involve authorized political/administrative actors, affordability and coalition consent where represented. Rates can rise/hold/fall by 10 points; repeated authorized narrowing can suspend a reform. Detailed national procurement, hiring, appeals and legislative rules are approximated rather than recreated.

## Encounters and accountability

Monthly activity includes ordinary lawful purchases/income/tax accounting, service/tax/permit requests, business–politician contracts, politician–official pressure and campaign support exchanges. Campaigns change contact opportunities, without a universal corruption-utility bonus. Actual extortion does not require a pre-existing corrupt icon. A coerced payer is a victim, separately from voluntary corrupt participants.

Signals can originate in complaints, audits or publications. Cases advance through screening, investigation and decision with staffing, evidence, costs, delays, dismissals and possible interference. Actual ties and authorities affect the decision maker's incentives; they do not confer automatic immunity. South Africa's modeled civil route keeps investigation separate from court decision. Italy's political-pressure abuse is not automatically assigned to a repealed criminal offence. Other routes and liability amounts are abstract simulation assumptions, not legal advice or a fully verified offence dictionary.

Journalists/editors are existing agents in media-function organizations. Funding can create incentives to withhold information, subject to editorial independence and utility choice. Stories compete for bounded attention (up to three accessed messages per person per month). Sharing passes information along actual ties. Claims can be inaccurate or disputed; corrections are linked and do not necessarily reach the same audience. Case dismissal does not establish falsity. Publicity can precede and trigger screening rather than automatically producing punishment.

Political reviews use simplified presidential, parliamentary/coalition or CPC-linked appointment modes. Relative cycle phases are scenario assumptions, not verified future election dates. Support reflects accessible information and affinity; participation can include abstention. Losing office changes authority, preserving identity/history/resources. This is not a seat-by-seat electoral simulation.

## Assessment

Inputs, outputs, institutional outcomes and joint impact remain distinct. Cards show the accepted tool-specific indicator, actual spending/work/responses, baseline comparison and a short bounded interpretation. They do not assign individual causal credit inside a package.

Most capability indicators use fixed, read-only reference situations based on current skills, records, knowledge, procedures and workload. Their RNG is separate and cannot change the world. They are labeled diagnostics, not observed success rates. Pay uses six-month actual receipts; merit uses realized appointments once there are at least 20. Financial liability uses actual appropriate collection per recorded extortion violation with a six-month observation lag (at least 20 violations); civil recovery is excluded. Rotation tracks persistent control by original informal networks. Scope and denominators remain visible; narrow coverage is not silently treated as universal success. Country/tool-specific diagnostic validation is still needed.

The primary impact chart compares completed corrupt encounters per 100 eligible service, permit, tax, contract, political-pressure and campaign encounters. Other qualifying acts—implementation diversion, retaliation, obstruction and patronage—are also counted and displayed separately in whole-system totals. This common-encounter rate avoids dividing reform-specific acts by an unrelated encounter denominator. The wider panel separately compares victim burdens, diversion, foregone revenue, service waiting, cases and sanctions/remedies. Transfers are not automatically net societal losses. Distribution counts perpetrator participations by role, so bilateral acts can involve two persons.

Repeated runs report a mean paired difference and simulation range, not empirical confidence intervals. One scenario's outcome is not an expected country effect. Wider welfare, wealth distribution and displacement require further calibration/validation beyond these modeled consequences.

## Reproducibility and execution

Initialization depends on country, conditions and the fixed society seed, not reform choice, mobilization, duration or subsequent-event seed. Its full snapshot is reused for both branches and every repetition. Overrides deliberately define a different configuration. Random events use hash-keyed process/month/actor/opportunity identities; extra policy events do not consume an unrelated shared RNG sequence. Conduct/case/story IDs derive from originating contexts rather than a single policy-sensitive global sequence. Display controls and diagnostics cannot change results.

Monthly order: ordinary accounts and available capacity; reform disbursement/deployment; encounters; service queues; audits/cases; information; private funding; membership/staff changes; political and budget reviews; integrity recovery and history. Render pacing does not alter this order. The no-new-reform baseline also adapts and evolves.

The browser worker runs matched branches sequentially; additional repetitions are computed while retaining the first visible trajectory. Completed scenario files contain model/profile versions, overrides, full initial society, events, conduct/case records, first paired results and repetition summaries. Loading is for review, not automatic execution or live checkpoint resume. Imports are version-checked and the full initial state is structurally validated with its configuration identity, membership references and balanced accounts. On-device storage uses IndexedDB with a fallible local-storage fallback.

## Validation boundary

Automated checks cover population and money invariants, shared capacity, reproducibility, read-only diagnostics, coercion/refusal classification, integrity recovery, persistent identities, non-instant setup, case deduplication, country topology and invalid inputs. Worker lifecycle and UI behavior are checked separately. Desktop execution speed is not an Android benchmark. Country behavioral calibration, complete legal procedures, parameter sensitivity and comparison against empirical outcomes remain necessary before substantive research claims.

Conceptual basis: Ajzen (2020), doi: [10.1002/hbe2.195](https://doi.org/10.1002/hbe2.195); random utility in [McFadden](https://eml.berkeley.edu/wp/mcfadden0300.pdf); Villeneuve, Mugellini and Heide, doi: [10.1007/s10610-019-09410-w](https://doi.org/10.1007/s10610-019-09410-w); Pozsgai-Alvarez's assessment chapter, doi: [10.4337/9781035337712.00043](https://doi.org/10.4337/9781035337712.00043); and the supplied reform-mobilization draft. These sources support mechanisms/frameworks, not the numeric engineering priors above.
