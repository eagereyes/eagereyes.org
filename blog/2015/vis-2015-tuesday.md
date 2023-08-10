---
title: "VIS 2015 – Tuesday"
description: "IEEE VIS 2015 started today. The first sessions included network visualization and projections, as well as a panel on the use of color in visualization."
date: 2015-10-27 20:33:28
tags: conference, IEEEVIS
featuredImage: https://media.eagereyes.org/wp-content/uploads/2015/10/vis15-tue-teaser.png
---

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2015/10/vis15-tue-teaser.png" alt="" width="825" height="510" /></p>

# VIS 2015 – Tuesday

IEEE VIS 2015 started today. The first sessions included network visualization and projections, as well as a panel on the use of color in visualization.

As usual, this is very selective: only the things I happened to see, and of those only the ones I felt strongly enough to mention here. You can follow the conference under the <span class="externalcitation"><a href="https://twitter.com/hashtag/ieeevis">#IEEEVIS hashtag on Twitter</a></span>, though that is also biased towards InfoVis and VAST. I haven’t heard a peep from the SciVis cave.

## VIS Running Club

The amazingly well-organized VIS Running Club set out on its first run this morning at 6:30am. You can see the <a href="https://www.strava.com/activities/421307356">route we ran here</a>. We’ll be doing this again tomorrow morning (unless it's raining too hard) and Thursday, so if you missed the fun today, you have another chance!

## Opening Session, Donna Cox

The opening session tends to be pretty formulaic and boring until they get to the keynote speaker. This year was no exception, but they also added a new level of awkwardness. On the plus side, the slides didn’t make me want to poke my eyes out this year.

Also, I need to take credit here for my relentless whining. I sent a long list of specific complaints about the slides, the printed program, etc. to the chairs last year, and – [it worked](https://twitter.com/tamaramunzner/status/656382598860505089)!

The keynote speaker this year was <a href="http://www.ncsa.illinois.edu/People/cox/">Donna Cox</a>, who is a renowned digital artist and very early visualization person. Her work isn’t really the type of visualization usually discussed at VIS, since her interest is in creating imagery and movies that explain scientific facts to general audiences. She had some very interesting points about making things approachable though, and showed some amazing work. Among other things, she was involved in several IMAX movies.

Cox also showed lots of great pictures from the 1980s, including one of Pat Hanrahan (who was then her colleague at UW Madison) in 1983. Also [this cray picture of her on a Cray](https://twitter.com/misslake/status/659002098269442048).

<h1>InfoVis Opening</h1>

This year, InfoVis received 178 submissions, of which 38 were accepted, for an acceptance rate of 21.3%. That’s pretty good, and it’s interesting to see the increase in submissions from the previous years. I haven’t seen the numbers for VAST and SciVis, but I’ll eventually update my acceptance rates page here (no link since it’s embarrassingly out of date).

## Projections

<em>A comparative study between RadViz and Star Coordinates</em> by Manuel Rubio-Sanchez, Francisco Diaz, Laura Raya, and Alberto Sanchez looked at the differences between the two visualization techniques. It was an interesting analysis that picked apart some of the finer points about how they work and how they are related. Interestingly, rather than running a study, they modeled user behavior and based their analysis on that. I liked the way they went into great depth about how the techniques responded to different data and what use cases made sense for which.

<em><a href="http://julianstahnke.com/probing-projections/">Probing Projections: Interaction Techniques for Interpreting Arrangements and Errors of Dimensionality Reductions</a></em> by Julian Stahnke, Marian Dörk, Boris Müller, and Andreas Thom described an interactive tool to look at projections of high-dimensional data and see what the distances actually mean in the original data. This is a common problem that I haven’t seen any solutions for. You can play with the system online, it works nicely in the browser. The presentation was really good too, a number of people on Twitter wondered why this hadn’t gotten at least an honorable mention for the best paper.

## Color Panel

The panel <em>Color Mapping in VIS: Perspectives on Optimal Solutions</em> with David Borland, Kenneth Moreland, Bernice Rogowitz, Francesca Samsel, Maureen Stone, and Cynthia Brewer (organized by Thersa-Marie Rhyne, who unfortunately couldn’t make it) discussed various issues around the use of color in visualization.

Many of the topics weren’t exactly new (<a href="/basics/rainbow-color-map">rainbow color maps are bad</a>, etc.), but the room was packed and they covered a lot of ground. It was also interesting to finally see Cynthia Brewer, of <a href="http://colorbrewer2.org/">ColorBrewer</a> fame, speak at VIS; I don’t think I’d ever seen her before.

One thing I felt they kind of danced around without really addressing it was <em>why</em> people in business and science like to use more color than is considered a good idea, including the rainbow color map and repeating color maps. I’ll have some more to say on this in another posting soon.

## Networks

<em><a href="http://www.gillesbailly.fr/publis/BAILLY_SchemeLens.pdf">SchemeLens: A Content-Aware Vector-Based Fisheye Technique for Navigating Large Systems Diagrams</a></em> by Aurelie Cohe, Bastien Liutkus, Gilles Bailly, James Eagan, and Eric Lecolinet is an approach to focus+context interaction that lets a user interact with a network diagram to more clearly see items of interest. The work was pretty similar to generalized fisheye views, and I wasn’t entirely clear what the contribution really was. They also had some pretty specific constraints, like keeping connected elements aligned when zooming.

The Best Paper Award at InfoVis this year went to <em><a href="http://marvl.infotech.monash.edu/~dwyer/papers/hola2015.pdf">HOLA: Human-like Orthogonal Network Layout</a></em> by Steve Kieffer, Tim Dwyer, Kim Marriott, and Michael Wybrow. They studied how people would actually lay out graphs and derived the criteria for an algorithm for that. There had been work in that direction before (<a href="http://repository.tue.nl/651333">Like van Ham and Rogowitz’s 2008 InfoVis paper</a>), but that never culminated in an actual algorithm. There are some interesting constraints that they found that usually aren’t considered in laying out graphs, like <em>gridiness</em>, symmetry, the layout of tree-like subgraphs on the outside, etc.

## Party!

The day ended (at least for me) with the Utah Party. I missed yesterday's Austrian Party, but there's also the West Coast Party tomorrow night after the banquet. The Utah Party took place at a pub with waitresses in some very well done costumes and a dancing roomba/broom/skull thing ('cause Halloween). We'll see if the West Coast will be able to top that.


_Posted by <a href="/about">Robert Kosara</a> on October 27, 2015_


<aside class="comments">

---
## Comments

<a href="http://Theresamarierhyne.com" rel="nofollow noopener" target="_blank">Theresa-Marie Rhyne</a> says…
>	Hi Robert: Thanks for covering the color panel in your eager eyes blog. I am still in the hospital &amp; it was good to know from an outside source that the panel was well received. I think people like color &amp; it is that simple as to why people use it in their digital media. The challenge is how to use it effectively so that others can appreciate the visualization as well. I have a simple pie chart example I will try to send to you &amp; your blog later. Thank you again. Smiles...Theresa-Marie

<a href="http://theresamarierhyne.com/Theresa-Marie_Rhynes_Viewpoint/Blog/Entries/2015/11/3_Color_Wheel_and_Color_Deficiency.html" rel="nofollow noopener" target="_blank">Theresa-Marie Rhyne</a> says…
>	Hi Robert:  I have posted my study of a color wheel in Red Yellow Blue painters color space (Red, Yellow, Blue, Orange, Green and Purple colors) with a color deficiency study using Vischeck: http://theresamarierhyne.com/Theresa-Marie_Rhynes_Viewpoint/Blog/Entries/2015/11/3_Color_Wheel_and_Color_Deficiency.html
>	
>	Perhaps is might not come as a surprise that even if one has not color deficiency and sees color differences appropriately, it could be a challenge to tell the difference between these colors that are adjacent to each other on a color wheel.

</aside>

