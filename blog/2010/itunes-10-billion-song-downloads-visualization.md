---
title: "iTunes Ten Billion Song Downloads Visualization"
description: "Apple's iTunes Store is counting down to the ten-billionth (10,000,000,000th) song download. As in previous cases when they were running a download counter on their website, I am harvesting the data and visualizing it below."
date: 2010-02-14 23:33:27
tags: applications
featuredImage: https://media.eagereyes.org/media/2010/iTunes10billion-teaser.png
---

# iTunes Ten Billion Song Downloads Visualization

<p align="center"><img src="https://media.eagereyes.org/media/2010/iTunes10billion-teaser.png" width="522" height="175" alt="iTunes10billion-teaser" /></p>

Apple's iTunes Store is <a href="http://www.apple.com/itunes/10-billion-song-countdown/">counting down</a> to the ten-billionth (10,000,000,000th) song download. As in <a href="/vis/iTMS.html">previous</a> <a href="/applications/appstore-billion-apps-live-visualization.html">cases</a> when they were running a download counter on their website, I am harvesting the data and visualizing it below.

<p align="center"><img src="https://media.eagereyes.org/media/2010/iTunes10billion-ersatz3.png" width="550" height="675" alt="iTunes10billion ersatz image" /></p>

## How to Read and Use

The bottom part of the visualization shows the number of downloads as a blue area, and the rate of downloads as a line. The pattern in the background has an edge every six hours, so two gray and two white stripes make up one day. The top view is a circular view, with one full round around the circle representing one day. The gray wedges correspond to the gray stripes in the bottom view, plus there are additional lines for each hour to make comparison easier. The lines are color-coded by the day, so the corresponding data in both views can be identified.

If you read this in your newsreader or in Internet Explorer, or have JavaScript turned off, you only see a static image above (which I will update a few times per day). In all other browsers, you are able to interact with the bottom view by moving your mouse over it. A small information window in the lower right of the view will show you the rate and total values of the hour your mouse is currently over, and the current hour and day will be highlighted in the circular view on top.

The visualization loads the data every time you refresh the page, but the underlying data only changes once per hour. It is also delayed by an hour, so any attempts at guessing the time of the 10,000,000,000th download (which will win a $10,000 iTunes gift card) is hopeless. All times are in Pacific Standard Time (PST).

## Data

I am making the data available in two formats: <a href="https://media.eagereyes.org/media/2010/iTunes10Billion.js">JavaScript</a> and <a href="https://media.eagereyes.org/media/2010/iTunes10Billion.csv">CSV</a>. The former is meant to be included as a script, and assigns the data (in inefficient but <a href="http://protovis.org/">Protovis</a>-friendly one-object-per-row format) to a variable named <code>iTunes10billion</code>. The latter is a classical plain-text CSV file. Both contain exactly the same data.

One convention is that the rate (which is per hour) gets a negative sign when no data is available for an hour. The total downloads and the rate are interpolated in this case. You can either skip those, or show them in a way that indicates missing data. The files also contain two different timestamps, one for easier parsing and one for direct display.

The data files are updated every five minutes, but the source data only changes once per hour. This usually happens a few minutes past the full hour, so the most up-to-date values are available around five to ten minutes past the full hour.

[[PostedBy]]

<aside class="comments">

---
## Comments

<a href="http://www.rockitbaby.de" rel="nofollow noopener" target="_blank">Michael Schieben</a> says…
>	I like your work. Thank you for updating and sharing the data! Do you read this file http://www.apple.com/autopush/us/itunes/includes/countdown.inc ? 

Robert Kosara says…
>	That's the one. There's no magic behind the data gathering, my script simply downloads that file, checks if it's different than the previous version, and interpolates values in case there's a gap.

<a href="http://graphics.stanford.edu/~mbostock" rel="nofollow noopener" target="_blank">Mike Bostock</a> says…
>	Nice visualization, Robert. I like the mouseover interaction and the emphasis on the daily cycle! I also like that you deal appropriately with missing data.
>	
>	The next version of Protovis (<a href="http://gitorious.org/protovis">in development</a>) will support CSV parsing and number formatting: comma-grouping, perhaps rounding to billions / scientific notation / etc. We'll also improve the existing date parsing and formatting, so it's easier to convert between system- and human-readable representations.

Vani Murarka says…
>	What does the circular view convey, that the bottom view does not?
>	
>	That Thursdays have the lowest rate of download (being the innermost circle), and Sundays the highest (being the outermost circle) is easier to perceive in the circular view, even though this is conveyed in the bottom view too. However, is there any other significant strength of the circular view that is not achieved in the bottom view?

Robert Kosara says…
>	The circular view directly overlays the days, so you can tell how different they are. You can't read exact differences, but larger/smaller is quite apparent. Another way to do this would be to overlay them in a rectangular view, but that disconnects the beginning and end of each day. I wanted to see what happens during the night as well as during the day, so I thought that the circle was a better choice.

</aside>

