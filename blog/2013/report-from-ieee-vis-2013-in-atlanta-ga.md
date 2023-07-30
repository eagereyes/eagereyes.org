---
title: "Report from IEEE VIS 2013 in Atlanta, GA"
description: "There were parties, papers, and presentations. The keynote involved ramen, the capstone cited Rams. Lies were told, we watched stories unfold, and stacked bars of gold. The first IEEE VIS took place inside a giant alien, and the dinosaurs were particularly memorable."
date: 2013-10-27 20:23:26
tags: VisWeek, conference, IEEEVIS
featuredImage: https://media.eagereyes.org/wp-content/uploads/2013/10/atlanta-sunrise.jpg
---

# Report from IEEE VIS 2013 in Atlanta, GA

There were parties, papers, and presentations. The keynote involved ramen, the capstone cited Rams. Lies were told, we watched stories unfold, and stacked bars of gold. The first <em>IEEE VIS</em> took place inside a giant alien, and the dinosaurs were particularly memorable.

This was technically <a href="http://ieeevis.org/year/2013/info/vis-welcome/welcome">the first IEEE VIS</a>, though the conference has been around for twenty years. It started as <em>IEEE Visualization</em> (or, to its friends, <em>Vis</em>), then turned into <em>VisWeek</em>, and finally was renamed <em>VIS.</em>

There are at least two ways to read the new name. The more obvious one is that <em>VIS</em> is the conference on all sorts of data <em>VIS</em>ualization. The way it was explained last year though, the three letters stand for the three conferences: <em>V</em> stands for <em>VAST</em>, which is itself an acronym for <em>Visual Analytics Science and Technology</em>; <em>I</em> for <em>InfoVis</em> (<em>info</em>rmation <em>vis</em>ualization); and <em>S</em> for <em>SciVis</em>, or <em>sci</em>entific <em>vis</em>ualization.

In addition to those three, there are a number of other tracks that include tutorials, panels, workshops, symposia, an arts program, as well as meetups. It’s pretty overwhelming, especially if you’re a first-time attendee. And there is no way to see everything.

As usual, this is an incomplete account, based on things I saw and liked. There was a lot more that I either missed or ignored, like the entire scientific visualization conference.

<p align="center"><img class="aligncenter size-medium wp-image-2706" alt="Atlanta Sunrise" src="https://media.eagereyes.org/wp-content/uploads/2013/10/atlanta-sunrise-730x486.jpg" width="730" height="486" /></p>

## Opening Session

Conference opening sessions are generally pretty boring, with everybody just sitting through announcements and awards to get to the keynote. It was tightened up this year though, with some of the awards moved to the banquet.

This year, things were interesting because of the government shutdown. About 100 attendees could not make it to the conference, which means that this year’s numbers were around 10% lower than last, and that the organizers were struggling with some financial issues (because of the missing registration fees). The higher percentage of students (whose registration is much cheaper) also didn’t help, even though it is otherwise a good development.

If you’ve been wondering if you will ever see those recordings that IEEE has been doing of every single talk for the last few years, there were some news. The <em>visualization and graphics technical committee</em> (vgtc) is about to launch a new section of <a href="http://vgtc.org">the vgtc website</a> with those videos. They will also link to externally-hosted copies of conference papers, so people will be able to get them without having access to IEEE’s digital library. That’s pretty cool.

The video site is basically ready to go (I’ve seen it), and it was announced as if it was already live. But somewhere, somebody needs to flip a switch to make it actually visible.

## Keynote: Erez Lieberman Aiden

I don’t have a good way of introducing <a href="http://en.wikipedia.org/wiki/Erez_Lieberman_Aiden">Erez Lieberman Aiden</a>, and I won’t even try to list all of his awards and accomplishments. Let’s just say he is an applied mathematician/computer scientist doing work in genomics and other fields.

The talk started a bit slow, but once he hit his stride, it was very good. He walked us through some interesting explanations of how high-throughput genome sequencing works (though I don’t think he ever mentioned that term) and drew some very smart and surprising comparisons with social network analysis.

