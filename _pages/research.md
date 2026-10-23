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
    <p class="academic-lead">I study uncertainty in robot perception, state estimation, and human-intention prediction. The aim is to use that uncertainty in real decisions: whether a robot should assist, wait, relocalize, or transfer control to a person or fallback policy.</p>
  </section>

  <div class="research-flow" aria-label="Research pipeline">
    <div class="flow-node"><small>01 · SENSE</small><strong>Multimodal perception</strong></div><div class="flow-arrow" aria-hidden="true">→</div>
    <div class="flow-node"><small>02 · KNOW</small><strong>Calibrated uncertainty</strong></div><div class="flow-arrow" aria-hidden="true">→</div>
    <div class="flow-node"><small>03 · DECIDE</small><strong>Risk-aware action</strong></div>
  </div>

  <section class="academic-section">
    <div class="academic-section-heading"><h2>Current research themes</h2></div>
    <div class="academic-grid academic-grid-4">
      <article class="academic-card"><span class="number">PERCEPTION</span><h3>Where does uncertainty come from?</h3><p>Interpretable attribution methods connect uncertainty to concrete causes such as sensor noise, poor initialization, or limited overlap.</p></article>
      <article class="academic-card"><span class="number">INTENTION</span><h3>What is the person trying to do?</h3><p>Temporal, multimodal models predict human activity and intention. Calibration and selective prediction indicate when those estimates are unreliable.</p></article>
      <article class="academic-card"><span class="number">ACTION</span><h3>When should the robot act?</h3><p>Confidence informs concrete choices: act or hold, continue or relocalize, remain autonomous or hand control to a fallback.</p></article>
      <article class="academic-card"><span class="number">CONTROL</span><h3>How can its behavior remain understandable?</h3><p>Transparent, model-based control uses uncertainty-aware perception while keeping safety-critical decisions efficient and open to inspection.</p></article>
    </div>
  </section>

  <section class="academic-section">
    <div class="academic-section-heading"><h2>Where uncertainty shows up</h2></div>
    <div class="uncertainty-map">
      <div class="uq-node"><span class="uq-dot"></span><strong>Machine learning</strong><p>Calibration and selective prediction for temporal activity and intention models.</p></div>
      <div class="uq-node"><span class="uq-dot"></span><strong>Perception</strong><p>Attributing point cloud registration error to interpretable, physical causes.</p></div>
      <div class="uq-node"><span class="uq-dot"></span><strong>State estimation</strong><p>Extracting an early risk signal from a visual-inertial odometry optimizer.</p></div>
      <div class="uq-node"><span class="uq-dot"></span><strong>Control</strong><p>Feeding perception uncertainty into transparent model-predictive collision avoidance.</p></div>
      <div class="uq-node"><span class="uq-dot"></span><strong>Human intention</strong><p>Estimating how confident an assistive device should be before it moves with a person.</p></div>
    </div>
  </section>

  <section class="academic-section applied-section">
    <div class="academic-section-heading"><h2>Assistive robotics in practice</h2></div>
    <div class="applied-panel">
      <div class="applied-lead">
        <p>Upper-limb activities of daily living, especially eating and drinking, are central to independence. People living with cerebellar ataxia, Parkinson's disease, or multiple sclerosis often retain their strength and their intent, but tremor and overshooting movements disrupt the motion they are trying to make. As the disease progresses, eating and drinking without help become increasingly difficult.</p>
        <p>Within the NeuRoMech group, I contribute to <strong>iAssistADL</strong>, an intelligent assistive device designed to reduce pathological movement while preserving the movement a person intends to make. I work on reliable intention prediction: estimating the intended action, measuring the reliability of that estimate, and deciding when assistance is justified.</p>
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
    <div class="academic-section-heading"><h2>Recent projects</h2></div>
    <div class="paper-list">
      <article class="paper-card"><div class="paper-meta">2026 · NeurIPS AI4GOOD · Paris</div><div><a class="paper-title-link" href="{{ '/papers/drift-monitoring/' | relative_url }}"><h3>Beyond Drift Detection</h3></a><p>Studies whether a deployed selective-prediction policy remains suitable for autonomous operation. The controller evaluates risk, autonomous coverage, and the value of deferral before recommending one of five actions, from continuing operation to revoking autonomy. On PAMAP2, it avoids the infeasible authorizations produced by risk-only retuning.</p><div class="paper-tags"><span>Deployment monitoring</span><span>Selective prediction</span><span>Assistive activity recognition</span></div><a href="https://openreview.net/forum?id=K7XYZERwq7">View on OpenReview →</a></div></article>
      <article class="paper-card"><div class="paper-meta">2026 · NeurIPS AI4GOOD · Paris</div><div><a class="paper-title-link" href="{{ '/papers/failure-ranking/' | relative_url }}"><h3>When Failure Ranking Misses Intervention Value</h3></a><p>Shows why deferring the cases most likely to be wrong can still waste a limited review budget: two failures may offer very different benefits when a person intervenes. The paper introduces excess allocation value and a threshold-corrected calibration audit that select policies for useful intervention, with evidence from clinical referral, public policy, and activity recognition.</p><div class="paper-tags"><span>Intervention value</span><span>Calibration audit</span><span>Decision support</span></div><a href="https://openreview.net/forum?id=pet8zXl6WD">View on OpenReview →</a></div></article>
      <article class="paper-card"><div class="paper-meta">2026 · ICRA Workshop</div><div><a class="paper-title-link" href="{{ '/papers/confidence-gated-autonomy/' | relative_url }}"><h3>Confidence-Gated Robot Autonomy</h3></a><p>Tests whether sophisticated uncertainty methods actually improve act or defer decisions. Once the base model is competent, simple softmax scores, dropout, and ensembles often produce similar gating behavior, and choosing the threshold matters more than choosing the estimator.</p><div class="paper-tags"><span>Selective prediction</span><span>Activity recognition</span><span>Uncertainty</span></div><a href="https://arxiv.org/abs/2605.18045">View on arXiv →</a></div></article>
      <article class="paper-card"><div class="paper-meta">2026 · BioRob submission</div><div><a class="paper-title-link" href="{{ '/papers/when-to-act/' | relative_url }}"><h3>When to Act</h3></a><p>Introduces a calibrated ACT or HOLD rule for assistive robotics. Post-hoc calibration reduces the gap between confidence and observed correctness by roughly an order of magnitude, making the action threshold an interpretable reliability parameter.</p><div class="paper-tags"><span>Calibration</span><span>Intention prediction</span><span>Assistive robotics</span></div><a href="https://arxiv.org/abs/2601.04982">View on arXiv →</a></div></article>
      <article class="paper-card"><div class="paper-meta">2026 · ICRA · Vienna</div><div><a class="paper-title-link" href="{{ '/papers/gpca/' | relative_url }}"><h3>Human-Interpretable Uncertainty Explanations</h3></a><p>Proposes GP-CA, which attributes point-cloud registration uncertainty to causes such as sensor noise, poor initialization, and limited overlap. Active learning discovers new failure sources efficiently, including in a real robot experiment.</p><div class="paper-tags"><span>Point clouds</span><span>Active learning</span><span>Explainability</span></div><a href="https://arxiv.org/abs/2509.18786">View on arXiv →</a></div></article>
      <article class="paper-card"><div class="paper-meta">2026 · Under review</div><div><a class="paper-title-link" href="{{ '/papers/super/' | relative_url }}"><h3>SUPER</h3></a><p>Derives a lightweight, backend-agnostic risk indicator for visual-inertial odometry from the optimizer's own sensitivity structure. It predicts trajectory degradation ahead of time and triggers recovery for less than 0.2 percent additional CPU cost.</p><div class="paper-tags"><span>Visual-inertial odometry</span><span>Risk prediction</span><span>SLAM</span></div><a href="https://arxiv.org/abs/2512.14189">View on arXiv →</a></div></article>
      <article class="paper-card"><div class="paper-meta">2026 · IROS submission</div><div><a class="paper-title-link" href="{{ '/papers/guard/' | relative_url }}"><h3>GUARD</h3></a><p>Combines transparent model-predictive control with uncertainty-aware perception for collision avoidance. Learning estimates the uncertainty, while an explicit controller uses that information to adjust the robot's path in real time.</p><div class="paper-tags"><span>Safe control</span><span>Collision avoidance</span><span>Robotics</span></div><a href="https://arxiv.org/abs/2509.23312">View on arXiv →</a></div></article>
    </div>
  </section>
</div>

<script defer src="{{ '/assets/js/academic.js' | relative_url }}"></script>
