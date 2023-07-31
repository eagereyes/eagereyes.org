---
title: "Trifacta Wrangler for cleaning and reshaping data"
description: "Wrangling data into a shape that can be used to create visualizations is a huge problem with few available tools. Trifacta Wrangler is a powerful new tool that is free to use."
date: 2015-10-19 05:25:45
tags: 
featuredImage: https://media.eagereyes.org/wp-content/uploads/2015/10/trifacta-teaser.png
outline: false
---

# Trifacta Wrangler for cleaning and reshaping data

Wrangling data into a shape that can be used to create visualizations is a huge problem with few available tools. <a href="http://trifacta.com/trifacta-wrangler">Trifacta Wrangler</a> is a powerful new tool that is free to use.

Data comes in all shapes and sizes, and those are often not conducive to working with it right away. Date formats might be weird, columns may need to be split or merged, and there is often the need to unpivot the data (turn columns into rows). This is a particular problem with government data.

<a href="https://www.trifacta.com/">Trifacta</a> is a young startup that was founded by Jeff Heer, Joe Hellerstein, and Sean Kandel. Its product is an extension of their 2011 <a href="http://vis.stanford.edu/wrangler/">Data Wrangler</a> paper and online tool, but with many more features and able to deal with much larger data.

While the old Data Wrangler is still around, it is no longer supported and it’s also pretty slow for some operations (in particular unpivots with many rows and columns). The other alternative, <a href="http://openrefine.org">OpenRefine</a> (formerly Google Refine), is now “community supported.” While it hasn’t been entirely abandoned, there is no current release version, the beta is years old, and the whole thing is just way behind how computing is done these days (Java?!).

<p align="center"><img class="aligncenter size-full wp-image-9000" src="https://media.eagereyes.org/wp-content/uploads/2015/10/trifacta-welcome.png" alt="trifacta-welcome" width="660" height="309" /></p>

<a href="http://trifacta.com/trifacta-wrangler">Trifacta Wrangler</a> is limited to 100MB of input data, which should be sufficient for many people’s needs. They support CSV, TSV, JSON, and Excel files (both XLSX and old-fashioned XLS). The output can be CSV, JSON, or TDE (Tableau Data Engine). The app runs on the desktop, but it needs an Internet connection (all the wrangling is done locally though, and your data stays on your machine) and you have to sign up for a free account with Trifacta.

In addition to the usual data cleaning operations like splitting and merging columns, Wrangler can also nest values, compute aggregates, and a number of other things. The best way to figure it out is to use it with a real dataset that you want to wrangle into a better shape and just try out lots of things. All actions can be undone, and you can edit the script the tool generates from the actions you perform.

<p align="center"><img class="aligncenter size-full wp-image-8999" src="https://media.eagereyes.org/wp-content/uploads/2015/10/trifacta-transformer.png" alt="trifacta-transformer" width="660" height="309" /></p>

The app is designed very nicely with many features and a built-in tutorial (which can get in the way a bit at first, but it’s worthwhile to read what it tells you). It is targeted partly towards Tableau users (hence the support for TDE as output), including <a href="https://public.tableau.com/s/">Tableau Public</a>, but it is certainly not restricted to that.

Given Trifacta Wrangler’s power and support, and the dismal state of the only other freely available tool, I think that Wrangler will be the go-to choice for data wrangling for most people going forward.


_Posted by <a href="/about">Robert Kosara</a> on October 19, 2015_


<aside class="comments">

---
## Comments

Jeffrey Heer says…
>	Hi Robert! One important correction: the transforms produced by Trifacta Wrangler run locally on a user's machine -- we do not send the data elsewhere! A network connection is required for metadata management (including login, etc) and to ensure real-time updates to the product.

<a href="http://eagereyes.org/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	Thanks, I fixed that sentence.

Jeffrey Heer says…
>	Thanks!!

Sartaj says…
>	Traditionally, reshaping means transforming data from wide to long or long to wide format in statistical software such as Stata, SAS or SPSS based on key variables for different set of analysis (t-test require wide format and repeated measures analysis entail a long format). I haven't seen any such operations performed by Trifacta in any manual or in the video shared so far.
>	 It would be nice to have such a capability by Trifacta. Also, is it possible to import or export data in any of these statistical formats too?

<a href="http://eagereyes.org/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	It does actual reshaping, I know what that means ;) It's one of the operations you can apply. It's a bit less obvious since it doesn't appear in the basic row or column selections.
>	
>	As for formats, I mention TSV, CSV, JSON, and Excel above. The free version doesn't read any statistical data files as far as I know, don't know about the paid one.

</aside>

