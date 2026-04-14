A panel on empirical methods, papers on time series, and perhaps the best capstone at VIS ever rounded out the conference on Thursday and Friday.

## **Empirical Methods Panel**

Somewhat less controversial than the death of SciVis was the topic of this panel, *How can we improve empirical research on understanding visual information?* The panelists mostly talked about two broad topics: statistics and vision science.

Steve Haroz started by talking about study design and made the point that it's okay during a pilot to p-hack to find out what conditions to use for the actual study. This led to [some discussion on Twitter](https://twitter.com/AmeliaMN/status/791653444704735232).

Ron Rensink showed some of his recent work, which demonstrates that two-dimensional encodings (like x and y on a scatterplot) can also be done with just one space dimension and the other being color or size. That is quite surprising, and I'm curious to read his papers to learn more.

Jessica Hullman addressed statistics and preregistration as a way to avoid the many potential problems in the statistical analysis of studies (like p-hacking).

Matt Kay finally talked about the difference between statisticians (who, he says, like to blame the user/researcher) and visualization/HCI folks. The goal should be to work together to build better tools for communicating statistics.

This was a good panel, though the discussion focused a bit too much on the vision science aspect, and largely ignored the statistics questions (which were submitted online and ranked highly, but the questions at the microphone took priority).

## **Time Series**

[*Visplause: Visual Data Quality Assessment of Many Time Series Using Plausibility Checks*](http://download.vrvis.at/va/papers/visplause.html) by Clemens Arbesser, Florian Spechtenhauser, Thomas Mühlbacher, and Harald Piringer addresses the common issue of having to clean data and identify problems before doing analysis. Their approach is based on a metadata like the type of field to automate checks (e.g., a date can't be zero or negative, etc.), plus a visualization of how many issues were found and where.

[*Surprise! Bayesian Weighting for De-Biasing Thematic Maps*](https://idl.cs.washington.edu/papers/surprise-maps) by Michael Correll and Jeffrey Heer is possibly my favorite paper from this year's conference. Most maps with data show you patterns that are either not interesting (because you're just seeing population density) or noise (caused by the fact that variation increases for small numbers of samples, what [Howard Wainer calls *the most dangerous equation*](/blog/2014/review-wainer-picturing-the-uncertain-world)). This paper set out to address both issues, and thus present what's actually interesting about the data. There's [a nice blog posting explaining the idea](https://medium.com/@uwdata/surprise-maps-showing-the-unexpected-e92b67398865#.rmdn25mu5), and [some source code is also available](https://github.com/uwdata/bayesian-surprise).

[*ThermalPlot: Visualizing Multi-Attribute Time-Series Data Using a Thermal Metaphor*](http://thermalplot.pipes-vs-dams.at) by Holger Stitz, Samuel Gratz, Wolfang Aigner, Marc Streit was the presentation right before me, and I can't say that I remember much of what it was about. The paper describes a system that shows a sort of phase space of the data over time.

Finally, I presented [*The Connected Scatterplot for Presenting Paired Time Series*](/papers/the-connected-scatterplot-for-presenting-paired-time-series) by Steve Haroz, Robert Kosara, Steven L. Franconeri. That paper was a TVCG talk, meaning it's a journal paper that I presented at the conference. It had been accepted around a year ago, but only technically came out in the September issue of TVCG this year. Unfortunately, despite the fact that conference proceedings are published in TVCG, TVCG papers presented at the conference are not in the proceedings (and thus not on the USB stick). Well, there's always the Internet.

## **Capstone: Jean-Luc Dumont**

This talk would have been ideal at the beginning of the conference. Or maybe two weeks before. And it should be repeated every year.

Jean-luc Doumont gave a fun and fast-paced presentation about how to give talks. His background is engineering, but what he talked about clearly applies to visualization just the same. He covered both the design of the talk (structure and slide design) as well as delivery ([I recently had some opinions on this too](/blog/2016/common-speaking-mistakes-to-avoid)).

It's impossible to do this talk justice with a quick summary. To pick out just one of the things he said: *Researchers always want to talk about how complicated their research was. But guess what, the world doesn’t care.*

Dumont has [a website](http://www.principiae.be) with materials as well as [videos of his talks](http://www.principiae.be/X0302.php). He has also written a book, [*Trees, Maps, and Theorems*](http://www.treesmapsandtheorems.com), about communicating scientific results (and data in general).

## **Closing, Next Year**

In the closing session, Terry Yoo finally revealed the number of attendees: 1070. That might be ever so slightly down from last year, but it's basically flat. So not terrible. Obviously, it would be nice if VIS kept growing, but there is always going to be some variation year to year.

IEEE VIS 2017 will take place in Phoenix, AZ, October 1–6 (so a bit earlier than the last few years).

---

Benjamin Bach [has collected URLs from VIS papers](http://www.aviz.fr/~bbach/publicize_vis_2016/), including a SciVis paper or two, and a number of things I haven't discussed in my postings.
