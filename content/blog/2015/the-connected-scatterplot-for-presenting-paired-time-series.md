<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2015/11/cs-teaser.jpg" alt="" width="825" height="428" /></p>

# Paper: The Connected Scatterplot for Presenting Paired Time Series

I’m very happy to finally be able to announce <a href="/publications/Haroz-TVCG-2016">our paper on the connected scatterplot technique</a>. It describes the technique, provides some historical perspective, and most of all looks into how easy to understand and engaging the technique actually is.

The connected scatterplot isn’t really known in visualization, but has gotten some interest in journalism. There are a number of recent examples, like <a href="http://www.nytimes.com/interactive/2015/09/30/business/how-the-us-and-opec-drive-oil-prices.html"><em>How the U.S. and OPEC Drive Oil Prices</em></a>, <a href="http://fivethirtyeight.com/datalab/the-death-spiral-of-m-night-shyamalans-career/"><em>The Death Spiral Of M. Night Shyamalan’s Career</em></a>, <a href="http://www.economist.com/blogs/graphicdetail/2015/05/daily-chart-4"><em>National Indebtedness</em></a>, and a number others (there’s a list in the paper). My favorites include one of my all-time favorite news graphics, <a href="http://www.nytimes.com/interactive/2012/09/17/science/driving-safety-in-fits-and-starts.html"><em>Driving Safety, in Fits and Starts</em></a>, as well as <em><a href="http://projects.katiepeek.com/Helium-Supply">Helium Supply</a>,</em> and <a href="http://www.bloomberg.com/bw/articles/2013-02-07/the-rise-of-long-term-joblessness"><em>The Rise of Long-Term Joblessness</em></a> (aka <em>The Scorpion Chart</em>).

In a way, the connected scatterplot is just that: a scatterplot with the dots connected by lines. But the appearance is quite different, since the lines give it much more of a <em>gestalt</em> than the points alone. It’s important to understand the way it depicts two time series, which is why we describe it at some length in the paper.

<p align="center"><img class="aligncenter size-full wp-image-9080" src="https://media.eagereyes.org/wp-content/uploads/2015/11/cs-cases.png" alt="cs-cases" width="660" height="720" /></p>

The use in journalism is quite specific, and closely modeled on the original idea behind the technique (which was first published in an economics paper): compare two time series with points that coincide. That makes a lot of sense for the types of data often used in journalism, which are reported at some common and predictable schedule: monthly, quarterly, yearly.

We talked to some of the journalists that had used the chart type to get a sense of why they had done so. How did they learn about it? What made them try it on their data? Did they think people would get it? Most of the folks we talked to expected their readers to be able to figure it out, even if it would require some work.

<p align="center"><img class="aligncenter size-full wp-image-9077" src="https://media.eagereyes.org/wp-content/uploads/2015/11/cs-direction.png" alt="cs-direction" width="660" height="414" /></p>

To see if that was the case, we conducted three studies. One was qualitative and had people explain what they were seeing in a chart and predict what the next step would be given a verbal description; another one had them translate from a dual-axis line chart to a connected scatterplot to see how well they would be able to do that; and the final one looked at how engaging people would find connected scatterplots in a simulated news website setting.

<p align="center"><img class="aligncenter size-full wp-image-9079" src="https://media.eagereyes.org/wp-content/uploads/2015/11/dalc-cs.png" alt="dalc-cs" width="660" height="297" /></p>

People are surprisingly good at understanding the technique, but they do make some specific mistakes and don’t make the same number of inferences about correlation. There are a number of visual features that let people see structures that they wouldn’t be able to see as well in other charts, which strikes me as fertile ground for further work. The <a href="http://aviz.fr/~bbach/timecurves/"><em>Time Curves</em> paper at InfoVis</a> earlier this year used the technique in a different way than we do in the paper, but they also looked at visual structures that let people identify patterns (like circular edits on Wikipedia, etc.).

This is work with Steve Haroz and Steven Franconeri, both at Northwestern University (the same gang that worked on <a href="/papers/isotype-visualization">the ISOTYPE paper we had at CHI</a>). Steve has made <a href="http://steveharoz.com/research/connected_scatterplot/">a nice landing page for the paper</a>, including an interactive tool that lets you play with the technique. There are also links to the experiments (to run in your browser) and some additional materials. The paper is going to appear in 2016, but <a href="http://ieeexplore.ieee.org/xpl/articleDetails.jsp?arnumber=7332976">it is already pre-published</a> (requires IEEExplore access) and citable.

<hr />

Steve Haroz, Robert Kosara, Steven L. Franconeri, <a href="/publications/Haroz-TVCG-2016">The Connected Scatterplot for Presenting Paired Time Series</a>, <em>Transactions on Visualization and Computer Graphics</em> (TVCG), vol. 22, no. 9, pp. 2174–2186, 2016. DOI: 10.1109/TVCG.2015.2502587
