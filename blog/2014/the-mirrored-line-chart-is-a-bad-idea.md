---
title: "The Mirrored Line Chart Is A Bad Idea"
description: "The mirrored line chart is a pet peeve of mine. It's very common close to elections when there are two parties or candidates: one's gains are at the other's expense. But it becomes even more egregious when there are two categories that have to sum up to 100% by their very definition."
date: 2014-01-28 21:28:32
tags: 
featuredImage: https://media.eagereyes.org/wp-content/uploads/2014/01/benefits-mirror2.png
outline: false
---

# The Mirrored Line Chart Is A Bad Idea

The mirrored line chart is a pet peeve of mine. It's very common close to elections when there are two parties or candidates: one's gains are at the other's expense. But it becomes even more egregious when there are two categories that have to sum up to 100% by their very definition.

In her coverage of President Obama's State of the Union address, The Guardian finance and economics editor Heidi N. Moore <a href="https://twitter.com/moorehn/status/428382861016576000/">tweeted the following chart</a>, which came from <a href="http://www.nirsonline.org/index.php?option=com_content&amp;task=view&amp;id=768&amp;Itemid=48">a report by the National Institute on Retirement Security</a> (which, despite its official-sounding name, is a think tank):

<p align="center"><img class="aligncenter size-medium wp-image-3097" alt="Worker Benefits" src="https://media.eagereyes.org/wp-content/uploads/2014/01/benefits-mirror2-730x575.png" width="730" height="575" /></p>

What do the two lines here show? Or rather, what does the second line add? Nothing, that's what. Each of the labeled pairs of values sum up to 100.0%. The two lines mirror each other exactly.

It's obvious even without looking at the lines. The two categories here are "employer sponsors plan" and "employer does not sponsor plan" – that doesn't exactly leave room for a third option. They either do or they do not (insert obligatory Yoda joke here).

So what is the motivation for the second line here? Why add that when it contributes nothing? My guess is that the chart simply looked too empty and uninteresting with just a single line. It's the same reason many visualizations get overloaded with too much data. If it looks like there just isn't enough substance, even if it shows exactly what is needed, people often feel a need to add more to make it look more serious.

But what, you might ask, does it hurt? It's not made-up data, it's just the other category. The problem is that it adds clutter, and that it creates the impression of a strong inverse correlation when there is none. The two categories have to sum up to 100% by definition, there is no third option.

When the data is coming from polling results, at least there are undecided voters who add a bit of interest. Though even that is often <a title="Embracing Uncertainty in Two-Line Charts" href="/blog/2012/embracing-uncertainty-two-line-charts">misrepresented or downright hidden</a>. But here, there isn't even uncertainty. It's a simple sum of two numbers. It's redundant information.


_Posted by <a href="/about">Robert Kosara</a> on January 28, 2014_


<aside class="comments">

---
## Comments

Steve says…
>	This seems fair but only if you clearly have 2 components to the sum.
>	If you have a 3rd element (Like say a viable 3rd party), then you would need to show all applicable lines in such a chart otherwise it would be misleading.

Roman says…
>	Imagine two (collectively exhaustive) competing product groups which are tracked (as a percentage of total sales) over time. In such a case, wouldn't line crossings in the mirrored line chart show someting potentially interesting and meaningful, namely, events where one product group became more dominant than the other?

derek says…
>	The line crossings would always occur exactly on the 50% line, so all you would need to do is highlight that horizontal grid line.

Andy says…
>	I'd tend to disagree with you on this. I can think of at least three scenarios where having the inverse line is useful:
>	
>	1. Answering questions about the inverse statistic. For example, when were there large gains/drops in the number of employers that did not sponsor plans? Or, maybe more straight-forward, take an election example. When did Mitt Romney see large surges or loss of support? When did Mitt Romney hit his lowest level of support? Yes you could answer these questions by looking for the inverse trend in the "primary" (&gt;50%) line, but that is not as intuitive. Also, in general it's easier to gauge the approximate value of the inverse statistic by looking at the second line (when available), as opposed to having to mentally calculate (100 minus Line 1 value).
>	
>	2. Making quick comparisons in magnitude of the "gap" between the two measures. Having the second line makes it much easier to determine the approximate spread between the statistics by looking at the area between the lines. I feel this is much easier and more intuitive than looking for the 50% line and doubling that value to estimate the this value.
>	
>	3. In situations where the information being portrayed is not so clearly "yes/no" (again polling data would be a good example), I'm not clear on how you choose which line you choose to display and which you omit. Should the NYT have displayed an Obama line when he was above 50% and a Romney line during times when Obama fell below 50% support? 
>	
>	I totally agree with the goal of reduction of clutter and making charts simple and easy to read, but I think you're going a little too far here.

jlbriggs says…
>	That's only true if the purpose is specifically to show percentages of all groups encompassed in the data.
>	
>	There are plenty of circumstances where you only need to show 1 category, and the others are not relevant to the purpose of the chart, no matter how few or how many there are.

<a href="http://workingvis" rel="nofollow noopener" target="_blank">Graham Will.</a> says…
>	I agree with Andy, especially on point #2. The second line highlights the gap between the two lines and so makes it much easier to estimate how far apart they are. This would be especially important for charts where there was some good reason to be interested in parity (e.g. Percentage of Male/Female data visualization bloggers :-) in the figure above it's pretty easy to see, for example, that the gap at its largest is about five times as wide as when it is at its smallest.
>	
>	Even if that were not true, I am not convinced that providing redundant information that does not make a chart harder to understand is "a bad idea". In most user design scenarios, we are encouraged to encode redundantly. In communication, it is suggested we repeat ourselves to make things clear. So if a chart shows the same information two ways, and both ways are truthful, and neither detracts from the other, how is that a "bad idea"?

Stephen Etheridge says…
>	The point about specifying percentage of Male/Female is a good one. When comparing the gender bias, you hardly want to leave either one of them off the chart for fear of seeming impartial!

<a href="http://twitter.com/hjortholm" rel="nofollow noopener" target="_blank">hjortholm (@hjortholm)</a> says…
>	+1 for two lines. The gap between the lines adds visual info about the difference. With only one line you task the brain with doing the math 100-X to get the other value. Visualization is all about reducing workload for the brain and convey info

</aside>

