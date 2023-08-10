---
title: "3D Bar Charts Considered Not That Harmful"
description: "We've turned the understanding of charts into formulas instead of encouraging people to think and ask questions. That doesn't produce better charts, it just gives people ways of feeling superior by parroting something about chart junk or 3D being bad. There is little to no research to back these things up."
date: 2016-05-02 20:50:37
tags: 
featuredImage: https://media.eagereyes.org/wp-content/uploads/2016/05/Trivapro-graph.jpg
---

# 3D Bar Charts Considered Not That Harmful

We've turned the understanding of charts into formulas instead of encouraging people to think and ask questions. That doesn't produce better charts, it just gives people ways of feeling superior by parroting something about chart junk or 3D being bad. There is little to no research to back these things up.

## The Trivapro 3D Bar Chart

<a href="http://www.knowmoregrowmore.com/9875/think-again-before-skipping-fungicides-in-row-crops/">This 3D bar chart</a> recently got some attention on Twitter.

<p align="center"><img class="aligncenter size-full wp-image-9238" src="https://media.eagereyes.org/wp-content/uploads/2016/05/Trivapro-graph.jpg" alt="Trivapro-graph" width="1074" height="821" /></p>

At first glance, it's one of <a href="http://viz.wtf">those bad charts</a>. It's 3D, and at a fairly extreme angle. The perspective projection clearly distorts the values, making the red bar look longer in comparison to its real value difference. The bars are also cut off at the base, at least unless you consider the parts with the labels to be the bottoms of the bars (and even then, they're not the full length to start at 0).

But then, what is this supposed to show? It's about the fact that a fungicide names <em>Trivapro</em> produces more yield than the two other products or no treatment. There is no confusion here about which bar is longer. And the values are right there on the chart. You can do some quick math to figure out that a gain of 32 over the base of 146 is an increase of a bit over 20% (30 is one fifth of 150, 32 out of 146 comes out to 22%).

The gain is also easy to compare, again due to the numbers. Trivapro adds more than twice as much as the third product and about four times as much as the second one. That is even reasonably visible from the bars if you're just looking at the bottom bar as the baseline and don't worry about where the zero is.

Is this a great chart? No. It's not even a good chart. Is this an accurate chart? No. Though it has the numbers on it, so it's less bad than without.

It is much less bad than the usual knee-jerk reaction would have you think, though.

## Truncated Axes Are Bad

What does lead to misinterpretation is when bar charts don't start at zero. That has <a href="http://fellinlovewithdata.com/research/deceptive-visualizations">actually been studied</a> and there is an effect. That is the case when you're looking at just the chart, and when you're after a precise comparison. Showing the numbers partly negates the point of the chart, but it also means that any distortion is going to be less of an issue.

I'd argue that truncating axes is worse in a plain bar chart than in a crazy 3D one like the one above. You can't read the latter very precisely anyway, so doing some more harm really isn't that big a deal. But since we've left the world of accurate bar charts anyway, we might as well slap numbers on it and don't worry about distortions. That's different when you're looking at a austere 2D chart, which you expect to give you accurate reading in exchange for its sternness.

Truncating the axis is also less problematic when you're comparing bars to each other as the baseline, rather than zero. Now the reference bar can be treated as the zero.

## 3D Bars and Data Distortion

Another thing that has been studied is the effect of adding depth to a simple bar chart. <a href="http://www-psych.stanford.edu/~bt/diagrams/papers/bargraphsJEPApplied98.pdf">Zacks, Levy, Tversky, and Schiano found that adding depth to a bar chart</a> lowered precision. So 3D bars are bad, right? Well, they also found a few other things.

First of all, when they introduced a delay after showing people the bars, there was no more difference between 2D and 3D. That is pretty interesting, because we don't typically have to make snap judgments based on charts.

The other effect is much more troubling, though: neighboring bars had a significant effect on people's perception. This makes sense, as we're quite susceptible to relative size illusions like <a href="https://en.wikipedia.org/wiki/Ebbinghaus_illusion">the Ebinghaus Effect</a> (in case you haven't seen it, the orange circles below are the same size).

<p align="center"><img class="aligncenter size-full wp-image-9239" src="https://media.eagereyes.org/wp-content/uploads/2016/05/Mond-vergleich.png" alt="Ebbinghaus Effect" width="1500" height="918" /></p>

What that means is that <em>the data itself</em> causes us to misjudge the sizes of the bars! An unsorted bar chart in particular makes comparisons difficult and error-prone. That effect, by the way, was quite strong and did not disappear when a delay was added before asking people.

## Worry About The Real Issues

It's easy to point fingers and laugh at people for using 3D charts. It takes a bit more knowledge and depth to understand that it's not all about 2D vs. 3D. Three-dimensional charts can be just fine, and 2D charts can be quite misleading.

We need to get away from the seeming easy fixes – that don't actually fix much –, and encourage people to dig a little deeper. Sure, that 3D effect is unnecessary, but is it really causing that much of a problem? What about the axis or the sorting, even in a plain old 2D chart?

It's also important to realize just how little of what is often taken as data visualization gospel is based on hearsay and opinion rather than research. There are huge gaps in our knowledge, even when it comes to seemingly obvious things. We need to acknowledge those and strive to close them.


_Posted by <a href="/about">Robert Kosara</a> on May 02, 2016_


<aside class="comments">

---
## Comments

<a href="http://twitter.com/randal_olson" rel="nofollow noopener" target="_blank">Randy Olson (@randal_olson)</a> says…
>	Hi Robert! Very interesting post, and thank you for sharing. I very much agree that we should go back to our basic assumptions about dataviz and re-evaluate them from time to time. Indeed, I frequently do that in my field of research (machine learning) and find that many of the rules of thumb in machine learning don't hold for modern methods.
>	
>	Anyway, the main point I wanted to raise here is that although we should definitely take a research-oriented approach to re-evaluating our basic assumptions in dataviz, we should not take one research study as gospel. In research studies, it's possible for the experimental design to be flawed in some way, or the results to be interpreted improperly, or even just to have a "bad batch" of test subjects that affect the outcome when there's a small sample size.
>	
>	For that reason, I think we should hold out on drawing conclusions such as, "3D Bar Charts Considered Not That Harmful" until we see *several* research studies corroborating that result. And, if we read the research article you linked, there are in fact research studies showing the opposite finding wrt the effect of 3D.
>	
>	Just the same as it takes several (&gt;3) points to make a trend, it must take several replication studies to make a scientific "truth" (if we want to call it that).

Anthony says…
>	Great post. Most data vis rules seem focused on the idea that precision is the Most Important Thing. I want to explore using less precise charts and marks for less precise data.

<a href="http://www.agilegeoscience.com/" rel="nofollow noopener" target="_blank">Matt Hall</a> says…
>	Nice post Robert. I agree that it's too easy to slam a 3D chart or pie chart or whatever else Tufte slams. It's also fun. But I don't think you can defend the Trivapro chart with "There is no confusion here about which bar is longer." Fair enough, if the data are sound then the chart doesn't *lie*, it's not *that* bad. But the whole point of producing the chart this way was presumably to make exactly that point — that the red bar is longer — and indeed to exaggerate it with the nonlinear, cut-off, and/or bent axis. You could say the same about many junky charts: they set out to reduce confusion. That sounds fine in principle, but they go too far the other way and now the confusion works in their favour.

<a href="https://plus.google.com/112734284568833707471" rel="nofollow noopener" target="_blank">Jamie Briggs</a> says…
>	So, what I am getting here is, "yes, it's a really bad chart, that's really easy to make better, but some people make bad charts that aren't 3D too.  Oh yeah, and screw Tuft."
>	
>	While there are obviously people who will take Tuft's views as a dictionary to define what you can and can't do, and feel smug in doing so, the very real and valid criticisms of this absurd chart are plenty, and the fact that you can make a bad chart in 2D has no bearing on that whatsoever.
>	
>	I also think it's about time we stop using the "Oh, you just say that because Tuft!" argument every time some criticizes a shitty data visualization.
>	
>	I agree that it's a great idea to examine our presumptions about charts. That about ends what I can agree with in this post :)

sharoz says…
>	Hi Randy,
>	
>	I'm not sure how constructive that argument is. Of course, multiple experiments are more reliable than one. But one experiment is also more reliable than a claim substantiated only by intuition.

Gene Zavertnik says…
>	I agree with you, sharoz. One study can overturn accepted wisdom based on intuition. 
>	
>	However, I'm not even sure that's what Kosara was even arguing. Nowhere in the post does he recommend that we do away with agreed upon guidelines because of one flawed or badly interpreted study. That's a straw man, IMO.

<a href="http://gravatar.com/datavisualyst" rel="nofollow noopener" target="_blank">datavisualyst</a> says…
>	Hi Robert, 
>	Interesting post you've got here, and I understand what you're trying to say. Essentially, not every chart that strays from the standards espoused by 'purists' warrants breaking out the pitchforks and torches. I agree with that. 
>	
>	What I don't agree with is that a chart being "Less Bad" makes it in any way good, or acceptable for its intended purpose. Not that you stated that explicitly, but it's implied by the title of your post.
>	
>	Now this is where it gets tricky because the intended purpose is so massively influential in the matter. Specifically, if the purpose is to be marketing collateral, then viewers should treat it as such. And if an Executive report, then I would hope this sort of thing would never make it to that audience.
>	
>	However, the danger of thinking that this type of design can be "ok" is that it is exposed to several people of varying degrees of responsibility in business. And where someone reads a post like this, and takes it as an endorsement of this type of design, it becomes harmful. To what degree? I can't say, but it certainly is not helpful towards the aim of fostering a set of visualization best practices. 
>	
>	Now, obviously, any individual that takes a single opinion as gospel and incorporates it into their methodology on a whim is not the sort of person I'd have in a role of meaningful impact, but there are likely plenty of them out there.
>	
>	Thoughts?
>	
>	Cheers,
>	Datavisualyst

</aside>

