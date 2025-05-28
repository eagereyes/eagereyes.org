<p align="center"><img src="https://media.eagereyes.org/media/2008/LinearQuadratic-teaser.png" border="0" alt="Linear vs. Quadratic" /></p>

# Linear vs. Quadratic Change

One of the most common mistakes in chart design is to scale an area by two sides at the same time, producing a quadratic effect for a linear change. That overstates the larger numbers and produces a badly skewed chart. A little care and some basic high-school math can help avoid the problem.

The following detail from a information graphic produced by Princeton's <a href="http://www.princeton.edu/~ina/infographics/index.html">International Networks Archive</a> illustrates the problem (the numbers are presumably from 2002):

<p align="center"><img src="https://media.eagereyes.org/media/2008/FastFood.jpg" border="0" alt="Fast Food Chains" /></p>

Comparing Starbucks ($4.1bn) and KFC ($8.2bn), the problem becomes clear: the difference is a factor of two, but the KFC logo has four times the area of the Starbucks logo (even more because one is square and the other round). This can be seen in a number of the graphics on that website, though they also have some where they scale correctly.

The reason for the problem here is the use of logos (or of images, more generally) to make charts look better. Scaling a logo in only one dimension (which would be done in a bar chart) does not work because the image would look stretched and ugly. So instead, the image is scaled in two dimensions, leading to a perceived difference that is the square of the actual difference.

In more general terms, a linear change (I will use a factor of two to illustrate this)

<p class="img" style="text-align: center;"><img src="https://media.eagereyes.org/media/2008/LinearQuadratic-Line.png" border="0" alt="Linear Change" /></p>

becomes a quadratic change:

<p class="img" style="text-align: center;"><img src="https://media.eagereyes.org/media/2008/LinearQuadratic-Square.png" border="0" alt="Quadratic Change" /></p>

Or, to employ a bit of high-school math: The area of a square A = a<sup>2</sup>, with a being the length of side of the square. If we double the side length, we get A' = (2a)<sup>2</sup> = 4a<sup>2</sup>: four times the area. This is the case for many other shapes as well, including circles and circle segments.

<p class="img" style="text-align: center;"><img src="https://media.eagereyes.org/media/2008/LinearQuadratic-QuarterCircle.png" border="0" alt="Quadratic Change in Circle" /></p>

That last part was actually the subject of a discussion I had a while ago with a rather senior visualization person. He did not believe that changing a circle segment's radius would lead to a quadratic increase in its area. It's easy to show, though: a circle's area is r<sup>2</sup>&pi; (r being the circle's radius), the area of a circle segment that covers an angle &theta; is r<sup>2</sup>&pi;&middot;sin(&theta;). It is no more difficult to show that doubling the radius will quadruple the area than with the square above.

<a href="http://www.florence-nightingale.co.uk/">Florence Nightingale</a> already knew this in 1858 when she developed her <a href="http://www.uh.edu/engines/epi1712.htm">coxcomb chart</a> (a predecessor to the pie chart): she represented the numbers of soldiers using the area, not the radius, of the circle segments.

<p class="img" style="text-align: center;"><img src="https://media.eagereyes.org/media/2008/coxcombchart.jpg" border="0" alt="Nightingale's Coxcomb chart" /></p>

A similar effect can be seen in the <a href="http://chandoo.org/wp/2008/09/18/better-radar-charts-excel/">petal chart</a> or <a href="http://davis.wpi.edu/~xmdv/vis_starglyph.html">star glyph</a>, which connects points on a number of axes that radiate from a common point. Whether they are filled in or not, the impression is that of an enclosed area, and that changes in a quadratic way similar to the circle segments above.

<p class="img" style="text-align: center;"><img src="https://media.eagereyes.org/media/2008/starglyph-cropped.png" border="0" alt="star glyphs" /></p>

The solution? Either use a better visualization (star glyphs in particular are very difficult to read) or scale your circles, squares, and other lengths by the square root of the value you want to represent. That makes the area scale linearly with the value that is to be represented.
