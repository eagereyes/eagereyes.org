---
title: "Information Visualization vs. Statistical Graphics"
description: "Information Visualization shares part of its history and some techniques with statistical graphics. The two fields differ in their approaches though, and in the expectations people have of what they will gain from a visual representation. In two articles, Andrew Gelman and I have written about what we think visualization is, and our points of view could hardly be more different."
date: 2011-08-02 21:14:30
tags: 
featuredImage: https://media.eagereyes.org/media/2011/scgn.jpg
---

<p><img src="https://media.eagereyes.org/media/2011/scgn.jpg" alt="" width="600" height="194" /></p>

# Information Visualization vs. Statistical Graphics

Information Visualization shares part of its history and some techniques with statistical graphics. The two fields differ in their approaches though, and in the expectations people have of what they will gain from a visual representation. In two articles, Andrew Gelman and I have written about what we think visualization is, and our points of view could hardly be more different.

## The Article

<a href="http://www.theusrus.de/blog/infovis-and-statgraphics/">Martin Theus</a> invited <a href="http://andrewgelman.com/">Andrew Gelman</a> and me to write articles for the <a href="http://stat-computing.org/">Statistical Computing and Graphics Newsletter</a> he is co-editing. The idea was to write about visualization from two perspectives: Gelman from the statistical graphics side, and I from the information visualization (infovis) side.

The resulting articles can be found in the <a href="http://stat-computing.org/newsletter/issues/scgn-22-1.pdf">current issue of the newsletter (PDF)</a>, and I'm sure you'll find them interesting. My article is largely based on a critique of one of Gelman's postings titled <em><a href="http://andrewgelman.com/2010/12/that_puzzle-sol/">That Puzzle Solving Feeling</a></em> and its accompanying slides, though it's not actually mentioned in the text. But if you find the veiled references and the last sentence confusing, that is what they are referring to.

## The Reaction

What has been interesting is not just the debate itself, but also the reaction and comparing the different points of view of two different communities. In response to the articles, Andrew Gelman and Kaiser Fung (author of <a href="http://junkcharts.typepad.com/">Junk Charts</a>) have written further postings, and I'm having an interesting email exchange with Stephen Few about the merits of spirals for finding periodicity. The latter will be the topic for another posting, but the Gelman and Fung pieces are a good illustration why we need this kind of debate.

<a href="http://statisticsforum.wordpress.com/2011/07/28/robert-kosaras-infovis-example-illustrates-the-chris-rock-effect-a-pleasurable-intellectual-effort-spent-in-discovering-something-obvious-that-couldve-been-noticed-and-even-quantified-much-mor/">Gelman's posting</a> essentially rehashes the argument that he made before about how the goal in infovis is drawing the reader in with nice-looking visuals, but not delivering much new information. He calls that the <em><a href="http://andrewgelman.com/2011/07/different_goals/">Chris Rock Effect</a></em>:

>	I call this the Chris Rock effect. Chris Rock says things we all know are true. But he says it so well that we get a shock of recognition, the joy of relearning what we already know, but hearing it in a new way that makes us think more deeply about all sorts of related topics. Sure, you might have already known that Denver is not near any other large city–but seeing it on this map of phone calls brings this fact to life in a way that maybe never happened in your previous experiences looking at U.S. maps.

That is clearly not what information visualization is about. The problem is not that Gelman misrepresents infovis on purpose, he simply has a skewed picture of what it is. Within a few days, he wrote <a href="http://statisticsforum.wordpress.com/2011/07/29/infovis-vs-statgraphics-a-clear-example-of-their-different-goals/">another posting making the same point</a> with different examples.

<a href="http://statisticsforum.wordpress.com/2011/07/31/one-difference-between-statistical-graphics-and-infoviz-is-the-return-on-effort/">Kaiser Fung's posting</a> makes a different point, but is clearly based on the same (or a very similar) way of looking at visualization. He talks about what he calls the <em>return on effort</em>, and how that differs between infovis and statistical graphics. While Minard's Napoleon's March and Gapminder are supposedly in the high-reward range, the examples I use in the article are in the middle- to low-reward zones; and that is despite both requiring high effort. Fung does differentiate between the reader and the producer of a visual representation, though, and his point is about how the effort is distributed differently between statistical graphics and visualization: in infovis, the reader has to do more work than in statistical graphics.

## Points of View

I think it's clear that both Gelman and Fung see things from a statistics-centric point of view. That view is based on the things and the tools they are used to: static images, lots of number crunching and statistical testing, and R. When you're used to a tool like Tableau, interaction and being able to change things easily and quickly are perceived as advantages. But with a tool like R that produces static images and requires considerable effort to change things, this is different.

Also, the image is not the end goal in visualization. Gelman talks about the circular sick leave data visualization that I'm using as an example in the article, saying that it doesn't give him any new insights because he would have expected a weekly pattern anyway. The image here shows the view where there are 28 days (or four weeks) on each period of the spiral, showing that pattern.

