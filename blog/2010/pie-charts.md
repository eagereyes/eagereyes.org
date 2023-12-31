---
title: "Understanding Pie Charts"
description: "Pie charts are perhaps the most ubiquitous chart type; they can be found in newspapers, business reports, and many other places. But few people actually understand the function of the pie chart and how to use it properly. In addition to issues stemming from using too many categories, the biggest problem is getting the basic premise: that the pie slices sum up to a meaningful whole."
date: 2010-01-12 07:03:23
tags: pie-charts, techniques
featuredImage: https://media.eagereyes.org/media/2008/chocolatepiechart.jpg
---

<p align="center"><img src="https://media.eagereyes.org/media/2008/chocolatepiechart.jpg" alt="Chocolate Pie Chart" width="490" height="320" /></p>

# Understanding Pie Charts

Pie charts are perhaps the most ubiquitous chart type; they can be found in newspapers, business reports, and many other places. But few people actually understand the function of the pie chart and how to use it properly. In addition to issues stemming from using too many categories, the biggest problem is getting the basic premise: that the pie slices sum up to a meaningful whole.

## The Part-Whole Relationship

The pie chart is actually a very clever visual design that conveys one fact above all others with a minimum of visual cues: that the circle (the "pie") represents some kind of whole, which is made up of the slices. Add up all the slices and you get the complete pie. Take out one slice, and the whole will be missing exactly this part. Enlarge one part, and other parts will need to shrink.

What this means is that the pie chart first and foremost represents the size relationship between the parts and the entire thing. If a company has five divisions, and the pie chart shows profits per division, the sum of all the slices/divisions is the total profits of the company.

If the parts do not sum up to a meaningful whole, they cannot be represented in a pie chart, period. It makes no sense to show five different occupations in a pie chart, because there are obviously many missing. The total of such a subsample is not meaningful, and neither is the comparison of each individual value to the artificial whole.

Another example that Chandoo used recently is <a href="http://chandoo.org/wp/2009/12/02/group-small-slices-in-pie-charts/">counting uses of words</a>. Clearly, there are other meanings of "bar" (take <em>bar mitzvah</em> or <em>bar none</em>, for example), and the sample is very artificial (there are also too many slices, see below).

<p align="center"><img src="https://media.eagereyes.org/media/2010/ChandooPie1.png" alt="Pie chart of contexts the word &quot;bar&quot; is used" width="285" height="271" border="0" /></p>

There is one way around this issue, which is to have an <em>other</em> category in the chart. This may work in some cases, but in others it can be difficult to come up with one (when the other cases are not known), or that category may end up obscuring some of the meaningful data (e.g., by being the largest category).

Slices have to be mutually exclusive; by definition, they cannot overlap. The data therefore must not only sum up to a meaningful whole, but the values need to be categorized in such a way that they are not counted several times. A good indicator of something being wrong is when the percentages do not sum up to 100%, like in the <a href="http://tweetphoto.com/b64lawq7">infamous Fox News pie chart</a>.

<p align="center"><img src="https://media.eagereyes.org/media/2009/foxpie.jpg" alt="The Foxpie" width="548" height="411" border="0" /></p>

Here, people were asked which potential candidates they viewed favorably, but they could name more than one. The categories are thus not mutually exclusive, and the chart makes no sense. At the very least, they would need to show the amount of overlap between any two (and also all three) candidates. Though given the size of the numbers and the <a href="http://www.foxnews.com/projects/pdf/111909_PalinPoll.pdf">margin of error in this data</a>, the chart is entirely meaningless.

## How to Read Pie Charts

There are two features that let us read the values on a pie chart: the angle a slice covers (compared to the full circle), and the area of a slice (compared to the entire disk). Research suggests that we look at the angle in the center, essentially reducing the chart to just the crossing lines there. We are not very good at measuring angles, but we recognize 90 and 180 degree angles with very high precision. Slices that cover half or a quarter of the circle will therefore stand out. Others can be compared with some success, but reading actual numbers from a pie chart is next to impossible.

