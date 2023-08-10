---
title: "Review: Manuel Lima, The Book of Trees"
description: "Trees. They’re everywhere. And not just in the physical world, but in data visualization and knowledge representation as well. This is not a new phenomenon, it goes back thousands of years. Manuel Lima’s new book, The Book of Trees, gives an overview."
date: 2014-04-13 19:57:09
tags: book-reviews, criticism
featuredImage: https://media.eagereyes.org/wp-content/uploads/2014/04/DSCF1448.jpg
---

# Review: Manuel Lima, The Book of Trees

Trees. They’re everywhere. And not just in the physical world, but in data visualization and knowledge representation as well. This is not a new phenomenon, it goes back thousands of years. Manuel Lima’s new book, <em>The Book of Trees</em>, gives an overview.

<p align="center"><img class="aligncenter size-medium wp-image-3593" alt="The Book of Trees, in a tree" src="https://media.eagereyes.org/wp-content/uploads/2014/04/DSCF1448.jpg" width="730" height="486" /></p>

## Setting Expectations

This review is an example of priming. The first time I learned of the book was when Ben Shneiderman mentioned it to me as we talked at IEEE VIS in Atlanta last year. In our conversation, he referred to it as “a coffee-table book.” I don’t think he did this on purpose, but that did set my expectations.

There are many similarities between <em>The Book of Trees</em> and Lima’s previous book, <em>Visual Complexity</em>, which <a href="/criticism/review-visualize-visual-complexity-science-magazine">I reviewed for <em>Science</em> two years ago</a> . The major difference is that Lima doesn’t attempt the same taxonomy he did in <em>Visual Complexity</em>, and which ended up being mostly disappointing. There are also no over-the-top endorsements on the back of the book that promise way too much. The result is a book that feels more coherent and complete.

## Beyond The Coffee Table

Having been primed to think of it as a coffee-table book, I did not expect a deep theoretical treatment, but lots of pictures. And that is what I got. In addition, the book has a very nice introduction that describes the importance of trees throughout all cultures and religions, both in terms of their physical uses and as metaphors for knowledge, life, etc.

There is also a short chapter titled <em>Timeline of Significant Characters</em>, which consists of 12 short bios, starting with Aristotle and ending with Ben Shneiderman (Ben also wrote the foreword, and the book includes many examples of treemaps). It seems a bit misplaced early in the book, and might have made more sense as an appendix.

In the introduction, Lima argues that we need to look at a much longer history of visual representations than just information visualization (and “not be overly infatuated by the work created in the last decade alone”). I agree with that. However, a clearer line could have been drawn between actual data visualizations and trees that depict ideas of structure (like Darwin’s illustration for <em>On the Origin of Species</em>, which did not describe the evolutionary history of any particular species, but the general idea of evolution).

## Chapters

In addition to the introduction, there are eleven chapters talking about different kinds of tree diagrams:

