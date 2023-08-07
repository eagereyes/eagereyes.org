---
title: "Visual Math Gone Wrong"
description: "Data visualization is often used to just display data, with little thought put into supporting visual thinking. Giving people tools to do some visual math is a good idea; the visual properties need to be picked carefully however, to make this work."
date: 2012-12-26 21:30:04
tags: census, government, area chart, criticism
featuredImage: https://media.eagereyes.org/wp-content/uploads/2012/12/metro-change-teaser2.png
---

# Visual Math Gone Wrong

Data visualization is often used to just display data, with little thought put into supporting visual thinking. Giving people tools to do some visual math is a good idea; the visual properties need to be picked carefully however, to make this work.

The <a href="http://www.census.gov/dataviz/visualizations/040/">following example</a> is from the <a href="http://www.census.gov/dataviz/">Census Data Visualization Gallery</a>. Like many of the other visualizations there, it shows some good thinking but ultimately fails to do what it was designed to.

<p align="center"><img class="aligncenter size-full wp-image-2129" alt="Components of Metro Area Change" src="https://media.eagereyes.org/wp-content/uploads/2012/12/metro-change.png" width="440" height="290" /></p>

You don’t have to be <a href="http://thefunctionalart.com">Alberto Cairo</a> to realize that using area here is problematic. Not only is it difficult to compare and properly read differences in area, it is also close to impossible to add areas to each other. The other problem is that the numbers here can be negative (which is also important for the story here, so this isn’t just an inconvenient detail), which area obviously cannot express. Using the outline to indicate negative numbers is a reasonable idea, since color is already used to indicate the different categories of numbers. It doesn’t help with the visual math though, and I’d argue that while you might have a chance to add up areas, even if it is hard and not very accurate, subtracting areas is pretty much hopeless.

An obvious alternative here is to use bars. Stacked bars naturally communicate the idea of parts adding up to a whole. Unfortunately, stacked bars cannot typically contain negative numbers, at least not in any visualization program I am aware of. I have seen some examples where people have drawn stacked bars by hand, with negative bars hanging off the positive ones (to the side), and then perhaps more sitting on some kind of ledge at their base. That is actually quite an effective way to communicate how things add up or where they are taken from, but it requires manual drawing.

## Bars, in Columns

But the next best thing isn’t bad either: bars in columns. These don’t provide quite the same effective way to show how things add up, but they have some other advantages. They can express negative numbers, and they allow for some interaction that I’d argue is more useful and interesting than the visual math in this case.

The trick, if we are serious about the visual math, is to keep all the scales the same so that the bar lengths are comparable not only within each column, but between columns. That leads to some of the columns only containing short bars, since the values there are smaller than in the others. This could be a problem if the numbers were very different (i.e., the largest value being hundreds or thousands of times larger than the smallest), but that is not the case here.

What we gain, though, is the ability to sort by any column. That is useful, because it easily lets us answer a variety of questions: which cities get the most domestic migration? Which ones get the most international migration? Which ones have the most natural growth?

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2012/12/bars.png" width="599" height="514" /></p>

Click on the column headings to sort by <em>natural growth</em>, <em>domestic migration</em>, <em>international migration</em>, or <em>net change</em> instead of <em>city name</em>. Now compare to the original and tell me that this isn’t more informative and interesting.

## Relative Change

An issue that is partly caused by the idea of visual math is the use of absolute numbers. It makes a lot more sense to add up people than percentages. But that also makes comparison between cities difficult. The largest metro area in this data set, New York, has over 19 million people, while the smallest, Denver, is just over 2.5 million.

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2012/12/population.png" width="599" height="514" /></p>

The number for, say, natural growth thus means something quite different for each of them (since you’d expect all cities to grow naturally by the same percentage, but not the same absolute number of people).

Looking at the number as a fraction instead makes the comparison more meaningful. I simply divided the growth numbers by the population, so the resulting numbers do not ave an interesting unit. In more statistically meaningful terms, it would make sense to be able to speak about growth per 100,000 people or similar.  Either way, it turns out that the natural growth is the highest in New York when looked at in absolute terms (not surprising), but in the lower half as a percentage of total population.

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2012/12/bars-relative.png" width="599" height="514" /></p>

## Conclusion

Visual math is a good idea and has its place. But it needs to be used judiciously and with the right data. Especially when negative values are involved, the visual representation must be chosen very carefully, and the tools must be provided to deal with that.

Quite often, a novel or unusual representation gets in the way more than it helps, while a boring one like a bar chart would provide a lot more value; in particular, when interaction is involved.


_Posted by <a href="/about">Robert Kosara</a> on December 26, 2012. Filed under [criticism](/section/criticism)._


