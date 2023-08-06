---
title: "Where are the Visualization Tools?"
description: "I got several requests in the last few days about tools for doing visualization and visual analytics. Looking around, I don't see a lot of good, affordable (or free) visualization software. There are lots of papers, but few of those programs are available. And those that are often are of very low quality, very limited in their functionality, and are not being maintained. Please help me collect links to visualization tools that let people with data experience that visualization magic."
date: 2009-04-09 23:20:47
tags: 
featuredImage: https://media.eagereyes.org/media/2009/toolbox.jpg
outline: false
---

<p align="center"><img src="https://media.eagereyes.org/media/2009/toolbox.jpg" border="0" alt="Toolbox" width="568" height="375" /></p>

# Where are the Visualization Tools?

I got several requests in the last few days about tools for doing visualization and visual analytics. Looking around, I don't see a lot of good, affordable (or free) visualization software. There are lots of papers, but few of those programs are available. And those that are often are of very low quality, very limited in their functionality, and are not being maintained. Please help me collect links to visualization tools that let people with data experience that visualization magic.

There is a demand for visualization software; I was reminded of this when the <a href="http://eagereyes.org/blog/2009/a-spike-of-interest-in-parallel-sets.html">Parallel Sets were mentioned on a BBC website</a> without even a link, and I kept (and keep) getting emails from people wanting to try it out. We're still working on releasing the program by the end of the month, and things are looking good so far.

One commercial program that comes to mind, of course, is <a href="http://www.tableausoftware.com/">Tableau</a>. I use the program in my Visual Analytics course, and I'm amazed at what my students are able to do with it. It is also a beautiful example of a commercial product that is strongly based on academic research, and where the company stays tightly in touch with the research community. While there is no doubt about its quality and usefulness, its cost makes it less of an option for a lot of people (especially academic users).

What comes closest to Tableau in terms of free software is Chris Weaver's <a href="http://www.personal.psu.edu/cew15/improvise/index.html">Improvise</a>. I have to admit to not having tried it out myself yet, but his <a href="http://www.personal.psu.edu/cew15/improvise/examples.html">list of examples</a> is very impressive. Chris warns that it is research-grade software with known bugs, but I know Chris uses it himself a lot, so it probably is rather useable.

Here are some smaller programs, all incidentally written in Java:

<ul>
<li><a href="http://theusrus.de/Mondrian/index.html">Mondrian</a>. Includes parallel coordinates, mosaic plots, bar charts, scatterplot, scatterplot matrix, and a few more. I find it hard to use, but I've seen its creator, Martin Theus, do magic with it.</li>
<li><a href="http://home.subnet.at/flo/mv/parvis/">ParVis</a>. Perhaps the best implementation of parallel coordinates. Allows easy reordering of dimensions, inversion, etc., and does anti-aliased rendering in the background.</li>
<li><a href="http://www.cs.umd.edu/hcil/spacetree/">SpaceTree</a>. Interactive tree visualization. One of the most refined programs out there, and a great visualization technique at that.</li>
<li><a href="http://www.randelshofer.ch/treeviz/index.html">TreeViz</a>. More tree visualizations, includes techniques like icicle plots, treemaps, hyperbolic trees, sunburst, etc. I use this for demos in class, and it's a good program to have around to try things out.</li>
</ul>
There are also toolkits for rolling your own, like Jeff Heer's <a href="http://prefuse.org/">prefuse</a> (for Java) and <a href="http://flare.prefuse.org/">flare</a> (for Flash/Flex) toolkits. Prefuse is great, but severely lacking good documentation. There is some sample code, and you can read the papers, but more documentation would make prefuse so much more useful. There are others, but those that I know haven't been maintained in many years, so it makes little sense to build new programs on them.