We have conducted some research that showed that people's confidence when reading numbers from pie charts is much lower than from other kinds of charts, and with good reason: their accuracy was also much lower. As a consequence, numbers usually need to be shown as well, and the number of slices needs to be limited to allow the viewer to get an overview without having to try to read the chart in detail (which is frustrating).

Which is larger in the following chart, the black or the yellow slice? What about black and green? How much larger? How sure are you? And where do you look to compare?

<p align="center"><img src="https://media.eagereyes.org/media/2010/pie.png" alt="pie chart" width="205" height="202" border="0" /></p>

Now compare this to the bar chart. There is no doubt which is larger, or by how much. It's also easy to add a scale, gridlines, etc. When you care about comparing the parts, a bar chart is clearly superior. What the bar chart does not convey, though, is the part-whole relationship: changing the size of the green bar does not necessarily mean that any other bar has to change.

<p align="center"><img src="https://media.eagereyes.org/media/2010/bars.png" alt="bar chart" width="196" height="254" border="0" /></p>

What the bar chart does not let you do easily is compare one bar to the sum of all bars: that is the realm of the pie chart (and a few others).

## Pie Chart Mistakes

Care must be taken to retain the salient feature of the chart: the center. In <a href="http://bits.blogs.nytimes.com/2009/12/09/the-american-diet-34-gigabytes-a-day/">a report on the number of words consumed each day</a>, a pie chart was prettified with a highlight in the middle. That obscures the spot where the lines meet, and thus makes it impossible to judge angles, making the comparison more difficult.

<p align="center"><img src="https://media.eagereyes.org/media/2010/blogSpan.jpg" alt="Pie chart of words consumed" width="480" height="331" border="0" /></p>

This is similar to the problem with a colleague of the pie chart, the donut chart. It is similar to the pie chart, but is missing a circular area in the center. This example was found on <a href="http://peltiertech.com/WordPress/better-charts-of-graduation-rate-and-federal-spending/">Jon Peltier's blog</a>.

<p align="center"><img src="https://media.eagereyes.org/media/2010/FedSpendOnEdBusWk.png" alt="Donut charts" width="543" height="315" border="0" /></p>

While the center may be a convenient spot for labeling, it degrades the chart's readability. The comparison between separate pie or donut charts is also largely meaningless, and should be avoided. To show progression over time, line and bar charts are much better suited. To compare two different kinds of data (absolute numbers and fractions), it makes more sense to split them up by data to compare than by year.

Other distortions include the ubiquitous 3D pie chart, which introduces perspective distortion and requires our very underdeveloped sense of depth to make up for it. These charts may be more spectacular, but in terms of communicating data, they are mostly useless.

## Number of Slices

The most common problem is trying to show too many categories in a single pie chart. Wikipedia has this beautiful specimen on the <a href="http://en.wikipedia.org/wiki/List_of_U.S._states_by_population">page on U.S. states by population</a>. The first four states are clearly larger than any of the rest, and from there the chart turns from a meaningful visualization of numbers into a colorful pattern.

<p align="center"><img src="https://media.eagereyes.org/media/2010/501px-Pie_chart_of_US_population_by_state.png" alt="Pie chart of U.S. state populations" width="501" height="400" border="0" /></p>

A bar chart would have been a much better idea here, because it would have allowed easier comparison between the states. Grouping together states of similar size into separate charts with different scales would have made it possible to clearly see the differences for all of them, not just the most populous ones.

## When to Use Pie Charts

There are some simple criteria that you can use to determine whether a pie chart is the right choice for your data.

<ul>
    <li><strong>Do the parts make up a meaningful whole?</strong> If not, use a different chart. Only use a pie chart if you can define the entire set in a way that makes sense to the viewer.</li>
    <li><strong>Are the parts mutually exclusive?</strong> If there is overlap between the parts, use a different chart.</li>
    <li><strong>Do you want to compare the parts to each other or the parts to the whole?</strong> If the main purpose is to compare between the parts, use a different chart. The main purpose of the pie chart is to show part-whole relationships.</li>
    <li><strong>How many parts do you have?</strong> If there are more than five to seven, use a different chart. Pie charts with lots of slices (or slices of very different size) are hard to read.</li>
