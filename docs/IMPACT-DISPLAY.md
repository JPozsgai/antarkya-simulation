# Impact readout correction · display 2.4.1

23 November 2026. Simulation rules remain 2.4.0; population remains 1,000.

The reported screenshot contained 7,108 reform encounters and 7,117 baseline encounters, each over 50,695 relevant encounters. The exact paired difference is approximately −0.017753 percentage points. One-decimal formatting hid this as −0.0 and the overlaid cumulative rate curves obscured the separation. That is a genuinely small modeled difference, not evidence that the counter is frozen.

## Display and estimand

The default period is the past 12 months, or all elapsed months before month 12. Users can select since reform adoption. For endpoint month t and start month s=max(0,t−12), each branch rate is 100 × [corrupt(t)−corrupt(s)] / [encounters(t)−encounters(s)]. The since-adoption option uses s=0. Each branch keeps its own denominator. Monthly rates are never averaged without encounter weighting. Missing history or zero relevant encounters yields an unavailable result.

The chart plots reform rate minus baseline rate in percentage points over time. Its labeled symmetric scale includes zero, with negative values below zero meaning fewer corrupt encounters per relevant encounter. The minimum extent is 0.05 points before 15% plotting padding; the axis is always visible. A small visible change remains a small numerical change. Rate cards, difference, count explanation and period label all use the same selected period. Whole-system consequence tables, repetition comparisons and JSON/CSV results continue to report since-adoption quantities and are labeled accordingly. Display controls do not restart a run or consume model random draws.

Three-decimal rates and differences reveal small effects. A nonzero difference smaller than 0.0005 points uses scientific notation rather than signed zero. Exact equality displays 0.000. This precision describes a computation, not the accuracy of the underlying assumptions.

The status line reports completed policy-recipient setups and recipients delivering in the current modeled month. Setup alone is not current delivery or an effect on conduct. Policy detail cards retain expenditure, resource rates, organizational responses and causal pathways.

## Mechanism check, not empirical validation

A diagnostic used Peru, initial seed Antarkya-v2-society, event seed impact-audit-1, 120 months, and 60% starting resource mobilization. These are illustrative paired results from one event stream, not a statistical sensitivity study or a reconstruction of the user's unknown setup:

| Selected reform | Since-adoption rate difference, reform minus baseline |
| --- | ---: |
| Anti-corruption body | −0.047529 points |
| Audits/investigations + complaints | +0.033667 points |
| Education | −0.503020 points |
| Financial penalties | +0.081196 points |
| All twelve tools | +0.243207 points |

The agency scenario had two of three recipient setups complete; the investigation recipient remained incomplete after 120 months. Its collection/sanction and conduct results differed from baseline, but its average retained direct policy influence was small. Education reached all agents at least once and changed conduct more in this stream. Financial penalties increased actual collections without a comparable reduction in encounters. These observations confirm active but sometimes weak or adverse pathways; they do not establish realism or effectiveness.

Behavioral coefficients were not increased to manufacture improvement. Small agency effects warrant sensitivity analysis of deployment, stage bottlenecks, accountability communication, retained belief change and its utility weighting. Changing those assumptions is a substantive modeling revision, separate from this display correction. The exact user run requires its saved settings/event seed or JSON export.

## Verification

Dedicated display regressions cover the reported counts, tiny signed differences, weighted interval subtraction, early windows, distinct branch denominators, empty/missing observations and non-mutation. Existing model rules are unchanged. Browser verification and automated-check results are recorded with the publication.
