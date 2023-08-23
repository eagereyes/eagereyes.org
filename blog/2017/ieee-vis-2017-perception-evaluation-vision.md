---
title: "IEEE VIS 2017: Perception, Evaluation, Vision Science"
description: "Questions of how visualization is read and understood are a common topic in research, and this year was no exception. This part of my IEEE VIS 2017 report covers papers dealing with perceptual issues, the match between visualization and tasks, statistical reasoning, as well as a panel on vision science."
date: 2017-10-11 18:17:16
tags: conference, IEEEVIS
featuredImage: https://media.eagereyes.org/wp-content/uploads/2017/10/imagining-replications.png
---

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2017/10/imagining-replications.png" width="750" height="405" /></p>

# IEEE VIS 2017: Perception, Evaluation, Vision Science

Questions of how visualization is read and understood are a common topic in research, and this year was no exception. This part of my IEEE VIS 2017 report covers papers dealing with perceptual issues, the match between visualization and tasks, statistical reasoning, as well as a panel on vision science.

## Perception

<em><a href="http://www.cs.sandia.gov/~atwilso/get_dvs.html">Data Visualization Saliency Model: A Tool for Evaluating Abstract Data Visualizations</a></em> by Laura E. Matzen, Michael J. Haass, Kristin M. Divis, Zhiyuan Wang, and Andrew T. Wilson tries to predict what people will look at in a visualization. Saliency models are usually built for photographs of natural scenes, and it’s not clear if and how they apply to visualization. The authors of this paper adapted an existing model to take into consideration factors like text, color, and the different kinds of spatial scales you see in a visualization. Matlab code for their model is available, though under a somewhat odd license (especially considering that this is U.S. government work).

<em><a href="http://homepage.univie.ac.at/michael.sedlmair/papers/calero-valdez2017priming.pdf">Priming and Anchoring Effects in Visualization</a></em> by André Calero Valdez, Martina Ziefle, and Michael Sedlmair looks at how priming might affect people’s understanding of visualization. Priming is when what you see first influences how you perceive what comes next. In a series of studies, the authors showed that these effects also exist in the particular case of scatterplots that show separable or non-separable clusters. Seeing one kind of plot first changes the likelihood of you judging a subsequent plot as the same or another type.

<em><a href="http://va.gatech.edu/encodings">Evaluating Interactive Graphical Encodings for Data Visualization</a></em> by Bahador Saket, Arjun Srinivasan, Eric D. Ragan, and Alex Endert extends the common studies of visual encodings to include the effect of interaction. How precisely can use scale a bar, bubble, etc. to fit a particular value? They find that the two are closely linked, which is not surprising, but it’s useful to know. You can read their <a href="https://medium.com/@GT_Vis/evaluating-interactive-graphical-encodings-for-data-visualization-b9b8b4bf47f8">Medium posting with more explanation</a>, look at their <a href="https://github.com/gtvalab/interactive-graphical-encodings">Materials and source code</a>, or <a href="http://bahadorsaket.com/publication/encodingsPaper.pdf">read their paper</a>.

## Tasks

<em><a href="http://graphics.cs.wisc.edu/Vis/scattertasks/">Scatterplots: Tasks, Data, and Designs</a></em> by Alper Sarikaya and Michael Gleicher looks at the design space of scatterplots and a number of variations on them (like hexagonal bins and splatterplots), and what kinds of tasks they are each useful for.

<em><a href="http://graphics.cs.wisc.edu/Papers/2018/Gle18/viscomp.pdf">Considerations for Visualizing Comparison</a></em> by Michael Gleicher asks for questions about comparisons: what comparison is being made, what makes it hard, what can be done to address the challenges, and what design choices are available. The result is a design process for building visualizations that support comparison.

<em><a href="http://www.cs.ubc.ca/labs/imager/tr/2017/GoalsToTasks/">Bridging From Goals to Tasks with Design Study Analysis Reports</a></em> by Heidi Lam, Melanie Tory, and Tamara Munzner asks how you can go from a stated question to a visualization task. That translation is not nearly as obvious as you’d assume, but they break it down and show different ways of getting from one to the other. <a href="https://docs.google.com/document/d/1H9O_Nd3wlio3iCsXzSSPZzEXRqFTQa1-agAebs2tvd0/edit">Their collection of materials</a> is also available.

## Evaluation

<em><a href="http://idl.cs.washington.edu/papers/imagining-replications">Imagining Replications: Graphical Prediction &amp; Discrete Visualizations Improve Recall &amp; Estimation of Effect Uncertainty</a></em> by Jessica Hullman, Matthew Kay, Yea-Seul Kim, and Samana Shrestha went over my head a bit, being the first presentation Friday morning. They look at statistical reasoning, in particular in replication studies, which is generally pretty difficult. Using a number of variations like discretized probability distributions, they were able to help them make better guesses what replications with different outcomes meant for the original studies.

<em><a href="https://arxiv.org/pdf/1504.02218.pdf">Evaluating Cartogram Effectiveness</a></em> by Sabrina Nusrat, Muhammad Jawaherul Alam, and Stephen Kobourov looked at a number of variations on cartograms and the kinds of tasks that are sometimes difficult to do with them, like telling which elements are adjacent. It would have helped to have something else in there as a reference, IMHO, like a bar chart or non-cartogram bubbles.

## Panel: Vision Science Meets Visualization

This panel by Christine Nothelfer, Zoya Bylinskii, Madison Elliott, Cindy Xiong, Danielle Albers Szafir, Ronald Rensink, Todd Horowitz, Steven Franconeri, Karen Schloss, and Ruth Rosenholtz covered a lot of ground, much more than I can write up here (plus I also missed almost half of it). It was really interesting to get an overview of current topics in vision research, and also to get some myths busted about things like peripheral vision (which is much better than we often assume).

Two things I want to point to in particular are a review paper, <a href="http://viscog.psych.northwestern.edu/publications/ensemble_coding_in_visualization_JOV_2015_szafir_haroz_gleicher_franconeri.pdf"><em>Four Types of Ensemble Coding in Data Visualizations</em></a>, which gives a good introduction to ensemble coding, and the <a href="https://visxvision.com/join-visxvision/?contact-form-id=81&amp;contact-form-sent=190&amp;_wpnonce=29f05d7352#contact-form-81">InfoVis x Vision Science website</a>. You can sign up there to get news about relevant research and get invited to a Slack channel to discuss research related to vision science and visualization.

<hr />

See also:

<ul>
    <li><a href="/blog/2017/ieee-vis-2017-best-papers-keynote-capstone">Best Papers and Other Awards</a></li>
    <li><a href="/blog/2017/ieee-vis-2017-keynote-and-capstone">Keynote and Capstone</a></li>
    <li><a href="/blog/2017/ieee-vis-2017-word-clouds-sparklines-stories-interaction">Word Clouds, Stories, Interaction</a></li>
    <li><a href="/blog/2017/ieee-vis-2017-machine-learning-diversity-parties">Machine Learning, Diversity, Parties</a></li>
</ul>

[[PostedBy]]

