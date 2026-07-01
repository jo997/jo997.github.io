---
layout: page
permalink: /publications/
title: publications
description: Research publications and preprints by Johannes Gaus.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<link rel="stylesheet" href="{{ '/assets/css/academic.css' | relative_url }}">

<div class="academic-page">
  <section class="academic-hero">
    <div class="signal-orbit" aria-hidden="true"><span></span><span></span><span></span></div>
    <div class="academic-kicker">Publications</div>
    <h1>Research papers</h1>
    <p class="academic-lead">Work on calibrated confidence, human intention prediction, interpretable uncertainty, risk-aware state estimation, and safe robot autonomy. Every link points to the canonical arXiv record.</p>
  </section>
</div>

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>
