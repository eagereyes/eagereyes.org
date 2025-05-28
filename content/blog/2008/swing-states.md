# Swing States

<p align="center"><img src="https://media.eagereyes.org/media/2008/StateSwing-teaser.png" alt="Swing State Teaser" width="404" height="154" border="0" /></p>

I always wondered how much those <a href="http://en.wikipedia.org/wiki/Swing_state">swing states</a> actually swing. So I looked at the results of presidential elections over the last 100 years, and it's not easy to determine which states actually are swing states from just looking at their history. Rather, there seems to be a pattern of relative stability for a few election cycles, and then big, sweeping wins for one side.

The data for this chart was collected from the <a href="http://www.archives.gov/federal-register/electoral-college/votes/index.html">U.S. National Archives and Records Administration</a>, which unfortunately does not provide this in a very usable format. The format also switches at some point, making things more work than necessary. I had originally collected the data in a year-by-state matrix, which turned out to be a poor choice. I used <a href="http://had.co.nz/reshape/">Hadley Wickham's reshape package for R</a> to "melt" the data into a more useful format. That data was then fed to <a href="http://www.tableausoftware.com/">Tableau</a> to produce this chart.

I chose a red that is quite a bit brighter than the blue to make the two colors easier to differentiate. Blue, of course, represents democrats, and red Republicans. There is also the <a href="http://en.wikipedia.org/wiki/Progressive_Party_(United_States,_1912)">Progressive Party of 1912</a> (not to be confused with the <a href="http://en.wikipedia.org/wiki/Progressive_Party_(United_States,_1924)">Progressive Party of 1924</a>, but I still gave them the same color), as well as the "<a href="http://en.wikipedia.org/wiki/Dixiecrat">Dixiecrats</a>" who only ran in 1948. They were all so short-lived that I didn't pay a lot of attention to them, but you can find them in the chart if you look closely.

<p style="text-align:center;"><a href="https://media.eagereyes.org/media/2008/StateSwing.png"><img src="https://media.eagereyes.org/media/2008/StateSwing-thumb.png" alt="Election Results by State" width="500" height="299" border="0" /></a></p>
You can see big, sweeping wins where one party takes over from the other, like in 1932, 1964, and 1968, etc. Bear in mind though that each dot represents a state, not a fixed fraction of either the popular or the electoral vote (<a href="/blog/2008/popular-vs-electoral-votes-using-stacked-bar-charts">which can differ quite a bit</a>, too). I have ideas for how to show these things, but haven't been able to do them in Tableau or Excel, and just don't have the time right now to write a program for this.

What is also interesting to see is how recently some states (like Alaska and Hawaii) became proper parts of the US, and that even "contiguous 48" states like Arizona and New Mexico were not represented 100 years ago. The District of Columbia is the only "state" to never change color, but there are a few that have fairly consistent records, like Vermont and Massachusetts.

The goal was to make a chart that would show the progression of state winners over time. The vertical time axis is not optimal, but due to the large number of states, there really is no other choice. This layout makes it possible to see each year as one unit, and also to follow each state separately (in the large version of the image, anyway).

So this is really more a starting point than a finished visualization. I don't think I really succeeded in showing the crucial structures here, and there is more information to be included (though I did not collect data on the number of electoral votes over time). The data is available below for you to try your hands on. Let me know what you come up with!

Data: <a href="https://media.eagereyes.org/media/2008/Elections_1904-2004.zip">Elections_1904-2004.zip</a>
