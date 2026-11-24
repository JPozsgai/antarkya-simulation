"""Generate the research report and reproducible, compressed experiment outputs."""
from pathlib import Path
import json,gzip,csv,statistics as st,math,hashlib,subprocess,html,sys
P=Path(__file__).parent
load=lambda f:json.loads((P/f).read_text()) if (P/f).exists() else json.loads(gzip.decompress((P/(f+'.gz')).read_bytes()))
S=lambda xs:sum(xs)
def summary(rows,money):
 end=rows[-1];yr=rows[:12];start=rows[-13]['metrics'] if len(rows)>12 else {};m=end['metrics'];n=m['encounterOpportunities']-start.get('encounterOpportunities',0)
 return dict(taxShareYear1=S(p['tax'] for p in yr)/S(p['economy']['domesticVA'] for p in yr),growthYear1=rows[11]['economy']['index']/100-1,indexFinal=end['economy']['index'],investmentOrdersShareYear1=S(p['investmentOrdered'] for p in yr)/S(p['economy']['domesticVA'] for p in yr),capacityInstalledYear1=S(p['capacityInstalled'] for p in yr),capitalFinal=end['stocks']['capital'],capabilityFinal=end['stocks']['capability'],pressureFinal=end['householdPressure'],arrearsFinal=end['taxArrears'],corruptionRateFinal=100*(m['encounterCorruptActs']-start.get('encounterCorruptActs',0))/n if n else None,corruptActs=m['corruptActs'],maxMoneyError=max(abs(p['money']-money) for p in rows),months=len(rows))
grid=load('calibration-grid.json');pilot=load('pilot-results.json');sens=load('sensitivity-results.json');long=load('candidate-long-run.json');init=load('initial-robustness.json');diag=load('unmodified-diagnostic.json');manifest=load('run-manifest.json');protocol=load('protocol.json')
for r in pilot+sens+[long]+init:
 for p in r['rows']:p['counts']['pending']=p['counts']['services']
 r['summary']=summary(r['rows'],r['rows'][0]['money'])
for p in diag:p['counts']['pending']=p['counts']['services']
# The counter correction changes only a derived display field; services are unresolved queue records.
for f,x in [('pilot-results.json',pilot),('sensitivity-results.json',sens),('candidate-long-run.json',long),('initial-robustness.json',init),('unmodified-diagnostic.json',diag)]:
 (P/f).write_text(json.dumps(x,indent=2)+'\n')
training=load('training-trajectories.json')
for r in training:
 for p in r['rows']:p['counts']['pending']=p['counts']['services']
allruns=pilot+sens+[long]+init+training+[dict(label='published-diagnostic',scenario='baseline',seed='peru-unmodified-diagnostic',rows=diag,summary=summary(diag,diag[0]['money']))]
assert len(grid)==9 and len(pilot)==40 and len(sens)==10 and len(init)==4
assert len({r['seed'] for r in pilot})==5
assert not set(protocol['trainingSeeds'])&set(protocol['holdoutSeeds'])
for label in ['published','candidate']:
 for seed in protocol['holdoutSeeds']:
  runs=[r for r in pilot if r['label']==label and r['seed']==seed];assert len(runs)==4;assert len({r['initialHash'] for r in runs})==1
for r in allruns:
 assert r['summary']['maxMoneyError']<.0001
 assert all(p['counts']['agents']==1000 for p in r['rows'])
 assert [p['month'] for p in r['rows']]==list(range(1,len(r['rows'])+1))
for f,h in manifest['sourceHashes'].items():
 original=subprocess.check_output(['git','show',protocol['sourceCommit']+':'+f],cwd=P.parent.parent)
 assert hashlib.sha256(original).hexdigest()==h
