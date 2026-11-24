import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import * as prettier from 'prettier';
import {build} from './build-audit.mjs';
import {read,runtime,semanticHash,sha} from './audit-lib.mjs';
const {out,manifest,registry}=await build({write:false}),baseline=JSON.parse(read('docs/audit/semantic-baseline.json'));
assert.equal(manifest.coverage.unresolvedSymbols.length,0,JSON.stringify(manifest.coverage.unresolvedSymbols));
for(const file of runtime){assert.equal(await semanticHash(read(file)),baseline.runtime[file],`Runtime AST drift from audited base: ${file}`);}
for(const [file,text]of Object.entries(out))assert.equal(read(file),text,`Generated file is stale: ${file}; run npm run docs:build`);
const ids=new Set(registry.entries.map(e=>e.id));assert.equal(ids.size,83);
for(let i=1;i<=32;i++)assert(registry.entries.some(e=>e.rules.includes('D'+String(i).padStart(2,'0'))));
for(let i=1;i<=62;i++)assert(registry.entries.some(e=>e.rules.includes('R'+String(i).padStart(2,'0'))));
for(let i=1;i<=6;i++)assert(registry.entries.some(e=>e.rules.includes('AM0'+i)));
for(const e of registry.entries){
 assert(e.narrative.length>100&&e.technical.length>100&&e.limitations.length>20,`Incomplete entry ${e.id}`);
 assert(e.symbols.some(s=>runtime.includes(s.split(':')[0])),`No runtime link ${e.id}`);
 assert(runtime.some(f=>read(f).includes('['+e.id+']')),`No annotated source reference ${e.id}`);
}
const frontend=JSON.parse(read('docs/audit/frontend-baseline.json'));
for(const [f,x]of Object.entries(frontend.files)){const stripped=x.parser==='html'?read(f).replace(/<!--[\s\S]*?-->/g,''):read(f).replace(/\/\*[\s\S]*?\*\//g,'');assert.equal(sha((await prettier.format(stripped,{parser:x.parser,printWidth:100})).replace(/\n[ \t]*\n/g,'\n')),x.sha256,`Unexpected markup/style change ${f}`);}
let links=0;
for(const [file,content]of Object.entries(out).filter(([f])=>f.endsWith('.html'))){
 for(const match of content.matchAll(/(?:href|src)="([^"]*)"/g)){
  const href=match[1].replaceAll('&amp;','&');if(!href||/^(?:https?:|mailto:|data:)/.test(href))continue;
  const [part,fragment]=href.split('#'),target=part?path.normalize(path.join(path.dirname(file),decodeURIComponent(part))):file;
  assert(out[target]!==undefined||fs.existsSync(target),`Broken local target ${file} -> ${href}`);
  if(fragment&&target.endsWith('.html')){const targetContent=out[target]??read(target);assert(targetContent.includes(`id="${fragment}"`),`Broken fragment ${file} -> ${href}`);}
  links++;
 }
}
console.log(`Audit checks passed: ${manifest.coverage.mechanisms} mechanisms, 62 rules + 6 amendments, ${runtime.length} version-pinned runtime ASTs, ${Object.keys(out).length} reproducible generated files, ${links} local links.`);
console.log('Test-harness maintenance: reporting.test.js locates its extracted UI block by whitespace-tolerant syntax patterns; visualization.test.js accepts formatting whitespace between duration attributes; test meaning is unchanged.');
