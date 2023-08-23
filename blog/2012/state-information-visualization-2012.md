---
title: "The State of Information Visualization, 2012"
description: "Another year has come and gone, and many exciting things have happened in information visualization. Here is a look back at some interesting events from last year, as well as what I expect for 2012 and the next few years."
date: 2012-01-22 21:30:00
tags: state-of-infovis
featuredImage: 
---

# The State of Information Visualization, 2012

Another year has come and gone, and many exciting things have happened in information visualization. Here is a look back at some interesting events from last year, as well as what I expect for 2012 and the next few years.

## 2011: What Was

The launch of <a title="A Protovis Primer, Part 3" href="/tutorials/protovis-primer-part-3">Protovis</a> was a big deal in 2010, but it was bettered by <a href="http://mbostock.github.com/d3/">D3</a> last year. Unfortunately, that also means that Protovis was abandoned only about one year after being publicly introduced. D3 is clearly the more powerful and versatile system, but it is also a lot more generic than Protovis. Rather than providing clean, visualization-specific primitives, D3 is a general-purpose DOM manipulation tool that requires designers and programmers to dig around in ugly, XML-infested SVG. The approach is clearly the better one from an architectural computer-science point of view, but for many users, it's a step in the wrong direction.

In my last <a title="The State of Information Visualization, 2011" href="/blog/2011/state-of-infovis-2011">State of Information Visualization</a>, I expressed my hopes that IE9 would be adopted quickly by businesses, which would make it easier for visualization projects to rely on HTML5 rather than Flash. While IE9 does not appear to be quite as common as I had hoped, something similar (and perhaps even better) has happened instead: more people are dropping Internet Explorer altogether. Chrome in particular has been gaining steadily over the last year, mostly at the expense of Internet Explorer. This development makes rich, powerful visualization possible in the browser, and I am seeing more and more of that every day. Showing static charts as images on the web is nothing new, but for the user to be able to talk back and work with the visualization is. It's a bit like the move from static websites to more user-centered pages with comments, etc.: visualization on the web 2.0.

Data journalism keeps getting attention in visualization. There was another workshop at VisWeek on storytelling, as well as two papers on the topic (more on those in a future posting). The academic community is still mostly concerned with data analysis rather than communication, though there is clearly interest. But the world out there is not waiting. The <a href="http://www.guardian.co.uk/news/datablog">Guardian datablog</a> is collecting and releasing data every day, and more and more stories are now based on numbers and use some form of visualization. It's easy to complain about the bad ones, but we also need to come up with ideas how to tell stories around data in a constructive way.

That is also what got me excited about the launch of <a href="http://visual.ly/">Visual.ly</a>. Their current infographics directory is nice, but their <a title="Visual.ly: The Future of Data-Based Infographics" href="/blog/2011/visually-the-future-of-data-based-infographics">more interesting and ambitious project</a> is still to launch. Being able to build graphics-rich visualization (or data-rich infographics) will be incredibly powerful and could make a big difference in the way stories are told with data.

On a more academic subject, we saw some great visualization work in bioinformatics at the new <a href="http://biovis.net/">BioVis Symposium</a> at VisWeek. This is a trend that <a href="/blog/2010/state-of-infovis-2010">started a while ago</a> and that is undoubtedly here to stay. Most of the work was interesting because it solved real problems, not because it was necessarily pointing into new directions in terms of visualization. However, I think that the connections made at the symposium and the awareness of the wealth of data and questions in bioinformatics is bound to lead to very interesting new work.

Another topic that seems to be heating up is graphs. A lot of network visualization was (and still is) centered around variations of the node-link-diagram. It's no secret that these visualizations don't scale beyond a few dozen nodes, and the amount of actual information that can be gained from them is really rather small. There are already some approaches in the right direction, like Martin Wattenberg's <a href="http://www.research.ibm.com/visual/papers/pivotgraph.pdf">PivotGraph</a> and matrix-based graph visualization techniques. None of them have seen wide adoption so far, but there were several papers at VisWeek last year that looked very promising. Whether they visualize networks in a hybrid way (using both node-link and the matrix) or use networks to analyze relational data, it's all starting to get much more interesting than yet another graph layout algorithm.

## 2012: What Will Be

The big deal in 2012 will be visualization in data journalism. A lot of attention will be coming our way as part of the <a href="http://www.malofiej20.com/">20-year anniversary of the Malofiej Awards</a>, aka <em>The Pulitzer Prize for Infographics</em> (where I will be a judge this year). New, well-funded <a href="http://datajournalismawards.org/">Data Journalism Awards</a> were also just announced that are backed by Google and that include a <em>visualization and storytelling</em> category. This is a reflection of both the importance of data-based journalism and the wave of new data stories that are about to hit us. And many of these will at least include visualizations, if not be entirely built around them.

