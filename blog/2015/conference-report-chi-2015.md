---
title: "Conference Report: CHI 2015"
description: "Last week, I had the pleasure of attending the CHI 2015 conference in Seoul, South Korea. CHI technically stands for Computer-Human Interaction, but it has become a name rather than an acronym in recent years. And CHI’s scope is very broad, it covers many areas that are not strictly part of HCI (Human-Computer Interaction – why use one acronym when you can have two?)."
date: 2015-04-26 18:17:23
tags: conference
featuredImage: https://media.eagereyes.org/wp-content/uploads/2015/04/chi-teaser.jpg
---

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2015/04/chi-teaser.jpg" alt="" width="825" height="510" /></p>

# Conference Report: CHI 2015

Last week, I had the pleasure of attending the <a href="http://chi2015.acm.org/">CHI 2015 conference</a> in Seoul, South Korea. <em>CHI</em> technically stands for <em>Computer-Human Interaction</em>, but it has become a name rather than an acronym in recent years. And CHI’s scope is very broad, it covers many areas that are not strictly part of HCI (<em>Human-Computer Interaction</em> – why use one acronym when you can have two?).

Below, I talk about a few papers that I found particularly interesting. CHI has 15 parallel tracks, so there is obviously no way to see them all. I mostly went to the visualization sessions, but even from those I’m only picking out less than half the papers here, to focus on the really interesting ones.

## Visualization and Interactions

There were a few classic visualization papers (that would have fit InfoVis just as well) that presented new techniques or systems for data visualization. <em><a href="http://hci.rwth-aachen.de/statsplorer">Statsplorer: Guiding Novices in Statistical Analysis</a></em> by Chat Wacharamanotham, Krishna Subramanian, Sarah Theres Völkel, and Jan Borchers is a system that helps people with statistical analysis when performing experiments. It guides them through the entire process from planning to reporting, and helps avoid overtesting and other common mistakes. It’s web-based and open source.

<em><a href="https://github.com/romsson/dragit">Investigating the Direct Manipulation of Ranking Tables for Time Navigation</a></em> by Romain Vuillemot and Charles Perin is a pretty straight-forward JavaScript library that provides interaction for working with rankings in tables by different criteria, especially when they change over time. They have some nice initial interactions, and the idea is for other people to contribute more. It’s not an earth-shattering new revelation, but it’s nice to see some new ideas about interaction in an area that doesn’t get a lot of love.

<em><a href="http://autodeskresearch.com/publications/overplotting">Dynamic Opacity Optimization for Scatter Plots</a></em> by Justin Matejka, Fraser Anderson, and George Fitzmaurice presents a very interesting and fairly straight-forward metrics to choose the opacity for scatterplots to make them the most readable. Scatterplots often suffer from overplotting, and it can be difficult to find a good opacity level to see the data, especially when also zooming, filtering, etc. While the talks at CHI were generally pretty good, this was perhaps the best research talk I saw there. Very well done.

Following transitions is difficult, particularly when many points are moving. This is well known and documented, and even the very clever staging method doesn’t seem to work as well as previously assumed. The paper <a href="http://www.cs.umd.edu/~fan/papers/du2015chi.pdf">Trajectory Bundling for Animated Transitions (PDF)</a> by Fan Du, Nan Cao, Jian Zhao, and Yu-Ru Lin proposes a technique that groups points that belong to the same class by moving them along bundled paths. This is basically taking the idea of edge bundling and applying it to motion paths. They argue that this works because of the gestalt law of common fate, but I think it mostly just reduces the number of targets you need to track (since each group essentially merges into one). There’s also <a href="http://www.cs.umd.edu/~fan/videos/du2015chi.mp4">a short video</a>, though you’ll have to watch the important part a few times to get it.

## Putting Science Into Infographics

Several papers dealt with issues in information graphics, attempting to generate some science around common assumptions. <a href="http://valt.cs.tufts.edu/papers/infographic-aesthetics/"><em>Infographic Aesthetics: Designing for the first Impression</em></a> by Lane Harrison, Katharina Reinecke, and Remco Chang looked into quick aesthetic judgments of information graphics. Their most important finding is that people’s judgments are quite consistent and also vary over a large range (just because it’s an infographic doesn’t mean people like it). They also found some interesting gender differences (women respond stronger to color and prefer lower complexity, men prefer higher complexity but don’t respond much to color).

