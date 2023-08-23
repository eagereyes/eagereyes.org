---
title: "In Defense of Pie Charts"
description: "Pie charts don't get much respect. They're almost always considered the wrong choice by those supposedly in the know. But how do we know that this is true? What evidence do we have to support this? The truth is, not much. And when we start digging for proof, it turns out that pie charts are much better than we want to admit."
date: 2011-04-13 21:32:53
tags: pie-charts, criticism
featuredImage: https://media.eagereyes.org/media/2011/piecharts-teaser.png
---

<p align="center"><img src="https://media.eagereyes.org/media/2011/piecharts-teaser.png" alt="" width="600" height="350" /></p>

# In Defense of Pie Charts

<a href="/pie-charts">Pie charts</a> don't get much respect. They're almost always considered the wrong choice by those supposedly in the know. But how do we know that this is true? What evidence do we have to support this? The truth is, not much. And when we start digging for proof, it turns out that pie charts are much better than we want to admit.

## The Study

In a paper from 1991, Ian Spence and Stephan Lewandowsky performed a number of experiments comparing pie charts to a horizontal stacked bar chart (HBAR in the images), a regular bar chart, and a table of numbers. The paper start off by criticizing earlier studies that relied on measuring how well people can compare areas to each other, rather than areas to sub-areas (which is the more typical use for pie charts), and that used tasks that were different from how people use charts in real life.

