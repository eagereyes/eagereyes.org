<p align="center"><img src="https://media.eagereyes.org/media/2008/gladiator.jpg" border="0" alt="Gladiators" /></p>

# The Sad State of the InfoVis Contest

In some fields, contests drive research and the entire field forward. Those contests are prestigious, and people list the fact that they won the contest in their CVs. In InfoVis, the contest is trying to appeal to researchers, but is getting little attention. What should the role of the contest be? And how can we make it more interesting?

I've been one of the InfoVis contest co-chairs for two years, and I wanted to make it more appealing by learning from past mistakes. My main point of reference was the <a href="http://sun.cs.lsus.edu/iv06/">US census data</a> that had been used in 2006. The data was in huge, fixed-width ASCII files that were difficult to parse. The encoding of values was explained in a large PDF, and needed to be extracted by hand. That year, the contest only got a handful of submissions, and I could understand why.

So for the <a href="/blog/2007/infovis-contest-2007-data">IMDB movie data set last year</a>, I wrote a parser and Java classes so people could get started more quickly. There was also a way to connect the data to the <a href="http://www.netflixprize.com/">Netflix prize data</a>, which had to be downloaded separately. While we did get a nice number of submissions, nobody made use of the Netflix data.

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

But relevant data may not be the sexiest. I also feel that many people like toy data sets of one kind or another because they don't have to deal with results that might have implications other than what movie genres are more popular. InfoVis seems to be entirely opposed to political statements, even if grounded in sound data and visualization. And I think that's a <a href="/blog/2008/visual-display-of-relevant-information">big problem in making InfoVis relevant</a>.

## Quo Vadis, InfoVis Contest?

So where do we go from here? Unless our plans change, the data for next year will have something for everybody. It's large but can be broken down into smaller pieces in a logical way, it has a temporal component, and it can be seen as a network or multi-dimensional data (or both). It is also something everybody should be able to relate to, and it will be available at the conference.

This could be a good way to get a lot of submissions to then turn up the heat the year after with a more difficult data set. We'll see if that works.
