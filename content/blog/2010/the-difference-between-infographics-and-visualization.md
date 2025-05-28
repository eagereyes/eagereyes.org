# The Difference Between Infographics and Visualization

What is the key difference between a visualization and a data-based infographic? The visualization is created by a program that can be applied to many datasets, the infographic is hand-crafted for a particular dataset. It's obvious, which is why it's so hard to figure out.

I had this little insight when reading <em><a href="http://radar.oreilly.com/2010/08/visualization-as-journalism.html">Lies, damn lies, and visualizations</a></em> on O'Reilly Radar. The story starts with a discussion of data science and visualization, but then uses this image as an example why visualization is not objective.

<a href="https://media.eagereyes.org/media/2010/health_viz.png"><img src="https://media.eagereyes.org/media/2010/healthcare_560.jpg" alt="" width="560" height="437" /></a>

Of course it's not, but that is besides the point. The bigger issue I have is that it's not a visualization. This is an infographic: it was made for a particular dataset, for a particular purpose. That is what infographics are: they are elaborate, explanatory, and self-contained. But that means they must be specific and done by hand each time. There is no program that could churn out specific artwork, photographs, and explanatory text for an arbitrary dataset.

Visualization, on the other hand, is general. <a href="/techniques/parallel-coordinates">Parallel coordinates</a> or <a href="/techniques/pie-charts">pie charts</a> do not care about what data they show. That means that they may be used for data that they are not suitable for, but the program itself typically won't be able to tell you that. The power of visualization is that you can quickly apply such an existing technique to new data to get an idea what it's about. But the onus of picking the right visualization technique and parameters is on the user. And so is explaining what the data is and what can and cannot be seen in the visualization. A general technique cannot do that.

Visualization is general, infographics are specific. Visualization is context-free, infographics are context-sensitive. Visualization is (largely) automatic, infographics are hand-crafted. Neither are objective, and both require hand-tuning and understanding to get right.
