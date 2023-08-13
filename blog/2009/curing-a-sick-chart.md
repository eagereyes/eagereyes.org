---
title: "Curing A Sick Chart"
description: "I recently criticized Ben Fry's visualization of health care cost data from GE and claimed that I knew how to do it better. While my analysis may not be as pretty and flashy as Fry's, it provides actual insight into the data. It also reveals an interesting issue: the data is really dull. So dull, in fact, that a visualization was needed to cover up that fact."
date: 2009-12-06 22:49:44
tags: criticism
featuredImage: https://media.eagereyes.org/media/2009/sickchart/patients-age-disease-thumb.png
---

<p align="center"><img src="https://media.eagereyes.org/media/2009/sickchart/patients-age-disease-thumb.png" alt="Patients by age and disease" width="560" height="349" /></p>

# Curing A Sick Chart

I recently <a href="/criticism/cost-of-a-sick-chart">criticized Ben Fry's visualization of health care cost data from GE</a> and claimed that I knew how to do it better. While my analysis may not be as pretty and flashy as Fry's, it provides actual insight into the data. It also reveals an interesting issue: the data is really dull. So dull, in fact, that a visualization was needed to cover up that fact.

My original plan had been to create something interactive, but I simply lack the time to do that right now. So the analysis was done in <a href="http://www.tableausoftware.com/">Tableau</a> and is presented here as images. If you have Tableau, you can also grab my <a href="https://media.eagereyes.org/media/2009/sickchart/Cost-of-Getting-Sick.twbx">packaged Tableau workbook</a> to play with, or download the data in a <a href="https://media.eagereyes.org/media/2009/sickchart/cost-reshaped.csv">consolidated and reshaped CSV file</a>.

The data was extracted from the applet on <a href="http://www.ge.com/visualization/health_costs/index.html">GE's Health Costs page</a>. Tom Carden <a href="/criticism/cost-of-a-sick-chart#comment-2052">pointed out how to interpret the original data</a> and produced some first graphs; Martin Theus also <a href="http://www.theusrus.de/blog/chicken-and-egg-problem-follow-up/">provided an analysis</a>. While they both found some first trends, I don't believe they really got to the bottom of this.

## Overview

To get a first idea of the data, let's look at the number of patients and cost over age. The age range here is actually wider than what the original applet showed: from 1 to 79 years of age (the data even contains an age 0, which I discarded).

<p align="center"><img src="https://media.eagereyes.org/media/2009/sickchart/patients-cost.png" border="0" alt="Number of Patients and Cost" width="560" height="328" /></p>

Not surprisingly, the number of patients increases with age up to the mid-50s and early 60s, and then decreases again. Note that these are absolute numbers that have no discernible relationship to the U.S. population as a whole. Not surprisingly, the costs very closely mirror the number of patients, with a skew towards older patients. In fact, the correlation appears to be so strong that I had to look at it in a separate chart.

<p align="center"><img src="https://media.eagereyes.org/media/2009/sickchart/cost-patients-correlation.png" border="0" alt="Correlation between number of patients and total cost" width="250" height="237" /></p>

The shade of blue here represents age, with lighter shades being younger, darker older. As people get older, the costs increase; but the overall correlation is incredibly strong. This makes exploration of this data by users somewhat pointless, but more on that below.

Tom and Martin used stacked bar charts to summarize the data, though I don't find those particularly useful in and of themselves. A stacked chart does provide some context for the following analysis, though.

<p align="center"><img src="https://media.eagereyes.org/media/2009/sickchart/stacked-patients.png" border="0" alt="Number of patients stacked" width="560" height="328" /></p>

We see that the most common disease is hypertension (dark purple), and that osteoporosis (dark brown), diabetes (light green), and acid reflux (dark blue) seem to be the other major ones across most of the age range.

## Drilling Down

My original idea for a redesign of the visualization was to use small multiples. This is very easy to do in Tableau, and much more useful to see actual patterns (without different categories distorting each other). Ignoring the less common diseases, we get a very clear, concise chart.

