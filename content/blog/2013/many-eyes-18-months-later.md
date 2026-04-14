In February of last year, I wrote [a posting based on some data I had scraped from Many Eyes](/criticism/quo-vadis-many-eyes), and criticizing where I thought it was going (or not going). Here is an update, eighteen months later, of some of the things that have happened in the meantime, and some new data.

My interest in Many Eyes is not new. [I’ve followed them from the very beginning](/criticism/swivel-vs-many-eyes), and I keep watching them because they were the pioneers of social, web-based visualization. But after the initial excitement and interesting work, there was a period of four years or so when nothing happened. I will not rehash the [points from my previous posting](/criticism/quo-vadis-many-eyes), but some of them will come up below when I talk about what has changed, and what hasn’t.

## What Has Changed

There are clear signs of life over at Many Eyes. For one, the site is under new management. While I don't know who actually runs it now, some of the people associated with it earlier have left IBM or are in different projects. The [list of *Data Visualization Luminaries*](http://www-01.ibm.com/software/analytics/many-eyes/luminaries.html) involved in the project includes Frank van Ham (an alumnus of the initial Many Eyes team and a serious force in visualization), Alan Keahey (who wrote a seminal paper on the generalized detail-in-context problem), Graham Willis (worked on SPSS), and Noah Iliinsky (co-edited the *Beautiful Visualization* book with Julie Steele).

That addresses my criticism from last year about the lacking visualization chops in the group. The [luminaries’ articles](http://www-958.ibm.com/software/analytics/labs/manyeyes/#articles) are a bit hit and miss, though, from the [insightful and interesting](http://www-958.ibm.com/software/analytics/labs/manyeyes/#article=200002) to the [sloppy and silly](http://www-958.ibm.com/software/analytics/labs/manyeyes/#article=200055).

Another thing I criticized last year was Many Eyes’ ridiculous URL. That hasn’t changed much, it has gone from

> http://www–958.ibm.com/software/data/cognos/manyeyes/

to

> http://www–958.ibm.com/software/analytics/manyeyes/

In addition to the old `many-eyes.com` domain, there's also now `manyeyes.com`. Unfortunately, that only solves part of the problem, because it redirects to:

> http://manyeyes.com/software/analytics/manyeyes/

That’s progress, I guess. Apparently, the plan is to eventually have the site live at `http://ibm.com/manyeyes`.

The biggest change is that they are actively and publicly working on Many Eyes again, though. Their *Rapidly Adaptive Visualization Engine* (RAVE) was presented in an industry talk at last year’s VisWeek, and it regularly comes up in the Many Eyes postings.

There is also a highly confusing [Many Eyes v2 preview site](http://www-958.ibm.com/software/analytics/labs/manyeyes/) that doesn’t seem to do much that is different. The visualizations in the showcase still use the old Flash and Java applets (RAVE will produce HTML5), even when you create new visualizations with their new workflow. That workflow is nice, but it doesn’t seem to actually produce a working visualization at this point (it’s stuck in the *Finalizing…* step when I try it).

They’ve also missed a few deadlines. There was a semi-official date of March for the new site, but the preview didn’t even come online until May or so. But signs are clearly pointing in the right direction, and it will be exciting to see the new, improved site when it finally lands.

## Data

Below is an update of the data I published in February 2012. The first chart is a simple extension of the one I showed last year, with the number of visualizations created per week.

<figure><img src="https://media.eagereyes.org/wp-content/uploads/2013/09/visualizations-per-week.png" width="599" height="399"/></figure>

It is interesting to note the precipitous drop in early May 2012. The number of new visualizations created dropped from around 1,000 per week to around 500. It later recovered a bit, but then started to drop again, though more slowly.

Last year, I wrote:

> It looks like the site is at a plateau, or close to it, and will likely have fewer new visualizations and datasets in 2012 than it did in 2011.

Was I right? Of course I was, would I mention it if I wasn’t? Here is the number of visualizations per year.

<figure><img src="https://media.eagereyes.org/wp-content/uploads/2013/09/visualizations-per-year.png" width="599" height="399"/></figure>

2012 had about 3,300 fewer visualizations posted than 2011, for a decline of almost 10%. Does the trend continue, or is it a fluke? Let’s look at just the first eight months of each year, so we can add 2013 to the comparison.

<figure><img src="https://media.eagereyes.org/wp-content/uploads/2013/09/new-through-august.png" width="599" height="399"/></figure>

That is more than a 25% decline compared to last year, and almost 30% from the peak in 2011. If the new version of Many Eyes isn’t released before the end of the year, 2013 will likely end up with fewer new visualizations than 2010.

Bizarrely, the number of datasets kept increasing and was actually a bit higher in 2012 than 2011. Looking at only January through August again, we can see that the number is about 15% lower this year, though.

<figure><img src="https://media.eagereyes.org/wp-content/uploads/2013/09/datasets-through-august.png" width="599" height="399"/></figure>

It is a mystery to me why the number of datasets per visualization keeps increasing. At the beginning of last year, there were about 2.7 datasets per visualization; last month, there were over 3.5. Data upload issues don’t really explain this, because those would not change over time.

## Response to Last Year’s Posting

I got some interesting responses to my posting last year, some of them angry, some of them less so (and many of them not in the public comments). I clearly asked for the angry ones with the tone of the posting, in particular from people working on the project at the time, or folks who had worked on it and felt that I was unfairly criticizing their work.

But I also got a lot of agreement from people who knew the group or the project. While I got a few details wrong (like Adam Perer’s role in Many Eyes), I was right with my overall assessment, and I know that even some of the people close to the project were surprised by the data.

The timing of Many Eyes’ second incarnation is also interesting. [Frank’s comment on my posting](/criticism/quo-vadis-many-eyes) talked about the project mostly in the past tense, with no indication of current plans or even a “keep watching” or “maybe.” By October, they had concrete plans and a release date. Three of their five visualization luminaries have also been hired within the last year: Noah Iliinsky, Alan Keahey (both December 2012), and Angela Shen-Hsieh (earlier this year).

## Tableau Public

I was also attacked last year for writing my posting while on Sabbatical at Tableau Software (also, using Tableau Public for the charts probably rubbed a few people the wrong way, but that was mostly done out of convenience). Now that I am a full-time employee at Tableau, why don’t I publish the same data about Tableau’s Many Eyes competitor, [Tableau Public](http://www.tableausoftware.com/public/community)?

I’m so glad you asked! We had a paper submission at InfoVis earlier this year, which was unfortunately rejected. The paper is now under review elsewhere and I will post a note here once it is published. The paper draws a detailed comparison between Tableau Public and Many Eyes, based on the data I’ve collected and what we have available for Tableau Public.
