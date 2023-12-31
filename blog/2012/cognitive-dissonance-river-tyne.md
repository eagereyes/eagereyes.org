---
title: "Cognitive Dissonance on the River Tyne"
description: "Moritz Stefaner and Stephan Thiel have created a visualization of sensor data acquired by a floating mill on the river Tyne in Newcastle upon Tyne, Great Britain. Their choice of a flow metaphor for non-flow data creates a cognitive dissonance that makes the visualization difficult to understand."
date: 2012-07-22 21:47:30
tags: criticism
featuredImage: https://media.eagereyes.org/wp-content/uploads/2012/07/tyne.png
outline: false
---

# Cognitive Dissonance on the River Tyne

Moritz Stefaner and Stephan Thiel have created <a href="http://www.flowmill.org/tyne">a visualization of sensor data</a> acquired by a floating mill on the river Tyne in <a href="http://en.wikipedia.org/wiki/Newcastle_upon_Tyne">Newcastle upon Tyne</a>, Great Britain. Their choice of a flow metaphor for non-flow data creates a cognitive dissonance that makes the visualization difficult to understand.

The mill itself generates power, and there are sensors that measure a few properties of the water flowing through it: oxygen level, acidity, nitrates, salinity, and wheel speed.

So there is flowing water involved, and the visualizations Moritz and Stephan’s project create look like this:

<p align="center"><img class="aligncenter size-full wp-image-1993" title="Tyne" src="https://media.eagereyes.org/wp-content/uploads/2012/07/tyne.png" alt="" width="600" height="179" /></p>

These are streamlines, <a href="http://well-formed-data.net/archives/782/tyne-simulation-as-visualization">generated by particles that leave a trace</a>. The obvious assumption is therefore that the visualization shows the flow of water. However, it does no such thing. The particles are guided by forces that are generated by the other four parameters, but not the wheel speed.

To understand why this is odd, let’s look at another example of streamlines: <a href="http://hint.fm/wind/">Martin Wattenberg and Fernanda Viegas’ <em>Wind Map</em></a>.

<p align="center"><img class="aligncenter size-full wp-image-1994" title="Wind Map" src="https://media.eagereyes.org/wp-content/uploads/2012/07/wind.png" alt="" width="600" height="380" /></p>

The technique is very similar, but the data is different: <em>Wind Map</em> uses the visual concept of flow to show something that flows or moves (the air and the wind).

While there is no principle reason why flow can’t be used to visualize abstract data like salinity, the problem in the Tyne case is that there is something that flows: the water. So when seeing something that looks like the flow of water, it’s a reasonable assumption to make that it depicts that flow. When it doesn’t, that not only requires a bigger leap to understand what is going on, it’s actually hard work to ignore the obvious mapping of the data to the visualization and think about the abstract data it depicts.

How could this have been avoided? One obvious way of showing the data, <a href="http://www.flowmill.org/streaming">boring line charts</a>, was probably not what they had in mind. Simply changing the flow to not be so linear, but maybe go around a circular area would have helped. That would also perhaps have created some more complex patterns. There are many other possibilities, and Moritz and Stefan show <a href="http://well-formed-data.net/archives/782/tyne-simulation-as-visualization">a few early sketches</a> in <a href="http://www.nand.io/visualisation/tyne">their blog postings</a>.

It’s unfortunate that they ended up sticking so closely to the obvious metaphor, the flow. The other designs strike me as much more interesting, and would have avoided the confusion. As it is, the flow metaphor creates nice images, but to understand what is shown requires a lot of unnecessarily hard work.


<PostedBy />


<aside class="comments">

---
## Comments

Nigel says…
>	Good analysis Robert. I agree with what you say, when I first looked at this I found it very hard to get away from the flow NOT being the flow of water, making my reading of the data quite difficult to understand. Going back to it now I still find it hard to take in exactly what I am looking at

<a href="http://marine.rutgers.edu/cool/maracoos/imagery/" rel="nofollow noopener" target="_blank">Hugh Roarty</a> says…
>	Would you be interested in animating our ocean surface current data?

</aside>

