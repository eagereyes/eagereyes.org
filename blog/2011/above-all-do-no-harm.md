---
title: "Above All, Do No Harm!"
description: "Heatmaps and 3D pie charts are often criticized, and for good reason. But they're not always a bad choice, and can work for simple data presentation. Context is important when criticizing visualizations, especially when there are no obvious improvements that can be made."
date: 2011-08-21 22:17:25
tags: Visual Communication, criticism
featuredImage: 
---

<p align="center"><a href="/criticism/above-all-do-no-harm"><img src="https://media.eagereyes.org/media/2011/soccer-teaser.jpg" alt="" width="600" height="200" /></a></p>

# Above All, Do No Harm!

Heatmaps and 3D pie charts are often criticized, and for good reason. But they're not always a bad choice, and can work for simple data presentation. Context is important when criticizing visualizations, especially when there are no obvious improvements that can be made.

## The Chart

<a href="http://well-formed-data.net/">Moritz Stefaner</a> <a href="https://twitter.com/moritz_stefaner/status/105029152993845249">tweeted</a> about this chart on the weekend, and he did not like it.

<p align="center"><img src="https://media.eagereyes.org/media/2011/soccer-moritz.png" alt="" width="600" height="220" /></p>

The <a href="http://www.spiegel.de/fotostrecke/fotostrecke-71846-2.html">image in question</a> was posted as part of an article in German magazine <em>Der Spiegel</em>. The point of it is to show the strategy of Dutch soccer player Arjen Robben in a particular match against Germany.

<p align="center"><img src="https://media.eagereyes.org/media/2011/soccer-heatmap.jpg" alt="" width="600" height="448" /></p>

The image caption claims that it shows where he spent most of his time during the game, and even lets you see his movements.

The way the data is shown here is by means of a 3D bar chart overlaid on the soccer field. The information is encoded redundantly in both the height of the bars and their color.

## Criticism

It's easy to criticize a tilted 3D bar chart: the bars are distorted by the perspective, and at least in principle it can hide information (shorter bars can disappear behind taller ones). There is a reason why three-dimensional visualizations are rare in information visualization: they are hard to read and navigate, and there are few if any advantages to be gained from the third dimension.

Another problem is that there is a big step between the green parts of the soccer field, which Robben presumably never touched during the game, and the bars for the squares where he spent time. There has to be some kind of cut-off though, or Robben must be able to teleport himself onto some of the disconnected squares.

## Above All, Do No Harm

In light of the above, this a bad visualization. However, I argue that it works, and that it does not violate what should be visualization's prime directive: above all, do no harm!

This image is meant to communicate a small amount of information, essentially 20x14 (280) grid cells with numbers. The obvious thing to do, since that is also how the data was acquired, is to map them onto the soccer field. That could be done in 2D or (pseudo-)3D.

The 2D case would be a boring heatmap, where the data would be only encoded using color. If you wanted to be serious about the lower cutoff, there would be no or very few fields with no value (or a 0) where the soccer field could be seen, so there would be little context to guide the viewer. The result might be more in line with common visualization wisdom, but also much less compelling and in need of a lot more explanation to even understand what it shows.

The 3D version has two things going for it: it shows the data in a redundant way (using the bar heights), and it provides useful context. Why also vary color? Well, why not? It's obvious that the bars are much easier to differentiate when their colors differ. Redundant encodings are not very common in visualization, but they often end up being useful, in particular when using visualization for presentation and communication.

The obvious downside of potentially hiding values between the 3D bars is not an issue here, since the distribution of values is nice and smooth. We can see all bars and can compare them reasonably well. The point of this chart is not to precisely compare the exact amounts of time Robben spent in each square, so the fact that we're not able to compare them with great accuracy is simply not an issue.

The cut-off that lets the field shine through also helps this visualization, because it establishes context: this is a soccer field. Not only does it show that immediately, it also gives enough context to judge where on the field the squares are. Sure, there is a bit of inaccuracy in that cut-off, but does that really matter? The point is to show where the guy spent most of his time, not where he was seen once or twice during the entire game.

