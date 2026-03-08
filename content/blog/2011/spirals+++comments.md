[Gregor Aisch](http://driven-by-data.net) says…
> Hi Robert,
> I also used spirals for periodic data a few month ago when I analyzed growth patterns in the German Wikipedia. Instead of varying the line width or color, I varied the radius of the spiral line which leads to deformed spirals. Basically just a polar line chart, I think.. http://visualdata.dw-world.de/en/wikipedia/

Toms says…
> Thank you for the interactive version! It looks like both options are viable depending on data. It also reminds me a lot about your square pie chart.
>
> I'm behind a little open source time tracker and a while ago started poking around to try and allow user to discover trends.
> Few screens of the work are here:
>
> http://projecthamster.wordpress.com/2010/04/30/experimentation-with-real-data/
>
> I started with circles but then realised that the 1 year cut off point is no good as the patterns tend to me be weekly more than anything.

Toms says…
> ah, right the spiral is here:
> http://www.flickr.com/photos/toms/4573050290/in/photostream
>
> i got distracted so the work has been dropped. but perhaps someone would be interested in helping me out idea wise!

[jerome cukier](http://jeromecukier.net) says…
> I find that while the spiral view is interesting to exhibit the periodicity, the bars version is nice to find the right periodicityµ. If you look at the downloads dataset with a periodicity of 25 or 49 (for instance) with the bars form you could tell that you are one click away from something interesting. It's far less obvious with the spiral version.

[Carlos Scheidegger](http://cscheid.net) says…
> (+1 for the bar version of this - it's much more legible) But what about plotting a periodogram right next to it? Interacting with the plot just to find the dominant frequencies is a bad idea; just plot the strength of the signal in the Fourier domain.
>
> I agree that the good thing about the spiral and bar plots is that they show what the periodogram _doesn't_. Still, it's wasteful to use a slider to hunt and peck for the best alignment when there's a much more efficient alternative.
>
> In my view, this is a good example of the fundamental (and necessary!) crisis of visualization: the moment you know what you're looking for, you're better off writing code for it, not using interactive visualizations. But all infovis is not lost: computers are great at giving us answers from the data, but not as good as giving us good questions to ask of the data.

[santiago](http://bestiario.org) says…
> market, prime numbers and the Vostock signal on a spiral http://www.bestiario.org/research/spisi

[Joe Mako](http://gplus.to/joemako) says…
> I prefer the heatmap blocks for finding the pattern cycle.
>
> Just for fun, I recreated your view in Tableau Public, and added a line preview as well:
>
> [Spiral/Heatmap/Line](http://public.tableausoftware.com/views/SpiralHeatmap/Dashboard)
>
> (The line style could be highly improved with things like an axis and such, but decided to leave it in the minimal format as the others)

Robert Kosara says…
> Well done, though this also shows the importance of real-time interaction: the round-trip time for Tableau Public makes this a lot less intuitive to use than my version.

[Joe Mako](http://gplus.to/joemako) says…
> I agree, that is one of the biggest downsides of Tableau Public, waiting for the interaction to update. Things based on a JavaScript library, Flash, or anything else that evaluates client side will be faster.

[Jack L](http://www.pdviz.com) says…
> Hi Gregor, Visualization and transition looks super cool. Very well organized presentation.
> What type of font did you use?

Patrick Hertzog says…
> Another example of the use of spirals to visualize periodical data can be found in the following paper I co-wrote some years ago:  ["SpiralView: Towards Security Policies Assessment through Visual Correlation of Network Resources with Evolution of Alarms"](http://ieeexplore.ieee.org:80/xpl/freeabs_all.jsp?reload=true&arnumber=4389007)

[Alex Kerin](http://www.datadrivenconsulting.com) says…
> I also prefer the heatmap style - I found it much easier to dial in on the periodicity - for example 7 for the births.

[Dana](http://www.onr.com) says…
> The interactive version is great! I also agree with Alex, heatmap style all the way
