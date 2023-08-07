---
title: "Paper: An Evaluation of the Impact of Visual Embellishments in Bar Charts"
description: "Information graphics often use variations and embellishments of standard charts that may distort the way people read the data. But how bad are these distortions really? In a paper to be presented at EuroVis this week, Drew Skau, Lane Harrison, and I tested their effects in an experiment."
date: 2015-05-25 18:17:14
tags: papers
featuredImage: https://media.eagereyes.org/wp-content/uploads/2015/05/embellishments-teaser.jpg
outline: false
---

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2015/05/embellishments-teaser.jpg" alt="" width="825" height="467" /></p>

# Paper: An Evaluation of the Impact of Visual Embellishments in Bar Charts

Information graphics often use variations and embellishments of standard charts that may distort the way people read the data. But how bad are these distortions really? In <a href="https://eagereyes.org/publications/Skau-EuroVis-2015.html">a paper to be presented</a> at <a href="http://www.eurovis2015.it">EuroVis</a> this week, Drew Skau, Lane Harrison, and I tested their effects in an experiment.

Based on a survey of common infographics tropes, we came up with a number of common patterns. We then simplified those to reduce them to just the embellishment type, removing many elements like color, complex patterns, external decorations, etc. We ended up with these six embellishment archetypes, which we tested against a standard bar chart.

<p align="center"><img class="aligncenter size-medium wp-image-8794" src="https://media.eagereyes.org/wp-content/uploads/2015/05/embellishment-cases.png" alt="Chart Embellishment Cases" width="660" height="595" /></p>

In the experiment, we asked people two types of questions: absolute and relative. In the absolute question, they had to estimate the value represented by one of the “bars,” while in the relative one we had them express the smaller one as a fraction of the larger.

We carefully avoided asking about the height of the bars, or even referring to bars in the questions or the descriptions. This is because we wanted to not bias people towards looking just at height when they might be reading area (which is important for the triangular charts that <a href="https://eagereyes.org/blog/2008/linear-vs-quadratic-change">scale in two directions</a>).

What we found is not terribly surprising, but it is now backed by actual research: most of the embellishments have an adverse effect on the accuracy of reading values when comparing bars. The worst offender are quadratically scaled triangles (which grow not just vertically but also horizontally). Interestingly, the one that doesn’t seem to have an effect is when the bar extends below the baseline. That is in contrast to recent findings that show that cutting off the axis so it does not start at 0 causes reading errors.

For reading absolute values, we found that most embellishments had no effect, with the exception of quadratic triangles. The capped chart in this condition yielded the same average values and a smaller standard deviation than the baseline bar chart. We think that the cap with its flat top actually helped people draw a mental line to the axis to judge the values.

<a href="/publications/Skau-EuroVis-2015">The paper</a> has more details and some recommendations for designers working on infographics. It also nicely complements both <a href="/papers/isotype-visualization">our recent CHI paper on ISOTYPE</a> and <a href="http://fellinlovewithdata.com/research/deceptive-visualizations">the work on deceptive visualization by Anshul Pandey, Enrico Bertini, and others</a>.

<hr />

Drew Skau, Lane Harrison, Robert Kosara, <a href="/publications/Skau-EuroVis-2015">An Evaluation of the Impact of Visual Embellishments in Bar Charts</a>, <em>Computer Graphics Forum (Proceedings EuroVis)</em>, vol. 34, no. 3, pp. 221–230, 2015.


_Posted by <a href="/about">Robert Kosara</a> on May 25, 2015_


<aside class="comments">

---
## Comments

<a href="http://darwineco.com/builders/" rel="nofollow noopener" target="_blank">Robert Klein</a> says…
>	This is kind of a Lakoff idea, but what do you think about the idea that the reason for these distortions has to do with the core thermometer metaphor at work in the overall notion of a bar graph? I guess there's no solid factual basis for my assumption there, but let's just kick it around. A thermometer is a static measurement of one dimension such that up=more. This is unconscious and therefore hard to shake. Maybe the cartesian-ness of it is inherently traditional and the axes must be presented in some way as to signal that they are 
>	not your grandpa's axes" if you are to use unconventional shapes and embellishments. Meanwhile, we just rolled out an API that correlates themes in unstructured info streams and returns them in a JSON format. Love to see what it opens up for you: http://darwineco.com/builders. Hit the engineers up on github if you have any questions or if things aren't working right. Glad I found your blog! Take care. Robert

<a href="http://www.storytellingwithdata.com" rel="nofollow noopener" target="_blank">Cole Nussbaumer</a> says…
>	Hi Robert, Super interesting research! Question on the zero-baseline piece: can you really draw the conclusion that non-zero baselines in bar charts aren't an issue? The example you show has a clear horizontal axis at zero, so the part below the axis wouldn't impact the relative values in the positive quadrant, right? Your conclusion seems like a big jump given what you've described and shown, but I'm wondering if there's more behind it in your research and paper. I always teach that bar charts must have a zero baseline to make an accurate visual comparison. I'd love to discuss this with you more if you're research is suggesting that might not be the case.

<a href="http://eagereyes.org/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	Thanks, Cole! Drew got the same question after his presentation at EuroVis. We had to pick one style of extended bars to keep the number of cases manageable, and we often see some indication of where the zero line is, and also zero lines. But the result is of course contingent on that, if there was no line or if the bars did not differ below the zero line, that might well be different.
>	
>	This also doesn't say anything about cropped axes, which are more common in business presentations. The paper by Pandey, Bertini and others I link to at the very end of the posting looked into those, and they found cropped axes to be confusing and misleading.

</aside>

