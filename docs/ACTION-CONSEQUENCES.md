# Antarkya v2.2 action consequences

23 November 2026 · generated from current model source. Each array is [self, relevant group, public]. Coefficients are provisional utility valuations, not empirical effect sizes. Dynamic expressions use perceived or accessible circumstances. The separate policy-specific adjustments, receptiveness and history rules are documented in [POLICY-INFLUENCE.md](POLICY-INFLUENCE.md).

| Code location / option | Social | Economic | Political |
| --- | --- | --- | --- |
| model.js:140 · prioritize | `[0,.05,.15]` | `[0,.05,.3*(1-perf.delivery)]` | `[0,.1,.4*perf.support]` |
| model.js:141 · defer | `[0,0,0]` | `[.04,0,0]` | `[0,0,0]` |
| model.js:178 · Dynamic priority/allocation/candidate | `[0,0,.1]` | `[0,0,need]` | `[0,0,need]` |
| model.js:180 · implement | `[0.1,0.15,0.45]` | `[.05,.35,.9]` | `[0.05,0.1,0.65]` |
| model.js:180 · selective | `[0.1,0.4,0.05]` | `[.15,.6,.3]` | `[0.15,0.35,-0.1]` |
| model.js:180 · resist | `[0.1,0.2,-0.2]` | `[.1,.2,-.4]` | `[0.05,0.3,-0.35]` |
| model.js:180 · redirect | `[-0.2,0.1,-0.5]` | `[.8,.35,-.8]` | `[0.2,0.15,-0.7]` |
| model.js:187 · increase | `[0.1,0.1,0.4]` | `[-.1,.2,.25+.65*feedback.delivery]` | `[.2*(2*feedback.support-1),.25,.6-.03*feedback.wait]` |
| model.js:187 · hold | `[0,0.15,0.1]` | `[.1,.3,.25]` | `[0.1,0.2,0.1]` |
| model.js:187 · decrease | `[0,0.1,-0.2]` | `[.25,.5,-.35-.3*feedback.delivery]` | `[.2*(1-feedback.support),.3,-.3]` |
| model.js:187 · narrow | `[-0.1,0.2,-0.4]` | `[.4,.6,-.6]` | `[.3*(1-feedback.support),.45+.2*feedback.resistance,-.6]` |
| model.js:187 · approve | `[0.1,0.15,0.2]` | `[.05,.2,.6]` | `[0.1,0.1,0.4]` |
| model.js:187 · withhold | `[0,0.1,-0.15]` | `[.2,.2,-.3]` | `[0.05,0.2,-0.3]` |
| model.js:187 · approve | `[0.05,0.25,0.2]` | `[.05,.4,.5]` | `[0.1,0.5,0.3]` |
| model.js:187 · withhold | `[0,0.15,-0.15]` | `[.15,.3,-.2]` | `[0.15,0.3,-0.2]` |
| model.js:189 · report | `[-0.1,0,0.65]` | `[-.1,0,.7]` | `[0,-0.05,0.6]` |
| model.js:189 · stay silent | `[0.1,0.1,-0.15]` | `[.05,.1,-.2]` | `[0,0.1,-0.3]` |
| model.js:190 · lawful | `[0.15,0.1,0.35]` | `[.12,.1,.65]` | `[0.05,0.02,0.2]` |
| model.js:190 · offer improper advantage | `[-0.2,0.15,-0.4]` | `[gain,.35,-.85]` | `[kind==='political pressure'\|\|kind==='vote buying'?.7:.05,.25,-.65]` |
| model.js:190 · decline / defer | `[0,0,-0.1]` | `[-.15,0,-.05]` | `[0,0,-0.1]` |
| model.js:191 · perform duty | `[0.15,0.1,0.5]` | `[.1,.1,.6]` | `[0.05,0.05,0.35]` |
| model.js:191 · accept | `[-0.2,0.1,-0.45]` | `[.6,.3,-.8]` | `[0.1,0.2,-0.5]` |
| model.js:191 · demand payment | `[-0.35,0,-0.6]` | `[.8,.2,-.9]` | `[0.2,0.1,-0.7]` |
| model.js:192 · pay under coercion | `[-0.2,0.05,-0.1]` | `[-bribe,.05,-.1]` | `[0,0,0]` |
| model.js:192 · refuse coercion | `[0.1,0,0.3]` | `[-.45,0,.35]` | `[-0.1,0,0.3]` |
| model.js:212 · process | `[0.1,0.1,0.5]` | `[.1,.1,.8]` | `[0.1,0,0.65]` |
| model.js:212 · delay | `[0,0.2,-0.2]` | `[insider?.65:.1,insider?.5:.1,-.4]` | `[0.1,0.35,-0.45]` |
| model.js:212 · dismiss | `[-0.05,0.1,-0.3]` | `[insider?.5:.05,.1,-.3]` | `[0.1,0.2,-0.3]` |
| model.js:218 · leave reporter alone | `[0.1,0,0.3]` | `[.1,0,.2]` | `[0,0,0.25]` |
| model.js:218 · retaliate | `[-0.3,0.1,-0.5]` | `[.3,.4,-.6]` | `[0.2,0.3,-0.6]` |
| model.js:220 · publish | `[0.25,0.2,0.7]` | `[.2-dependence,.3,.65]` | `[0.05,.1*independence,.65]` |
| model.js:220 · withhold | `[-0.15,0.2,-0.4]` | `[.1+dependence,this.related(editor,this.agents[subject])?.6:.1,-.2]` | `[0.1,.2+dependence-independence*.3,-.45]` |
| model.js:223 · share | `[0.15,0.1,0.4]` | `[.1,.25,.35]` | `[0,0.05,0.25]` |
| model.js:223 · do not share | `[0,0,0]` | `[.05,.05,0]` | `[0,0,0]` |
| model.js:225 · fund | `[0.1,0.4,0.05]` | `[-.2,.8,.1]` | `[0.1,0.45,0.05]` |
| model.js:225 · withdraw / do not fund | `[0,-0.1,0]` | `[.15,.1,-.1]` | `[0,-0.15,0]` |
| model.js:225 · accept | `[0.1,0.3,0]` | `[.1,.7,.2]` | `[0.1,0.15,-0.1]` |
| model.js:225 · refuse | `[0.05,0.1,0.3]` | `[0,.1,.45]` | `[0,0,0.2]` |
| model.js:227 · admit | `[0.1,0.45,0.1]` | `[.05,.5,.2]` | `[0.05,0.2,0.1]` |
| model.js:227 · decline | `[0,0.05,0]` | `[.05,.1,0]` | `[0,0,0]` |
| model.js:228 · give notice | `[0.2,-0.2,0.05]` | `[.2,-.1,.15]` | `[0.05,-0.1,0]` |
| model.js:228 · stay | `[0.1,0.2,0]` | `[.05,.2,.05]` | `[0,0.1,0]` |
| model.js:228 · apply | `[0.2,0.6,0.1]` | `[.1,.5*target.affinity,.2]` | `[0,0.3,0.1]` |
| model.js:228 · remain unaffiliated | `[0,0,0]` | `[.05,.05,0]` | `[0,0,0]` |
| model.js:229 · merit | `[0.2,0,0.5]` | `[.1,.2,.8]` | `[0.05,0,0.45]` |
| model.js:229 · connection override | `[-0.2,0.35,-0.4]` | `[.4,.7,-.6]` | `[0.2,0.5,-0.5]` |
| model.js:230 · rotate | `[0.05,0,0.2]` | `[.05,.1,.6]` | `[0,-0.1,0.4]` |
| model.js:230 · retain | `[0.1,0.3,0]` | `[.15,.3,0]` | `[0.05,0.2,-0.1]` |
| model.js:231 · Dynamic priority/allocation/candidate | `[0.15,0.3,0.1]` | `[this.related(incumbent,a)?.4:.1,.4,a.skill*.7]` | `[a.skill*.2,.5,a.skill*.4]` |
| model.js:232 · Dynamic priority/allocation/candidate | `[0.1,0.25,0.2]` | `[.15*(1-rep),affinity*.7,.8*(1-rep)*(.5+s.env.representation/100)]` | `[.25*(1-rep),affinity*.85,.7*(1-rep)*(.5+s.env.representation/100)]` |
| model.js:232 · abstain | `[0,0,0]` | `[.05,0,0]` | `[0,0,-0.05]` |

`gain`/`bribe` identify encounter stakes; `insider` comes from actual directional relationship access; `rep` is perceived candidate conduct; `feedback` is observed delivery/support/resistance/wait; `dependence` and `independence` describe the outlet's actual funding/editorial conditions. Economic/self consequences are scaled by subjective financial need based on expected lawful receipts and available cash. Expected financial risk is subtracted once. Generic knowledge does not multiply the penalty. After weighting all nine dimensions, explicit policy/component memories can change only their targeted decision elements. Norm, residual control, effort and occasion uncertainty remain separate.
