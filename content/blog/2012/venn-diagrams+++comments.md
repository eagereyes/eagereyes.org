<a href="http://vallandingham.me" rel="nofollow noopener" target="_blank">Jim Vallandingham</a> says…
>	Thanks for creating this nice review of an important topic.
>	
>	I've seen the 4-set version more than a few times, and I've always been struck by how unhelpful it is. Glad to see my opinion matches yours. 
>	
>	An important lesson in the fact that just because something can be done, doesn't mean it should be done.

derek says…
>	Sometimes you can extend it to a fourth set, provided that the data you have completely exclude some relationships. When that happens, the four set diagram shows that fact stunningly well, but you have to be on the lookout for the data that give you the opportunity to use the diagram. 
>	
>	Like the calculus I was taught at school, information visualisation is often a matter of being able to recognise problems as looking like other problems you've encountered before and know the solution to.

<a href="http://www.twitter.com/robshell" rel="nofollow noopener" target="_blank">Rob Shell</a> says…
>	Good post.  I enjoyed reading this as well as your G+ post on Euler diagrams.

<a href="http://www.costinggeek.com" rel="nofollow noopener" target="_blank">Julien Delvat</a> says…
>	For some strange reason I usually find Venn Diagramm in jokes:
>	
>	http://www.dennismansfield.com/.a/6a00d834530c9c69e20162fd7429d2970d-800wi
>	
>	http://www.oxherding.com/.a/6a00e5537c83be88340133ed1c0a45970b-pi
>	
>	http://xkcd.com/747/
>	
>	Enjoy ...

<a href="http://peltiertech.com/WordPress/" rel="nofollow noopener" target="_blank">Jon Peltier</a> says…
>	The Venn diagram for six sets "does not provide much help."
>	
>	Sure is pretty, though.
>	
>	Like so many other techniques, Venn diagrams work well within a narrow realm, and poorly outside, where they are used most often.

derek says…
>	I see that with my naive talk of four or more sets being feasible, provided some of the combinations are empty sets, I'm describing Euler diagrams, which I hadn't heard of before :-)

<a href="http://www.visokio.com" rel="nofollow noopener" target="_blank">T J Bate</a> says…
>	Visokio Omniscope has an interactive Venn View that will go up to 5 subsets plus 'outside' records. Several innovative interactive business solutions have been implemented with this Venn View at the heart of the user filtering/query interaction. Omniscope is free to try:
>	http://www.visokio.com/gala

<a href="http://matt.fehskens.com" rel="nofollow noopener" target="_blank">Matt</a> says…
>	I created a Venn Diagram at work to show how we're cleaning data. It was a single large circle, representing the population of data, then proportionately smaller circles representing the % of records needing cleaning, which then had a classic Venn Diagram inside it which showed how we were cleaning those records.
>	
>	From my perspective it was something very simple, but people love it because it's familiar and easy-to-read. I love using Venn Diagrams because of those reasons, even when you're dealing with a single set of data.

<a href="http://www.costinggeek.com" rel="nofollow noopener" target="_blank">Julien Delvat</a> says…
>	Would you mind sharing that diagramm?
>	I'm not sure I have the right picture of your description and it'll probably help others, too

Raphael says…
>	One thing I wonder about Venn (and related) diagrams:
>	
>	How effective are we at judging areas of complex shapes? Do they really help us evaluate the relative size of each of their components?
>	
>	I'm not entirely convinced they are better than a table of numbers, or a simple proportional area plot.

Jesse Paquette says…
>	My sentiments exactly - see:
>	
>	http://akt.ucsf.edu/EGAN/docs/PSI78650E.pdf

John says…
>	Here's an even more useless Venn, but pretty to look at: a seven set Venn.  http://www.phillydesignblog.com/2012/09/seven-way-venn-colored/

VD says…
>	can any one help me with venn diagram generator with 6 sets? does anybody have any idea about such tool online?

<a href="http://twitter.com/nachik" rel="nofollow noopener" target="_blank">nachik (@nachik)</a> says…
>	Actually that is a common misconception. Only the complete sets (representing all 2^n combinations) are called Venn diagrams. When relations are simplified out they're "Euler diagrams".
>	
>	Although calling those Venn diagrams as well is so common now we might as well accept it.
>	
>	See http://www.eulerdiagrams.com

<a href="http://twitter.com/nachik" rel="nofollow noopener" target="_blank">nachik (@nachik)</a> says…
>	I don't think the premise of this post I just randomly found is correct.
>	
>	Venn diagrams don't usually explain anything, they just represent. The fact that pair-wise operations between two sets are simple and you already know them a priori is not because of the equivalent 3-Venn diagram. Venn represents this simply because it's simple, but doesn't explain it. If anything it helps as a language to communicate this.
>	
>	The 4-Venn represents all 16 combinations representable by 4 intersecting areas, usually each of these combinations simply doesn't have a name. It's just the combination. When Venn diagrams represent something like an attribute they are as intuitive as they can possibly be. There is some spatial relationship of having many positive attributes and being close to the centre, depending on how you design it, it can be slightly better or worse. Other than that it's just like a table that is easy to look up, it doesn't make the data simpler (if the data has relations it can be simplified to a non-complete Euler diagram).
>	
>	The diagram cannot make the complexity of the data go away. Note that Venn diagrams represent complete combinatorial data.
>	
>	I think Venn diagrams start becoming unpractical when it's hard to tell which area is which. The 6-Venn is fine (and there are better than that one). The 7-Venn I don't think I've seen any that I'd prefer over a simple table, you just cannot write anything there without making a mess. On a computer one can do even 7 or 8 with some interactivity IMO. There's also the fact that you can use colour codes as help and 7-8 very distinguishable colours and patterns are still doable.

Gonzalo says…
>	Hi All, 
>	
>	great forum. 2 questions:
>	
>	1. I am struggling to make a 6-way Venn Diagram that makes nice-ready to publish figures. The R package 'VennDiagram' goes up to 5-way, and 'Vennerable' goes to 6-way but the figures aren't that nice. Any suggestion? 
>	
>	2. what would be the best way to represent 6 data sets if not using a 6-way Venn Diagram?
>	
>	Thanks

Ray Givler says…
>	Gonzalo, 
>	I realize this reply is almost 2 years after your post, but in case anyone else reads this, I believe the answer to your question 2 is embedded in nachik's post. Even a 5-Venn is hard to read, but for any N-Venn you can make a table with 2^N rows and with columns representing each of your N Venn regions. Any given observation will have a boolean relationship with each region - it's either in or out. So for a given row, you could highlight the regions which are represented in the row, with the first one having no highlightes (outside all Venn regions) and the last row having all columns highlighted (the observation exists at the intersection of all regions). Then, across rows you could use a heat map to represent the density of that row (i.e., Venn intersection set) relative to the others and/or put a percentage on it, or even a bar on the same line as the row.
>	
>	An example viz of what I'm saying would be nice. If someone wants to do that as an exercise, have at it.