<a href="http://services.alphaworks.ibm.com/manyeyes/">Many Eyes</a> and <a href="http://www.swivel.com/">Swivel</a> are there as well of course, though the fact that uploaded data becomes public (except for Swivel's new business edition) makes them less appealing. Especially when the data is proprietary or unpublished, and you want to figure out if this visualization thing is of any use to you, you probably won't want to take that risk. Many Eyes's <a href="http://manyeyes.alphaworks.ibm.com/manyeyes/page/Visualization_Options.html">variety of visualization techniques</a> is great to get an idea for what is potentially available, though.

What else is there? Please post your suggestions below, for free or commercial software. I will put together a page with all the programs, and provide some classification to make it easier for people to decide what to look at. I am temporarily lifting the ban on posting links for people who have not signed up for usernames (which I had to do because of the amount of spam I was getting). I will closely monitor this though, and I will delete spam links.


_Posted by <a href="/about">Robert Kosara</a> on April 09, 2009_


<aside class="comments">

---
## Comments

<a href="http://www.juiceanalytics.com" rel="nofollow noopener" target="_blank">Zach</a> says…
>	<p>The JuiceKit (www.juicekit.org) is an open-source Software Development Kit for building&nbsp; graphically rich and interactive information displays. The JuiceKit integrates with Adobe Flex<a class="externalLink" href="http://www.adobe.com/products/flex/"></a> to create components that are easy to implement and aesthetically pleasing. Components of the JuiceKit include controls, visualizations, and utility classes.</p>

<a href="http://www.nbr-graphs.com" rel="nofollow noopener" target="_blank">Naomi B. Robbins</a> says…
>	<p>R, open-source software available from www.r-project.org, is considered by many to have the best visualization tools of any statistical software.</p>

<a href="http://joemako.com" rel="nofollow noopener" target="_blank">Joe Mako</a> says…
>	<p>Some BI solutions I've recently looked at:</p>
>	<ul>
>	<li><a href="http://www.jaspersoft.com/">Jaspersoft</a></li>
>	<li><a href="http://www.qlikview.com/">QlikView</a></li>
>	<li><a href="http://www.logixml.com/">LogiXML</a></li>
>	<li><a href="http://www.quantrix.com/">Quantrix</a></li>
>	<li><a href="http://www.lyzasoft.com/">Lyza</a></li>
>	<li><a href="http://www.xactlycorp.com/">Xactly</a></li>
>	<li><a href="http://www.pivotlink.com/">pivotlink</a></li>
>	<li><a href="http://www.inforsense.com/">Inforsense</a></li>
>	</ul>
>	<p>My personal choice is <a href="http://www.tableausoftware.com/">Tableau</a>, it is a joy to use.</p>

Anonymous says…
>	<p>You forgot Spotfire!</p>

<a href="http://www.matthewcornell.org/" rel="nofollow noopener" target="_blank">Matthew Cornell</a> says…
>	<p>Esp. network visualization tools. Performance is a problem, of course, so being smart about filtering using domain knowledge is crucial. Not in programming anymore, so it's not as much a thorn in the side :-)</p>

<a href="http://www.thoka.net" rel="nofollow noopener" target="_blank">Thok</a> says…
>	<p>http://www.pygame.org/</p>

Robert Kosara says…
>	<p>This wasn't meant to be an exhaustive list, just to get you guys started. Keep it coming!</p>

Tin Seong KAM says…
>	<p>I use Tableau too. If you like Tableau, you might want to take a look at <a href="http://www.panopticon.com/">Panopticon</a>, especially TreeMap and Horizon Graph.</p>
>	<p>For the Open Source I would like to recommend <a href="http://www.geovistastudio.psu.edu/jsp/index.jsp">GeoVista Studio</a>&nbsp;and <a href="http://vita.itn.liu.se/pub/jsp/polopoly.jsp?d=13602&amp;l=en">GAV</a>.&nbsp; Both of them also provide interactive map visualisation.&nbsp; My students were able to design and implement very effective visualisation application for regional development study.</p>

<a href="http://www.theusRus.de" rel="nofollow noopener" target="_blank">Martin Theus</a> says…
>	<p>
>	<p style="margin: 0.0px 0.0px 10.0px 0.0px; font: 10.0px Verdana;">Many of the tools mentioned so far compare like apples and oranges. There is a big difference for the actual user of visualization tools between tools that are ready to use and solutions that have to be build upon toolboxes.&nbsp;</p>
>	<p style="margin: 0.0px 0.0px 10.0px 0.0px; font: 10.0px Verdana;">That takes me to a - what I think - very important point: <strong>The user's view</strong>. Most users of visualizations won't have the skills (or patience) to build customized visualizations out of toolboxes. No doubt, the examples Chris' built with Improvize are impressive and the wealth of interaction options we can choose from is huge.&nbsp;But when we sat down over a beer at a workshop evening to look at a new dataset, we didn't actually get far even after an hour - and this was not a tribute to the beer! Things get probably even harder when we would use prefuse and need to write JAVA code.</p>
>	<p style="margin: 0.0px 0.0px 10.0px 0.0px; font: 10.0px Verdana;">Another point is the distinction between general purpose tools (that try to cover as many data problems as possible) and special purpose tools which "only" support a very narrow range of data problems (but these in the most optimal way).</p>
>	<p style="margin: 0.0px 0.0px 10.0px 0.0px; font: 10.0px Verdana;">Maybe the two above mentioned points are good dimensions along which we can classify the tools listed here.</p>
>	<p style="margin: 0.0px 0.0px 10.0px 0.0px; font: 10.0px Verdana; min-height: 12.0px;">As a statistician, I would throw in two more tools:</p>
>	<p style="margin: 0.0px 0.0px 10.0px 0.0px; font: 10.0px Verdana;">
>	<ul>
>	<li><a href="http://www.datadesk.com/">DataDesk</a> (The "mother" of all interactive statistical graphics)</li>
>	<li><a href="http://www.ggobi.org">ggobi</a> (a tool that is specialized in high-dimensional continuous data)</li>
>	</ul>
>	</p>
>	<div><br /></div>
>	</p>

<a href="http://www.ghostweather.com" rel="nofollow noopener" target="_blank">Lynn Cherny</a> says…
>	<p>Also for the stats-minded, you may want to include SciLab, which is open-source.</p>
>	<p>http://www.scilab.org/platform/</p>
>	<p>I agree with Martin's comment above - there is an enormous overhead to using something like Prefuse (or Flare).&nbsp; Even Processing, written for the programmer novices, has quite the heavy learning curve to start with for data work, as Ben Fry's O'Reilly infovis book on Processing illustrates.&nbsp;</p>
>	<p>Regardless: http://www.processing.org/</p>
>	<p>But while we're on the subject of programming things yourself, Nodebox looks nice to me, although it is Mac OSX only and I haven't played with it yet.&nbsp; Processing, R, and Nodebox have less overheard than writing java does, for the novice programmer like me.</p>
>	<p>http://nodebox.net/code/index.php/Home</p>

Robert Kosara says…
>	<p>You're right, I only realized that when people started posting links to Business Intelligence suites. I was thinking more of fairly small programs that you could run on some files you have lying around, not the db-centric, data warehouse kinds of things (though I realize that tools like Tableau can do both).</p>
>	<p>But there's a place for both, obviously. I'm trying to figure out a good way to structure such a list, so that people will find the things that make sense for them. It clearly doesn't hurt to have a place where you can find a hammer just as well as some heavy-duty power tools (which you might not even want to buy, but rather rent; yeah, maybe I'm taking the metaphor too far).</p>

