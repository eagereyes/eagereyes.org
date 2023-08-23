---
title: "How Much Data Do You Really Need?"
description: "One of the many things Malofiej 20 made me wonder about is how we present data and what we expect from such a presentation. Very often, we essentially narrate the process of discovery, but is that really the best way? And how much data do we need to show when making a point? Just because we start out with lots of data does not mean we really need to show it all."
date: 2012-05-24 21:44:43
tags: 
featuredImage: https://media.eagereyes.org/wp-content/uploads/2012/05/minwage-abstracted1.png
outline: false
---

# How Much Data Do You Really Need?

One of the many things <a title="Malofiej 20" href="/journalism/malofiej-20">Malofiej 20</a> made me wonder about is how we present data and <a title="What Does It Mean to Inform?" href="/journalism/what-does-it-mean-to-inform">what we expect from such a presentation</a>. Very often, we essentially narrate the process of discovery, but is that really the best way? And how much data do we need to show when making a point? Just because we start out with lots of data does not mean we really need to show it all.

So here is a simple experiment. Let's look at minimum wage data in the U.S. over time. This was inspired by <a href="http://visual.ly/vizbox/inequality-in-america/">a very nice interactive infographic on <em>Inequality in America</em></a> that EJ Fox of Visual.ly has put together. One of his items shows the difference between the nominal minimum wage (the dollar amount) and the inflation-adjusted value (or buying power).

Here is a simple visualization of that data. The green line shows the nominal value, the blue line is the value in 2011 dollars, adjusted using the <a href="http://www.bls.gov/CPI/">Consumer Price Index</a> (<a href="http://www.dol.gov/whd/minwage/chart.htm">minimum wage data from U.S. Department of Labor</a>). There should be a scale on the y axis of course, but suffice it to say that the current minimum wage is $7.25. The details matter little here, since my point is about the overall development over time.

<p align="center"><img class="aligncenter size-full wp-image-1909" title="Minimum Wage Original" src="https://media.eagereyes.org/wp-content/uploads/2012/05/minwage-original.png" alt="" width="600" height="400" /></p>

The minimum wage was established in 1938 and was raised at different times in different increments. What should be apparent from the chart is that while the nominal value changes relatively smoothly, the real value has a lot of rather erratic ups and downs.

We're looking at monthly data here, over about 72 years, which means about 860 data points on the blue line and 22 different values on the green one. That's not a huge amount of data, but given the rather erratic behavior of the blue line, it does create significant complexity. What if we simplify things by just showing the start and end values for the blue line in each interval? How much would that take away?

<p align="center"><img class="aligncenter size-full wp-image-1907" title="Minimum Wage Abstraction 1" src="https://media.eagereyes.org/wp-content/uploads/2012/05/minwage-abstracted1.png" alt="" width="600" height="400" /></p>

This reduces the amount of data considerably, to around 50 data points on the blue line, or by a factor of 17. The overall development is still clearly visible, even if we took out the background entirely (I just keep it there so you can see what I did). With few exceptions, the starting point is always the largest value, the end of each interval the lowest, and the development in between is largely monotonic.

But while we have reduced the complexity, how much have we gained? I'm not sure this has really simplified the chart. If you were to describe in words what happened, what would you say? Would you mention each interval separately? So why show each of them?

Let's go a step further and abstract with an even broader stroke (metaphorically and literally): don't worry about the individual data points, what is the overall story?

<p align="center"><img class="aligncenter size-full wp-image-1908" title="Minimum Wage Abstraction 2" src="https://media.eagereyes.org/wp-content/uploads/2012/05/minwage-abstracted2.png" alt="" width="600" height="400" /></p>

Now we're getting somewhere! The story becomes much more apparent: Until 1950, the real minimum wage was kept relatively constant with increases in the nominal value. From the 1950 to 1970, buying power was steadily increased through a series of minimum wage raises that were larger than necessary to just even out the effects of inflation. Those ended suddenly in 1970, at a time of high inflation, which erased a good part of the gains of the previous 15 years. In 1975, the real value was raised again and held steady until the early 1980s. Despite a few small increases in the 1990s, the real value then fell considerably over the next 30 years, ending up below the 1950 level. Starting in 2007, that trend was stopped and the real value has been rising again. The last increase was in 2009, however, so further action will be necessary soon if another drop in buying power is to be avoided.

That is my version of the story, based purely on the numbers. There is certainly more to it, but my point here is purely about the level of abstraction: the above paragraph is a valid summary of the data. My sketch is as well. Are they equivalent? Would you accept the written version over the graphical version? Does the graphical version have to show all the data values? What if a newspaper decided to just show the thick lines above, would that be okay?

It seems to me that we often show all the data just because we can. It's not practical to list 860 numbers in a piece of text, but it is easily doable even in a small image. But does that really serve the purpose of getting a point across? In particular when there is the option of linking to the detailed data and perhaps an interactive visualization of the data, do we need all that detail in the presentation? If we want to present rather than analyze, I think the answer is rather obvious.


