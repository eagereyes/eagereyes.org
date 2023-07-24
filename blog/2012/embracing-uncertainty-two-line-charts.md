---
title: "Embracing Uncertainty in Two-Line Charts"
description: "As we're heading towards elections again, there is a chart type that is as unavoidable as political ads, baby-kissing, and smear campaigns: line charts showing polling data. The most common pitch two candidates against each other, and often make a big deal out of the fact that the lines cross. Not only are these charts misleading in the way they depict the choice, they also hide an important fact: the number of undecided voters."
date: 2012-01-12T07:17:18.000Z
tags: Politics
---

# Embracing Uncertainty in Two-Line Charts

As we're heading towards elections again, there is a chart type that is as unavoidable as political ads, baby-kissing, and smear campaigns: line charts showing polling data. The most common pitch two candidates against each other, and often make a big deal out of the fact that the lines cross. Not only are these charts misleading in the way they depict the choice, they also hide an important fact: the number of undecided voters.<!--more-->

The following image shows slightly different data, but the idea is the same. The data is from a <a href="http://www.gallup.com/poll/113980/Gallup-Daily-Obama-Job-Approval.aspx">long-running Gallup poll</a> about job approval ratings of President Obama, from early 2009 to the end of 2011. Each data point is actually a three-day average. Blue shows approval, green disapproval.

<img class="alignnone size-full wp-image-1608" title="Obama Approval Ratings as Line Chart" src="https://eagereyes.org/wp-content/uploads/2012/01/obama-lines.png" alt="" width="600" height="340" />

There is a clear trend here that shows approval dropping from very high in early 2009 to just below 50% in mid-2010. From there, things get murkier. The blue and green lines cross, then continue for a while, then cross again. There's clearly a lot of noise, but every inversion looks like a big event.

The thing that also stands out is the symmetry: since there are (apparently) only two choices, the disapproval percentage is always going to be 100% minus the approval percentage. That is visually very appealing, but it also creates the illusion of two independent values, shown as different lines, being in much more agreement than would be expected. There is also a lot of noise in the regions where the lines cross or are close to crossing, which make it hard to see what is going on.

## An Alternative

How else could the data be shown? In particular, what else is there to show about this data? There are two aspects to the data that are getting lost in the line chart above: the number of undecided people, and the fact that the numbers have to add up to 100%. It also makes sense to reduce the noise and make it easier to see the trend, especially in parts where the approval and disapproval numbers are very close together.

