---
title: "Understanding Pie Charts"
description: "Pie charts are extremely common, but people are also commonly mocked for using them. There are many ways to get them wrong, and there are many bad examples out there. But understanding pie charts and how to use them isn't that difficult, and the research shows that they're often not a bad choice."
featuredImage: 
tags: pie-charts
date: 2023-08-20 18:39:44
---

# Understanding Pie Charts

Pie charts are extremely common, but people are also commonly mocked for using them. There are many ways to get them wrong, and there are many bad examples out there. But understanding pie charts and how to use them isn't that difficult, and the research shows that they're often not a bad choice.

## What Is A Pie Chart?

The central idea of the pie chart is that you're comparing parts to the whole. Each pie slice is one value, and together they add up to something that makes sense. For example, say you have a company with five divisions and you look at revenue from each. The sum of all the revenue figures is the same as your total revenue, and you can look at each division and see how much (i.e., how many percent) it contributes.

Another common example is election data: you have seven candidates running for an office, they each get some number of votes. The total number of votes is all those added up (plus perhaps invalid votes that would make up their own category). The percentage of the vote each candidate gets is what you're after, and you can see that in

## Why Are Pie Charts Controversial?

It's not clear to me exactly why they are singled out like that. There are lots of bad examples of people doing bad things with pie charts, and perhaps they're more obvious or more common with pies. Pie charts also allow less precise reading than some other charts, so it's easy to dismiss them as worthless – but precision isn't always the main goal, and they have other advantages.

