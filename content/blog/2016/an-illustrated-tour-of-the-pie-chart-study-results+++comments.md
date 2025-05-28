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
