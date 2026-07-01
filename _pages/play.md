---
layout: page
permalink: /play/
title: play
nav: true
nav_order: 4
description: "Act or Hold, a small game about deciding when a robot should trust an uncertain prediction."
---

<script>if(!(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)){document.documentElement.classList.add('reveal-on');}</script>
<link rel="stylesheet" href="{{ '/assets/css/academic.css' | relative_url }}">

<div class="academic-page">
  <section class="academic-hero">
    <div class="signal-orbit" aria-hidden="true"><span></span><span></span><span></span></div>
    <div class="academic-kicker">Interactive demo</div>
    <h1>Act or Hold.</h1>
    <p class="academic-lead">A small game built from my research on when a robot should trust an uncertain prediction. You are the safety layer of an assistive robot. Read the noisy sensor estimate and the reported confidence, then decide whether to act or wait. The reported confidence is not always calibrated, so keep an eye on the spread.</p>
  </section>

  <section class="game-wrap">
    <div class="game" id="uq-game" data-state="intro">
      <div class="game-hud">
        <div class="hud-stat"><span>Score</span><strong id="g-score">0</strong></div>
        <div class="hud-stat"><span>Round</span><strong id="g-round">0</strong></div>
        <div class="hud-stat"><span>Streak</span><strong id="g-streak">0</strong></div>
        <div class="hud-stat"><span>Best</span><strong id="g-best">0</strong></div>
        <div class="hud-stat"><span>Level</span><strong id="g-diffname" class="hud-level">Clinical</strong></div>
        <div class="hud-trust"><span>Trust</span><div class="trust-bar"><i id="g-trust" style="width:100%"></i></div></div>
        <div class="hud-lives" id="g-lives" aria-label="Safety margin"></div>
      </div>

      <div class="game-board">
        <div class="game-stage">
          <div class="stage-sensor">
            <div class="sensor-head">
              <span class="scenario" id="g-scenario">Sensor feed</span>
              <span class="spread-chip">uncertainty <b id="g-spread-tag">&hellip;</b></span>
            </div>
            <canvas id="g-canvas" aria-label="Noisy sensor estimate"></canvas>
            <div class="spread-meter"><span>sensor spread</span><div class="meter"><i id="g-spread" style="width:40%"></i></div></div>
            <p class="cue-hint">Tight, low spread means a reliable estimate. Wide, high spread means high uncertainty.</p>
          </div>

          <div class="stage-side">
            <div class="game-bot scan idle" id="g-bot" aria-hidden="true">
              <div class="as-stage">
                <div class="gate-bot"><span class="gate-eye"></span><span class="gate-eye"></span></div>
                <div class="as-arm"><span class="as-hand"></span></div>
                <div class="as-target"></div>
              </div>
            </div>
            <div class="conf-block">
              <div class="gate-track"><div class="gate-fill" id="g-conffill" style="width:0%"></div><div class="gate-threshold" style="left:64%"><span>act line</span></div></div>
              <div class="conf-num"><strong id="g-conf">&hellip;</strong><span>reported confidence</span></div>
              <p class="cue-hint">The model's own claim. It can be miscalibrated, so a high number is not proof on its own. The act line marks where confidence would justify acting if it were well calibrated.</p>
            </div>
            <div class="timer-wrap"><i id="g-timer" style="width:100%"></i></div>
          </div>
        </div>

        <div class="game-actions">
          <button type="button" class="game-btn hold" id="g-hold" disabled><span class="btn-label">HOLD</span><span class="btn-key">press H</span></button>
          <button type="button" class="game-btn act" id="g-act" disabled><span class="btn-label">ACT</span><span class="btn-key">press A</span></button>
        </div>

        <div class="game-result" id="g-result" data-kind="idle" aria-live="polite"><span class="res-note">Read the sensor spread and the reported confidence, then choose.</span></div>

        <div class="game-overlay" id="g-overlay"></div>
      </div>

      <div class="game-legend">
        <div class="legend-card"><span class="legend-tag">Sensor spread</span><p>The dot scatter and the spread bar. A tight cluster is a reliable estimate. A wide scatter is high uncertainty.</p></div>
        <div class="legend-card"><span class="legend-tag">Reported confidence</span><p>The model's stated confidence. It is sometimes inflated, so a high number alone is not enough to act.</p></div>
        <div class="legend-card act"><span class="legend-tag">When to ACT</span><p>The cluster is tight, the spread is low, and there is one clear target. Assisting is worth it.</p></div>
        <div class="legend-card hold"><span class="legend-tag">When to HOLD</span><p>The spread is high, the confidence looks inflated, or two targets compete. Wait for a safer moment.</p></div>
      </div>

      <p class="game-note">Scoring rewards calibrated calls. Assisting on a correct prediction earns points and builds trust, a wrong assist costs a safety incident, holding on a wrong prediction avoids one, and holding on a correct prediction is a missed assist. Difficulty sets the noise, how often confidence lies, the timer, and how many incidents end the run.</p>
    </div>
  </section>

  <section class="academic-section">
    <div class="academic-section-heading"><h2>How this connects to my research</h2></div>
    <p>A real assistive robot faces exactly this choice. Acting on a wrong prediction can cause a safety incident, while holding too often means the person never gets help. The reported confidence of a model is not always trustworthy, so the decision has to account for how uncertain the underlying estimate really is. Calibrated confidence is what turns a single act or hold threshold into something a clinician can rely on, which is the core of my work on <a href="{{ '/research/' | relative_url }}">reliable human intention prediction</a>.</p>
  </section>
</div>

<script defer src="{{ '/assets/js/academic.js' | relative_url }}"></script>
<script defer src="{{ '/assets/js/uncertainty-game.js' | relative_url }}"></script>
