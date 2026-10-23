---
layout: page
title: Human-Interpretable Uncertainty Explanations
permalink: /papers/gpca/
description: A visual explanation of GP-CA for point-cloud registration uncertainty.
nav: false
---

<link rel="stylesheet" href="{{ '/assets/css/academic.css' | relative_url }}">
<div class="academic-page">
  <section class="academic-hero paper-detail-hero"><div class="signal-orbit" aria-hidden="true"><span></span><span></span><span></span></div><div class="academic-kicker">ICRA 2026 · Vienna</div><h1>Human-Interpretable Uncertainty Explanations</h1><p class="academic-lead">Point-cloud registration should report its uncertainty and identify the physical source that caused it.</p><p class="paper-byline">Johannes A. Gaus · Loris Schneider · Yitian Shi · Jongseok Lee · Rania Rayyes · Rudolph Triebel</p><div class="academic-actions"><a class="academic-button primary" href="https://arxiv.org/abs/2509.18786">Read on arXiv</a><a class="academic-button" href="{{ '/publications/' | relative_url }}">All publications</a></div></section>
  <div class="paper-film"><video autoplay muted loop playsinline controls preload="metadata" aria-label="Animated explanation of uncertainty attribution in point-cloud registration"><source src="{{ '/assets/video/papers/gpca.mp4' | relative_url }}" type="video/mp4"></video></div>
  <div class="paper-equation"><span class="equation-label">Uncertainty as attributable concepts</span><span class="equation">U(x) ≈ Σ<sub>k</sub> a<sub>k</sub>(x) · c<sub>k</sub></span><p>Instead of returning only total uncertainty <em>U</em>, GP-CA expresses it through concept contributions <em>a<sub>k</sub></em>: how much sensor noise, initialization, overlap, and other interpretable causes contribute in this registration.</p></div>
  <div class="paper-story-grid">
    <article class="paper-story"><span class="story-number">01 · PROBLEM</span><h2>Registration fails for different reasons</h2><p>Sensor noise, initialization error, occlusion, and limited overlap can all break ICP. A scalar uncertainty alone cannot tell the robot how to recover.</p></article>
    <article class="paper-story"><span class="story-number">02 · METHOD</span><h2>Gaussian Process Concept Attribution</h2><p>GP-CA learns a mapping from registration behavior to interpretable concepts, quantifying uncertainty while attributing it to known error sources.</p></article>
    <article class="paper-story"><span class="story-number">03 · LEARNING</span><h2>Discover failures efficiently</h2><p>Active learning requests labels for informative cases, allowing the system to identify new sources of uncertainty from relatively few examples.</p></article>
    <article class="paper-story"><span class="story-number">04 · VALIDATION</span><h2>From benchmarks to a real robot</h2><p>Experiments on three public datasets and a real robotic system show accurate attribution, fast runtime, and recovery behavior that makes perception more robust.</p></article>
  </div>
  <div class="paper-takeaway"><span class="takeaway-mark">⌁</span><div><strong>Why attribution matters</strong><span>An uncertainty explanation becomes actionable when it names the cause. Limited overlap, a poor initial pose, and noisy sensing each call for a different recovery.</span></div></div>
  <nav class="paper-nav"><a href="{{ '/papers/when-to-act/' | relative_url }}">← When to Act</a><a href="{{ '/papers/super/' | relative_url }}">Next: SUPER →</a></nav>
</div>
<script defer src="{{ '/assets/js/academic.js' | relative_url }}"></script>
