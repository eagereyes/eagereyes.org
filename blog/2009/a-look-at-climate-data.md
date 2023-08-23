---
title: "A Look At Climate Data"
description: "Wether you believe that global warming is real or not, a bit of validation of the source data is still interesting. This is my second look at the global temperature data recently released by the UK's Met Office, this time using Tableau. There are some interesting data issues here, and a rather analytical visualization."
date: 2009-12-14 09:46:48
tags: data
featuredImage: https://media.eagereyes.org/media/2009/climate/look-at-climate-teaser.png
---

<p align="center"><img src="https://media.eagereyes.org/media/2009/climate/look-at-climate-teaser.png" alt="Colorful lines" width="560" height="228" /></p>

# A Look At Climate Data

Wether you believe that global warming is real or not, a bit of validation of the source data is still interesting. This is my second look at the global temperature data <a href="http://www.metoffice.gov.uk/climatechange/science/monitoring/subsets.html">recently released by the UK's Met Office</a>, this time using <a href="http://www.tableausoftware.com/">Tableau</a>. There are some interesting data issues here, and a rather analytical visualization.

## Data Preparation

The data contains monthly temperature averages for a total of 1718 weather stations across the globe. The first reports are from 1701, with the latest data from October 2009. The data is provided as a large number of files, one for each weather station. They contain information such as geographic location, country, height, etc. Missing or otherwise unavailable data is indicated by a temperature of -99. Out of about 1.6 million data points over 309 years, about 1.4 million are valid. All temperatures are in degrees Celsius (aka Centigrade).

I converted and reshaped the data into a <a href="https://media.eagereyes.org/media/2009/climate/climatedata.csv.zip">CSV file</a> that is much larger (because it contains a lot of redundancies), but that is much easier to work with in Tableau and other programs. This file also contains the continent classification and the first year of data recorded per station. You can also download <a href="https://media.eagereyes.org/media/2009/climate/Climate-Data.twbx.zip">my packaged Tableau workbook</a> if you have Tableau or want to look at it in <a href="http://www.tableausoftware.com/products/reader">Tableau Reader</a>.

While the overall data is nice and large, it also has a number of problems. The image below is from <a href="/data/interactively-explore-climate-data">my first attempt at visualizing it using Protovis</a>. The overall difference in temperature is suspiciously high, and there are some jumps that don't appear likely.

<p align="center"><img src="https://media.eagereyes.org/media/2009/climate/climate-teaser-cropped.png" border="0" alt="Climate data 1740-2008" width="560" height="246" /></p>

In particular, 1950-51 shows a jump over more than 2&ordm;, which is obviously impossible (the same difference takes over 100 years before that). A look at when stations came online gives a hint at the source of the problem

<p align="center"><img src="https://media.eagereyes.org/media/2009/climate/stations-by-year.png" border="0" alt="Number of new stations by year" width="560" height="336" /></p>

The huge spike in 1950 mostly contains new weather stations in Africa, which obviously leads to a higher overall average from then on. The other spikes are more evenly distributed, and do not contribute to the average in an obvious way.

This highlights the main problem with this data: sampling. What is a fair sampling? How do weather stations need to be distributed to get a good overall picture? And how can you add new stations without distorting (and perhaps invalidating) the comparison with before?

So I decided to take a conservative position and only use weather stations that had come online by 1901. The data only considers "good years," so 1901 being the first such year means that the station was providing reliable data at that point. This reduces the number of stations from 1718 to 443. By only considering data from these stations from 1901 forward, I ensure that I get data from all stations for the entire range of years (except for the occasional missing data). In addition, most analysis will be done by continent, to compare reasonably local data and not average over the entire world.

The following map shows all the stations in the data set. The coloring is by continent, according to the <a href="http://weather.unisys.com/info/country_info.html">list of weather station codes</a>. Note that Antarctica is considered part of South America, and Russia is split into a European and an Asian part.

<p align="center"><img src="https://media.eagereyes.org/media/2009/climate/map-all.png" border="0" alt="Map of all 1718 weather stations" width="560" height="472" /></p>

This is the subset of stations that were added up to 1901:

<p align="center"><img src="https://media.eagereyes.org/media/2009/climate/map-filtered.png" border="0" alt="Map of the 443 stations in the subset" width="560" height="472" /></p>

