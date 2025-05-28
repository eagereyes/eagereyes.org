<a href="http://www.janwillemtulp.com" rel="nofollow noopener" target="_blank">Jan Willem Tulp</a> says…
>	Very useful and thorough! Well done. The type of visualization used in the example is very inspirational! Looking forward to part 4!

<a href="http://blog.oecdfactblog.org" rel="nofollow noopener" target="_blank">Jerome Cukier</a> says…
>	Hi Robert, 
>	thanks to your primers I've managed to get a basic protovis chart in a wordpress blog. The last stumbling block was to actually put it into the blog as wordpress would mess with the code and throw in &lt;p&gt; or &lt;br&gt; tags. There may be more elegant solutions but I used the "text control" plugin. how did you do it?
>	
>	thanks
>	
>	jerome
>	
>	looking forward to part 4

Robert Kosara says…
>	I use <a href="http://daringfireball.net/projects/markdown/" target="blank">Markdown</a>. It's a very intuitive syntax for writing text with the usual markups (bold, etc.) and do things like links and blockquotes without lots of ugly HTML. Plus, it lets me seamlessly embed HTML and JavaScript when needed. There must be a markdown plugin for WordPress as well, it's a very popular way of writing stuff for blogs and such.
>	
>	(BTW, I fixed your comment and deleted your second comment. Hope that's okay.)

Anonymous says…
>	Very nice tutorials! I find the original protovis documentation often hard to understand. Thank you very much!

Oliver Mooney says…
>	This was the introductory material to protovis I needed - it should be adopted by the protovis team! Thank you. 
>	
>	I followed along with this and the other examples by editing a version by hand as each new addition was introduced. This wasn't as easy with this example as with the other examples - I had to look at the source on github - but it was only a couple of minor things (the dateFormat definition wasn't provided here for example).
>	
>	I think as well that you have the wrong colour on the version here for the bar for presidential terms - it should be #333 but you have #ddd above (but not in the downloadable source).
>	
>	Finally you pull in the current data point in some functions and then use the index supplied by activePresident to get the current data point instead - e.g. in the functions for the content of the lifetime, time of office and age at ascension text labels. Could be a bit confusing to a newcomer?
>	
>	Looking at the source, is it the case that you need to use  curly brackets in .function((){*statements*}) for functions with multiple statements, but none in .function((*expression*)) for a function with just a single expression?
>	
>	Thanks a million again!

Robert Kosara says…
>	Yes, I left out a few things that I thought would distract from the main protovis code. The source is available as a zip file too, and the HTML file linked towards the end is the entire source (minus data) to check out.
>	
>	The activePresident is the variable set by the mouse-over code, so it's used where the visualization is supposed to react to the interaction. The basic life-lines are drawn without that, but the highlighting of the label has to take it into account (that's why that's a separate step). You can ignore that for the if you want to just play with the visual representation, or try hard-coding a particular value to see what happens when you change it.
>	
>	The syntax without curly braces is called a function expression, and it has to be a single expression. You could perhaps write more than one statement by using the comma operator, but that would be ugly and confusing. So as a rule, yes, you have to use the braces for longer functions. But if you prefer the more verbose syntax, you can use that one as well (that was explained in [part one](/tutorials/protovis-primer-part-1)).

Priyanka says…
>	Hi,
>	
>	Your tutorial really helped clear my basics of Protovis. Thank you so much!
>	

<a href="http://www.stubbornmule.net" rel="nofollow noopener" target="_blank">Sean Carmody</a> says…
>	Jerome: any tips as to how you got protovis working on Wordpress?

<a href="http://www.stubbornmule.net" rel="nofollow noopener" target="_blank">Sean Carmody</a> says…
>	I'm making progress: this page works on FF but not Google Chrome.
>	
>	http://www.stubbornmule.net/2010/09/experimenting-with-protovis/

<a href="http://www.stubbornmule.net" rel="nofollow noopener" target="_blank">Sean Carmody</a> says…
>	The results of my efforts: [a Wordpress plugin to load Protovis scripts](http://github.com/seancarmody/pv-loader). Hope it comes in handy!

<a href="http://kdmc.berkeley.edu" rel="nofollow noopener" target="_blank">Len De Groot</a> says…
>	Thanks for the tutorials. They have been a great help as I'm just getting started.
>	
>	I managed to mash up Tutorial 2 (loading different json data) and this one. Everything works and looks great except the interaction. I stripped everything down to match your file and still get the same behavior: The first item highlights but mouse movement doesn't highlight the rest. I suspect I'm missing something but don't see it. 
>	
>	If anyone would like to look at the file, I would be happy to e-mail a link to a staging site or you can download a zip from my dropbox: http://dl.dropbox.com/u/8574857/DeGrootTest.zip

<a href="http://kdmc.berkeley.edu" rel="nofollow noopener" target="_blank">Len De Groot</a> says…
>	One misspelled var. I must have looked at it 20 times.

Tim says…
>	Thanks for the tutorials they are awesome. I was wondering if you could help out though: I would like to basically set up some pv graphs/charts as templates and have the data provided by either a) uploading a csv to a server or b) my prefered method) entering into an html form. My question is how to get data from html form to the pv variables etc.
>	
>	Thanks again.

John says…
>	Thanks for the tutorial, these have been really useful to me.
>	
>	BTW, you've got a typo on this page currently: "activePresiedent" in the second to last para of Interaction Setup.

Paco says…
>	Hey, your Protovis tutorials are a lifesaver!
>	
>	Encore! Encore!
>	

wimdows says…
>	Hi Robert,
>	
>	Thanks for the great tutorials. They got me started with ProtoVis.
>	
>	One question though... I have bee trying to download the files for the interactive presidents chart yout alk about here:
>	/applications/PresidentialDemographicsII.html
>	
>	But no luck. The link http://hg.eagereyes.org/presidentialdemographics/
>	does not apear to work.
>	
>	Can you please help me out?
>	
>	Thanks so far!
>	
>	regards,
>	
>	wimdows

Robert Kosara says…
>	I moved all my code to github a while ago. I can't find the link you're mentioning, which page does it appear on? Also, I haven't put the old Presidential Demographics Java code there yet, but I'll add that soon.

Robert Kosara says…
>	That link (and also the page itself) is fixed. Thanks for pointing me to this oversight, hg.eagereyes.org doesn't exist anymore. All my source code now <a href="https://github.com/eagereyes" target="_blank">lives on github</a>.

Cascata says…
>	Hi Robert,<br>
>	Thanks so much for the tuts, its been a great help.<br> 
>	I work mostly with Flash, but to start data vis I recently made a tough decision to learn protovis in js instead of the equivalent Flare library in as3. While there are pros and cons between the two, I mainly made the decision based on the larger base of support, documentation and community surrounding protovis as compared to flare.<br>
>	When it starts getting into interactivity and animation however, I secretly wish I was working with Flash.<br>
>	Any thoughts on comparison between protovis and flare?
>	  

<a href="http://www.isaan.com" rel="nofollow noopener" target="_blank">isaan</a> says…
>	I moved all my code to github a while ago. I can't find the link you're mentioning, which page does it appear on?

<a href="http://www.diaconaaljongerenproject.nl/gastenboek" rel="nofollow noopener" target="_blank">Malware</a> says…
>	Heya i am for the primary time here. I came across this board and I to 
>	find It really helpful &amp; it helped me out a lot. I am hoping to provide 
>	one thing again and help others like you aided me.