<p align="center"><img src="https://media.eagereyes.org/media/2009/sickchart/patients-age-disease-percent.png" border="0" alt="Patients by age and disease small multiples" width="560" height="327" /></p>

This visualization shows percent of the total number of patients at each age, so patterns do not depend on the considerable differences in the number of people in the data set over the ages (a chart showing patient numbers is at the very top of this page). It answers the original question I had when I saw the applet, but was not able to answer using it: what is the distribution of diseases over time?

Some interesting patterns emerge here. Acid reflux has its biggest spike at age 1, and then only really comes back in the late 20s. Asthma seems to be much more prevalent with children and teenagers than people over 20. Chronic sinusitis is common among children and then very slowly drops off as people get older. Depression has its peak around age 20 and drops off considerably with age. Diabetes, hypertension, and osteoporosis are the problems that get more severe as people get older.

Of course, GE thought people would be interested in cost. So let's look at hypertension: number of patients, total cost, and cost per patient. The bottom chart essentially shows what the scatterplot showed above, but in this case only for one disease.

<p align="center"><img src="https://media.eagereyes.org/media/2009/sickchart/hypertension.png" border="0" alt="Hypertension costs per patient" width="560" height="328" /></p>

Apart from some noise at ages below 20 (where there are very few patients), there is a very clear and smooth upwards trend in cost per patient. It's not surprising, since older patients presumably need more care, surgery, etc. What this does show, though, is that the costs continue until the end, because I decoupled them from the sample size. The applet did not do that, but inexplicably showed shrinking pie slices over age 70 or so.

The trend is to be expected, and while you may or may not have predicted it to look exactly like this, it's not really very exciting. Healthcare costs more as people get older, big surprise.

One question (potential) patients as well as GE should be interested in is what fraction of the cost the patient pays compared to the insurer. So let's look at this in yet another bar chart: insurer cost is at the top, patient/personal cost in the middle, and the personal cost as a fraction of total cost at the bottom.

<p align="center"><img src="https://media.eagereyes.org/media/2009/sickchart/insurance-cost.png" border="0" alt="Personal vs. insurer cost" width="560" height="328" /></p>

Another dull chart! The percentage is around 18% on average, with a very slow downwards trend with age. This chart could easily be summarized in a single number. Or maybe in another scatterplot to show how closely the two costs correlate:

<p align="center"><img src="https://media.eagereyes.org/media/2009/sickchart/insurance-correlation.png" border="0" alt="Personal/insurer cost correlation" width="247" height="237" /></p>

This is even stronger than the cost vs. age chart above. It's really pointless to even show that information (like Fry's applet does with the two colors in every wedge) if it doesn't change in a meaningful way over time or within subsets of the data.

## The Point of Showing Data

There is something even more concerning that I discovered here than simply a bad chart: a gratuitous visualization. The data is mind-numbingly dull. The pretty, interactive, animated visualization was simply there to cover up that fact. Perhaps if people can play with a rotating pie thingy they won't actually question the data?