_Posted by <a href="/about">Robert Kosara</a> on May 24, 2012_


<aside class="comments">

---
## Comments

derek says…
>	I can't even think why you would rip all the facts out like that, especially in a controversial subject where someone with a different opinion could accuse you of making up a story with your sketchy lines. Maybe I'm a wonk, but the first graph shows me everything you were trying to make clearer already. 
>	
>	I'm with Tufte when he says "to clarify, add detail". I'd take all those vertical leader lines out though, and maybe add a "river" of light shading whose banks are the tied-together beginnings and ends of the deflation trends for each fixed nominal minimum wage.

<a href="http://darkgreener.com" rel="nofollow noopener" target="_blank">Anna Powell Smith</a> says…
>	Interesting blog post, but I think the final graph is imposing a particular interpretation, which is troubling. 
>	
>	How do you choose where the start and end points are for each blue line? The mechanic is not clear, and a reader might well question whether they would put the lines in the same place. 
>	
>	I agree that the first graph is more complex than it needs to be to tell the broad story, but perhaps using a smoothed moving-average line for the blue values would work better. 
>	
>	A moving-average line would show the broad trends clearly, without raising the question of how one chooses precisely where the big jumps occur. Changes in slope would also simply look more attractive than discontinuities. (And it might be more representative of the real world - real prices of goods and services don't all change simultaneously.)
>	
>	I do think it's important to show the full real values on demand, too - perhaps as an option on the graph. 
>	
>	Thanks for a very thought-provoking post. I agree that the art of data visualisation - like many things in life - is choosing how much to show :)

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	I tried the bands, but this is a screenshot of an interactive visualization where I want to be able to add information and highlight things, and the bands interfere with that.
>	
>	My point was that I didn't just want to narrate the data, but provide a useful abstraction. That's what a newspaper article does, and I wonder if that's what a visualization can do, too.

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	I forgot to mention averaging, etc., I certainly thought about that. The problem with this data in particular is that a LOESS, moving average, etc. would either produce a lot of nonsense around the jumps or have to follow the data so closely that it wouldn't add anything. I also think that there needs to be a level of interpretation, otherwise we're not actually gaining anything. There is no explanation when you simply point to the data.

Joseph Cottam says…
>	Perhaps an accidental point you have made is the difference between data exploration and story telling. The original plot had all of details that lets you wonder and ponder, but did not tell a very clear story.  By grouping and averaging, the final plot tells a specific story. Fictional story telling often leaves out details for you to fill in; Scott McCloud hypothesizes in "Understanding Comics" that this omission of details enables us to be more engaged in the story.  Perhaps there is a corresponding operation in non-fiction where detail omission focuses attention to specific items, thus thread a cohesive story through a large amount of details.
>	
>	Your own comment on the final story is, "That is my version of the story, based purely on the numbers."  However, you pull in information that are not present in the presented data set when you tell your story you include extra information.  For example, "Those [gains] ended suddenly in 1970, at a time of high inflation..."  How much did performing the grouping influence your discovery of the external fact (inflation in the 1970s) and how much of your prior knowledge influenced your groupings (several of which appear somewhat arbitrary to me)?

<a href="http://blogs.sas.com/content/iml" rel="nofollow noopener" target="_blank">Rick Wicklin</a> says…
>	The original plot shows the data. The second and third plot display a <em>model</em> of the data. The model enables you to tell a nice story, but as others have pointed out, some people might disagree with your model/story and want to propose their own models that tell different stories.
>	
>	In most cases, the correct and honest approach is to do exactly what you did here: show the data, then overlay a model of the data that enables you to concisely describe the data. But don't present the model without the data. That is deceptive.

<a href="http://treasurycafe.blogspot.com" rel="nofollow noopener" target="_blank">david k waltz</a> says…
>	Given that the blue-line data is divided into time periods determined by wage increases, the downward slope of each segment is not surprising, since inflation will immediately begin to erode the purchasing power. 
>	
>	What might be interesting is to plot the peak to peak data as a proxy for a sense of how much purchasing power is deemed appropriate by lawmakers.
>	
>	What is interesting to me is the pre-1970 to post-1970 data. The US enjoyed a monopoly in the world during the decades prior as both Europe and Japan needed to rebuild from WWII. The benefits of this monopoly appeared to get shared somewhat via the minimum wage, but once it ended it reverted.
>	
>	The audience that will consume the data is an important factor in its presentation. Going into a C-level meeting with too much detail is almost a guarantee that whatever you are proposing will get denied or tabled. Conversely, a meeting with a large amount of analysts will require more detail.
>	
>	Thanks!

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	The point about exploration vs. storytelling is not accidental at all; in fact, that's the main point here! Exploration obviously requires as much of the data as possible, but my point is that for storytelling, we'll want to reduce it.
>	
>	The comment on inflation is actually based on the steep downward line in the 1970s, so it is actually based on the chart and data shown. But there is no question that I have a particular view of the data, how could I not? I don't even think that a story should be objective, since it can't be, anyway. We might as well run with it.

</aside>

