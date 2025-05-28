# Continuous Values and Baselines

One of the most common mistakes people make when creating charts is to cut off the vertical axis. But why is that a problem? And what can you do when you need to show data where the amount of change is small compared to the absolute values?

When we think of <a title="Data: Continuous vs. Categorical" href="/basics/data-continuous-vs-categorical">continuous data</a>, we almost always think of values that have a meaningful zero. There is no question what an amount of money is measured from, we understand the meaning of zero money. The same is true for most other things: length, weight, volume, etc. all have an obvious zero. It doesn’t matter what unit you use, zero meters is zero feet is zero furlongs is zero lightyears.

As a consequence, we can think in terms of multiples, without even caring about units. Something being twice as heavy as something else is meaningful independently of whether you weigh using pounds or kilograms, and something is twice expensive whether you pay in Euros or Dollars or Yen.

## Bars: Length Is Just Another Unit

When data gets mapped to visual variables for visualization, we tend to make the same assumptions. A bar that is twice as long represents a value that’s twice as big. But that is only true if that bar starts from zero. If it was cut off, that is no longer true.

The following image shows the monthly sales of a fictitious coffee chain over a few months. The left bar chart starts at zero, the right one at $29K. Notice the difference?

<p align="center"><img class="aligncenter size-full wp-image-2336" alt="Bars, with baseline 0 and baseline $29K" src="https://media.eagereyes.org/wp-content/uploads/2013/04/baseline-bars.png" width="600" height="190" /></p>

In the right-hand chart, the bar for February appears to be roughly twice as high as the one for January. Twice the bar size means twice the value, right? But looking at the chart on the left, it’s obvious that the change is rather small.

The first thing to do when looking at a chart, therefore, is to make sure you understand the vertical axis. If it starts at 0, it is much easier to read the chart without being misled.

## Lines Don’t Need Baselines?

Some people suggest that in contrast to bar charts, line charts are not sensitive to the baseline problem. However, I disagree. Look at the same data as before, this time shown as a line chart.

<p align="center"><img class="aligncenter size-full wp-image-2338" alt="Lines, with baseline 0 and baseline $29K" src="https://media.eagereyes.org/wp-content/uploads/2013/04/baseline-lines.png" width="600" height="190" /></p>

Is the change not much more dramatic in the right-hand part of this image? The line chart maps the value to vertical position rather than length, which is less obviously connected to the axis. But when the points are connected, we tend to think in terms of the distance from the axis, not in terms of a few points floating in space.

Line charts with a non-zero baseline are very common. They are still problematic, however, because the apparent change can be deceiving. Having to look at the numbers on the axis to figure out the amount of change requires a lot more mental work and partly defeats the point of the chart.

## Mapping Change

So what alternative do we have when we want to create a chart that makes the change visible, but the amount of change is small compared to the absolute values? One way is to plot the change separately. This could be done as percent or absolute difference, here it is absolute difference (same values shown as lines and bars).

<p align="center"><img class="aligncenter size-full wp-image-2337" alt="Change, shown using lines or bars" src="https://media.eagereyes.org/wp-content/uploads/2013/04/baseline-change.png" width="600" height="190" /></p>

Now the scale for the amount is independent of the scale for the change. This also makes it easy to see whether the change is positive or negative, because the relation with the zero line is very visually salient (especially when using bars). Also, the rate of change is much more obvious. While that can be seen in the bar and line charts, it is much harder to get a good sense of it.

Showing small changes in large values is a challenge, but it helps to ask, what do we care about here? What do we need to know? That should guide the way the data is shown.
