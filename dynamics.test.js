'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),A=require('./model'),V=require('./visualization');
const config={country:'PER',duration:24,policies:[],eventSeed:'dynamics-check'},sim=()=>new A.Simulation(config),clone=x=>JSON.parse(JSON.stringify(x));
function opportunity(s,a,key){s.choose(a,'Integrity opportunity',[{name:'lawful',effects:Array(9).fill(0),norm:0,control:.5},{name:'improper',corrupt:true,effects:Array(9).fill(0),norm:0,control:.5}],key);}
test('a one-option duty and repeated calls without a new choice cannot inflate integrity or recovery',()=>{
 const s=sim(),a=s.agents[0];s.state.month=10;a.meaningful=[];a.recoveryChoices=0;a.state='corrupt';a.lastCorrupt=0;const before=a.integrityChoices;
 for(let i=0;i<8;i++){s.choose(a,'Unopposed duty',[{name:'perform duty',effects:Array(9).fill(0)}],'single-'+i);assert.equal(s.act(a,false),false);}s.recover();assert.equal(a.meaningful.length,0);assert.equal(a.integrityChoices,before);assert.equal(a.state,'corrupt');
 for(let i=0;i<3;i++){opportunity(s,a,'genuine-'+i);assert.equal(s.act(a,false),true);assert.equal(s.act(a,false),false);}s.recover();assert.equal(a.state,'integrity');assert.equal(a.recoveryChoices,3);
});
test('failed or deferred intentions do not become completed integrity choices',()=>{
 const s=sim(),a=s.agents[0],before=a.recoveryChoices;opportunity(s,a,'pending');assert.equal(a.meaningful.at(-1).completed,false);assert.equal(a.recoveryChoices,before);s.state.month++;assert.equal(s.act(a,false),false);
});
test('twenty waiting requests have one bounded monthly effect on trust and control',()=>{
 const one=sim(),many=sim();for(const [s,n]of [[one,1],[many,20]]){s.state.month=1;s.state.services=[];const a=s.agents[0],o=s.services[0];o.time=0;o.limits={routine:0};a.experience.trust=.6;a.control=.6;for(let i=0;i<n;i++)s.addService(a,o,false,'service');s.processServices();}
 assert.equal(one.agents[0].experience.trust,many.agents[0].experience.trust);assert.equal(one.agents[0].control,many.agents[0].control);assert.ok(one.agents[0].experience.trust>=.52);assert.ok(one.agents[0].control>=.575);
});
test('waiting is accumulated as request-months, without inventing new service contacts or recounting it at completion',()=>{
 const s=sim(),a=s.agents[0],o=s.services[0];s.state.services=[];const prior={contacts:a.experience.service,wait:a.experience.wait};s.state.month=1;s.addService(a,o,false,'service');
 for(let m=1;m<=4;m++){s.state.month=m;o.time=0;o.limits={routine:0};s.processServices();}assert.equal(a.experience.service,prior.contacts+1);assert.equal(a.experience.wait,prior.wait+4);
 s.state.month=5;o.time=1;o.limits={routine:1};A.transfer(s.state.outside,o,1);s.processServices();assert.equal(s.state.services.length,0);assert.equal(a.experience.wait,prior.wait+4);assert.equal(a.experience.service,prior.contacts+1);assert.equal(s.metrics().serviceWait,4);
});
test('living-needs priors share the earnings scale and retain heterogeneous financial pressure',()=>{
 const s=sim(),people=s.roles[0].filter(a=>a.experience.service>=0),net=people.map(a=>a.income*.9-a.cost);assert.ok(net.some(x=>x<0));assert.ok(net.some(x=>x>0));assert.ok(net.reduce((a,b)=>a+b,0)>0);assert.ok(s.metrics().cashConstrained<150);
 s.state.month=1;const money=A.totalMoney(s.state);s.monthlyAccounts();assert.ok(s.agents.every(a=>a.financialPressure>=0&&a.financialPressure<=1));assert.ok(Math.abs(A.totalMoney(s.state)-money)<1e-6);
});
test('uncollected adjudicated liability persists, and subsequent collection transfers real money once',()=>{
 const s=sim();s.state.month=1;s.monthlyAccounts();s.state.cases=[];s.caseIndex.clear();for(const a of s.agents)a.liabilities=[];const a=s.roles[2][0];A.transfer(a,s.state.outside,a.balance);
 const file=s.makeCase({id:'financial-order',actors:[a.id],kind:'extortion',org:a.org,truth:true,visibility:1},null,'audit');file.stage=3;file.next=0;file.evidence=1;file.jurisdiction=null;file.intakeDone=true;
 const body=s.responsible(3,'criminal',file);body.caps.penalties=1;body.legal.penalties=1;s.choose=(person,context,opts)=>opts.find(x=>x.name==='process')||opts[0];s.processCases();assert.ok(a.liabilities.length===1);assert.equal(file.collected,0);const debt=a.liabilities[0].remaining;
 A.transfer(s.state.outside,a,10);a.receipts=[2];body.time=1;body.limits={case:1};const treasury=s.state.treasury.balance,money=A.totalMoney(s.state);s.collectLiabilities();assert.ok(a.liabilities[0].remaining<debt);assert.ok(file.collected>0);assert.ok(s.state.treasury.balance>treasury);assert.ok(Math.abs(file.collected-(debt-a.liabilities[0].remaining))<1e-9);assert.ok(Math.abs(A.totalMoney(s.state)-money)<1e-6);const collected=file.collected;s.collectLiabilities();assert.equal(file.collected,collected);
});
test('personally experienced and communicated accountability updates are bounded, deduplicated and reversible over time',()=>{
 const s=sim(),a=s.agents[0],L=A.Adaptation,p=a.psychology,prior=p.baseRisk;assert.equal(L.accountability(a,'case',1,1,true,1),true);assert.ok(p.baseRisk>prior);const updated=p.baseRisk;assert.equal(L.accountability(a,'case',2,1,true,1),false);assert.equal(p.baseRisk,updated);
 for(let i=0;i<300;i++)L.accountability(a,'case-'+i,2,1,true,1);assert.ok(p.baseRisk<=Math.min(.95,p.riskPrior+.35));const high=p.baseRisk;L.advance(a,120);assert.ok(p.baseRisk<high);assert.ok(L.valid(a));
});
test('higher perceived accountability changes actual utility choices under identical event draws',()=>{
 const low=sim(),high=sim(),id=low.agents.reduce((best,a)=>a.motives[3]>best.motives[3]?a:best).id;let lower=0,higher=0;
 for(const s of [low,high]){const a=s.agents[id];a.psychology.memories={};a.psychology.baseRisk=s===low?.05:.9;A.Adaptation.refresh(a);}
 const options=[{name:'lawful',effects:Array(9).fill(0),norm:0,control:.5},{name:'improper',corrupt:true,effects:[0,0,0,.5,0,0,0,0,0],norm:0,control:.5}];
 for(let i=0;i<400;i++){lower+=low.choose(low.agents[id],'Integrity choice',options,'cost-'+i).corrupt===true;higher+=high.choose(high.agents[id],'Integrity choice',options,'cost-'+i).corrupt===true;}assert.ok(higher<lower-80);
});
test('reference disapproval can transmit an expectation instead of every lawful interaction manufacturing approval',()=>{
 const a=sim(),b=sim();for(const [s,draw]of [[a,0],[b,1]]){const person=s.agents[0],reference=s.agents[s.orgs[person.org].leader];person.normCorrupt=0;const random=s.rand.bind(s);s.rand=(p,...k)=>p==='reference-reaction'?draw:random(p,...k);s.link(person,reference,true,false);}assert.ok(a.agents[0].normCorrupt<0);assert.ok(b.agents[0].normCorrupt>0);
});
test('network layout spreads the healthy disc while preserving participation bands, default integrity and physical geography',()=>{
 const s=sim(),view=s.view(),original=JSON.stringify(s.snapshot());for(const a of view.agents){a.recentOpportunities=24;a.recentCorrupt=0;}const p=V.projection(view);assert.ok(p.filter(x=>x.radius>.27).length>250);assert.ok(p.every(x=>x.radius<=V.core+1e-8));
 for(let i=0;i<24;i++)view.agents[i].recentCorrupt=i+1;const q=V.projection(view);for(let i=1;i<24;i++)assert.ok(q[i].integrityRadius>q[i-1].integrityRadius);assert.ok(q.slice(0,24).every(x=>x.radius>.5));assert.equal(JSON.stringify(s.snapshot()),original);
});
test('coercive ties cannot attract victims as though they indicated affinity or voluntary cooperation',()=>{
 const view=sim().view(),none=clone(view);none.links=[];view.links=view.links.map(l=>({...l,lastKind:'coercion'}));assert.equal(JSON.stringify(V.projection(view)),JSON.stringify(V.projection(none)));
});

