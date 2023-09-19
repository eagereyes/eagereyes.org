---
title: "Popular vs. Electoral Votes Using Stacked Bar Charts"
description: "A few days ago, I looked at how the electoral college system amplifies the lead of the strongest candidate in a US presidential election. The way I made the chart (with the help of PhotoShop) created some interesting reactions, and finally led me to what I consider the best way to do it (using stacked bar charts). I also want to respond to a few comments about the kind of chart used and why I think it is the most effective way to show what it does."
date: 2008-10-11 19:50:09
tags: Politics
featuredImage: https://media.eagereyes.org/media/2008/Popular-Electoral-teaser-new.png
---

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


<PostedBy />


<aside class="comments">

---
## Comments

<a href="http://PeltierTech.com/WordPress/" rel="nofollow noopener" target="_blank">Jon Peltier</a> says…
>	Robert -
>	
>	That's a nicer chart, without the gray background. The stacked bar approach you used is pretty easy, too, as good as or maybe better than the clustered-overlapped approach I suggested.
>	
>	Now for today's Excel lesson :)
>	
>	To remove an unwanted legend entry, click once on the legend, then once on the caption of the legend entry you don't want, then press Delete.
>	
>	To get it back, you have to delete the whole legend, and add it back.

Robert Kosara says…
>	<p>Thanks! But in Numbers, you can't delete single elements like bars and legend items - I tried. Excel is clearly more flexible.</p>

<a href="http://www.tableausoftware.com/blog/electoral-college-impact" rel="nofollow noopener" target="_blank">Jock Mackinlay</a> says…
>	I still recommend that you sort your view by the percent of the popular vote.  You can clearly see when the electoral college helped an election get to a majority.  The sort also makes it easier to see the popular vote part of the stacked bar chart, which makes it easier to see the "amplification" of the electoral college.

<a href="http://chartgraphs.wordpress.com" rel="nofollow noopener" target="_blank">Kelly O'Day</a> says…
>	Robert:
>	
>	This is a timely topic with the election only 3 weeks away.
>	
>	I've developed a dot plot version of your data. Have you tried dot plots? They are pretty straightforward in Excel if you use an XY chart and add a custom Y axis with your data labels.
>	
>	Here's the link to my post on your data
>	
>	<a href="http://chartsgraphs.wordpress.com/2008/10/16/dot-plots-versus-stacked-bar-charts/"> link </a>
>	
>	

<a href="http://PeltierTech.com/WordPress/" rel="nofollow noopener" target="_blank">Jon Peltier</a> says…
>	I checked out Kelly's chart, and while it's a good attempt, I prefer Robert's stacked bar chart. To me, the stacked bar chart shows more clearly the three elections with the reversed electoral to popular vote tallies. 
>	
>	While the dot plot improves the data to ink ratio, I feel that this ratio is overvalued as a measure of the quality of a chart. If there were a single series in the chart, the dot plot would be better. The dot plot fails to distinguish the two series, however, while the stacked bar chart shows them clearly.

<a href="http://chartgraphs.wordpress.com" rel="nofollow noopener" target="_blank">Kelly O'Day</a> says…
>	Robert - thanks for your comments on my dot plot alternative.
>	
>	I revised my original dot plot to sort by electoral votes and I've replaced the dots with lines. The dot plot now shows the results much more clearly. Does it match up to your bar chart now?  
>	
>	<a href="http://chartsgraphs.wordpress.com/2008/10/16/dot-plots-versus-stacked-bar-charts/"> link</a>
>	

<a href="http://i-ocean.blogspot.com/" rel="nofollow noopener" target="_blank">derek</a> says…
>	I too felt the bars were fine, except that the intense vibrating colours made it hard for me to see where the switch-arounds were. So I commented on Kelly's blog with a floating bar alternative, and have now compromised with a <a href="http://i-ocean.blogspot.com/2008/10/using-colour-for-preattentive.html">stacked bar version</a> on my own blog, very like Robert's original, except that the lower bars are much lighter in colour. 
>	
>	I like "data:ink ratio" as a rough guide, but it's clearly more suited to the days when ink actually could be used as a proxy for "draftsman's expensive time". In our computer age, a complicated image is as cheap to make as a simple one, and it's the readers' attention that is at a premium. How to update data:ink for the modern day? I like the idea that what counts is edges. 

</aside>

