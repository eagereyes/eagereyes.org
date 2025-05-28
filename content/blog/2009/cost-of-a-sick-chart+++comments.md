<a href="http://blog.datadrivenconsulting.com" rel="nofollow noopener" target="_blank">Alex Kerin</a> says…
>	Could this be a case where GE just wasn't happy with paying a bunch of money and ending up with some bar charts? They wanted something 'cool', and if that meant obfuscating the data, then so be it. Not that this should be seen as an excuse, but it could be a reason.
>	
>	Data quality issues aside, there must be some very interesting trends and comparisons to be made. The only thing that really jumped out at me was the relative size of the graphic when you moved the slider back and forth.

Robert Kosara says…
>	<p>You're probably right, but bar charts aren't necessarily boring. Look at the Minnesota unemployment page I linked to (you have to scroll down to the Flash animation at the bottom). That could also be sexied up further while still providing an easier way to read the relevant data. And there are clearly other ways of doing this, like the glyph grid idea I outlined. I'll try to mock something up next week or so.</p>

<a href="http://www.juiceanalytics.com" rel="nofollow noopener" target="_blank">Zach</a> says…
>	<p>Robert,</p>
>	<p>I appreciate your unflinching critique one of the leaders in the field, and agree that this visualization leaves some things to be desired. That said, I would caution against assuming that Ben is asking the wrong question ("I wager to guess that the relative prevalence of different diseases at a particular age is not terribly interesting.").  Personally, I'd wager that Ben started the project by working with his client to determine what is the important story to tell with the data -- not just what is the sexiest graphic. Sure, there are a bunch of other questions that could be asked and answered with the data, but then he'd be developing a robust and possibly complex analytical tool. The work that Ben is doing with GE (another example here http://www.ge.com/visualization/health_visualizer/) clearly focuses on teeing up and addressing a few, targeted questions.</p>

Robert Kosara says…
>	<p>My criticism goes to GE and Fry equally. GE apparently wanted something showing them their own numbers, but also wanted to put it on a website. They actually emailed me to tell me about it, saying that they wanted to show people the cost of their healthcare. I don't think this is doing it.</p>
>	<p>The project you link to, on the other hand, is very good. The way you can drill into the data a bit, rearrange the levels, and pick different criteria is fantastic. I also like that they provide the raw data.</p>
>	<p>They know how to do it well, so why did they screw this one up so badly?</p>

<a href="http://the-outliers.com" rel="nofollow noopener" target="_blank">andrea</a> says…
>	<p>Agree with most of your points, Robert!</p>
>	<p>I too think the biggest problem is the lack of purpose. It says, fluffily: "To gain a deeper understanding of healthcare costs"... does anyone know what this means? There seems to be a skew towards the Insurer Cost -- which isn't at all interesting for the consumer.</p>
>	<p>Like Alex pointed out, perhaps it's a client-issue: that the visualisation was made for internal use (perhaps with more information that, for privacy reasons, we can't see in this version?)</p>
>	<p>One thing I would disagree with is the 'pretty' label (always =) of course!) in this case, there is some form of engagement through the animation, and also through the weird outliers (we like telling stories: 'haha! look at that poor/weirdo 20-year-old with the gastric ulcer.' etc).</p>

