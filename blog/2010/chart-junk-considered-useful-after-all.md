---
title: "Chart Junk Considered Useful After All"
description: "There is almost universal agreement that any extraneous elements in a chart or visualization, elements that do not represent numbers, are detrimental to understanding the data. A paper that was presented at CHI recently described a study to figure out just how bad all this chart junk really was. As it turns out, it's actually rather helpful."
date: 2010-04-22 20:54:34
tags: criticism
featuredImage: https://media.eagereyes.org/media/2010/usefuljunk-teaser.jpg
---

<p align="center"><img src="https://media.eagereyes.org/media/2010/usefuljunk-teaser.jpg" width="560" height="236" alt="Useful Junk Teaser" /></p>

# Chart Junk Considered Useful After All

There is almost universal agreement that any extraneous elements in a chart or visualization, elements that do not represent numbers, are detrimental to understanding the data. A paper that was presented at CHI recently described a study to figure out just how bad all this chart junk really was. As it turns out, it's actually rather helpful.

## Chart Junk

The term <em>chart junk</em> was coined by Edward Tufte, who considers anything in a chart that does not represent data (or is a scale or label) as not just unnecessary, but harmful. A related term is the <em>data-to-ink ratio</em>, which is a term to describe how many visual items (how much "ink") representing data there are in a chart in relation to how much there is overall. The idea is to keep that ratio as high as possible, thereby producing very minimalist-looking charts that focus entirely on the data.

## Holmes, the Anti-Tufte

The authors of <a href="http://hci.usask.ca/publications/view.php?id=173">the paper</a> refer to <a href="http://www.nigelholmes.com/">Nigel Holmes</a>, whom visualization people might remember from his fantastic capstone presentation at InfoVis 2005. They quote Holmes as saying that a data graphic "must engage the reader‘s interest." Holmes' way of doing that is through explanatory embellishments. All the charts they used in the study consequently came from one of his books.

## The Study

Quick show of hands: which chart is better, this one:

<p align="center"><img src="https://media.eagereyes.org/media/2010/usefuljunk-monster.jpg" width="280" height="212" alt="cost monster" /></p>

Or this one:

<p align="center"><img src="https://media.eagereyes.org/media/2010/usefuljunk-costs.jpg" width="280" height="220" alt="cost bars" /></p>

If you subscribe to the Tufte school of thinking, the first chart probably made you cringe. But imagine somebody who just looks at this chart on a newspaper page for a few seconds before reading another article. Which chart is more likely to get its message across?

The study consisted of two possible recall tasks, one five minutes after being shown the charts, and one two to three weeks later. The authors found that in both cases, participants had a significantly higher chance of getting the message of the chart in the case of the highly embellished Holmes-style chart. And while there were no significant differences in recalling the subject, categories, and trend between the two chart types after five minutes, all three were significantly better for Holmes-style charts in the long-term case.

The paper also presents some results from eye tracking, but I find those rather inconclusive due to the somewhat arbitrary dual coding of some areas as data and embellishment (rather than either one or the other). Unsurprisingly, study participants preferred Holmes-type charts as being more attractive, more enjoyable, easier to remember, etc.

While there have been other studies on small design variations, this one really went all out to find some of the most outrageous charts to compare. That makes this work very relevant, because these are the things that we tend to criticize as containing a lot of chart junk.

<p align="center"><img src="https://media.eagereyes.org/media/2010/usefuljunk-examples.jpg" width="560" height="285" alt="examples" /></p>

This study was not about reading and remembering exact numbers; the authors were only concerned with understanding the elements of the chart (what time span, what kind of data, etc.), the trend, and the message. This is a good assumption when dealing with communication-style charts as they are used in newspapers and on most websites, but not for data analysis. That explains why issues like curved or tilted baselines and similar distortions were not such an issue; the overall trend would still be visible even if the values could not be very precisely identified.

But for the purpose of communicating data, obviously the main concerns are getting the point across and making people remember it over a longer time period. Both were clearly done better by the more graphical charts.

## Conclusions

This is great work, and the paper deserves the Best Paper Award it received. It's this kind of work that questions basic assumptions and helps us push the field forward.

Does this mean we need to abandon the idea of minimalist junk-less visualizations? Certainly not for analysis tasks, but we do need to rethink how we go about presentation of information.

