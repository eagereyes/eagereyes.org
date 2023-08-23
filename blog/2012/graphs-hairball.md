---
title: "Graphs Beyond the Hairball"
description: "Networks are usually drawn using a technique called node-link diagrams. While that works well for small graphs (the technical name for networks), it breaks down beyond a few dozen nodes. Better techniques exist, though these are currently focused on specific types of graphs or answer particular questions."
date: 2012-02-01 21:30:00
tags: techniques
featuredImage: https://media.eagereyes.org/wp-content/uploads/2012/02/matrix-vs-nodelink.png
---

# Graphs Beyond the Hairball

Networks are usually drawn using a technique called node-link diagrams. While that works well for small graphs (the technical name for networks), it breaks down beyond a few dozen nodes. Better techniques exist, though these are currently focused on specific types of graphs or answer particular questions.

## Node-Link Diagrams

When you think of a graph, you likely already think of a node-link diagram – unless you’re a mathematician. This technique is incredibly effective in communicating the basic idea of a network: there are nodes, typically shown as little dots or circles, and they’re connected by links, or edges in graph lingo. Even the difference between a directed and an undirected graph is obvious: little arrows mean that there’s a direction, no arrows means no direction. Lane Harrison gives <a href="http://blog.visual.ly/network-visualizations/">a good overview on the Visual.ly blog</a>. Carlos Scheidegger is also writing <a href="http://cscheid.net/blog/so_you_want_to_look_at_a_graph">an interesting, if mathematical, series on graphs of the node-link variety</a>.

These images are easy to understand even for people who have never seen such a diagram before, which is not something that can be said about many visualization techniques. Most people would also easily be able to figure out how to answer basic questions using such a diagram, like finding the person with the most friends (i.e., the node with the highest degree) or looking for highly connected groups that only have a small number of links between them (so-called cliques).

## Hairballs

There is a catch, of course. The simplicity and beauty of node-link diagrams turns into clutter and confusion when the number of nodes and links gets too high: the dreaded hairball.

<p align="center"><img class="aligncenter size-full wp-image-1700" title="ecoli_meta3_sm" src="https://media.eagereyes.org/wp-content/uploads/2012/02/ecoli_meta3_sm.png" alt="" width="400" height="400" /></p>

Many techniques have been developed to sort out the clutter: edge bundling, node filtering, edge lenses, many, many different layout algorithms, etc. But none of them provide a good, general solution to the underlying problem. The question also needs to be asked if the most obvious visual depiction is also the most effective. It may not be.

## Matrix Methods

Matrix visualizations represent a very different approach. These techniques are based on the adjacency matrix, which defines which nodes in a graph are connected to which. Imagine a table with a row and a column for each node. The value in each cell of the matrix contains a value of 1 if there is a connection between the node in that row and that column, and 0 if not.

<p align="center"><img class="aligncenter size-full wp-image-1699" title="adjacency-matrix" src="https://media.eagereyes.org/wp-content/uploads/2012/02/adjacency-matrix.png" alt="" width="600" height="210" /></p>

Matrix visualization techniques display that matrix rather than the node-link version of the graph. No more crossing lines and no more hairball. Seeing structures in such a visualization requires some training and some support from the visualization tool, but the advantage is that there are no more lines cluttering up the view. This illustration from Nathalie Henry and Jean-Daniel Fekete’s InfoVis 2006 paper <em><a href="http://www.lri.fr/~nhenry/docs/Henry-InfoVis2006.pdf">MatrixExplorer: a Dual-Representation System to Explore Social Networks</a></em> nicely shows how structures in the node-link diagram translate into the matrix view.

<p align="center"><img class="aligncenter size-full wp-image-1701" title="matrix-vs-nodelink" src="https://media.eagereyes.org/wp-content/uploads/2012/02/matrix-vs-nodelink.png" alt="" width="600" height="381" /></p>

The rows and columns of the matrix can be rearranged, which represents one of the greatest strengths and weaknesses of matrix techniques at the same time: order matters. The patterns that are so obvious in the image above will be easily hidden by jumbling the order of the matrix. But given a good clustering and ordering algorithm, in particular one where the user can specify criteria and weights, a matrix view can show patterns very clearly.

