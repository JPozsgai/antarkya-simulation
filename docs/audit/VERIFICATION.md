# Verification of this documentation edition

Documentation edition 1.0, 23 November 2026. Audited behavioral base: `9ceb5ae38510f10d2211366406d150500a364a95` (behavior 2.4.0, display 2.4.2). File fingerprints in the manifest identify the exact included source independently of the publication commit. All 28 runtime, interface, test and tooling files were recovered byte-for-byte from their uploaded source viewers after an execution-workspace interruption; independent SHA-256 checks matched every source hash. The repository recheck reconstructs derived documentation from these verified sources and records a fresh test log without changing model rules.

## Executed results

| Check | Result and evidence |
| --- | --- |
| Complete existing regression suite | **111 passed, 0 failed, 0 skipped** locally on Node v24.22.3 (259.534 seconds). The [actual repository recheck log](test-results.txt) records the final independent runner execution; its elapsed time and Node version may differ. |
| Runtime preservation | All ten normalized JavaScript syntax-tree fingerprints match the pinned audited base. Independently recomputed from Git objects, rather than trusting only the local working copies. |
| Interface/style preservation | Pinned Prettier normalization confirms identical HTML/CSS content after removing comments/blank lines, except the two declared audit-documentation link substitutions. |
| Documentation generation | All generated files reproduce exactly from committed sources. The checker rejects stale outputs. |
| Mechanism and design coverage | 57 mechanism IDs; all 62 original rules and six behavioral amendments mapped; AM07 explicitly preserved as a historical checkpoint. No unresolved registered source symbols. Mapping does not imply that every rule is fully implemented. |
| Source inventories | 2,674 numeric literals, 3,219 object definitions/member writes, 51 explicit nine-dimensional consequence vectors, and all 111 named tests indexed. |
| Cross-references | More than 34,000 local HTML links/targets checked, including mechanism and source-line fragments. Exact count is printed by `npm run docs:check` for the current generated edition. |
| Browser documentation QA | Managed desktop Chromium rendered the guide, accessible narrative, technical rule and full source viewer. A narrative link opened AK-DEC-01 and its source link targeted `Simulation.choose`. |
| Narrow reading view | Guide and narrative checked in a 393-pixel iframe (378-pixel content viewport with scrollbar). Both had document scroll width equal to viewport width after wrapping the commit hash; headings, navigation and collapsed index remained readable. This is responsive-document QA, not actual Android hardware testing. |

The initial full-suite attempt exposed an entrypoint check that searched the first literal occurrence of `model.js`: a new explanatory HTML comment preceded the real script tag. The comment was clarified to refer to the engine without that filename, and the final complete run passed all 111 tests. Formatting also required whitespace-tolerant extraction patterns in the reporting test harness and duration-input assertion; the exercised conditions and assertions remain the same. These are test/annotation maintenance, not behavioral repairs.

The [repository workflow](../../.github/workflows/model-checks.yml) repeats generation/reference/semantic checks, syntax checks and the complete regression suite on the documentation branch and `main`. [GitHub Actions](https://github.com/JPozsgai/antarkya-simulation/actions) supplies independent publication-time execution records. A workflow still running is not a pass; consult its actual completion status and commit.

## Reproduction

Use a full Git checkout, install the pinned development dependencies with `npm ci --ignore-scripts --no-audit --no-fund`, then run `npm run docs:check` and the test command in the [developer guide](DEVELOPERS.html). The reporting comparison requires historical Git object `4da71144763978c4967151efe9394ffe0e160dfd`. A shallow or source-only ZIP cannot reproduce that one check until history is fetched.

The manifest includes the audited base commit, source hashes, unchanged runtime fingerprints and generated-file hashes. It does not hash itself, claim a digital signature or claim to know the later publication commit in advance. The standalone execution log records this local test run, not a general benchmark or probability of scientific correctness.

## Verification limits

These checks establish engineering consistency and inspectable links for this edition. They do not establish empirical national validity, complete current legal fidelity, comprehensive model-design conformance, systematic sensitivity/uncertainty analysis, independent external replication or Android runtime/memory performance. The gap register and per-mechanism limits remain part of the documentation even when all engineering checks pass.
