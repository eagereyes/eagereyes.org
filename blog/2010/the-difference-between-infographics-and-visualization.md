---
title: "The Difference Between Infographics and Visualization"
description: "What is the key difference between a visualization and a data-based infographic? The visualization is created by a program that can be applied to many datasets, the infographic is hand-crafted for a particular dataset. It's obvious, which is why it's so hard to figure out."
date: 2010-08-10 21:50:12
tags: 
featuredImage: https://media.eagereyes.org/media/2010/healthcare.jpg
outline: false
---

# The Difference Between Infographics and Visualization

What is the key difference between a visualization and a data-based infographic? The visualization is created by a program that can be applied to many datasets, the infographic is hand-crafted for a particular dataset. It's obvious, which is why it's so hard to figure out.

I had this little insight when reading <em><a href="http://radar.oreilly.com/2010/08/visualization-as-journalism.html">Lies, damn lies, and visualizations</a></em> on O'Reilly Radar. The story starts with a discussion of data science and visualization, but then uses this image as an example why visualization is not objective.

<a href="http://eagereyes.org/media/2010/health_viz.png"><img src="https://media.eagereyes.org/media/2010/healthcare_560.jpg" alt="" width="560" height="437" /></a>

Of course it's not, but that is besides the point. The bigger issue I have is that it's not a visualization. This is an infographic: it was made for a particular dataset, for a particular purpose. That is what infographics are: they are elaborate, explanatory, and self-contained. But that means they must be specific and done by hand each time. There is no program that could churn out specific artwork, photographs, and explanatory text for an arbitrary dataset.

Visualization, on the other hand, is general. <a href="http://eagereyes.org/techniques/parallel-coordinates">Parallel coordinates</a> or <a href="http://eagereyes.org/techniques/pie-charts">pie charts</a> do not care about what data they show. That means that they may be used for data that they are not suitable for, but the program itself typically won't be able to tell you that. The power of visualization is that you can quickly apply such an existing technique to new data to get an idea what it's about. But the onus of picking the right visualization technique and parameters is on the user. And so is explaining what the data is and what can and cannot be seen in the visualization. A general technique cannot do that.

Visualization is general, infographics are specific. Visualization is context-free, infographics are context-sensitive. Visualization is (largely) automatic, infographics are hand-crafted. Neither are objective, and both require hand-tuning and understanding to get right.


_Posted by <a href="/about">Robert Kosara</a> on August 10, 2010_


<aside class="comments">

---
## Comments

<a href="http://www.flyingbinary.com" rel="nofollow noopener" target="_blank">Jacqui Taylor</a> says…
>	Robert
>	
>	Thanks for posting this. I find myself explaining this several times a week and was getting to point of saying, is it me/ Doesn;t anyone else get this?
>	
>	Well great to know I'm in good company.
>	
>	I expect to be shamelessly promoting this post. Cheers!

<a href="http://visualizeit.wordpress.com" rel="nofollow noopener" target="_blank">Alark Joshi</a> says…
>	Great post, Robert!
>	
>	I have been asked this question in class many times and my answer is based on the fact that visualization techniques let users learn more about their data by interacting with it. There is no agenda behind a visualization technique unlike an infographic, where the designer/creator is trying to convey a message using graphical elements. I agree with your sentence about visualization being context-free whereas infographics are context-sensitive. 
>	
>	-Alark

Anonymous says…
>	This is the best definition I've heard. I always knew an infographic was static but hadn't broken it down this thoroughly. Thank you. 

<a href="http://www.optegra.com" rel="nofollow noopener" target="_blank">Tim Vision</a> says…
>	I didn’t know the the key difference between a visualization and a data-based infographic was that visualization is made by a program that can be applied to many datasets. This was definitely worth reading. I think I’m not the only one who thought this was very informative. Thanks!

jlbriggs says…
>	Little tidbits like this are the reason I keep returning to this site.  I keep finding something new and informative in both the new and the old posts.
>	
>	I don't know to what extent you may have already addressed this elsewhere, but what level of importance does the interactivity hold in regard to the definition as a visualization? 
>	Do you consider static statistical charts to be visualizations, or do they fall in a separate category?
>	What about charts that are not entirely static in that they update dynamically from a data feed on the server, allow the user to view additional data by hovering over data points, etc, but do not allow the user to alter the parameters of the chart or the data?
>	

