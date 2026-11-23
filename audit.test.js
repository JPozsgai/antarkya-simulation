'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),A=require('./model');
const config=(extra={})=>({country:'PER',duration:12,eventSeed:'causal-audit',policies:[],...extra});
const sim=extra=>new A.Simulation(config(extra));
const clone=x=>JSON.parse(JSON.stringify(x));
function pair(){const c=config(),i=A.createInitial(c);return [new A.Simulation(c,i),new A.Simulation(c,i)];}
test('country overrides preserve underlying person draws while reconstructed histories can respond',()=>{
 const c=config(),base=A.createInitial(c),traits=s=>s.agents.map(a=>({id:a.id,x:a.x,y:a.y,initialSkill:a.psychology.initialSkill,baseTraits:a.psychology.baseTraits}));
 for(const overrides of [{rule_of_law:90},{government_effectiveness:90},{kinship:90},{informality:90},{public_private_separation:90},{gdp_per_capita_ppp:50000}]){const next=A.createInitial({...c,overrides});assert.deepEqual(traits(base),traits(next));assert.equal(base.societyDrawKey,next.societyDrawKey);}
 const other=A.createInitial({...c,overrides:{kinship:90}});assert.notDeepEqual(base.agents[0].motives,other.agents[0].motives);assert.notDeepEqual(base.initialization.history,other.initialization.history);
});
test('all nine consequence dimensions can independently affect the utility choice',()=>{
 const s=sim(),a=s.agents[0];
 for(let i=0;i<9;i++){a.motives=Array(9).fill(0);a.motives[i]=1;const high=Array(9).fill(0),low=Array(9).fill(0);high[i]=4;low[i]=-4;const options=[{name:'high',effects:high,norm:0,control:.5},{name:'low',effects:low,norm:0,control:.5}];assert.equal(s.choose(a,'Consequence audit',options,'nine-'+i).name,'high');}
});
test('implemented encounter consequences distinguish social, economic and political domains',()=>{
 const s=sim(),a=s.roles[0][0],b=s.roles[2][0];let offered;const original=s.choose.bind(s);s.choose=(person,context,options,key)=>{if(person.id===a.id&&context==='service')offered=options.find(o=>o.name==='offer improper advantage').effects;return original(person,context,options,key);};s.encounter(a,b,'service','capture-effects');assert.equal(offered.length,9);assert.notEqual(offered[0]/offered[3],offered[1]/offered[4]);assert.equal(offered[6],.05);
});
test('directional trust changes only the intended direction and zero ties confer no access',()=>{
 const s=sim(),a=s.roles[0][0],b=s.roles[1][0];a.memberships=[];b.memberships=[];const key=[a.id,b.id].sort((x,y)=>x-y).join(':');s.state.links[key]={a:b.id,b:a.id,trustAB:.1,trustBA:.8,strength:.8,count:1,corruptCount:0,born:0,last:0};assert.equal(s.relationship(a,b).trust,.8);assert.equal(s.relationship(b,a).trust,.1);s.link(a,b,true);assert.equal(s.state.links[key].trustBA,.8250000000000001);assert.equal(s.state.links[key].trustAB,.12000000000000001);s.state.links[key].strength=0;assert.equal(s.related(a,b),false);
});
test('affinity changes contact routing while locations and random keys stay fixed',()=>{
 const [low,high]=pair(),a=low.roles[0][0],b=low.roles[1][0],other=low.roles[1].find(x=>x.org!==b.org);
 for(const s of [low,high])for(const id of [b.id,other.id]){s.agents[id].x=.5;s.agents[id].y=.5;s.agents[id].memberships=[];}
 low.agents[a.id].support.find(t=>t.org===b.org).affinity=0;high.agents[a.id].support.find(t=>t.org===b.org).affinity=1;
 let first=0,second=0;for(let i=0;i<300;i++){first+=low.nearest(low.agents[a.id],[low.agents[b.id],low.agents[other.id]],'affinity-'+i).id===b.id;second+=high.nearest(high.agents[a.id],[high.agents[b.id],high.agents[other.id]],'affinity-'+i).id===b.id;}assert.ok(second>first+25);
});
test('individual staff competence contributes to effective organizational capacity',()=>{
 const [low,high]=pair(),org=low.services[0];for(const id of org.members){low.agents[id].skill=0;high.agents[id].skill=1;}low.monthlyAccounts();high.monthlyAccounts();assert.ok(high.orgs[org.id].capacity>low.orgs[org.id].capacity);low.assertInvariants();high.assertInvariants();
});
test('financial security changes subjective economic gains without knowledge of hidden corruption',()=>{
 const s=sim(),a=s.agents[0],options=[{name:'benefit',effects:[0,0,0,1,0,0,0,0,0],norm:0,control:.5}];a.balance=0;s.choose(a,'Security',options,'same');const scarce=a.lastDecision.perceived.attitude;a.balance=100;s.choose(a,'Security',options,'same');assert.ok(scarce>a.lastDecision.perceived.attitude);
});
test('verification of covered personal declarations affects audit detection',()=>{
 const [low,high]=pair();for(const s of [low,high]){s.state.month=1;s.monthlyAccounts();s.state.cases=[];const auditor=s.publicOrgs.find(o=>o.fn==='audit'),subject=s.roles[2].find(a=>s.orgs[a.org].fn==='service'),employer=s.orgs[subject.org];auditor.caps.oversight=1;auditor.legal.oversight=1;employer.legal.declarations=1;employer.caps.declarations=1;employer.disclosureQuality=0;subject.disclosure=s===high?1:0;s.state.conduct=[{id:'declaration-audit',month:1,kind:'service',actors:[subject.id],org:employer.id,truth:true,visibility:0}];const original=s.rand.bind(s);s.rand=(process,...key)=>process==='audit-signal'?.5:original(process,...key);s.audit();}assert.equal(low.state.cases.length,0);assert.equal(high.state.cases.length,1);
});
test('zero legal scrutiny scope prevents audit detection despite trained capacity',()=>{
 const s=sim();s.state.month=1;s.monthlyAccounts();s.state.cases=[];const o=s.publicOrgs.find(o=>o.fn==='audit');o.caps.oversight=1;o.legal.oversight=0;s.state.conduct=[{id:'outside-scope',month:1,kind:'service',actors:[s.roles[2][0].id],org:s.services[0].id,truth:true,visibility:1}];const original=s.rand.bind(s);s.rand=(p,...k)=>p==='audit-signal'?.001:original(p,...k);s.audit();assert.equal(s.state.cases.length,0);
});
test('penalty collection capacity changes actual transferred resources after the same decision',()=>{
 const [low,high]=pair();for(const s of [low,high]){s.state.month=1;s.monthlyAccounts();s.state.cases=[];const target=s.roles[2][0],record={id:'liability',actors:[target.id],kind:'extortion',org:target.org,truth:true,visibility:1};A.transfer(s.state.outside,target,10);const c=s.makeCase(record,null,'audit');c.stage=3;c.evidence=1;c.next=0;c.jurisdiction=null;c.intakeDone=true;const body=s.responsible(3,'criminal',c);body.caps.penalties=s===high?1:.1;body.legal.penalties=1;s.choose=(a,context,options)=>options.find(o=>o.name==='process')||options[0];s.processCases();s.assertInvariants();}assert.ok(high.state.cases[0].collected>low.state.cases[0].collected);
});
test('policy ordering follows actor priorities independently of menu/storage order',()=>{
 const c=config({policies:[{id:'merit',mobilization:.8},{id:'pay',mobilization:.8},{id:'education',mobilization:.8}]}),i=A.createInitial(c),a=new A.Simulation(c,i),b=new A.Simulation(c,i);b.state.policies.reverse();for(const s of [a,b]){s.state.month=1;s.monthlyAccounts();s.state.cases=[];s.fundPolicies();s.scheduleWork();s.implementPolicies();s.assertInvariants();}const values=s=>s.state.policies.map(p=>({id:p.id,mobilized:p.mobilized,deployed:p.deployed,work:p.allocations.map(x=>x.work)})).sort((a,b)=>a.id.localeCompare(b.id));assert.deepEqual(values(a),values(b));
});
test('experienced waiting changes support and perceived access without inventing corruption information',()=>{
 const s=sim(),a=s.roles[0][0],o=s.services[0],party=a.support.find(t=>t.org===s.state.politics.governingParty),before={support:party.affinity,control:a.control,beliefs:clone(a.beliefs),wait:a.experience.wait};s.state.services=[];s.addService(a,o,false,'service');o.time=0;s.processServices();assert.ok(party.affinity<before.support);assert.ok(a.control<before.control);assert.deepEqual(a.beliefs,before.beliefs);assert.equal(a.experience.wait,before.wait+1);
});
test('resource-review utility responds to experienced stakeholder support',()=>{
 const c=config({policies:[{id:'aca',mobilization:.5}]}),i=A.createInitial(c),a=new A.Simulation(c,i),b=new A.Simulation(c,i);
 for(const s of [a,b]){s.state.month=6;for(const person of s.agents){person.experience.trust=s===a?0:1;person.support.find(t=>t.org===s.state.politics.governingParty).affinity=s===a?0:1;}s.budgetReview();}
 const score=s=>s.agents[s.state.politics.controller].decisions.find(d=>d.context==='Resource review aca').alternatives.find(x=>x.name==='increase').attitude;assert.ok(score(b)>score(a));assert.equal(b.state.policies[0].reviews[0].feedback.support,1);
});
test('social sharing uses receiver trust and ignores zero-strength links',()=>{
 const s=sim(),source=s.roles[0][0],receiver=s.roles[0][1];const key=[source.id,receiver.id].sort((a,b)=>a-b).join(':');s.state.links={[key]:{a:source.id,b:receiver.id,trustAB:1,trustBA:0,strength:1}};assert.equal(s.peers(source,'story').length,0);s.state.links[key].trustBA=1;assert.equal(s.peers(source,'story').length,1);s.state.links[key].strength=0;assert.equal(s.peers(source,'story').length,0);
});
test('editorial independence and real funding dependence enter publication incentives',()=>{
 const [a,b]=pair();let scores=[];
 for(const s of [a,b]){const outlet=s.media[0],subject=s.roles[1][0];outlet.editorialIndependence=s===a?0:1;const rand=s.rand.bind(s);s.rand=(p,...k)=>p==='outlet'?0:rand(p,...k);s.publish(subject.id,'audit story',.8,'story-case',true);const decision=s.agents[outlet.leader].decisions.at(-1);scores.push(decision.alternatives.find(o=>o.name==='withhold').attitude);}
 assert.ok(scores[1]<scores[0]);const s=a,outlet=s.media[0],donor=s.orgs.find(o=>o.category===1),subject=s.agents[donor.leader];assert.equal(s.fundingDependence(outlet,subject.id),0);const amount=A.transfer(donor,outlet,1);s.state.funding.push({from:donor.id,to:outlet.id,active:true,last:s.month,total:amount,payments:[{month:s.month,amount}]});assert.ok(s.fundingDependence(outlet,subject.id)>0);s.assertInvariants();
});
test('recent participation denominators remain bounded and inactivity cannot erase history',()=>{
 const s=sim(),a=s.agents[0];a.meaningful=[];a.lastDecision=null;for(let i=0;i<30;i++){s.state.month=i+1;s.act(a,i%2===0);}assert.equal(a.meaningful.length,24);const before=clone(a.meaningful);s.state.month+=20;s.recover();assert.deepEqual(a.meaningful,before);for(const x of s.classActivity())if(x.rate!==null)assert.ok(x.rate>=0&&x.rate<=100);
});
test('a dense network alone does not produce a capture event; repeated abuse is required',()=>{
 const s=sim(),ids=[s.roles[1][0].id,s.roles[2][0].id,s.roles[3][0].id];s.state.month=12;s.state.links={a:{a:ids[0],b:ids[1],strength:.9,corruptCount:4,last:12},b:{a:ids[1],b:ids[2],strength:.9,corruptCount:4,last:12}};s.macroDevelopments();assert.equal(s.state.events.filter(e=>e.status==='Coordinated scheme').length,0);for(let i=0;i<3;i++)s.state.conduct.push({id:'scheme-'+i,month:12,kind:'contract',actors:ids,truth:true,org:s.services[0].id});s.macroDevelopments();assert.equal(s.state.events.filter(e=>e.status==='Coordinated scheme').length,1);
});

