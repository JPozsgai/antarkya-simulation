# Antarkya v2

A working, dependency-free browser simulation of 1,000 people, organizations, corruption and anti-corruption reform. Run it at **https://jpozsgai.github.io/antarkya-simulation/**. The earlier v1 remains at `/v1/`.

Choose one of ten countries, select any combination of twelve reforms, set initial resource mobilization and duration, then Run. The engine computes a reform branch and a no-new-reform baseline from exactly the same starting society. Repetitions reuse that society and vary subsequent random events. The map shows the first reform run; assessment compares computed results.

This is an **exploratory implementation, not an empirically validated forecast**. Country sources support macro descriptors and simplified institutional functions. Numeric political/cultural estimates, role/membership distributions, resource allocations, costs and behavioral coefficients remain explicit provisional assumptions. See [MODEL.md](MODEL.md), [country evidence](docs/COUNTRY-EVIDENCE.md), and the [agreed decision register](docs/AGREED-RULES.md).

## Features

- Nine overlapping social/economic/political × self/group/public motive weights, with TPB and subjective random-utility decisions for all roles.
- Distinct organizational membership, affinity/support, informal trust and funding relationships; stable homes and geographically constrained contacts.
- Persistent accounts and conserved transfers, setup delays, shared staff capacity, service/case backlogs, changing implementation rates and selective organizational responses.
- Journalism/social sharing, imperfect claims, corrections, reporting, screening, investigation and separate decision routes.
- Country-specific simplified institutional topology; competitive political review versus China's personnel-appointment route. These approximate procedures, not complete national electoral/legal systems.
- Role colors, integrity shapes with sustained recovery criteria, prominent networks, influential-actor inspection and a live event tracker.
- Four assessment levels with measure-specific outcomes, joint impact, baseline comparisons and optional repeated runs.
- On-device scenario/result saving, verified JSON import/export and CSV history/agent/event exports.

## Run and test

Serve this directory with any static HTTP server; Web Workers need an HTTP(S) origin. No installation, external runtime, API key or backend is required for the application. With Node.js:

```sh
node --test model.test.js worker.test.js run-seeds.test.js
```

Browser runs execute in a worker, keeping controls responsive. Each new Run/Run again uses a fresh event seed by default while preserving the initialized society. For exact reproduction, enable **Reuse event seed (exact replay)** in Comparisons and reproducibility. Pause/continue and Step preserve the active event seed. The visible seed is recorded in JSON/CSV exports. Repetition batches show individual conduct and policy-outcome results in a collapsible table. Pace changes rendering/scheduling, not model randomness. Hiding the page pauses the run. Save/load preserves the initial society and completed results; live checkpoint/resume is not supported.

GitHub Pages deploys the root of `main`; `.nojekyll` is retained. Asset URLs include the model version to reduce stale-cache mixing. Repository history and `/v1/` preserve the previous implementation.

## Files

`model.js` implements the simulation; `config.js` contains visible engineering priors and simplified country organizations; `profiles.js` contains sourced descriptors and evidence metadata. `worker.js` runs paired/repeated simulations. `app.js`, `index.html` and `style.css` provide the one-page interface. Source documents and the numerical design proposal are in `docs/`; where a proposal differs from the operational code, `MODEL.md` explains the implementation boundary.

Scenario files stay on the visitor's device unless exported. Complete a run to obtain the full tracked log; the live feed and interim event CSV show the most recent 200 updates. A browser may clear local storage, so retain a JSON backup for important scenarios.
