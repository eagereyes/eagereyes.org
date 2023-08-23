---
title: "InfoVis Papers at CHI 2017"
description: "The two main conferences in visualization are VIS and EuroVis, but recently CHI has also gotten some very interesting submissions (CHI is technically a conference about human-computer interaction, or HCI). This year looked particularly strong,"
date: 2017-05-22 20:50:33
tags: conference
featuredImage: https://media.eagereyes.org/wp-content/uploads/2017/05/chi2017-teasr.png
---

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2017/05/chi2017-teasr.png" width="720" height="500" /></p>

# InfoVis Papers at CHI 2017

The two main conferences in visualization are VIS and EuroVis, but recently <a href="https://chi2017.acm.org/">CHI</a> has also gotten some very interesting submissions (CHI is technically a conference about human-computer interaction, or HCI). This year looked particularly strong,

I didn’t actually attend the conference this year, so the selection below is based on my trolling the program online and watching some of the Twitter chatter during the conference. I did not include all the visualization-related papers I could find, only the ones I found the most interesting. You can find more in their <a href="https://chi2017.acm.org/program/?tab=chi2017-schedule&amp;showAll=true">searchable program</a>.

CHI provides <a href="https://chi2017.acm.org/proceedings.html">open access to all papers for a full year</a>. So unlike with most other conferences, non-academics can easily read the actual papers without having to find “personal copies” elsewhere. I believe CHI is doing this for the first time this year. It’s an admirable model, and one other conferences should copy right away.

## Same Stats, Different Graphs

This is my favorite paper, hands down. Justin Matejka and George Fitzmaurice took <a href="/criticism/anscombes-quartet">Anscombe’s idea</a> (to create datasets with virtually identical statistics that look very different when drawn in a chart) and ran with it. It’s a modern take on an oft-cited paper from the 70s, and it’s very well done.

I also love <a href="https://www.autodeskresearch.com/publications/samestats">the website they made for the paper</a>. I even love the animated gifs (not something I’m wont to say in general). Do yourself the favor of at least scrolling all the way through it and looking at all the little animations. They’re very well done and show a few things you might not expect (like how box plots don’t show you weirdly quantized distributions).

It’s easy to say: duh, we know all that. Except we don’t. These kinds of problems pop up all the time. Now we have a much richer set of examples than <a href="https://en.wikipedia.org/wiki/Anscombe%27s_quartet">Anscombe’s venerable (but limited) quartet</a>, as well as a way to create any number of new ones.

## Guessing to Remember

Figuring out if people retain what they have seen in a chart has become more of a question lately, as we realize that just showing data that nobody even recalls is kind of pointless. In <a title="Explaining the Gap: Visualizing One's Predictions Improves Recall and Comprehension of Data" href="https://idl.cs.washington.edu/papers/explaining-the-gap"><em>Explaining the Gap: Visualizing One's Predictions Improves Recall and Comprehension of Data</em></a>, Yea-Seul Kim, Katharina Reinecke, and Jessica Hullman look at how actively predicting and explaining differences might help people remember what they have seen.

The ideas are motivated by educational psychology, and they prove to be effective: people remember more when they’ve been challenged to make predictions, whether they know something about the subject or not.

## Eyeballing Regressions

People are surprisingly accurate when estimating regression coefficients from scatterplots. What is less well understood is how robust this is to certain known visual effects, or how much outliers are taken into account or ignored. <a title="Regression by Eye: Estimating Trends in Bivariate Visualizations" href="https://idl.cs.washington.edu/papers/regression-by-eye">Regression by Eye: Estimating Trends in Bivariate Visualizations</a> by Michael Correll and Jeffrey Heer looks into this and shows some expected (outliers are easily ignored) and not so expected results (area graphs pull the regression line into the area).

Michael has also written <a href="https://medium.com/@uwdata/regression-by-eye-b7587f4ca1f5">an extensive blog posting</a> explaining the main ideas in the paper and some of the background.

## Rethinking Established Charts in Science

<em><a href="https://dl.acm.org/authorize.cfm?key=N36559">Empirical Analysis of the Subjective Impressions and Objective Measures of Domain Scientists' Visual Analytic Judgments</a></em> by Aritra Dasgupta, Susannah Burrows, Kyungsik Han, and Philip J. Rasch is a bit of a mouthful, but they tackle an interesting problem: in many sciences, some of the most commonly-used charts are not actually good visualizations by visualization standards. They’re often the result of somebody having put something together for their own use that caught on by mistake, and then it gets entrenched because everybody uses them.

Dasgupta and colleagues look at the Taylor plot, which are used in climate science to compare models and model runs with different parameters. They test a heat map, a bar chart, and a slope plot as alternatives, and they find less resistance than one (well, I) might have assumed.

## Connecting Data with People

Showing pictures of people is a good thing, right? Certainly when it comes to news graphics or trying to get people to care about refugees, donate money, etc. The paper <em><a href="http://dl.acm.org/authorize.cfm?key=N36810">Showing People Behind Data: Does Anthropomorphizing Visualizations Elicit More Empathy for Human Rights Data?</a></em> by Jeremy Boy, Anshul Vikram Pandey, John Emerson, Margaret Satterthwaite, Oded Nov, and Enrico Bertini looked into this. They tested a number of different designs and compared them against standard charts, but found virtually no differences between them.

The paper asked an interesting question about something that is not often studied so far: how do different charts impact (potential) decisions, like whether to donate money? The comparison with anthropomorphic shapes also meshes well with my interest in <a href="/techniques/isotype">ISOTYPE</a>, which often used pictures of people to depict data (though usually to inform rather than to elicit a particular response).

CHI covers a lot more ground than just visualization, but it's certainly a conference to keep an eye on for exciting new developments. It is known to be tough to get work accepted into, but it also sometimes accepts work that seems too daring or unusual to make it into InfoVis or EuroVis. It's definitely a conference to keep an eye on.


_Posted by <a href="/about">Robert Kosara</a> on May 22, 2017_


