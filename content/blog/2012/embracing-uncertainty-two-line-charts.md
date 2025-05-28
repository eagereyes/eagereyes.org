# Embracing Uncertainty in Two-Line Charts

As we're heading towards elections again, there is a chart type that is as unavoidable as political ads, baby-kissing, and smear campaigns: line charts showing polling data. The most common pitch two candidates against each other, and often make a big deal out of the fact that the lines cross. Not only are these charts misleading in the way they depict the choice, they also hide an important fact: the number of undecided voters.

The following image shows slightly different data, but the idea is the same. The data is from a <a href="http://www.gallup.com/poll/113980/Gallup-Daily-Obama-Job-Approval.aspx">long-running Gallup poll</a> about job approval ratings of President Obama, from early 2009 to the end of 2011. Each data point is actually a three-day average. Blue shows approval, green disapproval.

<img class="alignnone size-full wp-image-1608" title="Obama Approval Ratings as Line Chart" src="https://media.eagereyes.org/wp-content/uploads/2012/01/obama-lines.png" alt="" width="600" height="340" />

There is a clear trend here that shows approval dropping from very high in early 2009 to just below 50% in mid-2010. From there, things get murkier. The blue and green lines cross, then continue for a while, then cross again. There's clearly a lot of noise, but every inversion looks like a big event.

The thing that also stands out is the symmetry: since there are (apparently) only two choices, the disapproval percentage is always going to be 100% minus the approval percentage. That is visually very appealing, but it also creates the illusion of two independent values, shown as different lines, being in much more agreement than would be expected. There is also a lot of noise in the regions where the lines cross or are close to crossing, which make it hard to see what is going on.

## An Alternative

How else could the data be shown? In particular, what else is there to show about this data? There are two aspects to the data that are getting lost in the line chart above: the number of undecided people, and the fact that the numbers have to add up to 100%. It also makes sense to reduce the noise and make it easier to see the trend, especially in parts where the approval and disapproval numbers are very close together.

Here is my alternative. It is a stacked area chart that contains the approval at the bottom, the undecided percentage in the middle, and the disapproval on top. The colors were chosen deliberately to be easy to interpret (red is bad, blue is like above and it's also the color of the Democratic Party), and the undecided layer is actually transparent.

<img class="alignnone size-full wp-image-1607" title="Obama Approval Ratings as Area Chart" src="https://media.eagereyes.org/wp-content/uploads/2012/01/obama-area.png" alt="" width="600" height="340" />

How is this better? For one, it shows the approval trend in a much clearer way than the first chart. If we assume that the number of undecideds is constant, we don't actually need to see the disapproval numbers, and so can initially ignore anything above the blue area.

But the undecided percentage is not constant, and that is clearly visible here as well. The white layer is fairly wide at the beginning and then narrows down relatively quickly before it seemingly stays constant. The numbers actually vary a little bit around 9%, but are quite stable. The reason for making this part transparent is so that the crucial 50% line is visible: we can now see whether the president's approval rating is above or below 50%, and we can decide how much confidence we have in this information.

Looking at just the approval percentages, we can easily tell when the blue area dips below the 50% line. But that does not mean that more than 50% of people disapprove of him, because the disapproval area is not necessarily extending below 50%! Giving Obama the benefit of the doubt, we can see that the disapproval ratings really only went over 50% briefly in July 2010 and then again in the summer of 2011. So instead of lots of noise when the values are very similar (which they tend to be), we can see the information clearly and decide which part we care more about.

The scaling of this chart is also a lot more honest. The first chart is based on the way these charts are typically scaled, from 0 to the highest represented number. That exaggerates the amount of change, however, and creates an artificial center around the point where the lines cross, which is (100%-undecided%)/2. The 50%-line is a much better reference though, because it takes the number of undecided respondents into account instead of factoring them out, and represents the point that really counts.

Finally, the stacking reinforces the idea of a part-whole-relationship. The three numbers (approval, undecided, disapproval) have to add up to 100%, the stack is always the same height. Rather than pretend that we are dealing with two independent data series that are shown as lines, the dependencies between them are clearly shown in the chart.

<hr />

The data for these charts is coming directly from <a href="http://www.gallup.com/poll/113980/Gallup-Daily-Obama-Job-Approval.aspx">Gallup</a>, via a link on <a href="http://thedailyviz.com/post/14866525865/president-obamas-approval-ratings-at-five-month-high">The Daily Viz</a>.
