'use strict';
// Explicit exploratory priors. Policy selection alone never calls exposure().
(function(root){
  const clamp=(x,l=0,h=1)=>Math.max(l,Math.min(h,x));
  const elements=['attitude','norm','control','corruptControl','risk','knowledge','reportSafety'];
  const labels={attitude:'Evaluation of corrupt conduct',norm:'Perceived reference expectations',control:'Lawful/reporting capability',corruptControl:'Feasibility of improper conduct',risk:'Expected accountability cost',knowledge:'Usable knowledge',reportSafety:'Expected reporting safety'};
  const integrity=['integrity','report','refuse','recruit','implementation','case','retaliation'];
  const map={
    aca:{elements:{risk:.25,control:.15},contexts:integrity,elementContexts:{control:['case','report']},halfLife:10,channel:'Communicated screening/inquiry and actual staff training',structural:'Mandate, inquiry capacity, referrals and shared case work'},
    merit:{elements:{norm:.12,control:.15},contexts:['recruit'],halfLife:12,channel:'Experienced appointment/review procedure',structural:'Actual selection and the competence of appointed staff'},
    rotation:{elements:{norm:.10},contexts:['integrity','case'],halfLife:8,channel:'Actual transfer and new workplace induction',structural:'Changed staff locations and access; existing ties survive'},
    protection:{elements:{control:.25,reportSafety:.35},contexts:['report','refuse'],halfLife:8,channel:'Personally experienced protection or failure',structural:'Timely protection, staff work and actual victim costs'},
    declarations:{elements:{risk:.15},contexts:integrity,halfLife:10,channel:'Personally communicated verification',structural:'Covered personal records used in real scrutiny'},
    conflicts:{elements:{norm:.10,corruptControl:.25},contexts:['integrity','recruit','implementation'],halfLife:10,channel:'Experienced conflict review or blocked exchange',structural:'Records, applicable review and actual prevention'},
    oversight:{elements:{risk:.30},contexts:integrity,halfLife:8,channel:'Communicated audit/inquiry; never hidden audit truth',structural:'Finite scrutiny, evidence quality and corrective work'},
    pay:{elements:{},contexts:[],halfLife:12,channel:'Actual pay receipts inform experienced financial security',structural:'Conserved supplements and actual income/cost valuations; no honesty bonus'},
    penalties:{elements:{risk:.40},contexts:integrity,halfLife:8,channel:'Observed actual liability and collection',structural:'Lawful liability, collectible resources and collection capacity'},
    disclosure:{elements:{},contexts:[],halfLife:8,channel:'Accessed publications enter ordinary credibility-weighted belief learning',structural:'Real record visibility; no generic persuasion bonus'},
    complaints:{elements:{control:.30,knowledge:.20},contexts:['report'],halfLife:8,channel:'Encountered reporting instructions and actual intake',structural:'Channel access, monetary cost and competent recipient'},
    education:{elements:{attitude:.30,norm:.20,control:.25,knowledge:.35},contexts:integrity,halfLife:6,channel:'Delivered teaching/messages with a known source',structural:'Funded setup, staff time, content delivery and coverage'},
    experience:{elements:{risk:.20,reportSafety:.15},contexts:integrity,halfLife:6,channel:'Policy-independent personally accessed experience',structural:'Ordinary accountability and life experience'}
  };
  const bounds={attitude:.45,norm:.45,control:.50,corruptControl:.50,risk:.60,knowledge:.60,reportSafety:.60};
  // A first exposure can use the full per-element range; later new learning is smaller.
  const novelty=.7,noveltyFloor=.05,maintenance=.35;
  function initialize(a,random){
    const base={openness:.2+.6*random('openness'),retention:.2+.6*random('retention'),learning:.2+.6*random('learning')};
    a.psychology={version:1,baseTraits:base,traits:{...base},initialMotives:[...a.motives],initialSkill:a.skill,baseKnowledge:a.knowledge,baseRisk:a.riskBelief,riskPrior:a.riskBelief,accountabilityEvents:[],baseSafety:.2+.6*random('reporting-safety'),expectedIncome:a.income,salience:Array(9).fill(0),memories:{},feedback:0,lastAdvance:0,lastExposure:null};
    return a.psychology;
  }
  function recentParticipation(a){const h=a.meaningful||[];return h.length?h.filter(x=>x.corrupt).length/h.length:0;}
  function receptiveness(a,element,credibility=1){
    const p=a.psychology,publicInterest=a.motives[2]+a.motives[5]+a.motives[8],economicSelf=a.motives[3],honestExpectation=(1-clamp(a.normCorrupt,-1,1))/2;
    const ownHistory=recentParticipation(a),alignment=element==='risk'?clamp(.45+.4*economicSelf+.15*a.knowledge):element==='attitude'||element==='norm'?clamp(.25+.35*publicInterest+.3*honestExpectation-.2*ownHistory):clamp(.35+.35*a.knowledge+.3*(a.experience?.trust??.5));
    // Trust controls uptake; history/traits also control conditional strength.
    const uptake=clamp((.1+.55*p.traits.openness+.2*alignment+.15*p.traits.learning)*clamp(credibility));
    const strength=clamp(.25+.45*p.traits.learning+.3*alignment);
    return {uptake,strength,alignment};
  }
  function feedback(a,signals={},credibility=.5){
    const p=a.psychology,c=clamp(credibility);p.feedback=clamp(p.feedback+.1*(c-p.feedback));
    for(const [index,value]of Object.entries(signals)){const i=Number(index);if(i>=0&&i<9)p.salience[i]=clamp(p.salience[i]+.08*c*(clamp(value)-p.salience[i]));}
  }
  function observe(a,policy,event,month,random,options={}){
    const spec=map[policy];if(!spec)throw Error('Unknown adaptation policy '+policy);
    const p=a.psychology,quality=clamp(options.quality??1),credibility=clamp(options.credibility??.55);
    if(!quality||!credibility||!options.delivered)return {delivered:false,changed:false};
    let memory=p.memories[policy];if(!memory)memory=p.memories[policy]={events:[],components:{}};
    // Deduplicate an event across sources; repetition gets a new explicit episode ID.
    if(memory.events.includes(event))return {delivered:true,duplicate:true,changed:false};
    memory.events.push(event);if(memory.events.length>32)memory.events.shift();
    const trace={policy,event,month,source:options.source??null,quality,credibility,components:{}};let changed=false;
    const requested=options.elements||Object.keys(spec.elements);
    for(const element of requested){const max=spec.elements[element];if(!max)continue;
      let state=memory.components[element];if(!state)state=memory.components[element]={level:0,peak:0,count:0,accepted:0,target:element==='reportSafety'?1:0};
      const receptive=receptiveness(a,element,credibility),cap=max*Math.max(noveltyFloor,Math.pow(novelty,state.count++));
      const accepted=random('uptake',event,a.id,element)<receptive.uptake;
      let gain=0,restoration=0;
      if(accepted){state.accepted++;const intensity=clamp(random('strength',event,a.id,element))*receptive.strength*quality;
        gain=cap*intensity;restoration=maintenance*intensity*Math.max(0,state.peak-state.level);
        const next=Math.min(max,state.level+gain+restoration);changed ||= next>state.level;state.level=next;state.peak=Math.max(state.peak,next);
        if(options.targets&&Number.isFinite(options.targets[element])){const target=clamp(options.targets[element]);state.target=state.accepted===1?target:state.target+maintenance*intensity*(target-state.target);}
      }
      trace.components[element]={accepted,probability:receptive.uptake,strength:receptive.strength,cap,gain,restoration,level:state.level,target:state.target};
    }
    p.lastExposure=trace;refresh(a);if(changed)feedback(a,policy==='education'?{2:.7,5:.5,8:.4}:{3:.5},credibility);
    return {delivered:true,changed,trace};
  }
  function influence(a,context){
    const out=Object.fromEntries(elements.map(k=>[k,0]));let riskTarget=0,riskWeight=0,safetyTarget=0,safetyWeight=0;
    for(const [policy,m]of Object.entries(a.psychology.memories)){const spec=map[policy];if(context&&!spec.contexts.includes(context))continue;
      for(const [element,c]of Object.entries(m.components)){if(context&&spec.elementContexts?.[element]&&!spec.elementContexts[element].includes(context))continue;out[element]+=c.level;if(element==='risk'){riskTarget+=c.level*c.target;riskWeight+=c.level;}if(element==='reportSafety'){safetyTarget+=c.level*c.target;safetyWeight+=c.level;}}
    }
    for(const k of elements)out[k]=Math.min(bounds[k],out[k]);out.riskTarget=riskWeight?riskTarget/riskWeight:a.psychology.baseRisk;out.safetyTarget=safetyWeight?safetyTarget/safetyWeight:.5;return out;
  }
  function refresh(a){
    const p=a.psychology,e=influence(a,'integrity');
    // Reporting-specific channel knowledge is queried separately, not generalized to all conduct.
    a.knowledge=clamp(p.baseKnowledge+e.knowledge*(1-p.baseKnowledge));
    a.riskBelief=clamp(p.baseRisk+e.risk*(e.riskTarget-p.baseRisk));
  }
  function knowledge(a,context){const p=a.psychology,e=influence(a,context);return clamp(p.baseKnowledge+e.knowledge*(1-p.baseKnowledge));}
  function safety(a){const p=a.psychology,e=influence(a,'report');return clamp(p.baseSafety+e.reportSafety*(e.safetyTarget-p.baseSafety));}
  function accountability(a,event,month,signal,personal=false,credibility=1){
    const p=a.psychology,key=(personal?'self:':'public:')+event;
    if(p.accountabilityEvents.includes(key))return false;
    p.accountabilityEvents.push(key);if(p.accountabilityEvents.length>64)p.accountabilityEvents.shift();
    const span=personal?.35:.15,target=clamp(p.riskPrior+span*clamp(signal),.03,.95),rate=(personal?.12+.12*p.traits.learning:.015+.025*p.traits.learning)*clamp(credibility);
    p.baseRisk=clamp(p.baseRisk+rate*(target-p.baseRisk),Math.max(.03,p.riskPrior-.15),Math.min(.95,p.riskPrior+.35));refresh(a);return true;
  }
  function advance(a,month){
    const p=a.psychology;if(month<=p.lastAdvance)return;
    for(let m=p.lastAdvance;m<month;m++){
      p.baseRisk+=.005*(p.riskPrior-p.baseRisk);
      for(const [policy,memory]of Object.entries(p.memories)){const halfLife=map[policy].halfLife*(.5+p.traits.retention);for(const state of Object.values(memory.components))state.level*=Math.exp(-Math.LN2/halfLife);}
      const trust=a.experience?.trust??.5,openness=clamp(p.baseTraits.openness+.12*(2*trust-1)-.08*recentParticipation(a));
      p.traits.openness=clamp(p.traits.openness+.01*(openness-p.traits.openness),Math.max(0,p.baseTraits.openness-.15),Math.min(1,p.baseTraits.openness+.15));
      const learning=clamp(p.baseTraits.learning+.15*p.feedback);p.traits.learning=clamp(p.traits.learning+.005*(learning-p.traits.learning));
      const retention=clamp(p.baseTraits.retention+.1*p.feedback);p.traits.retention=clamp(p.traits.retention+.005*(retention-p.traits.retention));
      const target=p.initialMotives.map((v,i)=>v*Math.exp(.35*p.salience[i])),total=target.reduce((x,y)=>x+y,0);
      a.motives=a.motives.map((v,i)=>v+.002*(target[i]/total-v));const normal=a.motives.reduce((x,y)=>x+y,0);a.motives=a.motives.map(v=>v/normal);
      p.salience=p.salience.map(v=>v*.99);p.feedback*=.98;
    }p.lastAdvance=month;refresh(a);
  }
  function work(a,time){if(time<=0)return;const p=a.psychology;a.skill+=Math.min(Math.max(0,Math.min(1,p.initialSkill+.20)-a.skill),.003*time*Math.max(0,1-a.skill));feedback(a,{3:.25,4:.15},.6);}
  function incomeExperience(a,received){const p=a.psychology,observed=Math.max(0,received);p.expectedIncome+=(.05+.25*p.traits.learning)*(observed-p.expectedIncome);feedback(a,{3:clamp((a.cost-.9*observed)/Math.max(.1,a.cost))},.8);}
  function messageRate(a,credibility){return clamp(credibility)*(.25+.5*a.psychology.traits.openness+.25*a.psychology.traits.learning);}
  function context(name,integrityChoice=false){if(name==='Report observed conduct')return 'report';if(name==='Respond to extortion')return 'refuse';if(name==='Recruitment / promotion')return 'recruit';if(name.startsWith('Implement '))return 'implementation';if(name.startsWith('Case '))return 'case';if(name==='Response to reporting')return 'retaliation';return integrityChoice?'integrity':'other';}
  function decision(a,ctx,option,attitude,norm,control){
    const e=influence(a,ctx),before={attitude,norm,control};
    if(option.corrupt)attitude+=e.attitude*(Math.min(-1,attitude)-attitude);
    if(ctx!=='other'){norm+=e.norm*((option.corrupt?-1:1)-norm);if(option.corrupt)control*=1-e.corruptControl;else if(!['stay silent','pay under coercion','decline / defer','resist'].includes(option.name))control+=e.control*(1-control);}
    return {attitude,norm,control:clamp(control),before,influence:e};
  }
  function summary(a){return {traits:{...a.psychology.traits},expectedIncome:a.psychology.expectedIncome,reportingSafety:safety(a),baseMotives:[...a.psychology.initialMotives],influence:influence(a),lastExposure:a.psychology.lastExposure,exposures:Object.fromEntries(Object.entries(a.psychology.memories).map(([k,m])=>[k,Object.fromEntries(Object.entries(m.components).map(([e,s])=>[e,{level:s.level,peak:s.peak,count:s.count,accepted:s.accepted}]))]))};}
  function valid(a){const p=a.psychology;if(!p||p.version!==1||p.initialMotives?.length!==9||p.salience?.length!==9||!p.initialMotives.every(x=>Number.isFinite(x)&&x>0)||Math.abs(p.initialMotives.reduce((x,y)=>x+y,0)-1)>1e-6||!p.salience.every(x=>Number.isFinite(x)&&x>=0&&x<=1)||!Number.isFinite(p.riskPrior)||p.riskPrior<0||p.riskPrior>1||!Array.isArray(p.accountabilityEvents)||p.accountabilityEvents.length>64||!Number.isFinite(p.baseRisk)||p.baseRisk<0||p.baseRisk>1||!Number.isFinite(p.baseKnowledge)||p.baseKnowledge<0||p.baseKnowledge>1||!Number.isFinite(p.initialSkill)||p.initialSkill<0||p.initialSkill>1||!Number.isInteger(p.lastAdvance)||p.lastAdvance< -12)return false;
    if(!Number.isFinite(p.expectedIncome)||p.expectedIncome<0||!Number.isFinite(p.feedback)||p.feedback<0||p.feedback>1||!Number.isFinite(p.baseSafety)||p.baseSafety<0||p.baseSafety>1)return false;
    for(const t of [p.traits,p.baseTraits])if(!t||!['openness','retention','learning'].every(k=>Number.isFinite(t[k])&&t[k]>=0&&t[k]<=1))return false;
    if(!p.memories||Array.isArray(p.memories))return false;for(const [policy,m]of Object.entries(p.memories)){if(!map[policy]||!Array.isArray(m.events)||m.events.length>32)return false;for(const [e,s]of Object.entries(m.components)){const max=map[policy].elements[e];if(!max||![s.level,s.peak,s.target].every(Number.isFinite)||s.level<0||s.level>s.peak+1e-9||s.peak>max+1e-9||s.target<0||s.target>1||!Number.isInteger(s.count)||!Number.isInteger(s.accepted)||s.accepted<0||s.accepted>s.count)return false;}}
    return true;
  }
  function validSummary(p){
    const unit=x=>Number.isFinite(x)&&x>=0&&x<=1;
    if(!p||!p.traits||!['openness','retention','learning'].every(k=>unit(p.traits[k]))||!Number.isFinite(p.expectedIncome)||p.expectedIncome<0||!unit(p.reportingSafety)||!Array.isArray(p.baseMotives)||p.baseMotives.length!==9||!p.baseMotives.every(unit)||Math.abs(p.baseMotives.reduce((x,y)=>x+y,0)-1)>1e-6||!p.influence||!elements.every(k=>unit(p.influence[k])&&p.influence[k]<=bounds[k]+1e-9)||!p.exposures||Array.isArray(p.exposures))return false;
    for(const [policy,cs]of Object.entries(p.exposures)){if(!Object.hasOwn(map,policy)||!cs||typeof cs!=='object'||Array.isArray(cs))return false;for(const [k,s]of Object.entries(cs)){const maximum=map[policy].elements[k];if(!maximum||!s||!unit(s.level)||!unit(s.peak)||s.level>s.peak+1e-9||s.peak>maximum+1e-9||!Number.isInteger(s.count)||!Number.isInteger(s.accepted)||s.accepted<0||s.accepted>s.count)return false;}}
    const last=p.lastExposure;if(last!==null&&(!last||!Object.hasOwn(map,last.policy)||typeof last.event!=='string'||last.event.length>500||!Number.isInteger(last.month)||last.month< -12||!unit(last.quality)||!unit(last.credibility)))return false;
    return true;
  }
  const api={map,elements,labels,bounds,novelty,noveltyFloor,maintenance,initialize,receptiveness,feedback,observe,influence,refresh,knowledge,safety,accountability,advance,work,incomeExperience,messageRate,context,decision,summary,valid,validSummary};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.AntarkyaAdaptation=api;
})(typeof globalThis!=='undefined'?globalThis:this);
