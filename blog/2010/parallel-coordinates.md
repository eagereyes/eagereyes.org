---
title: "Parallel Coordinates"
description: "Parallel coordinates are one of the most famous visualization techniques, and among the most common subjects of academic papers in visualization. While initially confusing, they are a very powerful tool for understanding multi-dimensional numerical datasets."
date: 2010-05-13 10:56:42
tags: techniques
featuredImage: https://media.eagereyes.org/media/2010/parcoords-full.png
---

<p align="center"><img src="https://media.eagereyes.org/media/2010/parcoords-full.png" width="560" height="364" alt="Parallel Coordinates" /></p>

# Parallel Coordinates

Parallel coordinates are one of the most famous visualization techniques, and among the most common subjects of academic papers in visualization. While initially confusing, they are a very powerful tool for understanding multi-dimensional numerical datasets.

## The Technique

The usual way of describing parallel coordinates would be to talk about high-dimensional spaces and how the technique lays out coordinate axes in parallel rather than orthogonal to each other. But there's a much simpler way of looking at it: as the representation of a data table. This one describes car models released from 1970 to 1982, and contains their mileage (MPG), number of cylinders, horsepower, weight, and year they were introduced (among others).

<p class="img"><img src="https://media.eagereyes.org/media/2010/cars-table.png" width="371" height="226" alt="Data table" style="margin-left:auto;margin-right:auto;" /></p>

Now imagine each of these columns being mapped onto a vertical axis in the image above. Each data value would end up somewhere along the line, scaled to lie between the minimum at the bottom and the maximum at the top. A pure collection of points would not be terribly useful, however, so the points belonging to the same record (row) are connected with lines. That creates the characteristic jumble of lines parallel coordinates are famous for.

