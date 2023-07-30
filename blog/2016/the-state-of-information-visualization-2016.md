---
title: "The State of Information Visualization, 2016"
description: "Oh hello, new year! I almost didn't see you there! Lots of interesting things happened last year: Dear Data, deceptive visualization, storytelling research, new tools and ideas, etc. And this year is already shaping up to be quite strong, too."
date: 2016-02-08 14:05:20
tags: state-of-infovis
featuredImage: https://media.eagereyes.org/wp-content/uploads/2016/02/dear-data.jpg
---

<p><img src="https://media.eagereyes.org/wp-content/uploads/2016/02/dear-data.jpg" width="825" height="510" /></p>

# The State of Information Visualization, 2016

Oh hello, new year! I almost didn't see you there! Lots of interesting things happened last year: <em>Dear Data</em>, deceptive visualization, storytelling research, new tools and ideas, etc. And this year is already shaping up to be quite strong, too.

## Dear Data

Perhaps the most exciting project of 2015 was <em><a href="http://www.dear-data.com/">Dear Data</a></em> by Giorgia Lupi and Stefanie Posavec. They are both designers, and they decided to collect data and send each other postcards with hand-drawn visualizations based on that every week. The topic is also a different one every week, and they're often very personal. It's a unique and very different project, with a lot of creativity in the ways data is displayed.

Somewhat related, there was a great paper at EuroVis last year on <a href="http://innovis.cpsc.ucalgary.ca/supplemental/Data-Sketching/">data sketching</a>, drawing data by hand. Tools are clearly helpful when dealing with data, but they also tend to shape the things people do with them – they make some things easier than others, and obviously always have limitations. Sketching allows for more thinking outside the box and more creativity.

## Peeking Outside Academic Vis

Academic visualization research can be trapped inside a bubble and not deal with issues people actually encounter out in the world. That is why I really liked <a href="http://fellinlovewithdata.com/research/deceptive-visualizations">the work on deceptive visualizations</a>. It put some science behind issues that some people are aware of, but that so far have mostly been based on assumptions and hearsay. Do cropped bars mislead? Does inverting an axis make a difference? Is aspect ratio important?

The point was not so much that the results were surprising (for the most part, they weren't), but that these things were actually tested rather than just stated as fact. It still amazes me how many things we simply take for granted in visualization without questioning them – and when we finally do, we find that they're not based on actual research.

Along similar lines, Drew Skau and I <a href="https://eagereyes.org/papers/evaluation-of-the-impact-of-visual-embellishments-in-bar-charts">looked at bar chart embellishments</a> common in infographics and found that some of them aren't that problematic – though some clearly are. Again, the point here being actual science rather than just assumptions.

## The Birth and Death of Tools

One of the big issues in data visualization is cleaning data and wrangling it into a shape that can then be used in a visualization tool. <a href="https://eagereyes.org/blog/2015/trifacta-wrangler-for-cleaning-and-reshaping-data">Trifacta Wrangler</a> is a great tool for that, and it's free to use (with some size limitations, though they're quite generous).

I recently heard somebody describe his work as "Living in the Hadleyverse" – a reference to Hadley Wickham and his untiring efforts to create better tools for both data analysis and visualization in R. Between <a href="http://ggplot2.org">ggplot</a>, <a href="http://blog.rstudio.org/2014/01/17/introducing-dplyr/">dplyr</a>, and the up-and-coming <a href="http://ggvis.rstudio.com">ggvis</a>, R is getting very powerful support to deal with large datasets, talk directly to databases, and create interactive visualizations for the web.

Sadly, last year also saw the death of <em>Many Eyes</em>. While not exactly a surprise after years of neglect, it did mean the end of the first really successful and widely used web-based visualization platforms. Many Eyes was not just a collection of tools, they were also ambitious about doing research and pushing the envelope on things like text visualization and figuring out user preferences. Alas, IBM did not seem to see the value and finally folded the project into <a href="http://www.ibm.com/analytics/watson-analytics/">Watson Analytics</a> late last year.

In the process, they did release <em><a href="http://brunelvis.org">Brunel</a></em>, a language for creating visualizations on the web based on the Grammar of Graphics. This had originally been developed as the new technology to power Many Eyes, under the name <em>RAVE</em>. I'm not sure if Brunel has any chance of catching on, given the popularity of D3. But it appears to be an interesting piece of technology.

## Storytelling Research

I'm actually writing this while attending a seminar on <em>Data-Driven Storytelling</em> at <a href="https://eagereyes.org/blog/2013/schloss-dagstuhl">Schloss Dagstuhl</a>. There are 40 people here, with a good number of journalists and designers mixed into the usual group of academics. That such a seminar can happen is a sign that storytelling in visualization is here to stay.

This isn't quite reflected in the papers at <a href="https://eagereyes.org/tag/ieeevis">IEEE VIS</a> or <a href="https://eagereyes.org/blog/2015/report-eurovis-2015">EuroVis</a> yet, but I expect that to change this year. Oddly, <a href="https://eagereyes.org/blog/2015/conference-report-chi-2015">the conference that had an entire session on storytelling</a> last year was CHI – even though that is not a core visualization conference. The entire visualization track there was pretty strong.

I was one of the authors of <a href="https://eagereyes.org/papers/isotype-visualization">the paper on ISOTYPE at CHI</a>, and also the <a href="https://eagereyes.org/papers/the-connected-scatterplot-for-presenting-paired-time-series">almost-published one on the connected scatterplot</a>. I also wrote about <a href="https://eagereyes.org/papers/presentation-oriented-visualization-techniques">presentation-oriented visualization techniques</a>.

## The Year Ahead

On the academic side, I expect to see a lot more work storytelling at the conferences, hopefully enough to finally get entire sessions. There is a lot of energy here at Dagstuhl right now, and many topics and issues to tackle. My hope is also that we can involve practitioners in this work more than we usually do.

A big driver of data visualization in the news will be the elections in the U.S. in November. There will be polls, predictions, lots of data-centric news stories, and just generally a fever pitch of data presentation. Exciting times!


_Posted by <a href="/about">Robert Kosara</a> on February 08, 2016_


<aside class="comments">

---
## Comments

<a href="http://workingvis.wordpress.com" rel="nofollow noopener" target="_blank">workingvis</a> says…
>	Thanks for the mention of Brunel; like you, we also lament the loss of Many Eyes, but we did want to clarify a couple of points. Most importantly is that despite having some people in common, Brunel is completely separate from RAVE — it’s a 100% Open Source tool for making D3 easier to use by people who love data, but don’t want to spend time tweaking D3 code. Basically it’s a language that generates D3 code, which you can then use any way you want (including ignoring Brunel and just using the generated JavaScript). So it’s not a D3 alternative — it’s a D3 enhancer! It may end up in IBM products, but right now it’s being used by online bloggers and most heavily in notebooks like Jupyter (iPython).  http://brunelvis.org/index.php/brunel/ is the “About Brunel” page that fills in the details.
>	
>	Completely agree with the emphasis on Storytelling — it has been in the top 3 most talked about topics for the last 3 years and needs more core vis research focus. Exciting times indeed!

</aside>

