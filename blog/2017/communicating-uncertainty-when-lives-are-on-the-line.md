---
title: "Communicating Uncertainty When Lives Are on the Line"
description: "Showing when and where natural disasters like hurricanes are going to cause damage is not just a question of aesthetics – it is literally a matter of life and death. The traditional way hurricane forecasts are shown has a number of problems, but are the alternatives actually better?"
date: 2017-09-06 20:35:59
tags: uncertainty, communication
featuredImage: https://media.eagereyes.org/wp-content/uploads/2017/09/irma-nytimes-cone.png
---

# Communicating Uncertainty When Lives Are on the Line

Showing when and where natural disasters like hurricanes are going to cause damage is not just a question of aesthetics – it is literally a matter of life and death. The traditional way hurricane forecasts are shown has a number of problems, but are the alternatives actually better?

The type of representation most people see is <a href="http://www.nhc.noaa.gov/refresh/graphics_at1+shtml/030119.shtml?cone#contents">this one created by the National Oceanic and Atmospheric Administration (NOAA)</a>, or one that is very closely based on it. This one is for hurricane Irma, which is currently heading towards Florida and has already wreaked havoc on some of the small islands in its path.

<p align="center"><img class="aligncenter size-full wp-image-10161" src="https://media.eagereyes.org/wp-content/uploads/2017/09/irma-noaa-cone.png" alt="" width="897" height="736" /></p>

There are many small things that could be improved here, but the key is the <em>cone of uncertainty</em>: the area that expands as the path of the storm is projected into the future.

One big problem with this map is that it looks like the storm is growing, which is not what is actually being shown here – but it's hard not to see it that way. This is such a common misunderstanding that it warrants this notice at the top of the map:

<p align="center"><img class="aligncenter size-full wp-image-10165" src="https://media.eagereyes.org/wp-content/uploads/2017/09/irma-noaa-notice.png" alt="" width="653" height="40" /></p>

The sharp boundary also creates the impression that any area not covered is definitely in the clear. That is not the case, it's just outside the area that is above a certain likelihood. Depending how far out the prediction goes and how much the different models disagree, areas close to but outside the boundary could easily be affected (and likely are either way, because they will receive lots of rain and wind, even if not hurricane levels).

## Showing Uncertainty

There are alternatives to this common representation. <a href="https://www.nytimes.com/interactive/2017/09/05/us/hurricane-irma-map.html">The New York Times has a page</a> that shows both a cleaner version of the cone and the individual traces from different simulation runs (this is called an <em>ensemble</em> and is a common technique to see how close the results of slightly different starting parameters end up being).

<p align="center"><img class="aligncenter size-full wp-image-10164" src="https://media.eagereyes.org/wp-content/uploads/2017/09/irma-nytimes-tracks.png" alt="" width="1071" height="592" /></p>

This is clearly a nicer map, though it also conveys less information about the strength of the storm going forward. By losing the width of the storm, it also makes it hard to judge how many of the tracks would impact Florida. How far away from the coast does the storm have to be so it doesn't cause major damage? I can't tell. I also find it hard to tell how many of the tracks hit land: is it half? Are they all equally likely?

NOAA has <a href="http://www.nhc.noaa.gov/refresh/graphics_at1+shtml/030119.shtml?tswind120#contents">a map that shows probabilities</a> that, while incredibly ugly, is also quite informative.

<p align="center"><img class="aligncenter size-full wp-image-10162" src="https://media.eagereyes.org/wp-content/uploads/2017/09/irma-noaa-uncertainty.png" alt="" width="897" height="738" /></p>

This says in no uncertain terms that Hurricane Irma will hit Florida. The purple 90% area is clearly pointing straight at Miami. There are scenarios that avoid landfall, but they're much less likely. Yes, <a href="/basics/rainbow-color-map">the rainbow colormap</a> is perhaps not the best choice, but it doesn't actually get in the way here.

Could this be shown in a more aesthetically pleasing way? Yes, the folks at Axios have made <a href="https://www.axios.com/hurricane-irmas-path-over-the-next-5-days-2482266130.html">a much more design-y map</a>.

<p align="center"><img class="aligncenter size-full wp-image-10160" src="https://media.eagereyes.org/wp-content/uploads/2017/09/irma-axios.png" alt="" width="1546" height="1168" /></p>

It's less painful to look at (and based on older data). I find the low contrast in the map problematic however, because it makes it hard to see the land. Especially under the darker regions, where it's the most important, the land almost disappears. Contrast that with the NOAA map above that outlined coastlines to make them visible even when under other layers.

But I also wonder if a starker (if much uglier) color scheme is more effective here. The point of the map is convey real, imminent danger. Even using red, is being subtle the right choice here? Or should the danger scream at you, like in the NOAA map?