Here is my alternative. It is a stacked area chart that contains the approval at the bottom, the undecided percentage in the middle, and the disapproval on top. The colors were chosen deliberately to be easy to interpret (red is bad, blue is like above and it's also the color of the Democratic Party), and the undecided layer is actually transparent.

<img class="alignnone size-full wp-image-1607" title="Obama Approval Ratings as Area Chart" src="https://eagereyes.org/wp-content/uploads/2012/01/obama-area.png" alt="" width="600" height="340" />

How is this better? For one, it shows the approval trend in a much clearer way than the first chart. If we assume that the number of undecideds is constant, we don't actually need to see the disapproval numbers, and so can initially ignore anything above the blue area.

But the undecided percentage is not constant, and that is clearly visible here as well. The white layer is fairly wide at the beginning and then narrows down relatively quickly before it seemingly stays constant. The numbers actually vary a little bit around 9%, but are quite stable. The reason for making this part transparent is so that the crucial 50% line is visible: we can now see whether the president's approval rating is above or below 50%, and we can decide how much confidence we have in this information.

Looking at just the approval percentages, we can easily tell when the blue area dips below the 50% line. But that does not mean that more than 50% of people disapprove of him, because the disapproval area is not necessarily extending below 50%! Giving Obama the benefit of the doubt, we can see that the disapproval ratings really only went over 50% briefly in July 2010 and then again in the summer of 2011. So instead of lots of noise when the values are very similar (which they tend to be), we can see the information clearly and decide which part we care more about.

The scaling of this chart is also a lot more honest. The first chart is based on the way these charts are typically scaled, from 0 to the highest represented number. That exaggerates the amount of change, however, and creates an artificial center around the point where the lines cross, which is (100%-undecided%)/2. The 50%-line is a much better reference though, because it takes the number of undecided respondents into account instead of factoring them out, and represents the point that really counts.

Finally, the stacking reinforces the idea of a part-whole-relationship. The three numbers (approval, undecided, disapproval) have to add up to 100%, the stack is always the same height. Rather than pretend that we are dealing with two independent data series that are shown as lines, the dependencies between them are clearly shown in the chart.

<hr />

The data for these charts is coming directly from <a href="http://www.gallup.com/poll/113980/Gallup-Daily-Obama-Job-Approval.aspx">Gallup</a>, via a link on <a href="http://thedailyviz.com/post/14866525865/president-obamas-approval-ratings-at-five-month-high">The Daily Viz</a>.


---
## Comments

<a href="http://peltiertech.com/WordPress/" rel="nofollow noopener" target="_blank">Jon Peltier</a> says…
>	See, stacked area charts do have a purpose. Your chart is a great improvement over the two-line chart.

<a href="http://ComplexDiagrams.com" rel="nofollow noopener" target="_blank">Noah Iliinsky</a> says…
>	Nicely done, Robert. I'd love to see a similar treatment for electoral vote polling data. A not-quite-as-good graph ran in 2008; I'm sure it'll be back this year: 
>	http://www.electoral-vote.com/evp2008/Pres/ec_graph-2008.html
>	
>	This approach resolves the issues with ambiguity in the graph when both sides share the same baseline. 
>	
>	Cheers, Noah

derek says…
>	A three-area chart is clearly better than a two-line chart, but is it really better than a three-line chart? The undecided trend is not very clear because the top and bottom of the area are moving at the same time, and the area alone is hard to perceive without an alignment. I made a line chart that shows two things about the undecided trend: first, that it fell quite sharply in the first few months, then suddenly leveled off in a dog leg; and second, that it has risen steadily but very very slowly since then. I don't think those two things are clear in the area chart.

Jamie says…
>	Nice.
>	Two comments.  
>	
>	First, just to nitpick:
>	"The reason for making this part transparent is so that the crucial 50% line is visible: we can now see whether the president’s approval rating is above or below 50%"
>	It's important to note, I think, that this is only true in this chart because the results tend to hover around 50%.
>	The undecided could easily be a solid white, and a separate line could be drawn at the 50% mark.  
>	
>	Second, @derek:
>	I would argue that yes, it is more effective than a chart with three lines, depending on what you are trying to display.
>	The area chart, in this case, does a fantastic job of showing the relationship of the three categories, with the undecided taking a little bit of a supporting role instead of standing on its own. I feel that it is appropriate for it to do so here.
>	
>	If the trend of the undecided category is important enough to highlight to that extent, I would argue for a two chart display, because three lines on one chart would not have anywhere near the impact of the area chart above.

Matthew O'Meara says…
>	interesting.  Though in your version you lose the horizontal grid lines, which I find helpful for interpreting the plot.  Perhaps letting the colored regions be partially opaque would be clearer.
>	
>	-m

<a href="http://euphemize.net/" rel="nofollow noopener" target="_blank">Joel</a> says…
>	I'm kind of curious about the psychological reasoning for choosing a horizontal timescale for the graph given it means using a "top" and a "bottom" for each of the sides (and the reasoning for each).
>	
>	Perhaps rotate it 90 degrees - and then have left side as Democrats and right side Republican?

<a href="http://eagereyes.org/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	Timelines are typically drawn left to right. In this case it works, because we're looking at approval and disapproval, i.e., positive and negative.
>	
>	But you're right that in the case of two candidates that would be more of an issue. Left-right works when it the two parties, but what do you do during the primaries? There is almost always going to be some level of arbitrary choice to make. You don't need that when there are two lines, but then the chart is also much less informative.

<a href="http://euphemize.net/" rel="nofollow noopener" target="_blank">Joel</a> says…
>	True, although past doesn't dictate the future, especially given polling figures focus more on trend and current values than too much history, unless context is added.
>	
>	The other problem for primaries is allocation of colours, given that a selection of party colour may also be due to underlying bias?

<a href="http://euphemize.net/" rel="nofollow noopener" target="_blank">Joel</a> says…
>	Had a shot at it with some Australian two-party-preferred data http://tumblr.euphemize.net/post/17203565937/a-decade-plus-of-nielson-polling-of-the-australian

<a href="http://peltiertech.com/WordPress/" rel="nofollow noopener" target="_blank">Jon Peltier</a> says…
>	Joel -
>	
>	Looks good. My only comment is that the bold red line (and absence of a corresponding blue line) emphasizes ALP and de-emphasizes NLP.

Jamie says…
>	If we were talking about the showing the approval numbers for two different parties, where we had to choose one to put on top and one on the bottom, then no - this set up would not make sense, for many reasons.
>	
>	But that's not what we're looking at...
>	This is simply approval vs. disapproval rating for the already elected (singular) president.

<a href="http://euphemize.net/" rel="nofollow noopener" target="_blank">Joel</a> says…
>	Yeah, that was an unfortunate side effect of using Google Docs for charting.

<a href="http://euphemize.net/" rel="nofollow noopener" target="_blank">Joel</a> says…
>	@Jamie: true, and apologies. The same stands though in the lead up to the US Presidential Election.


