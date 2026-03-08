<figure><img src="https://media.eagereyes.org/wp-content/uploads/2016/06/EuroVis-2016-teaser1.jpg" width="825" height="510"/></figure>

# EuroVis 2016, Tuesday and Wednesday

[EuroVis 2016](http://eurovis.org) is happening this week in Groningen, The Netherlands. This is the report from the first two-and-a-half days,  which saw some symposia, a keynote, and many paper presentations.

The pre-conference program kicked off on Monday afternoon. In addition to a few small symposia, there was also a tutorial on machine learning and visualization. It was pretty basic, but [the materials are available online](http://mlvis2016.hiit.fi) in case you want to take a look.

## ******Opening Session**

The main conference began Tuesday afternoon with the opening session and keynote. The opening session always has some interesting information about the number of papers, etc., plus a lot of random stuff.

EuroVis has close to 300 attendees this year, about the same number as last year.

This year, EuroVis had 183 full paper submissions, of which 50 were accepted, for an acceptance rate of 27.3%. Short papers had 57 submissions, with 25 accepted for a 44% acceptance rate. An interesting outlier was the posters program with 28 submissions and 27 accepts, for a 96% acceptance rate (that must be some sort of record). I did not write down the stats for state of the art reports (STARs, basically surveys), but they got a lot more submissions this year due to the new review process and the fact that they are published in the *Computer Graphics Forum* (CGF) journal.

## **Keynote: Anders Ynnerman, OpenSpace – Visualizing the Universe**

Anders Ynnerman helps run the planetarium in Linköping (Sweden), and also collaborates with the Hayden Observatory in New York. He showed the work they're doing visualizing the universe and making it not just interesting and entertaining, but also scientifically accurate. He gave a very nice, we'll-paced talk and demo of their capabilities.

He also made the interesting point that it's not just about *what* was discovered, but also the *how *– which can inspire people more than the what to want to explore themselves. While I initially didn't agree with that, I now think that he's on to something. It certainly helps to see, as he showed, how the New Horizons probe flew by and photographed Pluto to appreciate the incredible accomplishment, more than just seeing the resulting photos.

Besides the stunning visuals, the talk was remarkable because of Ynnerman's obvious love for science and his work. It's great to see that kind of curiosity and drive to communicate science to people.

Update: you can now [watch the keynote yourself](https://vimeo.com/groups/383543/videos/169967499):

<iframe src="https://player.vimeo.com/video/169967499" width="640" height="360" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

## **High-Dimensional Data**

The first real papers session took place Wednesday morning. Unfortunately, most talks did not have URLs, and I haven't been very successful in searching for papers posted online. That is especially problematic for EuroVis, since very few institutions outside of Europe have access to the Eurographics digital library, so these papers have nowhere near the reach they should have.

*Enhancing Scatterplots with Multi-Dimensional Focal Blur* by Joachim Staib, Sebastian Grottel, and Stefan Gomhold built on the idea of blur for focus and context in visualization. This is of particular interest to me, since [I did work on this in my Ph.D. thesis](/publications/Kosara-InfoVis-2001). They showed some interesting examples of how blur can separate clusters in scatterplots, but I was ultimately confused whether they were going for interaction or static images.

*Exploring Items and Features with I<sup>F</sup> and F<sup>I</sup>-Tables* by Paul van der Corput and Jarke J. van Wijk presented the very simple idea of showing two tables next to each other, one with the items as rows and the features as columns (I<sup>F</sup>), and one the other way around (F<sup>I</sup>). This way, the user can pick candidate rows and then look at the items side-by-side. Some histograms and a bit of interaction made the whole thing look quite useful.

## ******Charts and Glyphs**

[*Comparing Bar Chart Authoring with Microsoft Excel and Tangible Tiles*](http://innovis.cpsc.ucalgary.ca/Publications/_Wun2015) by Tiffany Wun, Jennifer Payne, Samuel Huron, and Sheelagh Carpendale had people create and modify bar charts either in Excel or using little physical tiles. They found some interesting differences, like the fact that it's faster to create charts in Excel than with tiles, but modifying them takes longer. The comparison clearly has its limits, but their aim is to look for hybrid models of interacting with visualizations.

*Arcs, Angles, or Areas: Individual Data Encodings in Pie and Donut Charts* by Drew Skau and… oh, that's right, me! This was the full paper part of the [EuroVis Pie Paper Package](/papers/a-pair-of-pie-chart-papers). We got a good number of questions after the talk and more discussions in the break after the session.

[*How Ordered Is It? On the Perceptual Orderability of Visual Channels*](http://cs.swan.ac.uk/~csbob/research/glyphDesign/userStudy/chung16how.pdf) by David H. S. Chung, Daniel Archambault, Rita Borgo, Darren J. Edwards, Robert S. Laramee, and Min Chen looked into how well different visual cues can show orderings. They tested color, size, value, but also texture, orientation, and shape. This kind of basic study is nice because it provides practical guidance but also some starting points for more theoretical work.

[*Glyphs for Asymmetric Second-Order 2D Tensors*](http://people.cs.uchicago.edu/~glk/pubs/#EV-2016) by Nicholas Seltzer and Gordon Kindlmann was a fun talk, even though I didn't follow all the math. They created a set of glyphs that can show the properties of 2D flow tensors. Their design process is very principled, and the results look very interesting.

## A Few First Thoughts

EuroVis feels kind of low-key this year. The large room, even though it's called the Small Room, seems too large for the conference and feels empty. The papers are okay, but I felt that there was more exciting work last year. Maybe Thursday and Friday will blow me away!

While the talks are all solid, I'm confused by the lack of online materials. Our pie charts paper was the only talk with links to materials, and there was only one other talk that had a link to the paper. This was quite different at InfoVis, where many talks had links to landing pages for their papers.

There also isn't much going on on Twitter. My tweets [are collected here](https://twitter.com/eagereyes/timelines/733779814738317312), and there's some activity under the [EuroVis and EuroVis2016](https://twitter.com/search?q=EuroVis%20OR%20EuroVis2016&amp;src=typd) hashtags (though I wish everybody would join forces under *#EuroVis*, which is shorter). But there's much less than I would have expected.
