# Country starting states · v2.3

Updated 23 November 2026. The start is now an **evidence-informed reconstruction**, not a new society with empty histories. It is still not a statistically calibrated reproduction of any country. A distribution produced by this model must not be described as observed national corruption prevalence.

## Observations, proxies and estimates

World Bank 2025 GDP PPP and WGI government effectiveness, rule of law and regulatory quality remain sourced observations in `profiles.js`. New observations and mappings are in `baseline.js`. No new macroeconomic variables are added.

Freedom House civil-liberties scores are taken from its 2026 country table. Its 2025 country reports supply three Electoral Process items and four Political Pluralism and Participation items. The latter proxies representation; it does not directly measure representativeness. Electoral process is not a literal probability of fair voting. Separate editions are explicitly identified because the latest summary does not supply the full detail used here.

| Country | Civil liberties, 2026 /60 | Electoral process, 2025 /12 | Pluralism/participation, 2025 /16 |
| --- | ---: | ---: | ---: |
| Nigeria | 24 | 6 | 9 |
| South Africa | 47 | 12 | 14 |
| Indonesia | 28 | 11 | 11 |
| India | 31 | 11 | 11 |
| China | 11 | 0 | 0 |
| Peru | 39 | 10 | 12 |
| Brazil | 43 | 10 | 13 |
| United States | 49 | 11 | 14 |
| Germany | 55 | 12 | 16 |
| Italy | 52 | 12 | 14 |