</ul>

In all other cases, do not use a pie chart. The pie chart is the wrong chart type to use as a default; the bar chart is a much better choice for that. Using a pie chart requires a lot more thought, care, and awareness of its limitations than most other charts.

## Alternative: Squaring the Pie

A little-known alternative to the round pie chart is the square pie or waffle chart. It consists of a square that is divided into 10x10 cells, making it possible to read values precisely down to a single percent. Depending on how the areas are laid out (as square as possible seems to be the best idea), it is very easy to compare parts to the whole. The example below is from a redesign I did a while ago about <a href="/blog/2006/square-pie-charts">women and girls in IT and computing-related fields</a>.

<p align="center"><img src="https://media.eagereyes.org/media/attachments/NCWIT-AdvancedPlacement.png" alt="Girls in IT-related areas waffle chart" width="505" height="176" border="0" /></p>

Unfortunately, no common software I know creates this chart. But Chris Gemignani at Juice Analytics has <a href="http://www.juiceanalytics.com/writing/solving-the-pie/">collected a few easy ways to make them in Excel</a>.

## Respect the Pie!

It is easy to pounce on people's incompetent uses of pie charts. But used the right way, they are very powerful: they are easy to read, familiar, and pleasant to look at. Care must be taken to not overload the chart or use it as a default to show data it is not suited for.

<hr />

<a href="http://www.chocolate-editions.com/index.php?inc=s_pc">Chocolate Pie Chart by Mary&amp;Matt</a>


<PostedBy />


<aside class="comments">

---
## Comments

<a href="http://flowingdata.com" rel="nofollow noopener" target="_blank">Nathan</a> says…
>	<p>Finally, someone writes a post about the pie chart that doesn't say it sucks. I'm so tired of hearing how bad it is and about angles and human perception, blah blah. Sure, you can't tell between the small differences between slices, but at the end of the day, the visualization is just a guide to show you where to look in your data.</p>

<a href="http://chartsbin.com/" rel="nofollow noopener" target="_blank">Thiagu</a> says…
>	<p>I like to add one point</p>
>	<p>-Colour also place important role in pie chart.</p>
>	<p>I recentely made a pie chart for chartsbin.com, if you have a moment please check yourself  <a href="http://chartsbin.com/view/wwu">Surface Area of the Earth</a></p>

John says…
>	<p>I like the first part on pies, but the second on waffles not so much.</p>
>	<p>I don't find the coloring of squares in one corner very easy to estimate. Yes, I can count them, but then why not use the numbers themselves? In fact, for the example you use, the numbers are far more expressive than the waffles.</p>

<a href="http://www.chronicinfoholic.com" rel="nofollow noopener" target="_blank">Infoholic</a> says…
>	<p>Given that it is just as easy (in most charting tools) to create a bar chart with a 100% scale then why ever use a pie chart.</p>
>	<p>We may be used to using pie charts but that doesn't make them right.</p>
>	<p>Also @Nathan you are right about the visualisation being a guide to where you should look in the data but quite often a pie chart is presented without the accompanying data thus increasing the risk of incorrect interpetation.</p>

<a href="http://www.excelcharts.com/blog/" rel="nofollow noopener" target="_blank">Jorge Camoes</a> says…
>	<p>I like to protect the poor and opressed pies (I write about that more than I should) and it's nice to know I'm not alone. Actually, <a href="http://www.excelcharts.com/blog/how-to-make-better-pie-charts-with-on-demand-details/"><span style="color: #2361a1;">a donut is even better than a pie chart</span></a>  (if you can do it right, a donut is like as a pie on steroids).</p>
>	<p>@Infoholic: a pie chart performes better than a 100% stacked bar because its's easier to find anchoir points (90%, 180%).</p>

<a href="http://i-ocean.blogspot.com/" rel="nofollow noopener" target="_blank">derek</a> says…
>	<p>Pie charts are like that little thug in school that all the adults tried to make excuses for. Look, it only took him three tries to spell the word "cat"!</p>
>	<p>If you can't use a pie to detect subtle differences in quantity, it's no use trying to make excuses for it by saying it works okay with gross differences. *Anything* works okay with gross differences, including just writing the numbers down.</p>

