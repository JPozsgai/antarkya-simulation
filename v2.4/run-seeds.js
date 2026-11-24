/* AUDIT FILE — run-seeds.js
 * References: AK-RNG-01
 * See docs/audit/TECHNICAL.md and the line-linked full source in docs/audit/source/.
 * Documentation-only revision: execution is checked against the pinned pre-annotation AST.
 */

'use strict';
// Run identity is separate from initialization and from model event draws.
(function (root) {
  let serial = 0;

  /** [AK-RNG-01] newEventSeed
   * Implementation unit for Keyed probability, paired worlds and exact replay. Follow the reference IDs for its equations, assumptions and verification limits.
   */
  function newEventSeed(fill = (words) => root.crypto.getRandomValues(words)) {
    const words = new Uint32Array(4);
    fill(words);
    serial++;
    return (
      'events-' +
      Array.from(words, (n) => n.toString(16).padStart(8, '0')).join('') +
      '-' +
      serial.toString(36)
    );
  }

  /** [AK-RNG-01] prepareRun
   * Preserve exact replay seeds when requested and otherwise assign a fresh future-event identity without redrawing the starting society.
   */
  function prepareRun(config, reuseEventSeed = false, fill) {
    return { ...config, eventSeed: reuseEventSeed ? config.eventSeed : newEventSeed(fill) };
  }
  const api = { newEventSeed, prepareRun };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.AntarkyaRunSeeds = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
