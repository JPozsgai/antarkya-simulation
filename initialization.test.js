'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),A=require('./model'),V=require('./visualization'),B=require('./baseline'),C=require('./config');
const config=extra=>({country:'PER',duration:12,policies:[],...extra});
test('political defaults use sourced country scores and keep unmeasured culture explicit',()=>{
  const peru=A.conditions(A.validate(config())),china=A.conditions(A.validate(config({country:'CHN'}))),germany=A.conditions(A.validate(config({country:'DEU'})));
  assert.equal(peru.civil_liberties,65);assert.equal(peru.representation,75);assert.equal(peru.electoral_integrity,100*10/12);
  assert.equal(china.representation,0);assert.equal(china.electoral_integrity,0);assert.equal(germany.electoral_integrity,100);
  assert.equal(peru.kinship,50);assert.match(B.fieldStatus('kinship'),/Unmeasured/);assert.equal(A.conditions(A.validate(config({overrides:{representation:33}}))).representation,33);
  for(const country of Object.keys(C.countries))assert.equal(B.sources(country).filter(x=>/Freedom House/.test(x.title)).length,2);
});
test('instrument-specific observations inform bounded estimates without treating missing criteria as no safeguards',()=>{
  const env=A.conditions(A.validate(config())),conflicts=B.organization('PER',env,'conflicts',.5),disclosure=B.organization('PER',env,'disclosure',.5);
  assert.ok(disclosure.capacity>conflicts.capacity);assert.equal(conflicts.scope,.4+.45*.89);
  assert.ok(B.organization('BRA',env,'conflicts',.5).capacity>0);assert.ok(B.organization('DEU',env,'conflicts',.5).scope>0);
  assert.ok(B.organization('IND',env,'protection',.5).scope<B.organization('IND',env,'oversight',.5).scope);
  assert.equal(B.integrity.NGA,undefined);assert.ok(B.organization('NGA',env,'oversight',.5).capacity>0);
});
test('the pre-policy year executes all twelve months, with eligible actors throughout',()=>{
  const s=A.createInitial(config()),h=s.initialization.history;
  assert.equal(h.length,13);assert.deepEqual(h.map(x=>x.month),Array.from({length:13},(_,i)=>i-12));
  for(let i=1;i<h.length;i++)assert.ok(h[i].encounterOpportunities> (h[i-1].encounterOpportunities||0));
  assert.ok(s.agents.every(a=>a.psychology.lastAdvance===0));assert.ok(s.agents.some(a=>a.meaningful.some(d=>d.month<0)));
  assert.ok(s.agents.some(a=>a.receipts.length===6));assert.ok(s.agents.some(a=>a.experience.service>0));
  assert.ok(s.agents.some(a=>Object.keys(a.psychology.memories).length>0));
});
test('month zero has coherent conduct, ongoing work, cross-class ties and behavior-derived map positions',()=>{
  const s=A.createInitial(config()),sim=new A.Simulation(config(),s),v=sim.view();
  assert.ok(s.conduct.some(r=>r.truth));assert.ok(s.cases.some(c=>c.status!=='closed'));assert.ok(s.services.length>0);assert.ok(s.stories.length>0);
  assert.ok(Object.values(s.links).some(l=>s.agents[l.a].role!==s.agents[l.b].role));
  for(const a of s.agents)if(a.lastCorrupt!==null){assert.ok(a.lastCorrupt<=0);assert.ok(s.conduct.some(r=>r.truth&&r.actors.includes(a.id)));}
  assert.ok(V.projection(v).some(p=>p.radius>.27));assert.ok(V.projection(v).some(p=>p.radius<=.27));
  assert.equal(sim.metrics().corruptActs,0);assert.equal(sim.metrics().sanctions,0);assert.equal(s.history.length,0);assert.equal(s.policies.length,0);
  assert.equal(v.events[0].status,'Starting estimate');assert.equal(s.initialization.metrics.corruptActs,s.conduct.filter(r=>r.truth).length);
  sim.assertInvariants();
});
test('pre-policy history is independent of reform, duration, repetitions and future-event seeds',()=>{
  const a=A.createInitial(config()),b=A.createInitial(config({duration:240,repetitions:20,eventSeed:'future-only',policies:[{id:'aca',mobilization:1}]}));
  assert.equal(JSON.stringify(a),JSON.stringify(b));
  const r=new A.Simulation(config(),a),base=new A.Simulation(config(),a,0,true);r.step();base.step();
  assert.equal(JSON.stringify(r.snapshot()),JSON.stringify(base.snapshot()));assert.equal(a.month,0);assert.equal(a.metrics.corruptActs,0);
});
test('a saved reconstructed snapshot is accepted exactly and rejects edited histories and old starts',()=>{
  const c=config(),s=A.createInitial(c);assert.equal(A.validateInitial(JSON.parse(JSON.stringify(s)),c),true);
  for(const edit of [x=>x.agents[0].meaningful.push({month:-1,corrupt:true}),x=>x.cases[0].evidence=1,x=>x.agents[0].psychology.traits.openness=.999,x=>delete x.initialization]){
    const changed=JSON.parse(JSON.stringify(s));edit(changed);assert.throws(()=>A.validateInitial(changed,c));
  }
});
test('inherited casework advances across adoption without duplicate IDs, invalid clocks or lost money',()=>{
  const c=config(),initial=A.createInitial(c),s=new A.Simulation(c,initial),before=initial.cases.filter(c=>c.status!=='closed').map(c=>[c.id,c.stage,c.work]);
  for(let m=0;m<12;m++){s.step();s.assertInvariants();}
  assert.ok(before.some(([id,stage,work])=>{const c=s.state.cases.find(c=>c.id===id);return c.stage!==stage||c.work>work;}));
  for(const records of [s.state.cases,s.state.conduct,s.state.stories])assert.equal(new Set(records.map(r=>r.id)).size,records.length);
  assert.ok(s.agents.every(a=>a.psychology.lastAdvance===12));assert.ok(Math.abs(A.totalMoney(s.state)-initial.accountingTotal)<.001);
});
