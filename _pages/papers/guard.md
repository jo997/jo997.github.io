---
layout: page
title: GUARD
permalink: /papers/guard/
description: A visual explanation of uncertainty-aware perception and transparent control for safe robotics.
nav: false
---

<link rel="stylesheet" href="{{ '/assets/css/academic.css' | relative_url }}">
<div class="academic-page">
  <section class="academic-hero paper-detail-hero"><div class="signal-orbit" aria-hidden="true"><span></span><span></span><span></span></div><div class="academic-kicker">IROS 2026 submission · Safe robotics</div><h1>GUARD</h1><p class="academic-lead">GUARD combines flexible learning with transparent model-based control for real-time collision avoidance.</p><p class="paper-byline">Johannes A. Gaus · Junheon Yoon · Woo-Jeong Baek · Seungwon Choi · Suhan Park · Jaeheung Park</p><div class="academic-actions"><a class="academic-button primary" href="https://arxiv.org/abs/2509.23312">Read on arXiv</a><a class="academic-button" href="{{ '/publications/' | relative_url }}">All publications</a></div></section>
  <div class="paper-film"><video autoplay muted loop playsinline controls preload="metadata" aria-label="Animated explanation of uncertainty-aware collision avoidance"><source src="{{ '/assets/video/papers/guard.mp4' | relative_url }}" type="video/mp4"></video></div>
  <div class="paper-equation"><span class="equation-label">Risk enters the control constraint</span><span class="equation">u* = arg min<sub>u</sub> J(u), &nbsp; d(robot, obstacle) ≥ m(U)</span><p>The controller minimizes its motion cost <em>J</em> while maintaining a safety margin <em>m</em>. As perception uncertainty <em>U</em> grows, the required margin grows too, bending the planned path away from ambiguous obstacles.</p></div>
  <div class="paper-story-grid">
    <article class="paper-story"><span class="story-number">01 · TENSION</span><h2>Flexible versus inspectable</h2><p>End-to-end learning adapts well but obscures safety reasoning. Traditional control is transparent but depends on perception assumptions that may fail.</p></article>
    <article class="paper-story"><span class="story-number">02 · SYSTEM</span><h2>Two strengths, one loop</h2><p>GUARD combines reactive model-predictive contouring control with point-cloud registration that attributes uncertainty sources online.</p></article>
    <article class="paper-story"><span class="story-number">03 · LEARNING</span><h2>Update only what matters</h2><p>Active learning and probabilistic kernel optimization provide sample-efficient, real-time uncertainty attribution.</p></article>
    <article class="paper-story"><span class="story-number">04 · BEHAVIOR</span><h2>Uncertainty changes the path</h2><p>The controller remains explicit while perceived risk reshapes collision-avoidance decisions, keeping safety-critical behavior inspectable.</p></article>
  </div>
  <div class="paper-takeaway"><span class="takeaway-mark">◇</span><div><strong>Design principle</strong><span>Learning estimates the uncertainty, while model-predictive control determines the motion. The interface between them remains visible and testable.</span></div></div>
  <nav class="paper-nav"><a href="{{ '/papers/super/' | relative_url }}">← SUPER</a><a href="{{ '/papers/failure-ranking/' | relative_url }}">Next: Failure Ranking →</a></nav>
</div>
<script defer src="{{ '/assets/js/academic.js' | relative_url }}"></script>