<ul>
    <li><strong>Figurative Trees</strong>. These are the most tree-like in the way they are drawn, and many of the oldest examples are in this chapter. This is also the longest chapter.</li>
    <li><strong>Vertical Trees</strong>. Upside-down trees, the way they are commonly drawn in computer science. It turns out that there is quite a bit of precedent for these, going back many hundreds of years.</li>
    <li><strong>Horizontal Trees</strong>. All but one of these is drawn left-to-right, and there are a few that grow in both directions. This chapter also includes, at the very end, tree-browser concepts similar to the Mac Finder and Windows Explorer, respectively. Lima credits these to himself, which seems an odd choice.</li>
    <li><strong>Multidirectional Trees</strong>. Trees drawn in different directions are included here. The most obvious examples are the result of force-directed layouts, but there are also historical examples and also more modern hand-drawn ones (like Stephanie Posavec’s <em>Writing Without Words</em>)</li>
    <li><strong>Radial Trees</strong>. Trees laid out on concentric circles are a common idea in visualization for a variety of reasons. This chapter seems like a bit more of a mish-mash, because the layout within the circles can be very different, affording different ways of reading, interaction, etc.</li>
    <li><strong>Hyperbolic Trees</strong>. Giving these their own chapter is an interesting choice, because they are really a subset of multidirectional trees. This is a nod to interaction, which is otherwise missing in the book. It’s a short chapter, since hyperbolic trees never really took off (partly because they were patented), and never really proved to be all that useful.</li>
    <li><strong>Rectangular Treemaps</strong>. This is the first of three treemaps chapters. It starts with some historical precedents, though I doubt anybody would have recognized them as part of one class before Shneiderman's paper. Then it’s treemaps: the original slice-and-dice treemap, squarified teemaps, the Map of the Market, cushion treemaps, and many examples of using treemaps for different kinds of data.</li>
    <li><strong>Voronoi Treemaps</strong>. It was a surprise to see a whole chapter on this niche treemap type, but they are of course very attractive. Surprising is also the number of examples Lima has managed to dig up.</li>
    <li><strong>Circular Treemaps</strong>. Calling these treemaps is at least a stretch, since they are not actually space-filling. In the introduction to the chapter, Lima first refers to them as space-filling, but then complains about their waste of space. I’d rather have seen a chapter on interaction than these mostly useless visualizations.</li>
    <li><strong>Sunbursts</strong>. Speaking of useless: sunburst diagrams are one of those neat ideas that don’t really work out in practice. The examples are all weak, in particular the <em>3D Sunburst</em>.</li>
    <li><strong>Icicle Trees</strong>. Icicle trees are clearly more useful than sunbursts, since they are easier to label and navigate than the circular sunbursts. The latter are also arguably just icicles laid out in a circle. It's kind of difficult to compete with the treemap, so these last two chapters feel a bit forlorn.</li>
</ul>

Each chapter has a little diagram showing how the type of visualization is constructed for a tree with one, two, and three levels. This is surprisingly effective, and similar to some of the illustrations in <a href="/criticism/review-isabel-meirelles-design-information">Isabel Meirelles’ book</a>.

## What’s Missing

Is this a visualization book? Not really. It doesn’t go into any detail on the actual techniques, doesn’t compare them, and more than half of its pages are devoted to tree diagrams that aren’t useful for visualizing data today.

It also entirely ignores interaction. The only time Lima talks about it is in the introduction to the <em>Hyerbolic Trees</em> chapter, where he says that these don’t appear much in print because they are useful when there is interaction (and only then, I might add), and are thus confined to “their natural digital domain.”

It’s too bad Lima didn’t venture a but further into that domain to illustrate more of the really interesting interactive tree visualization tools. Tamara Munzner’s <a href="http://www.cs.ubc.ca/labs/imager/tr/2003/tj/">TreeJuxtaposer</a> is never mentioned, and neither is the <a href="http://www.cs.umd.edu/hcil/spacetree/">SpaceTree</a>, etc. There are many other examples of work that is missing, and I don’t think that Lima was going for completeness here. But ignoring interaction entirely seems like a big gap, even if it doesn’t lend itself that well to a printed book.

## Conclusions

The book provides plenty of good material. Lima has unearthed many examples that most people likely have never seen before, both ancient and relatively recent. His introduction has also given me a new appreciation of trees as a structural metaphor. I hope that somebody will use all the examples Lima has collected for both of his books to develop a deeper understanding of the design space, beyond a list of examples.

The book succeeds as a coffee-table book, and I mean that in the best possible way. It provides a beautiful, visual overview of a large and important part of our cultural and intellectual heritage, and thus is a fantastic resource to draw inspiration from. The visualization examples are not complete, but there are many lesser-known ones that can be great starting points when researching tree visualization work – or when simply wanting to understand the history and context of tree metaphors when depicting information.

<hr />

Manuel Lima, <em>The Book of Trees</em>. Princeton Architectural Press, 2014.

The publisher sent me a free copy of the book for this review.


_Posted by <a href="/about">Robert Kosara</a> on April 13, 2014. Filed under [book reviews](/tag/book-reviews), [criticism](/section/criticism)._