The samples in the subset are much more centered around Europe, North America, and parts of Asia, with Africa, South America, and the Pacific being much more sparse.

## The Analysis

Before diving into the details, here is the temporal overview. This chart shows worldwide averages from 1901 to 2009, for the subset of stations described above.

<p align="center"><img src="https://media.eagereyes.org/media/2009/climate/overall-timeline.png" border="0" alt="Overall timeline" width="560" height="336" /></p>

While the big jumps are gone, the overall trend is still there: temperatures are rising at around 0.1&ordm; per decade (p &lt; 0.0001), <a href="http://en.wikipedia.org/wiki/Global_warming">in line with the general consensus</a>

Looking at continents, the same overall pattern is visible as well, even though they obviously all have different average temperature zones. While it may look cluttered, this chart allows for easier comparison between the continents. The conveniently are also only a few overlaps.

<p align="center"><img src="https://media.eagereyes.org/media/2009/climate/timelines.png" border="0" alt="Timelines for the continents" width="560" height="293" /></p>

The grid lines are mainly there as reference for the direction of the trend lines. With all these lines at similar angles, it is easy to underestimate how steep they really are. The temperature rise varies between 0.03&ordm; per decade (South America) and 0.15&ordm; per decade (Pacific).

So far, there are really no surprises. That is a good thing, replicating results is what science is all about, after all. And it shows that my sample was well chosen, given that the actual scientists work with a variety of data sources, and obviously know a lot more about the actual phenomena.

What interested me more than the long-term differences was how the seasons change due to global warming. That was also the idea behind my <a href="/data/interactively-explore-climate-data">flawed interactive visualization</a> (which I will update with the data subset soon).

The following image shows the temperatures over the course of the year, with one line per decade (values are averaged), per continent. The color scale goes from blue (1900s) to orange (2000s), following Clint's suggestion in the comments. The reason for going by decade here is that there are considerable yearly fluctuations that make this chart nearly unreadable if done at that level.

<p align="center"><img src="https://media.eagereyes.org/media/2009/climate/month-lines2.png" border="0" alt="Temperature averages over the year, per decade and continent" width="560" height="577" /></p>

Some interesting patterns emerge here. While it's not possible to see exactly which lines are which decade (the colors are too similar, and there is too much overplotting), this is really more about trends, which are quite apparent.

All continents except for South America show darker colors at the top, meaning that temperatures get warmer for most of the year. Africa gets warmer summers but cooler winters: note the orange lines at the bottom of the pack on each end. The two regions in the southern hemisphere are clearly visible because they have their minima in the middle of the year.

South America has a pattern that looks very similar to Africa, with warmer summers and colder winters (just at different times of the year). The Pacific and Asia have darker colors at the top and the bottom because they had some colder years in the 1970s and 1980s. These outliers do not invalidate the general trend, though.

## The Conclusion

