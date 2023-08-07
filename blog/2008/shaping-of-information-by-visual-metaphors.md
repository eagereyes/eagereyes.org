---
title: "The Shaping of Information by Visual Metaphors"
description: "In January, my Ph.D. student Caroline Ziemkiewicz told me about an interesting observation she had made: in different papers comparing tree visualizations, treemaps came out as best, worst, or somewhere in the middle. One difference she noticed was how the questions were worded: when a levels metaphor was used, treemaps did badly; a containment metaphor, on the other hand, seemed to favor treemaps. So we decided to investigate &ndash;&nbsp;the result will be presented at InfoVis on Monday, October 20."
date: 2008-10-15 07:08:26
tags: papers
featuredImage: https://media.eagereyes.org/media/2008/Ziemkiewicz_InfoVis_2008.jpg
outline: false
---

<p align="center"><img alt="Paper" src="https://media.eagereyes.org/media/2008/Ziemkiewicz_InfoVis_2008.jpg" width="464" height="300" border="0" /></p>

# The Shaping of Information by Visual Metaphors

In January, my Ph.D. student <a href="http://www.cs.brown.edu/people/cziemki/">Caroline Ziemkiewicz</a> told me about an interesting observation she had made: in different papers comparing tree visualizations, <a href="/Techniques/Treemaps.html">treemaps</a> came out as best, worst, or somewhere in the middle. One difference she noticed was how the questions were worded: when a levels metaphor was used, treemaps did badly; a containment metaphor, on the other hand, seemed to favor treemaps. So we decided to investigate – the result will be presented at <a href="http://vis.computer.org/VisWeek2008/infovis/sessions_papers.html#design">InfoVis</a> on Monday, October 20.

Containment questions use a metaphor of nesting, e.g., <em>Find the directory that </em><em>contains </em><em>the most .png type files</em>. Levels questions, on the other hand, use the more common node-link idea of a tree, e.g., <em>Participants counted the number of </em><em>levels </em><em>in the tree</em>.

<p align="center"><img alt="Levels vs. Containers" src="http://eagereyes.org/media/2008/levelsvscontainers.png" width="395" height="236" border="0" /></p>

The "smoking gun" is Table 1 in the paper, which shows a clear correlation between the number of containment questions and the ranking of treemaps. While the sample is small (five papers), the evidence is damning.

This is only the first step in this direction, but it gives pause to the idea that visualization is merely a conduit for information. The design and underlying metaphor of a technique actively shapes the way users understand the visualization, and its compatibility or incompatibility with the user's mental model determines how effective it is. The beauty of this work is that it is actual science: it is based on an initial observation, we set up an experiment to test our initial hypothesis, and we are drawing conclusions from its results.

Caroline is doing a lot of promising work in this direction, which will deepen our understanding of how visualization actually works (on the level of cognition, not just perception), and lead us to better visualization techniques and more effective evaluation.

For more details, you will have to see the talk at InfoVis (on Monday, October 20, in the <a href="http://vis.computer.org/VisWeek2008/infovis/sessions_papers.html#design">Design session</a>), and/or read the paper: <a href="/publications/Ziemkiewicz-InfoVis-2008">The Shaping of Information by Visual Metaphors</a>


_Posted by <a href="/about">Robert Kosara</a> on October 15, 2008_


<aside class="comments">

---
## Comments

<a href="http://diuf.unifr.ch/people/bertinie/visuale/" rel="nofollow noopener" target="_blank">Enrico Bertini</a> says…
>	Well done Robert (and Caroline)! These are the kinds of studies we most need in infovis IMHO. After a long tradition of new technique papers finally we have year after year some papers that really inject new insights on how visualization works.
>	
>	I see a connection between this work and what I read just yesterday in the introduction of Colin Ware's "Visual Thinking" (by the way great great book!) about "active vision". What we see is not the just result of objective perception but rather the result of our active vision that select what to attend to and how to interpret the world as seen from our eyes. Mental models play a big role here in fact! If the model changes the same visualization is interpreted differently. Did I get it right? :-)
>	
>	By the way, from your description I am not totally clear about what you demonstrate in your paper (sorry I haven't read it yet). Do you mean that containment vs. level questions differ in performance because of the mental model? Do you mean that it is more a matter of cognition than perception? If this is the case I am not sure I get the point. Containement questions to me translate very easily into perceptual tasks (a visual object contained by another) whereas level questions translate into something that cannot easily be perceived on the screen (it is an indirect mapping between level and visual object containment). Isn't it yet a matter of perception rather than cognition?
>	
>	On a side note: I might be completely wrong since I didn't read your paper yet. But I was curious to have a response soon.
>	
>	By the way again, very well done! Thanks Robert for pushing the domain a bit forward.

Robert Kosara says…
>	<p>Thanks for the kind words, much appreciated! This was really meant as a teaser for people to read the paper, not to explain everything. ;)</p>
>	<p>But the idea was to see how the metaphor used in the question vs. the metaphor in the visualization influences task performance. I.e., if I ask you a question using a levels metaphor but show you a treemap, will you do worse than if I had asked you a question using the containment metaphor? We found that there is an effect, which is not statistically significant overall, but there are a number of interesting effects (like metaphor preference and correctness of responses) that are.</p>
>	<p>We also found a few other things, like people who prefer incompatible metaphors, and there are clearly more factors we need to look into (like the existing mental model of the user).</p>

<a href="http://well-formed-data.net" rel="nofollow noopener" target="_blank">Moritz Stefaner</a> says…
>	Very interesting work, I especially like the careful observations that lead to the empirical study, almost a detective study :) 

<a href="http://www.thinky.org" rel="nofollow noopener" target="_blank">Zach Pousman</a> says…
>	Robert (and Caroline, but I don't know if she blogs!), I really appreciated this paper. I have long thought about information visualization as something other than a "conduit for information" ... I have been characterizing infovis as a "conversation" in my research work. And now I can point to your paper as evidence that the framing of visualizations is crucial to their power to explain. Thanks!

Alexey Tsymbal says…
>	First, congrats with the award! Well done!
>	
>	I have a seemingly tricky question to you though. To me it seems that _all_ the currently existing implementations of treemaps are somewhat limited and do not take the full benefit of the (yet hidden) treemap's power. No doubt, all the implementations are totally different, with their pro and contra. Besides, there are different layouts. For example, don't you think that if the cascaded treemap layout was chosen, the conclusions drawn could be different??
>	(see a related paper here: http://www.cs.washington.edu/homes/hlv/p/gi2008-paper.pdf, it is also mentioned on the Shneiderman's website: "	 This  paper  from Lu and Fogarty proposes Cascaded Treemap to improve visibility. The mild 3-D effect is attractive and seems helpful. ")
>	Thanks!

</aside>

