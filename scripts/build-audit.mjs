import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import MarkdownIt from 'markdown-it';
import {runtime,testFiles,read,sha,parse,walk,units,enclosing,refsFor,anchor,escape,cell,semanticHash} from './audit-lib.mjs';
const require=createRequire(import.meta.url),md=new MarkdownIt({html:true,linkify:false,typographer:false});
md.renderer.rules.heading_open=(tokens,idx,opts,env,self)=>{const title=tokens[idx+1]?.content||'';tokens[idx].attrSet('id',anchor(title));return self.renderToken(tokens,idx,opts);};
const root='docs/audit/',out={};
const put=(name,content)=>{out[root+name]=content.endsWith('\n')?content:content+'\n';};
const table=(headers,rows)=>'| '+headers.join(' | ')+' |\n| '+headers.map(()=> '---').join(' | ')+' |\n'+rows.map(r=>'| '+r.map(cell).join(' | ')+' |').join('\n')+'\n';
const json=x=>JSON.stringify(x,null,2)+'\n';
const code=x=>{x=String(x??'');const size=Math.max(0,...[...x.matchAll(/`+/g)].map(m=>m[0].length))+1;const d='`'.repeat(size);return d+' '+x+' '+d;};
const prose=x=>String(x??'').replace(/\\/g,'\\\\').replace(/([*_`\[\]])/g,'\\$1').replace(/</g,'&lt;').replace(/>/g,'&gt;');
function shell(title,body,prefix=''){
 return `<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escape(title)} · Antarkya audit</title><link rel="stylesheet" href="${prefix}audit.css"></head><body><header><a href="${prefix}index.html">Antarkya · audit documentation</a><nav aria-label="Audit navigation"><a href="${prefix}NARRATIVE.html">Narrative</a><a href="${prefix}TECHNICAL.html">Technical rules</a><a href="${prefix}SOURCE-INDEX.html">Annotated code</a><a href="${prefix}GAPS.html">Limits</a><a href="${prefix}../../index.html">Simulation</a></nav></header><main>${body}</main><footer>Documentation edition 1.0 · 23 November 2026 · behavior 2.4.0 / display 2.4.2. Exploratory, not empirically validated. <a href="${prefix}manifest.json">Version and file manifest</a></footer></body></html>`;
}
function page(name,text){put(name+'.md',text);put(name+'.html',shell((text.match(/^# (.*)/)||[])[1]||name,md.render(text),name.includes('/')?'../':''));}
export async function build({write=true}={}){
 for(const key of Object.keys(out))delete out[key];
 const registry=JSON.parse(read(root+'registry.json')),notes=JSON.parse(read(root+'developer-notes.json'));
 const files=[...runtime,...testFiles(),'index.html','style.css','scripts/audit-lib.mjs','scripts/build-audit.mjs','scripts/check-audit.mjs','.github/workflows/model-checks.yml','package.json','package-lock.json'];
 const catalog={},symbols=new Map(),numerics=[],fields=[],actions=[],tests=[],sourceHashes={};
 for(const file of files){
  if(!fs.existsSync(file))continue;const src=read(file);sourceHashes[file]=sha(src);
  let us=[];if(file.endsWith('.js')||file.endsWith('.mjs')){
   const ast=await parse(src);us=units(ast,file,registry);
   for(const u of us)symbols.set(file+':'+u.name,{file,line:u.line,endLine:u.endLine,refs:u.refs});
   walk(ast,(n,anc)=>{
    if(n.type==='VariableDeclarator'&&n.id?.name)symbols.set(file+':'+n.id.name,{file,line:n.loc.start.line,endLine:n.loc.end.line,refs:refsFor(file,n.id.name,registry)});
    if(n.type==='ObjectProperty'){
      const decl=anc.find(x=>x.type==='VariableDeclarator'),keys=anc.filter(x=>x.type==='ObjectProperty').map(x=>x.key?.name??x.key?.value),key=n.key?.name??n.key?.value;
      if(decl?.id?.name&&key!==undefined)symbols.set(file+':'+[decl.id.name,...keys,key].join('.'),{file,line:n.loc.start.line,endLine:n.loc.end.line,refs:refsFor(file,[decl.id.name,...keys,key].join('.'),registry)});
    }
    const u=enclosing(us,n.start),refs=u?.refs||refsFor(file,'',registry),owner=u?.name||'module data';
    if(runtime.includes(file)&&n.type==='NumericLiteral'){
      const par=anc.at(-1),signed=par?.type==='UnaryExpression'&&par.operator==='-'?par:n;
      const expr=[...anc].reverse().find(x=>['VariableDeclarator','ObjectProperty','AssignmentExpression','BinaryExpression','CallExpression','ReturnStatement'].includes(x.type))||n;
      const context=src.slice(expr.start,expr.end).replace(/\s+/g,' ');
      numerics.push({file,line:n.loc.start.line,value:src.slice(signed.start,signed.end),owner,refs,context:context.length>200?context.slice(0,197)+'…':context});
    }
    if(runtime.includes(file)&&((n.type==='ObjectProperty')||(n.type==='AssignmentExpression'&&n.left?.type==='MemberExpression')||(n.type==='UpdateExpression'&&n.argument?.type==='MemberExpression'))){
     const target=n.type==='ObjectProperty'?(n.computed?'['+src.slice(n.key.start,n.key.end)+']':String(n.key.name??n.key.value)):src.slice((n.left||n.argument).start,(n.left||n.argument).end);
     const val=n.value||n.right;let expression=val?src.slice(val.start,val.end):n.operator;
     if(val?.type==='ObjectExpression')expression=`Object(${val.properties.length} entries); child fields listed separately`;
     if(val?.type==='ArrayExpression'&&expression.length>200)expression=`Array(${val.elements.length} entries); see exact source`;
     if(expression?.length>240)expression=expression.slice(0,237)+'…';
     const pathParts=anc.filter(x=>x.type==='ObjectProperty').map(x=>x.key?.name??x.key?.value),decl=anc.find(x=>x.type==='VariableDeclarator');
     const targetPath=n.type==='ObjectProperty'?[decl?.id?.name||owner,...pathParts,target].join('.'):target;
     fields.push({file,line:n.loc.start.line,owner,refs,target:targetPath,operation:n.type==='ObjectProperty'?'object definition':n.operator,expression:expression?.replace(/\s+/g,' ')});
    }
    if(file==='model.js'&&n.type==='CallExpression'&&n.callee?.type==='MemberExpression'&&n.callee.property?.name==='effects'){
     const prop=[...anc].reverse().find(x=>x.type==='ObjectProperty'&&x.key?.name==='effects'),object=prop&&[...anc].reverse().find(x=>x.type==='ObjectExpression');
     const option=object?.properties.find(x=>(x.key?.name??x.key?.value)==='name');
     actions.push({file,line:n.loc.start.line,owner,refs,option:option?src.slice(option.value.start,option.value.end):'(dynamic / method context)',social:src.slice(n.arguments[0].start,n.arguments[0].end).replace(/\s+/g,' '),economic:src.slice(n.arguments[1].start,n.arguments[1].end).replace(/\s+/g,' '),political:src.slice(n.arguments[2].start,n.arguments[2].end).replace(/\s+/g,' ')});
    }
    if(n.type==='CallExpression'&&['test','it'].includes(n.callee?.name)&&n.arguments[0]?.type==='StringLiteral')tests.push({file,line:n.loc.start.line,name:n.arguments[0].value});
   });
  }
  catalog[file]=us.map(u=>({name:u.name,line:u.line,endLine:u.endLine,parent:u.parent,refs:u.refs,note:notes[file+':'+u.name]||null}));
  // The viewer includes the entire current file, including developer comments, not an excerpt.
  const sourceName=file.replaceAll('/','__').replace(/^\./,'')+'.html',lookup=new Map();
  for(const u of us){if(!lookup.has(u.line))lookup.set(u.line,[]);lookup.get(u.line).push(...u.refs);}
  const lines=src.split('\n').map((line,i)=>{
   const refs=[...new Set(lookup.get(i+1)||[])];return `<span class="source-line" id="L${i+1}"><a class="ln" href="#L${i+1}" aria-label="Line ${i+1}">${i+1}</a><span class="code">${escape(line)}</span>${refs.length?`<span class="line-refs">${refs.map(r=>`<a href="../TECHNICAL.html#${anchor(r)}">${r}</a>`).join(' ')}</span>`:''}</span>`;
  }).join('');
  put('source/'+sourceName,shell(file,`<h1>${escape(file)}</h1><p>Full annotated source · SHA-256 <code>${sha(src)}</code>. <a href="${file.startsWith('.')?'https://github.com/JPozsgai/antarkya-simulation/blob/main/'+escape(file):'../../../'+escape(file)}">Executable / raw file</a></p><p>Line numbers apply to this documentation edition. Stable mechanism IDs link to rules; the manifest identifies this source snapshot.</p><pre class="source"><code>${lines}</code></pre>`,'../'));
 }
 const loc=s=>symbols.get(s),sourceLink=(s)=>{const x=loc(s);return x?`[\`${s}\`](source/${x.file.replaceAll('/','__').replace(/^\./,'')}.html#L${x.line})`:`\`${s}\` (see module data / inline handler)`;};
 const refLink=id=>`[${id}](TECHNICAL.html#${anchor(id)})`;
 const sourceCell=(file,line)=>`[${file}:${line}](source/${file.replaceAll('/','__').replace(/^\./,'')}.html#L${line})`;
 const toc='<details><summary>Browse all 57 mechanisms</summary>\n\n'+registry.entries.map(e=>`- [${e.id} — ${e.title}](#${anchor(e.id)})`).join('\n')+'\n\n</details>';
 page('index',read(root+'OVERVIEW.md'));
 page('DEVELOPERS',read(root+'DEVELOPERS.md'));page('MEASUREMENT',read(root+'MEASUREMENT.md')); page('VERIFICATION',read(root+'VERIFICATION.md')); 
 let narrative='# Accessible narrative of the simulation\n\nThis describes the model that actually executes, with its design reasoning and boundaries. Every section links to the corresponding technical rule and annotated implementation. Read the [audit guide](index.html) for scope and provenance. Unknown corruption history is treated as expected integrity in classification, while a reconstructed pre-policy year supplies actual modeled histories at month zero.\n\n## Mechanism index\n\n'+toc+'\n\n';
 let technical=read(root+'TECHNICAL-INTRO.md')+'\n\n'+toc+'\n\n';
 for(const e of registry.entries){
  const links=e.symbols.map(sourceLink).join(' · '),rules=e.rules.join(', ')||'Later accepted design / implementation detail';
  narrative+=`<a id="${anchor(e.id)}"></a>\n\n## ${e.id} — ${e.title}\n\n${prose(e.narrative)}\n\n[Numerical operationalization](TECHNICAL.html#${anchor(e.id)}).\n\n<details><summary>Implementation references</summary>\n\n${links}.\n\n</details>\n\n**Boundary.** ${prose(e.limitations)}\n\nDesign provenance: ${rules}; ${e.sources.join(', ')}.\n\n`;
  technical+=`<a id="${anchor(e.id)}"></a>\n\n### ${e.id} — ${e.title}\n\n[Accessible explanation](NARRATIVE.html#${anchor(e.id)}) · [Decision crosswalk](RULE-CROSSWALK.html).\n\n${prose(e.technical)}\n\n**Implementation:** ${links}.\n\n**Assumptions / conformance limits:** ${prose(e.limitations)}\n\n**Provenance:** ${rules}; ${e.sources.map(s=>`[${s}](SOURCES.html#${s.toLowerCase()})`).join(', ')}. **Related engineering checks:** ${e.tests.map(f=>`[${f}](source/${f}.html)`).join(', ')||'See general invariant checks'}. These links identify relevant tests, not complete empirical validation.\n\n`;
 }
 page('NARRATIVE',narrative+read(root+'NARRATIVE-EXAMPLE.md'));page('TECHNICAL',technical);
 let sourceIndex='# Full annotated code and developer notes\n\nAll active runtime modules, the interface, tests and audit tooling are reproduced below. The JavaScript is formatted for inspection, with mechanism codes and developer notes in the actual files. These comments and formatting preserve the pinned runtime syntax-tree fingerprints. Anonymous callbacks belong to their nearest named unit; data definitions and writes are separately inventoried. Archived v1 is excluded.\n\n';
 sourceIndex+=table(['File','Purpose / source','SHA-256'],files.filter(f=>catalog[f]).map(f=>[f,`[Full file](source/${f.replaceAll('/','__').replace(/^\./,'')}.html)`,sourceHashes[f]]));
 for(const [file,us]of Object.entries(catalog)){if(!us.length)continue;sourceIndex+=`\n## ${file}\n\n`+table(['Unit / line','Mechanism references','Developer note'],us.map(u=>[sourceCell(file,u.line)+' · '+u.name,u.refs.map(refLink).join(', '),u.note||`Owned by ${u.parent||'module'}; consult the linked technical rule and full function body.`]));}
 page('SOURCE-INDEX',sourceIndex);
 let cross='# Design-to-implementation crosswalk\n\nA mapped decision can be only partly implemented. Read the limits column and [gap register](GAPS.html) before interpreting coverage as conformance. Original decisions and implementation checkpoints are preserved in the [decision register](../AGREED-RULES.md). Later explicit user decisions control where older proposals differ.\n\n';
 const decisionText=read('docs/AGREED-RULES.md');
 const rr=[...Array.from({length:62},(_,i)=>'R'+String(i+1).padStart(2,'0')),...Array.from({length:6},(_,i)=>'AM0'+(i+1))];
 cross+=table(['Decision','Description in decision register','Current mechanisms','Limit / reconciliation'],rr.map(r=>{const es=registry.entries.filter(e=>e.rules.includes(r));const match=decisionText.match(new RegExp('\\*\\*(?:Agreed|Consequence)(?: extension to)? '+r+'[^—\\n]*— ([^*]+)\\*\\*'));return[r,match?.[1]||'See original decision register',es.map(e=>refLink(e.id)).join(', '),[...new Set(es.map(e=>e.limitations))].join(' ')];}));
 cross+='\n## Historical checkpoint AM07\n\nAM07 records the v2.2 review implementation and then-pending publication; it is not an additional behavioral rule. It maps to AK-VAL-01/02. Current publication status and code versions are given in this edition and supersede its historical status wording.\n\n## Later accepted changes\n\n';
 cross+=table(['Later decision','Implementation route','Boundary'],[
 ['Keep 1,000; reconstruct realistic starting conditions',refLink('AK-POP-01')+', '+refLink('AK-INI-01'),'Pre-policy model history is not observed national prevalence.'],
 ['Fresh subsequent randomness, identical initial society',refLink('AK-RNG-01')+', '+refLink('AK-INI-01'),'Keyed shared draws are repeatable; opportunity paths can diverge under reform.'],
 ['Adjustable months and major-event focus',refLink('AK-OV-01')+', '+refLink('AK-MAC-01')+', '+refLink('AK-VIS-02'),'6–240 months; event heuristics do not capture every real macro process.'],
 ['Network/affinity map; corruption participation controls radius',refLink('AK-VIS-01'),'Projection is analytical, not geographic movement; no faint baseline overlay.'],
 ['Individual receptiveness and bounded policy influence',refLink('AK-ADP-01')+', '+refLink('AK-ADP-02')+', '+refLink('AK-ADP-03'),'Explicit priors and memory decay, not calibrated conversion rates.'],
 ['Output, outcome and impact together; concise event-linked meaning',refLink('AK-MEA-01')+', '+refLink('AK-MEA-02')+', '+refLink('AK-MEA-03')+', '+refLink('AK-MEA-04'),'Package impact is shared, not individually attributable to a reform; event links are contextual.'],
 ['Policy-specific starting and final conditions',refLink('AK-MEA-03')+', '+refLink('AK-VIS-03'),'Only relevant indicators headline; general case/service workloads remain expandable context.'],
 ['Full auditor transparency',refLink('AK-VAL-01')+', '+refLink('AK-VAL-02'),'Current docs/annotations expose assumptions and gaps without changing model rules.']]);
 page('RULE-CROSSWALK',cross);
 let gaps='# Assumptions, limitations and implementation gaps\n\nThis is a public limitation register, not a queue of silently authorized behavioral changes. A documented gap is not repaired by describing it. Some mechanisms have executable pathways but remain partial or uncalibrated; their exact boundaries are listed here and beside their equations.\n\n';
 gaps+=table(['Mechanism','Current status','Precise limit'],registry.entries.map(e=>[refLink(e.id)+' — '+e.title,e.status,e.limitations]));
 gaps+='\n## Audit conclusions and next research needs\n\nThe code constructs real numerical agent profiles and uses their evolving values in choices and policy exposure. It also contains modeled money/staff constraints, institutional capacity, information and feedback pathways. These existence claims are inspectable; they do not establish that the priors are realistic. Membership composition, normalized resources/costs, nine-dimensional consequence vectors, uptake/retention parameters and most outcome diagnostics require sensitivity analysis and calibration.\n\nThe agreed national policy architecture is represented through simplified functional nodes and limited legal-scope/descriptor mappings, rather than 120 complete country–policy legal packages. Several practical, political and strategic processes remain simplified or absent. No independent empirical predictive validation, systematic uncertainty analysis or actual Android performance certification is supplied by this audit.\n\nOriginal v1 behavior that was expressly superseded is distinguished from a missing v2 process in the decision crosswalk. When a reporting definition has aspirational wording, the technical rules identify the actual proxy used. Outputs, capability diagnostics, observed rolling outcomes and package-level impact must not be merged into one success score.\n';
 page('GAPS',gaps);
 let sources='# Evidence and source provenance\n\nThis separates accepted design authority from empirical inputs, theoretical inspiration and engineering assumptions. A theoretical source supports a mechanism choice, not the exact numerical coefficient assigned to it. Stored URLs/dates are reproduced as provenance; freshness is not inferred from the documentation date. Private supplied texts are not redistributed.\n\n';
 for(const [id,s] of Object.entries(registry.sources))sources+=`<a id="${id.toLowerCase()}"></a>\n\n## ${id} — ${s.title}\n\n**Role:** ${s.kind}.\n\n${s.review}\n\n${s.location?`[Source / record](${s.location}).`:''}${s.doi?` DOI: ${s.doi}.`:''}\n\n`;
 sources+='\n## Numerical evidence classes\n\n| Class | Treatment in this model |\n| --- | --- |\n| Dated observation / descriptor | Stored value, year, unit, source and retrieval metadata; not converted directly into corruption prevalence. |\n| Sourced proxy | Rescaled or incomplete indicator; both original meaning and mapping are disclosed. |\n| Institutional fact / routing note | Simplified current national architecture; full procedure is not implied. |\n| Unmeasured condition | Neutral scenario prior or null evidence, explicitly editable; missing is not evidence of zero. |\n| Engineering prior | Explicit coefficient/cost/distribution chosen to make a bounded exploratory model; requires calibration/sensitivity checks. |\n| User design decision | Governs intended mechanism; does not by itself establish empirical effect size. |\n\nCountry input rows link directly to stored source URLs and dates. Full legal and bibliographic revalidation is separate from this code audit. The audit read all 17 extracted pages of the original supplied Word description and the current accepted-rule record; some later source titles are retained from earlier agreed records without a new full-text review.\n';
 page('SOURCES',sources);
 // Exact configuration objects, country data and cognition ceilings.
 const C=require('../config.js'),P=require('../profiles.js'),B=require('../baseline.js'),A=require('../adaptation.js'),R=require('../reporting.js');
 let inputs='# Country, policy and parameter inputs\n\nThese are the exact data shipped with this edition. Country observations/proxies are distinct from mappings and engineering priors. For every remaining hard-coded number, inspect the complete [numeric literal inventory](NUMERICS.html). Source code remains authoritative for transformations, eligibility and process constraints.\n\n## Country conditions and institutional topology\n\n';
 inputs+=table(['Country','Role counts (citizen/business/official/politician)','Political mode / relative cycle / first review','Central share prior'],P.profiles.map(p=>{const c=C.countries[p.iso3];return[p.name+' ('+p.iso3+')',c.counts.join(' / '),c.mode+' / '+c.cycle+' / '+c.firstReview,c.central];}));
 for(const p of P.profiles){inputs+=`\n## ${p.name} (${p.iso3})\n\n`+table(['Indicator','Value','Year / unit','Evidence status / source'],Object.entries(p.indicators).map(([k,v])=>[k,v.value,v.year+' · '+v.unit,v.status+' · [source]('+v.source+') · retrieved '+v.retrieved]));
 inputs+='\nPolitical/cultural mapping from `baseline.conditions`: \n\n'+table(['Condition','Initial value','Status'],Object.entries(B.conditions(p.iso3)).map(([k,v])=>[k,v,B.fieldStatus(k)]));
 inputs+='\nInstitutional nodes (simplified names and model functions):\n\n'+table(['Node','Function'],C.countries[p.iso3].nodes);
 inputs+='\nInherited policy evidence is reproduced in the complete country object below; observations and unquantified notes must not be read as numeric behavioral effectiveness.\n\n<details><summary>Complete stored profile and inherited evidence</summary>\n\n```json\n'+JSON.stringify(p,null,2)+'\n```\n\n</details>\n';
 }
 inputs+='\n## Policy-specific implementation costs and direct influence\n\nCost vectors are `[setup RU, recurring RU, staff PM]` normalized engineering coefficients consumed by the requirement function. They are not currency budgets. The cognitive map lists the exact element-specific maxima, half-life, delivery channel and contextual restrictions. A ceiling is not guaranteed uptake or a national treatment-effect estimate.\n\n';
 inputs+=table(['Policy','Costs','Elements and maxima','Contexts / half-life'],P.policies.map(p=>[p.id+' — '+p.label,JSON.stringify(C.costs[p.id]),Object.entries(A.map[p.id].elements).map(([k,v])=>k+': '+v).join('; '),A.map[p.id].contexts.join(', ')+' / '+A.map[p.id].halfLife+' months']));
 inputs+='\n```json\n'+JSON.stringify({assumptions:C.assumptions,cognitiveMap:A.map,sharedBounds:A.bounds,novelty:A.novelty,noveltyFloor:A.noveltyFloor,maintenance:A.maintenance,reportingDefinitions:R.definitions},null,2)+'\n```\n';
 page('INPUTS',inputs);
 let ni='# Complete numeric literal inventory\n\nEvery numeric literal in the ten active JavaScript runtime files is listed, including signs, nearest named unit, surrounding expression and exact source line. This is deliberately an exhaustive **literal** inventory: indices, hashes, canvas geometry and engineering thresholds are not all empirical parameters. Computed values and user-provided inputs are described in the technical rules and source, not invented as fixed literals. The source link gives the entire expression when a table context is abbreviated.\n\n';
 let si='# State-field and assignment inventory\n\nThis source-derived dictionary lists all object-property definitions, member assignments and member increments in active JavaScript. It includes initialization data, operational state, metrics and temporary display/export structures; a listed field is not necessarily mutable behavioral state. Exact entity semantics/units are in the [technical schema](TECHNICAL.html#2-entities-state-variables-and-scales) and linked mechanisms. Dynamic keys and computed structures remain explicit source expressions. Objects/long arrays are expanded in their child rows or available at the source link. See the whole function for clamps and conditional paths.\n\n';
 for(const f of runtime){const ns=numerics.filter(x=>x.file===f),ss=fields.filter(x=>x.file===f),stem=f.replace('.js','');ni+=`- [${f}: ${ns.length} literals](numerics/${stem}.html)\n`;si+=`- [${f}: ${ss.length} definitions/writes](state/${stem}.html)\n`;
  page('numerics/'+stem,'# Numeric literals — '+f+'\n\n[Inventory guide](../NUMERICS.html). Exact contexts are accessible in the full source.\n\n'+table(['Source','Literal','Unit / mechanism','Expression context'],ns.map(x=>[sourceCell(x.file,x.line).replaceAll('(source/','(../source/'),x.value,x.owner+' · '+x.refs.map(refLink).join(', ').replaceAll('(TECHNICAL','(../TECHNICAL'), code(x.context)])));
  page('state/'+stem,'# State definitions and writes — '+f+'\n\n[Inventory guide](../STATE.html). Whole-function source is authoritative for types, branches, bounds and update semantics.\n\n'+table(['Source','Field / target','Operation / expression','Owner / mechanism'],ss.map(x=>[sourceCell(x.file,x.line).replaceAll('(source/','(../source/'),code(x.target),x.operation+' · '+code(x.expression),x.owner+' · '+x.refs.map(refLink).join(', ').replaceAll('(TECHNICAL','(../TECHNICAL')])));
 }
 page('NUMERICS',ni);page('STATE',si);
 page('ACTIONS','# Full action-consequence catalogue\n\nThese are **all** explicit `this.effects(social, economic, political)` calls in the active engine. Each vector has beneficiary order `[self, group, public]`; flattening social then economic then political matches the nine motive weights. They are subjective modeled consequence scores, not monetary transfers or empirical welfare estimates. Monetary costs/benefits and learned accountability costs are further transformed in `choose`; practical feasibility and completion are handled separately. A numeric action payoff is an engineering prior; expressions such as `need` or `bribe` are computed in the linked source. Dynamic option construction and branch conditions remain inspectable in full code.\n\n'+table(['Source / context','Option','Social [self,group,public]','Economic [self,group,public]','Political [self,group,public]'],actions.map(x=>[sourceCell(x.file,x.line)+' · '+x.owner+' · '+x.refs.map(refLink).join(', '),x.option,code(x.social),code(x.economic),code(x.political)])));
 page('TESTS','# Engineering check catalogue\n\nThe following named tests are extracted from the shipped test files. Their names state engineering intentions; inspect each assertion and fixture before treating it as evidence. Links from a mechanism to a test file do not establish complete coverage. No test here substitutes for independent empirical validation, sensitivity analysis or real Android timing/memory measurements. [Execution results](VERIFICATION.html).\n\n'+table(['Test / source','Assertion subject'],tests.map(t=>[sourceCell(t.file,t.line),t.name])));
 put('traceability.json',json({schema:'antarkya.audit.traceability.v1',baseCommit:registry.codeBaseCommit,entries:registry.entries.map(e=>({id:e.id,rules:e.rules,symbols:e.symbols.map(s=>({symbol:s,...(loc(s)||{})})),tests:e.tests,sources:e.sources})),units:catalog}));
 put('numeric-inventory.json',json(numerics));put('state-inventory.json',json(fields));put('action-consequences.json',json(actions));put('test-catalogue.json',json(tests));
 const unresolved=registry.entries.flatMap(e=>e.symbols.filter(s=>!loc(s)).map(symbol=>({id:e.id,symbol})));
 const fingerprints={};for(const f of runtime)fingerprints[f]=await semanticHash(read(f));
 const manifest={schema:'antarkya.audit.manifest.v1',edition:registry.auditVersion,date:registry.date,behaviorVersion:registry.behaviorVersion,displayVersion:registry.displayVersion,auditedBaseCommit:registry.codeBaseCommit,scope:registry.scope,tooling:{node:'20 or newer',prettier:'3.6.2',markdownIt:'14.1.0'},coverage:{mechanisms:registry.entries.length,originalRules:62,behavioralAmendments:6,runtimeFiles:runtime.length,namedUnits:Object.values(catalog).flat().length,numericLiterals:numerics.length,stateDefinitionsAndWrites:fields.length,explicitActionVectors:actions.length,namedTests:tests.length,unresolvedSymbols:unresolved},authoredSHA256:Object.fromEntries(['OVERVIEW.md','TECHNICAL-INTRO.md','NARRATIVE-EXAMPLE.md','DEVELOPERS.md','MEASUREMENT.md','VERIFICATION.md','registry.json','developer-notes.json','semantic-baseline.json','frontend-baseline.json','audit.css','test-results.txt'].map(f=>[root+f,sha(read(root+f))])),sourceSHA256:sourceHashes,runtimeSemanticSHA256:fingerprints,generatedSHA256:Object.fromEntries(Object.entries(out).map(([k,v])=>[k,sha(v)]))};
 put('manifest.json',json(manifest));
 if(write){for(const [f,text]of Object.entries(out)){fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,text);}}
 return {out,manifest,registry,symbols};
}
if(process.argv[1]?.endsWith('/build-audit.mjs')){const {manifest}=await build();console.log(JSON.stringify(manifest.coverage,null,2));}
