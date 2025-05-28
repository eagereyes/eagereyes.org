# VisWeek 2012 Digest, Part 2

In this second installment, I pick some of the more noteworthy papers and events from Wednesday, Thursday, and Friday at VisWeek 2012. There was some remarkable work, which I think and hope will shape the future of visualization research.

First, an addition to <a href="/blog/2012/visweek-2012-digest-part-1">the first part of the digest</a>: <a href="http://www.cs.kent.ac.uk/people/rpg/lm304/">Luana Micallef</a> has made a video of her very clear and visual explanation of Bayesian reasoning.

<iframe src="http://www.youtube.com/embed/D8VZqxcu0I0?rel=0" frameborder="0" width="560" height="315"></iframe>

## Clevelandgate

<em><a href="http://vis.stanford.edu/papers/slope-ratio-comparison">An Empirical Model of Slope Ratio Comparisons</a></em> by Justin Talbot, John Gerth, and Pat Hanrahan questioned the basis of the classic <em>banking to 45º</em> rule from Bill Cleveland’s books. Talbot and colleagues show some of the limitations of that study, and fill in the blanks with their own work. What they found was that the 45º were partly based on the boundaries chosen by Cleveland, and that performance actually continues to increase when going below that angle. However, the resulting charts tend to be very flat, which also has its issues.

What is interesting about this paper is that it uncovered some assumptions that had not been questioned by Cleveland or the many people who have implemented or built on his work. That is not to say that the many useful guidelines in Cleveland’s books and the seminal Cleveland and McGill paper are wrong, but that it can be useful to reexamine the foundations, in particular for things we take for granted.

