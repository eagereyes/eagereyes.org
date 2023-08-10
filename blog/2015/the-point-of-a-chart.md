---
title: "The Point Of A Chart"
description: "When creating charts, it's important to pick the one that actually fits not just the data, but the task. That can require going outside your comfort zone to use something beyond the four or five most common chart types. Here is an example where the original chart does not support comparison between two different sets of numbers, but it's easy to fix."
date: 2015-08-26 21:56:37
tags: 
featuredImage: https://media.eagereyes.org/wp-content/uploads/2015/08/Ethnicities-bump-chart1.png
outline: false
---

# The Point Of A Chart

When creating charts, it's important to pick the one that actually fits not just the data, but the task. That can require going outside your comfort zone to use something beyond the four or five most common chart types. Here is an example where the original chart does not support comparison between two different sets of numbers, but it's easy to fix.

On Twitter this morning, <a href="https://twitter.com/StephenHoskins/status/636426882775252992">Stephen Hoskins pointed me</a> to <a href="http://www.nzherald.co.nz/nz/news/article.cfm?c_id=1&amp;objectid=11496657">this story about Auckland schools in the NZ Herald</a> as a good use of pie charts. It's an interesting case, because individually, these aren't bad pie charts. They show the make-up of the poorest (Decile 1, lowest decile) and richest (Decile 10, highest decile) schools in Auckland.

<p align="center"><img class="aligncenter size-full wp-image-8939" src="https://media.eagereyes.org/wp-content/uploads/2015/08/AucklandEthnicMakeup_Aug2015.gif" alt="AucklandEthnicMakeup_Aug2015" width="620" height="369" /></p>

They're okay pies because they only show a small number of slices each and they're very different. The sorting of the values could be better, but that's a minor issue here. Looking at each individually works if you want to see each of those schools is made up in terms of ethnicities.

The problem is that pies are really bad for comparison. This is especially problematic here where the differences are huge. It takes a while to even find the corresponding colors in both charts.

So I made a quick slope graph, with the bottom decile on the left and the top decile on the right. This fits into the same number of pixels, despite Tableau's slightly inefficient use of space here.

<p align="center"><img class="aligncenter size-medium wp-image-8941" src="https://media.eagereyes.org/wp-content/uploads/2015/08/Ethnicities-bump-chart1.png" alt="Ethnicities bump chart" width="660" height="394" /></p>

The point of this chart is really the comparison, and the differences are really stark. The slope graph makes them much more visible, and easier to understand, than the pair of pie charts. I also got rid of the color legend and instead labeled the lines directly (though I left out the exact numbers since they likely aren't terribly important).

It's not just about the difference in the chart type here (and avoiding the oft-maligned <a href="/techniques/pie-charts">pie chart</a>), but asking what the point of the visualization is. If it's comparison between sets of values (or over time), use a chart that makes that easy and clear.


_Posted by <a href="/about">Robert Kosara</a> on August 26, 2015_


<aside class="comments">

---
## Comments

Joel says…
>	I like the bump chart at the bottom, but your eye is drawn to the center where there is no data.  Furthermore, the first and last deciles are the most likely to contain outliers…
>	
>	Maybe if it included another decile (5th) or two (4th &amp; 7th)?

<a href="http://gravatar.com/edomaniac" rel="nofollow noopener" target="_blank">edomaniac</a> says…
>	Is the bump chart better than say, a bar graph here? I know that's boring, but that seems like you'd get both relative and absolute comparisons pretty easily that way.

<a href="http://twitter.com/datanarrativist" rel="nofollow noopener" target="_blank">Judd Bradbury (@datanarrativist)</a> says…
>	Curious about a simple point plot with colored points? The color keys the eyes for the comparison without the line implying a trend that may or may not track in a linear fashion. I also like the idea of a side by side bar or column comparison. As always, a great simple thought generating post.

jonpeltier says…
>	Your chart's better, but it's a slope graph, not a bump chart.

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	Ah! Of course! Thanks, fixed.

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	Valid points. Showing all the deciles would be best, no doubt. This is a bit of an extreme slope graph (I mixed up the chart types earlier), it usually doesn't create such a strong x in the center.

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	A bar chart would definitely work, but I like the stronger implied comparison of the slope graph (I mixed up the chart types initially).

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	Colored points would also require finding the matching ones. You're right that the slope graph depends on the distance and the vertical scale. But I think this still works to compare without making a judgment about some sort of implied rate of change.

<a href="http://vislives.com" rel="nofollow noopener" target="_blank">Chris Pudney</a> says…
>	I wondered about using a scatter plot too, here's what it looks like
>	http://jsfiddle.net/cpudney/ekxnuLjz/8/
>	
>	I think the slopegraph works better.

<a href="https://plus.google.com/+AntoineCarriere" rel="nofollow noopener" target="_blank">Antoine Carriere</a> says…
>	I would use stacked bar instead, to make addition easy (eg European+Asian are x% of decile 1 but y% of decile 10). And maybe force the comparison by adding dotted lines.  What do you think?

Judd Bradbury says…
>	Agreed and having the reference line provides a great deal more "at a glance" high speed value

<a href="http://www.academicservicing.com/" rel="nofollow noopener" target="_blank">James Russell</a> says…
>	I agree on this one. Since we are using graph or charts to give visual impacts to the audience, let's just do it in the right way. There different types of charts or graphs for different agenda and delivery of the data. A right pick of your type will serve its purpose exponentially. Also, you should know how to use colors on them. And I must say, the discussion in your article is very clear for understanding. It is commendable...

</aside>

