---
title: "An Illustrated Tour of the Pie Chart Study Results"
description: "In two papers, Drew Skau and I recently showed that our idea of how we read pie charts is wrong, that donut charts are no worse than pie charts, and a few more things. Here is a detailed walk-through of the results of the three studies we conducted for this purpose. Let's go on a little journey through some real data and do a little science together!"
date: 2016-06-27 19:37:26
tags: study, pie charts
featuredImage: https://media.eagereyes.org/wp-content/uploads/2016/06/variations-error-relative.png
---

# An Illustrated Tour of the Pie Chart Study Results

In <a href="/papers/a-pair-of-pie-chart-papers">two papers</a>, <a href="https://twitter.com/seeingstructure">Drew Skau</a> and I recently showed that our idea of how we read pie charts is wrong, that donut charts are no worse than pie charts, and a few more things. Here is a detailed walk-through of the results of the three studies we conducted for this purpose. Let's go on a little journey through some real data and do a little science together!

For my talk at <a href="http://informationplusconference.com">Information+</a>, I redid the figures we had used in the <a href="/papers/a-pair-of-pie-chart-papers">EuroVis pie chart papers</a>, both for the papers themselves and for the presentations. The result is much clearer, I think. I figured I'd share them here since they give a nice walk-through of the study results using the real data, but without too much detail. While the violin plots provide useful information during analysis, they're just too detailed for presentation – I feel like <a href="/papers/presentation-oriented-visualization-techniques">I should have seen that coming</a>.

## How the Charts Work

What I'm about to show are the results of three studies, each of which had about 80–100 participants who each answered about 60 questions (for details see <a href="/papers/a-pair-of-pie-chart-papers">the papers</a>).

The charts are all based on the difference between what people thought they were seeing and what we were showing them – called error. If we showed them a value of, say, 27% and they answered 29%, that means they were 2% off. The 2% would be the same if they had said 25%, at least in absolute terms. I'm also going to use signed error below, which would be +2% if they answered 29% in my example, and -2% if they answered 25%. In the papers, we used the logarithm of the error, which made things more complicated (but followed what others had done before).

I'm showing all the results using <a href="https://en.wikipedia.org/wiki/Confidence_interval">confidence intervals</a>, or CIs. They have the advantage that they give us an idea of the data without being too overwhelming (I hope!). I use 95% CIs here, which means that we're 95% confident that the real value of what we're measuring lies inside those intervals.

<img class="aligncenter size-full wp-image-9381" src="https://media.eagereyes.org/wp-content/uploads/2016/06/ci-explain.png" alt="ci-explain" width="1320" height="500" />

For every measure, I will show two images: the raw error and absolute error, which will give us a sense the differences, and then the difference in error between each particular case and the baseline (which is always the pie chart). The latter allows us to make judgments about which of them are really different. This all might sound confusing, but it'll become clearer below.

## Study 1: Arcs, Angles, or Area

To figure out how people read pie charts, we decided to deconstruct them so that we could test their visual properties separately. A pie slice has three visual cues that all change linearly with the percentage it represents: its central angle, its area, and its arc length (the length of the circle arc on the outside).

The designs we came up with are shown below. In the top left, there's the pie chart itself, which acts as a baseline, and next to it, the donut chart. In the second row, we have a very thin donut, which can only be read using arc length, and a chart that is round but uses only area to show the value. Finally, in the right-most column are the two arc-only charts: one that connects in the center and is based on the pie, and one that doesn't and is based on the donut.

<img class="aligncenter size-full wp-image-9379" src="https://media.eagereyes.org/wp-content/uploads/2016/06/pie-deconstructed.png" alt="pie-deconstructed" width="1320" height="830" />

We had people go through a number of these – with different percentages being shown and rotated randomly –, and gauge the percentage they were showing. When we had the results, we looked at how well people had done in their guesses relative to what they were actually seeing. Here are the results.

<img class="aligncenter size-full wp-image-9367" src="https://media.eagereyes.org/wp-content/uploads/2016/06/aaa-error.png" alt="aaa-error" width="1320" height="803" />

Each of these bars shows us the signed error. That means we can get a sense of the deviation from the real value (the lengths of the bars), but especially the bias: were people systematically over- or underestimating?

However, to do this properly, we need to look at the difference of each of the cases from the pie chart. That accounts for people who always over- or underestimate. It also lets us compare the intervals for the cases other than the pie chart to a single value (that is important for statistical reasons).

