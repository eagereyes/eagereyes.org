# EuroVis 2017 Conference Report, Part 2

On the first full day of the main [EuroVis conference](http://eurovis2017.virvig.es), we learned that estimating correlation from scatterplots may not be as great as we thought, saw a number of new ways to show what is and is not in the data, and got some new tools for making browser-based visualization fast.

Before I dive into the papers, I want to make clear that this is a very biased selection of papers, and only covers less than one third of what was shown. I can only be in one place at once, and I go to the presentations that interest me. Given the almost complete silence on Twitter (other than [me shouting into the void](https://twitter.com/search?q=eagereyes%20EuroVis&amp;src=typd)), and the lack of other people who write about conferences, I’m getting a bit concerned that the papers I decide to cover are getting a lot more attention than whatever I leave out.

### Evaluating Visualization

*[Constructing and Evaluating Visualisation Task Classifications](http://www.napier.ac.uk/research-and-innovation/research-search/outputs/constructing-and-evaluating-visualisation-task-classifications-process-and#downloads)* by Natalie Kerracher and Jessie Kennedy tackles the interesting problem that taxonomies are created without much consideration for what they’re actually useful for (incidentally, this is also [a pet peeve of mine](/blog/2016/the-problem-with-vis-taxonomies)). As Jessie Kennedy said in her talk, “Everybody used to create systems and nobody was evaluating them, now we’re creating taxonomies and nobody is evaluating them!”

They came up with an interesting approach, modeled after a paper by Tamara Munzner, that identified threats to the validity of these taxonomies. You might recognize [the right part of this slide](https://twitter.com/eagereyes/status/874888760525279233).

*[An Empirical Study on the Reliability of Perceiving Correlation Indices using Scatterplots](http://people.csail.mit.edu/ilaria/papers/EuroVis2017.pdf)* by Varshita Sher, Karen G. Bemis, Ilaria Liccardi, and Min Chen calls into question what we thought about our ability to judge correlation from scatterplots. This is considered to be quite precise, but they showed in a number of studies that there are large offsets in the value that correspond to the offset of the correlation coefficient from 0. They also found an effect of density, but only for very small numbers of points.

Interestingly, they cite [Anscombe’s quartet](/criticism/anscombes-quartet) as an example why this makes sense – after all, the same summary statistics (including correlation) look vastly different. This is quite a surprising finding, and one that will likely/hopefully lead to follow-up work to look into this question further.

*Empirically Measuring Soft Knowledge* in Visualization by Natchaya Kijmongkolchai, Alfie Abdul-Rahman and Min Chen is one of the more challenging papers. It’s based on some of Min Chen’s earlier work on information theory, which they used to assess the influence of what they call soft knowledge: knowledge about the general domain of the data. They argue that a physician can easily spot when an electrocardiogram looks completely impossible, a task that would be hard for a machine. Unfortunately, they tested their hypothesis not with experts but with students in the lab, which makes it a bit less convincing. They did find some effects, but I wonder if this would have been more impressive had they tested it with real medical experts.

[Visual Comparison of Eye Movement Patterns by Tanja Blascheck](https://www.vis.wiwi.uni-due.de/en/research/publications/visual-comparison-of-eye-movement-patterns-13583/), Markus Schweizer, Fabian Beck, and Thomas Ertl describes a tool for comparing eye tracking data. Their approach shows transitions between areas of interest as circular arc diagram, with an additional chart for temporal sequence with color. There is also a view to compare two participants, and a grid view for multiple comparisons. The tool [is available online](http://rtgct.fbeck.com) to play with and includes sample datasets and a tutorial.

## Plots, Plots, Plots

[Sclow Plots: Visualizing Empty Space](http://cgl.uni-jena.de/pub/Publications/WebHome/CGL-TR-59.pdf) by Joachim Giesen, Lars Kühne, and Philipp Lucas proposes and interesting idea for showing the empty spaces in high-dimensional data. They create a three-dimensional projection and then draw flow lines that follow particles that try to escape from the data points. This way, they can show empty spaces that are enclosed or open, depending on which kinds of flow lines are being shown. Adding something to show what’s not there is quite an interesting approach.

[Interactive Regression Lens for Exploring Scatter Plots](http://isgwww.cs.uni-magdeburg.de/visual/index.php?article_id=3&amp;clang=0&amp;bibtex_key=Shao_2017_EuroVis) by L. Shao, A. Mahajan, Tobias Schreck, and D. Lehmann provides a neat tool for creating local regression models in data. The user selects a set of points and is shown the best model. They guard against over- and underfitting, and even provide some guidance to the user for how to improve the model (by showing which way to move the selection for a better fit).

[Sliceplorer: 1D slices for multi-dimensional continuous functions](http://eprints.cs.univie.ac.at/5107/) by Thomas Torsney-Weir, Michael Sedlmair, and Torsten Möller shows the influence of many dimensions on an outcome in a model as individual 1-D line charts of points sampled in that space. It’s quite straight-forward but looks very useful. You can [play with it online](http://slicesplorer.cs.univie.ac.at).

[Stardust: Accessible and Transparent GPU Support for Information Visualization Rendering](https://stardustjs.github.io) by Donghao Ren, Bongshin Lee, and Tobias Höllerer is a framework for building information visualization applications in the browser that are rendered directly on the GPU. Their API mirrors D3 and they are working on interesting extensions to build pixel-space techniques as well. The link above leads to their very nice demo page (with source, etc.), and they also have a nice little demo reel:

<iframe src="https://player.vimeo.com/video/218365921?h=b4092186dc" width="640" height="333" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

## Survey of Surveys

*Survey of Surveys (SoS) - Mapping The Landscape of Survey Papers in Information Visualisation* by Liam McNabb and Robert S. Laramee is the only State-of-the-Art Report (STAR) I saw. The authors have put together a long list of existing surveys and taxonomies in visualization in their [paper](http://cs.swan.ac.uk/~csbob/research/star/sos/mcnabb17sos.pdf) and accompanying [supplemental material](http://cs.swan.ac.uk/~csbob/research/star/sos/mcnabb17sosSupplementary.pdf), and they’ve created a neat [interactive website ](http://sos.swansea.ac.uk) that lets you pick out papers by year, keywords, and authors.

## Multidimensional and Geospatial Vis

*Nodes, Paths, and Edges: Using Mental Maps to Augment Crime Data Analysis in Urban Spaces* by Alex Godwin and John Stasko combines crime data with our idea about cities, like where activity concentrates, how those places are connected, and how they are divided by structures like highways, bodies of water, etc. It’s an interesting way of looking at data in a way that goes beyond the usual mapping approaches.
