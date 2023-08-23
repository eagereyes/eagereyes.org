---
title: "Tableau Public"
description: "With all the data that is now available, more powerful tools are needed to make more sense of it. Tableau Public provides some of the most powerful visualization tools available today, and it's free to use with public data."
date: 2010-02-23 00:07:29
tags: 
featuredImage: https://media.eagereyes.org/media/2010/tableau-public.jpg
---

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

[[PostedBy]]

<aside class="comments">

---
## Comments

Jeff Weir says…
>	This is great for organisations that want to share <i> visualisations</i> of their data, but maybe not so great if they want to share the data itself. Viewers can download the data, but only in tableau's own .twbx format. So definitely strings attached,here.
>	
>	While viewers can install tableau public on their own machines, many might not want to or might not be allowed to by their IT gatekeepers. Even if you did download Tableau Public, I'm not sure if you can still get the info out into a CSV format or .xls. I’ll try it and see what happens.
>	Maybe some bright spark just needs to build an add-in that will allow Excel to read .twbx files?
>	

Anon says…
>	Great write up.  I'm not an avid reader of your blog, and noticed based on a side comment that you think it is a good thing that Tableu does not included choropleth maps.  I'm curious why you think so?  Feel free to point me to past posts you have written on this subject.  Thanks Again.

<a href="http://supportanalytics.com/blog" rel="nofollow noopener" target="_blank">Tony Rose</a> says…
>	Great review Robert!
>	
>	When I was going through the demo with Tableau prior to the release the first thing I pointed out was that I bet a lot of people are going to be bummed about the 100k rows of data limitation.  After talking with them about it, I understand why they have it.  They are providing a free product that is very similar to Tableau Desktop and don't want people to use the public version for commercial use.  Makes sense because they still want to sell the desktop versions.  
>	
>	I think it's genius because people are going to see the power of it and want the desktop version to keep their data and visualizations private.
>	
>	Depending on how it goes, I wouldn't be surprised to see them come out with different levels of service for a fee on the public version.  You want to load a file with 1M rows of data, upgrade to the premium version for $9.95/month.  I'm just speculating here.

Robert Kosara says…
>	Since this is for public data, you can always link to the original source. Sure, it would be nice to be able to have that link included directly in the visualization widget, but it doesn't strike me as a big issue.
>	
>	The local installation is a potential issue, but it's not an insurmountable problem. Also, you can get started working with it on your home machine and then pitch using Tableau Public to your organization. If an organization wants to use the power of the program, it will have to install it on its computers at some point.

Robert Kosara says…
>	This was meant as a placeholder for a link in the future. I'm working on a posting about maps, and how they misrepresent data sometimes. Stay tuned.