He is involved in the <a href="http://hic.umassmed.edu/welcome/welcome.php">Hi-C Data Browser</a> project, and has done some very interesting work on clustering genome data and looking at coding vs. non-coding parts of the genome. It’s all very technical, but he had lots of great comparisons to keep people engaged. One of the more memorable parts of his talk included the rather surprising piece of information that a standard pack of ramen noodles contains about 200 meters of noodles when laid end-to-end (and that there are blogs out there where people figure that sort of thing out).

Lieberman-Aiden has also done work with Google on their Google Books project and in particular <a href="https://books.google.com/ngrams">the n-gram viewer</a>. That part of the talk was entertaining, but didn’t have quite the depth the genome part had.

It was very impressive overall, though I wished he’d talked a bit more about his genomics work and skipped the n-grams.

## InfoVis, Perception and Cognition

Perhaps my favorite presentation was Michelle Borkin talking about her paper, <em><a href="http://vcg.seas.harvard.edu/publications/what-makes-visualization-memorable">What Makes a Visualization Memorable?</a></em> The study took the form of a little game where people had to decide quickly if they had seen a visualization before. She had the audience play that game during her talk by clapping, which was surprisingly fun and effective to demo the study.

Borkin and her co-authors found a number of interesting things, like the fact that recognizable objects and colors make a visualization more memorable. Also, figures from scientific papers were second in their ranking, after information graphics. They were more memorable than news media graphics, with graphs from government reports being the least memorable. One example she used included a picture of a dinosaur, which became a bit of a meme that was picked up in other talks: when people wanted to make sure a point would stick, they added a dinosaur to the slide for emphasis.

Another interesting paper was <em><a href="http://graphics.cs.wisc.edu/Papers/2013/GCNF13/">Perception of Average Value in Multiclass Scatterplots</a></em> (<a href="http://graphics.cs.wisc.edu/Vis/ScatterVis13/">materials</a>), presented by Michael Correll. They looked at how well people were able to estimate the averages of different elements in a scatterplot, for example for two different colors. The results are largely as expected, but it’s good to see somebody actually look into this issue, and it provides the basis for a lot of further research.

Speaking of scatterplots, what is the right aspect ratio, given a particular data set? This is an issue that has been explored at some length for line charts, but I haven’t seen any work so far on how to do this for scatterplots. The paper, <em><a href="http://www1.pub.informatik.uni-wuerzburg.de/pub/fink/paper/fhsw-sarsp-InfoVis13.pdf">Selecting the Aspect Ratio of a Scatter Plot Based on Its Delaunay Triangulation (PDF)</a></em> by Martin Fink et al., does just that. The method is iterative and not very fast, but it’s a start.

An interesting factoid he mentioned in the talk is that when people are given points to connect, <a href="http://csjarchive.cogsci.rpi.edu/Proceedings/2009/papers/267/">98% of the lines they draw are Delaunay edges</a>. That’s either really incredible or completely expected, I’m not sure which. Perhaps this explains why Delaunay triangulation is used for everything.

## Panel: <em>How Much Evaluation is Enough?</em>

This panel was organized by <a href="http://cs.swan.ac.uk/~csbob/">Robert Laramee</a> of Swansea University, who is also the chair of <a href="http://eurovis.swansea.ac.uk">some upcoming conference</a>. The speakers were Min Chen, David Ebert, Brian Fisher, and Tamara Munzner.

The discussion largely centered around the question of whether every paper needs an empirical evaluation. Tamara’s <a href="http://www.cs.ubc.ca/labs/imager/tr/2009/NestedModel/">nested model paper</a> came up repeatedly, and it’s a good guide for how to pick the right evaluation method. But the question still remains: do you need a study if you’re proposing a new idea?

It might seem obvious that everything that gets published should have an evaluation. But the value of a new idea is not always clear from the very beginning, and it can change over time (like treemaps, for example). A lukewarm or bad study can also hurt an otherwise good paper. Why run a study when the idea clearly has merit, even if it might not be entirely baked yet? You wouldn’t do that just to please reviewers, would you?

