# Model specification

Version 1.0.0. Source: `script_explanation.docx`, supplied by Joseph Pozsgai-Alvarez. The Word file describes several concepts and gives sample Python fragments, but leaves numerical mechanisms unfinished. The following decisions make the reconstruction executable and reviewable. They are implementation assumptions unless explicitly marked as specified by the source.

## Source commitments

Four agent roles: citizen, business, official and politician. All begin green, with random grid positions and fixed objective/subjective preferences. Citizens and officials place greater emphasis on subjective benefits/costs; businesses and politicians emphasize objective benefits/costs. Low economic conditions increase corruption incentives; stronger rule of law increases expected costs. Enforcement can be equal or unequal by role. Citizen–business interactions are honest and leave corruption scores and reputation unchanged. Bribery, extortion, vote-buying and political influence link other roles. Remembered exchanges and networks affect decisions. Elections can demote politicians when both the corruption and support thresholds are crossed. Demotion converts them to citizens and resets their corruption score. Pre-election boosts are temporary. Live statistics and CSV/JSON outputs are requested. Network dynamics are marked PENDING in the source.

## Population and scheduling assumptions

Defaults: 120 citizens, 25 businesses, 20 officials, 5 politicians, grid width 40, maximum 500 rounds; all adjustable. Total population is limited to 1,000 for phone use. Randomness comes from the seeded generator in model.js; all model draws use it, and rendering never draws from it. A given model version, seed and complete settings reproduce a trajectory. Agents have fixed numeric weights and a fixed preference, independently drawn at initialization; this resolves the source's mix of type-shared and individually random incentives.

Each round: expire stale network links; decay political loyalty; move active agents; shuffle encounter order; sample nearby contacts; apply exchanges and sanctions sequentially; hold any scheduled election; record statistics. Grid boundaries are reflecting by clamping, not wrapping. Movement is uniform from −1 to 1 along each axis, plus 0.08 of the displacement to a randomly selected established network partner. Encounters sample up to three neighbors per agent within radius 4; duplicate unordered pairs are excluded within a round. These contact limits are attempts per initiating agent, not a cap on total encounters received. Same-role exchanges are neutral. Spatial sampling resolves the mismatch between a proximity-based description and a sample loop over all pairs.

## Decision equations

For a potential voluntary corrupt exchange, both agents must independently satisfy:

`D = wO × U(0.5, 1.5) × E.gain + wS × E.social × (2R − 1) + P + memoryWeight × R + T + C − wOC × risk − wSC × (E.stigma + L.stigma)/2 > threshold`.

Here `R` is the partner's observed corruption frequency (remembered corrupt eligible encounters / all remembered eligible encounters). For an unknown partner, R is 0.75 when red, 0.1 when green. `P` is +0.08 for an objective preference, −0.08 for a subjective preference. `T` is networkWeight for an established pair, zero otherwise. `C` is the campaign adjustment for politicians. Threshold defaults to 0.5; memoryWeight to 0.25 and networkWeight to 0.15.

The subjective term explicitly represents how social approval for corruption competes with the subjective benefit of honesty. The original description does not give its sign or exact formula. The engine treats subjective gain from corruption as negative around honest partners. This is a substantive reconstruction choice.

| Environment | Low/weak | Medium | High/strong |
|---|---:|---:|---:|
| Economic objective gain E.gain | 0.8 | 0.65 | 0.5 |
| Economic social coefficient E.social | 0.2 | 0.45 | 0.7 |
| Economic stigma E.stigma | 0.3 | 0.4 | 0.5 |
| Legal risk L.risk | 0.2 | 0.45 | 0.7 |
| Legal stigma L.stigma | 0.3 | 0.4 | 0.5 |

Several endpoints come from examples in the source; all medium values and their composition in this equation are assumptions. These are stylized behavioral assumptions, not empirical claims about economic conditions or actor groups.

Citizens/officials draw objective benefit/cost weights uniformly from 0–0.4 and subjective weights from 0.6–1. Businesses/politicians reverse these ranges (ranges specified by source). Probability of objective preference is 20% or 80%, respectively (assumed). Weights are independently drawn and need not sum to one.

Equal enforcement uses `risk = L.risk`. Unequal enforcement multiplies L.risk by Citizen 1, Business 0.65, Official 0.8, Politician 0.25. Only the relative ordering is specified by the source; exact multipliers are assumed. Perpetrators are sanctioned independently with this probability following a completed voluntary corrupt act. They are inactive for the next three rounds; scores persist. This substitutes a temporary inactive state for the source's unspecified jail handling. No wealth, budgets, actual taxes or material payoffs are tracked; monetary examples inform the abstract decision utility only.

