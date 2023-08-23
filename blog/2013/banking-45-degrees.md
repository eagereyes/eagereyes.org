---
title: "Aspect Ratio and Banking to 45 Degrees"
description: "The same data can look very different in a line chart depending on its aspect ratio. But what is the perfect shape for a chart? A square? A rectangle? Which rectangle? It depends on the data."
date: 2013-06-02 20:17:30
tags: attention, basics
featuredImage: https://media.eagereyes.org/wp-content/uploads/2013/06/aspect-ratios.png
---

# Aspect Ratio and Banking to 45 Degrees

The same data can look very different in a line chart depending on its aspect ratio. But what is the perfect shape for a chart? A square? A rectangle? Which rectangle? It depends on the data.

## Aspect Ratios

The ratio between the width and the height of a rectangle is called its aspect ratio. It is typically expressed as a fraction with two numbers, the width divided by the height. An aspect ratio of 1:1 describes a square, while 4:3 (or 1.33:1) is a landscape rectangle, and 16:9 is a much wider landscape rectangle. While the width is usually larger than the height in film and photography, there is no reason that this be the case in other applications like charts.

When applied to visualization, the aspect ratio describes the area that is occupied by the data in the chart, even if the overall chart area might be larger. A change in aspect ratio means a change in the angle of the lines, etc.

The image below shows the same graph (which you may remember from <a href="/basics/baselines">the posting on baselines</a>) in three different aspect ratios. Note how the same parts of the graph have very different slopes in the different versions.

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2013/06/aspect-ratios.png" alt="" width="300" height="200" /></p>

In contrast to a photograph, where a wrong aspect ratio is usually easy to detect because the image appears stretched or squished, things aren’t nearly as obvious in a chart. What is the right aspect ratio?

## Banking to 45 Degrees

In <a href="http://www.jstor.org/stable/2288843">a paper from 1988</a>, Bill Cleveland, Marylyn McGill, and Robert McGill proposed the idea that the average line slope in a line chart should be 45º. This has been dubbed <em>banking to 45º</em> and has turned into one of the bits of common wisdom in visualization as determining the ideal aspect ratio.

What people often miss, however, is what task Cleveland and the McGills were after. The paper is very specifically about the comparison between the slopes of two lines, and the slope is the average between those two lines. So if the goal is to be able to compare the rates of change between lines, the 45º average slope makes sense as a rule. It may be a good idea in other circumstances as well, but this particular study does not offer any information to support that.

Often, the bigger issue is to make a line chart appear reasonably neutral, without either making the changes appear too extreme (by picking an aspect ratio that is too small) or too flat (with an aspect ratio that is too high). Banking to 45º is a reasonable heuristic for that. But what it is not is a general principle that guarantees a good chart.

## Clevelandgate

At last year’s InfoVis conference, Justin Talbot, John Gerth, and Pat Hanrahan <a href="http://vis.stanford.edu/papers/slope-ratio-comparison">presented a paper</a> that was based on a replication attempt of the banking to 45º paper.

What they had found was that there were some methodological issues in the original paper. In particular, the 45º value was at the boundary of the space that had been explored in that study. While Cleveland et al. assumed the precision of value judgments would again decrease when going below 45º, they did not present actual data to show that.

When testing lower average slopes, Talbot et al. found that people actually got better with shallower slopes. The 45º were an artifact of the study design.

While flat graphs may work for this narrowly defined task, they do not work well in general. So being closer to 45º is probably still better if you want to see the changes in a single line, be able to see overall patterns, etc.

## A Bit of Guidance

Despite the issues with the study, banking to 45º still seems like a good idea. It tends to produce graphs that look reasonable and a standard, any standard, makes graphs easier to compare. While there are <a href="http://vis.berkeley.edu/papers/banking/">techniques to calculate the optimal aspect ratio</a> for a given dataset, it is often sufficient to do this with some visual judgment (aka ‘eyeballing it’). Just be aware that this isn’t some natural law, and that there can be good reasons not to pick 45º.

It is a testament to the youth of visualization as a field that even something as basic as the aspect ratio of a line chart is not actually understood very well, and essentially based on a single study from 25 years ago that is limited both in its scope and the strength of its results.

[[PostedBy]]

<aside class="comments">

---
## Comments

<a href="http://workingvis.wordpress.com" rel="nofollow noopener" target="_blank">workingvis</a> says…
>	Interesting study; good to see some fundamental work here. I do wish they had used adjacent pairs for their full time series tests instead of all pairs of segments, as it seems more likely the former models real world situations. I'm wondering as I read whether it would make a difference. On the one hand there should not be a systematic difference in average angle comparisons, but on the other the judgement of angles for unconnected lines should be very different from the judgement of an angle between two connected segments. 
>	
>	One interesting related area might be map projections, which I've been looking at recently for our IBM visualization work. There is a large body of work on "what makes a good projection" and it might be interesting to feed the segments produced by such projections into a tool that measures the angle differences.
>	
>	It would not surprise me to find out that, regardless of how good they are at judging relative angles, people just plain prefer to see visualizations that bank to 45. Hmmm ... Might go off and add that diagnostic to our engine ...

<a href="http://infodez.wordpress.com/" rel="nofollow noopener" target="_blank">Francis G</a> says…
>	Shouldn't it also depend on your data set?
>	
>	If you have 20 years of data and want to show a sudden drop during one year, it seems that the top right graph (1:2?) is most appropriate. It would be like an excerpt and reflect reality better.
>	
>	Regardless of my example, it seems that one of the objectives of the graph should be to reflect reality as closely as possible, which is better served if you know the proportion of the relevant data set (e.g. 1 month out of a year) that you are visualizing.
>	
>	If I'm not clear, I could build an example.

<a href="http://r4stats.wordpress.com" rel="nofollow noopener" target="_blank">Bob Muenchen</a> says…
>	I've been banking to 45 since reading Cleveland's book many years ago. I hadn't seen Talbot, Gerth, and Hanrahan's article. Thanks for the interesting update!

<a href="http://t" rel="nofollow noopener" target="_blank">ezra abrams</a> says…
>	over the years, i have noted that actual EXPERIMENTS on graphs - asking people to react to diff graphs -
>	have in fact been done, but the literature is so scattered, in so many diff silos, that no one seems to know much
>	eg, there is a lady in MI, a medical information type, who has done studies on how tables of clinical data affect how people respond to tests results
>	etc
>	be nice if some PhD student took the time to put it all together.
>	I think I've lost most of the links I've gathered (there was a review in Science (AAAS) last year or so

<a href="http://www.yunhaiwang.org/" rel="nofollow noopener" target="_blank">Yunhai</a> says…
>	Does banking to 45 degrees really work? We provide a dual-scaling banking for the user to choose aspect ratios for any input 1D curves ? http://www.yunhaiwang.org/bankto45/RobustAspectRatios.html

</aside>

