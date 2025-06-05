<p align="center"><img src="https://media.eagereyes.org/media/2010/parcoords-full.png" width="560" height="364" alt="Parallel Coordinates" /></p>

# Parallel Coordinates

Parallel coordinates are one of the most famous visualization techniques, and among the most common subjects of academic papers in visualization. While initially confusing, they are a very powerful tool for understanding multi-dimensional numerical datasets.

## The Technique

The usual way of describing parallel coordinates would be to talk about high-dimensional spaces and how the technique lays out coordinate axes in parallel rather than orthogonal to each other. But there's a much simpler way of looking at it: as the representation of a data table. This one describes car models released from 1970 to 1982, and contains their mileage (MPG), number of cylinders, horsepower, weight, and year they were introduced (among others).

<p class="img"><img src="https://media.eagereyes.org/media/2010/cars-table.png" width="371" height="226" alt="Data table" style="margin-left:auto;margin-right:auto;" /></p>

Now imagine each of these columns being mapped onto a vertical axis in the image above. Each data value would end up somewhere along the line, scaled to lie between the minimum at the bottom and the maximum at the top. A pure collection of points would not be terribly useful, however, so the points belonging to the same record (row) are connected with lines. That creates the characteristic jumble of lines parallel coordinates are famous for.

To make some sense out of this, the easiest way is to forget the part about records that span the entire width, and look at the space between each pair of axes. Mouse over the image below to focus on just one pair of axes (this likely will not work in your newsreader, you'll have to <a href="/techniques/parallel-coordinates">visit the website</a>). Look at the patterns in each of the spaces between the axes.

<div style="background:url(https://media.eagereyes.org/media/2010/parcoords-faded.png);width:560px;height:364px;">
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