<a href="http://www.tom-carden.co.uk" rel="nofollow noopener" target="_blank">Tom Carden</a> says…
>	<p>It still makes me sigh that you put so much time and effort into this kind of post. I don't think I disagree with anything you've said, and much of it is constructive and good guidance, but it still leaves a bad taste... how would you have approached this differently? How about a sketch, or an example of similar data visualised well? Some counterpoint to the negativity would be refreshing.</p>
>	<p>I took a couple of hours this morning to pull the data out of Fry's applet (jar files are zip files, it's all there) and take a look at it myself. Here's an applet with the kind of charts I'd like to see: http://www.tom-carden.co.uk/p5/ge_health/applet/</p>
>	<p>Apologies if you don't have Java, you can also see the individual outputs at:</p>
>	<ul>
>	<li>http://www.tom-carden.co.uk/p5/ge_health/TotalInsurerCost.png</li>
>	<li>http://www.tom-carden.co.uk/p5/ge_health/TotalPersonalCost.png</li>
>	<li>http://www.tom-carden.co.uk/p5/ge_health/TotalNumberofPatients.png</li>
>	<li>http://www.tom-carden.co.uk/p5/ge_health/AverageInsurerCostperPerson.png</li>
>	<li>http://www.tom-carden.co.uk/p5/ge_health/AveragePersonalCostperPerson.png</li>
>	</ul>
>	<p>Excuse the weak interaction (switching charts is done by moving the mouse left to right) and the fixed scaling of the y-axis. Also note that I included the under-18s data that Fry omitted for clarity. Despite these shortcomings I learned quite a bit from the exercise and I hope others benefit from my contribution.</p>

<a href="http://www.tom-carden.co.uk" rel="nofollow noopener" target="_blank">Tom Carden</a> says…
>	<p>A small humble retraction - I do see that you point to Jeff Heer's work as a positive example, and I appreciate your constructive suggestions in the "How to do it Better" section. I guess I spoke too soon - however I do still think that that part could be the focus of your posts and you wouldn't lose anything.</p>

<a href="http://periscopic.com" rel="nofollow noopener" target="_blank">krees</a> says…
>	<p>I think I have to dissent and support Fry et al on this one. They clearly took inspiration from Florence Nightingale's polar diagrams (also used in the health field). See <a href="http://en.wikipedia.org/wiki/Portal:Statistics/Selected_picture/5">http://en.wikipedia.org/wiki/Portal:Statistics/Selected_picture/5</a>.</p>
>	<p>I really think the polar diagram succinctly describes the data they are using. I like being able to quickly scroll to my age (and see how bad life could get as I get older).</p>
>	<p>The only thing that's lacking is a decent legend. The radius and angle of the pie slice is not very clear. Also, there could be better colors (ie. don't put two gray bars next to each other).</p>

Robert Kosara says…
>	<p>That's a good start. I definitely plan on doing an alternative design, I just don't have the time for it right now. I poked around the CSV files included in the JAR on Sunday, but couldn't make sense of them. I didn't spend a lot of time on that, though.</p>
>	<p>Your images are a good start, and already provide a much more interesting view of the data than the sunburst/area chart.</p>

<a href="http://www.tom-carden.co.uk" rel="nofollow noopener" target="_blank">Tom Carden</a> says…
>	<p>Here are my copies of the data (which of course I've taken without asking, hopefully GE appreciates  use of these files as part of this discussion):</p>
>	<ul>
>	<li>http://www.tom-carden.co.uk/p5/ge_health/data/cond-age-cost.csv</li>
>	<li>http://www.tom-carden.co.uk/p5/ge_health/data/subset.csv</li>
>	</ul>
>	<p>The 12 diseases covered by Fry are listed in subset.csv, one per line, comma-separted with an id code first. You can safely ignore the first column within the scope of this visualisation.</p>
>	<p>I'm assuming cond-age-cost table is one row per year (row 0 = age 0, row 80 = age 80) and the columns are tab-separated (personal-cost, insurer-cost, patient-count) for each of the 12 chosen diseases.</p>
>	<p>I sanity checked this briefly against Fry's visualisation but I could easily be off by one on the age and I confess I didn't check every column to make sure they were in the correct order. Also, watch out for the blank line at the end of cond-age-cost.csv!</p>

<a href="http://i-ocean.blogspot.com/" rel="nofollow noopener" target="_blank">derek</a> says…
>	<p>But Fry's isn't a polar area chart, it's a spie chart</p>
>	<p>pie chart: radius constant, sector angle variable<br />polar area chart: radius variable, sector angle constant<br />spie chart: both radius and sector angle variable</p>
>	<p> </p>
>	<p> </p>

<a href="http://periscopic.com" rel="nofollow noopener" target="_blank">krees</a> says…
>	<p>Well, derek, I still think it works.</p>
