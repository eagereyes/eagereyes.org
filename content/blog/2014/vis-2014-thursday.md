---
title: "VIS 2014 – Thursday"
description: "Thursday was the penultimate day of VIS 2014. I ended up only going to InfoVis sessions, and unfortunately missed a panel I had been planning to see. The papers were a bit more mixed, but there were agains some really good ones."
date: 2014-11-13 23:16:04
tags: conference, IEEEVIS
featuredImage: 
---

# VIS 2014 – Thursday

Thursday was the penultimate day of VIS 2014. I ended up only going to InfoVis sessions, and unfortunately missed a panel I had been planning to see. The papers were a bit more mixed, but there were agains some really good ones.

<h1>InfoVis: Evaluation</h1>

Thursday was off to a slow start (partly because of the effects of the party the night before that had the room mostly empty at first), but eventually got interesting.

Staggered animation is commonly understood to be a good idea: don’t start all movement in a transition at once, but with a bit of delay. It’s supposed to help people track the objects as they are moving. <a href="http://fannychevalier.net/animations"><em>The Not-so-Staggering Effect of Staggered Animated Transitions on Visual Tracking</em></a> by Fanny Chevalier, Pierre Dragicevic, and Steven Franconeri describes a very well-designed study that looked into that. They developed a number of criteria that make tracking harder, then tested those with regular motion. After having established their effect, they used Monte-Carlo simulation to find the most best configuration for staggered animation of a field of points (since there are many choices to be made about which to move first, etc.), and then tested those. It turns out that the effect from staggering is very small, if it exists at all. That’s quite interesting.

Since they tested this on a scatterplot with identical-looking dots, it’s not clear how this would apply to, for example, a bar chart or a line chart, where the elements are easier to identify. But the study design is very unusual and interesting, and a great model for future experiments.

Another unexpected result comes from <em>The Influence of Contour on Similarity Perception of Star Glyphs</em> by Johannes Fuchs, Petra Isenberg, Anastasia Bezerianos, Fabian Fischer, and Enrico Bertini. They tested the effect of outlines in star glyphs, and found that the glyph works better without it, just showing the spokes. That is interesting, since the outline supposedly would help with shape perception. There are also some differences between novices and experts, which are interesting in themselves.

The only technique paper that I have seen so far this year was <em>Order of Magnitude Markers: An Empirical Study on Large Magnitude Number Detection</em> by Rita Borgo, Joel Dearden, and Mark W. Jones. The idea is to design a glyph of sorts to show orders of magnitude, so values across a huge range can be shown without making most of the smaller values impossible to read. The glyphs are fairly straightforward and require some training, but seem to be working quite well.

## InfoVis: Perception &amp; Design

While there were some good papers in the morning, overall the day felt a bit slow. The last session of the day brought it back with a vengeance, though.

<em>Learning Perceptual Kernels for Visualization Design</em> by Çağatay Demiralp, Michael Bernstein, and Jeffrey Heer describes a method for designing palettes of shapes, sizes, colors, etc, based on studies. The idea is to measure responses to differences, and then train a model to figure out which of them can be differentiated better or worse, and then pick the best ones.

The presentation that took the cake for the day though was <a href="http://github.com/TuftsVALT/ranking-correlation"><em>Ranking Visualization of Correlation Using Weber’s Law</em></a> by Lane Harrison, Fumeng Yang, Steven Franconeri, and Remco Chang. It’s known that scatterplots allow people to judge correlation quite well, with precision following what is called <em>Weber’s Law</em> (which describes which end of the scale is easier to differentiate). In their experiments, the authors found that this is also true for ten other techniques, including line charts, bar charts, parallel coordinates, and more. This is remarkable because Weber’s law really describes very basic perception rather than cognition, and it paves the way for a number of new ways to judge correlation in almost any chart.

<em>The Relation Between Visualization Size, Grouping, and User Performance</em> by Connor Gramazio, Karen Schloss, and David Laidlaw looked at the role of mark size in visualizations, and whether it changes people’s performance. They found that mark size does improve performance, but only to a point. From there, it doesn’t make any more difference. Grouping also helps reduce the negative effect of an increase in the number of marks.

Everybody talks about visual literacy in visualization, but nobody really does anything about it. That is, until <a href="http://peopleviz.gforge.inria.fr/trunk/vLiteracy/home/"><em>A Principled Way of Assessing Visualization Literacy</em></a> by Jeremy Boy, Ronald Rensink, Enrico Bertini, and Jean-Daniel Fekete. They developed a framework for building visual literacy tests, and showed that this could work with an actual example. This is just the first step certainly, and there are no established visual literacy levels for the general population, etc. But having a way to gauge visual literacy would be fantastic and inform a lot of research, use of visualization in the media, education, etc.

## The Podcasting Life

Moritz and Enrico asked me to help them record a segment for the VIS review episode of the <a href="http://datastori.es">Data Stories podcast</a>. You can listen to that in all its raw, uncut glory by <a href="https://www.dropbox.com/s/avrrkxio3shd3pr/vis-02.m4a?dl=0">downloading the audio file</a>.


<PostedBy />


