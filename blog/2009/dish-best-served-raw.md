---
title: "Data Is A Dish Best Served Raw"
description: "The recent opening of Data.gov has led to a number of discussions on data formats, feeds, what kinds of data, which agencies are or are not participating, etc. One key aspect that gets overlooked very easily, but that is really essential, is that what is being published is actual data: original, raw, unprocessed, undigested, naked data. Everything else is secondary."
date: 2009-06-04 21:06:53
tags: data
featuredImage: https://media.eagereyes.org/media/2009/data-zoom.jpg
outline: false
---

<p align="center"><img src="https://media.eagereyes.org/media/2009/data-zoom.jpg" border="0" alt="Data Zoom" width="550" height="140" /></p>

# Data Is A Dish Best Served Raw

The recent opening of <a href="http://data.gov/" target="_blank">Data.gov</a> has led to a <a href="http://sunlightlabs.com/blog/2009/05/28/what-id-change-about-datagov/" target="_blank">number of discussions</a> on data formats, feeds, what kinds of data, which agencies are or are not participating, etc. One key aspect that gets overlooked very easily, but that is really essential, is that what is being published is actual data: original, raw, unprocessed, undigested, naked data. Everything else is secondary.

A lot of data comes from tables in reports. It has become something of a custom in recent years for government agencies to publish the tables in their reports as Excel files. I really don't get the point of doing this, as it's the same exact numbers that can be found in the report, anyway. And usually, it's only a handful of numbers per table. Here is a recent example from a <a href="http://www.guardian.co.uk/news/datablog/2009/may/21/ukcrime-police">crime report in the UK</a>:

<p align="center"><img src="https://media.eagereyes.org/media/2009/burglars.png" border="0" alt="Burglar data" width="550" height="331" /></p>

This table, called <em>Who Are The Burglars?</em> appears with others, like <em>What Do They Steal?</em> and <em>How Do They Get In?</em> These are all relevant questions, of course, but what if I want to draw new connections? Perhaps male burglars steal different things than female ones? Do younger people steal more? Is there a difference in how they get in between the different age groups, sexes, and repeat offenders?

None of that is possible with this data, because it's not raw. It has been pre-digested and what we get is a neatly arranged report. There's nothing wrong with a well-prepared report, of course, but providing the source data would make the report a starting point for further exploration, rather than the end product of the analysis.

A good example for how things should be done are the <a href="http://www.census.gov/main/www/pums.html">U.S. Census Public Use Microdata Samples (PUMS)</a>. The data format is not exactly a joy to work with: it's fixed width, with 00 meaning something different than 000 or 0, but it's possible to parse it. The metadata is in PDF files, and not exactly directly accessible. But it's data. Hundreds of dimensions. Millions of data points. Beautiful, delicious, raw data. Exactly the stuff we need to use our visualization tools on, to explore and find interesting new connections.

Data.gov has inspired people around the world, <a href="http://www.guardian.co.uk/news/datablog/2009/may/28/barack-obama">and particularly in the UK</a>. The UK government is currently trying to figure out <a href="http://powerofinformation.wordpress.com/">how to build a kind of data.gov.uk</a>, and <a href="http://blogs.cabinetoffice.gov.uk/digitalengagement/post/2009/05/22/Information-and-how-to-make-it-useful.aspx">how to make that as useful as possible</a>. This is an interesting process to watch, since there wasn't much public participation in data.gov's design. There are many valid questions about data formats, feeds, etc., but the key issue is really the rawness of the data. Everything else can be handled with tools and libraries.

Quite a bit of the current data on data.gov is in shape files. These are proprietary, and their geographical component isn't always that interesting. There are a number of libraries that can open these files, though, so it is quite easy to extract the tabular data and get it into a CSV file or similar. The same is true for some of the XML files, which would make more sense as CSV (and vice versa).&nbsp;Even the missing RSS feed was <a href="http://sunlightlabs.com/blog/2009/05/22/keeping-eye-datagov/">taken care of by Sunlight Labs</a>.

Another question that has come up is whether such a site should be an index or a repository: link to the data hosted on a variety of websites, or provide it in a central place, perhaps with a common data model, bulk downloads, and even an API. I believe that data.gov is choosing the right middle ground here. Linking to data is much easier than hosting it, and especially trying to get it all into one data collection &ndash; a project that is guaranteed to lead to endless discussions about the correct taxonomy, data model, etc.

We all have our data models and ideas about the data, so any overarching be-all-end-all data model data.gov would choose would match nobody else's. It really makes more sense to leave that to the user. Of course, it would be great to be able to query all the data in one central place. I just don't think it's going to happen. And given the choice between the current data.gov and the perfect model in five years, I know what I would pick.

But despite all the flaws, the inconsistencies, and things that could be done but haven't been, there is one key component that makes it all viable: it's data. Real, raw, original data. Data we can use and <a href="http://had.co.nz/thesis/">melt and recast</a> and analyze. That's the kind of data that is worth going to all the trouble for. If we don't get that kind of data, all the other issues are moot.


_Posted by <a href="/about">Robert Kosara</a> on June 04, 2009_


<aside class="comments">

---
## Comments

<a href="http://jeromecukier.net" rel="nofollow noopener" target="_blank">Jerome Cukier</a> says…
>	<p>From a data visualization expert point of view, you can't beat raw data.&nbsp;</p>
>	<p>But one ambition of data.gov was to make data available to new audiences.</p>
>	<p>My guess is that a person who only needs a data-backed answer to a simple question won't be too happy to get raw data only.&nbsp;</p>
>	<p>don't get me wrong, I think it's great that raw data is becoming easier to obtain, but it's shouldn't be the one and only way to publish data.</p>

Robert Kosara says…
>	<p>I agree, and data.gov is really only usable for a small minority of people. But the raw data is where it all begins. Now people can start building interesting applications and new ways to disseminate the data. But without that raw data, none of that is possible: nobody's going to read endless PDFs with pre-digested tables, and nobody is going to be able to build anything more interesting from them.</p>

Kinray says…
>	<p>Without the raw data, you can not even verify the research by reporducing the published results...</p>

</aside>

