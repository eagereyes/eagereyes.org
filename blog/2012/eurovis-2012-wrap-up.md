---
title: "EuroVis 2012, Last Day and Wrap-Up"
description: "The last day of EuroVis brought back the sunshine we had seen yesterday, but had missed for the first half of the conference. This was a short day, with only one paper session and the keynote. The latter proved to be quite controversial and interesting."
date: 2012-06-08 07:40:26
tags: conference, eurovis
featuredImage: 
---

# EuroVis 2012, Last Day and Wrap-Up

The last day of EuroVis brought back the sunshine we had seen yesterday, but had missed for the first half of the conference. This was a short day, with only one paper session and the keynote. The latter proved to be quite controversial and interesting.

## Papers

<em>A Taxonomy of Visual Cluster Separation Factors</em> by Michael Sedlmair, Andrada Tatu, Tamara Munzner, and Melanie Tory described work to classify clustering algorithms using a variety of different criteria, and to compare manual and automatic clustering. Michael Sedlmair decribed this as a <em>data study</em> rather than a <em>user study</em>, because of the variety of test data sets they had chosen and created. I’m not entirely clear how useful this taxonomy is at this point without having read the paper, but in any case it’s a great idea to study these techniques from a user point of view, and it’s a good basis for future work.

<em>Procedural texture synthesis for zoom-independent visualization of multivariate data</em> by Rostislav Khlebnikov, Bernhard Kainz, Markus Steinberger, Marc Streit, and Dieter Schmalstieg extended Chris Healey’s painterly visualization idea to work well with interaction, in particular pan and zoom. Their procedural texture can be used to show scalar data on a map (or any 2D layout), and works smoothly and efficiently with interaction. They used small user evaluations to pick parameters and performed a study of the overall system. Solid paper.

<em>Tracing Tuples Across Dimensions: A Comparison of Scatterplots and Parallel Coordinate Plots</em> by Xiaole Kuang, Haimo Zhang, Shengdong Zhao, and Michael J. McGuffin was more of a mixed bag. They studied how well parallel coordinates performed in comparison to scatterplots for a particular task, namely looking up the value of a data point on an axis when the point is indicated on another. The problem with that is that this is not a common task, and most systems have mouse-over features to show those values exactly without search. The variation of the scatterplot matrix they studied was also heavily optimized for this particular task, so there is little to be learned here for other, more common tasks. I like the idea of the evaluation framework Shengdong Zhao described, but this particular paper just struck me as too narrow and the results as trivial.

## Best Papers

Part of the closing session was the award for the Best Paper. There were two awards this year, one for regular papers and one for short papers. The full papers also had a second and third place, but since I didn’t write those down, I’m only going to list the first place here:

EuroVis Best Paper: <em>Computing Voronoi Treemaps: Faster, Simpler, and Resolution-independent</em> by Arlind Nocaj and Ulrik Brandes. David Ebert read some glowing reviews, and since <a title="EuroVis 2012, Day 1" href="/blog/2012/eurovis-2012-day-1">they promised to make a library available</a>, that sounds like a really good thing. Perhaps we can even convince them to release source code.

Best Short Paper: <em>Vortex merge graphs in two-dimensional unsteady flow fields</em> by Jens Kasten, Ingrid Hotz, Bernd Noack, and Hans-Christian Hege. I can’t say anything about that one since I didn’t see the presentation or read the paper. But I trust that the committee made the right choice.

## Capstone

For the capstone talk, Torsten Möller asked, <em>What is Visualization?</em> His talk was quite interesting and elaborate, and I think a lot of people disagreed with both the content and the presentation. Torsten likes to argue, though, so disagreements about content are a good thing. The presentation was interesting because he likened the InfoVis-SciVis divide to East and West Germany, and his message was that we don’t need two distinct states, but a <em>Federal Republic of Visualization</em>. He didn’t use those words, but he essentially said, <a href="http://en.wikipedia.org/wiki/Tear_down_this_wall!">tear down this wall!</a>

His many political references apparently made some people uneasy, in particular because there were many Germans and other Europeans in the room that vividly remember the time before the wall fell. I was also a bit skeptical at first, but I think he made a strong point that this is a problem without trivializing some rather unpleasant history.

To describe the absurdity of the current divide, he used the labels <em>FooVis</em> and <em>BarVis</em> when discussing the criteria that are different, which left people guessing for a while which was which. The definition he presented as a unifying one for the entirety of visualization came from Tamara Munzner’s keynote at VIZBI 2011:

>	Computer-based visualization systems provide visual representations of datasets intended to help people carry out some task more effectively.

I agree that that’s a great definition: precise, concise, clear. I also agree that the InfoVis-SciVis distinction is somewhat arbitrary and fuzzy.

However, the distinctions Torsten did make feel unsatisfactory to me. Why would volume visualization, graph drawing, etc. be good distinctions? I think that the criteria Torsten described in his 2004 paper with Melanie Tory are much stronger, since they are more fundamental: given vs. chosen spatial arrangement and discrete vs. continuous data domain. It seems to be more useful to me to extend that kind of thinking to draw boundaries based on these kinds of criteria than replace one arbitrary distinction with a set of others.

Either way, <a href="http://www.cs.sfu.ca/~torsten/Publications/eurovis_120608.pdf">his slides for the talk are available</a> and are worth a look. They are largely self-explanatory even without having seen the talk. There are lots of interesting references in there not just to the visualization literature, but also the science of science.

## Final Thoughts and Next Year

It was a good conference, with good papers, and extremely smoothly run. This year, lunch was also provided at the conference thanks to the corporate sponsors, which was great. Not only did it save time and money, it also increased the time people had to mingle with other researchers. This doesn’t happen nearly as much when everybody goes off to have lunch in different places.

What I did not like was the keynote, because it really seemed out of place. The good parts included the EuroRVVV workshop (which will be held again next year), what ended up being the best paper, and the capstone.

Next year’s conference will be held in Leipzig, Germany. <a href="http://eurovis2013.de/">The website for EuroVis 2013</a> is already up.


<PostedBy />


<aside class="comments">

---
## Comments

<a href="http://www.shengdongzhao.com" rel="nofollow noopener" target="_blank">Shengdong Zhao</a> says…
>	Thanks for blogging the papers about EuroVis 2012. Such feedbacks are great ways to share scientific findings with other researchers and the public. However, as an author, I found your comment on our paper: PCP vs. SCP, misleading. 
>	
>	You mentioned two words: trivial and narrow. I believe they are biased terms that are better replaced with more appropriate ones such as fundamental but early. 
>	
>	Scientific discoveries are carried out one step at a time. Complex theories are built from a few fundamental idea. 
>	
>	How to properly evaluate visualization techniques is an important and long neglected topic by the InfoVis community. 
>	
>	To realize this vision, we need to tackle it one experiment at a time. This paper choose to first examine the static visual affordance of visualization techniques, which is a fundamental first step before other variables can be added. Honestly, we are surprised that few has studied such basic affordance of these popular visualization techniques before.  
>	 
>	The results may seem obvious (or trivial), but it is only from the hindsight! It was never even close to being obvious before the experiments. We ourselves have been debating about the possible results extensively and none of us could predict the results from the experiment. 
>	
>	However, we do agree that this is only an initial step, but an essential one before more complex experiments can be carried out. The fact that these fundamental questions were not answered even after so many years does not flash a healthy sign. While some may prefer to focus "complex" and "broad" issues, it's dangerous to do so without answering the basic and fundamental questions first. As a community, this is an important question to be pondered.

</aside>

