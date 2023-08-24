---
title: "When the Wrong Chart Is the Right Choice"
description: "We all agree that the direction of the bars in a bar chart should correspond to the direction in which the values grow. Or do we? When it comes to running or audio recording and processing, it turns out that the seemingly wrong choice can be the right one – because a more semantically meaningful representation can help us understand and use the data much more easily."
date: 2021-06-27 18:05:14
tags: 
featuredImage: https://media.eagereyes.org/wp-content/uploads/2021/06/undeararmour-bars.jpeg
---

# When the Wrong Chart Is the Right Choice

We all agree that the direction of the bars in a bar chart should correspond to the direction in which the values grow. Or do we? When it comes to running or audio recording and processing, it turns out that the seemingly wrong choice can be the right one – because a more semantically meaningful representation can help us understand and use the data much more easily.

## Running Pace

This discussion started with <a href="https://twitter.com/visualisingdata/status/1400825403896369152">this tweet by Andy Kirk</a> making fun of a chart made by Under Armour, which shows pace for kilometer splits of somebody's run:

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2021/06/undeararmour-bars.jpeg" alt="" class="wp-image-97316" width="375" height="461"/></p>

On the face of it, this looks completely bonkers. Here’s a bar chart where the vertical axis is upside down, and it’s not even starting at 0 at either end. How can this possibly make any sense?

If you’re a runner, you probably understand what’s going on here. Pace is measured in units of time per distance, so usually minutes and seconds per mile or kilometer. That makes for a much more relatable way of thinking about speed at human scale where a difference of, say, 10 seconds per mile is meaningful. Translated into km/h or mph, that would be miniscule.

The issue with this measurement is that unlike speed, pace gets smaller as you get faster. Running a mile in eight minutes is faster than doing it in ten minutes. So a numerically smaller 8 min/mi pace is going to make you quite a bit faster than a numerically larger 10 min/mi.

In a chart, that’s kind of weird. You could just do the “correct” thing in the visualization sense and ignore the meaning. But you’d end up having to explain that the shorter bars mean faster pace. That’s not very logical, and it’s not motivating – you want to see larger bars for faster miles. Performance benchmarks that measure completion time of a task (like <a href="https://arstechnica.com/gadgets/2020/11/mac-mini-and-apple-silicon-m1-review-not-so-crazy-after-all/">these ones at <em>Ars Technica</em></a>) have a similar problem, so they usually include an annotation to say whether <em>higher is better</em> or <em>lower is better</em> (especially when that changes between different benchmarks).

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2021/06/Mac-mini-M1-Final-Cut-vs-Intel-1440x1080-1.jpeg" alt="" class="wp-image-97314" width="720" height="540"/></p>

Running apps have long shown pace data upside down. Here’s a quick screenshot I posted from Strava where they’re using a line chart. Note the scale on the right.

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2021/06/strava-lines.png" alt="" class="wp-image-97308" width="576" height="444"/></p>

Line charts tend to get a pass when it comes to zero baselines (<a href="https://engineering.tableau.com/truncating-the-y-axis-threat-or-menace-d0bce66d4d08">though that isn't actually warranted</a>). Strava also shows splits as bars though, with the same inverted axis.

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2021/06/strava-bars.jpeg" alt="" class="wp-image-97309" width="563" height="489"/></p>

Other apps tend to do the same, as far as I’m aware. If you’re a runner, I think you’re used to this representation and easily understand what it means: smaller pace number means faster means better, which should make for a taller bar – visualization rules be damned!

We did discuss this a bit further <a href="https://twitter.com/eagereyes/status/1400826317466079233">in my twitter thread responding to Andy</a> and started talking about how to represent this data differently (or <em>better</em>, if you will). Andy <a href="https://twitter.com/visualisingdata/status/1400847309802512384?s=20">proposed this alternative</a>, using bars but anchoring them on the average instead of a completely arbitrary baseline:

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2021/06/andy-bars.jpeg" alt="" class="wp-image-97310" width="620" height="520"/></p>

I agree that this is a good idea. It would actually be quite useful to see negative splits in a race (meaning your pace is faster in the second half than the first) more easily. Instead of the average, you might also pick a target pace to show the bars against. Then all the bars might point up or down, showing you how you were doing relative to your goal (again, most important for a race). But that doesn't change the scale being upside down so faster points up.

## Audio Software and Interfaces

There are other places where axes can be scaled in unusual ways and make sense. The dB scale on the right edge in this screenshot from audio software iZotope RX goes from -∞ to 0, both up and down. Yes, <em>that</em> infinity. You're looking at not just one infinite scale, but two!

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2021/06/izotope.png" alt="" class="wp-image-97312" width="605" height="454"/></p>

Sure, dB is a logarithmic scale, but the spacing between -20 and -∞ is not to scale here. The range between -20 dB and 0 dB is the most important for finding and fixing problems, so they gave it as much space as possible. And since the signal extends both above and below the zero crossing, they did that for both halves.

A similar reason is likely behind the uneven scaling of the level indicators on this MOTU audio interface. Note that the top three labels on the vertical axis (on the left, this time) are spaced 6 dB apart, and the distance then triples to 18 dB for the lower four. That again gives a lot more space to the range between -12 dB and 0 dB, where you want more precision to avoid overdriving the mic preamps or other input and outputs.

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2021/06/ultralite-mk5-panel.png" alt="" class="wp-image-97313" width="760" height="404"/></p>

Here's one more example, this one from Logic's compressor. This meter shows the reduction in level by the compressor, so it starts on the right. It's kind of logical actually since the reduction is a negative number, but the spacing is still quite creative: note the even subdivisions on the right side of -10 dB and how they differ from the left. This is not a logarithmic scale either, it's really two different scales that meet at -10.

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2021/06/compressor-meter.jpeg" alt="" width="586" height="227" class="wp-image-97318"/></p>

Visualization dogma of course does not allow such unevenly-spaced axes. But many decades of audio devices show that they work and serve a purpose, just like they do with the (seemingly) weird running pace charts.

## Expertise vs. Visualization Rules

I think this little discussion highlighted something important about how we need to think about charts in the context of expertise and use. We aren’t chart-reading machines that mechanically follow supposed chart rules when working with charts. We can adapt. We can use our intelligence. We can read axis labels. We can understand context.

Distorted axes can be a problem, no doubt. But distortion isn’t always wrong, and in fact sometimes is the better way to go. Use case, convention, and expertise trump visualization rules any day. And I think these two examples, in particular the one about running, is one that many people can relate to who otherwise would scoff at the outrageously bad charts used by experts in some field they don’t understand.


<PostedBy />


