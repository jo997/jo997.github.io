---
layout: page
title: When to Act
permalink: /papers/when-to-act/
description: A visual explanation of calibrated confidence for reliable intention prediction in assistive robotics.
nav: false
---

<link rel="stylesheet" href="{{ '/assets/css/academic.css' | relative_url }}">
<div class="academic-page">
  <section class="academic-hero paper-detail-hero"><div class="signal-orbit" aria-hidden="true"><span></span><span></span><span></span></div><div class="academic-kicker">BioRob 2026 submission · Assistive robotics</div><h1>When to Act</h1><p class="academic-lead">A robot should assist only when its confidence means what it claims to mean.</p><p class="paper-byline">Johannes A. Gaus · Winfried Ilg · Daniel Haeufle</p><div class="academic-actions"><a class="academic-button primary" href="https://arxiv.org/abs/2601.04982">Read on arXiv</a><a class="academic-button" href="{{ '/publications/' | relative_url }}">All publications</a></div></section>
  <div class="paper-film"><video autoplay muted loop playsinline controls preload="metadata" aria-label="Animated explanation of calibrated act-or-hold decisions"><source src="{{ '/assets/video/papers/when-to-act.mp4' | relative_url }}" type="video/mp4"></video></div>
  <div class="paper-equation"><span class="equation-label">From probability to action</span><span class="equation">ACT(x) = 𝟙[p̂<sub>cal</sub>(correct | x) ≥ τ<sub>safe</sub>]</span><p>The model acts only if its calibrated probability of being correct clears a chosen safety threshold. Calibration is what makes “90 percent confident” correspond to roughly 90 percent correctness.</p></div>
  <div class="paper-story-grid">
    <article class="paper-story"><span class="story-number">01 · CONTEXT</span><h2>Assistance is a timed decision</h2><p>For an assistive device, predicting a person's intention is only half the problem. Acting too early or on misplaced confidence can be worse than waiting.</p></article>
    <article class="paper-story"><span class="story-number">02 · METHOD</span><h2>Calibrate, then gate</h2><p>Post-hoc calibration aligns reported confidence with observed correctness. A single threshold then implements an explicit ACT or HOLD policy.</p></article>
    <article class="paper-story"><span class="story-number">03 · RESULT</span><h2>A confidence clinicians can read</h2><p>Calibration reduces the mismatch between confidence and correctness by roughly an order of magnitude, making the action threshold an interpretable reliability parameter.</p></article>
    <article class="paper-story"><span class="story-number">04 · VISION</span><h2>Intent stays with the person</h2><p>The goal is assistance that follows intended movement while suppressing pathological motion, with uncertainty deciding when autonomous support is justified.</p></article>
  </div>
  <div class="paper-takeaway"><span class="takeaway-mark">◉</span><div><strong>Why calibration matters</strong><span>Calibration converts a neural network's raw score into a decision quantity: above the threshold the device may act; below it the appropriate response is to hold.</span></div></div>
  <nav class="paper-nav"><a href="{{ '/papers/confidence-gated-autonomy/' | relative_url }}">← Confidence-Gated Autonomy</a><a href="{{ '/papers/gpca/' | relative_url }}">Next: GP-CA →</a></nav>
</div>
<script defer src="{{ '/assets/js/academic.js' | relative_url }}"></script>