Noob says…
>	can u guys answer this question its my school MCQ Queston.
>	When we have to show value as part of a whole picture, which type of chart is used.
>	► Bar chart
>	       ► Pie chart
>	       ► Line graph
>	       ► None of the given

fudgeman says…
>	i want the choco;ate pie graph.
>	
>	(:

fudgeman says…
>	i accidentaly spelled chocolate wrong.
>	
>	oops!

Jon says…
>	Robert,
>	
>	The 'squaring the pie' charts are very similar to unit charts, which I've used in some of my work (see here: http://cbo.gov/publication/43139). However, Stephen Few doesn't like unit charts (http://www.perceptualedge.com/articles/visual_business_intelligence/unit_charts_are_for_kids.pdf) and I was wondering what you thought of his position.
>	
>	Thanks,
>	Jon

<a href="http://ascentchurch.org/" rel="nofollow noopener" target="_blank">Church MN</a> says…
>	Very helpful post on how to maximize the value of using pie charts.

<a href="http://teknodog.com/" rel="nofollow noopener" target="_blank">3D Systems</a> says…
>	I appreciate the information on the squaring of the pie chart (the waffle chart).

<a href="http://waronpiecharts.com" rel="nofollow noopener" target="_blank">War on Pie Charts</a> says…
>	We hope people head these recommendations however your initial recommendations for when to use them are slightly misguided. Never, is the appropriate time to use a pie chart. Do not negotiate with visual terrorists.

Jonathan says…
>	"But used the right way, they are very powerful: they are easy to read, familiar, and pleasant to look at." 
>	
>	You should have put the first five words of that sentence in bold, 32-point text. The problem with pie charts that they almost never get used in the right way, and there are so few situations in which they can be used well, that it's usually just hopeless. You may as well argue that 550cc motorbikes are a good idea for 16 year-old boys - if they ride them in the right way.

<a href="http://http://1.bp.blogspot.com/-BjxgyTIErPo/TyPOeWe4cRI/AAAAAAAAB5s/A2MB7tfHcSQ/s1600/PuertoPrincesa_0212.jpg" rel="nofollow noopener" target="_blank">John Warren</a> says…
>	This Is So Helpful ! Thank you so much for the source! I'm now satisfied and confident for my Report !

<a href="http://t" rel="nofollow noopener" target="_blank">ezra abrams</a> says…
>	aside from your opinion as to the goodness or badness of various charts you show, do you have any data ?
>	ie, if you and some other experts agree as to the message a chart is suppose to convey, and then you show the chart to a group of non experts, and show a diff group a "better" chart, and see if the two groups differ in their response
>	
>	with out this sort of data, it is just your opinion.
>	opinions are good, but data is better.
>	there is, actually, a fairly large, but extremely diffuse data literature on graphs

Penny says…
>	Well of course you want the chocolate pie graph, you gave yourself a ridiculous nickname like Fudgeman. Stupid a******.

Maria says…
>	It's to much to read!!

Ray says…
>	I believe the main take-away from this article is what not to do to get the most accurate representation of data. I now realize that the total data sample needs to be 100% or a pie chart is meaningless.

Jane says…
>	thank you! helped me a lot. :)

<a href="http://yahoo" rel="nofollow noopener" target="_blank">saaya</a> says…
>	pie chart absolutely

<a href="http://yahoo" rel="nofollow noopener" target="_blank">saaya</a> says…
>	hahaha feel your pain well not literally but eeeh

padma says…
>	could some one tell me if i have a certain percent and i want to add a certain percent to it and how will it affect the other proportions

shirley thornton says…
>	this information was very helpful when determining what type of chart to use.

Cortez Brayboy says…
>	You can use all three, but only for the identical purpose of showing value in a whole picture. The reason is you would need to show trending times of value, fluctuations and other factors. More than one pie graph would be needed because of the times of value recorded; related to the line or bar graph chosen.

<a href="http://gravatar.com/thykier" rel="nofollow noopener" target="_blank">thykier</a> says…
>	Great article about choosing the right tool for the right set of data. The pie-chart is great.
>	I also like the waffle chart. But would like to say, wouldn't it give more value to the reader if, in your example, 56% was "half" the box coloured, and not just the corner? It would be easier to read and decode the information.

<a href="http://samfirke.com" rel="nofollow noopener" target="_blank">Sam Firke</a> says…
>	"Unfortunately, no common software I know creates this chart. " - try R's "waffle" package.

jonpeltier says…
>	I guess I'm one of those unabashed pie chart bashers. Yet I read these studies with strong interest, because they have been carried out and analyzed systematically and logically. I've always felt that a two-segment pie (what Jorge Camoes calls a one-segment pie) is somewhat effective if used appropriately. It's good to see a good analysis that shows how to maintain their effectiveness.
>	
>	It's also good to know that what we pie-bashers always thought has some analytic backing:
>	
>	"If you’re after precision, don’t distort your pie charts. Certainly don’t change their shapes, but also don’t explode them or make a slice larger."

jonpeltier says…
>	Sorry, I had two posts open, and I meant to leave that last comment in Robert's more recent article <a href="/papers/a-pair-of-pie-chart-papers">A Pair of Pie Chart Papers</a>.

<a href="http://gravatar.com/bailliem12" rel="nofollow noopener" target="_blank">Jopo</a> says…
>	" What the bar chart does not convey, though, is the part-whole relationship: changing the size of the green bar does not necessarily mean that any other bar has to change."
>	
>	"What the bar chart does not let you do easily is compare one bar to the sum of all bars: that is the realm of the pie chart (and a few others)".
>	
>	Those two sentences are wrong. If you compare like with like, then the sum of the bars must be 100% (or 1 if using proportions). Therefore increasing the green bar will mean that one or more other bars will reduce in size. The percentage increase has to come from somewhere. 
>	
>	Following on from that, comparing like with like, the bar chart implicitly allows the comparison with part to whole. as the whole is always 100%.

<a href="http://70saddict1986.com" rel="nofollow noopener" target="_blank">Osarhemen</a> says…
>	In the pie graph on Computer Preferrences, I don't quite understand how to find the percentage of the mainframe computers if it's not there.

<a href="http://70saddict1986.com" rel="nofollow noopener" target="_blank">Osarhemen Igbinosun</a> says…
>	I know the colors of the pie graph, but what does that have to do with the graph about Computer Preferrences? I don't quite get it!

<a href="http://70saddict1986.com" rel="nofollow noopener" target="_blank">Osarhemen Igbinosun</a> says…
>	In the pie graph on Computer Preferrences, it shows a survey of a group of professionals who were asked what type of computer they preferred. What is the percentage of the group preferred to work on mainframe computers? Help me to understand this question to find the answer, please?

Anasusakiki says…
>	yes me tooi am making a pie chart poster wish me luck

J. Astor says…
>	"the comparison between separate pie or donut charts is also largely meaningless"
>	
>	Factually incorrect - in the donut charts you use as an example above this statement, the two are proportional to each other. The ratio between the sizes of the two donuts is equal to the ratio between the total amounts depicted.

BOi says…
>	Same i am doing this in science and I already gave up on it.

HLeplaa says…
>	You make the total larger, for instance going from 100 to 110% (which becomes the new 100%). To calculate how percentages change then, you have to calculate the factor to make 110 into 100 (dividing it by 1.1). So: 33% becomes now 30%.

<a href="http://daydreamingnumbers.com/oldt/pie-charts-for-comparisons/" rel="nofollow noopener" target="_blank">#3. Pie charts do not work well for comparisons - Daydreaming Numbers</a> says…
>	[&#8230;] From Robert Kosara&#8217;s article on Eager Eyes: [&#8230;]

Teagan says…
>	When a larger section of a pie shart is sperated from the others what does that mean?

jonpeltier says…
>	It means the creator of the chart didn't trust you to notice the large piece while it was still attached to the chart.

Ademário Nobre says…
>	Very good. I need to reread this article annually to follow these best practices. Tks.

</aside>

