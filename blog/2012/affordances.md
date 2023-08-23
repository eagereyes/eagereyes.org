---
title: "Affordances"
description: "How do we know what we can do with things in the world or in user interfaces? What makes us push buttons, flip switches, or pick up objects that fit our hands? This guidance comes from affordances, a clever and intuitive theory that has been around for decades but is often misunderstood."
date: 2012-12-02 21:30:06
tags: Perception, cognition, techniques
featuredImage: https://media.eagereyes.org/wp-content/uploads/2012/12/gibson-cars.png
---

# Affordances

How do we know what we can do with things in the world or in user interfaces? What makes us push buttons, flip switches, or pick up objects that fit our hands? This guidance comes from <em>affordances</em>, a clever and intuitive theory that has been around for decades but is often misunderstood.

The term <em>affordance</em> was coined by James J. Gibson in his book, <em>The Ecological Approach to Visual Perception</em> (Lawrence Erlbaum Associates, 1979). Gibson writes,

>	The affordances of the environment are what it offers the animal, what it provides or furnishes, either for good or ill.

The usual examples include flat surfaces at a certain height that afford sitting on, handles of things like hammers that afford grasping, door handles that afford pushing down, buttons that stick out of surfaces and thus afford being pushed, etc.

Gibson’s original idea was a description of the natural environment, and of physical things. The design of objects is based on cleverly providing affordances, whether explicitly or not, so that a person can immediately understand how to use a thing. This is even true of really big objects, like buildings.

## The Field of Safe Travel

An <a href="http://www.tandfonline.com/doi/abs/10.1207/S15326969ECO1502_1"><em>article in a special issue on Gibson and affordances of Ecological Psychology</em></a> traces the idea back all the way to a 1938 article by Gibson and Laurence E. Crooks, <a href="http://www.jstor.org/stable/1416145"><em>A Theoretical Field-Analysis of Automobile-Driving</em></a>. The article describes the perceived <em>field of safe travel</em> by a driver, which extends in front of the car and is pushed back by other cars, pedestrians, etc. This is not the same as an affordance, but it’s a predecessor and perhaps easier to relate to than the hammer and other examples. I also love the 1930’s era cars in the illustration.

<p align="center"><img class="aligncenter size-medium wp-image-2095" title="J.J. Gibson, Illustration from A Theoretical Field-Analysis of Automobile-Driving" alt="" src="https://media.eagereyes.org/wp-content/uploads/2012/12/gibson-cars.png" width="600" height="428" /></p>

## Affordances Are in the Eye of the Beholder

There is sometimes a distinction between affordances and “perceived affordances,” which is rather nonsensical: all affordances are perceived, and they depend on who perceives them. A hammer may afford grasping to a human, but hardly to a snake or even a cat. The end of a rope similarly does not afford biting as the primary interaction to a human, but does for a dog.

It seems obvious that not only are physical traits and abilities important (a chasm might afford leaping over to some but not others), but also background knowledge and experience. What can seem obvious to you may not be to somebody else, since you may not share the same ideas about what is possible.

There is a lot of philosophy-heavy writing out there on the correct ontological role of affordances, and Gibson himself left this question open. The discussion mostly detracts from the usefulness of the concept, however: a purely perception-based idea of affordances appears to me as the most useful and logical.

## Affordances Make User Interfaces Discoverable

How do you know which parts of the screen do something when you click them, and which don’t? Affordances. Something that appears to be raised affords being pushed down, is called a button. Something that looks like a handle affords to be grabbed and moved; OS X used to have little ridges in the lower right edges of windows you could resize that way.

More recently, things that respond when you move your mouse over them have become quasi-affordances. They require interaction and can’t be perceived without, but the idea is the same: move your mouse over something you think might be an active user interface element, and see if it changes color, bulges out, etc. If it does, that’s your hint that clicking the button there will do something. The reason this has become more common recently is because it leads to cleaner-looking user interfaces where the buttons can stay in the background and not compete with the content until they are needed.