# Presentation uncertainty is seed dispersion conditional on stated parameter/initial-state settings.
def describe(xs):return dict(mean=st.mean(xs),minimum=min(xs),maximum=max(xs),sd=st.stdev(xs) if len(xs)>1 else 0)
groups=[];paired=[]
for label in ['published','candidate']:
 for scenario in protocol['policies']:
  runs=[r for r in pilot if r['label']==label and r['scenario']==scenario]
  groups.append(dict(label=label,scenario=scenario,n=len(runs),**{k:describe([r['summary'][k] for r in runs]) for k in ['taxShareYear1','growthYear1','indexFinal','capitalFinal','corruptionRateFinal','investmentOrdersShareYear1','pressureFinal']}))
 for scenario in ['education','aca','combined']:
  rows=[]
  for seed in protocol['holdoutSeeds']:
   a=next(r for r in pilot if r['label']==label and r['scenario']=='baseline' and r['seed']==seed);b=next(r for r in pilot if r['label']==label and r['scenario']==scenario and r['seed']==seed)
   rows.append(dict(seed=seed,indexDelta=b['summary']['indexFinal']-a['summary']['indexFinal'],encounterRateDelta=b['summary']['corruptionRateFinal']-a['summary']['corruptionRateFinal']))
  paired.append(dict(label=label,scenario=scenario,rows=rows,indexDelta=describe([r['indexDelta'] for r in rows]),encounterRateDelta=describe([r['encounterRateDelta'] for r in rows])))
results=dict(groups=groups,paired=paired,selected=manifest['selected'],acceptance='REJECTED FOR PRODUCTION: conditional fiscal match only; baseline dynamics and measurement coverage remain inadequate',trajectoryCount=74,postAdoptionMonths=1752)
(P/'results-summary.json').write_text(json.dumps(results,indent=2)+'\n')
with (P/'monthly.csv').open('w',newline='') as f:
 fields=['label','scenario','seed','overrides','month','index','domesticVA','tax','capital','capability','householdPressure','taxArrears','investmentOrdered','capacityInstalled','capacityUtilization','backgroundCash','foreignCash','money']
 w=csv.DictWriter(f,fields);w.writeheader()
 for r in allruns:
  for p in r['rows']:w.writerow(dict(label=r.get('label',r.get('parameter','candidate-long' if r is long else 'initial-robustness')),scenario=r.get('scenario','baseline'),seed=r.get('seed',r.get('initialSeed',str(r.get('value','long')))),overrides=json.dumps(r.get('overrides',{}),sort_keys=True),month=p['month'],index=p['economy']['index'],domesticVA=p['economy']['domesticVA'],tax=p['tax'],capital=p['stocks']['capital'],capability=p['stocks']['capability'],**{k:p[k] for k in ['householdPressure','taxArrears','investmentOrdered','capacityInstalled','capacityUtilization','backgroundCash','foreignCash','money']}))
# Update every accepted register record without overwriting the original agreement history.
reg=load('calibration-register.json');mapping={'P01':.2,'P02':.5,'P03':.25,'P04':.04,'P05':.02,'P06':.008,'P07':.25,'P08':2,'P09':6,'P10':.04,'P11':.08,'P12':3,'P13':{'explicitConsumptionShare':.35,'reserveMonths':1.5},'P14':manifest['selected'],'P15':[.65,.85,.2,.2],'P16':.4,'P17':{'minimumWait':2,'removalProtection':.45,'oversight':.45,'disclosure':.45},'P18':{'credibilityLearning':.04},'P19':{'commitmentRU':.05,'advocacyRU':.005,'advocacyPM':.015},'P20':{'horizonMonths':120,'pilotEventSeeds':5,'transactionRetention':1000}}
for e in reg:
 if e['id'] in mapping:e['executableOrTrialValue']=mapping[e['id']]
 if e['id']=='P14':e.update(pilotStatus='CONDITIONALLY MATCHED; NOT IDENTIFIED OR ACCEPTED',pilotValue=manifest['selected'],pilotNote='Best of nine trial combinations; one mixed-tax receipt ratio cannot identify statutory rates, taxable base and compliance separately.')
 if e['id']=='P20':e.update(pilotStatus='LINUX EXPERIMENT COMPLETED; ANDROID PENDING',pilotNote='120-month runs and five event-seed paired pilot completed; Linux process runtime/RSS recorded separately. No Android timing or memory measured.')