Al says…
>	Ooohh close close and almost always true, but I think this is a correlate of the difference, rather than the defining difference itself.
>	
>	Visualisations are tools for exploring data, infographics, for communicating about data.
>	
>	Setting up data exploration tools happens before and while the data is being analysed and interpreted; setting up communications tools, after. 
>	
>	So, infographics are <em> usually </em> bespoke, because at the point they are made the nuances of the data are known, so complete customisation is possible. Visualisations are <em> usually </em> general purpose, because they are made before and while the nuances that would guide customisation are being discovered.
>	
>	But there are exceptions: for example, genetic and hospital  incidence data sets are analysed and visualised using custom tools that are quite heavily adapted to the nuances that it is known these types of data set <em> usually </em> have. There's a grey area between the two. 
>	
>	Many of the most popular online public-facing visualisations (e.g. ITOworld's traffic accident visualisations) are what you could call par-baked - they have been analysed up to the point of understanding the basic nuances and understanding how to get the most out of the visualisation by customising it. They are part customised, data-set <em> series </em> specific (you can whack next year's traffic accident data in and use it, but you can't stick, say, malaria stats in and get something useful), and about <em> guided exploration </em> rather than pure exploration (e.g. like Tableau), or communicating one set interpreted message which might not be true in next year's data, which is what infographics do.
>	
>	I don't normally get involved in discussions about definitions, but to assess modern data graphics I think it's really important to understand the continuum between data exploration and data-based communication, via guided exploration (visualisations with infographic elements) and communication that can be drilled down into (infographics with visualisation elements).
>	
>	Keep an eye out for the English translation of Alberto Cairo's <a href="http://www.amazon.es/Arte-funcional-infografia-visualizacion-informacion/dp/8498890675/ref=sr_1_1?ie=UTF8&amp;qid=1320254073&amp;sr=8-1" rel="nofollow">El Arte Funcional</a> which I hear is <a href="http://infographicsnews.blogspot.com/2011/12/functional-art-all-you-need-to-know.html" rel="nofollow">coming out this summer</a> - it does a better job than me looking into the different requirements of exploration and communication data graphics.

<a href="http://storiesthroughdata.blogs.lincoln.ac.uk" rel="nofollow noopener" target="_blank">Chris</a> says…
>	Hi Robert,
>	
>	This is a neat definition of differences that you've stated here. For me the essential difference comes down to variables in audience, motivation and context of use for any visualisation. As a designer researcher I am interested in what practitioners know or assume about those things and how this then impacts on their design methods and decision making.
>	
>	I've included an extract of your post in some thoughts on my blog – http://storiesthroughdata.blogs.lincoln.ac.uk/ – where your definition helps me to frame differences and to suggest that we need to accept and understand differences in audience, motivation and use context for visualisations in order to develop design methods that are better nuanced to them.
>	
>	Thanks for your post.
>	
>	Chris.

<a href="http://setup.nl" rel="nofollow noopener" target="_blank">Tijmen</a> says…
>	I always explain it as as the pyramid of knowledge:
>	
>	data -&gt; information -&gt; knowledge -&gt; wisdom
>	
>	See:
>	http://en.wikipedia.org/wiki/DIKW
>	
>	Data is raw, like a spreadsheet. But in spreadsheets is difficult to quickly spot anomalies or hotspots since there are few Gestalt cues. Visualising it in a way that quickly lets you find anomalies or hotspots is called datavisualisation. An example is Aaron Koblin's work Flightpatterns.
>	
>	The things you learn from that, like "ah, so there is an abnormally high concentration of CO2 emissions in the south of london" or "hey, unemployment numbers seem to be higher in the 60's than in the 70's" are information: higher level  knowing gleamed from distilled data. When visualised, they are called infographics. Newspapers like the Guardian have brilliant ones, often involving, arrows, different sized coloured blobs, etc.
>	
>	Knowledge, then, to me, is when you take this information and make inferrences from that, like "it would be wise to invest more energy in Southern london if we want polution levels to go down. It's actionable.
>	
>	Wisdom is when you have seen so much information and have so much knowledge that you can start to predict things, have a 'nose for trouble', etc. Because you have seen so much that you can start seeing meta-patterns.
>	
>	The last two are more my interpretation. But the difference between data and information, in my mind, is quite clear.

<a href="http://graphoftheweek.org/" rel="nofollow noopener" target="_blank">Patrick</a> says…
>	Excellent.  Clears up a bit of confusion in my head on the topic.  I guess I had always known that a good infographic had to be done by hand.

Jitendra Mishra says…
>	Robert
>	Great. Clears up the doubt that i had.

</aside>

