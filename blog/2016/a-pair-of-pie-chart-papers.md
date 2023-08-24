---
title: "A Pair of Pie Chart Papers"
description: "How do we read pie charts? Do they differ from the even more reviled donut charts? What about common pie chart designs like exploded pies? In two papers to be presented at EuroVis next week, Drew Skau and I show that the common wisdom about how we read these charts (by angle) is almost certainly wrong, and that things are much more complicated than we thought."
date: 2016-05-30 07:17:00
tags: paper, eurovis, pie charts, papers
featuredImage: https://media.eagereyes.org/wp-content/uploads/2016/05/pie-package-teaser.png
---

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2016/05/pie-package-teaser.png" alt="" width="825" height="510" /></p>


# A Pair of Pie Chart Papers

How do we read pie charts? Do they differ from the even more reviled donut charts? What about common pie chart designs like exploded pies? In two papers to be presented at <a href="http://eurovis.org/">EuroVis</a> next week, Drew Skau and I show that the common wisdom about how we read these charts (by angle) is almost certainly wrong, and that things are much more complicated than we thought.

Pie charts are generally looked down on in visualization, and many people pride themselves on saying mean things about them and the people who use them. <a href="/blog/2016/ye-olde-pie-chart-debate">This is not a new phenomenon, either</a>. Yet they are incredibly common in business settings and information graphics.

The main reason for these papers was the question: do we even know how we read these charts? Is it actually angle, as is usually claimed, or is it really arc length or maybe area? It turns out that there is no actual research to back up the claims that it's angle. The only paper we could find, and which gets cited over and over again, is from 1926. That's <em>ninety years</em> ago. And the author just asked people what they thought they used, which is quite unreliable.

So we set out to do some science around this. The full paper reports on two studies to assess the mechanism for pie and donut charts. and look at the effect inner diameter has on donuts. For the short paper, we then took some of the things we had found and tested common pie chart variations. Yes, this is the <a href="/blog/2016/the-two-paper-package">full-plus-short paper package</a> I mentioned a while ago.

## Arcs, Angles, or Areas: Individual Data Encodings in Pie and Donut Charts

<p align="center"><img class="aligncenter size-full wp-image-9312" src="https://media.eagereyes.org/wp-content/uploads/2016/05/Skau-EuroVis-2016-pages-2.png" alt="Skau-EuroVis-2016-pages" width="660" height="374" /></p>

The full paper reports on two studies. One presented participants with deconstructed charts that were designed to test encodings independently from each other. Measuring their accuracy when using any of these variations, we could assess which of them was actually being used, no matter what people claimed.

<p align="center"><img class="aligncenter size-full wp-image-9306" src="https://media.eagereyes.org/wp-content/uploads/2016/05/pie-individual-encodings.png" alt="pie-individual-encodings" width="660" height="127" /></p>

From left to right, they are: pie, donut, arc-only, angle-only based on pie, angle-only based on donut, and area-only.

The results are quite interesting: the complete pie and donut charts do the best, while the angle-only conditions are the worst. People were surprisingly good with the area-only condition (far right), which was completely unexpected. Arc-only is virtually identical with area-only.

What does this mean? Angle is not likely the main, and certainly not the only, way we read pie charts. This is not only based on the arc-only results, but also the fact that pie and donut charts did not differ in a significant way – donut charts lack the center, so they should make judging angle harder.

We also wanted to see if there was an effect from the inner diameter in donut charts. So we tested a set of donuts with varying hole sizes (with the "no-hole" pie chart serving as a baseline).

<p align="center"><img class="aligncenter size-full wp-image-9307" src="https://media.eagereyes.org/wp-content/uploads/2016/05/donuts.png" alt="donuts" width="660" height="110" /></p>

