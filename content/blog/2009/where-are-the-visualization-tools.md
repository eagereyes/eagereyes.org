<p align="center"><img src="https://media.eagereyes.org/media/2009/toolbox.jpg" border="0" alt="Toolbox" width="568" height="375" /></p>

# Where are the Visualization Tools?

I got several requests in the last few days about tools for doing visualization and visual analytics. Looking around, I don't see a lot of good, affordable (or free) visualization software. There are lots of papers, but few of those programs are available. And those that are often are of very low quality, very limited in their functionality, and are not being maintained. Please help me collect links to visualization tools that let people with data experience that visualization magic.

There is a demand for visualization software; I was reminded of this when the <a href="/blog/2009/a-spike-of-interest-in-parallel-sets">Parallel Sets were mentioned on a BBC website</a> without even a link, and I kept (and keep) getting emails from people wanting to try it out. We're still working on releasing the program by the end of the month, and things are looking good so far.

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
