/* Research-only isolated parameter injection. Production source remains byte-for-byte unchanged. */
"use strict";
const fs = require("node:fs"),
  path = require("node:path"),
  crypto = require("node:crypto");
const root = path.resolve(__dirname, "../..");
const files = [
  "model.js",
  "profiles.js",
  "config.js",
  "baseline.js",
  "adaptation.js",
  "reporting.js",
  "hybrid.js",
];
const sha = (s) => crypto.createHash("sha256").update(s).digest("hex");
let expectedHashes = null;
const bounds = {
  taxAssessmentRate: [0.05, 0.5],
  backgroundCompliance: [0, 1],
  annualDepreciation: [0, 0.2],
  capitalOutputYears: [1, 8],
  maintenanceShare: [0.005, 0.1],
  damageRate: [0, 0.03],
  repairEfficiency: [0.05, 1],
  attentionHalfLife: [1, 24],
  exportDemand: [0, 300],
  explicitConsumptionShare: [0, 1],
};
async function engine(overrides = {}) {
  for (const [k, v] of Object.entries(overrides)) {
    if (
      !bounds[k] ||
      !Number.isFinite(v) ||
      v < bounds[k][0] ||
      v > bounds[k][1]
    )
      throw Error("Unsupported research parameter " + k);
  }
  const source = Object.fromEntries(
    files.map((f) => [f, fs.readFileSync(path.join(root, f), "utf8")]),
  );
  if (!expectedHashes)
    expectedHashes = Object.fromEntries(
      files.map((f) => [
        f,
        sha(
          require("node:child_process").execFileSync(
            "git",
            ["show", require("./protocol.json").sourceCommit + ":" + f],
            { cwd: root, encoding: "utf8", maxBuffer: 2000000 },
          ),
        ),
      ]),
    );
  for (const f of files)
    if (sha(source[f]) !== expectedHashes[f])
      throw Error("Runtime differs from pinned release: " + f);
  const { ast } = await require("prettier").__debug.parse(source["hybrid.js"], {
    parser: "babel",
  });
  let target = null;
  function walk(n) {
    if (!n || typeof n !== "object") return;
    if (n.type === "VariableDeclarator" && n.id?.name === "parameters")
      target = n.init;
    for (const [k, v] of Object.entries(n))
      if (!["loc", "comments", "tokens"].includes(k)) {
        if (Array.isArray(v)) v.forEach(walk);
        else if (v && typeof v === "object") walk(v);
      }
  }
  walk(ast);
  if (
    target?.callee?.object?.name !== "Object" ||
    target.callee.property.name !== "freeze" ||
    target.arguments[0].type !== "ObjectExpression"
  )
    throw Error("Parameter declaration changed; re-audit injection.");
  const sources = { ...source };
  if (Object.keys(overrides).length)
    sources["hybrid.js"] =
      source["hybrid.js"].slice(0, target.start) +
      "Object.freeze(Object.assign(" +
      source["hybrid.js"].slice(
        target.arguments[0].start,
        target.arguments[0].end,
      ) +
      "," +
      JSON.stringify(overrides) +
      "))" +
      source["hybrid.js"].slice(target.end);
  const cache = {};
  function load(name) {
    if (!files.includes(name))
      throw Error("Unexpected research module " + name);
    if (cache[name]) return cache[name].exports;
    const m = (cache[name] = { exports: {} });
    new Function("require", "module", "exports", sources[name])(
      (p) => load(path.basename(p)),
      m,
      m.exports,
    );
    return m.exports;
  }
  const api = load("model.js");
  return {
    api,
    overrides,
    fingerprint: sha(JSON.stringify(overrides)),
    sourceHashes: Object.fromEntries(files.map((f) => [f, sha(source[f])])),
    transformedHybridSHA256: sha(sources["hybrid.js"]),
    method:
      "AST-located Object.freeze parameter initializer only; isolated CommonJS modules; no production file changes",
  };
}
module.exports = { engine, sha, bounds };
