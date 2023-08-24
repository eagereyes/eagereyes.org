---
title: "What is Visualization? A Definition"
description: "What is a visualization? The word is problematic, and there have been very few definitions that try to define this field we are working in. More importantly: what is not a visualization? It is easy to argue that anything visual is a visualization in some way &ndash; but does that mean anything? Here is a definition of visualization and a few examples to illustrate the different criteria."
date: 2008-07-24 21:41:05
tags: criticism
featuredImage: https://media.eagereyes.org/media/2008/visdefteaser.jpg
---

<img src="https://media.eagereyes.org/media/2008/visdefteaser.jpg" alt="Teaser" border="0" />

# What is Visualization? A Definition

What is a visualization? The word is problematic, and there have been very few definitions that try to define this field we are working in. More importantly: what is not a visualization? It is easy to argue that anything visual is a visualization in some way – but does that mean anything? Here is a definition of visualization and a few examples to illustrate the different criteria.

## Definition

The following are three minimal criteria that any visualization has to fulfill to be considered a <a href="/Theory/TaleOfTwoTypes.html">pragmatic visualization</a>. A good visualization certainly has to do more, but these criteria are useful to draw the line between a lot of things that are often called visualization and what we consider visualization in this field.

<ul>
	<li><em>Based on (non-visual) data</em>. A visualization's purpose is the communication of data. That means that the data must come from something that is abstract or at least not immediately visible (like the inside of the human body). This rules out photography and image processing. Visualization transforms from the invisible to the visible.</li>
	<li><em>Produce an image</em>. It may seem obvious that a visualization has to produce an image, but that is not always so clear. Also, the visual must be the primary means of communication, other modalities can only provide additional information. If the image is only a small part of the process, it is not visualization.</li>
	<li><em>The result must be readable and recognizable</em>. The most important criteria is that the visualization must provide a way to learn something about the data. Any transformation of non-trivial data into an image will leave out information, but there must be at least some relevant aspects of the data that can be read. The visualization must also be recognizable as one and not pretend to be something else (see the discussion of <a href="/VisCrit/InformativeArt.html">Informative Art</a>).</li>
</ul>

This definition was published in a paper on <a href="/publications/Kosara_IV_2007.html">Visualization Criticism</a>, part of which I discussed in an <a href="/criticism/tale-of-two-types">earlier posting</a>.

## Examples

The following examples show how these criteria provide a clear separation of visualization (in the sense of scientific and information visualization) and other kinds of data transformations that result in images.

<p align="center"><img src="https://media.eagereyes.org/media/2008/milkdrop.jpg" alt="MilkDrop" border="0" /></p>

<a href="http://www.nullsoft.com/free/milkdrop/">MilkDrop</a> is one of the most impressive music visualizers. Not only does it have a huge range of different styles that it can transition between, it's also very good at detecting beats and different instruments, so the visualization really fits the music. Since it creates images from wave data, it clearly fulfills the first two criteria. But what about readability? Can you tell which song was played when the image above was created? This is not a shortcoming, it's simply not the goal of a music visualization to be readable (and it would be very difficult). But music visualization plugins are not visualizations in the pragmatic/information visualization sense.

<p align="center"><img src="https://media.eagereyes.org/media/2008/visualIDs.jpg" alt="VisualIDs" border="0" /></p>

<a href="http://www.idiom.com/~zilla/Work/VisualIDs/visualids.html">VisualIDs</a> are a very clever idea to help the user tell files apart: they produce images from the names of files to produce visually similar (but still distinct) icons for files with similar names. Since they are based on data and are visual, they could be a visualization. But they also fail the readability test, you cannot tell which image represents which filename. A <a href="/blog/visual-mapping-of-poetry.html">poetry visualization</a> I discussed earlier has the same properties.

Radiohead's recent video for their song <em>House of Cards</em> <a href="http://greatdance.com/thekineticinterface/2008/07/radiohead-house-of-cards/">was "shot without cameras,"</a> using <a href="http://en.wikipedia.org/wiki/LIDAR">LIDAR</a> and <a href="http://en.wikipedia.org/wiki/3D_scanner#Structured_light">structured light</a> real-time 3D imaging devices. This has been described as "using visualization," but I disagree. The data that is being rendered was acquired using visible light, and so doesn't show anything that would not be visible through the naked eye. In fact, to make the video watchable for a general audience, they had to use something that produced a fairly realistic image. So the first criterion is clearly not fulfilled. I also have to say that the result does not strike me as particularly interesting – it's a bad sign when the making-of is much more interesting to watch than the video itself.

## Conclusion

The many meanings of the term <em>visualization</em> can cause confusion and loss of focus. We need to know what we are talking about when we are working in scientific or information visualization. The definition given above provides a baseline that all visualizations must fulfill to be considered part of this field. More work is clearly needed.

<PostedBy />


<aside class="comments">

---
## Comments

<a href="http://peltiertech.com/WordPress/" rel="nofollow noopener" target="_blank">Jon Peltier</a> says…
>	<em>The result must be readable and recognizable.</em>
>	
>	Ah, now I understand why I am uncomfortable with so many of the popular "visualizations" across the net. Graceful arcs and curlicues, pretty colors and effects, but they don't show me anything.

