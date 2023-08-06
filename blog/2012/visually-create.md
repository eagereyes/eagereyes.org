---
title: "Visual.ly Create"
description: "Information graphics are a big and growing business, but the tools that are used for making them are little better than paper and pencil. That is particularly problematic when it comes to infographics that are heavy on data, which not only require a lot of work, but also many repeating steps that could be handled by a machine. Visual.ly's recently launched Create tool takes care of some of this work to create better and more flexible information graphics."
date: 2012-04-17 20:30:00
tags: 
featuredImage: https://media.eagereyes.org/wp-content/uploads/2012/04/visually-wait-is-over.png
---

# Visual.ly Create

Information graphics are a big and growing business, but the tools that are used for making them are little better than paper and pencil. That is particularly problematic when it comes to infographics that are heavy on data, which not only require a lot of work, but also many repeating steps that could be handled by a machine. <a title="Visual.ly Create" href="http://create.visual.ly/">Visual.ly's recently launched <em>Create</em> tool</a> takes care of some of this work to create better and more flexible information graphics.

Infographics today are meticulously made by hand, each one being unique like a precious snowflake. That's perfectly valid, but there are recurring structures,  approaches that have worked well for different kinds of content, etc. There is very little automation to make it easier to reuse ideas and structures, and in particular to work with data. Who wants to draw a bar chart by hand?

This is where <a href="http://visual.ly/">Visual.ly</a> comes in. Their idea is not only to connect designers with companies looking for information graphics, but also to provide the tools to make creating them easier and more flexible.

I have talked to several people recently who were confused by what Visual.ly is trying to do. Is it an infographics directory? A marketplace? A Facebook and Twitter visualizer? Something else? The answer is: all of that. The reason this is confusing is not only that Visual.ly is doing more than one thing, but that at least one of them has never been done before.

## The Templar

The idea behind <em>Visual.ly Create</em> is quite simple: separate the tasks of collecting data and designing the graphics. The data might have to be scraped or otherwise collected, or it may just come from an API. The designer can focus on the visual side of things and on telling a compelling story. Crucially, the design work is done in the tool most designers spend their entire lives in: Adobe Illustrator.

The two components are then merged through some custom magic by <em>the templar</em>. The result of that process is a first information graphic. But unlike a traditional infographic, its components can still be changed: the data can be updated or replaced, and the design can be swapped for a different one. Stew Langille, Visual.ly's CEO, compares the latter to themes for blogging engines like Wordpress.

<img class="aligncenter size-full wp-image-1844" title="Visual.ly Templar" src="https://media.eagereyes.org/wp-content/uploads/2012/04/visually-templar.png" alt="" width="600" height="600" />

An important practical issue with information graphics are their cost. Creating one is a lot of work, and so the cost to the client is significant. Given an existing structure, a designer can create a new theme, and thus create graphics at a much lower cost. This also allows different people with different focus to work together and do what each does best.

Finally, information graphics don't have to be static. Visual.ly's Twitter and Facebook graphics show how you can easily swap the numbers each is based on to personalize them. This is not limited to social networking by any means: any source of data can be plugged into a suitable information graphic to make it fit a particular purpose, at least in principle. Whether the design and structure fit is a different question, but given a large library of templates, it's easy to imagine being able to pick one, do some customization, feed in some data, and being done with it.

## Beyond Twitter and Facebook

Being able to create things more easily, and separating the different types of work, is not simply about cost. By increasing efficiency and enabling reuse, designers are able to explore the design space and try new things, rather than spend their time on mechanical tasks that a machine can do much better. How many hours are lost tweaking a few lines to fit some numbers, only to be given updated numbers that require going back and doing it all over again? How much painstaking work can be avoided and spent with actual creative work? Ask a designer and they will tell you that it's a lot.

<em>Visual.ly Create</em> is a good step in the right direction. It is a bit less ambitious than <a title="Visual.ly: The Future of Data-Based Infographics" href="http://eagereyes.org/blog/2011/visually-the-future-of-data-based-infographics">what I wrote about last summer</a>, but also much more concrete and usable without requiring both designers and data wranglers to abandon their existing tools. Turning data into understandable, graphical communication is a difficult task, and one that can benefit from better tools than the status quo. Visual.ly is building some of those tools.