If you don't believe that data journalism will be big in 2012, I have one word for you: U.S. Presidential Elections. Polls, primaries, more polls, ads, counter-ads, and then election night. There will be more data than ever before, and it's not like there was no data last time. This will be huge, and it's mostly based on numbers. No visuals is not an option, so it will be touch-screen maps vs. holograms (and, hopefully, some better alternatives).

While it's exciting to see this happening, my concern is that the academic community will miss the boat. I don't want to end up with a situation like in human-computer interaction, where all the constructive work is done in industry and <a href="http://dub.washington.edu/blog2010/aug/29/chi-becoming-even-more-irrelevant/">all academics seem to do is study what others build</a>. We need to stay on top of what is going on and think hard about how we think things should be done. If we fail to do so, we'll have no right to complain if the results end up not being what we wanted them to be.

My other big hope for this year is networks. That networks are important is not a question, but I just don't think they've been done well so far. The ubiquitous hairball may be nice to look at for a bit, but to actually get information out of these things, we need better techniques. I'm excited about what has happened over the last year or two, and I believe that we are on the verge of seeing some really interesting new techniques that will make it not only possible to work with large graphs and understand them, but do so in a way that is easier to grasp than what has been done so far.

## Beyond 2012

Data journalism will keep getting more interesting. I don't think that we have even really scratched the surface on this so far. Another area that I think is ripe for change, and where we're going to hit a wall soon, are information graphics. You can only look at so many colorful, long-aspect pictures before you get bored and realize that you're not actually getting anything out of them. There is a lot more that can be done here, and I will write about those in a future posting. This is not simply about arguing how much chart junk is good or bad, it's about the basic idea of what an infographic or visualization even is. In the longer run, I think that these two seemingly irreconcilable fields will merge, or at least end up using the same ideas (and many of the same techniques).

The visualization field also needs to become smarter, work on more advanced techniques (rather than simply new ways of doing the same things), and organize more effectively around the key issues. We're doing fairly well so far, but we need to keep it up. The competition from the corporate world is increasing with more and more companies, including some of the biggest software makers, discovering visualization. We need to make sure that we're heard and that we are able to contribute meaningfully to what is being developed, and don't just work on our toy datasets and problems inside our ivory towers.

[[PostedBy]]

<aside class="comments">

---
## Comments

Jakob says…
>	Re: infographics
>	Did you read my guest post on the visually blog? I've attempted to do the very thing you mentioned, i.e. describe ways in which infoposters can be reconciled with solid visualization practices.
>	
>	Eagerly awaiting your take on this!
>	Cheers,
>	Jakob

Al says…
>	I keep hearing that an academic data visualisation community exists, but I see little  actual evidence of these people beyond the occasional snooty comment or blog post bemoaning bright colours and over-quoting tufte ... What do these people do? Are they the people who keep churning out twitter visualisations? Or do they all work on nothing but closed BI apps and R plugins? Are there any journals that are actually worth following? 
>	
>	Re infographics getting interesting: the elephant in the room here is how much booming demand has outstripping the number of designers with specialist data skills. Things will change as skills catch up - and any visually orientated guides to stats and best practices will speed this up.

<a href="http://periscopic.com" rel="nofollow noopener" target="_blank">Dino Citraro</a> says…
>	"...the occasional snooty comment or blog post ..."
>	
>	Was this meant to be recursive?

D.A. says…
>	One major pressure in the academic data visualization community is to publish. There are a variety of reasons for this, but foremost among these is often to satisfy collaborators, tenure committees, and grant constraints. Unfortunately, this binds academia tightly to journals and conferences. The biggest place to find the academic community is going to be venues like VisWeek, EuroVis, and PacVis. If you're interested, Fell in Love with Data (http://fellinlovewithdata.com/) is one of the few blogs out there explicitly working to bridge the academic community with the visualization community at large.

Kevin says…
>	"Are there any journals that are actually worth following?"
>	
>	I'd be curious as well what journals most data visualization academics follow. I'm not an academic currently and funding myself to any of the viz conferences isn't feasible right now. I've come across some great academic articles through my blog feeds (probably here or FILWD) but having more centralized resources would be nice.

