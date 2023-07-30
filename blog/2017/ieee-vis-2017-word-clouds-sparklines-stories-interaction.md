---
title: "IEEE VIS 2017: Word Clouds, Stories, Interaction"
description: "I usually stick to the InfoVis track at VIS, and that was also the case this time. The papers in this part of my report from VIS 2017 cover text, small visualizations like sparklines and glyphs, tools for showing story structure, and multi-device interaction with data."
date: 2017-10-10 18:17:40
tags: conference, IEEEVIS
featuredImage: https://media.eagereyes.org/wp-content/uploads/2017/10/story-curves.jpg
---

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2017/10/story-curves.jpg" width="700" height="377" /></p>

# IEEE VIS 2017: Word Clouds, Stories, Interaction

I usually stick to the InfoVis track at VIS, and that was also the case this time. The papers in this part of my report from VIS 2017 cover text, small visualizations like sparklines and glyphs, tools for showing story structure, and multi-device interaction with data.

## Word Clouds

Tag or word clouds are second only to pie charts in the kind of scorn you get for using them. And yet, they were a topic at InfoVis this year, with three papers dealing with their creation and readability.

<a href="http://graphics.uni-konstanz.de/publikationen/Wang2018EdWordleConsistencypreserving/index.html"><em>EdWordle: Consistency-preserving Word Cloud Editing</em></a>by Yunhai Wang, Xiaowei Chu, Chen Bao, Lifeng Zhu, Oliver Deussen, Baoquan Chen, and Michael Sedlmair presents a fairly straightforward, but also quite neat system to edit word clouds. <a href="http://www.edwordle.net">The <em>EdWordle</em> tool</a> allows you to add and remove words, move words around, or trigger a relayout that neatly animates. This lets you make more semantic word clouds by moving related words closer to each other (like when they’re part of a phrase).

<a href="http://enrico.bertini.io/s/infovis17-word-clouds-apart.pdf"><em>Taking Word Clouds Apart: An Empirical Investigation of the Design Space for Keyword Summaries</em></a> by Cristian Felix, Enrico Bertini, and Steven Franconeri goes the opposite direction, asking how well people can read them. They compared the classic text size with bar length, color, and bubble size. They measured time and error and found that the more precise codings (like bars) took longer to read than the ones that performed more poorly (like font size). Their <a href="https://github.com/nyuvis/word-cloud">materials are available</a>.

<em><a href="http://vialab.science.uoit.ca/wp-content/papercite-data/pdf/shi2017fontsize.pdf">Perceptual Biases in Font Size as a Data Encoding</a></em> by Eric Carlson Alexander, Chih-Ching Chang, Mariana Shimabukuro, Steve Franconeri, Christopher Collins, and Michael Gleicher reports on 14 studies(!) on how the reading of word clouds depends on various factors such as word length, the kinds of characters involved, ascenders and descenders, etc. They found evidence for many of the assumed (but largely unproven) effects, but also that people really aren’t that bad at reading word clouds to begin with. Clearly, a word cloud will not be used for high-precision tasks, but they’re fine for comparing when there is a reasonable difference.

## Sparklines and Glyphs

<em><a href="https://hal.archives-ouvertes.fr/hal-01389998/document">An Exploratory Study of Word-Scale Graphics in Data-Rich Text Documents</a></em>, Pascal Goffin, Jeremy Boy, Wesley Willett, Petra Isenberg also mentions words, but in a very different context. It’s about small graphics better known as <em>sparklines</em>. They let designers play with Wikipedia articles to see what kinds of small graphics they’d want to include. The result is quite interesting, with a large number of different types and designs, and not limited to just numerical data. <a href="http://aviz.fr/wsv/?n=Research/wsv">A list of designs from the study</a> is available.

<a href="https://hal.inria.fr/hal-01378429/document"><em>A Systematic Review of Experimental Studies on Data Glyphs</em></a> by Johannes Fuchs, Petra Isenberg, Anastasia Bezerianos, and Daniel A. Keim looks at the many different types of glyphs (and their varying definitions). They compared a large number of papers going back to 1957, and put together a nice overview of what we know, where there are gaps, and where there are contradictions in the literature.

