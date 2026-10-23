---
layout: page
title: When Failure Ranking Misses Intervention Value
permalink: /papers/failure-ranking/
description: A visual explanation of intervention-aware calibration for selective prediction.
nav: false
---

<link rel="stylesheet" href="{{ '/assets/css/academic.css' | relative_url }}">
<div class="academic-page">
  <section class="academic-hero paper-detail-hero"><div class="signal-orbit" aria-hidden="true"><span></span><span></span><span></span></div><div class="academic-kicker">NeurIPS 2026 AI4GOOD · Paris</div><h1>When Failure Ranking Misses Intervention Value</h1><p class="academic-lead">A limited review budget should go to cases where intervention helps most, not automatically to cases most likely to be wrong.</p><p class="paper-byline">Johannes A. Gaus · Jhon P. F. Charaja · Winfried Ilg · Daniel Haeufle</p><div class="academic-actions"><a class="academic-button primary" href="https://openreview.net/forum?id=pet8zXl6WD">Read on OpenReview</a><a class="academic-button" href="{{ '/publications/' | relative_url }}">All publications</a></div></section>
  <div class="paper-film"><video autoplay muted loop playsinline controls preload="metadata" aria-label="Animated explanation of intervention-aware failure ranking"><source src="{{ '/assets/video/papers/failure-ranking.mp4' | relative_url }}" type="video/mp4"></video></div>
  <div class="paper-equation"><span class="equation-label">The value of targeted deferral</span><span class="equation">ΔV(τ) = Cov(D<sub>τ</sub>, B) = 𝔼[D<sub>τ</sub>B] − 𝔼[D<sub>τ</sub>]𝔼[B]</span><p><em>D<sub>τ</sub></em> marks deferred cases and <em>B</em> is their intervention benefit. Positive excess allocation value means the gate sends more useful cases to review than random deferral with the same budget.</p></div>
  <div class="paper-story-grid">
    <article class="paper-story"><span class="story-number">01 · MISMATCH</span><h2>Errors do not have equal value</h2><p>Failure AUROC is appropriate when every corrected error has the same benefit and every review has the same cost. Clinical and public-interest deployments rarely satisfy that assumption.</p></article>
    <article class="paper-story"><span class="story-number">02 · QUANTITY</span><h2>Excess allocation value</h2><p>The metric asks whether a score sends more intervention benefit to a fixed review budget than random deferral at the same review rate.</p></article>
    <article class="paper-story"><span class="story-number">03 · AUDIT</span><h2>Threshold-corrected calibration value</h2><p>TCV selects among prespecified scores and thresholds while correcting for multiple comparisons at the actual operating point.</p></article>
    <article class="paper-story"><span class="story-number">04 · EVIDENCE</span><h2>The selected policy changes</h2><p>On MineThatData, TCV and Failure AUROC choose different scores in 16 of 18 predictors. The TCV policy reaches 12.5 percent of oracle value while failure-selected policies are negative.</p></article>
  </div>
  <div class="paper-takeaway"><span class="takeaway-mark">↕</span><div><strong>Decision consequence</strong><span>A good ranking of failures can still allocate help poorly. Evaluation must account for who benefits when the system defers.</span></div></div>
  <nav class="paper-nav"><a href="{{ '/papers/guard/' | relative_url }}">← GUARD</a><a href="{{ '/papers/drift-monitoring/' | relative_url }}">Next: Beyond Drift Detection →</a></nav>
</div>
<script defer src="{{ '/assets/js/academic.js' | relative_url }}"></script>
