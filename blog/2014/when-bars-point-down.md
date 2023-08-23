---
title: "When Bars Point Down"
description: "It's so simple it feels entirely trivial: bars in a bar chart pointing down instead of up. But the effect can be striking. And it's not as obvious when to show downward-pointing bars as it might seem."
date: 2014-06-15 19:35:24
tags: journalism
featuredImage: https://media.eagereyes.org/wp-content/uploads/2014/06/scarr-iraqs-bloody-toll.jpg
---

# When Bars Point Down

It's so simple it feels entirely trivial: bars in a bar chart pointing down instead of up. But the effect can be striking. And it's not as obvious when to show downward-pointing bars as it might seem. The pure visualization point of view is that bars point up for positive numbers and down for negative ones (or right and left, respectively, for horizontal bar charts).

But there is more to it than that when we think about what the graphic conveys beyond just the numbers. We are used to bars pointing up, that's what we usually see. Downward-pointing bars are unusual and surprising – in particular, when all or most of them point down, it feels odd and you sense that something's wrong. There are also some interesting metaphorical implications.

## Simon Scarr, Death Toll Chart

<p align="center"><img class="aligncenter wp-image-8211" src="https://media.eagereyes.org/wp-content/uploads/2014/06/scarr-iraqs-bloody-toll.jpg" alt="Simon Scarr, Iraq's Bloody Toll" width="730" height="1083" /></p>

