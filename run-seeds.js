'use strict';
// Run identity is separate from initialization and from model event draws.
(function(root){
  let serial=0;
  function newEventSeed(fill=words=>root.crypto.getRandomValues(words)){
    const words=new Uint32Array(4);fill(words);serial++;
    return 'events-'+Array.from(words,n=>n.toString(16).padStart(8,'0')).join('')+'-'+serial.toString(36);
  }
  function prepareRun(config,reuseEventSeed=false,fill){
    return{...config,eventSeed:reuseEventSeed?config.eventSeed:newEventSeed(fill)};
  }
  const api={newEventSeed,prepareRun};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.AntarkyaRunSeeds=api;
})(typeof globalThis!=='undefined'?globalThis:this);
