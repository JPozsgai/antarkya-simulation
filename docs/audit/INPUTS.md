# Country, policy and parameter inputs

These are the exact data shipped with this edition. Country observations/proxies are distinct from mappings and engineering priors. For every remaining hard-coded number, inspect the complete [numeric literal inventory](NUMERICS.html). Source code remains authoritative for transformations, eligibility and process constraints.

## Country conditions and institutional topology

| Country | Role counts (citizen/business/official/politician) | Political mode / relative cycle / first review | Central share prior |
| --- | --- | --- | --- |
| Nigeria (NGA) | 635 / 210 / 130 / 25 | presidential / 48 / 24 | 0.7 |
| South Africa (ZAF) | 610 / 220 / 145 / 25 | parliamentary / 60 / 36 | 0.55 |
| Indonesia (IDN) | 625 / 220 / 130 / 25 | presidential / 60 / 36 | 0.65 |
| India (IND) | 650 / 205 / 120 / 25 | parliamentary / 60 / 36 | 0.5 |
| China (CHN) | 590 / 235 / 150 / 25 | appointment / 60 / 36 | 0.8 |
| Peru (PER) | 630 / 210 / 135 / 25 | presidential / 60 / 12 | 0.6 |
| Brazil (BRA) | 600 / 230 / 145 / 25 | presidential / 48 / 12 | 0.55 |
| United States (USA) | 570 / 270 / 135 / 25 | presidential / 48 / 24 | 0.45 |
| Germany (DEU) | 575 / 255 / 145 / 25 | parliamentary / 48 / 36 | 0.4 |
| Italy (ITA) | 590 / 245 / 140 / 25 | parliamentary / 60 / 24 | 0.6 |

## Nigeria (NGA)