The tasks Spence and Lewandowsky picked are more typical for the kinds of questions people would ask of the data, like <em>‘Do Olivetti and Bull together sell more computers than IBM?</em> (isn't it amazing how this question dates the paper?) They also argue that precision in reading the numbers is secondary to comparison tasks, since a table is obviously going to be more precisely readable than any visualization. They therefore picked comparison rather than estimation tasks, and tested them with different constraints.

## Results

Their first experiment is quite typical for most of their other results, so I will focus on this one here. They showed the three chart types (the table was not included in this experiment) to study participants for 1.5, 3, or 6 seconds. The chart below shows accuracy versus presentation time for the three charts and three different questions: a simple A vs. B comparison, A vs. B+C, and A+B against C+D.

<p align="center"><img src="https://media.eagereyes.org/media/2011/pie-accuracy.png" alt="" width="600" height="476" /></p>

It is easy to see that the differences between charts are minimal. What is much more important is the presentation time and the task. Another thing they tested were different numbers of components, and those charts look quite similar: as long as the number is seven or below (which is what they tested), the differences between them is very small.

In addition to the pie chart not being worse than the bar chart, there is an even more surprising result here: pie charts are doing better for more complex tasks! They performed a separate study to tease out that effect, and it did turn out to be statistically significant.

<p align="center"><img src="https://media.eagereyes.org/media/2011/pie-complexity.png" alt="" width="600" height="529" /></p>

While it is not surprising that the table doesn't do too well in the more complex tasks (adding up numbers is more difficult than combining areas), the comparatively bad performance of the bar chart is. They did not include the stacked bar chart here for some reason, which presumably would have done better than the regular one.

In their discussion, they mention that adjacent segments in a pie chart are especially easy to combine, whereas the same is not true for a bar chart. And that, I think, is an important point: if we step away from the focus on accuracy in reading numbers, some of the more complex tasks are actually easier to do with the pie chart. The bar chart is great for reading and comparing individual numbers, but when it comes to adding up bars, it's a lot less effective.

## Trust the Designers

Spence and Lewandowsky make an interesting point at the beginning of their discussion section:

>	As Macdonald-Ross (1977) has observed, practical communicators have a good sense of what works, and does not work, in display graphics. He cautions that one should not lightly ignore this accumulated body of practical wisdom even though it may have little formal experimental base.

Visualization people tend to dismiss the collected expertise of designers despite having little more in terms of 'experimental base.' That does not mean that a designer's choices are always right, but it does mean that we have to be a bit more careful. It certainly means that we have to have evidence in hand before we dismiss something as ineffective or wrong – lest we be proven wrong ourselves.

<hr />

Ian Spence and Stephan Lewandowsky, <a href="http://psych.utoronto.ca/users/spence/Spence_Lewandowsky_1991.pdf" target="_blank">Displaying Proportions and Percentages</a>. <em>Applied Cognitive Psychology</em>, vol. 5, no. 1, pp. 61–77, 1991.

[[PostedBy]]

<aside class="comments">

---
## Comments

<a href="http://i-ocean.blogspot.com/" rel="nofollow noopener" target="_blank">Derek</a> says…
>	All you've proved is that a pie chart is not as bad as a horizontal stacked bar chart. 

<a href="http://cscheid.net" rel="nofollow noopener" target="_blank">Carlos</a> says…
>	Thanks for the pointer!
>	
>	It really surprises me that although they suggest a perfectly reasonable, _testable_ mechanism ("pie charts makes us good at combining pie slices, while bar charts offer no such affordances"), they do not follow it up with the obvious experiment of stacked bar charts, as you mention. It would control more precisely the influence of angle vs distance. A shame.
>	
>	Incidentally, here's a skeleton for a vis evaluation course (it might have been done before): Set up some general mturk infrastructure and assign a lot of these classical experiments for students to reproduce and improve with the appropriate controls. It'd have a good mix of critical reading and ("which experiments did they miss?") and implementation work ("you mean I write the javascript code myself?").

Robert Kosara says…
>	Do you think that the vertical stacked bar chart is better? Why? And besides, that is already something. The common wisdom so far has been that pie charts are far worse, so showing that they're not should be something of a surprise.

Robert Kosara says…
>	It's an idea I've also had before, but haven't been sure enough about to try. We could definitely use lots of small experiments to test all kinds of things. But on the other hand, some of that work is already out there, we just have to find it.
>	
>	I agree about the missed opportunities, there are a few in this paper. But there's also more recent work by both authors that I need to look into to see if they've closed some of those gaps.

<a href="http://www.janwillemtulp.com" rel="nofollow noopener" target="_blank">Jan Willem Tulp</a> says…
>	This is very interesting, and contrary to common knowledge. It's really good to have some actual research on this! Thanks for sharing.

<a href="http://twitter.com/#!/acotgreave" rel="nofollow noopener" target="_blank">Andy Cotgreave</a> says…
>	Stephen Few covered this in one of his pie chart white papers. He agrees that comparing A+B to C+D (and +E+F, etc) is easier with a pie. However, that assumes that A+B are adjacent, as are C+D. 
>	
>	What this paper didn't test is how effective a pie would be if asked to compare A+C and B+D. Stephen Few's paper has some illustrations to show the difficulty that would create. 
>	
>	So, yes - people shouldn't dismiss pies as always wrong. There are times when they do better than bars.

<a href="http://.visualquest.in" rel="nofollow noopener" target="_blank">paresh</a> says…
>	Fascinating discussion!
>	
>	Another perspective here - <a href="http://www.visualquest.in" target="_blank">www.visualquest.in</a> - <a href="http://bit.ly/eGmvnA" target="_blank">http://bit.ly/eGmvnA</a> 
>	
>	The gestalt principles - pie and doughnut  charts. 
>	
>	

Robert Kosara says…
>	I agree, that would be a good study. And as I've said in another comment, there are quite a few missed opportunities in that paper. On the other hand, I wanted to point out that this kind of stuff is out there, and I'm sure there's a lot more like it.

<a href="http://about.me/drit" rel="nofollow noopener" target="_blank">drit</a> says…
>	The study is quite interesting, and it proves that every tool can be put to good use. It is a designers job to decide when to use one vs the other. However, the reason why most people are against pie charts is because they are widely misused - simply because they look better (or "pretty" as business people refer to), not because they help the user in their tasks.
>	
>	In my experience as an end user of interfaces, the majority of the pie charts cases I have seen have 4+ categories in them. This is a typical case where the chart completely fails, and I have to rely on a table or the values to compare the categories. Matter of fact, I cannot recall any cases where as an end user I had to compare A+B vs C+D. The majority of the cases has been what is the highest value, and what is next highest, etc. 
>	As Few has previously stated, people have a hard time compare "angles" the difference between a 20% and 30% is very hard to recognize. The only time it works in Pie chart is when there are two angels to compare, hence the A+B vs C+D works, because is the same as comparing A vs B in a pie chart with two categories.
>	A good example of a pie chart failure is www.mint.com  - I always look at what categories my household spent most $ on, and the tool always default to a pie chart which tells me nothing because there are 15+ categories in there and 12+ of them  are 60-70% of the expenses and change by 2-10% from each other. Of course Mint has bar charts too, but that is one more click every time!
>	I believe at the end of the day the question every UI designer needs to ask is "Does Chart Type X provide the quickest answer to the task the user has." - and not which is "better looking" visually.

<a href="http://i-ocean.blogspot.com/" rel="nofollow noopener" target="_blank">Derek</a> says…
>	Stacked bar charts are considered poor by the same people who consider pie charts poor. And the common wisdom is actually that pie charts are awesome, as can be seen by observing any business community, and occasionally by yet another "defence of pie charts" article. 

<a href="http://www.pointlineplane.co.uk" rel="nofollow noopener" target="_blank">Tom</a> says…
>	" I cannot recall any cases where as an end user I had to compare A+B vs C+D "
>	this kind of aggregate comparison is common in elections where there are more than two parties i.e. does one party have enough to form a majority? Do parties likely to form a coalition have enough parliamentary seats to do so? c.f last years UK general election where in a  4 way pie chart* you'd a want to compare A+B vs B+C whilst always keeping an eye on D. 
>	
>	I think you're right that each of these cases could be reduced to a 2 value pie, but the fact that a 4 value pie can act as two or maybe three 2 value charts and provide accurate comparisons is valuable.
>	
>	Also you're right that the mint.com example is particularly poor (i'm not trying to defend it in any way) but then the question "Does Chart Type X provide the quickest answer to the task the user has?" supposes that the user only has one task in mind and that you know what that task is. as you say all these tools have their use. Taking account of all these factors is to some extent a job for intuition, the intuition can be founded on things like the linked paper though.
>	
>	*Labour, Liberal Democrat, Conservative, others

