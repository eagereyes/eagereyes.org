---
title: "A Browser for Data.gov"
description: "Data.gov's selection of data is slowly growing, but even with less than 300 datasets, it is difficult to keep an overview of what is there. Below is a little Java applet that provides a way to drill down into data.gov's catalog using a variety of categories: reporting agency, geographic coverage, frequency, data type, etc. Besides giving a better idea what is there, it also shows a number of inconsistencies that make finding data more difficult."
date: 2009-06-15 07:53:27
tags: data
featuredImage: https://media.eagereyes.org/media/2009/data-gov-explorer-teaser.png
outline: false
---

# A Browser for Data.gov

<p align="center"><img src="https://media.eagereyes.org/media/2009/data-gov-explorer-teaser.png" border="0" alt="An Explorer for Data.gov" width="540" height="293" /></p>

<a href="http://www.data.gov/">Data.gov</a>'s selection of data is slowly growing, but even with less than 300 datasets, it is difficult to keep an overview of what is there. Below is a little Java applet that provides a way to drill down into data.gov's catalog using a variety of categories: reporting agency, geographic coverage, frequency, data type, etc. Besides giving a better idea what is there, it also shows a number of inconsistencies that make finding data more difficult.

The applet is represented by the little box below, which might be white or dark gray, depending on your browser and operating system. Once it says "Done," it has downloaded the catalog and you can open the actual browser by clicking on the button.

_Applet no longer available_

That opens a window with four lists: the first three are filters, while the last one shows the datasets that have been selected. The choice box at the top of each filter picks the dimension by which to filter (such as agency, frequency, etc.), and then displays all the possible values in that dimension. You can select any number of categories in the list, and then refine your selection in the next filter. If you don't need a filter, set its dimension to "&lt;None&gt;"

The detail panel shows the list of datasets that are in the intersection of all the categories you picked. Double-clicking a dataset name will take you to its data.gov page &ndash;&nbsp;unless your pop-up blocker gets in the way. If that happens, click in the checkbox below the list to get a list of URLs that you can copy.

The lists have a "scent," i.e., they tell you how many items are in each category, and they adapt when the selection changes. The drop-down lists tell you how many categories are in each dimension.

For technical reasons, the data is cached on my server (because an applet can only connect to the server it comes from). The benefit is that I'm compressing the data, which reduces download time to about 1/10th. The data is currently only updated every four hours, so there is a slight delay in changes. Should the frequency of updates increase, I might cut that down to one hour.

The data has been cleaned slightly to make it a bit easier to use in the lists. The program removes&nbsp;leading and trailing whitespace, and ignores case in comparison. It's fascinating how many ways you can write "annual," and that's not even counting variations like "updated annually."

Even with that, there are still a lot of obvious problems. The geographic coverage dimension reads almost like a thesaurus: there's <em>Continental United States</em>, <em>Continental US</em>, <em>Conterminous US</em>, and <em>Coterminous US</em>, and then there are another eight or so ways to describe the entire US, or the US plus its possessions.

Update: Interestingly, they seem to have updated the categories. There are no more contiguous US categories, and only three "entire US" ones. The frequency dimension is also reduced from 30 or so to only a few.

While I believe that it was a good idea to get the site off the ground (and <a href="/data/dish-best-served-raw.html">make some raw data available</a>) rather than spend years to come up with the perfect taxonomy, this little experiment shows what happens when data from different sources is simply put into one place without too much though. If data.gov is really going to grow like expected (there were supposed to be 100,000 datasets there by the end of last week), this will become an ever bigger problem. The search and very limited browsing on the site will likely become entirely useless.


_Posted by <a href="/about">Robert Kosara</a> on June 15, 2009_


<aside class="comments">

---
## Comments

<a href="http://blog.semanticvoid.com" rel="nofollow noopener" target="_blank">semanticvoid</a> says…
>	<p>the applet fails to load.</p>

Robert Kosara says…
>	<p>Odd, it was showing correctly on my machine. It's fixed now, please try again.</p>

<a href="http://www.ithoughts.de" rel="nofollow noopener" target="_blank">ithoughts.de</a> says…
>	<p>It worked here ...</p>

Robert Kosara says…
>	<p>There was an odd caching issue in Safari - it cached the jar file from testing on a different page, even though the relative path wasn't working anymore. But it definitely should work now.</p>

Robert Morton says…
>	<p>Hi Robert,</p>
>	<p>Cool applet, thanks for sharing!&nbsp; I've posted <a href="http://www.tableausoftware.com/files/DataGov%20browser.twbx">a Tableau workbook I built</a> for browsing Data.gov for files that work well with Tableau (at this point only .csv/.xls).&nbsp; It was most recently updated on 6/15/2009, so it will need occasional refreshes from the latest metadata.</p>
>	<p>-Robert</p>

</aside>

