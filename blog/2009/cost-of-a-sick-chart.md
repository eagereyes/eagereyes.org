---
title: "The Cost of a Sick Chart"
description: "General Electric recently commissioned Ben Fry and Seed Media to visualize health data to communicate the costs of different kinds of diseases to the public. The result is pretty and colorful, but of little value if you actually want to learn something."
date: 2009-11-23 09:56:08
tags: criticism
featuredImage: https://media.eagereyes.org/media/2009/GE-healthcare-header.png
---

<p align="center"><img src="https://media.eagereyes.org/media/2009/GE-healthcare-header.png" border="0" alt="GE Cost of Healthcare Visualization" width="560" height="318" /></p>

# The Cost of a Sick Chart

General Electric recently commissioned Ben Fry and Seed Media to visualize health data to communicate the costs of different kinds of diseases to the public. The result is pretty and colorful, but of little value if you actually want to learn something.

This would be less of an issue if it were a small hobby project done by somebody dabbling in visualization for the first time. But <a href="http://en.wikipedia.org/wiki/General_Electric">General Electric (GE)</a> is the world's largest company, it employs over 300,000 people around the world and had over 180 billion dollars of revenue in 2008. In addition to electric appliances, it makes almost anything you can imagine (plus a lot of things you probably didn't even know existed).

Among its many divisions and units is <a href="http://en.wikipedia.org/wiki/GE_Healthcare">GE Healthcare</a>, which employs 46,000 people. Just like GE in general, the latter develops lots of things, like imaging products, patient data systems, tools for drug discovery and manufacturing, surgery tools, and many more. When such a company decides to visualize data for the masses, we should be able to expect something substantial.

The actual work was done by (or at least under the supervision of) <a href="http://benfry.com/" target="_blank">Ben Fry</a>. He is the creator (together with Casey Reas) of the <a href="http://processing.org/" target="_blank">Processing</a> programming language and environment that is very popular with media artists, and the author of a book on information visualization using the language. His <a href="http://benfry.com/zipdecode/">zipdecode</a> project was the inspiration for my <a href="/topics/ZIPScribbleMaps">ZIPScribble Maps</a>. Fry is also the director of <a href="http://seedmediagroup.com/visualization/">Seed Visualization</a>, which is the company GE Healthcare contracted this visualization out to. GE has put up <a href="http://www.youtube.com/gereports#p/u/0/zN-ZehcVDsI">a video of Fry talking about data visualization</a>, though it only mentions this piece in passing.

Communicating the cost of healthcare to the general public is certainly a great idea, and they should be commended for doing this. Unfortunately, the visualization fails to get much meaningful information across.

## What is This Supposed to Show Me?

We're obviously looking at some kind of pie chart. Different pie slices have different colors and sizes. There is a slider that selects the age to look at, from 18 to 79.

Costs are encoded in the radius of each pie slice (the mapping takes <a href="/basics/Linear-vs-Quadratic-Change.html">the quadratic growth of area</a> into account, but see below). The angle of the slice is the number of cases in GE's dataset that covers around 500,000 people. Divided into individual ages and diseases, that still leads to fairly small numbers per pie slice, though.

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

[[PostedBy]]

<aside class="comments">

---
## Comments

<a href="http://blog.datadrivenconsulting.com" rel="nofollow noopener" target="_blank">Alex Kerin</a> says…
>	Could this be a case where GE just wasn't happy with paying a bunch of money and ending up with some bar charts? They wanted something 'cool', and if that meant obfuscating the data, then so be it. Not that this should be seen as an excuse, but it could be a reason.
>	
>	Data quality issues aside, there must be some very interesting trends and comparisons to be made. The only thing that really jumped out at me was the relative size of the graphic when you moved the slider back and forth.

Robert Kosara says…
>	<p>You're probably right, but bar charts aren't necessarily boring. Look at the Minnesota unemployment page I linked to (you have to scroll down to the Flash animation at the bottom). That could also be sexied up further while still providing an easier way to read the relevant data. And there are clearly other ways of doing this, like the glyph grid idea I outlined. I'll try to mock something up next week or so.</p>

<a href="http://www.juiceanalytics.com" rel="nofollow noopener" target="_blank">Zach</a> says…
>	<p>Robert,</p>
>	<p>I appreciate your unflinching critique one of the leaders in the field, and agree that this visualization leaves some things to be desired. That said, I would caution against assuming that Ben is asking the wrong question ("I wager to guess that the relative prevalence of different diseases at a particular age is not terribly interesting.").  Personally, I'd wager that Ben started the project by working with his client to determine what is the important story to tell with the data -- not just what is the sexiest graphic. Sure, there are a bunch of other questions that could be asked and answered with the data, but then he'd be developing a robust and possibly complex analytical tool. The work that Ben is doing with GE (another example here http://www.ge.com/visualization/health_visualizer/) clearly focuses on teeing up and addressing a few, targeted questions.</p>

Robert Kosara says…
>	<p>My criticism goes to GE and Fry equally. GE apparently wanted something showing them their own numbers, but also wanted to put it on a website. They actually emailed me to tell me about it, saying that they wanted to show people the cost of their healthcare. I don't think this is doing it.</p>
>	<p>The project you link to, on the other hand, is very good. The way you can drill into the data a bit, rearrange the levels, and pick different criteria is fantastic. I also like that they provide the raw data.</p>
>	<p>They know how to do it well, so why did they screw this one up so badly?</p>

<a href="http://the-outliers.com" rel="nofollow noopener" target="_blank">andrea</a> says…
>	<p>Agree with most of your points, Robert!</p>
>	<p>I too think the biggest problem is the lack of purpose. It says, fluffily: "To gain a deeper understanding of healthcare costs"... does anyone know what this means? There seems to be a skew towards the Insurer Cost -- which isn't at all interesting for the consumer.</p>
>	<p>Like Alex pointed out, perhaps it's a client-issue: that the visualisation was made for internal use (perhaps with more information that, for privacy reasons, we can't see in this version?)</p>
>	<p>One thing I would disagree with is the 'pretty' label (always =) of course!) in this case, there is some form of engagement through the animation, and also through the weird outliers (we like telling stories: 'haha! look at that poor/weirdo 20-year-old with the gastric ulcer.' etc).</p>

