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
