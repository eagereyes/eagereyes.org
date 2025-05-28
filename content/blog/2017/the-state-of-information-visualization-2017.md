# The State of Information Visualization, 2017

Between <em>Surprise Maps</em>, <em>Dear Data</em>, and election graphics, 2016 was an exciting year. There have also been some gaps, however, notably around storytelling. How far have we come, and where is visualization going?

<p align="center"><img class="aligncenter size-full wp-image-9929" src="https://media.eagereyes.org/wp-content/uploads/2017/01/nytimes-gauges-cropped.png" alt="" width="1320" height="328" /></p>

## Visualizing Uncertainty

Elections always bring large numbers of visualizations with them, and last year’s U.S. Presidential election was no exception. There is a lot to be said about the various visualizations that were used (<a href="/blog/2016/all-those-misleading-election-maps">I’m no fan of choropleths</a>). But one in particular stood out: <a href="http://www.nytimes.com/elections/forecast/president">the New York Times’ jittery gauges</a>.

A lot of scorn and ridicule has been heaped on this design, but the situation is more complicated than it is often depicted. The idea of motion to show distributions and uncertainty has been studied in <a href="http://idl.cs.washington.edu/papers/hops/">a paper by Jessica Hullman and others</a> (<a href="https://medium.com/hci-design-at-uw/hypothetical-outcomes-plots-experiencing-the-uncertain-b9ea60d7c740">this blog post nicely summarizes the ideas</a>) and found to work well. <a href="http://vis4.net/blog/posts/jittery-gauges-election-forecast/">The design was certainly well considered</a>, but it’s always easy to criticize these things after the fact.

However, the severity of the situation, the high confidence before election night, and the unfamiliar way of showing the data all ended up causing a lot of stress in a lot of people. I think it's important to note that this wasn’t just a problem of the visual representation, but also of the expectations that had been set by the forecasts. Things wouldn’t have been nearly as bad if we hadn't been led to believe that this was pretty much a done deal for Clinton.

Communicating uncertainty is extremely difficult, even when your audience understands the concept. Doing this for a general audience is close to impossible. <a href="http://graphics.cs.wisc.edu/Vis/ErrorBars/">Many things have been tried</a>, some have turned out better than others. Uncertainty is everywhere and needs to be shown in forecasts, estimates like the unemployment rate, etc. Too many of these numbers are still presented as certain, precise facts, when they’re not.

That this is a problem is not a secret. However, most existing ways of showing uncertainty are too difficult to understand for people without a statistics background, or don’t work well for things like timelines. A lot of work is clearly needed here. This is not an easy area to work in when doing academic research, but there’s clearly enormous potential to do good work.

Interestingly, this is a topic that has been recognized by both the data journalism and the intelligence (read: three-letter agencies) communities. I’m aware of efforts in both to bring together ideas and work on new solutions. At least the ideas developed in the former should show up for the next election, if not sooner.

<p align="center"><img class="aligncenter size-full wp-image-9510" src="https://media.eagereyes.org/wp-content/uploads/2016/09/dear-data-book-teaser.jpg" alt="" width="1364" height="843" /></p>

## Sketching and Personal Data

I mentioned <em><a href="http://www.dear-data.com">Dear Data</a></em> in <a href="/blog/2016/the-state-of-information-visualization-2016">last year's <em>State of InfoVis</em></a>, because I thought it was a great project – but I didn’t think it would explode into the huge success that it has become (including <a href="/blog/2016/review-lupi-posavec-dear-data">a very nice book</a>, the <a href="https://medium.com/@giorgialupi/dear-data-has-been-acquired-by-moma-but-this-isnt-what-we-are-most-excited-about-bdaa3376d9db">postcards being acquired by MoMA</a>, etc.). It has also inspired a number of other projects, like the knock-off <em><a href="http://www.dear-data-two.com">Dear Data 2</a></em>, the somewhat more thoughtful <em><a title="Data Sketches" href="http://www.datasketch.es/">Data Sketches</a></em>, and I’m sure it inspired <a href="/blog/2016/rj-andrews-profiling-the-parks">RJ Andrews’ <em>Profiling the Parks</em></a>. Sketching has also <a href="http://research.jagoda.ca/selected-work/data-sketches">been explored in visualization research</a> a little bit in the past.

Drawing data with colored pencils or crayons is a good gateway drug to getting people interested in visualization. And it’s a good exercise to get your brain juices flowing, even – or maybe especially –  if you’ve been doing visualization for a while. Give people a few numbers and 20 minutes of uninterrupted time, and it’s amazing how many different things they come up with.

Apart from the sketching, the other interesting aspect of <em>Dear Data</em> is that the underlying data is all collected by hand, and rather unusual (like the number times you've smiled at somebody, the kinds of smells you've experienced, etc.). It’s this sort of personally relevant data that we often ignore in visualization, because it’s hard to get to and difficult to handle. It is important, however, for people who might not be interested if all they see are boring and irrelevant standard datasets. After seeing <a href="https://vimeo.com/181697718">Catherine D’Ignazio talk about this at Information+</a>, I’m starting to understand how important this issue is.

