---
title: "IEEE VIS 2018, Part 3: New Approaches, Meet the Founders, Perception and Cognition"
description: "The final report from VIS 2018 (see previously here and here) again covers papers, papers, and more papers. There are new ways to specify visualizations, a panel, perception research, as well as new work on how to deal with uncertainty in data."
date: 2018-10-31 19:26:15
tags: conference, IEEEVIS
featuredImage: https://media.eagereyes.org/wp-content/uploads/2018/10/litvis.jpg
---

# IEEE VIS 2018, Part 3: New Approaches, Meet the Founders, Perception and Cognition

The final report from VIS 2018 (see previously <a href="/blog/2018/ieee-vis-2018-viscomm-visinpractice-beliv-best-papers">here</a> and <a href="/blog/2018/ieee-vis-2018-time-evaluation-dashboards-the-future-of-vis">here</a>) again covers papers, papers, and more papers. There are new ways to specify visualizations, a panel, perception research, as well as new work on how to deal with uncertainty in data.

## New Ways to Make Charts

How to best specify visualizations is still an open question, and one that hasn't gotten a lot of attention in recent years. This year saw quite a bit of activity in this area though, with Draco (<a href="/blog/2018/ieee-vis-2018-viscomm-visinpractice-beliv-best-papers">mentioned earlier</a>) and the following two approaches.

<a href="https://www.microsoft.com/en-us/research/publication/charticulator-interactive-construction-of-bespoke-chart-layouts-2/"><em>Charticulator: Interactive Construction of Bespoke Chart Layouts</em></a> by Donghao Ren, Bongshin Lee, and Matthew Brehmer presents an interesting new approach to creating visualizations: you pick a shape and map data fields to its properties. This is unlike most existing tools, but similar in principle to (though different in many details from) <a href="http://data-illustrator.com">Data Illustrator</a>. Like it,&nbsp;<a href="http://charticulator.com">Charticulator</a> is also available online to play with.

<figure class="wp-block-image"><img src="https://media.eagereyes.org/wp-content/uploads/2018/10/litvis.jpg" alt="" class="wp-image-10916"/><figcaption>LitVis</figcaption></figure>