## Brushing, Multiple Views, and Interaction

While there is a lot of talk of multiple views and interaction, there is not enough research to figure out how to actually use those. These three papers pushed the boundaries on what we know about this aspect of visualization.

<em><a href="http://innovis.cpsc.ucalgary.ca/supplemental/MyBrush/">MyBrush: Brushing and Linking with Personal Agency</a></em> by Philipp Koytek, Charles Perin, Jo Vermeulen, Elisabeth André, and Sheelagh Carpendale takes apart the concept of brushing and linking to let users create their own brushing system by picking the type of source, link, and target they prefer. They show that people found that quite useful and were able to create a wide variety of tools depending on what they were after. Their <a href="https://github.com/philippkoytek/mybrush">source code is available</a> and you can <a href="http://innovis.cpsc.ucalgary.ca/supplemental/MyBrush/demo/">play with their implementation in your browser</a>.

<em><a href="http://idl.cs.washington.edu/papers/consistency">Keeping Multiple Views Consistent: Constraints, Validations, and Exceptions in Visualization Authoring</a></em> by Zening Qu and Jessica Hullman looks at how some of the usual rules for scaling charts (like including zero, scaling to the max) can be adapted for multiple-view dashboards. They studied a wide range of different scenarios, with common measures using the same or different encodings, etc. They came up with a number of interesting results that appear to be quite useful and directly applicable.

<a href="https://imld.de/en/research/research-projects/vistiles/">VisTiles: Coordinating and Combining Co-located Mobile Devices for Visual Data Exploration</a> by Ricardo Langner, Tom Horak, and Raimund Dachselt shows a number of ideas for using multiple mobile devices (in particular tables) to expand the way interaction with data works. They have a large set of interesting demos, and their source code is also available for you to try it out yourself.

<iframe width="560" height="315" src="https://www.youtube.com/embed/8MxPAMKmkSM?si=ilkK2M3CGTKre9bh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<p></p>

## Stories and Interaction

<a href="https://vcg.seas.harvard.edu/publications/visualizing-nonlinear-narratives-with-story-curves"><em>Visualizing Nonlinear Narratives with Story Curves</em></a> by Nam Wook Kim, Benjamin Bach, Hyejin Im, Sasha Schriber, Markus Gross, and Hanspeter Pfister presents a very interesting tool to explore the narrative structure of books and movies, in particular flash-backs and flash-forwards. You can <a href="http://storyexplorer.namwkim.org/">run it in your browser</a> and play with a good selection of movies with interesting structure (<em>Memento</em>, <em>Eternal Sunshine of the Spotless Mind</em>, etc.). There’s also lots of interaction to find particular kinds of features, which they tested with literary and film scholars. Source code and more materials are available from <a href="[http://storycurve.namwkim.org]">their project page</a>.

I should also mention a talk I unfortunately missed, <em><a href="http://www.aviz.fr/~bbach/timelines/Brehmer2016timelines.pdf">Timelines Revisited: A Design Space and Considerations for Expressive Storytelling</a></em> by Matthew Brehmer, Bongshin Lee, Benjamin Bach, Nathalie Henry Riche, and Tamara Munzner. They look at a variety of ways to show timelines and sequences, and how to use them to tell stories. Their materials <a href="http://timelinesrevisited.github.io">are available online</a> as well.

<hr />

See also:

<ul>
    <li><a href="https://eagereyes.org/blog/2017/ieee-vis-2017-best-papers-keynote-capstone">Best Papers and Other Awards</a></li>
    <li><a href="https://eagereyes.org/blog/2017/ieee-vis-2017-keynote-and-capstone">Keynote and Capstone</a></li>
    <li><a href="https://eagereyes.org/blog/2017/ieee-vis-2017-perception-evaluation-vision">Perception, Evaluation, Vision Science</a></li>
    <li><a href="https://eagereyes.org/blog/2017/ieee-vis-2017-machine-learning-diversity-parties">Machine Learning, Diversity, Parties</a></li>
</ul>


_Posted by <a href="/about">Robert Kosara</a> on October 10, 2017_