Bringing more creativity into visualization is a good thing, and I hope that we’ll see more of this sort of work, inside and outside of the academic vis community.

## Smarter Visualization With Statistics

Apart from uncertainty, an area that visualization still struggles with is to show what is actually important. Just displaying data is one thing, but are any of those patterns we’re seeing unexpected or interesting? <a href="https://medium.com/@uwdata/surprise-maps-showing-the-unexpected-e92b67398865">The <em>Surprise Maps</em> paper</a> at VIS last year presented a very interesting approach to the problem that (almost) every map is <a href="https://xkcd.com/1138/">really just a population map</a>.

The idea of asking, <em>what do we expect and how is the data different?</em> is very powerful. It’s kind of embarrassing that we haven’t been doing this all along in visualization. My statistics colleagues were quite unimpressed by this paper, but it’s a big step for visualization. I really hope to see much more of this kind of thinking in visualization going forward, to the point where it becomes an inherent part of how we work and think.

## Storytelling

After a couple years with a lot of activity, this last year has seen a real lull in interesting storytelling work. And it’s not even limited to academia, journalism also seems to have cut back on elaborate storytelling projects.

There are still some out there, no question. But there seems to have been a bit of a reckoning with news media realizing that the effort put into those projects isn’t always worth it. Two talks by journalists, <a href="https://github.com/archietse/malofiej-2016/blob/master/tse-malofiej-2016-slides.pdf">Archie Tse at Malofiej</a> and <a href="https://vimeo.com/182590214">Gregor Aisch at Information+</a> spelled that out in no uncertain terms.

On the academic side, I’m seeing a lot of people write surveys and retreading the same old ground, without making any interesting progress. This could be a sign that this thing has either run its course, or that we’re past the first wave of easy stuff and now need to get more serious.

I’m thinking that we’re just taking a breather after the first step. There are many interesting questions that we’re nowhere near answering. We need to figure out what we want to achieve with storytelling in visualization, how to think about developing and testing new ideas, etc.

While I’m not aware of many specific projects by others, I’m involved in a paper that is currently under review and will hopefully see the light of day soon. There’s also more stuff I’m working on, some of which I hope to get out this year. And, as every year since 2013, I'm one of the organizers of the <em><a href="http://tapestryconference.com">Tapestry Conference on Storytelling</a></em> in early March that promises to be quite interesting again.

## A New Wave of Theory

Predicting the future gets a lot easier when you’ve gotten a peek behind the curtain to see what people are working on there. And from that, I feel confident in saying that we’ll be seeing a new wave of theoretical work in visualization in the next few years.

I’m aware of some very interesting experiments and ideas that should change the way we think about visualization quite a bit. It’s kind of funny to think that we thought we had theory figured out in the 1980s with Bertin, Mackinlay, Cleveland&amp;McGill, and a few others. And it’s a good thing we don’t, or this would all be too easy.

I can’t talk about specifics here, but things are about to get a lot more interesting. We’ll need to get a bit smarter about understanding and modeling than we currently are. And we need to embrace uncertainty around what we know a lot more – not ignore, but understand it and deal with it. But the reward is that this could open up the field to a lot of new things that we haven't thought of yet.

<p align="center"><img class="aligncenter size-full wp-image-9552" src="https://media.eagereyes.org/wp-content/uploads/2016/09/pie-charts-featured.jpg" alt="" width="1600" height="1000" /></p>

## Pies and eagereyes

I spent a surprisingly large part of last year thinking about <a href="/tag/pie-charts">pie charts</a>. I’m glad I did. There’s a lot more to them than most people think, and they’re a good model for how <a href="/papers/an-empire-built-on-sand">we need to ask more questions about our basic assumptions</a> in visualization.

Drew Skau and I <a href="/papers/a-pair-of-pie-chart-papers">presented two papers at EuroVis</a>, I did a bit more work for <a href="/blog/2016/an-illustrated-tour-of-the-pie-chart-study-results">a better presentation of our results</a>, dug up <a href="/blog/2016/ye-olde-pie-chart-debate">some old papers on the topic</a>, and turned the whole mess into <a href="/talk/pie-charts-unloved-unstudied-and-misunderstood">a pretty decent talk for Information+</a> (there were also <a href="/blog/2016/ten-great-talks-at-information-2016">some other great talks at Information+</a>, BTW). And this isn't even the end of it, there's more stuff coming at some point.

This site also <a href="/blog/2016/blogstravaganza">turned 10 last year</a>, which I took as a cue for some reflection and to finally get <a href="/blog/2016/meet-the-new-logo-and-theme">a decent theme and logo</a>.

Despite my initial hesitance when I sat down to write this posting, 2016 was quite the year for visualization. Exciting things are happening, and I look forward to where this field is going in 2017 and beyond.

<hr />

You can read <a href="/tag/state-of-infovis">all previous <em>State of InfoVis</em> postings here</a>.
