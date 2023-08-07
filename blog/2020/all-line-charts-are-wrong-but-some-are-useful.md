---
title: "All (Line) Charts are Wrong, But Some Are Useful"
description: "Line charts are one of the most common and useful charts out there. But why draw straight lines between the data points? They almost never represent what the data is actually doing, no matter if the data is single observations or aggregated over time. How do line charts actually work, and what do they imply about the data?"
date: 2020-11-18 00:03:53
tags: 
featuredImage: https://media.eagereyes.org/wp-content/uploads/2020/11/lines-teaser.png
---

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2020/11/lines-teaser.png" width="960" height="540" /></p>


# All (Line) Charts are Wrong, But Some Are Useful

Line charts are one of the most common and useful charts out there. But why draw straight lines between the data points? They almost never represent what the data is actually doing, no matter if the data is single observations or aggregated over time. How do line charts actually work, and what do they imply about the data?

I'm going to look at two cases here: single observations where each value is a separate, original data point (row-level data, if you will) from a single point in time, and aggregated data where the values are totaled up or counted or similar, to yield a value that applies to a span of time.

## Observations: Temperature over Time

Let's look at a typical line chart the way it's supposed to be used: for observations over time. This example shows temperatures over time, one value per minute. The important thing here is simply that each is an individual reading from a specific point in time, so there is no averaging or similar going on. The points are spaced equally in time here, but it doesn't matter.

<figure class="wp-block-image size-large"><img src="https://media.eagereyes.org/wp-content/uploads/2020/11/time-line-1320x743.png" alt="" class="wp-image-61120"/></figure>

What do the lines mean here? What we actually have is just the observations, which are individual values.

<figure class="wp-block-image size-large"><img src="https://media.eagereyes.org/wp-content/uploads/2020/11/time-dots-1320x743.png" alt="" class="wp-image-61121"/></figure>

We could show them like this, but we usually don't. Instead, we draw a line. And typically, we don't even draw the dots. Instead, we usually rely on the line having enough kinks to let us see where the points are. That often works, but not always. And it emphasizes the line rather than the points.

Instead, we might draw a like chart like this.

<figure class="wp-block-image size-large is-resized"><img src="https://media.eagereyes.org/wp-content/uploads/2020/11/time-dots-line-1320x743.png" alt="" class="wp-image-61122" width="580" height="326"/></figure>

You might argue that this is a reasonable representation because surely, temperatures exist even when we don't measure them, and they change continuously between the points. To which I say: yes, but not in straight lines! Temperatures change in a continuous way, but not at a constant speed from one measurement to the next and then suddenly change their direction and speed to aim for the next one.

This is what smooth transitions would look like:

<figure class="wp-block-image size-large"><img src="https://media.eagereyes.org/wp-content/uploads/2020/11/time-dots-line-smooth-1320x743.png" alt="" class="wp-image-61123"/></figure>

This would be the most reasonable chart of this data (other than the pure dots). What is so surprising about this is that nobody draws line charts like this. Why not? The typical argument is that such a smoothed line is just made up data! But the same is true of straight lines. Straight lines might seem more straightforward, but they're basically always wrong. Temperatures do not change in that way. Any reasonably smooth approximation is going to be a much more realistic picture of what is actually happening.

<em>But</em>, you object, <em>nobody is fooled by the lines</em>! People surely understand that the lines are just connecting the dots, not representing data. Perhaps, but then why insist on straight lines?

The lines between the points either matter or they do not. If they matter, why insist on them being straight? No natural process behaves like that. And if they don't matter, then there is no reason to not draw the more realistic smoothed lines.

If you're familiar with sampling theory, here's another argument for the smooth line: if we <a href="https://en.wikipedia.org/wiki/Nyquist_rate">chose our sampling interval to be fast enough</a> to pick up the fastest changes, then the smooth transitions reconstruct the actual behavior perfectly. And if we didn't, it's still the best approximation we have without making up data that doesn't exist (or bringing in some other knowledge) to force the straight lines.

## Aggregated Values: Sales per Month

