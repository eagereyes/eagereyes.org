---
title: "EuroVis 2017 Conference Report, Part 3"
description: "Thursday and Friday at EuroVis brought a few papers on storytelling, a new toolkit for running online studies, a better way to put your list of publications online, and a lot more."
date: 2017-06-18 18:17:34
tags: conference, eurovis
featuredImage: https://media.eagereyes.org/wp-content/uploads/2017/06/barcelona-sunset.jpg
---

# EuroVis 2017 Conference Report, Part 3

Thursday and Friday at EuroVis brought a few papers on storytelling, a new toolkit for running online studies, a better way to put your list of publications online, and a lot more.

## Visualization Models &amp; Human Computer Interaction

The day started with my humble paper, <em><a href="https://eagereyes.org/papers/paper-an-argument-structure-for-data-stories">An Argument Structure for Data Stories</a></em>. I propose a simple but, I believe, effective structure for stories that I have seen work in a handful of news pieces. There are many parallels with more classical argument and presentation design, but also subtle differences. I hope that more patterns like this can be uncovered and that we can start paying attention to them to improve the stories we build.

<em>ETK: An Evaluation Toolkit for Visualization User Studies</em> by Terece L. Turton, Anne S. Berres, David H. Rogers, and James Ahrens introduced a new toolkit for running simple perception studies. It sits on top of <a href="https://www.qualtrics.com">Qualtrics</a> and manages the structure of the experiment and handles the images. It can do a few standard protocols, like two-alternative forced choice (2AFC), A/B testing, different ways of threshold finding, etc. ETK has <a href="http://etklab.org">a website</a> and <a href="https://github.com/ascr-ecx/etk">the source code is on GitHub</a>.

<em>TexTile: A Pixel-Based Focus+Context Tool For Analyzing Variants Across Multiple Text Scales</em> by Barathi Asokarajan, Ronak Etemadpour, June Abbas, Sam Huskey, and Chris Weaver is a fascinating and unusual project, where they show the different sources and possible original words in old Latin texts (which were sometimes copied wrong by accident or on purpose along the way). The paper doesn’t appear to be online, but it’s work with the <a href="http://digitallatin.org">Digital Latin Library</a>.

<em><a href="http://arjun010.github.io/static/papers/nl-vis.pdf">Natural Language Interfaces for Data Analysis with Visualization: Considering What Has and Could Be Asked</a></em> by Arjun Srinivasan and John Stasko collects thoughts about the kinds of voice interactions there are with visualization systems, and how people would want to use voice for interaction. Ambiguity plays a big role here, since our spoken sentences are rarely precise or complete.

## Visual Encoding Analysis

<em><a href="http://www2.cs.arizona.edu/~kobourov/symmetries-eurovis17.pdf">Measuring Symmetry in Drawings of Graphs</a></em> by Eric Welch and Stephen Kobourov looked at ways of assessing a graph’s symmetry and putting a number on it. There are some existing ways to do this, but they all have odd issues. Welch and Kobourov wanted to validate the measures to see which makes more intuitive sense so they can then develop a new, better measure for graph symmetry

<em><a href="https://idl.cs.washington.edu/papers/reverse-engineering-vis/">Reverse-Engineering Visualizations: Recovering Visual Encodings from Chart Images</a></em> by Jorge Poco and Jeff Heer extracts not just the data, but also the encoding labels from a large variety of charts. This was previously only possible for specific charts or required user guidance. The output of their tool is a Vega specification, which lets them recreate the chart or transform it into a different type, change the axis range, etc.

<em><a href="https://eagereyes.org/papers/paper-finding-a-clear-path-structuring-strategies-for-visualization-sequences">Finding a Clear Path: Structuring Strategies for Visualization Sequences</a></em> by Jessica Hullman, myself, and Heidi Lam is our look at the ways in which people order visualizations to make the most sense. We looked at different kinds of factors that lead to grouping as well as how things are ordered (like time).

<em><a href="http://mckennapsean.com/projects/narrative-flow/">Narrative Flow: Factors Shaping Data Story Consumption Experiences</a></em> by Sean McKenna, Natalie Henry Riche, Bongshin Lee, Jeremy Boy, and Miriah Meyer looks at the different ways readers navigate through stories, like steppers, scrollers, etc. They collected a large <a href="https://narrative-flow.github.io">corpus of examples and materials</a>, and put together <a href="https://narrative-flow.github.io/bar-chart-story/">a little demo</a> where you can switch the different factors to see how they impact the story. They also ran a study that showed that engagement was higher for steppers and scrollers than text and static visual, with no difference between scroller and stepper (despite <a href="https://eagereyes.org/blog/2016/the-scrollytelling-scourge">my misgivings about scrollytelling</a>).

## Visual Design, Case Studies, and Evaluation

