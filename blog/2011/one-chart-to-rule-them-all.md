---
title: "One Chart To Rule Them All"
description: "Finding the right chart for complex data is not an easy task. A reader pointed me to a presentation (PDF) by the New Hampshire Department of Education that illustrates some of the thinking behind choosing a new visual representation. The tool of choice here is the bubble chart."
date: 2011-03-08 00:02:26
tags: criticism
featuredImage: https://media.eagereyes.org/media/2011/bubbles-teaser.png
---

<p align="center"><img src="https://media.eagereyes.org/media/2011/bubbles-teaser.png" alt="" width="600" height="166" /></p>

# One Chart To Rule Them All

Finding the right chart for complex data is not an easy task. A reader pointed me to <a href="http://www.education.nh.gov/instruction/school_improve/documents/presentationtosups_dec2010.pdf" target="_blank">a presentation (PDF)</a> by the <a href="http://www.education.nh.gov/instruction/school_improve/" target="_blank">New Hampshire Department of Education</a> that illustrates some of the thinking behind choosing a new visual representation. The tool of choice here is the bubble chart.

## Reading

The goal of the work presented in these slides is to design an accountability system for schools in New Hampshire. The slides go into some depth on the complexities of doing this from a data point of view (what kinds of measures to use, how to compare them, etc.).

To show the data, the department has chosen the bubble chart. It's not really a new chart type, since it is basically a scatterplot with additional data mapped to properties like color and size. But it has gotten a lot of attention since it was featured in <a href="http://www.gapminder.org/" target="_blank">gapminder</a> and Hans Rosling's <a href="http://www.gapminder.org/videos/the-joy-of-stats/" target="_blank">widely watched presentations</a>.

The chart is also well designed here: labels are not only placed along the axes to show numbers, but there are qualitative labels in each corner that explain what each of them means. The goal here is obviously to make it easy for people not familiar with the chart to understand what they should be looking for.

The horizontal axis shows the increase in reading performance as a percentile, while the vertical axis shows the current achievement percentile. School size is mapped to bubble size, and color represents the number of children enrolled in free lunch programs (and is thus a proxy for poverty).

<p align="center"><img src="https://media.eagereyes.org/media/2011/readingbubbles-large.png" alt="" width="600" height="391" /></p>

It is clear that a lot of thinking went into this chart, but it is still confusing. It's simply trying to do too much. The mapping of the axes seems a bit odd: the horizontal axis is usually the independent variable, with the vertical axis the dependent one. It seems a lot more logical to me to map achievement onto the x axis, and the rate of change onto y. That would not change the overall pattern (it would just be rotated), and the overall lower-left-to-upper-right dynamic would still be there.

The bigger issue is the amount of information, though. Using a continuous color scale and size is just too much, especially since there are no strong trends. Size does not seem to play a role, so it should be removed. There is a very slight color gradient that is visible in the vertical direction (current performance), though some of that might be due to the interaction of color with transparency.

## 'Rithmetic

A better use of bubble charts is shown a little further down in the presentation, when it comes to comparing subgroups. In this case, the size of the bubbles represents subgroup sizes, with color showing which subgroup a bubble belongs to. The spatial coordinates are mapped as before, but for math rather than reading.

<p align="center"><img src="https://media.eagereyes.org/media/2011/mathbubbles1-large.png" alt="" width="600" height="392" /></p>

<p align="center"><img src="https://media.eagereyes.org/media/2011/mathbubbles2-large.png" alt="" width="600" height="392" /></p>

<p align="center"><img src="https://media.eagereyes.org/media/2011/mathbubbles3-large.png" alt="" width="600" height="392" /></p>

This clearly works a lot better, especially when comparing different subgroups. Color is a great choice for categorical data, especially when the number of categories is small (like here). Also, the highlighting of one subgroup, with all other bubbles pushed to the background with less saturation, is extremely effective to focus on a part of the data without losing context.

Without transparency in the foreground, and with colors that are different enough not to get confusing even if there were transparency, the bubbles are much easier to read and less overwhelming than above. The use of bubble size also makes sense here, because there are clearly size differences between the groups.

The differences between the subgroups are quite striking, and are beautifully displayed with this chart. It's an effective and useful chart that serves a clear purpose.

## Percentiles

What struck me about this presentation is not only the great use of bubble charts, but also a really peculiar chart that is a combination of a bar chart and bubbles. It shows three values for a large number of schools: a median student growth percentile (in math), a target percentile for the school, and the percentage of students in each school meeting the growth target.

<p align="center"><img src="https://media.eagereyes.org/media/2011/percentiles-large.png" alt="" width="600" height="384" /></p>

