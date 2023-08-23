---
title: "Paper: Evidence for Area as the Primary Visual Cue in Pie Charts"
description: "How we read pie charts is still an open question: is it angle? Is it area? Is it arc length? In a study I'm presenting as a short paper at the IEEE VIS conference in Vancouver next week, I tried to tease the visual cues apart – using modeling and 3D pie charts."
date: 2019-10-17 07:52:12
tags: paper, pie charts
featuredImage: https://media.eagereyes.org/wp-content/uploads/2019/10/Kosara-VISShort-2019.png
outline: false
---

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2019/10/Kosara-VISShort-2019.png" width="660" height="427" /></p>

# Paper: Evidence for Area as the Primary Visual Cue in Pie Charts

How we read pie charts is still an open question: is it angle? Is it area? Is it arc length? In a study I'm presenting as a short paper at the IEEE VIS conference in Vancouver next week, I tried to tease the visual cues apart – using modeling and 3D pie charts.

The big issue with investigating the visual cues used to read pies is that they all encode the value in a linear way. That doesn't allow us to separate them without creating very specialized stimuli for the study, like <a href="/papers/a-pair-of-pie-chart-papers">Drew Skau and I did back in 2016</a>. We found that angle was unlikely to be the visual cue used to read pie charts, but couldn't decide between area and arc.

This is where 3D pies come in. Using <a href="https://en.wikipedia.org/wiki/Parallel_projection">parallel projection</a> (also called isometric or orthographic), the different visual cues get distorted in different ways, which lets me separate them from each other. The obvious one is the angle at the center: starting from a 30º slice, at a 15º view angle, there's a roughly 12-fold difference between the smallest and the largest angle as it rotates around the pie.

<figure class="wp-block-image"><img src="https://media.eagereyes.org/wp-content/uploads/2019/10/3d-pies.png" alt="" class="wp-image-12411" width="660" height="72" /></figure>

The distortion is even more severe with arc length, which differs by a factor of about 40. What is not distorted, however, is area! For a given view angle and value, the area of a slice does not change as it rotates around the pie.

<figure class="wp-block-image"><img src="https://media.eagereyes.org/wp-content/uploads/2019/10/pie-distortions.png" alt="" class="wp-image-12412" width="660" height="268" /><figcaption>Distortions to central angle and arc length as the slice rotates around, as a multiple of the base value, for different view angles.</figcaption></figure>

So for this study, I modeled the distortions and compared people's responses to my model predictions. The best-fitting model is the best explanation for how people read charts.

And the winner is… area! Angle is second, arc last. If we rule out angle from the earlier studies, that means that area is the way we read pie charts. There's certainly more research needed, but I think this study both adds a piece of evidence that area as the visual cue, and it shows an interesting approach to doing studies that's different from most perceptual studies in visualization today.

The paper with the preregistration, an appendix, study data, and code <a href="https://osf.io/7y842/">is all available online</a>.

If you're exhausted from reading all this and don't want to read four pages of paper, fear not: I have a video about this paper in the works that I will post early next week.

<hr class="wp-block-separator"/>

Robert Kosara, <a href="/publications/Kosara-VISShort-2019.html">Evidence for Area as the Primary Visual Cue in Pie Charts</a>, <em>IEEE VIS Short Paper Proceedings</em>, 2019.


_Posted by <a href="/about">Robert Kosara</a> on October 17, 2019_


<aside class="comments">

---
## Comments

Robert Monfera says…
>	So the answer is, increase area by making the 3D pie thicker!

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	No, it turns out body thickness had no effect on people's accuracy (it's discussed in the paper ;)

</aside>