Each is rescaled to 0–100 without additional precision claims. Sources: [Freedom House 2026 country scores](https://freedomhouse.org/country/scores); individual 2025 and 2026 report links are generated per country in `baseline.js` and displayed in setup. Retrieval: 23 November 2026. China retains appointment rather than simulated competitive national elections.

Kinship, informality and public/private separation still lack comparable verified numeric evidence. They retain **neutral editable assumptions of 50**, clearly labeled unmeasured. No national moral character is inferred from GDP, geography or political rights. Organization counts, role composition, political-calendar phase and central allocation remain explicit scenario estimates. These gaps are not repaired by inventing scores.

## Existing anti-corruption arrangements

Function-specific mandates, national institutions and procedural restrictions documented in [COUNTRY-EVIDENCE.md](COUNTRY-EVIDENCE.md) are retained. OECD 2026 Public Integrity Indicators add the following narrow observations, expressed as percentages of criteria fulfilled:

| Country | Conflict rules | Conflict practice | Public-information rules | Public-information practice |
| --- | ---: | ---: | ---: | ---: |
| Peru | 89 | 33 | 89 | 92 |
| Indonesia | 100 | 56 | 56 | 58 |
| Brazil | 100 | 0 | 78 | 62 |
| United States | 100 | 89 | 67 | 54 |
| Germany | 22 | 11 | 89 | 58 |
| Italy | 100 | 22 | — | — |

The six country notes are linked in setup and `baseline.js`. These observations cover specific instruments and source-defined scopes. **They are not coverage probabilities, corruption rates, or comprehensive ratings of national safeguards.** Missing criteria or unavailable submission/verification data can depress a practice score. Germany's broader administrative safeguards, for example, are not erased by declaration-focused criteria. An unscoped instrument is never treated as absent.

The numerical bridge to the toy engine is an **estimated mapping**, not a measured effect:

| Initial quantity | Mapping; all normalized 0–1 unless stated |
| --- | --- |
| Ordinary within-mandate formal coverage | Common provisional .75; competence/jurisdiction gates still apply |
| Coverage for a mapped instrument | .40 + .45 × OECD regulations fraction |
| Ordinary operational capability | .12 + .65 × government effectiveness fraction; organization noise ±.11; bounded .08–.90 |
| Capability for a mapped instrument | 75% ordinary capability + 25% × (.15 + .65 × practice fraction), then the same noise/bounds |
| Protection coverage exceptions | Nigeria .40; India .45, provisional scope estimates reflecting dated limitations described in country notes |
| Record quality | .12 + .65 × rule-of-law fraction + organization noise ±.10 |
| Disclosure quality | .12 + .55 × government-effectiveness fraction + noise ±.10 |
| Editorial independence | .10 + .60 × civil-liberties fraction + individual organization draw 0–.20 |
| Initial perceived financial accountability risk | .10 + .65 × rule-of-law fraction + centered individual noise; bounded .05–.85; a belief prior, not true sanction probability |
| Perceived lawful control / knowledge | Previous heterogeneous priors shifted by (GE−50)/200 and (GE−50)/250 respectively, bounded 0–1 |
| Initial institutional trust | .15 + .65 × government-effectiveness fraction |
| Personal income, costs and opening balances | Prior heterogeneous normalized RU values multiplied by bounded sqrt(GDP PPP / 20,000), .60–1.80; not actual household incomes or inequality estimates |

Mappings only apply in their named channels. Political scores are not combined into a general corruption score. The coefficients, scope estimates and noise widths require sensitivity analysis and empirical calibration. OECD scores are deliberately given a minority weight in capability, with nonzero floors, rather than converted into literal success or compliance probabilities.

## Reconstructing history

1. Construct the same 1,000 synthetic people and simplified organizations from the country and fixed society seed. Person-level class affinities provide shared structure across support for organizations of the same category, alongside organization-specific variation. Affinity never implies membership or corruption.
2. Set the clock to month −12. Run twelve monthly updates, ending at month 0, with **no newly selected reform**. All actors are eligible throughout this period. The same decision, resource, encounter, reference, information, organization, service, accountability and recovery rules run during this year. This generates coherent prior conduct rather than drawing an arbitrary common 8% corrupt flag.
3. Preserve real model outputs: last 24 meaningful opportunities, completed acts, recovery choices, beliefs, learning, motives, receipts, balances, memberships, mature ties, role expectations, service experience, pending services, stories and case stages. Initial decision traces retain the three most recent realized choices; discarded historical alternatives have no further behavioral use and reduce mobile snapshot size.
4. Keep the reconstructed year's aggregate history and metrics in `initialization`. Reset intervention-period cumulative counters to zero. Inherited cases and services still consume future resources; their subsequent processing counts when it occurs. The map and recent class rates include inherited choices, while completed-act and encounter-impact counters concern the period after adoption.
5. Freeze the entire resulting state. Every reform, no-new-reform comparison, repetition and duration uses it. Future-event seeds cannot change this history. The reconstruction has its own stream derived from the society seed and country. Negative month labels mean before reform adoption; historical IDs cannot collide with positive-month IDs.

Country-condition overrides deliberately change the reconstructed past as well as the subsequent run. Underlying person draws, home locations and random-key identities remain stable; experienced support, careers, finances and learning may respond to the changed conditions. Simply selecting different reforms never reconstructs a different past.

This is a finite reconstruction, not equilibrium calibration or evidence that twelve months are sufficient to reproduce a country. Service queues and casework are model outputs, not estimated national counts. Bribery-victimization survey percentages are not assigned to agents as perpetration rates. All countries still need external behavioral targets, jurisdiction-specific resource data and sensitivity assessment before prediction or ranking.

## Saved scenarios and checks

v2.3 rejects earlier starting snapshots. Their setup can be recreated under the new rules. Exact exported v2.3 starts are verified against the deterministic construction; edited histories, accounts, beliefs or ongoing cases are rejected. Reconstructing only consumes the initialization stream and does not use the selected future-event seed.

Dedicated checks cover country proxy values and overrides, nonzero safeguards under missing practice criteria, activity in every pre-policy month, coherent starting histories and map coordinates, inherited work advancing across adoption, exact paired state, rejection of edited starts, unique record IDs, bounded personal learning and conserved money. The retained regression and stress checks continue to cover all countries and policy options.
