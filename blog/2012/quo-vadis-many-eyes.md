---
title: "Quo Vadis, Many Eyes?"
description: "Remember when visualization for the masses was all the rage, back in 2007? We were so young and hopeful. Many Eyes and Swivel were the harbingers of a new age of data literacy and well-informed debate. Visualization was going to be social and change the world. Alas, it was not to last. Swivel is gone, and Many Eyes clearly seen its best days. This is despite the fact that interest in visualization is growing, and it turns out that Many Eyes is as busy now as never before. I have scraped some data from the site that shows that despite the lack of updates and new features, people's use of it is still increasing. The data also gives some interesting insights into what people use it for."
date: 2012-02-26 21:30:00
tags: many-eyes, criticism
featuredImage: https://media.eagereyes.org/wp-content/uploads/2012/02/me-views-over-time.png
---

# Quo Vadis, Many Eyes?

Remember when <a title="InfoVis 2007: InfoVis for the Masses" href="/blog/2007/infovis-2007-infovis-for-the-masses">visualization for the masses</a> was all the rage, back in 2007? We were so young and hopeful. <a href="http://www-958.ibm.com/software/data/cognos/manyeyes/">Many Eyes</a> and Swivel were the harbingers of a new age of data literacy and well-informed debate. Visualization was <a title="InfoVis Panel: The Impact of Social Data Visualization" href="/blog/2007/panel-social-data-visualization">going to be social</a> and <a title="VisWeek Preview: Changing the World with Visualization (Panel)" href="/blog/2009/visweek-changing-the-world-with-visualization-panel">change the world</a>. Alas, it was not to last. Swivel <a title="The Rise and Fall of Swivel.com" href="/criticism/the-rise-and-fall-of-swivel">is</a> <a title="Swivel, Part 2: Solving A Single Problem" href="/criticism/swivel-part-2-solving-a-single-problem">gone</a>, and Many Eyes clearly seen its best days. This is despite the fact that interest in visualization <a href="http://blog.visual.ly/why-is-data-visualization-so-hot/">is growing</a>, and it turns out that Many Eyes is as busy now as never before. I have scraped some data from the site that shows that despite the lack of updates and new features, people's use of it is still increasing. The data also gives some interesting insights into what people use it for.

## Signs of Decline

What got me interested in doing this was my perception that there had not been anything new from Many Eyes in a while. The site's founders, Martin Wattenberg and Fernanda Viégas, left about three years. First they started <a href="http://hint.fm/">their own venture</a>, then they joined Google. Other members of the Visual Communication Lab (VCL) left in short order: Frank van Ham went back to Europe about two years ago, and Adam Perer left late last year (he is still listed on the IBM-external VCL webpage (update: this is now a spam site, link removed), but <a href="http://www.linkedin.com/in/adamperer">his LinkedIn page</a> is more up-to-date).

It's fairly clear that IBM has no interest anymore in Many Eyes, at least in its public-facing incarnation. The move, about two years ago, to an almost <a href="http://www-958.ibm.com/software/data/cognos/manyeyes/">comically bad URL</a> was a strong sign. I don't think I've seen a URL like this in the last ten years or more, it's a sight to behold:

>	http://www-958.ibm.com/software/data/cognos/manyeyes/

That is the front page, not some internal path. I don't know who made this decision, or based on what thinking, but it doesn't make sense in any way. This doesn't work as advertising for <a href="http://www-01.ibm.com/software/analytics/cognos/?pgel=ibmhzn&amp;cm_re=masthead-_-products-_-sw-cognos">Cognos</a>, if that was their intention, it just makes them look silly (though Cognos seems to have a thing for ridiculous URLs in general). Anybody can point a domain to a subdirectory, but big, mighty IBM can't? Seriously?

The VCL's external website also speaks volumes about the how important the group was to IBM. It seems that they have been entirely absorbed now into <a href="http://www.research.ibm.com/social/">IBM's Center for Social Business</a>. When they started, <a title="Review: Swivel vs. Many Eyes" href="/criticism/swivel-vs-many-eyes">I criticized Many Eyes's lack of a business model</a>; it looks like IBM finally decided that they didn't see one in the future, either.

## Scraping the Site

I can't say that scraping the data was easy, but Many Eyes at least provides easy ways to enumerate all the datasets and visualizations and slowly work through them. There are a number of pitfalls and issues, such as the fact that there are two entirely different URLs for each dataset, but all the data is there, and it's fairly easy to get.