## Directed, Tree-Like Graphs: Node Quilts

A technique I found particularly fascinating at InfoVis 2011 was shown in a paper titled <em><a href="http://ieeexplore.ieee.org/xpl/freeabs_all.jsp?arnumber=6064992">Developing and Evaluating Quilts for the Depiction of Large Layered Graphs</a></em> by Juhee Bae and Ben Watson. Node quilts are designed specifically for directed, acyclic graphs (DAGs): graphs that have a hierarchical structure, where most links point from one layer to the next. This technique was originally designed for genealogical trees, but the version Bae and Watson studied allows links that point up as well (though they should be rare).

<p align="center"><img class="aligncenter size-full wp-image-1702" title="nodequilt-600" src="https://media.eagereyes.org/wp-content/uploads/2012/02/nodequilt-full.png" alt="" width="443" height="220" /></p>

Node quilts cleverly exploit the fact that most of the action is in one half of the matrix by folding it to eliminate the parts that are (mostly) empty. The resulting visualization is much denser and also more informative: links that skip layers or that point back are shown outside the matrix itself.

This technique takes a bit of time and study to appreciate, but it extends the matrix visualization idea in a way that is very clever and useful – for particular tasks and data. But focus on particular types of questions is clearly a virtue given the issues with node-link diagrams in general. I also wonder how well the technique might work for undirected graphs, where the lower half of the adjacency matrix can be ignored because it is symmetrical. The focus on using quilts only for DAGs so far may be a bit more narrow than necessary.

## What Are You Asking: PivotGraph

In many cases, it makes little sense to look at all the individual data items, while an appropriately aggregated view can provide much more useful information. This is the same idea as behind <a title="Parallel Sets" href="/parallel-sets">Parallel Sets</a> and also almost all of the views in <a href="http://www.tableausoftware.com/">Tableau</a>. In 2006, Martin Wattenberg published a paper on a technique he called <a href="http://www.research.ibm.com/visual/papers/pivotgraph.pdf">PivotGraph</a> that adapted the idea of aggregation for use with graphs. For the aggregation to work, there has to be data attached to the graph nodes, and it has to be partly categorical. This is typically the case when looking at rich data like email traffic, phone conversations, etc.

The PivotGraph has two interesting properties. First, it is very goal-directed: it requires the user to pick dimensions along which to aggregate, and which to use to lay out the graph. Second, it uses space in a very different way than node-link diagrams. While space in node-link diagrams is mostly there to avoid collisions between the nodes and clutter between the lines, it carries information in the case of the PivotGraph.

<p align="center"><img class="aligncenter size-full wp-image-1704" title="pivotgraph" src="https://media.eagereyes.org/wp-content/uploads/2012/02/pivotgraph.png" alt="" width="600" height="358" /></p>

The example above shows the communication patterns between people in different departments (rows) and locations (columns). The width of the arrows represents the amount of communication going on (emails, etc.). This is aggregated information, not just along the edges but also in the nodes: each department and location consists of multiple people. What would have been a big hairball had all the individual items been shown has been turned into a much simpler image that answers a question.

Many questions that are asked about network data are of the same nature: How many people who have done A also do B? How do potential customers navigate the different elements on a website and where do they give up? What classes of products are bought together or in quick succession? etc.

## The Graph Beyond the Graph

For a while now, people in visualization have talked about <em>the graph without the graph</em>, i.e., graph visualization without the hairballs. Networks are clearly important and challenging data, and it seems a bit myopic to only look at node-link visualization. Node quilts and the PivotGraph represent promising steps into a very different direction. While they require more work to understand and are more limited in what they can be used for, they are also much directed towards a goal than just showing all of the data. I think that this kind of thinking will lead us to much more interesting techniques in the future than trying to teach the old node-link diagram new tricks.


_Posted by <a href="/about">Robert Kosara</a> on February 01, 2012_


<aside class="comments">

---
## Comments

