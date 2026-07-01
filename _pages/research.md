---
layout: page
title: research
permalink: /research/
description: Research on uncertainty-aware machine learning and reliable assistive robotics.
nav: true
nav_order: 1
---

<link rel="stylesheet" href="{{ '/assets/css/academic.css' | relative_url }}">

<div class="academic-page">
  <section class="academic-hero">
    <div class="signal-orbit" aria-hidden="true"><span></span><span></span><span></span></div>
    <div class="academic-kicker">Research overview</div>
    <h1>Uncertainty that changes what a robot does.</h1>
    <p class="academic-lead">My research moves from estimating uncertainty to using it: deciding when to assist, when to stop, when to relocalize, and when a human or fallback policy should take over.</p>
  </section>

  <div class="research-flow" aria-label="Research pipeline">
    <div class="flow-node"><small>01 · SENSE</small><strong>Multimodal perception</strong></div><div class="flow-arrow" aria-hidden="true">→</div>
    <div class="flow-node"><small>02 · KNOW</small><strong>Calibrated uncertainty</strong></div><div class="flow-arrow" aria-hidden="true">→</div>
    <div class="flow-node"><small>03 · DECIDE</small><strong>Risk-aware action</strong></div>
  </div>

  <section class="academic-section">
    <div class="academic-section-heading"><h2>Current research themes</h2><p>Three connected layers of a reliable autonomous system.</p></div>
    <div class="academic-grid">
      <article class="academic-card"><span class="number">PERCEPTION</span><h3>Where does uncertainty come from?</h3><p>I develop human-interpretable attribution methods that identify concrete failure sources in robot perception instead of returning a single opaque score.</p></article>
      <article class="academic-card"><span class="number">PREDICTION</span><h3>Can confidence be trusted?</h3><p>I study calibration and selective prediction for temporal, multimodal models of human activity and intention.</p></article>
      <article class="academic-card"><span class="number">ACTION</span><h3>What should the robot do next?</h3><p>I connect uncertainty to act/hold, stop/relocalize, and autonomy/fallback decisions with measurable safety consequences.</p></article>
    </div>
  </section>

  <section class="academic-section">
    <div class="academic-section-heading"><h2>Research in five papers</h2><p>Short, plain-language summaries. Each link opens the canonical arXiv record.</p></div>
    <div class="paper-list">
      <article class="paper-card"><div class="paper-meta">2026 · ICRA Workshop</div><div><h3>Confidence-Gated Robot Autonomy</h3><p>Tests whether sophisticated uncertainty methods actually improve act-or-defer decisions. Once the base model is competent, simple softmax scores, dropout, and ensembles often produce similar gating behavior; choosing the threshold matters more.</p><div class="paper-tags"><span>Selective prediction</span><span>Activity recognition</span><span>Uncertainty</span></div><a href="https://arxiv.org/abs/2605.18045">View on arXiv →</a></div></article>
      <article class="paper-card"><div class="paper-meta">2026 · Preprint</div><div><h3>When to Act</h3><p>Introduces a calibrated ACT/HOLD rule for assistive robotics. Post-hoc calibration reduces the gap between confidence and actual correctness by roughly an order of magnitude, making the action threshold an interpretable safety parameter.</p><div class="paper-tags"><span>Calibration</span><span>Intention prediction</span><span>Assistive robotics</span></div><a href="https://arxiv.org/abs/2601.04982">View on arXiv →</a></div></article>
      <article class="paper-card"><div class="paper-meta">2026 · ICRA</div><div><h3>Human-Interpretable Uncertainty Explanations</h3><p>Proposes GP-CA, which attributes point-cloud registration uncertainty to causes such as sensor noise, poor initialization, and limited overlap. Active learning discovers new failure sources efficiently, including in a real robot experiment.</p><div class="paper-tags"><span>Point clouds</span><span>Active learning</span><span>Explainability</span></div><a href="https://arxiv.org/abs/2509.18786">View on arXiv →</a></div></article>
      <article class="paper-card"><div class="paper-meta">2026 · ICRA Workshop</div><div><h3>SUPER</h3><p>Derives a lightweight, backend-agnostic risk indicator for visual-inertial odometry from the optimizer's sensitivity structure. It predicts trajectory degradation ahead of time and triggers recovery with less than 0.2% additional CPU cost.</p><div class="paper-tags"><span>Visual-inertial odometry</span><span>Risk prediction</span><span>SLAM</span></div><a href="https://arxiv.org/abs/2512.14189">View on arXiv →</a></div></article>
      <article class="paper-card"><div class="paper-meta">2026 · Preprint</div><div><h3>GUARD</h3><p>Combines transparent model-predictive control with uncertainty-aware perception for collision avoidance. The framework aims to retain the efficiency of learning while keeping safety-relevant behavior interpretable.</p><div class="paper-tags"><span>Safe control</span><span>Collision avoidance</span><span>Robotics</span></div><a href="https://arxiv.org/abs/2509.23312">View on arXiv →</a></div></article>
    </div>
  </section>
</div>
