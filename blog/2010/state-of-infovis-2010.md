---
title: "The State of Information Visualization"
description: "Information Visualization (InfoVis) is an exciting field to watch grow and expand into ever new areas. Last year brought some interesting developments that point towards changes in how we do and see visualization. What does 2010 hold in store? Here is a look back and some ideas where we're heading."
date: 2010-01-06 08:25:53
tags: state-of-infovis
featuredImage: https://media.eagereyes.org/media/2010/minard.jpg
---

<p><img alt="Minard's &quot;Napoleon's March to Moscow&quot;, Protovis demo" src="https://media.eagereyes.org/media/2010/minard.jpg" width="560" height="173" /></p>

# The State of Information Visualization

Information Visualization (InfoVis) is an exciting field to watch grow and expand into ever new areas. Last year brought some interesting developments that point towards changes in how we do and see visualization. What does 2010 hold in store? Here is a look back and some ideas where we're heading.

## 2009: What Was

Until May 2009, the biggest issue in visualization was access to good data. There were a few standard data sets, and when working with companies we would sometimes get some of their data (which we were not able to share, of course); but comparing visualizations without interesting test data was difficult. <a href="http://www.data.gov/">Data.gov</a> (and similar websites in other countries) changed all of that. Suddenly, there is more data than we really know what to do with, and more is coming. There are some issues with inflated numbers of data sets (e.g., toxic release data has separate data sets for each state and year), but it's still a fantastic service and points into the right direction. The recent release of <a href="http://www.metoffice.gov.uk/climatechange/science/monitoring/subsets.html">climate data</a> (even if for the wrong reasons) also provided us with some interesting material to dig into. In my opinion, the availability of large amounts of new data was the biggest thing to happen for InfoVis in 2009.

With great data comes great responsibility. We need to figure out ways to do what <em>InfoVis for the Masses</em> has promised for a few years now: easy access to all the relevant data for everybody. Now that we finally have the data, we need to build more and better visualizations. A key event in that direction was the release of <a href="http://protovis.org/">Protovis</a>. It is billed as an easy way to build visualizations, and it is very powerful; but the key is that it runs directly in the browser, without the need for plugins. The only issue at the moment is that Internet Explorer does not support the canvas element that Protovis needs, but there are libraries that emulate that using the equivalent IE mechanism. Once this is solved, Protovis will be the way to go for web-based visualization of open data.

What makes Protovis (and also Tableau Public, see below) more interesting than <a href="http://many-eyes.com/">Many Eyes</a> and other visualization-as-a-service websites so far is the fact that you can create new visualizations for your data, and that you can combine and link several views. The up-front effort to build a visualization is certainly higher, but it also provides a lot more possibilities.

Protovis was presented at InfoVis/VisWeek 2009, and there were also two other papers that will prove to have a lasting effect: Tamara Munzner's <em><a href="http://www.cs.ubc.ca/labs/imager/tr/2009/NestedModel/">A Nested Model for Visualization Design and Validation</a></em> and Chris Weaver's <em><a href="http://www.cs.ou.edu/~weaver/academic/publications/weaver-2009b.pdf">Conjunctive Visual Forms </a><a href="http://www.cs.ou.edu/~weaver/academic/publications/weaver-2009b.pdf"><span style="font-style: normal;">(PDF)</span></a></em>. While very different, the two papers were similar in one respect: they were theory papers. There haven't been any theoretical papers in InfoVis recently, and I hope that this is a sign that this type of paper is becoming more acceptable again. The field certainly needs more of the digestion and deep thinking these two examples showed.

An event that involved yours truly was the release of the <a href="http://eagereyes.org/parallel-sets">Parallel Sets</a> program in early June. The tool is finding quite a few users, and we were able to submit an entry to the <a href="http://www.discoveryexhibition.org/">Discovery Exhibition</a> (and win a prize there). While progress with updates hasn't been quite as fast as hoped, we have a lot more features planned and hope to release an updated version soon. What is more, we hope to inspire more InfoVis researchers to release their programs to get more tools into people's hands.

## 2010: What Will Be

Looking forward, what can we expect from the new year? One product that will have a big impact is <a href="http://public.tableausoftware.com/">Tableau Public</a>. Currently in beta, it will be released in early 2010. It's a fully functioning version of Tableau Desktop, but it can only save its data to Tableau's public server (and there are limits on dataset size and data sources). Unlike Protovis, Tableau Public is server-based, with an embedding mechanism that only requires JavaScript. Like Protovis, Tableau offers the possibility to combine different visualizations into a view, with linking between them. The setup is much easier though, and requires no programming.

I will be writing more about JavaScript-based in-browser visualization soon, because I believe that this is the way to go for anything that is meant to be presented to the general public. JavaScript works everywhere, it's fast and flexible. There are already a number of visualization frameworks with varying levels of sophistication out there, though Protovis and Tableau Public are by far the most interesting. Together with the availability of lots of data, they will enable InfoVis for the Masses to make a big leap forward in 2010, and finally really reach the masses.

Data.gov et al. are a great start, but a lot more is needed. A lot of the data on data.gov is not of much interest to end users right now, and there hasn't been a lot of new material in a while. That will change this year. Obama's <a href="http://www.whitehouse.gov/open/documents/open-government-directive">Open Government Directive</a> has the potential of opening the floodgates on tons of data that is currently only kept secret because nobody is bothering to publish it. The promise of open data has also been so clear and so loud that a lot more action has to follow for people to really believe it. I am convinced that we will finally see the hundreds of thousands of data sets on data.gov that were rumored, and that many of those data sets will be of much greater interest than what we have seen so far.

