---
layout: page
title: Confidence-Gated Robot Autonomy
permalink: /papers/confidence-gated-autonomy/
description: A visual explanation of when uncertainty actually helps a robot decide whether to act or defer.
nav: false
---

<link rel="stylesheet" href="{{ '/assets/css/academic.css' | relative_url }}">

<div class="academic-page">
  <section class="academic-hero paper-detail-hero"><div class="signal-orbit" aria-hidden="true"><span></span><span></span><span></span></div><div class="academic-kicker">ICRA 2026 Workshop · Selective autonomy</div><h1>Confidence-Gated Robot Autonomy</h1><p class="academic-lead">When does uncertainty actually improve a robot's decision to act, and when is it only a more complicated score?</p><p class="paper-byline">Johannes A. Gaus · Jhon P. F. Charaja · Daniel Haeufle</p><div class="academic-actions"><a class="academic-button primary" href="https://arxiv.org/abs/2605.18045">Read on arXiv</a><a class="academic-button" href="{{ '/publications/' | relative_url }}">All publications</a></div></section>

  <div class="paper-film"><video autoplay muted loop playsinline controls preload="metadata" aria-label="Animated explanation of confidence-gated robot autonomy"><source src="{{ '/assets/video/papers/confidence-gating.mp4' | relative_url }}" type="video/mp4"></video></div>

  <div class="paper-equation"><span class="equation-label">The decision in one line</span><span class="equation">g<sub>τ</sub>(x) = 𝟙[u(x) ≤ τ], &nbsp; R(τ) = 𝔼[error | g<sub>τ</sub> = 1]</span><p>The gate <em>g</em> acts only when uncertainty <em>u(x)</em> stays below threshold <em>τ</em>. Moving τ trades autonomous coverage against the error rate among cases the robot handles itself.</p></div>

  <div class="paper-story-grid">
    <article class="paper-story"><span class="story-number">01 · PROBLEM</span><h2>Metrics can miss the decision</h2><p>Calibration error and AUROC describe useful statistical properties, but neither directly asks whether two uncertainty methods make the same act or defer decision at the deployed threshold.</p></article>
    <article class="paper-story"><span class="story-number">02 · METHOD</span><h2>Compare the gates themselves</h2><p>We evaluate rank correlation, paired-bootstrap equivalence, and act/defer agreement across softmax heuristics, Monte Carlo dropout, and deep ensembles.</p></article>
    <article class="paper-story"><span class="story-number">03 · EVIDENCE</span><h2>Competence comes first</h2><p>Across three temporal activity-recognition datasets, uncertainty rankings are weak and unstable below a dataset-dependent competence regime. Above it, the methods often gate almost identically.</p></article>
    <article class="paper-story"><span class="story-number">04 · IMPLICATION</span><h2>Tune the operating point</h2><p>Once the predictor is competent, threshold choice has a larger effect on collisions and cost than estimator complexity. Simple proxies can be enough for gating, but not for semantic novelty detection.</p></article>
  </div>
  <div class="paper-takeaway"><span class="takeaway-mark">◎</span><div><strong>Practical implication</strong><span>For selective autonomy, a well-chosen threshold on a competent model can matter more than replacing a simple confidence score with a sophisticated uncertainty estimator.</span></div></div>
  <nav class="paper-nav"><a href="{{ '/research/' | relative_url }}">← Research overview</a><a href="{{ '/papers/when-to-act/' | relative_url }}">Next: When to Act →</a></nav>
</div>
<script defer src="{{ '/assets/js/academic.js' | relative_url }}"></script>
