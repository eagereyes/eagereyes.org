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
