/* AUDIT FILE — baseline.js
 * References: AK-COU-01, AK-VAL-02
 * See docs/audit/TECHNICAL.md and the line-linked full source in docs/audit/source/.
 * Documentation-only revision: execution is checked against the pinned pre-annotation AST.
 */

'use strict';
// Observations and explicitly estimated mappings are kept separate.
(function (root) {
  /** [AK-COU-01] clamp
   * Implementation unit for Country observations, proxies and uncertainty. Follow the reference IDs for its equations, assumptions and verification limits.
   */
  const clamp = (x, l = 0, h = 1) => Math.max(l, Math.min(h, x));
  const schema = 'antarkya.baseline.v1',
    months = 12,
    retrieved = '2026-11-23';
  // Freedom House: 2026 CL (0–60); 2025 Electoral Process A1–A3 (0–12)
  // and Pluralism/Participation B1–B4 (0–16). These are proxies, not event probabilities.
  const political = {
    NGA: { slug: 'nigeria', civil: 24, electoral: [2, 2, 2], participation: [3, 3, 1, 2] },
    ZAF: { slug: 'south-africa', civil: 47, electoral: [4, 4, 4], participation: [3, 4, 3, 4] },
    IDN: { slug: 'indonesia', civil: 28, electoral: [4, 4, 3], participation: [4, 3, 2, 2] },
    IND: { slug: 'india', civil: 31, electoral: [4, 4, 3], participation: [3, 3, 3, 2] },
    CHN: { slug: 'china', civil: 11, electoral: [0, 0, 0], participation: [0, 0, 0, 0] },
    PER: { slug: 'peru', civil: 39, electoral: [3, 4, 3], participation: [3, 4, 3, 2] },
    BRA: { slug: 'brazil', civil: 43, electoral: [3, 3, 4], participation: [4, 4, 2, 3] },
    USA: { slug: 'united-states', civil: 49, electoral: [4, 4, 3], participation: [4, 4, 3, 3] },
    DEU: { slug: 'germany', civil: 55, electoral: [4, 4, 4], participation: [4, 4, 4, 4] },
    ITA: { slug: 'italy', civil: 52, electoral: [4, 4, 4], participation: [4, 4, 3, 3] },
  };
  // OECD PII criteria fulfillment [regulations, practice], 2026 country notes.
  // Missing evidence is null. Zero criteria fulfillment is NOT zero real-world compliance.
  // These narrow instruments do not rate all national safeguards or individual integrity.
  const integrity = {
    PER: { conflicts: [89, 33], disclosure: [89, 92] },
    IDN: { conflicts: [100, 56], disclosure: [56, 58] },
    BRA: { conflicts: [100, 0], disclosure: [78, 62] },
    USA: { conflicts: [100, 89], disclosure: [67, 54] },
    DEU: { conflicts: [22, 11], disclosure: [89, 58] },
    ITA: { conflicts: [100, 22] },
  };
  const oecdUrls = {
    PER: 'peru_ed06008b-en.html',
    IDN: 'indonesia_f62cee7b.html',
    BRA: 'brazil_237acf05-en.html',
    USA: 'united-states_1d9a74d5-en.html',
    DEU: 'germany_d57a73fc-en.html',
    ITA: 'italy_78ff2b97-en.html',
  };

  /** [AK-COU-01] sources
   * Implementation unit for Country observations, proxies and uncertainty. Follow the reference IDs for its equations, assumptions and verification limits.
   */
  function sources(country) {
    const p = political[country],
      out = [
        {
          title: 'Freedom House 2026: civil liberties',
          url: 'https://freedomhouse.org/country/' + p.slug + '/freedom-world/2026',
        },
        {
          title: 'Freedom House 2025: electoral process and political participation',
          url: 'https://freedomhouse.org/country/' + p.slug + '/freedom-world/2025',
        },
      ];
    if (oecdUrls[country])
      out.push({
        title: 'OECD 2026: existing integrity instruments (criteria, not behavioral rates)',
        url:
          country === 'IDN'
            ? 'https://www.oecd.org/en/publications/2026/03/anti-corruption-and-integrity-outlook-2026-country-notes_b1df9263/indonesia_f62cee7b.html'
            : 'https://www.oecd.org/en/publications/anti-corruption-and-integrity-outlook-2026_0c8910f8-en/' +
              oecdUrls[country],
      });
    return out;
  }

  /** [AK-COU-01] conditions
   * Rescale distinct dated political proxies and keep unmeasured cultural fields as explicit neutral editable assumptions.
   */
  function conditions(country) {
    /** [AK-COU-01] sum
     * Local helper for conditions; its inputs and return value are part of the enclosing mechanism. Country observations, proxies and uncertainty.
     */
    const p = political[country],
      sum = (a) => a.reduce((x, y) => x + y, 0);
    return {
      civil_liberties: (100 * p.civil) / 60,
      representation: (100 * sum(p.participation)) / 16,
      electoral_integrity: (100 * sum(p.electoral)) / 12,
      kinship: 50,
      informality: 50,
      public_private_separation: 50,
    };
  }

  /** [AK-COU-01] organization
   * Map stored descriptors/narrow instrument observations to bounded provisional coverage/capability priors. Missing evidence is not absence of national safeguards.
   */
  function organization(country, env, tool, noise) {
    const ge = env.government_effectiveness / 100;
    let scope = 0.75,
      capacity = 0.12 + 0.65 * ge;
    const evidence = integrity[country]?.[tool];
    if (evidence) {
      // Conservative proxy mappings with a nonzero floor and a majority weight
      // on general capacity; a reporting gap must not erase existing safeguards.
      scope = 0.4 + (0.45 * evidence[0]) / 100;
      capacity = 0.75 * capacity + 0.25 * (0.15 + (0.65 * evidence[1]) / 100);
    }
    // Dated country notes establish limits to protection, not national effect sizes.
    // These coverage estimates are scenario assumptions, never legal guarantees.
    if (tool === 'protection' && country === 'NGA') scope = 0.4;
    if (tool === 'protection' && country === 'IND') scope = 0.45;
    return { scope, capacity: clamp(capacity + (noise - 0.5) * 0.22, 0.08, 0.9) };
  }

  /** [AK-VAL-02] fieldStatus
   * Implementation unit for Evidence, assumptions, gaps and change control. Follow the reference IDs for its equations, assumptions and verification limits.
   */
  function fieldStatus(key) {
    if (key === 'civil_liberties') return 'Sourced proxy · Freedom House 2026 CL / 60';
    if (key === 'representation') return 'Sourced proxy · Freedom House 2025 B / 16';
    if (key === 'electoral_integrity') return 'Sourced proxy · Freedom House 2025 A / 12';
    if (key === 'central_allocation') return 'Estimated allocation · editable';
    return 'Unmeasured cultural condition · neutral assumption';
  }
  const api = {
    schema,
    months,
    retrieved,
    political,
    integrity,
    conditions,
    organization,
    sources,
    fieldStatus,
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.AntarkyaBaseline = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
