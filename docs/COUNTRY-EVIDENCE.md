# Antarkya v2 — initial country profiles

Review draft · 22 November 2026 · ten countries · not a calibrated model

These profiles describe an inherited institutional baseline. A selected policy improves that baseline. A documented instrument does not imply universal coverage or effective implementation; an unscoped instrument does not mean it is absent. Users may override estimates before initialization.

## Comparable quantitative descriptors

World Bank 2025 observations, retrieved 22 November 2026. GDP is current international dollars at purchasing-power parity. The three WGI columns use the revised 0–100 governance-score series. They are broad descriptors, **not probabilities** and not percent of agents behaving honestly.

| Country | GDP per capita PPP | Government effectiveness | Rule of law | Regulatory quality* |
|---|---:|---:|---:|---:|
| Nigeria | 9,532 | 33.6 | 43.0 | 44.4 |
| South Africa | 15,906 | 51.9 | 59.3 | 54.3 |
| Indonesia | 17,660 | 57.6 | 54.4 | 57.3 |
| India | 11,748 | 62.6 | 56.5 | 52.6 |
| China | 29,333 | 65.1 | 51.6 | 53.6 |
| Peru | 18,816 | 49.4 | 47.8 | 57.5 |
| Brazil | 23,433 | 51.6 | 50.6 | 47.9 |
| United States | 90,027 | 76.7 | 71.7 | 72.8 |
| Germany | 75,407 | 82.8 | 85.1 | 76.4 |
| Italy | 62,803 | 71.3 | 68.3 | 65.8 |

