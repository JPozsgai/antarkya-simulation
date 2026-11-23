# Behavioral and display corrections · v2.4

23 November 2026. Population remains exactly **1,000**. These rules correct the audited implementation and parameter inconsistencies. They are explicit exploratory numerical assumptions, not calibrated national effect sizes. The country observations and their evidence limits remain in [INITIALIZATION.md](INITIALIZATION.md).

## Genuine choices and recovery

A decision enters the last-24-opportunity history only when at least two options are available and at least one is a qualifying improper option. A completed qualifying corrupt act is always recorded, including externally established conduct. An ordinary one-option duty cannot manufacture an integrity opportunity, successful integrity choice, or recovery credit.

A lawful act completes only a still-open genuine opportunity from the same month. Repeated calls for the same completed choice cannot generate new credits. A deferred or failed intention remains an opportunity, not a successful integrity choice. Recovery still requires at least six months since qualifying conduct **and three genuinely completed integrity choices**. Inactivity does not clear history or improve integrity status. Coerced victims are not classified as corrupt participants merely for paying.

## Service demand, time and experience

A new request increments the person's service-contact count once. An unresolved request adds one request-month to experienced waiting per month. Completion reports its actual delay in the completed-service metrics; it does not add that delay again to the person's already accumulated waiting.

For behavioral feedback, all completed and pending requests for one person in one month are aggregated. A completed request contributes satisfaction `clamp(1 − delay/6)`; a pending request contributes zero. Their mean is S. Only one feedback update is allowed per person/month:

| Quantity | Monthly update |
| --- | --- |
| Trust | `trust + .08 × (S − trust)` |
| Perceived lawful control | `control + .025 × (.20 + .70 S − control)` |
| Support for each encountered organization | `.04 × its share of that person's requests × (its mean satisfaction − affinity)` |
| Governing-party support | `.02 × (S − affinity)` |

Bounded motive feedback is applied once. Several requests can increase actual workload and waiting, but cannot multiply a person's monthly opinion adjustment without limit.

The former .12 person-month requirement for every ordinary service structurally overwhelmed the small modeled service workforce. Revised routine work requirements are .025 PM for an ordinary service, .020 PM for tax handling, and .040 PM for a permit, each multiplied by `1 − .4 × honest role familiarity`. Cash cost remains .015 RU. These are normalized workload assumptions, not estimated real-country service times. Requests still compete with cases and reforms for reserved staff time. Backlogs can grow when workload, resources or priorities warrant it; none is cleared artificially.

## Financial conditions and outstanding liability

Opening living needs are correlated with earnings rather than independently drawn against them:

`monthly needs = .90 × income × (.65 + .50 U)`, with the person's fixed uniform draw U.

The existing modeled 10% wage withholding applies to regular pay and supplements. Pay adequacy compares take-home receipts with living needs; utility expectations use the same take-home scale. Income, needs and opening balances then share the existing bounded GDP resource scale. This leaves heterogeneous financial pressure, including some people whose needs exceed net earnings, without imposing a negative cash flow on most people by construction. The implied distribution is a common scenario prior, not a measured national household distribution.

A career change preserves the person's earnings scale and applies the role-pay ratio. Existing living needs and financial history remain. Income is not reset to an unrelated unscaled constant.

Unmet-needs pressure is `.90 × old pressure + .10 × (1 − actual consumption/needs)`, bounded 0–1. It adds `.50 × pressure` to the existing financial-need multiplier in utility evaluation. This is derived from existing finances and actual transfers, not a new country economic variable. It does not change integrity status automatically.

Adjudicated monetary liability retains the existing normalized 2 RU baseline / 3 RU active statutory-penalty assumption, subject to applicable operative collection capacity. Initial payment cannot exceed 65% of available cash. The unpaid remainder persists as a claim attached to the case, person and responsible body; it is not silently extinguished.

Later collection requires .010 PM and .005 RU of actual competent-body resources per payment. Across all claims, collection cannot exceed 15% of that person's actual monthly receipts and must leave half a month's living-needs buffer. Repeated collection calls cannot exceed the monthly cap. Payments reduce the claim and increase actual case collections through conserved transfers. They do not count as new sanctions. Claims are obligations, not newly created money. No interest or universal country-specific garnishment law is asserted; this is a simplified model collection process.

## Reference expectations

Previously, successful lawful interaction automatically transmitted a strong honest expectation. Now an encountered relevant reference can approve or disapprove the observed behavior. With reference expectation N in [−1,1], approval probability is `clamp(.50 + .40 N)` for an improper action and `clamp(.50 − .40 N)` for a lawful action.

