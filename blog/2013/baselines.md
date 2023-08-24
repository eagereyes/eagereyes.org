---
title: "Continuous Values and Baselines"
description: "One of the most common mistakes people make when creating charts is to cut off the vertical axis. But why is that a problem? And what can you do when you need to show data where the amount of change is small compared to the absolute values?"
date: 2013-04-28 21:23:37
tags: attention
featuredImage: https://media.eagereyes.org/wp-content/uploads/2013/04/baseline-change.png
---

# Continuous Values and Baselines

One of the most common mistakes people make when creating charts is to cut off the vertical axis. But why is that a problem? And what can you do when you need to show data where the amount of change is small compared to the absolute values?

When we think of <a title="Data: Continuous vs. Categorical" href="/basics/data-continuous-vs-categorical">continuous data</a>, we almost always think of values that have a meaningful zero. There is no question what an amount of money is measured from, we understand the meaning of zero money. The same is true for most other things: length, weight, volume, etc. all have an obvious zero. It doesn’t matter what unit you use, zero meters is zero feet is zero furlongs is zero lightyears.

As a consequence, we can think in terms of multiples, without even caring about units. Something being twice as heavy as something else is meaningful independently of whether you weigh using pounds or kilograms, and something is twice expensive whether you pay in Euros or Dollars or Yen.

## Bars: Length Is Just Another Unit

When data gets mapped to visual variables for visualization, we tend to make the same assumptions. A bar that is twice as long represents a value that’s twice as big. But that is only true if that bar starts from zero. If it was cut off, that is no longer true.

The following image shows the monthly sales of a fictitious coffee chain over a few months. The left bar chart starts at zero, the right one at $29K. Notice the difference?

<p align="center"><img class="aligncenter size-full wp-image-2336" alt="Bars, with baseline 0 and baseline $29K" src="https://media.eagereyes.org/wp-content/uploads/2013/04/baseline-bars.png" width="600" height="190" /></p>

In the right-hand chart, the bar for February appears to be roughly twice as high as the one for January. Twice the bar size means twice the value, right? But looking at the chart on the left, it’s obvious that the change is rather small.

The first thing to do when looking at a chart, therefore, is to make sure you understand the vertical axis. If it starts at 0, it is much easier to read the chart without being misled.

## Lines Don’t Need Baselines?

Some people suggest that in contrast to bar charts, line charts are not sensitive to the baseline problem. However, I disagree. Look at the same data as before, this time shown as a line chart.

<p align="center"><img class="aligncenter size-full wp-image-2338" alt="Lines, with baseline 0 and baseline $29K" src="https://media.eagereyes.org/wp-content/uploads/2013/04/baseline-lines.png" width="600" height="190" /></p>

Is the change not much more dramatic in the right-hand part of this image? The line chart maps the value to vertical position rather than length, which is less obviously connected to the axis. But when the points are connected, we tend to think in terms of the distance from the axis, not in terms of a few points floating in space.

Line charts with a non-zero baseline are very common. They are still problematic, however, because the apparent change can be deceiving. Having to look at the numbers on the axis to figure out the amount of change requires a lot more mental work and partly defeats the point of the chart.

## Mapping Change

So what alternative do we have when we want to create a chart that makes the change visible, but the amount of change is small compared to the absolute values? One way is to plot the change separately. This could be done as percent or absolute difference, here it is absolute difference (same values shown as lines and bars).

<p align="center"><img class="aligncenter size-full wp-image-2337" alt="Change, shown using lines or bars" src="https://media.eagereyes.org/wp-content/uploads/2013/04/baseline-change.png" width="600" height="190" /></p>

Now the scale for the amount is independent of the scale for the change. This also makes it easy to see whether the change is positive or negative, because the relation with the zero line is very visually salient (especially when using bars). Also, the rate of change is much more obvious. While that can be seen in the bar and line charts, it is much harder to get a good sense of it.