<img class="aligncenter size-full wp-image-9366" src="https://media.eagereyes.org/wp-content/uploads/2016/06/aaa-error-relative.png" alt="aaa-error-relative" width="1320" height="803" />

All of the intervals intersect the zero line, so we can't say that any of them lead to over-or underestimates. There is some variation, of course, but that is to be expected from a study like that. None of this clearly says that there is a difference, though.

More interesting than signed error (where we take the average of all the errors, both above and below) is absolute error, where we count all deviations in the same direction. That means errors don't even out, so we can see how far off people are, no matter if above or below the correct value.

<img class="aligncenter size-full wp-image-9365" src="https://media.eagereyes.org/wp-content/uploads/2016/06/aaa-abs-error.png" alt="aaa-abs-error" width="1320" height="803" />

Now that is much more dramatic! The two final cases where people could only go by angle seem to be doing much worse. Let's look at these relative to the pie chart.

<img class="aligncenter size-full wp-image-9364" src="https://media.eagereyes.org/wp-content/uploads/2016/06/aaa-abs-error-relative.png" alt="aaa-abs-error-relative" width="1320" height="803" />

The last two intervals clearly do not intersect the zero line. We're clearly seeing much higher error here, not just statistical deviation. Arc length and area are no different from the pie chart, and neither is the donut chart!

Several things are surprising here. First, the donut chart is doing better than most people would have expected. I'm also still surprised how well the area-only one is doing, I had figured that would be much more difficult. And then of course the real stars here, the angle-only charts. They're not just doing a little worse, but much worse than the others.

## Study 2: Donut Radii

Given the lack of difference between the pie and donut charts, we wondered: does it matter what size the hole in the center of the donut is? Perhaps a very thin donut is harder to read than a thicker one? After all, if we read pie and donut charts by angle, the larger the hole, the less chance you have to see that properly.

So we tested six different donut hole diameters. The baseline is a pie chart, or a donut with a 0% hole in the center. The actual donuts have holes with a radius of 20%, 40%, 60%, 80%, or 97% of the donut radius.

<img class="aligncenter size-full wp-image-9307" src="https://media.eagereyes.org/wp-content/uploads/2016/05/donuts.png" alt="donuts" width="1320" height="219" />

Just like in the first study, we asked people to guesstimate the percentage they were seeing.

<img class="aligncenter size-full wp-image-9371" src="https://media.eagereyes.org/wp-content/uploads/2016/06/donuts-error.png" alt="donuts-error" width="1260" height="766" />

Looking at signed error first, there appears to be some bias in the middle two donut hole diameters. So let's look at the error relative to the pie to see if these are in fact statistically significant.

<img class="aligncenter size-full wp-image-9370" src="https://media.eagereyes.org/wp-content/uploads/2016/06/donuts-error-relative.png" alt="donuts-error-relative" width="1260" height="766" />

And it turns out they're not: all the CIs cross the zero line. The second-to-last one looks a bit different, but this might just be a coincidence. It certainly doesn't mean that there's a bias in that particular donut configuration.

<img class="aligncenter size-full wp-image-9369" src="https://media.eagereyes.org/wp-content/uploads/2016/06/donuts-abs-error.png" alt="donuts-abs-error" width="1260" height="766" />

Looking at absolute error next, we see some variation, with the second-to-last again looking different. Anything different from the baseline? Looking at the difference from the pie chart again…

<img class="aligncenter size-full wp-image-9368" src="https://media.eagereyes.org/wp-content/uploads/2016/06/donuts-abs-error-relative.png" alt="donuts-abs-error-relative" width="1260" height="766" />

Interestingly, the thinnest donut shows up here as being just about a meaningful difference. The confidence interval is so close to including the zero though that it's hard to say. This does show up as a significant difference in the ANOVA we ran for the paper, but looking at it here it's a lot more doubtful. It's possible that a few more study participants would have pushed the mean down or widened the CI to include zero.

To be safe, you should probably stay away from very thin donuts. But none of the others differ from the pie chart, corroborating what we saw in the first study. This also again suggests that central angle is not important, since the absolute error would otherwise be much higher for the donuts.

## Study 3: Pie Chart Variations

People do all sorts of things to pie charts. Are those okay, or are they problematic? To test that, we designed a few pie chart variations that mimicked those.

<img class="aligncenter size-full wp-image-9308" src="https://media.eagereyes.org/wp-content/uploads/2016/05/pie-variations.png" alt="pie-variations" width="2200" height="570" />

These also give us a chance to make and test some predictions. For example, we no expect the second chart to be overestimated, because the larger slice increases area and arc length of the blue segment relative to the rest of the chart, while not changing the angle. We also of course expected the irregularly-shaped charts at the end to do worse due to their distortions.

