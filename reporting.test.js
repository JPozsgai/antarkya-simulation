'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),Module=require('node:module'),{execFileSync}=require('node:child_process'),A=require('./model'),Q=A.Reporting,V=require('./visualization'),D=require('./profiles');
const config=(extra={})=>({country:'PER',duration:6,eventSeed:'policy-report-tests',policies:[{id:'education',mobilization:.7}],...extra});
const clone=x=>JSON.parse(JSON.stringify(x));
test('all twelve tools have distinct output definitions and relevant starting conditions',()=>{
 const c=config(),i=A.createInitial(c),r=new A.Simulation(c,i),b=new A.Simulation(c,i,0,true);
 assert.deepEqual(Q.ids,A.KEYS);assert.equal(new Set(Q.ids.map(id=>Q.definitions[id].output)).size,12);assert.deepEqual(r.reporting().start,b.reporting().start);assert.equal(r.reporting().start.month,0);
 assert.equal(r.reporting().history[0].month,-12);assert.equal(Q.windowValue(r.reporting(),'education',0).months,12);assert.equal(Q.windowValue(r.reporting(),'education',0).value,0);
 assert.ok(Q.windowValue(r.reporting(),'pay',0).value>0);assert.ok(!JSON.stringify(Q.definitions.education).includes('case'));assert.ok(!JSON.stringify(Q.definitions.pay).includes('case'));
 assert.ok(Q.valid(r.reporting()));assert.ok(r.reporting().start.tools.education.conditions[0]>0);
});
test('policy starting snapshots precede formal adoption and remain fixed during the run',()=>{
 const r=new A.Simulation(config()),before=clone(r.reporting().start);assert.ok(r.reporting().history.at(-1).tools.education.scope>before.tools.education.scope);
 r.run();assert.deepEqual(r.reporting().start,before);assert.equal(r.reporting().history.at(-1).month,6);assert.equal(r.agents.length,1000);assert.ok(Q.valid(r.reporting()));
});
test('recording and interpretation do not consume RNG or change the simulated society',()=>{
 const c=config({policies:A.KEYS.map(id=>({id,mobilization:.6}))}),i=A.createInitial(c),r=new A.Simulation(c,i),b=new A.Simulation(c,i);b.monitor=null;
 for(let m=0;m<6;m++){r.step();b.step();assert.deepEqual(r.snapshot(),b.snapshot());r.assertInvariants();}
 const state=clone(r.snapshot());Q.view(r);Q.eventsFor(r.reporting(),'education','outcome',6);Q.interpret('impact',{value:10,baseline:11});assert.deepEqual(r.snapshot(),state);
});
test('same published engine produces identical initialization and conduct with monitoring enabled',()=>{
 const filename=path.join(__dirname,'published-model.cjs'),oldSource=execFileSync('git',['show','4da71144763978c4967151efe9394ffe0e160dfd:model.js'],{encoding:'utf8'}),previous=new Module(filename,module);previous.filename=filename;previous.paths=module.paths;previous._compile(oldSource,filename);
 const old=previous.exports,c=config({policies:A.KEYS.map(id=>({id,mobilization:.6}))}),one=A.createInitial(c),two=old.createInitial(c);assert.deepEqual(one,two);
 const a=new A.Simulation(c,one),b=new old.Simulation(c,two);for(let m=0;m<6;m++){a.step();b.step();assert.deepEqual(a.snapshot(),b.snapshot());}
});
test('output uses weighted actual activity over equal historical windows',()=>{
 const r=new A.Simulation(config()),report=r.reporting(),start=Q.windowValue(report,'pay',0);assert.equal(start.fromMonth,-12);r.run();const final=Q.windowValue(r.reporting(),'pay',6);assert.equal(final.months,12);assert.equal(final.fromMonth,-6);assert.ok(final.value>0);
 const p=r.reporting().history.find(x=>x.month===-6),end=r.reporting().history.find(x=>x.month===6);assert.equal(final.value,end.counts.pay-p.counts.pay);assert.equal(Q.windowValue(r.reporting(),'pay',7),null);
 assert.equal(Q.windowValue(r.reporting(),'pay',6,0).months,6);
});
test('delivered teaching is distinct from accepted influence and duplicate contacts',()=>{
 const r=new A.Simulation(config()),a=r.agents[0],p=r.state.policies[0],allocation=p.allocations[0],o=r.orgs[allocation.org];allocation.installed=true;allocation.lastDelivered=0;
 const before=r.monitor.counts.education;assert.equal(r.expose(a,'education','unique-contact',o,1),true);assert.equal(r.monitor.counts.education,before+1);
 r.expose(a,'education','unique-contact',o,1);assert.equal(r.monitor.counts.education,before+1);
 p.formal='suspended';assert.equal(r.expose(a,'education','not-delivered',o,1),false);assert.equal(r.monitor.counts.education,before+1);
});
test('generic activity does not get credited as a staff rotation',()=>{
 const r=new A.Simulation(config()),a=r.roles[2].find(a=>r.orgs[a.org].fn==='service'),old=a.org,target=r.services.find(o=>o.id!==old);
 const count=r.monitor.counts.rotation;r.changeEmployment(a,2,target.id);assert.equal(r.monitor.counts.rotation,count+1);r.changeEmployment(a,0,r.orgs.find(o=>o.category===0).id);assert.equal(r.monitor.counts.rotation,count+1);
});
test('read-only event references are relevant, dated and distinguish material changes',()=>{
 const report={events:[{id:'P-education',update:1,month:0,title:'Adopted',status:'Adopted',actors:[],policies:{education:'direct'}},{id:'P-education',update:2,month:3,title:'Setup completed',status:'Operating',actors:[],material:true,policies:{education:'direct'}},{id:'P-pay',update:1,month:4,title:'Pay',status:'Operating',actors:[],policies:{pay:'direct'}},{id:'P-education',update:3,month:9,title:'Future review',status:'Review',actors:[],policies:{education:'direct'}},{id:'E-election',update:1,month:5,title:'Election',salient:true,actors:[],policies:{}}]};
 assert.deepEqual(Q.eventsFor(report,'education','outcome',6).map(x=>x.month),[3,0]);assert.ok(Q.eventsFor(report,'education','impact',6).some(x=>x.id==='E-election'));assert.deepEqual(Q.eventsFor(report,'education','impact',6).map(e=>e.id),Q.eventsFor(report,'pay','impact',6).map(e=>e.id));assert.ok(!Q.eventsFor(report,'education','output',6).some(x=>x.id==='P-pay'));
});
test('interpretations handle delivery, lag, missing evidence and direction without claiming causation',()=>{
 assert.equal(Q.interpret('output',{value:0,baseline:0}),Q.templates.noOutput);assert.equal(Q.interpret('output',{value:3,baseline:1}),Q.templates.outputMore);
 assert.equal(Q.interpret('outcome',{value:50,baseline:50,outputDelta:2}),Q.templates.lag);assert.equal(Q.interpret('outcome',{value:null,baseline:2}),Q.templates.missing);
 assert.equal(Q.interpret('outcome',{value:20,baseline:30,lowerBetter:true}),Q.templates.outcomeBetter);assert.equal(Q.interpret('impact',{value:10,baseline:11}),Q.templates.impactBetter);
 for(const text of Object.values(Q.templates))assert.ok(!/\bbecause\b|\bcaused\b/.test(text));
});
test('optional monitoring roundtrips without changing initial-state compatibility and rejects malformed records',()=>{
 const r=new A.Simulation(config());r.run();const report=clone(r.reporting());assert.ok(Q.valid(report));const bad=clone(report);bad.start.tools.education.conditions[0]='<script>';assert.equal(Q.valid(bad),false);
 const duplicate=clone(report);duplicate.history.push(clone(duplicate.history[0]));assert.equal(Q.valid(duplicate),false);const malformed=clone(report);malformed.events.push({id:'evil',update:1,month:0,title:'bad',text:'bad',actors:[1000],policies:{}});assert.equal(Q.valid(malformed),false);
 A.validateInitial(clone(A.createInitial(config())),config());
});
function harness(current,c,completed){
 const nodes={};function $(id){return nodes[id]||(nodes[id]={value:id==='impactWindow'?'12':'',hidden:true,html:'',get innerHTML(){return this.html;},set innerHTML(x){this.html=x;},get options(){return [...this.html.matchAll(/<option value="([^"]+)"/g)].map(x=>({value:x[1]}));},querySelector:()=>null,querySelectorAll:()=>[],addEventListener(){},scrollIntoView(){}});}
 const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])),number=(x,d=1)=>x===null||x===undefined?'—':Number(x).toFixed(d);
 const app=fs.readFileSync('app.js','utf8'),source=app.slice(app.indexOf('  const Q=A.Reporting;'),app.indexOf('  function renderAssessment(){')),context={A,D,V,$,current,activeConfig:c,completed,getConfig:()=>c,esc,number,drawMap(){}};
 vm.createContext(context);vm.runInContext(source,context);return{nodes,render:(policy,month=null)=>{context.policy=policy;context.reviewMonth=month;vm.runInContext('assessmentPolicy=policy;assessmentMonth=reviewMonth;renderPolicyAssessment(activeConfig)',context);}};
}
test('all twelve policy renderings show relevant before/current conditions and stage panels',()=>{
 const c=config({policies:A.KEYS.map(id=>({id,mobilization:.6}))}),i=A.createInitial(c),r=new A.Simulation(c,i),b=new A.Simulation(c,i,0,true),h=harness({reform:r.view(),baseline:{reporting:b.reporting(),history:b.state.history,assessment:b.assessment()}},c,null);
 for(const id of A.KEYS){h.render(id);const html=h.nodes.assessment.innerHTML;assert.ok(html.includes('Before reform'));assert.ok(html.includes('Current baseline'));assert.ok(html.includes('stage-output'));assert.ok(html.includes('stage-outcome'));assert.ok(html.includes('stage-impact'));assert.ok(html.includes('Rate difference vs baseline'));assert.ok(html.includes(Q.definitions[id].output));}
 h.render('education');assert.ok(!h.nodes.assessment.innerHTML.includes('pending cases'));h.render('pay');assert.ok(!h.nodes.assessment.innerHTML.includes('pending services'));
});
test('completion updates the final comparison and review slider without changing results',()=>{
 const c=config(),i=A.createInitial(c),r=new A.Simulation(c,i),b=new A.Simulation(c,i,0,true);for(let m=0;m<6;m++){r.step();b.step();}
 const current={reform:r.view(),baseline:{reporting:b.reporting(),history:b.state.history,assessment:b.assessment()}},before=structuredClone(current),h=harness(current,c,{type:'complete'});h.render('education');
 assert.match(h.nodes.assessmentPhase.textContent,/Run complete · Final conditions/);assert.ok(h.nodes.assessment.innerHTML.includes('Final baseline'));assert.equal(h.nodes.assessmentMonth.max,'6');h.render('education',2);assert.match(h.nodes.assessmentPhase.textContent,/Reviewing conditions · month 2/);assert.deepEqual(current,before);
});
test('older saved results get an honest monitoring-unavailable notice',()=>{
 const c=config(),r=new A.Simulation(c),view=r.view();delete view.reporting;const h=harness({reform:view,baseline:{history:[],assessment:r.assessment()}},c,{type:'complete'});h.nodes.reportEventDetail={hidden:false};h.render('education');assert.equal(h.nodes.reportEventDetail.hidden,true);assert.match(h.nodes.assessment.innerHTML,/not recorded in this saved result/);
});
