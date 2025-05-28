Sebastian says…
>	Wouldn't it a good idea as well to look at the data on a log-scale? For growth processes etc. this will reveal information on the relative growth - which might be at least as interesting in this case in my opinion!

derek says…
>	If you've taken the real data away, why have you still got those extraordinarily precise scales? Shouldn't you detune those as well? If you don't, it looks like you're writing a check your data won't cover. It's inappropriate precision.

<a href="http://www.excelcharts.com/blog/" rel="nofollow noopener" target="_blank">Jorge Camoes</a> says…
>	Robert, I am not impressed by the impressionist style in data visualization, but there is a relationship between detail and chart size. It would be easier to accept your last line chart if you were using sparklines.

<a href="http://peltiertech.com/WordPress/" rel="nofollow noopener" target="_blank">Jon Peltier</a> says…
>	Replacing the bar chart with a line chart was a good move. The rest was underkill. There was little enough data in the original chart. You chose to place all the curvature at the beginning, arbitrarily. Removing the data points makes this a bit dishonest.

<a href="http://twitter.com/Biff_Bruise" rel="nofollow noopener" target="_blank">David N</a> says…
>	Just to play a bit of Devil's Advocate - so would a LOESS curve be a "... bit dishonest" of a data representation? As the abstract version is essentially (although not exactly) that.

<a href="http://peltiertech.com/WordPress/" rel="nofollow noopener" target="_blank">Jon Peltier</a> says…
>	David -
>	
>	Good point. That's why I always show a LOESS curve with the points in the background. But it's dishonest to enhance detail from one part of the curve (the bottom half's curvature) while ignoring the rest (making the top half straight). In fact, if you lay the smoothed curve over the segmented curve that omits no points, you will find that the smooth curve falls beneath three of the points, not just beneath the bump for '78.
>	
>	The only reason not to use a straight line fit is to support an argument that prices are increasing faster in the 80's than in the 70's. But if we look at percent change, it was less than 35% from 72-74, more than 55% from 74-76 and 76-78 and about 25% from 78-80 and 80-82.

<a href="http://twitter.com/Biff_Bruise" rel="nofollow noopener" target="_blank">David N</a> says…
>	Absolutely agreed on the background - as in, (very) light gray - actual data points.
>	
>	And I (and hopefully everyone else whom reads this far) appreciate the additional info/insights you provided.

<a href="http://peltiertech.com/WordPress/" rel="nofollow noopener" target="_blank">Jon Peltier</a> says…
>	Yeah, sorry if I'm letting my data loss aversion show, as well as my distrust for charts without points.

Danyel F says…
>	I'm going to have to join several of the others in arguing for overkill. Lots of the "deceptive" charts that I see involve carefully selecting sampling intervals, hiding bumps by smoothing averages, and implying trends. 
>	
>	A person seeing that last chart without hearing your verbal caveats ("the apparent thousands of points are actually six of them, sampled every other year--and they've been smoothed to hell and back") would make a false statement about the chart. 
>	
>	If all you want to communicate is "it went up, you know", I'd go with this. 
>	http://www.my-hometownrealty.com/wp-content/uploads/2011/04/arrow-up.jpg
>	
>	Otherwise, if you want data--and not art--let's put in a couple of data points. Just here and there.

<a href="http://www.groundtruthtrekking.org" rel="nofollow noopener" target="_blank">Hig</a> says…
>	Overall I agree with the folks arguing this is underkill.  I don't think the details distract.
>	
>	When I read a graph, I look for variation in the data to get a sense of noise in the system.  The slight up and down in the data-precise curve doesn't distract me from the overall increase, but it does tell me that there's actually very little deviation from this trend.
>	
>	Given the original data was election expenditures, I'd argue for a bar graph, not a line graph.  The line suggests that interpolating between expenditures is reasonable - e.g. that expenditures in 1977 were around $150 million.  Actually they were 0 though, since it's not an election year.  Bars that are relatively narrow would match the data better, and I don't think anyone would have trouble seeing the rising trend.  However, if the change in trend is critical, I can see the argument for ignoring this subtlety.
>	
>	Also the graph would lend itself to being small since there's not much in it.  Two labeled points on each axis and you could shrink it to &lt;100x100 pixels.
