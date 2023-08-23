---
title: "EuroVis 2012, Day 2"
description: "Day 2 of EuroVis was a long series of paper presentations, occasionally interrupted with copious amounts of food. Here are some of the highlights."
date: 2012-06-06 23:25:44
tags: conference, eurovis
featuredImage: 
outline: false
---

# EuroVis 2012, Day 2

Day 2 of EuroVis was a long series of paper presentations, occasionally interrupted with copious amounts of food. Here are some of the highlights.

<em>The Parallel Coordinates Matrix</em> by Julian Heinrich, John Stasko, and Daniel Weiskopf describes a way of arranging axes in parallel coordinates to show all two-axis combinations without (much) redundancy. Doing this, it is possible to find all the interesting patterns in data without having to try out lots of combinations. The technique doesn’t really produce a matrix, but more of a layered parallel coordinates plot. They also have some good ideas about focus-and-context and interaction, especially when there are lots of axes.

The paper <em>MCS Filters to Express Partial Satisfaction of Criteria</em> by Benoit Otjacques, Maël Cornil, Mickaël Stefas, and Fernand Feltz picks up a topic that I find particularly interesting in visualization: showing what other data there is if you are willing to relax some of your filtering criteria. The classic example is looking for a place to live: if you can’t find anything with your exact criteria, perhaps making do with a little less space or paying a bit more gets you a really good option. In this work, they introduce the notion of soft and hard selections, so that parts of the data can be ruled out. Additional options around the soft criteria are shown, so you know where to play with them to find more options. I’m not crazy about the filtering interface, but the principle is still interesting and the kind of work could be extremely useful for many tasks.

<a href="http://tillnagel.com/publications/"><em>Sankey Arcs - Visualizing edge weights in path graphs</em></a> by Till Nagel, Erik Duval, Andrew Vande Moere, Kristian Kloeckl, and Carlo Ratti improves the display of edge weights in arc diagrams. It’s a fairly simple idea, but it does make using these diagrams much more useful when showing weights (like number of passengers that travel between bus stops). My favorite part of the presentation was when Keith Andrews made a really interesting suggestion to improve the method: because they move the starting points around, the size and thus the height of the arcs no longer directly show distance. Keith’s suggestion was to not insist on perfect semicircles for the arcs, but instead divide the vertical space into layers that the arcs have to pass through depending on the distance they show (they get squished or elongated). That seems like a good idea, and might lead to some more good uses of the vertical space, that is otherwise not used very efficiently.

In the presentation, they claimed that arc diagrams were invented by Martin Wattenberg, but I don’t believe that that is true, and somebody made a comment during the Q&amp;A that there are much older versions of such diagrams. Wattenberg was probably the first one to use them in the visualization literature, but I’m sure he cites earlier work in his papers (I haven’t checked, though). Also, speaking of Martin, the related work slide in the talk essentially claimed that the pivot graph was an arc diagram. That’s an interesting thought that hadn’t occurred to me before.

Wolfgang Aigner presented to papers, <em>Bertin was Right: An Empirical Evaluation of Indexing to Compare Multivariate Time-Series Data Using Line Plots</em> by Wolfgang Aigner, Christian Kainz, Rui Ma, and Silvia Miksch, and <em>Comparative Evaluation of an Interactive Time-Series Visualization that Combines Quantitative Data with Qualitative Abstractions</em> by Wolfgang Aigner, Alexander Rind, and Stephan Hoffmann. Both describe interesting studies of visualization ideas. But more than that, the authors provide not only the tools used, but also the log data produced in the study on their website, <a href="http://ieg.ifs.tuwien.ac.at/research/bertin-was-right">here for the first one</a> and <a href="http://ieg.ifs.tuwien.ac.at/research/semtimezoom">here for the second</a> (the links are also in the papers).

Aigner and colleagues have also put together <a href="http://survey.timeviz.net/">a nice survey website of time visualization techniques</a>. Unfortunately, all the “Read More” links just lead to their book promotion page, which is a bit disappointing. It’s a good overview though, and there is a clever interface for filtering using a variety of criteria.

Aritra Dasgupta also presented our paper <em><a href="/papers/conceptualizing-visual-uncertainty-in-parallel-coordinates">Conceptualizing Visual Uncertainty in Parallel Coordinates</a></em>, which unfortunately was part of a session on uncertainty where the other papers were all from SciVis and dealt with data uncertainty rather than visual uncertainty. That’s understandable, of course, given the small amount of work on visual uncertainty so far, and perhaps it helped get some people interested in the topic.

While there was no huge highlight, there were a lot of solid papers and some good discussions during the Q&amp;A.


_Posted by <a href="/about">Robert Kosara</a> on June 06, 2012_


<aside class="comments">

---
## Comments

<a href="http://tillnagel.com" rel="nofollow noopener" target="_blank">Till Nagel</a> says…
>	Thanks for your crit on Sankey Arcs, Robert.
>	
>	I agree to your comment regarding Wattenberg. I hope I used the word "introduced" and not "invented" in my talk. At least in our paper we refer to his paper as him having "introduced arc diagrams as a visualization technique [...]".

<a href="http://www.aviz.fr/~isenberg" rel="nofollow noopener" target="_blank">Petra Isenberg</a> says…
>	Here is a link to a 16th century arc diagram I found a long time ago for my Diplom-thesis research on ArcTrees:
>	http://www.chmtl.indiana.edu/tml/16th/SALMUS3_08GF.gif
>	
>	My thesis has a proper reference...

Chris Culy says…
>	Linguists have also been using a type of arc diagram since the 1980s for a type of syntactic structure (dependency structure).
>	
>	Our project for linguistic dependency structures, available <a href="http://www.eurac.edu/en/research/institutes/multilingualism/Projects/LInfoVis/ExtendedLinguisticDependencyDiagrams.html" rel="nofollow">here</a>, might be relevant, since it also uses non-circular, elliptical arcs (discussed in the paper).

</aside>

