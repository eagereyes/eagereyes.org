---
title: "Multi-touch Brushing for Parallel Coordinates"
description: "Interaction in visualization is incredibly important, but often more tedious than it needs to be. I have developed a new way of brushing in parallel coordinates that uses the multi-touch trackpads on Apple's MacBook and MacBook Pro laptops for faster interaction. The video below demonstrates the technique, and the source code is available."
date: 2010-07-20 20:49:55
tags: 
featuredImage: https://media.eagereyes.org/media/2010/multitouch-brushing.png
outline: false
---

<p align="center"><img src="https://media.eagereyes.org/media/2010/multitouch-brushing.png" width="560" height="232"></p>

# Multi-touch Brushing for Parallel Coordinates

Interaction in visualization is incredibly important, but often more tedious than it needs to be. I have developed a new way of brushing in parallel coordinates that uses the multi-touch trackpads on Apple's MacBook and MacBook Pro laptops for faster interaction. The video below demonstrates the technique, and the source code is available.

This is a little experiment that has gotten out of hand a bit. I recently submitted a paper to a conference that doesn't let me attach additional materials, so I figured I'd put the video up on vimeo and link to it in the paper. I also posted a link on my <a href="http://blog.kosara.net/">secondary blog</a>, which got posted on Twitter, and which ended up being blogged by some <a href="http://www.theusrus.de/blog/why-do-we-do-it-–-cause-we-can/">other</a> <a href="http://interactivemultimediatechnology.blogspot.com/2010/07/multi-touch-parallel-coordinates-for.html">people</a>.

If you've used a MacBook or MacBook Pro, you know how simple and intuitive the two-finger scrolling is. Similarly, there are some interactions on the iPhone that are so obvious (like the pinch for zooming) that it's tough to remember how we did things before touch screens. I wanted to create a similar experience for brushing in parallel coordinates.

The idea is to map the axes to locations on the trackpad, and use several fingers to indicate different kinds of brushing. A single finger selects an axis, two fingers let you brush on a single axis. With four fingers, you can brush on two axes at the same time, either on adjacent ones or ones that have other axes in between them. There is also a somewhat unusual brushing method called _angular brushing_, which is very tedious to use with a mouse. Using three fingers, it's very quick and intuitive, and great for finding outliers in the data. You can also flip and rearrange axes.

There are a few details that make this a bit more complicated, because it's hard to maintain the horizontal position during interaction. So there is a certain "stickiness" to the first axis, which keeps it selected even when the fingers move somewhere else. The right mix of stability and flexibility is not easy to find, but I think I'm getting close.

The trackpad is not just a good fit because it's a lot more common than large touch screens (also on some non-Apple laptops), but because it solves an interesting problem you have when interacting with stuff on a touch screen: your fingers get in the way. That isn't always a problem, but in the case of brushing, it is. You don't want to have to change the brush, lift your hands, look at it, put down the hands, adjust, lift again, etc. With the interaction happening on a different surface (and in a convenient location), you can focus on the program's response to what your hands are doing.

The video below demonstrates the technique. It's still quite a different thing to actually try it out yourself, though. It allows for very fast exploration of data, unlike any interaction technique I'm aware of. Using your fingers is not very precise, but that's not the goal here, anyway: it's about getting a feeling for a new dataset.

<iframe src="https://player.vimeo.com/video/13437693?h=6f9b63104a" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
<p><a href="https://vimeo.com/13437693">Indirect Multi-Touch Interaction for Brushing in Parallel Coordinates</a> from <a href="https://vimeo.com/eagereyes">Robert Kosara</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

You can watch the <a href="http://vimeo.com/13437693">video in HD</a> on the vimeo site. The inset in the lower right is meant as a guide to show what the fingers are doing, not as a part of the actual user interface. People have suggested showing the location of the fingers as an overlay, but when you watch the video you will see why this would be a bad idea: the fingers don't have to line up with the axes, plus the floating dots would be distracting.

I have also posted the <a href="http://github.com/eagereyes/ParVisMT">source code</a> and there's an executable under the downloads tab if you want to play with it. Be advised, though, that this is a pure research prototype that demonstrates the technique but doesn't do anything useful. The data is hardcoded and the program only lets you brush and rearrange axes, nothing else. The program requires Mac OS X 10.6 "Snow Leopard" and a recent MacBook or MacBook Pro.


_Posted by <a href="/about">Robert Kosara</a> on July 20, 2010_


<aside class="comments">

---
## Comments

<a href="http://kcptech.com/datagames" rel="nofollow noopener" target="_blank">Vishakha Parvate</a> says…
>	Is there any chance that I can lay my hands on the related paper? I am working on a team that is creating the next version of data exploration tool for high schools students called Fathom. As we gear to create this next version, I am scouting for any and all research in the field of data visualization and am really interested in what you are doing.
>	
>	Thanks in advance,
>	
>	Vishakha Parvate

<a href="http://had.co.nz" rel="nofollow noopener" target="_blank">Hadley Wickham</a> says…
>	Did you consider drawing the finger placement under the data and axes? It seems like it would help with calibrating your finger position on the trackpad with the interaction position on the plot.

Li Tan says…
>	I am very interested in such multi-touch interaction for parallel coordinates. Simultaneously, I am curious about that why you choose parallel coordinates. Is there some general rationale to design the multi-touch interaction for visualization forms? Look forward to have chance to read above mention paper.
>	
>	Greets
>	Li

Robert Kosara says…
>	That might work, but I'm not sure if it really would help. The placement is actually quite easy to figure out by just moving your fingers around on the trackpad. I think any visual aid is going to end up being more confusing and distracting than helpful. But I haven't done a user study, I'll definitely need to try out a few variations.

Robert Kosara says…
>	The main reason is that I find most existing parallel coordinates tools cumbersome and slow to use. I also had the idea first when thinking about parcoords. Plus, they are a very well-studied and common technique in visualization, so they kind of present themselves as a testbed. But I definitely want to extend this idea to other kinds of visualization and other interactions as well.

</aside>

