---
title: "Debunking the Cent Smear"
description: "A story is making the rounds recently that the Obama campaign has received many contributions with \"odd\" amounts (i.e., not whole dollars), which is supposedly proof that Obama was being funded by foreign money. Here is a quick look at the data, which shows some interesting patterns, but no evidence of foreign intervention."
date: 2008-10-24 22:52:05
tags: Politics
featuredImage: https://media.eagereyes.org/media/2008/Obama-Cents-teaser.png
---

<p align="center"><img src="https://media.eagereyes.org/media/2008/Obama-Cents-teaser.png" alt="Obama Cents Teaser" width="410" height="165" border="0" /></p>


# Debunking the Cent Smear

A story is making the rounds recently that the Obama campaign has received many contributions with "odd" amounts (i.e., not whole dollars), which is supposedly proof that Obama was being funded by foreign money. Here is a quick look at the data, which shows some interesting patterns, but no evidence of foreign intervention.

The whole story is of course non-sensical: if people were really charging their foreign credit cards, they would still send whole dollar amounts, since amounts are always specified in the target currency. But the much stronger evidence that the argument is nonsense is in the following image (multiples of 10 are colored blue, multiples of 5 (which are not multiples of 10) are green. Of the more than two million contributions, almost 94% were whole numbers, so the 0 cents case is not shown below.

<p align="center"><img src="https://media.eagereyes.org/media/2008/Obama-Cents.png" alt="Fractional Amounts of Contributions" width="500" height="854" /></p>

As you can see, the distribution is very uneven (unlike what you would expect from the result of currency conversion). Multiples of five (and thus "round" cents) are much more common than values in between. The most common amount, though, is .95 – strange perhaps, but definitely done on purpose. The number .01 stands out (for the winner, presumably), and .08 quite obviously because of the year (I've read of people contributing $20.08 every month and the Obama Store also sells a lot of swag for that amount). "Odd" amounts in between are also explained by a list of <a href="http://www.swingstateproject.com/2006/03/zombie_myths_ne.html">cent "attributions" to a variety of blogs</a> – and by rounding (when you buy something and you round the amount up to some nice number, so the difference becomes a contribution).

Interestingly, McCain's data looks quite different. Of the roughly 400,000 contributions, less than 0.2% have fractional parts. The only strong pattern is at .50, most of the others seem rather random.

<p align="center"><img src="https://media.eagereyes.org/media/2008/McCain-Cents.png" alt="McCain Cents" width="500" height="863" border="0" /></p>

## Getting the Data

Finding this data was much more difficult than expected. The FEC publishes <a href="http://www.fec.gov/disclosure.shtml">campaign contribution data</a>, and it is possible to download their reports as a large file. It took me a lot of time to finally figure out their horrible COBOL-style file format and be sure (because I thought I was just missing something) that they were only reporting whole dollars. I had to get the actual filing data (at the very bottom of the <a href="http://www.fec.gov/finance/disclosure/ftp_download.shtml">FTP page</a>) and wade through another horrible format (which also changed over time) to finally get to the data. It is a mystery to me why they only report whole numbers, with the number of contributions, those cents add up.

Thanks to Robert Morton, who pointed me to <a href="http://www.fec.gov/DisclosureSearch/MapAppDownload.do?cand_id=P00000001&amp;cand_nm_title=All%20Candidates&amp;downloadComeFrom=mapApp&amp;tranComeFrom=mapApp&amp;tranType=">the right place</a> in a comment below. I have updated the charts with that data, which has changed the overall numbers a bit, but hasn't had an impact on the patterns.

## The Chart

The chart was made in Excel this time, because I had trouble getting Numbers to show me the right axis labels. I used the <a href="/blog/2008/popular-vs-electoral-votes-using-stacked-bar-charts.html">stacked bar chart idea</a> with three columns, two of which were zero in each row. This way, it was easy to get different colors for multiples of 5 and 10. If there is any interest, I can make the parsed data and the Excel file available.


<PostedBy />


<aside class="comments">

---
## Comments

<a href="http://www.christophercollins.ca" rel="nofollow noopener" target="_blank">Christopher Collins</a> says…
>	Interesting plots and amazing work digging out that data.  Neat trick using a stacked bar chart in this way -- very useful!  I know this was just a quick Excel attempt to show something, so take this with a grain of salt.  It's probably due to an automatic default in Excel, but I think the gray shadows on the colored bars make it look like a gray bar beside the colored bars.  An unfortunate coincidence of using gray for the non-multiple-of-five bars.

<a href="http://www.tableausoftware.com" rel="nofollow noopener" target="_blank">Robert Morton</a> says…
>	Hi Robert,
>	This is a cool analysis!  The FEC data is indeed in a strange COBOL format (esp. their handling of negative numbers!).  But they have a much better data set elsewhere on their site:
>	
>	<a href="http://www.fec.gov/DisclosureSearch/MapAppDownload.do?cand_id=P00000001&cand_nm_title=All%20Candidates&downloadComeFrom=mapApp">
>	http://www.fec.gov/DisclosureSearch/MapAppDownload.do?cand_id=P00000001&cand_nm_title=All%20Candidates&downloadComeFrom=mapApp</a>
>	
>	I hope this helps.
>	Robert Morton
>	Tableau Software

derek says…
>	As you say, the first thing I thought was blogs urging their readers to add NN cents to their contributions, so the bloggers can track how much effect their readers are having. 

<a href="http://flowingdata.com" rel="nofollow noopener" target="_blank">Nathan</a> says…
>	Wouldn't it just have been easier to get the finance data from the NY Times API (which is from the FEC, but actually accessible).

<a href="http://www.tableausoftware.com" rel="nofollow noopener" target="_blank">Robert Morton</a> says…
>	Hi Nathan,
>	The FEC link I posted above is probably simplest, since it's just a comma-delimited file that can be directly imported into Excel, Tableau, etc.  But the NYT API is pretty cool and I hope we see a proliferation of well-structured data on the web.

Robert Kosara says…
>	<p>I know about the NYTimes API, but they only do aggregates (and not the one I needed here). Otherwise, that would have been a good idea, no question.</p>

Robert Kosara says…
>	<p>That's a very useful link, thank you! Interestingly, there are very few McCain contributions with "odd" cents.</p>

Robert Kosara says…
>	<p>I almost wrote something about leaving the eye candy in because it didn't hurt. But I guess you're right, I'll remove that.</p>

</aside>

