'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),A=require('./model'),V=require('./visualization'),fs=require('node:fs');
const fixture=()=>new A.Simulation({country:'PER',duration:6,policies:[]});
test('analytical projection preserves behavior radii when affinity and cooperation change',()=>{
 const s=fixture(),view=s.view(),before=JSON.stringify(s.snapshot()),first=V.projection(view);for(const a of view.agents)a.affinityByRole=[1,0,0,1];view.links=view.links.map(l=>({...l,trustAB:1,trustBA:1,strength:1}));const next=V.projection(view);assert.deepEqual(first.map(p=>p.radius),next.map(p=>p.radius));assert.notDeepEqual(first.map(p=>p.angle),next.map(p=>p.angle));assert.equal(JSON.stringify(s.snapshot()),before);for(const p of next)assert.ok(Number.isFinite(p.x)&&Number.isFinite(p.y)&&p.radius<=.95);
});
test('new meaningful choices change radial position; elapsed time and role do not',()=>{
 const s=fixture(),a=s.agents[0];a.meaningful=[];a.lastDecision=null;s.act(a,true);const first=V.projection(s.view())[a.id];s.state.month+=12;const idle=V.projection(s.view())[a.id];assert.equal(first.radius,idle.radius);s.act(a,false);const lawful=V.projection(s.view())[a.id];assert.ok(lawful.radius<first.radius);const role=a.role;a.role=(role+1)%4;const moved=V.projection(s.view())[a.id];assert.equal(moved.radius,lawful.radius);
});
test('major event filter excludes routine case traffic without discarding the full log',()=>{
 const events=[{kind:'case',title:'Case update'},{kind:'macro',title:'Institution changes'},{kind:'politics',title:'Election'}];assert.equal(V.importantEvents(events).length,2);assert.equal(V.importantEvents(events,'all').length,3);assert.equal(V.importantEvents(events,'case').length,1);assert.equal(events.length,3);
});
test('entrypoint loads consistent versions and all UI hooks including arbitrary whole-month duration',()=>{
 const html=fs.readFileSync('index.html','utf8'),app=fs.readFileSync('app.js','utf8'),ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]));for(const m of app.matchAll(/\$\('([^']+)'\)/g))if(!m[1].endsWith('-'))assert.ok(ids.has(m[1]),'Missing UI element '+m[1]);assert.match(html,/<input type="number" id="duration" min="6" max="240"/);assert.match(html,/value="major" selected/);assert.ok(!ids.has('casesStat'));for(const file of ['profiles','config','model','run-seeds','visualization','app'])assert.ok(html.includes(file+'.js?v=2.1.0'));assert.ok(app.includes("worker.js?v=2.1.0"));assert.ok(html.indexOf('visualization.js')<html.indexOf('app.js'));
});
