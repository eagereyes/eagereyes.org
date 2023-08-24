---
title: "Anscombe's Quartet"
description: "Visualization may not be as precise as statistics, but it provides a unique view onto data that can make it much easier to discover interesting structures than numerical methods. Visualization also provides the context necessary to make better choices and to be more careful when fitting models. Anscombe's Quartet is a case in point, showing that four datasets that have identical statistical properties can indeed be very different."
date: 2011-02-13 20:32:16
tags: criticism
featuredImage: https://media.eagereyes.org/media/2011/anscombe_teaser.png
---

<p align="center"><img src="https://media.eagereyes.org/media/2011/anscombe_teaser.png" alt="" width="600" height="207" /></p>

# Anscombe's Quartet
Visualization may not be as precise as statistics, but it provides a unique view onto data that can make it much easier to discover interesting structures than numerical methods. Visualization also provides the context necessary to make better choices and to be more careful when fitting models. <a href="http://en.wikipedia.org/wiki/Anscombe's_quartet" target="_blank">Anscombe's Quartet</a> is a case in point, showing that four datasets that have identical statistical properties can indeed be very different.

## Arguing for Graphics in 1973

In 1973, Francis J. Anscombe published a paper titled, <em>Graphs in Statistical Analysis</em>. The idea of using graphical methods had been established relatively recently by John Tukey, but there was evidently still a lot of skepticism. Anscombe first lists some notions that textbooks were "indoctrinating" people with, like the idea that "numerical calculations are exact, but graphs are rough."