(P/'calibration-register.json').write_text(json.dumps(reg,indent=2)+'\n')
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
fig,axs=plt.subplots(1,2,figsize=(11,4.3),layout='constrained')
for label,color in [('published','#64748b'),('candidate','#0f766e')]:
 runs=[r for r in pilot if r['label']==label and r['scenario']=='baseline'];months=list(range(25));ys=[[100]+[p['economy']['index'] for p in r['rows']] for r in runs]
 axs[0].plot(months,[st.mean(y[i] for y in ys) for i in months],label=label,color=color)
 axs[0].fill_between(months,[min(y[i] for y in ys) for i in months],[max(y[i] for y in ys) for i in months],color=color,alpha=.13)
 shares=[r['summary']['taxShareYear1']*100 for r in runs];i=0 if label=='published' else 1;axs[1].errorbar(i,st.mean(shares),yerr=[[st.mean(shares)-min(shares)],[max(shares)-st.mean(shares)]],fmt='o',color=color,capsize=7,label=label)
axs[0].scatter([12],[103.4],marker='x',color='#b45309',label='2025 growth context (unfitted)');axs[0].set(xlabel='Post-adoption month',ylabel='Activity index (initial = 100)',title='Baseline paths: mean and five-seed range');axs[0].legend(fontsize=8)
axs[1].axhline(14.8,color='#b45309',linestyle='--',label='Conditional fiscal target');axs[1].set(xticks=[0,1],xticklabels=['Published','Fiscal candidate'],ylabel='Tax receipts / value added (%)',title='First-year holdout fiscal match');axs[1].legend(fontsize=8)
for a in axs:a.grid(alpha=.2)
fig.savefig(P/'pilot-results.png',dpi=180);plt.close(fig)
def pct(v):return f'{100*v:.2f}%'
def dec(v):return f'{v:.2f}'
def table(headers,rows):return '| '+' | '.join(headers)+' |\n| '+' | '.join(['---']*len(headers))+' |\n'+''.join('| '+' | '.join(str(x) for x in row)+' |\n' for row in rows)
baselines=[g for g in groups if g['scenario']=='baseline'];selected=manifest['selected'];best=min(grid,key=lambda x:x['loss']);maxerr=max(r['summary']['maxMoneyError'] for r in allruns)
text=f'''# Peru calibration and pilot — first completed study

© 2026 Joseph Pozsgai-Alvarez. Source engine: Antarkya 3.0.0, commit `{protocol['sourceCommit']}`. Study date: 24 November 2026.

**Decision: do not promote the fiscal candidate to production defaults.** The first calibration attempt and exploratory pilot are complete. A narrow fiscal ratio can be matched, but economic baseline behavior and national measurement coverage are insufficient for an empirically calibrated Peru simulation. Passing engineering tests did not establish that realism.

## Design and calibration

The study contains **74 trajectories and 1,752 post-adoption simulated months**, each with exactly 1,000 agents: 18 training trajectories across nine fiscal parameter pairs, 40 held-out policy trajectories, ten one-at-a-time sensitivities, two 120-month diagnostics and four additional-initial-society trajectories. Two training event seeds and five disjoint holdout event seeds were used. Four scenarios were baseline, education, anti-corruption body, and both reforms; each selected tool began at 70% mobilization. The main pilot ran for 24 months. Within a parameter/initial-society combination, every counterfactual begins from the identical reconstructed state. The preliminary unmodified diagnostic was inspected before this protocol; this is not a preregistered study.

The fiscal target is **14.8%**, from BCRP's fixed February 2026 report for 2025. Its non-tax and nonfinancial-spending ratios are 4.2% and 20.0%; the rolling MEF alternative reports 14.9%, 4.2% and 20.1%. These vintages are preserved separately. The model's simplified private-value-added levy is a lumped fiscal proxy, not Peru's tax code. A national mix of tax instruments is not separately represented.

The minimum training error selects `taxAssessmentRate={selected['taxAssessmentRate']}` and `backgroundCompliance={selected['backgroundCompliance']}`. Its training tax ratio is **{pct(best['fiscalShare'])}**. This does not identify a real statutory rate or compliance estimate: two free coefficients and an unmapped taxable base cannot be identified by one fiscal moment. No macro growth rate, corruption prevalence, or policy effect was optimized.

## Held-out baselines

'''+table(['Model','Year-one tax share: mean [seed range]','Year-one activity change: mean [seed range]','Month-24 activity index: mean [seed range]'],[[g['label'],f"{pct(g['taxShareYear1']['mean'])} [{pct(g['taxShareYear1']['minimum'])}, {pct(g['taxShareYear1']['maximum'])}]",f"{pct(g['growthYear1']['mean'])} [{pct(g['growthYear1']['minimum'])}, {pct(g['growthYear1']['maximum'])}]",f"{dec(g['indexFinal']['mean'])} [{dec(g['indexFinal']['minimum'])}, {dec(g['indexFinal']['maximum'])}] "] for g in baselines])+f'''
![Baseline and fiscal holdout results](pilot-results.png)

The baseline contracts across the five principal event-seed holdouts. In the published unmodified 120-month diagnostic, the activity index ends at **{diag[-1]['economy']['index']:.2f}** and productive capacity at **{diag[-1]['stocks']['capital']:.2f}**. In the fiscal candidate's 120-month diagnostic, those values are **{long['rows'][-1]['economy']['index']:.2f}** and **{long['rows'][-1]['stocks']['capital']:.2f}**. This is a model diagnostic, not a Peru forecast. The unfitted 2025 real-total-growth context is 3.4%; one observed annual growth rate does not define a perpetual future growth requirement. The decline nevertheless flags a baseline that needs economic investigation before policy conclusions.

## Paired policy pilot

The following are reform-minus-baseline differences in **trailing-12-month corrupt encounters per 100 encounters at month 24**. Negative values mean fewer qualifying corrupt encounters inside the model. Each range is the minimum/maximum across five matched event seeds; it is not a confidence interval. Tax concealment and private diversion remain outside this legacy encounter estimand and remain in their separate act records.

'''+table(['Parameter set','Scenario','Mean difference (percentage points)','Five-seed range'],[[p['label'],p['scenario'],dec(p['encounterRateDelta']['mean']),f"[{dec(p['encounterRateDelta']['minimum'])}, {dec(p['encounterRateDelta']['maximum'])}] "] for p in paired])+'''
These are exploratory conditional effects, not observed reform effectiveness. The small pilot cannot establish a reliable policy ranking. Additional initial-society checks use two different initialization seeds and paired baseline/combined scenarios; their results are retained separately. This exposes some initialization sensitivity, without treating the full synthetic population composition as empirically estimated.

## Sensitivity and interpretation

'''+table(['Parameter','Trial value','Month-24 baseline activity index','Year-one tax ratio'],[[r['parameter'],r['value'],dec(r['summary']['indexFinal']),pct(r['summary']['taxShareYear1'])] for r in sens])+'''
These ten runs change one parameter at a time around the fiscal candidate, using one holdout event seed and reconstructing the initial year under that variant. Their contrasts therefore combine changed starting conditions and changed post-adoption dynamics. They are diagnostics, not controlled mediation estimates or global uncertainty analysis.

## Evidence and measurement gaps

BCRP's 2025 private fixed-investment share is 16.6% of nominal GDP. The model records funded imported equipment orders and completed installation separately; it omits background investment and has fixed reference prices. Neither model series is a fully matched national investment target. The model's generic business capability utilization likewise is not a manufacturing-weighted survey estimate.

The verified 2023 Enterprise Survey indicators are 12.3% of senior management time on regulation, 118.3 days for an operating license, 7.6% bribery incidence, and 22.1% tax-contact prevalence. The survey concerns eligible formal firms with at least five employees. The simulation's 210 business-role people and 24 business organizations do not supply that sampling frame. Generic contacts and permit tasks lack the necessary subtype, exposure/recall and eligibility variables. These four values were **not** fitted to incompatible model rates. Capacity-utilization metadata were located, but a weighted population mean remains unextracted; unknown and structurally missing responses are not zero.

The real GDP-per-capita context is 17,633.3 soles at 2007 prices in 2025. It was not converted into household incomes or normalized resource units. Country-governance profiles, represented-output shares, national expansion weights, capital/depreciation priors and behavioral learning parameters remain unvalidated. Every C01–C16 and P01–P20 register entry is retained with its current status in `calibration-register.json`.

## Engineering verification and reproduction

No production runtime or browser default was changed. The 18 original training trajectories were deterministically replayed to archive their monthly observations, and their fiscal ratios matched to 1e-12; those replays are not counted as additional independent study trajectories. Research variants replace only the AST-located frozen parameter initializer in isolated CommonJS module instances; original source hashes and the transformed hybrid hash are recorded. Two harness checks pass: exact default replay of initial society and six-month full state/view, and parameter bounds/isolation. Source hashes match the pinned release. All study trajectories execute the engine's resource/time feasibility assertions; matched initial-state hashes and trajectory counts are checked again during analysis. Maximum observed cash-total drift relative to the first recorded month in the retained study records is '''+f'{maxerr:.3g}'+''' normalized units. The sampled Linux process runtime/RSS is retained in the manifest; it is not an Android measurement.

Use a full Git checkout with the pinned ancestor present, then run from the repository root:

```sh
npm ci --ignore-scripts --no-audit --no-fund
node --test research/peru-pilot/engine.test.cjs
node research/peru-pilot/observe.cjs
node research/peru-pilot/pilot.cjs
node research/peru-pilot/initial-robustness.cjs
node research/peru-pilot/archive-training.cjs
python research/peru-pilot/analyze.py
```

Python needs matplotlib for the figure (`python -m pip install -r research/peru-pilot/requirements.txt`). Algorithms, protocol, seeds, grid, complete monthly records and evidence metadata are included. Raw JSON records are distributed as deterministic gzip files; CSV and summary JSON provide direct access. Timing and memory can vary across machines.

## Required next changes

First reconcile represented and omitted production/investment, financing, trade and household/government cash circulation with consistent output weights. Add survey-matched firm sampling and transaction records before estimating contact, delay or bribery parameters. Then specify sourced parameter bounds, refit multiple independent moments and test against reserved data. National governance mappings and Android performance remain separate requirements. The current fiscal candidate is retained for reproducibility and rejected as a production calibration.

## Primary sources

'''
for key,s in load('evidence.json').items():text+=f"- [{key}: {s['title']}]({s['url']}) — accessed 24 November 2026.\n"
(P/'README.md').write_text(text)
# Deterministic raw archives keep the repository compact and preserve all measured records.
archives=['unmodified-diagnostic.json','pilot-results.json','sensitivity-results.json','candidate-long-run.json','initial-robustness.json','training-trajectories.json']
for f in archives:(P/(f+'.gz')).write_bytes(gzip.compress((P/f).read_bytes(),mtime=0))
manifest.update(completeStudyTrajectories=74,postAdoptionMonths=1752,archivalTrainingReplays=18,analysisPython=sys.version,matplotlibVersion=matplotlib.__version__,acceptance=results['acceptance'],initialRobustness={'seeds':['PER-society-02','PER-society-03'],'runs':4},researchSHA256={f.name:hashlib.sha256(f.read_bytes()).hexdigest() for f in P.iterdir() if f.suffix in ['.cjs','.py']},dataSHA256={f:hashlib.sha256((P/f).read_bytes()).hexdigest() for f in [a+'.gz' for a in archives]+['monthly.csv','results-summary.json','calibration-register.json','evidence.json','protocol.json']})
(P/'run-manifest.json').write_text(json.dumps(manifest,indent=2)+'\n')
print(json.dumps({'studyTrajectories':74,'acceptance':results['acceptance'],'selected':selected,'holdoutBaselines':baselines,'maximumMoneyError':maxerr,'checks':'matched pairs, hashes, counts, finite resource assertions: pass'},indent=2))
