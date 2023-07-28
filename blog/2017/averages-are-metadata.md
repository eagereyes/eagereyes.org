---
title: "Averages Are Metadata"
description: "When we think of metadata, we tend to think of attributes that describe the data. Where do the numbers come from? What do the values in a categorical column mean? Etc. But there is a type of metadata we rarely even recognize as such: values computed from the data. They're often treated as part of the data, but that's a mistake."
date: 2017-05-14 19:07:00
tags: 
featuredImage: https://media.eagereyes.org/wp-content/uploads/2017/05/Image-4-30-17-9-47-PM.jpeg
---

# Averages Are Metadata

When we think of metadata, we tend to think of attributes that describe the data. Where do the numbers come from? What do the values in a categorical column mean? Etc. But there is a type of metadata we rarely even recognize as such: values computed from the data. They're often treated as part of the data, but that's a mistake.

Most metadata is so different from the data itself that it's easy to spot: of course the URL pointing to the source of the data is not part of the data! Even the number of records typically looks different than any of the values (it doesn't have a unit like dollars, for one). The line is much less clear, though, when it comes to values that are derived from the data.

## The Average In The Data

This is the disconnect that bugged me when I saw this tweet from The New York Times the other day:

https://twitter.com/nytgraphics/status/854422095685726208

Seeing the average included in the chart like this bothers me. It feels wrong. I think there are a few reasons for this. For one, it's ugly. The average has to be dressed up to make clear that this is not a regular data value. But then, why include it as one?

When the data is sorted, including the average makes some sense to see which airlines, in this case, are above or below the average. This is useful especially when the distribution is a power law like here, and there is data that is not shown but that is part of the calculations (passenger volume for each airline in this case, which the number of complaints is normalized by).

But then, it's not like you can't see that when you draw a simple line. After <a href="https://twitter.com/eagereyes/status/854424631213568000">I tweeted that I found the above confusing</a>, RJ Andrews did <a href="https://twitter.com/infowetrust/status/854503656288264192">a quick redesign</a> of what I would consider to be the obvious way of showing the average (and also fixed the odd title on the other one):

<img class="alignnone size-full wp-image-10055" src="https://eagereyes.org/wp-content/uploads/2017/05/Image-4-30-17-9-50-PM.jpeg" width="1172" height="458" />

Why not do this? Dressing up the average required some graphics work beyond a simple chart in the original, wouldn't it have been easier to just draw a line instead?

## Going Meta

I understood what had bothered me beyond the aesthetics when Elijah Meeks made an interesting point: the core issue here was that <a href="https://twitter.com/Elijah_Meeks/status/854429661979332608">the average was treated as part of the data, rather than as metadata </a>. The average is not a special value, it's not a data value at all! It's not part of the data.

The average describes the data. It summarizes it. That means it’s data about the data. It’s really no different than the number of rows in the table or the data dictionary. Just because it’s a number and in the same units as the data values doesn’t make it one.

Including averages and totals in a table is something that strikes me as very much rooted in the thinking that is dominated by printed tables and spreadsheets. When data is released as spreadsheets, it's quite common to include totals and averages. They are provided for convenience or because it may not be possible to compute them from the data provided (because of weighting or other issues). U.S. government data often does this, including the U.S. value in addition to all the states, etc., and there are many other examples.

The problem isn't that these values are included, it's <em>how</em> this is done: as part of the main table, not a separate sheet or file. That makes the average, total, etc., just another value in the table, rather than a piece of clearly delineated metadata. When you create a chart from such a spreadsheet, it will include the average like all the other values. So it’s understandable that charts like the one above are being made.

## Clear Distinctions, Clearer Thinking

This becomes problematic when the data is to be used in some more sophisticated analysis than just turning it into a simple chart, where the non-data values will get in the way (and the data needs to be recast in <a href="https://eagereyes.org/basics/spreadsheet-thinking-vs-database-thinking">a more database-like structure</a>). A calculated average will now be wrong, because the average that's already in the data distorts it. The same is true for sums, medians, etc.

The reason for including these values, convenience, now becomes an obstacle. And since it's not possible to know beforehand what kinds of analysis will be done on the data, it's impossible to include all the derived values that might be needed.

The way to fix this is to treat derived values as metadata and not throw them into the main table. Spreadsheets have lots of features for this, like tabs. Files can be separated out. Spreadsheets (and in particular CSV files) don't have to exactly mirror the structure of a printed table – in fact, that's usually a terrible way of releasing data.

But what's more, data tables aren't like printed ones. They are the raw material for further processing, not the end result. <a href="https://eagereyes.org/data/dish-best-served-raw">They need to be readable by machines, not humans</a>. Including averages and other derived values shows a fundamental misunderstanding of this basic fact.


_Posted by <a href="/about">Robert Kosara</a> on May 14, 2017_


<aside class="comments">

---
## Comments

Gregor says…
>	the quick redesign isn't helpful because it excludes all the things that made the chart readable. the long titles, the unit descriptions, the bar labels, the value labels, the grid labels, etc. if you leave everything that matters out there is suddenly a lot of empty space to put in average lines and yet another label to explain what the line is.

<a href="http://eagereyes.org/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	It's unfinished, I'll give you that. But I don't see why labeling that extra line would be all that difficult. The bars are the same as before.

<a href="http://steveharoz.com" rel="nofollow noopener" target="_blank">Steve Haroz</a> says…
>	Cool post, Robert. As much as I agree subjectively, I wonder if we can make this idea falsifiable. In a visualization, what kind of imprecision or judgement error or even speed difference would you expect with avg-as-bar vs avg-as-grid-line?

<a href="http://eagereyes.org/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	I would expect it to be much easier to see how far away from the average you are with a line than a bar, especially with more bars. Perhaps the more important thing would be confidence, though: can I easily find the average and how sure do I feel about the difference? I'd be surprised if the line wasn't better at both.

</aside>

