---
title: "Tracking 19,000 Runners Over 1,000km Across Virtual Tennessee"
description: "How do you show large numbers of people without losing track of the outliers? How do you keep a chart useful when the maximum values are orders of magnitude higher than the common ones? In an animated visualization I've built of the progress of over 19,000 runners across a virtual 1000km (635mi) race over 123 days, I've tried to solve some of these issues."
date: 2020-08-18 22:25:22
tags: 
featuredImage: https://media.eagereyes.org/wp-content/uploads/2020/08/gvrat-histogram3.png
---

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2020/08/gvrat-histogram3.png" width="830" height="489" /></p>

# Tracking 19,000 Runners Over 1,000km Across Virtual Tennessee

How do you show large numbers of people without losing track of the outliers? How do you keep a chart useful when the maximum values are orders of magnitude higher than the common ones? In <a href="/gvrat-1000k-tracker" data-type="page" data-id="38568">an animated visualization I've built</a> of the progress of over 19,000 runners across a virtual 1000km (635mi) race over 123 days, I've tried to solve some of these issues.

The <a href="https://vacationwithoutacar.com">Great Virtual Race Across Tennessee (GVRAT)</a> is about 1022km or 635mi long, which makes it a 1000K. This is different from a 50K, 100K, or even a 100-mile race in that it's not run as one continuous race, but as daily checkins over four months from May 1st to August 31st. Over 19,000 people (including yours truly), as well as a number of dogs, are taking part.

Why 1000 km and why Tennessee? Well, the race is organized by Laz Lake, the guy behind <a href="https://www.outsideonline.com/1924491/60-hours-hell-story-barkley-marathons">the Barkley Marathons</a> (if you haven't heard of the Barkley and care at all about running, I highly recommend <a href="https://barkleymovie.com">the Barkley Movie</a>). His initial expectation was to get around 200 people to sign up, but he ended up with almost 20,000.

While the bulk of runners is running the race the way it's supposed to be (they're affectionately called RATs – Racing Across Tennessee), there's a surprising number of people doing the distance twice (Back Across Tennessee, BATs), three times (called CATs for some reason), or even more (GNATs). The top two runners are on track to finish eight crossings! That's over 5,000 miles in four months, or more than 40 miles per day on average.

## Inspiration

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2020/08/nytimes-marathon-2015.png" alt="" class="wp-image-39278" width="660" height="244" /></p>

My visualization is inspired by <a href="https://www.nytimes.com/interactive/2015/10/30/sports/new-york-marathon-in-six-charts.html">this piece in the NY Times about the New York Marathon</a> from 2015. I really liked the waves of runners and the little pointer pointing out the last runner trailing the field. I wanted to do something somewhat similar.

## The Visualization

Here's a more detailed description of what <a href="/gvrat-1000k-tracker" data-type="page" data-id="38568">you can see in the visualization</a> than in the little legends I've added there. The piece is very tall and just about fits onto my laptop's screen. It inadvertently works quite nicely on phone screens, which I had not actually designed it for initially. But it's a natural fit due its format and the interaction was easy enough to adapt.

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2020/08/gvrat-navigator.png" alt="" class="wp-image-39298" width="660" height="69" /></p>

At the top, a bar chart shows the number of miles people have logged each day. This is also a sort of navigator, the bar with the border around it indicates the day currently being shown in the rest of the chart. The colors, or levels of gray, indicate the days of the week. There is no legend for them, but I hope it's obvious that the pairs of darker days are the weekends. It's interesting to see, though not surprising, that people log more miles on weekends. This chart isn't meant to be used for precise navigation but just to give some context.

Despite the tiny size of this chart, it's quite easy to see the numbers tapering off towards the end. The very light gray bars at the end are just placeholders for the future to make the chart look less empty. They will be filled in over the coming two weeks. Yes, this is an unusual thing to do, but it seemed weird to rescale this chart, and without the placeholders it looked like I had messed up the axis. The subtle little bar ghosts look much nicer.

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2020/08/gvrat-histogram3.png" alt="" class="wp-image-39336" width="660" height="389" /></p>

The bulk of the chart is a histogram showing the number of runners by their progress along the race (binned into 5-mile bins). The horizontal axis goes from 0 to 635mi, and then continues past the finish line. In this early phase, there are already some finishers and some people who have chosen to continue past the finish.

The vertical line labeled <em>cutoff</em> shows where people need to be at this point in the race to finish by the end of August if they run the same distance every day. It's fun to see how that line seems to pushing the wave forward, with the bulk of the runners being pretty close to it (I'm in there, too!).

The different colors represent the number of days since people have logged a distance. The main reason for this is that I wanted to see people dropping out of the race and sort of settling as sediment on the bottom of the chart. The dark blue shows people who logged miles on the day being shown, with a lighter blue for the day before, etc., ending with gray for four days or more.

In addition to people dropping out, which is perfectly expected, it's interesting to see little bits of blue to the very left even this late in the race, of people checking in their runs even though they have no hope of finishing the race. This is in stark contrast to people who finished the distance weeks before the end of the race and pile up as a huge spike at the finish line.