The data is partly available because I am using <a href="http://public.tableausoftware.com/">Tableau Public</a> for the embedded visualizations. It is rolled up to the day level though, so I could stay under the 100,000 row limit. My scraper was also unable to get some of the datasets and visualizations, and I want to add those before releasing the entire data collection. The missing datasets make up much less than 1% though, so they do not influence the discussion here in any meaningful way.

You can download the workbooks and partial datasets from the little toolbars on each of the embedded views below. I will release the entire dataset once I've added the missing bits and done a bit of clean-up.

## A Look At the Data

I had expected to find that use of Many Eyes had increased from its start in early 2007 to around 2010, and then dropped off slowly. Interestingly, that is not the case. By use, I mean people uploading data and creating visualizations, not page views or embeddings (which I don't have data for). While it wouldn't have surprised me to see lots of people to still ending up on the site for one reason or another, the amount of new things that are being made is quite staggering.

<p align="center"><img class="aligncenter size-full wp-image-9633" src="https://media.eagereyes.org/wp-content/uploads/2012/02/me-datasetsvsvizzes.png" alt="me-datasetsvsvizzes" width="660" height="736020" /></p>

Looking into the much noisier week-level data, one can see some interesting patterns. There is a clear dip around Christmas, with a somewhat less obvious dip about a month earlier (Thanksgiving). While these are expected (the Thanksgiving dip says that a large portion of users are American), the dip in late August is less so. There are also some interesting spikes up, often around early May for some reason.

Looking a bit more closely at 2011, despite the spikes in both directions the year was actually fairly flat. It looks like the site is at a plateau, or close to it, and will likely have fewer new visualizations and datasets in 2012 than it did in 2011.

<p align="center"><img class="aligncenter size-full wp-image-9638" src="https://media.eagereyes.org/wp-content/uploads/2012/02/me-visualizations-per-week.png" alt="me-visualizations-per-week" width="660" height="360" /></p>

The comparative view above is a bit misleading, because scale on the vertical axis is different between the parts. The number of visualizations is quite a bit lower than the number of datasets: there are about 2.5 times more datasets than there are visualizations.

<p align="center"><img class="aligncenter size-full wp-image-9632" src="https://media.eagereyes.org/wp-content/uploads/2012/02/me-datasetsvsvizzes-scaled.png" alt="me-datasetsvsvizzes-scaled" width="660" height="360" /></p>

There seems to be a fairly straight-forward reason for this, though that may not tell the whole story. Uploading datasets on Many Eyes is easy, but it is also error-prone. It appears that people have to retry several times before they get it right; a lot of dataset names end in numbers that the system seems to add when it has already seen a name. There also apparently is no way to delete datasets, so the unsuccessful attempts stay on the site forever.

More surprisingly, though, it appears that this was less of a problem early on. When looking at the distribution of visualizations per dataset, that number started at over 1 and then slowly declined to the current value of about 0.4. This view again shows weekly data, where the initials spike is clearly visible.

<p align="center"><img class="aligncenter size-full wp-image-9631" src="https://media.eagereyes.org/wp-content/uploads/2012/02/me-avg-views-over-time.png" alt="me-avg-views-over-time" width="660" height="360" /></p>

Not only are people making mistakes, the lack of collaboration on the site means that few people pick up others' datasets to create visualizations from, which would increase the number of visualizations per dataset. The idea of social data visualization was that somebody would dig up some data, and then many people could easily create visualizations from it. That isn't happening on Many Eyes, though. As I was developing my scraper, I saw several copies of Obama's State of the Union speech appear. The people who were uploading it apparently never checked if that data was already there, but just uploaded their own version. The result is that the majority of datasets that has any visualizations at all has exactly one. Datasets with more than one view on them are quite rare, while a clear majority of datasets has no views at all.

<p align="center"><img class="aligncenter size-full wp-image-9635" src="https://media.eagereyes.org/wp-content/uploads/2012/02/me-views-distribution.png" alt="me-views-distribution" width="660" height="180" /></p>

A community needs leadership and nurturing, and Martin and Fernanda did a lot of that in Many Eyes' early days. That is quite visible when looking at the distribution of the number of visualizations per dataset over time. The gray area at the top of the next view are the datasets without any visualizations, the stacked areas are increasing numbers of views (1 to 6, from the bottom). While the upper layers are clearly visible in the first few months, the decline in social engagement over time is very obvious, settling at about 70% of datasets with no views, 25% with one view, and the remaining 5% being split up among two and more views.

<p align="center"><img class="aligncenter size-full wp-image-9636" src="https://media.eagereyes.org/wp-content/uploads/2012/02/me-views-over-time.png" alt="me-views-over-time" width="660" height="360" /></p>

What do people use Many Eyes for? Looking at the types of visualizations shows some interesting patterns. The most common views, by far, are the various text views. That is quite interesting, since there are few good visualization tools for text. Of those that exist, though, a good part can be found on Many Eyes. Their phrase nets and word trees are unique and quite effective. Looking at numerical data displays, the bubble chart and bar chart are the most common. It is remarkable that matrix charts and treemaps are more popular than line charts – though I guess line charts are easy to make in lots of programs (so are bar charts, though).

<p align="center"><img class="aligncenter size-full wp-image-9637" src="https://media.eagereyes.org/wp-content/uploads/2012/02/me-vis-types.png" alt="me-vis-types" width="660" height="264" /></p>

Digging a little deeper into the text views, the clear winner here is the very attractive wordle. That it is so popular on Many Eyes is still remarkable though, since it has <a href="http://www.wordle.net/">its own website</a> where people can create their own wordles as well.

<p align="center"><img class="aligncenter size-full wp-image-9634" src="https://media.eagereyes.org/wp-content/uploads/2012/02/me-text-vis-types.png" alt="me-text-vis-types" width="660" height="130" /></p>

In summary, it appears that Many Eyes has succeeded in some of its goals and not in others. While it was a pioneer in the social aspects, the datasets are a big mess and there is nowhere near the level of collaboration that there could be. What has worked well, though, and attracted a lot of attention are the unique text views. I can't help but think that there's a lesson to be learned here somewhere.

## What Lies Ahead?

At this point, Many Eyes is essentially an empty shell that just keeps going because nobody has bothered to shut it down. It would take a major reboot for IBM to revive it at this point, since all the original members of the VCL and, frankly, all the people with any credibility in visualization, are gone. Experiments like Many Bills are nice, but they don't have anywhere near the scope and potential that Many Eyes had.

At the same time, though, there is clearly demand for accessible, powerful visualization on the web. And with ever more data becoming available, the need for better and more accessible ways of communicating it will only grow. The spirit of Many Eyes is still very much alive, even if the site is not.

<hr />

In the interest of full disclosure, I should add that I am <a title="Hello from Tableau (and Seattle)!" href="/blog/2012/hello-tableau-and-seattle">currently doing my sabbatical at Tableau Software</a>. This posting was not written to poo-poo the competition, however.


<PostedBy />


<aside class="comments">

---
## Comments

jon says…
>	Very interesting analysis, thanks for sharing.  It's just sad to see how promising projects tend to die inside of large companies like this.

Yannick Assogba says…
>	First, a few disclaimers: I work at IBM Research (at the VCL in fact) so I will not claim to be unbiased in my response. Second this is my personal response and isn't representative of IBM the company, also I did not work on Many Eyes so I definitely do not speak on behalf of those who did.
>	
>	I am not a fan of this post because it has many inaccuracies and an odd conflation of past work on many eyes with the mission of the VCL as a group. It seems to be more of a thinly veiled 'Quo Vadis VCL', which is maybe the article you intended to write, but if so you cannot deny that that is of a different nature than a data driven review of Many Eyes in 2012 (much more personal than your twitter poll question implies). There are a number of factual errors/sleights used in your portrayal of Many Eyes/VCL/IBM that I think bear correction/clarification. 
>	
>	First, Frank Van Ham moved to IBM Europe before Martin and Fernanda left (not after as your article suggests). It is also unclear from the way you write it whether you know that he is still at IBM and still doing visualization work. Though I would imagine you would have seen him at VisWeek last year and maybe gotten a chance to ask... As is, he is also lumped under your comment that "all the people with any credibility in visualization, are gone".
>	
>	Additionally why mention that Adam Perer left late last year, without mentioning that he didn't actually have anything to do with Many Eyes, or mentioning that he went to another part of IBM and is still doing visualization research? There seems to be clearer, simpler ways to say what you are implying, that the VCL isn't actively working on Many Eyes anymore.
>	
>	As someone who worked on Many Bills, I do find your comments about it strangely off topic and frankly unhelpful/unproductive. It is one of the worst kinds of critique; X is nice but its not Y, without saying anything substantive about X. Where does it fit into this article on Many Eyes? You seem to be suggesting that nobody should work on anything but Many Eyes, which coming from someone in academia/research I find baffling.
>	
>	Moving on to the substance of your post, I'm not sure I get the your conclusions: Your data Many Eyes usage is still growing (though not at as great a rate as before) therefore why is it is an 'empty shell that just keeps going because nobody has bothered to shut it down'? If people continue to find it useful, why should it be shut down even if it is not growing or being developed at the same rate as before? Also, "major reboot to revive it"? your data says the site is still growing in use (though not as fast as it used to), so why a major reboot? This seems to be blown way out of proportion
>	
>	There are some true points and some good analysis in this post, but its surrounded by so much inaccuracy and shadiness its hard for me to attach much credibility to the article as a whole especially given where you are working right now. Why not just let your data tell the story?
>	
>	"I don’t believe that Tableau and IBM compete in the Business Intelligence space." &lt;- Really???

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	Thanks for your response, Yannick. I will reply roughly paragraph-by-paragraph.
>	
>	First, regarding "Quo Vadis VCL": this was meant to be about Many Eyes, but its fate seems to be strongly tied to the VCL. Many Eyes' strength came from the original group of people behind it, who were strong visualization researchers. When they left one after the other, that was both a sign that they didn't see a future at IBM and that the site would suffer.
>	
>	Regarding Frank van Ham: I know that he is still at IBM, but back in The Netherlands. He is InfoVis chair this year, so he's clearly very much present in the visualization community. I don't know what Adam Perer did while he was part of the VCL, but he's another researcher who has good visibility in the academic research area who has left the group.
>	
>	I know that my wording here is a bit more pointed than perhaps necessary, but my point stands: the people who were known well in the academic community are gone. That doesn't mean that people who haven't published in the visualization literature can't do good work. But I also haven't seen much new work since Martin, Fernanda, Frank, etc. left. And while I may have gotten the order wrong, the key point of what I wrote still stands.
>	
>	As for my Many Bills comment: that was meant as a reference to my opening paragraph, which I had phrased to be all about utopian ideals, saving the world, etc. Many Bills is a great project, no doubt about it. What I meant is that it's more limited in its scope: it doesn't give people nearly as much opportunity to participate or use it for their own purposes. That doesn't take away from Many Bills, I just think that Many Eyes has/had the potential to have much more impact. My focus here is also visualization, and in that department Many Eyes is clearly the more interesting project. Besides, I'm not telling anybody what to do, I merely comment on what I think is happening.
>	
>	Regarding Many Eyes' growth: there are many websites that people use when they're already abandoned, and then suddenly they disappear. That is exactly what happened with Swivel, I don't think anybody saw that coming. Projects that have lost support for development will be axed sooner or later, if only to free up some resources they still tie up, or because some upgrade would require work that nobody wants to pay for. All the signs I see (and that I've listed above) point to this being the case for Many Eyes, and I'm sad to see it.
>	
>	You are right about my disclaimer, I've changed it.

