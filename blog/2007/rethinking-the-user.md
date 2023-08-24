---
title: "Rethinking the User"
description: "A discussion at a seminar in Dagstuhl  (Germany) on Information Visualization has led to an interesting insight: what if we completely misunderstood who the users are for visualization? Especially in light of the current developments for broadly usable visualization, we need to rethink the types and levels of expertise that we can expect."
date: 2007-05-31 13:30:47
tags: 
featuredImage: 
outline: false
---

# Rethinking the User

A discussion at a <a href="http://kathrin.dagstuhl.de/07221/">seminar in Dagstuhl</a> (Germany) on Information Visualization led to an interesting insight: what if we completely misunderstood who the users are for visualization? Especially in light of the current developments for <a href="/blog/visualization-sets-information-free.html">broadly usable visualization</a>, we need to rethink the types and levels of expertise that we can expect.

Two presentations in a session about Visual Analytics (by Stephan Diehl and Daniel Keim) presented work that had been based on visualization, but was not in itself visual. Diehl talked about a system for software development that was informed by insights from an exploratory visualization of version control data, and Keim gave a great overview over the problems when trying to "sell" visualization to potential users and funding agencies.

The current view of course is that visualization systems should be designed in a way that is useful to domain experts with little to no knowledge of visualization. In reality, of course these are not the actual users of visualizations: rather, the tools are run by their developers, in communication with the domain experts. Also, the idea of broadly available visualization tools á la <a href="/VisCrit/Swivel-vs-Many-Eyes.html">Swivel and Many-Eyes</a> presents us with a completely new type of user: the casual (but interested) non- or semi-expert.

So let's face it: we're deluding ourselves with our current user model. A much more realistic taxonomy of users (IMHO) is the following:
<ul>
	<li><strong>Visualization Experts</strong>. We develop the tools, we use them. Simple as that. We use external data, and we communicate with domain experts, but we do not hand the tools over. We know how to read our displays, and so we can make things that are far more advanced and complex than we would expect somebody without experience in visualization to understand.</li>
	<li><strong>Casual Users.</strong> The people who actually use visualizations they did not develop themselves are casual users, who are curious about something, or who just like playing with something visual. These users need general (i.e., not data-specific) tools that will be much simpler, and that will need to follow known interaction paradigms as much as possible.</li>
</ul>
Understanding this will make our visualizations much more useful in practice, and we will have more time doing productive work instead of chasing after users that simply don't exist.


<PostedBy />


<aside class="comments">

---
## Comments

Anonymous says…
>	A lot of biologists use reasonably sophisticated visualizations of microarray data. Is this a counterexample? Of course these tools are developed by people from the bioinformatics community rather than visualization experts, which may be relevant.

<a href="http://www.perceptualedge.com" rel="nofollow noopener" target="_blank">Stephen Few</a> says…
>	Robert,
>	
>	Actually, I believe that many of the folks that you call "visualization experts" (those who develop the tools) too often do not themselves really use the tools. If they did, they wouldn't make many of the mistakes that I've seen in designing the tools. Also, I believe that grouping everyone who does not develop visualization tools (which includes me) creates too broad a category and one that cannot be described with the term "casual users." People can be exceptionally expert in the use of visualization tools without ever being involved in developing one. I propose that the user category be divided into multiple levels of expertise. 
>	
>	Thanks,
>	
>	Steve

<a href="http://diuf.unifr.ch/people/bertinie/visuale/" rel="nofollow noopener" target="_blank">Enrico Bertini</a> says…
>	Robert,
>	
>	I think the question is much more in terms of perceived value. Users are able to learn very hard-to-use software if they have a strong reason to do it. A notable example is software to build 3D animations like <a href="http://usa.autodesk.com/adsk/servlet/index?siteID=123112&id=7635018">Maya</a>. Is it any easier to use than a typical infovis tool? I don't think so.
>	
>	Hence, my guess is that we shouldn't too much worry about WHO is the user but more on WHY somebody would use the tool. There may be millions of reasons and our job is more to find and understand understand at least a small proportion of them.
>	
>	From this point of view it is clear that a biologist is able to deal with fairly complex tools. As long as we expect a generic user, or two generic types of users, to be our target IMHO we miss the main point.
>	
>	There is something I started to believe since at least one year: people is not very much interested in exploring data as we "experts" are. Most of the people use software tools for specific purposes, with quite clear desired outcomes (e.g., I use PhotoShop because I want to polish up this photo I love). Are we able to support desired outcomes with visualizations?
>	
>	Good topic, anyway :-)
>	
>	Enrico.

Stefan M says…
>	I fully agree on your comment. In think a visualisation is good if the user does not need to think about it but can use it to "get the work done(tm)":) However, the design of such a visualisation becomes very complicated if the tool is very general. Maybe there is a relationship between general visualisations (such as trees) and more specific visualisations...
>	
>	:sm)

<a href="http://diuf.unifr.ch/people/bertinie/visuale/" rel="nofollow noopener" target="_blank">Enrico Bertini</a> says…
>	Hi Robert, just a quick note to let you know I recently replied to this post in <a href="http://diuf.unifr.ch/people/bertinie/visuale/">Visuale</a>, with my personal and somewhat reasoned view on "<a href="http://diuf.unifr.ch/people/bertinie/visuale/2007/07/whos_the_user_in_infovis.html">Who is the user in InfoVis?</a>". I think you might be interested ;-)
>	
>	Best,
>	Enrico.

aresnick says…
>	<p>You say, "The current view of course is that visualization systems should be designed in a way that is useful to domain experts with little to no knowledge of visualization. In reality, of course these are not the actual users of visualizations: rather, the tools are run by their developers, in communication with the domain experts."</p>
>	<p> </p>
>	<p>I've no real experience with information visualization, and I was wondering how this meshes with <a href="../../blog/2009/a-better-vis-web-community.html">your recent post</a> about the desire for substance in the infoviz community.  In particular, I didn't realize there already was a community around pairing infoviz experts with domain experts.  Is this within the context of consulting?  I came by these posts while searching for examples of how infoviz experts work _with_ domain experts, thinking that there were few.  I'd be especially interested to hear about examples of domain experts and infoviz experts meeting halfway, where each gets familiar with the others' skillset (maybe by diving into molecular biology/playing with Processing) to mutual benefit.</p>

</aside>

