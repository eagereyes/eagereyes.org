# Two Short Papers on Part-to-Whole Charts at EuroVis

Why do pie charts look the way they do? What makes this particular way of slicing up a circle the preferred way of showing part-to-whole relationships? In two short papers that I’m presenting this week at [EuroVis](https://www.eurovis.org), I looked at the design space of circular part-to-whole charts, including pie charts.

The first paper, titled *[Circular Part-to-Whole Charts Using the Area Visual Cue](/publications/Kosara-EuroVis-2019a)*, was motivated by the designs Drew Skau and I created for [the studies that showed that angle was unlikely to be the cue used to read pie charts](/papers/a-pair-of-pie-chart-papers). It was surprising that the *area-only* condition did as well as the pie chart itself, because the slice showing the data had an irregular shape that changed with the value.

So I designed a study to test seven different ways of slicing up a circle to represent a fraction by area. Out of these, the pie chart did the best, but there was another chart, which I’m going to call *the moon pie*, that did equally well for accuracy (and better for speed): sliding a circle of the same size over the base circle to create the part that shows the fraction (similar to how the earth’s shadow creates the phases of the moon).

The second study, *[The Impact of Distribution and Chart Type on Part-to-Whole Comparisons](/publications/Kosara-EuroVis-2019b)*, builds on the first one and addresses a criticism I keep getting about the earlier work: why only two slices? Why not test more? So I took the pie chart, the moon pie, the straight-slice pie (the area-only condition from earlier), as well as a stacked bar chart and a treemap, and sliced them up into five slices. I also varied the distribution of the numbers to have either a fat-tail or a long-tail shape.

The moon pie did well in this one too, and much better than the treemap. Stacked bars held their own in this part-to-whole task, even though they’re terrible for most other uses. And the pie chart, which served as the baseline, again did better or at least as well as, any of the other techniques.

The visualization community may not like pie charts, but in the real world they’re hugely popular and very common. Rather than sneering at them (and the people who use them), why don’t we [try to understand them better](/blog/2016/an-illustrated-tour-of-the-pie-chart-study-results)? In particular, the design space of part-to-whole charts is almost entirely unexplored. The only other chart that’s used for this purpose out in the world, the treemap, hasn’t been studied for this purpose much (if at all). And it seems to actually do worse than the pie chart (and the moon pie).

The two papers very much belong together, you could almost call them two parts of a single paper. I can’t confirm or deny that they were a single paper at some point and may have gone through several rounds of review (and rejection) over several years.

---

Robert Kosara, [Circular Part-to-Whole Charts Using the Area Visual Cue](/publications/Kosara-EuroVis-2019a), *EuroVis Short Papers*, 2019

Robert Kosara, [The Impact of Distribution and Chart Type on Part-to-Whole Comparisons](/publications/Kosara-EuroVis-2019b), *EuroVis Short Papers*, 2019
