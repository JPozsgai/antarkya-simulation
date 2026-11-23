'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),A=require('./model'),L=require('./adaptation');
const config=(extra={})=>({country:'PER',duration:24,eventSeed:'adaptive-tests',policies:[],...extra});
const simulation=extra=>new A.Simulation(config(extra));
const clone=x=>JSON.parse(JSON.stringify(x));
const receptive=a=>{a.psychology.traits.openness=1;a.psychology.traits.learning=1;a.psychology.traits.retention=1;};
const maximal=(purpose)=>purpose==='uptake'?0:1;
function deliver(a,id,event,month=0,extra={}){return L.observe(a,id,event,month,maximal,{delivered:true,quality:1,credibility:1,...extra});}
function operate(s,id,o){const p=s.state.policies.find(p=>p.id===id);const a=p.allocations.find(a=>a.org===o.id);assert.ok(a);a.installed=true;a.lastDelivered=s.month;return a;}
test('all twelve policy mappings are explicit, distinct and leave untargeted elements absent',()=>{
 assert.deepEqual(A.KEYS.filter(k=>!L.map[k]),[]);assert.equal(L.map.education.elements.attitude,.30);assert.equal(L.map.education.elements.norm,.20);assert.equal(L.map.education.elements.control,.25);assert.equal(L.map.penalties.elements.risk,.40);assert.equal(L.map.penalties.elements.norm,undefined);assert.deepEqual(L.map.pay.elements,{});assert.deepEqual(L.map.disclosure.elements,{});
});
test('profiles contain reproducible numerical susceptibility traits without redrawing other traits',()=>{
 const one=A.createInitial(config()),two=A.createInitial(config({policies:[{id:'education',mobilization:1}]}));assert.deepEqual(one,two);const values=one.agents.map(a=>a.psychology.traits.openness);assert.ok(new Set(values).size>990);assert.ok(one.agents.every(L.valid));const bad=clone(one);delete bad.agents[0].psychology;assert.throws(()=>A.validateInitial(bad,config()));
});
test('selecting education or funding a still-uninstalled programme cannot teach an agent',()=>{
 const s=simulation({policies:[{id:'education',mobilization:1}]}),a=s.agents[0],o=s.orgs[s.state.policies[0].allocations[0].org],before=clone(a);assert.equal(s.expose(a,'education','unavailable',o,1),false);assert.deepEqual(a,before);const p=s.state.policies[0];p.allocations[0].installed=true;p.allocations[0].lastDelivered=-10;s.state.month=4;assert.equal(s.expose(a,'education','stale',o,1),false);
});
test('receptiveness responds to source trust, individual traits, motives and own history',()=>{
 const s=simulation(),a=s.agents[0],base=L.receptiveness(a,'attitude',.7);a.psychology.traits.openness=1;assert.ok(L.receptiveness(a,'attitude',.7).uptake>base.uptake);assert.equal(L.receptiveness(a,'attitude',0).uptake,0);const clean=L.receptiveness(a,'attitude',.7);a.meaningful=Array.from({length:10},()=>({corrupt:true}));assert.ok(L.receptiveness(a,'attitude',.7).uptake<clean.uptake);const risk=L.receptiveness(a,'risk',.7);a.motives=Array(9).fill(0);a.motives[3]=1;assert.ok(L.receptiveness(a,'risk',.7).strength>risk.strength);
});
test('uptake and conditional influence are distinct random draws',()=>{
 const a=simulation().agents[0];const rejected=L.observe(a,'education','reject',0,()=>.999999,{delivered:true,quality:1,credibility:.5});assert.equal(rejected.changed,false);assert.ok(Object.values(rejected.trace.components).every(x=>!x.accepted));receptive(a);const accepted=deliver(a,'education','accept');assert.ok(accepted.changed);assert.ok(accepted.trace.components.attitude.level>0);assert.ok(accepted.trace.components.attitude.level<=.30);
});
test('repeat exposure caps diminish and are shared across organizational sources',()=>{
 const a=simulation().agents[0];receptive(a);const one=deliver(a,'education','lesson-1',0,{source:2}),two=deliver(a,'education','lesson-2',0,{source:9});assert.equal(one.trace.components.attitude.cap,.30);assert.equal(two.trace.components.attitude.cap,.21);const duplicate=deliver(a,'education','lesson-2',0,{source:8});assert.equal(duplicate.duplicate,true);assert.equal(a.psychology.memories.education.components.attitude.count,2);
});
test('thousands of fully delivered exposures stay below per-policy and per-element ceilings',()=>{
 const a=simulation().agents[0];receptive(a);for(let n=0;n<1000;n++)for(const id of ['education','complaints','protection','merit','conflicts','penalties'])deliver(a,id,id+'-'+n,0,{targets:{risk:1,reportSafety:1}});for(const [id,m]of Object.entries(a.psychology.memories))for(const [k,v]of Object.entries(m.components))assert.ok(v.level<=L.map[id].elements[k]+1e-12);const effect=L.influence(a);for(const k of L.elements)assert.ok(effect[k]<=L.bounds[k]);assert.ok(L.valid(a));assert.ok(a.riskBelief<1);assert.ok(a.knowledge<1);
});
test('wear-off changes retained influence without resetting exposure history or lifetime conduct',()=>{
 const a=simulation().agents[0];receptive(a);deliver(a,'education','lesson');const m=a.psychology.memories.education.components.attitude,before=m.level,count=m.count,history=a.corruptActions;L.advance(a,24);assert.ok(m.level<before*.3);assert.equal(m.count,count);assert.equal(a.corruptActions,history);const next=deliver(a,'education','lesson-2',24);assert.equal(next.trace.components.attitude.cap,.21);
});
test('reinforcement can restore lost influence after novelty is exhausted without raising the ceiling',()=>{
 const a=simulation().agents[0];receptive(a);for(let i=0;i<120;i++)deliver(a,'education','initial-'+i);const m=a.psychology.memories.education.components.attitude,peak=m.peak;L.advance(a,24);const decayed=m.level;deliver(a,'education','reinforcement',24);assert.ok(m.level>decayed);assert.ok(m.level<=peak+1e-12);assert.equal(m.count,121);
});
test('retention traits change decay rather than the original influence cap',()=>{
 const s=simulation(),a=clone(s.agents[0]),b=clone(a);receptive(a);receptive(b);deliver(a,'education','same');deliver(b,'education','same');a.psychology.traits.retention=0;b.psychology.traits.retention=1;L.advance(a,12);L.advance(b,12);assert.ok(b.psychology.memories.education.components.attitude.level>a.psychology.memories.education.components.attitude.level);assert.equal(a.psychology.memories.education.components.attitude.peak,b.psychology.memories.education.components.attitude.peak);
});
test('history and environment slowly change actual motives and traits while preserving positive weights',()=>{
 const a=simulation().agents[0],before=clone(a.psychology.traits),motives=[...a.motives];a.experience.trust=1;for(let month=1;month<=120;month++){L.feedback(a,{2:1,5:1,8:1},1);L.advance(a,month);}assert.notDeepEqual(a.motives,motives);assert.ok(a.motives.every(x=>x>0));assert.ok(Math.abs(a.motives.reduce((x,y)=>x+y,0)-1)<1e-12);assert.ok(a.motives[2]>motives[2]);assert.notDeepEqual(a.psychology.traits,before);assert.ok(a.psychology.traits.openness<=a.psychology.baseTraits.openness+.15+1e-12);
});
test('professional skill changes with performed work and cannot jump or erase expertise',()=>{
 const a=simulation().agents[0],before=a.skill;L.work(a,0);assert.equal(a.skill,before);L.work(a,1);assert.ok(a.skill>before);for(let i=0;i<10000;i++)L.work(a,1);assert.ok(a.skill<=before+.20+1e-12);a.skill=1;L.work(a,1);assert.equal(a.skill,1);
});
test('education reaches attitude, norm and control in actual choices, keeping the nine interests',()=>{
 const s=simulation(),a=s.agents[0];receptive(a);const opts=[{name:'lawful',effects:[.2,.1,.4,.2,.1,.3,.1,.1,.4],norm:0,control:.4},{name:'improper',effects:[.2,.3,.1,.8,.5,-.2,.2,.3,-.1],norm:0,control:.5,corrupt:true}];s.choose(a,'service',opts,'same');const before=clone(a.lastDecision.alternatives);deliver(a,'education','lesson');s.choose(a,'service',opts,'same');const after=a.lastDecision.alternatives;assert.ok(after[1].attitude<before[1].attitude);assert.ok(after[1].norm<before[1].norm);assert.ok(after[0].control>before[0].control);assert.equal(a.motives.length,9);
});
test('a penalty exposure changes perceived cost once without adding attitude/norm/control bonuses',()=>{
 const s=simulation(),a=s.agents[0];receptive(a);const before=a.riskBelief;deliver(a,'penalties','collection',0,{targets:{risk:1}});assert.ok(a.riskBelief>before);const result=L.decision(a,'integrity',{name:'improper',corrupt:true},.5,.2,.4);assert.equal(result.attitude,.5);assert.equal(result.norm,.2);assert.equal(result.control,.4);assert.equal(L.influence(a,'integrity').attitude,0);
});
test('report-channel knowledge and control are specific to reporting contexts',()=>{
 const a=simulation().agents[0];receptive(a);const original=a.knowledge;deliver(a,'complaints','instructions');assert.ok(L.knowledge(a,'report')>original);assert.equal(L.knowledge(a,'integrity'),original);assert.equal(L.influence(a,'integrity').control,0);assert.ok(L.influence(a,'report').control>0);
});
test('identical exposure draws reproduce profiles and independent draws yield different histories',()=>{
 const a=simulation().agents[0],b=clone(a),c=clone(a);const rng=seed=>(purpose,...key)=>A.draw(seed,purpose,...key);for(let i=0;i<20;i++){L.observe(a,'education','lesson-'+i,0,rng('one'),{delivered:true,credibility:.8,quality:.8});L.observe(b,'education','lesson-'+i,0,rng('one'),{delivered:true,credibility:.8,quality:.8});L.observe(c,'education','lesson-'+i,0,rng('two'),{delivered:true,credibility:.8,quality:.8});}assert.deepEqual(a,b);assert.notDeepEqual(a.psychology,c.psychology);
});
test('skill learning feeds real subsequent organizational capacity',()=>{
 const s=simulation(),o=s.services[0],person=s.agents[o.members.find(id=>s.agents[id].role===2)];s.monthlyAccounts();const before=o.capacity;L.work(person,10);s.monthlyAccounts();assert.ok(o.capacity>before);s.assertInvariants();
});
test('a known inactive or suspended reform stops new exposures while memories can wear off',()=>{
 const s=simulation({policies:[{id:'education',mobilization:1}]}),p=s.state.policies[0],o=s.orgs[p.allocations[0].org],a=s.agents[0];operate(s,'education',o);assert.equal(s.expose(a,'education','one',o,1),true);p.formal='suspended';assert.equal(s.expose(a,'education','two',o,1),false);assert.equal(a.psychology.memories.education.components.attitude.count,1);
});
test('continuous reinforcement over 1,200 months retains partial bounded influence',()=>{
 const a=simulation().agents[0];receptive(a);for(let month=1;month<=1200;month++){L.advance(a,month);deliver(a,'education','monthly-'+month,month);}const e=L.influence(a,'integrity');assert.ok(e.attitude>0&&e.attitude<=.30);assert.ok(e.norm<=.20);assert.ok(e.control<=.25);assert.ok(a.knowledge<1);assert.ok(L.valid(a));
});
test('financial expectations learn from actual total receipts with individual learning rates',()=>{
 const s=simulation(),a=clone(s.agents[0]),b=clone(a);a.psychology.traits.learning=0;b.psychology.traits.learning=1;const before=a.psychology.expectedIncome;L.incomeExperience(a,before+1);L.incomeExperience(b,before+1);assert.ok(b.psychology.expectedIncome>a.psychology.expectedIncome);assert.ok(a.psychology.expectedIncome>before);assert.ok(b.psychology.expectedIncome<before+1);
});
test('a later change in receptiveness can permit modest new learning after repeated rejected messages',()=>{
 const a=simulation().agents[0];for(let i=0;i<80;i++)L.observe(a,'education','rejected-'+i,0,()=>.999999,{delivered:true,quality:1,credibility:.2});receptive(a);const next=deliver(a,'education','newly-credible');assert.equal(next.trace.components.attitude.cap,.30*L.noveltyFloor);assert.ok(next.changed);assert.ok(next.trace.components.attitude.level<=.30*L.noveltyFloor);
});
test('conflicting credible experience adjusts the retained target without deleting earlier history',()=>{
 const a=simulation().agents[0];receptive(a);deliver(a,'penalties','one',0,{targets:{risk:1}});const m=a.psychology.memories.penalties.components.risk;deliver(a,'penalties','two',0,{targets:{risk:0}});assert.ok(m.target>0&&m.target<1);assert.equal(m.count,2);
});
test('a corrupt staffing proposal prevented by real merit review is not a completed patronage act',()=>{
 const s=simulation();s.state.month=6;s.rand=(process)=>process==='merit-review'?0:.5;s.choose=(a,context,options)=>options.find(o=>o.name==='connection override')||options[0];for(const o of s.services){o.caps.merit=1;o.legal.merit=1;o.recordQuality=1;}s.organizations();assert.ok(s.state.metrics.meritAppointments>0);assert.equal(s.state.conduct.filter(r=>r.kind==='patronage appointment').length,0);
});
test('formal education adoption cannot manufacture knowledge before anyone learns',()=>{
 const c=config({policies:[{id:'education',mobilization:1}]}),i=A.createInitial(c),reform=new A.Simulation(c,i),baseline=new A.Simulation(c,i,0,true);assert.equal(reform.diagnostic('education').value,baseline.diagnostic('education').value);assert.deepEqual(reform.agents.map(a=>a.knowledge),baseline.agents.map(a=>a.knowledge));
});
test('knowledge assessment responds continuously to retained learning and subsequent wear-off',()=>{
 const s=simulation(),a=s.agents[0];receptive(a);const before=s.diagnostic('education').value;deliver(a,'education','lesson');const learned=s.diagnostic('education').value;assert.ok(learned>before);L.advance(a,24);const faded=s.diagnostic('education').value;assert.ok(faded<learned&&faded>before);assert.equal(s.diagnostic('education').denominator,1000);
});
test('agents do not read hidden true protection capacity when deciding whether to report',()=>{
 const c=config(),initial=A.createInitial(c),low=new A.Simulation(c,initial),high=new A.Simulation(c,initial),record={id:'reported',org:low.services[0].id,actors:[low.roles[2][0].id],truth:true,visibility:.5,kind:'service'};
 for(const s of [low,high]){for(const o of s.publicOrgs)o.caps.protection=s===low?0:1;s.report(record,s.agents[0]);}
 const option=s=>s.agents[0].decisions.find(d=>d.context==='Report observed conduct').alternatives.find(x=>x.name==='report');assert.deepEqual(option(low),option(high));
});
test('experienced protection and credible failure change subjective safety in opposite directions',()=>{
 const a=simulation().agents[0];receptive(a);const base=L.safety(a);deliver(a,'protection','success',0,{targets:{reportSafety:1}});const safer=L.safety(a);assert.ok(safer>base);deliver(a,'protection','failure',0,{targets:{reportSafety:0},elements:['reportSafety']});assert.ok(L.safety(a)<safer);
});
test('inspection summaries stay numerical and reject malformed imported learning histories',()=>{
 const a=simulation().agents[0];receptive(a);deliver(a,'education','lesson');const p=L.summary(a);assert.equal(L.validSummary(p),true);const bad=clone(p);bad.exposures.education.attitude.accepted='<img src=x onerror=alert(1)>';assert.equal(L.validSummary(bad),false);const future=clone(p);future.lastExposure.month='not a number';assert.equal(L.validSummary(future),false);const over=clone(p);over.influence.attitude=2;assert.equal(L.validSummary(over),false);
});