My attempts on Twitter to turn this into a big scandal (using the #Clevelandgate hashtag) proved to be completely unsuccessful, alas. While the foundations of visualization are still there and largely unshaken, I felt that the response could have been a bit less muted. Oh well.

## Sketchy Rendering and Uncertainty

In their paper, <em><a href="http://openaccess.city.ac.uk/1274/">Sketchy Rendering for Information Visualization</a></em>, Jo Wood, Petra Isenberg, Tobias Isenberg, Jason Dykes, Nadia Boukhelifa, and Aidan Slingsby propose a technique for drawing visualizations in a style reminiscent of whiteboard markers. Using “sketchy” rendering is an idea used in computer aided design (CAD) to communicate that a design is not finalized, but rather open for critique and changes, which people are less likely to make when they see fully rendered images with textures, etc. In visualization, this could be useful as the basis for visualization sketches created in the process of figuring out the best representation.

It also looks great. The authors provide an <a href="http://gicentre.org/handy/">open-source library for Processing</a>, and they have a <a href="http://www.soi.city.ac.uk/gicentre/t/wordpress/handy/gallery/">gallery worth looking at</a>. Admittedly, I have a weak spot for <a href="/zipscribble-maps/interactive-zipscribble-map">things that look hand-drawn</a>, but I think this really could be useful in many different contexts. It might even be helpful to make visualization look friendlier and less formal.

<img title="Sketchy World Map" src="https://media.eagereyes.org/wp-content/uploads/2012/11/sketchy-world-600x284.png" alt="" width="600" height="284" />

A related paper, <em><a href="http://hal.inria.fr/hal-00717441">Evaluating Sketchiness as a Visual Variable for the Depiction of Qualitative Uncertainty</a></em> by Nadia Boukhelifa, Anastasia Bezerianos, Tobias Isenberg, and Jean-Daniel Fekete, explored the idea of using the amount of sketchiness to communicate uncertainty. I loved the talk because it reminded me of my own attempts to <a href="/publications/Kosara-VisSym-2002">establish blur and sharpness as a new visual variable</a> ten years ago. Given my experiences I knew what would happen: it didn’t work. Sketchiness is not perceived in degrees, and people can’t accurately gauge the level of sketchiness (same as with blur).

What was surprising to me is that when the authors compared sketchiness, blur, dashed lines, and gray levels, people actually preferred blur to the other techniques and sketchiness came in last. The preference for blur is surprising, since I found that people really don’t like looking at blurry things. The reason is probably that they only changed small parts of the images; with a large part of the image being blurred, the results would have been quite different.

A completely different paper that also had to do with sketching, though in a different way, was <em><a href="http://research.microsoft.com/en-us/um/redmond/groups/cue/publications/TVCG2012-SketchInsight.pdf">Understanding Pen and Touch Interaction for Data Exploration on Interactive Whiteboards</a></em> by Jagoda Walny, Bongshin Lee, Paul Johns, Nathalie Henry Riche, and Sheelagh Carpendale. They studied a prototype that allowed people to sketch charts onto a large display and connect data to them, so they would be instantiated as actual charts. This struck me as very similar to the rather ingenious <a href="http://www.cs.ubc.ca/~wochao/napkinvis/">NapkinVis</a> system, which did roughly the same on a tablet. Sadly, both systems are “Wizard of Oz” prototypes, i.e., require a human to pull the strings in the background. But they are intriguing as studies of how we expect people to create visualizations in the future, which will hopefully be much more visual than it is done today.

## Embellishments and Style

<em>An Empirical Study on Using Visual Embellishments in Visualization</em> by Rita Borgo, Alfie Abdul-Rahman, Farhan Mohamed, Philip W. Grant, Irene Reppa, Luciano Floridi, Min Chen followed up <a href="/criticism/chart-junk-considered-useful-after-all">the Bateman et al. study on chart junk</a> with a slightly different design, but came to similar conclusions. Instead of full-blown infographics, they just added clipart-style pictures to charts and tested people’s ability to read and remember them. They also introduced a secondary task that people had to perform while looking at the charts.

What they found was that while the added “junk” slowed people’s reading of the charts, it did help memory. None of the results were really surprising, but the fact that their findings match the much-maligned Bateman et al. study shows that there is, in fact, a clear effect of embellishments on memory.

<em><a href="http://andrew.ticle.com/publications/infovis12.pdf">Evaluating the Effect of Style in Information Visualization</a></em> by Andrew Vande Moere, Martin Tomitsch, Christoph Wimmer, Christoph Boesch, Thomas Grechenig compared the insights gained and self-reported depth of insight from visualizations done in three different styles: analytical, magazine style, and artistic.

Surprisingly, there were few real differences between the three. People’s self-reported “depth of insight” was higher for the analytical style, but their results were essentially the same as for the other two. There are some limitations to the study, in particular how they created the different style variations. But the results are intriguing nonetheless, if only to show that some “artistic” styling does not impede understanding.

## Graphical Overlays

<em><a href="http://vis.berkeley.edu/papers/grover/">Graphical Overlays: Using Layered Elements to Aid Chart Reading</a></em> by Nicholas Kong and Maneesh Agrawala is one of those clever little ideas that just look like magic: they add interactivity to static charts on websites. By essentially parsing the image, they can add value labels, grid lines, etc., even when the source data is not even available. Even simple statistics like averages are possible, once the values have been read from the chart. Clever.

## VisWeek Capstone, Felice Frankel

The capstone talk by Felice Frankel was the polar opposite of Mary Czerwinski’s keynote. While Frankel essentially took us on a tour of her own work, it was not to show off her portfolio, but to make points about how visual representations and depictions can be made more effective with a little thought and some fairly straight-forward changes. She has written a book together with Angela DePace, <a href="http://visual-strategies.org"><em>Visual Strategies</em></a>, which describes her thinking in a number of visually intriguing examples. While it’s largely about showing physical objects using photography, there are some examples that are applicable to visualization. And in general, understanding things like composition a bit better would be helpful for anybody creating visual things.

What Frankel did in her presentation was to wow and inspire people. Even if none of them ever take a picture of a ferrofluid, they will perhaps think a bit more about the visual impact of their work after this talk.

## VisWeek is Dead, Long Live IEEE VIS

As part of the closing session, the details for next year were announced. The conference will take place in Atlanta, GA, October 13–18. More interestingly, 2014 will see the conference venture outside the United States for the first time, to Paris, France.

All of that was met with cheers and applause. The part that had people scratch their heads a bit was another name change: next year’s event will be called IEEE VIS, which is supposedly an acronym for VAST, InfoVis, and SciVis. Not only is that a step back to ’60s style acronyms (UNIVAC, IBM, etc.), the change also doesn’t seem to have quite made its way through the entire organization. The <a href="http://visweek.org">VisWeek website</a> is announcing <em>VisWeek 2013</em>, and the <a href="http://ieeevis.org">supposed new website</a>, which originally pointed to the 3DUI conference, now just redirects there.

I have to say that I hated the name “VisWeek” initially too, but at least it’s fairly distinctive (if ugly and weird to have the <em>week</em> part in it). Good luck googling for “VIS” in the future, or using a meaningful Twitter hashtag. Something tells me that we will end up at VisWeek 2013, though, not VIS 2013.