<a href="http://www.research.att.com/vis" rel="nofollow noopener" target="_blank">Stephen North</a> says…
>	Matrix based layout is interesting, but node-link layout algorithms are boring and more work is unnecessary?
>	
>	If it's a solved problem, why am I still seeing so few automatically generated layouts that even approach the quality of good hand-made diagrams?
>	
>	To me, it's all interesting, even metaphors and case studies. The cowboy and the farmer should be friends.

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	The academic visualization community has developed a lot of the techniques people use, like treemaps, parallel coordinates, etc. We also do a lot of work to figure out which of these techniques, whether developed in academia or elsewhere, work and for what kinds of data.
>	
>	Overquoting Tufte is a common thing for academics to do, unfortunately, but Tufte also provides a good counterpoint to the thoughtless overdecoration that is so common in information graphics.
>	
>	For academic journals, the main ones in information visualization are the <a href="http://www.computer.org/portal/web/tvcg" rel="nofollow">IEEE Transactions on Visualization and Computer Graphics (TVCG)</a>, the <a href="http://ivi.sagepub.com/" rel="nofollow">Information Visualization Journal</a>, and <a href="http://www.computer.org/portal/web/computingnow/cga" rel="nofollow">IEEE Computer Graphics and Applications</a>. The main conferences are <a href="http://visweek.org/" rel="nofollow">VisWeek</a> and <a href="http://eurovis.org/" rel="nofollow">EuroVis</a>.

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	I did not say that more work was unnecessary. What I said was that there is new work that is pointing into a direction that I think is a lot more promising than pure node-link diagrams. The typical hairballs won't be solved with better layout algorithms, the entire approach simply breaks down when you're dealing with large graphs.

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	It's a start, but I'm thinking about more concrete things that can be done. You argue about the differences and nuances, what I have in mind are future directions that go well beyond what is being done right now.

Al says…
>	Ha! good point well made, touche...

Al says…
>	Perfect, thanks! (thanks also to DA for the FILWD link)

<a href="http://www.deanmeyers.net" rel="nofollow noopener" target="_blank">Dean Meyers</a> says…
>	Interesting quick overview, and agreed that data visualization in journalism has more need than good practitioners. The infographic debate has just started (as so much of it looks like over-eager powerpoint slides strung together into one overwhelming sheet of factoids), particularly where the line between objectivity and the art of persuasion through visuals is drawn...or not. 
>	
>	Any thoughts on Wolfram's CDF (Computable Document Format) and other toolkits, or big data management? You didn't mention O'Reilly's Strata conferences, do they figure into your choices for finding/sharing information visualization resources?

<a href="http://blog.jochmann.me" rel="nofollow noopener" target="_blank">jakob</a> says…
>	Fair enough. I was asked to deliberate existing practices and worked out the underlying conceptual differences. Which may or may not help discover future directions. Anyway, have a great and productive 2012! Looking forward to reading about your new ideas.

<a href="http://cscheid.net" rel="nofollow noopener" target="_blank">Carlos</a> says…
>	"The typical hairballs won’t be solved with better layout algorithms"
>	
>	Ugh. I disagree with this statement in the strongest possible terms. (Which is, I really want to say "this sentence is a load of crap" but I'm afraid you will misread the tone :))
>	
>	We *know* that the current algorithms and drawing techniques are bad. But do you actually have evidence that no good algorithms exist? Without evidence, your statement is simply a fallacy of mixing existentials and universals.
>	
>	And, to ask an even more basic question: do you have evidence that matrix diagrams do a better job?
>	
>	Now you made me really push my "digression into lower bounds" digression in the graph visualization to the top of the priority queue :)

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	I can't prove that there will never be a good node-link algorithm, that is true. But I don't think that your position is much stronger: you're saying that we will eventually find one that works, but you don't have any evidence, either.
>	
>	I will write about matrix diagrams and some of the hybrid techniques soon. Matrix diagrams have their problems, but they allow some operations that are very useful. Plus, there are other techniques that go much more directly to the heart of the questions that are often what people are actually trying to ask. And those typically don't include "show me a hairball" ;)

<a href="http://cscheid.net" rel="nofollow noopener" target="_blank">Carlos</a> says…
>	I said nothing about eventually finding one good algorithm. The current situation is that we're still trying to find better algorithms for both diagrams, and we should be honest about that. You seem to think of algorithm research as unsexy ("yet another layout algorithm"), but that's the only way we know how to make progress: ugly bit by ugly bit. Eventually we'll know enough to decide if general statements like "no good algorithm exists" is true. We're not there right now, but we're working on it!

<a href="http://www.BioFabric.org" rel="nofollow noopener" target="_blank">Bill Longabaugh</a> says…
>	You predict that in 2012, for networks, "...we are on the verge of seeing some really interesting new techniques...".  Please have a look at BioFabric, which has just been released: www.BioFabric.org. The paper is at http://www.biomedcentral.com/1471-2105/13/275/ .  Instead of depicting nodes as points, it represents them as horizontal lines...this means it is scalable and unambiguous.

</aside>

