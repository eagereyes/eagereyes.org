---
title: "VIS 2016 – Wednesday, Thursday: Papers and the Death of SciVis"
description: "Two more postings about VIS 2016 last week! Wednesday got a lot of us talking, with the Death of SciVis panel. There were also more papers on a variety of topics."
date: 2016-10-30 19:17:06
tags: conference, IEEEVIS
featuredImage: https://media.eagereyes.org/wp-content/uploads/2016/10/DSCF4473.jpg
---

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2016/10/DSCF4473.jpg" width="720" height="540" /></p>

# VIS 2016 – Wednesday, Thursday: Papers and the Death of SciVis

Two more postings about VIS 2016 last week! Wednesday got a lot of us talking, with the Death of SciVis panel. There were also more papers on a variety of topics.

## InfoVis Applications

I missed the first two presentations in this session, unfortunately. I heard good things about <a href="http://web.cs.wpi.edu/~ltharrison/files/hakone2016proact.pdf"><em>PROACT: Iterative Design of a Patient-Centered Visualization for Effective Prostate Cancer Health Risk Communication</em></a> by Anzu Hakone, Lane Harrison, Alvitta Ottley, Nathan Winters, Caitlin Gutheil, Paul K. J. Han, and Remco Chang, though. It's a system that shows cancer patients data about their different treatment options to help them make decisions. This is a very sensitive area of course, so careful design is particularly important.

Most decisions are based on trade-offs and figuring out which criteria are more or less important. That's not an easy task though, especially when you have a lot of them. <i>WeightLifter: Visual Weight Space Exploration for Multi-Criteria Decision Making</i> by Stephan Pajer, Marc Streit, Thomas Torsney-Weir, Florian Spechtenhauser, Torsten Möller, and Harald Piringer presents a smart technique to let users change the weights of different factors that play into a model and see where the boundaries are that lead to different outcomes. The technique is implemented in the <a href="http://www.vrvis.at/research/projects/visplore/">VISplore system</a>.

<i></i><i>Optimizing Hierarchical Visualizations with the Minimum Description Length Principle</i><b> </b>by Rafael Veras and Christopher Collins addresses the problem of navigating large hierarchies. Treemaps and other visualizations get cluttered quickly when there are too many nodes. Instead of just navigating by level, description length finds a way to reveal the nodes first that are more likely to be of interest. The <a href="http://github.com/rafaveguim/treecut.js">source code is available</a>, as are <a href="http://vialab.ca/mesh/">two</a> different <a href="http://vialab.ca/dmoz/">demos</a>.

## Panel: On the Death of SciVis

The scientific visualization (SciVis) part of VIS has been in decline for a while. It may be confusing from the outside, and it's not always a clear distinction, but there are basically two types of visualization: scientific visualization mostly deals with things that can be measured or simulated in 3D space: volume data from CT or MRI machines, flow data from simulations, etc. Information visualization (InfoVis), on the other hand, deals with more abstract data, where there is no real thing that can be depicted (like the structure of a file system), or it's of no relevance (like when looking at statistical data that ultimately describes things or people, but there is no point in showing those directly).

Over the last ten years, the number of submissions in this area of the conference has slowly declined, and this can be felt both in terms of the quality of the work (and the acceptance rate, even if that is not a perfect measure) and the amount of work accepted (there are fewer SciVis sessions than there used to be).

The panelists did a good job discussing where the decline comes from – in part, it's because a number of problems have been solved and are now available as software – and suggesting future directions, like incorporating some of the hot new topics like machine learning or augmented reality. They all of course ultimately dodged the question, but did so in very constructive and interesting ways (not always a given at panels).

The big howler came during the discussion part, though. The first question was about diversity: how to increase that in a field that is not doing terribly well. Han-Wei Shen unwisely said something along the lines of "we're doing fine," which didn't go over so well. Since I was next in line for a question, I looked around the room and pointed out that there were around 15-20% women, no person of color, and not even many Asians in the room. A related issue (that I didn't mention) is age: the people in SciVis sessions are pretty visibly older on average. Not a good sign for a field that wants to stay alive beyond the careers of those in it right now.