<hr />

Disclosure: I am an advisor for Visual.ly. I have brokered a partnership between Visual.ly and Tableau that has led to <a href="http://blog.visual.ly/visualizing-super-pac-spending/">some interesting first results</a>.


_Posted by <a href="/about">Robert Kosara</a> on April 17, 2012_


<aside class="comments">

---
## Comments

derek says…
>	Illustrator costs a fortune. Can you use SVGs exported from e.g. Inkscape to do the same thing?

<a href="http://ejfox.com" rel="nofollow noopener" target="_blank">EJ Fox</a> says…
>	Hello Derek,
>	
>	Staff designer at Visual.ly here: the answer is yes. Part of the appeal of using SVG is because it has wide support both in the browser (through D3, Raphael, or other libraries) as well as the on the desktop, regardless of your operating system or what application you're using. You could use any application that can manipulate SVG &amp; save SVG (here's a list, look for SVG file format support: http://en.wikipedia.org/wiki/Comparison_of_vector_graphics_editors ).
>	
>	Part of the appeal for me as a designer is that instead of my designs &amp; data being locked in JPGs or PNGs, invisible to Google or screen readers, I can put them in SVG and open up the content, making it more accessible and easily editable.

Al says…
>	I've tried to make sense of visual.ly create several times now, but what I see just doesn't match what people describe it as.
>	
>	What people describe is, like in your diagram, a set of tools for speeding up the process of making infographics.
>	
>	What I see is, a small selection of pre-made infographics with switchable themes, that you can plug your own  personal Twitter or Facebook account data into.
>	
>	I must be missing something - but I've scoured that page many times looking for some hidden link to the actual 'create' section, and it seems not to exist.
>	
>	What am I missing? We are talking about <a href="http://create.visual.ly" rel="nofollow">create.visual.ly</a>, right? With the 'Facebook monster' and 'Twitter account showdown'?
>	
>	I can't see anything that resembles what you describe in your diagram - unless of course, the diagram describes the process the visual.ly in-house team goes through when they create things like the Facebook monster.

derek says…
>	Thanks!

Steve says…
>	The mission of this tool seems like an excellent direction, but I am truly confused by the diagram here.  Maybe someone can help me.  What is the configuration file that the data model and SVG design "go into"?  Is that some input file (created from the data and design) that gets fed into the Templar program?  What is the User's Data via API?  Isn't that what the data model already contains?
>	
>	I also don't understand the Designers Make New Themes part of this workflow?  It looks like that is the end, but there was also an initial SVG design.  What is the relationship between themes and SVG designs? :P

Al says…
>	I <i>imagine</i> that the SVG stage is about creating the data dependant elements, and the configuration file is what maps something in the data model to some element of the SVG: for example it could be the file that says that a bar's length is determined by X data item or a monster's eyeball's fill colour's saturation value is determined by the square root of Y data item. I imagine that 'Templar' is the system (API?) that underpins all this.
>	
>	Then the theme would be static styling on top of this that doesn't change with the data - e.g. the colour of the bar or the hue and shape of the monster's eyeball.
>	
>	I'm guessing though. It really isn't clear and I'm not even sure if any of this stuff is open to anyone but visual.ly's in-house team. If it is, I can't find a way to find out about it, and there aren't yet any configurable infographics on visual.ly that aren't by visual.ly's in house team.
>	
>	Googling ' "visual.ly" "templar" ' just points to this article...

<a href="http://mikewirthart.com" rel="nofollow noopener" target="_blank">Mike Wirth</a> says…
>	Robert- You and I have had similar discussions about these kinds of tools before(Tableau, ManyEyes, Processing, etc...). You ardently defend the science, speed and uber-accuracy of code and computational based tools. Though you often miss or dismiss the nuance and subtly of the "art" of making data visualization. Tools like Visual.ly's create will come and go, but perhaps they can be shaped to handle some of the grunt work; that would be helpful. But, I for one am happy to spend my life in Illustrator.

</aside>