Analyzing this data was a lot more difficult than I expected. The naive approach of just throwing it all into Tableau and looking at some quick charts did not lead to very reliable results. There is still a lot more to be done (i.e., actually understanding some of the issues with data quality, as Kelly O'Day suggested), but I think this analysis is a good first step.

With all the talk about citizen journalists, scientists, etc., actually getting our hands on the real, (relatively) raw data is still quite amazing. Of course, this also requires a certain level of understanding and responsibility to not just tout the first pattern that happens to be visible and that fits your agenda. Also, if you don't believe climate change is real, this analysis (and the data) likely won't sway you. Clearly, the data must have been carefully manipulated before it was released.

The Met Office has promised more data, which should provide a stronger foundation for this analysis. There are also <a href="http://www.realclimate.org/index.php/data-sources/">a number of other datasets</a> available, with more coming out. This is a great opportunity to show what we can do with this data visually, and to provide easier ways for people to understand what's actually behind all that talk of global warming.

[[PostedBy]]

<aside class="comments">

---
## Comments

David Janes says…
>	<p>Just three brief comments:</p>
>	<p>- the use of the words "deny" or "denier" is to in effect call those people crypto-Nazis, cf Godwin</p>
>	<p>- the issue is not whether "climate change is real" as per your second last paragraph, but what part of it can be attributed to human causes, and in particular, not land change use but the emissions of GHG such as CO2, CH4, etc. (which in turn may be masked by SO2, etc.)</p>
>	<p>- excellent &amp; interesting work and I'm interested in seeing your next installments</p>

<a href="http://chartsgraphs.wordpress.com" rel="nofollow noopener" target="_blank">D Kelly O'Day</a> says…
>	<p>Robert:</p>
>	<p> </p>
>	<p>Two points:</p>
>	<p>1. <strong>Anomalies, not raw termperature please</strong>: As I pointed out in my comment on your previous climate data post, when working with multiple stations, you need to work with temperature anomalies not readings to get any meaningfull results of long term temperature changes.</p>
>	<p>2.<strong> Look at what others have done</strong>: Here are 3 links to see what others have done:</p>
>	<ul>
>	<li><em><a href="http://www.globalwarmingart.com/wiki/Thumbnail_gallery_of_all_images" target="_blank">Global Warming Art</a></em></li>
>	<li><em><a href="http://www.woodfortrees.org/plot/" target="_blank">Wood for Trees</a></em></li>
>	<li><a href="http://data.giss.nasa.gov/gistemp/" target="_blank">NASA GISS</a></li>
>	</ul>
>	<p>As a data visualization advocate, I think you could contribute more by evaluating the state of climate visualization rather than jsut starting from scratch. I think you may be surprised to see that some good data visualization work has already been done by climate scientists.</p>
>	<p> </p>
>	<p>D Kelly O'Day</p>
>	<p>http://chartsgraphs.wordpress.com</p>

Robert Kosara says…
>	<p>I used the word "deny" on purpose, but I wasn't going anywhere near implying that people are Nazis. What would be the connection? The way "Nazi" is becoming a general term for people you don't like is not very helpful (or appropriate).</p>
>	<p>The issue is clearly much more complex, but I didn't want to go there. The data shows that temperatures are rising, that's a first step. It doesn't show why. I might look at more data, but probably not this year. The point of this was not to create the be-all-end-all visualization of all available data, but to look at one specific data set.</p>

Robert Kosara says…
>	<p>I simply wanted to look at this new data set. I haven't looked into the anomalies, and need to do more reading on the matter. I don't see how you can measure anomalies by comparing to a baseline period that is so recent, for example, and that already showed considerable temperature change.</p>
>	<p>Thanks for the links, I'll look at those visualizations. It just strikes me that these are mostly heatmaps (which I find rather useless) or cluttered time series charts. I wanted to do something a bit different here.</p>

David Janes says…
>	<p>I have some regrets that I added that point, since I'm interested in where you are going with this and not trying to be trolling. To answer the question: the phrase climate change denial appears to deliberately evocative of the phrase "Holocaust Denial".</p>

<a href="http://chartsgraphs.wordpress.com" rel="nofollow noopener" target="_blank">D Kelly O'Day</a> says…
>	<p><strong><em>"I don't see how you can measure anomalies by comparing to a baseline period that is so recent, for example, and that already showed considerable temperature change."</em></strong></p>
>	<p> </p>
>	<p>Climate trends show a multi-decadal variation, so a 30 periiod is usually used for the baseline. This is important when you are adding together several stations. A 1 C anomaly in Washington DC is the same as a 1 C anomaly in Boston. Both are 1 C above their respective baseline values.</p>
>	<p>Climate science is trying to understand changes locally, regionally and globally. How can we realistically compare temperature trends in Alaska and Florida, Alaska is much colder than Florida? We really want to see how their trends compare.</p>
>	<p>This is particularly important when we consider polar amplification. The farther north the greater the temperature anomaly change. I writtten a little more about this here:</p>
>	<p>http://chartsgraphs.wordpress.com/2009/02/19/temperature-anomaly-data-displays/</p>
>	<p>The period used for the baseline is arbitrary and does not affect the trend comparison. If you  used a 1891-1920 baseline rather than a 1961-1990 period, the plots would be offset vertically, however the trend slopes  would be the same.</p>
>	<p>This is what actually occurs today: NASA GISS uses 1951-1980, Hadley uses 1961-1990. The trends are comparable; there is a slight vertical offset between the two anomaly series.</p>
>	<p>When comparing anomaly data, we say that there has been X change from the baseline period.</p>

<a href="http://blog.instantcognition.com" rel="nofollow noopener" target="_blank">Clint</a> says…
>	<p>In your tableau workbook, you have an alternate view of the seasonal trends by decade that I think may work better. It's the bar version (worksheet name 'Month Bars'). If you convert the decade dimension on the color shelf to continuous then you get more color options and can create more visual separation between the early decades vs. the later decades. This helps distinguish the individual decades and combats the overplotting without destroying the trended view.</p>
>	<p> </p>
>	<p>-C</p>

Robert Kosara says…
>	<p>I tried different color palettes also for the lines, but when using different hues it quickly becomes difficult to see which way time moves forward. The reason I didn't use the bars is that the bar size distorts the effects a bit. The bars are really squares, so to make them large enough also means making them higher, so the overall difference looks larger. I didn't want to get accused of exaggerating an effect. ;) I'll try the continuous idea for the lines, though.</p>

