---
title: "Sonification: The Power, The Problems"
description: "Sonification turns data into sound, just like visualization turns data into pictures. Except it's a lot more complicated and limited. Something about sonification has always bugged me, and I think I've finally figured out what: the crowding on the time axis. I've also recently discovered some of the powers of sonification, though."
date: 2017-03-02 19:46:06
tags: techniques
featuredImage: https://media.eagereyes.org/wp-content/uploads/2017/03/Pulse-sound-tribute-780x427-1.png
---

# Sonification: The Power, The Problems

Sonification turns data into sound, just like visualization turns data into pictures. Except it's a lot more complicated and limited. Something about sonification has always bugged me, and I think I've finally figured out what: the crowding on the time axis. I've also recently discovered some of the powers of sonification, though.

The are obviously many differences between images and sound. Images can be static, sound always requires time. Our hearing is very linear, our vision is not. We can zoom into an image, but we can't do that with sound. There are many perceptual effects we understand in vision that don't exist in our hearing, and vice versa.

## The Power

There are a handful of good examples of sonification. I've seen a few that show how close the times in different kinds of races were, like <a href="http://www.nytimes.com/interactive/2012/08/05/sports/olympics/the-100-meter-dash-one-race-every-medalist-ever.html">this one on Usain Bolt at the 2012 Olympics</a>. Representing time as time works well here, which you can't do nearly as well visually – and certainly not as a static graphic.

A really powerful example is this <a href="https://www.revealnews.org/blog/a-sonic-memorial-to-the-victims-at-orlandos-pulse-nightclub/">sonic memorial to the victims of the Pulse nightclub shooting in Orlando in June 2016</a>. It plays a note for every one of the 49 victims, for every year of their lives. It starts with the birth of the oldest victim, with the tones building up over time until they suddenly end when they are all murdered.

<iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/269483309&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false" width="100%" height="166" frameborder="no" scrolling="no"></iframe>

This is powerful stuff, no question. It's more of a performance of the data, though, not just a representation. Its power is that it touches and moves, not that it gives a clear idea of how many people were killed that night, how old they were, etc.

Similarly, there is this video showing all the nuclear explosions since <a href="https://en.wikipedia.org/wiki/Trinity_(nuclear_test)">the <em>Trinity</em> test</a>. It takes some time to get going, since there weren't that many early on. But it's worth watching the whole thing, it gets really scary in the 1950s and 1960s.

<p align="center"><iframe src="https://www.youtube.com/embed/LLCF7vPanrY?rel=0" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>

## The Problem

But something about that nuclear explosions video has always bugged me, and I only just realized what a few days ago: the time scale is wrong. Of course, the time scale needs to be compressed to fit over fifty years into a few minutes. The video maps one month to one second. That's just a scale, that's fine.

The problem is with the blips for the explosions, however: they are way too long! Each takes a fraction of a second, but in represented time, it would take days or a week! Or take this great little piece on earthquakes in Oklahoma from <a href="https://www.revealnews.org">the <em>Reveal</em> podcast</a>.

<p align="center"><iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/214019971&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false" width="100%" height="166" frameborder="no" scrolling="no"></iframe></p>

It's impressive, but it's also bothering me that each earthquake is represented by a note that takes over a second to play. Given that they cover several years in a minute, each earthquake takes up days of represented time.

The problem with this is that the crowding of the sounds, while impressive, is an artifact of the two independent time scales that are chosen: one for the time between events and one for the duration of each event. But that is not an accurate representation.

This is similar to drawing a map and representing, say, murders with large splotches that cover many square miles of terrain. That might look like there is a lot of crime, but it's also dishonest. Maps like that are made all the time, of course, but there is at least often a way to zoom in that changes the density.

And it's not just maps: any representation of time will also have this problem. But it's less of an issue when it comes to visuals, because dots can be tiny and still be visible. With sounds, you need a certain minimal amount of time to be able to hear and distinguish them. That means they naturally are longer in relation to what they represent.

There are some good uses of sonification, and it can clearly be powerful to give a sense of amount that's hard to achieve in visualization. But it can also be problematic when the enthusiasm for a great soundscape gets in the way of precise (or at least reasonably accurate) representation of the data.

<hr />

<em>Postscript:</em> Since I mentioned the Pulse nightclub massacre, I can't not talk about the video of Sia's <em>The Greatest</em>. It has nothing to do with data, but it is about that shooting. Maddie Ziegler's insanely expressive performance slays me every time I watch this.

<p align="center"><iframe src="https://www.youtube.com/embed/GKSRyLdjsPA?rel=0" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>

[[PostedBy]]

<aside class="comments">

---
## Comments

