---
title: "The Sad State of the InfoVis Contest"
description: "In some fields, contests drive research and the entire field forward. Those contests are prestigious, and people list the fact that they won the contest in their CVs. In InfoVis, the contest is trying to appeal to researchers, but is getting little attention. What should the role of the contest be? And how can we make it more interesting?"
date: 2008-09-01T18:09:16.000Z
tags: 
---

# The Sad State of the InfoVis Contest

<img src="http://eagereyes.org/media/2008/gladiator.jpg" border="0" alt="Gladiators" />

In some fields, contests drive research and the entire field forward. Those contests are prestigious, and people list the fact that they won the contest in their CVs. In InfoVis, the contest is trying to appeal to researchers, but is getting little attention. What should the role of the contest be? And how can we make it more interesting?

I've been one of the InfoVis contest co-chairs for two years, and I wanted to make it more appealing by learning from past mistakes. My main point of reference was the <a href="http://sun.cs.lsus.edu/iv06/">US census data</a> that had been used in 2006. The data was in huge, fixed-width ASCII files that were difficult to parse. The encoding of values was explained in a large PDF, and needed to be extracted by hand. That year, the contest only got a handful of submissions, and I could understand why.

So for the <a href="http://eagereyes.org/InfoVisContest2007Data.html">IMDB movie data set last year</a>, I wrote a parser and Java classes so people could get started more quickly. There was also a way to connect the data to the <a href="http://www.netflixprize.com/">Netflix prize data</a>, which had to be downloaded separately. While we did get a nice number of submissions, nobody made use of the Netflix data.

## Challenge or Exercise?

The fundamental question is what the role of the contest should be. Is it about challenging people to work with data and application domains they would not otherwise have seen? Or is it about exercising our existing tools? I'm not saying that the latter is necessarily a bad thing if done right (i.e., if we learn new things about our own tools in the process), but the former is clearly the more interesting role.

What should be provided? Is the data alone enough or do we need to provide parsers, converters, etc.? There is no widely-used standard for data files other than CSV and none for metadata. What languages should we provide parsers for? I did not hear any complaints about the Java classes for the movie data, but that doesn't mean everybody is using Java.

So this year, we got the offer from Yuri Ivanov and Chris Wren of MERL to use their <a href="http://www.merl.com/wmd/infovis.html">tracking sensor data</a>. This data had been used in last year's Best Paper at InfoVis. And in terms of the data format, it seemed simple enough that we didn't think it would make much sense to provide parsers and/or classes. The response has been rather disappointing. I won't discuss details here, we will present the results at the InfoVis conference in October. But I had expected more.

The tracking data was of course very different than most InfoVis data: not multi-dimensional, strongly time-oriented, semi-structured (through tracklets). But that was exactly the point! We wanted people to think about what to do with that kind of data. Think outside the box! Do something new! Figure out how to squeeze that data into your existing tools, if necessary.

## Incentives

We discussed setting up sensors at the conference and then having a live component of the contest where contestants would use their tools to find patterns in data that had just been collected. A quick survey of people who had downloaded the data did not yield enough response for us to go through with that, though.

So I wonder if it's a question of incentives. These following ideas are mine and are by no means agreed upon by anybody who can make these decisions, so don't assume that this will be the way the contest does things in the future. But I think one way to get more responses is to publish the winning contest entry as a paper in the conference proceedings (and thus, the TVCG journal). Or perhaps an extended version of the 2-page entry could be invited for a later journal issue, since submitting the contest contribution, getting it accepted, writing an extended version, and getting that reviewed and accepted won't work with anything resembling the current structure of deadlines. And having the contest compete with conference papers by having a deadline that is very close is probably a bad idea.

The Vis contest has had prizes like graphics cards to give away. I don't know if that is really a big enough incentive, and also what could be fitting for InfoVis. But it could be a way to give the second- and third-placed something for their efforts.

## Timing and Significance

One goal that we did not meet up to now is to have the next year's data available at the conference. I realize that we have been fairly late with the contest data, though at least last year that did not seem to be a huge problem. But clearly, having the data available right there and then is the way to go. And this year, we will be able to do that.

Another question is finding data that people can relate to and that has some significance. The movie data sparked people's interest, but I felt bad about it being more popular than the census data. Undoubtedly, the census data had much more potential for us to learn something about the social structure of the US and perhaps even to find interesting new connections between say, poverty and the mix of ethnicities in different regions (or something a bit less obvious).

