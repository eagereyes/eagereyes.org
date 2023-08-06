---
title: "Stacked Bars Are the Worst"
description: "Bar charts are great. They always work. They're always the safe choice. Right? Well, no. Stacked bar charts are deceiving because we think they work just like regular bars, when they're really pretty terrible."
date: 2016-08-24 20:21:53
tags: techniques
featuredImage: https://media.eagereyes.org/wp-content/uploads/2016/08/bars-stacked.png
---

# Stacked Bars Are the Worst

Bar charts are great. They always work. They're always the safe choice. Right? Well, no. Stacked bar charts are deceiving because we think they work just like regular bars, when they're really pretty terrible.

## Some Examples

Look at the following chart, showing <a href="https://public.tableau.com/views/ArbeitsmarktBayern2016/ArbeitsmarktBayern">unemployment numbers for Bavaria</a>. The total height of the bars is easy enough to compare, but how about the blue bars at the top? Are those getting longer or shorter? How sure are you?

<p align="center"><img class="aligncenter size-full wp-image-9481" src="https://eagereyes.org/wp-content/uploads/2016/08/bars-stacked.png" alt="bars-stacked" width="825" height="406" /></p>

Wikipedia has <a href="https://commons.wikimedia.org/wiki/File:Piecharts.svg">the following chart comparing pie and bar charts</a>, which is used in teaching visualization to show how bad pie charts are. Compare the green segment in the pie charts and the bar charts. Clearly, pie charts are much more difficult to read.

<p align="center"><img class="aligncenter size-full wp-image-9482" src="https://eagereyes.org/wp-content/uploads/2016/08/piecharts-wikipedia.png" alt="piecharts-wikipedia" width="610" height="474" /></p>

But is the comparison fair? The bars are next to each other, they're easy to compare. Stacked bars are actually much more like pie charts.

## The Obligatory Cleveland and McGill Section

While this doesn't seem to be widely known, it's not new. In their seminal paper on graphical perception, Cleveland and McGill compared stacked bars with other ways of doing bar charts. Here are the five kinds of bar configurations they compared.

<p align="center"><img class="aligncenter size-full wp-image-9478" src="https://eagereyes.org/wp-content/uploads/2016/08/bar-chart-types.png" alt="bar-chart-types" width="660" height="164" /></p>

The little dots indicate what to compare. Types 4 and 5 are the stacked bar charts. Type 4 is similar to my example above, where you're looking at bars that sit on top of other bars. In Type 5, you're comparing lengths that are stacked rather than next to each other. The results show that these are the most difficult, producing the highest error.

