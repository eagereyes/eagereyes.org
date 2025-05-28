<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2015/05/embellishments-teaser.jpg" alt="" width="825" height="467" /></p>

# Paper: An Evaluation of the Impact of Visual Embellishments in Bar Charts

Information graphics often use variations and embellishments of standard charts that may distort the way people read the data. But how bad are these distortions really? In <a href="/publications/Skau-EuroVis-2015">a paper to be presented</a> at <a href="http://www.eurovis2015.it">EuroVis</a> this week, Drew Skau, Lane Harrison, and I tested their effects in an experiment.

Based on a survey of common infographics tropes, we came up with a number of common patterns. We then simplified those to reduce them to just the embellishment type, removing many elements like color, complex patterns, external decorations, etc. We ended up with these six embellishment archetypes, which we tested against a standard bar chart.

<p align="center"><img class="aligncenter size-medium wp-image-8794" src="https://media.eagereyes.org/wp-content/uploads/2015/05/embellishment-cases.png" alt="Chart Embellishment Cases" width="660" height="595" /></p>

In the experiment, we asked people two types of questions: absolute and relative. In the absolute question, they had to estimate the value represented by one of the “bars,” while in the relative one we had them express the smaller one as a fraction of the larger.

We carefully avoided asking about the height of the bars, or even referring to bars in the questions or the descriptions. This is because we wanted to not bias people towards looking just at height when they might be reading area (which is important for the triangular charts that <a href="/blog/2008/linear-vs-quadratic-change">scale in two directions</a>).

What we found is not terribly surprising, but it is now backed by actual research: most of the embellishments have an adverse effect on the accuracy of reading values when comparing bars. The worst offender are quadratically scaled triangles (which grow not just vertically but also horizontally). Interestingly, the one that doesn’t seem to have an effect is when the bar extends below the baseline. That is in contrast to recent findings that show that cutting off the axis so it does not start at 0 causes reading errors.

For reading absolute values, we found that most embellishments had no effect, with the exception of quadratic triangles. The capped chart in this condition yielded the same average values and a smaller standard deviation than the baseline bar chart. We think that the cap with its flat top actually helped people draw a mental line to the axis to judge the values.

<a href="/publications/Skau-EuroVis-2015">The paper</a> has more details and some recommendations for designers working on infographics. It also nicely complements both <a href="/papers/isotype-visualization">our recent CHI paper on ISOTYPE</a> and <a href="http://fellinlovewithdata.com/research/deceptive-visualizations">the work on deceptive visualization by Anshul Pandey, Enrico Bertini, and others</a>.

<hr />

Drew Skau, Lane Harrison, Robert Kosara, <a href="/publications/Skau-EuroVis-2015">An Evaluation of the Impact of Visual Embellishments in Bar Charts</a>, <em>Computer Graphics Forum (Proceedings EuroVis)</em>, vol. 34, no. 3, pp. 221–230, 2015.
