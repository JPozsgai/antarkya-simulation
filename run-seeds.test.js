'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),R=require('./run-seeds'),A=require('./model');
const config={country:'PER',duration:12,policies:[{id:'aca',mobilization:.6}],eventSeed:'replay-test'};
test('new runs get distinct event identities without modifying settings or society',()=>{
 const before=JSON.stringify(config),fill=words=>words.fill(42),one=R.prepareRun(config,false,fill),two=R.prepareRun(config,false,fill);assert.notEqual(one.eventSeed,two.eventSeed);assert.equal(JSON.stringify(config),before);assert.deepEqual(A.createInitial(one),A.createInitial(two));const initial=A.createInitial(one),first=new A.Simulation(one,initial).run(),second=new A.Simulation(two,initial).run();assert.notDeepEqual(first.state.history,second.state.history);assert.notEqual(A.hash(JSON.stringify(first.state.events)),A.hash(JSON.stringify(second.state.events)));first.assertInvariants();second.assertInvariants();
});
test('explicit exact replay consumes no new entropy and reproduces the entire event history',()=>{
 const replay=R.prepareRun(config,true,()=>{throw Error('Replay must not generate a fresh seed.');});assert.equal(replay.eventSeed,config.eventSeed);const initial=A.createInitial(replay),first=new A.Simulation(replay,initial).run(),second=new A.Simulation(replay,initial).run();assert.deepEqual(first.snapshot(),second.snapshot());
});
test('fresh event seeds retain matching baseline/reform randomness and separate initialization',()=>{
 const c=R.prepareRun({...config,policies:[]},false,words=>{for(let i=0;i<words.length;i++)words[i]=i+100;});const initial=A.createInitial(c),reform=new A.Simulation(c,initial).run(),baseline=new A.Simulation(c,initial,0,true).run();assert.deepEqual(reform.snapshot(),baseline.snapshot());assert.equal(initial.initialKey,A.createInitial(config).initialKey);
});
