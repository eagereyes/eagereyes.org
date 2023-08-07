---
title: "When Details Hide the Story"
description: "Kaiser Fung doesn't like this graphic that accompanied a recent story about the bird flu in the Wall Street Journal. His redesign shows a lot less overlap and a lot more detail; so much, in fact, that it obscures the point of the chart."
date: 2015-10-25 19:05:16
tags: 
featuredImage: https://media.eagereyes.org/wp-content/uploads/2015/10/avian-flu-wsj.jpg
outline: false
---

# When Details Hide the Story

<a href="http://junkcharts.typepad.com/junk_charts/2015/10/is-it-worth-the-drama.html">Kaiser Fung doesn't like this graphic</a> that accompanied a <a href="http://www.wsj.com/articles/u-s-readies-for-a-return-of-bird-flu-1444665965">recent story about the bird flu in the Wall Street Journal</a>. His redesign shows a lot less overlap and a lot more detail; so much, in fact, that it obscures the point of the chart.

Here is the offending graphic. The overlapping circles are hard to read with any precision and are hiding information. It's a pretty dramatic chart though, with the color choice reinforcing that something severe is happening.

<p align="center"><img class="aligncenter size-full wp-image-9021" src="https://media.eagereyes.org/wp-content/uploads/2015/10/avian-flu-wsj.jpg" alt="avian-flu-wsj" width="640" height="292" /></p>

Under the heading <em><a href="http://junkcharts.typepad.com/junk_charts/2015/10/is-it-worth-the-drama.html">Is It Worth the Drama?</a></em>, Fung proposes this no-drama redesign.

<p align="center"><img class="aligncenter size-full wp-image-9022" src="https://media.eagereyes.org/wp-content/uploads/2015/10/avian-flu-fung-redesign.png" alt="avian-flu-fung-redesign" width="620" height="539" /></p>

His point seems to be to show individual days, since that is what the original data contains. But that graph is way too detailed and shows information that is of no consequence. The <a href="http://www.wsj.com/articles/u-s-readies-for-a-return-of-bird-flu-1444665965">original story</a> kindly links to <a href="https://www.aphis.usda.gov/wps/portal/aphis/ourfocus/animalhealth/sa_animal_disease_information/sa_avian_health/ct_avian_influenza_disease/!ut/p/a1/lZFbc4IwEIV_iw99ZBLD_VG8gUrt1FqEl8waQDIDgYFox_764qUd-yC1edvdczJnv0UR2qBIwIHvQPJSQH6qI4POli7pO5h405U9xt7z-8S3Fqa6dLVWELaC4XTgauYCY6xZBHsjxx2Zto-xZzzmx3feAP_lD1CEIiZkJTMUQpXxhrJSyERImvNtDfXxCTdAy31N05Ltm3MFgheQ0yyBXGa3nZg3CTQJ5SIt6-IM4TI-cBA_eiavjVaW7xPxCd_GU5iK8RiFW2Kn2CCJolp9UDS2VRXQQVeIHqdxzJipquYl_K_9pmOn3W-yeDHnM4Ln-lXQxfcs6AAYtoTNuwhtDa3-mXr2wE1J7Q_9XfstyEw50USbTsqX8Q1ltOmgHDgoCgrDwB-oKtbrwlKNV_fzLS2C0XHQ630B9ICQ5w!!/?1dmy&amp;urile=wcm:path:/aphis_content_library/sa_our_focus/sa_animal_health/sa_animal_disease_information/sa_avian_health/sa_detections_by_states/ct_ai_pacific_flyway">the underlying data</a>, which made it easy to dig into this a bit and try things out.

I immediately had a sense that we're seeing a weekly pattern here. The time frame is only a few months, and there are fairly regular gaps that I figured were weekends. So I made a quick chart in Tableau of just the main part of the data, with the color showing the day of week. The color legend isn't important here since the point is to find the ones that have the highest peaks (I did label those).

<p align="center"><img class="aligncenter size-full wp-image-9023" src="https://media.eagereyes.org/wp-content/uploads/2015/10/avian-flu-weekdays.png" alt="avian-flu-weekdays" width="660" height="400" /></p>

Clearly, certain days stick out, and they're generally not the weekends. Most activity seems to be focused on Tuesday and Friday, and I'm sure there are reasons for that (like meetings where somebody in charge signs off on the results, since the dates are the confirmation dates). The one Sunday in mid-April was presumably an emergency meeting when the first big outbreak had been found.

Either way, this is not very interesting. The inner workings of the U.S. Department of Agriculture's Health Inspection Service are not the point of the story. Both Fung's redesign and my weekday-focused chart introduce a lot of noise that drowns out the actual point.

Instead, what makes a lot more sense to look at is a less granular view. Let's look at weekly totals instead of showing each day.

<p align="center"><img class="aligncenter size-full wp-image-9024" src="https://media.eagereyes.org/wp-content/uploads/2015/10/avian-flu-weekly.png" alt="avian-flu-weekly" width="660" height="400" /></p>

Now we're looking at an outbreak: it starts out quickly, peaks, then drops off more slowly. The weekly boundaries are still arbitrary, a better way of looking at this would be some sort of smoothing. But this is a much better view because it shows a more relevant level of detail.

This view is also more similar to the original than Fung's. Perhaps that could have been done better, but the intent was clearly there: the overlapping circles combine and create a sort of smoothing effect. They also cause some issues, no doubt. But the point of this is really not about individual days, it's about the grand totals and the speed with which the outbreak happened.

It's easy to jump on charts that hide parts of the data, and often those are poorly done. But insisting on showing more data does not always lead to a better solution. That is particularly true when the data is as noisy as in this case, and when there are artifacts that only distract from the actual point.

We always need to ask why the chart was made, <a href="/blog/2015/the-point-of-a-chart">for what purpose</a>, to what end.


_Posted by <a href="/about">Robert Kosara</a> on October 25, 2015_


<aside class="comments">

---
## Comments

<a href="http://www.vasantahealth.com" rel="nofollow noopener" target="_blank">Monika Wahi</a> says…
>	Hi there!  Not sure if you realized you essentially made an epicurve - what epidemiologists use to visualize outbreaks. Here's a link to the CDC's tutorial on Epicurves: http://www.cdc.gov/training/quicklearns/exposure/
>	
>	It's like we went from fancy Tufte charts back to square one.  Very interesting evolution!  Thanks for this post.

galkamax says…
>	Good post. I like the WSJ graphic. You make a good point about the smoothing issue, but that aside, I think it does a great job communicating the information. In sone respects your bar chart is better. It captures the growth trend well, but it misses the growing frequency of outbreaks. Those small orange circles leading up to the big explosion are an important piece of the story.
>	
>	Coulnt agree more with your last statement.

</aside>

