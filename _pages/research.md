---
layout: page
title: research
permalink: /research/
description: Research on uncertainty-aware machine learning, human intention prediction, and reliable assistive robotics.
nav: true
nav_order: 1
---

<script>if(!(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)){document.documentElement.classList.add('reveal-on');}</script>
<link rel="stylesheet" href="{{ '/assets/css/academic.css' | relative_url }}">

<div class="academic-page">
  <section class="academic-hero">
    <div class="signal-orbit" aria-hidden="true"><span></span><span></span><span></span></div>
    <div class="academic-kicker">Research overview</div>
    <h1>Uncertainty that changes what a robot does.</h1>
    <p class="academic-lead">My work spans the full reliability loop: estimating uncertainty in perception, state estimation, and human intention, then acting on it by deciding when a robot should assist, hold, relocalize, or hand control to a person or fallback policy. The recurring question is when a prediction is reliable enough to act on.</p>
  </section>

  <div class="research-flow" aria-label="Research pipeline">
    <div class="flow-node"><small>01 · SENSE</small><strong>Multimodal perception</strong></div><div class="flow-arrow" aria-hidden="true">→</div>
    <div class="flow-node"><small>02 · KNOW</small><strong>Calibrated uncertainty</strong></div><div class="flow-arrow" aria-hidden="true">→</div>
    <div class="flow-node"><small>03 · DECIDE</small><strong>Risk-aware action</strong></div>
  </div>

  <section class="academic-section">
    <div class="academic-section-heading"><h2>Current research themes</h2></div>
    <div class="academic-grid academic-grid-4">
      <article class="academic-card"><span class="number">PERCEPTION</span><h3>Where does uncertainty come from?</h3><p>Human-interpretable attribution methods that point to concrete failure sources in robot perception, such as sensor noise, poor initialization, or too little overlap, instead of returning one opaque score.</p></article>
      <article class="academic-card"><span class="number">INTENTION</span><h3>What is the person trying to do?</h3><p>Temporal, multimodal models of human activity and intention for assistive devices, using calibration and selective prediction so the model can flag when its own estimate is unreliable.</p></article>
      <article class="academic-card"><span class="number">ACTION</span><h3>When should the robot act?</h3><p>Turning confidence into act or hold, stop or relocalize, and autonomy or fallback decisions that carry measurable safety consequences.</p></article>
      <article class="academic-card"><span class="number">CONTROL</span><h3>How does it stay safe and clear?</h3><p>Combining transparent, model-based control with uncertainty-aware perception so safety-critical behavior stays fast and easy to inspect.</p></article>
    </div>
  </section>

  <section class="academic-section">
    <div class="academic-section-heading"><h2>Where uncertainty shows up</h2></div>
    <div class="uncertainty-map">
      <div class="uq-node"><span class="uq-dot"></span><strong>Machine learning</strong><p>Calibration and selective prediction for temporal activity and intention models.</p></div>
      <div class="uq-node"><span class="uq-dot"></span><strong>Perception</strong><p>Attributing point cloud registration error to interpretable, physical causes.</p></div>
      <div class="uq-node"><span class="uq-dot"></span><strong>State estimation</strong><p>Reading a risk signal out of a visual inertial odometry optimizer before it drifts.</p></div>
      <div class="uq-node"><span class="uq-dot"></span><strong>Control</strong><p>Feeding perception uncertainty into transparent model-predictive collision avoidance.</p></div>
      <div class="uq-node"><span class="uq-dot"></span><strong>Human intention</strong><p>Estimating how confident an assistive device should be before it moves with a person.</p></div>
    </div>
  </section>

  <section class="academic-section applied-section">
    <div class="academic-section-heading"><h2>Assistive robotics in practice</h2></div>
    <div class="applied-panel">
      <div class="applied-lead">
        <p>Upper-limb activities of daily living, especially eating and drinking, are central to independence. People living with cerebellar ataxia, Parkinson's disease, or multiple sclerosis often retain their strength and their intent, but tremor and overshooting movements disrupt the motion they are trying to make. As the disease progresses, eating and drinking without help become increasingly difficult.</p>
        <p>Within the NeuRoMech group I contribute to <strong>iAssistADL</strong>, an intelligent assistive device that aims to suppress the pathological part of a movement while letting the intended movement through. My part is reliable human intention prediction: inferring what the person wants to do, estimating how confident the system actually is, and acting only once that confidence is high enough.</p>
      </div>
      <div class="applied-stats">
        <div class="applied-stat"><strong>ADLs</strong><span>eating and drinking as the target tasks</span></div>
        <div class="applied-stat"><strong>Intention</strong><span>predict, then verify confidence, then act</span></div>
        <div class="applied-stat"><strong>Non-invasive</strong><span>keep the movement the person means to make</span></div>
        <div class="applied-stat"><strong>NeuRoMech</strong><span>neuromechanics and rehabilitation robotics</span></div>
      </div>
    </div>
    <p class="applied-context">This sits inside the Neuromechanics and Rehabilitation Robotics group at the Hertie Institute for Clinical Brain Research and the Center for Integrative Neuroscience in Tübingen, where computational motor control, neuro-musculoskeletal modeling, and machine learning meet on real clinical problems.</p>
  </section>

  <section class="academic-section">
    <div class="academic-section-heading"><h2>Research in five papers</h2></div>
    <div class="paper-list">
      <article class="paper-card"><div class="paper-meta">2026 · ICRA Workshop</div><div><h3>Confidence-Gated Robot Autonomy</h3><p>Tests whether sophisticated uncertainty methods actually improve act or defer decisions. Once the base model is competent, simple softmax scores, dropout, and ensembles often produce similar gating behavior, and choosing the threshold matters more than choosing the estimator.</p><div class="paper-tags"><span>Selective prediction</span><span>Activity recognition</span><span>Uncertainty</span></div><a href="https://arxiv.org/abs/2605.18045">View on arXiv →</a></div></article>
      <article class="paper-card"><div class="paper-meta">2026 · BioRob submission</div><div><h3>When to Act</h3><p>Introduces a calibrated ACT or HOLD rule for assistive robotics. Post-hoc calibration reduces the gap between confidence and actual correctness by roughly an order of magnitude, which turns the action threshold into an interpretable safety parameter a clinician can reason about.</p><div class="paper-tags"><span>Calibration</span><span>Intention prediction</span><span>Assistive robotics</span></div><a href="https://arxiv.org/abs/2601.04982">View on arXiv →</a></div></article>
      <article class="paper-card"><div class="paper-meta">2026 · ICRA · Vienna</div><div><h3>Human-Interpretable Uncertainty Explanations</h3><p>Proposes GP-CA, which attributes point-cloud registration uncertainty to causes such as sensor noise, poor initialization, and limited overlap. Active learning discovers new failure sources efficiently, including in a real robot experiment.</p><div class="paper-tags"><span>Point clouds</span><span>Active learning</span><span>Explainability</span></div><a href="https://arxiv.org/abs/2509.18786">View on arXiv →</a></div></article>
      <article class="paper-card"><div class="paper-meta">2026 · Under review</div><div><h3>SUPER</h3><p>Derives a lightweight, backend-agnostic risk indicator for visual-inertial odometry from the optimizer's own sensitivity structure. It predicts trajectory degradation ahead of time and triggers recovery for less than 0.2 percent additional CPU cost.</p><div class="paper-tags"><span>Visual-inertial odometry</span><span>Risk prediction</span><span>SLAM</span></div><a href="https://arxiv.org/abs/2512.14189">View on arXiv →</a></div></article>
      <article class="paper-card"><div class="paper-meta">2026 · IROS submission</div><div><h3>GUARD</h3><p>Combines transparent model-predictive control with uncertainty-aware perception for collision avoidance. The framework keeps the efficiency of learning while keeping safety-relevant behavior interpretable and easy to inspect.</p><div class="paper-tags"><span>Safe control</span><span>Collision avoidance</span><span>Robotics</span></div><a href="https://arxiv.org/abs/2509.23312">View on arXiv →</a></div></article>
    </div>
  </section>
</div>

<script defer src="{{ '/assets/js/academic.js' | relative_url }}"></script>