I have to deal with extreme scales in both directions here. The horizontal axis would need to be insanely long to keep track of a relatively small number of runners who are much faster than the field. The vertical axis would easily hide those individuals because of the sheer number of runners, and even the field would hardly be visible if I actually scaled the chart vertically by the maximum pile-up of runners at the very beginning and around the finish. 

To deal with these issues, I had to get a little creative. One thing I did was to fold the horizontal axis to show people going back across Tennessee, then back again, and so on. I wanted to show just how far this was, so I had to fold not just once or twice, but eight times.

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2020/08/gvrat-folded-axes.png" alt="" class="wp-image-39303" width="660" height="369" /></p>

Even within this part, there are differences, since there are still hundreds of runners in places going back across Tennessee, but it gets sparser and sparser from there. So I decided to give the second and third time crossings a little more space than the later ones. Also note that the direction changes for every other crossing. This might seem odd, but it represents the actual direction you'd go if you actually did this in real life, and it works fairly well when it's animated IMHO.

I also wanted to show the individuals here, so whenever there are 12 or fewer runners in a bin, I draw them as a little stack of orange dots instead of as bars. This shows the individuals nicely, but it does create some strange effects in place where the number hovers just around the threshold. I haven't figured out how to solve this. The circles look completely different than the bars on purpose, however, to make sure they don't get confused.

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2020/08/gvrat-arrows.png" alt="" class="wp-image-39304" width="660" height="289" /></p>

While the orange dots show where there are very few runners, the bars grow way too tall to be shown in their entirety, especially in the shorter charts for the crossings past the initial one (but also in the main one). To deal with this, I adopted an idea I've seen in histograms in Lightroom, Photoshop, and similar programs. To keep the histograms useful, they do not scale by the maximum value, but cut the axis off at some point and display little indicators to show that the bars there would continue up. The little pointy triangles at the top of some of my bars serve the same purpose.

This is clearly not great if you want to read precise values, but I think it works here where the point is more to see extremes of the distribution and you can see things changing over time to get a sense of the values.

And there's also interaction! It's very simple but I think it's actually quite effective. Dragging/swiping anywhere on the visualization navigates between days, clicking or tapping anywhere starts or stops the animation. This works no matter what device is being used and is all I need for this piece. I don't think there's a lot of value in tooltips or similar here.

After all these words, you really should <a href="/gvrat-1000k-tracker" data-type="page" data-id="38568">check it out yourself</a>, though!

## The Data

Runners check in their miles every day they run, which gives us roughly 19,000 checkins per day over the 123 days of the race. <a href="https://vacationwithoutacar.com/great-virtual-run-across-tennessee/archive/">The data is available as CSVs</a>, though the files have their little idiosyncrasies. There's also <a href="https://vacationwithoutacar.com/great-virtual-run-across-tennessee/gen2-all-in-one/">a list of all the runners with demographics</a>, which can also be exported (though again, be prepared to clean up the data).

The data updates automatically every day just before 6am PDT/9am EDT. The official data is usually available about 15 minutes before that, so I grab it five minutes before the hour and then run my scripts. This will keep updating until the end of the race on August 31, plus a few days past that (since they give people a few days to log their miles). 

## Conclusion… for Now

This post is already too long, so I will close here. I will look at the data some more when the race is over. There are some interesting things to be found in there that are beyond the scope of this post.

In the meantime, let me know what you think of the visualization! I'm really curious to hear what people make of my choices, whether they find the result interesting, etc.


_Posted by <a href="/about">Robert Kosara</a> on August 18, 2020_


<aside class="comments">

---
## Comments

Klaas van der Veen says…
>	Great stuff! I hope you are curious and interested in any critique...
>	I think 'miles checked in per day' is a thing that does not deserve to be at the top. It caps the nice big wave with a greyish bar-ish thing. I used it as a day counter. Why not use a nice big day counter, and put the 'miles checked in per day' at the bottom? (I know: placing it below the n-th day is to far down for your taste). Might a day counter with 'miles checked in' as a single small number (no graph) work better? 
>	Also, the miles checked in by day-graph is the one thing that shows past and future, whereas the big wave is an 'at the moment' thing, which makes it very exciting.
>	Cheers!

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	Good points, and yes, I'm definitely looking for thoughts and suggestions! I agree that the very top is not ideal, but I can't find a better spot. It's meant to be a bit of a progress indicator, so putting it at the very bottom means it's almost invisible. And putting it below the big chart breaks the continuity with the other charts.
>	The big number is a good idea, I'm going to add that. I want to clean up the design a bit anyway, since I ran out of patience shifting stuff around pixel by pixel.

Klaas van der Veen says…
>	"I ran out of patience shifting stuff around", only human ;-)
>	
>	If you define the top chart as a progress indicator, then yes, I see the need. But does 'progress indicator' mean 'showing miles, per day, and in front and behind the current position'?
>	
>	I feel you use this kind of graph+blog as a way to interview the first bunch of users. Very useful!
>	
>	best,
>	Klaas

</aside>

