---
title: "Paper: Conceptualizing Visual Uncertainty in Parallel Coordinates"
description: "Visualization is largely defined as the transformation of data into images. Visualization tools don't have a way of assessing their output, though: were there enough pixels to represent all the data? Are there too many overlapping lines? In a paper to be presented at EuroVis next week, Aritra Dasgupta, Min Chen, and I propose a taxonomy of the different sources of uncertainty when working with parallel coordinates."
date: 2012-05-30 20:30:00
tags: papers
featuredImage: https://media.eagereyes.org/wp-content/uploads/2012/05/uncertainty-taxonomy.png
outline: false
---

# Paper: Conceptualizing Visual Uncertainty in Parallel Coordinates

Visualization is largely defined as the transformation of data into images. Visualization tools don't have a way of assessing their output, though: were there enough pixels to represent all the data? Are there too many overlapping lines? In <a href="/publications/Dasgupta-EuroVis-2012" target="_blank">a paper to be presented at EuroVis next week</a>, Aritra Dasgupta, Min Chen, and I propose a taxonomy of the different sources of uncertainty when working with parallel coordinates.

<p align="center"><img class="aligncenter size-full wp-image-1900" title="Uncertainty Taxonomy" alt="" src="https://media.eagereyes.org/wp-content/uploads/2012/05/uncertainty-taxonomy.png" width="600" height="188" /></p>

When data is visualized, there is almost invariably information loss. That is often a good thing, because it reduces the amount of detail and can bring out patterns: correlations in a scatterplot, different kinds of patterns in <a title="Parallel Coordinates" href="/techniques/parallel-coordinates" target="_blank">parallel coordinates</a>, etc. Of course, there is a limit where the loss becomes a problem, but an even bigger issue is that we don't know when that happens.

In order to measure the loss, we have to first identify where it occurs, though. That is what this paper attempts to do. We built the taxonomy to roughly follow, and at the same time extend, the visualization pipeline. The <em>encoding</em> part is fairly straight-forward, but it teases apart many small issues like axis ordering, axis adjacency, pixel granularity, etc. That part is also relatively easy to quantify.

The <em>decoding</em> side jumps across the screen boundary to where the visualization is seen. This part is even less understood than the computer side and much more difficult to measure. But much uncertainty originates here, from the inability to trace lines, lines hidden in the clutter, region overlaps, etc.

This paper builds directly on Aritra's earlier work on <a href="/publications/Dasgupta-InfoVis-2011" target="_blank">privacy-preserving visualization</a> and <a href="/publications/Dasgupta_InfoVis_2010.html" target="_blank">screen-space metrics for parallel coordinates</a>. That is why we incorporated not only the (line-based) classical parallel coordinates, but also our extension that uses regions to selectively hide information as needed to guarantee privacy. Uncertainty is therefore not necessarily negative, but it needs to be managed to achieve the desired effect.

The paper will be presented in <a href="http://www.cg.tuwien.ac.at/eurovis2012/program/program/#fp78">session FP7</a>, which is the second afternoon session on Wednesday. I will also talk about managing uncertainty at the <em><a href="http://www.eurorvvv.org/">EuroVis Workshop on Reproducibility, Verification, and Validation in Visualization (EuroRVVV)</a></em> on Tuesday morning.

<hr />

Aritra Dasgupta, Min Chen, Robert Kosara, <a href="/publications/Dasgupta-EuroVis-2012">Conceptualizing Visual Uncertainty in Parallel Coordinates</a>, <em>Computer Graphics Forum (Proceedings EuroVis)</em>, 2012.


_Posted by <a href="/about">Robert Kosara</a> on May 30, 2012_