Now let's look at the other scenario where the data is aggregated. Let's say we have sales data here for each month (or something else that you can count or total up over a month, it doesn't matter), one number per month. Look, it's a line chart!

<figure class="wp-block-image size-large"><img src="https://media.eagereyes.org/wp-content/uploads/2020/11/dates-line-1320x743.png" alt="" class="wp-image-61124"/></figure>

As before, all we have are really just the values for each month, nothing in between. This will look familiar.

<figure class="wp-block-image size-large"><img src="https://media.eagereyes.org/wp-content/uploads/2020/11/dates-dots-1320x743.png" alt="" class="wp-image-61125"/></figure>

Now if we were to draw lines, what would those mean? The difference from before is that these aggregates, like the sum of sales in a month, don't make sense between the points. There is no transition from May's sales to June's sales, linear or otherwise. The numbers are totaled up at the end of each month and then apply to the entire month. Straight lines between these points make no sense.

A more accurate representation would be this, though you might even argue that the vertical lines make no sense here. I just wanted to keep the line contiguous, though. Stepped line charts are also reasonably common and easy to make in visualization tools, as opposed to broken lines.

<figure class="wp-block-image size-large"><img src="https://media.eagereyes.org/wp-content/uploads/2020/11/dates-manhattan-1320x743.png" alt="" class="wp-image-61127"/></figure>

If this looks like a different kind of chart, you might be thinking of this:

<figure class="wp-block-image size-large"><img src="https://media.eagereyes.org/wp-content/uploads/2020/11/dates-bars-1320x743.png" alt="" class="wp-image-61128"/></figure>

Yes, a bar chart. Now I don't argue for bar charts lightly (I have a really strong aversion to the <em>everything should be a bar chart</em> school of thinking), but it's a more meaningful chart (other than the dots above). How would lines connecting the points make any sense here other than to make a nicer, more connected-looking chart?

The lines either matter or they don't. If they matter, they need to be meaningful. Lines between aggregated values are not meaningful. If they don't matter, why not do away with them in favor of a chart that matches the actual semantics of the data?

## Now What?

So what are you supposed to do now? Am I saying line charts are evil and should be avoided? No. But I think we need to start thinking about how we represent data, and how we admonish people about best practices, a bit more carefully.

First of all, it might not matter. If you have enough data points that you don't even see the lines between them, this is a moot point. If you're happy with your line charts and never get confused by the points between the lines, don't worry about them. I have no desire to stop anybody from using line charts.

What I'm after here is simply to get a better understanding of what these common and basic charts do. And to ask why we do certain things and not others. Why do we draw straight lines and not Bezier curves? Why insist on certain chart types where they might be commonly used, but really not very meaningful?

And why the aversion to smoothed lines? The common misconception aside that smoothed is somehow more made up than straight lines, one common argument is that they can overshoot the actual values, which is often perceived as a problem. I don't understand that position, though; if the Bezier curve overshoots, that might indicate that the value really was outside the range that was observed. And it might mean that more observations are needed. Instead of forcing a meaningless straight line to paper over the problem, why not figure out what is really happening? Either way, the data and the chart are not fully capturing the phenomenon they're supposed to represent.

Perhaps it's time we started thinking about visualization and charts more like statisticians think about their models. <a href="https://en.wikipedia.org/wiki/All_models_are_wrong">An aphorism attributed to George Box</a> states that <em>all models are wrong, but some are useful</em>. In the same vain, I propose that <em>all charts are wrong, but some are useful</em>.


_Posted by <a href="/about">Robert Kosara</a> on November 18, 2020_


<aside class="comments">

---
## Comments

<a href="https://gicentre.net/jwo" rel="nofollow noopener" target="_blank">Jo Wood</a> says…
>	Thanks for another interesting perspective Robert. I am persuaded by your overall argument and the relationship between data type, sampling and visual interpolation. 
>	
>	I would though, take issue with the framing of these charts as "right" or "wrong" (acknowledging you are echoing George Box for narrative purposes). I think it can be dangerous to think of any chart as potentially "right". Charts are not data, but visual transformations that we choose to make to bring to our attention certain characteristics of data. Or, as Magritte more succinctly put it in The Treachery of Images, "Ceci n'est pas une pipe".
>	
>	I think this is more than an abstract philosophical distinction as it reminds us that as designers we make choices about which properties to emphasise. These are not objective decisions, but ones contextualised by the designer and the purpose of the chart. Maybe linear interpolation is a reasonable decision if we wish to create a visual reminder of the discrete temporal sampling. Maybe a Bezier curve is a reasonable decision if we wish to emphasise the continuity of the underlying process. Maybe a different form of spline curve would emphasise that process more closely. Maybe fidelity of the underlying process is less important to the design than other properties. These are all potentially valid design choices that I think go beyond notions of "right" or "wrong".

<a href="http://infoserviz.co.il/" rel="nofollow noopener" target="_blank">Bella Graff</a> says…
>	Try to think of it from a different angle. The data do not interest us. Relationships between the data is what is interesting. Lines do not represent data, but data relations. They do not answer the question "how much?", But to the question "how has it changed?": An upward line means an increase, a downward line means a decrease. "Metaphors" we already said? ;)