Jo Wood says…
>	Thanks Robert for bringing this topic up. I think of all the aspects of "visualization" that we have yet to fully realise, this is the most under-researched, at least by academic infovis researchers.
>	
>	I would take issue with several of those aspects you list as limitations of sonification. You say we cannot 'zoom in' with sound. I think there are strong aural analogies with zooming through the careful use of frequency filtering and volume. This is done masterfully by Mike Figgis in his 2000 film Timecode  - https://en.wikipedia.org/wiki/Timecode_(film) - that shows 4 simultaneous perspectives in a split screen but uses audio zooming to move our attention between each of those 4 parallel stories in a serial fashion. And as an aside, this is a film well worth experiencing at the cinema as it makes use of surround sound to control the audio spatially - another property under-researched from a visualization perspective.
>	
>	The relationship between sound and real-time linear narrative is an interesting one. Yes, certainly an autio stream is delivered over time, but then so is a static visualization (we need a certain sustained period of time to explore a static image before it becomes meaningful to us). Like animation, sound may well most easily support linear temporal narrative, but it need not be limited to that. Just ask any composer whether their compositions are necessarily linear. And in a visualization context interaction gives us the possibility of 'rewind', 'reverse', 'filter', 'selection', 'highlight', 'zoom' in an audio context. 
>	
>	In reading your article I found myself listening to Isao Hashimoto's excellent 1945-1998 piece while continuing to read and scrolling the visual off the page. It highlights something audio offers - the ability to process audio and visual signals in parallel and somewhat independently. Again something that is woefully under-researched in the context of our discipline (but not others).
>	
>	But perhaps the point in your article I would disagree with most is "The Problem" that audio typically does not scale well in the same way as the visual. Yes, those explosion sounds were months long if scaled to the animation timeline, but then look at the size of their visual symbols on the world map. Multiple scalings of symbols is something we do all the time when interpreting visualizations. Even the dot map technique you mention commonly enlarges dots in comparison to their 'true' scale on a typical map (and let's not forget that even giving a point value some areal expression as a pixel on the screen is still a geometric abstraction). I don't see this as a problem, and certainly not one that is unique to sound.
>	
>	Personally I am more optimistic that the richness and expressiveness of sonification has untapped potential for infovis. Perhaps we should be collaborating more with the artists, film makers, audio engineers and musicians who spend a lifetime exploring what sound has to offer us.
>	
>	Jo

<a href="http://kylehailey.com" rel="nofollow noopener" target="_blank">Kyle Hailey</a> says…
>	For streaming data like performance monitoring signification could add extra information, like an extra dimension. Here's an article from a few years ago 
>	http://philadelphia.cbslocal.com/2013/12/25/493270/
>	the video doesn't seem available anymore :(
>	Was thinking over the intervening 4 years there would be more done with data sonification.
>	here some interesting discussion https://cds.cern.ch/record/2142696
>	but for large seems of data, sound could help the consumer more rapidly distinguish different scenarios.

Clément V. says…
>	I thank you Jo for your enriching comment. Your last point on the scale of symbols vs the scale of the time scale is really helpful. I think it highlights the fact that data points have to be perceptible, at the cost of consistency.
>	Maybe one way to reconcile Robert with this inconsistency is to consider that sonification brings more emotion than a viz, and more than being perceptible, data points must have emotional resonance. Finally the weeks or month each note/sound represents (in a share scale) can be seen as the impact than and not the event.

<a href="http://extraordinarysquares.blogspot.com" rel="nofollow noopener" target="_blank">JohnG</a> says…
>	Here's the sonification of stormtroopers in the galaxy, from our friends at the BBC: http://www.bbc.co.uk/programmes/p039nljx
>	
>	Enjoy!

<a href="http://gravatar.com/sahmeepee" rel="nofollow noopener" target="_blank">sahmeepee</a> says…
>	This is a good mix of audio and visual in the depiction of activity in a rat's hippocampus as it completes a maze exercise:
>	
>	https://youtu.be/lfNVv0A8QvI
>	
>	The sonic dimension gives you a sense of the pace of activity much more clearly than the image does as it's not easy to represent overlapping dots on a 2d plane. With different sounds for the different regions it's possible to bring out variation in type as well as rate. As you point out in your article, one of the reasons this works well is that it's displaying realtime information rather than attempting to compress time.
>	
>	I can imagine a number of situations where it would be useful to represent data which is not ordinarily detectable as an overlay on top of video or, as in this case, on a video-graphic combination. In some ways we are already used to this, e.g. the overlayed heart-beat sound in a tense horror-film scene, but we just don't consider it sonification because it is art rather than science.
>	
>	Thanks for a thought-provoking post...
>	
>	S

<a href="http://www.dumkydewilde.nl" rel="nofollow noopener" target="_blank">Dumky</a> says…
>	Fascinating read and some nice examples! I agree that the audio timeline can get to crowded quickly, but I was wondering what your perspective is on practical tools that use sonification. The two that come to my mind are heart rate monitors (in hospitals) and the blips we use with parking sensors in cars. I think their power comes from the fact that there's a lack of visibility that is compensated by audio (we can't look at all the heart rate monitor all the time, and we can't see the other cars clearly when parking). Of course the amount of data that is sonified is minimal in these cases, but I think it shows that audio representations of information in some cases do a better job than the visual representation. I'd say that is in part because of the sense of urgency they create (it's really hard to ignore a continuing high pitched sound compared to an image).

</aside>

