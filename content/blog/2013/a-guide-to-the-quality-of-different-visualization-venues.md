I recently got an email from a colleague, with the subject, “Academic research is it all bad?” He had looked at a paper presented at a VIS workshop that people were pointing to on Twitter, and had found it lacking (“it’s just a blog posting”). While there are high-quality venues for visualization research, it’s not easy to be sure which ones are good, and which ones are lower quality.

## Journals vs. Conferences

The basic unit of publication is called a *paper*. Papers can be published in journals or proceedings. Proceedings are the collection of papers presented in a conference, symposium, or workshop. The latter three categories are important because there are big quality differences between them, which I will come back to later.

Academic journals tend to be of high quality: the papers are usually longer than in conference proceedings, and the review process tends to be more in-depth for journals. A journal paper can go through a number of revisions before publication, which can considerably increase its quality.

Papers at conferences, symposia, and workshops are usually accepted as they are, because the conference schedule does not allow for the drawn-out journal process (which can take years). However, in visualization, this line is blurred, because the top-tier visualization conferences publish their proceedings as special issues of journals.

## Acceptance Rates

For conferences, workshops, and symposia, the general quality metric is the acceptance rate. That is the fraction of submissions that were accepted for presentation at the venue. A lower number means a stricter selection and thus generally higher quality. For example, an acceptance rate of 25% would mean that one out of every four submissions is accepted.

A good conference acceptance rate is below 30%, and typically around 25%. While you might assume that going as low as possible would be better, that is actually not considered a good thing. Conference chairs usually try to keep the rate above 20% to get enough variety into the conference. The goal is not just to select the best work, but also to be able to take some risks and accept new ideas, provocative work, etc. There are fields that have acceptance rates around 15% and below, but that is not something I’ve seen in visualization (SIGGRAPH hovered around 17% for a while, but they’ve since come back to 20% and higher).

The equivalent metric for journals is the impact factor, which is the average number of times a paper in that journal gets referenced by other papers. This is largely meaningless in visualization because of the small number of journals and the size of the field in general (i.e., impact factors are very low and jump around a lot). More established sciences like biology and physics have dozens of good journals that are ranked by their impact factors, which only change very slowly.

## Conferences, Symposia, Workshops

In many fields, conferences accept abstracts or very early work. That is not the case in visualization (or computer science in general). Conferences expect full papers that are reviewed as they are, which means that the reviewers can’t request major revisions. What is typically possible are minor revisions, such as fixing typos and minor clarifications that don’t require substantial new work.

The difference between a conference and a symposium isn’t very clearly defined as far as I know, though symposia tend to be smaller and less well-established than conferences. The decision to rename a symposium and make it a conference seems to be largely an administrative one.

Workshops tend to be a much more ad-hoc, smaller, and generally of lower quality. The goal of a workshop is discussion and exploration of new topics much more than the presentation of completed research. However, many workshops are unfortunately run as mini-conferences with lots of presentations and little time for discussion.

