---
title: "VIS 2015 – Wednesday"
description: "The second full day of VIS 2015 brought lots of papers on applications and design studies, and also a panel on solved problems in visualization. As on the first day, I have some observations and thoughts."
date: 2015-10-28 15:34:28
tags: conference, IEEEVIS
featuredImage: https://media.eagereyes.org/wp-content/uploads/2015/10/vis15-wed-teaser.png
---

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2015/10/vis15-wed-teaser.png" alt="" width="825" height="510" /></p>

# VIS 2015 – Wednesday

The second full day of VIS 2015 brought lots of papers on applications and design studies, and also a panel on solved problems in visualization. As <a href="/blog/2015/vis-2015-tuesday">on the first day</a>, I have some observations and thoughts.

Here are two things I keep noticing and it baffles me that so many people don’t seem to be aware of them. One is that many presenters don’t bother linking to more information. When you give me a link to some sort of landing page, no matter how basic, it’s way easier (and more likely) for me to tweet or write about it. It’s not very interesting to tweet about things that you can’t point people to materials for. In this day and age, it should really be a given that any paper has some sort of page, even if it only has the title, abstract, and link to the PDF on it. Make your stuff findable and accessible (or follow <a href="http://steveharoz.com/blog/2015/tips-for-hiding-your-publications/">Steve Haroz’s advice on how to hide your work</a>).

The other is basic presentation skills. I’m not even talking about good slides or talk structure. I’m talking about <em>The Mumble</em>. Too many people think that just because there’s a microphone somewhere in their vicinity, they can just whisper and mumble and the technology will magically make it easy to hear and understand them. It won’t. You need to project. That means speaking clearly and loudly into the microphone, almost as if it wasn’t there. Only then will it be easy for people to hear and follow. If you mumble and whisper, it’s tiring and hard to follow, and people will just tune out and flip through facebook. Why give a talk if you can’t even get people to pay attention? Just speak up! It’s easy and it's the most effective thing you can do to make people pay attention.

## A Run in the (Light) Rain

Yes, it rained last night. No, it did not rain this morning. Not very much, anyway. There was a light drizzle, but it wasn’t too bad. Only one other runner showed up for <a href="https://www.strava.com/activities/421869919">the run</a>, which was a bit disappointing. I’m hoping that there will be a few more tomorrow (6:30am in the Palmer House lobby).

## Applications

<em>Visual Mementos: Reflecting Memories with Personal Data</em> by Alice Thudt, Dominikus Baur, Samuel Huron, and Sheelagh Carpendale is a tool to look at the data you collect about your trips. This is GPS data in particular (from geotagged images or other sources), which are presented on a series of maps that can be explored and shared. You can <a href="http://v.isits.in">play with the system yourself</a>, and they are still working on extending it.

<a href="http://vdl.sci.utah.edu/publications/2015_infovis_weaver/"><em>Visually Comparing Weather Features in Forecasts</em></a> by P. Samuel Quinan and Miriah Meyer was the best presentation in this session. They looked at the presentation of weather data for decision making when coordinating firefighters in wildfires. There are many different sources of information that all follow different conventions when it comes to color, etc., and even map projections. <a href="http://www.sci.utah.edu/~samquinan/software/WeaVER/">Their system</a> combines all the data based on reasonable combinations of existing conventions and good design choices.

<em>Vials: Visualizing Alternative Splicing of Genes</em> by Hendrik Strobelt, Bilal Alsallakh, Joseph Botros, Brant Peterson, Mark Borowsky, Hanspeter Pfister, and Alexander Lex describes a new approach to doing what the paper title promises. I know too little to write anything intelligent about this, but I want to point out that <a href="http://vials.io/">the Vials tool is available online</a>.

<a href="http://innovis.cpsc.ucalgary.ca/Research/TimeSpan"><em>TimeSpan: Using Visualization to Explore Temporal Multidimensional Data of Stroke Patients</em></a> by Mona Hosseinkhani Loorak, Charles Perin, Noreen Kamal, Michael Hill, and Sheelagh Carpendale is an interesting way of looking at how long it takes for patients to get treatment. They showed data collected for stroke patients and various parameters about them that you could sort by. It’s a fairly simple system really, but seems to provide some pretty useful insights.

## Design Studies and Methodology

The award for best handout goes to <a href="http://fds.design"><em>Sketching designs using the Five Design-Sheet methodology</em></a> by Jonathan C. Roberts, Chris Headleand, and Panagiotis D. Ritsos. They describe a very simple five-step process to get people to brainstorm and explore more on paper when thinking about visualization approaches, before coming up with the final design and then the realization (whether by coding or using a tool). In addition to a clever little postcard they handed out, they also have a pretty nicely designed website and unusual domain name.

