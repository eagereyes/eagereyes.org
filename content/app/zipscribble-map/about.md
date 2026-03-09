---
title: About the ZIPScribble Map
description: What would happen if you were to connect all the ZIP codes in the US in ascending order? Is there a system behind the assignment of ZIP codes? The result is surprising and much more interesting than expected.
---

# About the ZIPScribble Map

What would happen if you were to connect all the ZIP codes in the US in ascending order? Is there a system behind the assignment of ZIP codes? Are they organized in a grid? The result is surprising and much more interesting than expected.

The idea for the ZIPScribble came from playing with Ben Fry's excellent <a href="http://benfry.com/zipdecode/">zipdecode</a>. That little applet allows you to explore the ZIP codes interactively, and reveals some very interesting patterns. What it does not give you, however, is an idea of the overall structure of the ZIP space. Jeffrey Heer reimplemented zipdecode using his prefuse toolkit, and provides a file containing ZIP codes and coordinates. So off I went on a little programming exercise to see what simply connecting the dots would do.

<p align="center"><img title="ZIPScribble Map b/w" src="https://media.eagereyes.org/media/attachments/ZIPScribbleMap.jpg" alt="ZIPScribble Map b/w" width="600" height="350" border="0" /></p>
<p align="center">(<a href="https://media.eagereyes.org/media/attachments/ZIPScribbleMap.pdf" target="_blank">ZIPScribble Map PDF</a>)</p>

The patterns and density distribution are readily apparent, and can in fact be seen much better than when only the dots are drawn. The scribbling quality of the lines (looks like somebody was bored while talking on the phone) lead to the clever name for the map. So let's enhance the map, and see if those apparent borders are in fact state lines or just artifacts.

<p align="center"><img title="ZIPScribble Map color" src="https://media.eagereyes.org/media/attachments/ZIPScribbleMap-color.png" alt="ZIPScribble Map color" width="600" height="350" border="0" /></p>
<p align="center">(<a href="https://media.eagereyes.org/media/attachments/ZIPScribbleMap-color.pdf" target="_blank">ZIPScribble Map Color PDF</a>)</p>

Not surprisingly, some of the white lines really separate states, others don't. For the non-US folks (like yours truly), it makes sense to add state names for better readability, and also to disambiguate some problems with the rather simplistic coloring algorithm.

<p align="center"><img title="ZIPScribble Map color, names" src="https://media.eagereyes.org/media/attachments/ZIPScribbleMap-color-names.png" alt="ZIPScribble Map color, names" width="600" height="350" border="0" /></p>
<p align="center">(<a href="https://media.eagereyes.org/media/attachments/ZIPScribbleMap-color-names.pdf" target="_blank">ZIPScribble Map Color with Names PDF</a>)</p>

Adding the colors clearly adds information, but it also removes some of the mystery. The scribble quality is much more apparent from the monochrome version (nobody has lots of differently colored pens lying around). The colored version looks more interesting, but also looks much more like any other map than the monochrome version.

Since the lines between the denser areas could still be artifacts, let's add a backdrop to see if they really are state lines.

<p align="center"><img title="ZIPScribble Map Color Names Borders" src="https://media.eagereyes.org/media/attachments/ZIPScribbleMap-color-names-borders.png" alt="ZIPScribble Map Color Names Borders" width="600" height="350" border="0" /></p>
<p align="center">(<a href="https://media.eagereyes.org/media/attachments/ZIPScribbleMap-borders.pdf" target="_blank">ZIPScribble Map B/W with Borders</a>) (<a href="https://media.eagereyes.org/media/attachments/ZIPScribbleMap-color-names-borders.pdf" target="_blank">ZIPScribble Map Color with Borders PDF</a>)</p>

Alaska and Hawaii are also included:

<p align="center"><img title="ZIPScribble of Alaska and Hawaii" src="https://media.eagereyes.org/media/attachments/ZIPScribble-AKHI.png" alt="ZIPScribble of Alaska and Hawaii" width="600" height="272" border="0" /></p>

Is this visualization? Sure, because it shows data. The pictures are not interactive (though there is [an interactive version](/app/zipscribble-map)), but they do allow some insight into the patterns created by the numbers. Is it useful? Probably not. But it sure is surprising and interesting, rather like a fractal image.

---

## Explore the Map

The [interactive ZIPScribble Map](/app/zipscribble-map) covers 39 countries. Select a country to see its postal code scribble:

[Argentina](/app/zipscribble-map#AR) &middot;
[Australia](/app/zipscribble-map#AU) &middot;
[Austria](/app/zipscribble-map#AT) &middot;
[Belgium](/app/zipscribble-map#BE) &middot;
[Brazil](/app/zipscribble-map#BR) &middot;
[Bulgaria](/app/zipscribble-map#BG) &middot;
[Canada](/app/zipscribble-map#CA) &middot;
[Croatia](/app/zipscribble-map#HR) &middot;
[Czech Republic](/app/zipscribble-map#CZ) &middot;
[Denmark](/app/zipscribble-map#DK) &middot;
[Finland](/app/zipscribble-map#FI) &middot;
[France](/app/zipscribble-map#FR) &middot;
[Germany](/app/zipscribble-map#DE) &middot;
[Greenland](/app/zipscribble-map#GL) &middot;
[Hungary](/app/zipscribble-map#HU) &middot;
[Iceland](/app/zipscribble-map#IS) &middot;
[India](/app/zipscribble-map#IN) &middot;
[Italy](/app/zipscribble-map#IT) &middot;
[Japan](/app/zipscribble-map#JP) &middot;
[Lithuania](/app/zipscribble-map#LT) &middot;
[Mexico](/app/zipscribble-map#MX) &middot;
[Netherlands](/app/zipscribble-map#NL) &middot;
[New Zealand](/app/zipscribble-map#NZ) &middot;
[Norway](/app/zipscribble-map#NO) &middot;
[Pakistan](/app/zipscribble-map#PK) &middot;
[Philippines](/app/zipscribble-map#PH) &middot;
[Poland](/app/zipscribble-map#PL) &middot;
[Portugal](/app/zipscribble-map#PT) &middot;
[Russia](/app/zipscribble-map#RU) &middot;
[Slovakia](/app/zipscribble-map#SK) &middot;
[Slovenia](/app/zipscribble-map#SI) &middot;
[South Africa](/app/zipscribble-map#ZA) &middot;
[Spain](/app/zipscribble-map#ES) &middot;
[Sweden](/app/zipscribble-map#SE) &middot;
[Switzerland](/app/zipscribble-map#CH) &middot;
[Thailand](/app/zipscribble-map#TH) &middot;
[United Kingdom](/app/zipscribble-map#GB) &middot;
[United States](/app/zipscribble-map)
