# Provisional hybrid release — recovery checkpoint

Status: NOT RELEASED. Do not merge this checkpoint into main as a completed release.

On 24 November 2026, Joseph Pozsgai-Alvarez authorized both the agreed provisional ABM–SD extension (including governance/economic feedback) and the month-by-month system view, with creator/project ownership credit. Empirical Peru calibration and pilot work remain the next stage.

The execution workspace disconnected before publication. These four recovered documentation files preserve the accepted D01–D32 register and implementation specification. Runtime edits and the generated audit documentation were still local when the environment became unavailable and are not included in this commit. The extension document describes the prepared implementation; it must not be interpreted as behavior already shipped on main.

## Last observed validation

- Earlier full suite: 129 tests passed, 0 failed, including 240-month Peru and all-country extreme-condition stress checks.
- Added saved monthly-history validation: all 19 hybrid tests passed.
- Final combined 130-test run was in progress when the workspace disconnected; no final result was obtained.
- Documentation check passed: 83 mechanisms, 12 runtime fingerprints, 117 reproducible generated files and 41,061 local links.
- Browser preview: 1,000 agents; six-month paired run completed; completed results saved and loaded with monthly history intact. Policy, governance and economic stock/flow diagrams and ownership footer were inspected. A final rule-link navigation could not be confirmed after the browser connection failed.
- No release commit was pushed; no pull request was merged; GitHub Pages remains on the original main commit.

## Recovery

Original main ancestor: 44a23edb80485f26ff397f5e7b6b79a426c78b0b.
Unavailable environment: ccarenv_b64_Y2NhcmVudl82YTk0ZDIwMGIxOGM4MTkxOGUxMTg4MjJjYzg3MGMyMA.
Checkout: /workspace/scratch/d05f60c3ed99/antarkya-checkout.
Local branch: codex/provisional-hybrid-release.
Prepared transport: /tmp/antarkya-publish-elements.json (148 files, approximately 10.8 MB of source/documentation).
Final suite log: /tmp/antarkya-v3-publication-tests.log.
Earlier complete 129-test log: /tmp/antarkya-v3-final-tests.log.
New 19-test log: /tmp/antarkya-hybrid-final.log.
Audit log: /tmp/antarkya-v3-docs-check.log.

If that workspace can be restored, recover those exact source files, inspect the final test log, replace the historical published test-results.txt, rebuild/check the documentation, commit the full release to this branch, run GitHub Actions, merge after successful checks, and verify GitHub Pages.

If recovery is impossible, reconstruct the runtime from the retained specification and original main, then repeat all engineering checks before publication. Never label the missing implementation as committed or empirically calibrated.
