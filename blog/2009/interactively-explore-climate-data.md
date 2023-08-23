---
title: "Interactively Explore Climate Data"
description: "The United Kingdom's Met Office recently released temperature data for about 1700 weather stations across the globe from 1701 to 2009. Here is an interactive visualization (built using Protovis) of that data for you to explore."
date: 2009-12-11 00:58:50
tags: data
featuredImage: http://eagereyes.org/media/2009/climate/climate-teaser-cropped.png
outline: false
---

<p align="center"><img src="https://media.eagereyes.org/media/2009/climate/climate-teaser-cropped.png" alt="Climate data 1740-2008" width="560" height="246" /></p>

# Interactively Explore Climate Data

The United Kingdom's Met Office <a href="http://www.metoffice.gov.uk/climatechange/science/monitoring/subsets.html">recently released temperature data for about 1700 weather stations</a> across the globe from 1701 to 2009. Here is an interactive visualization (built using <a href="http://protovis.org/">Protovis</a>) of that data for you to explore.

If you are reading this in your newsreader or using Internet Explorer, you will not see anything interesting below. Use a modern browser like Safari, FireFox, or Chrome. Internet Explorer is missing some crucial features that Protovis depends on.

I will post a more detailed analysis on Monday, but here are some quick facts: about 1.4 million data points from a varying number of stations (around 1700 at peak) over more than 300 years. The data points are monthly averages per station, which I aggregated into overall monthly and yearly averages and standard deviations.

The visualization consists of two views. The bottom view shows yearly averages (dark blue line) and standard deviation spread (light blue background) over about 270 years (no good reason for this choice other than to fit into my theme). Mouse over the view to see the detailed data (average, min/max, and standard deviation) displayed in the lower right.

The top view shows the monthly averages for the currently selected year (from the bottom view). The gray shape in the background gives you some context about the range of values over all years for each month, so you can see whether the current one is close to the top or bottom. Note how the winters are getting less cold and the curve across the year moves up and gets flatter as you move forward in time.

_This interactive was created in Protovis and isn't available anymore_
[[PostedBy]]

<aside class="comments">

---
## Comments

<a href="http://blog.blprnt.com" rel="nofollow noopener" target="_blank">Jer Thorp</a> says…
>	<p>This is very nice. Definitely shows the trends in a clear way. I'd love to have you get involved in the discussion at the #climatedata forum - <a href="http://climatedata.blprnt.com" target="_blank">http://climatedata.blprnt.com</a></p>

<a href="http://www.flinklabs.com" rel="nofollow noopener" target="_blank">Ben</a> says…
>	<p>This is a very excellent representation. The 2d geo viz and our 3d one both show the changing temp within a year but do very very little in showing the gradual year on year increase. </p>
>	<p>Your representation highlighting the flattening of the curve over time is brilliant!!</p>

<a href="http://www.novonon.com" rel="nofollow noopener" target="_blank">Egg Davis</a> says…
>	<p>Robert,</p>
>	<p> </p>
>	<p>Nice! I haven't seen anyone interactively link the annual cycle to long-term changes in this way before. Neither the grey background nor the standard dev shows up for me (I'm running FF 3.5.5 under XP).</p>

Robert Kosara says…
>	<p>If you can see the lines (and interact), your contrast might just be set too high. If you're not seeing the interactive chart at all, do you have JavaScript turned off? I tested it on FF 3.5, and it worked fine.</p>

<a href="http://teemingvoid.blogspot.com" rel="nofollow noopener" target="_blank">Mitchell</a> says…
>	<p>I agree, this is really elegant and quite revealing. But, a question from the southern hemisphere: how have you handled the differences between northern and southern seasons? If you are taking the data per month as is (rather than shifting the "phase" of the southern year to compensate), then you're mixing northen winter with southern summer, and vice versa - so the seasonal fluctuations in the year graph are being flattened somewhat. It might be that the northern hemisphere seasonal shape in the year graph, is due to the dominance of northern hemisphere data in the set?</p>
>	<p>Also, I wonder what happened in 1951 to create that spike? Did a whole lot of new data sources become available?</p>

