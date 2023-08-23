---
title: "When Informative Art Isn't"
description: "Making visualization more aesthetically pleasing is certainly an important goal. Another one is to make visualization a part of our everyday lives. Ambient information displays are a way of doing both, and they are often inspired by pieces of art. But what if the viewers think they are just looking at a picture, and don't realize that it presents information to them?"
date: 2006-10-21 12:01:53
tags: criticism
featuredImage: https://media.eagereyes.org/media/attachments/Skogetal-buses.png
outline: false
---

# When Informative Art Isn't

<p align="center"><img title="Two bus lines - Skog et al, InfoVis 2003" src="https://media.eagereyes.org/media/attachments/Skogetal-buses.png" alt="Two bus lines - Skog et al, InfoVis 2003" width="538" height="210" border="0" /></p>

Making visualization more aesthetically pleasing is certainly an important goal. Another one is to make visualization a part of our everyday lives. Ambient information displays are a way of doing both, and they are often inspired by pieces of art. But what if the viewers think they are just looking at a picture, and don't realize that it presents information to them?

In a 2003 paper titled <em><a href="http://www.viktoria.se/fal/publications/2003/infovis03-skog.pdf">Between Aesthetics and Utility: Designing Ambient Information Visualizations</a></em>, Skog, Ljungblad, and Holmquist described a way of visualizing data using a visual metaphor that looked very much like a Mondrian painting: large, colored squares with thick, black, orthogonal lines on a white background. The application in this example was showing the arrival and departure times of two bus lines that connect a university with a city, and the display was mounted in a university cafeteria (all images taken from the cited papers and used with permission).

<p align="center"><img class="aligncenter" title="The visual metaphor - Skog et al, 2003" src="https://media.eagereyes.org/media/attachments/Skogetal-metaphor.png" alt="The visual metaphor - Skog et al, 2003" width="541" height="313" border="0" /></p>

This version was already an improved one that added a considerable amount of metaphor to make it easier to understand which buses were going in which direction. The original version only had the four colored squares without any lines that would indicate connections, and no river. The additional information was designed to cleverly blend in, but they still needed a little sign next to the display that explained that this was a visualization and how to read it.

So what went wrong? Why did the users not understand that they were looking at data, but thought they were looking at a mere picture? Perhaps the question needs to be restated: how were the viewers supposed to know that they were looking at a visualization? Using a style such as Mondrian's is attractive, but also dangerous, because viewers are familiar with it. The metaphor is too literal, and therefore the viewers need to be forced out of the usual way they look at images that look like that.

<p align="center"><img class="aligncenter" title="Weather and email visualized using the Mondrian metaphor" src="https://media.eagereyes.org/media/attachments/Weather-Email.png" alt="Weather and email visualized using the Mondrian metaphor" width="420" height="150" border="0" /></p>

The image above shows a visualization of temperatures in six cities throughout the world, and of email traffic. Which is which? And how can the user tell any of that information from the images? By using the same visual metaphor for weather forecasts, current weather, email traffic and bus times, it becomes clear just how arbitrary the method really is. When you can use it for any data, there cannot be information in it about what data it represents. There is no meaning that the user could discern.

In a later paper, <em><a href="http://www.viktoria.se/fal/publications/2004/eval-ambient.pdf">Evaluating the Comprehension of Ambient Displays</a></em><span class="biblio-title">, Holmquist </span>developed a model of how viewers understand ambient <a href="http://www.sics.se/fal/projects/infoart/">informative art</a>. In order to read data from the visualization, the viewer must take three steps: realize <em>that</em> data is being visualized, <em>what </em>data is being shown, and <em>how</em> the visualization works in order to read it. Of course, the biggest step is the first one, to realize that what you are looking at is, indeed, a visualization, and not just there for decorative purposes.

<p align="center"><img class="aligncenter" title="Comprehension over time - Holmquist 2004" src="https://media.eagereyes.org/media/attachments/Holmquist-comprehension.png" alt="Comprehension over time - Holmquist 2004" width="328" height="219" border="0" /></p>

