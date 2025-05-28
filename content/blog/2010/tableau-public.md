<p align="center"><img src="https://media.eagereyes.org/media/2010/tableau-public.jpg" width="560" height="200" alt="Tableau Public Teaser" /></p>

# Tableau Public

With all the data that is now available, more powerful tools are needed to make more sense of it. <a href="http://www.tableausoftware.com/public/">Tableau Public</a> provides some of the most powerful visualization tools available today, and it's free to use with public data.
<!--break-->

## It's Not Tableau-As-A-Service

Tableau's approach to data visualization on the web is unique in its technical implementation. Rather than offering a web-based client (which would be quite a challenge), they provide a free, downloadable version (Windows only) of their desktop software with some limitations. This means that you are working with full-blown Tableau on your own machine, providing fast interaction and tons of features.

There are some more limitations in this version of Tableau, but they make sense in the context of the uses that Tableau Public is meant for. The program only talks to Tableau's servers, storing the data on what Tableau calls the "public web" (as opposed to an intranet, presumably) for the world to see. You can only import from CSV/TSV, Access, or Excel files, and data size is limited to 100,000 data points. The latter is a bit of a bummer, because you might want to use Tableau to filter the data before showing less than 100k items. But it's not a huge limitation, and a lot of public datasets are well below this number of records. Your storage on Tableau's servers is also limited to 50MB, so it makes sense to filter your data before importing it.

In addition to providing a desktop client, Tableau also has a different approach to how it provides the visualization in the browser. The client side is done in pure JavaScript, and it essentially acts like a dumb terminal for the Tableau servers, which are doing all the rendering remotely. The browser sends user interactions to the server, which respond by sending images back. This leads to very low requirements on the client side (and it works almost everywhere), but it relies on Tableau's server infrastructure to scale with demand for its visualizations.

## The Tableau Way of Visualizing Data

For people used to Excel and most other tools that can create charts and visualizations, working with Tableau means letting go of some habits. Tableau knows the type of your data, and it uses that knowledge to construct what it considers the best views. In fact, perhaps the most effective use of Tableau is selecting a few dimensions of interest and hitting the <em>Show Me!</em> button. The program then offers a few alternatives, each of which is going to be a good representation of the data.

For people used to picking the type of chart first, this comes as a bit of a shock. But once you get used to it, it's a very efficient way of working. The focus is on analyzing data, rather than constructing the perfect view by hand. The visualization becomes a means to an end, not the end in itself.

If you have a very specific idea what the view should look like, this can be frustrating. But with a bit of practice, it is usually possible to make Tableau create a good approximation of that. For full creative control, you should look at <a href="http://protovis.org/">Protovis</a> or something similar, though.

In addition to bar and line charts, scatterplots, bullet graphs, and variations of those, Tableau can create small multiples plots and some of the best maps you will find anywhere (and, fortunately, no choropleth maps). Using sheet links, views can talk to each other, which is especially useful for dashboards (which collect views from several sheets). With the addition of highly configurable filters, it is possible to construct complex, interactive visualizations.


## Compared To …

The great strength of Tableau Public when compared to Many Eyes and others is its ability to create visualizations consisting of multiple, linked views (which they call <em>dashboards</em>). This makes it possible to link different views (like maps, etc.) together and letting the user pick subsets of the data she is interested in. Tableau has very powerful tools for filtering and selecting data that provide quite a bit of flexibility in creating very effective views of the data.

Almost all visualization-as-a-service websites also require the user to pick the visualization first, rather than being able to suggest it based on the data selection. Like with Excel, this leads to many terrible choices that do not fit the data well. People who are willing to accept Tableau's help will end up creating much more useful and better-designed visualizations.

Compared with JavaScript visualization libraries like Protovis, Tableau Public of course is much easier to use without the need for programming. There are some drawbacks, however. Protovis does not rely on a third party to host the data and does not slow down if there is a lot of traffic (since it all happens inside the browser). There are also things that cannot be done in Tableau, like completely custom views and access to real-time data. But Tableau Public does work with reasonably large datasets that might be challenging (and slow) to visualize directly in the browser.

## Marketing

All the features and talk about public data aside, this is a genius marketing move for Tableau. While it's probably the biggest success story in visualization, it is still rather obscure by the standards of Excel et al. Getting an unlimited free trial into the hands of thousands of people will raise awareness among people who are interested in analyzing data, while at the same time training them in its use.

Investing in the development, server space, etc., should pay off for Tableau in terms of sales, but also for all of us in terms of getting a seriously powerful visualization tool out into the world for everybody to use.