Yet another approach to creating visualizations are notebooks (like they're used in R or Jupyter).&nbsp;<em><a href="http://litvis.org">Design Exposition with Literate Visualization</a></em>&nbsp;by Jo Wood, Alexander Kachkaev, Jason Dykes looks at the importance of capturing the process that leads to a visualization in order to understand the reasoning, trace the data, and also to show the labor that went into its creation.<br>

## Panel: Meet the Founders

I had organized a panel that I called <em>Meet the Founders: How to Start and Sustain a Business in the Visualization Space</em> with Lisa Avila (Kitware), Jeff Heer (Trifacta), and Anders Ynnerman (SCISS). The goal was to talk about what it takes to start your own business and what actual founders had learned doing so. We had a pretty full room, which was a pleasant surprise especially because the room we were in was a bit out of the way and this was the session right after lunch (always dangerous).

Lisa, Jeff, Anders, and I (speaking for Tableau, even if I’m not a founder) covered a lot of ground, and we got a number of good questions from people clearly interested in hearing from the people who had set out on their own.

## Perception &amp; Cognition

Creating charts is all good and well, but we need to understand how they are being read. These papers can be a bit theoretical, but they help us figure out how to build better systems. In addition to a good number of interesting papers, this year also included a meetup of <a href="http://visxvision.com/">the VisxVision group</a> that is aiming to make more connections between visualization and the vision sciences.

<em><a href="https://aviz.fr/deletion">Mitigating the Attraction Effect with Visualizations</a></em> by Evanthia Dimara, Gilles Bailly, Anastasia Bezerianos, and Steven Franconeri reports on a fascinating effect known from psychology: when somebody has to choose between two alternatives, adding a "decoy" similar but slightly inferior to one option makes that option more attractive. They show that this is present even in scatterplots and that it takes considerable effort to mitigate the effect.

<figure class="wp-block-image"><img src="https://media.eagereyes.org/wp-content/uploads/2018/10/face2face-teaser.png" alt="" class="wp-image-10915"/><figcaption>Which configuration is best for comparing values?</figcaption></figure>

<em><a href="http://hcil.umd.edu/visualcomparison">Face to Face: Evaluating Visual Comparison</a></em> by Brian David Ondov, Nicole Jardine, Niklas Elmqvist, and Steven Franconeri compares different configurations of different charts, like bars, donuts, and a few others, to see which made it easiest to compare between the values. Interestingly, what wins out is dependent on whether one looks for similarity or biggest change. For the latter, animation between the charts turns out to work well (at least for the small number of items they tested). In addition to some interesting results, this was also an incredibly well structured talk with some amazing overview and summary slides that gave a great graphical overview of the study, findings, etc.

<a href="https://github.com/gtvalab/ChartsEffectiveness"><em>Task-Based Effectiveness of Basic Visualizations</em></a> by Bahador Saket, Alex Endert, and Çagatay Demiralp extends some of the classic studies on chart effectiveness by looking at more fine-grained tasks that people might try to accomplish with them. They find that tasks makes a difference for some of the ranking between different charts, and in particular pointed out that the oft-maligned pie chart wins out for a handful of them.

<em><a href="https://github.com/cudbg/pae">At a Glance: Approximate Entropy as a Measure of Line Chart Visualization Complexity</a></em> by Eugene Wu, Remco Chang, Abigail Mosca, and Gabriel Ryan introduces a new measure for assessing the complexity of a line chart, which can be used to simplify charts, recommend different aspect ratios, etc.

## Uncertainty &amp; Error

Showing uncertainty in the data is still an issue with many visualization types and system. It’s too easy to believe that the data we see is precise and certain, when it often is not.

<a href="http://lacepadilla.com/exp/ensemble2018/Analysis.html"><em>Visualizing Uncertain Tropical Cyclone Predictions using Representative Samples from Ensembles of Forecast Tracks</em></a> by Le Liu, Lace M. K. Padilla, Sarah Creem-Regehr, and Donald House presents a design for a particularly important type of communication: showing the forecast for a hurricane. The existing cone of uncertainty is confusing (most people think the way it expands means the storm is growing) and leads to a false sense of security for people outside the cone (though the cone only covers 66% of the likely paths). The redesign presented in this paper vastly improves this by resampling the paths and presenting them with snapshots of the size of the storm at regular intervals. There are still some issues that it doesn’t solve, but it’s a huge step forward compared to the state of the art.

<a href="http://idl.cs.washington.edu/papers/hops-trends/"><em>Hypothetical Outcome Plots Help Untrained Observers Judge Trends in Ambiguous Data</em></a> by Alex Kale, Francis Nguyen, Matthew Kay, and Jessica Hullman evaluates Hypothetical Outcome Plots (HOPs), which show uncertainty using animation, compared to other ways of showing uncertainty. While <a href="https://medium.com/@uwdata/hypothetical-outcome-plots-hops-help-users-separate-signal-from-noise-870d4e2b75d7">the paper shows them to be superior for a number of tasks</a>, the consensus on Twitter during the talk was that they were still rather grating and potentially problematic for more than a single visualization. Better animation design (as Maureen Stone suggested after the talk) and ways to control the animation might help mitigate that.

<a href="http://visualization.ischool.uw.edu/~xiaoliq/uncertainty_vis_eval/"><em>In Pursuit of Error: A Survey of Uncertainty Visualization Evaluation</em></a> by Jessica Hullman, Xiaoli Qiao, Michael Correll, Alex Kale, and Matthew Kay looks at a large number of evaluations of uncertainty visualizations to see what kinds of tasks they consider important, etc. The webpage has a nice overview visualization that shows the categories they found.

<em><a href="http://cmci.colorado.edu/visualab/MissingData/">Where’s my data? Evaluating Visualizations with Missing Data</a></em> by Hayeong Song and Danielle Albers Szafir compares different ways of imputing and showing missing data in time series plots. Should the fact that the values are missing be highlighted or not? How should the missing data be imputed, and should it be done at all?

## Next Year: Vancouver

Next year’s VIS will be outside the U.S. once again: Vancouver, BC (Canada), October 20-25, 2019.


_Posted by <a href="/about">Robert Kosara</a> on October 31, 2018_


<aside class="comments">

---
## Comments

<a href="http://theresamarierhyne.com" rel="nofollow noopener" target="_blank">Theresa-Marie Rhyne</a> says…
>	HI Robert:
>	
>	I enjoyed reading your 3 posts on IEEE VIS 2018,  I wanted to add another perspective from the SciVis Contest and VAST Challenge side.  There were some very strong entries both of these contests that show the creative and hard work of many teams in the visualization community.  The Sci Vis Contest involved examine deep water asteroid impact ensemble data sets and the 8 finalist teams produced compelling SciVis implementations - see (http://ieeevis.org/year/2018/info/scivis-contest).  The VAST Challenge involved identifying patterns and discovering anomalies in bird migrations that were effected by water contamination in a wild life preserve.  Again, the breath and depth on the contributions were compelling with one of the winning entries being from a team of undergraduates. See these results at (http://ieeevis.org/year/2018/info/vast-challenge-program).  Although this is not the papers or panel presentation sides of the IEEE VIS event, it is a very important part of the particle of our field.  Each of the contributions shown at these two sessions represented hours of work in the discovery to patterns in SciVis and VAST data sets.  Very impressive indeed. 
>	
>	Theresa-Marie Rhyne

</aside>

