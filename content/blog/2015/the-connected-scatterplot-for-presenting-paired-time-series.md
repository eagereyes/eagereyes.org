# Paper: The Connected Scatterplot for Presenting Paired Time Series

I’m very happy to finally be able to announce [our paper on the connected scatterplot technique](/publications/Haroz-TVCG-2016). It describes the technique, provides some historical perspective, and most of all looks into how easy to understand and engaging the technique actually is.

The connected scatterplot isn’t really known in visualization, but has gotten some interest in journalism. There are a number of recent examples, like [*How the U.S. and OPEC Drive Oil Prices*](http://www.nytimes.com/interactive/2015/09/30/business/how-the-us-and-opec-drive-oil-prices.html), [*The Death Spiral Of M. Night Shyamalan’s Career*](http://fivethirtyeight.com/datalab/the-death-spiral-of-m-night-shyamalans-career/), [*National Indebtedness*](http://www.economist.com/blogs/graphicdetail/2015/05/daily-chart-4), and a number others (there’s a list in the paper). My favorites include one of my all-time favorite news graphics, [*Driving Safety, in Fits and Starts*](http://www.nytimes.com/interactive/2012/09/17/science/driving-safety-in-fits-and-starts.html), as well as *[Helium Supply](http://projects.katiepeek.com/Helium-Supply),* and [*The Rise of Long-Term Joblessness*](http://www.bloomberg.com/bw/articles/2013-02-07/the-rise-of-long-term-joblessness) (aka *The Scorpion Chart*).

In a way, the connected scatterplot is just that: a scatterplot with the dots connected by lines. But the appearance is quite different, since the lines give it much more of a *gestalt* than the points alone. It’s important to understand the way it depicts two time series, which is why we describe it at some length in the paper.

<figure><img src="https://media.eagereyes.org/wp-content/uploads/2015/11/cs-cases.png" alt="cs-cases" width="660" height="720"/></figure>

The use in journalism is quite specific, and closely modeled on the original idea behind the technique (which was first published in an economics paper): compare two time series with points that coincide. That makes a lot of sense for the types of data often used in journalism, which are reported at some common and predictable schedule: monthly, quarterly, yearly.

We talked to some of the journalists that had used the chart type to get a sense of why they had done so. How did they learn about it? What made them try it on their data? Did they think people would get it? Most of the folks we talked to expected their readers to be able to figure it out, even if it would require some work.

<figure><img src="https://media.eagereyes.org/wp-content/uploads/2015/11/cs-direction.png" alt="cs-direction" width="660" height="414"/></figure>

To see if that was the case, we conducted three studies. One was qualitative and had people explain what they were seeing in a chart and predict what the next step would be given a verbal description; another one had them translate from a dual-axis line chart to a connected scatterplot to see how well they would be able to do that; and the final one looked at how engaging people would find connected scatterplots in a simulated news website setting.

<figure><img src="https://media.eagereyes.org/wp-content/uploads/2015/11/dalc-cs.png" alt="dalc-cs" width="660" height="297"/></figure>

People are surprisingly good at understanding the technique, but they do make some specific mistakes and don’t make the same number of inferences about correlation. There are a number of visual features that let people see structures that they wouldn’t be able to see as well in other charts, which strikes me as fertile ground for further work. The [*Time Curves* paper at InfoVis](http://aviz.fr/~bbach/timecurves/) earlier this year used the technique in a different way than we do in the paper, but they also looked at visual structures that let people identify patterns (like circular edits on Wikipedia, etc.).

This is work with Steve Haroz and Steven Franconeri, both at Northwestern University (the same gang that worked on [the ISOTYPE paper we had at CHI](/papers/isotype-visualization)). Steve has made [a nice landing page for the paper](http://steveharoz.com/research/connected_scatterplot/), including an interactive tool that lets you play with the technique. There are also links to the experiments (to run in your browser) and some additional materials. The paper is going to appear in 2016, but [it is already pre-published](http://ieeexplore.ieee.org/xpl/articleDetails.jsp?arnumber=7332976) (requires IEEExplore access) and citable.

---

Steve Haroz, Robert Kosara, Steven L. Franconeri, [The Connected Scatterplot for Presenting Paired Time Series](/publications/Haroz-TVCG-2016), *Transactions on Visualization and Computer Graphics* (TVCG), vol. 22, no. 9, pp. 2174–2186, 2016. DOI: 10.1109/TVCG.2015.2502587
