<a href="https://gicentre.net/jwo" rel="nofollow noopener" target="_blank">Jo Wood</a> says…
>	Thanks for another interesting perspective Robert. I am persuaded by your overall argument and the relationship between data type, sampling and visual interpolation. 
>	
>	I would though, take issue with the framing of these charts as "right" or "wrong" (acknowledging you are echoing George Box for narrative purposes). I think it can be dangerous to think of any chart as potentially "right". Charts are not data, but visual transformations that we choose to make to bring to our attention certain characteristics of data. Or, as Magritte more succinctly put it in The Treachery of Images, "Ceci n'est pas une pipe".
>	
>	I think this is more than an abstract philosophical distinction as it reminds us that as designers we make choices about which properties to emphasise. These are not objective decisions, but ones contextualised by the designer and the purpose of the chart. Maybe linear interpolation is a reasonable decision if we wish to create a visual reminder of the discrete temporal sampling. Maybe a Bezier curve is a reasonable decision if we wish to emphasise the continuity of the underlying process. Maybe a different form of spline curve would emphasise that process more closely. Maybe fidelity of the underlying process is less important to the design than other properties. These are all potentially valid design choices that I think go beyond notions of "right" or "wrong".

<a href="http://infoserviz.co.il/" rel="nofollow noopener" target="_blank">Bella Graff</a> says…
>	Try to think of it from a different angle. The data do not interest us. Relationships between the data is what is interesting. Lines do not represent data, but data relations. They do not answer the question "how much?", But to the question "how has it changed?": An upward line means an increase, a downward line means a decrease. "Metaphors" we already said? ;)

Jeff Pettiross says…
>	I like your extension of Robert's ideas. I was trying to articulate the role of the shape of the lines, but you nailed it exactly. The design of the lines probably does affect how the viewer thinks about the underlying data.

Jeff Pettiross says…
>	Thanks for explicitly laying out the subtleties of line shakes, Robert. Now you've given me another while dimension I can obsess about when making my next chart!
>	
>	I'm curious about speed of interpretation and how curves may or may not affect cognitive bias. The visual cortex can process slopes and changes in slope quickly. Does that same ability apply to curves? If not, does a more cognitive interpretation of the chart impede understanding if its data contradict our belief?
>	
>	Do you know if there's research along these lines, Robert?

Gregor Thomas says…
>	I agree with much of what's said, but I think  your article is skipping one of the main purposes of lines: grouping a particular series of points so that multiple groups can share a plot. (Perhaps this is coming in a future post?)
>	
>	If your temperature example had series for, say, Seattle, Chicago, and New York, many comparisons would be more difficult using bars - the standard choice of straight lines seems like a good one. Smoothed lines would also be good for this criterion.

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	Yes, totally agreed. I was irked by the particularly odd choice off the straight lines that we take as the obviously "right" one. Once you accept that all choices are just that, choices, you can think about what you're after more freely. But you also have to acknowledge that you're making a choice, not following some kind of law of visualization.

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	Interesting question. I don't, and I'd be surprised if somebody had studied that in visualization. But I'm sure there's some literature in psychology that would apply.

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	For temperatures, it wouldn't be bars but smoothed lines ;) But you're right of course, comparing multiple time series as bars or even stepped lines would be more difficult. There are tradeoffs here, and decisions to be made, and making the chart more readable by using straight lines is a perfectly valid one. That's different from just taking the line chart as the Obvious and Correct Default, though, just because it's a time series.

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	I'm all about the metaphors! You're right about relationships, and maybe that's where you want those straight lines. But that's not always the case. And it's important to realize that it's a choice that is made for a reason. It's not just the data, it's what you're trying to get out of the chart.

stephen black says…
>	My basic objection to smoothed lines in charts is not that they are a bad idea but that the commonest charting tools (I'm looking at you Excel) make them very easy to do very badly. This means that the majority of all examples I have seen end up misrepresenting the data more severely than a simple straight line would do. IF you are going to use lines and not dots or bars this can be very nasty. 
>	
>	If every tool auto plotted the raw points and made smooth curves that always passed through the points this would be a minor problem. But most tools don't work like that.

Bella Graff says…
>	Of course not always. Only when we talk about a metaphor of ups and downs in time. If we talk about a metaphor of higher / lower in time - we will use columns.

<a href="http://datavis.ca" rel="nofollow noopener" target="_blank">Michael Friendly</a> says…
>	In all this rant about the evils of joining the points either with straight lines or curves that go through all the points, I'm surprised you didn't mentioned statistical smoothers (loess) that have nice properties of fit vs. smoothness

<a href="http://vislives.wordpress.com" rel="nofollow noopener" target="_blank">Chris Pudney</a> says…
>	Charts can be thought of as (visual representations of) models.

Bella Graff says…
>	A reality-like model

Bill C says…
>	Great article, thanks for sharing. One perspective (ahem) that I think is worth mentioning is the simply pragmatic: Connecting the dots can make them easier to see, and straight lines can be simpler to draw, so sometimes that's all it is: A visual aid - particularly in the case where the consumer of the visualization understands the limitations in question. Having managed visualization tools for traders, I think this sort of consideration (I need to glance at that screen and quickly get the gist) often overrides more technical concerns. That said, I have definitely seen the effects you describe when less well-versed people viewed the same visualizations, so certainly not arguing against the points you make, just suggesting that the underlying cause of their popularity might be social, not statistical.