<a href="http://www.tom-carden.co.uk" rel="nofollow noopener" target="_blank">Tom Carden</a> says…
>	<p>It still makes me sigh that you put so much time and effort into this kind of post. I don't think I disagree with anything you've said, and much of it is constructive and good guidance, but it still leaves a bad taste... how would you have approached this differently? How about a sketch, or an example of similar data visualised well? Some counterpoint to the negativity would be refreshing.</p>
>	<p>I took a couple of hours this morning to pull the data out of Fry's applet (jar files are zip files, it's all there) and take a look at it myself. Here's an applet with the kind of charts I'd like to see: http://www.tom-carden.co.uk/p5/ge_health/applet/</p>
>	<p>Apologies if you don't have Java, you can also see the individual outputs at:</p>
>	<ul>
>	<li>http://www.tom-carden.co.uk/p5/ge_health/TotalInsurerCost.png</li>
>	<li>http://www.tom-carden.co.uk/p5/ge_health/TotalPersonalCost.png</li>
>	<li>http://www.tom-carden.co.uk/p5/ge_health/TotalNumberofPatients.png</li>
>	<li>http://www.tom-carden.co.uk/p5/ge_health/AverageInsurerCostperPerson.png</li>
>	<li>http://www.tom-carden.co.uk/p5/ge_health/AveragePersonalCostperPerson.png</li>
>	</ul>
>	<p>Excuse the weak interaction (switching charts is done by moving the mouse left to right) and the fixed scaling of the y-axis. Also note that I included the under-18s data that Fry omitted for clarity. Despite these shortcomings I learned quite a bit from the exercise and I hope others benefit from my contribution.</p>

<a href="http://www.tom-carden.co.uk" rel="nofollow noopener" target="_blank">Tom Carden</a> says…
>	<p>A small humble retraction - I do see that you point to Jeff Heer's work as a positive example, and I appreciate your constructive suggestions in the "How to do it Better" section. I guess I spoke too soon - however I do still think that that part could be the focus of your posts and you wouldn't lose anything.</p>

<a href="http://periscopic.com" rel="nofollow noopener" target="_blank">krees</a> says…
>	<p>I think I have to dissent and support Fry et al on this one. They clearly took inspiration from Florence Nightingale's polar diagrams (also used in the health field). See <a href="http://en.wikipedia.org/wiki/Portal:Statistics/Selected_picture/5">http://en.wikipedia.org/wiki/Portal:Statistics/Selected_picture/5</a>.</p>
>	<p>I really think the polar diagram succinctly describes the data they are using. I like being able to quickly scroll to my age (and see how bad life could get as I get older).</p>
>	<p>The only thing that's lacking is a decent legend. The radius and angle of the pie slice is not very clear. Also, there could be better colors (ie. don't put two gray bars next to each other).</p>

Robert Kosara says…
>	<p>That's a good start. I definitely plan on doing an alternative design, I just don't have the time for it right now. I poked around the CSV files included in the JAR on Sunday, but couldn't make sense of them. I didn't spend a lot of time on that, though.</p>
>	<p>Your images are a good start, and already provide a much more interesting view of the data than the sunburst/area chart.</p>

<a href="http://www.tom-carden.co.uk" rel="nofollow noopener" target="_blank">Tom Carden</a> says…
>	<p>Here are my copies of the data (which of course I've taken without asking, hopefully GE appreciates  use of these files as part of this discussion):</p>
>	<ul>
>	<li>http://www.tom-carden.co.uk/p5/ge_health/data/cond-age-cost.csv</li>
>	<li>http://www.tom-carden.co.uk/p5/ge_health/data/subset.csv</li>
>	</ul>
>	<p>The 12 diseases covered by Fry are listed in subset.csv, one per line, comma-separted with an id code first. You can safely ignore the first column within the scope of this visualisation.</p>
>	<p>I'm assuming cond-age-cost table is one row per year (row 0 = age 0, row 80 = age 80) and the columns are tab-separated (personal-cost, insurer-cost, patient-count) for each of the 12 chosen diseases.</p>
>	<p>I sanity checked this briefly against Fry's visualisation but I could easily be off by one on the age and I confess I didn't check every column to make sure they were in the correct order. Also, watch out for the blank line at the end of cond-age-cost.csv!</p>

<a href="http://i-ocean.blogspot.com/" rel="nofollow noopener" target="_blank">derek</a> says…
>	<p>But Fry's isn't a polar area chart, it's a spie chart</p>
>	<p>pie chart: radius constant, sector angle variable<br />polar area chart: radius variable, sector angle constant<br />spie chart: both radius and sector angle variable</p>
>	<p> </p>
>	<p> </p>

<a href="http://periscopic.com" rel="nofollow noopener" target="_blank">krees</a> says…
>	<p>Well, derek, I still think it works.</p>

</aside>

