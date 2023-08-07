---
title: "VIS 2015 – Thursday"
description: "Between the sessions, parties, discussions, running, and the occasional short sleep break, I fell a bit behind on the blogging about VIS 2015. After separate postings for Tuesday and Wednesday, this part covers Thursday. The posting about Friday will be short, but squeezing both days into one felt like a bit too much."
date: 2015-11-01 21:40:23
tags: conference, IEEEVIS
featuredImage: https://media.eagereyes.org/wp-content/uploads/2015/11/vis-thu-teaser2.jpg
---

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2015/11/vis-thu-teaser2.jpg" alt="" width="825" height="510" /></p>

# VIS 2015 – Thursday

Between the sessions, parties, discussions, running, and the occasional short sleep break, I fell a bit behind on the blogging about <a href="http://ieeevis.org">VIS 2015</a>. After separate postings for <a href="/blog/2015/vis-2015-tuesday">Tuesday</a> and <a href="/blog/2015/vis-2015-wednesday">Wednesday</a>, this part covers Thursday. The posting about Friday will be short, but squeezing both days into one felt like a bit too much.

BTW, the headings you see here are the session titles. I ended up only going to InfoVis sessions (and the odd panel), so that's where they are from.

## Human Reasoning

An important question that often comes up when looking at the use of visualization in presentation is whether people even understand it. <em>How do People Make Sense of Unfamiliar Visualization?: A Grounded Model of Novice’s Information Visualization Sensemaking</em> by Sukwon Lee, Sung-Hee Kim, Ya-Hsin Hung, Heidi Lam, Youn-ah Kang, and Ji Soo Yi looked into this question. The study they presented was purely qualitative, and they looked at some of the more academic types of visualization (parallel coordinates, chord diagrams, treemaps). They did gather some interesting insights into how people cope with novel visualizations, though, but didn’t really answer whether people were generally able to figure things out.

<em>Acquired Codes of Meaning in Data Visualization and Infographics: Beyond Perceptual Primitives</em> by Lydia Byrne, Daniel Angus, and Janet Wiles looked at the conventions used in visualization to cue people’s reading process. They had some interesting points about how those can help people make sense of a visualization, though they can’t override the basics of perception, of course. <a href="http://visualizationwhiteboard.com">Byrne has an interesting website</a> with the paper and related materials.

<a href="http://massvis.mit.edu"><em>Beyond Memorability: Visualization Recognition and Recall</em></a> by Michelle A. Borkin, Zoya Bylinskii, Nam Wook Kim, Constance May Bainbridge, Chelsea S. Yeh, Daniel Borkin, Hanspeter Pfister, and Aude Oliva was perhaps the most anticipated paper of the week. It is a sort of follow-up to some of the same authors’ paper on memorability in 2013 that received a good bit of criticism. This time, they tried to answer a broader question: [what makes a visualization effective](https://twitter.com/eagereyes/status/659739816255496192)?

<em>Effective</em> is of course not just one thing, so they looked at memorability again, but in a more nuanced way. Their framing is also very much about presentation, which means that they included the common trappings of news graphics: titles, labels, text, legends, etc. Those also turned out to be more memorable than the actual data itself. Jean-Daniel Fekete called those “tricks,” but I don’t think that’s fair: the data is still necessary, but what sticks is something else. This nicely reinforces the idea of the annotation layer that data journalists like to talk about.

<em><a href="http://www.eecs.tufts.edu/~alvittao/files/bayes.pdf">Improving Bayesian Reasoning: The Effects of Phrasing, Visualization, and Spatial Ability</a></em> by Alvitta Ottley, Evan M. Peck, Lane T. Harrison, Daniel Afergan, Caroline Ziemkiewicz, Holly A. Taylor, Paul K. J. Han, and Remco Chang is another look at the problem of reasoning about conditional probabilities. People are generally very bad at this, and there have been some efforts in the past to give people better visual tools to understand the meaning of these things. This study looked at some of the factors that can help people do better in these types of situations, like the phrasing of the problem, the use of visuals, and spatial ability. All <a href="https://github.com/TuftsValt/bayes">their study materials are available on github</a>.

## Interactive Systems

Many times, when presented with interactive visualization on the web, people don’t actually bother to interact (or realize that they can). This is something we see on Tableau Public, and it’s a commonly observed issue. <a href="http://peopleviz.gforge.inria.fr/trunk/SI_cues/"><em>Suggested Interactivity: Seeking Perceived Affordances for Information Visualization</em></a> by Jeremy Boy, Louis Eveillard, Francoise Detienne, and Jean-Daniel Fekete looked into ways to provide cues to change that. Their approaches are fairly heavy, but they do make a difference. Until people are used to interaction more, this will likely be necessary to get them to actually make some use of all the nice interactions we build into online visualizations.

I already mentioned the <em>Voyager: Exploratory Analysis via Faceted Browsing of Visualization Recommendations</em> paper by Kanit Wongsuphasawat, Dominik Moritz, Anushka Anand, Jock Mackinlay, Bill Howe, and Jeffrey Heer when I wrote about the <a href="/blog/2015/tableau-papers-at-ieee-vis-2015">Tableau Research papers at VIS</a>. Voyager is built on top of <a href="http://vega.github.io/vega/">Vega</a>, which is a different way of creating interactive visualizations on the web than D3. <em>Reactive Vega: A Streaming Dataflow Architecture for Declarative Interactive Visualization</em> by Arvind Satyanarayan, Ryan Russell, Jane Hoffswell, and Jeffrey Heer walked through the architecture and how it works. By using a more declarative approach, they are able to make things less confusing to specify and even faster to run than D3. You can <a href="http://vega.github.io/vega-editor/?mode=vega&amp;spec=crossfilter">play with Vega online</a>, and there is also <a href="https://github.com/vega/vega-benchmarks">a suite of benchmarks</a>.

<a href="http://visdockhub.github.io/NewVisDock/"><em>VisDock: A Toolkit for Cross-Cutting Interactions in Visualization</em></a> by Jungu Choi, Deok Gun Park, Yuet Ling Wong, Eli Raymond Fisher, and Niklas Elmqvist provides a standard set of interactions (like selection, labeling, etc) that can effectively be dropped on a D3 visualization to give people more interaction tools. The styling could be improved and it’s not terribly flexible, but it has a nice set of features that can enrich a visualization considerably.

## Techniques

<a href="http://keshif.me/AggreSet/"><em>AggreSet: Rich and Scalable Set Exploration using Visualizations of Element Aggregations</em></a> by M. Adil Yalcin, Niklas Elmqvist, Benjamin B. Bederson is an interactive technique for exploring data items that can belong to many overlapping sets. You can play with it online at the paper URL linked in the previous sentence.

Two more <a href="/blog/2015/tableau-papers-at-ieee-vis-2015">Tableau Research papers</a> were also presented in this session.


_Posted by <a href="/about">Robert Kosara</a> on November 01, 2015_