*Regulatory quality is an incomplete proxy for practical business conditions, not Ease of Doing Business or B-READY. Government effectiveness is not a direct measure of impartiality. GDP per capita is not disposable household income. No automatic behavioral coefficient has been assigned to these values. See [WGI definitions](https://www.worldbank.org/en/publication/worldwide-governance-indicators/frequently-asked-questions). Exact values, units, source URLs and dates are retained in the companion JSON.

Political numeric estimates remain pending: use V-Dem v16 (2026, reporting 2025) or equivalent primary evidence, with separate measures for liberties, representation and electoral integrity. No culture scores, role proportions, organization sizes, budget shares or institutional-success probabilities have been invented. These are explicit open calibration items, not hidden neutral defaults.

## Existing tool baselines

**E** = relevant existing instrument documented; **P** = documented instrument with a specific scope/coverage gap; **?** = not scoped in this pass, not absent. Tags summarize the cited source scope and do not establish countrywide effectiveness. Financial-penalty schedules, current offences, collectibility and routes remain to be scoped separately.

| Country | ACA | Merit | Rotation | Protection | Declarations | COI | Oversight | Pay | Penalties | Disclosure | Complaints | Education |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Nigeria | E | ? | ? | ? | ? | ? | E | ? | ? | ? | E | E |
| South Africa | E | ? | ? | P | ? | ? | E | ? | ? | ? | E | ? |
| Indonesia | E | ? | ? | ? | E | P | E | ? | ? | P | E | E |
| India | E | ? | ? | P | E | E | E | ? | ? | ? | E | ? |
| China | E | ? | ? | E | ? | E | E | ? | ? | E | E | E |
| Peru | E | ? | ? | ? | E | E | E | ? | ? | E | E | ? |
| Brazil | E | ? | ? | ? | E | P | E | ? | ? | E | E | E |
| United States | E | ? | ? | P | E | E | E | ? | ? | E | E | ? |
| Germany | E | ? | ? | E | P | E | E | ? | ? | E | E | E |
| Italy | E | ? | ? | E | ? | P | E | ? | ? | E | E | ? |

## Nigeria

**Simplified architecture.** ICPC: prevention, complaints, corruption investigation and prosecution functions; adjudication remains judicial. EFCC: economic/financial crime investigation and enforcement, with prosecutorial and court interfaces. OAuGF and legislative Public Accounts Committees: external audit and accountability, distinct from criminal adjudication.

**Implementation and legal constraints.** Keep federal/state jurisdictions and overlapping mandates explicit. The 2016 federal whistleblowing policy is an existing baseline; the August 2024 source described draft legal protection, not an enacted later statute. Verify current protection law before coding.

**Evidence and model implications.** 2023 survey: 56% of adults had public-official contact; 27% of that contact group paid a bribe in the preceding year; 8.6% of bribe payers reported to an official institution. These are annual person-level measures, not encounter or case-success probabilities.

**Political procedure constraint.** Federal jurisdictions and electoral/appointment procedures require their own legal mapping; national political-index values remain pending.

Sources: [ICPC: Our Role](https://icpc.gov.ng/our-role/); [OAuGF: About the Office](https://oaugf.ng/26/about-us/about-oaugf); [NBS/UNODC: Corruption in Nigeria, 2023 survey, July 2024 publication](https://www.nigerianstat.gov.ng/elibrary/read/1241532); [Federal Ministry of Information: whistle-blowing framework, 28 August 2024](https://fmino.gov.ng/federal-government-to-strengthen-whistle-blowing-policy-with-legal-framework/).

## South Africa

**Simplified architecture.** Hawks/SAPS investigate; NPA prosecutes, including IDAC within NPA; courts adjudicate. SIU follows proclamation-based investigation and civil recovery with a criminal-referral route. AGSA external audit is a separate accountability route; the national strategy coordinates a distributed system.

**Implementation and legal constraints.** Do not treat civil recovery as a criminal conviction or create a freestanding all-purpose IDAC. The May 2026 source described the new Protected Disclosures Bill as a draft; retain existing-law protections without initializing draft guarantees.

**Evidence and model implications.** AGSA reported 151 of 417 national/provincial auditees with clean 2024–25 audits (36%), covering 12% of expenditure. Audit shortcomings do not by themselves establish corruption.

**Political procedure constraint.** National, provincial and local authority and electoral/accountability procedures must remain distinct.

Sources: [South African Government: administration of justice](https://www.gov.za/about-government/government-system/justice-system/administration-justice); [AGSA: 2024–25 audit findings, 26 March 2026](https://www.agsa.co.za/news/ag-reports-minimal-progress-calls-government-double-efforts-improve-audit-outcomes); [Justice Ministry: draft Protected Disclosures Bill, 21 May 2026](https://www.justice.gov.za/m_statements/2026/20260521-PDbill-deadline.html).

## Indonesia

**Simplified architecture.** KPK combines prevention, coordination and qualifying corruption investigation/prosecution; police and Attorney General retain cases; courts adjudicate. BPK audits state finances. PANRB and Information Commission cover administrative integrity and information functions.

**Implementation and legal constraints.** KPK jurisdiction is conditional; improvements must respect coverage and interagency handoffs. The strategic plan identifies implementation commitment and planning/budget-cycle misalignment. OECD records gaps between rules and demonstrated practice.

**Evidence and model implications.** Existing wealth/gratification reporting, education and monitoring mean reforms strengthen a baseline. OECD criteria scores must not be turned into enforcement probabilities.

**Political procedure constraint.** Presidential system. Do not copy the OECD contextual-table label “Parliamentary”; detailed electoral calendar/authority mapping remains pending.

Sources: [KPK Regulation 2/2025: Strategic Plan 2025–2029](https://cms.kpk.go.id/storage/8707/33.-Peraturan-KPK-Nomor-2-Tahun-2025-tentang-Renstra-KPK-Tahun-2025-2029.pdf); [BPK: Strategic Plan 2025–2029](https://www.bpk.go.id/en/about-bpk/strategic-plan-2/); [OECD Anti-Corruption and Integrity Outlook 2026: Indonesia](https://www.oecd.org/en/publications/2026/03/anti-corruption-and-integrity-outlook-2026-country-notes_b1df9263/indonesia_f62cee7b.html).

## India

**Simplified architecture.** CVC/CVO central vigilance, CBI covered criminal investigations and Lokpal inquiry/referral functions; special judges/courts adjudicate. State Lokayuktas and anti-corruption police have separate jurisdictions; CAG provides external audit.

**Implementation and legal constraints.** March 2026 parliamentary findings distinguish Lokpal’s formally constituted prosecution wing from operational reliance on CBI and incomplete staffing. Model queues and handoffs. The December 2025 government answer said the 2014 Whistle Blowers Protection Act had not commenced; PIDPI/CVC channels existed. Later commencement must be checked.

**Evidence and model implications.** Central conduct rules already regulate gifts, private business and property transactions; do not extend this scope automatically to all states, politicians or private workers.

**Political procedure constraint.** Federal Union/state institutions and personnel systems; country-specific electoral/appointment mapping still required.

Sources: [Rajya Sabha committee findings, 16 March 2026](https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2240722&lang=2&reg=48); [Personnel Ministry: Whistle Blowers Protection Act answer, 11 December 2025](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2202426&lang=2&reg=48); [ISTM: central civil-service conduct rules, explanatory page](https://www.istm.gov.in/home/css_conduct_rules); [CAG: Regulations on Audit and Accounts](https://cag.gov.in/en/page-audit-regulations).

## China

**Simplified architecture.** CPC-led national/local supervision commissions investigate duty violations/crimes and impose applicable administrative discipline. Procuratorates review/prosecute criminal transfers; courts adjudicate. NAO/local audit bodies follow the constitutional executive audit structure.

**Implementation and legal constraints.** Use the revised Supervision Law effective 1 June 2025; supervisory powers do not collapse prosecution and adjudication. Open Government Information rules provide disclosure with exceptions. Internal personnel/asset reporting is not equivalent to a public assets register.

**Evidence and model implications.** Formal reporting, confidentiality, recusal and anti-retaliation provisions are a baseline, not measured zero-retaliation guarantees. Statutory powers do not measure practical political autonomy.

**Political procedure constraint.** CPC-led personnel and supervisory accountability; do not impose competitive national multiparty elections.

Sources: [Supervision Law, amended December 2024; effective June 2025](https://www.samr.gov.cn/jjz/djfg/gjflfg/art/2025/art_83564c26301f43b48798e75f82d640e4.html); [NAO: legal status, 16 July 2015](https://www.audit.gov.cn/en/n744/c68249/content.html); [Government Information Regulations, 2019 revision](https://www.mee.gov.cn/zcwj/gwywj/202001/t20200108_758139.shtml).

## Peru

**Simplified architecture.** SIP within PCM coordinates prevention; CAN coordinates policy; distributed Integrity Offices implement internal arrangements. Ministerio Público specialized corruption prosecutors and criminal courts handle criminal cases. State Procuradurías are a distinct representation function. CGR/National Control System: audit and applicable administrative accountability; ONPE: political finance.

**Implementation and legal constraints.** OECD records uneven municipal integrity capacity, turnover and coordination gaps. National rules do not imply uniform local delivery. Lobbying definitions exist, but OECD reports no dedicated oversight authority/public registry after amendments. Do not infer absence of all regulation.

**Evidence and model implications.** Reforms improve the existing Integrity Model, interests declarations and transparency framework; targets for future municipal coverage are not achieved counts.

**Political procedure constraint.** National and subnational political/administrative accountability are separate; exact calendars and authority still require scoping.

Sources: [OECD Anti-Corruption and Integrity Outlook 2026: Peru (24 March 2026; mostly 2025/latest observations)](https://www.oecd.org/en/publications/anti-corruption-and-integrity-outlook-2026_0c8910f8-en/peru_ed06008b-en.html); [OECD Economic Surveys: Peru 2025, institutional capacity discussion](https://www.oecd.org/en/publications/oecd-economic-surveys-peru-2025_76f6eb73-en/full-report/achieving-strong-growth-and-safeguarding-fiscal-sustainability_000545c6.html).

## Brazil

**Simplified architecture.** CGU: federal executive integrity, internal control, discipline and ombudsman systems. Police and federal/state prosecutors feed competent courts; TCU supports congressional external control of federal resources.

**Implementation and legal constraints.** Do not turn CGU or TCU into a single criminal investigator/prosecutor/court. OECD identifies incomplete strategic outcome baselines, risk analysis and evidence of conflict-of-interest follow-up. Missing evidence is not zero real compliance.

**Evidence and model implications.** The 2025–27 integrity plan, conflict/financial declaration arrangements, access-information law and reporting systems already exist. Improvements target coverage, verification and follow-through.

**Political procedure constraint.** Federal, state and local jurisdictions and political-finance channels coexist; preserve jurisdiction tags.

Sources: [OECD Anti-Corruption and Integrity Outlook 2026: Brazil (24 March 2026; mostly 2025/latest observations)](https://www.oecd.org/en/publications/anti-corruption-and-integrity-outlook-2026_0c8910f8-en/brazil_237acf05-en.html); [CGU: institutional mandate](https://www.gov.br/cgu/pt-br/acesso-a-informacao/institucional/institucional); [TCU: purpose, functions and strategy](https://portal.tcu.gov.br/english/purpose-functions-and-strategy).

## United States

**Simplified architecture.** OGE/agency ethics offices: executive ethics; agency inspectors general: audit/investigation/referral. FBI/competent investigators and DOJ/U.S. Attorneys feed courts; GAO provides federal external audit. OSC wrongdoing-disclosure and retaliation/personnel-practice functions are distinct; state/local systems coexist.

**Implementation and legal constraints.** No single all-purpose national ACA. Federal jurisdiction over state/local misconduct requires a legal basis. Federal disclosure, reporting and merit rules do not establish identical coverage for every private worker, contractor or intelligence role. Detailed 2026 changes require targeted checks.

**Evidence and model implications.** OECD documents strategy cost/monitoring and integrity-data gaps; these do not imply no institutions or zero integrity.

**Political procedure constraint.** Federal/state/local elections, appointments and agency authority require separate procedures; no universal national control chain.

Sources: [OECD Anti-Corruption and Integrity Outlook 2026: United States (24 March 2026; mostly 2025/latest observations)](https://www.oecd.org/en/publications/anti-corruption-and-integrity-outlook-2026_0c8910f8-en/united-states_1d9a74d5-en.html); [DOJ: Public Integrity Section](https://www.justice.gov/criminal/criminal-pin); [OSC: disclosure of wrongdoing](https://www.osc.gov/services/disclosure-of-wrongdoing/overview/); [Oversight.gov: inspectors general](https://www.oversight.gov/about/inspectors-general).

## Germany

**Simplified architecture.** Federal administrative prevention and decentralized conflict oversight; Länder police/prosecutors handle most corruption cases; courts adjudicate. BKA coordinates information. Federal and Länder audit bodies provide separate financial oversight.

**Implementation and legal constraints.** A federal prevention directive, multiple-eyes controls, risk assessment, conduct rules and protected reporting channels are existing safeguards. OECD strategic-framework/data gaps and lack of uniform asset declarations are not evidence of no integrity protection. Detailed state procedures remain to be mapped.

**Evidence and model implications.** Use risk-based safeguards and scope-sensitive disclosure; a reform need not copy an all-purpose ACA or uniform public asset-register model.

**Political procedure constraint.** Federal/Länder jurisdictions and administrative appointments; retain decentralized authority rather than inventing a national corruption prosecutor.

Sources: [OECD Anti-Corruption and Integrity Outlook 2026: Germany (24 March 2026; mostly 2025/latest observations)](https://www.oecd.org/en/publications/anti-corruption-and-integrity-outlook-2026_0c8910f8-en/germany_d57a73fc-en.html); [Federal Government: corruption prevention, 23 January 2025](https://www.bundesregierung.de/breg-de/bundesregierung/bundespresseamt/korruptionspraevention-1899272); [Bundesrechnungshof: about us](https://bundesrechnungshof.de/en/about-us).

## Italy

**Simplified architecture.** ANAC: prevention, transparency and procurement oversight, alongside administration-level integrity managers. Guardia di Finanza and ordinary prosecutors feed criminal courts. Corte dei conti audit/accounting liability follows a separate route.

**Implementation and legal constraints.** Protected reporting under Legislative Decree 24/2023 is an existing baseline with conditions for external escalation. The EC July 2026 chapter reports repeal/narrowing of relevant offences and January 2026 accounting-liability changes under challenge. Verify current law before assigning exact sanctions.

**Evidence and model implications.** OECD reports missing strategic outcome baselines/cost projections. Political conflict/lobbying coverage and practical justice capacity need separate treatment from formal adoption.

**Political procedure constraint.** National, regional and municipal implementation; judicial and accounting-liability routes must remain distinct.

Sources: [OECD Anti-Corruption and Integrity Outlook 2026: Italy (24 March 2026; mostly 2025/latest observations)](https://www.oecd.org/en/publications/anti-corruption-and-integrity-outlook-2026_0c8910f8-en/italy_78ff2b97-en.html); [Guardia di Finanza: cooperation with the Court of Auditors](https://www.gdf.gov.it/en/institutional-tasks/the-fight-against-any-misuse-of-public-money-and-illegality-within-the-public-administration/cooperation-with-the-court-of-auditors); [INAPP: protected reporting under Legislative Decree 24/2023](https://www.inapp.gov.it/amministrazione-trasparente/altri-contenuti/prevenzione-della-corruzione/segnalazioni-condotte-illecite-cd-whistleblowing/); [European Commission: Italy rule-of-law chapter, 17 July 2026](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52026SC0912).

## What is needed before calibration

1. No production country ranking or effect claims from this profile set.
2. Obtain and date political and culture measures; keep correlated indices from causing duplicate effects.
3. Calibrate the four-role representation and organizations; minimum representation implies a stylized sample, not a census.
4. Map 120 country/tool packages for scope, baseline, reform delta, legal route, requirement costs, authorized allocators and allocation shares.
5. Verify changing legislation before implementing penalties, protection or officeholder replacement.
6. Estimate behavioral, encounter and information parameters using separate evidence and sensitivity analysis.

Each numeric parameter must carry a status: sourced observation, estimated mapping, or scenario assumption. Source year and retrieval date remain separate. The prototype interface uses a fixed synthetic society and illustrative trajectories; it does not turn these incomplete profiles into validated country predictions.

## Data provenance

World Bank API metadata report last update 11 November 2026. Raw downloaded observations are preserved in the review bundle. Indicators: `NY.GDP.PCAP.PP.CD`, `GOV_WGI_GE_SC`, `GOV_WGI_RL_SC`, `GOV_WGI_RQ_SC`, observation year 2025. The old `*.EST` series are not used. The JSON stores the full numeric precision.

Source-defined sample denominators, dates and jurisdictions must be preserved. OECD institutional-criteria fulfillment is not agent behavior; audit irregularities are not convictions. Old legal sources support only their dated claims. The bounded architecture survey is not a consolidated national legal inventory.



## 23 November 2026 starting-state update

The original bounded institutional review and its missing values are retained as provenance. The executable v2.3 overlay in `baseline.js` now adds sourced Freedom House political proxies and narrow OECD instrument observations, with explicit estimated numerical mappings. [INITIALIZATION.md](INITIALIZATION.md) provides the input table, source dates, equations and remaining calibration gaps. Cultural measures remain unmeasured. A pre-policy reconstruction supplies coherent behavioral history; it is not empirical validation.
