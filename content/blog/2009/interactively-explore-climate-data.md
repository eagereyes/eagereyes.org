# Interactively Explore Climate Data

The United Kingdom's Met Office [recently released temperature data for about 1700 weather stations](http://www.metoffice.gov.uk/climatechange/science/monitoring/subsets.html) across the globe from 1701 to 2009. Here is an interactive visualization (built using [Protovis](http://protovis.org/)) of that data for you to explore.

If you are reading this in your newsreader or using Internet Explorer, you will not see anything interesting below. Use a modern browser like Safari, FireFox, or Chrome. Internet Explorer is missing some crucial features that Protovis depends on.

I will post a more detailed analysis on Monday, but here are some quick facts: about 1.4 million data points from a varying number of stations (around 1700 at peak) over more than 300 years. The data points are monthly averages per station, which I aggregated into overall monthly and yearly averages and standard deviations.

The visualization consists of two views. The bottom view shows yearly averages (dark blue line) and standard deviation spread (light blue background) over about 270 years (no good reason for this choice other than to fit into my theme). Mouse over the view to see the detailed data (average, min/max, and standard deviation) displayed in the lower right.

The top view shows the monthly averages for the currently selected year (from the bottom view). The gray shape in the background gives you some context about the range of values over all years for each month, so you can see whether the current one is close to the top or bottom. Note how the winters are getting less cold and the curve across the year moves up and gets flatter as you move forward in time.

_This interactive was created in Protovis and isn't available anymore_