Robert Kosara says…
>	<p>I didn't do any processing, and nothing to account for north/south differences. These are land-based weather stations, and there is a clear majority in the northern hemisphere. I will look into this further for my next article, though. I also can't explain the 1951 spike yet, but I'm also going to look into the number of stations over time, and will certainly take a closer peek at that year.</p>

<a href="http://neoformix.com" rel="nofollow noopener" target="_blank">Jeff Clark</a> says…
>	<p>I pointed out a couple of potential problems on twitter this morning and thought it made sense to attach them to this post in a more clear form.</p>
>	<p>First of all, I like very much the general approach taken here and agree that linking the annual curve with the longer term trend works well. As Robert admitted this morning these graphs are for all the stations. The video by <a href="http://vimeo.com/rockitbaby"></a>Michael Schieben at http://vimeo.com/8102161 shows quite clearly how the number and geographic location of these weather stations varies over time.</p>
>	<p>This means we cannot simply draw conclusions regarding the overall temperature trend or the annual curve because<strong> the underlying data does not cover a consistent geographic region</strong>. The fact that the average temperature shown in the curve is so obviously higher in the 1900's than in the 1700's is at least partially due to the fact that the data from the 1700's was all from europe whereas the data from the 1900's was global and included warmer parts of the world. The jump in average temperature in 1951 is because the data from many new weather stations in Africa were added at that time. Again, Michael's video shows this clearly.</p>
>	<p>You can see that Robert's curve gets smoother over time. This is because there are more stations over time so it averages out more of the variation in the data.</p>
>	<p>I suspect some of the flattening of the annual curve is because initially the data was all from europe and gradually more stations from the southern hemisphere were added in later years. The difference in seasonality between the hemispheres means that adding them together will flatten it.</p>
>	<p>Another clue that there is a problem here is that a naive interpretation of this temperature curve shows an increase of ~ 8C between 1800 and 2000 - I believe this is much much higher than the scientific consensus of what the increase has been.</p>
>	<p>Note that I'm not claiming there has been no increase in average temperatures - a very strong majority of the world's climate scientists seem to think there has been. I would like to see Robert (or somebody) repeat this visualization with a consistent set of weather stations so that we can properly control for geographic variation.</p>
>	<p>I would also like to say that I think it is wonderful that Robert, Jer, Michael, Flink labs and so many others have embraced this challenge.</p>

<a href="http://chartsgraphs.wordpress.com" rel="nofollow noopener" target="_blank">D Kelly O'Day</a> says…
>	<p>Robert</p>
>	<p>Nice job</p>
>	<p>Jeff has pointed out concerns about using actual temperatures to compute a global average. Since the number and distribution of weather stations has changed over the years, the trend chart does not reflect the true change in temperature.</p>
>	<p>Climate scientists like James Hansen of NASA recogniized this issue in the 1970s and started using temperatuyre anomalies to overcome this problem. You can find out the exact details at sites like NASA's GISSTEMP.</p>
>	<p>The concept is to develop a long term (1961-1990 for NASA) baseline period for each station by day, then calculate the anomaly (act temp - baseline) for each station for each day. This way, you can calculate the changes from the baseline period.</p>
>	<p>Since anomalies are differences between a station's actual and baseline values, it is appropriate to compute average anomales across a number of stations.</p>
>	<p>Most longterm climate studies use temperature anomalies rather than the raw data.</p>
>	<p>I have a number of charts of long term anomaly trends at http://chartsgraphs.wordpress.com/climate-trends/.</p>
>	<p> </p>
>	<p>D Kelly O'Day</p>
>	<p>http://chartsgraphs.wordpress.com</p>

<a href="http://vis4.net/blog" rel="nofollow noopener" target="_blank">Gregor</a> says…
>	<p>Hi Robert,</p>
>	<p>I looked at the data set and found out that the distribution of weather stations changes a lot over time. At around 1950 africa gets a lot of new weather stations. That's why you can't simply average over weather stations in different latitude positions.</p>
>	<p>I made some visualizations myself to prove this visually, see my last article as vis4.net.</p>

<a href="http://vis4.net/blog" rel="nofollow noopener" target="_blank">Gregor</a> says…
>	<p>Forgot the link to the mentioned article..</p>
>	<p>http://vis4.net/blog/2009/12/visualization-and-interpretation-of-weather-station-data/</p>

</aside>

