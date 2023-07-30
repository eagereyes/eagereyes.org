---
title: "Highlights from EuroVis 2019, Part 2"
description: "This is the second part of my highlights from EuroVis earlier this year in Porto, Portugal. There are papers about decision making and interaction, as well as a report on the capstone talk and a look to next year’s conference, which will be a bit different."
date: 2019-09-02 17:00:28
tags: conference, eurovis
featuredImage: https://media.eagereyes.org/wp-content/uploads/2019/09/11526F34-8208-4DAB-B21B-A25A99A199E6.jpeg
---

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2019/09/11526F34-8208-4DAB-B21B-A25A99A199E6.jpeg" width="1024" height="768" /></p>

# Highlights from EuroVis 2019, Part 2

This is the second part of my highlights from EuroVis earlier this year in Porto, Portugal. There are papers about decision making and interaction, as well as a report on the capstone talk and a look to next year’s conference, which will be a bit different.

## Decision Making

<a href="https://osf.io/2pxy3/"><em>Investigating Effects of Visual Anchors on Decision-Making about Misinformation</em> by Ryan Wesslen, Sashank Santhanam, Alireza Karduni, Isaac Cho, Samira Shaikh, and Wenwen Dou</a> looked at cueing people when doing analysis for specific scenarios, in this case looking for Twitter accounts likely to be spreading misinformation. They found that anchors tend to boost confidence, but people are actually faster without them. I don’t think they found a difference in accuracy, which is interesting.

Tools that help people build visualizations typically just show the chart and maybe a sketch of the type of chart. <a href="http://hcil.snu.ac.kr/research/previews-animated-transitions-textual-descriptions"><em>Toward Understanding Representation Methods in Visualization Recommendations through Scatterplot Construction Tasks</em> by Sehi LYi, Youli Chang, DongHwa Shin, and Jinwook Seo</a> investigated a few alternative approaches like animating between the old and the new chart, generating titles, and providing brief textual cues of what the chart would be able to show. They found that these additional cues are helpful in selecting the right visualization for a task.

## Interaction

<a href="https://github.com/tracyhenry/kyrix"><em>Kyrix: Interactive Pan/Zoom Visualizations at Scale</em> by Wenbo Tao, Xiaoyu Liu, Yedi Wang, Leilani Battle, Çağatay Demiralp, Remco Chang, and Michael Stonebraker</a> describes a declarative grammar for building pan+zoom visualizations, as well as a server backend that makes it possible to build these with very large datasets. Pan+zoom interactions are quite common (e.g., Google or Apple Maps), but what’s more interesting to me here is that they combine interaction and database access, which is pretty rare.

To make aggregations like average, median, etc., easier to understand, <a href="https://idl.cs.washington.edu/papers/animated-aggregate-operations"><em>Designing Animated Transitions to Convey Aggregate Operations</em> by Younghoon Kim, Michael Correll, and Jeffrey Heer</a> developed a set of animations to both explain the aggregations and make it easier to tell them apart (i.e., did you pick the one you wanted). Some of these are easier to create and more obvious (e.g., max) than others (median). The more obvious ones were preferred by their study participants, but there was a wide range of people’s preferences when it came to whether they liked basic or elaborate animations.

For <a href="http://idl.cs.washington.edu/papers/idyll-analytics/"><em>Capture and Analysis of Active Reading Behaviors for Interactive Articles on the Web</em>, Matthew Conlen, Alex Kale, and Jeffrey Heer</a> developed a plugin to instrument online articles to see how people actually read interactive and <a href="https://eagereyes.org/blog/2016/the-scrollytelling-scourge">scrollytelling</a> stories. Among the interesting behaviors they found was that people often scroll through a piece quickly to decide whether to actually go through it in detail or bounce (which makes a lot of sense to me, I do that too).

## Closing, Capstone, Next Year

Jeff Heer gave a great capstone talk titled, <em>Visualization Is Not Enough</em>. He covered a large range of topics, from questions largely within visualization to how visualization interacts with other fields, particularly AI. I found his framing around <em>points of potential failure</em> particularly interesting.

<figure class="wp-block-image"><img src="https://media.eagereyes.org/wp-content/uploads/2019/09/58C5C099-48C7-4E5B-B5FA-F9E0EAFDCCBE.jpeg" alt="" class="wp-image-12311"/></figure>

You can watch his talk below <a href="https://www.youtube.com/watch?v=bXrhrrgLPKg">or at this link</a> and <a href="https://homes.cs.washington.edu/~jheer/talks/EuroVis2019-Capstone.pdf">check out the slides here</a>.

<figure class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://www.youtube.com/watch?v=bXrhrrgLPKg
</div></figure>

Next year’s conference will take place May 25–29 in Norrköping, Sweden. The biggest difference though is that it will be <a href="https://conferences.eg.org/egev20/">combined with the Eurographics conference</a>. This means an earlier submission deadline for one, since the conference is a bit earlier. I don’t think they’ve published a deadline yet, but this could easily collide with the late Thanksgiving this year in the U.S.

While I appreciate Anders Ynnerman’s enthusiasm for the concept, I’m not sure there really is all that much overlap between the graphics and visualization communities, at least in information visualization. The scientific visualization folks might find they have more in common. But then, this could be a good way to inspire some interesting and unexpected new work if they can get the attendees of the two conferences to mix.

While I griped at some length in <a href="https://eagereyes.org/blog/2019/highlights-from-eurovis-2019-part-1">the first part</a> about the conference program this year feeling a bit thin, I clearly did find enough to write about to fill two posts.


_Posted by <a href="/about">Robert Kosara</a> on September 02, 2019_


