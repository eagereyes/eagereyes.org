---
title: "Data Display vs. Data Visualization"
description: "Gregor Aisch recently wrote a posting about gauges, and how he finds them inspiring and beautiful in their simplicity, even though they are generally disliked in visualization. His posting highlights a common misconception about visualization, and a conflation of different uses of data display, that is worth exploring."
date: 2012-07-15 20:30:20
tags: criticism
featuredImage: https://media.eagereyes.org/wp-content/uploads/2012/07/Tachometer_2011_honda_civic.jpg
---

# Data Display vs. Data Visualization

Gregor Aisch recently <a href="http://vis4.net/blog/posts/lets-break-the-rules/">wrote a posting about gauges</a>, and how he finds them inspiring and beautiful in their simplicity, even though they are generally disliked in visualization. His posting highlights a common misconception about visualization, and a conflation of different uses of data display, that is worth exploring.

Gregor takes issue with <a href="http://www.excelcharts.com/blog/thats-data-visualization/">the notion that visualization requires a certain number of data points to be displayed</a>. He also considers “breaking those rules” by showing just a single data point in a chart.

## Data Display

Let’s take a step back and look at what a speed gauge in a car does, how it works, and how it is used.

<p align="center"><img class="aligncenter size-full wp-image-1990" title="Tachometer_2011_honda_civic" src="https://media.eagereyes.org/wp-content/uploads/2012/07/Tachometer_2011_honda_civic.jpg" alt="" width="573" height="383" /></p>

A gauge consists of a scale with tick marks and numbers, and a pointer needle that points to a value on that scale. When the value changes, perhaps because the car accelerates, the change is reflected immediately.

Pointing to a value rather than showing it directly as a number has a lot of advantages. For one, you can use the same mechanical design to show speed, RPM, temperature, etc., simply by wiring it up differently and using a different scale. You can also read the value very easily, especially if you have a scale that has markings to indicate critical values (such as maximum speeds).

Some cars have direct numerical displays for speed, and those are much harder to read. In fact, all cars I’ve seen so far with such a display also have some kind of bar display in addition that also shows the speed (though with much less precision). The reason is that it takes a lot more work to read numbers than to watch a needle point, especially when it changes. Gauging acceleration or deceleration is incredibly difficult with a quickly changing numerical display, but very straight-forward with a gauge.

## Tasks

The reason gauges work well in cars is because driving is all about current conditions. What you want to know is, how fast am I going right now? How much gas do I have left? What your speed was five minutes ago, or how much gas you had in your tank three hours ago, matters little.

The task to be accomplished in driving is simple: change or maintain your speed. That might involve use of the accelerator, brake, gear shift, or whatever, but the initial decision is a simple one: am I going too fast, too slow, or am I at about the right speed? That’s it. Current information, quick action, immediate feedback.

A gauge shows one, current, value. That’s what it is good at. Showing more would be possible, of course, but also irrelevant and distracting. In fact, boiling down the amount of information to just what you need is one of the great achievements of car dashboards. There are hundreds of sensors in a modern car, many of which measure values hundreds or thousands of times each second. There is no point in even attempting to show the driver all that information. The only time when the car should show more is when things go wrong. As long as everything is working properly, the driver only needs a small number of current values.

## Data Visualization

The case is very different in data visualization. You can split hairs over how many data points you need, but the difference is a qualitative one: visualization shows a lot more data, usually including a lot of history (if there is a time axis), and sometimes even the future (i.e., forecasts). The tasks that a visualization serves are very different, because they typically are much more complex and not simple comparisons of whether a value is too hight or too low. Analysis often requires finding more data, trying out many different views, etc. None of these tasks are comparable to driving a car.

There is, of course, the possibility of realtime data visualization, where history does matter, and where complex data might be shown that is changing at a high rate. But that task is even less similar to driving, which is a largely intuitive activity. When large amounts of real-time data are necessary for decisions, the decision-making is also much more complex.

## Gauges in Data Visualization

Gauges are a common technique used in some areas of visualization, in particular as part of business intelligence (BI) tools, and in particular <em>dashboards</em>. They are generally ridiculed and criticized when they are used for data displays in business contexts (Stephen Few is <a href="http://www.perceptualedge.com/blog/?p=102">a particularly vocal critic</a>).

In data visualization, gauges simply solve the wrong problem. Business decisions cannot be made only on the current value of some measure, but need history and context. Values also typically do not change as fast, nor are as directly coupled, as the amount of pressure on the accelerator and the car’s speed.

Gauges are also a poor choice because they use up a lot of space that could be used to display more data. In the car case, more data would be an impediment to quick perception and decision-making, but in visualization, more data is generally better.

Many BI tools use gauges not because they are effective, but because they look good and can be styled to be pretty and realistic-looking (much like 3D pie charts). Of course, none of that adds any actual functionality. The term <em>dashboard</em> is also unfortunate, because it reinforces the wrong metaphor. Most uses of BI tools are way more complex than driving a car, so the control rooms of NASA mission control or a nuclear power plant (think tons of blinking lights, rows and rows of screens, huge projection screens on the walls, etc.) would be much more accurate.

Dashboards have their uses as predefined data presentations where somebody put a lot of work into teasing apart the key pieces of information to show and how to present them. In all but the most trivial cases, though, gauges are still not going to be a good choice on a data visualization dashboard.

## Conclusion

The reason gauges are a bad idea in visualization is not because of some “rule” that dictates the minimum amount of data necessary for visualization, but because their strengths do not match the task. They work very well where the two do match, like in a car. But in tasks other than real-time control of a simple and predictable process, they are the wrong choice.


<PostedBy />


<aside class="comments">

---
## Comments

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

</aside>

