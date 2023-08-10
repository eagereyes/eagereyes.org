---
title: "VIS 2014 – Tuesday"
description: "The big opening day of the conference, Tuesday, brought us a keynote, talks, and panels. Also, a new trend I really like: many talks end with the URL of a webpage that contains a brief summary of the paper, the PDF, and often even a link to the source code of the tool they developed."
date: 2014-11-12 00:46:27
tags: conference, IEEEVIS
featuredImage: https://media.eagereyes.org/wp-content/uploads/2014/11/namredienhs.jpg
---

# VIS 2014 – Tuesday

The big opening day of the conference, Tuesday, brought us a keynote, talks, and panels. Also, a new trend I really like: many talks end with the URL of a webpage that contains a brief summary of the paper, the PDF, and often even a link to the source code of the tool they developed.

## Opening

That VIS would ever take place outside the U.S. was by no means a given. There was a lot of doubt about getting enough participants, sponsors, etc. to make it work (and a ton of convincing by this year’s chair, Jean-Daniel Fekete).

That made it especially interesting to hear the participant numbers. There are over 1,100 attendees this year, more than ever before. They also more than doubled the amount of money coming from sponsors compared to last year, which is very impressive. VIS outside the U.S. is clearly doable, and even though the next three years are already known to be in the U.S., I’m sure this will happen again.

One number that was presented but that I don’t believe is that there were supposedly only 79 first-time attendees. That doesn’t square with the different composition of participants (fewer Americans, more Europeans), and besides would be terrible if true.

## Alberto Cairo: The Island of Knowledge and the Shorelines of Wonder

The keynote this year was by <a href="http://thefunctionalart.com">Alberto Cairo</a>, who gave a great talk about the value of knowledge and communicating data. Perhaps my favorite quote was that <em>good answers lead to more good questions</em>.

There is a lot more to say, and I want to really do his talk justice. So I’m going to not go into more detail here, but rather <a title="The Island of Knowledge and the Shoreline of Wonder" href="/blog/2015/the-island-of-knowledge-and-the-shoreline-of-wonder">write it up in a separate posting</a> in the next week or two.

## InfoVis: The Joy of Sets

The first InfoVis session started what I hope is a trend: ending talks with a URL that points to a website with talk materials, the paper, and often even the source code of the presented tool. This is how work can be shared, revisited, and make its way beyond the limited conference audience.

The first paper was <a href="http://vcg.github.io/upset/about/"><em>UpSet: Visualization of Intersecting Sets</em></a> by Alexander Lex, Nils Gehlenborg, Hendrik Strobelt, Romain Vuillemot, and Hanspeter Pfister. The system allows the user to compare sets and look at various intersections and aggregations. There are many different interactions to work with the sets. Because there are so many views and details, it’s almost like a systems paper, but good (most systems papers are terrible – another rant for another day).

<a href="http://www.cc.gatech.edu/gvu/ii/setvis/"><em>OnSet: A visualization technique for large-scale binary set data</em></a> by Ramik Sadana, Timothy Major, Alistair Dove, and John Stasko describes a tool for comparing multiple sets to each other. There are some clever interactions and the tool also shows hierarchies within the sets while comparing.

Rounding out the sets theme was a paper I didn’t actually see the presentation for, but I want to mention anyway: <a href="http://caleydo.org/publications/2014_infovis_domino/"><em>Domino: Extracting, Comparing, and Manipulating Subsets across Multiple Tabular Datasets</em></a> by Samuel Gratzl, Nils Gehlenborg, Alexander Lex, Hanspeter Pfister, and Marc Streit. From what I gather, it presents a query interface and visualization for sets and subsets, and it looks quite nifty.

## InfoVis: Colors and History

I’m a bit conflicted about <a href="http://vialab.science.uoit.ca/dimpvis/"><em>DimpVis: Exploring Time-varying Information Visualizations by Direct Manipulation</em></a> by Brittany Kondo and Christopher Collins. They developed a way to show time in a plot so that you can navigate along the temporal development of a value (rather than use a time slider that is disconnected and doesn’t show you history). While that makes sense to me in the original example they showed, a time-varying scatterplot, I’m a bit less convinced by the bar chart, pie chart, and heatmap versions of it.

A paper I missed, but that seems to have stirred some controversy, is <em>Tree Colors: Color Schemes for Tree-Structured Data</em> by Martijn Tennekes and Edwin de Jonge.

## “Blind Lunch”

The reason I missed some of the papers in the InfoVis session is that I was one of the people hosting a table for what is called a <em>blind lunch</em>. This used to be called <em>Lunch with the Leaders</em>, which may have sounded a bit too ambitious (and scared off potential leaders who didn’t necessarily consider themselves that), but at least it made more sense. Everybody knew who they were signing up with, and nobody was blindfolded as far as I’m aware.

It’s a good event though. I had a chance to chat with four grad students and share my wisdom about industry vs. academia. There are also a few more activities as part of the <a href="http://vacommunity.org/IEEE+VIS+Compass+2014">Compass program</a> for people who are about to graduate, or just generally want to get more perspectives on the job situation in academia and/or industry.

## Panel: Data with a cause: Visualization for policy change

One of the things I was looking for the most at VIS this year was the panel <em>Data with a cause: Visualization for policy change</em>, organized by Moritz Stefaner, with speakers from the OECD, World Bank, and the World Economic Forum.

The panelists all had interesting things to say about what they are doing to make data more accessible, make it easier to share their reports and other materials, and provide means for people to talk back. There are also some interesting issues around the different types of audience they want to serve (economists, policy makers, general public) and the general unease when handing out data to the unwashed masses.

What I was missing, though, was a bit of controversy and actual discussion. For such an important topic, it was a very tame panel. There were some really good questions to be asked though, like one coming from the audience about the responsibility of organizations not to reinforce the winners and losers through their data, and what they might do about that. I also asked about the availability not just of tables, but of the underlying data. I have some more to say on that topic in future postings.

## Namrediehns

One of my favorites of the conference so far is <em>Multivariate Network Exploration and Presentation: From Detail to Overview via Selections and Aggregations</em> by Stef van den Elzen and Jarke J. van Wijk. I don’t seem to be alone in this, as the paper also received the Best Paper Award at InfoVis this year.

The system they developed shows multivariate graphs, and allows the concurrent display of the network and the multivariate data in the nodes (even including small multiples). What’s perhaps most interesting is the fact that they allow the user to make selections to aggregate the graph, essentially building a sort of PivotGraph to see the higher-level structure on top of the very detailed, hairball-like, graph.

Because they are showing the detailed network first and let the user create an overview version, apparently Jarke van Wijk suggested to name the system <em>Namrediehns</em> – i.e., <em>Shneiderman</em> spelled backwards, since it’s Ben Shneiderman’s famous mantra (overview first, zoom and filter, then details on demand) in reverse.

https://twitter.com/nils_gehlenborg/status/532191711918063616

This was much funnier the way Stef van Elzen did it of course, and in particular with Ben Shneiderman sitting there in the first row, directly in front of him.

## VisLies, Parties

It remains a crime that VisLies is not a regular session, but a meetup that is tacked on and usually at a time when everybody is at dinner. I think it’s a really great idea, and there should be room for it in the regular program. It deserves a lot more attention and attendance. I missed it this year again.

There were also two new parties, the Austrian Party and the NYU Party. I really like this new tradition of parties to connect people and reinforce the community aspect of the conference. It does mean even less sleep than before, though.


_Posted by <a href="/about">Robert Kosara</a> on November 12, 2014_