test('country mandates change real referrals without merging investigation, prosecution and courts',()=>{
 for(const country of ['NGA','IDN','CHN']){const s=sim({country}),c={specialist:true,org:s.services[0].id,source:'audit',kind:'extortion'};assert.equal(s.responsible(1,'criminal',c).fn,'prevention');assert.equal(s.responsible(3,'criminal',c).fn,'decision');}
 const india=sim({country:'IND'});assert.equal(india.responsible(0,'criminal',{source:'complaint'}).fn,'integrity');
 const peru=sim();assert.equal(peru.responsible(0,'criminal',{source:'complaint',kind:'vote buying'}).fn,'integrity');
 const china=sim({country:'CHN'});assert.equal(china.responsible(2,'administrative',{org:china.services[0].id}).fn,'prevention');
 const sa=sim({country:'ZAF'});assert.equal(sa.responsible(1,'civil').fn,'civil');assert.equal(sa.responsible(2,'civil').fn,'decision');
});

test('out-of-scope audits cannot create false allegations through a false-positive draw',()=>{
 const s=sim();s.state.month=1;s.monthlyAccounts();s.state.cases=[];const o=s.publicOrgs.find(o=>o.fn==='audit');o.legal.oversight=0;o.caps.oversight=1;s.state.conduct=[{id:'lawful-outside-scope',month:1,kind:'service',actors:[s.roles[2][0].id],org:s.services[0].id,truth:false,visibility:1}];s.rand=()=>.001;s.audit();assert.equal(s.state.cases.length,0);s.assertInvariants();
});

