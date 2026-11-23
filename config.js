'use strict';
(function(root){
  const countries={
    NGA:{counts:[635,210,130,25],cycle:48,firstReview:24,mode:'presidential',central:.70,nodes:[['ICPC','prevention'],['EFCC','investigation'],['Federal audit','audit'],['Justice and courts','decision'],['Code of conduct function','integrity'],['Budget authority','budget']]},
    ZAF:{counts:[610,220,145,25],cycle:60,firstReview:36,mode:'parliamentary',central:.55,nodes:[['National integrity coordination','prevention'],['Hawks / SAPS','investigation'],['NPA / IDAC','prosecution'],['AGSA','audit'],['SIU civil route','civil'],['Courts','decision'],['Budget authority','budget']]},
    IDN:{counts:[625,220,130,25],cycle:60,firstReview:36,mode:'presidential',central:.65,nodes:[['KPK','prevention'],['Police / prosecutors','investigation'],['BPK','audit'],['Administrative integrity','integrity'],['Courts','decision'],['Budget authority','budget']]},
    IND:{counts:[650,205,120,25],cycle:60,firstReview:36,mode:'parliamentary',central:.50,nodes:[['CVC / departmental vigilance','prevention'],['CBI / state investigation','investigation'],['Lokpal referral function','integrity'],['CAG','audit'],['Special judges','decision'],['Budget authority','budget']]},
    CHN:{counts:[590,235,150,25],cycle:60,firstReview:36,mode:'appointment',central:.80,nodes:[['Supervision commissions','prevention'],['Duty-crime investigation','investigation'],['Procuratorates','prosecution'],['NAO / local audit','audit'],['Courts','decision'],['Personnel authorities','integrity'],['Budget authority','budget']]},
    PER:{counts:[630,210,135,25],cycle:60,firstReview:12,mode:'presidential',central:.60,nodes:[['SIP / integrity offices','prevention'],['Specialized prosecutors','investigation'],['CGR control system','audit'],['Judiciary','decision'],['Political-finance oversight','integrity'],['Budget authority','budget']]},
    BRA:{counts:[600,230,145,25],cycle:48,firstReview:12,mode:'presidential',central:.55,nodes:[['CGU / integrity offices','prevention'],['Police / prosecutors','investigation'],['TCU / public audit','audit'],['Courts','decision'],['Ombudsman system','integrity'],['Budget authority','budget']]},
    USA:{counts:[570,270,135,25],cycle:48,firstReview:24,mode:'presidential',central:.45,nodes:[['OGE / agency ethics','prevention'],['Agency inspectors general','audit'],['DOJ / investigators','investigation'],['Federal / state courts','decision'],['OSC / personnel channels','integrity'],['GAO external audit','audit'],['Budget authority','budget']]},
    DEU:{counts:[575,255,145,25],cycle:48,firstReview:36,mode:'parliamentary',central:.40,nodes:[['Federal / Land prevention','prevention'],['Land police / prosecutors','investigation'],['Federal / Land audit','audit'],['Courts','decision'],['Reporting / personnel channels','integrity'],['Budget authority','budget']]},
    ITA:{counts:[590,245,140,25],cycle:60,firstReview:24,mode:'parliamentary',central:.60,nodes:[['ANAC / integrity managers','prevention'],['Financial police / prosecutors','investigation'],['Corte dei conti','audit'],['Ordinary courts','decision'],['Internal reporting channels','integrity'],['Budget authority','budget']]}
  };
  const costs={
    aca:[.12,.025,.035],merit:[.05,.020,.025],rotation:[.04,.015,.025],protection:[.08,.025,.030],
    declarations:[.09,.025,.030],conflicts:[.06,.018,.025],oversight:[.10,.030,.040],pay:[.015,.22,.010],
    penalties:[.06,.015,.020],disclosure:[.08,.020,.025],complaints:[.07,.022,.030],education:[.04,.015,.025]
  };
  // These values are visible scenario assumptions, not empirical country scores.
  const assumptions={roleComposition:'Provisional scaled representation; not national population percentages.',
    centralAllocation:'Estimated central-versus-local allocation pattern, not measured budget shares.',
    calendar:'Simplified relative electoral/appointment cycle; phase is a scenario assumption, not a forecast calendar.',
    culture:'Unknown national cultural measures use a common neutral scenario prior of 50; editable.',
    politics:'Freedom House CL (2026), electoral process and political participation (2025) rescaled as distinct dated proxies, not action probabilities.',
    costs:'Normalized engineering assumptions for setup/recurring RU and staff-time requirements.',
    mappings:'WGI, GDP and narrow OECD instrument observations inform bounded capacity/resource estimates; they are not corruption probabilities or comprehensive national effectiveness scores.'};
  const api={countries,costs,assumptions};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.AntarkyaConfig=api;
})(typeof globalThis!=='undefined'?globalThis:this);

