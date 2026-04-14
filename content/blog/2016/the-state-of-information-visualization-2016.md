Oh hello, new year! I almost didn't see you there! Lots of interesting things happened last year: *Dear Data*, deceptive visualization, storytelling research, new tools and ideas, etc. And this year is already shaping up to be quite strong, too.

## Dear Data

Perhaps the most exciting project of 2015 was *[Dear Data](http://www.dear-data.com/)* by Giorgia Lupi and Stefanie Posavec. They are both designers, and they decided to collect data and send each other postcards with hand-drawn visualizations based on that every week. The topic is also a different one every week, and they're often very personal. It's a unique and very different project, with a lot of creativity in the ways data is displayed.

Somewhat related, there was a great paper at EuroVis last year on [data sketching](http://innovis.cpsc.ucalgary.ca/supplemental/Data-Sketching/), drawing data by hand. Tools are clearly helpful when dealing with data, but they also tend to shape the things people do with them – they make some things easier than others, and obviously always have limitations. Sketching allows for more thinking outside the box and more creativity.

## Peeking Outside Academic Vis

Academic visualization research can be trapped inside a bubble and not deal with issues people actually encounter out in the world. That is why I really liked [the work on deceptive visualizations](http://fellinlovewithdata.com/research/deceptive-visualizations). It put some science behind issues that some people are aware of, but that so far have mostly been based on assumptions and hearsay. Do cropped bars mislead? Does inverting an axis make a difference? Is aspect ratio important?

The point was not so much that the results were surprising (for the most part, they weren't), but that these things were actually tested rather than just stated as fact. It still amazes me how many things we simply take for granted in visualization without questioning them – and when we finally do, we find that they're not based on actual research.

Along similar lines, Drew Skau and I [looked at bar chart embellishments](/papers/evaluation-of-the-impact-of-visual-embellishments-in-bar-charts) common in infographics and found that some of them aren't that problematic – though some clearly are. Again, the point here being actual science rather than just assumptions.

## The Birth and Death of Tools

One of the big issues in data visualization is cleaning data and wrangling it into a shape that can then be used in a visualization tool. [Trifacta Wrangler](/blog/2015/trifacta-wrangler-for-cleaning-and-reshaping-data) is a great tool for that, and it's free to use (with some size limitations, though they're quite generous).

I recently heard somebody describe his work as "Living in the Hadleyverse" – a reference to Hadley Wickham and his untiring efforts to create better tools for both data analysis and visualization in R. Between [ggplot](http://ggplot2.org), [dplyr](http://blog.rstudio.org/2014/01/17/introducing-dplyr/), and the up-and-coming [ggvis](http://ggvis.rstudio.com), R is getting very powerful support to deal with large datasets, talk directly to databases, and create interactive visualizations for the web.

Sadly, last year also saw the death of *Many Eyes*. While not exactly a surprise after years of neglect, it did mean the end of the first really successful and widely used web-based visualization platforms. Many Eyes was not just a collection of tools, they were also ambitious about doing research and pushing the envelope on things like text visualization and figuring out user preferences. Alas, IBM did not seem to see the value and finally folded the project into [Watson Analytics](http://www.ibm.com/analytics/watson-analytics/) late last year.

In the process, they did release *[Brunel](http://brunelvis.org)*, a language for creating visualizations on the web based on the Grammar of Graphics. This had originally been developed as the new technology to power Many Eyes, under the name *RAVE*. I'm not sure if Brunel has any chance of catching on, given the popularity of D3. But it appears to be an interesting piece of technology.

## Storytelling Research

I'm actually writing this while attending a seminar on *Data-Driven Storytelling* at [Schloss Dagstuhl](/blog/2013/schloss-dagstuhl). There are 40 people here, with a good number of journalists and designers mixed into the usual group of academics. That such a seminar can happen is a sign that storytelling in visualization is here to stay.

This isn't quite reflected in the papers at [IEEE VIS](/tag/ieeevis) or [EuroVis](/blog/2015/report-eurovis-2015) yet, but I expect that to change this year. Oddly, [the conference that had an entire session on storytelling](/blog/2015/conference-report-chi-2015) last year was CHI – even though that is not a core visualization conference. The entire visualization track there was pretty strong.

I was one of the authors of [the paper on ISOTYPE at CHI](/papers/isotype-visualization), and also the [almost-published one on the connected scatterplot](/papers/the-connected-scatterplot-for-presenting-paired-time-series). I also wrote about [presentation-oriented visualization techniques](/papers/presentation-oriented-visualization-techniques).

## The Year Ahead

On the academic side, I expect to see a lot more work storytelling at the conferences, hopefully enough to finally get entire sessions. There is a lot of energy here at Dagstuhl right now, and many topics and issues to tackle. My hope is also that we can involve practitioners in this work more than we usually do.

A big driver of data visualization in the news will be the elections in the U.S. in November. There will be polls, predictions, lots of data-centric news stories, and just generally a fever pitch of data presentation. Exciting times!
