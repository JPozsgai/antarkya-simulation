# Antarkya v2.1 action consequences

23 November 2026 · generated from the reviewed model source. Each array is [self, relevant group, public]. All coefficients are provisional utility valuations, not empirical effect sizes. Dynamic expressions are evaluated from the actor's perceived or accessible circumstances.

| Code location / option | Social | Economic | Political |
| --- | --- | --- | --- |
| model.js:117 · prioritize | `[0,.05,.15]` | `[0,.05,.3*(1-perf.delivery)]` | `[0,.1,.4*perf.support]` |
| model.js:118 · defer | `[0,0,0]` | `[.04,0,0]` | `[0,0,0]` |
| model.js:154 · Dynamic priority / allocation / candidate | `[0,0,.1]` | `[0,0,need]` | `[0,0,need]` |
| model.js:156 · implement | `[0.1,0.15,0.45]` | `[.05,.35,.9]` | `[0.05,0.1,0.65]` |
| model.js:156 · selective | `[0.1,0.4,0.05]` | `[.15,.6,.3]` | `[0.15,0.35,-0.1]` |
| model.js:156 · resist | `[0.1,0.2,-0.2]` | `[.1,.2,-.4]` | `[0.05,0.3,-0.35]` |
| model.js:156 · redirect | `[-0.2,0.1,-0.5]` | `[.8,.35,-.8]` | `[0.2,0.15,-0.7]` |
| model.js:163 · increase | `[0.1,0.1,0.4]` | `[-.1,.2,.25+.65*feedback.delivery]` | `[.2*(2*feedback.support-1),.25,.6-.03*feedback.wait]` |
| model.js:163 · hold | `[0,0.15,0.1]` | `[.1,.3,.25]` | `[0.1,0.2,0.1]` |
| model.js:163 · decrease | `[0,0.1,-0.2]` | `[.25,.5,-.35-.3*feedback.delivery]` | `[.2*(1-feedback.support),.3,-.3]` |
| model.js:163 · narrow | `[-0.1,0.2,-0.4]` | `[.4,.6,-.6]` | `[.3*(1-feedback.support),.45+.2*feedback.resistance,-.6]` |
| model.js:163 · approve | `[0.1,0.15,0.2]` | `[.05,.2,.6]` | `[0.1,0.1,0.4]` |
| model.js:163 · withhold | `[0,0.1,-0.15]` | `[.2,.2,-.3]` | `[0.05,0.2,-0.3]` |
| model.js:163 · approve | `[0.05,0.25,0.2]` | `[.05,.4,.5]` | `[0.1,0.5,0.3]` |
| model.js:163 · withhold | `[0,0.15,-0.15]` | `[.15,.3,-.2]` | `[0.15,0.3,-0.2]` |
| model.js:165 · report | `[-0.1,0,0.65]` | `[-.1,0,.7]` | `[0,-0.05,0.6]` |
| model.js:165 · stay silent | `[0.1,0.1,-0.15]` | `[.05,.1,-.2]` | `[0,0.1,-0.3]` |
| model.js:166 · lawful | `[0.15,0.1,0.35]` | `[.12,.1,.65]` | `[0.05,0.02,0.2]` |
| model.js:166 · offer improper advantage | `[-0.2,0.15,-0.4]` | `[gain,.35,-.85]` | `[kind==='political pressure'\|\|kind==='vote buying'?.7:.05,.25,-.65]` |
| model.js:166 · decline / defer | `[0,0,-0.1]` | `[-.15,0,-.05]` | `[0,0,-0.1]` |
| model.js:167 · perform duty | `[0.15,0.1,0.5]` | `[.1,.1,.6]` | `[0.05,0.05,0.35]` |
| model.js:167 · accept | `[-0.2,0.1,-0.45]` | `[.6,.3,-.8]` | `[0.1,0.2,-0.5]` |
| model.js:167 · demand payment | `[-0.35,0,-0.6]` | `[.8,.2,-.9]` | `[0.2,0.1,-0.7]` |
| model.js:168 · pay under coercion | `[-0.2,0.05,-0.1]` | `[-bribe,.05,-.1]` | `[0,0,0]` |
| model.js:168 · refuse coercion | `[0.1,0,0.3]` | `[-.45,0,.35]` | `[-0.1,0,0.3]` |
| model.js:188 · process | `[0.1,0.1,0.5]` | `[.1,.1,.8]` | `[0.1,0,0.65]` |
| model.js:188 · delay | `[0,0.2,-0.2]` | `[insider?.65:.1,insider?.5:.1,-.4]` | `[0.1,0.35,-0.45]` |
| model.js:188 · dismiss | `[-0.05,0.1,-0.3]` | `[insider?.5:.05,.1,-.3]` | `[0.1,0.2,-0.3]` |
| model.js:194 · leave reporter alone | `[0.1,0,0.3]` | `[.1,0,.2]` | `[0,0,0.25]` |
| model.js:194 · retaliate | `[-0.3,0.1,-0.5]` | `[.3,.4,-.6]` | `[0.2,0.3,-0.6]` |
| model.js:196 · publish | `[0.25,0.2,0.7]` | `[.2-dependence,.3,.65]` | `[0.05,.1*independence,.65]` |
| model.js:196 · withhold | `[-0.15,0.2,-0.4]` | `[.1+dependence,this.related(editor,this.agents[subject])?.6:.1,-.2]` | `[0.1,.2+dependence-independence*.3,-.45]` |
| model.js:199 · share | `[0.15,0.1,0.4]` | `[.1,.25,.35]` | `[0,0.05,0.25]` |
| model.js:199 · do not share | `[0,0,0]` | `[.05,.05,0]` | `[0,0,0]` |
| model.js:201 · fund | `[0.1,0.4,0.05]` | `[-.2,.8,.1]` | `[0.1,0.45,0.05]` |
| model.js:201 · withdraw / do not fund | `[0,-0.1,0]` | `[.15,.1,-.1]` | `[0,-0.15,0]` |
| model.js:201 · accept | `[0.1,0.3,0]` | `[.1,.7,.2]` | `[0.1,0.15,-0.1]` |
| model.js:201 · refuse | `[0.05,0.1,0.3]` | `[0,.1,.45]` | `[0,0,0.2]` |
| model.js:203 · admit | `[0.1,0.45,0.1]` | `[.05,.5,.2]` | `[0.05,0.2,0.1]` |
| model.js:203 · decline | `[0,0.05,0]` | `[.05,.1,0]` | `[0,0,0]` |
| model.js:204 · give notice | `[0.2,-0.2,0.05]` | `[.2,-.1,.15]` | `[0.05,-0.1,0]` |
| model.js:204 · stay | `[0.1,0.2,0]` | `[.05,.2,.05]` | `[0,0.1,0]` |
| model.js:204 · apply | `[0.2,0.6,0.1]` | `[.1,.5*target.affinity,.2]` | `[0,0.3,0.1]` |
| model.js:204 · remain unaffiliated | `[0,0,0]` | `[.05,.05,0]` | `[0,0,0]` |
| model.js:205 · merit | `[0.2,0,0.5]` | `[.1,.2,.8]` | `[0.05,0,0.45]` |
| model.js:205 · connection override | `[-0.2,0.35,-0.4]` | `[.4,.7,-.6]` | `[0.2,0.5,-0.5]` |
| model.js:206 · rotate | `[0.05,0,0.2]` | `[.05,.1,.6]` | `[0,-0.1,0.4]` |
| model.js:206 · retain | `[0.1,0.3,0]` | `[.15,.3,0]` | `[0.05,0.2,-0.1]` |
| model.js:207 · Dynamic priority / allocation / candidate | `[0.15,0.3,0.1]` | `[this.related(incumbent,a)?.4:.1,.4,a.skill*.7]` | `[a.skill*.2,.5,a.skill*.4]` |
| model.js:208 · Dynamic priority / allocation / candidate | `[0.1,0.25,0.2]` | `[.15*(1-rep),affinity*.7,.8*(1-rep)*(.5+s.env.representation/100)]` | `[.25*(1-rep),affinity*.85,.7*(1-rep)*(.5+s.env.representation/100)]` |
| model.js:208 · abstain | `[0,0,0]` | `[.05,0,0]` | `[0,0,-0.05]` |

`gain` and `bribe` depend on the encounter and demanded transfer; `kind` identifies its institutional context. `insider` comes from directional relationship access. `rep` is perceived candidate conduct, not model truth; `affinity` is support. `feedback` contains observed delivery, experienced waiting, public support and organizational resistance. Candidate `skill` is available selection information. `dependence` is recent target-related funding dependence; `independence` is the outlet's editorial condition. `need` in staff allocation is accessible workload pressure.

The listed base economic/self consequence is subsequently scaled by the actor's bounded financial-need multiplier; corrupt options subtract the actor's subjective expected risk once. Norm, effort, residual capability and option-specific Gumbel uncertainty are separate terms. Consult [the numerical specification](NUMERICAL-PROPOSAL.md) for the partition and actual feasibility checks.
