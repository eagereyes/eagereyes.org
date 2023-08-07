---
title: "Visualization Research, Part I: Engineering"
description: "Conventions in visualization can seem arbitrary, and quite a few are. But there is also a vast body of research, and it is growing every day. Just how does visualization research work? How do we learn new things about visualization and how it can and should be used?"
date: 2015-09-29 18:02:44
tags: attention
featuredImage: https://media.eagereyes.org/wp-content/uploads/2015/09/finviz-sep2015.png
---

# Visualization Research, Part I: Engineering

Conventions in visualization can seem arbitrary, and quite a few are. But there is also a vast body of research, and it is growing every day. Just how does visualization research work? How do we learn new things about visualization and how it can and should be used?

There are really just two ways: make a new thing and test a thing. Visualization is not a natural science where we can observe planets or classify bugs. Instead, we make things. The engineering side of visualization is exciting, but it can also be confusing.

When we’ve made a thing, we need to test it. Does new my new way of showing data work better than an existing one? Under what circumstances?

There’s a bit more to it than that, but those are the main ideas. I describe the engineering side of visualization research below, and will write a separate piece about studies.

## Engineering

Visualization techniques don’t grow on trees or hide under layers of sediment. Even seemingly obvious ones like bar and line charts had to be thought up and popularized (in this case, by William Playfair in the very late 18th and early 19th centuries).

The original idea is sometimes enough, but more often it requires some tweaking and refinement, or a new perspective, to really work well.

A great example of this is <a href="http://www.cs.umd.edu/hcil/treemap-history/">the treemap</a>. While it may seem like it has been around forever, it is less than 25 years old. The original paper by Brian Johnson and Ben Shneiderman was published in 1991. It immediately received attention in the academic visualization world, and there were numerous modifications and ideas that people added.

<p align="center"><img class="aligncenter size-full wp-image-8966" src="https://eagereyes.org/wp-content/uploads/2015/09/treeviz.gif" alt="TreeViz treemap" width="636" height="429" /></p>

But it took a rethinking of sorts to break into the mainstream. The treemap was developed to display data that was structured as a hierarchy (or tree, as it is usually called in computer science), like the directories and subdirectories on a hard disk. There are many questions this can let you answer, like <em>which are the largest files on my disk?</em> or <em>is this movie larger or smaller than all my emails?</em>

The classic treemap is created by repeatedly cutting a rectangle into ever smaller pieces, like a stick of butter. The result are many small rectangles that can have very different shapes and aspect ratios: from perfect squares to very thin slices, and anything in between. Comparing the areas of these different rectangles is difficult and imprecise.

The <em>squarified treemap</em> aims to create rectangles that are as square as possible. This is a key development, because square-ish rectangles are easier to compare than others, and they provide a clear goal shape to aim for. This was first <a href="http://hint.fm/papers/marketmap-wattenberg.pdf">described by Martin Wattenberg in 1999</a>, but without a specific algorithm. A group of researchers around Jarke van Wijk published a <a href="http://www.win.tue.nl/~vanwijk/stm.pdf">simple yet efficient way to compute squarified layouts</a>. Anybody could now easily incorporate them into visualization software.

The second crucial idea came when Martin Wattenberg and Ben Shneiderman <a href="http://www.bewitched.com/marketmap.html">applied the technique to stock market data</a>: while they imposed a hierarchy on the data, that structure by itself was secondary. What it did, though, was translate a large number of time series into groups that could be displayed in a completely new way. The grouping of related items made it possible to see how segments of the market behaved as a whole and to spot outliers more easily.

The image below is from a relatively new website called <a href="https://finviz.com">finviz</a>, since the original SmartMoney stock market treemap doesn’t seem to exist anymore. It uses the same layout and structure, though. Try finding similarities and spot outliers among hundreds of line charts – the grouping of the treemap makes that so much easier (though it only shows a single point in time).

<p align="center"><img class="aligncenter size-medium wp-image-8967" src="https://eagereyes.org/wp-content/uploads/2015/09/finviz-sep2015-1320x795.png" alt="finviz map of the market" width="660" height="397" /></p>

What everybody uses today is not the original treemap, but a squarified one. Most people don't use it for inherently hierarchical data, but any kind of data. To do this, the data is broken down using categories of interest so that you can compare sales by customer segment and market, or access to education by ethnicity and income level, etc.

The key to this is making things. The fundamental technique had to be invented and turned into a piece of software. Only then was it possible to try it out, find shortcomings, and invent new ways to address them. In the process, new things were thought up. Visualization is a field that not only studies, but also creates.

What has been created needs to be evaluated though, and we need to understand the underlying perception and thinking processes that we use when working with visualization. This will be the subject of Part II.


_Posted by <a href="/about">Robert Kosara</a> on September 29, 2015_


