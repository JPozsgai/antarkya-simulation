# How to use this audit documentation

This is a description of the executable Antarkya model at provisional behavioral/display version **3.0.0**, audited against repository commit **44a23edb80485f26ff397f5e7b6b79a426c78b0b**. Documentation edition 2.0, 24 November 2026. The named commit is the pre-extension ancestor, not a claim that v3 exists in that commit; current files are identified by manifest hashes. This is an explicitly authorized behavioral release. Read the [hybrid release specification](EXTENSION.html) first: calibration and Peru pilot validation remain pending. Created and owned by Joseph Pozsgai-Alvarez.

Start with the [accessible narrative](NARRATIVE.html). For each mechanism it explains the idea, how the simulation represents it and what that representation leaves out. Follow a reference such as **AK-DEC-01** to the corresponding [technical rule](TECHNICAL.html#ak-dec-01), its source units, parameter records and checks. The [full annotated source](SOURCE-INDEX.html) reproduces all active JavaScript, tests, interface markup, styles and development tooling with line links. The actual executable files in the repository carry the same reference codes.

| Reader or audit question | Best starting point |
|---|---|
| What society and decisions does this model represent? | [Accessible narrative](NARRATIVE.html) |
| What are the equations, state variables and update order? | [Technical specification](TECHNICAL.html) |
| Did an accepted design rule make it into code? | [Decision crosswalk](RULE-CROSSWALK.html) |
| Which values came from evidence and which are assumptions? | [Country and policy inputs](INPUTS.html), [numeric literals](NUMERICS.html), [sources](SOURCES.html) |
| What consequences are attached to each action? | [Full action-consequence catalogue](ACTIONS.html) |
| What state is stored and changed? | [State and assignment inventory](STATE.html) |
| What do output, outcome and impact actually measure? | [Measurement dictionary](MEASUREMENT.html) |
| What does each test establish? | [Test catalogue](TESTS.html), [verification record](VERIFICATION.html) |
| What remains absent, simplified or unvalidated? | [Limits and gaps](GAPS.html) |
| How can I reproduce and maintain this package? | [Developer guide](DEVELOPERS.html), [manifest](manifest.json) |

## Reading the references

Codes identify mechanisms, rather than line numbers: `AK-DEC-01` is the subjective decision rule; `AK-ADP-01` individual receptiveness; `AK-POL-EDUCATION` the education reform; `AK-MEA-02` the comparative impact estimand. Original accepted decisions retain their `R01`–`R62` codes and later `AM01`–`AM06` amendments. `AM07` is a historical implementation checkpoint. These are distinct from behavioral version numbers, country ISO codes and policy keys such as `education`.

The registry connects **83 mechanisms** to the original decisions, source symbols, explanations, technical statements, limitations, evidence provenance and relevant test files. Symbols and parameter inventories are extracted from the files that ship with this edition. A related test is a route to inspect assertions; it is not proof that every statement in a mechanism has been empirically validated.

**Implemented** means an executable pathway exists. **Provisional** means its numerical parameters or representation are assumptions requiring calibration. **Partial** means the implementation covers only part of an agreed concept. **Not implemented** means an agreed intention or earlier proposal does not currently have the corresponding process. The limitations beside every mechanism and the gap register qualify the broad registry status.

## What this documentation can establish

It makes the current rule system inspectable and reproducible and distinguishes subjective beliefs, actual world processes and observation-only reporting. A source hash identifies the files included. A normalized syntax-tree fingerprint pins the declared runtime expressions for this behavioral release. Controlled tests check invariants, causal pathways and regressions.

None of these establishes real national corruption prevalence, a causal estimate of a real reform's effect, comprehensive national legal fidelity or a forecast. Country observations inform a synthetic starting society; resource units, staffing, behavioral coefficients and most policy ranges remain modeling assumptions. Complete behavioral validation and systematic sensitivity analysis remain research work.

## Provenance and historical material

The decision register, original supplied description and later user decisions explain why the model was constructed. Earlier numerical proposals and older documentation remain in the repository for provenance. **Where they disagree, this edition describes current code and records the difference; it does not imply that the difference was substantively approved.** The original Word description's v1 binary preferences, wandering, score-reset demotion and campaign shortcuts were superseded. Archived `/v1/` source is available separately and is outside the active v2 conformance checks.

Private drafts and supplied chapters are identified by title and role where possible but are not redistributed here. Stored source URLs and dates are evidence provenance, not a claim that every publication or legal condition was freshly revalidated for this documentation edition.