But relevant data may not be the sexiest. I also feel that many people like toy data sets of one kind or another because they don't have to deal with results that might have implications other than what movie genres are more popular. InfoVis seems to be entirely opposed to political statements, even if grounded in sound data and visualization. And I think that's a <a href="http://eagereyes.org/communication/Visual-Display-of-Relevant-Information.html">big problem in making InfoVis relevant</a>.

## Quo Vadis, InfoVis Contest?

So where do we go from here? Unless our plans change, the data for next year will have something for everybody. It's large but can be broken down into smaller pieces in a logical way, it has a temporal component, and it can be seen as a network or multi-dimensional data (or both). It is also something everybody should be able to relate to, and it will be available at the conference.

This could be a good way to get a lot of submissions to then turn up the heat the year after with a more difficult data set. We'll see if that works.


---
## Comments

Ian Turton says…
>	I suspect the problem in recent years has been that some groups have been split by trying to compete in the VAST contest as well as the Info-Vis contest. There really is no way to do a good job of entering both competitions unless info-vis was to release it's data much earlier in the year, then it might be possible.
>	
>	Ian

Robert Kosara says…
>	What's a good time to release the data? Is the conference early enough? As I said above, we're going to do that this year.

<a href="http://had.co.nz" rel="nofollow noopener" target="_blank">Hadley Wickham</a> says…
>	You might want to draw some inspiration from the long-running American Statistical Association Data Expo competitions, http://stat-computing.org/dataexpo/.  These have been running every 2-3 years (or thereabouts) since 1983.  Some of the things that we do to encourage entries include organising a special journal issue for the top papers and giving generous prizes (e.g. $1000 for first place).  This year the challenge is to analyse, summarise and visualise airline on-time performance data for the last 20 years - http://stat-computing.org/dataexpo/2009/.  The data set is large (120 million records, 11 gig of data) but the website provides some support to get up and running, including shell scripts to filter and sort the data, some code to load the data into an sql database linked to R (the lingua franca of statistics).  So far this seems to be successful in encouraging people with a wide range of skills to take part.
>	
>	As someone who has entered the infovis challenge in the past, one of the reasons that we didn't enter this year is because the data is so low level.  It seemed like too much effort to get the data into a format that was actually interesting - say, time series of spatial locations for individuals.  The data is also rather specific and not very interesting to me - I'd rather analyse data that has some bearing on my everyday life.  As a statistics group, we have also been rather put off by the emphasis on developing flashy single use applications, rather than trying to fully understand the data or reusing existing tools in imaginative ways.
>	

Petra Isenberg says…
>	I have followed the infovis contest closely since its beginning and I have wanted to submit to but I have never done so for a couple of reasons.<br>
>	First of all, as a grad student, I can relate very much to the point you're making about incentives. It seems that I would get little credit for participation in the contest. There is no real publication of it and the website is in a pretty obscure place (actually, it seems that there isn't even a common site anymore) so it can't even be referred to. I liked the initial idea of the contest - you could enter your solution in a repository of solutions of the particular dataset - even if you reused the dataset years later, but that seems to have been dropped (why?). However, even back then the website, wasn't ever too visible. <br>
>	Secondly, I have had some issues with the past datasets as well. The Census dataset did miss some parsers or at least a released parsed subset of it to work from. The data was not uninteresting but it was huge and for a submission that would often only be a side project (thesis work usually has to come first),  spending days on learning and parsing the data is not justifiable (I acknowledge that with the proper tools someone could have done the parsing quickly but I do believe it wasn't obvious to everyone and has lowerered submissions). I think you did a good job with the movie dataset. This year's dataset to me wasn't as appealing because the work already seems to have a good solution that was well researched and presented in last year's best paper. I know there are always other interesting ways to do it differently but it is just way more appealing to work on problems that at least don't have a very recent solution presented.<br>
>	What I really liked about the first infovis contest (2003) is that it had sub challenges (e.g. tree comparison, show the temporal history, etc.). The goal of the current challenge is pretty vague although I like the idea that you don't have to solve a particular set of tasks for a submission. If the research <strong>challenges</strong> would be more clearly pointed out that may make the contest also more appealing (e.g. visualizing uncertainty, ...).<br>
>	Lastly, I can second the comments that said that the contest was released too late. As a TA for an infovis course I would have liked to give people at least a subset of the data as a challenge. Entering a contest with a course project could be a great incentive for students. However, if the contest isn't released by the start of a particular semester (either September or January) then it cannot be used as a course project. 