There is no difference between them, other than the thinnest donut being worse than the rest (we're not sure exactly why). Donut charts no worse than pie charts! Who knew!?

The paper has a lot more information about the studies and detailed analyses of the results: Drew Skau, Robert Kosara, <a href="/publications/Skau-EuroVis-2016"><em>Arcs, Angles, or Areas: Individual Data Encodings in Pie and Donut Charts</em></a>, EuroVis 2016.

Code and data are also available, for both <a href="https://github.com/dwskau/arcs-angles-area">the arcs-angles-areas study</a> and for <a href="https://github.com/dwskau/donut-radii">the donut radii study</a>

## Judgment Error in Pie Chart Variations

<p align="center"><img class="aligncenter size-full wp-image-9272" src="https://media.eagereyes.org/wp-content/uploads/2016/05/Kosara-EuroVis-2016-pages.png" alt="Kosara-EuroVis-2016-pages" width="660" height="187" /></p>

Based on the full paper, we had some predictions for what should happen for specific pie chart variations that we often see in business presentations and information graphics. We ran a further study to test some of those.

<p align="center"><img class="aligncenter size-full wp-image-9308" src="https://media.eagereyes.org/wp-content/uploads/2016/05/pie-variations.png" alt="pie-variations" width="550" height="143" /></p>

Left to right, there's a basic pie chart, a pie chart with a larger slice (often used for emphasis), an exploded pie chart, and two pies with unusual shapes. We designed those to mimic the sort of icon-based pie charts that are fairly common in infographics, where segments are drawn on top of some shape (usually much more complex than the ellipse and square).

The results are quite surprising, certainly if you still think that central angle is how we read pie charts. The larger slice and exploded pie chart don't distort the angle, so we should be able to read them just as accurately as the base pie chart.

And yet, they both led to more error. The larger slice in particular led to a clear and systematic overestimation of the value. The distorted charts, unsurprisingly, did even worse.

If you're after precision, don't distort your pie charts. Certainly don't change their shapes, but also don't explode them or make a slice larger.

Again, the paper has quite a bit more detail and depth: Robert Kosara, Drew Skau,<a href="/publications/Kosara-EuroVis-2016"><em> Judgment Error in Pie Chart Variations</em></a>, EuroVis Short Papers 2016. Code and data are also <a href="https://github.com/dwskau/pie-variations">available on github</a>.

## So Pie Charts Are Cool?

I don't care if you like or dislike pie charts. I really don't. But visualization wants to be a science, so our supposed rules need to be based on evidence – not hearsay, opinion, or aesthetic judgments.

If we can't trust the common wisdom on pie charts, what can we trust? What other assumptions are unfounded? There are many other areas in visualization where we think we know what's going on, but it hasn't been systematically studied at all. That's still lots of opportunity for truly fundamental research.


<PostedBy />


<aside class="comments">

---
## Comments

Kk says…
>	Totally agree with you on using pies and donuts and don't care what people say mean things about them. Every chart is created for a reason as long as you don't overuse it to misrepresent the data or confuse users. I have a sweet-tooth what can I say ?. Love your analysis

Clément V. says…
>	Nice article. I like your approach of "don't bash, try to understand to make a better use" (here and for 3D charts I think).
>	
>	I haven't read the paper but few things come to mind.
>	First, is it interesting to disentangle the different ways of getting the information from a chart ? As you wrote : " Angle is not likely the main, and certainly not the only, way we read pie charts". So, my intuition is that the pie charts are easily readable (and common in info-graphics) because they allow to access information in different ways. As often with human, interpretation comes from the accumulation of clues, i.e. in pie charts : angle, area and arc length. Both donuts and pies give all these clues to get a good interpretation of the information (proportion).
>	As a direct consequence of this thought on thin donuts: "There is no difference between them, other than the thinnest donut being worse than the rest (we’re not sure exactly why)." The thinnest donut doesn't provide any clue on the angle nor on the area (unlike the other forms). By using thin donuts, you just remove "clue dimensions" and increase chances that the reader makes mistakes.
>	The same interpretation can be done from distorted pie charts, if the angle is conserved, other dimensions may not be consistent with the angle information, leading to error. This wouldn't have been the case if only the angle was used to get the information.
>	
>	Maybe this is in the full paper, but I find it interesting to discuss it here. Please tell me what's your opinion on these elements.

<a href="http://theresamariehyne.com" rel="nofollow noopener" target="_blank">Theresa-Marie Rhyne</a> says…
>	What about the Polar Area Diagram - Florence Nightingale's work?

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	Honestly, I doubt that it's very effective. It was an interesting early idea, but reading it seems quite tedious, especially when the values change a lot between months. Also, it doesn't represent a part-whole relationship, so it's a different class of diagram. 

Matt says…
>	Superb stuff!!
>	
>	Did you also look at multi-segment pies? This is always cited as a particularly bad use for them.

Esben says…
>	Very interesting stuff decomposing how we actually decode chart types!! 
>	
>	But exactly this point also came to my mind. Pie charts are by far the easiest to read using two segments. I would be very interested if these tests were reproduced including examples with 3 or more segments. I would expect that reader accuracy would drop, but it should be tested.

Xavier says…
>	Exactly my thoughts. 
>	
>	2 Slice pie charts are the least reviled of all. Much bigger problem with 3, 4 slices, when bar charts become far superior option to any pie/donut chart. 
>	
>	By failing to compare pie charts to other visualization methods makes the results ring hollow, as the CHOICE of visualization is the entire point of the pie-chart/other charts polemic. One can nearly always  turn to a different form of visualization which will outperform pie-charts on readability, comprehension, accuracy, etc...
>	
>	'Which type of donut chart should I use?' is just not something a self-respecting data visualization designer should ever ask themselves IMHO...

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	No, we did not. This was primarily to figure out the mechanism we use to read them. It would also have made the study much more complex. Plus, I think our findings will translate to multi-segment. 

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	Why not? The point here is to go beyond the old prejudices and base decisions on data. We can't do everything in a few studies. This was focused on trying to figure out how we read them, since we don't even know that. The comparison between pies and donuts is merely coincidental.

johnmuccigrosso says…
>	Very interesting stuff. I always liked pie charts for a small number of variables (2-4). I wonder if there's a connection with (analog) clock use. We're very good at reading clock faces, so much so that some clocks (wristwatches, typically) don't even have numbers on them.
>	
>	Is there a DOI or other ref number for the article?

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	Good question! I've added page numbers and DOIs to the pages for <a href="http://kosara.net/publications/Skau-EuroVis-2016.html" rel="nofollow">the full paper</a> and <a href="http://kosara.net/publications/Kosara-EuroVis-2016.html" rel="nofollow">short paper</a>.

johnmuccigrosso says…
>	No joy with that DOI.

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	What are you looking for? The PDFs are available from the pages I linked to. The papers may not be in the EG digital library yet. But those are the DOIs that are listed in the proceedings.

johnmuccigrosso says…
>	No, I got the PDF. I was just noting that the DOI wasn't resolving. I was hoping to use Zotero's "magic wand" to load the bib data via the DOI.

jonpeltier says…
>	I guess I’m one of those unabashed pie chart bashers. Yet I read these studies with strong interest, because they have been carried out and analyzed systematically and logically. I’ve always felt that a two-segment pie (what Jorge Camoes calls a one-segment pie) is somewhat effective if used appropriately. It’s good to see a good analysis that shows how to maintain their effectiveness.
>	
>	It’s also good to know that what we pie-bashers always thought has some analytic backing:
>	
>	“If you’re after precision, don’t distort your pie charts. Certainly don’t change their shapes, but also don’t explode them or make a slice larger.”

Colin Higgs says…
>	OK, I'm extremely late to the party and not at all an expert, but when I read these things:
>	
>	"People were surprisingly good with the area-only condition (far right), which was completely unexpected. Arc-only is virtually identical with area-only."
>	
>	and (on pie charts vs. doughnut charts)
>	
>	"There is no difference between them, other than the thinnest donut being worse than the rest (we’re not sure exactly why)."
>	
>	The first hypothesis that sprang to mind is that people use *both* arc length and area if both are available to improve their estimate compared with only having one. At some critical point the doughnut becomes too slim for accurate area estimation and we're left with only arc length.
>	
>	I'd be interested to know if this hypothesis has been tested. Meanwhile, I guess the practical advice remains the same: don't make your doughnuts too thin.

</aside>

