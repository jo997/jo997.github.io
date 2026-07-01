// Act or Hold: a small game about deciding when a robot should trust an
// uncertain prediction. You read a noisy sensor feed and a reported confidence
// (which is not always calibrated) and choose ACT or HOLD before the timer runs out.
(function () {
  var root = document.getElementById('uq-game');
  if (!root) return;

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (id) { return document.getElementById(id); };
  var canvas = $('g-canvas');
  var ctx = canvas.getContext('2d');

  var els = {
    score: $('g-score'), round: $('g-round'), streak: $('g-streak'), best: $('g-best'),
    trust: $('g-trust'), lives: $('g-lives'), scenario: $('g-scenario'),
    spread: $('g-spread'), spreadTag: $('g-spread-tag'), timer: $('g-timer'),
    conffill: $('g-conffill'), conf: $('g-conf'), bot: $('g-bot'),
    act: $('g-act'), hold: $('g-hold'), overlay: $('g-overlay'), result: $('g-result'),
    diffName: $('g-diffname')
  };

  var TEAL_FALLBACK = '#2dd4bf', VIOLET_FALLBACK = '#a78bfa';
  var IDLE_TEXT = 'Read the sensor spread and the reported confidence, then choose. Reported confidence can be wrong.';

  // Difficulty presets. Higher = noisier, more miscalibrated confidence, shorter
  // timer, fewer safety margins. Impossible drains trust every round and gives a
  // useless signal, so a run always ends: it cannot be won.
  var DIFF = {
    calm: { label: 'Calm', tag: 'a gentle warm-up', noiseBase: 0.10, noiseSpan: 0.54, ramp: 0.08, miscal: 0.10, miscalRamp: 0.15, timer: 8.5, timerMin: 5.5, timerRamp: 0.12, lives: 4, decay: 0 },
    clinical: { label: 'Clinical', tag: 'the intended challenge', noiseBase: 0.18, noiseSpan: 0.64, ramp: 0.18, miscal: 0.30, miscalRamp: 0.40, timer: 6.0, timerMin: 3.6, timerRamp: 0.22, lives: 3, decay: 0 },
    chaos: { label: 'Chaos', tag: 'confidence lies often', noiseBase: 0.30, noiseSpan: 0.66, ramp: 0.22, miscal: 0.55, miscalRamp: 0.40, timer: 4.2, timerMin: 2.4, timerRamp: 0.26, lives: 2, decay: 0 },
    impossible: { label: 'Impossible', tag: 'you will not survive', noiseBase: 0.50, noiseSpan: 0.49, ramp: 0.00, miscal: 1.00, miscalRamp: 0.00, timer: 2.2, timerMin: 1.5, timerRamp: 0.07, lives: 1, decay: 16, deadSignal: true }
  };
  var DIFF_ORDER = ['calm', 'clinical', 'chaos', 'impossible'];

  var S = {};

  function clamp(x, a, b) { return Math.max(a, Math.min(b, x)); }
  function gauss() {
    var u = 0, v = 0;
    while (!u) u = Math.random();
    while (!v) v = Math.random();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  }
  function cssVar(name, fallback) {
    var val = getComputedStyle(root).getPropertyValue(name).trim();
    return val || fallback;
  }
  function hexA(hex, a) {
    if (!hex || hex[0] !== '#' || hex.length < 7) return hex || 'rgba(45,212,191,' + a + ')';
    var r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
  }
  function bestKey() { return 'uqGameBest_' + S.diffKey; }
  function refreshBest() {
    S.best = Number(localStorage.getItem(bestKey()) || 0);
    els.best.textContent = S.best;
    if (els.diffName) els.diffName.textContent = DIFF[S.diffKey].label;
  }

  function resetAll() {
    var savedDiff = localStorage.getItem('uqGameDiff');
    var diffKey = DIFF[savedDiff] ? savedDiff : 'clinical';
    S = {
      phase: 'intro', diffKey: diffKey, diff: DIFF[diffKey],
      score: 0, round: 0, streak: 0, trust: 100,
      incidents: 0, maxIncidents: DIFF[diffKey].lives, missed: 0, assists: 0, avoided: 0,
      best: 0, cur: null, timeLeft: 0, timeMax: 0, revealTO: null, cw: 480, ch: 320
    };
  }
  resetAll();
  refreshBest();

  // ---- canvas sizing (crisp on hi-dpi) ----
  function sizeCanvas() {
    var w = canvas.clientWidth || 480;
    var h = canvas.clientHeight || 320;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    S.cw = w; S.ch = h;
    drawScene(S.phase === 'reveal');
  }
  window.addEventListener('resize', sizeCanvas);

  function centers() {
    var w = S.cw, h = S.ch;
    return {
      pred: { x: w * 0.40, y: h * 0.52 },
      alt: { x: w * 0.66, y: h * 0.40 },
      wrong: { x: w * 0.68, y: h * 0.66 }
    };
  }

  function crosshair(x, y, col, alpha) {
    ctx.globalAlpha = alpha == null ? 1 : alpha;
    ctx.strokeStyle = col; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x - 16, y); ctx.lineTo(x + 16, y);
    ctx.moveTo(x, y - 16); ctx.lineTo(x, y + 16);
    ctx.stroke();
    ctx.beginPath(); ctx.arc(x, y, 5.5, 0, 7); ctx.fillStyle = col; ctx.fill();
    ctx.globalAlpha = 1;
  }

  function drawScene(revealing) {
    var w = S.cw, h = S.ch;
    ctx.clearRect(0, 0, w, h);
    ctx.strokeStyle = 'rgba(45,212,191,0.06)'; ctx.lineWidth = 1;
    for (var gx = 0; gx <= w; gx += 34) { ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, h); ctx.stroke(); }
    for (var gy = 0; gy <= h; gy += 34) { ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(w, gy); ctx.stroke(); }

    var s = S.cur;
    if (!s) return;
    var C = centers();
    var teal = cssVar('--academic-accent', TEAL_FALLBACK);
    var violet = cssVar('--academic-accent-2', VIOLET_FALLBACK);
    var spread = 12 + s.noise * Math.min(w, h) * 0.44;

    for (var i = 0; i < 60; i++) {
      var toAlt = s.ambiguous && (i % 5 === 0);
      var c = toAlt ? C.alt : C.pred;
      var sp = toAlt ? spread * 0.7 : spread;
      var px = c.x + gauss() * sp;
      var py = c.y + gauss() * sp;
      ctx.fillStyle = toAlt ? hexA(violet, 0.6) : hexA(teal, 0.72);
      ctx.beginPath(); ctx.arc(px, py, 2.6, 0, 7); ctx.fill();
    }

    crosshair(C.pred.x, C.pred.y, teal, 1);
    if (s.ambiguous) crosshair(C.alt.x, C.alt.y, violet, 0.5);

    if (revealing) {
      var t = s.correct ? C.pred : (s.ambiguous ? C.alt : C.wrong);
      var col = s.correct ? '#22c55e' : '#ef4444';
      ctx.strokeStyle = col; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(t.x, t.y, 30, 0, 7); ctx.stroke();
      ctx.fillStyle = col; ctx.font = '600 14px system-ui, sans-serif';
      ctx.fillText('actual target', t.x - 42, t.y - 40);
    }
  }

  // ---- scenarios ----
  function pickLabel(noise, amb) {
    if (amb) return sample(['Two plausible targets', 'Ambiguous reaching gesture', 'Competing intentions']);
    if (noise > 0.66) return sample(['Tremor spike detected', 'Partial sensor dropout', 'Occluded camera view', 'Erratic hand motion']);
    if (noise > 0.42) return sample(['Hesitant movement', 'Drifting trajectory', 'Weak signal']);
    return sample(['Steady reaching motion', 'Clear grasp intent', 'Low-noise trajectory']);
  }
  function sample(a) { return a[Math.floor(Math.random() * a.length)]; }

  function makeScenario(round) {
    var D = S.diff;
    var ramp = Math.min(1, round / 16);
    var noise = clamp(D.noiseBase + Math.random() * D.noiseSpan + ramp * D.ramp, 0.1, 0.99);
    var reliability = D.deadSignal ? 0.5 : clamp(1 - noise * 0.92 - Math.random() * 0.08 + 0.04, 0.02, 0.98);
    var correct = Math.random() < reliability;
    var conf;
    var miscalP = Math.min(1, D.miscal + ramp * D.miscalRamp);
    if (Math.random() < miscalP) {
      conf = Math.random() < 0.68 ? 72 + Math.random() * 26 : 18 + Math.random() * 28;
    } else {
      conf = (1 - noise) * 100 + gauss() * 7;
    }
    conf = Math.round(clamp(conf, 2, 99));
    var ambiguous = noise > 0.5 && Math.random() < 0.5;
    return { noise: noise, correct: correct, conf: conf, ambiguous: ambiguous, label: pickLabel(noise, ambiguous) };
  }

  // ---- HUD ----
  function setBot(state) { els.bot.className = 'game-bot is-' + state; }
  function syncHUD() {
    els.score.textContent = S.score;
    els.round.textContent = S.round;
    els.streak.textContent = S.streak + (S.streak >= 3 ? ' (x' + mult() + ')' : '');
    els.trust.style.width = S.trust + '%';
    els.trust.style.background = S.trust < 30 ? '#ef4444' : (S.trust < 60 ? '#d97706' : 'var(--academic-accent)');
    var shields = '';
    for (var i = 0; i < S.maxIncidents; i++) {
      shields += '<span class="shield' + (i < S.maxIncidents - S.incidents ? ' on' : '') + '">◆</span>';
    }
    els.lives.innerHTML = shields;
  }
  function mult() { return 1 + Math.floor(S.streak / 3) * 0.5; }
  function enableButtons(on) { els.act.disabled = !on; els.hold.disabled = !on; }

  // ---- rounds ----
  function newRound() {
    var D = S.diff;
    S.round++;
    S.cur = makeScenario(S.round);
    var sp = Math.round(S.cur.noise * 100);
    els.scenario.textContent = S.cur.label;
    els.spread.style.width = sp + '%';
    els.spread.style.background = sp > 70 ? '#ef4444' : (sp > 45 ? '#d97706' : 'var(--academic-accent)');
    els.spreadTag.textContent = sp > 70 ? 'high' : (sp > 45 ? 'elevated' : 'low');
    els.conffill.style.width = S.cur.conf + '%';
    els.conf.textContent = S.cur.conf + '%';
    setBot('scan');
    els.result.setAttribute('data-kind', 'idle');
    els.result.innerHTML = '<span class="res-note">' + IDLE_TEXT + '</span>';

    S.timeMax = reduce ? Infinity : Math.max(D.timerMin, D.timer - S.round * D.timerRamp);
    S.timeLeft = S.timeMax;
    if (!isFinite(S.timeMax)) { els.timer.style.width = '100%'; els.timer.style.background = 'var(--academic-accent)'; }

    S.phase = 'playing';
    root.setAttribute('data-state', 'playing');
    syncHUD();
    drawScene(false);
    enableButtons(true);
  }

  function decide(action, timedOut) {
    if (S.phase !== 'playing') return;
    S.phase = 'reveal';
    root.setAttribute('data-state', 'reveal');
    enableButtons(false);

    var s = S.cur, delta = 0, outcome, note, bot;
    var good = (action === 'act' && s.correct) || (action === 'hold' && !s.correct);

    if (action === 'act') {
      if (s.correct) {
        delta = Math.round(100 * mult()); S.assists++; S.trust += 8; outcome = 'Assist delivered'; bot = 'act';
        note = 'Confident and correct. The device moved with the user.';
      } else {
        delta = -150; S.incidents++; S.trust -= 30; outcome = 'Unsafe assist'; bot = 'alarm';
        note = 'The robot acted on an unreliable estimate. This is the failure calibrated confidence is meant to prevent.';
      }
    } else {
      if (s.correct) {
        delta = -20; S.missed++; S.trust -= 3; outcome = timedOut ? 'Timed out, held' : 'Missed assist'; bot = 'hold';
        note = 'The prediction was actually right, so holding was overcautious here.';
      } else {
        delta = Math.round(60 * mult()); S.avoided++; S.trust += 5; outcome = timedOut ? 'Timed out, incident avoided' : 'Incident avoided'; bot = 'act';
        note = 'Good hold. The estimate was wrong and acting would have caused an incident.';
      }
    }

    if (S.diff.decay) S.trust -= S.diff.decay;
    S.streak = good ? S.streak + 1 : 0;
    S.score = Math.max(0, S.score + delta);
    S.trust = clamp(S.trust, 0, 100);
    syncHUD();
    setBot(bot);
    drawScene(true);

    els.result.setAttribute('data-kind', good ? 'good' : 'bad');
    els.result.innerHTML =
      '<span class="res-line"><b>' + outcome + '</b><em>' + (delta >= 0 ? '+' : '') + delta + '</em></span>' +
      '<span class="res-note">' + note + '</span>';

    var over = S.incidents >= S.maxIncidents || S.trust <= 0;
    clearTimeout(S.revealTO);
    S.revealTO = setTimeout(function () {
      if (over) gameOver(); else if (S.phase === 'reveal') newRound();
    }, over ? 1500 : 1650);
  }

  function gameOver() {
    S.phase = 'over';
    root.setAttribute('data-state', 'over');
    setBot('alarm');
    if (S.score > S.best) {
      S.best = S.score;
      localStorage.setItem(bestKey(), S.best);
      els.best.textContent = S.best;
    }
    showOver();
  }

  function rankTitle() {
    if (S.diffKey === 'impossible')
      return { t: 'Survived ' + S.round + ' rounds', d: 'Impossible cannot be beaten. The signal is useless and trust decays every round. This is how a robot fails when its uncertainty is meaningless.' };
    if (S.incidents >= S.maxIncidents && S.assists <= S.avoided)
      return { t: 'Reckless', d: 'Too many unsafe assists. Read the uncertainty before acting.' };
    if (S.missed >= (S.assists + 1) * 1.6)
      return { t: 'Overcautious', d: 'Safe, but you held on many reliable predictions.' };
    if (S.score >= S.best && S.best > 0)
      return { t: 'Well calibrated', d: 'A new best. Your calls tracked the real uncertainty.' };
    return { t: 'Calibrated enough', d: 'A fair balance between assisting and holding.' };
  }

  // ---- difficulty picker ----
  function pickerHTML() {
    var h = '<div class="diff-picker" role="group" aria-label="Difficulty">';
    for (var i = 0; i < DIFF_ORDER.length; i++) {
      var k = DIFF_ORDER[i], d = DIFF[k];
      h += '<button type="button" class="diff-btn' + (k === S.diffKey ? ' active' : '') + '" data-diff="' + k + '"><b>' + d.label + '</b><span>' + d.tag + '</span></button>';
    }
    return h + '</div>';
  }
  function bindPicker() {
    var btns = els.overlay.querySelectorAll('.diff-btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () {
        S.diffKey = this.getAttribute('data-diff');
        var all = els.overlay.querySelectorAll('.diff-btn');
        for (var j = 0; j < all.length; j++) all[j].classList.toggle('active', all[j] === this);
        refreshBest();
      });
    }
  }

  // ---- overlays ----
  function showIntro() {
    S.phase = 'intro';
    root.setAttribute('data-state', 'intro');
    setBot('scan');
    enableButtons(false);
    els.result.setAttribute('data-kind', 'idle');
    els.result.innerHTML = '<span class="res-note">' + IDLE_TEXT + '</span>';
    els.overlay.innerHTML =
      '<div class="ov-card">' +
      '<div class="academic-kicker">Interactive</div>' +
      '<h2>Act or Hold</h2>' +
      '<p>You are the safety layer of an assistive robot. Each round shows a noisy sensor estimate and a reported confidence. Choose <b>ACT</b> to assist or <b>HOLD</b> to wait. Acting on a wrong estimate causes a safety incident.</p>' +
      '<p class="ov-sub">Choose a difficulty</p>' +
      pickerHTML() +
      '<button type="button" class="game-btn act big" id="g-start"><span class="btn-label">Start</span><span class="btn-key">enter</span></button>' +
      '<p class="ov-fine">Keys: A to act, H to hold. Best score is saved per difficulty on this device.</p>' +
      '</div>';
    bindPicker();
    $('g-start').addEventListener('click', start);
  }

  function showOver() {
    var r = rankTitle();
    els.overlay.innerHTML =
      '<div class="ov-card">' +
      '<div class="academic-kicker">Run complete</div>' +
      '<h2>' + r.t + '</h2>' +
      '<p>' + r.d + '</p>' +
      '<div class="ov-stats">' +
      stat('Score', S.score) + stat('Best', S.best) + stat('Rounds', S.round) +
      stat('Assists', S.assists) + stat('Avoided', S.avoided) +
      stat('Missed', S.missed) + stat('Incidents', S.incidents) + stat('Level', DIFF[S.diffKey].label) +
      '</div>' +
      '<p class="ov-sub">Change difficulty</p>' +
      pickerHTML() +
      '<button type="button" class="game-btn act big" id="g-again"><span class="btn-label">Play again</span><span class="btn-key">enter</span></button>' +
      '</div>';
    bindPicker();
    $('g-again').addEventListener('click', start);
  }
  function stat(label, val) {
    return '<div class="ov-stat"><strong>' + val + '</strong><span>' + label + '</span></div>';
  }

  function start() {
    S.diff = DIFF[S.diffKey];
    S.maxIncidents = S.diff.lives;
    localStorage.setItem('uqGameDiff', S.diffKey);
    refreshBest();
    S.score = 0; S.round = 0; S.streak = 0; S.trust = 100;
    S.incidents = 0; S.missed = 0; S.assists = 0; S.avoided = 0;
    clearTimeout(S.revealTO);
    els.overlay.innerHTML = '';
    syncHUD();
    sizeCanvas();
    newRound();
  }

  // ---- input ----
  els.act.addEventListener('click', function () { decide('act', false); });
  els.hold.addEventListener('click', function () { decide('hold', false); });
  document.addEventListener('keydown', function (e) {
    var k = e.key.toLowerCase();
    if (S.phase === 'playing') {
      if (k === 'a') { e.preventDefault(); decide('act', false); }
      else if (k === 'h') { e.preventDefault(); decide('hold', false); }
    } else if (S.phase === 'intro' || S.phase === 'over') {
      if (k === 'enter' || k === ' ') { e.preventDefault(); start(); }
    } else if (S.phase === 'reveal') {
      if (k === 'enter' || k === ' ' || k === 'a' || k === 'h') {
        e.preventDefault();
        clearTimeout(S.revealTO);
        if (S.incidents >= S.maxIncidents || S.trust <= 0) gameOver(); else newRound();
      }
    }
  });

  // ---- animation / timer loop ----
  var last = 0;
  function frame(ts) {
    var dt = last ? (ts - last) / 1000 : 0;
    last = ts;
    if (S.phase === 'playing') {
      if (!reduce) drawScene(false);
      if (isFinite(S.timeMax)) {
        S.timeLeft -= dt;
        var f = clamp(S.timeLeft / S.timeMax, 0, 1);
        els.timer.style.width = (f * 100) + '%';
        els.timer.style.background = f < 0.3 ? '#ef4444' : (f < 0.6 ? '#d97706' : 'var(--academic-accent)');
        if (S.timeLeft <= 0) decide('hold', true);
      }
    }
    requestAnimationFrame(frame);
  }

  sizeCanvas();
  syncHUD();
  showIntro();
  requestAnimationFrame(frame);
})();
