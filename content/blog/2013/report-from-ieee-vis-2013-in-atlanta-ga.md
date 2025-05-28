# Report from IEEE VIS 2013 in Atlanta, GA

There were parties, papers, and presentations. The keynote involved ramen, the capstone cited Rams. Lies were told, we watched stories unfold, and stacked bars of gold. The first <em>IEEE VIS</em> took place inside a giant alien, and the dinosaurs were particularly memorable.

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

The capstone talk was given by <a href="http://www.win.tue.nl/~vanwijk/">Jarke “Jack” van Wijk</a>. Jarke’s work spans scientific and information visualization, from flow visualization to treemaps (in particular, the squarified treemap and the cushion treemap). He gave a very well-designed talk that was largely based on a tour of his work, but tied together nicely and very well paced. In typical Jarke-style, it was also very funny.

There were many interesting points, and there is no way to list them all. But perhaps the biggest takeaway was his sort of mantra: <em>Think as a User, Act as a User, Be a User</em>. I think that’s a great way to think about any work, but also perhaps the reason Jarke has been so successful in his work. He gets it.

A twist on this, which he presented after discussing some of <a href="http://en.wikipedia.org/wiki/Dieter_Rams">Dieter Rams</a>’ famous ten commandments of good design, was: <em>Think as a Designer, Act as a Designer, Be a Designer</em>. Words to live by.

<p align="center"><img class="aligncenter size-medium wp-image-2707" alt="Ben Shneiderman Winning" src="https://media.eagereyes.org/wp-content/uploads/2013/10/ben-shneiderman-winning.jpg" width="730" height="486" /></p>

## Parties and VisLies

Continuing the tradition of the last few years, there were several parties organized around the conference. There was the Utah Party, the West Coast Party, and there were a few smaller receptions and parties organized by local businesses. Having these satellite events is an important sign of how the community is growing and getting stronger, and of course also of the fact that we're able to have fun.

I'm throwing in VisLies here because it competed with one of the parties, and because it is also part of the fun aspects of the conference. The idea is to present examples of bad visualizations, discuss what makes them bad, and laugh at them. If this sounds mean-spirited, that's not at all what it is. I missed it this year, but I know from previous years that it's always an enjoyable session. It's really too bad that it is not part of the regular program, but rather a meetup, so the organizers have to work hard to get people to know about it. Despite that, they had over 100 people there this year, and I've heard only good things about it. So keep your eyes peeled for it next year!

## The Academic Market

The big topic of virtually every discussion, in every break, was the academic job market. It’s looking good this year in information visualization, visual analytics, and HCI, for a change. There are a number of open positions that were advertised, and I heard some more or less subtle rumors about some more that were either not widely advertised yet, or were about to be announced. Many of these are for tenure-track assistant professors, plus a number of post-docs. But more senior people are usually considered if they choose to apply.

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