<p class="img" align="center"><img src="https://media.eagereyes.org/media/2011/sickleave-aligned.jpg" alt="Spiral showing sick-leave data" width="300" height="300" /></p>

Yes, there is that weekly pattern that we all expected. But there is also a lot more: there are seasonal patterns, there is an almost complete drop-off for the last quarter of the data, there are some atypical weeks where people suddenly get sick on Thursday, etc. Statistics may care mostly about that one effect that can be written down as a hypothesis and then tested, but infovis is about discovery. What else does this tell me? What more can I find out about the data? Is there other data that may explain some of these effects?

If the goals and means in statistical graphics and infovis were the same, there would be no point in having both. But to get value out of them, we need to understand and respect the differences. There are <a href="http://had.co.nz/">some statisticians who get it</a>, but most seem to be stuck in the Tukey-Tufte school of thinking; unfortunately, most of them would even take that as a compliment. They need to stop looking at colorful pictures and start using an actual visualization tool: something that responds to mouse input and reacts in real-time; something that actually supports discovery in a visual way, rather than just plotting graphs.


_Posted by <a href="/about">Robert Kosara</a> on August 02, 2011_


<aside class="comments">

---
## Comments

<a href="http://cscheid.net" rel="nofollow noopener" target="_blank">Carlos Scheidegger</a> says…
>	I want to point out that "That view is based on the things and the tools they are used to: static images, lots of number crunching and statistical testing, and R." might be a comparably bad misrepresentation of statistical graphics than the Chris Rock effect, in particular when you read Gelman's work about model checks using graphics.
>	
>	Also, it seems to me that you're setting up a strawman in the "Tukey-Tufte school of thinking". At least where Tukey is concerned, his book is pretty seriously about interactive graphics. To give him crap in the context of the tools available at the time is exactly as bad as giving Bertin crap about his writings.

<a href="http://cscheid.net" rel="nofollow noopener" target="_blank">Carlos Scheidegger</a> says…
>	I just now saw Gelman's <a href="http://statisticsforum.wordpress.com/2011/07/29/infovis-vs-statgraphics-a-clear-example-of-their-different-goals/">second posting</a>. Ugh. Claiming that infographics is infovis is just an equally bad strawman.
>	
>	Is it a necessity of two conflating research areas that they are naturally incapable of seeing the merits on the other side? It's Upton Sinclair's "It is difficult to get a man to understand something when his job depends on not understanding it." applied to perceived competition. Sigh.

George says…
>	Robert, I just wanted to comment on the spiral chart.
>	
>	If someone was to give that chart alone, I would have no clue how to read or what it means. There is simply not enough information visually to understand what it means.
>	
>	I had to read your entire parapgraph describing it, and still I cannot understand fully or feel confortable enough to say "i get it". Bar charts or line charts would have been describing you point a lot quicker!

<a href="http://peltiertech.com/WordPress/" rel="nofollow noopener" target="_blank">Jon Peltier</a> says…
>	At first I was skeptical about the spiral. It's not particularly good for rigorously quantitative analysis. But as a tool for exploration, it's capable of showing where questions should be asked.
>	
>	With the tools easily at my own disposal, I would make the line charts, I'd average by week and by month, I'd look at moving averages, I'd plot just Mondays (etc.). I may even use something like loess with a short period to try to smooth away variability, and compare the actual data to smoothed representations. It takes time, but it also takes some time to analyze the spiral form. But perhaps the spiral makes it a bit easier to see details.

<a href="http://independent.academia.edu/JoeFaith" rel="nofollow noopener" target="_blank">Joe Faith</a> says…
>	Is the underlying distinction here between using visualisation (however described) for communicating and/or illustrating something which is already known and using it to discover new information in the data. Just because a visualisation clearly shows an already known fact it can still have value in drilling home the message.

<a href="http://had.co.nz" rel="nofollow noopener" target="_blank">Hadley Wickham</a> says…
>	Unfortunately both sides seem to be comparing the best of one side with the worst of the other. There are some awful infovis papers that completely ignore utility in the pursuit of aesthetics. There are many awful stat graphics papers that ignore aesthetics in the pursuit of utility (and often fail to achieve that).  Neither side is perfect, and it's a shame that we can't work more closely together to get the best of both worlds.

<a href="http://had.co.nz" rel="nofollow noopener" target="_blank">Hadley Wickham</a> says…
>	Thanks for the kind words. I'd argue that currently most infovis and statistical researchers are missing one or more of the three components of the cycle needed for data analysis: data munging, data visualisation and data modelling. Statisticians tend to have great modelling tools, but not always the best visualisations. Infovis practitioners create compelling visualisations, but can lack models to help dig past the obvious patterns and look for subtleties.  Researchers in both fields tend to ignore the huge problem of getting your data in the right format to start with.  
>	
>	These are all generalisations - there are researchers in both fields doing fantastic work that combine all components. It's easy to construct straw-man arguments by picking the bad representatives. 

</aside>

