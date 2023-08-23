---
title: "Meet @InfoVis_Ebooks, Your Source for Random InfoVis Paper Snippets"
description: "Are you looking for inspiration while writing a paper or grant? Do you feel that there is a lack of information visualization content on Twitter? Is your timeline too empty and slow? Follow @InfoVis_Ebooks, a Twitter account that posts random pieces of text from infovis papers."
date: 2013-04-21 20:21:09
tags: service
featuredImage: https://media.eagereyes.org/wp-content/uploads/2013/04/infovis-template.png
---

# Meet @InfoVis_Ebooks, Your Source for Random InfoVis Paper Snippets

Are you looking for inspiration while writing a paper or grant? Do you feel that there is a lack of information visualization content on Twitter? Is your timeline too empty and slow? Follow @InfoVis_Ebooks, a Twitter account that posts random pieces of text from infovis papers.

## Related Work

Accounts that tweet more or less random snippets of text have become a genre in themselves. If you've spent any time on Twitter, you've probably seen the one that started it all: <a href="https://twitter.com/Horse_ebooks">Horse ebooks</a>. Despite <a href="http://en.wikipedia.org/wiki/Horse_ebooks">being a spam account</a>, it has almost 170,000 followers who presumably enjoy its random and often nonsensical tweets. Following in its footsteps are more or less serious accounts, like <a href="https://twitter.com/bogost_ebooks">Bogost ebooks</a>, which tweets pieces of <a href="http://www.bogost.com">Ian Bogost</a>'s writing.

## Materials and Method

InfoVis Ebooks takes a random piece of text from a random paper in its repository and tweets it. It has read all of last year's InfoVis papers, and is now getting started with the VAST proceedings. After that, it will start reading infovis papers published in last year's EuroVis and CHI conferences, and then work its way back to previous years.

Each tweet contains a reference to the paper the snippet is from. For InfoVis, VAST, and CHI, these are <a href="http://en.wikipedia.org/wiki/Digital_object_identifier">DOIs</a> rather than links. Links get long and distracting, whereas DOIs are much easier to tune out in a tweet. If you want to see the paper, google the DOI string (keep the "doi:" part). You can also take everything but the "doi:" and append it to http://dx.doi.org/ to be redirected to the paper page. For other sources, I will probably have to use links.

As the name suggests, InfoVis Ebooks is about infovis papers. If you want to do the same for SciVis, HCI, or anything else, <a href="https://github.com/eagereyes/InfoVis_Ebooks">the code is available on github</a>.

## Results

InfoVis Ebooks currently tweets roughly once every two hours. The time is randomized, and there can be much more (and less) than two hours between tweets; it all depends on how chatty the bot is feeling.

The results are sometimes nonsensical, sometimes funny, and sometimes pieces of code or formulas. Despite the limited set of papers right now, there is a lot of variety in the tweets.

## Conclusions and Future Work

This is clearly only the start, and further research is needed. The number of sources needs to be expanded, which is a slow, manual process. The goal is to eventually not only include papers (and maybe posters), but also have the bot follow visualization blogs.

In addition to the text, the document database knows the venue and year a paper was published. The idea is to be able to focus the tweets on papers from a particular venue (e.g., during a conference, only tweet from papers that were published in earlier years at that same place), or restrict to a time period (vintage papers from the early 90's?).

The bot will be continue to get tweaked to create more interesting and entertaining tweets. It is currently based on some very simple heuristics and rules for what makes a snippet acceptable, but I plan on refining those over time.  Also, a user study.


_Posted by <a href="/about">Robert Kosara</a> on April 21, 2013_


<aside class="comments">

---
## Comments

Xiaoyu Wang says…
>	Great idea, Robert! Would like to contribute!

</aside>