## How to Do Better?

There are probably other designs out there, but these are the common ones you see on the news and major news websites. What would a better representation have to do to not just be prettier to look at, but actually be more informative?

For one, it would need to communicate both the possible scenarios and the cumulative effect of the different simulation runs. Essentially a combination of the tracks and the uncertainty areas. It also would need to have fuzzy boundaries to not create a false sense of security for people living just outside the sharp line drawn on traditional maps. And ideally, it would show the data the NOAA map above is showing: hurricane strength, at least along affected coastlines, and predicted winds. More data would be nice to see as well, such as predicted amounts of rainfall, etc.

Perhaps the answer is not even just a static image, but something animated that cycles through scenarios – not unlike the infamous <a href="/blog/2017/the-state-of-information-visualization-2017">New York Times election gauges</a>. The animation might be more informative and less stressful to watch when there are more than two possible outcomes.

Given the importance of communicating this information, it is astounding that there aren't better solutions. The ones that we have, while undoubtedly imperfect, do work. Better ones are possible, but a redesign has to be more than just a new coat of paint. It needs to create a better understanding of uncertainty. And that is not an easy nut to crack.


_Posted by <a href="/about">Robert Kosara</a> on September 06, 2017_


<aside class="comments">

---
## Comments

<a href="http://gicentre.net/jwo" rel="nofollow noopener" target="_blank">Jo Wood</a> says…
>	There is another category of designs that could be used to show the inherent uncertainty – make the underlying geography look uncertain, not (just) the hurricane track symbols. This provides greater freedom for the symbol design to incorporate strength/damage/time etc.
>	
>	We illustrated the concept with sketchy 'stenomaps' in a paper at VIS a few years ago:
>	
>	http://staff.city.ac.uk/~jwo/datavis/cuso2017/images/hurricane_3.png
>	
>	(this concept sketch has many of the flaws you identify, but I think the principle of creating uncertain cartography is one worth exploring).
>	
>	The full paper is here:
>	
>	http://openaccess.city.ac.uk/14151/
>	
>	Jo.

<a href="http://www.dethwench.com" rel="nofollow noopener" target="_blank">Monika M. Wahi, MPH, CPH</a> says…
>	Thank you for this terrific post. I will have to respectfully disagree with you on one thing - that the rainbow display is "ugly" and not as helpful as the Axios display. 
>	
>	I live in Boston now, but in 2004, I lived in Tampa, and several hurricanes hit Florida. I used displays like the rainbow one and found them very helpful. I will point out two attributes I found useful: 1) Unlike the Axios display, there are very clear color differences between the levels. The Axios map, using a red gradation, makes it hard to tell between the different levels. 2) Unlike the Axios display, very low percentages are graphed clearly in the green. These shift frequently - green can become red quick in Florida. Being actually in a bunch of hurricanes really made me appreciate that shifting rainbow map.
>	
>	I think when it comes to data visualization, there is a continuum, and at one end, everyone thinks something is awful, and at the other end, everyone thinks something is pretty good. As long as it's on the "pretty good" side, I think beauty (and utility) may be in the eye of the beholder.

<a href="https://plus.google.com/+JonathanBakerBates" rel="nofollow noopener" target="_blank">Jonathan Baker-Bates</a> says…
>	As an infographics designer, I'm often aware that maps have a special "gravity" that often pulls designers away from thinking about what the data actually needs to do. And I'm a bit wary of using maps to display data like storm paths, precisely due to the sorts of problems you describe. So it's always worth at least considering combining or even replacing the map with non-map alternatives. 
>	
>	For example, the vast majority of those seeing the NOAA map would be better served by entering where they live then then getting a probability (perhaps expressed as a percentage) of whether the storm will hit them. That happens to be by far and away the most important use case in this context. You do not care about issues of relative geography, coastlines, points of the compass or how far in-land city X or Y is. So why risk confusion by showing that at all? As you say, lives are on the line.

<a href="http:/visualquest.in" rel="nofollow noopener" target="_blank">Paresh shah</a> says…
>	When lives are on the line it is imperative that a uniform visualisation be used by all. The uniform visualisation can be finalised after discussion. This would avoid a situation where we have different visualization creating confusion and misleading readers. 
>	
>	Possibly a multiple chart format can be used to emphasise different aspects rather than cramming it all in one chart. Possibly, the different charts shown in the article could be combined with requisite text.
>	
>	But once we settle on a format, all visualisers must use the same; NYT , WAPO , Other publications must all use the same. But then what about creativity ? Creativity can be sacrificed when lives are on the line. !

</aside>

