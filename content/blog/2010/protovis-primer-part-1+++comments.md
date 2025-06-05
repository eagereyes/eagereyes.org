<a href="http://thejit.org" rel="nofollow noopener" target="_blank">Nicolas</a> says…
>	Nice Review! I've just seen they released a new version with new cool visualizations that looks really nice.
>	
>	BTW, I thought they didn't support IE because they used SVG and not Canvas. Actually even though IE does not support Canvas you can use ExCanvas to make it work, like with my toolkit (that does support IE): http://thejit.org . 
>	
>	There's an SVG like language in IE called VML, libraries like RaphaelJS add simple geometric primitives that translate into VML and SVG, Protovis could use that also to add support for IE.
>	
>	In regard with performance and readability, I don't really understand what all these functions calls is about. I don't want to be too negative but it'd seem that they're using the functional paradigm to do declarative suff. Why not just pass an object? It would save all function calls and would be more readable too:
>	
>	<code>
>	new pv.Panel({<br>
>	  width: bla,<br>
>	  height: bla,<br>
>	  left: bla,<br>
>	  data: []<br>
>	});
>	</code>
>	
>	Anyway, nice review.

<a href="http://www.janwillemtulp.com" rel="nofollow noopener" target="_blank">Jan Willem Tulp</a> says…
>	Very good primer!

<a href="http://www.janwillemtulp.com" rel="nofollow noopener" target="_blank">Jan Willem Tulp</a> says…
>	BTW, also great that you've started a GitHub repository! Looking forward to read the next parts!

Robert Kosara says…
>	I haven't thought this through entirely, but you're probably right. It may be that a more declarative approach would be as flexible as the functions, and I'm sure it would be more readable. It doesn't really make the part about passing functions around easier for people who aren't familiar with this kind of thinking, though.
>	
>	As for IE: My understanding is that VML uses some other element, so it's both canvas and SVG that are missing. But I don't know the specifics of this. I've also seen various claims that different libraries make Protovis work with IE or not, but I didn't want to get distracted by that. Maybe in a later part.
>	
>	I also know thejit, but I haven't looked at it very carefully so far. It's on my list of things to do, though. ;)

<a href="http://www.datadrivenconsulting.com" rel="nofollow noopener" target="_blank">Alex Kerin</a> says…
>	I believe that Protovis is indicative of the future of interactive web-based visualizations, and even dashboards. I created [this animated Dorling Cartogram](http://www.datadrivenconsulting.com/2010/05/dorling-cartogram-of-unemployment-1980-2009/) by hacking the code they showed in the ACM paper, and changing the data source.
>	
>	It didn't take that long to understand what was going on - there's no way I would have been able to create this in Flash without manually drawing the chart time slices. 
>	
>	Great review, and great job by the contributors to Protovis (and jQuery, etc. etc.)

Robert Kosara says…
>	[That's what I've been saying all along!](/blog/2010/javascript-key-to-in-browser-visualization)

Anonymous says…
>	Protovis looks awesome, but real world use is not 
>	going to happen until they address the IE problem.
>	
>	IE 6, 7, and 8 can't be ignored. 
>	
>	http://code.google.com/p/protovis-js/issues/detail?id=15

<a href="http://www.oecd.org/statistics/factblog" rel="nofollow noopener" target="_blank">Jérôme Cukier</a> says…
>	Keep it up Robert. I really like this series :)

<a href="http://www.bizintelguru.com" rel="nofollow noopener" target="_blank">John C. Munoz</a> says…
>	Thanks for the excellent tutorial. I don't know JavaScript, but found what your wrote to be easy to understand. 
>	
>	Along the lines of what Alex Kerin wrote above, I hope to use Provotis as a dashboard creation tool. I currently use Excel with a $250 plug in from XLCubed, which allows for crisp and small sparklines, bullet charts, and bar charts. But these dashboards on the web can only be presented in static image form. And updating them is usually an offline process. 
>	
>	I'd love to see if protovis can be made to layout a grid type canvas on which to paint a good dashboard with live data.
>	
>	Thanks,
>	
>	John C. Munoz
>	http://www.bizintelguru.com

Robert Kosara says…
>	It's certainly possible. I'll cover multiple panels and layouts later, those should make it easier to build a dashboard. It's easy to modify the data the chart is based on for dynamic visualization, you can check out the Protovis examples to see that. I'll also talk about that at some point in the future.

Derek says…
>	@Nicolas: "There's an SVG like language in IE called VML, libraries like RaphaelJS add simple geometric primitives that translate into VML and SVG, Protovis could use that also to add support for IE."
>	
>	I'd rather __not__ see this happen at all; Microsoft should be moving in support of open standards, rather than developers having to support proprietary and closed standards.  Google's plug-in can be used to create static images for those on insist on using a non-standards compliant browser.