If this was really about information, a few numbers or a few simple charts would have provided a lot more insight. They would also have been more honest. Look, people get more sick and they cost more as they get older. Hypertension, diabetes, osteoporosis, and acid reflux are the big issues (it's interesting that they left out cancer, btw). You pay about 20% of the actual costs. That's it.

That would have been much less interesting to look at, but people would have gotten something out of it. So what is (or should be) the priority here: entertainment or information? Is making something look a lot more complex than it is an honest way of presenting data? Would people feel cheated if they saw the summary after playing with the applet for a few minutes and not learning anything? Or is the engagement the only thing that really matters?

These questions may sound biased, but I am really interested in finding this out. What is the right way to present data? What do people really care about?

## Making It Better

Given the data, I think there are better ways than an interactive visualization for this kind of information. Why not make it a quiz? Show some distributions over age and have people guess which one is which disease. I'm sure there are some more interesting patterns in the other diseases, even if they don't make up a large portion of the data. But the point here would be to present different qualities of distributions, not just the biggest issues. These wouldn't even have to just be aggregated by year, perhaps seasonal distributions would be interesting, too.

Another part of the game could be to present the distribution of two or three diseases and have the user guess the age at which this configuration occurs. Do that based on percent of patients or percent of costs. All of these things could be accompanied by numbers showing total costs (since that is apparently what GE wants to communicate).

And why not make the costs part of the quiz? Guess how much you'll spend on acid reflux at age 65. Maybe break it down by day/week/month. Or guess how much all 65-year-olds are spending across the U.S. taken together. I realize that that latter part is not in their current data, but it shouldn't be too hard to get some decent estimates.

## Visualization is not Obfuscation

Using visualization to make the data appear to be more complex and interesting than it is is kind of sad. Visual complexity should be used to help understand data, not to obfuscate it. Building a <a href="http://en.wikipedia.org/wiki/Potemkin_village">Potemkin Village</a> of colorful shapes is just as bad as <a href="/blog/2008/linear-vs-quadratic-change">scaling a circle by radius</a>: it's deceiving and visually dishonest.


_Posted by <a href="/about">Robert Kosara</a> on December 06, 2009. Filed under [criticism](/section/criticism)._


<aside class="comments">

---
## Comments

<a href="http://peltiertech.com/WordPress/" rel="nofollow noopener" target="_blank">Jon Peltier</a> says…
>	<p>Fry's fancy visualization required two separate interactions to reveal one data point at a time. Your first chart, the panels of patient count vs. age shows all of these points in a single view.</p>
>	<p>Too many visualizations use interaction like this, such that the view of the data is actually obscured by the visualization. But it gives the viewer a false sense of "Wow, I'm interacting here, cool!"</p>
>	<p>The other dimension (patient count, patient's and insurer's per patient cost, total cost, etc.) still needs either interaction or separate charts. Personally, I'd go with separate charts.</p>

Anonymous says…
>	<p>I think you're selling your graphs short. I found them pretty interesting, myself.</p>
>	<p>One way to make a bigger impact with graphics is to include a point of view, or maybe even a conclusion. For example, right now many people view Medicare as sacred, while believing that extending Medicare to children under 18 would lead the country to damnation. If you tweaked your charts just a bit (showing treatment cost per person, rather than cost per patient) it might shed some light on the financial tradeoffs involved in this question.</p>
>	<p>One nitpick: why on earth are you using bar charts for this data? It adds a huge amount of visual noise; using a filled line graph would be much easier on the eyes and make it far easier to see trends and patterns. It's also arguably closer to the truth, using linear interpolation to undo some of the distortion caused by binning the data.</p>

<a href="http://www.theusRus.de/" rel="nofollow noopener" target="_blank">Martin Theus</a> says…
>	<p>Robert,</p>
>	<p>I think there is benefit to both the stacked relative costs that add up to 100% as I used <a href="http://www.theusRus.de/Blog-files/TotalCostShare.png">here</a> as well as the "split up" version you use <a href="https://media.eagereyes.org/media/2009/sickchart/patients-age-disease-thumb.png">above</a>. A single mouse click should take you from one view to the other. The split up version definitely face the problem that you can not use the plot space very efficiently - a problem which all small multiples have.</p>
>	<p>(I wonder why you didn't show a comparison of the <a href="http://www.theusRus.de/Blog-files/PatShare.png">patients shared costs</a> and the <a href="http://www.theusRus.de/Blog-files/CostsPerPat.png">costs per patient</a> between diseases. These comparisons should have the highest potential of showing something interesting, which is not more or less obvious - and in fact there was not much of a story here)</p>

Kyle says…
>	<p>Age 0 is actually a real datapoint, it's children under age 1. The databases that organizations like WHO put out use the same format. It'd actually be interesting to see the plots for age 0, because neonatal care is extraordinarily expensive.</p>

<a href="http://teknodog.com/" rel="nofollow noopener" target="_blank">3D Systems</a> says…
>	I like your conviction that "Visual complexity should be used to help understand data, not to obfuscate it."

</aside>