<a href="http://www.excelcharts.com/blog/" rel="nofollow noopener" target="_blank">Jorge Camoes</a> says…
>	We've been discussing this since 1927. You can read about it in Kosslyn's Graph Design for the Eye and Mind. He lists several articles on the subject. Ian Spence wrote other articles about pie charts ("No Humble Pie: The Origins and Usage of a Statistical Chart" for example"). And I recommend Simkin and Hastie's An Information-Processing Analysis of Graph Perception.
>	
>	A pie chart is a chart. We don't have to like it or hate it. We just have to use it when it makes sense (data-wise, audience-wise).
>	
>	We are discussing the sex of angels.
>	

Robert Kosara says…
>	Thanks for the pointers, some of these are already on my list of things to read. But I disagree about the importance of this discussion. Look at how people talk about pie charts, including Tufte (who says they should never be used). Lots of people think that this is based on evidence, but it's not. We need a more nuanced understanding of what works and what doesn't, and one that's based on facts, not opinion of preference.

<a href="http://www.excelcharts.com/blog/" rel="nofollow noopener" target="_blank">Jorge Camoes</a> says…
>	Robert, Jacques Bertin says that there is no art in data visualization, just a formal set of rules and principles. I would say he's 80% right, but we just can't avoid aesthetics and its subjective nature.
>	
>	Tufte had this brilliant idea of applying minimalism to data visualization. This is art, not science. Most of the time it works because it removes junk from the equation (higher signal-to-noise ratio) but efficiency is not the only criteria.
>	
>	There are no facts, I'm afraid. Research results are inconsistent, perhaps because each author measures different things, perhaps because there are too many interactions. So, yes, you have to choose, based on your opinions and preferences (and a little scientific evidence, sure).
>	
>	Physiology of the eye, the eye-brain system and memory (and gestalt and color theory and data management): that's what we should care about, not chart types.
>	
>	Discussing pie charts and broken scales is too basic.We should spend our time elsewhere.
>	
>	Discussing Tufte, on the other hand, is much more interesting...
>	

<a href="http://.visualquest.in" rel="nofollow noopener" target="_blank">paresh</a> says…
>	Hi Jorge 
>	
>	You are a well read man - about graphics for sure. But that brings along with it a "curse of knowledge" - maybe you need to read up on that. We common folks do need to read up and discuss 'basic' stuff. Maybe when we need to read up some 'esoteric' stuff  we will pop up on your site!

<a href="http://www.perceptualedge.com" rel="nofollow noopener" target="_blank">Stephen Few</a> says…
>	Robert,
>	
>	I know that you’re familiar with my article “Save the Pies for Dessert,” which summarizes all of the research that’s been done to compare pie charts to other forms of part-to-whole comparison, so I won’t bother to repeat its content here in these comments. What I found when surveying the full body of research is that the finding that you feature from Spence’s and Lewandowsky’s work is the one and only example of something that a pie chart does better than a bar graph for part-to-whole comparisons. Contrary to their assertion, however, in the real world people rarely make this comparison. I know this from spending my entire professional life working with people to make sense of and communicate data, primarily in the world of business, further confirmed by asking the question often in my table an graph design course: “How often do you use pie charts to compare the sum of multiple parts to the sum of other multiple parts?” Although this particular comparison is certainly made on occasions, it is a rare event. So, the best that we can say “in defense of pie charts” is that if you want to do make this specific comparison, you should use a pie chart. Having stated this, the defense rests, for there is nothing more to say.
>	
>	I also want to respond to the observation of MacDonald-Ross in 1977, which you use to end your comments. It was perhaps true that before the emergence of the PC when people created graphs by hand and took great care to do so, those who did so gained a facility in graphical communication that is no longer prevalent. Today, the instincts of people who use tools like Excel and Powerpoint routinely to present data rarely represent “a good sense of what works, and what does not work”, forged through years of experience into an “accumulated body of practical wisdom.” These folks are my clients; I work with them face-to-face on a regular basis. My experience confirms that even those who specialize in “business intelligence”, with rare exceptions, have not developed good instincts about graphical communication. Most follow the nudges of the products that they use, which almost always point them in the wrong direction. 
>	
>	Helping people wean themselves from ineffective practices out there in the world where they use data every day to make critical decisions is a constant battle. Most of them will read the title “In Defense of Pie Charts” and feel affirmed, never bothering to read the fine print. 

<a href="http://www.excelcharts.com" rel="nofollow noopener" target="_blank">Jorge Camoes</a> says…
>	Paresh: I strongly believe in "data visualization for the masses". That's why I write a blog called "Excel Charts". There is nothing less glamorous and esoteric than Excel charts...
>	
>	I also write about pie charts and I like it, but discussing chart types is often pointless if you don't understand how human perception works and how to manage and communicate the data.
>	
>	You can choose to blindly follow some rules (use pie charts for proportions, use line charts for trends, time runs from left to right...) or you can try to find why. It's not rocket science.

<a href="http://www.excelcharts.com" rel="nofollow noopener" target="_blank">Jorge Camoes</a> says…
>	" in the real world people rarely make this comparison". While I agree with you, my own experience tells me that when people become aware of that they start using it, grouping slices by shades of the same colors instead of the default rainbow.
>	
>	That's one of the first steps towards a higher graphicacy.

<a href="http://www.visualquest.in" rel="nofollow noopener" target="_blank">paresh</a> says…
>	Hi Stephen 
>	
>	In the introduction to The Heart of Change John P. Kotter writes, “ The single most important message in this book is very simple. People change what they do less because they are given analysis that shifts their thinking than because they are shown a truth that influences their feelings.”
>	
>	But as far as I am personally concerned, pie charts are fine in certain cases - and the Gestalt principle of Equilibrium ensures that their feelings are influenced or at least engaged.
>	

<a href="http://www.visualquest.in" rel="nofollow noopener" target="_blank">paresh</a> says…
>	Hi Jorge,
>	 
>	That is exactly why I wrote about the Gestalt Principle of Equilibrium just a day or so before " in defense........."  was posted by Robert. No Blind Rules.
>	
>	Incidentally I like reading your blog and some of the posts are quite incisive  but some of the posts are well......"cursed"  by you know what.
>	

<a href="http://www.perceptualedge.com" rel="nofollow noopener" target="_blank">Stephen Few</a> says…
>	Paresh,
>	
>	I have no idea how your comments apply to this discussion.

<a href="http://.visualquest.in" rel="nofollow noopener" target="_blank">paresh</a> says…
>	Hi Stephen
>	
>	The point I was trying to make was simple - we, at least some of us [ McCandless is an obvious exception],  want the level of graphicacy to improve. Unfortunately  we always seem to be using one tool to convince people to change - logic and analysis. Doubt whether we will ever be successful.
>	
>	On this particular issue off course, I do believe that in some cases pie charts can be effectively used - we like equilibrium in what we see - the pie chart provides that    - use them but keep their limitations in mind.
>	
>	In fact, and here I am digressing, what role can graphs play in bringing in change.  As Kottler writes in his book what got the purchase department to change was  not reams of data and incisive graphs but the pile of gloves all bought at different prices on the table in the board room. An interesting subject for discussion.

Robert Kosara says…
>	Steve,
>	
>	the people I had in mind when I wrote about making good decisions were not business users, but designers. I think that, as you write, that is also what MacDonald-Ross meant. What I am trying to argue here is that while it is easy to be smug and just repeat the same lines about how terrible pie charts are, we need to be a bit more careful. A more nuanced view is needed, and a better understanding of what charts work for what data and tasks.
>	
>	I did not remember that <a href="http://www.perceptualedge.com/articles/08-21-07.pdf" target="_blank">your article</a> also discusses the Spence and Lewandowsky work, or I probably wouldn't have written this. But in any case, I think it's a useful data point. Of course, it needs to be considered in the context of all the other work, but it does at least make a valid point. I am also glad to discover some well-done research on these and other charts that provide some hard data to the kinds of assumptions that are often made but not very often substantiated.
>	
>	Finally, to your point about the task: I think that task is quite common, especially when you're looking at static charts. Again, I'm thinking of visual communication-type uses, not business graphics: election results, surveys, etc. So I do think this makes for a good use of these charts, though other considerations still apply (like number of slices, etc.).

Martin Cacky says…
>	Are pie charts effective for part to the whole estimation and comparison of individual values when there is no more then 4 slices?
>	
>	I understand all the the cons that pie chart has but for cases with very few slices the comparison is not that much of an issue and we still have the benefit of the part-to-the-whole nature of pie charts. 
>	
>	Is there any evidence (study) on this? All examples and mainly in S. Few's books feature aroun 6 pies where the bar chart really performs better.

<a href="http://hipcricket.com" rel="nofollow noopener" target="_blank">Mike Kemp</a> says…
>	I don’t see anything wrong with pie charts. Plus I don’t quite understand the point is discussing which chart is the best to use.  Isn’t it up to person? Though, I completely understand why you are trying to defend the pie chart. Hopefully people will learn more about this.

Anonymous says…
>	I find it ironic in your explanation of why pie charts are good you chose to not use any pie charts in your argument. 

</aside>

