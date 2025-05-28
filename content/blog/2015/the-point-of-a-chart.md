# The Point Of A Chart

When creating charts, it's important to pick the one that actually fits not just the data, but the task. That can require going outside your comfort zone to use something beyond the four or five most common chart types. Here is an example where the original chart does not support comparison between two different sets of numbers, but it's easy to fix.

On Twitter this morning, <a href="https://twitter.com/StephenHoskins/status/636426882775252992">Stephen Hoskins pointed me</a> to <a href="http://www.nzherald.co.nz/nz/news/article.cfm?c_id=1&amp;objectid=11496657">this story about Auckland schools in the NZ Herald</a> as a good use of pie charts. It's an interesting case, because individually, these aren't bad pie charts. They show the make-up of the poorest (Decile 1, lowest decile) and richest (Decile 10, highest decile) schools in Auckland.

<p align="center"><img class="aligncenter size-full wp-image-8939" src="https://media.eagereyes.org/wp-content/uploads/2015/08/AucklandEthnicMakeup_Aug2015.gif" alt="AucklandEthnicMakeup_Aug2015" width="620" height="369" /></p>

They're okay pies because they only show a small number of slices each and they're very different. The sorting of the values could be better, but that's a minor issue here. Looking at each individually works if you want to see each of those schools is made up in terms of ethnicities.

The problem is that pies are really bad for comparison. This is especially problematic here where the differences are huge. It takes a while to even find the corresponding colors in both charts.

So I made a quick slope graph, with the bottom decile on the left and the top decile on the right. This fits into the same number of pixels, despite Tableau's slightly inefficient use of space here.

<p align="center"><img class="aligncenter size-medium wp-image-8941" src="https://media.eagereyes.org/wp-content/uploads/2015/08/Ethnicities-bump-chart1.png" alt="Ethnicities bump chart" width="660" height="394" /></p>

The point of this chart is really the comparison, and the differences are really stark. The slope graph makes them much more visible, and easier to understand, than the pair of pie charts. I also got rid of the color legend and instead labeled the lines directly (though I left out the exact numbers since they likely aren't terribly important).

It's not just about the difference in the chart type here (and avoiding the oft-maligned <a href="/techniques/pie-charts">pie chart</a>), but asking what the point of the visualization is. If it's comparison between sets of values (or over time), use a chart that makes that easy and clear.