To illustrate the problem with pie charts and precision, 
<a href="https://commons.wikimedia.org/wiki/File:Piecharts.svg">this image by Wikipedia contributor Schutz</a>
is a good illustration (though a bit unfair, as you'll see in a moment).


<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2016/08/piecharts-wikipedia.png" alt="piecharts-wikipedia" width="660" height="474"/></p>

Look at the green slices and try to figure out if they are increasing or decreasing from left to right! Of course, that's not what pie charts are good at. Also, it's generally a bad idea to use pie charts for values that are very similar. And as I 
<a href="/techniques/stacked-bars-are-the-worst">point out in another article</a>
, you can easily construct an example that's equally bad with stacked bars.

## Good and Bad Examples

There is no end to bad pie charts, just take a look at 
<a href="http://viz.wtf">WTFViz</a>
(though you'll also find lots of other kinds of charts being used badly there). Here is perhaps my favorite example, 
<a href="https://commons.wikimedia.org/wiki/File:Pie_chart_of_US_population_by_state.png">a chart of all the populations of the 50 U.S. states from Wikipedia</a>
.

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2016/09/Pie_chart_of_US_population_by_state.png" alt="pie_chart_of_us_population_by_state" width="439" height="350"/></p>

What's wrong with this? Clearly, there are too many slices. You can see some of the more populous states (California, Texas, etc.) well, but once you go beyond Georgia, it gets really pointless. The slices get too thin to be comparable. It's also fun that the creator of this chart realized that there wasn't enough space at the top to get all the names in and put in a label for <em>Other</em> – but still left all the slices there!

The other common mistake is to throw numbers into a pie chart because they are percentages, even though they don't add up to 100% (or to <a href="/blog/2009/bring-out-your-dreadful-charts">way more than 100%</a>). This chart is from an otherwise <a href="http://money.cnn.com/this-is-birth-with-lisa-ling/">really well-done story on CNN Money</a>:

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2016/09/cnn-preterm-pie-chart.png" alt="cnn-preterm-pie-chart" width="600" height="394"/></p>

The problem is that the percentages are out of the births within each ethnicity, so they can't just be added up like that. This is not a meaningful chart. A bar chart would have made much more sense to compare these numbers.

## Some Rules of Thumb

There are no strict rules about how and when to use them. There are certainly useful guidelines, however.

<ul>
<li>
<strong>They have to make sense for your data.</strong>
    Don't use a pie chart on data where the parts don't sum up to a whole. What does that mean? If you're looking at revenue numbers for a few departments, but not all of them, you can't just put them into a  pie chart because their contributions will not be correct. You'll either have to add an 
<em>other</em>
    category or use a different chart type.
</li>
<li>
<strong>You're comparing the parts to the whole.</strong>
    If you're comparing numbers to each other, say which product makes you the most money, a bar chart or similar is going to be a much more precise representation. If you're looking at how much of your total revenue comes from product A though, a pie chart is a good way of showing that.
</li>
<li>
<strong>There's a small number of slices.</strong>
    If your data has more than 10 or so slices, that's probably too many. This is not a strict limit by any means, and depending on your data and use case, it might be higher. But if you go over about a dozen, you had better have a good reason for doing so.
</li>
<li>
<strong>The values have to differ.</strong>
    If the values are all very similar, you're just going to end up with something that looks like a wheel. Small differences in slices are hard to tell, so people won't be able to judge which slices are larger or smaller with any confidence. You don't need a pie chart to show that the values are similar, and a bar chart is going to give you better means of comparing them.
</li>
<li>
<strong>Sort the values.</strong>
    I don't actually know of research to support this, but it just appears to be a good idea to sort the slices by value, unless there's a good reason that some other order makes more sense.
</li>
<li>
<strong>Start at 12 o'clock.</strong>
    Again not something I've found research on (and when we've looked at this in our study data, we've found no evidence for slices starting at the vertical axis to be easier to read), but it's generally considered a good idea. If nothing else, it'll make the chart look better.
</li>
</ul>

These are all common-sense rules, and as you can see, not necessarily supported by research. But there's also no reason not to do any of them – at least until somebody does some more studies and figures out something better.

## Pies vs. Donuts

It's fairly common to see people deride donut charts (those pie charts with a hole in the center). This is based on the assumption that we read pie charts by angle: if that were true, it would be a bad idea to take out the center of the pie where you could read the angle the best.

We've recently shown that 
<a href="/blog/2016/an-illustrated-tour-of-the-pie-chart-study-results">angle isn't how we read pie charts</a>
though, and our studies also showed that donut charts are no worse than pie charts. So wherever you can use a pie chart, you might as well use a donut chart.

## Pie Chart Alternatives

If not pie charts, then what? I've written about 
<a href="/techniques/square-pie-charts">
<em>square pie</em>
    or 
<em>waffle charts</em>
</a>
here a few times. 
<a href="/blog/2008/engaging-readers-with-square-pie-waffle-charts">I've argued that they're engaging</a>
, and we found them to be 
<a href="/blog/2016/a-reanalysis-of-a-study-about-square-pie-charts-from-2009">the best performer in a study we ran</a>
 a few years ago. They're not supported very well by software, but there are ways if you google &#8220;waffle chart&#8221; and the name of your favorite visualization tool.


Another, more common alternative are bar charts. The problem is that stacked bars, which are the obvious comparison, 
<a href="/techniques/stacked-bars-are-the-worst">are actually really bad</a>
. A regular bar chart that lays out the values in individual bars is much better. What that gives you is very precise comparison of the individual values, but there is no way to compare individual values to the whole.

## Recent Science on Pie Charts

Okay, I'll admit: much of this is my own work. But these articles are based on published research papers. Drew Skau and I have conducted some experiments and found that the age-old assumption that angle is the way we read pie charts is probably wrong. That is important because it means that some things we thought were problematic really aren't (like donut charts) and some things we thought were fine are actually a bad idea (like increasing the radius of a single slice for emphasis).

- <em><a href="/talk/pie-charts-unloved-unstudied-and-misunderstood">Pie Charts – Unloved, Unstudied, and Misunderstood</a></em>. A talk I gave at Information+ in summer of 2016. It's a 20-minute talk about the pie charts studies. Also a fun talk, if I say so myself.
- <em><a href="/blog/2016/an-illustrated-tour-of-the-pie-chart-study-results">An Illustrated Tour of the Pie Chart Study Results</a></em>. This is the written-up version of the talk going through the main results. It shows how we figured out how to separate the visual cues, tested them, and then tested some hypotheses we developed based on those first results. I also have 
- <a href="/papers/a-pair-of-pie-chart-papers">a shorter summary of the two papers</a> I based this on.
- <em><a href="/blog/2015/ye-olde-pie-chart-debate">Ye Olde Pie Chart Debate</a></em>. If you think pie charts have only recently fallen from grace, let this sample of quotes from scientific papers in the 1920s show you otherwise.
- <a href="/criticism/in-defense-of-pie-charts">A paper I wrote about a while ago</a> did some interesting comparisons of pies and found that there is a particular task that they do better than even bars: combine neighboring slices and compare those to the whole.

See more under the [Pie Charts tag](/tag/pie-charts)!