Frank says…
>	First of all, nice to see some statistics on the current state of Many Eyes and I'm surprised to see it's still doing well. I get an overall feeling of disappointment from your post that is not warranted I think. This mainly stems from a misunderstanding of our initial objectives with Many Eyes and mismatched expectations. I just wanted to clear up a couple of points you touched upon (and again, these are strictly my personal views, not necessarily IBM's):
>	
>	- There are key differences between industrial research and academic research, both in main goal and funding models. Many Eyes was instigated as an industrial research project, which mainly serve to drive product development a couple of years out. IBM Research is dependent on corporate funding, not governmental funding and this often comes with (more) strings attached, more politics and a shorter horizon. That said, Many Eyes has actually been a resounding success as a corporate research project at IBM, and to this date(!) still helps a lot of IBM's product groups shape their thinking around collaboration and interactive visualization. Many Eyes was never intended as a commercial product like Tableau, nor as a web 2.0 startup like Swivel, and you should match expectations accordingly.
>	
>	- Regarding "that was both a sign that they didn’t see a future at IBM and that the site would suffer". Many Eyes had effectively stopped as a funded research project long before some of its creators (including me) moved on to other challenges both inside and outside IBM, for different reasons. We all knew funding would be stopped at one point when we started the research. Activity on Many Eyes did not drop because key people left, activity on Many Eyes dropped because funding for it ceased (as was expected when funding for it commenced). You seem to imply causation where there is none.
>	
>	- As for (lack of) collaboration on the site itself : Initially we had indeed hoped to become a hub for public analysis of data, but we made similar observations as you did (and published them at CHI in 2008). Discussion around data analysis typically happens in the user's community of interest and people will more often embed the visualizations on their own communities' sites (case in point: this blogpost). In this respect Many Eyes is just an online tool that is being used by users to quickly create and embed a visualization. Our users are simply not interested in looking at other people's data (they have enough trouble with their own data as is =)
>	
>	- As for data quality and duplicates : No, Many Eyes did not turn out to be a curated set of community data, nor did we intend it to be. If you wanted to get shared, high quality public data, you are much better off at sites like data.gov or similar. I also do not agree with data uploading being error prone (but easy?). In fact, the multiple copies that you're seeing are likely the result of *user* data errors, which are most easily corrected by uploading a new version. We had edit functionality in place at one point, but users just kept unloading duplicates, because it was much faster and simpler than editing a dataset in a webbrowser. Users don't care about duplication because it's not their disk space being wasted and we don't care because we are not trying to be a data repository (and we have diskspace aplenty :) ). Also, you can delete your data sets fine, using the delete link at the top of the dataset detail page.
>	
>	Overall, I think research projects should be judged on how well the ideas behind them percolate into the real world, not on how long their instances survive (and IBM is a just little less resource constrained than Swivel in that respect). Some research projects evolve directly into product, some influence product indirectly and some research projects inspire other companies to follow a similar path. The irony (to me at least) is that 6 years after our initial envisioning of Many Eyes, you posted a long analysis of a subject you cared about and used a 3rd party online tool to create embedded interactive visualizations that supported your point. For a research project impact that's not too shabby I think :)
>	
>	One of the things I like about this blog is that it's not afraid to take up the occasional strong position and matching wording. At least we'll get some animated discussion on whether you're right or not.. =)

