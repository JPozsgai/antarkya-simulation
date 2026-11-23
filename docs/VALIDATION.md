# Antarkya v2.3 validation

23 November 2026 · country starting-state correction

```sh
node --test --test-concurrency=1 initialization.test.js model.test.js worker.test.js run-seeds.test.js audit.test.js visualization.test.js adaptation.test.js stress.test.js
```

The release suite contains 81 checks. Local verification passed the 80 other checks in the complete run, then passed the all-country extreme-condition check after its fixture was adjusted to recognize compacted pre-policy traces. That rerun executes all twenty country/extreme combinations. The seven dedicated initialization checks were also rerun after final cleanup. GitHub Actions executes the complete final suite before publication. Test files run sequentially to limit concurrent memory pressure from reconstructed snapshots.

The new checks establish that every pre-policy month has active eligible actors; country proxy values and overrides reach the engine; the initial map derives from actual modeled histories; inherited records, experiences and resources persist; future seeds/reforms cannot redraw the past; edited imported starts are rejected; ongoing cases advance across adoption; historical/future IDs remain unique; and money and shared staff time remain conserved. Existing checks retain all-country/all-tool runs, a maximum 240-month Peru/ACA run, evolving personal profiles and five paired worker repetitions.

Pre-policy traces retain realized consequences but discard alternatives no longer used by any decision. Future decision traces must still contain finite alternatives. The cached starting state is independent of the future-event stream. The full counterfactual branch remains exactly paired when no new reform is selected.

No new browser or Android execution test was available for this release. Node executes the shared browser engine and the actual worker scripts, and the entrypoint check verifies script versions and UI element hooks. Those checks do not establish mobile timing or rendered layout. The compressed starting snapshot was about 8.4 MiB in a local Peru check; construction took about 1.5 seconds in the available Node environment. These are engineering observations, not Android performance claims.

Evidence-informed initialization does not validate national corruption prevalence, cultural scores, mapping coefficients, jurisdiction completeness or forecast accuracy. [INITIALIZATION.md](INITIALIZATION.md) lists observations, estimated mappings and remaining gaps. Version 2.3 deliberately requires a new starting-state format.

---

## Historical v2.2 verification record

The following was recorded for the earlier release and is retained as provenance; its publication-status wording does not describe the current release.

# Antarkya v2.2 validation record

23 November 2026 · draft review branch; live site unchanged

## Automated execution

```sh
node --test model.test.js worker.test.js run-seeds.test.js audit.test.js visualization.test.js adaptation.test.js stress.test.js
```

**74 native Node checks passed locally**: the retained 46 regression/causal/visualization/worker/stability checks plus 28 checks for policy mapping and individual adaptation. The same **74/74 checks and syntax checks passed on GitHub Actions**, [run 45094790865](https://github.com/JPozsgai/antarkya-simulation/actions/runs/45094790865), for code commit `06cf4579a8664089bc8d96f311e23946d5e13673`. The following changes only harmonize the accepted-rule register and record these results; the workflow also checks the final review head.

The current run includes all ten countries/all twelve reforms, low/high extreme conditions, money/shared-time invariants, a 240-month Peru/ACA simulation, exact replay, fixed initialization traits under controlled comparisons, identity-preserving transitions, coercion/refusal and sustained integrity recovery. Knowledge evaluation is read-only and independent of formal education adoption.

The new adaptation tests cover all twelve targeted mappings; per-agent numerical traits; no selection-only or uninstalled-program learning; trust/motive/history-sensitive receptiveness; distinct acceptance/magnitude draws; shared diminishing caps; overlapping ceilings; decay without history reset; reinforcement and late learning after initial resistance; gradual response to contradictory evidence; evolving motives/traits; performed-work skill and receipt-based financial expectations; real choice consequences; context-specific reporting knowledge; and replay. Continuous reinforcement is also checked over 1,200 isolated monthly updates, beyond the application's 240-month maximum.

Protection perception is explicitly checked against accidental reads of hidden true response capacity. A staffing proposal prevented by merit enforcement is checked against being misclassified as completed patronage. The inspector and completed JSON expose numerical profiles; UI inspection cannot change learning or event draws.

## Browser checks and limits

A desktop browser completed a paired Peru/education scenario and displayed an actual agent's exposure/acceptance/retention history. The updated initial education outcome was verified identical between baseline and reform before delivery. The final browser build completed a 60-month Peru/education pair: expected retained knowledge was 47.8% in the baseline and 48.3% under the reform, after starting equal. These figures describe one stochastic test trajectory, not a country-policy effect estimate. An inspected agent showed four education exposures with two attitude updates accepted and partial retained effects. A completed scenario was saved and reloaded for review without starting a new run. Subsequent changes only validate/escape imported profile summaries; a dedicated numerical-summary test covers that boundary. This is desktop browser QA, not an actual Android timing or memory benchmark.

Numerical influence ranges, trait priors, alignment functions, decay rates and learning coefficients remain explicit provisional assumptions. Tests establish the intended numerical pathways and engineering bounds; they do not validate empirical effect sizes, full national legal fidelity or substantive forecast accuracy. Country calibration and systematic sensitivity analysis remain research work.

Rules 2.2.0 deliberately reject older initial states; unchanged random characteristic streams are distinct from the versioned state identity. Main and the live Pages deployment remain unchanged until publication is separately requested.