Finally, the arrow. It's not entirely obvious, but I assume that it shows which goal Robben's team was playing towards. Since the sides are usually switched after the break, they probably rotated the data from the second half to get a more consistent image. This could perhaps be labeled a bit more clearly, but I think it's actually useful to figure out if Robben was playing defense or forward.

## Conclusion

Given the amount of data, the point to be made, and the audience, I think that this visualization is a good choice. While it does use a few things that can be problematic, they are non-issues in this case. The point gets across, clearly and accurately enough, and with enough context to make the visualization easy to read and understand.

It's a bit too easy to dismiss a visualization just because it uses a technique that is overused and that is often problematic. We need a bit more subtlety in our criticism, and a bit more care to see if something might work in a particular case, even if it may not in many others.

[[PostedBy]]

<aside class="comments">

---
## Comments

<a href="http://dillingham.me.uk/" rel="nofollow noopener" target="_blank">Iain Dillingham</a> says…
>	Hi there. Nice post -- but that arrow. I wonder whether the arrow is doing harm. I don't know much about German football, but Robben is a winger so it's no surprise that he appears to spend much of the game up front. However, because it's not clear whether the data were rotated or translated to produce one image for the two halves of the game, we don't know for sure whether Robben favours the right or the left of the pitch. Taking the visualization at face value, it seems he favours the right. This makes sense, but it's rather ambiguous!

<a href="http://twitter.com/#!/acotgreave" rel="nofollow noopener" target="_blank">Andy Cotgreave</a> says…
>	Although I don't know for sure, I assume the arrow indicates the direction of play, and that the creators of the viz merged both halves of the game into one dataset.
>	
>	This makes perfect sense to me - the direction of play is irrelevant*; what's important is where he spends his time. If the data's not merged, then you don't see the story.
>	
>	* okay, perhaps direction of play can be important because of wind conditions and where the home/away fans are sitting, but really, this is irrelevant.

<a href="http://peltiertech.com/WordPress/" rel="nofollow noopener" target="_blank">Jon Peltier</a> says…
>	I'm usually very sensitive to all of the issues raised about the graph. But as soon as I saw it, I knew without any conscious thought what it was about.
>	
>	Since it mimics an actual physical space, the 3D perspective was okay, and the thin bars were tall enough to emphasize the colors, without obscuring any values.
>	
>	The arrow didn't really bother me. It's a bit bold, but no matter. It's probably not even needed. I found that I knew just from the perspective view which goal the player was shooting for.

<a href="http://vislives.com" rel="nofollow noopener" target="_blank">Chris Pudney</a> says…
>	By coincidence I came across <a href="http://www.arcticicehockey.com/2011/8/22/2374005/shot-target-visualization">this post on ice hockey "Shot Target Visualization"</a> which uses a series of heat maps to encode the frequency of shots on goal vs. the shooters' position on the ice.
>	

<a href="http://moritz.stefaner.eu" rel="nofollow noopener" target="_blank">Moritz Stefaner</a> says…
>	Just to let you know that I posted a reply and a proposal for a redesign over at: http://well-formed-data.net/archives/669/on-the-role-of-bacon-in-visualization

Sixing Huang says…
>	I agree that the 3D bar charts are sufferring from the "hiding" problem. One way to diminish it is to make the bar a bit transparent. But this brings another problem: the visualization looks very crowded because a lot of vertices are visible that should be hidden. And sometimes it is difficult to read the heights of some bars. So being transparent or opaque doesn't solve the entire problem.
>	
>	On the other hand, I find heatmap doesn't have this problem at all. Of course, human eyes are better at telling height than colors apart. If we superimpose the real value on top of the color cells, this will not be a problem again.
>	
>	The alternative will be using bubble table aka balloon plot that is drawing circles in the table (sometimes along side with the values). However, I think bubble plot is more confusing (size, radius or diameter are proportional to the value?) and more difficult to be differentiated between close values.
>	
>	So my personal favorite is still heatmap, sophisticated it is, but it gets the job done!
>	
>	 
>	
>	

</aside>