## Scores and extortion

Each completed voluntary corrupt exchange adds 1 to both participants' signed score. A failed proposal subtracts 1 from both; this treats a failed bilateral transaction as an honest outcome, even if one participant was willing. Only eligible decision encounters enter the decision-count denominator. Red state is `score / decisions > 0.2` (zero decisions means green). This resolves the description's unspecified threshold and denominator. Honest citizen–business trades and same-role contacts do not change scores, decisions or reputation. Signed scores can be negative; they are not the same as lifetime counts of corrupt acts.

A red official can initiate extortion if their decision score with a +0.15 bonus exceeds the threshold. The citizen pays if `E.gain × U(0.4,1.2) > 0.35 × citizen.subjective + citizen.objectiveCost × citizen.risk`. The official's score increases even when the attempt is refused; the citizen records a corrupt encounter with the official. Paid extortion increments the separate coerced-payment count and may sanction the official. The citizen is not marked corrupt or punished solely for being victimized. This is an explicit classification choice where the source is incomplete. Extortion payments are excluded from the voluntary corrupt-exchange total.

## Memory and networks

Completed voluntary corrupt exchanges increment both partners' corruption memories; declined exchanges register as non-corrupt. Memory persists for the run; there is no separate media or global broadcasting mechanism. A tie becomes established after three completed corrupt transactions and is drawn as a line. Its count is cumulative since its creation, and it expires after 50 rounds without renewal. Established ties add the adjustable decision bonus and influence movement. Ties connected to demoted politicians are removed; other memories of them remain. Cluster membership is represented by ties, not a separate organization agent.

## Political approval and elections

Default election interval 50 rounds, pre-election duration 10, corruption threshold 10 and minimum support 30%. These sample values come from the source. Campaigns recur on rounds 40–49, 90–99, and so forth; campaign bonuses end on election day. Each politician gets two independent 20% chances of a +0.1 decision bonus and a 20% chance of an extra nearby encounter attempt. Those bonus examples follow the supplied Python sketch; exact spatial selection is assumed.

Each citizen's approval probability for each politician is:

`clamp(0.5 + 0.35 × citizen.subjective − 0.8 × citizen.subjective × R + 0.2 × citizen.objective × loyalty + matchingPreferenceBonus, 0, 1)`.

The matching-preference bonus is 0.1. Completed vote-buying adds 0.25 to loyalty, capped at 1; loyalty decays by 3% per round. These approval/loyalty formulas are assumptions. Citizens independently approve each politician: this is an approval checkpoint, not a competitive election assigning exclusive votes. Support percentages across politicians need not sum to 100%. The interface shows expected current approval; election day samples each citizen and records realized approval in the log and agent export. Support calculations include inactive citizens. Elections are skipped when there are no citizens.

All politicians' support is evaluated before role changes. Demotion occurs only if signed score is strictly greater than the corruption threshold AND realized approval is strictly below the support threshold. This follows the source's most explicit AND rule. The description also contains looser references to punishment or loss of support alone; these do not create additional demotion rules here.

Demotion sets role to Citizen, signed score and decision count to zero, clears inactivity, and removes the politician's ties. Fixed preferences and weights, lifetime action counts, and memories remain. Optional replacement (on by default, adjustable) promotes an eligible pre-election citizen, resetting their score and decision count and preserving their lifetime preferences. Demoted politicians cannot be immediately reselected. Total population stays fixed. No eligible citizens means seats remain vacant. Replacement was raised in the earlier discussion but is not fully specified in the Word description; the recruitment mechanism is assumed.

## Interpretation and exports

Red/green is a behavioral classification, not a direct attitude or tolerance variable. Honest-state and corrupt-state counts include inactive agents; percentages by role use current roles, so elections may alter their denominators. The time series, event log and JSON remain complete; the visible log shows only the most recent 30 events. Counters are cumulative. Agent CSV contains final states and lifetime counters; history CSV contains each round's society-wide counts; full JSON adds settings, memories, links and all events. Full JSON is not an importable resume format.

No separate media agents, economy with budgets, policy distribution, empirical calibration, batch parameter sweeps, or broadcast mechanism are included. Those would require additional model definitions. All numerical rules are isolated in model.js and documented here for later revision.
