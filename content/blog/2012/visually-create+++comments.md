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
