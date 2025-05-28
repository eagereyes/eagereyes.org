# 3D Bar Charts Considered Not That Harmful

We've turned the understanding of charts into formulas instead of encouraging people to think and ask questions. That doesn't produce better charts, it just gives people ways of feeling superior by parroting something about chart junk or 3D being bad. There is little to no research to back these things up.

## The Trivapro 3D Bar Chart

<a href="http://www.knowmoregrowmore.com/9875/think-again-before-skipping-fungicides-in-row-crops/">This 3D bar chart</a> recently got some attention on Twitter.

<p align="center"><img class="aligncenter size-full wp-image-9238" src="https://media.eagereyes.org/wp-content/uploads/2016/05/Trivapro-graph.jpg" alt="Trivapro-graph" width="1074" height="821" /></p>

At first glance, it's one of <a href="http://viz.wtf">those bad charts</a>. It's 3D, and at a fairly extreme angle. The perspective projection clearly distorts the values, making the red bar look longer in comparison to its real value difference. The bars are also cut off at the base, at least unless you consider the parts with the labels to be the bottoms of the bars (and even then, they're not the full length to start at 0).

But then, what is this supposed to show? It's about the fact that a fungicide names <em>Trivapro</em> produces more yield than the two other products or no treatment. There is no confusion here about which bar is longer. And the values are right there on the chart. You can do some quick math to figure out that a gain of 32 over the base of 146 is an increase of a bit over 20% (30 is one fifth of 150, 32 out of 146 comes out to 22%).

The gain is also easy to compare, again due to the numbers. Trivapro adds more than twice as much as the third product and about four times as much as the second one. That is even reasonably visible from the bars if you're just looking at the bottom bar as the baseline and don't worry about where the zero is.

Is this a great chart? No. It's not even a good chart. Is this an accurate chart? No. Though it has the numbers on it, so it's less bad than without.

It is much less bad than the usual knee-jerk reaction would have you think, though.

## Truncated Axes Are Bad

What does lead to misinterpretation is when bar charts don't start at zero. That has <a href="http://fellinlovewithdata.com/research/deceptive-visualizations">actually been studied</a> and there is an effect. That is the case when you're looking at just the chart, and when you're after a precise comparison. Showing the numbers partly negates the point of the chart, but it also means that any distortion is going to be less of an issue.

I'd argue that truncating axes is worse in a plain bar chart than in a crazy 3D one like the one above. You can't read the latter very precisely anyway, so doing some more harm really isn't that big a deal. But since we've left the world of accurate bar charts anyway, we might as well slap numbers on it and don't worry about distortions. That's different when you're looking at a austere 2D chart, which you expect to give you accurate reading in exchange for its sternness.

Truncating the axis is also less problematic when you're comparing bars to each other as the baseline, rather than zero. Now the reference bar can be treated as the zero.

## 3D Bars and Data Distortion

Another thing that has been studied is the effect of adding depth to a simple bar chart. <a href="http://www-psych.stanford.edu/~bt/diagrams/papers/bargraphsJEPApplied98.pdf">Zacks, Levy, Tversky, and Schiano found that adding depth to a bar chart</a> lowered precision. So 3D bars are bad, right? Well, they also found a few other things.

First of all, when they introduced a delay after showing people the bars, there was no more difference between 2D and 3D. That is pretty interesting, because we don't typically have to make snap judgments based on charts.

The other effect is much more troubling, though: neighboring bars had a significant effect on people's perception. This makes sense, as we're quite susceptible to relative size illusions like <a href="https://en.wikipedia.org/wiki/Ebbinghaus_illusion">the Ebinghaus Effect</a> (in case you haven't seen it, the orange circles below are the same size).

<p align="center"><img class="aligncenter size-full wp-image-9239" src="https://media.eagereyes.org/wp-content/uploads/2016/05/Mond-vergleich.png" alt="Ebbinghaus Effect" width="1500" height="918" /></p>

What that means is that <em>the data itself</em> causes us to misjudge the sizes of the bars! An unsorted bar chart in particular makes comparisons difficult and error-prone. That effect, by the way, was quite strong and did not disappear when a delay was added before asking people.

## Worry About The Real Issues

It's easy to point fingers and laugh at people for using 3D charts. It takes a bit more knowledge and depth to understand that it's not all about 2D vs. 3D. Three-dimensional charts can be just fine, and 2D charts can be quite misleading.

We need to get away from the seeming easy fixes – that don't actually fix much –, and encourage people to dig a little deeper. Sure, that 3D effect is unnecessary, but is it really causing that much of a problem? What about the axis or the sorting, even in a plain old 2D chart?

It's also important to realize just how little of what is often taken as data visualization gospel is based on hearsay and opinion rather than research. There are huge gaps in our knowledge, even when it comes to seemingly obvious things. We need to acknowledge those and strive to close them.
