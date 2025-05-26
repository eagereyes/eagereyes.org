---
title: "Paper: More Than Meets the Eye: A Closer Look at Encodings in Visualization"
description: "Encodings play a central role in visualization, but I believe our thinking about them is too simplistic. In a new paper, I argue that we need to distinguish between the encodings that specify how a visualization is drawn and the ones that are readable or actually read by an observer. While they largely or entirely overlap in some charts (like bar charts or scatterplots) they don't in others (pie charts, line charts, etc.). And what exactly do you even specify in more complex visualizations like treemaps?"
date: 2022-04-19 18:59:44
tags: paper
featuredImage: https://media.eagereyes.org/wp-content/uploads/2022/04/Kosara-CGA-2022b.png
outline: false
---

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2022/04/Kosara-CGA-2022b.png" width="800" height="383" /></p>

# Paper: More Than Meets the Eye: A Closer Look at Encodings in Visualization

Encodings play a central role in visualization, but I believe our thinking about them is too simplistic. In a new paper, I argue that we need to distinguish between the encodings that specify how a visualization is drawn and the ones that are readable or actually read by an observer. While they largely or entirely overlap in some charts (like bar charts or scatterplots) they don't in others (pie charts, line charts, etc.). And what exactly do you even specify in more complex visualizations like treemaps?

Encodings are deceptively simple, once you've learned what they are. After all, they're what you see when you look at a chart, right? Well, it's not so easy. I keep harping on how we don't know how pie charts are read, and I've summarized the issue in this figure from the paper.

<div class="wp-block-image"><figure class="aligncenter size-full is-resized"><img src="https://media.eagereyes.org/wp-content/uploads/2022/04/pie-chart-hmmm.png" alt="" class="wp-image-98577" width="840" height="324"/></figure></div>

My point here is that while we clearly specify pie charts by angle, that doesn't mean that we also read them like that. <a href="/blog/2016/an-illustrated-tour-of-the-pie-chart-study-results" data-type="post" data-id="9363">And</a> <a href="/blog/2019/paper-evidence-for-area-as-the-primary-visual-cue-in-pie-charts" data-type="post" data-id="12410">as</a> <a href="/papers/a-pair-of-pie-chart-papers" data-type="post" data-id="9271">I've</a> <a href="/blog/2021/new-video-the-science-of-pie-charts" data-type="post" data-id="97810">shown</a>, angle pretty clearly is not how we read pie charts. So we need to at least start to look at two different kinds of encodings: <em>specified</em> and <em>observable encodings</em>. In the pie chart, the specified encoding is the angle, and observable encodings also include arc length, area, and even chord length. Out of those, the <em>observed encoding</em> might be one of them or a combination.

In the paper (<a href="/publications/Kosara-CGA-2022">author copy here</a>, <a href="https://ieeexplore.ieee.org/document/9756627">official version in the IEEE CS Digital Library</a>), I list a few more chart types, such as bar charts (specify length, observe area, aspect ratio, etc.), line charts (specify points, observe slopes, line segment lengths, etc.), and others, with their encodings. Think about what you really specify in a treemap, for example, and what you observe. I don't think we have a good model for encodings when the transformation is complex and algorithmic (as opposed to a straightforward mapping), like in a squarified treemap.

Line charts are especially interesting to me, because they also illustrate an even more complex encoding. What is the function of a line chart? It's specified and drawn as points that are connected, but you don't read a line chart like that. Instead, you look at shape, overall slopes/trends, etc. These are <em>derived encodings</em>, and they depend not only on the chart type but also the task.

I've clearly only scratched the surface here, but I think it's an interesting topic that needs to be understood more deeply than we have so far. Perhaps my little article will inspire some more work in this area.

<hr class="wp-block-separator"/>

Robert Kosara, <a href="/publications/Kosara-CGA-2022">More Than Meets the Eye: A Closer Look at Encodings in Visualization</a>, <em>Computer Graphics and Applications (CG&amp;A)</em>, vol. 42, no. 2, pp. 110-114, 2022.


<PostedBy />


<aside class="comments">

---
## Comments

<a href="http://theresamarierhyne.com" rel="nofollow noopener" target="_blank">Theresa-Marie Rhyne</a> says…
>	Thank you for writing this article for the  IEEE CG&amp;A Visualization Viewpoints Department - the department I edit. Smiles, Theresa-Marie

daniel jiménez says…
>	Now after having read books like those by Tufte, M.Wong, Nussbaumer Knaflic or recently Schwabish (great books) I feel that teaching dataviz is much more complex, how do we make the specific and the observable coexist in the teaching of dataviz?

</aside>

