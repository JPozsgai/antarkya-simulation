# Antarkya v2.1 validation record

23 November 2026 · review branch

## Executable checks

```sh
node --test model.test.js worker.test.js run-seeds.test.js audit.test.js visualization.test.js stress.test.js
```

There are 45 checks: 20 existing regression/lifecycle/replay checks, 19 focused causal checks, four analytical-display/entrypoint checks and two extended stability checks.

The complete 44-check suite passed in the available JavaScript runtime before the final additional out-of-scope false-positive safeguard. After that safeguard, all 19 causal and four display/entrypoint checks passed. The JavaScript runtime used a compatibility harness for Node test/assert/fs/vm interfaces; it is not a substitute for native Node worker-context verification.

The repository workflow runs syntax checks and the same suite under native Node on GitHub Actions. Its result is reported on the review commit. No browser or Android performance claim follows from those results.

## What the checks establish

- Ten-country initial structure: 1,000 identities, all four classes, positive normalized motives, support distinct from memberships.
- Identical initial state across matched branches/repetitions; fresh default event streams and exact intentional replay.
- Conserved resources and finite shared staff time with all twelve tools; no instantaneous full implementation.
- Actual coercion/refusal classification, sustained recovery and identity-preserving staff transitions.
- Separate civil, criminal, administrative, specialist and country referral paths.
- Controlled consequences of skill, directional trust/affinity, legal scope, declarations, penalty collection, financial security, editorial independence and experienced stakeholder reactions.
- Policy priority independent of menu/storage order.
- Bounded recent opportunity rates, no inactivity-driven history erasure and read-only analytical projection.
- No capture classification based solely on network density.
- A 240-month Peru/ACA run and all ten countries under low/high extreme political, cultural, administrative and allocation conditions.

Tests intervene on a specified mechanism with common starting characteristics and keyed draws; they do not infer causality solely from a different output under a regenerated society.

## Limits

A real browser inspection and actual Android timing/memory benchmark remain pending. Syntax/entrypoint/projection tests verify code paths, not responsive layout or touch interaction. Detailed legal/calibration data, empirical country validation and systematic parameter sensitivity are separate research work. Tests can expose inconsistency and unintended dependencies; they cannot prove every possible scenario bug-free.

Rules 2.1.0 use a deliberately different saved-state version from 2.0.0, preventing silent mixing of rules and histories.
