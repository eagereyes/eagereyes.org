# iTunes Ten Billion Song Downloads Visualization

<p align="center"><img src="https://media.eagereyes.org/media/2010/iTunes10billion-teaser.png" width="522" height="175" alt="iTunes10billion-teaser" /></p>

Apple's iTunes Store is <a href="http://www.apple.com/itunes/10-billion-song-countdown/">counting down</a> to the ten-billionth (10,000,000,000th) song download. As in <a href="/blog/2006/itunes-billion-song-downloads">previous</a> <a href="/blog/2009/appstore-billion-apps-live-visualization-html">cases</a> when they were running a download counter on their website, I am harvesting the data and visualizing it below.

<p align="center"><img src="https://media.eagereyes.org/media/2010/iTunes10billion-ersatz3.png" width="550" height="675" alt="iTunes10billion ersatz image" /></p>

## How to Read and Use

The bottom part of the visualization shows the number of downloads as a blue area, and the rate of downloads as a line. The pattern in the background has an edge every six hours, so two gray and two white stripes make up one day. The top view is a circular view, with one full round around the circle representing one day. The gray wedges correspond to the gray stripes in the bottom view, plus there are additional lines for each hour to make comparison easier. The lines are color-coded by the day, so the corresponding data in both views can be identified.

If you read this in your newsreader or in Internet Explorer, or have JavaScript turned off, you only see a static image above (which I will update a few times per day). In all other browsers, you are able to interact with the bottom view by moving your mouse over it. A small information window in the lower right of the view will show you the rate and total values of the hour your mouse is currently over, and the current hour and day will be highlighted in the circular view on top.

The visualization loads the data every time you refresh the page, but the underlying data only changes once per hour. It is also delayed by an hour, so any attempts at guessing the time of the 10,000,000,000th download (which will win a $10,000 iTunes gift card) is hopeless. All times are in Pacific Standard Time (PST).

## Data

I am making the data available in two formats: <a href="https://media.eagereyes.org/media/2010/iTunes10Billion.js">JavaScript</a> and <a href="https://media.eagereyes.org/media/2010/iTunes10Billion.csv">CSV</a>. The former is meant to be included as a script, and assigns the data (in inefficient but <a href="http://protovis.org/">Protovis</a>-friendly one-object-per-row format) to a variable named <code>iTunes10billion</code>. The latter is a classical plain-text CSV file. Both contain exactly the same data.

One convention is that the rate (which is per hour) gets a negative sign when no data is available for an hour. The total downloads and the rate are interpolated in this case. You can either skip those, or show them in a way that indicates missing data. The files also contain two different timestamps, one for easier parsing and one for direct display.

The data files are updated every five minutes, but the source data only changes once per hour. This usually happens a few minutes past the full hour, so the most up-to-date values are available around five to ten minutes past the full hour.