Adam says…
>	Well, *I* think the jquery-like syntax is more readable.. the inheritance concept seems more 'intuitive'.. Anyway Nicolas is right about protovis using SVG (it might have used canvas but the current version definitely uses svg). As for vml, you could say svg is the w3c standardized version of microsofts vml.
>	Btw, I couldn't find the presidents' chart mentioned in the post..?

Adam says…
>	Not true, you could just display a screenshot of the image for IE. Once you wrap your head around the concepts, protovis enables even static visualizations that are both easy and rich

<a href="http://www.ruggeromotta.com" rel="nofollow noopener" target="_blank">ruggero</a> says…
>	this tutorial is great! you teached the meaning of the javascript syntax and also why you're using it... and it's what I was looking for..
>	I' can't wait for the next part!

Daniel says…
>	Thank you very much for 2 great articles - looking very much forward to the next one!
>	
>	Excuse my chutzpah, but here's a short wish-list.
>	
>	- Would be wonderful to learn more about tweaking a stack / stream graph. For example recreating the Crimean War stack graph here:
>	http://vis.stanford.edu/protovis/jsdoc/symbols/pv.Layout.Stack.html
>	
>	- I know protovis' animation features are being worked on but what can be done right now? Using generic javascript or intrinsic features ...
>	
>	Thanks once again!

<a href="http://www.roonga.com.au" rel="nofollow noopener" target="_blank">Ravi</a> says…
>	This gave me a heads up into Protovis.  Thank you.

<a href="http://www.inetsoft.com/company/visualization_tools/" rel="nofollow noopener" target="_blank">Visualization Tool Guy</a> says…
>	I like the graphics style for the charting engine. We could use something like this. Thanks for the tutorial.

<a href="http://www.jzarracina.com" rel="nofollow noopener" target="_blank">Javier Z.</a> says…
>	Thanks so much for the primer. it's a great introduction and is much appreciated.
>	I'll follow the series with interest.

<a href="http://tungwaiyip.info/" rel="nofollow noopener" target="_blank">Wai Yip Tung</a> says…
>	Protovis definitely uses SVG, not HTML5 canvas. From the second paragraph of its own home page:
>	
>	"Protovis is free and open-source, provided under the BSD License. It uses JavaScript and SVG for web-native visualizations; no plugin required (though you will need a modern web browser)!"
>	
>	In either case, no IE8 support.

santhosh says…
>	You have no idea how much you have helped me. I had to figure out how protovis works for integration into one of my projects and you are a lifesaver.

Román says…
>	IS it possible to make a chart appear in an specific div?

MySchizo Buddy says…
>	I have a request for another article in this series. This is related to scientific publications.
>	More than one y-axis or x-axis on the same graph like (http://plot.micw.eu/uploads/Main/linlog.png)
>	
>	Subview of a graph like this image (http://plot.micw.eu/uploads/Main/xps.png)

<a href="http://blizzardzblogs.blogspot.com/" rel="nofollow noopener" target="_blank">Venkat</a> says…
>	Thanks for the great primer.

Ore-ofe says…
>	really nice tutorial for beginners.............I'm almost feeling like a guru

Scap says…
>	This tutorial really should be linked to from the protovis homepage! Very useful. Thank you.

<a href="http://www.taseiger.com" rel="nofollow noopener" target="_blank">Eiger</a> says…
>	Aw, this became an incredibly good quality article. In principle I would like to produce this way way too * spending time along with true hard work to generate a very good document... nevertheless exactly what can I have faith that... My spouse and i delay doing things much and don't apparently go accomplished. There are additional alternatives for beginning ache. 
>	<a href="http://www.taseiger.com/"><strong>eiger</strong></a> and
>	<a href="http://www.eigerbandung.com/"><strong>eiger</strong></a>
>	

<a href="http://www.taseiger.com" rel="nofollow noopener" target="_blank">Eiger</a> says…
>	Aw, this became an incredibly good quality article. In principle I would like to produce this way way too * spending time along with true hard work to generate a very good document... nevertheless exactly what can I have faith that... My spouse and i delay doing things much and don't apparently go accomplished. There are additional alternatives for beginning ache. 
>	
>	<a href="http://www.taseiger.com/"><strong>eiger</strong></a>
>	<a href="http://www.eigerbandung.com/"><strong>eiger</strong></a>

laertes13 says…
>	I've been searching for an HTML way to make charts after getting frustrated with Flex's complexity. I'd messed with Protovis a bit, but couldn't get my head around it. After your tutorial, I smiled big while adjusting the bar spacing and widths. So, simple. Thank you!