Looking at error again first, things are looking interesting.

<img class="aligncenter size-full wp-image-9375" src="https://media.eagereyes.org/wp-content/uploads/2016/06/variations-error.png" alt="variations-error" width="1320" height="803" />

Look at that larger-slice chart! This is the first chart we're seeing here that has a very visible bias. Let's do the math to see what this looks like compared to the regular pie chart.

<img class="aligncenter size-full wp-image-9376" src="https://media.eagereyes.org/wp-content/uploads/2016/06/variations-error-relative.png" alt="variations-error-relative" width="1320" height="803" />

If the decomposed pie charts in the first study didn't convince you, this definitely should: the larger slice gets overestimated systematically. This is exactly what you'd expect if pie charts were read by arc length or area (since those are larger in comparison due to the larger radius), but not if you're in the angle camp. This is the smoking gun, right there!

It's also interesting to note that the square pie chart has a slight but significant-looking negative bias. This one is harder to interpret though because real irregular pie charts aren't usually exact squares, and the ellipse doesn't show the same bias (also, area and arc for these charts behave in very strange ways).

The latter two should be interesting when looking at the absolute error, though.

<img class="aligncenter size-full wp-image-9373" src="https://media.eagereyes.org/wp-content/uploads/2016/06/variations-abs-error.png" alt="variations-abs-error" width="1320" height="803" />

It appears that the exploded pie chart and the two irregular ones have higher error. Again, switching to absolute error relative to the pie chart…

<img class="aligncenter size-full wp-image-9372" src="https://media.eagereyes.org/wp-content/uploads/2016/06/variations-abs-error-relative.png" alt="variations-abs-error-relative" width="1320" height="803" />

Well, look at that! The irregular pie charts have significantly higher error than the basic pie. That is expected, but why? If angle is how we read them, how would the shape cause that error? We haven't messed with that. Clearly, area and/or arc length must be what we read.

It's also interesting to note that the exploded pie chart has higher error. We haven't changed anything about the slice: not the angle, not the area, not the arc. It's possible that there are some strange effects here because of the way the gap interacts with the rest of the chart. More research is needed here, but just looking at this, I'd say: avoid exploded pie charts.

## Conclusions

These three studies clearly show that we do not read pie charts by angle. Whether it's arc length or area is not clear from this work, but my money is on either arc length alone or arc length and area in some sort of combination.

To be clear, these studies say nothing about the suitability of pie charts. We used judgment error to gauge how well people can read different variations of pie charts as a way to find out what visual cue they were using.

What we did find, however, is that the donut chart is no worse than the pie chart. That is new, and it's a direct consequence of the fact that we're not reading pie or donut charts by angle. Donut charts are popular and are useable wherever a pie chart can be used.

What is more, we questioned and debunked the prevailing idea about how pie charts work that people have believed for 90 years – <a href="/blog/2015/ye-olde-pie-chart-debate">a paper by Walter Crosby Eells in 1926</a> appears to have been the basis for many assumptions about these charts. Nobody seems to have bothered to question them since. It's time somebody did.

<hr />

I have created <a href="https://github.com/eagereyes/pie-summaries">a github repo with the code and data</a> to recreate these images, as well as versions of them in three different formats: PDF, PNG, and SVG.


<PostedBy />


<aside class="comments">

---
## Comments

<a href="http://twitter.com/willemsleegers" rel="nofollow noopener" target="_blank">Willem Sleegers (@willemsleegers)</a> says…
>	Haven't finished reading this likely great post yet, but would like to comment that your interpretation of confidence intervals is not correct. See https://learnbayes.org/papers/confidenceIntervalsFallacy/

Pierre Dragicevic says…
>	Many methodologists consider it's a good enough interpretation for all practical purposes. Morey et al's paper is fantastic, but a bit pedantic in my opinion. A Bayesian interpretation of CIs is formally wrong but, I think, less likely to lead to misleading conclusions than the use of NHST or the dichotomization of CIs into significant and non-significant.

jonpeltier says…
>	This is a clear discussion of a well thought out and executed study. I am rethinking my deep-rooted bias against pie charts (at least simple pie charts). I'd like to see follow-up studies showing pies with three, four, and more segments, and how having more segments may affect readability.

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	I knew somebody would take issue with this ;) The explanation had to be short and to the point, I'm sure I'm losing readers even as it is because it's a bit unusual and scary. I don't think it's very far from the truth, though.
>	
>	I know there are issues with confidence intervals, they're not a panacea. But they're definitely more informative and more useful than the prevalent p-values and NHST.
>	
>	Either way, I'm definitely going to read the paper. I've seen it mentioned before but haven't actually read it yet.

