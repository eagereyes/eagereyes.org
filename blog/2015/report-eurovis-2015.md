---
title: "Report: EuroVis 2015"
description: "I attended EuroVis 2015 last week in Cagliari, Sardinia. This is the second-most important conference in the academic visualization world, and there were plenty of good sessions to choose from (full and short papers, state-of-the-art reports, and industry sessions)."
date: 2015-06-01 18:17:39
tags: conference, eurovis
featuredImage: https://media.eagereyes.org/wp-content/uploads/2015/06/DSCF5939.jpg
---

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2015/06/DSCF5939.jpg" alt="" width="825" height="510" /></p>

# Report: EuroVis 2015

I attended <a href="http://eurovis2015.it">EuroVis 2015</a> last week in Cagliari, Sardinia. This is the second-most important conference in the academic visualization world, and there were plenty of good sessions to choose from (full and short papers, state-of-the-art reports, and industry sessions).

As usual, this is a highly subjective and incomplete report. I did not see anywhere near all presentations, and I am only describing the papers I really liked (or that I have something meaningful to say about) below. It also helps when authors have something to link to, since that makes mentioning the paper much more valuable.

EuroVis this year had 250–300 participants from 30 different countries. The organizers didn’t know the precise number in the opening session, and the closing didn’t reveal any new information either. Full papers had 160 submissions with 51 accepted, for a 32% acceptance rate. Short papers had 58 submissions, of which 24 were accepted, resulting in an acceptance rate of 41%. This information does not seem to be available in the electronic proceedings that attendees received on the USB stick, which I think is problematic. Having to catch those numbers in the opening session can’t be the best way to disseminate this information.

## EuroRVVV

I attended the <a href="http://www.eurorvvv.org/program/">EuroRVVV</a> workshop (RVVV stands for reproducibility, verification, and validation in visualization) on Monday and Tuesday. I didn’t find the individual presentations particularly interesting, though there were some good discussions. What was most striking though was that not one paper in a workshop about reproducibility had materials or a tool online that they linked to. Are papers on reproducibility themselves reproducible or verifiable? The answer appears to be no.

The idea of the workshop clearly makes sense, but I’m not convinced that the participants really had a strong enough drive to really make things happen. The most interesting discussion was around levels of reproducibility that were mentioned in one of the presentations, from <a href="http://www.cs.huji.ac.il/~feit/papers/Repeat15SIGOPS.pdf">a paper at SIGOPS</a> rather than at this workshop. Much of the discussion also revolved around whether messy and imperfect code should be a reason not to release it. I wish more people were aware of Matt Might’s <a href="http://matt.might.net/articles/crapl/">Community Research and Academic Programming License (CRAPL)</a> and would just give that excuse a rest.

I may be harsh here, but this is an area where academics could do really good work pretty easily rather than just discussing the difficulty of the topic ad nauseam.

## Evaluation and Design

The evaluation session had a very nice set of papers, and I’m not just saying that because one of my papers was in it.

Michael Sedlmair and Michaël Aupetit started things off with <em>Data-driven Evaluation of Visual Quality Measures</em>. They looked at a number of visual quality metrics for clusters that they had previously rated against human judgments, and designed a way to predict those judgments using machine learning. This work is highly interesting, because it can help users get results faster if the kinds of questions they might ask are known.

Sebastian Mittelstädt and Daniel Keim looked into <em>Efficient Contrast Effect Compensation with Personalized Perception Models</em>. Their goal is to enhance the contrast of visualizations after the fact. To do that, they run a model of color contrast on the GPU, which makes things considerably faster than other methods. They are able to personalize the model to the person and the device used with just four sets of two sliders.

I’ve mentioned our paper <em><a href="/papers/evaluation-of-the-impact-of-visual-embellishments-in-bar-charts">An Evaluation of the Impact of Visual Embellishments in Bar Charts</a></em> before, but this is where it was presented, and it fit in very nicely.

My favorite of the session was <em><a href="http://j.mp/datasketching">An Exploratory Study of Data Sketching for Visual Representation</a></em> by Jagoda Walny, Samuel Huron, and Sheelagh Carpendale. Instead of letting computers have all the fun, they present a dataset to students who then sketch that data on paper with colored pencils. The results are very interesting and they found a number of different strategies. The paper received a best paper honorable mention (it was the runner-up), which it clearly deserved.

## Cartograms, Memory, and Graph Testing

I’m not a fan of cartograms, but <em><a href="http://cartogram.cs.arizona.edu">Quantitative Measures for Cartogram Generation Techniques</a></em> by Md. Jawaherul Alam, Stephen G. Kobourov, and Sankar Veeramoni presented some interesting measures to assess and maybe improve cartograms. They presented measures for statistical accuracy, topology, recognizability, readability, shape complexity, and algorithmic efficiency. Some of these are easier to measure than others. They make all their data and materials available, which is great.

