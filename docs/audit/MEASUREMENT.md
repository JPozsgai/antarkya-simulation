# Measurement dictionary: output, outcome and impact

References: **AK-MEA-01**, **AK-MEA-02**, **AK-MEA-03**, **AK-MEA-04**. Measurements are observation-only. This dictionary distinguishes the current policy-reporting panel from the older `assessment()` readout still used in compatibility/export paths. The same label must not conceal different denominators or windows.

## Common definitions

For reporting output at month `t`, use cumulative process counter at `t` minus that at `max(earliest recorded month, t−12)`. The month-zero window can include reconstructed months -12 to 0. Output is activity in that interval, not a monthly mean or unique-person count. A baseline zero can mean that the model counts only additional reform delivery in that output category; it is not evidence that a country has no inherited activity.

For fixed diagnostics, assign reference index `i` to eligible public organization `o` and current official `a` in cyclic order. Let `q=coverage(tool,o,a)`, `b=1/(1+(o.backlog+o.caseBacklog)/max(1,o.members.length))`, and `c=clamp((.5*o.skill+.5*professionalSkill)*(.4+.6*b))`. Compare the tool's threshold with `draw('Antarkya-fixed-diagnostic',societyDrawKey,tool,i)`. The value is `100*passed/n`; `n` is current official count, except complaints uses 100. These are fixed-draw capability diagnostics. They can remain unchanged until a threshold crosses a fixed draw; this does not prove that the underlying continuous capability is static. The reported formal scope field and the diagnostic's actual `coverage` expression must also be distinguished.

## Current reporting measures

| Policy | Output and unit | Outcome actually computed | Denominator / method / direction |
| --- | --- | --- | --- |
| Anti-corruption body | Screening stages completed; count | Threshold `q*o.caps.aca*c*(.4+.6*o.recordQuality)` | Fixed diagnostic; higher better; does not execute a real opposition-sensitive mandate test |
| Recruitment/promotion | Appointments completed; count | `100*meritGood/appointments` over the trailing 12 months | Actual appointments; unavailable if none; higher better; one appointment is sufficient for a displayed ratio, with count shown |
| Rotation | Staff transfers completed; count | Share of service functions retaining original leader, a direct current-leader tie stronger than .30, or a current member's tie to original leader stronger than .50 | Four service functions; lower better; direct continuity proxy, not complete network control |
| Reporting-person protection | Threats actually remedied; count | `100*protectedCount/threats` over trailing 12 months | Modeled reported threats; unavailable if none; higher better; unseen threats are excluded |
| Declarations | Additional-reform verification contacts; count | Threshold `q*o.caps.declarations*a.disclosure` | Fixed diagnostic; higher better; no itemized financial form reconstruction |
| Conflicts of interest | Connected exchanges blocked; count | Threshold `q*o.caps.conflicts*o.recordQuality` | Fixed diagnostic; higher better; not an observed recusal success rate |
| Audits/investigations | Investigation stages completed; count | Threshold `q*o.caps.oversight*c*(.4+.6*o.recordQuality)` | Fixed diagnostic; higher better; correction and high-power independence not fully exercised |
| Remuneration | Actual regular/supplemental public pay after .10 withholding; RU | Share of officials with six receipts whose net receipt covers needs in at least five of those six months | Eligible officials with six receipts; unavailable if none; higher better |
| Financial penalties | Actual liability collected; RU | Sum collected in closed true sanction cases on noncivil routes linked to matured extortion acts, divided by the number of those acts | True extortion cohort `t−18 < act.month <= t−6`; at least 20 acts; RU per violation; higher better; not a percentage |
| Proactive disclosure | Additional-reform record-delivery implementation work; PM | Threshold `q*o.disclosureQuality*(.4+.6*o.caps.disclosure)` | Fixed diagnostic; higher better; output is not a fabricated document count |
| Complaints | Actual reports submitted; count | Threshold `q*sim.cap('complaints')*(.5+.5*b)` | Fixed diagnostic with 100 references; higher better; not 100 executed submissions |
| Education | Additional-reform teaching contacts; count | `100*mean(Adaptive.knowledge(agent,'integrity'))` over all people | Exact modeled usable-knowledge mean for 1,000; higher better; no question-bank test |

Output increments are attached to completed process hooks; the full source is authoritative for conditional routing. `Reporting.record` additionally observes appointment/merit/threat/protection/complaint/collection changes through actual metrics. Teaching output can count delivery without acceptance or comprehension; it does not imply successful learning.