As a kind of follow-up from the color panel yesterday, Aritra Dasgupta, Jorge Poco, Yaxing Wei, Robert Cook, Enrico Bertini, and Claudio T. Silva studied the kinds of visualizations used by climate scientists for <em><a href="http://vgc.poly.edu/projects/ClimateVisEvaluation">Bridging Theory with Practice: An Exploratory Study of Visualization Use and Design for Climate Model Comparison</a></em>. They found a number of intersting patterns and reasons why the scientists like particular ways of showing the data, even though they might not seem optimal from a visualization point of view.

## Solved Problems in Visualization

There have been lots of panels on open problems in the past, so it was pretty interesting to see Robert Laramee organize a panel on <em>Solved Problems in Visualization</em> with Thomas Ertl, Chris Johnson, Robert Moorhead, Penny Rheingans, and William Ribarsky as speakers.

It’s a difficult panel to write about because I disagree with many of the things they said. It was also a challenging topic, since it goes entirely against the way academics tend to think (which is to look for the unsolved problems and open questions).

Some of the position statements were interesting to listen to but ultimately not very enlightening. Robert Moorhead picked up <a href="/criticism/definition-of-visualization">my definition of visualization</a> to base his talk on, and had some good critiques (e.g., whether a camera is a visualization device or not, given the amount of processing that goes on in creating the image). Some of the other argued about the semantics of what it means to solve something, or what we should be looking for next.

Penny Rheingans addressed the question most directly by talking about which problems were covered in curricula and textbooks. Those tend to be solved, or at least understood well enough to be taught. She also had [the clearest definition of what <em>solved</em> might even mean](https://twitter.com/alexander_lex/status/659460859077480448).

I couldn’t help but point out that this panel on solved problems was mostly made up of people from the scientific visualization community. I wasn’t even just being facetious, I’m really wondering what that panel would look like with more InfoVis people.

The discussion about whether users and customers should attend VIS was a bit grating. There is an assumption that any real problem is insular and shallow, which is patently false. I think some more real users would help ground the conference and keep people from doing things without any possible practical value, which isn’t exactly uncommon.

On balance, I think the panel did get people to think (and there was clearly interest, the room was packed), even if it didn't provide many clear answers.

## Weber’s Law Revisited and Missed

Unfortunately, I missed a paper I had wanted to see: <a href="http://idl.cs.washington.edu/papers/beyond-webers-law"><em>Beyond Weber’s Law: A Second Look at Ranking Visualizations of Correlation</em></a> by Matthew Kay and Jeffrey Heer. They reanalyzed the data from the <a href="/blog/2014/vis-2014-thursday">Weber’s Law paper at last year’s VIS</a> and came up with a refined model that comes to some different conclusions than the original paper. This is interesting both because it’s important in its own right, and because this is the way real science works. The paper also got a best paper honorable mention for its careful writing and reevaluation, so definitely worth checking out.


_Posted by <a href="/about">Robert Kosara</a> on October 28, 2015_


<aside class="comments">

---
## Comments

<a href="http://theresamarierhyne.com/Theresa-Marie_Rhynes_Viewpoint/Welcome.html" rel="nofollow noopener" target="_blank">Theresa-Marie Rhyne</a> says…
>	Hi Robert:
>	
>	Thanks for covering the 2nd day of VIS 2015.  I am still healing from illness and so appreciate your Blog postings.
>	
>	Some comments on the panel on solved problems.  In 2004, I organized an early panel on unsolved problems in VIS that Robert Laramee was kind enough to note in the abstract for his panel at VIS 2015.  So, here is my viewpoint on some of your notions and I regret that I did not hear the panelists first hand.
>	
>	Robert Laramee's and his panel team are recognizing an important evolution in the field of Visualization that has begun to take place.  This field and even the IEEE VIS conference is over 25 years old now.  The subfield of SciVis, the oldest of the subfields, may perhaps be the first in recognizing this transition into very teachable or solved problems problems in visualization.  Penny Rheingans' listing is a good summary for recognizing this evolution of the field of visualization.  However, Tamara Munzner's recent text book on Visualization Analysis and Design is also a recognition that there are some fundamental principals of visualization that can now be put down as solved problems or as key approaches in a text book that aspiring students of visualization can learn about. Prior to this phase, there were no visualization textbooks and body of solved visualization problems.  Rather, we provided students with selected readings of visualization research papers along with providing a fundamental text in computer graphics or maybe statistics to guide those trying to enter the field of visualization or visual analytics.
>	
>	Also.... I actually do think there will be an increase in users and domain specialists at IEEE VIS in the future because the the rapid emergence of personal visualization.  I think there are likely to be many individuals who may want to develop mobile apps from user viewpoints in regard to personal visualization. 
>	
>	Again, I was not at the panel but I commend  Robert Laramee and his panelists for benchmarking an important aspect of the maturation of the visualization field.  I also am not surprised the SciVis community would sense this transition first as SciVis is the oldest subfield of visualization.

<a href="http://fds.design" rel="nofollow noopener" target="_blank">Jonathan C. Roberts</a> says…
>	Hi Robert,
>	Thanks for your kind words about the "Award for best handout" for our work  Sketching designs using the Five Design-Sheet methodology.

</aside>

