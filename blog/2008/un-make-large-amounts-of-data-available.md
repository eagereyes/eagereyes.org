---
title: "UN Make Large Amounts of Data Available"
description: "Data is being set free: the United Nations have started a new website called UN Data to share the data collected by a number of UN agencies. 55 million data records are waiting to be explored and visualized. The search interface is very nice and usable, but still lacks power."
date: 2008-03-07 22:35:29
tags: 
featuredImage: https://media.eagereyes.org/media/2008/undata-flowers.png
outline: false
---

<p align="center"><img src="https://media.eagereyes.org/media/2008/undata-flowers.png" border="0" width="497" height="346" /></p>

# UN Make Large Amounts of Data Available

Data is being set free: the United Nations have started a new website called <a href="http://data.un.org/">UN Data</a> to share the data collected by a number of UN agencies. 55 million data records are waiting to be explored and visualized. The search interface is very nice and usable, but still lacks power.

In contrast to many other interfaces (most notably the horrible mess at the <a href="http://worldbank.org/data/">world bank</a>), their querying is quite good and implemented well. Views update without the need for a page reload, and the interface elements react to what is being displayed. The data can be sorted, filtered, and even pivot tables can be created. It is possible to download the data in four formats: a rather pointless and bloated XML (which just doesn't make sense for tables) and tabular with three different separators (comma, semicolon, or pipe).

I immediately thought, "this would be perfect in combination with <a href="http://www.gapminder.org/world/">Trendalyzer</a>!" - and sure enough, this was not done by the UN alone, but <a href="http://www.un.org/esa/desa/desaNews/v12n03/pubs.html#UNdata">together with gapminder</a>. I'm sure they will be incorporating this as a data source soon, which should be interesting.

What is missing? While filtering is nice, combining all the different data is where the true power would come in. It is not possible to add data dimensions to a table from a different source, which would make a lot of sense to do since most data sets share at least the country name and year. Comparing development to income, health to education, etc. is where the true value of such data lies. The folks at <a href="http://www.swivel.com/">Swivel</a> realized that more than a year ago and made it easy to combine data sets in almost any way imaginable. That is really needed here as well.

The other thing that is sorely lacking is programmatic access. There does not seem to be an API to enumerate the data sources and get to the actual data, which would be kind of an obvious thing to do. Web 2.0 has brought us APIs for <a href="http://www.flickr.com/services/api/">photographs</a>, <a href="http://code.google.com/apis/maps/">maps</a>, and <a href="http://www.wefeelfine.org/api.html">bloggers' feelings</a>, but not for the really relevant data like census or world health and development data.

It's a great start, and good to see this happen. Hopefully, more data sources and better data access will follow. Data indeed wants to be free.


_Posted by <a href="/about">Robert Kosara</a> on March 07, 2008_


<aside class="comments">

---
## Comments

<a href="http://tshwi.blogspot.com" rel="nofollow noopener" target="_blank">Lynn Marentette</a> says…
>	This is great news! 
>	
>	I'm looking forward to following what will happen next.
>	
>	Lynn

Chris says…
>	I think your link to the World Bank's data page might be off - it sent me to the Gapminder page.  As far as I know, the Bank isn't using Gapminder for its developmental data.  The main data portal that the Bank has is here: <a href="http://econ.worldbank.org">econ.worldbank.org</a>
>	

Robert Kosara says…
>	Sorry about the wrong link. It was supposed to go to worldbank.org/data/, but your link is the more general one.

<a href="http://photoblog.la-famille-schwarzer.de" rel="nofollow noopener" target="_blank">Stef</a> says…
>	Interesting thoughts. We've developed the UNEP GEO Data Portal which gives access in various ways to UN and other (selected) data, and allows to draw maps and graphs on-the-fly, too. Have a look, and let me know what you think... Thoughts, news ideas are almost welcome. 
>	
>	And yes, would be great to use Gapminder for the stats. But unfortunately it has been bought by Google and is not freely available as a tool to integrate into ones data portal...

</aside>