<em><a href="https://eagereyes.org/papers/paper-readability-and-precision-in-pictorial-bar-charts">Readability and Precision in Pictorial Bar Charts</a></em> by Drew Skau and myself was our look at chart embellishments, this time with color and texture. We had already tested different “bar” shapes and found a few of them to be quite problematic. For this study, we picked only the better ones and then turned them into objects. For the most part, we found no differences, which means that as long as the shape isn’t distorted too much, bar chart embellishments are not a big deal.

<em><a href="https://www.informatik.uni-rostock.de/~hs162/pdf/costing.pdf">On Establishing Visualization Requirements: A Case Study in Product Costing</a></em> by Zana Vosough, Rainer Groh, and Hans-Jörg Schulz describes the long and tedious process of figuring out a visualization for a problem that so far is solved with plain old spreadsheets. It’s a bit of a lessons learned and not terribly exciting in terms of visualization (they ended up with a treemap and a Sankey diagram), but it shows how visualization is often developed in the real world when there is already an established process, even if far from perfect, in place.

<em><a href="https://www.researchgate.net/publication/316208960_Scoped_Visualising_the_scope_chain_within_source_code">Scoped: Visualising the scope chain within source code</a></em> by Ivan Bacher, Brian Mac Namee, and John D. Kelleher aims to provide a tool for programmers to understand the scope of their variables while working on code. I’m a bit skeptical of their approach, since my guess is that most programmers want this sort of information integrated directly into the source code display, rather than have it sit next to it. But it’s worth a try, and you can <a href="https://js-scope-vis.aerobatic.io"> play with their prototype yourself</a>.

## Applications

<em>Visual Access to Performance Indicators in the Mining Sector</em> by T. Ruppert, A. Bannach, J. Bernard, M. Lokanc, and J. Kohlhammer is similar to the paper on costing I mentioned earlier. They worked with <a href="http://worldbank.org/mingov">mining data from the world bank</a> and the people who are dealing with that. Their starting point was a table with colored cells, and they created some simple extensions like a simple treemap, as well as a few other charts. They added some interaction too, which the old table didn’t have. It’s a simple system, but adds some very useful new features while not making it much more complex.

<em><a href="http://pubviz.fhstp.ac.at">PubViz: Lightweight Visual Presentation of Publication Data</a></em> by Alexander Rind, Andrea Haberson, Kerstin Blumenstein, Christina Niederer, Markus Wagner, and Wolfgang Aigner is a nice system for showing a list of publications in a more interesting and interactive way. They have a display of papers over time, by type of publication, word clouds of topics and authors, as well as a simple list – all filtered when clicking on bars or words. The link above goes to a nice demo page, and the source code <a href="https://github.com/fhstp/PubViz">is also available</a>. The implementation isn’t stellar, so it’s mostly limited to a few hundred papers for now. But perhaps somebody can improve performance a bit and make it more scalable – there is no reason it wouldn’t work with at least thousands or tens of thousands of papers in a modern browser.

James Scott-Brown has already used PubViz to make <a href="http://www.visperception.com">a page of perception papers</a>. Also, <a href="https://twitter.com/jamesscottbrown/status/876217797025681409">I apparently say smart things</a> sometimes.

## Capstone, Helwig Hauser

<a href="http://www.ii.uib.no/vis/team/hauser/">Helwig Hauser</a> is a professor of computer science at University of Bergen. He began his capstone by asking, what have we actually solved in visualization? There has been a lot of work, but are we done with anything? For the most part, and except for some provocative statements here and there, the answer seems to be no (as is usual for scientists).

He framed the talk around the Gartner hype cycle, noting that between the brain-computer interfaces, etc., visualization was nowhere to be found. That is a very academic viewpoint of course, since Gartner is well aware of visualization under the term business intelligence and devotes one of <a href="https://www.gartner.com/doc/3611117/magic-quadrant-business-intelligence-analytics">its magic quadrants</a> to it. It includes a number of companies in the space, with Tableau one of them of course, but also some lesser-known outfits like Microsoft and IBM.

Helwig’s idea of going from one dataset to many makes sense for academic research, though it’s also framed around scientific visualization and the kind of work scientists do. Business users also work with many datasets, but their requirements are quite different. Some of his points certainly apply to both, like the question of whether it makes sense to create large displays that have many more pixels than our eyes have receptors. Alternative representations and new visual abstractions will also play a role in both, as will semi-automated approaches (with data analysis, etc.), hierarchical exploration and analysis tools, etc.

## A Few Thoughts and Next Year

EuroVis is a good conference, and its a good addition to VIS. There were some good papers there again this year, and it was pretty well organized. The part that was a bit less than ideal was how spread out it was and how the rooms kept changing. Also, starting the first session at 8:50am in Spain (where many restaurants don’t even open before 9pm) was a tad optimistic.

A few years ago, EuroVis started to provide lunch to attendees. I think that’s a really good idea, since it means that people can mingle and chat, rather than disperse to find food. It also means that people are more likely to show up for the afternoon sessions on time.

Next year, the conference will take place in Brno, Czech Republic, June 4 to 8.


_Posted by <a href="/about">Robert Kosara</a> on June 18, 2017_


