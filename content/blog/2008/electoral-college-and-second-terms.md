<p align="center"><img src="https://media.eagereyes.org/media/2008/Popular-Electoral-teaser.png" border="0" alt="Popular vs. Electoral Vote Teaser" /></p>

# The Electoral College and Second Terms

The <a href="http://en.wikipedia.org/wiki/U.S._Electoral_College">Electoral College</a> is a key aspect of the US presidential elections. Its mechanics and distribution of electors are crucial for presidential campaigns and determine the so-called <em>battleground states &ndash;</em> and possibly also distort the will of the people. I was interested this last effect, so I did a little analysis.

A presidential election in the US is essentially 51 separate elections (50 states plus the District of Columbia). All but two states have a winner-takes-all system, with Maine and Nebraska using a slightly more differentiated way of splitting up its delegates between the candidates. There are a number of consequences of this that I don't want to discuss in detail here, but what I was interested in was the boost this system gives to the strongest candidate.

There are two aspects to this. First, there is the relative majority: which candidate got the most votes? Splitting this up further, there is the popular vote (how many people voted for a particular candidate) and the electoral vote (how many electors voted for that candidate). My hypothesis was that the percentage of electoral votes the winner got would always be higher than the popular vote.

The other aspect is whether the candidate who wins is the candidate the absolute majority of people (i.e., more than 50%) voted for. In recent elections, with only two candidates from the two big parties, this has become almost synonymous with the previous question &ndash; any third-party candidate would only get a minuscule fraction of the popular vote and not a single electoral vote.

## A Comparison Chart

So I came up with the following graphic to answer my question. The blue bars show the popular vote, the green ones electoral votes. Since I wanted to compare, I tried out a number of different configurations, but none made it easy to see the instances where the electoral vote would be smaller than the popular vote. So I ended up with a kind of stacking where the longer bar would be "behind" the shorter one. The idea was that the instances with electoral &lt; popular would stand out.

<p style="text-align: center;"><img src="https://media.eagereyes.org/media/2008/Popular-Electoral.png" border="0" alt="Popular vs. Electoral Vote" width="388" height="841" /></p>
As you can see, there were only three instances where the electoral percentage was lower than the popular one. The boost from the electoral system is quite astounding in many cases, easily adding 30 points and more to the popular vote.

The other thing the chart shows is where a candidate was elected with less than 50% of the popular vote. The shaded area marks the 50%, and you can see that there were quite a few presidents who where pushed across that mark by the electoral college system. The most recent is George W. Bush, but the list also includes Bill Clinton, Richard Nixon, and others.

This is really only meant to provide a data point for the discussion of the merits of the electoral system &ndash; the issue is far too complex to be boiled down to a few numbers. But I think this chart illustrates quite nicely what effect the current system has. For another data-centric discussion of how less than 1% change in popular vote could have changed the outcome of many of the past elections, see Mike Sheppard's <a href="https://www.msu.edu/~sheppa28/elections.html">How close were Presidential Elections?</a>

## Second Terms

Since I already had the data (which I scraped from Wikipedia), I got interested in looking at the second terms of presidents (or, in the case of FDR, in second, third, and fourth terms). Would a sitting president tend to gain or lose points? And what is the effect of the electoral college here? The following chart shows this data for presidents who got re-elected.

<p style="text-align: center;"><img src="https://media.eagereyes.org/media/2008/SecondTerms.png" border="0" alt="Second Term gains and losses" width="382" height="385" /></p>

At first glance, it appears that most re-elected presidents did gain votes, and most of these gains were amplified by the electoral college (the losses, too). There are two notable exceptions, Andrew Jackson and Woodrow Wilson: in these two cases, a gain in one actually translated into a loss in the other. I have no explanation how this was possible, especially in Wilson's case.

What is missing here is data about sitting presidents who did not get re-elected. But since I was mostly interested in popular vs. electoral, I did not collect this data. I will work on such a comparison for a future posting.

## Charting Challenges

What surprised me was how hard it was to produce a good chart for what I considered a simple dataset and question. Putting pairs of bars next to each other was entirely ineffective, there was way too much noise, even with ample spacing between the pairs (which also created a huge chart). Neither Excel nor Numbers would let me specify negative distances between the bars to make them slide behind each other. I'm a bit surprised that this is so difficult, I'm sure I've seen charts with overlapping bars.

So I ended up creating stacked bar charts, with a few additional columns of data to generate the needed numbers. While that wasn't very difficult, it did defeat the point of doing this visually: if I could just look at the sign of the difference between the electoral and popular percentages, why bother with a chart? It still does provide a good way to present the data, especially the amplification of the stronger candidate.

While Numbers doesn't have nearly the power of Excel, I really like its approach to spreadsheets. It also produces much nicer charts, in my humble opinion. What it does not do, however, is let me change the color of an individual element of a chart &ndash; I ended up doing those in PhotoShop. Also, while Numbers lets me draw arbitrary shapes, there is no snapping to chart elements, only their outlines. That makes adding information like the 50% shaded area much more difficult than necessary.

While both Excel and Numbers do provide a large variety of chart types and settings, a lot of manual work is still necessary to make a chart really informative. And many things that should be very simple to do in these programs (including such advanced features as histograms) still require a lot of tweaking and the use of tools like PhotoShop.

<hr />
See also: <a href="/blog/2007/presidential-demographics">Presidential Demographics</a>, <a href="/blog/2008/presidential-demographics-ii">Presidential Demographics II</a>

The <a href="https://media.eagereyes.org/media/2008/popular-electoral-data.zip">source data</a> for these charts is available.

A <a href="/blog/2008/popular-vs-electoral-votes-using-stacked-bar-charts">better version of the chart using stacked bar charts</a> is also available.
