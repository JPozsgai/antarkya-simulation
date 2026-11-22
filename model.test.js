'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),A=require('./model'),Profiles=require('./profiles'),Settings=require('./config');
const config=(extra={})=>({country:'PER',duration:24,policies:[{id:'oversight',mobilization:.6},{id:'complaints',mobilization:.6}],...extra});
test('ten country societies: 1,000 people, overlapping motives, independent support and membership',()=>{
 for(const country of Object.keys(Settings.countries)){const s=A.createInitial(config({country}));assert.equal(A.validateInitial(s,config({country})),true);assert.equal(s.agents.length,1000);assert.equal(new Set(s.agents.map(a=>a.id)).size,1000);assert.ok(A.TYPES.every((_,i)=>s.agents.filter(a=>a.role===i).length>=20));for(const a of s.agents){assert.equal(a.motives.length,9);assert.ok(a.motives.every(v=>v>0));assert.ok(Math.abs(a.motives.reduce((x,y)=>x+y,0)-1)<1e-9);assert.equal(new Set(a.support.map(t=>s.orgs[t.org].category)).size,4);assert.equal(a.memberships.length,new Set(a.memberships).size);}assert.equal(s.policies.length,0);}
});
test('reform selection, mobilization, duration and future-event seed do not regenerate the initial society',()=>{
 const first=A.createInitial(config()),next=A.createInitial(config({duration:60,eventSeed:'different',policies:[{id:'pay',mobilization:.1}]}));assert.deepEqual(first,next);assert.notDeepEqual(first,A.createInitial(config({overrides:{informality:75}})));
});
test('paired no-new-reform branches are identical; repetitions share state but subsequent events differ',()=>{
 const c=config({policies:[],duration:12}),i=A.createInitial(c),a=new A.Simulation(c,i,0,false).run(),b=new A.Simulation(c,i,0,true).run(),r=new A.Simulation(c,i,1,false).run();assert.deepEqual(a.snapshot(),b.snapshot());assert.notDeepEqual(a.state.history,r.state.history);assert.deepEqual(i,A.createInitial(c));
});
test('diagnostics, rendering and actor inspection do not mutate state or random events',()=>{
 const c=config({duration:12}),i=A.createInitial(c),a=new A.Simulation(c,i),b=new A.Simulation(c,i);for(let n=0;n<12;n++){const before=JSON.stringify(a.snapshot());a.assessment();a.influential();a.view();assert.equal(JSON.stringify(a.snapshot()),before);a.step();b.step();}assert.deepEqual(a.snapshot(),b.snapshot());
});
test('each country conserves resources and shared time with all twelve reforms',()=>{
 for(const country of Object.keys(Settings.countries)){const c=config({country,duration:24,policies:A.KEYS.map(id=>({id,mobilization:.7}))}),s=new A.Simulation(c);for(let month=0;month<24;month++){s.step();assert.equal(s.assertInvariants(),true);}assert.ok(s.metrics().corruptActs>0);assert.ok(s.state.cases.length>0);assert.equal(new Set(s.state.cases.map(c=>c.id)).size,s.state.cases.length);assert.equal(s.state.policies.length,12);assert.ok(s.state.policies.some(p=>p.allocations.some(a=>a.installed)));}
});
test('initial zero mobilization is persistent until a review; full funding does not install capacity immediately',()=>{
 const c=config({policies:[{id:'declarations',mobilization:0}]}),s=new A.Simulation(c);for(let n=0;n<5;n++)s.step();assert.equal(s.state.policies[0].rate,0);assert.equal(s.state.policies[0].mobilized,0);assert.ok(s.state.policies[0].allocations.every(a=>!a.installed));const full=new A.Simulation(config({policies:[{id:'declarations',mobilization:1}]}));full.step();assert.ok(full.state.policies[0].allocations.every(a=>!a.installed));
});
test('single act switches display; inactivity cannot recover; six months and three meaningful choices can',()=>{
 const s=new A.Simulation(config()),a=s.agents[0];a.corruptActions=0;a.lastCorrupt=null;a.state='integrity';s.state.month=1;s.act(a,true);assert.equal(a.state,'corrupt');s.state.month=12;s.recover();assert.equal(a.state,'corrupt');for(let j=0;j<3;j++)s.act(a,false);s.recover();assert.equal(a.state,'integrity');assert.equal(a.corruptActions,1);s.act(a,true);assert.equal(a.state,'corrupt');assert.equal(a.recoveryChoices,0);
});
test('coercion records the official as perpetrator without marking the victim corrupt',()=>{
 const s=new A.Simulation(config()),victim=s.roles[0][0],official=s.roles[2][0];victim.state='integrity';victim.corruptActions=0;victim.lastCorrupt=null;const before=victim.balance;s.choose=(a,c,options)=>options.find(o=>o.name==='demand payment')||options.find(o=>o.name==='pay under coercion')||options.find(o=>o.name==='lawful')||options[0];s.encounter(victim,official,'service','forced-coercion');assert.equal(victim.corruptActions,0);assert.equal(victim.state,'integrity');assert.ok(official.corruptActions>0);assert.ok(victim.balance<before);assert.equal(s.metrics().coercedPayments,1);s.assertInvariants();
});
test('unaccepted corrupt proposals are not counted as integrity by the proposer',()=>{
 const s=new A.Simulation(config()),a=s.roles[0][0],b=s.roles[2][0],before=a.integrityChoices,beforeOther=b.integrityChoices;s.choose=(person,c,options)=>options.find(o=>o.name===(person.id===a.id?'offer improper advantage':'perform duty'))||options[0];s.encounter(a,b,'service','refusal-test');assert.equal(a.integrityChoices,before);assert.equal(b.integrityChoices,beforeOther+1);assert.equal(s.metrics().failedProposals,1);
});
test('employment transitions retain identity, money, history, home and existing ties',()=>{
 const s=new A.Simulation(config()),a=s.roles[0][0],before={id:a.id,balance:a.balance,actions:a.corruptActions,x:a.x,y:a.y},links=JSON.stringify(s.state.links);s.changeEmployment(a,2,s.services[0].id);assert.equal(a.id,before.id);assert.equal(a.balance,before.balance);assert.equal(a.corruptActions,before.actions);assert.equal(a.x,before.x);assert.equal(a.y,before.y);assert.equal(JSON.stringify(s.state.links),links);
});
test('China uses personnel appointment; civil and criminal functions remain distinct',()=>{
 const s=new A.Simulation(config({country:'CHN'}));assert.equal(s.state.politics.mode,'appointment');s.state.month=s.state.politics.nextReview;s.politicalReview();assert.ok(s.agents[s.state.politics.controller].memberships.includes(s.parties[0].id));const sa=new A.Simulation(config({country:'ZAF'}));const rec={id:'test-contract',actors:[sa.roles[1][0].id],kind:'contract',org:sa.services[0].id,truth:true,visibility:.7};const c=sa.makeCase(rec,null,'complaint');assert.equal(c.route,'civil');assert.equal(sa.responsible(0,'civil').fn,'civil');assert.equal(sa.responsible(2,'civil').fn,'decision');
});
test('case deduplication and policy costs are explicit; diagnostics do not invent zero-denominator success',()=>{
 const s=new A.Simulation(config()),record={id:'same-opportunity',actors:[0],kind:'service',org:s.services[0].id,truth:true,visibility:.5};s.makeCase(record,null,'audit');s.makeCase(record,1,'complaint');assert.equal(s.state.cases.length,1);assert.equal(s.diagnostic('pay').value,null);assert.equal(s.diagnostic('penalties').value,null);assert.ok(A.KEYS.every(id=>A.requirements(id,160,s.state.env).monthly>0));
});
test('reject invalid scenario settings',()=>{
 for(const c of [{country:'unknown'},{duration:Infinity},{duration:0},{repetitions:7},{overrides:{rule_of_law:101}},{overrides:{unknown:2}},{policies:[{id:'pay',mobilization:2}]},{policies:[{id:'pay',mobilization:.5},{id:'pay',mobilization:.6}]}])assert.throws(()=>A.validate(c));assert.equal(Profiles.profiles.length,10);
});
test('serialized initial society is structurally verified and retained without regeneration',()=>{
 const c=config(),s=JSON.parse(JSON.stringify(A.createInitial(c)));assert.equal(A.validateInitial(s,c),true);const bad=JSON.parse(JSON.stringify(s));bad.agents[0].balance=-1;assert.throws(()=>A.validateInitial(bad,c));const broken=JSON.parse(JSON.stringify(s));broken.orgs[0].members.push(999);assert.throws(()=>A.validateInitial(broken,c));assert.throws(()=>A.validateInitial(s,config({country:'NGA'})));const r=new A.Simulation(c,s);assert.equal(r.state.initialKey,s.initialKey);assert.deepEqual(r.agents[0],s.agents[0]);
});
