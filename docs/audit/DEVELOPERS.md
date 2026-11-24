# Developer and reproducibility guide

**v3.0 provisional release.** Start with [the hybrid extension](EXTENSION.html). New processes live in hybrid.js; system-view.js is the passive renderer. The v2.4 runtime and matching assets are preserved under /v2.4/. The prior annotation-only semantic baseline is retained as semantic-v2.4.json. Current semantic fingerprints are explicitly refreshed for the authorized behavioral release, not described as unchanged from v2.4. Historical continuity checks execute the archived engine against its pinned historical source. Calibration and the empirical Peru pilot are separate future tasks.


The application remains a static, dependency-free browser application. Development tools are pinned in `package-lock.json`; they are not loaded by the simulation. Node 20 or newer is recommended for rebuilding the audit package. Serve the repository root over HTTP(S); Web Workers do not run reliably from `file:` URLs.

## Read the code

Start with `model.js:createInitial`, `Simulation.step`, `Simulation.choose` and the policy-specific pathways. `adaptation.js` owns individual exposure/receptiveness, retained influence and evolving traits. `reporting.js` is an observation sidecar. `worker.js` owns paired/repeated runs; `visualization.js` contains pure readouts. `profiles.js`, `baseline.js` and `config.js` separate observations, transformations and engineering priors. `app.js` owns controls, inspection and browser persistence. Interface markup and styles are display concerns.

The full files, including comments, are available in the [annotated source index](SOURCE-INDEX.html). Named functions/methods and substantive data sections carry `[AK-…]` references. Local anonymous callbacks belong to their enclosing mechanism; exact expressions remain in the full source. A note explains the implementation rationale, not additional executable behavior.

## Rebuild and verify

From a full repository checkout:

```sh
npm ci --ignore-scripts --no-audit --no-fund
npm run docs:build
npm run docs:check
node --test --test-concurrency=1 reporting.test.js dynamics.test.js initialization.test.js model.test.js worker.test.js run-seeds.test.js audit.test.js visualization.test.js adaptation.test.js stress.test.js hybrid.test.js
```

The reporting regression test reads historical commit `4da71144763978c4967151efe9394ffe0e160dfd` through Git. A shallow checkout without that object cannot perform that particular check; fetch full history, as the workflow does. Do not replace it with a dummy model to obtain a pass. Other checks run against the current files.

`registry.json` is the authored mechanism register. `developer-notes.json` stores additional per-function notes. `OVERVIEW.md` and `TECHNICAL-INTRO.md` are authored introductions. `build-audit.mjs` deterministically generates narrative, technical submodels, crosswalk, source viewers, exact input tables and inventories from these plus current source. Generated Markdown and HTML are committed so GitHub Pages can serve them without runtime tooling. `DEVELOPERS.md`, `VERIFICATION.md` and `audit.css` are authored supporting files. Run both build and check after changing a source, note or registry entry.

`semantic-baseline.json` records normalized runtime syntax-tree fingerprints at the audited base commit. `manifest.json` identifies source hashes, semantic fingerprints, coverage and generated-file hashes. Positions/comments/raw literal spelling are excluded; equivalent static object-key spelling is normalized. This detects expression changes for this documentation-only revision; it is not a mathematical proof of behavioral equivalence or a digital signature. The manifest cannot hash itself and does not pretend to identify the later publication commit in advance. Use repository history or the URL's commit reference to pin that publication snapshot.

## Making a behavioral change

Before changing an equation or parameter, inspect the accepted rule, its technical entry, action vectors and evidence status. Preserve IDs for the same mechanism. Add a new ID or a documented amendment when the meaning changes. Update the accessible narrative, technical rule, parameter provenance and limitations together. Add a meaningful controlled check for a substantive change, then update the versioned baseline only as an explicit behavioral release; do not bypass the fingerprint check during an annotation-only revision.

Keep subjective beliefs separate from true process probabilities. Do not let rendering, inspection, reporting or export consume event randomness. Preserve keyed process names where exact replay should remain stable. Avoid reusing common event keys for unrelated draws. Match starting societies in counterfactual comparisons; change subsequent event seeds for new stochastic runs. Preserve currency transfers and shared staff-time invariants. Never infer realistic effect sizes from code-path existence or passing tests.

## Annotation-only changes in this edition

All ten runtime modules and the existing tests were formatted for inspection and annotated. The `reporting.test.js` UI extraction harness now locates `const Q = A.Reporting` and `function renderAssessment` with whitespace-tolerant syntax patterns, because exact compressed whitespace would fail after formatting. Its exercised code and assertions are unchanged. The duration-input assertion in `visualization.test.js` similarly accepts formatting whitespace between the same attributes. HTML and CSS were formatted for readable inspection; CSS declarations are unchanged. Main-page edits only add links to documentation; no new simulation controls or policy rules were introduced. Archived v1 remains untouched.

## Audit products and maintenance boundaries

Machine-readable `traceability.json`, `numeric-inventory.json`, `state-inventory.json`, `action-consequences.json` and `test-catalogue.json` support independent checks. Source links identify exact lines in this edition; mechanism IDs remain the durable cross-reference. Source-generated tables expose expressions and paths; they do not automatically infer the scientific meaning of every temporary variable or turn every numeric index into an empirical parameter. Use the technical schema and submodels for that interpretation.

Country observations and legal claims need dated external review when refreshed. If a theoretical chapter or private draft is unavailable for review, say so. A future empirical-validation report should record calibration targets, parameter ranges, sensitivity design, stochastic uncertainty, independent data and failures as well as successes. This package provides transparency for those audits; it does not claim those studies have already happened.