Showing small changes in large values is a challenge, but it helps to ask, what do we care about here? What do we need to know? That should guide the way the data is shown.


<PostedBy />


<aside class="comments">

---
## Comments

<a href="http://www.graus.nu" rel="nofollow noopener" target="_blank">dvdgrs</a> says…
>	"[...] Twice the bar size means twice the value, right? [...]"
>	
>	No? The y-axis is labelled (30k -&gt; 34k), that should be clear enough, right?
>	Besides, sometimes relative differences are more interesting than absolute.

<a href="http://www.graus.nu" rel="nofollow noopener" target="_blank">dvdgrs</a> says…
>	BTW: I understand the point, but to me it seems a bit of a bold assumption that people aren't able to read bar-charts and graphs. If however this is the case, and you still want to point out differences in more detail, a caption pointing out the non-0 baseline could possibly serve just as well?

<a href="http://rud.is/" rel="nofollow noopener" target="_blank">hrbrmstr</a> says…
>	It's not that folks can't effectively read a bar chart, but that in less than a second our preattentive processing has already digested the "skewed" data and it requires deliberate further investigation to separate out that initial preattentive bias from what's actually going on. Given how quickly most people scan through things, that preattentive glance may be all that occurs and will leave them with a skewed perception. Even if folks take time to pour over the non-0-baselined version, that initial bias has a lingering, powerful after-effect on the take-away message.
>	
>	Imagine a different chart above where the values are in billions, but with variances between each only being a few dollars, but with the baseline being $29billion and each tick being a dollar. It's unlikely a dollar difference here or there would mean anything at all, but the chart would look exactly like the skewed one above and give a completely wrong first impression. Sadly, many shops use this technique to deliberately lie with or at least strongly misrepresent what the underlying data is actually saying. Baseline == 0 combined with a difference chart lets the data tell the story honestly.

Roman Pyzh says…
>	What if you consider a dyad instead of a single chart? For the bar chart:
>	 - the first part/graph would show a mean value as a single bar using the original scale with "whiskers"/lines denoting the standard deviation
>	 - the second, distinct but connected part/graph -- on a separate, rescaled scale -- would show the change as a difference from the mean with reference lines clearly showing deviation steps to bridge the context with the first part.
>	
>	By looking at the first part, one can see and relate the overall magnitude of the data in all its zero-baselined glory (the bar height) and the size of a "step" of change (by considering the distance between "whiskers"). Because of the shared context of the "step" of change (standard deviation), the second part is free to be rescaled to focus on the change aspect of the data.
>	
>	Showing a single-valued bar chart for the first part may look silly, but would help with comparing two or more different time series. Of course, the scale for the absolute value part should be consistent for each series.

Al says…
>	If it's a relative difference that is the point of interest, then you can use a chart type that emphasises the relative difference. 
>	
>	For example, deviation from an average: 0 is no change from the series average, and relative differences are clear above and below the line.
>	
>	Clearer, more intuitive, and no risk of being misleading.

<a href="http://infodez.wordpress.com/" rel="nofollow noopener" target="_blank">Francis G</a> says…
>	The problem is that the visualization contradicts the data. The data says "very little variation" and the bars say "very big variation". Yes, you can then read the scale and cancel the visual, but it defeats the purpose of the visual.

<a href="http://infodez.wordpress.com/" rel="nofollow noopener" target="_blank">Francis G</a> says…
>	I agree. Line graphs seem to be getting a pass, for reasons I fail to understand. To me, they are just as misleading as bar graphs with a baseline that does not start a zero. Your example shows this well.

<a href="http://peltiertech.com/WordPress/" rel="nofollow noopener" target="_blank">Jon Peltier</a> says…
>	I think you guys are overstating the case for a zero baseline for line charts. The precognitive effects described by hrbrmstr above that cause such misinterpretation of truncated bar charts are not nearly as pronounced in line charts. And I think the example shows that it's not such a problem as with bar charts.

</aside>