Min Chen also made an interesting point about the difference in terminology and the expected outcome. Calling something an <em>evaluation</em> means that you’re essentially trying to prove to your reviewers that your idea is good enough for publication, whereas an <em>empirical study</em> is a way to learn something new about visualization. This reminded me of the old craft vs. science discussion, with evaluation being about the craft, but empirical studies actually helping advance the science.

The panel spurred some good discussion, and this is a topic that is of obvious value on many different levels. There is the practical question of how work should be reviewed (and how nasty reviewers can be), the issue of identity for the field in whether it sees itself as needing studies for everything, and the deeper questions about how we create new, lasting knowledge in visualization by either throwing out many more disconnected techniques or performing more empirical work to build better foundations. There are pros and cons for each, and there is no single answer.

Independently of the panel, Steve Haroz put together <a href="http://steveharoz.com/blog/?p=249">an interesting little analysis of this year’s InfoVis papers</a>. According to him, less than a quarter of InfoVis papers included an empirical evaluation. He also has some thoughts on why that number is so low, but I’m not sure what the right number should be. One out of three? 50%? More than that?

## Storytelling

This session was of course of interest to me, though I’m not sure all papers really did address storytelling.

Jessica Hullman clearly did with her paper, <a href="http://www-personal.umich.edu/~jhullman/story_sequence_infovis_20130825_submit.pdf"><em>A Deeper Understanding of Sequence in Narrative Visualization</em></a>. She and her co-authors looked at different kinds of transitions between the steps in number visualization stories, like they are common in online news graphics. They identified a few different strategies, like the <em>metric walk</em>, and did a study based on the cognitive cost of different transitions. Good work.

The <em><a href="http://research.microsoft.com/en-us/um/redmond/groups/cue/sketchinsight/">SketchStory</a></em> system by Bongshin Lee and colleagues from Microsoft Research showed some very cool and innovative interaction, but I'm not sure I see the storytelling part. It allows the user to quickly create infographic-style charts based on sketches that are scaled or otherwise turned into graphs. Sure, it can be used to build up little stories, but I'm not sure I see that as an inherent part of the system. It's a cool idea though, and another stab into the design space of how to more effectively and easily create visualizations.

Depicting values in ways people can actually understand is a big problem. Visualization is good at showing you relative magnitudes, but you have to study the numbers and hope that you can actually put them into some sort of context; often, you can’t. <a href="http://hal.inria.fr/hal-00851733/en"><em>Using Concrete Scales: A Practical Framework for Effective Visual Depiction of Complex Measures</em></a> by Chevalier et al. is an attempt at classifying different ways of making values comprehensible. There are a number of ways this is done in information graphics, usually by basing the value on some real object that gets multiplied and then compared to some other object: sugar cubes for the amount of sugar in a can of soda, bars of gold next to the Status of Liberty, etc. The authors have collected <a href="http://multiviz.gforge.inria.fr/concretescale/">a large corpus of examples and made it available online</a> (as of this writing, the table no longer loads in my browser, but there’s a link to a Google Spreadsheet with the data at the top of the page).

This is useful work, and I hope that visualization can pick up some ideas from it. What I missed, however, is where the limits are. One prominent example shows all the water in the ocean as a ball of water on top of Europe. I have not the slightest idea how much that is. Neither can I relate to dollar bills stacked to a certain height in New York City’s Central Park or gold bars around the Statue of Liberty. These things are way too far outside my scope of experience to make any use of. It would be very useful to have criteria for when these things break down. The question is a good one, though, and the study is great to have in the visualization literature.

While I’m mostly discussing papers here that I liked, here’s one that really bugged me. <em><a href="http://research.microsoft.com/en-us/um/people/ycwu/projects/infovis13.html">StoryFlow</a></em> is based on <a href="http://xkcd.com/657/">an idea from an xkcd comic</a>, which depicts the characters in <em>The Lord of the Rings</em>, <em>Star Wars</em>, and a few other movies. The basic technique is kind of nice, but it’s also very limited. This isn’t even the first paper on this topic, but one that improves some aspects of earlier automated layout tools and makes them more efficient.

