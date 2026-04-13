# Memorability, Science, and The Value of Thinking Outside the Box

Stephen Few has written [a long and scathing piece](http://www.perceptualedge.com/articles/visual_business_intelligence/infovis_research_as_pseudo-science.pdf) tearing down a paper presented at VIS earlier this year. While some of his criticism is justified, it is too focused on one of the authors, and it comes from an idea of visualization research that is far too limited.

The paper in question is [*Beyond Memorability: Visualization Recognition and Recall*](http://massvis.mit.edu) by Michelle A. Borkin, Zoya Bylinskii, Nam Wook Kim, Constance May Bainbridge, Chelsea S. Yeh, Daniel Borkin, Hanspeter Pfister, and Aude Oliva.

There is [a discussion thread](http://sfew.websitetoolbox.com/post/information-visualization-research-as-pseudoscience-7813635) that a number of visualization researchers have posted in to respond, including Jean-Daniel Fekete, Jeff Heer, and Ben Shneiderman. I therefore won't attempt a detailed response here. Instead, I hope to illuminate the way visualization research works, and whether or not it is a science.

Steve’s main concern is what he considers the lack of scientific rigor in the paper and the field in general. He complains about several issues with the paper, including the small number of study participants, the study mechanism of showing people images for a short time, etc. This is the part I won’t respond to in detail because it just gets too technical and has already been largely addressed by others. Instead, I will try to talk about research in visualization in a more general way.

## Why the Personal Attacks?

But let’s get this out of the way first. The whole thing is centered on [Michelle Borkin](http://people.seas.harvard.edu/~borkin/), even though the paper has eight authors. At one point, Steve hypothesizes why the quality of the paper is so bad:

>	I suspect that her studies of memorability were dysfunctional because she lacked the experience and training required to do this type of research.

I can see where he’s coming from. Michelle got her Ph.D. at a little place called Harvard. Do they teach the scientific method at Harvard? I don’t know. It’s only [ranked second in the U.S.](http://colleges.usnews.rankingsandreviews.com/best-colleges/rankings/national-universities) overall and [third globally for both Computer Science and Physics](http://colleges.usnews.rankingsandreviews.com/best-colleges/rankings/national-universities). Though perhaps we could ask [the dozens of Nobel Laureates that work there or came from there](http://www.harvard.edu/about-harvard/harvard-glance/honors/nobel-laureates).

The statement above is especially silly because Michelle’s Ph.D. is actually in Applied Physics, which in contrast to Computer Science is an actual science. It is also odd because [Steve praised one of her papers in 2011](https://www.perceptualedge.com/blog/?p=1095). If that was a scientifically sound paper, has she forgotten the scientific method in the meantime? Has the exposure to all those infographics gotten to her?

Another problem is that Steve has so far mostly singled out women for his criticisms: [Jessica Hullman in 2011](https://www.perceptualedge.com/articles/visual_business_intelligence/visual_difficulties.pdf), [Michelle Borkin in 2013](https://www.perceptualedge.com/blog/?p=1770), and now again in 2015. Jeff Heer also picks up on this, and in particular the personal attacks, in the discussion thread:

> I know you wish to avoid this topic. But I am more concerned that people new to the field (especially women) will read this critique, see the pointed references to Borkin alone, and see it go largely unchallenged. Intended or not, our actions serve as examples of what is and is not acceptable conduct in the community.

Criticism is clearly useful, and so is pointing out issues. But the tone and personal style of this are way over the line – even if [Steve doesn’t consider the tone aggressive](http://sfew.websitetoolbox.com/post/show_single_post?pid=1290033360&postcount=7).

## Science and Visualization

I have argued in the past that visualization should be more scientific. But science, or the scientific method, is not the only criterion here. Visualization doesn’t work like a hard science – not even hard sciences work like that all the time.

Steve writes:

> Even though most information visualization research is done in university departments with “science” in their names—predominantly “Computer Science”—most of the work is not done scientifically.

Computer science is not a science in the classical sense. Computer “science” has a tortured history itself, coming out of the math departments of the 1960s, 70s, and 80s. Some parts of computer science work like math: algorithms, parts of database research, graph drawing, etc. As much as math is a science, that work would pass muster as well.

But computer science, and visualization, are equally about [engineering and making new things](https://eagereyes.org/basics/visualization-research-engineering). You don’t push the boundaries by studying what is there, you invent and develop what isn’t. That’s not something a pure science does.

Much of the work in visualization is therefore new ideas – what Steve calls “Software Development Studies.” They’re called technique papers in visualization, and the point is to propose new ways of doing things. Many of those now include more or less elaborate studies to show that they work or do something better than what exists. There is a big discussion on whether it should be possible to just propose new ideas without having evaluated them. If a few reasonably experienced people agree that it's new and interesting, why not accept it for publication?

Insisting on the scientific method gets in the way here. It can be more important to get interesting new ideas out to see if they take off than to reject a paper for minor issues. The result is a more lively and interesting field, instead of a boring and moribund club of the same people discussing the same old stuff. Visualization doesn’t even have the crazier stuff like the HCI (human-computer interaction) community has with alt.chi and other venues. But this sort of openness is important for a field to keep adapting and changing, especially a field so young.

Now to be clear, this does not excuse poor research. But it means that papers that raise important questions are worthwhile, even if they aren’t perfect. *Beyond Memorability* is not perfect. So what? If you start digging around, you will find issues in almost any paper. This paper studies something that is very difficult to get a handle on and takes a good first stab. Others will build on that and improve it. That’s valuable.

## Memorability Is A Goal

Steve’s main issue isn’t even science though, but the question of what visualization research should be about. Steve makes that pretty clear:

> The greatest tragedy of this research is that what makes a visualization memorable is actually of no consequence.

Says who? Also:

> Visualizations don’t need to be designed for memorability— they need to be designed for comprehension.

Yes, but those are separate issues! Comprehension is certainly important, but that doesn’t take away from the question of memorability. They can be studied independently. It would be pretty difficult to do both in the same study, actually.

A study needs to be focused. Conditions need to be controlled. Difficulty is one of them: if you make it too easy, everybody answers everything and there's nothing to learn. The choices made by Michelle and her colleagues are informed by these kinds of considerations.

The types of questions and tasks done in a study can also look artificial. Again, that's part of the need to control all possible factors that influence performance. If you don't control them, you don't know what caused differences. When you strap somebody into an eye tracker so they can't move and only given them a single button to push, that's not a realistic setup. But it helps to eliminate randomness from head movements, the hand not being close to the button, etc.

But I'm getting off track. Back to memorability as a valid topic.

> For most visualizations, the comprehension that they provide need only last until the decision that it informs is made.

By that logic, all visualizations are disposable: look at it once, make your decision, throw it away. That’s not even true for analysis, and it’s not true at all for presentation.

We have plenty of people coming to [Tapestry](https://eagereyes.org/link/link-the-tapestry-youtube-channel), for example, trying to find better ways to get information to people about their health, how to better manage their money, etc. They would benefit tremendously from their audience remembering the visualizations that tell them about their risks, the different kinds of foods they should eat and not eat, etc. Visual memory would help a lot more here than some one-time decision.

Memory isn’t a set of shelves where we store pieces of data, like a computer. Our memories are highly connected and are triggered by pieces of information we can latch onto. Imagery helps with that, including both visualizations and potentially embellishments. This is well known, and we showed it pretty clearly in the[ ISOTYPE study](https://eagereyes.org/papers/isotype-visualization). More images, more text, and more ways of connecting visualizations with what people already know will help them remember.

## Presentation is Part of Visualization

It’s no secret where I stand on the question of storytelling and presentation in visualization. We made that pretty clear in a paper titled [*Storytelling: The Next Step for Visualization*](http://kosara.net/publications/Kosara_Computer_2013.html) a few years ago. I also have a piece coming up in the *Visualization Viewpoints* column of the January/February issue of *Computer Graphics and Applications* where I'm trying to tease apart presentation and analysis a bit further.

This sort of work has only recently started to make its way into the visualization literature. That is partly thanks to people like Michelle Borkin who have done trailblazing work in this area.

Whether presentation should be a part of visualization is not a matter of science, it’s a question of what work is considered to fit. Information visualization has only been around for a short time, and the boundaries are not very clearly defined. Instead of insisting on particular arbitrary demarcation lines, why not let a thousand flowers bloom and see what happens?

> This isn’t about us; it’s about a fledgling field of study that is struggling to emerge from the nest. Let’s give it wings.

Exactly. But I don't think shooting the bird is the way to do that.
