<p align="center"><img src="https://media.eagereyes.org/media/2009/GE-healthcare-header.png" border="0" alt="GE Cost of Healthcare Visualization" width="560" height="318" /></p>

# The Cost of a Sick Chart

General Electric recently commissioned Ben Fry and Seed Media to visualize health data to communicate the costs of different kinds of diseases to the public. The result is pretty and colorful, but of little value if you actually want to learn something.

This would be less of an issue if it were a small hobby project done by somebody dabbling in visualization for the first time. But <a href="http://en.wikipedia.org/wiki/General_Electric">General Electric (GE)</a> is the world's largest company, it employs over 300,000 people around the world and had over 180 billion dollars of revenue in 2008. In addition to electric appliances, it makes almost anything you can imagine (plus a lot of things you probably didn't even know existed).

Among its many divisions and units is <a href="http://en.wikipedia.org/wiki/GE_Healthcare">GE Healthcare</a>, which employs 46,000 people. Just like GE in general, the latter develops lots of things, like imaging products, patient data systems, tools for drug discovery and manufacturing, surgery tools, and many more. When such a company decides to visualize data for the masses, we should be able to expect something substantial.

The actual work was done by (or at least under the supervision of) <a href="http://benfry.com/" target="_blank">Ben Fry</a>. He is the creator (together with Casey Reas) of the <a href="http://processing.org/" target="_blank">Processing</a> programming language and environment that is very popular with media artists, and the author of a book on information visualization using the language. His <a href="http://benfry.com/zipdecode/">zipdecode</a> project was the inspiration for my <a href="/topics/ZIPScribbleMaps">ZIPScribble Maps</a>. Fry is also the director of <a href="http://seedmediagroup.com/visualization/">Seed Visualization</a>, which is the company GE Healthcare contracted this visualization out to. GE has put up <a href="http://www.youtube.com/gereports#p/u/0/zN-ZehcVDsI">a video of Fry talking about data visualization</a>, though it only mentions this piece in passing.

Communicating the cost of healthcare to the general public is certainly a great idea, and they should be commended for doing this. Unfortunately, the visualization fails to get much meaningful information across.

## What is This Supposed to Show Me?

We're obviously looking at some kind of pie chart. Different pie slices have different colors and sizes. There is a slider that selects the age to look at, from 18 to 79.

Costs are encoded in the radius of each pie slice (the mapping takes <a href="/blog/2008/linear-vs-quadratic-change">the quadratic growth of area</a> into account, but see below). The angle of the slice is the number of cases in GE's dataset that covers around 500,000 people. Divided into individual ages and diseases, that still leads to fairly small numbers per pie slice, though.

The different shades show personal cost vs. insurer cost, with the personal cost closer to the center. As expected, the insurer cost tends to be much larger than the personal cost. The absolute numbers (though also the personal numbers) are still staggering, though. The numbers are shown next to the chart for the currently selected disease.

There is a mouse-over tooltip that shows the name of the disease, and when the user clicks on a wedge with the mouse, the chart rotates to point that wedge to the right and shows its information in the text box.

## Visualization Problems

The one sin not committed here is mapping the numbers to the radius, which is good. But the pie slices clearly encode too much information. The combination of angles for number of cases and cost for radius represents the total cost in the area, which may be interesting for insurers but is not very relevant to most people. It is also questionable whether the sample is really all that good (see the data problems below).

(Update: there seems to be an issue, after all. I will need to look into this further, but it appears that the number mapped to the radius is actually the total cost (i.e., cost per patient times patients). If that's true, it's redundant with the angle and a very bad mapping).

The color mapping has a number of problems. While most colors are distinct from the others, there are two very similar shades of green. These represent osteoporosis and acid reflux, not exactly two diseases that have a lot in common. There are also four diseases that are mapped to gray: rheumatoid arthritis, gastric ulcers, chronic bronchitis, and emphysema. The gray was probably chosen because these are so uncommon, and stronger colors would have made them stand out more. But that raises the question: why not break them out into a separate chart, or use a representation that is not disrupted so much by small outliers?

The animation when picking a disease is smooth, but it rotates in unpredictable ways. This is likely a simple problem with how the rotation angle is calculated, but is annoying nonetheless. Every time the rotation suddenly goes in the other direction (even if the selected slice is next to the currently active one), it takes the viewer a while to reorient. This makes comparisons very difficult.

Speaking of comparisons, this applet also very nicely demonstrates a problem in our visual system that makes using the radius in pie charts a bad choice: we tend to overestimate heights compared to width. Pick age 47 and click back and forth between depression (purple) and acid reflux (dark green). The values are not too far apart, and the wedges are at close to a right angle. The one that is more vertical will always appear to have a larger radius than the more horizontal one.

