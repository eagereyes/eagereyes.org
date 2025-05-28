James M. Ward says…
>	Interesting article, well-stated overall. An interesting case study type of counterpoint would be to give yourself (or classroom of data vis students) a project requiring them to design a single guage that used as much data as it could to help someone make the judgements they need to make on a routine basis. I don't argue the point that data display and data visualization serve different purposes. But in general, data vis is used to convey something relatively new, often in minimg or discovery, but certainly with the goal of portraying context along with the data. The goal is often not to convey a single point but to allow the viewer to explore muliple points and make his or her own conclusions about what are the most important messages. This may be great, except for when you do actually need to make a decision. Decision-making, in contrast, is best done with clearly defined metrics and definitions. Not always possible, but the clearest decisions, like "am I driving too fast and should I slow down?" are extremely well-defined. I argue that the more clearly defined the decision-point, the more likely a guage would be practical and perhaps preferable. I bet even stock prices could be well-summarized into a guage, if you had a few decision-driven metrics to use, like "price dropping too fast today, trending over the past month, way over-valued, etc." Someone creative could design a guage like a speedometer which had tick marks in appropriate places, a red zone above/below which danger is eminent, and perhaps where the scale reflected relative change per day. Point is, someone overseeing several stocks may actually have an easier time scanning an actual dashboard than 20 scatter plots. But all that said, my inclination is you're right about whej to use data vis vs display, but after reading your post I wondered what the smartest minds could devise if they *had* to use guages. And then it occurred to me that decisions are fairly tough with many of the coolest visualizations, perhaps in part because that's not their true role.

Andrew Marritt says…
>	Another reason why gauges are so useful in a car is that they are very easy to read approximately and quickly in peripheral vision, again a function not need on business dashboards.

<a href="http://pentahohispano.blogspot.com" rel="nofollow noopener" target="_blank">Juanjo Ortilles</a> says…
>	Gauges are  usually my nightmare. Customers use to want them because they looks amazing, they have the feeling they are driving a ferrari or somethiing like that.  
>	I always have to  try to convince them they are not the proper option and .... sometimes they agree sometimes they still want the gauge (and if its possible with a Ferrari logo)
>	Thanks for the post.

<a href="http://vis4.net/blog/" rel="nofollow noopener" target="_blank">Gregor</a> says…
>	Could it be that you don't like gauge charts because your cars speedometer doesn't have this nice non-continuous scale? ;)

<a href="http://www.paulvanslembrouck.com" rel="nofollow noopener" target="_blank">paul van slembrouck</a> says…
>	Robert, that's a photo of a tachometer, not a speedometer :D
>	
>	Gregor's post inspired my own reflection, more in the direction of how did we end up with the dial, why is it useful in that particular application, and what might we do in the future now that we're no longer mechanically attached to the radial layout.
>	
>	http://www.paulvanslembrouck.com/2012/speedometer-design-that-thing-in-your-car/
>	
>	Best,
>	Paul

Lauren says…
>	State transportation agencies seem to be particularly drawn to speedometer- or tachometer-type gauges in a dashboard, especially a standardized one showing green/yellow/red zones. Alas, such gauges are pretty unhelpful when it comes to displaying information such as the number of traffic deaths year-to-date: in most states, the only acceptable "green zone" is zero fatalities, but having any green zone suggests there's an acceptable number of deaths before you hit yellow or red. It is also hard to show on-budget project delivery with such a gauge. Yes, being in the green under-budget zone is good, but is "on budget" in the yellow zone? Project estimators who want project delivery to be within +/- 10% of their estimate wouldn't thank you for designing such a gauge.

Erik says…
>	Nice, succinct post. I think business dashboards, and dare I say it, most long-established business intelligence products have long lost the allure of the "strategic, snapshot view of the entire enterprise" they originally promised in assisting tactical decision-making and strategic management efforts. 
>	
>	Without context, users need to do a lot more work to collate relevant environmental indicators together to pull some useful information out of the data, to form a more holistic view of their current position (and where to go from there, of course). 
>	
>	I would like to think that lower-middle management can possibly still use some of these tools for their operational decisions, but they probably have - and have had, for decades - better tools for that anyway.

Mac says…
>	we are in a new area my friend where the impossible is possible and simple minded end users controls global economy, what is it about facebook, what is it about ignoring normalization forms in fully utilize denormalized databases why NoSQL is replacing SQL with web technology, with down economics end users do not wanna here "no , we can't do it" visualization is sometimes about exciting audience or useless board members who would vote based on entertainment, the goal is not the traditional one, if competitors are donning it and you are not , you will die "economically" very soon,

<a href="http://www.facebook.com/profile.php?id=100003407033255" rel="nofollow noopener" target="_blank">Harja</a> says…
>	i wanted to post a reply I made reaindgrg an email question on this post:Question: On #3, could you provide some more cons to reporting against a transactional database?Reply:Good question, there are a few reasons why it's not optimal to report against a transactional database:1.A big reason is performance – reporting uses a lot of memory and CPU, especially, reports that use data cubes or mdx queries.2.Data locks can happen more frequently, when someone is adding data while someone is trying to report against it.3.Database designs for reporting are usually different than that for transaction databases. Transactional database should be normalized, with primary and foreign key relationships to ensure the data integrity and to eliminate duplicate or orphaned records. Reporting data structures are usually not normalized, or flat. Using a star database design, or a “table for each major reporting area” is typical for speed on the queries. Also, the indexes many times would be different. Databases for your applications are usually OLTP (On-Line Transaction Processing) and optimized to store data. Reporting databases are usually OLAP (On-Line Analytic Processing) optimized to retrieve data.4.Also, consider scalability if your reporting against your transactional database. How will it perform in a year from now with growth, more data, more reporting requirements, etc.?

Ali Haider says…
>	I don't agreed that Gauges are poor tool in Data Visualization, right now gauges are visualizing data in several BI applications effectively, and having range feature in gauge one cane easily compare records
>	Regards!
