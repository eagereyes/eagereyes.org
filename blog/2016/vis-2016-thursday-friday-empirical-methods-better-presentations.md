---
title: "VIS 2016 – Thursday, Friday: Empirical Methods, Better Presentations"
description: "A panel on empirical methods, papers on time series, and perhaps the best capstone at VIS ever rounded out the conference on Thursday and Friday."
date: 2016-11-01 20:26:20
tags: conference, IEEEVIS
featuredImage: https://media.eagereyes.org/wp-content/uploads/2016/10/DSCF4512.jpg
---

# VIS 2016 – Thursday, Friday: Empirical Methods, Better Presentations

A panel on empirical methods, papers on time series, and perhaps the best capstone at VIS ever rounded out the conference on Thursday and Friday.

## <b>Empirical Methods Panel</b>

Somewhat less controversial than the death of SciVis was the topic of this panel, <em>How can we improve empirical research on understanding visual information?</em> The panelists mostly talked about two broad topics: statistics and vision science.

Steve Haroz started by talking about study design and made the point that it's okay during a pilot to p-hack to find out what conditions to use for the actual study. This led to some discussion on Twitter.

https://twitter.com/AmeliaMN/status/791653444704735232

Ron Rensink showed some of his recent work, which demonstrates that two-dimensional encodings (like x and y on a scatterplot) can also be done with just one space dimension and the other being color or size. That is quite surprising, and I'm curious to read his papers to learn more.

Jessica Hullman addressed statistics and preregistration as a way to avoid the many potential problems in the statistical analysis of studies (like p-hacking).

Matt Kay finally talked about the difference between statisticians (who, he says, like to blame the user/researcher) and visualization/HCI folks. The goal should be to work together to build better tools for communicating statistics.

This was a good panel, though the discussion focused a bit too much on the vision science aspect, and largely ignored the statistics questions (which were submitted online and ranked highly, but the questions at the microphone took priority).

## <b>Time Series</b>

<a href="http://download.vrvis.at/va/papers/visplause.html"><em>Visplause: Visual Data Quality Assessment of Many Time Series Using Plausibility Checks</em></a> by Clemens Arbesser, Florian Spechtenhauser, Thomas Mühlbacher, and Harald Piringer addresses the common issue of having to clean data and identify problems before doing analysis. Their approach is based on a metadata like the type of field to automate checks (e.g., a date can't be zero or negative, etc.), plus a visualization of how many issues were found and where.

<a href="https://idl.cs.washington.edu/papers/surprise-maps"><em>Surprise! Bayesian Weighting for De-Biasing Thematic Maps</em></a> by Michael Correll and Jeffrey Heer is possibly my favorite paper from this year's conference. Most maps with data show you patterns that are either not interesting (because you're just seeing population density) or noise (caused by the fact that variation increases for small numbers of samples, what <a href="https://eagereyes.org/blog/2014/review-wainer-picturing-the-uncertain-world">Howard Wainer calls <em>the most dangerous equation</em></a>). This paper set out to address both issues, and thus present what's actually interesting about the data. There's <a href="https://medium.com/@uwdata/surprise-maps-showing-the-unexpected-e92b67398865#.rmdn25mu5">a nice blog posting explaining the idea</a>, and <a href="https://github.com/uwdata/bayesian-surprise">some source code is also available</a>.

<a href="http://thermalplot.pipes-vs-dams.at"><em>ThermalPlot: Visualizing Multi-Attribute Time-Series Data Using a Thermal Metaphor</em></a> by Holger Stitz, Samuel Gratz, Wolfang Aigner, Marc Streit was the presentation right before me, and I can't say that I remember much of what it was about. The paper describes a system that shows a sort of phase space of the data over time.

Finally, I presented <a href="https://eagereyes.org/papers/the-connected-scatterplot-for-presenting-paired-time-series"><em>The Connected Scatterplot for Presenting Paired Time Series</em></a> by Steve Haroz, Robert Kosara, Steven L. Franconeri. That paper was a TVCG talk, meaning it's a journal paper that I presented at the conference. It had been accepted around a year ago, but only technically came out in the September issue of TVCG this year. Unfortunately, despite the fact that conference proceedings are published in TVCG, TVCG papers presented at the conference are not in the proceedings (and thus not on the USB stick). Well, there's always the Internet.

## <b>Capstone: Jean-Luc Dumont</b>

This talk would have been ideal at the beginning of the conference. Or maybe two weeks before. And it should be repeated every year.