There were some follow-on comments on diversity (most notably from Kelly Gaither), and I think this is a topic that will get some attention next year. It definitely needs to be raised, and not just in SciVis. It's an issue across visualization, and it has been almost completely ignored so far.

## <b>InfoVis: Storytelling</b>

Back to papers! It's fairly common that people create basic visual representations using code, like using D3, and then clean up and further prepare the result in a design tool like Adobe Illustrator. The problem is that once you've invested a lot of work in Illustrator, you can't easily incorporate changes in the data, change sort order, or similar. <a href="https://www.cs.utah.edu/~miriah/publications/hanpuku.pdf"><i>Iterating Between Tools to Create and Edit Visualizations</i></a> by Alex Bigelow, Steven Drucker, Danyel Fisher, and Miriah Meyer presents a tool named Hanpuku that lets designers merge changes coming from both code and the design tool. <a href="https://github.com/alex-r-bigelow/hanpuku">Hanpuku's source code is also available</a>.

<a href="http://namwkim.org/ddg"><i>Data-Driven Guides: Supporting Expressive Design for Information Graphics</i></a> by Nam Wook Kim, Eston Schweickart, Zhicheng Liu, Mira Dontcheva, Wilmot Li, Jovan Popovic, and Hanspeter Pfister. To create information graphics, they provide guides for both length and size that respond to data. Designers can then use those to size all sorts of objects correctly. It's a very clever idea because it provides something that's quite simple but very versatile (<a href="http://hyecoo.namwkim.org">online demo here</a>).

<a href="http://hci.cs.umanitoba.ca/projects-and-research/details/dataclips"><i>Authoring Data-Driven Videos with DataClips</i></a> by Fereshteh Amini, Nathalie Henry Riche, Bongshin Lee, Andres Monroy-Hernandez, and Pourang Irani makes it easy to create elaborate videos from animated clips like growing bar charts, ISOTYPE-style plots, etc. There is <a href="http://dataclips.azurewebsites.net">an online demo</a> as well that's quite impressive.

<i>Temporal Summary Images: An Approach to Narrative Visualization via Interactive Annotation Generation and Placement</i> by Chris Bryan, Kwan-Liu Ma, and Jonathan Woodring combines a timeline (the somewhat controversial stream graph) with map snapshots to show change on maps over time. They have some interesting criteria to find the right time steps to use in the snapshots.

Finding good color scales remains a common problem.<em> <a href="http://vrl.cs.brown.edu/color">Colorgorical: Creating discriminable and preferable color palettes for information visualization</a></em> by Connor C. Gramazio, David H. Laidlaw, and Karen B. Schloss is a new tool that lets designers create a new palette based on a number of criteria. It helps move beyond the classic ColorBrewer scales, not least because it lets you specify a starting color. In addition to some of the usual parameters like perceptual distance, Colorgorical also has some more unusual features, like using the name distance (how different the words for the colors are) to pick out colors that are clearly distinct. It's also worth pointing out that they compared their colors not just against other academic work, but against colors used in Microsoft Office and Tableau.

There was more on Thursday, but I'm splitting things here to keep this posting to a reasonable length.


_Posted by <a href="/about">Robert Kosara</a> on October 30, 2016_


<aside class="comments">

---
## Comments

Evan says…
>	Excellent - thanks for the summary. 
>	One question: Is it really that common for people to use D3 to generate a chart that they edit in Illustrator? If so, why? D3 is not too hard once you get the hang of it, but it still seems like overkill just to generate the bones of something that you are going to modify in Illustrator. Also, what clean up can be done in Illustrator that can't be done in D3?

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	Yes, in the data journalism and infographics worlds, this is a very common workflow. There's <em>a lot</em> you can do much faster and more easily in Illustrator than in code. In principle most or all of that can be done in D3 directly, but it's way more effort and takes much longer.

</aside>

