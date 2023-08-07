---
title: "What Means Mean"
description: "Data is often reported as a single number. Unemployment rates, housing prices, crime, etc. are all boiled down to single numbers that average over a large population. But averages, or means, hide much of the richness of the underlying data, and without at least a sense of the spread of the data values, are largely meaningless."
date: 2013-08-06 20:27:21
tags: attention
featuredImage: https://media.eagereyes.org/wp-content/uploads/2013/08/means-teaser.png
---

# What Means Mean


<p align="center"><img class="aligncenter size-full wp-image-2543" alt="Means SVG Ersatz" src="https://media.eagereyes.org/wp-content/uploads/2013/08/means-ersatz.png" width="455" height="305" /></p>

The visualization above shows the unemployment rate in 380 metro areas in the U.S. from January 2003 to June 2013 (data from the <a href="http://www.bls.gov/lau/home.htm">Bureau of Labor Statistics</a>). Each of these is itself an average, but the overall mean is also shown as a heavier line. Mouse over to see individual metro areas highlighted.

As you explore, you will see many small and large patterns that the average, or mean, completely misses. You can see some <a href="javascript:toggle(['.MT062094', '.MT044974', '.MT432502']);">outliers with very high unemployment</a>, <a href="javascript:toggle(['.MT282506', '.MT283770', '.MT222934', '.MT221294', '.MT223538', '.MT222638']);">Hurricane Katrina</a>, <a href="javascript:toggle(['.MT124268', '.MT434950', '.MT184546']);">seemingly random spikes</a>, etc. (click these links to highlight them in the visualization above, click again to turn the highlight off).  That is part of the function of the mean: it averages away small changes. That can be a desired effect, but it is often glossed over when numbers like unemployment rates are reported. Does a small change in the average taken over 200 million people really mean much? Worse yet, does no change mean that nothing happened?

How do you account for the large variation in this data, though? One way is to include a range based on percentiles. The most obvious would be to report the range from smallest to largest value. That does tend to be very sensitive to outliers, however, which may or may not be desirable. Instead, perhaps a narrower range should be reported that covers most of the data, with the extreme values treated separately. But which one?

Percentiles are one of the simplest ideas in statistics: sort the data values, then pick the ones you want depending on their location in that list (as a fraction of the length of the list). The value in the middle is the 50th percentile, also known as the median. The value one quarter of the way into the list is the 25th percentile, etc. Picking the range of values from the 25th to the 75th percentile selects half the data (dropping the bottom and top quarters); this is also called the interquartile range.

A common way of looking at data is to drop the top and bottom 5%, which leaves the range from <a href="javascript:switchToPercentile(2);">5% to 95%</a> (clicking these links will change the settings of the visualization above). That removes quite a bit of the range, though. Is <a href="javascript:switchToPercentile(1);">1% to 99%</a> better? How about the <a href="javascript:switchToPercentile(6);">interquartile range</a>? Talking about percentiles in the abstract is one thing, but seeing how much data, and how much of the range of values, that ignores, is quite another.

Calculating percentiles requires additional data. With unemployment data, there is some on metro areas, sectors, and a number of demographic values. In other cases, that data is often not easy to find or simply not available. But whenever possible, we need to demand more context than a single number. A simple mean without such context is meaningless.


_Posted by <a href="/about">Robert Kosara</a> on August 06, 2013_


<aside class="comments">

---
## Comments

<a href="http://gravatar.com/debbiemccullough" rel="nofollow noopener" target="_blank">debbiemccullough</a> says…
>	Wonderful writeup here.  I think it is important, as a statistician, to understand when using a mean is appropriate (versus say the median), and also how to include additional information that will put that mean into context (such as standard deviation, confidence intervals, etc.).  I also think that the recent advances in data visualization solves some of the problem here.  We no longer have to constrain ourselves to a few statistics to tell a story... why not paint a picture using the data?

<a href="http://www.florianbrucker.de" rel="nofollow noopener" target="_blank">Florian</a> says…
>	A good introduction on how to deal with variation! In addition, people should be aware that there are multiple ways to determine a dataset's "center" (mean, median, etc.). Here's a small tool to play around with different definitions: http://www.florianbrucker.de/index.php?p=byallmeans

<a href="http://geoanalytics.net" rel="nofollow noopener" target="_blank">Gennady</a> says…
>	Nice applet - works fine even on my phone. We've used a similar technique in our 2005 paper http://doi.ieeecomputersociety.org/10.1109/IV.2005.135

lalaa says…
>	There's nothing to see but text :-(

<a href="http://eagereyes.org/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	Fixed, thanks!

</aside>

