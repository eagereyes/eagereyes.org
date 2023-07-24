---
title: "The Year of InfoVis Theory"
description: "2010 is The Year of Information Visualization Theory. Here's why."
date: 2010-03-10T08:25:41.000Z
tags: 
outline: false
---

# The Year of InfoVis Theory

<a href="http://eagereyes.org/blog/2010/the-year-of-infovis-theory"><img src="http://eagereyes.org/media/2010/mappings.png" width="537" height="178" alt="Mappings" /></a>

2010 is <em>The Year of Information Visualization Theory</em>. Here's why.

<h2 id="setting_the_stage">Setting the Stage</h2>

As I <a href="http://eagereyes.org/blog/2010/state-of-infovis-2010">pointed out recently</a>, there hasn't been much theoretical work at InfoVis in the last few years. With InfoVis becoming more mature, we need to develop a clearer understanding of how and why visualization works, how we can explore the design space more effectively, what solutions will likely work for a given data and task, etc.

Two papers at InfoVis 2009 set the stage for my bold prediction, Tamara Munzner's <em><a href="http://www.cs.ubc.ca/labs/imager/tr/2009/NestedModel/">A Nested Model for Visualization Design and Validation</a></em> and Chris Weaver's <em><a href="http://www.cs.ou.edu/~weaver/academic/publications/weaver-2009b.pdf">Conjunctive Visual Forms</a></em> (PDF). Both are excellent papers that provide a lot of food for thought for further work.

<h2 id="embedding_infovis_in_visual_representation">Embedding InfoVis in Visual Representation</h2>

The Year itself starts with a book chapter: <a href="http://www.cs.brown.edu/people/cziemki/">Caroline Ziemkiewicz</a> and I contributed a chapter to <a href="http://www.springer.com/engineering/book/978-3-642-04140-2">a book</a>, titled <em><a href="http://kosara.net/papers/Ziemkiewicz_IIS_2010.pdf">Embedding Information Visualization Within Visual Representation</a></em>. The image at the top of this posting is from that chapter.

The idea was to extend <a href="http://eagereyes.org/references/Tory_InfoVis_2004.html">Tory and Möller's work</a>, which used two criteria (discrete vs. continuous data and given vs. chosen spatial layout) to classify visualization techniques. We introduce a number of criteria that mesh very well with those criteria, but shed additional light on both information visualization's internal structure, as well as how it is embedded in other forms of visual communication.  Among the criteria we use are the type of mapping (surjective or bijective), readability and information loss, and the concept of notationality (developed by Nelson Goodman for visual languages). While it's not a full taxonomy, we did find some interesting connections between seemingly unrelated areas, and even have some ideas for combinations of criteria that are not yet covered.

<h2 id="design_elements">Design Elements</h2>

Another paper Caroline and I just got accepted at <a href="http://www.dis.uniroma1.it/~avi2010/">Advanced Visual Interfaces (AVI)</a> is titled <em>Implied Dynamics in Information Visualization</em>. We conducted a study to gauge the influence of design elements like lines, borders, separation of parts, etc., in simple charts like pie charts, bar charts, and a few others. We found some very interesting effects that suggest that people associate a lot of meaning with these seemingly meaningless "decorations."

In addition, we got some very interesting responses that point towards a perception of dynamism and movement in static scenes, even when looking at very simple graphical objects like charts. These can have an effect on the perception of the data being represented in a chart, and we are currently investigating these further.

<h2 id="infovis_theory_workshop_planned">InfoVis Theory Workshop (Planned)</h2>

Chris Weaver and I are planning to submit a workshop proposal on theory in InfoVis to VisWeek. The major goal is to get together people interested in theory to establish the need for this kind of research, discuss ideas, and develop strategies to get this work accepted more at the main venues. It's still tough to get theory papers accepted when they don't have a clear application, but so we need to figure out how to change the mindset a bit to carve out a viable theory niche.

We're still discussing the format, but it looks like we'll have several sessions with short position papers at the beginning of each to spark discussion. The focus will be on the discussions rather than the presentations, and we hope to end up with a lot of interesting ideas to compile into a whitepaper.

<h2 id="beyond_bertin">Beyond Bertin</h2>

Based on some of the recent work mentioned above, Caroline and I wrote a little article for the <em>Visualization Viewpoints</em> column in <em>Computer Graphics and Applications</em> (CG&amp;A), to appear in the September/October issue. It's titled <em>Beyond Bertin: Seeing the Forest Despite the Trees</em>. If that sounds controversial, it was entirely unintended.

