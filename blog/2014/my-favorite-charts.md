---
title: "My Favorite Charts"
description: "There are many charts I hate, because they're badly done, sloppy, meaningless, deceiving, ugly, or for any number of other reasons. But then there are the ones I keep coming back to because they're just so clear, well-designed, and effective.

All of these are a few years old. Like a fine wine analogy that I could insert here, it probably takes a while for a chart to come up again and again in conversation and when looking for examples to realize how good it is."
date: 2014-09-03 20:38:37
tags: 
featuredImage: https://media.eagereyes.org/wp-content/uploads/2014/09/wage-gap.png
---

# My Favorite Charts

There are many charts I hate, because they're badly done, sloppy, meaningless, deceiving, ugly, or for any number of other reasons. But then there are the ones I keep coming back to because they're just so clear, well-designed, and effective.

All of these are a few years old. Like a fine wine analogy that I could insert here, it probably takes a while for a chart to come up again and again in conversation and when looking for examples to realize how good it is.

## Scatterplot

My favorite scatterplot, and perhaps my favorite chart ever, is <em><a href="http://www.nytimes.com/interactive/2009/03/01/business/20090301_WageGap.html">Why Is Her Paycheck Smaller?</a></em> by Hannah Fairfield and Graham Roberts. It shows men's versus women's weekly earnings, with men on the horizontal axis and women on the vertical. A heavy black diagonal line shows equal wages, three additional lines show where women make 10%, 20%, and 30% less. Any point to the bottom right of the line means that women make less money than men.

<p align="center"><img class="aligncenter size-medium wp-image-8317" src="https://media.eagereyes.org/wp-content/uploads/2014/09/wage-gap-730x424.png" alt="Why Is Her Paycheck Smaller?" width="730" height="424" /></p>

The diagonal lines are a stroke of genius (pun fully intended). When you see a line in a scatterplot, it's usually a regression line that models the data; i.e., a line that follows the points. But such a line only helps reinforce the difficulty of judging the differences between the two axes, which is something we're not good at, and which is not typically something you do in a scatterplot anyway.

But the diagonal line, as simple as it is, makes it not just possible, but effortless. It's such a simple device and yet so clear and effective. All the points on the line indicate occupations where men and women make the same amount of money. To the top left of the line is the area where women make more money than men, and to the bottom right where women make less.

The additional lines show 10%, 20%, and 30% less for women. If it's hard to tell if a point is lying on the main diagonal of a scatterplot, it becomes impossible to guess the percentage it is off. The additional lines make it possible to guesstimate that number to within a few percent. That is a remarkable level of precision, and it is achieved with three simple lines.

There is some interactivity: mousing over points brings up a tooltip that shows the occupation the point represents and how much more one gender makes than the other. Filters in the top left corner let you focus on just a small number of occupations, which include annotations for a few select jobs.

But the key element is the inclusion of the reference lines that help people make sense of the scatterplot and read it with a high level of precision. Simple but effective, and powerful.

## Line Chart

My favorite line chart is <a href="http://www.nytimes.com/interactive/2009/11/06/business/economy/unemployment-lines.html"><em>The Jobless Rate for People Like You</em></a> by Shan Carter, Amanda Cox, and Kevin Quealy. This chart is somewhat ancient, having been created in Flash and showing unemployment data from January 2007 to September 2009. But its brilliant design and interaction make it timeless.

<p align="center"><img class="aligncenter size-medium wp-image-8318" src="https://media.eagereyes.org/wp-content/uploads/2014/09/jobless-rate-730x395.png" alt="The Jobless Rate for People Like You" width="730" height="395" /></p>

It's a line chart, but with a twist. The first thing you see is the heavy blue line, showing the overall unemployment rate. But there are more lines in the background, what are those? So you mouse over and they respond: they light up and there's a tooltip telling you what they represent. Each is the unemployment rate for a subset of the population, defined as the combination of race, gender, age group, and education. How are hispanic men over 45 with only a high school diploma doing compared to the overall rate? What about black women 15–24? Or white college grads of any age and gender?

Clicking on a line moves the blue line there so it's easier to see, but the overall rate stays easily visible. The y axis also rescales nicely when the values go above what it can currently display.

In addition, the filters at the top also respond to the selection to show who is selected. Clicking around inside the chart updates them. Hm, so maybe I can use those to explore too? And of course you can, broadening or narrowing your selection, or clicking through different age groups of the same subset of the population, etc.

The Human-Computer Interaction field has a nice term for an indication of more data and interaction: <em>information scent</em>. This is usually used with widgets, which indicate where more information can be found (like the little tick marks on the scrollbar in Chrome when when you search within the page). What makes this chart so good is its clever use of information scent to entice viewers to dig deeper, explore, and ask questions.

It also brilliantly and clearly demonstrates the fact that the overall unemployment rate is a rather meaningless number. The actual rate in your demographic is likely to look very different, and the range is huge. This was the inspiration for my <a href="/basics/means"><em>What Means Mean</em></a> piece, though I don't think that was nearly as clear as this.

