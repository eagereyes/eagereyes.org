---
title: "Visualization Choice Influences Decisions"
description: "Can different ways of showing the same data lead to different decisions? And can those decisions be about something important, like continuing a clinical trial? A study published in 1999 shows that they can, and the way the data is represented does make a difference."
date: 2011-05-17 21:28:40
tags: 
featuredImage: https://media.eagereyes.org/media/2011/elting-teaser.png
---

<p align="center"><img src="https://media.eagereyes.org/media/2011/elting-teaser.png" alt="" width="600" height="220" /></p>

# Visualization Choice Influences Decisions

Can different ways of showing the same data lead to different decisions? And can those decisions be about something important, like continuing a clinical trial? A study published in 1999 shows that they can, and the way the data is represented does make a difference.

## The Study

The study is very simple: a number of physicians at a medical research institute were shown data from a fictitious clinical trial and had to make a recommendation whether to continue or abort the trial. This is an important decision with real implications: if it becomes clear in a trial that the new treatment is ineffective, it is unethical (and damaging to the participants) to continue. The data was shown in one of four ways: a table, a bar chart, a pie chart, or an icon display. The table could either show the response rate (positive framing) or the failure rate (negative framing).

<p class="img"><img src="https://media.eagereyes.org/media/2011/elting-600.png" alt="" width="600" height="476" /></p>

The results are surprising: the icon display (lower right in the image) resulted in significantly more correct responses than either of the other graphical displays. The negatively framed table also lead to significantly more abort decisions than the positive one. Pie charts and bar charts performed very similarly. The study also looked into other reasons for differences, like the academic rank of the participant (all were Assistant Professor or higher), but found no effect.

## Criticism

Unfortunately, the study has one major flaw: it appears that the correct answer in all cases was to abort the study. Instead of testing for correct perception of the data, the study therefore measured how bad the study made the data look. A better design would have been to test both cases, to see which technique leads to more false positives vs. false negatives, etc.

That the icon display did so well is partially explained by the fact that this was about people, and physicians might be able to relate to the data more as being about people when they see each individual person represented as a discrete visual object. Whether this can be generalized is an interesting question, but I don't see why it would not. That opens up many interesting questions about how we think about data and how it should be represented. And even if it were not a general result, its impact in medicine is clearly important enough to justify some hard thinking about how medical data is visually represented.

## Conclusions

This is an intriguing study, and a good example of the types of questions we need to ask in visualization. The results clearly tell us that there is more to the choice of representation than correct perception. Questions like this need to be asked about many other application areas as well, and we need to get a better understanding of the higher-level processes that cause these differences.

<hr />

Linda S. Elting, Charles G. Martin, Scott B. Cantor, and Edward B. Rubenstein, <a href="http://www.bmj.com/content/318/7197/1527.abstract" target="_blank">Influence of data display formats on physician investigators' decisions to stop clinical trials: prospective trial with repeated measures</a>, <em>British Medical Journal</em>, vol. 318, pp. 1527-1531, 1999.


<PostedBy />


<aside class="comments">

---
## Comments

<a href="http://euphemize.net/" rel="nofollow noopener" target="_blank">Joel</a> says…
>	The Pie Chart views have mixed up the "Conventional" versus the "Investigational" treatments.

Robert Kosara says…
>	They had four different studies, I believe, and the four images actually seem to show four different datasets.

<a href="http://peltiertech.com/WordPress/" rel="nofollow noopener" target="_blank">Jon Peltier</a> says…
>	Looks to me like one dataset, and Jorge is right about the mixup: the pies have switched data w.r.t. the other displays. (Look at the n= labels in the pies, and count the icons and get OCD with the bar charts.)
>	
>	Your intro says you abort a study if the new treatment is ineffective. Here the new treatment is more effective, yet you say the correct answer is to abort. Does one also abort if the new treatment is obviously better?

<a href="http://had.co.nz" rel="nofollow noopener" target="_blank">Hadley Wickham</a> says…
>	I think this demonstrates something that's pretty well known in statistics/psychology - we are much better at reasoning with natural frequencies than we are with absolute numbers.  See (e.g.) the work by Tversky and Kahneman

Wilte says…
>	From the paper (http://www.bmj.com/content/318/7197/1527.full.pdf):
>	
>	An assumption basic to this study was that in each
>	case there was a correct decision. (...) From a clinical perspective, one of the
>	treatments was clearly superior to the other in
>	response rate (88% v 62%). The superiority of the
>	hypothetical treatment persisted across both prognos­
>	tic groups but was larger in the group with poor prog­
>	nosis (88% v 55%). (...) and the difference in response rate was
>	significant (P = 0.002), although P values were not
>	included in the displays. 
>   
>	<strong>Because of the large difference
>	in efficacy, it would be clinically appropriate in each
>	case to stop the trial for an unplanned analysis.</strong>
>	
>	
>	So also when the new treatment is obviously better, the study should be aborted (and everyone should I guess be treated with the new treatment).

<a href="http://peltiertech.com/WordPress/" rel="nofollow noopener" target="_blank">Jon Peltier</a> says…
>	I think I'm not surprised that the table was most effective in showing how much better the new treatment is. For me, the iconic approach was worst, but partly is was because for a few moments I thought the crossed off boxes meant the patients died. The boxes looked too much like coffins lined up anyway.
>	
>	I made a couple line charts showing success rate by prognosis and by treatment. I think either of these is more effective than any of the graphical approaches in this study. I think the one with Prognosis as the X axis would lead to immediate cessation of the experiment so that all patients could get the new treatment.
>	
>	http://peltiertech.com/images/2011-05/VizChoiceLineTreatment.png
>	http://peltiertech.com/images/2011-05/VizChoiceLinePrognosis.png

Robert Kosara says…
>	Those charts make sense (except for the y axis starting at 50% ;), but I'd still like to see the study that shows that they're more effective. The "coffins" may have been what lead to the strong results, which is why it would be important to test with other examples, not just ones that should be aborted.
>	
>	I'm not too excited about the icon display either, but the whole point of this posting wast to show that personal preference and actual, measured effect don't always coincide.

<a href="http://peltiertech.com/WordPress/" rel="nofollow noopener" target="_blank">Jon Peltier</a> says…
>	There's no study, I'm just expressing an opinion, based predominantly on my own first impressions of the charts in this study. Perhaps that's wrong of me, though, since I was confused by the icons at first (and I feel it's the worst display type of the four), while the study has found the icons most effective.

Jamie says…
>	Sounds like the perfect use for a dot plot to me: <a href="http://i.imgur.com/dw5DJ.png">http://i.imgur.com/dw5DJ.png</a>
>	
>	On another note: why the horrible colors?  They certainly don't help clarify the data being displayed.

</aside>

