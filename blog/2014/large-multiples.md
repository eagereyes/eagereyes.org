---
title: "Large Multiples"
description: "Getting a sense of scale can be difficult, and the usual chart types like bars and lines don’t help. Showing scale requires a different approach, one that makes the multiplier directly visible."
date: 2014-10-12 19:43:17
tags: 
featuredImage: https://media.eagereyes.org/wp-content/uploads/2014/10/ceos-static.png
---

# Large Multiples

Getting a sense of scale can be difficult, and the usual chart types like bars and lines don’t help. Showing scale requires a different approach, one that makes the multiplier directly visible.

## Bars

In the U.S., CEOs on average make 354 times as much as workers, according to <a href="http://www.washingtonpost.com/blogs/wonkblog/wp/2014/09/25/the-pay-gap-between-ceos-and-workers-is-much-worse-than-you-realize/">this recent posting on the Washington Post’s <em>Wonkblog</em></a>. That is an astounding number. Put differently, a CEO makes in one day almost as much as the worker makes in an entire year. How do we show this enormous difference?

Roberto A. Ferdman at Wonkblog shows the numbers as a bar chart.

<p align="center"><img class="aligncenter size-medium wp-image-8364" src="https://media.eagereyes.org/wp-content/uploads/2014/09/wonkblog-CEOs-730x577.png" alt="Wonkblog: It pays to be CEO in the U.S." width="730" height="577" /></p>

The bars compare between countries, but I was interested in the comparison between the worker and the CEO. Just how much more is 354 times more? This chart doesn't tell me that.

## Multiples

An article on Quartz from late last year looks at similar data, and translates it into <a href="http://qz.com/156522/how-many-months-it-takes-an-average-worker-to-earn-what-the-ceo-makes-in-an-hour/">how many months workers at different companies would have to work to make the same as the CEO does in <em>one hour</em></a>. The disparities in these examples are even more staggering, since while the Wonkblog chart above looked at averages, Quartz used specific – extreme – examples. For example, McDonald’s CEO makes 1120 times what a McDonald’s worker makes. This is shown as a sort of calendar that has months marked for how long the worker needs to work to make that much.

<p align="center"><img class="aligncenter size-medium wp-image-8363" src="https://media.eagereyes.org/wp-content/uploads/2014/09/qz-CEOs-730x1574.png" alt="Quartz: comparison of worker to CEO" width="730" height="1574" /></p>

While that illustrates the time, it kind of misses the point. Showing days when the comparison is hours understates the true magnitude by a factor of eight (assuming an eight-hour work day). Why not show the same units?

## Large Multiples

The idea of showing the number of days is good, however, and I wanted to apply it to the Wonkblog numbers. So I built a little unit or multiples chart for this purpose.

I originally had included a bar chart as well as the unit chart, but based on Twitter feedback, decided to remove it. This focuses the chart on its main message, even if it makes comparing between countries more difficult. That comparison is not really all that interesting anyway, but rather the enormous disparity in and of itself.

While I was building an interactive chart, I added a bit of animation. The bubbles building up is meant to make the number a bit more tangible by also translating it into time: you have to wait longer to get the full value the larger the actual number is. This makes you feel the difference a bit more than a simple chart. I stole this idea from the <a href="http://www.neighbourhood.statistics.gov.uk/HTMLDocs/dvc147/">UK Office of National Statistics Neighbourhood Quiz</a>.

Click the image below to go to the interactive version of the chart. Let me know what you think!

<p><a href="http://eagereyes.org/applications/ceos"><img class="aligncenter size-medium wp-image-8377" src="https://media.eagereyes.org/wp-content/uploads/2014/10/ceos-static-730x510.png" alt="It pays to be a CEO in the U.S." width="730" height="510" /></a></p>


_Posted by <a href="/about">Robert Kosara</a> on October 12, 2014_


<aside class="comments">

---
## Comments

