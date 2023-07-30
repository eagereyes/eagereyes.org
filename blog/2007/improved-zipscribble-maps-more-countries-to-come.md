---
title: "Improved US ZIPScribble Maps, more Countries to Come"
description: "The ZIPScribble Maps of the US  obviously hit a nerve, with over 55,000 unique visitors in about two weeks, and more than 70 comments. There was also some criticism, especially regarding some slight problems with coloring the states, and that some of the dividing lines were not, in fact, state lines (and that it was not easy to compare them to state lines). For reasons of convenience, I had also left out Alaska and Hawaii, and there were requests for similar maps for more countries. The US maps have just been updated to solve almost all of the above problems (except for AK and HI, which are included in separate maps for now), and ZIPScribbles for several other countries will be published in the next few days. An interactive version is also in the works."
date: 2007-01-03 23:21:35
tags: 
featuredImage: 
outline: false
---

# Improved US ZIPScribble Maps, more Countries to Come

The <a href="http://eagereyes.org/Applications/ZIPScribbleMap.html">ZIPScribble Maps of the US</a> obviously hit a nerve, with over 55,000 unique visitors in about two weeks, and more than 70 comments. There was also some criticism, especially regarding some slight problems with coloring the states, and that some of the dividing lines were not, in fact, state lines (and that it was not easy to compare them to state lines). For reasons of convenience, I had also left out Alaska and Hawaii, and there were requests for similar maps for more countries. The US maps have just been updated to solve almost all of the above problems (except for AK and HI, which are included in separate maps for now), and ZIPScribbles for several other countries will be <a href="http://eagereyes.org/Applications/MoreZIPScribbleMaps.html">published in the next few days</a>. An interactive version is also in the works.

The biggest headache were certainly the two missing states. While finding map data for the states was not all that hard, moving Alaska without completely distorting it was another thing entirely. I put a lot of work into this update, and can't invest any more time right now. I will, however, add a map of all the states at a later time.

I did add a backdrop that shows the outlines of the states. Printing a thin gray line did not work very well on the printers I tried, so I opted for the area rather than the line approach. The lines are only just visible, but that was my intention - I did not want to make them stand out too much. The coloring is already quite strong.

The issue with coloring neighboring states with the same color in two instances was solved by adding a little interactivity to my program so that I could cycle through colors for a state, and and save all the colors once I was satisfied with them. This was certainly much less work than implementing a graph coloring algorithm, but not because of that algorithm, but because creating the graph of neighboring states does not appear to be all that straight-forwward. Since states don't change much, I am happy with this approach.

I also changed the projection several times, and am now back to a Mercator projection, which has its center in the center of gravity of all the ZIP points. This appears to be pretty well in line with many other maps you see, though there is some variation. Note the straight border with Canada now.

Maps for other countries are certainly high on my priority list, but this is made difficult by the fact that location data for postal codes is very hard to obtain for places other than the US. The fine folks at <a href="http://www.geonames.org/">geonames.org</a> have done an incredible job collecting that (and a huge amount of other) data. This is still limited to relatively few countries though, and then to the ones where there is enough precision in the data to make a decent map. Right now I have usable data for Australia, Austria, Canada, France, Germany, Italy, the Netherlands, Norway, Spain, and Switzerland. I have a few more datasets, but these are not yet in a state where they produce believable images, and even some of the ones listed above contain visible errors. Still, the mere existance and availability of that data is a minor miracle, and I am quite happy with the results.

For an interactive version of the map, I experimented a bit with Google Maps. The problem is that it just can't handle overlays with so many points, it only works reasonably well for very sparsely populated countries like Canada and Australia. I will therefore make my program into a Java applet, and put that on here. This is going to take a bit more time, but should happen before the end of January.


_Posted by <a href="/about">Robert Kosara</a> on January 03, 2007_


