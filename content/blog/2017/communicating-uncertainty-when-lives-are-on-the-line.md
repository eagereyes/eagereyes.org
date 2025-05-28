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

For one, it would need to communicate both the possible scenarios and the cumulative effect of the different simulation runs. Essentially a combination of the tracks and the uncertainty areas. It also would need to have fuzzy boundaries to not create a false sense of security for people living just outside the sharp line drawn on traditional maps. And ideally, it would show the data the NOAA map above is showing: hurricane strength, at least along affected coastlines, and predicted winds. More data would be nice to see as well, such as predicted amounts of rainfall, etc.

Perhaps the answer is not even just a static image, but something animated that cycles through scenarios – not unlike the infamous <a href="/blog/2017/the-state-of-information-visualization-2017">New York Times election gauges</a>. The animation might be more informative and less stressful to watch when there are more than two possible outcomes.

Given the importance of communicating this information, it is astounding that there aren't better solutions. The ones that we have, while undoubtedly imperfect, do work. Better ones are possible, but a redesign has to be more than just a new coat of paint. It needs to create a better understanding of uncertainty. And that is not an easy nut to crack.
