'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),A=require('./model');
test('Peru ACA completes maximum 240-month duration with finite and conserved state',()=>{
 const s=new A.Simulation({country:'PER',duration:240,eventSeed:'long-run-audit',policies:[{id:'aca',mobilization:.7}]});for(let i=0;i<240;i++){s.step();s.assertInvariants();}assert.equal(s.month,240);assert.ok(s.metrics().corruptActs>0);for(const m of Object.values(s.metrics()))assert.ok(Number.isFinite(m));for(const c of s.classActivity())if(c.rate!==null)assert.ok(c.rate>=0&&c.rate<=100);
});
test('all-country extreme conditions retain valid resources, workload and decision utilities',()=>{
 for(const country of ['NGA','ZAF','IDN','IND','CHN','PER','BRA','USA','DEU','ITA'])for(const edge of [0,100]){const s=new A.Simulation({country,duration:12,eventSeed:'extremes',overrides:{civil_liberties:edge,representation:edge,electoral_integrity:edge,kinship:edge,informality:edge,public_private_separation:edge,government_effectiveness:edge,rule_of_law:edge,regulatory_quality_proxy:edge,central_allocation:edge},policies:A.KEYS.map(id=>({id,mobilization:edge/100}))});for(let m=0;m<12;m++){s.step();s.assertInvariants();}for(const a of s.agents)for(const d of a.decisions)for(const option of d.alternatives)assert.ok(Number.isFinite(option.utility));}
});
