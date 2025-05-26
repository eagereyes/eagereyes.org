---
title: "Another Metaphor for Visualization: Writing"
description: "Andrew Gelman recently wrote a blog posting in which he draws an interesting comparison between writing styles and graphics styles. I think he's on to something, and the comparison can be taken a bit further to illustrate some common misunderstandings around visualization."
date: 2012-02-21 21:36:26
tags: criticism
featuredImage: 
---

# Another Metaphor for Visualization: Writing

Andrew Gelman recently wrote a blog posting in which he <a href="http://andrewgelman.com/2012/02/at-some-point-the-graph-is-so-bad-that-it-doesnt-convey-the-information/">draws an interesting comparison between writing styles and graphics styles</a>. I think he's on to something, and the comparison can be taken a bit further to illustrate some common misunderstandings around visualization.

Gelman first describes the different ways in which people used to write, even in the context of scholarly communication. There were storytellers and people who wrote dialog, etc. He talks about this in terms of the 1700s, but I've seen much more recent papers that appear really peculiar through the eyes of somebody who's used to the way we write today (e.g., some of Einstein's papers are like that). Gelman then draws his comparison with graphical communication of data:

>	When it comes to data graphics, though, we’re back in the freewheeling 1700s. Maybe that’s a good thing, I don’t know. But what I do know is there’s no standard way of displaying quantitative information, nor is there any acceptance of the unique virtues of the graphical equivalent of clear prose.

A very interesting point, and one that I think can be taken quite a bit further as a useful metaphor for visualization, infographics, and related endeavors.

## Expectations

Say you want to read about some facts, maybe the <a href="http://en.wikipedia.org/wiki/Thirty_Years'_War">Thirty-Year War that raged in Europe in the 1600's</a>. But instead of reading up on it in a history book or an encyclopedia (or maybe Wikipedia), you happen to pick a book of poetry from the time. You're not going to get much out of that, even though the book may be of great literary value (the war inspired many poems, plays, and other books for many years after). Why is that?

It's not a question of information content, it's a question of what your expectations are and how you determine what satisfies your need for information. Perhaps you're looking for factual information, displayed in a no-nonsense and unbiased way. But perhaps you want to know how people experienced that war, how they dealt with the grueling atrocities that were committed, or how they managed to move on after it was finally over. Those things are sometimes more clearly conveyed in poetry or song, and they may be a lot more compelling that way than a dry history text. But if what you're looking for is the factual treatment, none of that will sway you.

We need to be aware of our expectations when we judge a data visualization or infographic. Perhaps its goals are very different from our own, and it was made for people with very different expectations. It's easy to just take this as an anything-goes attitude, but things aren't quite that black-and-white.

## Standards

The other part of Gelman's argument are standards. The funny thing about standards, of course, is that there are many to choose from, and they also tend to evolve over time. Just like you would have a hard time getting a paper accepted that was written in the style that was common 100 years ago in journals, the way we think about how data should be presented has changed quite a bit.

Part of that is due to technology: cross-hatching and other ways of making elements of charts look distinct are no longer needed because of the availability of color and fine-grained grayscale (unfortunately, that doesn't mean you don't see those anymore, though). We also have a lot more techniques at our disposal today than 100 or even 50 years ago, though that doesn't seem to have translated into much use outside of the visualization field itself.

What Gelman alludes to in his last sentence quoted above about "unique virtues of the graphical equivalent of clear prose" is, I think, <a href="http://www.infovis-wiki.net/index.php/Data-Ink_Ratio">Tufte's data-ink ratio</a>. A high data-ink ratio is equivalent to very concise, matter-of-fact writing without redundancies, embellishments, or elaborations. It's not a big stretch to come up with an information-ink ratio, or an information-words ratio: the number of words (or amount of ink) on a page that do not carry unique information should be minimal.

That is not a contrived idea, but a common way people think about academic writing. However, such papers tend to be dry and often border on unreadable. I find a lot of writing in mathematics almost impossible to parse because the writers like to be extremely efficient and only spell out what absolutely needs to be. Writing in visualization, fortunately, tends to be a lot livelier and more geared towards the reader. Compared to a lot of applied computer science writing, psychology papers tend to read like long essays with lots of little flourishes and forays into philosophy and other areas.

Which style is the right one? Clearly, different fields have different standards. A paper from another field will appear more terse or wordy than what one is used to, but that does not necessarily make one way of writing – or creating visual depictions of data – better or another style wrong.

## Style

When I talk to artists or designers, they often ask me about people in visualization that have distinctive styles. I do recognize some people's work sometimes just by looking at the visuals, but I have a hard time describing anybody's style as clearly distinctive and consistent. But the point is that in addition to the broader style of a field, there are individuals who can carve out a niche. Novels are a particular style of writing, but there is clearly not just one way of writing a novel, and many authors have very distinct styles. We don't have that in visualization quite yet, and perhaps it's not something to strive for in an academic setting.

There are products that encourage certain styles, though: Tableau's visualizations look very different from, say, Excel. Sure, one can always torture each of the systems to look like the other, but the defaults and the kinds of settings that are easily available steer the user away from such behavior. Perhaps it's our tools right now that have the strongest influence on our styles, whether we like it or not.

Beyond personal style, though, there is the style of the particular field. Just like there are crime novels and vampire novels, there is statistical visualization and infographics. Each of those has its own, distinct style, and each has its place. The question is not one of right or wrong, but picking the appropriate niche.

## Refinement

Gelman's point about the wide variety of writing styles in the early days of academic writing (post-Renaissance, anyway) has one more interesting parallel with visualization: development over time. The visual display of information, even in its broadest sense, is still very young and underdeveloped. There is nothing like the vast numbers of books that have laid out information using words. There is no science of how to categorize and compare visual information displays.

Consider, for a moment, that there was a time when the novel was a new idea. Before the 18th century, there were early  versions of it, but <a href="http://en.wikipedia.org/wiki/Novel#From_dubious_history_to_literature:_The_18th-century_market_reform">the novel as we know it today did not exist</a>. Yet the vast majority of fiction written in the last 200 years or so is novels. Shakespeare did not write novels, and the idea to write one likely didn't occur to him. He may even have dismissed novels, had somebody shown him one, as crude and unrefined writing that lacked purpose.

Standards change, ideas come and go, some stay and become the prevailing way of doing things. It's way too early to know how we will be looking at data in 20, 50, or 100 years. And we have to be careful when we just lump together anything visual that's based on data and apply the same small set of standards to it. That is not to say that anything goes, but we need to make an effort to understand the goals and ideas behind something before we attempt to make a judgment.


<PostedBy />


<aside class="comments">

---
## Comments

Al says…
>	Good article. Re. "...A high data-ink ratio is equivalent to ... an information-words ratio: the number of words (or amount of ink) on a page that do not carry unique information should be minimal." Sounds like the signal-noise ratio (of which data-ink ratios are one specific example). 
>	
>	From the chapter on it in Rockport Press's Universal Principles of Design (which cites visual display of quantitative info as one source among others): "The goal of good design is to maximise signal and minimise noise... Maximising signal means clearly communicating information with minimal degradation".
>	
>	Sounds obvious, but the key difference with some people's interpretation of data-ink is that success is defined by the amount of signal successfully passed from the author to the audience by the whole communication act itself, not by the amount of data that technically speaking is locked away by the author onto the page. 
>	
>	Taking your example of a good psychology paper dipping into philosophical flourishes: these are non-unique information, so by a measure based purely on ink on the page, the ratio gets worse. However, parts of the signal are more fully understood by a reader in a philosophical frame of mind, parts by a more rigidly analytical frame of mind, so, within this discipline, adding certain well placed non-information flourishes that stimulate the appropriate mindset minimises the actual degradation of the signal. By a signal-noise ratio based on minimising the actual degradation of the signal going from the author to the reader, it improves.
>	
>	(I imagine that among serious mathematicians, a somewhat incomplete signal that forces the recipient to do  calculations and piece the pieces together themselves results in a more complete transmission of the idea - so more signal, less noise - than an elaborate description would)

Jonathan says…
>	I'm not sure the writing analogy works when applied to data viz. At last, prose and poetry can communicate any information in some way, while data viz is only supposed to be communicating numbers, isn't it? So when you say, "We need to be aware of our expectations when we judge a data visualization or infographic." are you implying that the expectation may *not* be to gain some understanding of the data? That's... rather hard to understand without completely breaking the definition of what data visualization is.
>	
>	BTW I totally agree that we're in the infancy of data viz though.

Jonathan says…
>	Ah, woop - just seen your definition: http://eagereyes.org/criticism/definition-of-visualization
>	
>	OK it's a very (very) broad definition, and I can see how the writing analogy fits within it. I'm still struggling to understand the premises here though.

</aside>