The first time I saw this effect was at <a title="Malofiej 20" href="/blog/2012/malofiej-20">Malofiej 2012</a>, where one of the entries was <a href="http://www.scmp.com/infographics/article/1284683/iraqs-bloody-toll">Simon Scarr's <em>Iraq's Bloody Toll</em></a>, which he had created for the <em>South China Morning Post</em>. I was shocked. It was such a simple effect, and incredibly striking. Seeing it in print, on a full newspaper page, made it even stronger. The graphic ended up winning a silver medal, and I'm really sorry that it didn't make gold (I was on the jury and argued for gold, but didn't fight hard enough for it).

What makes this so special? It's the striking effect of the bars, that look like blood running down the page. It sends a clear message about what Scarr wants you to think. Those bars aren't pointing down because they depict a negative number (while you could argue they do, nobody else depicts casualties like that), they point down because of a very deliberate and unusual design choice.

## Obama Unemployment Chart

<p align="center"><img class="aligncenter wp-image-8207" src="https://media.eagereyes.org/wp-content/uploads/2014/06/obama-job-loss-chart.png" alt="Obama Job Loss Chart" width="730" height="407" /></p>

An older example uses the same idea to great effect: <a title="The Bikini Chart" href="/blog/2012/bikini-chart">The Obama Administration Job Loss chart, also known as <em>The Bikini Chart</em></a>. It's not quite so striking, but I like how it implicitly tells you how to read it.

The bars here represent the number of jobs lost in the U.S. during the recession, and who was in power. The message is clear: the rate of job loss was increasing under Bush, and decreased under Obama. Or, if you're not clear what the chart even represents: things were getting worse under Bush and are now getting better under Obama.

## More Bars Pointing Down

The Economist has created a number of charts with downward-pointing bars. Some of them are more obvious, like <a href="http://www.economist.com/blogs/graphicdetail/2014/04/daily-chart-7">this one on the severity of financial crises</a>.

<p align="center"><img class="aligncenter wp-image-8210" src="https://media.eagereyes.org/wp-content/uploads/2014/06/economist-hard-times.png" alt="The Economist, Stock Market Losses During Selected Financial Crises" width="730" height="463" /></p>

But with others, the choice is much more deliberate and unusual. <a href="http://www.economist.com/blogs/graphicdetail/2014/03/daily-chart-19">This stark depiction of the number of executions</a> uses the same metaphor of bars pointing down for positive numbers (of deaths), and was undoubtedly inspired by Scarr. In addition to the direction, the vertical scale was also clearly chosen to make a point.

<p align="center"><img class="aligncenter wp-image-8209" src="https://media.eagereyes.org/wp-content/uploads/2014/06/economist-executions.png" alt="The Economist, Executions" width="730" height="2351" /></p>

## Florida Gun Deaths

When looking at such a chart idea, it is not only instructive to look at examples that do it well, but also at ones where it fails. A chart made the rounds in early April that used the same idea for <a href="http://www.businessinsider.com/gun-deaths-in-florida-increased-with-stand-your-ground-2014-2">gun deaths in Florida</a>. It was widely derided as bad, misleading, and politically motivated (see the great summaries of the controversy by <a href="http://www.visualisingdata.com/index.php/2014/04/the-fine-line-between-confusion-and-deception/">Andy Kirk</a> and <a href="http://www.thefunctionalart.com/2014/04/in-visualization-baselines-and-negative.html">Alberto Cairo</a>). While I agree that it didn't succeed, the amount of hate poured on it (and poor <a href="https://twitter.com/ChristineHHChan">Christine Chan</a>) was unwarranted.

<p align="center"><img class="aligncenter size-full wp-image-8208" src="https://media.eagereyes.org/wp-content/uploads/2014/06/chen-florida-gun-deaths.jpg" alt="Christine Chan, Florida Gun Deaths" width="604" height="756" /></p>

The problem with this chart is that it appears that the data is shown in the white part, when it is actually the red area (measured from the top down). Most readers will only realize that when they look at the scale on the left, or try to square the chart with the article it illustrates. What the chart seems to show is that the number of deaths fell dramatically after the <em>Stand Your Ground</em> law was enacted in Florida, when the opposite was the case.

What made this chart fail? Part of it is that it's an area chart. The difference between a line and a bar is how it encodes information: the bar encodes it in its length, which is anchored on a baseline. It's therefore quite easy to see where it originates. The same isn't true for a line chart, which encodes the data in position. There is no clear indication of what the position is relative to, and in practically all cases it's from the bottom of the chart up.

The other part is visual design. The line at the bottom appears like an axis, and makes it seem obvious to read the white area as the foreground. The darker red area easily turns into the chart background. That is helped by the annotation, which sits on top of what is the chart area, rather than in the white background. Just moving the annotation and changing that bottom line would likely have made it much easier to read the chart correctly. A more heavy-handed way would have been to add arrows pointing down at the beginning and end of the time axis.

## Visualization Beyond Showing Numbers

Showing data isn't very difficult, but there are many clever and subtle ideas that can change the message and the way a chart is read. What do you want to stress? What do want people to take away? What is your intent in showing these numbers?

The simple decision to have bars point down instead of up draws attention and communicates a message beyond the pure numbers: something is wrong. It's amazing how loudly and clearly such a simple change can speak.


_Posted by <a href="/about">Robert Kosara</a> on June 15, 2014_


<aside class="comments">

---
## Comments

<a href="http://gicentre.org" rel="nofollow noopener" target="_blank">Jo Wood</a> says…
>	Nice selection of examples there Robert.
>	
>	In some ways, I think the metaphor used in Iraq's Bloody Toll is almost too dominant, which is in part down to the design choices, but also the pattern of data. The large peak around 2006-7 and the semi-reguilar variation month-by-month give it such a strong physical analog that you can be diverted from remembering these detailed data about real individuals. And because the greatest peak at the start of 2003 doesn't quite behave in the way we might expect blood dripping from the top to behave, in part it becomes marginalised (literally and metaphorically). It's an interesting design choice to think about not just what metaphors support the interpretation and impact of graphical depiction, but how strongly the metaphor should shape its interpretation.
>	
>	Metaphor (albeit a less impactful one), drove the design of a chart I created last year where bars point both up and down - http://vimeo.com/73026163  - to show the passage of 1000 long distance cyclists over space and time. In some ways, this doesn't follow good practice in that I wasn't showing positive and negative divergence from a baseline, but rather simply magnitude (rider frequency). Yet I found anchoring the bars at their centre point rather than a top or bottom baseline was more effective in showing the structural changes in frequency. While obviously driven by the metaphor of sound waves in an oscilloscope type view, I found the 'double encoding' of magnitude both upward and downward lent itself more readily to assessing the macrostructure of clustering and spread of riders. I am not aware of any empirical work on the perception of magnitudes with different common baseline anchors, but it might be an interesting aspect of design to investigate further.
>	
>	Jo.

<a href="http://twitter.com/rtkrum" rel="nofollow noopener" target="_blank">Randy Krum (@rtkrum)</a> says…
>	We used this idea in a design we did back in 2011 to show the increasing rate of bombing occurances in Sudan by its own government: http://www.sudanbombing.org/
>	
>	The bar chart graphics facing down imply negative/bad values, and coincides nicely with the bombing topic.
>	
>	Randy

</aside>