As much as I enjoy xkcd, this is very much a toy problem (and also a bit like a very long explanation for a joke). The technique is neat, but it’s also extremely limited in its scope and possible applications. Do we really want to spend resources on refining this further? There are much bigger fish to fry.

The final paper in that session was on what the authors call <em>visual sedimentation</em>. This is different from Fernanda Viégas’ groundbreaking work from 2004, though not entirely unrelated. The idea is to show how values accumulate over time. The new items are poured into the chart as individual objects and then become part of the bar, etc., after a short time. This sounds distracting, and it is, but when the point is to show the rate of change or alert people to data being added, it’s quite useful. The authors have created a large range of demos based on D3 (<a href="https://github.com/INRIA/VisualSedimentation">source available</a>) and have put together a <a href="http://www.visualsedimentation.org">neat little website</a> for the project. They even had the technique used in some sort of <em>American Idol</em>-type show on French television.

## Systems and Sets

One of the highlights of the conference, and an honorable mention for the Best Paper award, was the paper on <em><a href="http://nanocubes.net">nanocubes</a></em> by Lauro Lins et al. They are an interesting take on data cubes, making it possible to compute aggregations very quickly without requiring enormous amounts of storage. They have some demos available that show billions of data points in a sort of heat map that you can zoom into interactively in your browser (requires WebGL, though).

## Capstone

The capstone talk was given by <a href="http://www.win.tue.nl/~vanwijk/">Jarke “Jack” van Wijk</a>. Jarke’s work spans scientific and information visualization, from flow visualization to treemaps (in particular, the squarified treemap and the cushion treemap). He gave a very well-designed talk that was largely based on a tour of his work, but tied together nicely and very well paced. In typical Jarke-style, it was also very funny.

There were many interesting points, and there is no way to list them all. But perhaps the biggest takeaway was his sort of mantra: <em>Think as a User, Act as a User, Be a User</em>. I think that’s a great way to think about any work, but also perhaps the reason Jarke has been so successful in his work. He gets it.

A twist on this, which he presented after discussing some of <a href="http://en.wikipedia.org/wiki/Dieter_Rams">Dieter Rams</a>’ famous ten commandments of good design, was: <em>Think as a Designer, Act as a Designer, Be a Designer</em>. Words to live by.

<p align="center"><img class="aligncenter size-medium wp-image-2707" alt="Ben Shneiderman Winning" src="https://media.eagereyes.org/wp-content/uploads/2013/10/ben-shneiderman-winning.jpg" width="730" height="486" /></p>

## Parties and VisLies

Continuing the tradition of the last few years, there were several parties organized around the conference. There was the Utah Party, the West Coast Party, and there were a few smaller receptions and parties organized by local businesses. Having these satellite events is an important sign of how the community is growing and getting stronger, and of course also of the fact that we're able to have fun.

I'm throwing in VisLies here because it competed with one of the parties, and because it is also part of the fun aspects of the conference. The idea is to present examples of bad visualizations, discuss what makes them bad, and laugh at them. If this sounds mean-spirited, that's not at all what it is. I missed it this year, but I know from previous years that it's always an enjoyable session. It's really too bad that it is not part of the regular program, but rather a meetup, so the organizers have to work hard to get people to know about it. Despite that, they had over 100 people there this year, and I've heard only good things about it. So keep your eyes peeled for it next year!

## The Academic Market

The big topic of virtually every discussion, in every break, was the academic job market. It’s looking good this year in information visualization, visual analytics, and HCI, for a change. There are a number of open positions that were advertised, and I heard some more or less subtle rumors about some more that were either not widely advertised yet, or were about to be announced. Many of these are for tenure-track assistant professors, plus a number of post-docs. But more senior people are usually considered if they choose to apply.

On the other end, I heard of at least three very senior people in the field who are going to retire over the next year or so. That’s also a good thing, because it opens up some very interesting full-professor jobs. Also, it’s a sign of a field growing up: visualization has been around for long enough now that people are actually retiring. This is not the first year this is happening, but it hasn’t been a very common occurrence until now.

