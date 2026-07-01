---
layout: about
title: about
permalink: /
subtitle:
profile: false
selected_papers: false
social: true
announcements:
  enabled: false
latest_posts:
  enabled: false
---

<script>if(!(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)){document.documentElement.classList.add('reveal-on');}</script>
<link rel="stylesheet" href="{{ '/assets/css/academic.css' | relative_url }}">

<div class="academic-page">
  <section class="academic-hero">
    <div class="signal-orbit" aria-hidden="true"><span></span><span></span><span></span></div>
    <div class="academic-kicker">Reliable AI · Assistive Robotics · Human-Centered Autonomy</div>
    <h1>Building robots that know when to act, and when to wait.</h1>
    <p class="academic-lead">I am Johannes Gaus, a Ph.D. researcher at the University of Tübingen. I study how uncertainty, calibration, and interpretable risk estimates can make learning-enabled robots safer and more useful around people, with a focus on assistive devices that help someone eat, drink, and move on their own.</p>
    <div class="academic-actions">
      <a class="academic-button primary" href="{{ '/research/' | relative_url }}">Explore my research</a>
      <a class="academic-button" href="{{ '/publications/' | relative_url }}">Read publications</a>
      <a class="academic-button" data-mail-user="jag99" data-mail-domain="gmx.net" rel="nofollow" href="#">Get in touch</a>
    </div>
  </section>

  <div class="signal-band" aria-hidden="true"><div class="signal-band-track"><span>Uncertainty Quantification</span><span>Assistive Robotics</span><span>Calibrated Confidence</span><span>Human Intention</span><span>Safe Autonomy</span><span>Intention Prediction</span><span>Robot Perception</span><span>Uncertainty Quantification</span><span>Assistive Robotics</span><span>Calibrated Confidence</span><span>Human Intention</span><span>Safe Autonomy</span><span>Intention Prediction</span><span>Robot Perception</span></div></div>

  <section class="academic-section gate-section">
    <div class="academic-section-heading"><h2>The core question</h2><p>A robot should only assist once its calibrated confidence clears a safety threshold. Move the slider to see the decision flip.</p></div>
    <div class="confidence-gate" data-confidence-gate data-threshold="72">
      <div class="gate-scene" aria-hidden="true">
        <div class="gate-bot"><span class="gate-eye"></span><span class="gate-eye"></span></div>
        <div class="gate-signal"><span></span><span></span><span></span></div>
      </div>
      <div class="gate-controls">
        <div class="gate-track"><div class="gate-fill"></div><div class="gate-threshold"><span>threshold</span></div></div>
        <input class="gate-slider" type="range" min="0" max="100" value="46" aria-label="Model confidence">
        <div class="gate-readout">
          <div class="gate-conf-box"><strong class="gate-conf">46%</strong><span>calibrated confidence</span></div>
          <div class="gate-verdict"><strong>HOLD</strong><span>wait for a human or fallback</span></div>
        </div>
      </div>
    </div>
  </section>

  <div class="academic-facts" aria-label="Current affiliations">
    <div class="academic-fact"><strong>Ph.D. Researcher</strong><span>Computer Science · University of Tübingen</span></div>
    <div class="academic-fact"><strong>IMPRS-IS Scholar</strong><span>International Max Planck Research School</span></div>
    <div class="academic-fact"><strong>NeuRoMech Lab</strong><span>Neuromechanics &amp; Rehabilitation Robotics</span></div>
  </div>

  <section class="academic-section">
    <div class="academic-section-heading">
      <h2>Research with a clear decision point</h2>
      <p>My work connects uncertainty estimation to the decisions a robot actually makes, not only to abstract model scores.</p>
    </div>
    <div class="academic-grid">
      <article class="academic-card"><span class="number">01 / RELIABILITY</span><h3>Calibrated confidence</h3><p>Turning model confidence into an interpretable reliability estimate that can safely trigger or withhold robot assistance.</p></article>
      <article class="academic-card"><span class="number">02 / INTENTION</span><h3>Human intention prediction</h3><p>Inferring what a person is trying to do from multimodal signals, so an assistive device supports the intended movement instead of disrupting it.</p></article>
      <article class="academic-card"><span class="number">03 / EXPLAINABILITY</span><h3>Uncertainty attribution</h3><p>Explaining whether sensor noise, geometry, initialization, or missing observations caused a perception system to become uncertain.</p></article>
      <article class="academic-card"><span class="number">04 / AUTONOMY</span><h3>Risk-aware control</h3><p>Combining learning-based perception with transparent control and fallback policies for robust, safe embodied systems.</p></article>
    </div>
  </section>

  <section class="academic-section">
    <div class="academic-section-heading">
      <h2>About me</h2>
      <p>Computer science, grounded in human movement and real robotic systems.</p>
    </div>
    <p>I work in the Neuromechanics and Rehabilitation Robotics group at the Hertie Institute for Clinical Brain Research and the Center for Integrative Neuroscience. My current research investigates reliable human-intention prediction for assistive devices, including the <strong>iAssistADL</strong> project that helps people with neurodegenerative movement disorders eat and drink on their own. The question running through it is when a prediction is reliable enough to act on.</p>
    <p>Previously I completed an M.Sc. in Computer Science at the Karlsruhe Institute of Technology, specializing in software engineering and machine learning. During my master's research at the German Aerospace Center (DLR), I developed methods that explain uncertainty in point-cloud registration. I hold a B.Sc. in Computer Science from the University of Tübingen with a minor in Psychology.</p>
    <div class="academic-actions">
      <a class="academic-button" href="{{ '/cv/' | relative_url }}">View academic CV</a>
      <a class="academic-button" href="https://www.linkedin.com/in/jgaus1/">LinkedIn</a>
      <a class="academic-button" href="https://github.com/jo997">GitHub</a>
    </div>
  </section>
</div>

<script defer src="{{ '/assets/js/academic.js' | relative_url }}"></script>