<a href="http://robertgrantstats.wordpress.com" rel="nofollow noopener" target="_blank">Robert</a> says…
>	I disagree. RK says he is 95% confident that... which is not inconsistent with either frequentism or Bayes. The thing you have been trained to spot is people making statements with probability about immutable facts. The term confidence interval is generally (but not universally) claimed by the frequentists, so it's safe to assume that's how they are derived in this instance. Of course, he is welcome to be as confident as he likes, because that has nothing to do with frequentist probability.

<a href="http://www.storytellingwithdata.com" rel="nofollow noopener" target="_blank">Cole Nussbaumer Knaflic</a> says…
>	Robert, this is an AWESOME summary of your findings - so clearly illustrated and written. Thanks to you and Drew for undertaking this great work and bringing better understanding to our field. What you've found makes the case that simple (non-embellished) pie charts are indeed good for estimating when there are only two values. I echo Jon's comment - I'm curious whether/how this holds for cases where there are more segments. A frequent question I get is, "but IF I use a pie chart, how many segments are too many?" I think there's some common sense one can use, but if you're looking for ideas for follow up studies, please add this to the list!
>	
>	So, while I likely won't personally start using pies (if there are only two values, why not just use the number directly?), your work will absolutely change how I talk about pies when I teach. Maybe we don't need to kill every last one. ;-) I also love how clear the issues are with the variations/manipulations you show in the final section - it's great to have clear evidence against exploding, distorting, etc.
>	
>	Thanks for this great work!

Carl Allchin says…
>	I had a similar thought to Cole. How does increasing multiple segments effect the interpretation? Also, I wonder how much effort the reader is taking to interpret the values, not just the accuracy but effort undertaken (not sure how this could be measured). Very interesting and well put together study.

echos2 says…
>	Thank you for this. I'm looking forward to subsequent research, especially into increasing the number of segments and comparing multiple pies.

