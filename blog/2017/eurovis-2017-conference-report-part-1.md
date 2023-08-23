---
title: "EuroVis 2017 Conference Report, Part 1"
description: "EuroVis is currently taking place in Barcelona. In the interest of shorter postings, I’m breaking this report up into three parts. This first part covers the EuroRVVV workshop as well as the opening session and keynote."
date: 2017-06-14 12:18:52
tags: conference, eurovis
featuredImage: https://media.eagereyes.org/wp-content/uploads/2017/06/dragon-gate.jpg
---

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2017/06/dragon-gate.jpg" width="720" height="500" /></p>

# EuroVis 2017 Conference Report, Part 1

<a href="http://eurovis2017.virvig.es">EuroVis</a> is currently taking place in Barcelona. In the interest of shorter postings, I’m breaking this report up into three parts. This first part covers the EuroRVVV workshop as well as the opening session and keynote.

## EuroRVVV Keynote

The workshop on <a href="http://www.eurorvvv.org">Reproducibility, Verification, and Validation in Visualization (EuroRVVV)</a> was focused on perception this year. It featured two keynotes, two invited talks, and a number of papers.

The opening keynote was given by <a href="https://www.b-tu.de/en/graphic-systems">Douglas Cunningham</a>, who works in psychophysics at BTU Cottbus-Senftenberg. He gave a broad overview of his work and thinking, which involves conducting experiments to measure the characteristics of responses to given stimuli of vastly different complexity.

His interest is not in the mechanism that underlies the responses, but a purely behaviorist model that considers only what can be observed. It’s an interesting approach, and a good model for running well-controlled experiments. He has also written <a href="https://www.crcpress.com/Experimental-Design-From-User-Studies-to-Psychophysics/Cunningham-Wallraven/p/book/9781568814681">a book on the topic</a>.

## EuroRVVV Papers

This session included three papers and an invited talk. Unfortunately, none of the papers seem to be available online.

<em>A Crowdsourced Approach to Colormap Assessment</em> by Terece L. Turton, Colin Ware, Francesca Samsel, David H. Rogers asked whether color blindness is an issue when running experiments on Mechanical Turk (which is a common thing to do in visualization). They compared three groups: a women-only group (women have much lower rates of color vision deficiencies), a general group, and a group where they specifically recruited people with color vision deficiencies. They found no difference between the the women-only group and the general MTurk population, which means that color blindness should not generally be an issue when running these experiments.

As a sidenote, they used a service called <a href="https://www.turkprime.com">TurkPrime</a>, which is a sort of front-end to Mechanical Turk that is geared towards easier experiments and allows selection of subgroups by criteria like gender.

<em>Evaluating the Perceptual Uniformity of Color Sequences for Feature Discrimination</em> by Colin Ware, Terece L. Turton, Francesca Samsel, R. Bujack, David H. Rogers also looked at color scales, this time the <a href="/basics/rainbow-color-map">infamous rainbow colormap</a> and alternative designs that don’t share its problems. They specifically looked at how contrast and resolution differ across the different colors, and found some color scales that are a lot more uniform than rainbows. Of course, the rainbow is still popular for other reasons (like its visual attractiveness).

<em>Where’d it go? How geographic and force-directed layouts affect network task performance</em> by Scott A. Hale, Graham McNeill, Jonathan Bright reports on an experiment that compares simple tasks in three different graph layouts of transportation networks: geographical, pseudo-geographical, or purely force-directed. They found few differences, which is a bit surprising. However, their network was quite small and pretty easy for people to decode, so it seems unlikely that their results would hold with a larger network.

The invited talk in this session was by me. I talked about some pitfalls in perceptual studies, like the question of what we can measure vs. what we actually want to know. I also had some comments about the kinds of research I think we need more of, and how they should be published. I’ve written about 2/3 of a blog posting that is based on this talk, <a href="/blog/2017/building-bridges-between-insular-infovis-papers">which I will post here next week or so</a>.

## Keynote: Fernanda Viégas and Martin Wattenberg

The opening session was long and boring, as is usual at these conferences. It’s a mystery to me why the review process needs to be explained at great length to an audience that almost entirely consists of people who have gone through it. The numerology around submissions and keywords is also only interesting to an extent and could be reduced to just the interesting bits (of which there always are a few), in my humble opinion.

One interesting little tidbit this time was the comparison to when EuroVis (then still called <em>VisSym</em>) was in Barcelona before in 2002: then it was just over 60 attendees, this year’s is over 300.

The keynote made up for the boring parts, though. <a href="https://research.google.com/pubs/FernandaViegas.html">Fernanda Viégas</a> and <a href="https://research.google.com/pubs/MartinWattenberg.html">Martin Wattenberg</a>, who have been with Google Research for a number of years now, talked about <em>Visualization: The secret weapon of machine learning</em>.

They started with a brief introduction to some basic ideas in machine learning, including that neural networks are not actually meant to model the structure of the human brain. They only mirror some aspects of its structure that seem to work well for many tasks. Martin’s <a href="http://www.bewitched.com/chess/">simple chess program that you can watch think</a> made an appearance, and while I’ve seen it several times now, it’s always fun to watch.

Martin and Fernanda (I’m still trying to establish the collective term <em>Marnanda</em> for them, because they virtually always give talks together) then talked about some of their more exciting work, like the <a href="http://playground.tensorflow.org">TensorFlow Playground</a>. This project, which is now a few years old, lets people play with neural networks to build classifiers. It looks simple, but it allows you to change many parameters that are quite cumbersome to change in the more traditional way. This lets people experiment much more quickly than before and see what is going on, which makes this great for teaching (and it’s used now within Google as a teaching tool for new machine learning folks).

A more recent piece is the <a href="http://projector.tensorflow.org">Embedding Projector</a>, which lets you explore projection approaches for high-dimensional spaces, like PCA or t-SNE. It’s a clever, interactive piece that I haven’t explored much yet, but that seems quite powerful.

They also talked about a Google translation system that is able to translate language pairs it has not seen before, and there are some claims that it is building a sort of universal language internally. I’m a bit skeptical about that part, but it was impressive to see their embedding projections show how the system was embedding sentences and words close together, rather than languages.

They ended by saying that there is a lot of opportunity to do visualization for machine learning. Even many of the people working in the field don’t have good intuitions for how their systems work, and they need tools to inspect what they’re doing, debug, etc. It’s a challenging field as well, of course, but seems like a very promising area. <em>Marnanda</em> are trailblazers here, as usual, and I think many others will follow their lead.

[[PostedBy]]