He then presents a table of numbers. It contains four distinct datasets (hence the name <em>Anscombe's Quartet</em>), each with statistical properties that are essentially identical: the mean of the <em>x</em> values is 9.0, mean of <em>y</em> values is 7.5, they all have nearly identical variances, correlations, and regression lines (to at least two decimal places).

<table>
<tbody>
<tr>
<th style="text-align: center;" colspan="2">I</th>
<th style="text-align: center;" colspan="2">II</th>
<th style="text-align: center;" colspan="2">III</th>
<th style="text-align: center;" colspan="2">IV</th>
</tr>
<tr>
<td style="text-align: center;">x</td>
<td style="text-align: center;">y</td>
<td style="text-align: center;">x</td>
<td style="text-align: center;">y</td>
<td style="text-align: center;">x</td>
<td style="text-align: center;">y</td>
<td style="text-align: center;">x</td>
<td style="text-align: center;">y</td>
</tr>
<tr>
<td style="text-align: right;">10.0</td>
<td style="text-align: right;">8.04</td>
<td style="text-align: right;">10.0</td>
<td style="text-align: right;">9.14</td>
<td style="text-align: right;">10.0</td>
<td style="text-align: right;">7.46</td>
<td style="text-align: right;">8.0</td>
<td style="text-align: right;">6.58</td>
</tr>
<tr>
<td style="text-align: right;">8.0</td>
<td style="text-align: right;">6.95</td>
<td style="text-align: right;">8.0</td>
<td style="text-align: right;">8.14</td>
<td style="text-align: right;">8.0</td>
<td style="text-align: right;">6.77</td>
<td style="text-align: right;">8.0</td>
<td style="text-align: right;">5.76</td>
</tr>
<tr>
<td style="text-align: right;">13.0</td>
<td style="text-align: right;">7.58</td>
<td style="text-align: right;">13.0</td>
<td style="text-align: right;">8.74</td>
<td style="text-align: right;">13.0</td>
<td style="text-align: right;">12.74</td>
<td style="text-align: right;">8.0</td>
<td style="text-align: right;">7.71</td>
</tr>
<tr>
<td style="text-align: right;">9.0</td>
<td style="text-align: right;">8.81</td>
<td style="text-align: right;">9.0</td>
<td style="text-align: right;">8.77</td>
<td style="text-align: right;">9.0</td>
<td style="text-align: right;">7.11</td>
<td style="text-align: right;">8.0</td>
<td style="text-align: right;">8.84</td>
</tr>
<tr>
<td style="text-align: right;">11.0</td>
<td style="text-align: right;">8.33</td>
<td style="text-align: right;">11.0</td>
<td style="text-align: right;">9.26</td>
<td style="text-align: right;">11.0</td>
<td style="text-align: right;">7.81</td>
<td style="text-align: right;">8.0</td>
<td style="text-align: right;">8.47</td>
</tr>
<tr>
<td style="text-align: right;">14.0</td>
<td style="text-align: right;">9.96</td>
<td style="text-align: right;">14.0</td>
<td style="text-align: right;">8.10</td>
<td style="text-align: right;">14.0</td>
<td style="text-align: right;">8.84</td>
<td style="text-align: right;">8.0</td>
<td style="text-align: right;">7.04</td>
</tr>
<tr>
<td style="text-align: right;">6.0</td>
<td style="text-align: right;">7.24</td>
<td style="text-align: right;">6.0</td>
<td style="text-align: right;">6.13</td>
<td style="text-align: right;">6.0</td>
<td style="text-align: right;">6.08</td>
<td style="text-align: right;">8.0</td>
<td style="text-align: right;">5.25</td>
</tr>
<tr>
<td style="text-align: right;">4.0</td>
<td style="text-align: right;">4.26</td>
<td style="text-align: right;">4.0</td>
<td style="text-align: right;">3.10</td>
<td style="text-align: right;">4.0</td>
<td style="text-align: right;">5.39</td>
<td style="text-align: right;">19.0</td>
<td style="text-align: right;">12.50</td>
</tr>
<tr>
<td style="text-align: right;">12.0</td>
<td style="text-align: right;">10.84</td>
<td style="text-align: right;">12.0</td>
<td style="text-align: right;">9.13</td>
<td style="text-align: right;">12.0</td>
<td style="text-align: right;">8.15</td>
<td style="text-align: right;">8.0</td>
<td style="text-align: right;">5.56</td>
</tr>
<tr>
<td style="text-align: right;">7.0</td>
<td style="text-align: right;">4.82</td>
<td style="text-align: right;">7.0</td>
<td style="text-align: right;">7.26</td>
<td style="text-align: right;">7.0</td>
<td style="text-align: right;">6.42</td>
<td style="text-align: right;">8.0</td>
<td style="text-align: right;">7.91</td>
</tr>
<tr>
<td style="text-align: right;">5.0</td>
<td style="text-align: right;">5.68</td>
<td style="text-align: right;">5.0</td>
<td style="text-align: right;">4.74</td>
<td style="text-align: right;">5.0</td>
<td style="text-align: right;">5.73</td>
<td style="text-align: right;">8.0</td>
<td style="text-align: right;">6.89</td>
</tr>
</tbody>
</table>

But when plotted, they suddenly appear very different.

<p align="center"><img src="https://media.eagereyes.org/media/2011/anscombe.png" alt="" width="600" height="436" /></p>

While dataset I appears like many well-behaved datasets that have clean and well-fitting linear models, the others are not served nearly as well. Dataset II does not have a linear correlation; dataset III does, but the linear regression is thrown off by an outlier. It would be easy to fit a correct linear model, if only the outlier were spotted and removed before doing so. Dataset IV, finally, does not fit any kind of linear model, but the single outlier makes keeps the alarm from going off.

How do you find out which model can be applied? Anscombe's answer is to use graphs: looking at the data immediately reveals a lot of the structure, and makes the analyst aware of "pathological" cases like dataset IV. Computers are not limited to running numerical models, either.

>	A computer should make <strong>both</strong> calculations <strong>and</strong> graphs. Both sorts of output should be studied; each will contribute to understanding.

## What is an Outlier?

In addition to showing how useful a clear look onto data can be, Anscombe also raises an interesting question: what, exactly, is an outlier? He describes a study on education, where he studied per-capita expenditures for public schools in the 50 U.S. states and the District of Columbia. Alaska is a bit of an outlier, so it moves the regression line away from the mainstream. The obvious response would be to remove Alaska from the data before computing the regression. But then, another state will be an outlier. Where do you stop?

Anscombe argues that the correct answer is to show both the regression with Alaska, but also how much it contributes and what happens when it is removed. The tool here, again, are graphical representations. Not only the actual data needs to be shown, but also the distances from the regression line (the <em>residuals</em>), and other statistics that help judge how well the model fits. It seems like an obvious thing to do, but presumably was not the norm in the 1970s, and I can imagine that it still not always is.

## Scientific Paper or Blog Posting?

Besides the content, what is remarkable about the paper is its tone: Anscombe states his opinions and uses some fairly strong language (by today's standards). He calls the floating-point notation computers produce when printing out numbers "abominable," talks about textbooks "indoctrinating" students, and does not back up his claims with a lot of data (e.g., there's no study showing that people cannot infer the structure of the datasets from merely reading the table).

I have seen similar things in papers from that time and earlier. Some of this would be shot down by reviewers today, and never make it into a published paper. It's almost as if these papers were partly scientific paper, partly blog posting to vent some steam or argue a position.

Anscombe also describes his preference for APL (an ancient programming language), but assures the reader who can program in FORTRAN or PL/1 that he'll be able to produce graphs. Mere users of statistical packages, however, were out of luck in the early '70s. The paper closes with a call for action:

<PostedBy />


<aside class="comments">

---
## Comments

<a href="http://www.theusRus.de/blog" rel="nofollow noopener" target="_blank">Martin Theus</a> says…
>	<br>
>	"<em>Anscombe argues that the correct answer is to show both the regression with Alaska, but also how much it contributes and what happens when it is removed</em>"
>	
>	<br>
>	This is maybe the most important concept one has to understand. Using graphical means to understand data - preferable interactive - will make the optional choice more natural. If you are (only) looking for THE one correct/optimal model, you will probably miss a lot which contributes to the dataset.

<a href="http://dboptimizer.com" rel="nofollow noopener" target="_blank">Kyle Hailey</a> says…
>	Good write up on an important example of the power of visualizing of quantitative data graphically. The concept of using graphics was actually a hard sell 10-15 years ago. At the time Anscombe’s quartet was the most important example I had when arguing for graphics in performance analytics and dashboards. Now days the tides are changing with graphical visualizations everywhere. I now have engineers now chastising me when I provide textual data without any graphics! It's a refreshing change.
>	Even though tides are changing for the better, Anscombe’s Quartet will always be a powerful example of the insights that can be gleamed from  graphical visualization of quantitative data.  Thanks for the write up.
>	
>	- Kyle Hailey

Gurbaksh says…
>	if we have to find any relationship or correlation between these variable that differentiate all four. which one do you think will be better?

</aside>

