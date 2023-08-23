---
title: "The Semantics of the Y Axis"
description: "The vertical axis is not just important because it embodies one of the most important visual properties, but also because it is much more semantically loaded than the horizontal. Not only does the right choice of mapping help with reading a chart, it can also be confuse people if done wrong."
date: 2014-09-07 19:53:04
tags: 
featuredImage: https://media.eagereyes.org/wp-content/uploads/2014/09/up-worldcup.png
---

# The Semantics of the Y Axis

The vertical axis is not just important because it embodies one of the most important visual properties, but also because it is much more semantically loaded than the horizontal. Not only does the right choice of mapping help with reading a chart, it can also be confuse people if done wrong.

It's not a coincidence that the vertical is so important for us. An animal that is lying on the ground is dead or sleeping, that's important to know. Vertical movement is also much harder than moving in the other two dimensions, and fast vertical movements can kill us. That is why we overestimate heights: better be scared of a jump that isn't all that dangerous than taking it lightly and getting injured or killed.

We also have some very strong ideas about the vertical direction. Things moving up are generally good, things moving down less so. Being up (standing, walking, moving) is good, being down (lying, sick, dead) is not. We derive many of our metaphors from this fundamental difference too: being down meaning being sad, things looking up or moving up meaning they are good or getting better. Up also means more: more things being stacked or heaped up means more vertical space being used, and more is usually better, so more is up.

## Jawbone UP's Sleep Tracking

Jawbone wrote <a href="https://jawbone.com/blog/world-cup-of-sleep/">a blog posting about when people slept during the soccer world cup</a> according to the data they were gathering from users of their activity tracker armband. The tracker is called <em>UP</em>, which causes some interesting issues parsing the axis labels in these charts.

<p align="center"><img class="aligncenter size-medium wp-image-8326" src="https://media.eagereyes.org/wp-content/uploads/2014/09/up-worldcup-730x392.png" alt="Up World Cup stats" width="730" height="392" /></p>

Parsing “% of UP wearers asleep” has you going back and forth between two interpretations: UP meaning people being up/awake, but then you read “asleep.” The number is encoded on the vertical axis as more people meaning the line going higher. So more up meaning more people asleep, fewer people being up. I remember some confused tweets from people struggling with this when this made the rounds.

Jawbone also seems to have noticed, since in <a href="https://jawbone.com/blog/napa-earthquake-effect-on-sleep/">their recent posting on the Napa earthquake</a>, they flipped the axis to make the semantic connection easier to follow. Now it's “% UP wearers awake,” which makes a lot more sense. More up, more people are awake or, well, up.

<p align="center"><img class="aligncenter size-medium wp-image-8325" src="https://media.eagereyes.org/wp-content/uploads/2014/09/up-earthquake-730x344.png" alt="Up Earthquake stats" width="730" height="344" /></p>

The archetype of these visualizations, the New York Times' <a href="http://www.nytimes.com/interactive/2009/07/31/business/20080801-metrics-graphic.html"><em>How Different Groups Spend Their Day</em></a> also works like this: the bottom-most layer, and thus the baseline of sorts, is sleep. As it should be.

## Which Quadrant

This chart of men's vs. women's earnings that <a href="/blog/2014/my-favorite-charts">I wrote about recently </a> also uses the vertical axis in a simple, yet smart way. It has men's earnings on the horizontal axis, and women's on the vertical. That is the only way this makes sense, even if technically the other way around would be just as correct.

<p align="center"><img class="aligncenter size-medium wp-image-8317" src="https://media.eagereyes.org/wp-content/uploads/2014/09/wage-gap-730x424.png" alt="Why Is Her Paycheck Smaller?" width="730" height="424" /></p>

The difference is the message the majority of the points send. If women's earnings were on the vertical axis, those points would be in the upper left quadrant. Up is good, right? So where's the problem? Placing them in the lower left makes this much more obvious to read. The lines representing women making 10%, 20%, and 30% less also would be quite strange if they were to the top right of the main diagonal.

## Bar Charts

I already wrote about <a href="/journalism/when-bars-point-down">this topic in the specific case of bar charts</a>, but it bears repeating. Bars pointing down are unusual, and they grab the viewer's attention. They can help get a point across and help people read the chart more easily.

<p align="center"><img class="aligncenter size-medium wp-image-8319" src="https://media.eagereyes.org/wp-content/uploads/2014/09/obama-job-loss-chart-730x407.png" alt="obama job loss chart" width="730" height="407" /></p>

Larger numbers being up in line charts, bar charts, scatterplots, etc., may be the default in practically all visualization tools (and that makes sense), but it should not just be accepted without thinking about it. The vertical direction should be chosen with care, because it communicates a lot about how to read a chart. And getting it wrong can cause considerable confusion.


_Posted by <a href="/about">Robert Kosara</a> on September 07, 2014_


<aside class="comments">

---
## Comments

gilgongo says…
>	As to Jawbone, do we really need a chart to reveal to us the fact that the closer people were to the epicentre of an earthquake in the middle of the night, the more likely they were to wake up?

Stefano says…
>	Speaking of up making good, the a few exceptions (as is usually the case with the English language). "Breaking down" is bad but so is "breaking up". And how can "downhill" and "uphill" both be negative? "It's all downhill from here" vs an "uphill struggle". What about "messed up" and "hold up"? Any more? What about positive "down" terms?

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	Well, it's not that simple. Not every use of "up" has that sort of meaning, "breaking up" and "messed up" are clearly examples of that. Your "uphill battle" example is wrong, though: what's negative about it is that it's hard to fight when you're also moving up a hill (think carrying heavy weapons up a hill), while the enemy can throw and roll things down at you. This isn't purely metaphorical, this comes from actual use in the past. There is some context here beyond just the direction.

</aside>

