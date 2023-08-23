---
title: "EuroVis 2016, Thursday and Friday"
description: "After Tuesday and Wednesday, EuroVis continued for the rest of the week. There were papers about visualization, interaction, networks, and other stuff, a dinner in a former church, and finally the capstone."
date: 2016-06-10 04:39:59
tags: conference, eurovis
featuredImage: https://media.eagereyes.org/wp-content/uploads/2016/06/DSCF2799.jpg
---

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2016/06/DSCF2799.jpg" width="825" height="510" /></p>

# EuroVis 2016, Thursday and Friday

<a href="/blog/2016/eurovis-2016-tuesday-and-wednesday">After Tuesday and Wednesday</a>, EuroVis continued for the rest of the week. There were papers about visualization, interaction, networks, and other stuff, a dinner in a former church, and finally the capstone. 

<b></b>First a little update: you can now <a href="https://vimeo.com/groups/383543/videos/169967499">watch Anders Ynnerman's epic keynote</a>.

## Coordinated Views and Interaction Design

Who says coordinated views have to be next to each other? <a href="http://www.gicentre.net/favves"><i>Faceted Views of Varying Emphasis (FaVVEs): a framework for visualizing multi-perspective small multiples</i></a><b> </b>by<b> </b>Roger Beecham, Chris Rooney, Sebastian Meier, Cagatay Turkay, Aidan Slingsby, Jason Dykes, Jo Wood, and BL William Wong challenges that idea by superimposing rather than juxtaposing them. It works well with a map as the base layer, but it's a bit unclear if it would work nearly as well with a different base view. Still an intriguing idea, though.

<i></i>In<i><a href="http://www.cc.gatech.edu/gvu/ii/touch/"> Designing Multiple Coordinated Visualizations for Tablets</a>,</i> Ramik Sadana and John Stasko presented ideas for how to interact with visualization applications on tablets. This might seem obvious, but there are many subtleties that make a big difference.

<a href="https://idl.cs.washington.edu/papers/vega-debugging"><i>Visual Debugging Techniques for Reactive Data Visualization</i></a><b> </b>by Jane Hoffswell, Arvind Satyanarayan, Jeffrey Heer showed how you can debug Vega visualizations. This is particularly interesting because Vega is declarative, which makes debugging even harder than usual. You can try it out <a href="http://vega.github.io/vega-editor">directly in the Vega editor yourself</a>. A good companion to this is Arvind Satyanarayan's <a href="https://youtu.be/Y8Fp9z-9DWc">OpenVis talk about Vega</a>.

## <b>Time Series Data and Sequences</b>

<i></i><a href="http://yifanhu.net/PUB/StreamGraph.pdf"><i>There is More to Streamgraphs than Movies: Better Aesthetics via Ordering and Lassoing</i></a> by Marco Di Bartolomeo and Yifan Hu showed some ideas how to improve the layout of <a href="http://leebyron.com/streamgraph/">streamgraphs</a>, especially for data that has large changes in the different streams. They optimize the baseline wiggle, which leads to cleaner graphs – however, in their direct comparison with the NY Times piece about movies, theirs was cleaner but also much less interesting. This paper won the Best Paper award. <a href="https://streamgraphs.github.io/index.html">Paper and code are available online</a>.

## <b>Networks and Graphs</b>

<a href="http://innovis.cpsc.ucalgary.ca/Publications/_GSUViz2016"><i>Using Visualization to Explore Original and Anonymized LBSN Data</i></a> by<b> </b>Ebrahim Tarameshloo, Mona Hosseinkhani Loorak, Philip Fong, and Sheelagh Carpendale presented a tool to compare location-based social network (LBSN) data in both its original and anonymized form. This is useful for the designers of the anonymization algorithms to see how well they work, and to see how much of the original patterns are lost.

## <b>Multidimensional and Geospatial Visualization</b>

<a href="https://bib.dbvis.de/publications/details/668"><i>SpaceCuts: Making Room for Visualizations on Maps</i></a> by Juri Buchmüller, Dominik Jäckle, Florian Stoffel, and Daniel Keim addresses the issue that when you're trying to overlay a visualization on a map, you end up occluding parts of it. To address this, they cut the map and push the pieces apart to create space for the visualization. It works pretty well, at least as long as the visualization part is comparatively small.

