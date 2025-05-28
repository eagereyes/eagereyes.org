<a href="http://www.dethwench.com" rel="nofollow noopener" target="_blank">Monika M. Wahi, MPH, CPH</a> says…
>	Thank you for pointing this out. When you say it, it seems obvious - so why is adding reference lines to charts such a "new" idea? In my field of public health, you will rarely see these lines in scientific literature. My opinion is that this has had a lot to do with our software. 
>	
>	SAS has historically had what I would call an unfortunate approach to graphing. The software takes in your dataset, does a lot of work, and then produces a graph. If you want to edit the graph, you really have to know what you are doing, by either tweaking your data, tweaking your graphing call, or tweaking your code to death. 
>	
>	By contrast, in both base R and using package ggplot, adding a reference line is literally one line of code. This is why I greatly advocate using R for plotting. SAS does some amazing things with big data, but if you really want to communicate with your plot, SAS is really not the software for this.

<a href="https://blog.datawrapper.de/coronaviruscharts" rel="nofollow noopener" target="_blank">Lisa Charlotte Rost</a> says…
>	Hi Robert, thanks for this nice post and for mentioning the Datawrapper blogpost. Since deciding to use these lines two weeks ago, I got a lot of emails &amp; comments telling me that people interpret the lines as borders of "corridors"; assuming that, as long as a line stays between two lines (e.g. 2 days and 3 days), it has a doubling time between 2 and 3 days.
>	
>	That's not the case. China is between the lines for "every 5 days" and "every week", but has a doubling time of far more than a month.
>	
>	I added a bold note at the beginning of the charts (e.g. on the two ones here: https://blog.datawrapper.de/coronaviruscharts) yesterday and now hope that it becomes clearer. That said, I can see how this chart is misleading. There's even a German news outlet that copied my chart (before I added the note), misunderstood it and added a wrong interpretation guide.
>	
>	Josh Katz has found the best solution to this problem, in my opinion – as soon as you hover over e.g. the US, it shows a line extrapolating the doubling time of the last 5 or so days: https://www.nytimes.com/interactive/2020/03/21/upshot/coronavirus-deaths-by-country.html

<a href="http://datavis.ca" rel="nofollow noopener" target="_blank">Michael Friendly</a> says…
>	Tukey's advice (originally for QQ plots): 
>	Comparisons are often best made against a horizontal reference line.
>	
>	Here, this corresponds to choosing one doubling rate as a reference and rotating so that one is horizontal.
>	This would make the various cities/countries more distinguishable.

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	Yes, I realized that too after looking at the The NY Times piece a few times. The additional line for each  country is crucial and it's a different situation than the wage gap chart. I still think the lines by themselves help if you know what to look for, but it's easier to misread them.

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	Others have proposed this too, but I'm not convinced it would help. I believe the strength of the diagonal reference line is that it doesn't require you to transform the data. That makes it much easier to read for casual observers. I'm not arguing against rotation when you're dealing with the same data often, but for a broad audience, I think it would make things harder to understand and easier to misread.

Jacob says…
>	You wouldn't happen to know how to make the lines in Tableau, would you?
