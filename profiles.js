/* AUDIT FILE — profiles.js
 * References: AK-COU-01, AK-VAL-02
 * See docs/audit/TECHNICAL.md and the line-linked full source in docs/audit/source/.
 * Documentation-only revision: execution is checked against the pinned pre-annotation AST.
 */

'use strict';
(function (root) {
  const data = {
    schema: 'antarkya.country-review.v0.1',
    research_cutoff: '2026-11-22',
    population: 1000,
    production_ready: false,
    interpretation:
      'Initial evidence profiles. Sourced descriptors, institutional facts and model assumptions are distinct. Null means not established, never zero. No probability of corruption or reform effect is inferred from a country indicator.',
    domains: {
      economic: 'GDP per capita PPP; household distribution requires separate evidence',
      business:
        'WGI regulatory quality is an incomplete temporary proxy; direct business operating constraints still needed',
      political:
        'civil liberties, representation and electoral integrity need source-backed numeric estimates',
      legal_administrative:
        'WGI rule of law and government effectiveness are broad descriptors, not literal impartiality or success probabilities',
      culture:
        'kinship, informality and public/private distinction are unquantified pending suitable evidence',
    },
    policies: [
      {
        id: 'aca',
        family: 'Organizational',
        label: 'Anti-corruption body',
        outcome: 'Effective exercise of mandate',
        indicator:
          'Share of mandate-defined matters operationally addressable, including influential opposition.',
      },
      {
        id: 'merit',
        family: 'Organizational',
        label: 'Recruitment and promotion',
        outcome: 'Merit-based staffing',
        indicator:
          'Share of covered appointments meeting published criteria without connections overriding them.',
      },
      {
        id: 'rotation',
        family: 'Organizational',
        label: 'Staff rotation',
        outcome: 'Closed-network continuity',
        indicator:
          'Share of high-risk functions still controlled by the same informal network after personnel changes; lower is better.',
      },
      {
        id: 'protection',
        family: 'Organizational',
        label: 'Protect reporting persons',
        outcome: 'Effective protection',
        indicator: 'Share of comparable credible threats without unremedied retaliation.',
      },
      {
        id: 'declarations',
        family: 'Authoritative',
        label: 'Asset, liability and gift declarations',
        outcome: 'Financial verifiability',
        indicator:
          'Share of covered financial positions independently checkable with adequate reliable information.',
      },
      {
        id: 'conflicts',
        family: 'Authoritative',
        label: 'Conflict-of-interest disclosure',
        outcome: 'Actionable conflicts',
        indicator:
          'Share of material conflicts identifiable and subject to applicable review or management.',
      },
      {
        id: 'oversight',
        family: 'Authoritative',
        label: 'Audits and investigations',
        outcome: 'Effective scrutiny and correction',
        indicator:
          'Share of covered irregular decisions detectable by competent review with an appropriate correction.',
      },
      {
        id: 'pay',
        family: 'Financial',
        label: 'Remuneration and incentives',
        outcome: 'Security of lawful remuneration',
        indicator:
          'Share of targeted staff receiving reliable lawful pay sufficient for ordinary recurring costs.',
      },
      {
        id: 'penalties',
        family: 'Financial',
        label: 'Financial penalties',
        outcome: 'Credible financial liability',
        indicator:
          'Expected appropriately imposed and collected amount for a specified violation, in resource units.',
      },
      {
        id: 'disclosure',
        family: 'Information',
        label: 'Proactive public disclosure',
        outcome: 'Practical transparency',
        indicator:
          'Share of relevant decisions outsiders can scrutinize using timely, accessible, adequate information.',
      },
      {
        id: 'complaints',
        family: 'Information',
        label: 'Reporting and complaints',
        outcome: 'Access to accountability',
        indicator:
          'Share of intended users able to lodge a viable complaint with a competent recipient within cost and time limits.',
      },
      {
        id: 'education',
        family: 'Information',
        label: 'Awareness and education',
        outcome: 'Usable knowledge',
        indicator:
          'Share of fixed role-specific diagnostic situations with the correct obligation and response/channel identified.',
      },
    ],
    profiles: [
      {
        iso3: 'NGA',
        name: 'Nigeria',
        readiness: 'initial evidence profile; not calibrated for simulation',
        indicators: {
          gdp_per_capita_ppp: {
            value: 9531.61073275049,
            year: 2025,
            unit: 'current international dollars; not household income',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/NGA/indicator/NY.GDP.PCAP.PP.CD?format=json&date=2025',
            retrieved: '2026-11-22',
          },
          government_effectiveness: {
            value: 33.6477279,
            year: 2025,
            unit: 'governance score, 0–100; broad descriptor',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/NGA/indicator/GOV_WGI_GE_SC?format=json&date=2025',
            retrieved: '2026-11-22',
          },
          rule_of_law: {
            value: 42.9536547,
            year: 2025,
            unit: 'governance score, 0–100; not a case-success probability',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/NGA/indicator/GOV_WGI_RL_SC?format=json&date=2025',
            retrieved: '2026-11-22',
          },
          regulatory_quality_proxy: {
            value: 44.3833952,
            year: 2025,
            unit: 'governance score, 0–100; incomplete proxy for business conditions',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/NGA/indicator/GOV_WGI_RQ_SC?format=json&date=2025',
            retrieved: '2026-11-22',
          },
        },
        political: {
          numeric_values: null,
          status: 'needs_evidence',
          institutional_constraint:
            'Federal jurisdictions and electoral/appointment procedures require their own legal mapping; national political-index values remain pending.',
          proposed_source: 'vdem',
        },
        culture: {
          kinship: null,
          informality: null,
          public_private_separation: null,
          status: 'needs_evidence; no national cultural scores invented',
        },
        architecture: [
          'ICPC: prevention, complaints, corruption investigation and prosecution functions; adjudication remains judicial.',
          'EFCC: economic/financial crime investigation and enforcement, with prosecutorial and court interfaces.',
          'OAuGF and legislative Public Accounts Committees: external audit and accountability, distinct from criminal adjudication.',
        ],
        implementation_constraints: [
          'Keep federal/state jurisdictions and overlapping mandates explicit.',
          'The 2016 federal whistleblowing policy is an existing baseline; the August 2024 source described draft legal protection, not an enacted later statute. Verify current protection law before coding.',
        ],
        evidence_notes: [
          '2023 survey: 56% of adults had public-official contact; 27% of that contact group paid a bribe in the preceding year; 8.6% of bribe payers reported to an official institution. These are annual person-level measures, not encounter or case-success probabilities.',
        ],
        tool_baseline: {
          aca: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          merit: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          rotation: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          protection: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          declarations: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          conflicts: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          oversight: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          pay: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          penalties: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          disclosure: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          complaints: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          education: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
        },
        sources: ['icpc', 'ng-audit', 'ng-survey', 'ng-reporting'],
        pending: {
          role_counts: null,
          organization_counts_and_sizes: null,
          membership_and_support_distributions: null,
          resource_allocation_shares: null,
          country_tool_costs: null,
          procedure_calendar: null,
        },
      },
      {
        iso3: 'ZAF',
        name: 'South Africa',
        readiness: 'initial evidence profile; not calibrated for simulation',
        indicators: {
          gdp_per_capita_ppp: {
            value: 15905.6794419658,
            year: 2025,
            unit: 'current international dollars; not household income',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/ZAF/indicator/NY.GDP.PCAP.PP.CD?format=json&date=2025',
            retrieved: '2026-11-22',
          },
          government_effectiveness: {
            value: 51.872237,
            year: 2025,
            unit: 'governance score, 0–100; broad descriptor',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/ZAF/indicator/GOV_WGI_GE_SC?format=json&date=2025',
            retrieved: '2026-11-22',
          },
          rule_of_law: {
            value: 59.3034187,
            year: 2025,
            unit: 'governance score, 0–100; not a case-success probability',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/ZAF/indicator/GOV_WGI_RL_SC?format=json&date=2025',
            retrieved: '2026-11-22',
          },
          regulatory_quality_proxy: {
            value: 54.3217993,
            year: 2025,
            unit: 'governance score, 0–100; incomplete proxy for business conditions',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/ZAF/indicator/GOV_WGI_RQ_SC?format=json&date=2025',
            retrieved: '2026-11-22',
          },
        },
        political: {
          numeric_values: null,
          status: 'needs_evidence',
          institutional_constraint:
            'National, provincial and local authority and electoral/accountability procedures must remain distinct.',
          proposed_source: 'vdem',
        },
        culture: {
          kinship: null,
          informality: null,
          public_private_separation: null,
          status: 'needs_evidence; no national cultural scores invented',
        },
        architecture: [
          'Hawks/SAPS investigate; NPA prosecutes, including IDAC within NPA; courts adjudicate.',
          'SIU follows proclamation-based investigation and civil recovery with a criminal-referral route.',
          'AGSA external audit is a separate accountability route; the national strategy coordinates a distributed system.',
        ],
        implementation_constraints: [
          'Do not treat civil recovery as a criminal conviction or create a freestanding all-purpose IDAC.',
          'The May 2026 source described the new Protected Disclosures Bill as a draft; retain existing-law protections without initializing draft guarantees.',
        ],
        evidence_notes: [
          'AGSA reported 151 of 417 national/provincial auditees with clean 2024–25 audits (36%), covering 12% of expenditure. Audit shortcomings do not by themselves establish corruption.',
        ],
        tool_baseline: {
          aca: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          merit: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          rotation: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          protection: {
            status: 'existing_with_documented_scope_gap',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          declarations: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          conflicts: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          oversight: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          pay: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          penalties: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          disclosure: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          complaints: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          education: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
        },
        sources: ['sa-system', 'sa-audit', 'sa-draft'],
        pending: {
          role_counts: null,
          organization_counts_and_sizes: null,
          membership_and_support_distributions: null,
          resource_allocation_shares: null,
          country_tool_costs: null,
          procedure_calendar: null,
        },
      },
      {
        iso3: 'IDN',
        name: 'Indonesia',
        readiness: 'initial evidence profile; not calibrated for simulation',
        indicators: {
          gdp_per_capita_ppp: {
            value: 17659.7921291587,
            year: 2025,
            unit: 'current international dollars; not household income',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/IDN/indicator/NY.GDP.PCAP.PP.CD?format=json&date=2025',
            retrieved: '2026-11-22',
          },
          government_effectiveness: {
            value: 57.5639886,
            year: 2025,
            unit: 'governance score, 0–100; broad descriptor',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/IDN/indicator/GOV_WGI_GE_SC?format=json&date=2025',
            retrieved: '2026-11-22',
          },
          rule_of_law: {
            value: 54.4365507,
            year: 2025,
            unit: 'governance score, 0–100; not a case-success probability',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/IDN/indicator/GOV_WGI_RL_SC?format=json&date=2025',
            retrieved: '2026-11-22',
          },
          regulatory_quality_proxy: {
            value: 57.3259714,
            year: 2025,
            unit: 'governance score, 0–100; incomplete proxy for business conditions',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/IDN/indicator/GOV_WGI_RQ_SC?format=json&date=2025',
            retrieved: '2026-11-22',
          },
        },
        political: {
          numeric_values: null,
          status: 'needs_evidence',
          institutional_constraint:
            'Presidential system. Do not copy the OECD contextual-table label “Parliamentary”; detailed electoral calendar/authority mapping remains pending.',
          proposed_source: 'vdem',
        },
        culture: {
          kinship: null,
          informality: null,
          public_private_separation: null,
          status: 'needs_evidence; no national cultural scores invented',
        },
        architecture: [
          'KPK combines prevention, coordination and qualifying corruption investigation/prosecution; police and Attorney General retain cases; courts adjudicate.',
          'BPK audits state finances. PANRB and Information Commission cover administrative integrity and information functions.',
        ],
        implementation_constraints: [
          'KPK jurisdiction is conditional; improvements must respect coverage and interagency handoffs.',
          'The strategic plan identifies implementation commitment and planning/budget-cycle misalignment. OECD records gaps between rules and demonstrated practice.',
        ],
        evidence_notes: [
          'Existing wealth/gratification reporting, education and monitoring mean reforms strengthen a baseline. OECD criteria scores must not be turned into enforcement probabilities.',
        ],
        tool_baseline: {
          aca: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          merit: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          rotation: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          protection: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          declarations: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          conflicts: {
            status: 'existing_with_documented_scope_gap',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          oversight: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          pay: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          penalties: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          disclosure: {
            status: 'existing_with_documented_scope_gap',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          complaints: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          education: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
        },
        sources: ['id-kpk', 'id-bpk', 'IDN-oecd'],
        pending: {
          role_counts: null,
          organization_counts_and_sizes: null,
          membership_and_support_distributions: null,
          resource_allocation_shares: null,
          country_tool_costs: null,
          procedure_calendar: null,
        },
      },
      {
        iso3: 'IND',
        name: 'India',
        readiness: 'initial evidence profile; not calibrated for simulation',
        indicators: {
          gdp_per_capita_ppp: {
            value: 11747.9160436011,
            year: 2025,
            unit: 'current international dollars; not household income',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/IND/indicator/NY.GDP.PCAP.PP.CD?format=json&date=2025',
            retrieved: '2026-11-22',
          },
          government_effectiveness: {
            value: 62.6217125,
            year: 2025,
            unit: 'governance score, 0–100; broad descriptor',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/IND/indicator/GOV_WGI_GE_SC?format=json&date=2025',
            retrieved: '2026-11-22',
          },
          rule_of_law: {
            value: 56.5115218,
            year: 2025,
            unit: 'governance score, 0–100; not a case-success probability',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/IND/indicator/GOV_WGI_RL_SC?format=json&date=2025',
            retrieved: '2026-11-22',
          },
          regulatory_quality_proxy: {
            value: 52.5770806,
            year: 2025,
            unit: 'governance score, 0–100; incomplete proxy for business conditions',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/IND/indicator/GOV_WGI_RQ_SC?format=json&date=2025',
            retrieved: '2026-11-22',
          },
        },
        political: {
          numeric_values: null,
          status: 'needs_evidence',
          institutional_constraint:
            'Federal Union/state institutions and personnel systems; country-specific electoral/appointment mapping still required.',
          proposed_source: 'vdem',
        },
        culture: {
          kinship: null,
          informality: null,
          public_private_separation: null,
          status: 'needs_evidence; no national cultural scores invented',
        },
        architecture: [
          'CVC/CVO central vigilance, CBI covered criminal investigations and Lokpal inquiry/referral functions; special judges/courts adjudicate.',
          'State Lokayuktas and anti-corruption police have separate jurisdictions; CAG provides external audit.',
        ],
        implementation_constraints: [
          'March 2026 parliamentary findings distinguish Lokpal’s formally constituted prosecution wing from operational reliance on CBI and incomplete staffing. Model queues and handoffs.',
          'The December 2025 government answer said the 2014 Whistle Blowers Protection Act had not commenced; PIDPI/CVC channels existed. Later commencement must be checked.',
        ],
        evidence_notes: [
          'Central conduct rules already regulate gifts, private business and property transactions; do not extend this scope automatically to all states, politicians or private workers.',
        ],
        tool_baseline: {
          aca: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          merit: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          rotation: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          protection: {
            status: 'existing_with_documented_scope_gap',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          declarations: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          conflicts: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          oversight: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          pay: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          penalties: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          disclosure: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          complaints: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          education: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
        },
        sources: ['in-committee', 'in-reporting', 'in-conduct', 'in-audit'],
        pending: {
          role_counts: null,
          organization_counts_and_sizes: null,
          membership_and_support_distributions: null,
          resource_allocation_shares: null,
          country_tool_costs: null,
          procedure_calendar: null,
        },
      },
      {
        iso3: 'CHN',
        name: 'China',
        readiness: 'initial evidence profile; not calibrated for simulation',
        indicators: {
          gdp_per_capita_ppp: {
            value: 29333.3311051433,
            year: 2025,
            unit: 'current international dollars; not household income',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/CHN/indicator/NY.GDP.PCAP.PP.CD?format=json&date=2025',
            retrieved: '2026-11-22',
          },
          government_effectiveness: {
            value: 65.1127866,
            year: 2025,
            unit: 'governance score, 0–100; broad descriptor',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/CHN/indicator/GOV_WGI_GE_SC?format=json&date=2025',
            retrieved: '2026-11-22',
          },
          rule_of_law: {
            value: 51.5591046,
            year: 2025,
            unit: 'governance score, 0–100; not a case-success probability',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/CHN/indicator/GOV_WGI_RL_SC?format=json&date=2025',
            retrieved: '2026-11-22',
          },
          regulatory_quality_proxy: {
            value: 53.5889642,
            year: 2025,
            unit: 'governance score, 0–100; incomplete proxy for business conditions',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/CHN/indicator/GOV_WGI_RQ_SC?format=json&date=2025',
            retrieved: '2026-11-22',
          },
        },
        political: {
          numeric_values: null,
          status: 'needs_evidence',
          institutional_constraint:
            'CPC-led personnel and supervisory accountability; do not impose competitive national multiparty elections.',
          proposed_source: 'vdem',
        },
        culture: {
          kinship: null,
          informality: null,
          public_private_separation: null,
          status: 'needs_evidence; no national cultural scores invented',
        },
        architecture: [
          'CPC-led national/local supervision commissions investigate duty violations/crimes and impose applicable administrative discipline.',
          'Procuratorates review/prosecute criminal transfers; courts adjudicate. NAO/local audit bodies follow the constitutional executive audit structure.',
        ],
        implementation_constraints: [
          'Use the revised Supervision Law effective 1 June 2025; supervisory powers do not collapse prosecution and adjudication.',
          'Open Government Information rules provide disclosure with exceptions. Internal personnel/asset reporting is not equivalent to a public assets register.',
        ],
        evidence_notes: [
          'Formal reporting, confidentiality, recusal and anti-retaliation provisions are a baseline, not measured zero-retaliation guarantees. Statutory powers do not measure practical political autonomy.',
        ],
        tool_baseline: {
          aca: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          merit: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          rotation: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          protection: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          declarations: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          conflicts: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          oversight: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          pay: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          penalties: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          disclosure: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          complaints: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          education: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
        },
        sources: ['cn-law', 'cn-audit', 'cn-info'],
        pending: {
          role_counts: null,
          organization_counts_and_sizes: null,
          membership_and_support_distributions: null,
          resource_allocation_shares: null,
          country_tool_costs: null,
          procedure_calendar: null,
        },
      },
      {
        iso3: 'PER',
        name: 'Peru',
        readiness: 'initial evidence profile; not calibrated for simulation',
        indicators: {
          gdp_per_capita_ppp: {
            value: 18816.1045522938,
            year: 2025,
            unit: 'current international dollars; not household income',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/PER/indicator/NY.GDP.PCAP.PP.CD?format=json&date=2025',
            retrieved: '2026-11-22',
          },
          government_effectiveness: {
            value: 49.4035596,
            year: 2025,
            unit: 'governance score, 0–100; broad descriptor',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/PER/indicator/GOV_WGI_GE_SC?format=json&date=2025',
            retrieved: '2026-11-22',
          },
          rule_of_law: {
            value: 47.7804439,
            year: 2025,
            unit: 'governance score, 0–100; not a case-success probability',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/PER/indicator/GOV_WGI_RL_SC?format=json&date=2025',
            retrieved: '2026-11-22',
          },
          regulatory_quality_proxy: {
            value: 57.5499416,
            year: 2025,
            unit: 'governance score, 0–100; incomplete proxy for business conditions',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/PER/indicator/GOV_WGI_RQ_SC?format=json&date=2025',
            retrieved: '2026-11-22',
          },
        },
        political: {
          numeric_values: null,
          status: 'needs_evidence',
          institutional_constraint:
            'National and subnational political/administrative accountability are separate; exact calendars and authority still require scoping.',
          proposed_source: 'vdem',
        },
        culture: {
          kinship: null,
          informality: null,
          public_private_separation: null,
          status: 'needs_evidence; no national cultural scores invented',
        },
        architecture: [
          'SIP within PCM coordinates prevention; CAN coordinates policy; distributed Integrity Offices implement internal arrangements.',
          'Ministerio Público specialized corruption prosecutors and criminal courts handle criminal cases. State Procuradurías are a distinct representation function.',
          'CGR/National Control System: audit and applicable administrative accountability; ONPE: political finance.',
        ],
        implementation_constraints: [
          'OECD records uneven municipal integrity capacity, turnover and coordination gaps. National rules do not imply uniform local delivery.',
          'Lobbying definitions exist, but OECD reports no dedicated oversight authority/public registry after amendments. Do not infer absence of all regulation.',
        ],
        evidence_notes: [
          'Reforms improve the existing Integrity Model, interests declarations and transparency framework; targets for future municipal coverage are not achieved counts.',
        ],
        tool_baseline: {
          aca: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          merit: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          rotation: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          protection: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          declarations: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          conflicts: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          oversight: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          pay: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          penalties: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          disclosure: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          complaints: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          education: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
        },
        sources: ['PER-oecd', 'pe-economy'],
        pending: {
          role_counts: null,
          organization_counts_and_sizes: null,
          membership_and_support_distributions: null,
          resource_allocation_shares: null,
          country_tool_costs: null,
          procedure_calendar: null,
        },
      },
      {
        iso3: 'BRA',
        name: 'Brazil',
        readiness: 'initial evidence profile; not calibrated for simulation',
        indicators: {
          gdp_per_capita_ppp: {
            value: 23433.2897595431,
            year: 2025,
            unit: 'current international dollars; not household income',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/BRA/indicator/NY.GDP.PCAP.PP.CD?format=json&date=2025',
            retrieved: '2026-11-22',
          },
          government_effectiveness: {
            value: 51.6145142,
            year: 2025,
            unit: 'governance score, 0–100; broad descriptor',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/BRA/indicator/GOV_WGI_GE_SC?format=json&date=2025',
            retrieved: '2026-11-22',
          },
          rule_of_law: {
            value: 50.6314613,
            year: 2025,
            unit: 'governance score, 0–100; not a case-success probability',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/BRA/indicator/GOV_WGI_RL_SC?format=json&date=2025',
            retrieved: '2026-11-22',
          },
          regulatory_quality_proxy: {
            value: 47.8892296,
            year: 2025,
            unit: 'governance score, 0–100; incomplete proxy for business conditions',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/BRA/indicator/GOV_WGI_RQ_SC?format=json&date=2025',
            retrieved: '2026-11-22',
          },
        },
        political: {
          numeric_values: null,
          status: 'needs_evidence',
          institutional_constraint:
            'Federal, state and local jurisdictions and political-finance channels coexist; preserve jurisdiction tags.',
          proposed_source: 'vdem',
        },
        culture: {
          kinship: null,
          informality: null,
          public_private_separation: null,
          status: 'needs_evidence; no national cultural scores invented',
        },
        architecture: [
          'CGU: federal executive integrity, internal control, discipline and ombudsman systems.',
          'Police and federal/state prosecutors feed competent courts; TCU supports congressional external control of federal resources.',
        ],
        implementation_constraints: [
          'Do not turn CGU or TCU into a single criminal investigator/prosecutor/court.',
          'OECD identifies incomplete strategic outcome baselines, risk analysis and evidence of conflict-of-interest follow-up. Missing evidence is not zero real compliance.',
        ],
        evidence_notes: [
          'The 2025–27 integrity plan, conflict/financial declaration arrangements, access-information law and reporting systems already exist. Improvements target coverage, verification and follow-through.',
        ],
        tool_baseline: {
          aca: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          merit: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          rotation: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          protection: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          declarations: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          conflicts: {
            status: 'existing_with_documented_scope_gap',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          oversight: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          pay: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          penalties: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          disclosure: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          complaints: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          education: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
        },
        sources: ['BRA-oecd', 'br-cgu', 'br-tcu'],
        pending: {
          role_counts: null,
          organization_counts_and_sizes: null,
          membership_and_support_distributions: null,
          resource_allocation_shares: null,
          country_tool_costs: null,
          procedure_calendar: null,
        },
      },
      {
        iso3: 'USA',
        name: 'United States',
        readiness: 'initial evidence profile; not calibrated for simulation',
        indicators: {
          gdp_per_capita_ppp: {
            value: 90026.5163005744,
            year: 2025,
            unit: 'current international dollars; not household income',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/USA/indicator/NY.GDP.PCAP.PP.CD?format=json&date=2025',
            retrieved: '2026-11-22',
          },
          government_effectiveness: {
            value: 76.7214861,
            year: 2025,
            unit: 'governance score, 0–100; broad descriptor',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/USA/indicator/GOV_WGI_GE_SC?format=json&date=2025',
            retrieved: '2026-11-22',
          },
          rule_of_law: {
            value: 71.672083,
            year: 2025,
            unit: 'governance score, 0–100; not a case-success probability',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/USA/indicator/GOV_WGI_RL_SC?format=json&date=2025',
            retrieved: '2026-11-22',
          },
          regulatory_quality_proxy: {
            value: 72.8150032,
            year: 2025,
            unit: 'governance score, 0–100; incomplete proxy for business conditions',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/USA/indicator/GOV_WGI_RQ_SC?format=json&date=2025',
            retrieved: '2026-11-22',
          },
        },
        political: {
          numeric_values: null,
          status: 'needs_evidence',
          institutional_constraint:
            'Federal/state/local elections, appointments and agency authority require separate procedures; no universal national control chain.',
          proposed_source: 'vdem',
        },
        culture: {
          kinship: null,
          informality: null,
          public_private_separation: null,
          status: 'needs_evidence; no national cultural scores invented',
        },
        architecture: [
          'OGE/agency ethics offices: executive ethics; agency inspectors general: audit/investigation/referral.',
          'FBI/competent investigators and DOJ/U.S. Attorneys feed courts; GAO provides federal external audit.',
          'OSC wrongdoing-disclosure and retaliation/personnel-practice functions are distinct; state/local systems coexist.',
        ],
        implementation_constraints: [
          'No single all-purpose national ACA. Federal jurisdiction over state/local misconduct requires a legal basis.',
          'Federal disclosure, reporting and merit rules do not establish identical coverage for every private worker, contractor or intelligence role. Detailed 2026 changes require targeted checks.',
        ],
        evidence_notes: [
          'OECD documents strategy cost/monitoring and integrity-data gaps; these do not imply no institutions or zero integrity.',
        ],
        tool_baseline: {
          aca: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          merit: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          rotation: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          protection: {
            status: 'existing_with_documented_scope_gap',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          declarations: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          conflicts: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          oversight: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          pay: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          penalties: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          disclosure: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          complaints: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          education: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
        },
        sources: ['USA-oecd', 'us-doj', 'us-osc', 'us-oig'],
        pending: {
          role_counts: null,
          organization_counts_and_sizes: null,
          membership_and_support_distributions: null,
          resource_allocation_shares: null,
          country_tool_costs: null,
          procedure_calendar: null,
        },
      },
      {
        iso3: 'DEU',
        name: 'Germany',
        readiness: 'initial evidence profile; not calibrated for simulation',
        indicators: {
          gdp_per_capita_ppp: {
            value: 75406.6888111618,
            year: 2025,
            unit: 'current international dollars; not household income',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/DEU/indicator/NY.GDP.PCAP.PP.CD?format=json&date=2025',
            retrieved: '2026-11-22',
          },
          government_effectiveness: {
            value: 82.8363275,
            year: 2025,
            unit: 'governance score, 0–100; broad descriptor',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/DEU/indicator/GOV_WGI_GE_SC?format=json&date=2025',
            retrieved: '2026-11-22',
          },
          rule_of_law: {
            value: 85.067519,
            year: 2025,
            unit: 'governance score, 0–100; not a case-success probability',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/DEU/indicator/GOV_WGI_RL_SC?format=json&date=2025',
            retrieved: '2026-11-22',
          },
          regulatory_quality_proxy: {
            value: 76.4294022,
            year: 2025,
            unit: 'governance score, 0–100; incomplete proxy for business conditions',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/DEU/indicator/GOV_WGI_RQ_SC?format=json&date=2025',
            retrieved: '2026-11-22',
          },
        },
        political: {
          numeric_values: null,
          status: 'needs_evidence',
          institutional_constraint:
            'Federal/Länder jurisdictions and administrative appointments; retain decentralized authority rather than inventing a national corruption prosecutor.',
          proposed_source: 'vdem',
        },
        culture: {
          kinship: null,
          informality: null,
          public_private_separation: null,
          status: 'needs_evidence; no national cultural scores invented',
        },
        architecture: [
          'Federal administrative prevention and decentralized conflict oversight; Länder police/prosecutors handle most corruption cases; courts adjudicate.',
          'BKA coordinates information. Federal and Länder audit bodies provide separate financial oversight.',
        ],
        implementation_constraints: [
          'A federal prevention directive, multiple-eyes controls, risk assessment, conduct rules and protected reporting channels are existing safeguards.',
          'OECD strategic-framework/data gaps and lack of uniform asset declarations are not evidence of no integrity protection. Detailed state procedures remain to be mapped.',
        ],
        evidence_notes: [
          'Use risk-based safeguards and scope-sensitive disclosure; a reform need not copy an all-purpose ACA or uniform public asset-register model.',
        ],
        tool_baseline: {
          aca: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          merit: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          rotation: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          protection: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          declarations: {
            status: 'existing_with_documented_scope_gap',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          conflicts: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          oversight: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          pay: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          penalties: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          disclosure: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          complaints: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          education: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
        },
        sources: ['DEU-oecd', 'de-prevention', 'de-audit'],
        pending: {
          role_counts: null,
          organization_counts_and_sizes: null,
          membership_and_support_distributions: null,
          resource_allocation_shares: null,
          country_tool_costs: null,
          procedure_calendar: null,
        },
      },
      {
        iso3: 'ITA',
        name: 'Italy',
        readiness: 'initial evidence profile; not calibrated for simulation',
        indicators: {
          gdp_per_capita_ppp: {
            value: 62802.5108384276,
            year: 2025,
            unit: 'current international dollars; not household income',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/ITA/indicator/NY.GDP.PCAP.PP.CD?format=json&date=2025',
            retrieved: '2026-11-22',
          },
          government_effectiveness: {
            value: 71.2690275,
            year: 2025,
            unit: 'governance score, 0–100; broad descriptor',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/ITA/indicator/GOV_WGI_GE_SC?format=json&date=2025',
            retrieved: '2026-11-22',
          },
          rule_of_law: {
            value: 68.2753091,
            year: 2025,
            unit: 'governance score, 0–100; not a case-success probability',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/ITA/indicator/GOV_WGI_RL_SC?format=json&date=2025',
            retrieved: '2026-11-22',
          },
          regulatory_quality_proxy: {
            value: 65.7903769,
            year: 2025,
            unit: 'governance score, 0–100; incomplete proxy for business conditions',
            status: 'sourced_descriptor',
            source:
              'https://api.worldbank.org/v2/country/ITA/indicator/GOV_WGI_RQ_SC?format=json&date=2025',
            retrieved: '2026-11-22',
          },
        },
        political: {
          numeric_values: null,
          status: 'needs_evidence',
          institutional_constraint:
            'National, regional and municipal implementation; judicial and accounting-liability routes must remain distinct.',
          proposed_source: 'vdem',
        },
        culture: {
          kinship: null,
          informality: null,
          public_private_separation: null,
          status: 'needs_evidence; no national cultural scores invented',
        },
        architecture: [
          'ANAC: prevention, transparency and procurement oversight, alongside administration-level integrity managers.',
          'Guardia di Finanza and ordinary prosecutors feed criminal courts. Corte dei conti audit/accounting liability follows a separate route.',
        ],
        implementation_constraints: [
          'Protected reporting under Legislative Decree 24/2023 is an existing baseline with conditions for external escalation.',
          'The EC July 2026 chapter reports repeal/narrowing of relevant offences and January 2026 accounting-liability changes under challenge. Verify current law before assigning exact sanctions.',
        ],
        evidence_notes: [
          'OECD reports missing strategic outcome baselines/cost projections. Political conflict/lobbying coverage and practical justice capacity need separate treatment from formal adoption.',
        ],
        tool_baseline: {
          aca: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          merit: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          rotation: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          protection: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          declarations: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          conflicts: {
            status: 'existing_with_documented_scope_gap',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          oversight: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          pay: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          penalties: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          disclosure: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          complaints: {
            status: 'existing_relevant_instrument',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
          education: {
            status: 'not_scoped_not_absent',
            numerical_strength: null,
            detail:
              'Read country notes and source scope; this tag is not a national coverage/effectiveness score.',
          },
        },
        sources: ['ITA-oecd', 'it-gdf', 'it-reporting', 'it-ec'],
        pending: {
          role_counts: null,
          organization_counts_and_sizes: null,
          membership_and_support_distributions: null,
          resource_allocation_shares: null,
          country_tool_costs: null,
          procedure_calendar: null,
        },
      },
    ],
    sources: {
      wgi: {
        title: 'World Bank: Worldwide Governance Indicators FAQ and 2025 revised series',
        url: 'https://www.worldbank.org/en/publication/worldwide-governance-indicators/frequently-asked-questions',
      },
      vdem: {
        title: 'V-Dem dataset v16 (2026)',
        url: 'https://www.v-dem.net/data/the-v-dem-dataset/',
      },
      icpc: { title: 'ICPC: Our Role', url: 'https://icpc.gov.ng/our-role/' },
      'ng-audit': {
        title: 'OAuGF: About the Office',
        url: 'https://oaugf.ng/26/about-us/about-oaugf',
      },
      'ng-survey': {
        title: 'NBS/UNODC: Corruption in Nigeria, 2023 survey, July 2024 publication',
        url: 'https://www.nigerianstat.gov.ng/elibrary/read/1241532',
      },
      'ng-reporting': {
        title: 'Federal Ministry of Information: whistle-blowing framework, 28 August 2024',
        url: 'https://fmino.gov.ng/federal-government-to-strengthen-whistle-blowing-policy-with-legal-framework/',
      },
      'sa-system': {
        title: 'South African Government: administration of justice',
        url: 'https://www.gov.za/about-government/government-system/justice-system/administration-justice',
      },
      'sa-audit': {
        title: 'AGSA: 2024–25 audit findings, 26 March 2026',
        url: 'https://www.agsa.co.za/news/ag-reports-minimal-progress-calls-government-double-efforts-improve-audit-outcomes',
      },
      'sa-draft': {
        title: 'Justice Ministry: draft Protected Disclosures Bill, 21 May 2026',
        url: 'https://www.justice.gov.za/m_statements/2026/20260521-PDbill-deadline.html',
      },
      'id-kpk': {
        title: 'KPK Regulation 2/2025: Strategic Plan 2025–2029',
        url: 'https://cms.kpk.go.id/storage/8707/33.-Peraturan-KPK-Nomor-2-Tahun-2025-tentang-Renstra-KPK-Tahun-2025-2029.pdf',
      },
      'id-bpk': {
        title: 'BPK: Strategic Plan 2025–2029',
        url: 'https://www.bpk.go.id/en/about-bpk/strategic-plan-2/',
      },
      'in-committee': {
        title: 'Rajya Sabha committee findings, 16 March 2026',
        url: 'https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2240722&lang=2&reg=48',
      },
      'in-reporting': {
        title: 'Personnel Ministry: Whistle Blowers Protection Act answer, 11 December 2025',
        url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2202426&lang=2&reg=48',
      },
      'in-conduct': {
        title: 'ISTM: central civil-service conduct rules, explanatory page',
        url: 'https://www.istm.gov.in/home/css_conduct_rules',
      },
      'in-audit': {
        title: 'CAG: Regulations on Audit and Accounts',
        url: 'https://cag.gov.in/en/page-audit-regulations',
      },
      'cn-law': {
        title: 'Supervision Law, amended December 2024; effective June 2025',
        url: 'https://www.samr.gov.cn/jjz/djfg/gjflfg/art/2025/art_83564c26301f43b48798e75f82d640e4.html',
      },
      'cn-audit': {
        title: 'NAO: legal status, 16 July 2015',
        url: 'https://www.audit.gov.cn/en/n744/c68249/content.html',
      },
      'cn-info': {
        title: 'Government Information Regulations, 2019 revision',
        url: 'https://www.mee.gov.cn/zcwj/gwywj/202001/t20200108_758139.shtml',
      },
      'pe-economy': {
        title: 'OECD Economic Surveys: Peru 2025, institutional capacity discussion',
        url: 'https://www.oecd.org/en/publications/oecd-economic-surveys-peru-2025_76f6eb73-en/full-report/achieving-strong-growth-and-safeguarding-fiscal-sustainability_000545c6.html',
      },
      'br-cgu': {
        title: 'CGU: institutional mandate',
        url: 'https://www.gov.br/cgu/pt-br/acesso-a-informacao/institucional/institucional',
      },
      'br-tcu': {
        title: 'TCU: purpose, functions and strategy',
        url: 'https://portal.tcu.gov.br/english/purpose-functions-and-strategy',
      },
      'us-doj': {
        title: 'DOJ: Public Integrity Section',
        url: 'https://www.justice.gov/criminal/criminal-pin',
      },
      'us-osc': {
        title: 'OSC: disclosure of wrongdoing',
        url: 'https://www.osc.gov/services/disclosure-of-wrongdoing/overview/',
      },
      'us-oig': {
        title: 'Oversight.gov: inspectors general',
        url: 'https://www.oversight.gov/about/inspectors-general',
      },
      'de-prevention': {
        title: 'Federal Government: corruption prevention, 23 January 2025',
        url: 'https://www.bundesregierung.de/breg-de/bundesregierung/bundespresseamt/korruptionspraevention-1899272',
      },
      'de-audit': {
        title: 'Bundesrechnungshof: about us',
        url: 'https://bundesrechnungshof.de/en/about-us',
      },
      'it-gdf': {
        title: 'Guardia di Finanza: cooperation with the Court of Auditors',
        url: 'https://www.gdf.gov.it/en/institutional-tasks/the-fight-against-any-misuse-of-public-money-and-illegality-within-the-public-administration/cooperation-with-the-court-of-auditors',
      },
      'it-reporting': {
        title: 'INAPP: protected reporting under Legislative Decree 24/2023',
        url: 'https://www.inapp.gov.it/amministrazione-trasparente/altri-contenuti/prevenzione-della-corruzione/segnalazioni-condotte-illecite-cd-whistleblowing/',
      },
      'it-ec': {
        title: 'European Commission: Italy rule-of-law chapter, 17 July 2026',
        url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52026SC0912',
      },
      'BRA-oecd': {
        title:
          'OECD Anti-Corruption and Integrity Outlook 2026: Brazil (24 March 2026; mostly 2025/latest observations)',
        url: 'https://www.oecd.org/en/publications/anti-corruption-and-integrity-outlook-2026_0c8910f8-en/brazil_237acf05-en.html',
      },
      'USA-oecd': {
        title:
          'OECD Anti-Corruption and Integrity Outlook 2026: United States (24 March 2026; mostly 2025/latest observations)',
        url: 'https://www.oecd.org/en/publications/anti-corruption-and-integrity-outlook-2026_0c8910f8-en/united-states_1d9a74d5-en.html',
      },
      'DEU-oecd': {
        title:
          'OECD Anti-Corruption and Integrity Outlook 2026: Germany (24 March 2026; mostly 2025/latest observations)',
        url: 'https://www.oecd.org/en/publications/anti-corruption-and-integrity-outlook-2026_0c8910f8-en/germany_d57a73fc-en.html',
      },
      'ITA-oecd': {
        title:
          'OECD Anti-Corruption and Integrity Outlook 2026: Italy (24 March 2026; mostly 2025/latest observations)',
        url: 'https://www.oecd.org/en/publications/anti-corruption-and-integrity-outlook-2026_0c8910f8-en/italy_78ff2b97-en.html',
      },
      'PER-oecd': {
        title:
          'OECD Anti-Corruption and Integrity Outlook 2026: Peru (24 March 2026; mostly 2025/latest observations)',
        url: 'https://www.oecd.org/en/publications/anti-corruption-and-integrity-outlook-2026_0c8910f8-en/peru_ed06008b-en.html',
      },
      'IDN-oecd': {
        title: 'OECD Anti-Corruption and Integrity Outlook 2026: Indonesia',
        url: 'https://www.oecd.org/en/publications/2026/03/anti-corruption-and-integrity-outlook-2026-country-notes_b1df9263/indonesia_f62cee7b.html',
      },
    },
    common_calibration_gates: [
      'No production country ranking or effect claims from this profile set.',
      'Obtain and date political and culture measures; keep correlated indices from causing duplicate effects.',
      'Calibrate the four-role representation and organizations; minimum representation implies a stylized sample, not a census.',
      'Map 120 country/tool packages for scope, baseline, reform delta, legal route, requirement costs, authorized allocators and allocation shares.',
      'Verify changing legislation before implementing penalties, protection or officeholder replacement.',
      'Estimate behavioral, encounter and information parameters using separate evidence and sensitivity analysis.',
    ],
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = data;
  else root.AntarkyaProfiles = data;
})(typeof globalThis !== 'undefined' ? globalThis : this);