Here are confidence intervals (same thing I've used in the <a href="https://eagereyes.org/blog/2016/an-illustrated-tour-of-the-pie-chart-study-results">recent pie charts postings</a>) for error. Check out types 4 and 5!

<p align="center"><img class="aligncenter size-medium wp-image-9480" src="https://eagereyes.org/wp-content/uploads/2016/08/results-bars-only.png" alt="results-bars-only" width="660" height="240" /></p>

The latter are clearly worse than the first three. The confidence intervals clearly don't overlap. The error metric used in the paper is also based on the logarithm, so the differences here are pretty large.

But Cleveland and McGill also tested pie charts. Let's see how pie charts do in comparison. I've highlighted them in the full version of the results.

<p align="center"><img class="aligncenter size-full wp-image-9479" src="https://eagereyes.org/wp-content/uploads/2016/08/results-all.png" alt="results-all" width="660" height="439" /></p>

Stacked bar charts have higher error than pie charts (angle condition, even though we now know <a href="https://eagereyes.org/papers/a-pair-of-pie-chart-papers">that it's not angle</a>)! The basic bar charts are clearly better than pie charts, but stack them and they're worse! Both stacked configurations are worse than pie charts, but especially the one where you're comparing bars that sit on top of each other.

There are also other studies that have found the same or similar results. One example is <a href="https://eagereyes.org/blog/2016/a-reanalysis-of-a-study-about-square-pie-charts-from-2009">the Mechanical Turk study on square pies I wrote about recently</a>.

## It's Not That Simple

Nobody ever got fired for using a bar chart, right? Well, it's not quite that easy. Even though many charts seem really simple, making small changes to them can have a significant impact on their readability.

There is also more to it than just the chart type. If the differences in the values are large, you'll be able to tell which way things are going even if you can't read the values with much precision. Depending on the use case, that can be good enough. But when the numbers are similar or there is no clear trend, they get harder to see and you need a more robust way of showing the data.

Stacked bars are particularly problematic because they have the air of precision, when they're really poor. They can be useful when the point is to show that a value is the sum of other values, but you're only interested in comparing the totals. They also work if you only need to show one section and can make that the one on the bottom. Then the bars are comparable and work well.

But just throwing values into a stacked bar chart is a bad idea. Just like people tend to misuse pie charts, most uses of stacked bars I see are really poorly done. People don't pick up on that even when they will immediately ridicule you for using a pie chart. Things are a bit more subtle than <em>bar chart good, pie chart bad</em>, however.


_Posted by <a href="/about">Robert Kosara</a> on August 24, 2016_


<aside class="comments">

---
## Comments

Karunaker Molugu says…
>	Nice article Robert and have seen people abuse it widely. If there are two or three segments, its easy (kind of) to compare and stacked bars make sense  but when there are more.. I prefer line charts.

<a href="http://mjskay.com" rel="nofollow noopener" target="_blank">Matthew Kay</a> says…
>	I think it's difficult to advocate for more subtle and thoughtful choice of visualization types with an article titled "Stacked bars are the worst". Is the title intentionally ironic?
>	
>	I don't think the antidote to mindlessly repeating the mantra "never use pie charts" is a new generation mindlessly repeating the mantra "stacked bars are the worst". Especially since you do acknowledge they are useful in some cases (personally I think comparing many Likert items/diverging scales can be one---scaled to the same total height there becomes essentially two categories you are interested in, and comparing across many side by side is easier than with any other presentation I have seen), but this minor point will likely be forgotten as readers recount this article to others.

Darb K says…
>	then what do you recommend?

<a href="http://twitter.com/acotgreave" rel="nofollow noopener" target="_blank">Andy Cotgreave (@acotgreave)</a> says…
>	I'm afraid I agree with Matthew: they're weak for all the reasons you point out. You also acknowledge their strengths, so you're passionate headline undermines your argument.
>	
>	If the PRIMARY purpose is to look at the total, then they're not too bad. The SECONDARY purpose (what's the breakdown of the bar) isn't as effectively conveyed but that's ok, it's contextual info to support the PRIMARY purpose. 
>	
>	Also this article rehashes a lot of what Stephen Few stated recently. The debate in the comments with Cole and Steve is fascinating (if you have the stamina): https://www.perceptualedge.com/blog/?p=2239

Jeffrey Heer says…
>	Hi Robert,
>	
>	I think we need to be more careful in our interpretation of research results. This is a critical responsibility in our role as researchers.
>	
>	In the case of Cleveland &amp; McGill, the position-length and position-angle experiments actually have  different experimental protocols and so the results should not be directly compared -- at least, not without careful consideration and caveats. (Though the graphic itself does indeed invite comparison between experiments!) The fact that position judgments in the position-angle experiment exhibit much lower error than those same judgments in the position-length experiments should give us pause.  A more controlled comparison comes from our 2010 graphical perception paper (http://idl.cs.washington.edu/papers/crowdsourcing-graphical-perception), where stacked bar and pie chart judgments led to error distributions with overlapping confidence intervals.
>	
>	I'm afraid your title is not supported by the data. The experimental data I'm familiar with suggest that stacked bars and pies (with a small number of elements!) lead to similar errors. Headlining that "stacked bars are the worst" is much more akin to yellow journalism than to experimentally-supported advice.

<a href="https://www.facebook.com/app_scoped_user_id/694515078/" rel="nofollow noopener" target="_blank">William Holz</a> says…
>	Well, if you want to visualize information in a manner in which people can generate effective insights, it's important to acknowledge the weaknesses of stacked bars because they're very significant and right now many people treat stacked bars as a de facto quality visualization.
>	
>	That's a bad thing because the only places stacked bars are effective are with respect to totals and whichever element is placed on the bottom.  The 'stacked' elements tend to get dramatically misinterpreted and I've more than once had to replace an existing viz because somebody was making comparisons between stacked items and was struggling to identify variance.
>	
>	I think the takeaway should be that every viz has its flaws and every dataset has its quirks. If we're trying to communicate information, we should be trying to do it as well as possible, right?  If we're doing something interactive and can't add guidelines or somesuch then we shouldn't be leaning on stacked bars.  
>	
>	This is more severe than the pie chart issue.  Pie charts are popular, comprehensible, and just tend to fall apart when you try to do too much with them.  Stacked bars fall apart quickly and can become deceptive if things end up arranged in just the right/wrong way.  That's not a value add, and if your viz isn't adding value then it's time to either change visualizations or not just visualize for the sake of 'pretty'.

Rina Petersen says…
>	Thanks for the thoughtful analysis, as usual.
>	 
>	IMO, stack bars save real estate. For that reason, I still use it, usually for a dimension with 3-4 category. I usually put the most interested category at the bottom or the top of the bars to make is easier to see the trend.

<a href="https://www.facebook.com/app_scoped_user_id/694515078/" rel="nofollow noopener" target="_blank">William Holz</a> says…
>	"IMO, stack bars save real estate. For that reason, I still use it, usually for a dimension with 3-4 category. I usually put the most interested category at the bottom or the top of the bars to make is easier to see the trend."
>	
>	Ditto!  Great minds think alike (and perhaps so do we) ;)
>	
>	They're useful for the total, and people have no difficulty with whatever field is at the bottom of the bar.  I've dabbled with the order of the elements a bit and found that if you have a field that's largely unchanging then it's pretty harmless to put those on the bottom (since that doesn't screw up the perception of the one above, so you end up with three elements that work!)...but as a rule I think your strategy of putting the 'key' element on the bottom is the way to go!

<a href="https://www.facebook.com/app_scoped_user_id/694515078/" rel="nofollow noopener" target="_blank">William Holz</a> says…
>	Hey Jeffrey!  Great little pub you had there.
>	
>	Out of curiosity, are you guys considering doing a study specifically on the differences between people's interpretations of the components?  In my experience people have little difficulty with totals and whichever part of the bar is 'unstacked' (on the bottom) but start to struggle (sometimes dramatically!) with value judgments when dealing with elements that have been stacked on top of another element that diverges. 
>	
>	I'd be interested to see how well supported that is experimentally, as well as how other factors (degree of variance, use of guidelines, etc.) influence people's ability to comprehend them.

<a href="http://eagereyes.org/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	Okay, let's talk about the title: it's not meant to be a precise statement, but "the worst" as in "You're always criticizing my postings! You're THE WORST!" Also, stacked bars are the worst bars, and the data actually supports that (at least some of the data).
>	
>	As I pointed out above, we found that stacked bars did the worst when compared to square pies, pies, and donuts. It seems like this could be a good topic for some meta-analysis.

<a href="http://www.mjskay.com/" rel="nofollow noopener" target="_blank">Matthew Kay</a> says…
>	I did not say that we shouldn't acknowledge the weaknesses of stacked bars. 
>	
>	I said we should acknowledge the weaknesses *and strengths* of stacked bars, in order to make informed judgements about when to use them. Robert has argued for more nuanced guidelines in vis, for example, that the blanket prescription against pie charts does not acknowledge the weaknesses *and strengths* of pie charts. It is thus ironic that this article makes exactly the same type of blanket prescription against stacked bars (in title and intro) that he correctly argues against giving in the case of pie charts.

<a href="http://dataremixed.com" rel="nofollow noopener" target="_blank">Ben Jones</a> says…
>	Interesting discussion here. Thanks for reminding us about an arguably overlooked drawback with a popular chart type. I have to agree with Andy C and Jeff H, though, that the title was too provocative, and while it definitely got me to read the blog post, I'm not quite ready to banish the stacked bar from my solution set based on what I read here. 
>	
>	Mostly because I wonder whether stacked bars really are "the worst" type of bar chart in every case. Picking up on Andy's comment, if my primary task is best aided by a comparison of the sum of the segment values, and if the individual segment lengths are secondary contextual elements only, wouldn't a stacked bar be far better than showing each segment side-by-side, or even better than a line chart, especially if the total bar (or line) wasn't shown? With these other chart types, I'd have to do mental math just to know the totals for each chunk of time.
>	
>	And in the defense of the example that you reference at the beginning of this blog post, the creator of the visualization probably does the best thing possible - they let the reader start with the overall picture as shown via the stacked bars, seeing the trend in the total value, and then the reader can also click through and see the trends associated with the individual segments by themselves. So it's a sequenced data narrative that takes advantage of the strengths of various chart types, and also hedges against their respective weaknesses.

<a href="http://richardbrath.wordpress.com" rel="nofollow noopener" target="_blank">Richard Brath</a> says…
>	As others have already pointed out, the task changes the form of the representation. If you need to understand the change in the blue bars, there are other representations that may be better.
>	
>	However, in practice, I have reservations about grouped bars sharing a common baseline (as shown in the second figure) instead of a stacked bar. As the number of entries increases beyond a few bars, the bar widths become narrow (the initial unemployment graph has 13 time intervals and 7 categories resulting in 91 discrete bars if redrawn as a grouped bar chart). If you're trying to see a trend in one category, it becomes difficult to trace that particular bar through each bar group unless it's the tallest bar or has some very obvious pattern different than the others.  
>	
>	There are many possible alternative layouts: stacked bars, grouped bars, small multiples of bars, pie charts, line charts, tables with bars, etc. Tables are interesting because of the assumed easy-to-use interactions available in tables - tables often include various sorting options. Sorting helps rearrange the entries to facilitate perceiving the data of interest. 
>	
>	If one can easily filter or re-sort a stacked bar so that the category of interest is along the baseline, then the visual comparison becomes easy. An interesting question is why don't we expect our (stacked bar) charts to have standardized, easy-to-use features such as filter, sort and re-order?

Michael says…
>	I agree- stacked bars often look nice but can be difficult to interpret. The one place I use them is when I'm showing percentages of a total. Comparing the breakdown of a value into 2 categories over time works well with stacked bars. To be clear, I'm talking about having the bars go the full height of the graph, with two colors showing the breakdown.

<a href="http://www.tlfresearch.co.uk" rel="nofollow noopener" target="_blank">Nigel</a> says…
>	First let me state for the record - I'm not an analyst.
>	
>	There are a number of people saying if you want to focus on one of the results the stacked bar is acceptable as long as you put the data of interest at the bottom.
>	
>	So, if you're focus is "look at this compared to "the rest"" - why not display it as such? group all the "other" categories in to a single category (so you're still seeing the "look at me" figures as part of the whole) - but you're not distracted by the other categories...

<a href="http://www.tlfresearch.co.uk" rel="nofollow noopener" target="_blank">Nigel</a> says…
>	Yes, I noticed I used the wrong "your" at the start of the third paragraph...in my defence I originally wrote "you're focussing on"...but then changed my mind.
>	
>	Looking at it is making my teeth itch, but there's no edit button.

kld212 says…
>	Bit late to the conversation here... but what about the 100% stacked bar chart? Is this not a fairly decent way of looking at how a mix changes? e.g. product sales (products a, b and c) year on year with 100% meaning total sales

lori says…
>	I'm reading a scientific article and in utter frustration with one of its figures which is a stacked bar chart. I googled "stacked bar charts are the worst!" and found you. thank you for articulating these reasons so well!

Matthew W Gillman says…
>	If all bars are 100% and you heed the admonition of no more than 2 categories in each stacked bar (because the only interpretable portion is the bottom), then just show that bottom category in a single bar.  So much easier to visually interpret.  Stacked bars are indeed "the worst."

</aside>

