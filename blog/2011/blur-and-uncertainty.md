---
title: "Blur and Uncertainty Visualization"
description: "When visualizing uncertainty in data, a common choice is to use blur. While that may seem natural, it is unfortunately ineffective. Blur has the effect of guiding attention, but is hard to quantify and annoying to look at. Uncertainty information, or any other data, cannot be shown effectively this way."
date: 2011-02-08 22:18:22
tags: techniques
featuredImage: https://media.eagereyes.org/media/2011/sdof-chess.jpg
---

<p align="center"><img src="https://media.eagereyes.org/media/2011/sdof-chess.jpg" alt="" width="600" height="290" /></p>

# Blur and Uncertainty Visualization

When visualizing uncertainty in data, a common choice is to use blur. While that may seem natural, it is unfortunately ineffective. Blur has the effect of guiding attention, but is hard to quantify and annoying to look at. Uncertainty information, or any other data, cannot be shown effectively this way.

## Semantic Depth of Field (SDOF)

Almost ten years ago, I wrote my Ph.D. thesis about the use of blur and sharpness in visualization. I called that idea <em>Semantic Depth of Field (SDOF)</em>, in analogy to the depth of field (DOF) effect in photography. The idea was to establish blur as a new visualization dimension, in addition to the existing ones like length, color, etc.

What I did not grasp at that time was the importance of attention for perception. Almost all our experiments were geared towards measuring the perception of blur for quantitative data, not guiding the user's attention. As a result, some of the results were quite disappointing.

## The Good News: It's Preattentive

Some of my hypotheses turned out to be correct: sharp objects amongst blurred ones can be picked out preattentively, which means that it happens very quickly and there is no significant increase with the number of objects. This worked not only for detecting objects, but also for estimating how many there were.

When we compared sharpness and blur to color and orientation, we found that sharpness worked better than orientation, and that there was no significant difference from color. In hindsight, it might not seem all that surprising, since it is generally assumed that visual cues that are involved in depth perception are perceived preattentively. At the time, that was quite a nice result, though.

## The Bad News: You Can't Read It

Now for the bad news. We performed some experiments where we had people look at objects that were sharp or blurred (and to different degrees), and tell us whether they thought they were the same or different. We also asked them to quantify the difference in blur.

The results were devastating. While we're really good at telling sharp and blurred objects apart, we do not care about differences in blur. If you look at a photograph that has out-of-focus parts, you will notice that they all look the same, even though objects at different distances from the focus plane get blurred to different degrees.

Even worse is the accuracy when guessing blur levels. Just as we are not interested in telling blur levels apart, we are unable to quantify them. This is far from surprising when you think about it, but what it means is that there is no point in using blur for showing data that the user is supposed to read.

All a blurred part of an image does is pull the user's attention away from it to the parts that are in focus. That can be useful, but that is not often the goal when showing uncertain data. If the data points are blurred, then why show them at all? Blur is useful as a focus-and-context technique, though, if there are controls that let the user pick a criterion to filter out data. But when it comes to showing uncertainty information, a different retinal variable has to be used.

## Blur is Bad

In many quantitative studies, the qualitative comments you get are among the most interesting results. And we got quite a few of those from people telling us that they did not enjoy staring at blurred objects (and blurred text, which we used in one of the tests). And it's not exactly surprising: our visual system guides our attention to the in-focus parts of an image for a reason. Also, there are almost always parts of our visual field that are blurred, because there are objects there that are outside our current focus distance. We don't even realize these things are there, because they are of no relevance. If we cared about them, we would focus on them.

As much as I would have liked to establish blur as a useful visualization dimension, it is simply unsuitable for the task. What blur and sharpness are really good at, though, and what sets them apart from most other visual cues, is for guiding attention. That is something we haven't done much so far in visualization. But when it comes to depicting numbers and expecting users to be able to read them, blur is probably the worst choice.

<hr />

Relevant papers:
<ul>
	<li>Robert Kosara, Silvia Miksch, Helwig Hauser, Johann Schrammel, Verena Giller, Manfred Tscheligi, <a href="/publications/Kosara-VisSym-2002" target="_blank">Useful Properties of Semantic Depth of Field for Better F+C Visualization</a>, <em>Proceedings of the Joint Eurographics – IEEE TCVG Symposium on Visualization (VisSym)</em>, pp. 205–210, 2002.</li>
	<li>Robert Kosara, Silvia Miksch, Helwig Hauser, <a href="/publications/Kosara-InfoVis-2001" target="_blank">Semantic Depth of Field</a>, <em>Proceedings Information Visualization (InfoVis)</em>, pp. 97–104, 2001.</li>
</ul>


_Posted by <a href="/about">Robert Kosara</a> on February 08, 2011_


<aside class="comments">

---
## Comments

mwjohnson says…
>	I just started reading this blog after a talk you gave last Friday, thanks for the great talk by the way. Ironically I was just talking to a friend about reducing the amount of opacity in a mark for cases where some dimension has a lot of variance. Although not exactly the same as blur, I think the affect would be pretty similar. I would question our abilities to measure levels of opacity in vertices in a graph, and be able to compare them, ie. one vertex has more variance in some dimension than another.
>	
>	Thanks for the very helpful post, and even more thanks for the great timing!

chansen says…
>	For uncertainty quantification, I agree with your reflections.  Blur does not really help with uncertainty information.  However, it does help with spatial relationships of 3D space in a 2D projected image (similar to how photography uses it).  Look for our (hopefully accepted) EuroVis paper on blur for volume rendering!

Robert Kosara says…
>	It's certainly useful for purposes like these, which are essentially mimicking photography (sounds like an interesting paper!). Also, as I said, it works well for guiding attention. What blur is useless for is displaying quantitative data.

chansen says…
>	We agree!

</aside>