<aside class="comments">

---
## Comments

<a href="http://twitter.com/MsDrData" rel="nofollow noopener" target="_blank">Lisa Neidert (@MsDrData)</a> says…
>	Thanks for putting this into words and for providing an alternative There is an art to choosing the best visualization for data

Jonathan says…
>	I wouldn't say it's that much of an art in this case. Using areas to compare quantities is a basic mistake, and is probably always going to result in a bad design. You'd have to be David McCandless to think otherwise.

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	I agree about area being a pretty obvious bad choice, but making visual math work is quite hard and is something I haven't seen done much. It's often easier to provide some interaction instead of, not in addition to, visual math.

<a href="http://www.siegelgale.com" rel="nofollow noopener" target="_blank">Gail</a> says…
>	I thought this article was great and agree with most of what I read. However, I don't think that using areas to compare quantities is ALWAYS a bad idea. If the data you have is simplistic and must be shown visually it can help out an otherwise boring visual. And yes, ideally, you wouldn't chart boring data at all; but sometimes it's necessary.

Michele Mauri says…
>	I do not agree that areas are always bad for comparison.
>	I think that in some cases, like this one, areas can be more effective than bars.
>	I did a quick experiment redrawing the census map, you can find it here:
>	http://visualizing.org/visualizations/components-metro-area-change-2010-2011-revisited
>	The area is divided in units of the same value, represented by an area.
>	Units are assembled trying to create a square, making it simple to compare.
>	In my opinion area is more coherent with the presented data, as it conveys the idea of "space occupied" by a group of objects/people/whatever: they are less abstract than bars.

Jonathan says…
>	While I of course respect what you may think (and by introducing regularity, your visualization makes it a bit easier), your belief isn't consistent with the research this. However, rather than pointing you at academic papers, how about playing a game:
>	
>	http://phet.colorado.edu/sims/estimation/estimation_en.html
>	
>	Try level 3, and see whether you can get better scores for area than for length. You may have a special gift!

Michele says…
>	I knew I would have collected some criticism with that post :)
>	I know there are lots of serious studies on perception and on evaluation of data visualization, and obviously I don't question them. I made that small experiment just because I have not seen any satisfying solution.
>	I agree with Robert that the census visualization is difficult to read and evaluate.
>	At the same time, when I saw the bars in the above post again I found difficult to have a quick overview of the presented data.
>	So I created the solution I’ve posted. It is thought as a static, non-interactive solution.
>	If you think there are better solutions, I’d like to see them.
>	The game you linked is challenging, and yes it is more simple compare lengths than areas. No special gift for me. 
>	Anyway in the game you compare lengths and areas without visual clues, which does not happen in the visualization.

Jonathan says…
>	I think what you describe in making your visualisation goes to the heart of what infoviz design is about. That is, the balance between deriving accurate (notice I didn't say "precise") information, and the desire to be "satisfied" in some way, usually aesthetically, but not always. Most designers occupy a position between Tufte on the former side, and McCandless on the latter. 
>	
>	While I don't have a design for the census data that's better than an interactive bar chart itself, I would be more satisfied by the addition of supporting data (such as what the immigration/emigration was 10 years ago). Such addition would be easy with a bar chart, which is also why I would prefer that. I am also attracted by brevity, and the bar chart solution could easily work at a quarter of the size I think, which is not true of the area approach.
>	
>	But in the end, I think the thing that really matters is whether anyone who is actually interested in the subject matter feels they are enlightened by the presentation of this data in this way. Since I am not that interested in census data myself, I don't really see much wrong with your desire to make it look nice. 
>	
>	The one thing I would suggest you consider though is the fact (and I, along with many others, take it to be a fact) that the biggest problem with the state of design today is that most designs are made to be sold, but not be used.

<a href="http://gravatar.com/jonpeltier" rel="nofollow noopener" target="_blank">Jon Peltier</a> says…
>	I thought another way to look at this data would be in the form of waterfall graphs, where the individual changes are added to get a cumulative change. For example, the waterfall chart for Boston looks like this:
>	http://peltiertech.com/images/2013-01/Waterfall-Boston.png
>	
>	But when I stacked them all up, each one was squashed so much, and most of the values were relatively so small, that the bars were difficult to resolve. Here is the unlabeled stacked waterfall:
>	http://peltiertech.com/images/2013-01/Waterfall-Stacked.png
>	
>	I suppose one could make a grid of these waterfalls, so the aspect ratio of each would be more like the usual 4:3, but I got tired of writing Excel formulas.

Jonathan says…
>	Interesting, if rather hard to decode!

</aside>