Workshops tend to have much higher acceptance rates than conferences (50% and higher), and to accept work that is much less finished than conferences. That’s good and bad. The good is that early work can be shown and discussed, but the bad of course is that if you expect to see high-quality work, you might be disappointed. That doesn’t mean that it’s all bad, of course. Workshops like [BELIV](http://www.beliv.org) always have some very interesting and thought-provoking papers.

<figure><img src="https://media.eagereyes.org/wp-content/uploads/2013/11/DSC_0495.jpg" alt="" width="730" height="486"/></figure>

## Short Papers and Posters

All conferences accept full papers, but some also have a track for short papers. As the name suggests, short papers tend to be shorter (4–6 pages as opposed to the typical 8–12 for full papers). But in addition, their acceptance criteria are typically less strict, and the acceptance rate higher (within the short paper category). Got a good little idea that just doesn’t warrant a full paper? Write a short paper. Short papers can be very valuable research contributions, but they don’t generally have the same weight and quality level as full papers.

Posters are a completely separate category. A poster really consists of two parts. The authors submit an extended abstract (usually 2–4 pages), which is what is used to make the acceptance decision (and included in some sort of proceedings, though not in a journal). What is shown at the conference is an actual poster that is usually put up for display for a few days so people can see it, with the poster authors nearby for discussion and/or demos at certain times.

Posters are all over the map. Acceptance rates can be very high, which is a good thing: get work in front of people, give students exposure, collect feedback and ideas, etc. But that also means that the quality is really hit-or-miss. There are really good posters and really, really terrible ones. Posters are also not generally considered published work, so the same ideas can later be written up and submitted as a paper. That’s generally a no-no with any kind of paper (even short papers).

## A Ranking of Visualization Venues

While it’s easy to rank the top venues in visualization, there is a lot more debate about where the medium and lower tiers go. Below is my attempt at doing this, with the full expectation that I will get yelled at for some decision or another.

### Top Tier: TVCG, VAST, InfoVis, SciVis, EuroVis, CHI

The best visualization venues are:

- The [Transactions for Visualization and Computer Graphics (TVCG)](http://www.computer.org/portal/web/tvcg), the top journal in the field.
- The [IEEE VIS](http://ieeevis.org) conferences: VAST, InfoVis, SciVis. Their proceedings are now all published in TVCG.
- [EuroVis](http://eurovis.org). Roughly at the same level as VIS, EuroVis papers are published in CGF.
- [Computer Graphics Forum (CGF)](http://onlinelibrary.wiley.com/journal/10.1111/(ISSN)1467-8659). While TVCG has largely been taken over by visualization, CGF is much more mixed between visualization and other computer graphics topics.
- The [CHI Conference on Human Factors in Computing Systems (CHI)](http://chi2014.acm.org) is not a visualization conference, but does accept the odd visualization paper. Those visualization papers that do get in are generally very good.
- [SIGGRAPH](http://www.siggraph.org). I’m really only including this here because I mentioned it earlier and many people have heard of it. The visualization community has pretty much given up on SIGGRAPH, and vice versa. If you have a visualization technique that produces stunningly beautiful images, you can give a SIGGRAPH submission a shot. More than likely, it’s a waste of time, though. If you get it in, it’s a big deal however, and you join the very exclusive club of visualization researchers with SIGGRAPH papers.

### Middle Tier: InfoVis Journal, CG&amp;A, VIS Symposia, PacificVis

The second tier are not quite as good as the above, but are still solid venues to get work published.

- The [Information Visualisation Journal](http://ivi.sagepub.com) (abbreviated as IVS, IVI, or IV Journal) is a more recent journal that still seems to be struggling for attention. Paper quality is more mixed than in TVCG, though they are also more focused on information visualization.
- [Computer Graphics and Applications](http://www.computer.org/portal/web/computingnow/cga) (CG&amp;A) is a magazine published by the IEEE that is more application-oriented and geared towards a broader audience. It’s a good place for systems papers and applications in general. Papers get rewritten for readability and there are some restrictions on the number of citations, etc.
- IEEE VIS doesn’t just consist of the three conferences, but also of a few symposia. This year, those included LDAV (Large Data Analysis and Visualization), BioVis (bioinformatics data visualization), and VizSec (security visualization). I wasn’t excited by LDAV last year, and I didn’t attend this year. BioVis is a great effort that brings together visualization and bioinformatics researchers. I don’t know anything about VizSec. But these are good venues to talk to a more specialized audience and to explore topics that aren’t covered enough in the conferences.
- [PacificVis](http://www.pvis.org) technically has a good acceptance rate, but I haven’t seen many exciting papers published there. It also seems more focused on scientific visualization, so it’s a bit outside my general awareness horizon.

There are also a number of other small conferences and symposia that aren’t core visualization venues, but that can be interesting for certain work. Those include [User Interface Software and Technology (UIST)](http://www.acm.org/uist/), [Advanced Visual Interfaces (AVI)](http://hoc12.elet.polimi.it/avi2014/), the [Diagrams Conference](http://www.diagrams-conference.org/2014/), etc.

### Lower Tier: IV, VIS workshops, VDA, WSCG

Lower tier means high acceptance rate and generally low quality, but they can still be worthwhile to get master's thesis work published, etc. The point is to know what to expect, both when reading a paper from such a conference, and when submitting work there.

- *[International Conferences in Central Europe on Computer Graphics, Visualization and Computer Vision](http://www.wscg.eu)* (formerly [Winter School of Computer Graphics, WSCG](http://www.wscg.eu)). If you work in visualization, you’re probably getting the barrage of emails from Vaclav Skala each year about WSCG. The conference has a high acceptance rate, but it’s also a good opportunity to travel to Plzen (which the Pils is named after) and see work from Eastern Europe that you wouldn’t otherwise see. Also, at what other conference are you handed two bottles of beer with your name badge when you register?
- [Visualization and Data Analysis (VDA)](http://vda-conference.org) is a small conference with a high acceptance rate (48% in 2012) that is part of the SPIE Electronic Imaging Conference. This could be a really solid little conference, but being tied to a large conference that has nothing to do with visualization (and that is quite expensive) doesn’t do it any favors. Though if you go, you'll be able to just skip over to [Human Vision in Electronic Imaging (HVEI)](http://users.eecs.northwestern.edu/~pappas/hvei/), which is a solid little perception and vision conference.
- Workshops at VIS. While they are associated with a high-quality conference, the limited audience and late deadline for these workshops usually means that they don’t get a lot of submissions (and those are often rejected conference submissions). So the overall quality is just not as high. The focus on a narrow and potentially overlooked topic can still make them worthwhile, though.
- A British company called graphicslink organizes a conference confusingly named [Information Visualisation](http://www.graphicslink.co.uk/conferences.htm) (commonly referred to as IV), with a number of associated conferences, one of which is called ViS. It is usually held in London, but also travels around Europe at times; next year, it will be held in Paris. The quality is generally very low and the scope includes anything that has to do with pixels, either generating them or analyzing them. Avoid.

## What about Visualized, Strata, eyeo, VIZBI, openvis, Tapestry, etc.?

This posting is purely about academic conferences. A number of conferences have cropped up in the last few years that are either entirely non-academic, or that are run by people in other fields who want to explore visualization. These conferences are a good complement to the academic ones and will hopefully help steer and broaden the scope of VIS, EuroVis, and others.

A large variety of conferences and journals is a good thing, even if it can be confusing. The bigger issue right now is that the number of really good ones is still too low. There should be more small conferences, perhaps even more focused on particular questions (like perception, particular data types, etc.) for good work to be presented and discussed. BioVis is an example of such a conference, though I'm not sure if it's such a great idea to stuff ever more content into IEEE VIS; having more independent conferences throughout the year would be better. But there are of course reasons that make starting a new conference from scratch a challenge.
