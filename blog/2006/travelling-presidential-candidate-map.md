---
title: "The Travelling Presidential Candidate Map"
description: "While working on the ZIPScribble map, I started to wonder how to untangle the beautifully scribbly lines, and finding the shortest path through all ZIP codes. In computer science, this is called the Travelling Salesman Problem (TSP), and so I decided to make this the Travelling Presidential Candidate Map."
date: 2006-12-04 09:38:26
tags: 
featuredImage: 
outline: false
---

# The Travelling Presidential Candidate Map

<a href="http://eagereyes.org/Applications/ZIPTPCMap.html"><img title="Travelling Presidential Candidate Map" src="http://eagereyes.org/media/attachments/ZIPTPCMap-color-names-borders-thumb.jpg" alt="Travelling Presidential Candidate Map" width="600" height="338" border="0" /></a>

While working on the <a href="http://eagereyes.org/Applications/ZIPScribbleMap.html">ZIPScribble map</a>, I started to wonder how to untangle the beautifully scribbly lines, and finding the shortest path through all ZIP codes. In computer science, this is called the <a href="http://en.wikipedia.org/wiki/Travelling_salesman_problem">Travelling Salesman Problem</a> (TSP), and so I decided to make this the <em>Travelling Presidential Candidate Map</em>.

The TSP is a very hard problem to solve, and would have taken forever for the over 37000 points on the map, even when using a very efficient algorithm. So I had the idea of using a <a href="http://en.wikipedia.org/wiki/Hilbert_curve">Hilbert curve</a> to get an approximation. A Hilbert curve is a recursive space-filling curve that provides a linear path through all locations in a square. Here is one level of it, in the next level each line segment is replaced by a more coplex curve, etc.

<img class="aligncenter" title="Hiblert Curve" src="http://eagereyes.org/media/attachments/HilbertCurve.png" alt="Hiblert Curve" width="311" height="312" border="0" />

I was <a href="http://www.nirarebakun.com/graph/ehilbtsp.html">not the first one</a> to have the idea of using a Hilbert curve for this task, and the existing work shows that this solution is typically only 75% optimal. But that is good enough for my purposes, and it proved quick enough to implement and run a rather naive implementation of (about 10 minutes on a 1.67GHz Apple PowerBook).

<a href="http://eagereyes.org/media/attachments/ZIPTPCMap.png" target="_blank"><img class="aligncenter" title="Travelling Presidential Candidate Map" src="http://eagereyes.org/media/attachments/ZIPTPCMap-thumb.jpg" alt="Travelling Presidential Candidate Map" width="600" height="338" border="0" /></a>
<p align="center">(<a href="http://eagereyes.org/media/attachments/ZIPTPCMap.pdf" target="_blank">Travelling Presidential Candidate Map PDF</a>)</p>
The Travelling Presidential Candidate Map (TPC) does not look nearly as interesting as the ZIPScribble. There are hardly any crossing lines, which makes the image appear a lot lighter and less interesting. It also loses quite a bit of the information in the original map, which nicely showed the borders between clusters of ZIP codes, which also defined state borders.

<a href="http://eagereyes.org/media/attachments/ZIPTPCMap-color.png" target="_blank"><img class="aligncenter" title="Travelling Presidential Candidate Map Color" src="http://eagereyes.org/media/attachments/ZIPTPCMap-color-thumb.jpg" alt="Travelling Presidential Candidate Map Color" width="600" height="338" border="0" /></a>
<p align="center">(<a href="http://eagereyes.org/media/attachments/ZIPTPCMap-color.pdf" target="_blank">Travelling Presidential Candidate Map Color PDF</a>)</p>
It does gain from adding more information though, like coloring the states. Its slightly flimsy appearance does not change, however. The thin lines also make it harder to see the colors, especially in the small "thumbnails" on this page.

<a href="http://eagereyes.org/media/attachments/ZIPTPCMap-color-names.png" target="_blank"><img class="aligncenter" title="Travelling Presidential Candidate Map Color with Names" src="http://eagereyes.org/media/attachments/ZIPTPCMap-color-names-thumb.jpg" alt="Travelling Presidential Candidate Map Color with Names" width="600" height="338" border="0" /></a>
<p align="center">(<a href="http://eagereyes.org/media/attachments/ZIPTPCMap-color-names.pdf" target="_blank">Travelling Presidential Candidate Map Color with Names PDF</a>)</p>
Finally, the map with the added borders to better see where the path crosses state lines. This is not quite as interesting as with the ZIPScribble map, since there are no emergent patterns, but still.
<p align="center"><a href="http://eagereyes.org/media/attachments/ZIPTPCMap-color-names-borders.png" target="_blank"><img title="Travelling Presidential Candidate Map Color, Labels, Borders" src="http://eagereyes.org/media/attachments/ZIPTPCMap-color-names-borders-thumb.jpg" alt="Travelling Presidential Candidate Map Color, Labels, Borders" width="600" height="338" border="0" /></a></p>
<p align="center">(<a href="http://eagereyes.org/media/attachments/ZIPTPCMap-color-names-borders.pdf" target="_blank">Travelling Presidential Candidate Map Color with Names PDF</a>)</p>
This map is a lot more technical and lacks the slightly artsy appearance of the ZIPScribble Map. It does gain from added information, quite in contrast to the other one. The path through all ZIP codes is – not surprisingly – not all that interesting. If you are running for president, you might find it useful, though.

<hr />

After a comment below, I <a href="http://eagereyes.org/blog/what-travelling-presidential-candidates-save.html">calculated the actual savings</a> of the TPC Map as compared to the standard ZIPScribble Map.


_Posted by <a href="/about">Robert Kosara</a> on December 04, 2006_


<aside class="comments">

---
## Comments

fatbear says…
>	Another great one!
>	
>	This time there are a few more straight line artefacts:
>	
>	VT/NH border into MA then CT - Connecticut River
>	
>	Eastern NY - Hudson River
>	
>	Biggest one: line starting in eastern OH (on Lake Erie), going down through WV, VA, NC, SC and ending in SC
>	
>	Surprisingly you x-crossed the other IL/IN, KY, TN line - just shows that travel broadens the mind
>	
>	btw, one other thing I didn't see in the other map - the WV/OH combination also includes western MD - those hill people are weird

Anonymous says…
>	You found the shortest path...but how long (or short) is it?  Frequent flyer miles hang in the balance...

Robert Kosara says…
>	Thanks for asking, I <a href="/blog/what-travelling-presidential-candidates-save.html">did the math</a>.

</aside>