Also note that this has nothing to do with the kind of work I criticized in the <a href="/criticism/the-visualization-cargo-cult">Cargo Cult article</a>: even the most outrageous of these examples clearly represent data that can be read (if not very precisely).

But this clearly calls into question the role of "pure" visualization in communicating issues, and may require a rethinking of how this particular goal can be achieved more effectively.

<hr>

Scott Bateman, Regan L. Mandryk, Carl Gutwin, Aaron Genest, David McDine, Christopher Brooks, <a href="http://hci.usask.ca/publications/view.php?id=173">Useful Junk? The Effects of Visual Embellishment on Comprehension and Memorability of Charts</a>. <em>ACM Conference on Human Factors in Computing Systems</em> (CHI), 2010.


<PostedBy />


<aside class="comments">

---
## Comments

<a href="http://carlosscheidegger.wordpress.com" rel="nofollow noopener" target="_blank">Carlos Scheidegger</a> says…
>	I guess the obvious follow-up work is to study the amount of misleading that chart junk can cause. That is, if chart junk is increasing memorability, then are people taking the graphical  message and ignoring the data? I expect so. And then, chart junk should really be seen as a commentary on the data, and all that this entails.
>	
>	In this vein, an interpretation of this paper could be "chart junk considered malicious". That is, it not only obscures the data, but it directly misleads the reader. He thinks he learned about the data, but retained the information about the graphics. Trouble is, the graphics were created by the artist, and not by whoever collected the data...

<a href="http://i-ocean.blogspot.com/" rel="nofollow noopener" target="_blank">derek</a> says…
>	Your test of the monster versus the graph says that the former "gets the message across".  But all sorts of things get the message across without being information, or while being inaccurate information. 
>	
>	I ask you to imagine now a cartoon monster that had the same caption, but no information in the teeth at all, and I put it to you that that monster would also please the readers of the newspaper more than the bar graph would, and would get the message across. The paradox can only be solved by assuming that actual information does not matter at all-- all that matters is that people find the picture engaging. 

<a href="http://jeromecukier.net" rel="nofollow noopener" target="_blank">Jerome Cukier</a> says…
>	Thanks for the post and the link to the paper. you know I'm all in favour of controlled chart junk. I feel that Tufte rules apply more to people who create charts to explain stuff with data (analysts), than to those who use them to support a point (journalists, advocates).
>	I wouldn't want the monster on an SAP screen, for instance. well, I kind of would, but I reckon it wouldn't be efficient. 
>	My concern, which the paper seems to address, is that people may remember the chart more than the message of the chart, like those TV ads you know by heart, but couldn't tell what products they are for
>	

Robert Kosara says…
>	Well the idea obviously is that the embellishments tell the same story as the data. It would be interesting to do a study to see if people can tell when the data and the graphics around them don't agree. There's also the possibility of distorting the size of the change, though that doesn't seem to have been an issue in these cases; they're actually designed rather well.

Robert Kosara says…
>	I think you're taking this a bit too far. A pure graphic that does not contain any data has less authority than one that does. It's certainly something to look into, in fact I can think of about a dozen studies to clarify some points and ask further questions. In the same vein, you could argue that an article saying "Unemployment rate rising! We're all doomed!" without any numbers would be as good as one that discusses the actual change. All that text is nothing but embellishment, after all.

Robert Kosara says…
>	I don't think that's the case, though. The recall scores for topic, message, and trend were very similar. Of course, it all depends on how much you add, and you clearly can overwhelm the user. The other thing is how much time they had to look at the images: a quick glance in a typical newspaper-reading scenario would not be as effective as being able to study the chart for a few minutes (there was no time limit in the experiment).

Yasmin says…
>	Really interesting. I have a few thoughts. (1) Usually when I think of chart junk these are not the types of things that I have in mind. I usually consider chart junk to be all those miscellaneous lines and marks that are added to graphic and just make it busy. A classic example is the default excel plot that has horizontal lines. These are totally extraneous 99% of the time. I think the examples in this post are really quite a different thing. Technically, you can call them chart junk, but they transcend the term, in my opinion. (2) All of these examples of illustrative charts are really well done. The imagery reinforces the message in the data. Achieving this kind of unity of message between image and data is really, really hard. I don't worry much about people who are actively trying to mislead---because what can you do about that? But what are the consequences of people who try to punch up their data with imagery but ultimately just produce something confusing. Aside from making me cringe and normalizing mediocrity, do these things usually interfere with interpretation? Can we develop guidelines that will allow people to experiment in this realm while also minimizing confusion?

