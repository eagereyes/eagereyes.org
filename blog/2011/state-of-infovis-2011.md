---
title: "The State of Information Visualization, 2011"
description: "Theory in visualization! Swivel disappears! Reappears! Disappears again! Stories told using visualization! A lot happened in visualization last year, and 2011 shows no signs of things slowing down. The direction will be somewhat different, though."
date: 2011-01-17 22:02:18
tags: state-of-infovis
featuredImage: https://media.eagereyes.org/media/2011/theory.png
---

<p align="center"><img alt="" src="https://media.eagereyes.org/media/2011/theory.png" width="600" height="200" /></p>

# The State of Information Visualization, 2011

Theory in visualization! Swivel disappears! Reappears! Disappears again! Stories told using visualization! A lot happened in <a href="http://eagereyes.org/blog/2010/state-of-infovis-2010">visualization last year</a>, and 2011 shows no signs of things slowing down. The direction will be somewhat different, though.

## 2010: What Was

I called 2010 <a href="http://eagereyes.org/blog/2010/the-year-of-infovis-theory">the year of InfoVis theory</a>, and I wasn't too far off. There were papers on theory at the Vis and InfoVis conferences, and a workshop on theory in visualization. Of course, I was involved in some of those things myself, but I was hardly the only one there.

Another big theme at VisWeek 2010 was storytelling in visualization. The <a href="http://thevcl.com/storytelling/" target="_blank">day-long workshop on the topic</a> was interesting, and there was a good paper on storytelling formats, but I still feel we're missing something. There must be more to storytelling in visualization than trying to emulate movies or newspaper articles.

Last year also saw the <a href="http://eagereyes.org/criticism/the-rise-and-fall-of-swivel">disappearance of Swivel</a>, its <a href="http://eagereyes.org/criticism/swivel-part-2-solving-a-single-problem">brief reappearance</a>, and finally(?) it's descent into some kind of limbo (you currently end up on some DNS service's landing page). Verifiable.com <a href="http://eagereyes.org/blog/2010/end-of-verifiable-com">also shut down last year</a>, calling into question the viability of visualization-as-a-service websites.

WikiLeaks made a big splash last year (and continues to make headlines) with its release of U.S. diplomatic cables and documents from Afghanistan and Iraq. The relevance of this is two-fold. First, it led to some interesting problems for Tableau Public: when they removed a visualization somebody had done of some statistics about the cables, the outcry showed that Tableau was more of a household name than I had imagined. Journalists and others using Tableau Public and other services are rethinking who they can trust not to yank their work randomly, and I know that Tableau is actually working on some changes to avoid that kind of issue in the future.

But secondly, I'm afraid that WikiLeaks has caused much greater skepticism on the part of governments to open their data. Why add to the potential embarrassment from data that was leaked with data shared voluntarily? Better circle our wagons and not let anything get out.

## 2011: What Will Be

I see a few trends become stronger and more pronounced in 2011. They are not entirely new, but I believe that this year will be when they gain a lot more momentum than they have so far.

In particular, I think we are ready for truly interactive, browser-based visualization. Protovis has now been around for almost two years, and a lot of people are getting interested. <a href="http://eagereyes.org/tutorials/protovis-primer-part-1">My</a> <a href="http://eagereyes.org/tutorials/protovis-primer-part-2">Protovis</a> <a href="http://eagereyes.org/tutorials/protovis-primer-part-3">Primers</a> are consistently among the most popular pages on my website.

But another development will actually be much more important: Internet Explorer 9. What has held back visualization so far is that no version of IE supports SVG or Canvas. Later this year, IE 9 will be released, which not only includes that support, but also has a hardware-supported implementation of Canvas. Practically all other browsers already support Canvas, but some are still behind on the performance part. That is likely to change very soon.

The hope is that IE 9 will be adopted quickly, finally removing the last excuses not to unleash <a href="http://eagereyes.org/blog/2010/html5-and-visualization-on-the-web">the power of HTML5</a> on the web. With a large majority of users finally having capable browsers, it will be possible to build native visualization widgets that seamlessly fit into webpages, just like images.

And with that, I predict that we will see a lot more visualization in journalism. A lot of stories are already about numbers, with language mostly telling readers the conclusions. Simple charts with some interaction can provide a bit more context, and more can be added very easily. I doubt that we'll see a big visual journalism revolution in 2011, mostly because of the lack of accessible and practical tools, but we will see a lot more experimentation. The increasing demand will lead to more journalism-focused services being provided by visualization websites, in particular ones that also provide the analytic capabilities (i.e., not just pretty charts).