<a href="http://had.co.nz" rel="nofollow noopener" target="_blank">Hadley Wickham</a> says…
>	My two comments would be:
>	
>	 * Based on non-visual data: this is a bit of a tricky issue - clearly a photograph isn't a visualisation, but what about a histogram of the colour levels?  What about a rendering of a image clustering model showing cluster means (averages of images)?
>	
>	 * I'd call the last condition invertability - i.e. when creating it you go from data to something visual - when reading it you need to be able to go from something visual to the data.
>	
>	Hadley

Robert Kosara says…
>	Good points, but that's why I said "not immediately visible." A histogram, even if derived from something you can see, is more than trivially different from the photograph itself. A simple distortion of the image or filters that get applied to bring out certain structures would not be.
>	
>	I'm not sure "invertable" is really true. I was thinking of "bijective" for some time, but obviously, that's not really the case in visualization. There are losses in the translation from data to the image. That's why I think "readable" is a better criterion, because it's not as strong as the other two, but still gets the idea across.

luoning says…
>	I think the third criterion "The result must be readable and recognizable" has some room of refinement or improvement.
>	
>	The beauty is to the beholder.  To untrained eyes, the histograms or functional plots may look as nondecipherable as the symbols you listed as examples.
>	
>	Here I suggest an alternative one:
>	The visual elements of the result (size, shape, color cue and lightness, etc.) should reflect or reveal the analytical or logical relationship in the underlying data.

Slar says…
>	I offer two proposals to your definition
>	
>	2. I think the word "image" is misleading. You can visualize using a chart, table, or graph too - anything you can see.
>	
>	3. You've got the right idea, but I believe the term you are looking for is "information reduction". The raw data is too much for most humans to handle easily. What you want to do is reduce the amount of information being presented, just focusing on the elements that are most important to communicating the message.

Zsolt says…
>	Criteria for music visualization: no visual effect may appear without being in 1:1 relation to some audible physical aspect of the music AND no audible physical aspect of the music should be left unaccounted for by a 1:1 corresponding visual effect.

<a href="http://teknodog.com/" rel="nofollow noopener" target="_blank">3D Systems</a> says…
>	Good synopsis regarding the three crucial points of visualization.

Pierre Dragicevic says…
>	I really like the blog post and the paper, and I regret I did not come across them before. I particularly appreciate the clarity of the writing and of the thinking in the paper, that makes it easily accessible to a wide audience and really useful.
>	
>	Maybe one thing that disturbs me in the paper is the missing link between the sublime and the enigmatic. My understanding is that the sublime is what elicits awe, and the enigmatic is the quality of something that is difficult to interpret. I understand that there is some value in both, but the paper never clearly explains how are the two connected.
>	
>	Arguably, something hard to interpret can elicit a wide range of emotions and reactions, both positive (e.g., intellectual curiosity or amusement) and negative (e.g., frustration or indifference), many of which are not necessarily deep or related to awe. The converse idea that the sublime is necessarily caused by something that is hard to interpret is maybe more interesting, but not immediately obvious. Yet this is simply assumed in the paper, and quickly leads to the conclusion that a user-friendly visualization cannot be sublime. But is there any evidence for this?
>	
>	Another comment I have is about the idea of introducing criticism and critical thinking in academic publications. Maybe it's worth recalling that those are hardly restricted to art and design and have always played a major role of science. As the paper suggests, academic peer-review is pure criticism.
>	
>	Now it's true that i) the quality of criticism in peer reviews is not consistently high and the guidelines proposed in the paper can be quite useful in rising the standards; ii) criticism only indirectly appears in academic (infovis) papers, as these papers are mostly crafted in order to dodge all possible criticism by peer reviewers. Explicit criticism in papers (of either one's own designs or someone else's) could certainly provide some added value when backed up by facts, but for this we would have to transcend the political correctness that so far has characterized the tone of academic publications in HCI disciplines. The many controversies and battles in disciplines such as psychology are sometimes mean but they are also very healthy, I think, for the progress of knowledge.

Qwerty says…
>	I'd add a lower bound criterion to your third point: a visualisation should be at the very least more readable than the underlying data in text/tabular form. Now, 'more readable' is in itself a multifaceted criterion, sure, but let's say the visualisation should enable either: reaching same conclusions faster; reaching better informed conclusions; easier communication of said conclusions; better long-term retention of information (important for education) etc.

JM says…
>	Something can be a visualization of the data without being 'more readable'.  Now, a _good_ visualization certainly should meet that criteria.

Minko says…
>	Good point on the misleading of "image." It is about reduction as our mind always works to wrap complexity in manageable portions. I'd offer the term "economy of communicating" as a function of the economy of brain power. Images wrap complexity for quicker processing with less energy. Meaning production works similarly in identifying relations by giving them a name. Value, in color theory for example, is the wrap-up for the relating between black and white. Two words replaced by one. Of course, the way images wrap up relations (data) is much more complex, however they are faster to process. Not sure if "reading" is an adequate term to the instant visual impact of images, but it is true that images can and are being read when it comes to illustrating and comprehending information. Other than that there's memorability, which often is mixed in the information visualization discourse only to introduce more confusion. It is incredibly irresistible the power of art, isn't it?!

atul jaiswar says…
>	Still i m not getting what is visualization plz help me out.this is atul from india

vijay says…
>	Still confuse

</aside>