In addition to the practical visualization uses, 2010 might be the year of visualization theory. While our field is certainly an applied one, we still need a much deeper understanding of how it works and how to build better tools. There is some existing work, but much of that is old (Bertin's work was published in the 1960s, Mackinlay's almost 25 years ago, Shneiderman's 13 years ago, Chi's taxonomy almost ten years ago). The field is progressing and we are developing new tools that do not always fit the old molds. We are also gaining a better understanding of how things work, and we are seeing interesting new concepts from other fields. So an update of our theoretical foundations is really overdue now, and this year will hopefully be when it happens.

Another trend that seems to be obvious is a continued interest in visualizing data from bioinformatics. There were seven papers at InfoVis and VAST last year (including the InfoVis Best Paper and an Honorable Mention), but there are still a lot of open problems and terribly unusable tools in bioinformatics. We can have a big impact there, and maybe influence the thinking there to become a lot more visual.

## Beyond 2010: What Is to Come

In the longer term, the key will be to engage people's visual thinking skills. As long as visualization is mostly representation, it adds too little to what people can already do. Once we are able to not just show them the data, but stimulate them to think about (and with) it, they will realize the value of visualization. This is true for general audiences as well as very specialized uses: we need to move from visualization to visual analysis, and from representation to problem-solving.

Engaging people does not require interaction, but it will play a bigger role in the future. Interaction in visualization has been stagnant for a while, but I predict that a new class of interactions will be developed before too long. There are some obvious things (like touch interaction), but there has to be more than pointing at objects on the screen. How can we better support efficient visual work with complex data? How can we select in many dimensions at once? How can we specify complex filters and criteria without lots of tedious steps?

Bioinformatics will keep us busy for some time. There is a lot of data there, and more is generated all the time. There's almost any type of data you want to work with: unstructured, graphs, trees, temporal, etc. And there are lots of issues with uncertainty, data quality, data size, etc. that require new ideas and solutions. While I doubt that it will happen, we could do a lot worse than become a part of bioinformatics. The funding opportunities alone are mind-blowing.

Another very promising area is journalism. As it is increasingly based on data, InfoVis will play a bigger role in the analysis that leads to a story, as well as its presentation. At the moment, charts are only done to support a story and to give people something to play with. But why not make the visualization the central element, and only provide textual explanations as needed? To make that feasible, much better tools for creating visualizations will be needed that do not require programming but still enable the user to create new types of highly specific visualizations.

It's safe to say that we will not run out of interesting work anytime soon. We will need to break out of the ivory tower more if we want to stay relevant, though. Given the visual nature of our field, that should not be too difficult, though.


_Posted by <a href="/about">Robert Kosara</a> on January 06, 2010_


<aside class="comments">

---
## Comments

<a href="http://www.thetimoneygroup.com" rel="nofollow noopener" target="_blank">Brian Timoney</a> says…
>	<p>&nbsp;</p>
>	<p>Tools and scripting languages are certainly worthy of discussion, but the larger challenge is/has always been reaching an audience with the tools to grasp intuitively the messages being communicated.</p>
>	<p><br />So while the cognoscenti may rail against pie charts, it's a visual grammar that is familiar and comfortable, no matter how misleading.</p>
>	<p>As someone from the mapping community, I joke that CNN's election maps were the best thing to happen to my business (sure, they can be simplistic and misleading as well).</p>
>	<p>What excites me is not necessarily the toolsets but rather that through the work of folks such as the NY Times, Google Finance, etc., there's a much broader exposure to advanced ways of looking at data.</p>
>	<p>I'll end with the declaration that we techies get too hung up on products and in-crowd debates (e.g. JavaScript vs. Flash vs. Java).&nbsp; Rather the common enemy is the static screen capture from Excel ("Next --&gt; Next --&gt; Finish") embedded in a Power Point slide on which are based million-dollar decisions every day.</p>
>	<p>Brian Timoney</p>
>	<p>&nbsp;</p>

<a href="http://spotfireblog.tibco.com/" rel="nofollow noopener" target="_blank">@Brett2point0</a> says…
>	<p>An ever evolving conversation, for certain!&nbsp; Here's to 2010 and the road ahead...</p>

Li Tan says…
>	<p>It is really a very wonderful summary of the state of visualization.</p>
>	<p>The Protovis make a big leap for web-based visualizaton site from visualization provider to function-provider. Maybe we can look forward for aother leap ... :-)</p>
>	<p>The emergence of "<span class="SubTitle">Models and Theories" session turn visualization from creative technique to a theory based science. Although there are some guideline for visualiztion design varing from Ben </span>Shneiderman's mantros to Tuft<span class="SubTitle">'s principle,&nbsp; I believe everyone has their own guidelines for information visualiztion design decision. It is a good time to put them together to discuss and purify.</span></p>
>	<p><span class="SubTitle">There are indeed a lot of excellent works on bioinformatics, but I prefer the visualiztion on general problem in our daily life and hope the visualization can aid general user by facilitating the their communicative an analytical activities. <br /></span></p>

<a href="http://marlenacompton.com" rel="nofollow noopener" target="_blank">Marlena Compton</a> says…
>	<p>So where does this leave Processing?&nbsp; I've been writing an application in Processing so that I could bring in functional programming with Scala.&nbsp; If Protovis integrates with javascript, how will it address the need for concurrency?&nbsp; The reason I'm concerned is that my data gathering step took 3 hours with the java I wrote this Summer.&nbsp; My inferior programming skills aside, is there a concurrent way to do the "suck up the data" step if I'm using ProtoVis?&nbsp; Just curious.</p>
>	<p>Nice review :o)</p>

</aside>

