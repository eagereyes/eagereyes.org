---
title: "VIS 2016 – Tuesday"
description: "The official opening of the main conference was today, Tuesday. The conference is now in full swing until Friday."
date: 2016-10-26T02:31:22.000Z
tags: conference, IEEEVIS
---

# VIS 2016 – Tuesday

The official opening of the main conference was today, Tuesday. The conference is now in full swing until Friday.<!--more-->

## Opening

Attendance at the conference is flat – Terry Yoo gave no precise numbers, but at least it's not shrinking. I figure they don't want to release precise numbers in the hope that there's just a bit of statistical fluctuation. It's a bit of a departure from previous years, though.

As in previous years, the opening presentation slides were straight out of the 1980s: blue gradient background, white text. We've moved on from red text on blue background at least, but it still blows my mind how this sort of thing is considered the right choice at a visualization conference. And not even just <em>a</em> visualization conference, but <em>VIS</em>.

## Keynote: Dr. Ricardo Hausmann

<a href="https://www.hks.harvard.edu/about/faculty-staff-directory/ricardo-hausmann">Hausmann is an economist at Harvard</a> and runs the group behind the <a href="http://atlas.cid.harvard.edu"><em>The Atlas of Economic Complexity</em></a>. The Atlas is the embodiment of Hausmann's theory that the wealth gap between nations (and also between regions within countries) can be modeled by network effects.

The talk was really fascinating. Hausmann started by pointing out the enormous gap between countries today (about 250:1 between the richest and the poorest). His argument is that that difference is largely due to technology and the tacit knowledge people have – the kind of knowledge that is not encoded and easily available, but that needs to be acquired by every individual. He also talked about the exponential growth that results from a country making a number of different things that can be combined into many more things (much like Scrabble letters let you make a lot more words when you add just one). That growth depends on the things being technology though (in a wide sense), not natural resources (which are a dead end).

There was a lot more in this excellent talk, but it's a bit too much to describe here.

## InfoVis

InfoVis had 37 papers accepted this year out of 165 submissions, for a 22.4% acceptance rate. This is up slightly from previous years, which is not a bad thing. Pushing too hard on the acceptance rate is not healthy for the field.

<a href="http://va.gatech.edu/vbd"><em>Visualization by Demonstration: An Interaction Paradigm for Visual Data Exploration</em></a> by Bahador Saket, Hannah Kim, Eli T. Brown, and Alex Endert shows an interesting new idea for how to construct visualizations. You show the system what you want to see in terms of encodings, and it figures out how to get there. This works well for things like size encodings, etc., where this would let you explore the data in a very unusual way: rather than trying to find the right measure that leads to what you need, you sketch what you want to see and it finds the fitting data.

It's certainly an unusual idea, but it has some limitations. There are a few interactions that seem a bit odd, like how to indicate that you want a bar chart when you're dealing with a scatterplot (by stacking points in the scatterplot) or the other way around (by moving points out bars).

<a href="https://idl.cs.washington.edu/papers/vega-lite"><em>Vega-Lite: A Grammar of Interactive Graphics</em></a> by Arvind Satyanarayan, Dominik Moritz, Kanit Wongsuphasawat, and Jeffrey Heer received the Best Paper award this year. Vega Lite is a sort of successor to Vega, which allows you to specify visualizations in a declarative way. Vega Lite is much more concise however, because it fills in defaults for things that are not specified, and provides many complex things out of the box (like a selection based on a Voronoi diagram, zooming and panning, brushing, etc.)

Vega is open source, and there is <a href="http://vega.github.io/vega-lite/">an online playground</a> to try it out. This is based on an earlier version than the paper presented though, but they hope to release an updated version soon. They are also seeing others build infrastructure on top of Vega-Lite, like <a href="https://github.com/ellisonbg/altair">a set of friendly Python bindings called <em>Altair</em></a>.

<a href="http://wpivis.github.io/hindsight"><em>HindSight: Encouraging Exploration through Direct Encoding of Personal Interaction History</em></a> by Mi Feng, Cheng Deng, Evan M. Peck, and Lane Harrison shows users their own histories to increase interaction and engagement. This is somewhat similar to the way browsers indicate visited links, but richer and with more of an idea of an Information scent.

Since I'm a bit sick, I ended up only attending a handful of talks and had to skip VisLies and the Art Show opening. Hopefully this will get me back into shape for more extensive reporting tomorrow, though.


---
## Comments

<a href="https://www.facebook.com/app_scoped_user_id/1121036637926538/" rel="nofollow noopener" target="_blank">Bella Gotie</a> says…
>	Thanks for the reports and Feel Good!

<a href="http://theresamariehyne.com" rel="nofollow noopener" target="_blank">Theresa-Marie Rhyne</a> says…
>	Hi Robert:
>	
>	Just to help you with reporting on a few items:
>	
>	In the 4:15 PM VAST Machine Learning papers session it was standing room only. The VAST Best paper on An Analysis of Machine and Human Analytics in Classification by Tam, Kothari, and Chen was well received. 
>	
>	In the 4:15 PM SciVis Topology-based Techniques session, the SciVis best paper on Jacobi Fiber Surfaces of Bivariate Reeb Space Computation by Tierny and Carr was presented and well received.
>	
>	The VIS Arts Program included abstract 2D and 3D compositions by Mark Stock: http://markjstock.org
>	
>	In VizLies: There was an interesting set of geographic maps shown where the titles did not match the data and the data did not match the concept being mapped.  It was amazing how incorrect the visualizations were. Ken Moreland and Bernice Rogowitz both showed awesome VisLies examples with Ken's being humorous while Bernice's were very instructional on what not to do.
>	
>	The posters and exhibit displays at IEEE VIS 2016 are impressive. 
>	
>	Looking forward to Wednesday's CG&amp;A 10:30 AM Session on Visualization Systems &amp; Applications papers that were previously published during the 2015/2016 year in CG&amp;A. 
>	
>	A Major Wednesday highlight is also the SciVis Contest session, at 2 PM, that presents the winner, honorable mentions and entries of the 2016 contests.
>	
>	And then there is the banquet on Wednesday evening.

<a href="http://idl.cs.washington.edu/" rel="nofollow noopener" target="_blank">Jeffrey Heer</a> says…
>	Thank you for mentioning our group's work on Vega-Lite!
>	
>	In case readers are interested, I thought I'd briefly highlight the specific research contributions of the work: extending grammar-based visualization specification to support *interactive, multi-view displays*.
>	
>	In addition to the individual, static plots common to existing tools, we propose ways to concisely generate multi-view displays (from trellis plots and scatter plot matrices to arbitrary layers and dashboards) and, most importantly, to author interaction techniques (panning, zooming, brushing &amp; linking, and so on) -- all within a declarative and compositional framework that supports custom design rather than cookie-cutter templates.
>	
>	The current version of Vega-Lite available online does not yet include these interactive extensions, but we're hard at work developing a release fit for public consumption. We hope to have this out within the next few months! (http://idl.cs.washington.edu/papers/vega-lite/)

<a href="http://dreamer89blog.wordpress.com" rel="nofollow noopener" target="_blank">bahador67</a> says…
>	Thanks for mentioning our work Robert. 
>	
>	The idea of stacking data points to convey an interest in a bar chart stems from a study conducted by INNOVIS lab (directed by Sheelagh Carpendale) to understand how people create visualizations using only tangible building blocks. They showed that majority of participants stacked data points in the shape of bars to count the number of specific items. 
>	
>	We are currently working on expanding this idea to other visualization techniques (e.g., line charts), analytical tasks (e.g.,aggregating), and domains data visualization (e.g., interaction by demonstration).


