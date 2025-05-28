<a href="http://had.co.nz" rel="nofollow noopener" target="_blank">hadley wickham</a> says…
>	How are they different?  They are both 2d representations of one D data, with varying conditions on the way the area is divided up.  
>	
>	I think in most cases (especially when the number of levels are small) side-by-side dotcharts or barcharts are better, as comparing length on a common scale is easier than comparing area (see Cleveland's paper on the topic)

Robert Kosara says…
>	<p>Sure, they are both 2D and rectilinear, but they show very different data. The square pie chart is for completely flat data that adds up to 100%, whereas the treemap shows structured data: a hierarchy. They may end up looking the same, but the meaning is not. I realize that treemaps are used for all kinds of unstructured data too, and so I guess in that sense they can be similar - but that is only when you considerably abuse the treemap. </p><p>The good thing about using area here is that you get a much higher resolution. For 100%, you need at least 100 pixels, and that will not be precisely readable. You would need much longer lines to make it possible for viewers to easily read the values. The square pie chart effectively folds the linear bar into an area that is much faster to understand. I know the perceptual issues, but I wonder if they can be circumvented by using a grid and showing areas as part of larger ones. </p>

<a href="http://had.co.nz" rel="nofollow noopener" target="_blank">Hadley</a> says…
>	I think you need to think more deeply about the treemap.  Yes, a treemap displays a hierarchy of data, but square piechart is a subset of the treemap - for datasets with only one level of hierarchy.  Thinking about a tree map for a hierarchy with only one level, what does it do?  It takes a rectangular area (or, in general, any shape) and divides it up into pieces so that the area of each piece is proportional to some value associated with each piece - this is exactly what the square piechart does.  Different variants of the treemap use different principles to divide up the space.
>	
>	I agree that the small aspect ratio allows you to pack more square pie charts in to a smaller amount of space, but I disagree that this is useful.  The perceptual problems associated with assessing area are a considerable disadvantage.  Sure you can count up the squares, but that's not really any different to taking a protracter and measuring the angles on a piechart - it's the low level processing that's important.

Robert Kosara says…
>	<p>True, but I maintain that this is an abuse of the treemap. Why use a treemap if your hierarchy is only one level deep? Why not use a square pie chart instead? :p The point here is that there is a difference in what the methods display, even if they end up looking the same. This is a semantic difference, not a visual one. The treemap does not subsume everything that is a partition of a rectangular space, otherwise you could argue that a bar chart is just a treemap that uses a special type of layout.</p><p>I don&#39;t think you have to count the fields to see them better than in a round pie chart. The grid gives you cues as to how much space is used up by what. I haven&#39;t tested this, but I think that if you compared a version with and a version without a grid, the one with the grid would do much better. I know that linear is more accurate than area, but I think that in a visualization context, other factors matter as well. </p>

<a href="http://had.co.nz" rel="nofollow noopener" target="_blank">Hadley Wickham</a> says…
>	Imagine you have a hierarchy with two levels and you want to display it with a square piechart - is it a square piechart or is it a treemap?  What I'm trying to get it is that it's important to think about the principles that underly a visualisation, not the superficial differences.  A square piechart and a treemap are similar at a deep level (and yes, in some ways a barchart is like a treemap).
>	
>	I'm sure the version with a grid would do better, but I doubt it would do as well as a side-by-side barchart.  

<a href="http://had.co.nz" rel="nofollow noopener" target="_blank">Hadley Wickham</a> says…
>	I just noticed that Naomi Robbins mention these in her book "Creating more effective graphs", but calls them waffle charts, and cites the first use in a NY Times article in 2001.  

Robert Kosara says…
>	<p>
>	The book I found them in is from 1997, but the idea is probably much older. Wolfgang Aigner has suggested that they were in fact invented by Otto Neurath, which would mean some time in the 1920s.
>	</p>
>	

<a href="http://had.co.nz" rel="nofollow noopener" target="_blank">Hadley Wickham</a> says…
>	It would be great to track down an original reference.  Some historical context is always nice.

<a href="http://twitter.com/_r_c_a" rel="nofollow noopener" target="_blank">Ruben C. Arslan (@_r_c_a)</a> says…
>	Hi Hadley,
>	I think if you're trying to compare proportions and if those proportions can be very small (i.e. the squares or rows of squares you'll end up counting are few).
>	I put a waffle chart and a bar chart of the same (real) data side-by-side here http://rpubs.com/rubenarslan/waffle_plots
>	
>	I think the best use case is maybe if the number of levels is one or two. I've never seen anyone make a bar chart of just one number.
>	I think we might agree that the waffle was more effective than a series of bar charts could have been for the XKCD money chart.
>	In that case these are the advantages I saw:
>	1. display data at different orders of magnitude, but use the waffle chart itself as the legend key
>	2. No need for axes
>	3. Hence, lots of freedom for layout.
>	4. Differences on such vast scales that they are readily apparent.