The chart shows interesting data, explains a somewhat advanced concept, and invites people to interact with it. This comes in a package that is understated and elegant in its design. Best line chart ever.

## Bar Chart

I have already written about the <a href="/blog/2012/bikini-chart"><em>Bikini Chart</em></a>, and it remains my favorite bar chart. It's an incredibly effective piece of communication, and it's all just based on a simple time series. The fact that <a href="/journalism/when-bars-point-down">the bars point down</a> clearly communicates how it is supposed to be read: down is bad, less down is better than more down.

<p align="center"><img class="aligncenter size-medium wp-image-8319" src="https://media.eagereyes.org/wp-content/uploads/2014/09/obama-job-loss-chart-730x407.png" alt="obama job loss chart" width="730" height="407" /></p>

Bar charts are not exactly a common medium for artistic expression, but the designers of this chart managed to subtly but clearly get a message across.

## Bubble Chart/Animated Scatterplot

Animated scatterplots may not have been invented by Hans Rosling and <a href="http://www.gapminder.org">gapminder</a>, but they certainly were not a common thing until his <a href="http://www.ted.com/talks/hans_rosling_shows_the_best_stats_you_ve_ever_seen?language=en">TED talk in 2007</a>. And while it may seem a bit facetious to point to the only reasonably well-known example of a particular chart type as my favorite one, this is clearly one of my favorite charts, no matter what type.

<p align="center"><img class="aligncenter size-medium wp-image-8320" src="https://media.eagereyes.org/wp-content/uploads/2014/09/gapminder-730x547.png" alt="gapminder" width="730" height="547" /></p>

The animation may seem like a bit of a gimmick – and it has been <a href="http://research.microsoft.com/apps/pubs/default.aspx?id=64262">criticized as not being terribly effective</a> –, but it works to communicate a number of important pieces of information.

The main piece of information, of course, is change over time. How have different countries changed in terms of their wealth, healthcare, etc.? This is reasonably effective, because there are trends, and many countries follow them. The outliers are reasonably easy to spot, especially when you can turn on trails and replay the animation. It's not always immediately possible to see everything, but it does invite people to play and explore.

But then, there are the explanations. There is the clever animation that constructs the two-dimensional scatterplot from a one-dimensional distribution. There is the clever drill-down animation that breaks continents down into countries, and countries down into quintiles, to show the enormous range of values covered by each. This is not just a simple data display, but a way to introduce people to statistical concepts and data operations they may have heard of but don't understand (drill-down), or never have heard of in the first place (quintiles).

Rosling's video, and the gapminder software, not only introduced millions of people to data they knew nothing about (the video has over 8.5 million views!), it also demonstrated how a compelling story can be told without a single photograph or other image, just with data. That is an incredible achievement that opened our eyes to the possibilities of data visualization for communication.

## Appreciating Good Work

It's easy to find, and make fun of, bad charts. But between all the pie chart bashing and general criticism of bad charts, it is equally important to find the good examples and try to figure out what makes them work so well. Even if it may be more fun to beat up the bad examples, we will ultimately learn more from understanding the design choices and ideas that went into the good ones.


_Posted by <a href="/about">Robert Kosara</a> on September 03, 2014_


<aside class="comments">

---
## Comments

<a href="http://got-data.blogspot.com" rel="nofollow noopener" target="_blank">KK Molugu</a> says…
>	Robert:
>	
>	Interesting article. Personally, I think all charts are good (even Pie's IMHO) and only people with bad design choice, or color, etc. make them look bad or even worse.
>	
>	When charts and graphs were designed and created, I am sure there was a reason and purpose behind it. Understanding the purpose of the chart and the requirements of the user, if everyone creates a right chart to deliver the right message, we will end up with less bad charts. 
>	
>	I totally agree with you on appreciating the good ones instead of bashing the bad ones, as it helps newbies and also pro's by educating them with the best practices. 
>	
>	My 2 cents.. 
>	
>	..kk

<a href="http://lisacharlotterost.de" rel="nofollow noopener" target="_blank">Lisa</a> says…
>	I couldn't disagree more. Not all charts are good – sure there is always a reason behind it ("we have to fill the space!"), but not always a purpose. And the reason can be "bad" too, as well as the statistical skills of the designer in charge. There are so many reasons why a graph can turn out bad. SO MANY. 
>	
>	@Robert: Really appreciate the article and especially agree with what you said in the last paragraph. One can learn more from good examples than from bad ones. Thank you.

Wilson Jenkrich says…
>	That said, the bar chart example is an nice example of propaganda. The Labor Force Participation rate, according to the BLS, is at record lows for the modern era; part-time, low-wage jobs are being added as full-time, high-wage jobs are dropped; and the Census Department is said to have manipulated employment data prior to the 2012 election for political reasons.
>	
>	Lies, damn lies, and...

</aside>