Jeff Pettiross says…
>	I like your extension of Robert's ideas. I was trying to articulate the role of the shape of the lines, but you nailed it exactly. The design of the lines probably does affect how the viewer thinks about the underlying data.

Jeff Pettiross says…
>	Thanks for explicitly laying out the subtleties of line shakes, Robert. Now you've given me another while dimension I can obsess about when making my next chart!
>	
>	I'm curious about speed of interpretation and how curves may or may not affect cognitive bias. The visual cortex can process slopes and changes in slope quickly. Does that same ability apply to curves? If not, does a more cognitive interpretation of the chart impede understanding if its data contradict our belief?
>	
>	Do you know if there's research along these lines, Robert?

Gregor Thomas says…
>	I agree with much of what's said, but I think  your article is skipping one of the main purposes of lines: grouping a particular series of points so that multiple groups can share a plot. (Perhaps this is coming in a future post?)
>	
>	If your temperature example had series for, say, Seattle, Chicago, and New York, many comparisons would be more difficult using bars - the standard choice of straight lines seems like a good one. Smoothed lines would also be good for this criterion.

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	Yes, totally agreed. I was irked by the particularly odd choice off the straight lines that we take as the obviously "right" one. Once you accept that all choices are just that, choices, you can think about what you're after more freely. But you also have to acknowledge that you're making a choice, not following some kind of law of visualization.

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	Interesting question. I don't, and I'd be surprised if somebody had studied that in visualization. But I'm sure there's some literature in psychology that would apply.

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	For temperatures, it wouldn't be bars but smoothed lines ;) But you're right of course, comparing multiple time series as bars or even stepped lines would be more difficult. There are tradeoffs here, and decisions to be made, and making the chart more readable by using straight lines is a perfectly valid one. That's different from just taking the line chart as the Obvious and Correct Default, though, just because it's a time series.

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	I'm all about the metaphors! You're right about relationships, and maybe that's where you want those straight lines. But that's not always the case. And it's important to realize that it's a choice that is made for a reason. It's not just the data, it's what you're trying to get out of the chart.

stephen black says…
>	My basic objection to smoothed lines in charts is not that they are a bad idea but that the commonest charting tools (I'm looking at you Excel) make them very easy to do very badly. This means that the majority of all examples I have seen end up misrepresenting the data more severely than a simple straight line would do. IF you are going to use lines and not dots or bars this can be very nasty. 
>	
>	If every tool auto plotted the raw points and made smooth curves that always passed through the points this would be a minor problem. But most tools don't work like that.

Bella Graff says…
>	Of course not always. Only when we talk about a metaphor of ups and downs in time. If we talk about a metaphor of higher / lower in time - we will use columns.

<a href="http://datavis.ca" rel="nofollow noopener" target="_blank">Michael Friendly</a> says…
>	In all this rant about the evils of joining the points either with straight lines or curves that go through all the points, I'm surprised you didn't mentioned statistical smoothers (loess) that have nice properties of fit vs. smoothness

<a href="http://vislives.wordpress.com" rel="nofollow noopener" target="_blank">Chris Pudney</a> says…
>	Charts can be thought of as (visual representations of) models.

Bella Graff says…
>	A reality-like model

Bill C says…
>	Great article, thanks for sharing. One perspective (ahem) that I think is worth mentioning is the simply pragmatic: Connecting the dots can make them easier to see, and straight lines can be simpler to draw, so sometimes that's all it is: A visual aid - particularly in the case where the consumer of the visualization understands the limitations in question. Having managed visualization tools for traders, I think this sort of consideration (I need to glance at that screen and quickly get the gist) often overrides more technical concerns. That said, I have definitely seen the effects you describe when less well-versed people viewed the same visualizations, so certainly not arguing against the points you make, just suggesting that the underlying cause of their popularity might be social, not statistical.

</aside>