| Indicator | Value | Year / unit | Evidence status / source |
| --- | --- | --- | --- |
| gdp_per_capita_ppp | 9531.61073275049 | 2025 · current international dollars; not household income | sourced_descriptor · [source](https://api.worldbank.org/v2/country/NGA/indicator/NY.GDP.PCAP.PP.CD?format=json&date=2025) · retrieved 2026-11-22 |
| government_effectiveness | 33.6477279 | 2025 · governance score, 0–100; broad descriptor | sourced_descriptor · [source](https://api.worldbank.org/v2/country/NGA/indicator/GOV_WGI_GE_SC?format=json&date=2025) · retrieved 2026-11-22 |
| rule_of_law | 42.9536547 | 2025 · governance score, 0–100; not a case-success probability | sourced_descriptor · [source](https://api.worldbank.org/v2/country/NGA/indicator/GOV_WGI_RL_SC?format=json&date=2025) · retrieved 2026-11-22 |
| regulatory_quality_proxy | 44.3833952 | 2025 · governance score, 0–100; incomplete proxy for business conditions | sourced_descriptor · [source](https://api.worldbank.org/v2/country/NGA/indicator/GOV_WGI_RQ_SC?format=json&date=2025) · retrieved 2026-11-22 |

Political/cultural mapping from `baseline.conditions`: 

| Condition | Initial value | Status |
| --- | --- | --- |
| civil_liberties | 40 | Sourced proxy · Freedom House 2026 CL / 60 |
| representation | 56.25 | Sourced proxy · Freedom House 2025 B / 16 |
| electoral_integrity | 50 | Sourced proxy · Freedom House 2025 A / 12 |
| kinship | 50 | Unmeasured cultural condition · neutral assumption |
| informality | 50 | Unmeasured cultural condition · neutral assumption |
| public_private_separation | 50 | Unmeasured cultural condition · neutral assumption |

Institutional nodes (simplified names and model functions):

| Node | Function |
| --- | --- |
| ICPC | prevention |
| EFCC | investigation |
| Federal audit | audit |
| Justice and courts | decision |
| Code of conduct function | integrity |
| Budget authority | budget |

Inherited policy evidence is reproduced in the complete country object below; observations and unquantified notes must not be read as numeric behavioral effectiveness.

<details><summary>Complete stored profile and inherited evidence</summary>

```json
{
  "iso3": "NGA",
  "name": "Nigeria",
  "readiness": "initial evidence profile; not calibrated for simulation",
  "indicators": {
    "gdp_per_capita_ppp": {
      "value": 9531.61073275049,
      "year": 2025,
      "unit": "current international dollars; not household income",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/NGA/indicator/NY.GDP.PCAP.PP.CD?format=json&date=2025",
      "retrieved": "2026-11-22"
    },
    "government_effectiveness": {
      "value": 33.6477279,
      "year": 2025,
      "unit": "governance score, 0–100; broad descriptor",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/NGA/indicator/GOV_WGI_GE_SC?format=json&date=2025",
      "retrieved": "2026-11-22"
    },
    "rule_of_law": {
      "value": 42.9536547,
      "year": 2025,
      "unit": "governance score, 0–100; not a case-success probability",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/NGA/indicator/GOV_WGI_RL_SC?format=json&date=2025",
      "retrieved": "2026-11-22"
    },
    "regulatory_quality_proxy": {
      "value": 44.3833952,
      "year": 2025,
      "unit": "governance score, 0–100; incomplete proxy for business conditions",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/NGA/indicator/GOV_WGI_RQ_SC?format=json&date=2025",
      "retrieved": "2026-11-22"
    }
  },
  "political": {
    "numeric_values": null,
    "status": "needs_evidence",
    "institutional_constraint": "Federal jurisdictions and electoral/appointment procedures require their own legal mapping; national political-index values remain pending.",
    "proposed_source": "vdem"
  },
  "culture": {
    "kinship": null,
    "informality": null,
    "public_private_separation": null,
    "status": "needs_evidence; no national cultural scores invented"
  },
  "architecture": [
    "ICPC: prevention, complaints, corruption investigation and prosecution functions; adjudication remains judicial.",
    "EFCC: economic/financial crime investigation and enforcement, with prosecutorial and court interfaces.",
    "OAuGF and legislative Public Accounts Committees: external audit and accountability, distinct from criminal adjudication."
  ],
  "implementation_constraints": [
    "Keep federal/state jurisdictions and overlapping mandates explicit.",
    "The 2016 federal whistleblowing policy is an existing baseline; the August 2024 source described draft legal protection, not an enacted later statute. Verify current protection law before coding."
  ],
  "evidence_notes": [
    "2023 survey: 56% of adults had public-official contact; 27% of that contact group paid a bribe in the preceding year; 8.6% of bribe payers reported to an official institution. These are annual person-level measures, not encounter or case-success probabilities."
  ],
  "tool_baseline": {
    "aca": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "merit": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "rotation": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "protection": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "declarations": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "conflicts": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "oversight": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "pay": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "penalties": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "disclosure": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "complaints": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "education": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    }
  },
  "sources": [
    "icpc",
    "ng-audit",
    "ng-survey",
    "ng-reporting"
  ],
  "pending": {
    "role_counts": null,
    "organization_counts_and_sizes": null,
    "membership_and_support_distributions": null,
    "resource_allocation_shares": null,
    "country_tool_costs": null,
    "procedure_calendar": null
  }
}
```

</details>

## South Africa (ZAF)

| Indicator | Value | Year / unit | Evidence status / source |
| --- | --- | --- | --- |
| gdp_per_capita_ppp | 15905.6794419658 | 2025 · current international dollars; not household income | sourced_descriptor · [source](https://api.worldbank.org/v2/country/ZAF/indicator/NY.GDP.PCAP.PP.CD?format=json&date=2025) · retrieved 2026-11-22 |
| government_effectiveness | 51.872237 | 2025 · governance score, 0–100; broad descriptor | sourced_descriptor · [source](https://api.worldbank.org/v2/country/ZAF/indicator/GOV_WGI_GE_SC?format=json&date=2025) · retrieved 2026-11-22 |
| rule_of_law | 59.3034187 | 2025 · governance score, 0–100; not a case-success probability | sourced_descriptor · [source](https://api.worldbank.org/v2/country/ZAF/indicator/GOV_WGI_RL_SC?format=json&date=2025) · retrieved 2026-11-22 |
| regulatory_quality_proxy | 54.3217993 | 2025 · governance score, 0–100; incomplete proxy for business conditions | sourced_descriptor · [source](https://api.worldbank.org/v2/country/ZAF/indicator/GOV_WGI_RQ_SC?format=json&date=2025) · retrieved 2026-11-22 |

Political/cultural mapping from `baseline.conditions`: 

| Condition | Initial value | Status |
| --- | --- | --- |
| civil_liberties | 78.33333333333333 | Sourced proxy · Freedom House 2026 CL / 60 |
| representation | 87.5 | Sourced proxy · Freedom House 2025 B / 16 |
| electoral_integrity | 100 | Sourced proxy · Freedom House 2025 A / 12 |
| kinship | 50 | Unmeasured cultural condition · neutral assumption |
| informality | 50 | Unmeasured cultural condition · neutral assumption |
| public_private_separation | 50 | Unmeasured cultural condition · neutral assumption |

Institutional nodes (simplified names and model functions):

| Node | Function |
| --- | --- |
| National integrity coordination | prevention |
| Hawks / SAPS | investigation |
| NPA / IDAC | prosecution |
| AGSA | audit |
| SIU civil route | civil |
| Courts | decision |
| Budget authority | budget |

Inherited policy evidence is reproduced in the complete country object below; observations and unquantified notes must not be read as numeric behavioral effectiveness.

<details><summary>Complete stored profile and inherited evidence</summary>

```json
{
  "iso3": "ZAF",
  "name": "South Africa",
  "readiness": "initial evidence profile; not calibrated for simulation",
  "indicators": {
    "gdp_per_capita_ppp": {
      "value": 15905.6794419658,
      "year": 2025,
      "unit": "current international dollars; not household income",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/ZAF/indicator/NY.GDP.PCAP.PP.CD?format=json&date=2025",
      "retrieved": "2026-11-22"
    },
    "government_effectiveness": {
      "value": 51.872237,
      "year": 2025,
      "unit": "governance score, 0–100; broad descriptor",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/ZAF/indicator/GOV_WGI_GE_SC?format=json&date=2025",
      "retrieved": "2026-11-22"
    },
    "rule_of_law": {
      "value": 59.3034187,
      "year": 2025,
      "unit": "governance score, 0–100; not a case-success probability",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/ZAF/indicator/GOV_WGI_RL_SC?format=json&date=2025",
      "retrieved": "2026-11-22"
    },
    "regulatory_quality_proxy": {
      "value": 54.3217993,
      "year": 2025,
      "unit": "governance score, 0–100; incomplete proxy for business conditions",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/ZAF/indicator/GOV_WGI_RQ_SC?format=json&date=2025",
      "retrieved": "2026-11-22"
    }
  },
  "political": {
    "numeric_values": null,
    "status": "needs_evidence",
    "institutional_constraint": "National, provincial and local authority and electoral/accountability procedures must remain distinct.",
    "proposed_source": "vdem"
  },
  "culture": {
    "kinship": null,
    "informality": null,
    "public_private_separation": null,
    "status": "needs_evidence; no national cultural scores invented"
  },
  "architecture": [
    "Hawks/SAPS investigate; NPA prosecutes, including IDAC within NPA; courts adjudicate.",
    "SIU follows proclamation-based investigation and civil recovery with a criminal-referral route.",
    "AGSA external audit is a separate accountability route; the national strategy coordinates a distributed system."
  ],
  "implementation_constraints": [
    "Do not treat civil recovery as a criminal conviction or create a freestanding all-purpose IDAC.",
    "The May 2026 source described the new Protected Disclosures Bill as a draft; retain existing-law protections without initializing draft guarantees."
  ],
  "evidence_notes": [
    "AGSA reported 151 of 417 national/provincial auditees with clean 2024–25 audits (36%), covering 12% of expenditure. Audit shortcomings do not by themselves establish corruption."
  ],
  "tool_baseline": {
    "aca": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "merit": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "rotation": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "protection": {
      "status": "existing_with_documented_scope_gap",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "declarations": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "conflicts": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "oversight": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "pay": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "penalties": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "disclosure": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "complaints": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "education": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    }
  },
  "sources": [
    "sa-system",
    "sa-audit",
    "sa-draft"
  ],
  "pending": {
    "role_counts": null,
    "organization_counts_and_sizes": null,
    "membership_and_support_distributions": null,
    "resource_allocation_shares": null,
    "country_tool_costs": null,
    "procedure_calendar": null
  }
}
```

</details>

## Indonesia (IDN)

| Indicator | Value | Year / unit | Evidence status / source |
| --- | --- | --- | --- |
| gdp_per_capita_ppp | 17659.7921291587 | 2025 · current international dollars; not household income | sourced_descriptor · [source](https://api.worldbank.org/v2/country/IDN/indicator/NY.GDP.PCAP.PP.CD?format=json&date=2025) · retrieved 2026-11-22 |
| government_effectiveness | 57.5639886 | 2025 · governance score, 0–100; broad descriptor | sourced_descriptor · [source](https://api.worldbank.org/v2/country/IDN/indicator/GOV_WGI_GE_SC?format=json&date=2025) · retrieved 2026-11-22 |
| rule_of_law | 54.4365507 | 2025 · governance score, 0–100; not a case-success probability | sourced_descriptor · [source](https://api.worldbank.org/v2/country/IDN/indicator/GOV_WGI_RL_SC?format=json&date=2025) · retrieved 2026-11-22 |
| regulatory_quality_proxy | 57.3259714 | 2025 · governance score, 0–100; incomplete proxy for business conditions | sourced_descriptor · [source](https://api.worldbank.org/v2/country/IDN/indicator/GOV_WGI_RQ_SC?format=json&date=2025) · retrieved 2026-11-22 |

Political/cultural mapping from `baseline.conditions`: 

| Condition | Initial value | Status |
| --- | --- | --- |
| civil_liberties | 46.666666666666664 | Sourced proxy · Freedom House 2026 CL / 60 |
| representation | 68.75 | Sourced proxy · Freedom House 2025 B / 16 |
| electoral_integrity | 91.66666666666667 | Sourced proxy · Freedom House 2025 A / 12 |
| kinship | 50 | Unmeasured cultural condition · neutral assumption |
| informality | 50 | Unmeasured cultural condition · neutral assumption |
| public_private_separation | 50 | Unmeasured cultural condition · neutral assumption |

Institutional nodes (simplified names and model functions):

| Node | Function |
| --- | --- |
| KPK | prevention |
| Police / prosecutors | investigation |
| BPK | audit |
| Administrative integrity | integrity |
| Courts | decision |
| Budget authority | budget |

Inherited policy evidence is reproduced in the complete country object below; observations and unquantified notes must not be read as numeric behavioral effectiveness.

<details><summary>Complete stored profile and inherited evidence</summary>

```json
{
  "iso3": "IDN",
  "name": "Indonesia",
  "readiness": "initial evidence profile; not calibrated for simulation",
  "indicators": {
    "gdp_per_capita_ppp": {
      "value": 17659.7921291587,
      "year": 2025,
      "unit": "current international dollars; not household income",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/IDN/indicator/NY.GDP.PCAP.PP.CD?format=json&date=2025",
      "retrieved": "2026-11-22"
    },
    "government_effectiveness": {
      "value": 57.5639886,
      "year": 2025,
      "unit": "governance score, 0–100; broad descriptor",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/IDN/indicator/GOV_WGI_GE_SC?format=json&date=2025",
      "retrieved": "2026-11-22"
    },
    "rule_of_law": {
      "value": 54.4365507,
      "year": 2025,
      "unit": "governance score, 0–100; not a case-success probability",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/IDN/indicator/GOV_WGI_RL_SC?format=json&date=2025",
      "retrieved": "2026-11-22"
    },
    "regulatory_quality_proxy": {
      "value": 57.3259714,
      "year": 2025,
      "unit": "governance score, 0–100; incomplete proxy for business conditions",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/IDN/indicator/GOV_WGI_RQ_SC?format=json&date=2025",
      "retrieved": "2026-11-22"
    }
  },
  "political": {
    "numeric_values": null,
    "status": "needs_evidence",
    "institutional_constraint": "Presidential system. Do not copy the OECD contextual-table label “Parliamentary”; detailed electoral calendar/authority mapping remains pending.",
    "proposed_source": "vdem"
  },
  "culture": {
    "kinship": null,
    "informality": null,
    "public_private_separation": null,
    "status": "needs_evidence; no national cultural scores invented"
  },
  "architecture": [
    "KPK combines prevention, coordination and qualifying corruption investigation/prosecution; police and Attorney General retain cases; courts adjudicate.",
    "BPK audits state finances. PANRB and Information Commission cover administrative integrity and information functions."
  ],
  "implementation_constraints": [
    "KPK jurisdiction is conditional; improvements must respect coverage and interagency handoffs.",
    "The strategic plan identifies implementation commitment and planning/budget-cycle misalignment. OECD records gaps between rules and demonstrated practice."
  ],
  "evidence_notes": [
    "Existing wealth/gratification reporting, education and monitoring mean reforms strengthen a baseline. OECD criteria scores must not be turned into enforcement probabilities."
  ],
  "tool_baseline": {
    "aca": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "merit": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "rotation": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "protection": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "declarations": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "conflicts": {
      "status": "existing_with_documented_scope_gap",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "oversight": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "pay": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "penalties": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "disclosure": {
      "status": "existing_with_documented_scope_gap",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "complaints": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "education": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    }
  },
  "sources": [
    "id-kpk",
    "id-bpk",
    "IDN-oecd"
  ],
  "pending": {
    "role_counts": null,
    "organization_counts_and_sizes": null,
    "membership_and_support_distributions": null,
    "resource_allocation_shares": null,
    "country_tool_costs": null,
    "procedure_calendar": null
  }
}
```

</details>

## India (IND)

| Indicator | Value | Year / unit | Evidence status / source |
| --- | --- | --- | --- |
| gdp_per_capita_ppp | 11747.9160436011 | 2025 · current international dollars; not household income | sourced_descriptor · [source](https://api.worldbank.org/v2/country/IND/indicator/NY.GDP.PCAP.PP.CD?format=json&date=2025) · retrieved 2026-11-22 |
| government_effectiveness | 62.6217125 | 2025 · governance score, 0–100; broad descriptor | sourced_descriptor · [source](https://api.worldbank.org/v2/country/IND/indicator/GOV_WGI_GE_SC?format=json&date=2025) · retrieved 2026-11-22 |
| rule_of_law | 56.5115218 | 2025 · governance score, 0–100; not a case-success probability | sourced_descriptor · [source](https://api.worldbank.org/v2/country/IND/indicator/GOV_WGI_RL_SC?format=json&date=2025) · retrieved 2026-11-22 |
| regulatory_quality_proxy | 52.5770806 | 2025 · governance score, 0–100; incomplete proxy for business conditions | sourced_descriptor · [source](https://api.worldbank.org/v2/country/IND/indicator/GOV_WGI_RQ_SC?format=json&date=2025) · retrieved 2026-11-22 |

Political/cultural mapping from `baseline.conditions`: 

| Condition | Initial value | Status |
| --- | --- | --- |
| civil_liberties | 51.666666666666664 | Sourced proxy · Freedom House 2026 CL / 60 |
| representation | 68.75 | Sourced proxy · Freedom House 2025 B / 16 |
| electoral_integrity | 91.66666666666667 | Sourced proxy · Freedom House 2025 A / 12 |
| kinship | 50 | Unmeasured cultural condition · neutral assumption |
| informality | 50 | Unmeasured cultural condition · neutral assumption |
| public_private_separation | 50 | Unmeasured cultural condition · neutral assumption |

Institutional nodes (simplified names and model functions):

| Node | Function |
| --- | --- |
| CVC / departmental vigilance | prevention |
| CBI / state investigation | investigation |
| Lokpal referral function | integrity |
| CAG | audit |
| Special judges | decision |
| Budget authority | budget |

Inherited policy evidence is reproduced in the complete country object below; observations and unquantified notes must not be read as numeric behavioral effectiveness.

<details><summary>Complete stored profile and inherited evidence</summary>

```json
{
  "iso3": "IND",
  "name": "India",
  "readiness": "initial evidence profile; not calibrated for simulation",
  "indicators": {
    "gdp_per_capita_ppp": {
      "value": 11747.9160436011,
      "year": 2025,
      "unit": "current international dollars; not household income",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/IND/indicator/NY.GDP.PCAP.PP.CD?format=json&date=2025",
      "retrieved": "2026-11-22"
    },
    "government_effectiveness": {
      "value": 62.6217125,
      "year": 2025,
      "unit": "governance score, 0–100; broad descriptor",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/IND/indicator/GOV_WGI_GE_SC?format=json&date=2025",
      "retrieved": "2026-11-22"
    },
    "rule_of_law": {
      "value": 56.5115218,
      "year": 2025,
      "unit": "governance score, 0–100; not a case-success probability",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/IND/indicator/GOV_WGI_RL_SC?format=json&date=2025",
      "retrieved": "2026-11-22"
    },
    "regulatory_quality_proxy": {
      "value": 52.5770806,
      "year": 2025,
      "unit": "governance score, 0–100; incomplete proxy for business conditions",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/IND/indicator/GOV_WGI_RQ_SC?format=json&date=2025",
      "retrieved": "2026-11-22"
    }
  },
  "political": {
    "numeric_values": null,
    "status": "needs_evidence",
    "institutional_constraint": "Federal Union/state institutions and personnel systems; country-specific electoral/appointment mapping still required.",
    "proposed_source": "vdem"
  },
  "culture": {
    "kinship": null,
    "informality": null,
    "public_private_separation": null,
    "status": "needs_evidence; no national cultural scores invented"
  },
  "architecture": [
    "CVC/CVO central vigilance, CBI covered criminal investigations and Lokpal inquiry/referral functions; special judges/courts adjudicate.",
    "State Lokayuktas and anti-corruption police have separate jurisdictions; CAG provides external audit."
  ],
  "implementation_constraints": [
    "March 2026 parliamentary findings distinguish Lokpal’s formally constituted prosecution wing from operational reliance on CBI and incomplete staffing. Model queues and handoffs.",
    "The December 2025 government answer said the 2014 Whistle Blowers Protection Act had not commenced; PIDPI/CVC channels existed. Later commencement must be checked."
  ],
  "evidence_notes": [
    "Central conduct rules already regulate gifts, private business and property transactions; do not extend this scope automatically to all states, politicians or private workers."
  ],
  "tool_baseline": {
    "aca": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "merit": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "rotation": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "protection": {
      "status": "existing_with_documented_scope_gap",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "declarations": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "conflicts": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "oversight": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "pay": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "penalties": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "disclosure": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "complaints": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "education": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    }
  },
  "sources": [
    "in-committee",
    "in-reporting",
    "in-conduct",
    "in-audit"
  ],
  "pending": {
    "role_counts": null,
    "organization_counts_and_sizes": null,
    "membership_and_support_distributions": null,
    "resource_allocation_shares": null,
    "country_tool_costs": null,
    "procedure_calendar": null
  }
}
```

</details>

## China (CHN)

| Indicator | Value | Year / unit | Evidence status / source |
| --- | --- | --- | --- |
| gdp_per_capita_ppp | 29333.3311051433 | 2025 · current international dollars; not household income | sourced_descriptor · [source](https://api.worldbank.org/v2/country/CHN/indicator/NY.GDP.PCAP.PP.CD?format=json&date=2025) · retrieved 2026-11-22 |
| government_effectiveness | 65.1127866 | 2025 · governance score, 0–100; broad descriptor | sourced_descriptor · [source](https://api.worldbank.org/v2/country/CHN/indicator/GOV_WGI_GE_SC?format=json&date=2025) · retrieved 2026-11-22 |
| rule_of_law | 51.5591046 | 2025 · governance score, 0–100; not a case-success probability | sourced_descriptor · [source](https://api.worldbank.org/v2/country/CHN/indicator/GOV_WGI_RL_SC?format=json&date=2025) · retrieved 2026-11-22 |
| regulatory_quality_proxy | 53.5889642 | 2025 · governance score, 0–100; incomplete proxy for business conditions | sourced_descriptor · [source](https://api.worldbank.org/v2/country/CHN/indicator/GOV_WGI_RQ_SC?format=json&date=2025) · retrieved 2026-11-22 |

Political/cultural mapping from `baseline.conditions`: 

| Condition | Initial value | Status |
| --- | --- | --- |
| civil_liberties | 18.333333333333332 | Sourced proxy · Freedom House 2026 CL / 60 |
| representation | 0 | Sourced proxy · Freedom House 2025 B / 16 |
| electoral_integrity | 0 | Sourced proxy · Freedom House 2025 A / 12 |
| kinship | 50 | Unmeasured cultural condition · neutral assumption |
| informality | 50 | Unmeasured cultural condition · neutral assumption |
| public_private_separation | 50 | Unmeasured cultural condition · neutral assumption |

Institutional nodes (simplified names and model functions):

| Node | Function |
| --- | --- |
| Supervision commissions | prevention |
| Duty-crime investigation | investigation |
| Procuratorates | prosecution |
| NAO / local audit | audit |
| Courts | decision |
| Personnel authorities | integrity |
| Budget authority | budget |

Inherited policy evidence is reproduced in the complete country object below; observations and unquantified notes must not be read as numeric behavioral effectiveness.

<details><summary>Complete stored profile and inherited evidence</summary>

```json
{
  "iso3": "CHN",
  "name": "China",
  "readiness": "initial evidence profile; not calibrated for simulation",
  "indicators": {
    "gdp_per_capita_ppp": {
      "value": 29333.3311051433,
      "year": 2025,
      "unit": "current international dollars; not household income",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/CHN/indicator/NY.GDP.PCAP.PP.CD?format=json&date=2025",
      "retrieved": "2026-11-22"
    },
    "government_effectiveness": {
      "value": 65.1127866,
      "year": 2025,
      "unit": "governance score, 0–100; broad descriptor",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/CHN/indicator/GOV_WGI_GE_SC?format=json&date=2025",
      "retrieved": "2026-11-22"
    },
    "rule_of_law": {
      "value": 51.5591046,
      "year": 2025,
      "unit": "governance score, 0–100; not a case-success probability",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/CHN/indicator/GOV_WGI_RL_SC?format=json&date=2025",
      "retrieved": "2026-11-22"
    },
    "regulatory_quality_proxy": {
      "value": 53.5889642,
      "year": 2025,
      "unit": "governance score, 0–100; incomplete proxy for business conditions",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/CHN/indicator/GOV_WGI_RQ_SC?format=json&date=2025",
      "retrieved": "2026-11-22"
    }
  },
  "political": {
    "numeric_values": null,
    "status": "needs_evidence",
    "institutional_constraint": "CPC-led personnel and supervisory accountability; do not impose competitive national multiparty elections.",
    "proposed_source": "vdem"
  },
  "culture": {
    "kinship": null,
    "informality": null,
    "public_private_separation": null,
    "status": "needs_evidence; no national cultural scores invented"
  },
  "architecture": [
    "CPC-led national/local supervision commissions investigate duty violations/crimes and impose applicable administrative discipline.",
    "Procuratorates review/prosecute criminal transfers; courts adjudicate. NAO/local audit bodies follow the constitutional executive audit structure."
  ],
  "implementation_constraints": [
    "Use the revised Supervision Law effective 1 June 2025; supervisory powers do not collapse prosecution and adjudication.",
    "Open Government Information rules provide disclosure with exceptions. Internal personnel/asset reporting is not equivalent to a public assets register."
  ],
  "evidence_notes": [
    "Formal reporting, confidentiality, recusal and anti-retaliation provisions are a baseline, not measured zero-retaliation guarantees. Statutory powers do not measure practical political autonomy."
  ],
  "tool_baseline": {
    "aca": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "merit": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "rotation": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "protection": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "declarations": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "conflicts": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "oversight": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "pay": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "penalties": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "disclosure": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "complaints": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "education": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    }
  },
  "sources": [
    "cn-law",
    "cn-audit",
    "cn-info"
  ],
  "pending": {
    "role_counts": null,
    "organization_counts_and_sizes": null,
    "membership_and_support_distributions": null,
    "resource_allocation_shares": null,
    "country_tool_costs": null,
    "procedure_calendar": null
  }
}
```

</details>

## Peru (PER)

| Indicator | Value | Year / unit | Evidence status / source |
| --- | --- | --- | --- |
| gdp_per_capita_ppp | 18816.1045522938 | 2025 · current international dollars; not household income | sourced_descriptor · [source](https://api.worldbank.org/v2/country/PER/indicator/NY.GDP.PCAP.PP.CD?format=json&date=2025) · retrieved 2026-11-22 |
| government_effectiveness | 49.4035596 | 2025 · governance score, 0–100; broad descriptor | sourced_descriptor · [source](https://api.worldbank.org/v2/country/PER/indicator/GOV_WGI_GE_SC?format=json&date=2025) · retrieved 2026-11-22 |
| rule_of_law | 47.7804439 | 2025 · governance score, 0–100; not a case-success probability | sourced_descriptor · [source](https://api.worldbank.org/v2/country/PER/indicator/GOV_WGI_RL_SC?format=json&date=2025) · retrieved 2026-11-22 |
| regulatory_quality_proxy | 57.5499416 | 2025 · governance score, 0–100; incomplete proxy for business conditions | sourced_descriptor · [source](https://api.worldbank.org/v2/country/PER/indicator/GOV_WGI_RQ_SC?format=json&date=2025) · retrieved 2026-11-22 |

Political/cultural mapping from `baseline.conditions`: 

| Condition | Initial value | Status |
| --- | --- | --- |
| civil_liberties | 65 | Sourced proxy · Freedom House 2026 CL / 60 |
| representation | 75 | Sourced proxy · Freedom House 2025 B / 16 |
| electoral_integrity | 83.33333333333333 | Sourced proxy · Freedom House 2025 A / 12 |
| kinship | 50 | Unmeasured cultural condition · neutral assumption |
| informality | 50 | Unmeasured cultural condition · neutral assumption |
| public_private_separation | 50 | Unmeasured cultural condition · neutral assumption |

Institutional nodes (simplified names and model functions):

| Node | Function |
| --- | --- |
| SIP / integrity offices | prevention |
| Specialized prosecutors | investigation |
| CGR control system | audit |
| Judiciary | decision |
| Political-finance oversight | integrity |
| Budget authority | budget |

Inherited policy evidence is reproduced in the complete country object below; observations and unquantified notes must not be read as numeric behavioral effectiveness.

<details><summary>Complete stored profile and inherited evidence</summary>

```json
{
  "iso3": "PER",
  "name": "Peru",
  "readiness": "initial evidence profile; not calibrated for simulation",
  "indicators": {
    "gdp_per_capita_ppp": {
      "value": 18816.1045522938,
      "year": 2025,
      "unit": "current international dollars; not household income",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/PER/indicator/NY.GDP.PCAP.PP.CD?format=json&date=2025",
      "retrieved": "2026-11-22"
    },
    "government_effectiveness": {
      "value": 49.4035596,
      "year": 2025,
      "unit": "governance score, 0–100; broad descriptor",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/PER/indicator/GOV_WGI_GE_SC?format=json&date=2025",
      "retrieved": "2026-11-22"
    },
    "rule_of_law": {
      "value": 47.7804439,
      "year": 2025,
      "unit": "governance score, 0–100; not a case-success probability",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/PER/indicator/GOV_WGI_RL_SC?format=json&date=2025",
      "retrieved": "2026-11-22"
    },
    "regulatory_quality_proxy": {
      "value": 57.5499416,
      "year": 2025,
      "unit": "governance score, 0–100; incomplete proxy for business conditions",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/PER/indicator/GOV_WGI_RQ_SC?format=json&date=2025",
      "retrieved": "2026-11-22"
    }
  },
  "political": {
    "numeric_values": null,
    "status": "needs_evidence",
    "institutional_constraint": "National and subnational political/administrative accountability are separate; exact calendars and authority still require scoping.",
    "proposed_source": "vdem"
  },
  "culture": {
    "kinship": null,
    "informality": null,
    "public_private_separation": null,
    "status": "needs_evidence; no national cultural scores invented"
  },
  "architecture": [
    "SIP within PCM coordinates prevention; CAN coordinates policy; distributed Integrity Offices implement internal arrangements.",
    "Ministerio Público specialized corruption prosecutors and criminal courts handle criminal cases. State Procuradurías are a distinct representation function.",
    "CGR/National Control System: audit and applicable administrative accountability; ONPE: political finance."
  ],
  "implementation_constraints": [
    "OECD records uneven municipal integrity capacity, turnover and coordination gaps. National rules do not imply uniform local delivery.",
    "Lobbying definitions exist, but OECD reports no dedicated oversight authority/public registry after amendments. Do not infer absence of all regulation."
  ],
  "evidence_notes": [
    "Reforms improve the existing Integrity Model, interests declarations and transparency framework; targets for future municipal coverage are not achieved counts."
  ],
  "tool_baseline": {
    "aca": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "merit": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "rotation": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "protection": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "declarations": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "conflicts": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "oversight": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "pay": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "penalties": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "disclosure": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "complaints": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "education": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    }
  },
  "sources": [
    "PER-oecd",
    "pe-economy"
  ],
  "pending": {
    "role_counts": null,
    "organization_counts_and_sizes": null,
    "membership_and_support_distributions": null,
    "resource_allocation_shares": null,
    "country_tool_costs": null,
    "procedure_calendar": null
  }
}
```

</details>

## Brazil (BRA)

| Indicator | Value | Year / unit | Evidence status / source |
| --- | --- | --- | --- |
| gdp_per_capita_ppp | 23433.2897595431 | 2025 · current international dollars; not household income | sourced_descriptor · [source](https://api.worldbank.org/v2/country/BRA/indicator/NY.GDP.PCAP.PP.CD?format=json&date=2025) · retrieved 2026-11-22 |
| government_effectiveness | 51.6145142 | 2025 · governance score, 0–100; broad descriptor | sourced_descriptor · [source](https://api.worldbank.org/v2/country/BRA/indicator/GOV_WGI_GE_SC?format=json&date=2025) · retrieved 2026-11-22 |
| rule_of_law | 50.6314613 | 2025 · governance score, 0–100; not a case-success probability | sourced_descriptor · [source](https://api.worldbank.org/v2/country/BRA/indicator/GOV_WGI_RL_SC?format=json&date=2025) · retrieved 2026-11-22 |
| regulatory_quality_proxy | 47.8892296 | 2025 · governance score, 0–100; incomplete proxy for business conditions | sourced_descriptor · [source](https://api.worldbank.org/v2/country/BRA/indicator/GOV_WGI_RQ_SC?format=json&date=2025) · retrieved 2026-11-22 |

Political/cultural mapping from `baseline.conditions`: 

| Condition | Initial value | Status |
| --- | --- | --- |
| civil_liberties | 71.66666666666667 | Sourced proxy · Freedom House 2026 CL / 60 |
| representation | 81.25 | Sourced proxy · Freedom House 2025 B / 16 |
| electoral_integrity | 83.33333333333333 | Sourced proxy · Freedom House 2025 A / 12 |
| kinship | 50 | Unmeasured cultural condition · neutral assumption |
| informality | 50 | Unmeasured cultural condition · neutral assumption |
| public_private_separation | 50 | Unmeasured cultural condition · neutral assumption |

Institutional nodes (simplified names and model functions):

| Node | Function |
| --- | --- |
| CGU / integrity offices | prevention |
| Police / prosecutors | investigation |
| TCU / public audit | audit |
| Courts | decision |
| Ombudsman system | integrity |
| Budget authority | budget |

Inherited policy evidence is reproduced in the complete country object below; observations and unquantified notes must not be read as numeric behavioral effectiveness.

<details><summary>Complete stored profile and inherited evidence</summary>

```json
{
  "iso3": "BRA",
  "name": "Brazil",
  "readiness": "initial evidence profile; not calibrated for simulation",
  "indicators": {
    "gdp_per_capita_ppp": {
      "value": 23433.2897595431,
      "year": 2025,
      "unit": "current international dollars; not household income",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/BRA/indicator/NY.GDP.PCAP.PP.CD?format=json&date=2025",
      "retrieved": "2026-11-22"
    },
    "government_effectiveness": {
      "value": 51.6145142,
      "year": 2025,
      "unit": "governance score, 0–100; broad descriptor",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/BRA/indicator/GOV_WGI_GE_SC?format=json&date=2025",
      "retrieved": "2026-11-22"
    },
    "rule_of_law": {
      "value": 50.6314613,
      "year": 2025,
      "unit": "governance score, 0–100; not a case-success probability",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/BRA/indicator/GOV_WGI_RL_SC?format=json&date=2025",
      "retrieved": "2026-11-22"
    },
    "regulatory_quality_proxy": {
      "value": 47.8892296,
      "year": 2025,
      "unit": "governance score, 0–100; incomplete proxy for business conditions",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/BRA/indicator/GOV_WGI_RQ_SC?format=json&date=2025",
      "retrieved": "2026-11-22"
    }
  },
  "political": {
    "numeric_values": null,
    "status": "needs_evidence",
    "institutional_constraint": "Federal, state and local jurisdictions and political-finance channels coexist; preserve jurisdiction tags.",
    "proposed_source": "vdem"
  },
  "culture": {
    "kinship": null,
    "informality": null,
    "public_private_separation": null,
    "status": "needs_evidence; no national cultural scores invented"
  },
  "architecture": [
    "CGU: federal executive integrity, internal control, discipline and ombudsman systems.",
    "Police and federal/state prosecutors feed competent courts; TCU supports congressional external control of federal resources."
  ],
  "implementation_constraints": [
    "Do not turn CGU or TCU into a single criminal investigator/prosecutor/court.",
    "OECD identifies incomplete strategic outcome baselines, risk analysis and evidence of conflict-of-interest follow-up. Missing evidence is not zero real compliance."
  ],
  "evidence_notes": [
    "The 2025–27 integrity plan, conflict/financial declaration arrangements, access-information law and reporting systems already exist. Improvements target coverage, verification and follow-through."
  ],
  "tool_baseline": {
    "aca": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "merit": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "rotation": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "protection": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "declarations": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "conflicts": {
      "status": "existing_with_documented_scope_gap",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "oversight": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "pay": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "penalties": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "disclosure": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "complaints": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "education": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    }
  },
  "sources": [
    "BRA-oecd",
    "br-cgu",
    "br-tcu"
  ],
  "pending": {
    "role_counts": null,
    "organization_counts_and_sizes": null,
    "membership_and_support_distributions": null,
    "resource_allocation_shares": null,
    "country_tool_costs": null,
    "procedure_calendar": null
  }
}
```

</details>

## United States (USA)

| Indicator | Value | Year / unit | Evidence status / source |
| --- | --- | --- | --- |
| gdp_per_capita_ppp | 90026.5163005744 | 2025 · current international dollars; not household income | sourced_descriptor · [source](https://api.worldbank.org/v2/country/USA/indicator/NY.GDP.PCAP.PP.CD?format=json&date=2025) · retrieved 2026-11-22 |
| government_effectiveness | 76.7214861 | 2025 · governance score, 0–100; broad descriptor | sourced_descriptor · [source](https://api.worldbank.org/v2/country/USA/indicator/GOV_WGI_GE_SC?format=json&date=2025) · retrieved 2026-11-22 |
| rule_of_law | 71.672083 | 2025 · governance score, 0–100; not a case-success probability | sourced_descriptor · [source](https://api.worldbank.org/v2/country/USA/indicator/GOV_WGI_RL_SC?format=json&date=2025) · retrieved 2026-11-22 |
| regulatory_quality_proxy | 72.8150032 | 2025 · governance score, 0–100; incomplete proxy for business conditions | sourced_descriptor · [source](https://api.worldbank.org/v2/country/USA/indicator/GOV_WGI_RQ_SC?format=json&date=2025) · retrieved 2026-11-22 |

Political/cultural mapping from `baseline.conditions`: 

| Condition | Initial value | Status |
| --- | --- | --- |
| civil_liberties | 81.66666666666667 | Sourced proxy · Freedom House 2026 CL / 60 |
| representation | 87.5 | Sourced proxy · Freedom House 2025 B / 16 |
| electoral_integrity | 91.66666666666667 | Sourced proxy · Freedom House 2025 A / 12 |
| kinship | 50 | Unmeasured cultural condition · neutral assumption |
| informality | 50 | Unmeasured cultural condition · neutral assumption |
| public_private_separation | 50 | Unmeasured cultural condition · neutral assumption |

Institutional nodes (simplified names and model functions):

| Node | Function |
| --- | --- |
| OGE / agency ethics | prevention |
| Agency inspectors general | audit |
| DOJ / investigators | investigation |
| Federal / state courts | decision |
| OSC / personnel channels | integrity |
| GAO external audit | audit |
| Budget authority | budget |

Inherited policy evidence is reproduced in the complete country object below; observations and unquantified notes must not be read as numeric behavioral effectiveness.

<details><summary>Complete stored profile and inherited evidence</summary>

```json
{
  "iso3": "USA",
  "name": "United States",
  "readiness": "initial evidence profile; not calibrated for simulation",
  "indicators": {
    "gdp_per_capita_ppp": {
      "value": 90026.5163005744,
      "year": 2025,
      "unit": "current international dollars; not household income",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/USA/indicator/NY.GDP.PCAP.PP.CD?format=json&date=2025",
      "retrieved": "2026-11-22"
    },
    "government_effectiveness": {
      "value": 76.7214861,
      "year": 2025,
      "unit": "governance score, 0–100; broad descriptor",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/USA/indicator/GOV_WGI_GE_SC?format=json&date=2025",
      "retrieved": "2026-11-22"
    },
    "rule_of_law": {
      "value": 71.672083,
      "year": 2025,
      "unit": "governance score, 0–100; not a case-success probability",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/USA/indicator/GOV_WGI_RL_SC?format=json&date=2025",
      "retrieved": "2026-11-22"
    },
    "regulatory_quality_proxy": {
      "value": 72.8150032,
      "year": 2025,
      "unit": "governance score, 0–100; incomplete proxy for business conditions",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/USA/indicator/GOV_WGI_RQ_SC?format=json&date=2025",
      "retrieved": "2026-11-22"
    }
  },
  "political": {
    "numeric_values": null,
    "status": "needs_evidence",
    "institutional_constraint": "Federal/state/local elections, appointments and agency authority require separate procedures; no universal national control chain.",
    "proposed_source": "vdem"
  },
  "culture": {
    "kinship": null,
    "informality": null,
    "public_private_separation": null,
    "status": "needs_evidence; no national cultural scores invented"
  },
  "architecture": [
    "OGE/agency ethics offices: executive ethics; agency inspectors general: audit/investigation/referral.",
    "FBI/competent investigators and DOJ/U.S. Attorneys feed courts; GAO provides federal external audit.",
    "OSC wrongdoing-disclosure and retaliation/personnel-practice functions are distinct; state/local systems coexist."
  ],
  "implementation_constraints": [
    "No single all-purpose national ACA. Federal jurisdiction over state/local misconduct requires a legal basis.",
    "Federal disclosure, reporting and merit rules do not establish identical coverage for every private worker, contractor or intelligence role. Detailed 2026 changes require targeted checks."
  ],
  "evidence_notes": [
    "OECD documents strategy cost/monitoring and integrity-data gaps; these do not imply no institutions or zero integrity."
  ],
  "tool_baseline": {
    "aca": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "merit": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "rotation": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "protection": {
      "status": "existing_with_documented_scope_gap",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "declarations": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "conflicts": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "oversight": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "pay": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "penalties": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "disclosure": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "complaints": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "education": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    }
  },
  "sources": [
    "USA-oecd",
    "us-doj",
    "us-osc",
    "us-oig"
  ],
  "pending": {
    "role_counts": null,
    "organization_counts_and_sizes": null,
    "membership_and_support_distributions": null,
    "resource_allocation_shares": null,
    "country_tool_costs": null,
    "procedure_calendar": null
  }
}
```

</details>

## Germany (DEU)

| Indicator | Value | Year / unit | Evidence status / source |
| --- | --- | --- | --- |
| gdp_per_capita_ppp | 75406.6888111618 | 2025 · current international dollars; not household income | sourced_descriptor · [source](https://api.worldbank.org/v2/country/DEU/indicator/NY.GDP.PCAP.PP.CD?format=json&date=2025) · retrieved 2026-11-22 |
| government_effectiveness | 82.8363275 | 2025 · governance score, 0–100; broad descriptor | sourced_descriptor · [source](https://api.worldbank.org/v2/country/DEU/indicator/GOV_WGI_GE_SC?format=json&date=2025) · retrieved 2026-11-22 |
| rule_of_law | 85.067519 | 2025 · governance score, 0–100; not a case-success probability | sourced_descriptor · [source](https://api.worldbank.org/v2/country/DEU/indicator/GOV_WGI_RL_SC?format=json&date=2025) · retrieved 2026-11-22 |
| regulatory_quality_proxy | 76.4294022 | 2025 · governance score, 0–100; incomplete proxy for business conditions | sourced_descriptor · [source](https://api.worldbank.org/v2/country/DEU/indicator/GOV_WGI_RQ_SC?format=json&date=2025) · retrieved 2026-11-22 |

Political/cultural mapping from `baseline.conditions`: 

| Condition | Initial value | Status |
| --- | --- | --- |
| civil_liberties | 91.66666666666667 | Sourced proxy · Freedom House 2026 CL / 60 |
| representation | 100 | Sourced proxy · Freedom House 2025 B / 16 |
| electoral_integrity | 100 | Sourced proxy · Freedom House 2025 A / 12 |
| kinship | 50 | Unmeasured cultural condition · neutral assumption |
| informality | 50 | Unmeasured cultural condition · neutral assumption |
| public_private_separation | 50 | Unmeasured cultural condition · neutral assumption |

Institutional nodes (simplified names and model functions):

| Node | Function |
| --- | --- |
| Federal / Land prevention | prevention |
| Land police / prosecutors | investigation |
| Federal / Land audit | audit |
| Courts | decision |
| Reporting / personnel channels | integrity |
| Budget authority | budget |

Inherited policy evidence is reproduced in the complete country object below; observations and unquantified notes must not be read as numeric behavioral effectiveness.

<details><summary>Complete stored profile and inherited evidence</summary>

```json
{
  "iso3": "DEU",
  "name": "Germany",
  "readiness": "initial evidence profile; not calibrated for simulation",
  "indicators": {
    "gdp_per_capita_ppp": {
      "value": 75406.6888111618,
      "year": 2025,
      "unit": "current international dollars; not household income",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/DEU/indicator/NY.GDP.PCAP.PP.CD?format=json&date=2025",
      "retrieved": "2026-11-22"
    },
    "government_effectiveness": {
      "value": 82.8363275,
      "year": 2025,
      "unit": "governance score, 0–100; broad descriptor",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/DEU/indicator/GOV_WGI_GE_SC?format=json&date=2025",
      "retrieved": "2026-11-22"
    },
    "rule_of_law": {
      "value": 85.067519,
      "year": 2025,
      "unit": "governance score, 0–100; not a case-success probability",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/DEU/indicator/GOV_WGI_RL_SC?format=json&date=2025",
      "retrieved": "2026-11-22"
    },
    "regulatory_quality_proxy": {
      "value": 76.4294022,
      "year": 2025,
      "unit": "governance score, 0–100; incomplete proxy for business conditions",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/DEU/indicator/GOV_WGI_RQ_SC?format=json&date=2025",
      "retrieved": "2026-11-22"
    }
  },
  "political": {
    "numeric_values": null,
    "status": "needs_evidence",
    "institutional_constraint": "Federal/Länder jurisdictions and administrative appointments; retain decentralized authority rather than inventing a national corruption prosecutor.",
    "proposed_source": "vdem"
  },
  "culture": {
    "kinship": null,
    "informality": null,
    "public_private_separation": null,
    "status": "needs_evidence; no national cultural scores invented"
  },
  "architecture": [
    "Federal administrative prevention and decentralized conflict oversight; Länder police/prosecutors handle most corruption cases; courts adjudicate.",
    "BKA coordinates information. Federal and Länder audit bodies provide separate financial oversight."
  ],
  "implementation_constraints": [
    "A federal prevention directive, multiple-eyes controls, risk assessment, conduct rules and protected reporting channels are existing safeguards.",
    "OECD strategic-framework/data gaps and lack of uniform asset declarations are not evidence of no integrity protection. Detailed state procedures remain to be mapped."
  ],
  "evidence_notes": [
    "Use risk-based safeguards and scope-sensitive disclosure; a reform need not copy an all-purpose ACA or uniform public asset-register model."
  ],
  "tool_baseline": {
    "aca": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "merit": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "rotation": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "protection": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "declarations": {
      "status": "existing_with_documented_scope_gap",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "conflicts": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "oversight": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "pay": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "penalties": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "disclosure": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "complaints": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "education": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    }
  },
  "sources": [
    "DEU-oecd",
    "de-prevention",
    "de-audit"
  ],
  "pending": {
    "role_counts": null,
    "organization_counts_and_sizes": null,
    "membership_and_support_distributions": null,
    "resource_allocation_shares": null,
    "country_tool_costs": null,
    "procedure_calendar": null
  }
}
```

</details>

## Italy (ITA)

| Indicator | Value | Year / unit | Evidence status / source |
| --- | --- | --- | --- |
| gdp_per_capita_ppp | 62802.5108384276 | 2025 · current international dollars; not household income | sourced_descriptor · [source](https://api.worldbank.org/v2/country/ITA/indicator/NY.GDP.PCAP.PP.CD?format=json&date=2025) · retrieved 2026-11-22 |
| government_effectiveness | 71.2690275 | 2025 · governance score, 0–100; broad descriptor | sourced_descriptor · [source](https://api.worldbank.org/v2/country/ITA/indicator/GOV_WGI_GE_SC?format=json&date=2025) · retrieved 2026-11-22 |
| rule_of_law | 68.2753091 | 2025 · governance score, 0–100; not a case-success probability | sourced_descriptor · [source](https://api.worldbank.org/v2/country/ITA/indicator/GOV_WGI_RL_SC?format=json&date=2025) · retrieved 2026-11-22 |
| regulatory_quality_proxy | 65.7903769 | 2025 · governance score, 0–100; incomplete proxy for business conditions | sourced_descriptor · [source](https://api.worldbank.org/v2/country/ITA/indicator/GOV_WGI_RQ_SC?format=json&date=2025) · retrieved 2026-11-22 |

Political/cultural mapping from `baseline.conditions`: 

| Condition | Initial value | Status |
| --- | --- | --- |
| civil_liberties | 86.66666666666667 | Sourced proxy · Freedom House 2026 CL / 60 |
| representation | 87.5 | Sourced proxy · Freedom House 2025 B / 16 |
| electoral_integrity | 100 | Sourced proxy · Freedom House 2025 A / 12 |
| kinship | 50 | Unmeasured cultural condition · neutral assumption |
| informality | 50 | Unmeasured cultural condition · neutral assumption |
| public_private_separation | 50 | Unmeasured cultural condition · neutral assumption |

Institutional nodes (simplified names and model functions):

| Node | Function |
| --- | --- |
| ANAC / integrity managers | prevention |
| Financial police / prosecutors | investigation |
| Corte dei conti | audit |
| Ordinary courts | decision |
| Internal reporting channels | integrity |
| Budget authority | budget |

Inherited policy evidence is reproduced in the complete country object below; observations and unquantified notes must not be read as numeric behavioral effectiveness.

<details><summary>Complete stored profile and inherited evidence</summary>

```json
{
  "iso3": "ITA",
  "name": "Italy",
  "readiness": "initial evidence profile; not calibrated for simulation",
  "indicators": {
    "gdp_per_capita_ppp": {
      "value": 62802.5108384276,
      "year": 2025,
      "unit": "current international dollars; not household income",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/ITA/indicator/NY.GDP.PCAP.PP.CD?format=json&date=2025",
      "retrieved": "2026-11-22"
    },
    "government_effectiveness": {
      "value": 71.2690275,
      "year": 2025,
      "unit": "governance score, 0–100; broad descriptor",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/ITA/indicator/GOV_WGI_GE_SC?format=json&date=2025",
      "retrieved": "2026-11-22"
    },
    "rule_of_law": {
      "value": 68.2753091,
      "year": 2025,
      "unit": "governance score, 0–100; not a case-success probability",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/ITA/indicator/GOV_WGI_RL_SC?format=json&date=2025",
      "retrieved": "2026-11-22"
    },
    "regulatory_quality_proxy": {
      "value": 65.7903769,
      "year": 2025,
      "unit": "governance score, 0–100; incomplete proxy for business conditions",
      "status": "sourced_descriptor",
      "source": "https://api.worldbank.org/v2/country/ITA/indicator/GOV_WGI_RQ_SC?format=json&date=2025",
      "retrieved": "2026-11-22"
    }
  },
  "political": {
    "numeric_values": null,
    "status": "needs_evidence",
    "institutional_constraint": "National, regional and municipal implementation; judicial and accounting-liability routes must remain distinct.",
    "proposed_source": "vdem"
  },
  "culture": {
    "kinship": null,
    "informality": null,
    "public_private_separation": null,
    "status": "needs_evidence; no national cultural scores invented"
  },
  "architecture": [
    "ANAC: prevention, transparency and procurement oversight, alongside administration-level integrity managers.",
    "Guardia di Finanza and ordinary prosecutors feed criminal courts. Corte dei conti audit/accounting liability follows a separate route."
  ],
  "implementation_constraints": [
    "Protected reporting under Legislative Decree 24/2023 is an existing baseline with conditions for external escalation.",
    "The EC July 2026 chapter reports repeal/narrowing of relevant offences and January 2026 accounting-liability changes under challenge. Verify current law before assigning exact sanctions."
  ],
  "evidence_notes": [
    "OECD reports missing strategic outcome baselines/cost projections. Political conflict/lobbying coverage and practical justice capacity need separate treatment from formal adoption."
  ],
  "tool_baseline": {
    "aca": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "merit": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "rotation": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "protection": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "declarations": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "conflicts": {
      "status": "existing_with_documented_scope_gap",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "oversight": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "pay": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "penalties": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "disclosure": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "complaints": {
      "status": "existing_relevant_instrument",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    },
    "education": {
      "status": "not_scoped_not_absent",
      "numerical_strength": null,
      "detail": "Read country notes and source scope; this tag is not a national coverage/effectiveness score."
    }
  },
  "sources": [
    "ITA-oecd",
    "it-gdf",
    "it-reporting",
    "it-ec"
  ],
  "pending": {
    "role_counts": null,
    "organization_counts_and_sizes": null,
    "membership_and_support_distributions": null,
    "resource_allocation_shares": null,
    "country_tool_costs": null,
    "procedure_calendar": null
  }
}
```

</details>

## Policy-specific implementation costs and direct influence

Cost vectors are `[setup RU, recurring RU, staff PM]` normalized engineering coefficients consumed by the requirement function. They are not currency budgets. The cognitive map lists the exact element-specific maxima, half-life, delivery channel and contextual restrictions. A ceiling is not guaranteed uptake or a national treatment-effect estimate.

| Policy | Costs | Elements and maxima | Contexts / half-life |
| --- | --- | --- | --- |
| aca — Anti-corruption body | [0.12,0.025,0.035] | risk: 0.25; control: 0.15 | integrity, report, refuse, recruit, implementation, case, retaliation / 10 months |
| merit — Recruitment and promotion | [0.05,0.02,0.025] | norm: 0.12; control: 0.15 | recruit / 12 months |
| rotation — Staff rotation | [0.04,0.015,0.025] | norm: 0.1 | integrity, case / 8 months |
| protection — Protect reporting persons | [0.08,0.025,0.03] | control: 0.25; reportSafety: 0.35 | report, refuse / 8 months |
| declarations — Asset, liability and gift declarations | [0.09,0.025,0.03] | risk: 0.15 | integrity, report, refuse, recruit, implementation, case, retaliation / 10 months |
| conflicts — Conflict-of-interest disclosure | [0.06,0.018,0.025] | norm: 0.1; corruptControl: 0.25 | integrity, recruit, implementation / 10 months |
| oversight — Audits and investigations | [0.1,0.03,0.04] | risk: 0.3 | integrity, report, refuse, recruit, implementation, case, retaliation / 8 months |
| pay — Remuneration and incentives | [0.015,0.22,0.01] |  |  / 12 months |
| penalties — Financial penalties | [0.06,0.015,0.02] | risk: 0.4 | integrity, report, refuse, recruit, implementation, case, retaliation / 8 months |
| disclosure — Proactive public disclosure | [0.08,0.02,0.025] |  |  / 8 months |
| complaints — Reporting and complaints | [0.07,0.022,0.03] | control: 0.3; knowledge: 0.2 | report / 8 months |
| education — Awareness and education | [0.04,0.015,0.025] | attitude: 0.3; norm: 0.2; control: 0.25; knowledge: 0.35 | integrity, report, refuse, recruit, implementation, case, retaliation / 6 months |

```json
{
  "assumptions": {
    "roleComposition": "Provisional scaled representation; not national population percentages.",
    "centralAllocation": "Estimated central-versus-local allocation pattern, not measured budget shares.",
    "calendar": "Simplified relative electoral/appointment cycle; phase is a scenario assumption, not a forecast calendar.",
    "culture": "Unknown national cultural measures use a common neutral scenario prior of 50; editable.",
    "politics": "Freedom House CL (2026), electoral process and political participation (2025) rescaled as distinct dated proxies, not action probabilities.",
    "costs": "Normalized engineering assumptions for setup/recurring RU and staff-time requirements.",
    "mappings": "WGI, GDP and narrow OECD instrument observations inform bounded capacity/resource estimates; they are not corruption probabilities or comprehensive national effectiveness scores."
  },
  "cognitiveMap": {
    "aca": {
      "elements": {
        "risk": 0.25,
        "control": 0.15
      },
      "contexts": [
        "integrity",
        "report",
        "refuse",
        "recruit",
        "implementation",
        "case",
        "retaliation"
      ],
      "elementContexts": {
        "control": [
          "case",
          "report"
        ]
      },
      "halfLife": 10,
      "channel": "Communicated screening/inquiry and actual staff training",
      "structural": "Mandate, inquiry capacity, referrals and shared case work"
    },
    "merit": {
      "elements": {
        "norm": 0.12,
        "control": 0.15
      },
      "contexts": [
        "recruit"
      ],
      "halfLife": 12,
      "channel": "Experienced appointment/review procedure",
      "structural": "Actual selection and the competence of appointed staff"
    },
    "rotation": {
      "elements": {
        "norm": 0.1
      },
      "contexts": [
        "integrity",
        "case"
      ],
      "halfLife": 8,
      "channel": "Actual transfer and new workplace induction",
      "structural": "Changed staff locations and access; existing ties survive"
    },
    "protection": {
      "elements": {
        "control": 0.25,
        "reportSafety": 0.35
      },
      "contexts": [
        "report",
        "refuse"
      ],
      "halfLife": 8,
      "channel": "Personally experienced protection or failure",
      "structural": "Timely protection, staff work and actual victim costs"
    },
    "declarations": {
      "elements": {
        "risk": 0.15
      },
      "contexts": [
        "integrity",
        "report",
        "refuse",
        "recruit",
        "implementation",
        "case",
        "retaliation"
      ],
      "halfLife": 10,
      "channel": "Personally communicated verification",
      "structural": "Covered personal records used in real scrutiny"
    },
    "conflicts": {
      "elements": {
        "norm": 0.1,
        "corruptControl": 0.25
      },
      "contexts": [
        "integrity",
        "recruit",
        "implementation"
      ],
      "halfLife": 10,
      "channel": "Experienced conflict review or blocked exchange",
      "structural": "Records, applicable review and actual prevention"
    },
    "oversight": {
      "elements": {
        "risk": 0.3
      },
      "contexts": [
        "integrity",
        "report",
        "refuse",
        "recruit",
        "implementation",
        "case",
        "retaliation"
      ],
      "halfLife": 8,
      "channel": "Communicated audit/inquiry; never hidden audit truth",
      "structural": "Finite scrutiny, evidence quality and corrective work"
    },
    "pay": {
      "elements": {},
      "contexts": [],
      "halfLife": 12,
      "channel": "Actual pay receipts inform experienced financial security",
      "structural": "Conserved supplements and actual income/cost valuations; no honesty bonus"
    },
    "penalties": {
      "elements": {
        "risk": 0.4
      },
      "contexts": [
        "integrity",
        "report",
        "refuse",
        "recruit",
        "implementation",
        "case",
        "retaliation"
      ],
      "halfLife": 8,
      "channel": "Observed actual liability and collection",
      "structural": "Lawful liability, collectible resources and collection capacity"
    },
    "disclosure": {
      "elements": {},
      "contexts": [],
      "halfLife": 8,
      "channel": "Accessed publications enter ordinary credibility-weighted belief learning",
      "structural": "Real record visibility; no generic persuasion bonus"
    },
    "complaints": {
      "elements": {
        "control": 0.3,
        "knowledge": 0.2
      },
      "contexts": [
        "report"
      ],
      "halfLife": 8,
      "channel": "Encountered reporting instructions and actual intake",
      "structural": "Channel access, monetary cost and competent recipient"
    },
    "education": {
      "elements": {
        "attitude": 0.3,
        "norm": 0.2,
        "control": 0.25,
        "knowledge": 0.35
      },
      "contexts": [
        "integrity",
        "report",
        "refuse",
        "recruit",
        "implementation",
        "case",
        "retaliation"
      ],
      "halfLife": 6,
      "channel": "Delivered teaching/messages with a known source",
      "structural": "Funded setup, staff time, content delivery and coverage"
    },
    "experience": {
      "elements": {
        "risk": 0.2,
        "reportSafety": 0.15
      },
      "contexts": [
        "integrity",
        "report",
        "refuse",
        "recruit",
        "implementation",
        "case",
        "retaliation"
      ],
      "halfLife": 6,
      "channel": "Policy-independent personally accessed experience",
      "structural": "Ordinary accountability and life experience"
    }
  },
  "sharedBounds": {
    "attitude": 0.45,
    "norm": 0.45,
    "control": 0.5,
    "corruptControl": 0.5,
    "risk": 0.6,
    "knowledge": 0.6,
    "reportSafety": 0.6
  },
  "novelty": 0.7,
  "noveltyFloor": 0.05,
  "maintenance": 0.35,
  "reportingDefinitions": {
    "aca": {
      "output": "Screenings completed",
      "unit": "count",
      "conditions": [
        [
          "Relevant open case files",
          "count"
        ],
        [
          "Screening / inquiry staff capacity",
          "PM"
        ],
        [
          "Average mandate coverage",
          "%"
        ]
      ]
    },
    "merit": {
      "output": "Appointments completed",
      "unit": "count",
      "conditions": [
        [
          "Appointment criteria met, past 12 months",
          "%"
        ],
        [
          "Average staff competence",
          "%"
        ],
        [
          "Covered staffing scope",
          "%"
        ]
      ]
    },
    "rotation": {
      "output": "Staff transfers completed",
      "unit": "count",
      "conditions": [
        [
          "Closed-network continuity",
          "%"
        ],
        [
          "Current official staff",
          "count"
        ],
        [
          "Operating rotation capability",
          "%"
        ]
      ]
    },
    "protection": {
      "output": "Threats remedied",
      "unit": "count",
      "conditions": [
        [
          "Reported threats, past 12 months",
          "count"
        ],
        [
          "Expected reporting safety",
          "%"
        ],
        [
          "Operating protection capability",
          "%"
        ]
      ]
    },
    "declarations": {
      "output": "Reform verification notices",
      "unit": "count",
      "conditions": [
        [
          "Financial record completeness",
          "%"
        ],
        [
          "Covered declaration scope",
          "%"
        ],
        [
          "Operating verification capability",
          "%"
        ]
      ]
    },
    "conflicts": {
      "output": "Improper exchanges blocked",
      "unit": "count",
      "conditions": [
        [
          "Conflict-record quality",
          "%"
        ],
        [
          "Covered conflict-review scope",
          "%"
        ],
        [
          "Operating review capability",
          "%"
        ]
      ]
    },
    "oversight": {
      "output": "Investigations completed",
      "unit": "count",
      "conditions": [
        [
          "Audit / inquiry open files",
          "count"
        ],
        [
          "Audit / inquiry staff capacity",
          "PM"
        ],
        [
          "Operating scrutiny capability",
          "%"
        ]
      ]
    },
    "pay": {
      "output": "Net public pay delivered",
      "unit": "RU",
      "conditions": [
        [
          "Reliable adequate net pay",
          "%"
        ],
        [
          "Average official unmet-needs pressure",
          "%"
        ],
        [
          "Average net pay / living needs",
          "ratio"
        ]
      ]
    },
    "penalties": {
      "output": "Liability actually collected",
      "unit": "RU",
      "conditions": [
        [
          "Outstanding assessed liability",
          "RU"
        ],
        [
          "Officials’ expected accountability cost",
          "%"
        ],
        [
          "Operating collection capability",
          "%"
        ]
      ]
    },
    "disclosure": {
      "output": "Public-record delivery work",
      "unit": "PM",
      "conditions": [
        [
          "Public-record quality",
          "%"
        ],
        [
          "Covered disclosure scope",
          "%"
        ],
        [
          "Operating disclosure capability",
          "%"
        ]
      ]
    },
    "complaints": {
      "output": "Reports submitted",
      "unit": "count",
      "conditions": [
        [
          "Unresolved complaint files",
          "count"
        ],
        [
          "Experienced reporting knowledge",
          "%"
        ],
        [
          "Modeled reporting access",
          "%"
        ]
      ]
    },
    "education": {
      "output": "Reform teaching contacts",
      "unit": "count",
      "conditions": [
        [
          "Usable knowledge",
          "%"
        ],
        [
          "Perceived approval of lawful conduct",
          "%"
        ],
        [
          "Lawful-action capability",
          "%"
        ],
        [
          "Retained attitude influence",
          "%"
        ]
      ]
    }
  },
  "hybridEngineeringParameters": {
    "status": "Uncalibrated engineering assumptions; Peru calibration and pilot pending",
    "maintenanceShare": 0.02,
    "maintenanceCost": 0.1,
    "damageRate": 0.008,
    "repairEfficiency": 0.25,
    "rebuildWork": 2,
    "rebuildIncrement": 0.1,
    "attentionHalfLife": 6,
    "credibilityLearning": 0.04,
    "annualDepreciation": 0.08,
    "capitalOutputYears": 3,
    "taxAssessmentRate": 0.22,
    "backgroundCompliance": 0.85,
    "intermediateShare": 0.2,
    "explicitConsumptionShare": 0.35,
    "exportDemand": 60,
    "contactTime": 0.015,
    "contactIntensity": [
      0.65,
      0.85,
      0.2,
      0.2
    ],
    "orderExpiry": 6,
    "reserveMonths": 1.5,
    "transactionRetention": 1000
  }
}
```
