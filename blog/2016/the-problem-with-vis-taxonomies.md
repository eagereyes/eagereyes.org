---
title: "The Problem with Vis Taxonomies"
description: "Most taxonomies in visualization and HCI are useless. They carve up the space, but they don’t provide new insights or make predictions. Designing a useful taxonomy is a difficult problem, but that's no excuse for publishing lots of mediocre ones."
date: 2016-11-27 20:32:42
tags: 
featuredImage: https://media.eagereyes.org/wp-content/uploads/2016/11/bugs.jpg
---

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2016/11/bugs.jpg" width="720" height="500" /></p>


# The Problem with Vis Taxonomies

Most taxonomies in visualization and HCI are useless. They carve up the space, but they don’t provide new insights or make predictions. Designing a useful taxonomy is a difficult problem, but that's no excuse for publishing lots of mediocre ones.

## A Taxonomy of Taxonomies

Taxonomies organize the world. They’re best known from <a href="https://en.wikipedia.org/wiki/Taxonomy_(biology)">biology</a>, where animals and plants were classified by their appearance and their apparent relationships long before evolution or genes were known. Other taxonomies include the <a href="https://en.wikipedia.org/wiki/Periodic_table">Periodic Table of Elements</a>, which not only organized the known chemical elements, but also predicted a number of then-unknown ones and even suggested that some of the existing data about atomic weights was wrong.

That last point is quite astounding, actually. Mendeleev not only had holes in his original table, but some of the atomic weights would have put elements into different spots. Instead of building his table around the messy existing data, Mendeleev made some bold choices in placing those elements where they belonged given their properties, and ignored the data. He trusted his organizing principle more than what was known at that point about the world. And he was proven right.

Most of the taxonomies we know from the sciences are the ones that have proven to be useful (which doesn't mean that they are entirely settled – just ask a biologist). We don't tend to see bad taxonomies, or at least we can't usually put our finger on the reason why a taxonomy is bad. So here is an attempt to demonstrate what I think is the problem with so many taxonomies I see in visualization and HCI.

## The Inevitable Car Analogy

I propose a new taxonomy for cars. I believe that it is novel, but I can’t rule out that somebody has done it before. My taxonomy organizes cars by color. In particular, it has the following categories

<ul>
    <li>Red cars</li>
    <li>Blue cars</li>
    <li>Green cars</li>
    <li>White cars</li>
    <li>Black cars</li>
    <li>Cars of some other single color</li>
    <li>Cars of more than one color</li>
</ul>

This is a taxonomy. It carves up the space of all cars. Is it useful? No. I can’t do anything with those groups. Each will contain cars that are vastly different in their interesting properties (space, weight, mileage, etc.), so I won’t be able to make any useful statements about the speed of red cars being higher than that of blue cars, etc.

But this is exactly what so many visualization and HCI taxonomies do. They laboriously carve up the space, only to be able to organize exactly the things they set out to organize. But they don’t provide anything new. There are no interesting organizing principles that tell us something new about the field. There are no predictions for what else could be in those categories, or even clear and tight criteria that describe what’s in each. Each category is simply defined by what's in it. Tautologies like that are not useful.

## The Completeness Trap

Another mistake that I see in many taxonomy papers is also that they try to cover everything, lest a reviewer find something they forgot and reject the paper. That leads to endless laundry lists of stuff, rather than focusing on the truly interesting cases. And it waters down the taxonomy with pointless categories for all the cruft that should never have been published to begin with.

Instead, taxonomies need to be scoped. It needs to be acceptable to say: yes, we know of work X, but we don’t think it should be included. It doesn’t add anything, nobody uses it, it just destroys an otherwise useful taxonomy. I doubt that reviewers would accept that, but that is a problem. Every published paper may be a precious and unique snow flake, but there is also a lot of nonsense out there that only serves to muddy the waters.

Visualization is a messy field. We need to be more realistic about that and not demand organizational all-encompassing principles that cover everything. We’re nowhere near the point where we can reasonably do that, and it’s not a given that we ever will be.

At that least, we need people who can stand up to the existing stuff, like Mendeleev did, and decide that their clear, useful taxonomic structure is more important than the noise that's out there. In particular if they can show that their structure makes interesting new things possible, I think that should be acceptable work (it certainly would be highly interesting, even if not perfect).

## Usefulness Criteria

How do we know when a taxonomy is useful? I find that the taxonomies that appeal to me are the ones that let me build stuff. <a href="http://graphics.stanford.edu/papers/polaris_extended/">VizQL</a> is an example, even if it’s not a pure taxonomy. But it is the basis for <a href="https://tableau.com">a certain commercial data visualization product</a>. <a href="https://www.cs.uic.edu/~wilkinson/TheGrammarOfGraphics/GOG.html"><em>The Grammar of Graphics</em></a> is another example. It has been implemented in a number of tools and systems, most famously it lends its two gs to <a href="http://ggplot2.org">ggplot</a>. Both VizQL and <em>The Grammar of Graphics</em> are languages, but they are based on an understanding of the space or they would not be very useful. Neither is complete, but both allow us to build new combinations and test ideas.

To be clear, this should not be the only criterion. There definitely can be highly interesting and useful taxonomies that are not directly constructive in this way. But it certainly helps if a taxonomy turns out to have this feature.

Just like novelty in research papers, the ability to make predictions or build new things should be an acceptance criterion. Just shuffling things around in a new way is not interesting and not useful.

<hr />

<a href="https://www.flickr.com/photos/limaoscarjuliet/2131512327/">Teaser image by Pawel Loj</a>


_Posted by <a href="/about">Robert Kosara</a> on November 27, 2016_


<aside class="comments">

---
## Comments

Bilal says…
>	Good post, Robert, and you are right about identifying the problem with vis taxonomies.
>	But I do not think it is fair to compare against taxonomies from natural sciences. In design sciences, there are hardly underlying phenomena to make predictions about, unlike chemistry or biology. A more fair comparison would be against taxonomies from math and computer sciences, which mainly categorize known methods and compare them according to some criteria.
>	Instead of asking authors to make predictions, I would rather expect them mainly to help their taxonomy users in choosing which algorithm(s) to consider for a given problem.

bertin says…
>	Sure, vis/hci taxonomies should strive to be operational but giving vis grammars as examples of useful taxonomies is misleading.  I’m sure, e.g., Wilkinson would be the first to say that his grammar of graphics isn’t a taxonomy, pure or impure (you could actually walk down the hallway and ask him ;))

</aside>