<a href="http://www.informationisbeautiful.net" rel="nofollow noopener" target="_blank">David McCandless</a> says…
>	<p>Lawrence Solomon's climate skeptical book is called The Deniers, based on his column on climate skeptical views in The National Posts called The Deniers.</p>
>	<p>I'm not sure use of the term "Deniers" is a deliberately aggressive attempt to dub skeptics as crypto-nazis.</p>

<a href="http://blog.instantcognition.com" rel="nofollow noopener" target="_blank">Clint</a> says…
>	<p>ok, on the bar distortion - definitely a risk. looks like it works on the lines as well. I set the decade to continuous on the color shelf - changed the palette to Red-Blue Diverging (reversed so that the later decades are in the red range) and used 10 steps.</p>

David Janes says…
>	<p>I just sent him a note to see what his take on it is.</p>
>	<p> </p>
>	<p> </p>

Robert Kosara says…
>	<p>I'll look into this more. Thanks!</p>

David Janes says…
>	<p>"You are quite right [to the argument I made above]. Deniers is a hateful term. I used it in my book ironically. -- Best Larry"</p>

Robert Kosara says…
>	<p>Can we leave the Nazis alone now and get back to climate data?</p>

<a href="http://i-ocean.blogspot.com/" rel="nofollow noopener" target="_blank">derek</a> says…
>	<p>I think your 6 row by 1 column panel graph of temperatures would work better as a 3 row by 2 column panel graph. There would be twice as much vertical distance to differentiate the decade lines with, and each region would be no more than two rows apart from another region for visual comparision purposes, instead of up to five rows apart. I don't think the factor of 4 change in the aspect ratio (6:1 --&gt; 3:2 = 2/(1/2) = 4) would make the curves too tall.</p>

<a href="http://euphemize.net/" rel="nofollow noopener" target="_blank">Joel</a> says…
>	<p>I'm not sure it is. You "deny" a charge in the legal world, links with Nazism and the holocaust are invoked by those who do not want to claim that they deny a link may exist between the release of CO2 (and other GHG locked up for many millenia) into the atmosphere and the warming of the globe.</p>
>	<p>To be even more fair, those opposed to action to reduce our output of GHGs cannot come to an agreement that the earth is warming or not, let alone the potential causes of it (if they then accept, based on evidence to date, that it does/may exist).</p>

WY says…
>	<p>The data for Asia looks quite different from the others. Maybe the data need to be further QCed. It's tempting to speculate the upward jump in Asia around 1990, but nothing can be really said without the assurance of data quality. Since it's a large continent, it might be helpful to look at the stations in Russia, Japan and India seperately (very few stations in China though)...</p>
>	<p> </p>

Robert Kosara says…
>	<p>Thanks for the suggestion! Now I wish I could do transparency too, because the overplotting is actually a bit problematic.</p>

Robert Kosara says…
>	<p>I don't want this to turn into a long argument over the use of a term. I agree with what you're saying, but my focus here is something else; and I'd rather change a word than have a pointless discussion on a topic completely unrelated to the posting and data.</p>

Robert Kosara says…
>	<p>If it were wide enough, it would work, but it would make the reduced image on the page (without clicking it) too small to really see anything. I also have to say I like the current aspect ratio of the charts, anything higher would feel exaggerated.</p>

Robert Kosara says…
>	<p>The distinction between Asia and Pacific seems rather arbitrary to me, and certainly has an effect on the averages. There is certainly more to be done here, also for Asia vs. Europe: it's not like there's a climate wall between those two, either.</p>

