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
