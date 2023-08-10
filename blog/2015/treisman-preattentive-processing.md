---
title: "Seminal InfoVis Paper: Treisman, Preattentive Processing"
description: "A paper on a specific cognitive mechanism may seems like an odd choice as the first paper in this series, but it is the one that sparked the idea for it. It is also the one that has its 30th birthday this year, having been published in August 1985. And it is an important paper, and could play an even bigger role in visualization if properly understood and used."
date: 2015-01-25 20:26:11
tags: isotype
featuredImage: https://media.eagereyes.org/wp-content/uploads/2015/01/treisman-teaser.gif
---

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2015/01/treisman-teaser.gif" width="825" height="510" /></p>

# Seminal InfoVis Paper: Treisman, Preattentive Processing

A paper on a specific cognitive mechanism may seems like an odd choice as the first paper <a href="/section/seminal-papers">in this series</a>, but it is the one that sparked the idea for it. It is also the one that has its 30th birthday this year, having been published in August 1985. And it is an important paper, and could play an even bigger role in visualization if properly understood and used.

## Preattentive Processing in Vision

<a href="http://en.wikipedia.org/wiki/Anne_Treisman">Anne Treisman’s</a> work is unfortunately misunderstood about as often as her name is misspelled (it’s <strong>not</strong> i before e). Her paper, <em><a href="http://www.sciencedirect.com/science/article/pii/S0734189X85800049">Preattentive Processing in Vision</a></em> in the journal <em>Computer Vision, Graphics, and Image Processing</em> (August 1985, vol. 31, no. 2, pp. 157–177), describes a mechanism in our perceptual system that allows us to perform a small set of well-defined operations on certain, well-defined visual properties without the need for conscious processing or serial search.

This is often demonstrated with the so-called pop-out effect. Count the 9s in the following image (this example is stolen from Stephen Few).

<p align="center"><img class="aligncenter size-medium wp-image-8681" src="https://media.eagereyes.org/wp-content/uploads/2015/01/nines-plain.png" alt="nines plain" width="660" height="335" /></p>

Not easy, and in particular it requires scanning the image line by line. You can’t quickly find a shape like a 9 among very similar ones (like 8s, 6s, and 3s). Now let’s try this in a way that activates your preattentive processor.

<p align="center"><img class="aligncenter size-medium wp-image-8680" src="https://media.eagereyes.org/wp-content/uploads/2015/01/nines-bolded.png" alt="nines bolded" width="660" height="335" /></p>

Much easier! The 9s pop out. You can’t not see them. They’re there, easy to count. What you can do now is

<ul>
    <li>detect their presence (or tell their absence) and point to where they were</li>
    <li>estimate how many there were as a fraction of the total number of objects</li>
    <li>detect boundaries between groups of objects that have similar properties (i.e., if the 9s were grouped in some way, you would perceive that as a shape).</li>
</ul>

All of this is possible even if you only saw this image for a fraction of a second (50–200ms) and your precision does not change significantly if we were to increase the number of objects (up to a reasonable limit).

There are a number of visual properties that this works for, including color, size, orientation, certain texture and motion attributes, etc. Chris Healey has a <a href="http://www.csc.ncsu.edu/faculty/healey/PP/">great webpage with demos and a more complete list</a>.

Combining preattentive features is problematic: if the numbers were, say, blue and orange, and I wanted you to just count the bold orange ones, you'd still have to search serially (this is called conjunctive search). If they were combined so that the combination was unique (i.e., all bold digits were also orange, but there was nothing else that was orange or bold), that would make things easier and would still be preattentive (disjunctive search).

This is a very interesting effect for a number of reasons, and it can be used quite effectively in visualization. But it's also important to understand its significant limitations. Used with great restraint, preattentive processing can be used to great effect. But not every use of a strong color contrast means that you're using a preattentive feature.

## Taking Things Further

Treisman's paper is cited quite a bit in visualization, but it doesn't always extend beyond lip service. One of the key issues seems to be a misunderstanding of what preattentive features really are, and what sorts of tasks preattentive processing can perform.

But more than that, it's about restraint. Most visualization systems have way too much going on to be able to make use of preattentive features. A system could conceivably drop all its colors to gray when it wants to point something out using color, and only use color on those parts. Or it could provide certain types of filters or highlights that make use of specific features and are smart about not creating conjunctive searches. Or perhaps even just use it to highlight similar things when hovering.

I don't believe that we have seen the real power of preattentive processing in visualization yet. What about using it to help people look for clusters in scatterplots? How about dense representations like heat maps? Perhaps there are even specific new techniques that could capitalize on these properties in ways existing ones can't.

Thirty years after the discovery of the effect, there is still tremendous opportunity to unpack it, understand it, and make use of it in visualization.


_Posted by <a href="/about">Robert Kosara</a> on January 25, 2015_