<a href="http://cscheid.net" rel="nofollow noopener" target="_blank">Carlos Scheidegger</a> says…
>	Thanks for the link - I expect my traffic to increase by 10x ;) (And matrix diagrams will be featured too!)
>	
>	I agree with you that Node Quilts are intriguing. But be careful: I don't think that the graph in that picture is acyclic. How do I know that? The matrix diagram shows it to me! If a graph is acyclic, then there's a permutation of the rows such that no edge lies on the lower diagonal (and then you also see the *problem* with matrix diagrams: how do I know that the presented ordering is such a permutation? Right now I only suspect that.). This type of thinking is one of the main things I hope to show in my series: different diagram types preserve different things. I want to understand a little more formally ("mathematically") how to think about those issues. Node quilts are sufficiently complicated to describe that I don't think I have the tools to do that analysis at present; but contrasting node-link and matrix diagrams is what I intend to do.
>	
>	Some node-link algorithms for directed graphs work well in the case of acyclic graphs because you can show ranks vertically, and then order them within-ranks  horizontally. But using traditional force-directed node-link algorithms for directed graphs with cycles is usually a mistake, because directed graphs don't have a good notion of a metric. Think of me on twitter, following @barackobama. Any algorithm that places me close to him because there's a link between the two of us misses that this link is horribly assymetric. Worse still, any distance-based placement fundamentally misrepresents the situation (and I believe tacking arrowheads on top of it does not help much: arrowheads are not preattentive like distances)
>	
>	There are a few possible answers here, all research questions: metaphors for node-link diagrams that don't invoke distance (seems hard), better algorithms for node-link diagrams (eg. just because two vertices are connected it doesn't mean they have to be close to each other), and non-node-link diagrams in general.

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	You're right that the example graph in the quilt is not acyclic, and I kind of said that in the text. I didn't want to spend a lot of time talking about the finer points, but they actually show backlinks differently than links that skip over levels.
>	
>	I guess I'll write more about matrix diagrams and node quilts in the future and go into more detail. Maybe we can play off each other's efforts.

<a href="http://www.joshuasaxe.com" rel="nofollow noopener" target="_blank">Josh Saxe</a> says…
>	Thanks for the great post, which reminded me of some of Ian Timourian's visualizations of the del.icio.us "bookmark graph":
>	
>	http://mandalabrot.net/delicious/graphs.html
>	
>	When I first saw this it struck me as a particularly elegant way to visualize a specific subset of a graph's vertices and edges that, as you say, answer a specific question.
>	
>	But just as a visualization of an adjacency matrix is also a _matrix_ visualization, this visualization is as much a "set intersection" visualization as it is a graph visualization.
>	
>	I'd be interested in seeing more examples of visualizations of graphs transformed into alternative representations.  It seems like while "graph" may be the best metaphor for the computational analysis piece of a project, other metaphors can sometimes best serve in supporting visual analysis ("set", "matrix", "histogram", ...).

Al says…
>	Dear Mr Kosara,
>	
>	If I may, I'd like to set you a challenge. 
>	
>	Here's the story of a brave attempt by a design company to try to make a hairball design work on a fairly large data set, through brute force and design skill alone - http://www.fastcodesign.com/1668928/the-only-chart-you-need-to-mix-a-proper-cocktail. It arguably comes about as close as is possible to making a big hairball work (I'd only add that it would be more usable if they'd duplicated the labels to both ends of each connecting line, so you know where you're going before following the line), and it has enough of a combination of aesthetics and usability that they can sell copies for $35 each. But, to be usable it needs to be printed as a huge wall-sized poster, and using it is still hard work.
>	
>	So here's the challenge. If the above techniques can supplant hairballs, how would you use them to better show this data set? What would the Eager Eyes version of this poster look like?

<a href="http://www.BioFabric.org" rel="nofollow noopener" target="_blank">William Longabaugh</a> says…
>	My view is that the best way to deal with "the hairball" is to abandon the notion that nodes have to be represented essentially as points.  Instead, represent nodes as horizontal lines...vertical lines are then used to represent edges.  This creates an unambiguous presentation.  Software that does this kind of visualization has just been released; see www.BioFabric.org.  The companion paper is at http://www.biomedcentral.com/1471-2105/13/275/

</aside>