The fact that his model even exists is highly significant: it is based on the failure of a visualization, and the development of the model required coming to terms with the fact that the Mondrian-style bus visualization did not work as intended. In this sense, this model captures the spirit of <a href="/VisCrit/VisualizationCriticism.html">visualization criticism</a>, and makes good use of it by proposing a way to think about the problem.

What the model does not capture is context. Information graphics and bus schedules (even graphical ones) have certain styles, and they also exist in a certain context (that of a bus stop). There is no "bus" context in a cafeteria, so the bus schedule must be shown in a way that looks familiar, or at least cite the style of bus schedules. Using a style that is more common in the cafeteria setting, but uncommon for bus information, means that the user will simply apply the <em>decoration</em> category and ignore the piece.

Finally, we have to understand the differences between art and visualization, and cannot simply pretend they don't exist. There are clearly connections (and this website is built on those), but they are just not as obvious as they might seem. Art – representational or not – represents in a different way, and is read in a different way, than visualization. This is a fundamental difference that makes it necessary to dig much deeper than to copy a style for a visualization. Doing so would pretty up the visualization in the best case, and entirely destroy it in the worst.

We need a better understanding of representation in visualization to not repeat mistakes like the above. But thanks to those who tried these things out, we have taken a first step: we know <em>that</em> representation is different in visualization.

[[PostedBy]]

<aside class="comments">

---
## Comments

<a href="http://infosthetics.com" rel="nofollow noopener" target="_blank">infosthetics</a> says…
>	I would propose that Holmquist's model actually proves that the ambient display worked as intended. for real visualization, the time axis should be extremely short. but for ambient display, the time axis can be quite long, providing people are not getting frustrated, and have an enjoyable experience. isn't this similar to experiencing good art?

Robert Kosara says…
>	Good point, but how informative can art be? Can it still be art if it communicates like a visualization? That is an important question, and I am going to write about that soon. The problem is that art is <a href="http://en.wikipedia.org/wiki/Sublime_%28philosophy%29">sublime</a>, whereas InfoVis is entirely anti-sublime. In fact, that is its very nature (see <a href="http://www.manovich.net/DOCS/data_art_2.doc">Manovich</a>, for example). We can certainly learn a lot from artists, but we need to dig a little deeper and understand the differences before we can make effective use of that knowledge.

<a href="http://www.sics.se/%7Eleh/" rel="nofollow noopener" target="_blank">Lars Erik Holmquist</a> says…
>	<p>The bus visualization was not a failure - we have it installed in our office and I use it every day, as do many of my colleagues! In fact, out of the hundreds of research prototypes I&#39;ve seen in my time in the field, this is one of the very few that I know of that are actually in real-world use.</p><p>The point I wanted to get across is that an ambient information visualization must take into account more variables than one on the desktop - it has to look good, it has to be interesting, it has to fit with the environment and habits of people, etc. This means that it has to be designed differently from the desktop, just as all other ubiquitous computing applications. When you mention &quot;context&quot;, you also have to take into account the context of location and use - for instance, in this case we experimented with different physical settings, some of which were more successful than other.</p><p>There is a common misunderstanding that an application or visualization must be understandable without any explanation. This is wrong - if it is correctly designed, a visualization can be very powerful even without being immediately understandable, as long as it is possible to reconstruct how it works logically. This we achieved with the bus visualization by using the geographical metaphor, and it is something I tried to capture with the model.</p><p>The conference poster contains more information on the model and is a good complement to the short paper. It can be downloaded here: <a href="http://www.viktoria.se/fal/publications/2004/eval-ambient-poster.pdf" rel="nofollow">http://www.viktoria.se/fal/publications/2004/eval-ambient-poster.pdf</a> </p>

cdrane says…
>	I couldn't agree more with the content of this post. No offense meant to Mr. Holmquist, but any graphic designer (not even "information designer") knows that design rules can be created for any particular piece and *intended* to mean anything the designer wishes - but much like interpretive dance, the meaning behind the aesthetics can be inscrutible to external audiences. In this case, the rules behind the information design are invisible and therefore the pieces are useless.
>	
>	If the intent of the bus poster was to communicate *clearly*, *quickly* to a *broad audience* and be *pretty* it was a failure on 3 of the 4 counts. Simply because it's been hung and used by the designer himself and his colleagues means very little.

</aside>