In the opening session, Greg Nielson (one of the co-founders of the Vis conference and a pioneer in the field) asked who had been at the first Vis conference in 1990. Only a few hands went up. I wasn’t able to count, but I would guess fewer than 10. After some thought, I think that’s a good thing. It means that the field is able to evolve because new people can participate. If the same people stick around forever, nothing is going to change.

## Arts Program

This year saw a reinvigorated arts program, run by Angus Forbes and Lauren Thorson. In addition to the exhibit space (that was not located very well), there was also a session with paper presentations on artistic uses of visualization and artists doing other related things. I have not yet read the papers (and I had to miss the session), but one that I liked from the preview was the <em><a href="http://www.parallelcoordinates.de">Parallel Coordinates Art project</a></em>, which creates some very neat-looking images. You can <a href="www.parallelcoordinates.de/pc-art.html">explore it yourself in your browser</a> if it can do WebGL (i.e., if it’s Chrome).

<p align="center"><img class="aligncenter size-medium wp-image-2708" alt="Marriott Marquis Atlanta" src="https://media.eagereyes.org/wp-content/uploads/2013/10/marriott-marquis-atlanta.jpg" width="730" height="363" /></p>

## Venue

I generally find conference hotels disorienting and depressing because of their lack of natural light, horrendous lighting in general, and the fact that they all look the same. The Marriott Marquis Atlanta was different in many respects, thankfully. The main ballroom that was used for InfoVis and SciVis sessions was quite nice, though VAST was off to the side in a nondescript meeting room that didn’t look different from millions of others.

The main gathering point for breaks, etc., in front of the ballroom was great, and the nearby bar and Starbucks provided the necessary infrastructure for many meetings. The 10th floor space for the Sunday night reception was also nice and unusual, and helped make up for the limited supply of food. Overall, this was easily the best VIS/VisWeek venue in a number of years, though the bar is, sadly, kind of low.