## Before/current/final condition fields

The exact condition labels and units are in the [input tables](INPUTS.html) and `reporting.definitions`. Their formulas are:

| Policy | Conditions in displayed order |
| --- | --- |
| Anti-corruption body | Relevant open files whose responsible function is prevention/integrity/investigation; matching-role staffing capacity in eligible bodies; mean coverage ×100 |
| Recruitment/promotion | Current trailing-year merit ratio; mean current official skill ×100; mean coverage ×100 |
| Rotation | Continuity diagnostic; current official count; mean operative capability ×100 |
| Protection | Trailing-year threats; mean personal reporting safety ×100; mean operative protection ×100 |
| Declarations | Mean official disclosure completeness ×100; mean coverage ×100; mean operative declarations ×100 |
| Conflicts | Mean eligible-body record quality ×100; mean coverage ×100; mean operative conflicts ×100 |
| Oversight | Open audit-source files or files in inquiry stage; eligible-body staffing capacity; mean operative oversight ×100 |
| Pay | Six-receipt adequacy ratio; mean official financial pressure ×100; mean per-official ratio of .90×mean gross receipts to needs |
| Penalties | Sum remaining personal assessed liabilities; mean official expected accountability-cost score ×100; mean operative collection capability ×100 |
| Disclosure | Mean eligible-body public-record quality ×100; mean coverage ×100; mean operative disclosure ×100 |
| Complaints | Open complaint-source files; mean usable reporting knowledge ×100; aggregate complaint capability ×100 |
| Education | Mean usable knowledge ×100; perceived approval of lawful conduct after retained norm influence; lawful-action control after retained influence; mean retained attitude influence ×100 |

For mean coverage/capability, each eligible organization receives equal weight; it is not a national population-weighted coverage estimate. Staff capacity is `matching official count*(.25+.4*organization skill+.35*mean staff skill)`. Some conditions duplicate an outcome intentionally to show the starting/current/final level. Conditions, outputs and outcomes may use different observation windows; the panel names them. General pending cases/services appear as expandable system context because they are not universally relevant reform results.

## Legacy compatibility readouts

`Simulation.assessment()` uses `diagnostic()` directly. Before 20 cumulative appointments, its merit measure is the fixed threshold `q*o.caps.merit*o.recordQuality`; thereafter it is cumulative merit appointments/all appointments. Its protection measure remains fixed threshold `q*o.caps.protection*c`, even though current reporting uses actual trailing-year threats. Legacy penalties use all true extortion acts at least six months old, with a 20-act minimum; the new panel uses the rolling 12-month cohort ending six months earlier. Rotation, pay, education and other fixed diagnostics follow the same instantaneous formulas described above.

These compatibility paths are intentionally disclosed. They must not be compared as if they were identical time series. Neither the legacy diagnostic's numerator nor a prose indicator title should be taken as a literal real-world success count.

## Package impact

Impact uses actual branch counts: `100*encounterCorruptActs/encounterOpportunities`. The difference is **reform minus baseline**, in percentage points; a negative value means fewer modeled corrupt encounters per opportunity in the reform branch. Zero denominator yields unavailable, not zero. Extortion demands count even if the victim refuses or cannot pay; voluntary bilateral participation requires completion. This is narrower than all abuse and broader than completed corrupt money exchanges.

For the past-12-month post-adoption window, subtract each branch's cumulative counters at `s=max(0,t−12)` and divide its own interval counts. For since-adoption, use `s=0`. Do not average unweighted monthly percentages. The package effect is the same when switching the selected policy; no individual-policy attribution is claimed. Repetitions summarize mean/min/max paired differences on the identical starting society with new event draws, not an empirical confidence interval.

Changes in money, services, public resources, coercion, sanctions and beliefs are separately named consequences. A bribe, wage or fine transfer is not automatically a net welfare loss. The model does not compute a complete social welfare account.

## Interpretations and event links

Predefined statements distinguish increase/decrease/no display-relevant difference and unavailable measurements. Tolerances are output `1e−8`, outcome `.05` indicator units and impact `.0005` points; these concern display precision, not statistical significance. Estimated diagnostics are identified as estimates. Up to two event references appear inline, with up to eight selected contextual records available. Records must already exist, be no later than the review month and meet the policy/package selection rules. Links describe connected developments; they do not identify causal mediation.