Another challenge is that there are commonly distortions to axes, etc. in the charts used in information graphics. Those are often considered to be bad, but do people actually get confused by them, or are they able to see through those? <em>How Deceptive are Deceptive Visualizations? An Empirical Analysis of Common Distortion Techniques</em> by Anshul Vikram Pandey, Katharina Rall, Margaret L Satterthwaite, Oded Nov, and Enrico Bertini reported on some experiments that showed that people actually misread the data, and just the way you’d expect. This means that it is possible to misdirect people’s understanding of data by choosing the kind of skewed representation that suits your purpose. There doesn’t appear to be a webpage for the paper, but <a href="http://fellinlovewithdata.com/research/deceptive-visualizations">Enrico Bertini has written about it in one of his rare blog postings</a>.

Our paper, <em><a href="https://eagereyes.org/papers/isotype-visualization">ISOTYPE Visualization – Working Memory, Performance, and Engagement with Pictographs</a></em> is of course also worth a mention here. We looked at the ISOTYPE technique and found that is sometimes used in infographics as well, and found it to be quite effective (and never harmful) in presenting data.

## Storytelling

An entire session was devoted to storytelling, though not all the papers really fit the theme. It started out with a bang though, with the paper <em><a href="https://hal.inria.fr/hal-01133305">Storytelling in Information Visualizations: Does it Engage Users to Explore Data?</a></em> by Jeremy Boy, Jean-Daniel Fekete, and Francoise Detienne looking into whether stories actually lead to more engagement. They measured time and number of interactions in an interactive visualization that was either preceded by a short story or presented by itself. In both metrics, people were less engaged (i.e., spent less time and interacted less) after having seen the story. It’s an important study, but also easy to criticize: they did not measure memory or understanding, so it’s not clear if people learned more from the story (they probably did). But they certainly did answer the question, at least for a small set of stories. In addition to the paper, they also <a href="http://peopleviz.gforge.inria.fr/trunk/">made the stories they used available online</a>, which is great. I see more studies coming out of this.

I really liked Boy’s final slide too, where he asked whether information visualization should really be

<ul>
    <li>a medium for communication and persuasion (traditional narrative vis approach)</li>
    <li>a tool for exploration and analysis (traditional infovis approach)</li>
    <li>a (data-agnostic) social object for triggering discussions and debate</li>
</ul>

<em><a href="http://hci.cs.umanitoba.ca/publications/details/data-videos">Understanding Data Videos: Looking at Narrative Visualization through the Cinematography Lens</a></em> by Fereshteh Amini, Nathalie Henry Riche, Christophe Hurter, Bongshin Lee, and Pourang Irani looked at the narrative structure of data videos. They used ideas from film and comic theory to analyze existing videos and to come up with guidelines for the design of the narrative arc of such videos.

## Overall Impressions

CHI is a large conference (almost 3000 attendees), but it follows the standard format: there are keynotes, paper sessions, panels, posters, as well as an exhibition area for companies and an art show. This was my first time at CHI, so I wasn’t sure what to expect.

I found the quality of the visualization papers quite good. I was a bit underwhelmed at first (perhaps partly because last year’s InfoVis had upped my expectations quite a bit), but I saw some really good ones.

It's still a bit unclear to me what gets accepted and why, and the extreme breadth of the conference can be a challenge. CHI is definitely a conference to follow if you're interested in visualization, and will stay on my radar for publishing papers in the future.

&nbsp;


_Posted by <a href="/about">Robert Kosara</a> on April 26, 2015_


<aside class="comments">

---
## Comments

<a href="http://www.klewel.com" rel="nofollow noopener" target="_blank">Maël Guillemot</a> says…
>	Great conference report, you can now link the talks and papers you were interested in directly to the videos of the presentations, the webasts are now online on the CHI website: http://chi2015.acm.org/program/keynotes/ and http://chi2015.acm.org/program/full-schedule/

</aside>

