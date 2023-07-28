---
title: "IEEE VIS 2017: A SciVis Perspective"
description: "Since my (Robert)'s conference reports are almost entirely focused on InfoVis (and a bit of VAST), I have asked Noeska Smit, medical visualization professor and my collaborator in the Vis Potpourri postings, to write about VIS from the SciVis perspective. Everything below are Noeska's words."
date: 2017-10-16 08:33:46
tags: conference, IEEEVIS
featuredImage: https://media.eagereyes.org/wp-content/uploads/2017/10/image001.jpg
outline: false
---

# IEEE VIS 2017: A SciVis Perspective

<em>Since my (Robert)'s conference reports are almost entirely focused on InfoVis (and a bit of VAST), I have asked <a href="http://noeskasmit.com">Noeska Smit</a>, medical visualization professor and my collaborator in the </em><a href="https://eagereyes.org/section/vis-potpourri">Vis Potpourri</a><em><a href="https://eagereyes.org/section/vis-potpourri"> postings</a>, to write about VIS from the SciVis perspective. Everything below are Noeska's words.</em>

It's been a while since I wrote a conference report. I used to write them for <a href="http://www.medvis.org">medvis.org</a> regularly in the past. However, given the low amount of medical visualization papers at some of the conferences I attended, some would have ended up as very short reports indeed ;). From now on, I'll still write conference reports, even if they may not only contain 100% medvis content, starting with this IEEE VIS 2017 report.

VIS 2017 took place in Phoenix, Arizona, and for me personally this was a bit problematic. The transition from rainy Bergen, Norway, to this hot arid desert climate gave me a lovely case of heat exhaustion, which unfortunately led to me missing some of the paper sessions. Less complaining, more reporting! Besides papers, I also wrote about tutorials, awards, parties, and meetups, but since Robert already covered that here, I will be sharing this on <a href="http://noeskasmit.com/">my personal blog</a>.

<h3>Papers</h3>

I mainly attended the SciVis paper sessions (though some of the sessions did not feature a SciVis track at all!), when I was not too busy being sick ;), and will briefly write about some personal highlights of these sessions.

<em>Activity-Centered Domain Characterization for Problem-Driven Scientific Visualization</em> by G. Elisabeta Marai addresses the interesting problem of domain characterization for (scientific) visualization. Liz talked about shifting from human-centered design to activity-centered design. She presented a model for this which adds functional specs to the famous Nested Model proposed by Tamara Munzner.

<img src="https://pbs.twimg.com/media/DLPiVxkXUAEiDnX.jpg:large" alt="" width="2048" height="1152" />The Activity-Centered Design Model

<em>The Good, the Bad, and the Ugly: A Theoretical Framework for the Assessment of Continuous Colormaps</em> by Roxana Bujack, Terece L. Turton, Francesca Samsel, Colin Ware, David H. Rogers, and James Ahrens deals with how to assess continuous colormaps. People often speak of perceptually linear, but exact definitions of this concept vary depending on who you ask. In this paper, an overview of literature on the topic so far is presented, along with guidelines for colormap design. As the icing on the cake, there is also an accompanying online tool: <a href="http://colormeasures.org/">colormeasures.org</a>, which lets you check if your colormaps are good, bad, or ugly ;).

[embed]https://twitter.com/_Noeska_/status/915330652588740608[/embed]

<em>Interactive Dynamic Volume Illumination with Refraction and Caustics</em> by Jens G. Magnus and Stefan Bruckner presents a volume rendering solution which allows for real-time refraction and caustics. This is the stuff that makes glass look like glass, and that was so far not possible to do dynamically with on the fly parameter adjustment for volumetric datasets. Jens presented the results of his master thesis on this topic (this trend of master students making awesome VIS papers needs to stop, they are making me look bad ;)). Since I love the sound of my own voice, here is a short video that shows the technique in action:

[embed]https://vimeo.com/230835804[/embed]

<em><a href="http://www.willusher.io/publications#vrnt">A Virtual Reality Visualization Tool for Neuron Tracing</a></em> by Will Usher, Pavol Klacansky, Frederick Federer, Peer-Timo Bremer, Aaron Knoll, Alessandra Angelucci, Valerio Pascucci proposes a VR tool for neuronal tracing in volumetric datasets. They argue that segmentation of neurons from volumetric datasets is currently often performed in 2D slices or on a 2D screen, while this task is inherently 3D. They compared their 3D VR approach with the currently used tool by the domain experts, and got good feedback. Their website has a video and more.

<em>TopoAngler: Interactive Topology-based Extraction of Fishes</em> by Alexander Bock, Harish Doraiswamy, Adam Summers, and Cláudio Silva deals with the problem of extracting fish from volumetric micro-CT scans. Researchers scan multiple fish squished together to save scanning costs, but it is not straightforward to segment out individual fish afterwards. Alex Bock, after a brilliant Fast Forward full of fish puns, presented the tool they developed for this purpose, which is also <a href="https://github.com/ViDA-NYU/Segmentangling">available on Github</a>.

<em>The Topology ToolKit</em> by Julien Tierny, Guillaume Favelier, Joshua A. Levine, Charles Gueunet, and Michael Michaux presents, as the title may suggest, a powerful toolkit for topological data analysis in scientific visualization. The toolkit is <a href="https://topology-tool-kit.github.io/">available on Github</a>, and even comes with VTK bindings (for those of you that are not 'allergic to VTK' as Julien mentioned ;)).

In the non-SciVis-track-department, I really enjoyed two talks especially. <em>Functional Decomposition for Bundled Simplification of Trail Sets</em> by Christophe Hurter, Stéphane Puechmorel, Florence Nicol, and Alexandru Telea dealing with graph edge bundling based on function with some very nice DTI brain examples (secretly a SciVis paper?).

[embed]https://twitter.com/TofHurter/status/906807500560850944[/embed]

<em>DeepEyes: Progressive Visual Analytics for Designing Deep Neural Networks</em> by Nicola Pezzotti, Thomas Höllt, Jan van Gemert, Boudewijn P.F. Lelieveldt, Elmar Eisemann, and Anna Vilanova deals with involving user interaction and visual feedback in the design of Deep Neural Networks.

I notice from my summary that there not all that many 'traditional SciVis medical visualization papers' to write about. However, I did observe that closely related topics such as visual analytics in healthcare are very popular. I would love to see this field of research considering more imaging data in their approaches. The combination and integration of spatial and non-spatial medical data visualization seems to be a promising area of research. In conclusion, despite the heat, I really had a great VIS, and am definitely looking forward to VIS 2018, which will be held in Berlin, Germany.

<hr />

See also:

<ul>
    <li><a href="https://eagereyes.org/blog/2017/ieee-vis-2017-best-papers-keynote-capstone">Best Papers and Other Awards</a></li>
    <li><a href="https://eagereyes.org/blog/2017/ieee-vis-2017-keynote-and-capstone">Keynote and Capstone</a></li>
    <li><a href="https://eagereyes.org/blog/2017/ieee-vis-2017-word-clouds-sparklines-stories-interaction">Word Clouds, Stories, Interaction</a></li>
    <li><a href="https://eagereyes.org/blog/2017/ieee-vis-2017-perception-evaluation-vision">Perception, Evaluation, Vision Science</a></li>
    <li><a href="https://eagereyes.org/blog/2017/ieee-vis-2017-machine-learning-diversity-parties">Machine Learning, Diversity, Parties</a></li>
</ul>


_Posted by <a href="/about">Robert Kosara</a> on October 16, 2017_


