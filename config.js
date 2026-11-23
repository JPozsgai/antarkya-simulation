/* AUDIT FILE — config.js
 * References: AK-POP-01, AK-COU-02, AK-REF-02, AK-GOV-01, AK-POL-ACA, AK-POL-MERIT, AK-POL-ROTATION, AK-POL-PROTECTION, AK-POL-DECLARATIONS, AK-POL-CONFLICTS, AK-POL-OVERSIGHT, AK-POL-PAY, AK-POL-PENALTIES, AK-POL-DISCLOSURE, AK-POL-COMPLAINTS, AK-POL-EDUCATION, AK-VAL-02
 * See docs/audit/TECHNICAL.md and the line-linked full source in docs/audit/source/.
 * Documentation-only revision: execution is checked against the pinned pre-annotation AST.
 */

'use strict';
(function (root) {
  const countries = {
    NGA: {
      counts: [635, 210, 130, 25],
      cycle: 48,
      firstReview: 24,
      mode: 'presidential',
      central: 0.7,
      nodes: [
        ['ICPC', 'prevention'],
        ['EFCC', 'investigation'],
        ['Federal audit', 'audit'],
        ['Justice and courts', 'decision'],
        ['Code of conduct function', 'integrity'],
        ['Budget authority', 'budget'],
      ],
    },
    ZAF: {
      counts: [610, 220, 145, 25],
      cycle: 60,
      firstReview: 36,
      mode: 'parliamentary',
      central: 0.55,
      nodes: [
        ['National integrity coordination', 'prevention'],
        ['Hawks / SAPS', 'investigation'],
        ['NPA / IDAC', 'prosecution'],
        ['AGSA', 'audit'],
        ['SIU civil route', 'civil'],
        ['Courts', 'decision'],
        ['Budget authority', 'budget'],
      ],
    },
    IDN: {
      counts: [625, 220, 130, 25],
      cycle: 60,
      firstReview: 36,
      mode: 'presidential',
      central: 0.65,
      nodes: [
        ['KPK', 'prevention'],
        ['Police / prosecutors', 'investigation'],
        ['BPK', 'audit'],
        ['Administrative integrity', 'integrity'],
        ['Courts', 'decision'],
        ['Budget authority', 'budget'],
      ],
    },
    IND: {
      counts: [650, 205, 120, 25],
      cycle: 60,
      firstReview: 36,
      mode: 'parliamentary',
      central: 0.5,
      nodes: [
        ['CVC / departmental vigilance', 'prevention'],
        ['CBI / state investigation', 'investigation'],
        ['Lokpal referral function', 'integrity'],
        ['CAG', 'audit'],
        ['Special judges', 'decision'],
        ['Budget authority', 'budget'],
      ],
    },
    CHN: {
      counts: [590, 235, 150, 25],
      cycle: 60,
      firstReview: 36,
      mode: 'appointment',
      central: 0.8,
      nodes: [
        ['Supervision commissions', 'prevention'],
        ['Duty-crime investigation', 'investigation'],
        ['Procuratorates', 'prosecution'],
        ['NAO / local audit', 'audit'],
        ['Courts', 'decision'],
        ['Personnel authorities', 'integrity'],
        ['Budget authority', 'budget'],
      ],
    },
    PER: {
      counts: [630, 210, 135, 25],
      cycle: 60,
      firstReview: 12,
      mode: 'presidential',
      central: 0.6,
      nodes: [
        ['SIP / integrity offices', 'prevention'],
        ['Specialized prosecutors', 'investigation'],
        ['CGR control system', 'audit'],
        ['Judiciary', 'decision'],
        ['Political-finance oversight', 'integrity'],
        ['Budget authority', 'budget'],
      ],
    },
    BRA: {
      counts: [600, 230, 145, 25],
      cycle: 48,
      firstReview: 12,
      mode: 'presidential',
      central: 0.55,
      nodes: [
        ['CGU / integrity offices', 'prevention'],
        ['Police / prosecutors', 'investigation'],
        ['TCU / public audit', 'audit'],
        ['Courts', 'decision'],
        ['Ombudsman system', 'integrity'],
        ['Budget authority', 'budget'],
      ],
    },
    USA: {
      counts: [570, 270, 135, 25],
      cycle: 48,
      firstReview: 24,
      mode: 'presidential',
      central: 0.45,
      nodes: [
        ['OGE / agency ethics', 'prevention'],
        ['Agency inspectors general', 'audit'],
        ['DOJ / investigators', 'investigation'],
        ['Federal / state courts', 'decision'],
        ['OSC / personnel channels', 'integrity'],
        ['GAO external audit', 'audit'],
        ['Budget authority', 'budget'],
      ],
    },
    DEU: {
      counts: [575, 255, 145, 25],
      cycle: 48,
      firstReview: 36,
      mode: 'parliamentary',
      central: 0.4,
      nodes: [
        ['Federal / Land prevention', 'prevention'],
        ['Land police / prosecutors', 'investigation'],
        ['Federal / Land audit', 'audit'],
        ['Courts', 'decision'],
        ['Reporting / personnel channels', 'integrity'],
        ['Budget authority', 'budget'],
      ],
    },
    ITA: {
      counts: [590, 245, 140, 25],
      cycle: 60,
      firstReview: 24,
      mode: 'parliamentary',
      central: 0.6,
      nodes: [
        ['ANAC / integrity managers', 'prevention'],
        ['Financial police / prosecutors', 'investigation'],
        ['Corte dei conti', 'audit'],
        ['Ordinary courts', 'decision'],
        ['Internal reporting channels', 'integrity'],
        ['Budget authority', 'budget'],
      ],
    },
  };
  const costs = {
    /* [AK-POL-ACA] Data definition; numeric values are explicit model priors unless separately sourced. */
    aca: [0.12, 0.025, 0.035],

    /* [AK-POL-MERIT] Data definition; numeric values are explicit model priors unless separately sourced. */
    merit: [0.05, 0.02, 0.025],

    /* [AK-POL-ROTATION] Data definition; numeric values are explicit model priors unless separately sourced. */
    rotation: [0.04, 0.015, 0.025],

    /* [AK-POL-PROTECTION] Data definition; numeric values are explicit model priors unless separately sourced. */
    protection: [0.08, 0.025, 0.03],

    /* [AK-POL-DECLARATIONS] Data definition; numeric values are explicit model priors unless separately sourced. */
    declarations: [0.09, 0.025, 0.03],

    /* [AK-POL-CONFLICTS] Data definition; numeric values are explicit model priors unless separately sourced. */
    conflicts: [0.06, 0.018, 0.025],

    /* [AK-POL-OVERSIGHT] Data definition; numeric values are explicit model priors unless separately sourced. */
    oversight: [0.1, 0.03, 0.04],

    /* [AK-POL-PAY] Data definition; numeric values are explicit model priors unless separately sourced. */
    pay: [0.015, 0.22, 0.01],

    /* [AK-POL-PENALTIES] Data definition; numeric values are explicit model priors unless separately sourced. */
    penalties: [0.06, 0.015, 0.02],

    /* [AK-POL-DISCLOSURE] Data definition; numeric values are explicit model priors unless separately sourced. */
    disclosure: [0.08, 0.02, 0.025],

    /* [AK-POL-COMPLAINTS] Data definition; numeric values are explicit model priors unless separately sourced. */
    complaints: [0.07, 0.022, 0.03],

    /* [AK-POL-EDUCATION] Data definition; numeric values are explicit model priors unless separately sourced. */
    education: [0.04, 0.015, 0.025],
  };
  // These values are visible scenario assumptions, not empirical country scores.
  const assumptions = {
    roleComposition: 'Provisional scaled representation; not national population percentages.',
    centralAllocation:
      'Estimated central-versus-local allocation pattern, not measured budget shares.',
    calendar:
      'Simplified relative electoral/appointment cycle; phase is a scenario assumption, not a forecast calendar.',
    culture:
      'Unknown national cultural measures use a common neutral scenario prior of 50; editable.',
    politics:
      'Freedom House CL (2026), electoral process and political participation (2025) rescaled as distinct dated proxies, not action probabilities.',
    costs: 'Normalized engineering assumptions for setup/recurring RU and staff-time requirements.',
    mappings:
      'WGI, GDP and narrow OECD instrument observations inform bounded capacity/resource estimates; they are not corruption probabilities or comprehensive national effectiveness scores.',
  };
  const api = { countries, costs, assumptions };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.AntarkyaConfig = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