<a href="http://blog.migsite.com" rel="nofollow noopener" target="_blank">Michael W Cristiani</a> says…
>	@Robert,
>	
>	Great article, imho.  This effort will, perhaps already has, raise the level of awareness regarding best practices (read, don't hurt my brain, please) accessible visual data analysis.  Nothing but good can come of this development, I think.
>	
>	@Jeff
>	
>	Filter and select some data in Robert's example above.  Then, click the little table icon (leftmost icon below the viz). Follow instructions that appear, and you get .csv of the data behind the viz. 
>	
>	MANY BLESSINGS!
>	Peace and All Good!
>	Michael W Cristiani
>	Market Intelligence Group, LLC

Robert Kosara says…
>	Obviously, they're not in the business of providing free service to commercial users. And while there certainly are larger datasets, you probably won't need all that data in a small visualization on a website.
>	
>	I don't know, but I don't see Tableau doing something similar to Swivel where you can pay for larger data or having a private repository of data. Most businesses won't be interested in this anyway (they like keeping their data in-house), and it would cannibalize their main revenue source (software sales).

Jeff Weir says…
>	Ahhh....thanks Michael. 
>	
>	Just posted the below comment on the Contextures blog (excel), but thought it worth repeating here. 
>	
>	I’m finding that it's incredibly easy to upload data and to make up individual 'chart' sheets, and to share it. But I'm finding laying out a dashboard is incredibly frustrating. In excel, I'm used to sizing up any chart or table (or photo of a table using the photo/snapshot tool) exactly how I want it, but I'm unsure if you can do this to any major degree in Tableau. Anyone else finding the same with this?
>	
>	This could be because I don’t understand well enough the concept of 'layout containers'. These  containers create an area in the dashboard where objects can be grouped, and the objects automatically adjust their size and position based on the other objects in the container.
>	
>	According to the help menu “After you create a dashboard you can add sheets and other objects to the dashboard. One type of dashboard object is a layout container.”
>	
>	Saying “one type of a dashboard object is a layout container” implies that you can add a layout container if you wish, but you don’t have to. 
>	
>	But I find that if I start with a blank dashboard, and add the first sheet to it, then that sheet gets put automatically into a container. 
>	
>	When adding a 2nd sheet under the first, you get an incredibly weak and subtle clue as to whether it gets put into the same container of the first, or goes into its own container. So weak that I can’t even think how to describe it here. 
>	
>	Furthermore, if you have 2 containers side by side, one of them will automatically expand to fill any empty space. This is not what I want...I end up with a graph with just a few bars to be super wide...how ugly. I also see that you can't simply have a legend floating in a graph...its got to go in a box of its own, and you've got to fit that box around all the other things on the screen. Whereas with Excel you can just float the legend on some white space in the graph, or even better use say Jon Peltier's 'label last point' macro and do away with it altogether.
>	
>	So far, I'm both excited with this tool, and really really annoyed with it!!!
>	
>	Anyone have any tips, wisdom, thoughts to impart regarding this?
>	
>	Unfortunately, when I tried to post a question to the Tableau forum, I get the message "Sorry, unrecognized username or password". I don't think users of Tableau public can post to the forums, but I could be wrong here. 
>	

Andy Cotgreave says…
>	I don't agree about the row limits - some institutions do have large public datasets, and don't have the resources to host their own servers. For those institutions, larger datasets and larger file limits should be available. 
>	
>	I think Tableau Public is an incredible step forward, but right now my institution has some datasets with very few dimension, but 130,000 rows - right now we're scuppered. They would be fantastic on Public, but we can't take advantage of it right now. Hopefully Tableau will address this once they have assessed the scalability of their new service.

Jeff Weir says…
>	Update on my above comment:
>	
>	 I’ve since had an email from Dan Jewett, VP, Product Management who advised that on the containers issue,  when a sheet with quick filters or legends (size or color) on them are added to a dashboard, the quick filters and legends get automatically added to the dashboard as a starting point, inside  a vertical layout container, as most of the time folks want those to tuck up nicely to each other and be in a contained region off to the side of the main view.
>	
>	I advised Dan that I tried logging in the forums using my Tableau Public account to post a question on this, but couldn’t sign in. Dan advised that the forums user accounts aren’t linked to Tableau Public accounts yet; however, you just need to register for a forum account at http://www.tableausoftware.com/user/register.
>	
>	Dan’s the man! Excellent service, from a VP to boot.

<a href="http://www.oecd.org/statistics/factblog" rel="nofollow noopener" target="_blank">Jérôme Cukier</a> says…
>	first thanks Robert for the article. It's possible, however, to have more than 100k datapoints in tableau public. The limitation is on the number of records, ie combination of dimensions. But for one given record it's possible to have several measures.
>	back to your reaction Jeff, I felt the same: the intricacies of dashboard design are not as well documented and discussed than other aspects of Tableau. What happens when you drag blocks around is not always intuitive. I've used it for a while now but I'm not confident yet in my technique.
>	And it's difficult to finely control space between elements. That's probably for the best, though, because the dashboard will look different on different browsers or resolutions, so I guess one shouldn't overly rely on precise positioning. 
>	Then again, for more control, it's always possible to code from scratch :)
>	that being said, I really like the product and use it often. and the documentation will improve.
>	what I really like in the public aspect is the gallery. being able to check other people's work is a great way to learn.

Texara says…
>	we are looking for tableau resources at Bay Area, CA, USA
>	--  texara.bigdata@gmail.com

</aside>