I have spent a lot of time staring at the chart, but have yet to fully understand it. What is obviously a problem here is the mix of two different kinds of data: percentiles and percentages. Just because both go from 0 to 100 doesn't mean that they should be shown on the same axis.

The other odd thing is the relationship between the growth target and the median student growth. Many of the schools seem to be well within their targets, which is a good thing. But these targets are often comically low: the first school seems to have a target of being in the 88th percentile, which does not seem to be very ambitious.

The target percentiles are apparently the medians for all the targets set for students in each school. Obviously, these vary widely within each school, just like the actual growth percentiles. It seems that a better approach here would be to show some kind of histogram, or at least the extent of actually observed values to get a clearer idea of what is going on in each school.

The goal, both for this chart and for the presentations overall, seems to be to boil things down to as few numbers as possible, but that obviously removes a lot of interesting information. It also greatly reduces the usefulness of the visualization, which actually becomes a lot more confusing because of this.

## Conclusion

It's easy to criticize bad charts and chart choices, but it's actually much more interesting to see what people come up with given powerful tools. This example shows innovative charts used "in the wild," and by people who presumably have little or no background in visualization.

The bubble chart is gaining a lot of traction: one of the slides states that they "love the bubble charts," and they're not a bad choice in this case. But despite its relative ease of use (especially given the clever labels in the corners), it's important not to overload it with too much data.


_Posted by <a href="/about">Robert Kosara</a> on March 08, 2011. Filed under [criticism](/section/criticism)._


<aside class="comments">

---
## Comments

<a href="http://peltiertech.com/WordPress" rel="nofollow noopener" target="_blank">Jon Peltier</a> says…
>	I think in the first chart, the color and size are the independent variables and the axes are both dependent variables. 
>	
>	I've always thought bubbles were better if they appeared in discrete sizes, like the circles on a map sized to represent population of a town. No need to interpolate sizes or wonder if they are scaled to diameter or area. Discrete bubble sizes is analogous to the distinct colors to show categories in the math charts.

Robert Kosara says…
>	Yes, I didn't quite finish that thought about dependent and independent variables. What I meant was that it makes more sense to me to show rate of change over a baseline of static values, rather than the other way around. You're probably right about the independent values, though.
>	
>	I don't agree about size. It's quite easy to compare sizes, but it obviously gets more difficult the further apart the bubbles are (or the more there are that overlap). Also, town sizes aren't discrete numbers, unless you're only thinking of the order of magnitude (10,000, 100,000, etc.).

<a href="http://peltiertech.com/WordPress" rel="nofollow noopener" target="_blank">Jon Peltier</a> says…
>	I see your point now about the horizontal and vertical axes, and you make sense.
>	
>	I know town populations are not discrete values, but the city markers you see in maps usually have a single size that covers a population range. You get a more qualitative judgment, but I don't think continuously varying dots improve on this.

<a href="http://www.excelcharts.com/blog/" rel="nofollow noopener" target="_blank">Jorge Camoes</a> says…
>	It's not easy to find the right balance. Show too much and you hide patterns; show too little and you end up with an obvious and useless pattern.
>	
>	The first chart is like a long one-sentence paragraph. It is readable, but the author could try shorter sentences instead (a scatter plot matrix, perhaps?).
>	
>	Sometimes I feel that we can learn more about data visualization reading a good book on copy-writing or rhetoric than from a data visualization handbook.

Nigel says…
>	Is there one or more software programs you would recommend for generation of bubble charts? I am looking for a standalone program.
>	
>	Thanks,
>	
>	Nigel

<a href="http://www.tyfujimura.com" rel="nofollow noopener" target="_blank">Ty Fujimura</a> says…
>	Apt comparison, very insightful. Outsiders have the same problem with both disciplines: they think it's far easier and faster than it is in reality. Anyone can write a sentence or draw a chart, but few can do it correctly.

<a href="http://www.tyfujimura.com" rel="nofollow noopener" target="_blank">Ty Fujimura</a> says…
>	Same here. A general recommendation for charting software would be great too.

<a href="http://www.tyfujimura.com" rel="nofollow noopener" target="_blank">Ty Fujimura</a> says…
>	I should clarify that I'm in need particularly of something that can export to EPS or another vector format, for easy import into Adobe creative suite.

<a href="http://glodime.com" rel="nofollow noopener" target="_blank">Eric Morey</a> says…
>	I couldn't imagine fining anything useful in sitting through a presentation with such an awful slide deck. At least it included some interesting graphs.

<a href="http://socsci.tau.ac.il/sec-dip/" rel="nofollow noopener" target="_blank">David</a> says…
>	To #6, I think your'e in the wrong place for that kind of stuff. You might want to search Google before you comment.

</aside>

