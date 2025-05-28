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