<i>Visualizing Time-Dependent Data Using Dynamic t-SNE</i> by Paulo E. Rauber, Alexandre X. Falcão, and Alexandru C., Telea showed how to animate t-SNE clustered data over time to make it easier to track the clusters. <a href="https://github.com/paulorauber/thesne">Their code is available</a>.

## <b>Design, Evaluation, and Applications</b>

<i>Judgment Error in Pie Chart Variations</i> by Robert Kosara and Drew Skau started off this session. This was the short paper in our <a href="/papers/a-pair-of-pie-chart-papers">pie charts paper package</a>. Reaction was positive again, with a number of good questions and some follow-up discussions at the conference dinner later on Thursday.

<i>Using icicle plots to encode the hierarchical structure of source code </i>by Ivan Bacher, Brian Mac Namee, John D Kelleher showed a tree visualization and interaction idea for a source code editor to show the hierarchical structure and allow navigation – a bit like a folding editor, but more visual. They have <a href="https://dl.dropboxusercontent.com/spa/96msnpkocwnj21h/p-001/public/index.html">a demo online</a> (click “Load HTML” and then click around on both sides).

Understanding the impact of publications is important for large research institutions like CERN. In<i> Visualization of Publication Impact by </i>Eamonn Maguire, Javier Martin Montull, and Gilles Louppe showed a set of glyphs based on graphs (which Eamonn calls <i>glaphs</i>) to show the number of citations of a large set of papers. Their <a href="http://inspirehep.github.io/impact-graphs/">code and some basic demos are available online</a>.

## <i></i>Human-Computer Interaction

<em>Classic Techniques in New Domains: An Alternative Recipe</em> by Megan Monroe dealt with unusual data: recipes. By creating a sort of flow chart for a recipe, they show prep times to help less-organized cooks not lose their minds.

<em>Clarifying hypotheses by sketching data</em> by Mariana Marabou, Alan Blackwell,Advait Sardar, and Martin Spott presented a simple tool for sketching data and showing it in an "uncertain" way to think through an analysis before having the actual data available.

<em>CompaRing: Reducing Costs of Visual Comparison</em> by Christian Tominski is a neat idea for comparing elements of a visualization, in particular a map. It lays out the different objects around the one you're comparing with, and shows where they go. You can <a href="http://www.informatik.uni-rostock.de/~ct/software/CompaRing/">play with it online yourself</a>.

## Closing Session and Capstone

<a href="http://graphics.tudelft.nl/~eisemann/">Elmar Eisemann</a>, a professor of computer graphics and visualization at TU Delft, talked about some very impressive computer graphics work he and his group have done. It went a bit far into the realistic computer graphics area, but there were also some interesting examples of cleverly exploiting the limits of our perception to create images to appear to look better than they really are. One example is a panning shot where they can increase perceived quality by only re-rendering the low-frequency components of the scene, and combining them with the high frequencies of the first frame. It was definitely interesting, but a bit too heavy on the computer graphics, in my opinion.

<a href="http://eurovis2017.virvig.es">Next year's conference</a> will take place in Barcelona, June 12–16.

## Final Thoughts

It was a good conference. Somehow, it just didn't excite me as much as last year's did. There were a good number of solid papers, but none that really knocked my socks off.

It was well organized and went very smoothly. The only thing I didn't like was that the opening and closing sessions were just too long. The analysis of keywords used in reviews went on for way too long and was of little value. The awards ceremony part at the end could also be much shorter and more fun, rather than the awkward affair they almost universally are.

Groningen is a beautiful little town. It's also quite lively, due to the large number of university students (about a third of the population). The conference dinner this time took place in a former church, with fantastic food. It couldn't quite compete with the <a href="/blog/2015/report-eurovis-2015">convent last year</a> where they made our food by hand, but that's a tough one to follow. The deserts were out of this world, though.

[[PostedBy]]

