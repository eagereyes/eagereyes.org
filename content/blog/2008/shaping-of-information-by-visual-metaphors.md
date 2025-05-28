<p align="center"><img alt="Paper" src="https://media.eagereyes.org/media/2008/Ziemkiewicz_InfoVis_2008.jpg" width="464" height="300" border="0" /></p>

# The Shaping of Information by Visual Metaphors

In January, my Ph.D. student <a href="http://www.cs.brown.edu/people/cziemki/">Caroline Ziemkiewicz</a> told me about an interesting observation she had made: in different papers comparing tree visualizations, <a href="/blog/2008/treemaps">treemaps</a> came out as best, worst, or somewhere in the middle. One difference she noticed was how the questions were worded: when a levels metaphor was used, treemaps did badly; a containment metaphor, on the other hand, seemed to favor treemaps. So we decided to investigate – the result will be presented at <a href="http://vis.computer.org/VisWeek2008/infovis/sessions_papers.html#design">InfoVis</a> on Monday, October 20.

Containment questions use a metaphor of nesting, e.g., <em>Find the directory that </em><em>contains </em><em>the most .png type files</em>. Levels questions, on the other hand, use the more common node-link idea of a tree, e.g., <em>Participants counted the number of </em><em>levels </em><em>in the tree</em>.

<p align="center"><img alt="Levels vs. Containers" src="https://media.eagereyes.org/media/2008/levelsvscontainers.png" width="395" height="236" border="0" /></p>

The "smoking gun" is Table 1 in the paper, which shows a clear correlation between the number of containment questions and the ranking of treemaps. While the sample is small (five papers), the evidence is damning.

This is only the first step in this direction, but it gives pause to the idea that visualization is merely a conduit for information. The design and underlying metaphor of a technique actively shapes the way users understand the visualization, and its compatibility or incompatibility with the user's mental model determines how effective it is. The beauty of this work is that it is actual science: it is based on an initial observation, we set up an experiment to test our initial hypothesis, and we are drawing conclusions from its results.

Caroline is doing a lot of promising work in this direction, which will deepen our understanding of how visualization actually works (on the level of cognition, not just perception), and lead us to better visualization techniques and more effective evaluation.

For more details, you will have to see the talk at InfoVis (on Monday, October 20, in the <a href="http://vis.computer.org/VisWeek2008/infovis/sessions_papers.html#design">Design session</a>), and/or read the paper: <a href="/publications/Ziemkiewicz-InfoVis-2008">The Shaping of Information by Visual Metaphors</a>
