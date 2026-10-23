---
layout: page
title: Beyond Drift Detection
permalink: /papers/drift-monitoring/
description: A visual explanation of deployment authorization for selective prediction.
nav: false
---

<link rel="stylesheet" href="{{ '/assets/css/academic.css' | relative_url }}">
<div class="academic-page">
  <section class="academic-hero paper-detail-hero"><div class="signal-orbit" aria-hidden="true"><span></span><span></span><span></span></div><div class="academic-kicker">NeurIPS 2026 AI4GOOD · Paris</div><h1>Beyond Drift Detection</h1><p class="academic-lead">A distribution shift is only an alarm. A deployed system needs to know whether to continue, retune, watch, escalate, or revoke autonomy.</p><p class="paper-byline">Johannes A. Gaus · Yaroslava Nalivayko · Isabell Wochner · Winfried Ilg · Daniel Haeufle</p><div class="academic-actions"><a class="academic-button primary" href="https://openreview.net/forum?id=K7XYZERwq7">Read on OpenReview</a><a class="academic-button" href="{{ '/publications/' | relative_url }}">All publications</a></div></section>
  <div class="paper-film"><video autoplay muted loop playsinline controls preload="metadata" aria-label="Animated explanation of deployment monitoring for selective prediction"><source src="{{ '/assets/video/papers/drift-monitoring.mp4' | relative_url }}" type="video/mp4"></video></div>
  <div class="paper-equation"><span class="equation-label">A threshold is authorized only if</span><span class="equation">R(τ) ≤ r<sub>max</sub> &nbsp; ∧ &nbsp; C(τ) ≥ c<sub>min</sub> &nbsp; ∧ &nbsp; ΔV(τ) ≥ v<sub>min</sub></span><p>A candidate threshold must jointly satisfy maximum selective risk, minimum autonomous coverage, and minimum deferral-targeting value. If the deployed threshold fails, the controller searches for a replacement before suspending autonomy.</p></div>
  <div class="paper-story-grid">
    <article class="paper-story"><span class="story-number">01 · GAP</span><h2>A drift alarm cannot authorize action</h2><p>Changed data do not necessarily invalidate a threshold. Conversely, acceptable risk can coexist with deferrals that target the wrong cases.</p></article>
    <article class="paper-story"><span class="story-number">02 · FRAMEWORK</span><h2>Monitor the whole threshold set</h2><p>At each checkpoint, the controller evaluates selective risk, autonomous coverage, and deferral-targeting value for the deployed threshold and possible replacements.</p></article>
    <article class="paper-story"><span class="story-number">03 · DECISION</span><h2>Five operational actions</h2><p>The evidence yields Continue, Retune, Watch, Escalate or Relabel, or Hard Revoke. Only the first two authorize autonomous operation.</p></article>
    <article class="paper-story"><span class="story-number">04 · EVIDENCE</span><h2>Guarded retuning avoids unsafe authorization</h2><p>On PAMAP2, risk-only retuning produces 54 observed infeasible authorizations. Deployment monitoring and guarded retuning produce zero across 1,200 evaluated windows.</p></article>
  </div>
  <div class="paper-takeaway"><span class="takeaway-mark">◫</span><div><strong>Operational consequence</strong><span>Monitoring should determine whether selective autonomy remains justified and which threshold can be authorized, rather than merely reporting that the data changed.</span></div></div>
  <nav class="paper-nav"><a href="{{ '/papers/failure-ranking/' | relative_url }}">← Failure Ranking</a><a href="{{ '/research/' | relative_url }}">Research overview →</a></nav>
</div>
<script defer src="{{ '/assets/js/academic.js' | relative_url }}"></script>
