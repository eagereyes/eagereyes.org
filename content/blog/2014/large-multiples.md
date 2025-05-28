# Large Multiples

Getting a sense of scale can be difficult, and the usual chart types like bars and lines don’t help. Showing scale requires a different approach, one that makes the multiplier directly visible.

## Bars

In the U.S., CEOs on average make 354 times as much as workers, according to <a href="http://www.washingtonpost.com/blogs/wonkblog/wp/2014/09/25/the-pay-gap-between-ceos-and-workers-is-much-worse-than-you-realize/">this recent posting on the Washington Post’s <em>Wonkblog</em></a>. That is an astounding number. Put differently, a CEO makes in one day almost as much as the worker makes in an entire year. How do we show this enormous difference?

Roberto A. Ferdman at Wonkblog shows the numbers as a bar chart.

<p align="center"><img class="aligncenter size-medium wp-image-8364" src="https://media.eagereyes.org/wp-content/uploads/2014/09/wonkblog-CEOs-730x577.png" alt="Wonkblog: It pays to be CEO in the U.S." width="730" height="577" /></p>

The bars compare between countries, but I was interested in the comparison between the worker and the CEO. Just how much more is 354 times more? This chart doesn't tell me that.

## Multiples

An article on Quartz from late last year looks at similar data, and translates it into <a href="http://qz.com/156522/how-many-months-it-takes-an-average-worker-to-earn-what-the-ceo-makes-in-an-hour/">how many months workers at different companies would have to work to make the same as the CEO does in <em>one hour</em></a>. The disparities in these examples are even more staggering, since while the Wonkblog chart above looked at averages, Quartz used specific – extreme – examples. For example, McDonald’s CEO makes 1120 times what a McDonald’s worker makes. This is shown as a sort of calendar that has months marked for how long the worker needs to work to make that much.

<p align="center"><img class="aligncenter size-medium wp-image-8363" src="https://media.eagereyes.org/wp-content/uploads/2014/09/qz-CEOs-730x1574.png" alt="Quartz: comparison of worker to CEO" width="730" height="1574" /></p>

While that illustrates the time, it kind of misses the point. Showing days when the comparison is hours understates the true magnitude by a factor of eight (assuming an eight-hour work day). Why not show the same units?

## Large Multiples

The idea of showing the number of days is good, however, and I wanted to apply it to the Wonkblog numbers. So I built a little unit or multiples chart for this purpose.

I originally had included a bar chart as well as the unit chart, but based on Twitter feedback, decided to remove it. This focuses the chart on its main message, even if it makes comparing between countries more difficult. That comparison is not really all that interesting anyway, but rather the enormous disparity in and of itself.

While I was building an interactive chart, I added a bit of animation. The bubbles building up is meant to make the number a bit more tangible by also translating it into time: you have to wait longer to get the full value the larger the actual number is. This makes you feel the difference a bit more than a simple chart. I stole this idea from the <a href="http://www.neighbourhood.statistics.gov.uk/HTMLDocs/dvc147/">UK Office of National Statistics Neighbourhood Quiz</a>.

Click the image below to go to the interactive version of the chart. Let me know what you think!

<p><a href="/applications/ceos"><img class="aligncenter size-medium wp-image-8377" src="https://media.eagereyes.org/wp-content/uploads/2014/10/ceos-static-730x510.png" alt="It pays to be a CEO in the U.S." width="730" height="510" /></a></p>
