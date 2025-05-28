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