<a href="http://informaatiomuotoilu.fi/" rel="nofollow noopener" target="_blank">Juuso Koponen</a> says…
>	At least over here in tiny Finland the local IBM branch is quite active in promoting the use of Many Eyes as a visualization tool for the open data community. The opinions of a remote foreign branch obiviously do not necessarily have much of an impact on whether IBM decides to pull the plug, revive the project or wait and see, but I’d wager the Finnish are not the only people within the company who still see Many Eyes as being relevant even today.

Yannick Assogba says…
>	Unfortunately, the way your article is written also goes the other way round and ties the fate of the VCL to that of Many Eyes, and in a stranger twist, ties the fate of all visualization work at IBM to your perceived fate of Many Eyes as well. It is possible you intended your comment about researchers with credibility being 'gone' to apply solely to the VCL, but the way it is written, at least to my reading, even if you limit it to the universe of people who have published at InfoVis/Vast is still disrespectful to any IBM Researchers who have published there since Martin and Fernanda left. 
>	
>	But yes a point of yours stands. The VCL today is not the same group of people who worked on Many Eyes (which didn't include Adam in case there was still some confusion about that) and Martin and Fernanda have left IBM.
>	
>	I feel the Many Eyes / Many Bills comparison is an apples to oranges one (unless there are some actual criteria, other than a vague notion of 'interestingness', on which you are comparing them). They are two very different projects, one is a visualization of a specific dataset the other is a platform for visualizing lots of different kinds of data. It just feels weird to me to compare them in the way you do. Especially with your 'in the visualization department' line. Why is Many Eyes "clearly" a more interesting visualization project? I don't debate that *you* may find it more interesting, but I take issue with the blanket statement that we all have this shared idea of what are interesting lines of research to take. I think your post is much less in the 'visualization department' than you suggest.
>	
>	Concerning the change in disclaimer at the end of the article. Any explanation for its original form? Two possible interpretations I can draw: yesterday, you knew that IBM and Tableau compete in the Business Intelligence space, but wrote otherwise. Or, you did not know this up until you read my comment yesterday, and upon learning this, you found it appropriate to change your disclaimer.

<a href="http://www.datadrivenconsulting.com" rel="nofollow noopener" target="_blank">Alex Kerin</a> says…
>	Looking at the data, the use of the text views as a percent of all chart types has been dropping since 2009, going from a high of 45% of the vizes to 28% for 2012. Bubble charts, bar charts and scatter plots have been picking up the slack, suggesting perhaps (!) that more serious use of the tool is being made?

</aside>