With some imagination, the hotel was actually a bit scary. The elevators zooming up and down its spine, the bridges sticking out from the elevator banks like ribs, the sloping at the bottom that made you feel like you were inside an enormous alien’s thorax. It all made for a very odd experience (but perhaps it wasn't just me reading too much Stephen King lately). It made for some interesting pictures though, too bad I didn't bring my serious camera.

## VIS 2014: Paris

Well, that’s it for my very incomplete account of VIS 2013. The final big piece of information is of course next year’s VIS conference. It will take place outside the U.S. for the first time, in Paris, France, November 9–14, 2014, with Jean-Daniel Fekete as the general chair. The <a href="http://ieeevis.org">new website</a> is already up.

Also, the following years were announced, for the first time as far as I know. VIS 2015 will be in Chicago, 2016 in Washington, D.C., and 2017 in Santa Fe, N.M.

<p align="center"><img class="aligncenter size-medium wp-image-2709" alt="Altanta Sunset" src="https://media.eagereyes.org/wp-content/uploads/2013/10/altanta-sunset.jpg" width="730" height="486" /></p>


_Posted by <a href="/about">Robert Kosara</a> on October 27, 2013_


<aside class="comments">

---
## Comments

<a href="http://theresamarierhyne.com/Theresa-Marie_Rhynes_Viewpoint/Welcome.html" rel="nofollow noopener" target="_blank">Theresa-Marie Rhyne</a> says…
>	Hi Robert:
>	
>	Just wanted to clarify and enhance some comments you made under the "Academic Market" section of your report on being a senior member of the visualization community.  
>	
>	IEEE Vis 2013 also included a meeting of the Visualization Pioneers Group (VPG) on Monday evening.  To join the VPG, one must have contributed to the field of visualization for over 20 years.  20 years of contribution to visualization does not mean "retirement" age. More information about the VPG can be found at:
>	(http://ieeevis.org/year/2013/info/overview-amp-topics/visualization-pioneers-group-vpg)
>	
>	As for your retirement from academia, some of the discussion you over heard, perhaps after the Keynote session on Tuesday at Vis 2013, may have resulted from remarks that Professor Emeritus Gregory M. Nielson made upon receiving the 2013 Visualization Career Award from the IEEE Computer Society Technical Committee on Visualization and Graphics (IEEE VGTC).  Greg received his award at the start of the Keynote session. Dr. Nielson's contributions to visualization include his seminal research in geometry/topology-based modeling algorithms for visualization, cofounding the Visualization Conference and cofounding  IEEE Computer Society’s IEEE Transactions on Visualization and Computer Graphics (TVCG) journal. In his remarks, Greg asked how many people had attended the first IEEE Visualization Conference in 1990.  He then reflected on how the field of Visualization had matured since the founding of the IEEE Visualization Conference.  Greg also noted that at this time in his life, he felt he was in a terrific position as an emeritus professor. Given a well earned pension, he could be selective about the visualization research, teaching and mentoring he wanted to conduct. It sure was a terrific advertisement for becoming emeritus as well as continuing to enjoy contributing to the field of visualization.  No doubt, many senior members of the Visualization community might consider joining Greg with the type of endorsement.  These people do not see themselves as out to pasture at all but as starting a new phase in their lives, perhaps continuing to contribute to visualization, with a fresh sense of wonder. 
>	
>	Your Blog entry represents this event very incorrectly:  "In the opening session, somebody asked who had been at the first Vis conference in 1990. Only a few hands went up. I wasn’t able to count, but I would guess fewer than 10. After some thought, I think that’s a good thing. It means that the field is able to evolve because new people can participate. If the same people stick around forever, nothing is going to change." -- Robert Kosara
>	
>	That somebody you refer to is indeed Greg Nielson. Without his and others contributions in 1990, you and many others would not have an IEEE Vis event to report about.  As Greg's contributions would now be called in the SciVis domain and you have made contributions to the Info Vis and Visual Analytics domain, my guess is the Greg is just "somebody" to you.  I assure you that Dr. Nielson is a far more significant contributor to visualization than your remarks note and that you stand on his shoulders although you might not be aware of it.
>	
>	Additionally, as one of the small number of people who held up their hand when Dr. Nielson asked who had attended the first IEEE Visualization Conference in 1990, let me also note that people do not stay static in their thinking. Over time, people mature, change and evolve as teachers, researchers, investigators, and administrators. People do not just  "stick around forever" with no changes.  You yourself have done so. You moved from goals and horizons as a academic professor to now being an active contributor to Tableau.
>	
>	Dr Nielson's remarks indicated that there is a bright future in actively contributing to visualization as an Emeritus Professor.  He is continuing to show how to handle "uncharted territory" in our field of visualization. It really is terrific that he received the 2013 Visualization Career Award.
>	
>	Smiles,   Theresa-Marie
>	
>	Theresa-Marie Rhyne
>	Visualization Consultant
>	3418 Balfour East
>	Durham, North Carolina 27713

<a href="http://eagereyes.org/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	Theresa-Marie,
>	
>	I was not talking about Greg Nielson or the vis pioneers when I was talking about people retiring. I just threw those things together because they both show the immense change in the field. I've seen fields where the same people have been running the main conference for 40 years, and believe me, you don't want that. I'm well aware of Greg Nielson's and many others' contributions to the field (I know my way around SciVis!), and Greg's role in starting the conference in the first place!
>	
>	The retirement stories are all second-hand, so I don't want to talk about names. But they come from people I trust, so I don't have a doubt that they are true.

<a href="http://theresamarierhyne.com/Theresa-Marie_Rhynes_Viewpoint/Welcome.html" rel="nofollow noopener" target="_blank">Theresa-Marie Rhyne</a> says…
>	Hi Robert:
>	
>	Thanks for your comments.  I have no doubt that you correctly heard retirement stories.
>	
>	However, out of tremendous respect for Greg Nielson, I cannot let you say in your Blog say -&gt; “In the opening session, somebody asked who had been at the first Vis conference in 1990. " -&gt; without making an effort to set this record straight.  That someone was the IEEE 2013 Visualization Career Award Recipient who also co-founded the IEEE Visualization Conference. He is definitely a well regarded "someone" in visualization.
>	
>	Your Blog is highly regarded and I have no doubt that many people will read and appropriately trust your comments. 
>	
>	Smiles.... Theresa-Marie

<a href="http://eagereyes.org/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	Okay, I've changed it to use his name instead. I wasn't sure who had asked, so I kept it vague.

<a href="http://theresamarierhyne.com/Theresa-Marie_Rhynes_Viewpoint/Welcome.html" rel="nofollow noopener" target="_blank">Theresa-Marie Rhyne</a> says…
>	Hi Robert:
>	
>	Thanks for your correction.
>	
>	Now... that I understand your assertion.  I think you are talking about someone holding an administrative decision making position in a conference for a long period of time. Your viewpoint is that there needs to be change in these administrative positions.
>	
>	When I first read your comments, it sounded like you were welcoming putting us long time contributors out to pasture even saying "and please do not come back".
>	
>	As said earlier,  I think that can be viewed as harsh judgement for a long time contributor can provide insights that are helpful as well as continue to grow and evolve.  
>	
>	Appreciate the clarification.
>	
>	Smiles... Theresa-Mare

<a href="http://petra.isenberg.cc" rel="nofollow noopener" target="_blank">Petra Isenberg</a> says…
>	A comment on the section on evaluation. Actually - there are many different evaluation goals and, thus, types of evaluation. User performance evaluation is what people seem to mean most of the time when they say "evaluation" - but there are many other types. We presented a study this year (in SciVis so you may have missed it) where we showed that in SciVis 98% of papers included at least one type of evaluation (sometimes more than one) and we also looked at InfoVis 2012 and 2011 and found that 94% of papers in that year contained an evaluation in the broader sense [1,2]. So what that says it that there are many more ways to convince a reader that your technique is good than with user performance metrics and almost every paper does some evaluation (most of the ones without evaluation were theoretical papers like Sedlmair et al.'s Design Study Methodology paper). One of the things I most agreed with on that panel was Tamara's comment that when a reviewer asks for a user performance evaluation - it typically means that your technique isn't already convincing, you have not provided good alternative forms of evaluation - and not that the reviewer is following some unofficial rule of asking for an eval to be added that would be unnecessary. What bugged me in the panel is that it was suggested that it is in fact very common that reviewers ask for these evaluations to be added - and at least from my experience over the years serving on the PC I cannot confirm this to be true. I have only seen it once where the evaluation in the paper was so poorly done that it had to be removed or redone and both were deemed acceptable (it was redone properly).
>	
>	[1] Data from this Paper here https://docs.google.com/spreadsheet/ccc?key=0AmuGsrlucvWQdDZSZmVpSDd4YkhJUGNjdXBsNS1XQWc&amp;usp=drive_web#gid=1
>	[2] Paper summarizing the results here: http://hal.inria.fr/hal-00846775/PDF/Isenberg_2013_SRP.pdf

<a href="http://research.microsoft.com/en-us/um/people/ycwu/" rel="nofollow noopener" target="_blank">Yingcai Wu</a> says…
>	Hi Robert:
>	I am writing to add my two cents regarding your comments on our work, StoryFlow. 
>	
>	1.	“This isn’t even the first paper on this topic, but one that improves some aspects of earlier automated layout tools and makes them more efficient.” 
>	We believe our work is significantly different from previous work. The major contribution of our work is an efficient hybrid optimization strategy. The novelty of the strategy is two-fold. First, the optimization strategy splits the optimization into separate sub-problems and optimizes the important metrics first. Second, we judiciously combines discrete and continuous optimization to generate an aesthetically pleasing and legible storyline visualization efficiently. The discrete optimization aims to minimize the number of line crossings and wiggles, while the continuous optimization focuses on minimizing the wiggle distance and white space. Compared with the state-of-the-art method (Tanahashi and Ma), it supports real-time user interactions, hierarchical relationships among entities, and rendering of a large number of entity lines. Our method can generate a storyline with hundreds of entities and hundreds of time frames in less than 1 second. The state-of-the-art method (Tanahashi and Ma) often takes hours to generate such a storyline. 
>	
>	2.	“As much as I enjoy xkcd, this is very much a toy problem (and also a bit like a very long explanation for a joke) .The technique is neat, but it’s also extremely limited in its scope and possible applications.”
>	This is not a toy problem. Although the storyline visualization was originally invented by XKCD for showing the interactions among characters, it has been proved to be useful for many applications where dynamic graphs are involved. For example, it can track community evolution in dynamic social networks and trace generational relationships in genealogical data. Actually, after my talk, I was approached immediately by two audience (one from academia and one from a big company) who were very interested in our techniques and wanted to try our technique to visualize their biological data and business data, respectively. Here I list some work that use the storyline visualization for data exploration and analysis:
>	•	Sequence Bundles. http://science-practice.com/projects/sequence-bundles/
>	•	N. W. Kim, S. K. Card, and J. Heer. Tracing genealogical data with timenets. In Proceedings of the International Conference on Advanced Visual Interfaces, pages 241–248, 2010.
>	•	K. Reda, C. Tantipathananandh, A. Johnson, J. Leigh, and T. Berger-Wolf. Visualizing the evolution of community structures in dynamic social networks. Comp. Graphics Forum, 30(3):1061–1070, 2011.
>	
>	In our work, in addition to a few basic experiments for comparison, we also presented an interesting case study of using StoryFlow to explore large-scale Twitter data (with 90 million tweets and 900 opinion leaders) about the 2012 US presidential election (see the case study in our project page: **********http://research.microsoft.com/en-us/um/people/ycwu/projects/infovis13.html **********). The study was conducted with two sociologists (one is from City University of Hong Kong, and the other is from Nanyang Technological University) in media and communication studies to demonstrate the usefulness of our technique. Specifically, we used StoryFlow to help the domain experts visually trace the evolution of the temporal relationships between opinion leaders based on their attention to different topics on social media. We have also reported the interesting insights that we have discovered using StoryFlow visualization in Section 7.2 of the paper. 
>	
>	We have also conducted a semi-structured interview with three domain experts, one film professor in Tsinghua University in China, and two sociologists in media and communication studies from City University of Hong Kong and Nanyang Technological University in Singapore. They provided very positive and encouraging feedback on the utility and usefulness of the technique. The feedback is summarized in Section 7.3. One of the sociologists said “StoryFlow would be particularly useful for data-driven journalism because it not only provides a clear visual summary of events but also shows informative context for investigative analysis”. The other sociologist also very liked our work and he commented “It is stunning and engaging. It definitely outperforms the static infographics that I have seen before”. The film professor suggested a variety of interesting use scenarios in the film industry: Film directors can use StoryFlow to understand the story evolution in a movie to make a proper plan for the film shooting; Script adapters can use Storyflow to review a script quickly to decide whether to add or remove certain characters or scenes; Actors can use StoryFlow to better trace their related scenes and see immediately where and who they will interact with, so that they can better prepare for their performance. 
>	
>	3.	“Do we really want to spend resources on refining this further? There are much bigger fish to fry.”
>	I respectfully disagree with you. As I pointed out early, storyline visualization is useful and has many applications. Our work is a big step forward in this research direction.
>	I believe research on visualization technologies that are useful, visible, and highly appreciated by people from other fields such as graph visualization is also “bigger fishes”. Without the core technologies, it would be hard for other people to identify the field and distinguish the field. I believe storyline visualization is one of the visualization techniques we should further study. 
>	
>	Best Regards,
>	Yingcai Wu, 
>	Researcher
>	Internet Graphics Group
>	Microsoft Research Asia
>	No. 5 Dan Ling Street, Handian District, Beijing, P.R. China

<a href="http://www.win.tue.nl/vanwijk" rel="nofollow noopener" target="_blank">Jack van Wijk</a> says…
>	Many thanks for the friendly words about my capstone! For those who missed it, the video is online now: http://vimeo.com/80334651

<a href="http://theresamarierhyne.com/Theresa-Marie_Rhynes_Viewpoint/Welcome.html" rel="nofollow noopener" target="_blank">Theresa-Marie Rhyne</a> says…
>	Jack,  
>	
>	Thank You for posting this.
>	
>	I missed your real time delivery and enjoyed viewing / listening to your IEEE VIS 2013 Capstone online.
>	
>	Smiles... Theresa-Marie

</aside>