Continuing the cartogram theme was<em> Mosaic Drawings and Cartograms</em> by Rafael Cano, Kevin Buchin, Thom Castermans, Astrid Pieterse, Willem Sonke, and Bettina Speckmann. Their approach produces hexagonal or square-based cartograms with reasonably nice properties, though it also created some weird artifacts (like placing Washington and Oregon east of California in a map of Starbucks locations).

<em><a href="https://sites.google.com/site/eurovis2015">Map-based Visualizations Increase Long-Term Recall of Data</a></em> by Bahador Saket, Carlos Scheidegger, Stephen Kobourov, and Katy Börner compared different kinds of graph layouts in terms of their memorability. They made an interesting distinction between three types of memory: <em>visceral</em>, <em>behavioral</em>, and <em>reflective</em>. Their study showed that map-like graph layouts (that fill in areas between nodes) are easier to remember than plain old node-link diagrams, both in terms of remembering the graph and the actual content. I'll have to read the paper to be sure that I really agree that their work is at the reflective level, unlike all the work before. But it's at least a very good step in that direction.

A cool idea is<em> <a href="http://vizlab.cs.fiu.edu/graphunit">GraphUnit: Evaluating Interactive Graph Visualizations Using Crowdsourcing</a></em> by Mershack Okoe and Radu Jianu. It lets you build user tests involving graphs semi-automatically as long as you provide certain functions for it to call. It even sets up the HIT on Mechanical Turk and runs it for you if you want. This sort of test automation is very helpful to get more people to run user studies.

<em>Towards a smooth design process for static communicative node-link diagrams</em> by Andre Spritzer, Jeremy Boy, Pierre Dragicevic, Jean-Daniel Fekete, and Carla M.D.S. Freitas presented a system called <em>GraphCoiffure</em> that can be used to create information graphics with graphs. The program has many useful functions for designers while retaining a set of graph layout algorithms to run at any time. It looked really interesting, too bad it's not available to play with.

## Short Papers

The short papers session on Friday morning had some good presentations, even if some of them were a bit preliminary.

<em>Towards Understanding Enjoyment and Flow in Information Visualization</em> by Bahador Saket, Carlos Scheidegger, Stephen Kobourov proposes the use of <a href="http://en.wikipedia.org/wiki/Flow_(psychology)">Csikszentmihalyi’s flow concept</a> to measure enjoyment of visualizations. Flow has a fairly well-defined set of criteria (challenge, focus, clarity, feedback, control, immersion) that can be assessed with Likert scales or similar. There was some discussion afterwards whether flow was really a valid measure of enjoyment, but it’s certainly closer than anything else I’ve seen so far.

<em>ColorCAT: Guided Design of Colormaps for Combined Analysis Tasks</em> by Sebastian Mittelstädt, Dominik Jäckle, Florian Stoffel, and Daniel Keim introduced the <a href="http://colorcat.org">ColorCAT color design tool for combined analysis tasks</a>. Depending on which of the three basic tasks, <em>localize</em>, <em>identify</em>, and/or <em>compare</em>, are desired, ColorCAT helps design color maps. The tool has several colorblind modes to design colors for people with color deficiencies. It’s currently written in Java, but my understanding is that Mittelstädt is working on a version that will live on the web. Either way, it’s available with full source code, which is nice.

Perhaps my favorite short paper was <em>Interaction with uncertainty in visualisations</em> by Advait Sarkar, Mateja Jamnik, Alan Blackwell, and Martin Spott. The idea is to show data with error bars from a first, crude query and then allow the user to trade off time versus accuracy. This of course requires a model to predict that, as well as a database that can be given time constrains like this. But I think this clearly has a lot of merit, even if there are certainly other approaches (such as progressive refinement without user interaction).

## Conference Dinner

Conference dinners can be amazing or they can be uninspiring (like the last several years at VIS). The EuroVis dinner at <a href="http://www.conventosangiuseppe.com">Convento San Giuseppe</a> set some new standards. The people there made all the food fresh, by hand, including gnocchi, lots of grilled meat, and <a href="http://en.wikipedia.org/wiki/Nougat">nougat</a>. The latter was particularly amazing, as it was soft and warm and just insanely good. There was also pottery, weaving, and a number of other things. The place was also beautiful, dating back to the Middle Ages.

The bar is set high for next year. Speaking of which: EuroVis 2016 will take place June 6-10, 2016 in Groningen, The Netherlands.


_Posted by <a href="/about">Robert Kosara</a> on June 01, 2015_


<aside class="comments">

---
## Comments

<a href="https://www.facebook.com/app_scoped_user_id/599499386854096/" rel="nofollow noopener" target="_blank">Bahador Saket</a> says…
>	Thanks for putting effort and writing this report.

<a href="http://www.jamesscottbrown.com" rel="nofollow noopener" target="_blank">James Scott-Brown</a> says…
>	Acceptance rates seem to be tabulated online: https://www.eg.org/index.php/about-eg/working-groups/67-about-eg/working-groups/273-working-group-on-data-visualization-events

</aside>

