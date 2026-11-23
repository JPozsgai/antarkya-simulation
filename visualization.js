'use strict';
// Pure readouts: these functions never change a simulation or consume its event stream.
(function(root){
 const directions=[-3*Math.PI/4,-Math.PI/4,Math.PI/4,3*Math.PI/4];
 const hash=s=>{let n=2166136261;for(const c of String(s))n=Math.imul(n^c.charCodeAt(0),16777619);return(n>>>0)/4294967296;};
 function projection(view){
   const neighbors=new Map();for(const l of view.links){if(l.strength<=.05)continue;for(const [id,other,trust]of [[l.a,l.b,l.trustAB],[l.b,l.a,l.trustBA]]){if(!neighbors.has(id))neighbors.set(id,[]);neighbors.get(id).push({other,weight:l.strength*(trust??0)});}}
   const raw=view.agents.map(a=>{const affinity=a.affinityByRole||[.5,.5,.5,.5];let x=.12*Math.cos(directions[a.role]),y=.12*Math.sin(directions[a.role]);for(let r=0;r<4;r++){const w=2*(affinity[r]-.5);x+=w*Math.cos(directions[r]);y+=w*Math.sin(directions[r]);}return{x,y};});
   let angles=raw.map((p,i)=>Math.hypot(p.x,p.y)<.001?directions[view.agents[i].role]:Math.atan2(p.y,p.x));
   for(let pass=0;pass<2;pass++)angles=raw.map((p,id)=>{const peers=neighbors.get(id)||[],mass=peers.reduce((n,l)=>n+l.weight,0);let x=p.x,y=p.y;for(const l of peers){x+=.25*l.weight*Math.cos(angles[l.other])/Math.max(1,mass);y+=.25*l.weight*Math.sin(angles[l.other])/Math.max(1,mass);}return Math.atan2(y,x)+(hash(id+'-angle')-.5)*.2;});
   return view.agents.map((a,id)=>{const rate=a.recentOpportunities?a.recentCorrupt/a.recentOpportunities:0,radius=rate>0?.3+.65*rate:.04+.23*Math.sqrt(hash(a.id+'-core')),angle=angles[id];return{id:a.id,x:radius*Math.cos(angle),y:radius*Math.sin(angle),radius,angle,rate};});
 }
 function importantEvents(events,filter='major'){return events.filter(e=>filter==='major'?e.salient||e.kind==='macro'||e.kind==='politics':filter==='all'||e.kind===filter);}
 const api={directions,projection,importantEvents};
 if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.AntarkyaVisualization=api;
})(typeof globalThis!=='undefined'?globalThis:this);
