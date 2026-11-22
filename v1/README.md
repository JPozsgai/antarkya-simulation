# Antarkya simulation

A dependency-free agent-based corruption simulation built for Android browsers. Open `index.html` through GitHub Pages or any static web server. No account, server-side computation, API key or package installation is required to run the model.

Based on Joseph Pozsgai-Alvarez's `script_explanation.docx`. This is a reconstruction of the description, including its pending sections, rather than a recovery of the original Python script. See [MODEL.md](MODEL.md) for assumptions and equations. The interface also explains them under **How to read this model**.

## Use

Choose **Run simulation**, **Pause**, or **Step**. Expand **Edit simulation settings**, change the conditions and choose **Apply settings & reset** for a new run. Use the same settings and seed to reproduce a run. Shape identifies agent type; red/green indicates the balance of corrupt/honest decisions. Tap an agent for details. Lines represent repeated corrupt ties. Support bars show expected approval; actual election results appear in the event log. Leaving the browser tab pauses the simulation.

Export **Agents CSV**, **History CSV**, or **Full JSON**. The JSON includes the full settings, agent state, memories, network links, complete event log and time series. JSON is an analytical export, not a resumable checkpoint. CSV files contain the seed and model version; keep the full JSON for all settings needed to reproduce a run.

## Publish on GitHub Pages

1. In the repository, open **Settings → Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Select **main** and **/(root)**, then **Save**.
4. GitHub will display the published URL when deployment succeeds.

GitHub Free supports Pages from public repositories. A private personal repository requires an eligible paid plan, such as GitHub Pro. A Pages site may be public even when its source repository is private. Choose visibility deliberately in GitHub; this project does not change repository visibility.

## Local verification

With Node.js installed, run `node --test model.test.js`. To serve locally, use any static server (for example, `python3 -m http.server 8000`) and open its URL. The simulation itself has no dependencies.

## Files

- `model.js`: seeded simulation engine, shared by browser and Node tests.
- `app.js`: browser controls, canvas displays, downloads.
- `index.html` and `style.css`: mobile-responsive interface.
- `model.test.js`: deterministic runs, elections, campaign timing and state invariants.
- `MODEL.md`: explicit source decisions and reconstruction assumptions.

This is an exploratory model. Parameters have not been empirically calibrated. “Corrupt state” is a behavioral score classification, not a direct measurement of corruption tolerance.