Human Powered says…
>	There may be more to the sampling question than we realize.  Although there are many sites the actual coverage is quite small and non-random.  I suspect the measurement sites were established because people lived there and wanted to know the temperature making this essentially a convenience sample.  
>	
>	Perhaps the point is that it's getting hotter where people live, but that is different than saying the whole world is getting hotter, what happens to the trends if you look only at sites where the human population is stable?
>	  
>	On the flip side if the temperature gains are greater in populated areas that would support the assertion that people are responsible for global warming.
>	
>	The sample frame bothers me more than I suspected going into this.  having only 443 sites with a non-random distribution could seriously skew the data, but to be honest I don't know enough about how the data is collected to be certain.  If anyone knows more about this I'd like to hear it.

Larry says…
>	<p>There is little that can be learned from the chart exercise. The topic is far more nuanced. For example, we lost several thousand reporting stations in Russia during the early 1990's. You don't tie the stations to citing, which means that many will be contaminated through Urban Heat Island effect. (Los Angeles has a steady increase while a station 25 miles away does not.) We know that the Chinese got their data way wrong also in a famous case and peer reviewed study. (The Chinese said the stations were fixed in location, but later determined to have been moved around severeal times.)</p>
>	<p>You mentioned 'going back to the 1970's' -- the problem there is that virtually anyone promoting AGW will use 1970 as a baseline, because it was in a decliing period of temperature. Therefore, by choosing the 1970 as a starting point, one can bend the graph to make a case simply by selective end points. (1934 was the hottest year in the US in the 20th century, and many of the hottest years were before the 1970's. This is why you won't see them on AGW charts.)</p>
>	<p>Other issues -- the real increase in carbon fuel-generated CO2 didn't start until the late 1940s. So, you have to accomodate this in terms of explanation.</p>
>	<p>Perhaps most importantly, we have been in a near-constant rise since the 1850s when we started coming out of the Little Ice Age. So, we have warming without CO2 being the driver. Therefore, looking at a long timeline, one cannot make the cause and effect argument. We've also had a plateau in temperatures, with no statistical increase in more than a decade. Same with sea level temps.</p>
>	<p>Other issues -- the HadCrut temperatures are not agreeing with radiosonde and satellites, with the latter two in agreement. We also know from Lindzen/Choi 2009, Knorr at Bristol 2009, and others that the anthropogenic CO2 is not increasing as a proportion of total natural CO2, and also that CO2 atmospheric escape is higher than any of the IPCC models. Meanwhile, troposphere temperatures should be heating under CO2 warming theory, but there is no 'hot spot' as predicted.</p>
>	<p>In terms of citing of stations, the US is considered the gold standard. Yet nearly 90% of our stations can't meet the government citing specs. Anthony Watts has a national project collecting information on the stations, and basically you will want to just about toss any data from them. Please review www.surfacestations.org</p>
>	<p>Another issue is that you report that you're utilizing the raw data from CRU. This couldn't be true in terms of all the raw data. Univ of East Anglis admits throwing away much of the raw temerature data. What is availalble are the revised figures whih were kept while the originals, stored on paper and magnetic tape, were destroyed to save space when moving to a new building. Therefore, scientists cannot check the basic calculations which show a long-term rise in temperature over the past 150 years. We also won't trust the CRU data easily, as the loss of the raw data was only released begrudingly after requests for the data under Freedom of Information legislation. 	 <!-- END: Module - M24 Article Headline with no image --> <!-- BEGIN: Module - Main Article --> <!-- Check the Article Type and display accordingly--> <!-- Print Author image associated with the Author--> <!-- Print the body of the article--></p>
>	<div id="region-column1-layout2">
>	<div id="related-article-links">
>	<p>The data were gathered from weather stations around the world and then  adjusted to take account of variables in the way they were collected. The  revised figures were kept, but the originals &mdash; stored on paper and magnetic  tape &mdash; were dumped to save space when the CRU moved to a new building.</p>
>	<p>Although you are showing stations purportedly back 300 years, again, this ending in the early 1970s. Therefore, for natural reasons, the earth warmed, much as it is cooling now, owing to solar and cosmic ray cycles.</p>
>	</div>
>	</div>
>	<p>I'll stop here. There are many, many more considerations. The point being that a sloping line upwards in your exercises in no way makes the argument that warming is either unusual or that it is primarily driven by man.</p>

</aside>