test('a public decision has one cost-learning pathway and cannot replay an already personally experienced sanction',()=>{
 const s=new A.Simulation({...config,policies:[{id:'penalties',mobilization:1}]}),a=s.agents[0],body=s.publicOrgs.find(o=>o.fn==='decision'),policy=s.state.policies[0],allocation=policy.allocations.find(x=>x.org===body.id);allocation.installed=true;allocation.lastDelivered=s.month;
 const base=a.psychology.baseRisk;s.communicatedDecision(a,'announced-case',body,1);assert.equal(a.psychology.baseRisk,base);assert.ok(a.psychology.memories.penalties.components.risk.count===1);const snapshot=JSON.stringify(a.psychology);assert.equal(s.communicatedDecision(a,'announced-case',body,1),false);assert.equal(JSON.stringify(a.psychology),snapshot);
 A.Adaptation.accountability(a,'personal-case',s.month,1,true,1);const self=JSON.stringify(a.psychology);assert.equal(s.communicatedDecision(a,'personal-case',body,1),false);assert.equal(JSON.stringify(a.psychology),self);
});

test('pay adequacy assesses modeled take-home receipts rather than gross receipts',()=>{
 const s=sim();for(const a of s.roles[2]){a.cost=.95;a.receipts=Array(6).fill(1);}assert.equal(s.diagnostic('pay').value,0);for(const a of s.roles[2])a.receipts=Array(6).fill(1.2);assert.equal(s.diagnostic('pay').value,100);
});
