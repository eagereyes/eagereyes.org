<a href="http://flowingdata.com" rel="nofollow noopener" target="_blank">Nathan</a> says…
>	Absolutely. Context is super important and I think, unfortunately, a lot is lost when data is shared between people and groups. It's like a game a of telephone where we have no idea what the data is going to look like at the end of the line.

<a href="http://www.tom-carden.co.uk" rel="nofollow noopener" target="_blank">Tom Carden</a> says…
>	<p>
>	I finished a recent blog post with some open questions along a similar theme:
>	&quot;It’s a fairly regular topic of conversation at Stamen: how can you make a visualisation of e.g. 911 calls actually look like emergencies, and not birthday parties or toilet flushes, without freaking people out and without making it mundane? Is it possible to use great circles to connect air travel destinations without it looking like missiles? Can you animate growing and shrinking red and yellow circles on an aerial map without it looking like Gulf War I weapons company propaganda?&quot;
>	</p>
>	<p>
>	More at <a href="http://www.tom-carden.co.uk/2007/09/04/designyahoo-web-20-meets-war-games/ ">http://www.tom-carden.co.uk/2007/09/04/designyahoo-web-20-meets-war-games/
>	</a>
>	</p>
>	

<a href="http://had.co.nz" rel="nofollow noopener" target="_blank">Hadley Wickham</a> says…
>	Your parallel sets visualisation reminded me of the rather lovely hammock plots by Matt Schonlau, <a href="http://www.schonlau.net/publication/03jsm_hammockplot.pdf">http://www.schonlau.net/publication/03jsm_hammockplot.pdf</a>.  You don't reference them in your paper, so perhaps you haven't seen them before.
>	

Robert Kosara says…
>	<p>
>	I haven't seen them, thanks for the pointer! There are a number of variations of parallel coordinates like that, but they all have their shortcomings. Set-based approaches like treemaps, Mondrian, and parallel sets are more useful for most of the questions people like to ask about categorical data. We are working on a taxonomy paper and some new ideas in that direction, so the input is appreciated. 
>	</p>
>	

<a href="http://had.co.nz" rel="nofollow noopener" target="_blank">Hadley Wickham</a> says…
>	What do you think are the questions that people ask about categorical data?  Many of the "statistically" interesting questions, e.g. are these two categorical variables independent, can not easily be answered with treemaps or parallel sets. (And you mean mosaic plots, not Mondrian, right?)  
>	
>	(It's also Hofmann not Hoffman for the mosaic plots paper - and you should probably check out her more recent work, e.g. H. Hofmann. Constructing and reading mosaicplots. Computational Statistics and Data Analysis, 43(4):565–580, 2003)
>	
>	

Robert Kosara says…
>	<p>
>	I was thinking of the <a href="http://theusrus.de/Mondrian/index.html">Mondrian program</a>, which is of course an implementation of Mosaic plots. Sorry about the typo in the name.
>	</p>
>	<p>
>	I'm thinking of questions like &quot;how many of the women in the first class survived?&quot;, &quot;Was it more likely for a child to survive in the third class than a man in the second class?&quot;, etc. So these are questions about subsets, which cannot be answered easily with techniques that just space out points on a parallel coordinates view (though I haven't actually read the hammock plots paper so far, so I can't say if I may be wrong in my categorizing it), because those show you individual data points (that tend to all converge to one point, too) rather than how many items or how many percent there were in each subset. 
>	</p>
>	

elias says…
>	Aren't good visualizations supposed to trigger questions?
>	

<a href="http://had.co.nz" rel="nofollow noopener" target="_blank">Hadley Wickham</a> says…
>	Those seem like low level questions (and I agree that pcp's don't make answering them easily).  Could you just answer them with a table?  Questions that seem more interesting to me are:  how does this categorical variable affect this continuous variable?  How are these two categorical variables related? Does conditioning on this cat. variable change the relationship between these two continuous variables?  The titanic dataset is interesting, but in real-life most datasets have both continuous and categorical variables (see http://lib.stat.cmu.edu/S/Harrell/data/descriptions/titanic.html for a titanic dataset with a slightly richer set of variables)
>	
>	How do you think parallel sets compares to using simple bar chars/spineplots + linked brushing?

<a href="http://had.co.nz" rel="nofollow noopener" target="_blank">Hadley Wickham</a> says…
>	Aren't good visualisations supposed to answer questions too?   And what questions should a visualisation trigger?  (Presumably not questions like: "What does that label say? I can't read it because it's so small")
