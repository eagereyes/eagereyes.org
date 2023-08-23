---
title: "Highlights from EuroVis 2019, Part 1"
description: "The EuroVis 2019 conference took place in early June this year in Porto, Portugal. While I enjoyed the city and conference venue, I found the program a bit underwhelming this time around. I’ve kept pushing off writing this report because I found myself griping rather than talking about the content."
date: 2019-08-26 19:51:37
tags: conference
featuredImage: https://media.eagereyes.org/wp-content/uploads/2019/08/porto-window.jpg
---

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2019/08/porto-window.jpg" width="1024" height="768" /></p>

# Highlights from EuroVis 2019, Part 1

The EuroVis 2019 conference took place in early June this year in Porto, Portugal. While I enjoyed the city and conference venue, I found the program a bit underwhelming this time around. I’ve kept pushing off writing this report because I found myself griping rather than talking about the content.

So instead of covering most of what I saw, I’m going to only pick some highlights here. If you want to see a more complete picture, James Scott-Brown has put together <a href="http://oa-eurovis.jamesscottbrown.com/2019/">a page of links to papers available outside the Eurographics Digital Library</a>.

## Program, Opening

There were more papers this year than last year: 58 full papers (31% acceptance rate), which is up from 47 last year, and 22 short papers (43% acceptance rate), ever so slightly up from 21 last year.

That fact made it even more odd that the program felt kind of thin. There were only two days of full sessions, with Tuesday only containing the opening with keynote, best papers, and posters, and Friday only the closing keynote.

## Best Papers

The Best Papers session at VIS lets the authors of the papers that got the Best Paper awards in the different categories present their work to the entire conference (not just an individual track, since VIS has three conference tracks). That's a good idea. EuroVis only picks a single best paper, and what they did this year was present all the best paper nominees in the opening session, only to reveal the actual winner at the end of the week. I don’t love this approach.

Not only did I not care for most of the papers presented in this session, but it was also remarkable that only a single best paper nominee bothered to have any sort of permanent landing page or further information at the end of the talk.

Since that also happened to be my favorite (which naturally means it didn’t win), that’s the one I’m presenting here: <a href="https://washuvis.github.io/particles/"><em>Follow The Clicks: Learning and Anticipating Mouse Interactions During Exploratory Data Analysis</em> by Alvitta Ottley, Roman Garnett, and Ran Wan</a> uses machine learning to model user’s attention while using visualization system and predict next actions based on recent history. It’s a pretty simple model, but in their particular case study it works very well to guess what criteria you’re using to narrow down selections and filters to find particular data. This is interesting because in a system that has to query a database, it would allow prefetching of the data you’re likely interested in next and that way speed things up for the user.

## Evaluation

One of my favorite presentations was <a href="https://uwdata.github.io/color-naming-in-different-languages/index.html"><em>Color Names Across Languages: Salient Colors and Term Translation in Multilingual Color Naming Models</em> by Younghoon Kim, Kyle Thayer, Gabriella Gorsky, and Jeffrey Heer</a> that looked at color names in different languages. We know that some languages <a href="/blog/2011/you-only-see-colors-you-can-name">treat colors like blue differently from English</a>, and this study found some more of these effects in Korean, Farsi, and Chinese. Berlin and Kay’s classic seven hues exist across all languages, but also for example that Korean has more specific terms for blue, teal, and purple then English. Their data and some exploration and color translation tools are available on the website.

I had two short papers on pie chart variations, <a href="/blog/2019/two-short-papers-on-part-to-whole-charts-at-eurovis">which I’ve mentioned here before of course</a>. I was a bit nervous about the reception at the conference since they had been rejected multiple times before – but there was actually quite a bit of interest right after the talk and during the rest of the conference (and the occasional [fun](https://twitter.com/jsndyks/status/1136190687047823360) [tweet](https://twitter.com/FrankElavsky/status/1135941169991393280)).


## Analysis and Decision Making

<a href="https://github.com/leibatt/characterizing-eva-tableau"><em>Characterizing Exploratory Visual Analysis: A Literature Review and Evaluation of Analytic Provenance in Tableau</em> by Leilani Battle and Jeffrey Heer</a> did something I had no idea was needed: come up with a definition of exploratory visual analysis (EVA) based on a literature review and study. Their definition describes EVA as the early part of the analysis process, distinct from other scenarios (confirmatory, routine exploration), and using visualization tools (as opposed to statistics in <a href="https://en.wikipedia.org/wiki/Exploratory_data_analysis">exploratory data analysis (EDA)</a>). They also did a study using Tableau where they logged user interactions and found that analysts were both accurate and cautious in their exploration, and their pace was slower than they had expected (not sub-second rapid as is often assumed).

It’s kind of an odd paper because it seems like an obvious thing to define, but they apparently got a lot of push-back from reviewers. I complained on Twitter that exploration is overly emphasized in the academic literature <a href="https://medium.com/@eytanadar/banning-exploration-in-my-infovis-class-9578676a4705">and in visualization courses</a>, which led to <a href="https://twitter.com/eagereyes/status/1136225646722650114">an interesting little exchange with Jeff Heer</a>.

This concludes the first part, the rest will be covered in <a href="/blog/2019/highlights-from-eurovis-2019-part-2">Part 2</a>.

[[PostedBy]]