To make some sense out of this, the easiest way is to forget the part about records that span the entire width, and look at the space between each pair of axes. Mouse over the image below to focus on just one pair of axes (this likely will not work in your newsreader, you'll have to <a href="/techniques/parallel-coordinates">visit the website</a>). Look at the patterns in each of the spaces between the axes.

<div style="background:url(http://eagereyes.org/media/2010/parcoords-faded.png);width:560px;height:364px;">
<img class="ghost" src="https://media.eagereyes.org/media/2010/parcoords1.png" style="margin-left:23px;opacity:0;padding:0;border:0;margin-top:35px;margin-right:0;display:inline;"><img class="ghost" src="https://media.eagereyes.org/media/2010/parcoords2.png" style="opacity:0;padding:0;border:0;margin-top:35px;margin-right:0;margin-left:1px;display:inline;"><img class="ghost" src="https://media.eagereyes.org/media/2010/parcoords3.png" style="opacity:0;padding:0;border:0;margin-top:35px;margin-right:0;margin-left:1px;display:inline;"><img class="ghost" src="https://media.eagereyes.org/media/2010/parcoords4.png" style="opacity:0;padding:0;border:0;margin-top:35px;margin-right:0;margin-left:1px;display:inline;">
</div>

You can tell a lot about the data from looking at this visualization. The cylinders axis stands out because it only has a few different values. The number of cylinders can only be a whole number, and there aren't more than eight here, so all the lines have to pass through a small number of points. Data like this, and also categorical data, are usually not well suited for parallel coordinates. As long as there is only one or two, it's not a problem, but when the data is largely or completely categorical, parallel coordinates do not show any useful information anymore (that's why we developed <a href="/parallel-sets">Parallel Sets</a>).

In the space between <em>MPG</em> and <em>cylinders</em>, you can tell that eight-cylinder cars generally have lower mileage than six- and four-cylinder ones. Just follow the lines and look at how they cross: lots of crossing lines are an indication of an inverse relationship, and that is clearly the case here: the more cylinders, the lower the mileage.

The correlation is much more direct between <em>cylinders</em> and <em>horsepower</em>: more cylinders means more horses. There are some crossing lines here as well, of course, so more cylinders do not always mean more power, but the general trend is clearly there.

Between <em>horsepower</em> and <em>weight</em>, the situation is similar: more horsepower means heavier cars in general, but there is some spread in the values of course. There is also one exception of a high-horsepower eight-cylinder car that is very light. Can you spot that outlier?

Finally, the lines between <em>weight</em> and <em>year</em> cross over a lot, indicating that cars got lighter over the years. You can also easily tell that the <em>year</em> axis only records a small number of different values, similar to the <em>cylinders</em>, from the triangular shapes converging on a few points.

While this is a very simple example, it shows the typical structures you would find in most datasets.

## Brushing

In addition to some experience in reading parallel coordinates, the best way to get to know a dataset using the technique is clearly interaction. The main one in parallel coordinates is called brushing, for reasons that should be obvious from looking at the image below. For this to make sense, we need to look at all axes.

<p class="img"><img src="https://media.eagereyes.org/media/2010/parcoords-80s.png" width="560" height="364" alt="Parallel Coordinates, brushing 1980-82" /></p>

Here, I brushed the years 1980 to 1982 on the (right-most) <em>year</em> axis. The result is a brushed part of the lines in heavy black, with the rest still in the background in gray for context. Looking at the axes from right to left you can see that the car models in this selection were almost all in the lower half of the weight range, and all of them were in the lower half in terms of horsepower. The distribution of cylinders is also interesting: there only seems to be a single eight-cylinder car in this selection, all others are six cylinders or below. Mileage is also mostly above the mean value for all cars.

<p class="img"><img src="https://media.eagereyes.org/media/2010/parcoords-70s.png" width="560" height="364" alt="Parallel Coordinates, brushing 1970-72" /></p>

Brushing the years 1970 to 1972 yields a very different image: weights, power, etc. are all over the place, and mileage is mostly in the lower half. While higher values are to be expected, it is interesting to see that there was quite a spectrum of cars at the beginning of the decade, not just heavy eight-cylinder ones. The trend over the years was towards lighter, more efficient cars, though.

There is more to be said about interaction, of course: you can usually reorder axes to compare different ones side by side, combine brushing on different axes, flip axes (the arrows at the top of the images show the direction of the axis), etc.

## Limitations

There are of course limits to what can be done with parallel coordinates. When the number of data items gets very high, there is a lot of overplotting that can make it impossible to see anything. The number of dimensions on screen also needs to be below about a dozen at the same time to really make sense, anything above that gets very difficult to read.

There is a lot of work in visualization on automatic axes reordering, clustering of similar axes, etc. that makes this easier for high-dimensional data. But in general, the technique simply works best for datasets with a moderate number of dimensions and no more than a few thousand records.

Also, as mentioned above, the data needs to be numerical. The technique does not work well for categorical data or data with few values per axis.

## Software

As usual in visualization, there are lots of papers but not much software. To play with parallel coordinates in the browser, there is a <a href="http://vis.stanford.edu/protovis/ex/cars.html">Protovis example using the cars dataset</a> where you can brush on all dimensions and also pick a dimension to color the values by (which can show some interesting patterns).

There is also an abandoned Java implementation called <a href="http://www.mediavirus.org/parvis">ParVis</a> that I used to create the images for this article. I created <a href="http://github.com/eagereyes/ParVis">a mirror that is also an eclipse project</a> that fixes a few small issues.

## Conclusions

Parallel coordinates are a very versatile and useful technique for finding structures in moderately-sized datasets. With a bit of experience, it is possible to very quickly recognize patterns and even estimate the strength of correlations, etc.

While they may look frightening at first, they're actually very approachable. Look back at the image at the top of this article: it's really not that complicated, is it?


_Posted by <a href="/about">Robert Kosara</a> on May 13, 2010_


<aside class="comments">

---
## Comments

<a href="http://www.vizworld.com" rel="nofollow noopener" target="_blank">Randall HAnd</a> says…
>	Parallel Coordinates are also available in VisIt.

John says…
>	I realize all the axes go from low on the bottom to high on the top, but wouldn't it be more clear to reverse that for the mpg? Then there'd be less crossing and more visual clarity about the relationship between fuel efficiency and cylinders?
>	
>	(If this were a European chart,you'd be there already, because it would likely be liters required to go100km, rather than mpg, i.e., the effective inverse of the existing axis.)

Robert Kosara says…
>	It depends on how you look at it. If you want higher to be better, the current layout works well, even if there are more crossings. Also, I think that crossings actually help see some of the patterns when the lines cross at close to 90º angles. I also wanted to show the crossing-over, so it works well for the example. But in most programs you can easily flip axes.

<a href="http://carlosscheidegger.wordpress.com" rel="nofollow noopener" target="_blank">Carlos Scheidegger</a> says…
>	(In case you haven't) You should take a look at Heinrich and Weiskopf's Continuous Parallel Coordinates from last year: http://www.vis.uni-stuttgart.de/~weiskopf/publications/vis09_pc.pdf . It is, I think, one of the possible ways of coping with more than a few thousand data points in a well-principled way (and it looks pretty nice). I'd like to see it applied to "discrete" data as well, and the way to do that is simple - one just does "beams" of non-zero thickness lines, and looks at the density per pixel.
>	
>	On an entirely different note, the main problem I have with parallel coordinates is that I think they appear to give a full one-to-one mapping between the R^n datasets and PC plots, but it's not the case. In a sense, you think you're looking at the full n-dimension representation of the data (one line per one full plot), but really you're looking at a semantic equivalent to n-1 scatterplots. 
>	
>	To give a concrete example, there exists two different three-d datasets such that their parallel coordinates plots are the same (under the identity axis ordering): S1 = ((0,2,1), (1,2,3)) and S2 = ((0,2,3), (1,2,1)). I'd like to understand better how to make parallel coordinates-like plots that don't have such issues. I'm sure people have looked at the obvious things like quadratic splines for encoding consecutive dimension triples, etc. but I wonder if there's a better overall approach; I find that does not help much in this situation either. (Oh look, trivial paper idea: select the view for which there's the least amount of "visualization space loss". This must have been done before)

<a href="http://www.theusRus.de/" rel="nofollow noopener" target="_blank">Martin Theus</a> says…
>	There are <strong>three</strong> advanced points that should be added to this post:<br> <br>
>	(i) The Cars data is really tiny, i.e., one of the major problems of parallel coordinate overplotting is no issue here. Parallel coordinate definitely need things like <strong>alpha transparency</strong> in order to be scalable.<br>
>	(ii) (interactive) <strong>Reordering</strong> of the axes is quite crucial. Otherwise you will get stuck with some default order in the dataset, which will make you miss most of the adjacencies - and adjacencies are what shows interesting information in this kind of plot.<br>
>	(iii) The <strong>scaling</strong> of each axis between its min and max value is somewhat arbitrary, as these values are not robust at all. <strong>Alignment</strong> at mean or median, or at some predefined value can make a huge difference in conjunction with individual or common scalings.<br> <br>
>	All these features can be found in e.g. <a href="http://www.theusRus.de/Mondrian">Mondrian</a>, so you may try it out and see yourself.<br><br>
>	PS:<br>
>	Parallel coordinates are a powerful tool, but we should not forget that the good old scatterplot helps much more when we only look at the relationship of two variables - unless you are <a href="http://www.math.tau.ac.il/~aiisreal/">Alfred Inselberg</a>.

<a href="http://www.visualquest.in/" rel="nofollow noopener" target="_blank">Paresh</a> says…
>	Parallel Coordinates is a fascinating technique.
>	
>	I have recently explored the potential of analyzing multi dimensional data using this technique in Excel  on my blog www.visualquest.in  
>	
>	Though I have not dealt with this in my post, it should be easy to re-order the axis. 
>	
>	
>	
>	
>	

<a href="http://www.cs.tau.ac.il/~aiisreal/" rel="nofollow noopener" target="_blank">Alfred Inselberg</a> says…
>	Thanks to Martin Theus for the nice remark. I suggest that  you look at my book
>	
>	Parallel Coordinates - This book is about visualization, systematically incorporating the fantastic human pattern recognition into the problem-solving ... www.springer.com/mathematics/.../978-0-387-21507-5 -
>	
>	especially in Ch. 10 with many examples of multivariate datasets.  To summarize:
>	
>	1. Information is ocncentrated at the "crossings". The key is to find patterns and once they are  discovered much "clutter" can be discarded. 
>	2. The exploration needs to be INTERACTIVE and the misnamed "overplotting problem" usually turns out to be a blessing
>	3. The axis ordering has been studied and there are some neat results.
>	4. Direct exploration does not always work and there are modern methods which overcome many of the difficulties.
>	5. A research effort on Intelligent processing of datasets is proposed to extract
>	multivariate relations and display them as 2-D patterns ("multidimensional graphs") without any display clutter. This is where our efforts are best directed rather than in proposing "variants" (with no underlying geometridal understanding) which have NOT had any notable success IN GENERAL.
>	
>	Best regards
>	
>	AI 
>	
>	.

Luigi says…
>	I perfectly agree with you. 
>	
>	About your idea: I think that it is possible to define some measure for "visualization space loss", especially when having class-labeled data objects. On one hand, one can compute some class separability value within the multi-dimensional space; on the other hand, relying on visual proximities among the polylines (or curves), it is possible to do the same in the 2-dimensional space. The information loss would then be easy to evaluate.
>	
>	In my opinion, I would like to see more sophisticated (and analytical) ways to evaluate and thus propose data projections.

Muhammad Asaduzzaman says…
>	Very good description. Helps me a lot.

<a href="http://www.ppcl.com" rel="nofollow noopener" target="_blank">Robin Brooks</a> says…
>	Industrial users wanting a fully-supported commercial offering of parallel coordinates called CVE and developed over many years starting from Prof. Inselbergs original IBM PVE product should visit www.ppcl.com. And, as Prof Inselberg points out, over-plotting is not a problem.

<a href="http://uphcm.edu.vn" rel="nofollow noopener" target="_blank">Tan Nguyên</a> says…
>	Advantages and limitations of Parallel Coordinates
>	
>	data I use as pharmaceuticals

Many says…
>	Hi Robert,
>	I know this is old but I want to thank you for it anyway.
>	I learned a lot about this kind of visualization and it served me as a point of inspiration to learn more and more important to do this:
>	
>	https://github.com/usmany/paralellData
>	
>	I was able to render the data directly to Illustrator using javascript ;)
>	
>	Thank you very much again

<a href="https:www.ppcl.com" rel="nofollow noopener" target="_blank">Robin Brooks</a> says…
>	The Wikipedia entry lists a number of software products able to create parallel coordinate plots but not PPCL's C-Visual Explorer (CVE) which is probably the most developed and functional product available and is used by many large corporations. We support datasets of 1000+ variables and the number of points is only limited by addressing in  64-bits. The better sizing comparison is based on the product of Rows X Variables. CVE could manage 80M in a 32-bit environment before starting to degrade, we have reached over 120M in a Windows environment and have not yet encountered a maximum. Over-plotting is not a problem when the plot is supported by a built-in boolean query system that, we think, is much easier to use than brushing.

</aside>

