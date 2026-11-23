# Engineering check catalogue

The following named tests are extracted from the shipped test files. Their names state engineering intentions; inspect each assertion and fixture before treating it as evidence. Links from a mechanism to a test file do not establish complete coverage. No test here substitutes for independent empirical validation, sensitivity analysis or real Android timing/memory measurements. [Execution results](VERIFICATION.html).

| Test / source | Assertion subject |
| --- | --- |
| [adaptation.test.js:75](source/adaptation.test.js.html#L75) | all twelve policy mappings are explicit, distinct and leave untargeted elements absent |
| [adaptation.test.js:92](source/adaptation.test.js.html#L92) | profiles contain reproducible numerical susceptibility traits without redrawing other traits |
| [adaptation.test.js:107](source/adaptation.test.js.html#L107) | selecting education or funding a still-uninstalled programme cannot teach an agent |
| [adaptation.test.js:124](source/adaptation.test.js.html#L124) | receptiveness responds to source trust, individual traits, motives and own history |
| [adaptation.test.js:143](source/adaptation.test.js.html#L143) | uptake and conditional influence are distinct random draws |
| [adaptation.test.js:162](source/adaptation.test.js.html#L162) | repeat exposure caps diminish and are shared across organizational sources |
| [adaptation.test.js:177](source/adaptation.test.js.html#L177) | thousands of fully delivered exposures stay below per-policy and per-element ceilings |
| [adaptation.test.js:196](source/adaptation.test.js.html#L196) | wear-off changes retained influence without resetting exposure history or lifetime conduct |
| [adaptation.test.js:215](source/adaptation.test.js.html#L215) | reinforcement can restore lost influence after novelty is exhausted without raising the ceiling |
| [adaptation.test.js:232](source/adaptation.test.js.html#L232) | retention traits change decay rather than the original influence cap |
| [adaptation.test.js:257](source/adaptation.test.js.html#L257) | history and environment slowly change actual motives and traits while preserving positive weights |
| [adaptation.test.js:277](source/adaptation.test.js.html#L277) | professional skill changes with performed work and cannot jump or erase expertise |
| [adaptation.test.js:294](source/adaptation.test.js.html#L294) | education reaches attitude, norm and control in actual choices, keeping the nine interests |
| [adaptation.test.js:327](source/adaptation.test.js.html#L327) | a penalty exposure changes perceived cost once without adding attitude/norm/control bonuses |
| [adaptation.test.js:344](source/adaptation.test.js.html#L344) | report-channel knowledge and control are specific to reporting contexts |
| [adaptation.test.js:358](source/adaptation.test.js.html#L358) | identical exposure draws reproduce profiles and independent draws yield different histories |
| [adaptation.test.js:394](source/adaptation.test.js.html#L394) | skill learning feeds real subsequent organizational capacity |
| [adaptation.test.js:409](source/adaptation.test.js.html#L409) | a known inactive or suspended reform stops new exposures while memories can wear off |
| [adaptation.test.js:424](source/adaptation.test.js.html#L424) | continuous reinforcement over 1,200 months retains partial bounded influence |
| [adaptation.test.js:442](source/adaptation.test.js.html#L442) | financial expectations learn from actual total receipts with individual learning rates |
| [adaptation.test.js:459](source/adaptation.test.js.html#L459) | a later change in receptiveness can permit modest new learning after repeated rejected messages |
| [adaptation.test.js:477](source/adaptation.test.js.html#L477) | conflicting credible experience adjusts the retained target without deleting earlier history |
| [adaptation.test.js:490](source/adaptation.test.js.html#L490) | a corrupt staffing proposal prevented by real merit review is not a completed patronage act |
| [adaptation.test.js:509](source/adaptation.test.js.html#L509) | formal education adoption cannot manufacture knowledge before anyone learns |
| [adaptation.test.js:524](source/adaptation.test.js.html#L524) | knowledge assessment responds continuously to retained learning and subsequent wear-off |
| [adaptation.test.js:541](source/adaptation.test.js.html#L541) | agents do not read hidden true protection capacity when deciding whether to report |
| [adaptation.test.js:572](source/adaptation.test.js.html#L572) | experienced protection and credible failure change subjective safety in opposite directions |
| [adaptation.test.js:589](source/adaptation.test.js.html#L589) | inspection summaries stay numerical and reject malformed imported learning histories |
| [audit.test.js:45](source/audit.test.js.html#L45) | country overrides preserve underlying person draws while reconstructed histories can respond |
| [audit.test.js:79](source/audit.test.js.html#L79) | all nine consequence dimensions can independently affect the utility choice |
| [audit.test.js:100](source/audit.test.js.html#L100) | implemented encounter consequences distinguish social, economic and political domains |
| [audit.test.js:120](source/audit.test.js.html#L120) | directional trust changes only the intended direction and zero ties confer no access |
| [audit.test.js:150](source/audit.test.js.html#L150) | affinity changes contact routing while locations and random keys stay fixed |
| [audit.test.js:179](source/audit.test.js.html#L179) | individual staff competence contributes to effective organizational capacity |
| [audit.test.js:196](source/audit.test.js.html#L196) | financial security changes subjective economic gains without knowledge of hidden corruption |
| [audit.test.js:211](source/audit.test.js.html#L211) | verification of covered personal declarations affects audit detection |
| [audit.test.js:248](source/audit.test.js.html#L248) | zero legal scrutiny scope prevents audit detection despite trained capacity |
| [audit.test.js:276](source/audit.test.js.html#L276) | penalty collection capacity changes actual transferred resources after the same decision |
| [audit.test.js:311](source/audit.test.js.html#L311) | policy ordering follows actor priorities independently of menu/storage order |
| [audit.test.js:351](source/audit.test.js.html#L351) | experienced waiting changes support and perceived access without inventing corruption information |
| [audit.test.js:376](source/audit.test.js.html#L376) | resource-review utility responds to experienced stakeholder support |
| [audit.test.js:405](source/audit.test.js.html#L405) | social sharing uses receiver trust and ignores zero-strength links |
| [audit.test.js:421](source/audit.test.js.html#L421) | editorial independence and real funding dependence enter publication incentives |
| [audit.test.js:456](source/audit.test.js.html#L456) | recent participation denominators remain bounded and inactivity cannot erase history |
| [audit.test.js:485](source/audit.test.js.html#L485) | a dense network alone does not produce a capture event; repeated abuse is required |
| [audit.test.js:511](source/audit.test.js.html#L511) | country mandates change real referrals without merging investigation, prosecution and courts |
| [audit.test.js:538](source/audit.test.js.html#L538) | out-of-scope audits cannot create false allegations through a false-positive draw |
| [dynamics.test.js:38](source/dynamics.test.js.html#L38) | a one-option duty and repeated calls without a new choice cannot inflate integrity or recovery |
| [dynamics.test.js:73](source/dynamics.test.js.html#L73) | failed or deferred intentions do not become completed integrity choices |
| [dynamics.test.js:87](source/dynamics.test.js.html#L87) | twenty waiting requests have one bounded monthly effect on trust and control |
| [dynamics.test.js:114](source/dynamics.test.js.html#L114) | waiting is accumulated as request-months, without inventing new service contacts or recounting it at completion |
| [dynamics.test.js:144](source/dynamics.test.js.html#L144) | living-needs priors share the earnings scale and retain heterogeneous financial pressure |
| [dynamics.test.js:162](source/dynamics.test.js.html#L162) | uncollected adjudicated liability persists, and subsequent collection transfers real money once |
| [dynamics.test.js:216](source/dynamics.test.js.html#L216) | personally experienced and communicated accountability updates are bounded, deduplicated and reversible over time |
| [dynamics.test.js:238](source/dynamics.test.js.html#L238) | higher perceived accountability changes actual utility choices under identical event draws |
| [dynamics.test.js:271](source/dynamics.test.js.html#L271) | reference disapproval can transmit an expectation instead of every lawful interaction manufacturing approval |
| [dynamics.test.js:292](source/dynamics.test.js.html#L292) | network layout spreads the healthy disc while preserving participation bands, default integrity and physical geography |
| [dynamics.test.js:313](source/dynamics.test.js.html#L313) | coercive ties cannot attract victims as though they indicated affinity or voluntary cooperation |
| [dynamics.test.js:324](source/dynamics.test.js.html#L324) | a public decision has one cost-learning pathway and cannot replay an already personally experienced sanction |
| [dynamics.test.js:348](source/dynamics.test.js.html#L348) | pay adequacy assesses modeled take-home receipts rather than gross receipts |
| [dynamics.test.js:362](source/dynamics.test.js.html#L362) | saved-state verification accepts key order and insignificant floating rounding while rejecting substantive edits |
| [initialization.test.js:23](source/initialization.test.js.html#L23) | political defaults use sourced country scores and keep unmeasured culture explicit |
| [initialization.test.js:46](source/initialization.test.js.html#L46) | instrument-specific observations inform bounded estimates without treating missing criteria as no safeguards |
| [initialization.test.js:65](source/initialization.test.js.html#L65) | the pre-policy year executes all twelve months, with eligible actors throughout |
| [initialization.test.js:85](source/initialization.test.js.html#L85) | month zero has coherent conduct, ongoing work, cross-class ties and behavior-derived map positions |
| [initialization.test.js:113](source/initialization.test.js.html#L113) | pre-policy history is independent of reform, duration, repetitions and future-event seeds |
| [initialization.test.js:136](source/initialization.test.js.html#L136) | a saved reconstructed snapshot is accepted exactly and rejects edited histories and old starts |
| [initialization.test.js:155](source/initialization.test.js.html#L155) | inherited casework advances across adoption without duplicate IDs, invalid clocks or lost money |
| [model.test.js:30](source/model.test.js.html#L30) | ten country societies: 1,000 people, overlapping motives, independent support and membership |
| [model.test.js:51](source/model.test.js.html#L51) | reform selection, mobilization, duration and future-event seed do not regenerate the initial society |
| [model.test.js:67](source/model.test.js.html#L67) | paired no-new-reform branches are identical; repetitions share state but subsequent events differ |
| [model.test.js:81](source/model.test.js.html#L81) | diagnostics, rendering and actor inspection do not mutate state or random events |
| [model.test.js:101](source/model.test.js.html#L101) | each country conserves resources and shared time with all twelve reforms |
| [model.test.js:124](source/model.test.js.html#L124) | initial zero mobilization is persistent until a review; full funding does not install capacity immediately |
| [model.test.js:139](source/model.test.js.html#L139) | single act switches display; inactivity cannot recover; six months and three meaningful choices can |
| [model.test.js:175](source/model.test.js.html#L175) | coercion records the official as perpetrator without marking the victim corrupt |
| [model.test.js:201](source/model.test.js.html#L201) | unaccepted corrupt proposals are not counted as integrity by the proposer |
| [model.test.js:223](source/model.test.js.html#L223) | employment transitions retain identity, money, history, home and existing ties |
| [model.test.js:240](source/model.test.js.html#L240) | China uses personnel appointment; civil and criminal functions remain distinct |
| [model.test.js:264](source/model.test.js.html#L264) | case deduplication and policy costs are explicit; diagnostics use observed denominators |
| [model.test.js:287](source/model.test.js.html#L287) | reject invalid scenario settings |
| [model.test.js:310](source/model.test.js.html#L310) | serialized initial society is structurally verified and retained without regeneration |
| [reporting.test.js:39](source/reporting.test.js.html#L39) | all twelve tools have distinct output definitions and relevant starting conditions |
| [reporting.test.js:61](source/reporting.test.js.html#L61) | policy starting snapshots precede formal adoption and remain fixed during the run |
| [reporting.test.js:75](source/reporting.test.js.html#L75) | recording and interpretation do not consume RNG or change the simulated society |
| [reporting.test.js:97](source/reporting.test.js.html#L97) | same published engine produces identical initialization and conduct with monitoring enabled |
| [reporting.test.js:123](source/reporting.test.js.html#L123) | output uses weighted actual activity over equal historical windows |
| [reporting.test.js:143](source/reporting.test.js.html#L143) | delivered teaching is distinct from accepted influence and duplicate contacts |
| [reporting.test.js:164](source/reporting.test.js.html#L164) | generic activity does not get credited as a staff rotation |
| [reporting.test.js:179](source/reporting.test.js.html#L179) | read-only event references are relevant, dated and distinguish material changes |
| [reporting.test.js:245](source/reporting.test.js.html#L245) | interpretations handle delivery, lag, missing evidence and direction without claiming causation |
| [reporting.test.js:264](source/reporting.test.js.html#L264) | optional monitoring roundtrips without changing initial-state compatibility and rejects malformed records |
| [reporting.test.js:367](source/reporting.test.js.html#L367) | all twelve policy renderings show relevant before/current conditions and stage panels |
| [reporting.test.js:404](source/reporting.test.js.html#L404) | completion updates the final comparison and review slider without changing results |
| [reporting.test.js:431](source/reporting.test.js.html#L431) | older saved results get an honest monitoring-unavailable notice |
| [run-seeds.test.js:22](source/run-seeds.test.js.html#L22) | new runs get distinct event identities without modifying settings or society |
| [run-seeds.test.js:48](source/run-seeds.test.js.html#L48) | explicit exact replay consumes no new entropy and reproduces the entire event history |
| [run-seeds.test.js:62](source/run-seeds.test.js.html#L62) | fresh event seeds retain matching baseline/reform randomness and separate initialization |
| [stress.test.js:15](source/stress.test.js.html#L15) | Peru ACA completes maximum 240-month duration with finite and conserved state |
| [stress.test.js:35](source/stress.test.js.html#L35) | all-country extreme conditions retain valid resources, workload and decision utilities |
| [visualization.test.js:22](source/visualization.test.js.html#L22) | impact preserves the small nonzero difference from the reported run |
| [visualization.test.js:43](source/visualization.test.js.html#L43) | recent impact uses weighted encounter counts at matching month boundaries |
| [visualization.test.js:66](source/visualization.test.js.html#L66) | recent paired impact respects each branch denominator and never mutates history |
| [visualization.test.js:89](source/visualization.test.js.html#L89) | analytical projection preserves behavior radii when affinity and cooperation change |
| [visualization.test.js:113](source/visualization.test.js.html#L113) | new meaningful choices change radial position; elapsed time and role do not |
| [visualization.test.js:144](source/visualization.test.js.html#L144) | major event filter excludes routine case traffic without discarding the full log |
| [visualization.test.js:159](source/visualization.test.js.html#L159) | entrypoint loads consistent versions and all UI hooks including arbitrary whole-month duration |
| [visualization.test.js:180](source/visualization.test.js.html#L180) | startup map and class rates use completed choices from the reconstructed past |
| [worker.test.js:61](source/worker.test.js.html#L61) | worker step/pause retains paired months and does not automatically run after initialization |
| [worker.test.js:83](source/worker.test.js.html#L83) | worker completes five paired repetitions and keeps the first reform trajectory for review |
| [worker.test.js:117](source/worker.test.js.html#L117) | invalid worker initialization returns a useful error |