This becomes more of an issue again with touch, where there usually is no hover. Making a touch interface discoverable is quite difficult, and requires a lot more visual cues and affordances that tell the user where things are hiding. With the release of Windows 8 and its flat and clean-looking <em>Modern</em> design (better known under its non-generic name, <em>Metro</em>), iOS can look a bit old-fashioned and overly embellished in comparison. But there is a trade-off between design minimalism and clean looks on one hand, and providing sufficient visual information so people can perceive affordances, on the other.

A lot of <a href="http://www.useit.com/alertbox/windows-8.html">Jakob Nielsen’s recent criticism of Windows 8</a> has to do with the lack of affordances in that interface. When buttons no longer have gradients to make them appear raised, or even borders around them, any text string or icon could be a button. But not all are, which leads to a lot of trial pecking and frustration when some things don’t respond even though they look the same as the things that do.

## Affordances in Visualization

Like interaction in general, affordances are underutilized in visualization. That is partly understandable, since affordances always play off of physical things, even as parts of user interfaces, and visualization can be very abstract. But there are clearly possibilities.

One is to have objects in a visualization glow or otherwise respond when the mouse moves over them. Another is to provide more physically-based cues when creating interaction elements for filters, etc. that can be moved.

But more than that, I wonder if there is a role for affordances to make it easier for people to find their ways around visualizations, understand the interactions (and what they do), and, most of all, encourage interaction.

[[PostedBy]]

<aside class="comments">

---
## Comments

Jeffrey says…
>	Wonderful concept, thank you for introducing it.  Looking at the goal of the visualization should give designers an idea about the degree of affordance to include for users.  An electronic commerce site, for instance, should be absolutely transparent to facilitate easy interaction by almost anyone.  However, the point of many computer games is to make the affordances difficult to perceive.  I wonder if the developers of Windows 8 had many gamers on the UI team?

<a href="http://makeapowerfulpoint.com" rel="nofollow noopener" target="_blank">Gavin McMahon</a> says…
>	Robert,
>	I think you're spot on with the idea of affordances in visualization. An interesting question with affordances is what are learned and what are natural. Most affordances are learned. Think of a caveman and a button - he wouldn't necessarily know what to do. Therefore there may be affordances built into visualization that we have learned from other fields. An obvious one is that we tend to read left to right and down (at least in English) so there is an affordance that lends more importance to the top left. If you think about play buttons on VCR, DVR, etc. They always move to the right. That's another affordance in visualization.
>	Great/ interesting topic. Look forward to seeing other comments.

<a href="http://www.storytellingwithdata.com" rel="nofollow noopener" target="_blank">Cole Nussbaumer</a> says…
>	Robert,
>	
>	Great post! I talk about affordances when it comes to designing data visualizations (even static, offline data viz) in my workshops. For me, these are visual (rather than physical) characteristics of the graph that help make it clear to the user how to interact with it (e.g. selective strategic use of size, color, etc. to make it clear what is the most important that should be paid attention to first, what is next most important, and so on).
>	
>	Great blog!

<a href="http://www.visualisingdata.com" rel="nofollow noopener" target="_blank">Andy Kirk</a> says…
>	Another issue that I come across a lot is the idea of an inverse affordance (ok, I made that up but...) where by something looks significant, it implies meaning, or looks like it should be clicked/interacted with but ultimately turns out to be a red herring and is a decorative device and nothing more.

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	That's still an affordance, just a misleading one. The affordance is only the perceptual part, it doesn't guarantee that there's actual function behind something.

Jonathan says…
>	Not inverse affordance but "false affordance", as defined by William Gaver in 1991. Great minds think alike, Andy. Just not at the same time in this case :-)
>	
>	http://www.interaction-design.org/encyclopedia/affordances.html
>	
>	BTW I think the HCI community is gradually coming round to the idea that affordances (more accurately, Don Norman's clarification of his "perceived affordances") are really just learned conventions. In HCI (as opposed to the physical world), there's nothing about a bevel on a button that makes it seem any more or less clickable than a flat colour field. It's just that we've learnt to recognise that the bevel signals a button. So you could say that Norman hijacked the original definition and ultimately applied it wrongly - there is nothing innate about HCI. Mainly because a million years ago we didn't have computers. 
>	
>	But it's a nice word and impresses clients, so I use it muchly.

</aside>

