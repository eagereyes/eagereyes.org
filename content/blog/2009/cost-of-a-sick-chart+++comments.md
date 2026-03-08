[Alex Kerin](http://blog.datadrivenconsulting.com) says…
> Could this be a case where GE just wasn't happy with paying a bunch of money and ending up with some bar charts? They wanted something 'cool', and if that meant obfuscating the data, then so be it. Not that this should be seen as an excuse, but it could be a reason.
>
> Data quality issues aside, there must be some very interesting trends and comparisons to be made. The only thing that really jumped out at me was the relative size of the graphic when you moved the slider back and forth.

Robert Kosara says…
> You're probably right, but bar charts aren't necessarily boring. Look at the Minnesota unemployment page I linked to (you have to scroll down to the Flash animation at the bottom). That could also be sexied up further while still providing an easier way to read the relevant data. And there are clearly other ways of doing this, like the glyph grid idea I outlined. I'll try to mock something up next week or so.

[Zach](http://www.juiceanalytics.com) says…
> Robert,
>
> I appreciate your unflinching critique one of the leaders in the field, and agree that this visualization leaves some things to be desired. That said, I would caution against assuming that Ben is asking the wrong question ("I wager to guess that the relative prevalence of different diseases at a particular age is not terribly interesting.").  Personally, I'd wager that Ben started the project by working with his client to determine what is the important story to tell with the data -- not just what is the sexiest graphic. Sure, there are a bunch of other questions that could be asked and answered with the data, but then he'd be developing a robust and possibly complex analytical tool. The work that Ben is doing with GE (another example here http://www.ge.com/visualization/health_visualizer/) clearly focuses on teeing up and addressing a few, targeted questions.

Robert Kosara says…
> My criticism goes to GE and Fry equally. GE apparently wanted something showing them their own numbers, but also wanted to put it on a website. They actually emailed me to tell me about it, saying that they wanted to show people the cost of their healthcare. I don't think this is doing it.
>
> The project you link to, on the other hand, is very good. The way you can drill into the data a bit, rearrange the levels, and pick different criteria is fantastic. I also like that they provide the raw data.
>
> They know how to do it well, so why did they screw this one up so badly?

[andrea](http://the-outliers.com) says…
> Agree with most of your points, Robert!
>
> I too think the biggest problem is the lack of purpose. It says, fluffily: "To gain a deeper understanding of healthcare costs"... does anyone know what this means? There seems to be a skew towards the Insurer Cost -- which isn't at all interesting for the consumer.
>
> Like Alex pointed out, perhaps it's a client-issue: that the visualisation was made for internal use (perhaps with more information that, for privacy reasons, we can't see in this version?)
>
> One thing I would disagree with is the 'pretty' label (always =) of course!) in this case, there is some form of engagement through the animation, and also through the weird outliers (we like telling stories: 'haha! look at that poor/weirdo 20-year-old with the gastric ulcer.' etc).

[Tom Carden](http://www.tom-carden.co.uk) says…
> It still makes me sigh that you put so much time and effort into this kind of post. I don't think I disagree with anything you've said, and much of it is constructive and good guidance, but it still leaves a bad taste... how would you have approached this differently? How about a sketch, or an example of similar data visualised well? Some counterpoint to the negativity would be refreshing.
>
> I took a couple of hours this morning to pull the data out of Fry's applet (jar files are zip files, it's all there) and take a look at it myself. Here's an applet with the kind of charts I'd like to see: http://www.tom-carden.co.uk/p5/ge_health/applet/
>
> Apologies if you don't have Java, you can also see the individual outputs at:
>
> - http://www.tom-carden.co.uk/p5/ge_health/TotalInsurerCost.png
> - http://www.tom-carden.co.uk/p5/ge_health/TotalPersonalCost.png
> - http://www.tom-carden.co.uk/p5/ge_health/TotalNumberofPatients.png
> - http://www.tom-carden.co.uk/p5/ge_health/AverageInsurerCostperPerson.png
> - http://www.tom-carden.co.uk/p5/ge_health/AveragePersonalCostperPerson.png
> Excuse the weak interaction (switching charts is done by moving the mouse left to right) and the fixed scaling of the y-axis. Also note that I included the under-18s data that Fry omitted for clarity. Despite these shortcomings I learned quite a bit from the exercise and I hope others benefit from my contribution.

[Tom Carden](http://www.tom-carden.co.uk) says…
> A small humble retraction - I do see that you point to Jeff Heer's work as a positive example, and I appreciate your constructive suggestions in the "How to do it Better" section. I guess I spoke too soon - however I do still think that that part could be the focus of your posts and you wouldn't lose anything.

[krees](http://periscopic.com) says…
> I think I have to dissent and support Fry et al on this one. They clearly took inspiration from Florence Nightingale's polar diagrams (also used in the health field). See [http://en.wikipedia.org/wiki/Portal:Statistics/Selected_picture/5](http://en.wikipedia.org/wiki/Portal:Statistics/Selected_picture/5).
>
> I really think the polar diagram succinctly describes the data they are using. I like being able to quickly scroll to my age (and see how bad life could get as I get older).
>
> The only thing that's lacking is a decent legend. The radius and angle of the pie slice is not very clear. Also, there could be better colors (ie. don't put two gray bars next to each other).

Robert Kosara says…
> That's a good start. I definitely plan on doing an alternative design, I just don't have the time for it right now. I poked around the CSV files included in the JAR on Sunday, but couldn't make sense of them. I didn't spend a lot of time on that, though.
>
> Your images are a good start, and already provide a much more interesting view of the data than the sunburst/area chart.

[Tom Carden](http://www.tom-carden.co.uk) says…
> Here are my copies of the data (which of course I've taken without asking, hopefully GE appreciates  use of these files as part of this discussion):
>
> - http://www.tom-carden.co.uk/p5/ge_health/data/cond-age-cost.csv
> - http://www.tom-carden.co.uk/p5/ge_health/data/subset.csv
> The 12 diseases covered by Fry are listed in subset.csv, one per line, comma-separted with an id code first. You can safely ignore the first column within the scope of this visualisation.
>
> I'm assuming cond-age-cost table is one row per year (row 0 = age 0, row 80 = age 80) and the columns are tab-separated (personal-cost, insurer-cost, patient-count) for each of the 12 chosen diseases.
>
> I sanity checked this briefly against Fry's visualisation but I could easily be off by one on the age and I confess I didn't check every column to make sure they were in the correct order. Also, watch out for the blank line at the end of cond-age-cost.csv!

[derek](http://i-ocean.blogspot.com/) says…
> But Fry's isn't a polar area chart, it's a spie chart
>
> pie chart: radius constant, sector angle variable
> polar area chart: radius variable, sector angle constant
> spie chart: both radius and sector angle variable

[krees](http://periscopic.com) says…
> Well, derek, I still think it works.
