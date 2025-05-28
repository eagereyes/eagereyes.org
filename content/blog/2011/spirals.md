<p align="center"><img src="https://media.eagereyes.org/media/2011/spiral-teaser.png" alt=""/></p>

# Spirals for Periodic Data

The common wisdom in visualization is that to find periodicity in data, it should be displayed on a spiral whose period the user can control. Repeating patterns are easy to spot on a spiral, and its layout suggests repetition. But are spirals really the most effective way of finding periodic patterns? Here is an interactive version that lets you compare spirals against a rectangular layout to find out for yourself.<br>

## Spirals

There are many different types of spiral, the one used here is an <a href="http://en.wikipedia.org/wiki/Archimedean_spiral">Archimedean Spiral</a>. This particular spiral maps the same amount of data to the same angle, which means that the line segments the spiral is made up from get longer the further away from the center they are.

One of the arguments for spirals is that they neatly represent the idea of repetition, while avoiding a jump as it would be necessary with concentric circles or most other types of layout. The spiral layout is also much more precise in finding periodicity than a bar chart, for example, because similar distances between bars might look periodic when they are in fact not.

I know of two papers that propose spirals for periodic data: John V. Carlis and Joseph A. Konstan, <em>Interactive Visualization of Serial Periodic Data</em>, Proceedings User Interface Software and Technology (UIST), pp. 29-38, 1998; and Marc Weber, Marc Alexa, Wolfgang Müller, <em>Visualizing Time-Series on Spirals</em>, Proceedings Information Visualization (InfoVis), pp. 7-13, 2001. It looks like Weber et al. were not aware of the Carlis/Konstan paper. Most other papers I’ve found just report on one of those papers, and nobody seems to have conducted any kind of study to test the assertion that spirals are useful for periodic data.

## Alternatives

After reading <a href="/blog/2011/information-visualization-vs-statistical-graphics">my article on statistical graphics</a>, Stephen Few suggested a rectangular visualization similar to a stacked bar chart, arguing that it would be easier to see patterns stack up in one direction rather than having to look around the spiral. This would also avoid the spiral’s distortion of the interval lengths, making the comparison more precise.

Using this type of layout instead of the spiral is something that has also occurred to me before, but I used to dismiss it for two reasons: a stacked layout has a discontinuity on the edge, where the data jumps to the next row, and the change between different period values would lead to a lot of movement in ways that aren’t obvious to the user (not just left/right within a row but also between rows). I also didn’t think that the increase in segment length of the data values was really such a big issue.

There are probably other alternatives one could think of, but the stacking is clearly the most obvious. To compare between this and the spiral, I have implemented both and provided a simple way to switch between them.

## Interactive Version

<em>This part is unfortunately not working right now… will be fixed soon!</em>

Below is an interactive version of a spiral display (implemented using <a href="http://protovis.org/">Protovis</a>), so you can try it out and draw your own conclusions. This requires a current version of Safari, Chrome, or FireFox (this should work in Internet Explorer 9 in principle, but for some reason doesn’t).

Move the slider to control the period of the spiral. Change the display type between spiral and bars with the radio buttons on the left.

The two datasets available are: <em>births</em> is a dataset listing the <a href="http://www.dartmouth.edu/~chance/teaching_aids/data.html">number of people born each day in the U.S. during the year 1978</a>, <em>downloads</em> is the <a href="/blog/2009/appstore-billion-apps-live-visualization-html">number of app downloads per hour from Apple's AppStore during the run-up to the billionth app download in April 2009</a>. They both show very clear periodic patterns, at different periods.

I realize that showing the period as a number will bias the exploration, but try to ignore it and only look at the visualization at first. Also, this is a very simple prototype: in a real program, there would be a way to find out the actual numbers, what days/hours they correspond to, etc. But this should be sufficient to show the point I am interested in here, additional features can be added fairly easily.

## Lessons Learned

First, try it out for yourself! It takes only a few minutes to get the hang of it, and the following will make a lot more sense.

Implementing the prototype was a bit less straight-forward than it may appear (and than I expected). One of the variables that I found to be important early on is the line width. When the period changes, so does the distance between the spiral arms. A constant line width means gaps between the lines, making comparison very difficult. Without keeping the line width in sync with the distance between the spiral arms, the rectangular version clearly wins.

<p align="center"><img src="https://media.eagereyes.org/media/2011/twospirals.png" width="600" height="300" alt="spiral variations"/></p>


The rectangular visualization also has its challenges, though. The implementation above tries to use the space without distorting the individual rectangles too much. It will squeeze the height to fit them into the space it has, but not make them higher than a square. Not restricting the height leads to much more difficult comparison between the rows, without any perceivable advantage from filling the space.

Space between the rows and spiral arms, as well as between the line segments, is also up for debate. I find the single-pixel line that's there right now to be a good compromise between providing separation and not interfering with pattern recognition too much. Removing the separation might make it a bit easier to see patterns, but also harder to see the individual data points.

I do find the movement of values to be more chaotic in the rectangular case than on the spiral, just as I thought I would. The spiral is a bit better in this regard, though mostly for larger intervals. In terms of detecting intervals, the rectangular version has a slight advantage in my opinion. The spiral is much more interesting to look at, but I find that it requires more effort to actually see the pattern. It's not a huge advantage, but it's unexpected given the typical assumption in the literature.

## Conclusions

There are more variables to play with, like the scaling of values, using bars instead of colors in both cases, etc. But I think that it's clear that spirals do not have the advantage that is currently assumed. They aren't terrible either, though, and I think that the circular visual metaphor is still useful to get the idea of periodic patterns across.

What this shows, however, is that there is a clear need to question assertions and assumptions, even ones that have been repeated in the literature multiple times. In this case, I don't think that a controlled user study would reveal a lot of additional information; just trying it out for yourself is enough to see it.

<hr class="wp-block-separator"/>

As a side note, it's also interesting to compare implementations. Carlis and Konstan report that their prototype consisted of 11,000 lines of Tcl and C code, and used OpenGL for rendering. In comparison, my spiral implementation using Protovis fits into about 20 lines of JavaScript, plus a bit of HTML. Carlis and Konstan admittedly provide an insane amount of customization in their interface, but it's still neat to be able to do things so much more quickly and just run them in the browser.
