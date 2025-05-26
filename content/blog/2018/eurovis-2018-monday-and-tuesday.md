---
title: "EuroVis 2018, Monday and Tuesday"
description: "EuroVis 2018 in Brno, Czechia, is in full swing. The first two days included workshops, the opening with a very fun and interesting keynote, and some good papers."
date: 2018-06-05 07:49:01
tags: conference, eurovis
featuredImage: https://media.eagereyes.org/wp-content/uploads/2018/06/Berry-Nucleosomes-cropped.jpg
---

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2018/06/Berry-Nucleosomes-cropped.jpg" width="720" height="480" /></p>

# EuroVis 2018, Monday and Tuesday

<a href="http://www.eurovis.org/">EuroVis 2018 in Brno, Czechia</a>, is in full swing. The first two days included workshops, the opening with a very fun and interesting keynote, and some good papers.

## EuroRVVV Workshop

I helped chair <a href="http://www.eurorvvv.org">the workshop with the worst name in EuroVis history</a> this year. We had a number of good paper presentations, two invited talks, and two keynotes. I especially enjoyed the talk by Michael Gleicher, who presented a sort of framework for visual thinking with uncertainty in visualization, possibly without the need to build explicit models of the underlying distributions.

The big news for next year is that we’re changing the name to something a bit less of a mouthful: <em>TrustVis</em> (aka <em>The EuroVis Workshop on Trustworthy Visualization</em> – or something along those lines). I was advocating <em>TrustyVis</em>, but the other chairs found that a bit too cutesy. But either way, I’m quite excited since this will keep much of the current direction of EuroRVVV, but at the same time shift the focus somewhat and expand it to what I think is a very interesting and so far under-appreciated topic in visualization. You'll hear more about this as we make this more formal and get ready to announce the workshop (late this year or early next).

The workshops reception on Monday night was also notable for going well beyond its supposed 7-9pm slot (I think the music ended around 1) and the amount of food and alcohol available throughout.

## EuroVis Opening

EuroVis this year got 162 full paper submissions (slightly down from 170 last year, but in line with previous years), of which they accepted 47 for a 29% acceptance rate. Jeff Heer did a nice job walking us through the data using some nice, animated visuals.

Short papers received 41 submissions and accepted 21, for a 51% acceptance rate (which is also slightly higher than in previous years, form what I remember).

EuroVis also has state-of-the-art reports, or STARs. Min (“SuperMin” according to Bob Laramee) Chen has put together a great <a href="https://sites.google.com/site/drminchen/cgf-info/cgf-stars">collection of all STARs, reviews, and surveys published in Computer Graphics Forum</a> (the journal EuroVis and Eurographics proceedings get published in) since 1985.

I will write more about the next years after the closing, but EuroVis 2019 will be in Porto, Portugal and in 2020 the plan is to have Eurographics and EuroVis co-located in Norrköping, Sweden.

## Keynote: Drew Berry

Drew Berry is a medical animator who has done some amazing work making very small-scale and hard-to-image and understand processes visible and understandable. You can find his work at <a href="https://www.drewberry.com">his website</a> and <a href="https://www.wehi.edu.au/wehi-tv">his university website</a>, and he’s also <a href="https://twitter.com/drewberryIV">active on Twitter</a>. The teaser image at the top is one of his, too.

It was fascinating to see Berry describe his work and how he is now moving to being able to render all his complicated, high-resolution (8K) animations in real-time (which took weeks to render in the past) on modern hardware and using new techniques.

I was also intrigued by his use of sound in the videos, which he described like using color when I asked him about it: on the molecular level, there is no color, but color, like sound, can be used to get people’s attention, make things memorable, and frame the animation (like making a cancer cell sound threatening, etc.).

## Papers: Comparison, Collaboration, High-Dimensional Data

James Scott-Brown has put together a great <a href="http://oa-eurovis.jamesscottbrown.com/">“Open Access EuroVis” page</a> with links to EuroVis papers he was able to find (it's not really open access, but the papers are easily accessible this way). There are fewer links here than at VIS, and as usual a lot more InfoVis-type papers have at least the PDF available than those from the SciVis side.

<p align="center"><img class="aligncenter size-full wp-image-10682" src="https://media.eagereyes.org/wp-content/uploads/2018/06/changecatcher.png" alt="" width="1320" height="948" /></p>

<a href="https://research.tableau.com/paper/changecatcher-increasing-inter-author-awareness-visualization-development"><b>ChangeCatcher: Increasing Inter-author Awareness for Visualization Development</b></a> by Mona Hosseinkhani Loorak, Melanie Tory, and Sheelagh Carpendale is a system that reveals changes in a Tableau workbook by sheet and by type (like formatting vs. other changes, which can be important depending on what phase of the work you’re in or who’s working on something). They show very nicely how this can not just make it much faster to find changes, but also discover the ones that are easy to miss, like fields added to tooltips, etc.

<p align="center"><img class="aligncenter size-full wp-image-10681" src="https://media.eagereyes.org/wp-content/uploads/2018/06/augmented-wordcloud.png" alt="" width="1320" height="719" /></p>

<a href="http://zhaoxun.me/publication/eurovis18.pdf"><b>Towards Easy Comparison of Local Businesses Using Online Reviews</b></a> by Yong Wang, Hammad Haleem, Conglei Shi, Yanhong Wu, Xun Zhao, Siwei Fu, and Huamin Qu is an interesting take on using online reviews to make decisions like where to eat, what hotel to book, etc. They combine a number of different views to show information like prices, etc., together with numerical scores and word clouds created from the reviews. Their word clouds are particularly interesting because they combine adjectives and nouns to be more meaningful and readable.

<p align="center"><img class="aligncenter size-full wp-image-10683" src="https://media.eagereyes.org/wp-content/uploads/2018/06/chart-constellations.png" alt="" width="1320" height="457" /></p>

<a href="https://jeffjianzhao.bitbucket.io/papers/constellations.pdf"><b>Chart Constellations: Effective Chart Summarization for Collaborative and Multi-User Analyses</b></a> by Shenyu Xu, Chris Bryan, Kelvin Li, Jian Zhao, and Kwan-Liu Ma looks at ways to compare charts generated by different people. They create a clustering of charts and show which ones are similar or different, related, etc. They then tested this against notebooks on Kaggle to see if people would be able to compare the visualizations used in Kaggle notebooks – unsurprisingly, they were, and they largely were able to do things that they weren't using the Kaggle system. So the combination of both would be interesting to see.

<a href="http://homepage.univie.ac.at/michael.sedlmair/papers/bernard2018eurovis.pdf"><b>Towards User-Centered Active Learning Algorithms</b></a> by Jürgen Bernard, Matthias Zeppelzauer, Markus Lehmann, Martin Müller, and Michael Sedlmair tested different strategies for what is called active learning: humans act as oracles that label data points in a scatterplot to belong to certain classes (like hand-written letters, etc.). They identified 19 different strategies and tested those for how fast they lead to good coverage. There is some dependency on the particular dataset, but the data-based strategies that start from the data points themselves work better early on, but are passed by the ones that are based on models (defining boundaries).

<hr />

<a href="https://www.wehi.edu.au/wehi-tv/nucleosomes">Teaser image by Drew Berry</a>


<PostedBy />


<aside class="comments">

---
## Comments

<a href="http://theresamarierhyne.com" rel="nofollow noopener" target="_blank">Theresa-Marie Rhyne</a> says…
>	Thank you for providing an onsite update at EuroVIs 2018.

<a href="http://bckwon.wordpress.com" rel="nofollow noopener" target="_blank">bckwon</a> says…
>	Thank you very much!

</aside>

