---
title: "A Reanalysis of A Study About (Square) Pie Charts from 2009"
description: "After my recent posting on the results of our pie charts studies, Jorge Camoes teased me on Twitter about square pie charts. So I dug up the data from a study we ran many years ago to look at how well they compare to bars, pies, and squares."
date: 2016-07-10 19:20:14
tags: pie charts
featuredImage: https://media.eagereyes.org/wp-content/uploads/2016/07/simplevis-abserror-relative.png
---

# A Reanalysis of A Study About (Square) Pie Charts from 2009

After <a href="/blog/2016/an-illustrated-tour-of-the-pie-chart-study-results">my recent posting on the results of our pie charts studies</a>, Jorge Camoes <a href="https://twitter.com/camoesjo/status/748126581953036288">teased me on Twitter</a> about <a href="/techniques/square-pie-charts">square pie charts</a>. So I dug up the data from a study we ran many years ago to look at how well they compare to bars, pies, and squares.

In 2009, my then-Ph.D. student Caroline Ziemkiewicz and I ran a study to test the feasibility of Mechanical Turk for perceptual studies. We ended up <a href="/papers/do-mechnical-turks-dream-of-square-pie-charts">sending a paper about it to BELIV 2010</a>, which was co-located with CHI that year. It was overshadowed by another paper at the main conference, unfortunately: Jeff Heer and Mike Bostock's <a href="http://vis.stanford.edu/papers/crowdsourcing-graphical-perception"><em>Crowdsourcing Graphical Perception: Using Mechanical Turk to Assess Visualization Design</em></a>. While there was some overlap, theirs was a more thorough, detailed, and – frankly – better, paper. As far as title cleverness was concerned, we clearly had a leg up though: <em><a href="/publications/Kosara_BELIV_2010.html">Do Mechanical Turks Dream of Square Pie Charts?</a></em>

## The Study

Here are the chart types we tested: a square pie, a stacked bar chart, a pie chart, and a donut chart. Note that the square pie did not have a grid, like <a href="/techniques/square-pie-charts">I've used in a few other places</a>. We didn't want to make this too easy. Also, the bar looks a bit thin in comparison here, but it was longer than any of the other charts were wide – I had to rescale it here to fit it in.

<p align="center"><img class="aligncenter size-full wp-image-9422" src="https://media.eagereyes.org/wp-content/uploads/2016/07/simplevis-charts.jpg" alt="simplevis-charts" width="1320" height="350" /></p>

The structure of the study was quite similar to the one Drew Skau and I used in <a href="/papers/a-pair-of-pie-chart-papers">our EuroVis papers</a>. The stimuli look quite similar too, which I had not realized until I looked at them again.

## Results

What did we find? I did the same analysis of this data as the one for the more recent studies. I'm also using the same structure and charts for confidence intervals here, so <a href="/blog/2016/an-illustrated-tour-of-the-pie-chart-study-results">read the introduction there</a> if you're not familiar with these.

First, a look at error. This is signed error, so we get a sense of the bias. It looks like all the charts have a slight bias towards underestimation.

<img class="aligncenter size-full wp-image-9427"  src="https://media.eagereyes.org/wp-content/uploads/2016/07/simplevis-error.png" alt="simplevis-error" width="1320" height="803" />

Whether that's a real effect or not can only be assessed if we do this calculation relative to one of the charts. I'm choosing the square pie here because it's the closest to zero.

<img class="aligncenter size-full wp-image-9426"  src="https://media.eagereyes.org/wp-content/uploads/2016/07/simplevis-error-relative.png" alt="simplevis-error-relative" width="1320" height="803" />

Compared to the square pie, only the donut chart seems to have a real bias here. The effect size is very small though, with a mean of about -0.5 percentage points.

More interesting is the absolute error: how precise are the different chart types?

<img class="aligncenter size-full wp-image-9424"  src="https://media.eagereyes.org/wp-content/uploads/2016/07/simplevis-abserror.png" alt="simplevis-abserror" width="1320" height="803" />

This will come as a surprise to many people: the bar is doing the worst! How is that possible? It's not really all that surprising if you look at the literature on stacked bars: they suck. I'll have <a href="/techniques/stacked-bars-are-the-worst">a separate posting about this</a> soon, since it doesn't seem to be widely known. People are too busy slamming pie charts.