<a href="http://policyviz.com" rel="nofollow noopener" target="_blank">HelpMeViz</a> says…
>	Robert,
>	
>	Great post and great job summarizing these three papers, each of which I enjoyed reading.
>	
>	I wanted to make two points.
>	
>	First, I must take issue with Jon's and Cole's comments (and, Robert, I think you'll agree with me). These studies do not show that pie charts are better (or worse) than other chart types (eg, bar charts). Instead, they provide evidence for how we discern the quantities in pie and donut charts. It still might be the case that the error (absolute or otherwise) is much larger for pie charts than other chart types, but these studies do not provide evidence one way or another. (You could, of course, argue that a two percentage point error is sufficiently small enough.)
>	
>	Second, (and I know this is nitpicky), in your summary of Study 2 you remark that, "It’s possible that a few more study participants would have pushed the mean down or widened the CI to include zero." Can't the opposite also be true? Maybe more participants would tighten the CI at an even higher (absolute) error and make that chart type (and possibly others) worse off compared with the pie chart. 
>	
>	I don't think these papers have changed my general habit of avoiding pie charts. Like others have mentioned here, I'd like to see this research line extended to pie charts with multiple slices (like Cole, if you're going to use a pie chart with two slices, that's really only showing one number, so why not just show it as a number?). (I've done that simple exercise--show a pie chart with multiple slices and ask people to guess the values of a single slice--and the average error is typically quite high.) And, of course, it would still be interesting to compare pie charts to other chart types (though that may be more of an update of Cleveland/McGill and Bostock/Heer). 
>	
>	Thanks,
>	Jon

jonpeltier says…
>	Jon -
>	
>	I know these papers did not compare press to other chart types. But even on the analysis of raw error, the pies did better than I would have expected. The work is still incomplete, but if the follow up research is done as well as this, we will be able to base or usage and recommendations on science, not just opinion.

<a href="http://kjro.se" rel="nofollow noopener" target="_blank">Kelly J. Rose</a> says…
>	As a mathematician, I'm going to be a little pedantic, but for the absolute error bars, you should be using a different distribution to lay them out as having a negative error is kinda silly.
>	
>	Probably using a Poisson Distribution would make the most sense: https://en.wikipedia.org/wiki/Poisson_distribution That would lead to your error bars being slightly weighted upward a bit, but not having the completely insane property of being negative for an absolute error.

<a href="http://thenonhacker.wordpress.com" rel="nofollow noopener" target="_blank">thenonhacker</a> says…
>	uh, seriously, we science this out so extensively? :-/

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	Those are absolute errors, but relative to the pie chart. Why can't they be negative? That would mean that they're lower than the pie chart's absolute error on that end, no?

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	Yes, good points/questions. You're right that this does not compare to other chart types. However, it does show that donut charts are no worse than pie charts, so that's a start. Also, as you say, the error of two percentage points is fairly low. We'd need to compare to other studies on bar charts, etc., but I don't think it's that much larger.
>	
>	As for the donuts study: you're right that more participants might also push the error up. But I don't expect that because it's inconsistent with the first study. There, we found no difference between the angle-only condition (which was almost exactly the same as the thinnest donut) and the pie. So why would it show up in the donut study? But it's possible that the first study was the outlier, not the second.
>	
>	Several people have asked about multiple slices. I don't expect the results to be much different there. This is about a rather basic perceptual question, so it should not make a difference. We definitely need to study it, but I don't expect it to look different from the two-slice configuration we studied here.

<a href="http://kjro.se" rel="nofollow noopener" target="_blank">Kelly J. Rose</a> says…
>	Absolute error is fundamentally positive. So a negative absolute error is problematic at best.

<a href="http://informaatiomuotoilu.fi" rel="nofollow noopener" target="_blank">Juuso Koponen</a> says…
>	Another idea for a follow-up study: In addition to looking at multiple slices, it might be worthwhile to see whether there is a systematic difference in performance when comparing small vs. large slices.
>	
>	From Cleveland &amp; McGill and Heer &amp; Bostock we know people tend to be better in comparing lengths than areas. However, you found no significant difference in performance when the comparison was based on arc length vs. when it was based on area only.
>	
>	I would guess that this apparent discrepancy is because comparing *arc* lengths isn’t as easy as comparing lengths of straight line segments. If this is indeed the explanation, then it could be hypothesized that comparisons with smaller donut chart segments (where the arc nearly corresponds to a straight chord line) should be more precise than with larger segments. It could even be that donut charts outperform pie charts when comparing small segments, since the donut shape affords comparison first by arc length.
>	
>	Anyway, many thanks for the valuable addition to the body of research, and the fantastic presentation of the results!

<a href="http://gravatar.com/esjewett" rel="nofollow noopener" target="_blank">Ethan Jewett</a> says…
>	"Absolute error relative to the pie chart" means (in the paper) absolute error minus the mean absolute error of the pie chart. It's perfectly reasonable for an absolute error minus an absolute error to be negative.
>	
>	Now, does it make sense to discard the 95% CI on the relative error? No, that is a mistake in my opinion and makes it appear in the last comparison chart that the irregular pie charts have "significantly" higher error than the standard pie. In fact, the paper says, "The irregular pie charts have significantly higher error than the basic pie."  If "significantly" means "p &lt; 0.05&quot;, then this is an incorrect interpretation of the result.
>	
>	The correct way (IIRC) to arrive at a p-value for these comparisons is to do multiple 2-sample t-tests with a multiple comparison correction. Just checking whether the CIs overlap is a decent heuristic. Checking if the CI of one sample overlaps with the mean of another sample is asking for mistaken conclusions.

Michael Niggel says…
>	I would be really interested to know what happens with readability in donut charts when you place something else in the center. Designers often fill this space, (as far as I can tell, it's one of the primary reasons to use it,) and it seems like that might affect the error.
>	
>	I wonder if we're still using the angle information in the donut, after mentally completing it. The thin donut results might suggest this to some degree, because users may no longer be able to follow those edges to completion. However, it's also possible that the thin donut's failing is in not providing enough area to judge by.
>	
>	Studying how disrupting the center area in various ways would further help our understanding.

<a href="https://www.facebook.com/app_scoped_user_id/1129287555/" rel="nofollow noopener" target="_blank">John H. Long</a> says…
>	One thing I would be curious about: if the angle always has one bar at twelve o'clock (straight up) does that impact accuracy? I think that makes both arc and angle more accurate, particularly since we are all quite used to using that angle in clocks.

<a href="https://www.facebook.com/app_scoped_user_id/10207384571793234/" rel="nofollow noopener" target="_blank">Susan Furest</a> says…
>	I agree! I was wondering about that as well. I always get upset when the first segment of a pie/donut graph is not starting at 12 o'clock- makes it harder to interpret.

depictdatastudio says…
>	Such valuable work. Thanks for all you do! I quote your studies in my dataviz trainings all the time. Keep it up.

</aside>

