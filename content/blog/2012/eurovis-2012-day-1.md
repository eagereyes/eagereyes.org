---
title: "EuroVis 2012, Day 1"
description: "EuroVis 2012 has officially begun, so here is a brief recap of some of the things I found interesting. Today, that included the EuroRVVV workshop and two papers."
date: 2012-06-05 12:09:48
tags: conference, eurovis
featuredImage: 
---

# EuroVis 2012, Day 1

EuroVis 2012 has officially begun, so here is a brief recap of some of the things I found interesting. Today, that included the EuroRVVV workshop and two papers.

My goal with these postings, as with <a href="http://twitter.com/eagereyes">my tweeting</a>, will not be to cover everything that happens, but very selectively describe things that were remarkable for whatever reason.

## EuroRVVV

<a href="http://www.eurorvvv.org/">The workshop with the horrible name</a> (Paul Rosenthal pronounces it “Euro-R-Triple-V”) turned out to be really interesting. There was a good group of around 40 people, and some good discussions. Three short talks kicked things off, and then there was a panel, though that consisted mostly of some more short talks. But thanks to the audience participation, it worked quite well.

The topics that were discussed were not all that new: issues with code quality when making it available, whether we should require people to publish code with their papers, issues with intellectual property, etc. As Alex Telea pointed out, similar topics had been discussed many years before, and some of them also were part of the discussion on science in visualization at a panel I was a part of in 2007. Not much progress has been made in the meantime.

At one point, I got really angry while listening to one of the presentations and how it didn’t seem to bother anybody that only a tiny fraction of papers have code attached. In many other disciplines, such a cavalier approach to reproducibility and basic scientific principles would be completely unthinkable. Ask people in bioinformatics or molecular modeling how they get their work published without sharing code. There is a simple answer: they don’t.

Of course the issue of code quality and the costs of cleaning up messy research code came up. I think that these problems are way overstated. The point of our work is to build prototypes, not production systems. It can be messy and embarrassing, that’s okay. Look at what many biologists produce who write their stuff in Perl. It’s not pretty, but they still publish it. There is also <a href="http://matt.might.net/articles/crapl/">Matt Might’s wonderful CRAPL</a>, a license for academic code.

One of the issues is clearly that people don’t see the value of publishing code, which is a bit of a chicken-and-egg problem. Many other fields with lots of code available are used to citing papers when they use particularl tools or libraries, so there is tremendous value in having published a popular piece of code. But until there is a basic amount of such code, few people will see the benefits and mostly worry about the downsides.

This may sound like I didn’t enjoy the workshop, but that is not true. It was a good discussion and some great arguments were made both for and against publishing code and data. But at some point we will have to follow the words with actions, just talking about these things is not going to cut it in the longer run.

## EuroVis

EuroVis this year has record attendance with close to 240 participants. There were also a record number of paper submissions, leading to a very respectable acceptance rate just under 26% (same as InfoVis and other high-quality conferences). There is also a new-ish short papers track (they say it’s new but VisSym had short papers back in the day) with an acceptance rate of around 43% (reasonable for short papers).

The keynote was given by Oliver Bimber, who talked at great length about light fields. The talk was a very nice introduction for people who are interested in that topic, but it was not very relevant for a visualization conference. Bimber showed some work that uses light fields to speed up navigation in volume rendering, but that work is far from exciting and it only took up a few minutes of the hour-long keynote. I’m all for bringing people from other fields in for keynotes, and those are often the best and most memorable ones. But this one just didn’t do that for me (or for others, judging from some discussions afterwards).

Two great papers saved the afternoon, though: <em>Computing Voronoi Treemaps: Faster, Simpler, and Resolution-independent</em> by Arlind Nocaj and Ulrik Brandes is a nice piece of work that promises to make the generation of Voronoi treemaps much simpler than previous techniques. I’m especially happy to report that they are going to make their work available as a library soon (speaking of reproducibility), which should reinvigorate interest in these weird but strangely interesting treemaps.

A new addition to the collection of techniques to save us from the horrors of Euler diagrams was presented in <em>Kelp Diagrams: Point Set Membership Visualization</em> by Kasper Dinkla, Marc van Kreveld, Bettina Speckmann, and Michel Westenberg. The technique is a bit of a mix of LineSets and BubbleSets, with some visual linking thrown in. It shows set memberships for points with a given layout, like on a map. There are some limitations, but they are no worse than the other techniques, and the visual appearance is very clear and readable.

All in all, this was a good start to what promises to be a good conference.


<PostedBy />


