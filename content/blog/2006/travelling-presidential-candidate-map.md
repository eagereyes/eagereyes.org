<figure><img src="https://media.eagereyes.org/media/attachments/ZIPTPCMap-color-names-borders.png" alt="Travelling Presidential Candidate Map" width="600" height="338"/></figure>

# The Travelling Presidential Candidate Map

While working on the [ZIPScribble map](/zipscribble-maps/united-states), I started to wonder how to untangle the beautifully scribbly lines, and finding the shortest path through all ZIP codes. In computer science, this is called the [Travelling Salesman Problem](http://en.wikipedia.org/wiki/Travelling_salesman_problem) (TSP), and so I decided to make this the *Travelling Presidential Candidate Map*.

The TSP is a very hard problem to solve, and would have taken forever for the over 37000 points on the map, even when using a very efficient algorithm. So I had the idea of using a [Hilbert curve](http://en.wikipedia.org/wiki/Hilbert_curve) to get an approximation. A Hilbert curve is a recursive space-filling curve that provides a linear path through all locations in a square. Here is one level of it, in the next level each line segment is replaced by a more coplex curve, etc.

<figure><img src="https://media.eagereyes.org/media/attachments/HilbertCurve.png" alt="Hiblert Curve" width="311" height="312"/></figure>

I was [not the first one](http://www.nirarebakun.com/graph/ehilbtsp.html) to have the idea of using a Hilbert curve for this task, and the existing work shows that this solution is typically only 75% optimal. But that is good enough for my purposes, and it proved quick enough to implement and run a rather naive implementation of (about 10 minutes on a 1.67GHz Apple PowerBook).

<figure><img src="https://media.eagereyes.org/media/attachments/ZIPTPCMap.png" alt="Travelling Presidential Candidate Map" width="600" height="338"/></figure>
([Travelling Presidential Candidate Map PDF](https://media.eagereyes.org/media/attachments/ZIPTPCMap.pdf))

The Travelling Presidential Candidate Map (TPC) does not look nearly as interesting as the ZIPScribble. There are hardly any crossing lines, which makes the image appear a lot lighter and less interesting. It also loses quite a bit of the information in the original map, which nicely showed the borders between clusters of ZIP codes, which also defined state borders.

<figure><img src="https://media.eagereyes.org/media/attachments/ZIPTPCMap-color.png" alt="Travelling Presidential Candidate Map Color" width="600" height="338"/></figure>
([Travelling Presidential Candidate Map Color PDF](https://media.eagereyes.org/media/attachments/ZIPTPCMap-color.pdf))

It does gain from adding more information though, like coloring the states. Its slightly flimsy appearance does not change, however. The thin lines also make it harder to see the colors, especially in the small "thumbnails" on this page.

<figure><img src="https://media.eagereyes.org/media/attachments/ZIPTPCMap-color-names.png" alt="Travelling Presidential Candidate Map Color with Names" width="600" height="338"/></figure>
([Travelling Presidential Candidate Map Color with Names PDF](https://media.eagereyes.org/media/attachments/ZIPTPCMap-color-names.pdf))

Finally, the map with the added borders to better see where the path crosses state lines. This is not quite as interesting as with the ZIPScribble map, since there are no emergent patterns, but still.

<figure><img src="https://media.eagereyes.org/media/attachments/ZIPTPCMap-color-names-borders.png" alt="Travelling Presidential Candidate Map Color, Labels, Borders" width="600" height="338"/></figure>
([Travelling Presidential Candidate Map Color with Names PDF](https://media.eagereyes.org/media/attachments/ZIPTPCMap-color-names-borders.pdf))

This map is a lot more technical and lacks the slightly artsy appearance of the ZIPScribble Map. It does gain from added information, quite in contrast to the other one. The path through all ZIP codes is – not surprisingly – not all that interesting. If you are running for president, you might find it useful, though.

---

After a comment below, I [calculated the actual savings](/blog/2007/what-travelling-presidential-candidates-save) of the TPC Map as compared to the standard ZIPScribble Map.
