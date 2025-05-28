<p align="center"><img src="https://media.eagereyes.org/media/2008/Popular-Electoral-teaser-new.png" border="0" alt="Popular vs. Electoral Vote Teaser" width="266" height="88" /></p>

# Popular vs. Electoral Votes Using Stacked Bar Charts

A few days ago, I looked at <a href="/blog/2008/electoral-college-and-second-terms">how the electoral college system amplifies the lead</a> of the strongest candidate in a US presidential election. The way I made the chart (with the help of PhotoShop) created some interesting reactions, and finally led me to what I consider the best way to do it (using stacked bar charts). I also want to respond to a few comments about the kind of chart used and why I think it is the most effective way to show what it does.

My use of PhotoShop may have seemed silly, but I used it to stitch together the screenshots of the different parts of the chart (it is higher than my laptop screen), so it didn't seem so absurd to me. But there are of course much better ways to do this.

Jon Peltier wrote two postings on how to achieve the effect using <a href="http://peltiertech.com/WordPress/2008/10/08/overlapped-bar-chart-longer-bars-in-back/">overlapped bars</a> (which are possible in Excel but not in Numbers), but making sure that the shorter bar is always visible. He also modified the technique to show <a href="http://peltiertech.com/WordPress/2008/10/10/overlapped-bar-chart-thinner-bars-in-front/">thinner bars in front</a>, so that the full length of both bars can be seen.

Jock Mackinlay asked me for the underlying data (which I later also added to the <a href="/blog/2008/electoral-college-and-second-terms">original posting</a>) and made <a href="http://www.tableausoftware.com/blog/electoral-college-impact">a similar chart in Tableau</a>. He uses an interesting trick to add an additional series that is shown in front when the shorter bar would be hidden: if the value "in front" is greater than the one shown behind all other bars, that bar has the same length as the hidden one, otherwise it is zero.

## Using Stacked Bar Charts

I'm using Mackinlay's idea to create the chart using stacked bar charts. Stacked bars are quite flexible, and I've used them to prototype a number of visualizations, including the <a href="/blog/2008/presidential-demographics-ii#presidential-demographics-part-ii">Presidential Demographics</a> applet (the key there was making parts of the bars invisible). They are also available in virtually any program that can draw charts, so this method should work with practically any program.

Here is a version of my table that shows the raw data (name, (popular) winner %, and electoral %) as well as the three columns that are going to be used for the stacked bar chart.

<p style="text-align: center;"><img src="https://media.eagereyes.org/media/2008/presidents-table.png" border="0" alt="Data Table" /></p>

These three columns work like this: bar1 is green, and shows the electoral vote in case it is smaller than the popular vote (and it's zero otherwise); bar2 is blue, and shows the popular vote in both cases (meaning it's the same as the popular vote if bar1 is zero, or it's the difference between the popular and the electoral if it isn't); bar3 is green again, and shows the electoral vote in those cases where that is greater than the popular (i.e., the majority).

The formulas for these three are as follows: bar1: =IF(C2&gt;B2,0,C2), bar2: =IF(D2&gt;0,B2-C2,B2), and bar3: =IF(D2&gt;0,0,C2-B2).

The resulting chart looks like this (again done in Numbers, certainly doable just as well in Excel, Tableau, or Open Office):

<p style="text-align: center;"><img src="https://media.eagereyes.org/media/2008/Popular-Electoral-new.png" border="0" alt="Popular vs. Electoral Vote" width="400" height="850" /></p>

The only thing I did in PhotoShop (besides stitching) was to remove the third element from the legend. I also took up Jon Peltier's suggestion to only show the 50% and 100% lines, rather than shade the area behind the lower 50%. That makes for a cleaner chart that is easier to read, and focuses on the things I really wanted to do with this.

## Making a Point with a Chart

The reason for making this chart were two questions: Were there cases where the electoral vote was less than the popular vote (and which were those)? Which candidates were pushed over the 50% mark by the "amplification" from the electoral college system (and how much was that)?

The whole point of this exercise was to make those cases stand out where the electoral vote was less than the popular one, and as I already described in my earlier posting, that was not doable with any other chart I tried. So in a way, this chart makes a point: it guides the viewer's attention to one specific criterion. It is not meant to be a generic chart to compare two series of numbers (that would be better done using pairs of bars).

Reader TV also commented on Jon Peltier's <a href="http://peltiertech.com/WordPress/2008/10/08/overlapped-bar-chart-longer-bars-in-back/">first posting</a> that the chart went against the convention of the stacked bar chart that would have the blue and green bars be parts of a total that is shown by the total length of both bars. Though that works here too, because the green part can be seen as the amplification of the popular vote, so both add up to the effective votes that counted for a candidate.

Almost exactly two years ago, I wrote about the difference between visualization and information graphics being that <a href="/blog/2006/opining-or-murmuring">one murmurs and the other opines</a>. This chart has a clear message, and it is focused on answering these two particular questions. That is why it turned out to be a good idea to not show more than two vertical lines, because reading the precise percentages is just not a priority.

Making such decisions makes a chart more focused, and thus stronger. While we want to provide the reader with the means to see different information in a visualization, I believe that we also need to make a clear point. If we don't do that, the viewer is confused and lost, and is not given a well-defined starting point for his or her own exploration.
