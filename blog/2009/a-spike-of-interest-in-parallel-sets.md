---
title: "A Spike of Interest in Parallel Sets"
description: "A few days ago, Michael Blastland published a very interesting little article on the BBC Magazine website, in which he showed an image of Parallel Sets. He also mentioned my name and even though there was no link or email address, I have seen a spike in traffic on this website and my university page, and have gotten a barrage of emails from people who want to try it out. Here is some information on the technique and a plan for getting the tool out into the world."
date: 2009-03-16T06:21:40.000Z
tags: 
outline: false
---

# A Spike of Interest in Parallel Sets

<a href="http://eagereyes.org/blog/2009/a-spike-of-interest-in-parallel-sets.html"><img src="http://eagereyes.org/media/2009/parsets-teaser.png" border="0" alt="Parallel Sets Teaser" width="574" height="301" /></a>

A few days ago, Michael Blastland published a <a href="http://news.bbc.co.uk/2/hi/uk_news/magazine/7937382.stm">very interesting little article</a> on the BBC Magazine website, in which he showed an image of <em>Parallel Sets</em>. He also mentioned my name and even though there was no link or email address, I have seen a spike in traffic on this website and my university page, and have gotten a barrage of emails from people who want to try it out. Here is some information on the technique and a plan for getting the tool out into the world.

The article itself is concerned with the representation of risk, and is really interesting. Parallel Sets only make an appearance further down, as a possible alternative way of representing risk. What is interesting for me is that the image Blastland uses is taken from my entry in the <a href="http://www.stonesc.com/Vis08_Workshop/">Design, Vision, and Visualization workshop</a> at Vis 2008. I did a redesign of the original ParSets for that, and did not really consider them published. Oh well.

Parallel Sets is a technique for visualizing categorical data. The main idea was to get away from representing individual data points, and instead show sets and subsets of items with certain combinations of criteria. This works very well for data like customer surveys, census data, and many other kinds of purely categorical or mixed categorical and continuous data - like my standard example, the people on board the Titanic (see above). In a way, ParSets is a mix between parallel coordinates and treemaps/mosaic plots.

The technique was developed a few years ago by my student Fabian Bendix, myself, and Helwig Hauser. We published a paper at InfoVis 2005, an expanded version of which appeared in TVCG, <em><a href="http://kosara.net/publications/Kosara_TVCG_2006.html">Parallel Sets: Interactive Exploration and Visual Analysis of Categorical Data</a></em>.

I have done some further work on the technique as well as worked on a new implementation. Currently, I am working with a colleague and a student in bioinformatics on using ParSets (and other techniques) as a new way of looking at genomic data.

So what about getting access to the program right now? I have been planning on releasing the program for a long time (and I completely agree with Iain Cunningham who recently <a href="http://eagereyes.org/visweek-2008/who-votes-donut-charts.html#comment-1217">called me out</a> on my statements elsewhere that we should be forced to publish our code). Unfortunately, the current implementation is a typical academic prototype: buggy, unfinished, and the code is really horrible in places.

We have recently started a new implementation based on a new data model that embodies a lot of what we have learned about the technique and the data we are looking at. There are also new interactions that will make working with Parallel Sets more efficient, and the new design (some of which you see above) brings out the represented data in a much clearer way than before.

When will you be able to use the program for your own data? At the end of April. We are going to release the software as open source by then. If you want to be notified, leave a comment here or send me a message through the <a href="http://eagereyes.org/contact">contact form</a>. I will certainly brag about it here once it's out, and also post some more about the actual technique, how to use it, etc.

I really appreciate the interest we have received for the technique in the last few days, and I am sure that you will be even more excited once you see it in action, with your own data. In the meantime, please bear with us - you won't be disappointed.


---
## Comments

<a href="http://www.ii.UiB.no/vis/" rel="nofollow noopener" target="_blank">Helwig Hauser</a> says…
>	<p>Nice to read that parallel sets attract attention (again) -- indeed I still think that this approach is a step forward in dealing with categorical data (in visualization).&nbsp; Maybe also the Set'o'gram, as presented last year at the InfoVis conference (and published in Freiler et al., Interactive Visual Analysis of Set-Typed Data; TVCG 14(6):<span>1340-1347), is adding to this strand of new visualization opportunities. </span></p>
>	<p><span>Best regards,<br />HH</span></p>
>	<p><span><br /></span></p>

Robert Teghtsoonian says…
>	<p>It's easy to represent the Titanic data with a bar graph showing percent (or probability) surviving on the ordinate, and separate bars for each of the eight categories of those on board. You can also manipulate bar width to reflect the relative proportions of each category. Different fill for the two genders also makes it easy to see if gender makes a difference in trends over class of accommodation.</p>
>	<p>When I put the bar graph side by side with the ParSet version it seems to me that it does a much better job of showing what the data reveal. No doubt this is in part because of the greater familiarity of bar graphs, but also because it allows showing the calculated probabilities of survival.</p>
>	<p>What do you think?</p>

<a href="http://www.theusRus.de" rel="nofollow noopener" target="_blank">Martin Theus</a> says…
>	<p>In most cases, high-dimensional categorical data can be best displayed in mosaic plots or a variant of mosaic plots. Parallel sets and the-like face the same adjacency problems as parallel coordinate plots and have a hard time dealing with large differences in sizes as the lines only scale in one dimension, tiles in mosaic plots scale in two dimensions.</p>
>	<p>Why don't we compare some real data problems?</p>

Manos Kouk says…
>	<p>The news about releasing the software to allow us to replicate such charts for data is most definitely welcome! Can we have a sneak preview even if the application is still in alpha version? :)</p>

<a href="http://rbiii.wordpress.com/" rel="nofollow noopener" target="_blank">Ran Barton</a> says…
>	<p>I look forward to hearing news of the code's release.</p>

Tom Coveney says…
>	<p>Am looking forward to hearing news of the codes release</p>

Colm O'Brien says…
>	<p>I read the article on the BBC website and was very interested. Your parallel sets graphing&nbsp;technique is a powerful tool in&nbsp;summarising multiple bits of information on the same graph.</p>
>	<p>I look forward to the release of the software...</p>

farhan says…
>	<p>I do think the Autism Diagnosis Correctness data would work great with the parallel set.. :)</p>


