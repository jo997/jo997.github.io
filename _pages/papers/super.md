---
layout: page
title: SUPER
permalink: /papers/super/
description: A visual explanation of sensitivity-based risk assessment in visual-inertial odometry.
nav: false
---

<link rel="stylesheet" href="{{ '/assets/css/academic.css' | relative_url }}">
<div class="academic-page">
  <section class="academic-hero paper-detail-hero"><div class="signal-orbit" aria-hidden="true"><span></span><span></span><span></span></div><div class="academic-kicker">2026 · Currently under review</div><h1>SUPER</h1><p class="academic-lead">A lightweight warning signal for visual-inertial odometry, extracted from the optimizer before the trajectory visibly fails.</p><p class="paper-byline">Johannes A. Gaus · Daniel Häufle · Woo-Jeong Baek</p><div class="academic-actions"><a class="academic-button primary" href="https://arxiv.org/abs/2512.14189">Read on arXiv</a><a class="academic-button" href="{{ '/publications/' | relative_url }}">All publications</a></div></section>
  <div class="paper-film"><video autoplay muted loop playsinline controls preload="metadata" aria-label="Animated explanation of sensitivity-based odometry risk"><source src="{{ '/assets/video/papers/super.mp4' | relative_url }}" type="video/mp4"></video></div>
  <div class="paper-equation"><span class="equation-label">Sensitivity reveals fragility</span><span class="equation">Δx* ≈ −H<sup>−1</sup> · (∂g/∂θ) · Δθ</span><p>A small perturbation Δθ can produce a large change in the estimated state x* when the optimizer is sensitive. SUPER turns this local sensitivity structure into an online warning of future trajectory degradation.</p></div>
  <div class="paper-story-grid">
    <article class="paper-story"><span class="story-number">01 · PROBLEM</span><h2>Visible drift appears too late</h2><p>Visual-inertial odometry can degrade before a large trajectory error becomes visible. Recovery therefore requires an earlier online risk signal.</p></article>
    <article class="paper-story"><span class="story-number">02 · INSIGHT</span><h2>The optimizer already contains evidence</h2><p>SUPER reads sensitivity information from the estimator's own optimization structure, avoiding extra sensors, retraining, or a backend-specific uncertainty model.</p></article>
    <article class="paper-story"><span class="story-number">03 · ACTION</span><h2>Warn, then recover</h2><p>The risk score forecasts degradation and can trigger a recovery behavior before accumulated drift compromises the trajectory.</p></article>
    <article class="paper-story"><span class="story-number">04 · COST</span><h2>Designed for real time</h2><p>The method adds less than 0.2 percent CPU overhead, preserving the computational budget of the underlying odometry system.</p></article>
  </div>
  <div class="paper-takeaway"><span class="takeaway-mark">⌁</span><div><strong>Engineering result</strong><span>SUPER uses optimizer sensitivity as an early warning, identifying risk before trajectory error becomes large enough to trigger an alarm.</span></div></div>
  <nav class="paper-nav"><a href="{{ '/papers/gpca/' | relative_url }}">← GP-CA</a><a href="{{ '/papers/guard/' | relative_url }}">Next: GUARD →</a></nav>
</div>
<script defer src="{{ '/assets/js/academic.js' | relative_url }}"></script>
