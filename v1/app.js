'use strict';
(() => {
  const { Simulation, DEFAULTS, TYPES } = Antarkya;
  const $ = id => document.getElementById(id), form = $('settings');
  const colors = ['#238262', '#5f769f', '#bc8b38', '#9b6589'];
  let sim, running = false, timer, selected = null, dirty = false, transform;
  for (const [name, value] of Object.entries(DEFAULTS)) {
    const input = form.elements.namedItem(name); if (!input) continue;
    if (input.type === 'checkbox') input.checked = value; else input.value = value;
  }
  function readConfig() {
    const config = {};
    for (const [key, value] of Object.entries(DEFAULTS)) {
      const input = form.elements.namedItem(key);
      config[key] = input.type === 'checkbox' ? input.checked : typeof value === 'number' ? (input.value.trim() === '' ? NaN : Number(input.value)) : input.value;
    }
    return config;
  }
  function pause() { running = false; clearTimeout(timer); $('run').textContent = sim && sim.tick >= sim.config.steps ? 'Run complete' : 'Run simulation'; }
  function reset() {
    pause();
    try {
      const next = new Simulation(readConfig()); sim = next; selected = null; dirty = false;
      $('error').hidden = true; $('status').classList.remove('dirty'); render();
    } catch (e) { $('error').textContent = e.message; $('error').hidden = false; }
  }
  function runLoop() {
    if (!running) return;
    const start = performance.now();
    sim.step(); render();
    if (sim.tick >= sim.config.steps) { pause(); render(); return; }
    timer = setTimeout(runLoop, Math.max(0, 1000 / Number($('speed').value) - (performance.now() - start)));
  }
  $('run').onclick = () => {
    if (running) { pause(); render(); return; }
    if (sim.tick >= sim.config.steps) return;
    running = true; $('run').textContent = 'Pause'; runLoop();
  };
  $('step').onclick = () => { pause(); sim.step(); render(); };
  $('reset').onclick = reset;
  form.onsubmit = event => { event.preventDefault(); reset(); };
  form.oninput = () => { dirty = true; $('status').classList.add('dirty'); $('status').textContent = 'Settings changed · reset to apply'; };
  function fitCanvas(canvas) {
    const width = canvas.clientWidth, height = canvas.clientHeight, scale = window.devicePixelRatio || 1;
    if (canvas.width !== Math.round(width * scale) || canvas.height !== Math.round(height * scale)) {
      canvas.width = Math.round(width * scale); canvas.height = Math.round(height * scale);
    }
    const ctx = canvas.getContext('2d'); ctx.setTransform(scale, 0, 0, scale, 0, 0); ctx.clearRect(0, 0, width, height);
    return { ctx, width, height };
  }
  function world() {
    const { ctx, width, height } = fitCanvas($('world'));
    const pad = 14, sx = (width - 2 * pad) / sim.config.gridSize, sy = (height - 2 * pad) / sim.config.gridSize;
    transform = { sx, sy, pad };
    ctx.strokeStyle = '#e4e8dc'; ctx.lineWidth = 0.6;
    for (let p = 0; p <= sim.config.gridSize; p += 5) {
      ctx.beginPath(); ctx.moveTo(pad + p * sx, pad); ctx.lineTo(pad + p * sx, height - pad); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(pad, pad + p * sy); ctx.lineTo(width - pad, pad + p * sy); ctx.stroke();
    }
    ctx.strokeStyle = '#b88b6855'; ctx.lineWidth = 1;
    for (const tie of sim.links.values()) if (tie.count >= 3) {
      const a = sim.agents[tie.a], b = sim.agents[tie.b];
      ctx.beginPath(); ctx.moveTo(pad + a.x * sx, pad + a.y * sy); ctx.lineTo(pad + b.x * sx, pad + b.y * sy); ctx.stroke();
    }
    for (const a of sim.agents) {
      const x = pad + a.x * sx, y = pad + a.y * sy, r = a.type === 'Politician' ? 6 : 4;
      ctx.globalAlpha = a.blockedUntil > sim.tick ? 0.3 : 0.9;
      ctx.fillStyle = sim.isCorrupt(a) ? '#c25245' : '#238262'; ctx.beginPath();
      if (a.type === 'Citizen') ctx.arc(x, y, r, 0, Math.PI * 2);
      else if (a.type === 'Business') ctx.rect(x - r, y - r, r * 2, r * 2);
      else if (a.type === 'Official') { ctx.moveTo(x, y - r - 1); ctx.lineTo(x + r + 1, y + r); ctx.lineTo(x - r - 1, y + r); ctx.closePath(); }
      else { ctx.moveTo(x, y - r); ctx.lineTo(x + r, y); ctx.lineTo(x, y + r); ctx.lineTo(x - r, y); ctx.closePath(); }
      ctx.fill();
      if (selected === a.id) { ctx.globalAlpha = 1; ctx.strokeStyle = '#b98527'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(x, y, 10, 0, Math.PI * 2); ctx.stroke(); }
    }
    ctx.globalAlpha = 1;
  }
  $('world').onclick = event => {
    const bounds = $('world').getBoundingClientRect(), { pad, sx, sy } = transform;
    const x = event.clientX - bounds.left, y = event.clientY - bounds.top;
    let closest = null, distance = 20;
    for (const a of sim.agents) { const d = Math.hypot(pad + a.x * sx - x, pad + a.y * sy - y); if (d < distance) { distance = d; closest = a.id; } }
    selected = closest; render();
  };
  function chart() {
    const { ctx, width, height } = fitCanvas($('chart'));
    const left = 36, top = 12, plotW = width - left - 14, plotH = height - top - 27;
    const maxX = Math.max(sim.tick, 50);
    ctx.font = '11px system-ui'; ctx.fillStyle = '#657268'; ctx.lineWidth = 0.7;
    for (const percent of [0, 50, 100]) { const y = top + plotH * (1 - percent / 100);
      ctx.fillText(String(percent), 5, y + 4); ctx.strokeStyle = '#e4e8dc'; ctx.beginPath(); ctx.moveTo(left, y); ctx.lineTo(left + plotW, y); ctx.stroke(); }
    ctx.fillText('0', left, height - 4); ctx.fillText(String(maxX), left + plotW - 20, height - 4);
    ctx.strokeStyle = '#e1ac51'; ctx.lineWidth = 1;
    if (sim.config.electionInterval <= maxX) for (let tick = sim.config.electionInterval; tick <= sim.tick; tick += sim.config.electionInterval) {
      const x = left + tick / maxX * plotW; ctx.setLineDash([3, 5]); ctx.beginPath(); ctx.moveTo(x, top); ctx.lineTo(x, top + plotH); ctx.stroke();
    }
    ctx.setLineDash([]);
    const stride = Math.max(1, Math.floor(sim.history.length / 600));
    TYPES.forEach((type, index) => {
      ctx.strokeStyle = colors[index]; ctx.lineWidth = 1.8; ctx.beginPath(); let first = true;
      function point(row) { const counts = row.counts[type]; const x = left + row.step / maxX * plotW, y = top + plotH * (1 - (counts.total ? counts.corrupt / counts.total : 0));
        if (first) { ctx.moveTo(x, y); first = false; } else ctx.lineTo(x, y); }
      for (let i = 0; i < sim.history.length; i += stride) point(sim.history[i]);
      point(sim.history[sim.history.length - 1]); ctx.stroke();
    });
  }
  function render() {
    const row = sim.history[sim.history.length - 1];
    $('fraction').textContent = `${(row.fraction * 100).toFixed(1)}%`;
    $('population').textContent = `${row.corrupt} of ${sim.agents.length} agents`;
    $('exchanges').textContent = row.corruptExchanges.toLocaleString();
    $('extortions').textContent = row.extortionPayments.toLocaleString(); $('punishments').textContent = row.punishments.toLocaleString();
    const until = sim.config.electionInterval - sim.tick % sim.config.electionInterval;
    $('election').textContent = sim.tick > 0 && until === sim.config.electionInterval ? 'Election this round' : `Election in ${until} rounds`;
    $('demotions').textContent = `${sim.totals.demotions} demotions`;
    if (!dirty) $('status').textContent = `${sim.tick >= sim.config.steps ? 'Complete' : running ? 'Running' : sim.tick ? 'Paused' : 'Ready'} · round ${sim.tick} / ${sim.config.steps}`;
    $('run').disabled = sim.tick >= sim.config.steps; $('step').disabled = sim.tick >= sim.config.steps;
    $('phase').textContent = sim.campaign ? 'Campaign period' : 'Ordinary round'; $('phase').classList.toggle('campaign', sim.campaign);
    $('type-stats').innerHTML = TYPES.map((t, i) => `<div><span style="color:${colors[i]}">● ${t}</span><strong>${row.counts[t].corrupt} / ${row.counts[t].total} corrupt</strong></div>`).join('');
    const politicians = sim.agents.filter(a => a.type === 'Politician');
    $('support').innerHTML = politicians.length ? politicians.map(p => {
      const approval = sim.estimateSupport(p);
      return `<div class="support-row"><span>Politician ${p.id + 1}<br><span class="support-meta">Score ${p.score}</span></span><div class="support-bar"><i style="width:${approval === null ? 0 : approval * 100}%"></i></div><span>${approval === null ? 'N/A' : (approval * 100).toFixed(0) + '%'}</span></div>`;
    }).join('') + '<p class="hint">Bars show expected current approval. Election results are recorded in the log.</p>' : '<p class="hint">No politicians currently hold office.</p>';
    const events = sim.events.slice(-30).reverse();
    $('events').innerHTML = events.length ? events.map(e => `<div class="event"><b>Round ${e.step}</b><span>${e.message}</span></div>`).join('') : 'Events will appear as the simulation runs.';
    if (selected !== null) { const a = sim.agents[selected];
      $('agent-info').textContent = `${a.type} ${a.id + 1} · ${sim.isCorrupt(a) ? 'Corrupt' : 'Honest'} state · score ${a.score} / ${a.decisions} decisions · ${a.preference} preference · ${a.corruptActions} lifetime corrupt acts · ${a.coercedPayments} coerced payments · ${a.punishmentCount} sanctions${a.blockedUntil > sim.tick ? ' · Currently inactive' : ''}`;
    } else $('agent-info').textContent = 'Select an agent on the map.';
    world(); chart();
  }
  function download(text, extension, mime, label) {
    const url = URL.createObjectURL(new Blob([text], { type: mime })), link = document.createElement('a');
    link.href = url; link.download = `antarkya-${label}-round-${sim.tick}.${extension}`; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  const csvCell = v => `"${String(v ?? '').replaceAll('"', '""')}"`;
  function csv(rows, headers) { return '\uFEFF' + [headers, ...rows.map(r => headers.map(k => r[k]))].map(r => r.map(csvCell).join(',')).join('\r\n'); }
  $('json').onclick = () => download(JSON.stringify(sim.snapshot(), null, 2), 'json', 'application/json', 'full');
  $('csv').onclick = () => {
    const rows = sim.snapshot().agents.map(a => ({ modelVersion: '1.0.0', seed: sim.config.seed, step: sim.tick, ...a }));
    download(csv(rows, ['modelVersion', 'seed', 'step', 'id', 'type', 'state', 'x', 'y', 'preference', 'objective', 'subjective', 'objectiveCost', 'subjectiveCost', 'score', 'decisions', 'ratio', 'interactions', 'corruptActions', 'coercedPayments', 'punishmentCount', 'support']), 'csv', 'text/csv;charset=utf-8', 'agents');
  };
  $('history-csv').onclick = () => {
    const rows = sim.history.map(row => ({ modelVersion: '1.0.0', seed: sim.config.seed, ...row }));
    download(csv(rows, ['modelVersion', 'seed', 'step', 'corrupt', 'honest', 'fraction', 'encounters', 'opportunities', 'corruptExchanges', 'extortionPayments', 'punishments', 'demotions', 'networkTies', 'campaign']), 'csv', 'text/csv;charset=utf-8', 'history');
  };
  $('toggle-settings').onclick = () => { const closed = form.hidden; form.hidden = !closed; $('toggle-settings').setAttribute('aria-expanded', String(closed)); };
  form.hidden = window.matchMedia('(max-width: 700px)').matches;
  $('toggle-settings').setAttribute('aria-expanded', String(!form.hidden));
  new ResizeObserver(() => { if (sim) { world(); chart(); } }).observe($('world'));
  document.addEventListener('visibilitychange', () => { if (document.hidden && running) { pause(); render(); } });
  reset();
})();