Jean-luc Doumont gave a fun and fast-paced presentation about how to give talks. His background is engineering, but what he talked about clearly applies to visualization just the same. He covered both the design of the talk (structure and slide design) as well as delivery (<a href="https://eagereyes.org/blog/2016/common-speaking-mistakes-to-avoid">I recently had some opinions on this too</a>).

It's impossible to do this talk justice with a quick summary. To pick out just one of the things he said: <em>Researchers always want to talk about how complicated their research was. But guess what, the world doesn’t care.</em>

Dumont has <a href="http://www.principiae.be">a website</a> with materials as well as <a href="http://www.principiae.be/X0302.php">videos of his talks</a>. He has also written a book, <a href="http://www.treesmapsandtheorems.com"><em>Trees, Maps, and Theorems</em></a>, about communicating scientific results (and data in general).

## <b>Closing, Next Year</b>

In the closing session, Terry Yoo finally revealed the number of attendees: 1070. That might be ever so slightly down from last year, but it's basically flat. So not terrible. Obviously, it would be nice if VIS kept growing, but there is always going to be some variation year to year.

IEEE VIS 2017 will take place in Phoenix, AZ, October 1–6 (so a bit earlier than the last few years).

<hr />

Benjamin Bach <a href="http://www.aviz.fr/~bbach/publicize_vis_2016/">has collected URLs from VIS papers</a>, including a SciVis paper or two, and a number of things I haven't discussed in my postings.


_Posted by <a href="/about">Robert Kosara</a> on November 01, 2016_


<aside class="comments">

---
## Comments

Jo Wood says…
>	[sorry for a bit of a long one..]
>	
>	Thanks Robert for your commentary; I always enjoy your write-up of VIS(week). I'd like to comment on one theme that emerges from comments on your two favourite presentations - Jean-luc Doumont's capstone on effective presentation ("perhaps the best ever capstone at VIS") and Correll and Heer's Surprise Maps ("possibly my favourite paper").
>	
>	I agree that these were two first class presentations that enhanced the programme at VIS this year. I too thought the Surprise Maps paper was a great one, although possibly for different reasons to you. Both have inspired me and have led to me working on a couple of ideas that may lead to future papers – surely a good sign for any academic presentation. But in addition to being well delivered, they had something else in common: the presentations in themselves contained little that was academically new (even if for a proportion of the audience it was new to them).
>	
>	For a capstone perhaps that is not a problem – engaging a tired audience at the end of hard week's conferencing is exactly what a capstone should do. And he did this exceptionally well both in what he said and how he said it. Yet I couldn't help but feel that if the highlight of the word's premier visualization conference is a talk about how to deliver powerpoint presentations, we are punching well below our weight. There is a role for 'knowledge transfer' at conferences where what is discussed is not necessarily new, but maybe new to the audience. We saw this in the keynote too where many of us where introduced to Ricardo Hausmann's economic model of complexity - well established and debated in economics but new to most of us at VIS. I thought Hausmann's talk worked, not only as a fine example of first class academic story telling, but because it made connections between established theory outside of our discipline and those within it. I was less sure the capstone did this.
>	
>	Correll and Heer's Surprise Maps presentation also raised questions about the role of the new in VIS presentations. I do like the work, the paper is the first I've read that makes the case for routinely incorporating Bayesian reasoning as part of an iterative model building and visualization cycle. The Bayesian philosophy is highly compatible with exploratory visualization and this link is an under-researched area of our discipline. The paper offers plenty of promise for an exciting strand of future work. Where I felt a little uneasy was that the focus of the presentation, which you picked up on, was the idea of 'surprise maps' for showing difference from expectation rather than raw counts or simplistic rates that are unduly influenced by sample size. These are entirely sound justifications for thematic map design and represent good practice. But that alone does not represent new academic thought. At least as long ago as the 1970s, cartographers were recommending thematic difference from expectation maps as good practice. I mentioned mapping of the signed Chi statistic as a way of achieving this as an aside (because it was already established practice) in my first Infovis paper in 2007. We ran workshops at VisWeek in 2007 and 2008 that showed people how to create such maps with Google technologies. Many vis people map difference from expectation routinely in their work. To be clear, Correll and Heer's paper does contain exciting and innovative work and is one of the stronger papers I've read at VIS this year, but my unease is the favourable reception being based on those aspects of the work that we as a discipline should already have been aware of.
>	
>	Like the regular Vis Lies session and the capstone, much of the entertainment value derived from the presentation comes from contrasting good practice with others' work that is evidently flawed (logo 'n' bullet laden powerpoints; rainbow colour maps; count-based choropleths). Even if the result is to encourage the audience to avoid poor practice I think if Vis is really to progress as a discipline we need to be more ambitious in building on prior work.

</aside>

