---
title: "Peer Review, Part 1: Quilt Plots"
description: "What is peer review? How does it work? And is it really as flawed as people claim it is? In this little series, I will talk about all that, and then end up arguing that peer review does, in fact, work - at least in visualization. But first an example where it didn’t."
date: 2014-01-19 21:14:01
tags: peer-review
featuredImage: https://media.eagereyes.org/wp-content/uploads/2014/01/quilt-plot.png
outline: false
---

# Peer Review, Part 1: Quilt Plots

What is peer review? How does it work? And is it really as flawed as people claim it is? In <a href="/tag/peer-review">this little series</a>, I will talk about all that, and then end up arguing that peer review does, in fact, work - at least in visualization. But first an example where it didn’t.

A paper made the rounds last week for its poor quality: <a href="http://www.plosone.org/article/info%3Adoi%2F10.1371%2Fjournal.pone.0085047"><em>Quilt Plots: A Simple Tool for the Visualisation of Large Epidemiological Data</em></a>. It was peer-reviewed and accepted by an editor at PLOS ONE, which is an online science journal (covering all the sciences). PLOS ONE is an open-access online journal with the goal of publishing work faster and without trying to assess importance (which is difficult). That’s not a bad idea in principle, but this example shows that their <a href="http://www.plosone.org/static/information">rigorous peer review</a> might need some work.

<p align="center"><img class="aligncenter size-medium wp-image-3065" alt="Quilt Plot" src="https://media.eagereyes.org/wp-content/uploads/2014/01/quilt-plot.png" width="730" height="445" /></p>

The paper simply presents a way to create a heatmap. It’s not just that the reviewers should be expected to know what a heatmap is, they should also see through the odd way the whole thing is argued: the heatmap function the authors were using in R had too many options, so they stripped out the dendrogram and clustering, and presented just the color-coded table as a new thing.

How anybody could think this was a valid contribution is beyond me. You can do this in Excel or Tableau with a few clicks, and it’s pretty easy even in R. What’s even more annoying is that the authors provide their implementation of their “technique” as R code – as screenshots inside a Word document.

This would be okay as a posting to an R mailing list perhaps, or as a short blog posting. And those are perfectly valid ways of publishing this sort of thing, without having to go through review. The point of peer review is to filter out the bad, nonsensical, and trivial stuff, so that you can expect to find good work when reading a journal or conference proceedings. It doesn’t always work, but it mostly does.

<hr />

This is part of <a href="/section/series/peer-review">a five-part series on peer review in visualization</a>. One posting a day will be posted throughout this week.


<PostedBy />


<aside class="comments">

---
## Comments

Janus Christensen says…
>	Would a sparkline-like graph for each age group not tell the story better? Especially to show trends more clearly.

<a href="http://healthyalgorithms.com" rel="nofollow noopener" target="_blank">Abraham Flaxman</a> says…
>	I had a quick look at the PLoS paper you linked to, and it seems that the authors are quite aware of the existence of heat maps.  In the discussion, they say:
>	
>	
>	“Quilt plots” can be considered as a simple formulation of “heat maps”. They produce a similar graphical display to “heat maps” when the “clustering” and “dendrogram” options are turned off. In addition, “quilt plots” have several advantages over “heat maps”. Firstly, unlike “heat maps”, “quilt plots” come with easily understood R-functions (i.e. plot, legend and color). In addition, R is freely available software and supported by leading statistical experts around the world, and it is important to promote the use of this software among epidemiological researchers. In addition it is difficult to learn to use R compared to other statistical packages. For example, “heat maps” require the specification of 21 arguments including hierarchical clustering, weights for re-ordering the row and columns dendrogram, which are not always easily understood unless one has an extensive programming knowledge and skills. One of the aims of our paper is to present “quilt plots” as a useful tool with simply formulated R-functions that can be easily understood by researchers from different scientific backgrounds without high-level programming skills.
>	
>	...
>	
>	Although our method cannot be considered “new”, the novelty is to make these types of methodologies more accessible for researchers from different scientific backgrounds and without the need for strong computing skills. This will potentially increase the visibility and awareness of these types of useful statistical tools and graphical presentations.
>	
>	
>	I might have an easier time interpreting dendrograms than their intended audience, but I'm sure I know less about getting a person who injects drugs to agree to take a hepatitis test!  
>	
>	I look forward to the rest of your series.

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	So they're basically saying that there is nothing in the paper to warrant publication. And as I've pointed out above, the claim about making this accessible is completely moot if they provide their code as pictures! This is worse than a hoax, because it doesn't even try to mislead the reviewers; it says quite clearly: "please reject, there's nothing new here!"

</aside>