<p align="center"><img src="https://media.eagereyes.org/media/2009/GE-healthcare-47.png" border="0" alt="Depression and Acid Reflux at age 47" width="560" height="283" /></p>

Since the radius is different for every slice, this is not a pie chart. It's also not a <a href="http://understandinguncertainty.org/node/214">coxcomb plot</a>, because the angles are all different. So we're really looking at a general glyph, which is a complex graphical object whose features (sizes, lengths, angles, colors, etc.) correspond to data. The great strength of these is that they can show the temporal progression of multi-dimensional data, but only if you can see many time steps at the same time. Only being able to see one makes it difficult and tedious to follow developments. Did all diseases increase in cost between 45 and 50? Which ones didn't? Which ones became more prevalent, which ones less so?

People like round, compact shapes. But that doesn't mean that everything we do from now is going to be based on pies or similar charts. Despite people's preference, they have lots of drawbacks. A circle makes for a pretty graph, but it also brings with it lots of problems with data perception and readability of values that make it one of the worst choices.

## Data Problems

Visualization is a great way to identify data problems. While it can be challenging to find these while staring at numbers, they tend to stick out very clearly in a visualization. By just flipping through the ages, there is an obvious problem at age 20:

<p align="center"><img src="https://media.eagereyes.org/media/2009/GE-healthcare-gastriculcer.png" border="0" alt="Gastric ulcers at 19, 20, and 21 years" width="520" height="278" /></p>

That gray bar is gastric ulcers, which jumps from $2,288 at age 19 to $29,182 at age 20 and then back to $2,796 at 21. There is only one patient with that problem at these ages, and that data is clearly an anomaly (and probably wrong). The gray bars all show erratic behavior over time. But why report such outliers? And what about the other data, how reliable and representative is that? The sample size is rather small (in the 100s to lower 1000s per slice), how does this data relate to the general population?

The different numbers of people at different ages pose a similar question. These are apparently the number of people in their data set, but how does this correspond to the relative incidences of these diseases across a broader population? The fact that the chart grows between the mid-30s and mid-60s makes sense, but why the sudden drop-off at 70? Do older people's diseases cost less? Do the costs shift to diseases that aren't shown? Or are they just not represented in GE's data?

In either case, this needs to be clarified. If this is really just the raw data they happen to have access to, I find the visualization grossly misleading. Such a visualization will be taken as representative, so an effort needs to be made to at least compare this data to a national average or similar.

## How to do it Better

Criticizing a visualization may be easier than making one, but that doesn't mean that a design doesn't need to be evaluated critically. There are a whole number of problems here, from data issues to readability and comparability of the data. While colorful, pretty, and animated, this visualization is not informative, readable, or useful.

The main question here is: what can the user get out of this kind of data display? What is interesting and captivating to a person who is a regular consumer, rather than working for GE Healthcare?

Without having conducted a focus group, I wager to guess that the relative prevalence of different diseases at a particular age is not terribly interesting. The development of that prevalence over age is much more likely to be of interest, how the costs change for the same problem with age, how they shift between different diseases at different ages, and the relationship of personal and insurer cost. Three of these questions are practically impossible to get from the visualization as it is, but would be clear to see from a simple stacked bar or line chart.

The total cost per disease for all people combined may be interesting to the insurer, but is really irrelevant to most people. It is also somewhat arbitrary, given the unclear sampling of the data. If the total were an estimate of total amount spent in the U.S. per year on that particular disease, it would make more sense to show it. But even then, it could be displayed as a number rather than make it the most prominent feature of the chart.

A display similar to Jeff Heer's <a href="http://minnesota.publicradio.org/projects/2008/07/16_minnesota_slowdown/">Minnesota Quarterly Employment</a> would be a way of showing the data this way, and it could still have mouse-overs and animations. Another option would be to show the glyphs for all the years at the same time, with a way to pick out one or two to enlarge. The shape of the glyphs would still work at a small size, and would give a very interesting overview of the entire data set.

## Visualization is not Decoration

As I said above, this visualization is a great idea, and with all the discussion about healthcare recently, this data is clearly of interest to many people. GE had the right idea here, but the execution went off track somewhere.

Visualization has to be more than pretty pictures. It has to inform. It has to challenge. It has to further our understanding. Visualizing data is not about pretty pictures. Visualization for the masses certainly requires a bit more thought to be put towards making it interesting to look at, but that cannot mean that the form is allowed to compromise the function.

If we continue to show people pretty, colorful, but ultimately useless and empty charts, they will assume that all visualization is just dressing up data to look prettier. We can't let that happen.