Anyway, regarding the pie and donut: they look identical! I remember that that confused us back then, since I was convinced we'd find a difference there. Now I know why, but it didn't dawn on me back then what we had found.

And, not to forget: the square pie chart is doing the best! Let's see just how well it's doing in a direct comparison.

<img class="aligncenter size-full wp-image-9423"  src="https://media.eagereyes.org/wp-content/uploads/2016/07/simplevis-abserror-relative.png" alt="simplevis-abserror-relative" width="1320" height="803" />

The square pie does significantly better in terms of precision here than any of the other charts. That includes the pie and donut charts, and definitely the bar chart.

Interestingly, the error values we saw in the more recent study were about twice as large on average. I have no explanation for that. The pattern is perfectly consistent with the earlier study, though.

## Confidence

One thing we were curious about in this study was whether people would feel more confident in their guesses depending on the chart type.

<img class="aligncenter size-full wp-image-9425"  src="https://media.eagereyes.org/wp-content/uploads/2016/07/simplevis-confidence.png" alt="simplevis-confidence" width="1320" height="803" />

Here, too, we found that the square pie did best and the bar chart the worst. In the paper, we reported a significant effect here, and also that people's confidence ratings were pretty well in tune with their actual performance.

## Conclusions

The numbers differ, but this study from 2009 shows some of the same effects as our recent pie charts studies. Pies and donuts are no different, though both are worse than the square pie chart.

<hr />

I have added the dataset for the study as well as the RMarkdown code used to create these images to the <a href="https://github.com/eagereyes/pie-summaries/">github repository I created for the pie chart study comparison</a>.


_Posted by <a href="/about">Robert Kosara</a> on July 10, 2016_


<aside class="comments">

---
## Comments

<a href="http://www.mjskay.com/" rel="nofollow noopener" target="_blank">Matthew Kay</a> says…
>	Is absolute error correctly described as "precision"? I normally see precision used to describe the inverse of variance---how close are people's estimates, accounting for bias. I don't think that's the same thing as the absolute error, which will include the effect of bias and variance together. 
>	
>	Wikipedia's article on the topic seems to agree with me: https://en.wikipedia.org/wiki/Accuracy_and_precision
>	
>	Unless I've missed something here?

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	Interesting point. I chose precision there as a way to give people an idea what the absolute error meant. I guess the correct way of doing this would be to account for the per-person, per-chart-type bias and do the absolute difference from that. I'll have to look into this a bit.

<a href="http://www.mjskay.com/" rel="nofollow noopener" target="_blank">Matthew Kay</a> says…
>	Yes! That is essentially the approach we took to estimating precision in this paper: https://idl.cs.washington.edu/papers/when-ish-is-my-bus/

<a href="http://twitter.com/alexcookson" rel="nofollow noopener" target="_blank">Alex Cookson (@alexcookson)</a> says…
>	My mind is blown! I'm still a neophyte, and square pie charts hadn't even occurred to me. I'll have to keep them in mind.
>	
>	As for the write-up on stacked bar charts being no good, I'm looking forward to that post.

<a href="http://thoughtfulbloke.wordpress.com" rel="nofollow noopener" target="_blank">thoughtfulbloke</a> says…
>	I did some quick R code for making square pie graphs (can we call them cake graphs?) with base R plotting here:
>	
>	https://thoughtfulbloke.wordpress.com/2016/07/18/a-quickly-made-cake-graph/

<a href="http://headaround.com" rel="nofollow noopener" target="_blank">Paulo Estriga</a> says…
>	Why do a square pie with irregular slices like that? Why not an even horizontal split, making it easier to quantify and making it essentially the same as a 'square bar', so a bar with a very clear large surface to analyse? I don't see the point of this square pie...? (although I do kind of see the point if there's a clear 10x10 grid as in the linked article)

Erik says…
>	then you have only one dimension of estimate, now you have two or even three, as you count the imaginary grid lines.

Chemystry says…
>	Interesting read. Did you try comparing horizontal and vertical stacked bars?

<a href="https://gooddataproject.com/" rel="nofollow noopener" target="_blank">Nate Elliott</a> says…
>	Just found this analysis and I love it. I referenced your post and added some other thoughts here: https://gooddataproject.com/blog/2021/10/the-beauty-of-square-pie-charts

</aside>