Approval of an improper action or disapproval of a lawful action signals +1; the opposite signals −1. The observing person's expectation moves .04 toward that signal. The corresponding organizational practice strength moves .015 toward observed approval. Existing relevance gates—leadership or sufficiently trusted access—remain. Simply deferring an encounter does not create an affirmative cooperative relationship.

Unmeasured initial reference expectations use a centered heterogeneous prior [−.45,.45], adjusted by the existing editable informality assumption. Honest and corrupt role-familiarity priors both use [.20,.60]. These are agnostic engineering priors, not country moral-character estimates. The pre-policy year generates subsequent observed conduct and expectations. No target national corruption percentage is assigned.

## Accountability, perceived costs and information

The accountability belief is a relative expected-cost score, not an observed detection probability. It affects explicit perceived private consequences once in each applicable dimension: economic/self subtracts R, social/self subtracts .30 R, and political/self subtracts .60 R for officeholders or .15 R otherwise. These coefficients express perceived financial, reputational and career costs in the model's normalized consequence units; no extra generic norm/control bonus is added. Motive attachments still determine each dimension's importance, and actual future outcomes remain probabilistic.

An agent personally receiving an adjudicated liability updates the baseline cost belief at rate `.12 + .12 × learning`, toward `original prior + .35`, bounded at .95. A person accessing a publicly communicated decision updates at `(.015 + .025 × learning) × source credibility`, toward `original prior + .15`. For a public decision attributable to a recently operating policy procedure, the existing targeted risk-exposure pathway is used instead of a second baseline-belief update. A case already personally experienced cannot add another public-message cost update. Neither path can read hidden violation truth, hidden audit capacity or an unpublished decision. Duplicate case messages are deduplicated in a bounded 64-event memory, distinguishing personal experience from public information.

The baseline belief relaxes .5% per month toward its original prior without reinforcement. Existing policy-specific risk-learning caps, diminishing influence and decay remain. This experienced-accountability pathway is distinct from a policy's direct persuasive influence; no policy selection or expenditure alone invokes it.

Final decisions can now be published by actual media actors, who retain withholding incentives and finite resources. Publication states what the modeled authority decided; it does not reveal hidden guilt. Existing source trust, evidence quality, attention and social-sharing mechanisms determine access and acceptance. Decisions, fines, actual collection, public knowledge and private truth remain distinct.

## Readable network layout and conditions

The display remains separate from physical geography and all behavioral random streams:

- The inner disc, radius up to .48, represents **no recent corrupt participation**. Positions within it provide legibility and network spacing; they do not imply different degrees of integrity among agents with the same conduct record.
- For a positive recent participation rate r, radial distance is `.54 + .41 × sqrt(r)`. Higher participation remains farther out. Network forces do not change that radial metric.
- Eight deterministic layout passes use local spatial-grid collision handling, bounded attraction to cooperative peers and affinity anchors. There is no all-pairs force calculation. Coercive ties do not pull victims toward perpetrators as though they indicated voluntary affinity.
- Class colors, integrity shapes, influential actors, class-reference quadrants and the absence of a baseline overlay remain. A class filter reduces overlap. All-class mode retains cross-class connections.
- Current influential-actor ranking is computed once per view. Up to 2,400 relevant ties support layout; at most 320 default / 180 focused lines are drawn. Filtering occurs before the drawing cap, and background lines are subdued.

A closed-by-default pressure panel shows trust, lawful control, expected accountability cost and unmet-needs pressure for reform and baseline. These are experiences and beliefs, not a composite integrity score. Map distance still follows actual recorded conduct rather than changing merely because an attitude score changes.

The major-event feed retains elections/appointments, consequential service/resource changes, institutional expectations and coordinated abuse. Public-information milestones require an important organizational leader/officeholder, sufficiently strong publicly available evidence and broad distinct reach: at least 150 people for a final decision, or 300 for an allegation/investigation development. A three-month system-level interval limits repetitive disclosure milestones. Ordinary stories and case work still occur and remain in the full process log.

## Verification and limits

The dedicated dynamics checks address the reported defects and their behavioral consequences, in addition to regression, country, worker, replay, accounting, 240-month and extreme-condition checks. Plotting and filtering cannot mutate simulation state. Saved scenarios use rules version 2.4 and require a newly reconstructed initial state.

The corrections are not evidence that every policy must reduce corruption, that changes must be visually dramatic, or that the country profiles now support forecasts. Finite resources, resistance, information, delays and conflicting incentives can still limit reforms. Policy effects require repeated paired runs and substantive calibration; larger populations remain outside this release.
