# Verification record

This edition publishes provisional behavioral and display release **3.0.0**, following the accepted D01–D32 design register. It intentionally changes v2.4 behavior. The previous application and its original runtime are retained under `v2.4/`; prior semantic fingerprints are preserved in `semantic-v2.4.json`.

## Executable checks

The full suite exercises accounting conservation, finite resources and person-time, all policy mechanisms, deterministic paired runs, saved results, display behavior and stress conditions across countries. Added hybrid checks cover maintenance and bounded repair, demand-constrained value added, work-dependent investment, tax arrears, protected appointments, costly coalitions, eligibility denominators, audience beliefs, passive monitoring and valid saved monthly histories. The final full run passed **130 tests, 0 failures, 0 skipped** on 24 November 2026. This includes the maximum 240-month Peru run and all-country extreme-condition checks. The full publication log is supplied in [test-results.txt](test-results.txt).

The archive regression compares the archived v2.4 application against the historical Git engine. Current v3 results are expected to differ. Some controlled tests were updated to isolate their original mechanisms under actual employer income and finite shared time; these are documented behavioral changes rather than claims of unchanged v2.4 outcomes.

The documentation check verifies 83 mechanism entries, accepted decision mappings, function references, source annotations, the current release's normalized runtime fingerprints, reproducible generated documentation and local links. The release manifest identifies the pre-extension ancestor and current source hashes; it does not claim to know the eventual publication commit in advance.

## Browser workflow

The preview was checked with 1,000 agents: initialization, monthly stepping, recorded economic/governance/policy diagrams, replay controls, rule links and creator ownership credit. The previous application remains separately accessible. GitHub Actions repeats the complete engineering checks on the release branch and main; consult the actual commit and completed workflow status in [Actions](https://github.com/JPozsgai/antarkya-simulation/actions).

## Reproduction and limits

Use a full Git checkout, `npm ci --ignore-scripts --no-audit --no-fund`, `npm run docs:check`, and the full test command in [DEVELOPERS.html](DEVELOPERS.html). The historical archive comparison requires Git object `4da71144763978c4967151efe9394ffe0e160dfd`.

Engineering checks do not establish empirical national validity. New coefficients remain disclosed engineering assumptions. Peru calibration, the empirical pilot, systematic uncertainty analysis, external replication and Android performance measurement are pending. No previous unrecorded pilot is represented as evidence for this release.
