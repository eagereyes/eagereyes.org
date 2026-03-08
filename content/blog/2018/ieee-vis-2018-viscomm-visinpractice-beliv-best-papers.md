# IEEE VIS 2018, Part 1: VisComm, VisInPractice, BELIV, Best Papers

The [IEEE VIS conference](https://ieeevis.org/) is the most important outlet for academic research. This year's conference took place in Berlin, Germany. Here is a report on some of the most interesting (to me, anyway) papers, events, and developments, in three parts. 

As usual, I link to paper websites and materials where possible. Luckily, many papers this year had paper or project webpages and code or materials available. While still not entirely a given, the majority of papers have at least something available (even if it’s only the paper manuscript itself).

## VisComm Workshop

Sunday started with the *Workshop on Visualization for Communication*, organized by Ben Watson and me. We had a good turnout, quite a bit better than I expected in fact. We had not gotten as many submissions as I had hoped, and this being a workshop on Sunday in parallel with other compelling and related sessions (like BELIV at VIS and the second day of Information+) had me worried we’d be talking to a mostly empty room.

But not so! We had 50-70 attendees there and a pretty good program. You can read all the papers and poster write-ups on [the workshop website](https://viscomm.io/). We are planning on running the workshop again next year, this time hopefully doing a better job explaining what we’re after and possibly expanding the scope of the workshop a bit.

## BELIV

The other workshop I went to on Sunday was [BELIV, the workshop on novel evaluation techniques in visualization](https://beliv-workshop.github.io). I had to duck out of VisComm to present [my paper with Steve Haroz](/papers/skipping-the-replication-crisis-in-visualization) there, then head back for the rest of the morning. I then spent the afternoon at BELIV.

BELIV’s topic for the keynote (which I missed) and papers this year was replication in visualization. The afternoon sessions were organized as breakouts, which makes a lot of sense for workshops, but is actually fairly unusual (most are run as mini-conferences). I think it worked well though, and we discussed a wide range of topics, like how data exploration and statistically sound reasoning can co-exist, replication for quantitative studies, etc.

<figure><img src="https://media.eagereyes.org/wp-content/uploads/2018/10/IMG_0271.jpg" alt=""/><figcaption>Maarten Lambrechts talking about xenographics and associated phenomena</figcaption></figure>

## VisInPractice

The *[Vis In Practice](http://www.visinpractice.rwth-aachen.de)* program aims to make the VIS conference more interesting and appealing for practitioners and people from the industry, not just the academics it primarily serves. This year was the first time they organized a full day’s worth of talks, I believe, and they brought in a good number of interesting speakers.

Among them was Maarten Lambrechts, who talked about *xenographics*, or unusual data visualizations. He had many interesting examples of how journalists and others create unusual ways to show data for specific purposes, like fitting them onto screens, to get attention, etc. He has collected a whole zoo of them on [the xenographics website](https://xeno.graphics).

Jan Willem Tulp spoke about his work with the European Space Agency (ESA) and creating guided visualizations with 60,000 data points in the browser, like [he did for data from the Gaia space telescope](http://sci.esa.int/gaia-stellar-family-portrait/).

Another session looked at data visualization tools. Lisa Charlotte Rost gave a great talk about using [a large number of visualization tools to create the same chart](https://lisacharlotterost.github.io/datavistools-revisited) (if this sounds familiar, it was an update of [her wildly popular article from last year](https://source.opennews.org/articles/what-i-learned-recreating-one-chart-using-24-tools/)). She had an interesting distinction between apps (which tend to be easy to learn but less flexible), libraries (hard to learn but flexible), and a new generation of data drawing apps, like *Charticulator* and *Data Illustrator*, that are easier and yet more flexible.

Michael Behrisch presented a very in-depth state-of-the-art survey of commercial visual analytics systems he had conducted with Siemens. They’ve released their findings on [a browsable website](https://commercialtools.dbvis.de/) for you to explore.

<figure><img src="https://media.eagereyes.org/wp-content/uploads/2018/10/IMG_0295.jpg" alt=""/><figcaption>How many episodes have you listened to?</figcaption></figure>

## Data Stories Meetup

Enrico Bertini and Moritz Stefaner organized a meetup for listeners of (and guests on) their [Data Stories podcast](http://datastori.es/). It was a fun event where they had us create visualizations by standing along a line in response to different questions, and gave us a little look into their process (including their secret Trello board!).

## Opening, Best Papers

VIS had record attendance this year, with 1265 attendees. This is up quite a bit from the last year or two, though those were down slightly. This was only the second time VIS had taken place outside the U.S., and both times had gotten very good attendance numbers (despite a lot of worries that they’d have trouble attracting people).

<figure><img src="https://media.eagereyes.org/wp-content/uploads/2018/10/draco.png" alt=""/><figcaption>Draco in a nutshell</figcaption></figure>

I have to say that I was not terribly impressed with this year’s VAST or SciVis best papers, but I did like the choice of best paper for InfoVis: *Formalizing Visualization Design Knowledge as Constraints: Actionable and Extensible Models in Draco* by Dominik Moritz, Chenglong Wang, Greg L. Nelson, Halden Lin, Adam M. Smith, Bill Howe, and Jeffrey Heer. It describes a system named *Draco* that uses constraint programming to allow the user to specify only the minimal amount of information to create charts, yet pick good defaults that are likely to yield useful and informative visualizations. They have written up the idea in [a nice blog posting](https://medium.com/@uwdata/draco-representing-applying-learning-visualization-design-guidelines-64ce20287e9d), the whole thing is [available as open source](http://uwdata.github.io/draco/), and there is [an online editor where you can play with Draco yourself](https://uwdata.github.io/draco-editor/#/editor).

What makes Draco interesting is not only the novel approach, but also the fact that this is the first really new way of creating visualizations (at least in terms of being usable for normal end users) in a while. Another one is *Charticulator*, which I’ll cover in one of the other VIS postings.

The opening session also included a number of test of time awards, which I will cover in a separate posting.