<a href="http://www.zingchart.com" rel="nofollow noopener" target="_blank">Andrew Begin</a> says…
>	I'd argue that "chart junk" is too broad a stroke to be classified as useful or not. We’ve all seen cases where graphics distract – or worse – mislead the reader. On the other hand, Holmes and this paper clearly show that what falls under the current definition of chart junk can actually be useful. 
>	
>	I think a great distinction is mentioned in the paper; <cite>“[Holmes] regularly incorporates strong visual imagery into the fabric of the chart.”</cite> By merging the image with the data, the chart presents a more integrated, whole idea the reader can take away.
>	
>	One top of mind example where chart junk is not combined with – nor supportive of – the data is located in this <a href="http://www.retrevo.com/content/blog/2010/03/social-media-new-addiction%3F" target="_blank">retrevo article</a> about social media. The stock photos/graphics are loosely connected at best, and make it hard to focus on the data. This would be an interesting set of charts study. 
>	
>	It’d be good to have a better name for “useful chart junk” as we explore the benefit of meaningful graphics to help aid recall and comprehension of our visualizations. 
>	
>	Chart bling, anybody?  :)
>	
>	Great post topic, by the way. 

<a href="http://arcball.com" rel="nofollow noopener" target="_blank">Aneesh Karve</a> says…
>	This is reminiscent of the Japanese ATM study mentioned in <em>Emotional Design</em>. The conclusion? Users perform better with prettier ATMs.
>	
>	Unfortunately, the chart junk study focuses on metrics that favor chart junk, such as memorability. For a complete picture, we would need to understand how the accuracy of quantitative judgements varies across both chart types.
>	
>	The lesson for designers, in any case, is to <em>address both the emotional and behavioral dimensions of cognition</em>.
>	<ul>
>	<li>Chartjunk is excessive to the extent that it impedes quantitative judgements</li>
>	<li>Chartjunk is useful to the extent that it is esthetically pleasing, fun, and memorable</li>
>	</ul>
>	
>	Perhaps <a href="http://www.ted.com/talks/daniel_kahneman_the_riddle_of_experience_vs_memory.html">Kahneman's concepts of the remembering (embellishing?) versus experiential (objective?) selves</a> can provide insight into the balance.
>	
>	The study also reminds us that analytical luminaries, like Tufte and Nielsen, are somewhat blind to the emotional dimension of design.

<a href="http://parseerror.com/vis/" rel="nofollow noopener" target="_blank">Ryan Flynn</a> says…
>	I'm a fan of Tufte; he says "show the data". As long as the embellishment does not negatively affect the clear and accurate presentation of the data (which many do) then there's no particular harm.