Josh says…
>	In discussions of CEO pay we often hear that they make X times what their workers are paid. While your chart does illustrate this, I think it lacks the impact of the one-hour chart. The comparison using different units is strength of that chart and not a weakness -- seeing that it takes days, weeks, MONTHS to match a single CEO hour highlights the disparity very effectively in my opinion.

gh says…
>	I woud love to somehow link this data to the societal impact and value of the jobs they get paid for... It's also interesting that some well-off countries like Austria seem to have less worker-ceo-pay-difference than neighbouring and comparable Germany or Switzerland. Could perhaps be interesting to factor in the size of businesses (perhaps more small and medium businesses are better to keep the gaps small and the society healthy than large ones) and the number of employees?!

<a href="https://plus.google.com/110312716257135320953" rel="nofollow noopener" target="_blank">Ken Schiele</a> says…
>	I think using circle marks are a good idea.  Otherwise, if they are squares with borders (e.g. the calendar chart), it begins to look more like an area-chart.  I suppose the circles help emphasize the negative space between them, making the circle a discrete unit.
>	
>	I first thought of this XKCD epic info graphic when I saw this blost post on my phone screen:
>	
>	XKCD - MONEY
>	http://xkcd.com/980/
>	
>	While I know that human visual perception does a poor job interpreting quantitative values from areas, I remember at #stdp14 in Seattle, Randall Munroe admitted he was violating this approach here, but it seemed to work.  
>	
>	And the animation is fun.  Emphasizes the difference between the extremes, when you experience it as time....

Free Marketeer says…
>	Yawn.  I'm so tired of CEO-pay-bashing.  How about a chart showing the total economic impact of a CEO's workday compared to that poor hourly McDonald's worker?  Who creates more jobs, etc.?  How about some supply and demand curves showing the relative scarcity of people able to run a large company vs. those able to ask, "You want fries with that?"

jlbriggs says…
>	1) the animations make me think of the Phil Hartman SNL Colon Blow commercial: http://vimeo.com/85309632 :)
>	
>	2) I think the comparison in this manner, especially as an interactive piece, is fine, I'd even say that I like it. But I don't feel that it is *the* way to show it; I don't feel that it trumps the other chart approaches.
>	And I don't feel that as a static chart it would do the numbers justice. I think that it suffers from the same problem as anything that compares areas, like a bubble chart, even if slightly less so because of the countable units.
>	
>	3) a while back, I made this bar chart in response to the calendar chart of CEO pay scales above:
>	
>	http://jsfiddle.net/jlbriggs/x26hG/embedded/result/
>	
>	It's a bit in need of cleaning up, better spacing and typography, as it was just a quick sketch, but the idea was to show the time in multiple ways, with hours, days, weeks, and months all displayed.
>	
>	4) @freemarketer - the job creators myth? Really?
>	How about the good old stand by charts showing how minimum wage has not remotely kept pace with inflation? Or how productivity has steadily increased while workers pay has steadily decreased? Or how CEO pay as a percentage of workers pay has risen nearly exponentially?  
>	Or how about the fact that "workers" does not refer to high school kids working at fast food places, but encompasses a vast and varied workforce including workers with a great deal of skill and education who are still getting shafted by corporate tyranny and greed?
>	
>	For starters... 
>	
>	:)

Brian says…
>	@FreeMarketeer:  Do US CEOs on average create twice as many jobs as Swiss CEOs?  Four times as many as Swedish CEOs?

Murali Kuchibhotla says…
>	This is cool!
>	Did you build this in Tableau?

gilgongo says…
>	The existence of people able to run large companies well is unknown. That is why the market pays what it does for those CEOs in question because when it is known the market has to assume it must be preserved. If it was known, we'd have a completely different labour market for CEOs (and most other white-collar jobs). A Harvard study of the effect of "revealed talent" is well worth reading here (link is PDF):
>	
>	http://isites.harvard.edu/fs/docs/icb.topic256649.files/MediocritiesAndSuperstars-DirectorsCut.pdf
>	
>	I think it might give you some insight into why your characterisation of witless expendable masses vs superhuman fat cats is most probably a complete fallacy.

</aside>

