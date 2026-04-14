Rainbow colormaps are among the most derided ideas in data visualization, second only to pie charts. And yet, people use them. Why? [A recent paper](https://www.computer.org/csdl/magazine/cg/2023/03/10128890/1NdJMHqISnS?fbclid=IwAR2Aq4iRqdmeIUCw5_Oy4vjJDGVek23wNWEGlEJMML82BWyYGplFXqK8uqU) looks at some of the reasons why they are so popular and points to research showing that they might not be so bad if used for the right tasks. There's even opportunity for interesting research in rainbow colormaps!

Finger-wagging about rainbow colormaps is a pretty common pastime in visualization, I've done it too! And it's not like there aren't good reasons. Look at this map of maximum temperatures in the US, [published by NOAA](https://digital.mdl.nws.noaa.gov), for example:

<figure><img src="https://media.eagereyes.org/wp-content/uploads/2023/07/heat-map.jpeg" alt="A map of maximum temperatures in the US, shown using a scale from 0 to 130 degrees and using a rainbow colormap"/></figure>

The rainbow colormap used here has all the usual problems: it's not uniform in its luminance (brightness), different colors cover different ranges of the colormap (though it's usually green that is the worst, here it's purple and red), and of course the ordering is somewhat arbitrary.

And yet, these kinds of maps are seen by millions of people every day! And they're created by smart people every day. If they're so bad, how is that possible?

The authors of this paper point to research showing that rainbows turn out to be the most accurate when the task is reading a value off a map using a key (a common task when you're looking at a map of temperatures!). There's also evidence that rainbows draw attention to global structure and lead people to reason about relationships between data distributions.

This is not to say that rainbows don't have problems, they certainly do. Not all of them are all that critical for real uses, though. One commonly cited issue is that because luminance changes back and forth across the scale, it is impossible to read shape from a visualization that uses a rainbow colormap. The authors show that in this nice illustration:

<figure><img src="https://media.eagereyes.org/wp-content/uploads/2023/07/rainbow-comparison.jpeg" alt="Three different colormaps applied to an apple, a portrait, and a picture of the earth"/></figure>

But that is often not the actual task! Who cares if you can't recognize the precise shape of that apple when you're looking at a 2D map? While it is an issue, it's easy to avoid by knowing where shape perception is likely going to be relevant. This is basically a strawman that's largely there to pile on the criticism, not a real practical concern.

I'm not going to summarize the entire paper here, it's an easy read and not very long, and [it's available in its entirety](https://www.computer.org/csdl/magazine/cg/2023/03/10128890/1NdJMHqISnS?fbclid=IwAR2Aq4iRqdmeIUCw5_Oy4vjJDGVek23wNWEGlEJMML82BWyYGplFXqK8uqU) on the IEEE Computer Society website.

The authors of this paper represent both the old and new guard in perceptual and color research. Maureen Stone (who, I should mention, was my manager at Tableau Research for several years) and Colin Ware are part of the former, Danielle Albers Szafir the latter.

They end the paper with a call to improve rainbow colormaps instead of dismissing them as always wrong:

> *We understand well enough why rainbows can be bad; let us focus instead on finding out when and why they are good.*

---

Ware, Stone, Albers Szafir, [Rainbow Colormaps Are Not All Bad](https://www.computer.org/csdl/magazine/cg/2023/03/10128890/1NdJMHqISnS?fbclid=IwAR2Aq4iRqdmeIUCw5_Oy4vjJDGVek23wNWEGlEJMML82BWyYGplFXqK8uqU), *Computer Graphics &amp; Applications*, 2023.
