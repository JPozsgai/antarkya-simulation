import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import * as prettier from 'prettier';
export const runtime=['model.js','adaptation.js','reporting.js','config.js','baseline.js','profiles.js','run-seeds.js','visualization.js','worker.js','app.js','hybrid.js','system-view.js'];
export const testFiles=()=>fs.readdirSync('.').filter(f=>f.endsWith('.test.js')).sort();
export const sha=x=>crypto.createHash('sha256').update(x).digest('hex');
export const read=f=>fs.readFileSync(f,'utf8');
export const parse=async src=>(await prettier.__debug.parse(src,{parser:'babel'})).ast;
const ignored=new Set(['loc','start','end','range','extra','tokens','comments','leadingComments','trailingComments','innerComments','errors']);
export function canonical(x){
 if(Array.isArray(x))return x.map(canonical);
 if(!x||typeof x!=='object')return x;
 const out={};for(const [k,v]of Object.entries(x))if(!ignored.has(k))out[k]=canonical(v);
 // Static property spelling (quoted/unquoted) is formatting, not a key change.
 if(['ObjectProperty','ObjectMethod','ClassMethod'].includes(x.type)&&!x.computed&&['Identifier','StringLiteral','NumericLiteral'].includes(x.key?.type))out.key={type:'StaticPropertyKey',name:String(x.key.name??x.key.value)};
 return out;
}
export const semanticHash=async src=>sha(JSON.stringify(canonical(await parse(src))));
export function walk(node,fn,ancestors=[]){if(!node||typeof node!=='object')return;fn(node,ancestors);for(const [key,value]of Object.entries(node))if(!ignored.has(key)){if(Array.isArray(value))for(const child of value)walk(child,fn,[...ancestors,node]);else if(value&&typeof value==='object')walk(value,fn,[...ancestors,node]);}}
export function nameOf(n){if(n.type==='FunctionDeclaration')return n.id?.name;if(n.type==='ClassMethod')return(n.kind==='get'?'get ':'')+(n.key.name??n.key.value);if(n.type==='VariableDeclarator'&&['ArrowFunctionExpression','FunctionExpression'].includes(n.init?.type))return n.id?.name;return null;}
export function refsFor(file,symbol,registry,outer=[]){const exact=registry.entries.filter(e=>e.symbols.includes(file+':'+symbol)).map(e=>e.id);if(exact.length)return exact;if(outer.length)return outer;
 const defaults={'model.js':['AK-OV-01','AK-VAL-01'],'adaptation.js':['AK-ADP-01','AK-ADP-02'],'reporting.js':['AK-MEA-03','AK-MEA-04'],'config.js':['AK-COU-02','AK-REF-02'],'baseline.js':['AK-COU-01'],'profiles.js':['AK-COU-01'],'run-seeds.js':['AK-RNG-01'],'visualization.js':['AK-VIS-01','AK-MEA-02'],'worker.js':['AK-OPS-01'],'app.js':['AK-VIS-03','AK-IO-01']};return defaults[file]||['AK-VAL-01'];}
export function units(ast,file,registry){const result=[];
 walk(ast,(n,anc)=>{const name=nameOf(n);if(name){const parent=[...anc].reverse().map(a=>nameOf(a)).find(Boolean),parentRefs=parent?refsFor(file,parent,registry):[];result.push({name,node:n,start:n.start,end:n.end,line:n.loc.start.line,endLine:n.loc.end.line,refs:refsFor(file,name,registry,parentRefs),parent:parent||null});}
 if(n.type==='CallExpression'&&n.callee?.name==='test'&&n.arguments[0]?.type==='StringLiteral')result.push({name:'test: '+n.arguments[0].value,node:n,start:n.start,end:n.end,line:n.loc.start.line,endLine:n.loc.end.line,refs:['AK-VAL-01'],test:true});
 });return result.sort((a,b)=>a.start-b.start||b.end-a.end);
}
export function enclosing(units,pos){return units.filter(u=>u.start<=pos&&u.end>=pos).sort((a,b)=>(a.end-a.start)-(b.end-b.start))[0];}
export const anchor=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
export const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const cell=s=>String(s??'—').replace(/\|/g,'&#124;').replace(/\n/g,' ');