<a href="http://technicalproblemsolving.blogspot.com" rel="nofollow noopener" target="_blank">Matt</a> says…
>	Interesting article and thanks for posting.  I think how much you embellish depends on your audience.  In Made to Stick,(http://lccn.loc.gov/2006046467) the authors warn against the "curse of knowledge".  The person may know so much about the data and want to communicate it's nuances that they forget their audience and end up with a dry chart. 
>	
>	If your audience is a general audience, then some embellishment is OK provided you don't misrepresent the data.  In a small group that you know is going to delve into the data themselves, then follow Tufte's advice and minimize the non-data ink.  I suppose there is a continuum between the two that makes it difficult.  That's where I think the art in information visualization comes in. Knowing when and how much to embellish.

Anand Mani says…
>	I have to wonder what the effect would be if the 'monster' were used for the cosmetics data and the 'girl' for the political expenditure. To be sure, they are memorable but they also convey meaning...the girl being less manipulative. Honestly, I prefer the creative challenges of making interesting and memorable graphics but in a world where buzzwords, branding, rhetoric and snap judgements rule, this causes me not a little concern.
>	

<a href="http://www.densitydesign.org" rel="nofollow noopener" target="_blank">Paolo Ciuccarelli</a> says…
>	I was really looking forward to this post (and to the incoming comments). This post is about openness and dialog; it's a step (at least this is my hope) in the direction of crossing the boundaries. That is what we need to face the complex issue of exploiting, making really accessible and usable, the huge amount of data and information we have around.
>	I think we (finally) touched here the key point of many discussions that cross and tantalize the (many) disciplines currently trying to exploit the value of data and information. The key point in my opinion is that in most cases - more or less - it's (also) a matter of cognition and communication. If we (could) assume this communicative and cognitive perspective, the bounds are necessarily blurred: it's very difficult - and even not useful - to separate, for example, data analysis from data communication: how much communication do you have in data analysis? Think to dashboards: which is the role of metaphors, rhetoric and communication in these kind of interfaces? I think - to be brief and crude - that all the interfaces that mediate the access to (and eventually the manipulation of) data and information are (have to be) to some extent "communicative".
>	I'm dreaming a (visualization) world where users - with both their two brain sides - and interfaces come first, than we'll have (the right mix of) methodologies and disciplines. It's a call for a real interdisciplinary approach, that will make the difference.
>	This is the line we're trying to walk together with researchers from statistics, semiotics and computer science.
>	
>	I add here also two comments I wrote last year on that. The first one relates to a contest launched by Flowingdata: we took the opportunity to make a quick experiment with our students. We participate with two very different visualizations in terms of "embellishment" (as it seems we should call the non-data components). The first entry "wons" the contest (Luca Masud's one: http://bit.ly/cnG2Q3), the second is here: http://bit.ly/cwkJBW.
>	What is interesting is not the result, but the comments received: most of them make judgments without any consideration on target, context, purpose: the main pillars and the starting points of any (visual) design process.
>	
>	1) Paolo Ciuccarelli February 3, 2009 at 00:11 | http://bit.ly/b33iV1
>	Hi all. Talking again about Nathan’s challenge, the visualization posted by Luca Masud (Nathan’s favorite, or, if you prefer, the Pollock-esque one) was an experimental contribution: we asked to some of our master students to use the challenge as an entry point, to verify some of their early hypothesis, and to get as much feedbacks as possible. Luca is currently working – he just started – on the intersection between consistency of data and visualization potentialities. His work is part of a more general framework that we (visual design) cultivates together with a department of statistics. We both (statistics and designers) believe that approaching complexity entails new communication challenges (i.e. considering and visualizing uncertainty) and asks for new tools. There is definitely no room here for a battle between aesthetic and function, between visual design and statistics. This is the time to consolidate the marriage.
>	
>	The post on our blog:
>	
>	Design + Statistics | March 26th, 2009 by Paolo Ciuccarelli
>	http://www.densitydesign.org/2009/03/26/design-statistics/
>	

Graham Bruce says…
>	The question of "If you subscribe to the Tufte school of thinking, the first chart probably made you cringe." with regard to the monster chart: the monster didn't make me cringe, more the 'minimalist' chart. 
>	
>	I'm of the Tufte school of thought. The 'minimalist' chart made me cringe as it's just really poorly excecuted. The border surrounding the plot area is unnecessary for a start (not really minimalist, is it), and the use of borders instead of colour fill for the bars is just tacky. 
>	
>	This is another example of editorial bias skewing an argument which doesn't really need skewed any further. The monster chart is well executed to fit it's purpose, as an editorial piece. The bar chart is terrible and serves no purpose other then to be improved.

appliedurbanist says…
>	According to the research paper identified at the beginning this post, the study included "twenty participants." (See page 4, Participants and Apparatus.)
>	
>	Can someone explain to me how this is an empirically valid sample size?

<a href="http://grahamlarkin.wordpress.com" rel="nofollow noopener" target="_blank">grahamlarkin</a> says…
>	I'm glad someone mentioned that this comparison is between a cartoon dog and a straw man.

<a href="http://www.anychart.com" rel="nofollow noopener" target="_blank">andreykh</a> says…
>	Everything depends on your goal. If you want/need to attract someone's attention to your chart, "chart junk" is ok. If the chart is designed for the data analysis primarily and especially if it is integrated into an enterprise BI app, just show data.

Ravi Rikhye says…
>	I love the article. As a second-career teacher (now retired), may I remind that people learn differently. Those that are visual learners may well find the graphic representation easier. I'm used to the traditional representation. Aside from the difficulty of rapidly scanning the data when graphics are used, my mind takes off running on the graphics so its a huge distraction. Truth to tell, I don't like charts much either. Just the data is the best.
>	
>	Tufte is a genius. His Death to Powerpoint analysis of the Shuttle O-seal failure is just brilliant.

</aside>