There is a lot more untapped potential beyond journalism. Many websites are collecting data right now, about user's eating and exercise habits, their whereabouts, etc. All that data can be visualized, for individuals, groups, or the entire user base. We will see a lot more of these kinds of visualizations that we might not even notice at first: of course they're visualizing the data, why wouldn't they?

## Beyond 2011: What Is to Come

Journalism will continue to move towards more visual means of telling stories. The New York Times has shown the basic model of providing things that are nice to look at and convey information even without interaction, but become richer and even more interesting once people figure out how to interact with them. I see similar things happen in all kinds of reporting. We will need to build the tools to make the transition from simple charts like they are used now to interactive visualizations with more depth. The key here is not just the technology itself, but also the tools for analyzing the data in the first place, and providing a workflow from the source all the way to the finished product.

Meaningful visualizations will also help on another front that I see becoming a real problem: the dumbing-down and trivialization of visual data representation. Infographics of all kinds are floating around the Internet, and people are slowly but surely <a href="http://www.noahbrier.com/archives/2011/01/on_infographics.php" target="_blank">getting sick of them</a>. What is more, a lot of people do not realize the <a href="http://eagereyes.org/blog/2010/the-difference-between-infographics-and-visualization">difference between infographics and visualizations</a>, and instead just consider them all just useless eye candy.

We will need to clarify that distinction, and provide more evidence why visualization is useful. In fact, I think that we need to become a bit more confident and start playing up visualization's unique capabilities a bit more. It's not just another way to analyze data, it's got its own, unique strengths that are very useful in many situations.

The visual nature of our work is also our greatest weakness. We will need to manage that trade-off to show people the power, and to make them look beyond the (sometimes) pretty surface.


_Posted by <a href="/about">Robert Kosara</a> on January 17, 2011_


<aside class="comments">

---
## Comments

<a href="http://www.peepo.com" rel="nofollow noopener" target="_blank">peepo.com</a> says…
>	<a href="http://gaming.mozillalabs.com/">Mozilla Game On</a> may be of interest,<br> and <a href="http://www.peepo.com">peepo.com</a> in particular.<br><br>Peepo hosts a Go game application that provides a visual tint or shade of each players territory as a 2d hue gradient using SVG with lerp. The peepo webapp works in real-time, is fast and responsive and uses websockets, node.js and redis with the open source Fuego Go game engine.

<a href="http://www.peepo.com" rel="nofollow noopener" target="_blank">peepo.com</a> says…
>	site says email has not been sent, hence dupe, please delete

Robert Kosara says…
>	This has been fixed, you should no longer see an error when posting a comment.

Anri says…
>	Although i'm not really a computer whiz or anything, i am a big fan of info-vis as you call it.  (I have just discovered your site!)
>	
>	Wow. How wonderful that there is even a whole field out there focusing on this kind of thing. Of course, graphs and maps have always been around, but I am also happy to read that you pay special attention to not only the depiction of data but a way of letting the data be incorporated THROUGH the visual itself.
>	
>	I used mind maps to study history and even now, 12 years later I am left with a certain impression that is so ingrained that it has influenced my entire world view. 
>	
>	I even believe that solutions to our current global problems really only exist because most people have a hard time being able to visualize a better world, the actual nuts and bolts of what it would take. But hey, that's just me. ;) 
>	
>	I look forward to catching up on your articles, and checking out where things go.
>	
>	thank you.

Jon says…
>	I read this post and http://www.ribbonfarm.com/2011/01/19/boundary-condition-thinking/ within the same 10 minute period, and I can't help thinking they belong together.
>	
>	From my perspective, as someone working in data communications between the parallel universes of science & policy, infovis has tremendous potential. I believe in the depth of education you forecast, but it is absolutely crucial that enough infovis practitioners adhere to best practices in a field I'm tempted to call "statistical ethics". In other words, IF we can present the data AND explain its strengths and weaknesses relative to the questions at hand - ref. the URL above - THEN we have a chance to inform decisions in a positive way.
>	
>	If we continue, as practitioners, to be lazy about understanding the data and the statistics and their meaning, we will - within 2011, probably - follow the popular infographics path to obfuscation, confusion, and mistrust.

<a href="http://marlenacompton.com" rel="nofollow noopener" target="_blank">Marlena</a> says…
>	Whenever I hear the phrase, "people do like their pretty pictures" in reference to visualization, I sigh and think, "there is someone who has never been faced with wading through mounds and mounds and mounds of data."  
>	
>	Although I've seen plenty of graphics that blur the line between utilitarian and aesthetic, I am always on the lookout for problems in software that can only be solved with visualization because the data is just too voluminous and disorganized.  
>	
>	I tolerate banal infographics because I see them as practice for the day when I absolutely must have a visualization to explain data that is simply incomprehensible in any other way.

</aside>

