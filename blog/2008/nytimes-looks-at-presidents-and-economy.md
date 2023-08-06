---
title: "NY Times looks at Presidents and the Economy"
description: "The New York Times has an interesting interactive visualization on the influence of presidents on the economy. They ask,&nbsp;Can a President Tame the Business Cycle? The visualization they use is not bad, but would be much more readable if it used a better color scale."
date: 2008-10-18 23:17:58
tags: Politics
featuredImage: https://media.eagereyes.org/media/2008/nytimes-presidentseconomy.png
outline: false
---

<p align="center"><img src="https://media.eagereyes.org/media/2008/nytimes-presidentseconomy.png" alt="NY Times, Can a President Tame the Business Cycle?" width="407" height="170" border="0" /></p>

# NY Times looks at Presidents and the Economy

The New York Times has an interesting interactive visualization on the influence of presidents on the economy. They ask, <a href="http://www.nytimes.com/interactive/2008/10/18/business/20081019-metrics-graphic.html">Can a President Tame the Business Cycle?</a> The visualization they use is not bad, but would be much more readable if it used a better color scale.

What exactly is a "high" or "low" change? This is how the legend describes the different colors used, and it turns out that "low" sometimes means negative. The color scale as shown in the legend is continuous, but one with just a few values (maybe five on either side of zero) would have been much more readable. Also, it is kind of important if things go up or down, which is impossible to see in this chart. Where exactly is zero on the color scale? The bar chart has no such problem.

<p style="text-align: center;"><img src="https://media.eagereyes.org/media/2008/nytimes-presidentseconomy-detail.png" alt="Change in real income" width="484" height="278" border="0" /></p>

The answer here is a diverging color scale with two colors that are different enough so that it is easy to see which side of zero a value is. <a href="http://colorbrewer.org/">ColorBrewer</a> has a number of color scales for such (and other) purposes.

What is good about the graphic is its interactivity and the amount of data: almost 60 years of data, and seven dimensions is quite a bit of stuff to work with. There is also quite a bit of level-of-detail, with a mouse-over tooltip and a way to "drill in" for the bar/line chart.

Of course, it would be great if all of the data they collected for graphics like this were immediately available through <a href="http://developer.nytimes.com/">their API</a> ...


_Posted by <a href="/about">Robert Kosara</a> on October 18, 2008_