The paper argues for a more holistic view of visualization. Marks are a great basis, but we need to look at the bigger picture: how do we perceive entire visualizations? What part does the structure of the visualization play? How much information is in the marks, and how much is in the structure? Is a visualization really just a collection of marks?

Theresa-Marie Rhyne (the editor for Visualization Viewpoints) has timed that article perfectly with VisWeek. Together with the workshop (if it's accepted), that should make for some interesting discussions.

<h2 id="and_more">And More!</h2>

There is more coming, pending reviews and acceptance in various places. I also happen to know of one very theoretical paper (not involving yours truly) to be published this year in a visualization journal.

What else is there? Do you have work that you consider theory that is about to be published or that was published recently? Let me know below or via the contact form, I'm always looking for more of this kind of work. Also, let me know if you have thoughts on the workshop. We have an idea where we want to go, but it's still in an early stage. Any input from interested participants would be appreciated.


---
## Comments

<a href="http://www.visualisingdata.com" rel="nofollow noopener" target="_blank">Andy Kirk</a> says…
>	Dear Robert
>	
>	Congratulations on your achievements in the field to date - I'm an avid reader of your blog. Just following up your blog post about research in the field to briefly introduce you to some work I've conducted and will be looking to publish over the coming weeks/months.
>	
>	Just to introduce myself. I split my time between being an Information Manager at the University of Leeds, UK and the very busy early days of running my own company 'Visualising Data Ltd.' which I incorporated just over a month ago. 
>	
>	I've developed a particular passion and knowledge about the subject over the past 3/4 years having spent all my career in information management and then more recently through a Masters research degree I undertook to study a particular aspect of the subject I wanted to explore further. This concerned my experiences of the paradox between how people perceive aethetic design of graphs vs. how effectively they read graphs - the classic form vs. function story.
>	
>	I set up a survey-based experiment with 160 participants which involved them subjectively recording the amount they 'liked' 8 different graph renders based on the same values/graph type. These designs varied in render from the most Tutfe-like priniple-based designs through to highly decorated 3D designs.
>	
>	Participants were then faced with 32 questions asking them to read values from a sample of graphs based on the design they most liked, followed by 32 further questions but this time based on the best practice graph design.
>	
>	The results revealed that over 65% of participants selected 3D graphs as their favoured renders. The associated graph reading performance revealed significantly weaker levels of accuracy from participants who undertook questions based on their 'favoured' 3D designs compared to those who prefered the better practice designs. There was a huge amount of additional detail to the experiment that presented very interesting results which I won't go into now. 
>	
>	As I say, I'm trying to find time to write this up - I completed it last July so it is certainly in need of immediate action! I would be really interested to receive any pointers for specific publications or forum that might be suitable for such work? I've narrowed down a selection of journals that seem to be most likely to try and target: Information Design Journal, Parson’s Journal for Information Mapping, Visual Communication Quarterly, International Journal of Information Management and Behaviour & Information Technology. The barriers I may face, however, are that I'm not an academic and so may lack the necessary credentials to break into some of these areas.
>	
>	Best wishes
>	Andy Kirk

Robert Kosara says…
>	That sounds like an interesting study. Depending on how much time you have to work on it now, you could also consider submitting to the [Information Visualization conference](http://vis.computer.org/VisWeek2010/infovis_cfp_papers.html) (due March 31st) or sending a poster there (due July 1st). The latter is a good way to get word out and talk to people to get a feeling for how well the work is received in the community.
>	
>	You don't need particular credentials, but you do need to be careful especially with user studies. There are some pitfalls and common mistakes that people tend to make when they don't have enough experience. So be prepared to get the paper rejected once or twice, and/or get help from somebody in the field.

<a href="http://www.visualisingdata.com" rel="nofollow noopener" target="_blank">Andy Kirk</a> says…
>	Many thanks for the response and advice Robert. As you say the former might be a bit stretching but the poster idea sounds like a good option.
>	Regards

<a href="http://web.me.com/tmrhyne/Theresa-Marie_Rhynes_Viewpoint/Welcome.html" rel="nofollow noopener" target="_blank">Theresa-Marie Rhyne</a> says…
>	Hi Robert:
>	
>	Thanks for the mention of publication of your & Caroline's "Beyond Bertin: Seeing the Forest Despite the Trees" writeup as the Visualization Viewpoints discussion for the Sept/Oct 2010 issue of IEEE Computer Graphics & Applications magazine.
>	
>	Smiles.... Theresa-Marie
>	
>	Theresa-Marie Rhyne
>	Visualization Viewpoints Editor
>	IEEE Computer Graphics & Applications Magazine
>	


