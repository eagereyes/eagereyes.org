---
title: "Caring about the Data"
description: "When demonstrating Parallel Sets to guests and visitors, I often use the Titanic data set, because people can relate to it and it is entirely categorical. I like pointing out interesting facts the visualization shows (like that the second class was smaller than the first class), but it's really just a collection of numbers to show what the visualization can do. Some of the people I have shown this to feel different about it, though."
date: 2007-09-05T06:07:15.000Z
tags: 
outline: false
---

# Caring about the Data

<a href="/blog/caring-about-the-data.html"><img src="/media/attachments/titanicvisualizations.png" alt="Titanic visualizations" width="610" height="220" /></a>

When demonstrating <a href="/parallel-sets">Parallel Sets</a> to guests and visitors, I often use the Titanic data set, because people can relate to it and it is entirely categorical. I like pointing out interesting facts the visualization shows (like that the second class was smaller than the first class), but it's really just a collection of numbers to show what the visualization can do. Some of the people I have shown this to feel different about it, though.

Perhaps the first reaction that made me think of the Titanic as not just numbers was an artist who asked me how I could present such a horrible incident with such lovely colors. Of course I was aware that almost 1500 people died when the Titanic sank, and most of them in horrible ways. But it's also almost 100 years ago now and just so abstract and distant that it never occurred to me to be specifically sensitive about it.
<table width="300" border="0" align="center">
<tbody>
<tr>
<td><a href="/media/attachments/ParallelSets-Titanic-Kosara.png" target="_blank"><img src="/media/attachments/ParallelSets-Titanic-Kosara-thumb.png" alt="" width="200" height="209" /></a></td>
</tr>
<tr>
<td><em>Titanic visualization using parallel sets. Too neat and colorful?</em></td>
</tr>
</tbody>
</table>
Another incident involved a Titanic buff who pointed out an error in the data: the only girl in the first class did not survive (as our data says), but rather drowned because here parents would not let her get into a life boat without them. This was another thing I was not prepared for, because first of all I assumed the data set to be correct, and second I was only using it to show off a visualization method, why would I care about the correctness of the data?
<table width="300" border="0" align="center">
<tbody>
<tr>
<td><a href="/media/LVA/BestOf/Titanic_Brandejsky_Buturovic_Kilzer.jpg" target="_blank"><img src="/media/LVA/BestOf/Titanic_Brandejsky_Buturovic_Kilzer.serendipityThumb.jpg" alt="" width="200" height="137" /></a></td>
</tr>
<tr>
<td><em>Titanic visualization using an information graphics style. Easy to read, but every figure represents a number of people. Also perhaps a bit too playful?</em></td>
</tr>
</tbody>
</table>
Of course, telling a good story about a data set requires understanding and interest. The impact of <a href="http://video.google.com/videoplay?docid=2670820702819322251">Hans Rosling's TED talk</a> (which I keep linking because it has made a lot of visualization people rethink why they do what they do) comes as much from his obvious interest in the data (and its relevance) as from his presentation style and gapminder graphics. Would we care that much about a presentation that just used the data to show off the gapminder visualization?

Interesting in this regard is also Swivel's <a href="http://www.swivel.com/official">official source program</a>, which allows organizations (like UNESCO, WHO, OECD, etc.) to publish their own data directly on Swivel, providing trustworthy data for people to scrutinize and compare with other data. Swivel's focus is clearly not visualization (and I like to <a href="/VisCrit/Swivel-vs-Many-Eyes.html">chastise them for that</a>), but the data. Is this a good approach? Not if you're only looking for the best visualization techniques, but in terms of data availability and analysis, it's an absolute necessity to build credibility and a stock of relevant and interesting data sets.
<table width="300" border="0" align="center">
<tbody>
<tr>
<td><a href="/media/LVA/BestOf/Titanic_Dabrowski_Jakl_May.png" target="_blank"><img src="/media/LVA/BestOf/Titanic_Dabrowski_Jakl_May.serendipityThumb.png" alt="" width="199" height="200" /></a></td>
</tr>
<tr>
<td><em>Titanic visualization using an extended pie chart. Each dot represents a person; color, size, and placement describe properties sex, age, and class/survival, respectively.</em></td>
</tr>
</tbody>
</table>
Ultimately, who cares about a visualization or a particular statistical method to figure something out? The only people who even know about <a href="http://en.wikipedia.org/wiki/John_Snow_(physician)#Cholera">John Snow's use of graphics</a> are visualization people, but I doubt that the people cared whose lives he saved. What counts are the outcomes, not the tools that get you there.

Does that mean visualization is irrelevant? <a href="/blog/visualization-sets-information-free.html">Of course not</a>. But we need to understand the context we are working in and we must become better at telling stories about the data. The only way to do that is to care about the data we are analyzing at least as much as about the new visualization technique we developed just for it.


---
## Comments

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
>	(It's also Hofmann not Hoffman for the mosaic plots paper - and you should probably check out her more recent work, e.g. H. Hofmann. Constructing and reading mosaicplots. Computational Statistics and Data Analysis, 43(4):565–580, 2003)
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