<a href="http://charts.jorgecamoes.com" rel="nofollow noopener" target="_blank">Jorge Camoes</a> says…
>	<p>Ben Shneiderman (http://www.cs.umd.edu/~ben/) links to several visualization tools, including the sonification of maps - this may interest you, now that you are interested musical structures :)</p>
>	<p>A visualization tools Hall of Shame would be interesting too.</p>
>	<p>Also some plugins for "He-Who-Must-Not-Be-Named". like SigmaPlot.</p>

<a href="http://charts.jorgecamoes.com" rel="nofollow noopener" target="_blank">Jorge Camoes</a> says…
>	Hans Rosling's Trendalyzer and its (very) light Google Charts version.

<a href="http://cs.indiana.edu/~jcottam/" rel="nofollow noopener" target="_blank">Joseph Cottam</a> says…
>	<p>Two programming focused tools that came to my mind are:</p>
>	<p><a href="https://www.kitware.com/InfovisWiki/index.php/Main_Page">Titan</a>: VTK does infovis, the OverView tool provides a UI but there is an API as well.&nbsp; I know it is built in C++, but Kitware provides VTK bindings for several languages and perhaps they will do the same for Titan soon.</p>
>	<p><a href="http://cs.indiana.edu/~jcottam/stencil.xml">Stencil</a>: My own research project, so take my comments with a bag of salt.&nbsp; A programming language targeted at visualization creataion.&nbsp; It is still a prototype, but it has been used in a few projects that are not my own.</p>

Anonymous says…
>	Just stumbled across this blog, and this is an old topic, so maybe no one's listening...
>	
>	R is great for visualization.  Once you learn the language and learn, for example, how to use the lattice package (this takes some time, but is very powerful once you know what you are doing), you are able to very quickly and powerfully create any kind of plot you can imagine.  If you're not willing to learn all that, I'm sure there are plenty of other very useful more wysiwyg-type programs out there. 
>	
>	Another very strong plus for R is that usually you can get a lot more out of your data visually by doing something with it (such as transforming, modeling, etc).  I can't think of a better package that gives you complete freedom and many tools to work with the data and visualize it at the same time.

<a href="http://www.theusRus.de" rel="nofollow noopener" target="_blank">Martin Theus</a> says…
>	... I agree that R is a wonderful tool, but we are talking about visualizations which benefit strongly from interaction and animation here. None of the R packages has anything to offer on that part (less a fault of the packages, but more a problem of R's rendering machine ...)

timvangelder says…
>	<p>People interested in data visualization tend to think that or at least act as if visualization is all about data.&nbsp; But the power of visualization can be applied to complex information structures other than "data" structures.&nbsp; For example <a href="http://bcisive.austhink.com">bCisive</a> and <a href="http://rationale.austhink.com">Rationale</a> are tools for visualising argumentation structures, and there are many other argument mapping software packages.&nbsp; Of a more general nature is mind mapping, and the plethora of mind-mapping packages.&nbsp;</p>
>	<p>Such tools tend to use hierarchical or "tree" structures (though both bCisive and Rationale are based on the idea that argumentation needs "hi-tree" structures (a special case of higraphs for tree-like structures).&nbsp; However there is nothing intrinsic in argumentation requiring restriction to tree or hi-tree structures; these are design choices made for many reasons, including UI-design reasons.&nbsp;</p>

<a href="http://aes.ac.in" rel="nofollow noopener" target="_blank">Warren Apel</a> says…
>	<p>TinkerPlots doesn't do stunning publishable visualizations, but it is great for playing with data and figuring out how best to arrange and display it.&nbsp;</p>
>	<p>I also really like the Box Charter plugin for Excel.&nbsp; If you've tried to build a box-and-whisker the Excel way - with error bars or box.gif image fills in a stacked bar graph - the free Add-in is totally worth the effort to install.</p>

<a href="http://www.novonon.com" rel="nofollow noopener" target="_blank">Egg Davis</a> says…
>	<p>Any opinions on the InfoVis Toolkit? It looks promising (and looks like one of the only open-source frameworks to support parallel coordinates) but doesn't seem to have been developed in several years, and I find that (even once I correct directory structures and so on) many of the example files don't even run (is this just my experience or is it true for other people as well?)</p>
>	<p>I've worked almost entirely in Processing for years, but I'm leaning toward a move to Flex with Flare -- like it or not, Flash seems to have won the web deployment wars, and Flex is a big step forward in developing for Flash from a programmer's perspective...and I have to say, with just a couple of days' experience, Flex Builder seems like a real pleasure to use.</p>

Robert Kosara says…
>	<p>I haven't seen any activity in the InfoVis Toolkit in many years, I assume it's abandoned.</p>
>	<p>I haven't gotten the hang of Flash, and I really like the language features in Java. Java also makes it easier to create an actual application that looks and feels like a native program. For purely web-based stuff, Flash is probably the better choice, though.</p>

<a href="http://www.novonon.com" rel="nofollow noopener" target="_blank">Egg Davis</a> says…
>	<p>Oh, I agree entirely -- ActionScript has always felt really kludgy to me, kind of conceptually incoherent. Flex is a big improvement, but AS would *never* be my language of choice. I'm turning to it only because of the deployment issue (and, I'll confess, because Flare's rather sexy).</p>

<a href="https://milesaheadedu.in" rel="nofollow noopener" target="_blank">Raghu</a> says…
>	its (very) light Google Charts version.

</aside>

