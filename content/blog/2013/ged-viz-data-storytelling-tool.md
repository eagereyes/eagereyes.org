# GED Viz, A Data Storytelling Tool

I had the honor and pleasure to keynote an event in Berlin recently that introduced a new visualization tool to the world, [GED Viz](http://viz.ged-project.de). What makes it stand out from other web-based visualization tools is its focus on particular data, and the ability to create not just individual views, but little stories.

[*GED* stands for Global Economic Dynamics](http://www.ged-project.de/home/), which explains where the motivation for the project actually came from: the need to show the underlying data when explaining global relationships based on the movement of goods, money, and people between countries.

<figure><img src="https://media.eagereyes.org/wp-content/uploads/2013/07/ged-viz.png" alt="GED Viz" width="600" height="450"/></figure>

The visualization is essentially a [chord diagram](http://bl.ocks.org/mbostock/4062006), showing the countries around a circle and connecting them with bands through the center. When creating a visualization, the user can pick from a list of countries and groups of countries (like the OECD), as well as a variety of metrics to show.

What interests me about the project more than the basic visualization is the ability to create little slideshows, or stories. These can be embedded in web sites, like in this [story on China and India](http://www.ged-project.de/viz/articles/china-and-india-global-economic-axis-of-the-future/) (as well as below, unless you read this in a newsreader). You can click through the steps, mouse over the dots to see thumbnails, and mouse over the main view to see numbers.

<iframe src="http://viz.ged-project.de/123?lang=en" width="600" height="450" style="border: 1px solid #eee" mozallowfullscreen="true" webkitallowfullscreen="true" allowfullscreen="true">[GED VIZ Slideshow](http://viz.ged-project.de/123?lang=en)</iframe>

When you [open that slideshow in edit mode](http://viz.ged-project.de/edit/123?lang=en) (by clicking in the lower right), you can create new slides and delete or rearrange existing ones. Slides have captions too, which are shown in the upper left. Slide transitions are animated if possible, which makes sense when switching the same view between different years, for example, and make the addition or removal of countries easier to follow.

GED Viz is limited in its data and the kind of visualization it provides, but it is the first tool of its kind that I am aware of. The ability to create little stories is unique, and it is implemented quite well here. It will be interesting to see what people create with it.

---

The project was funded and run by the Bertelsmann Foundation, led by Jan Arpe and designed by [Boris Müller](http://www.esono.com) of the University of Applied Sciences Potsdam (who some long-time readers of this blog may remember from the [*Poetry in Motion* controversy](/blog/2006/visual-mapping-of-poetry-html)). Thanks to [Moritz Stefaner](http://stefaner.eu) for making the connection. [The GED Viz source code is available on github](https://github.com/bertelsmannstift/GED-VIZ).
