---
title: "EagerFeet.org: Free Your Nike+ GPS Data"
description: "While Nike+ is a neat app and website that gets a lot of people running, it becomes limiting quite quickly: the site is slow and tedious to use, and the cuteness factor wears off fairly quickly to reveal very limited usefulness. There are lots of better services, but many people are reluctant to switch unless they can take their data with them. EagerFeet was designed to let you do just that: you can export all your run GPS data as GPX files, which you can then import into other programs and websites. And even though it's still April, this is a real site and not a joke."
date: 2011-04-18T04:55:15.000Z
tags: 
outline: false
---

# EagerFeet.org: Free Your Nike+ GPS Data

<p class="img"><a href="http://eagereyes.org/blog/2011/eagerfeet-free-your-nike-gps-data"><img src="http://eagereyes.org/media/2011/eagerfeet-header.png" alt="" width="600" height="93" /></a></p>
While Nike+ is a neat app and website that gets a lot of people running, it becomes limiting quite quickly: the site is slow and tedious to use, and the cuteness factor wears off fairly quickly to reveal very limited usefulness. There are lots of better services, but many people are reluctant to switch unless they can take their data with them. <a href="http://eagerfeet.org" target="_blank">EagerFeet</a> was designed to let you do just that: you can export all your run GPS data as GPX files, which you can then import into other programs and websites. And even though it's still April, this is a real site and not a joke.<!--more-->
<h2 id="running_and_data">Running and Data</h2>
Part of my motivation to start running last September was the ability to collect data. The other parts were getting into shape and losing weight, but what pushed me over the edge (and made me leave the gym behind) was the ability to really see what I was doing. Being able to track your runs, compare how well you did on the same route over time, how much you're improving your speed and distance, etc. are great motivators; not to mention the ability to compare with others.

What Nike+ does right is make it easy to get started and make it fun to look at your data. Unfortunately, their clunky Flash site gets old really soon. It takes forever to switch between runs, and the whole thing just tends to hang after a few minutes of use and stop responding. Other apps and services (I'm a happy <a href="http://runkeeper.com/" target="_blank">RunKeeper</a> user) offer much better websites and apps.

A lot of people are posting on the RunKeeper forum that they would switch if they could take their data with them. So after some digging, I wrote <a href="https://github.com/eagereyes/nike2gpx" target="_blank">a tool to extract individual runs' GPS data</a> a while ago. It wasn't exactly usable for normal people, but it was a start, and it showed me how useful it was to be able to take my data with me. Having my entire run history in one place is great, and it shows the power of locking up your users' data: they're going to stick with your service, despite its problems.

EagerFeet was built to make it easy for anybody to take their data with them. Just log into Nike+, grab the URL of a run, and let EagerFeet do the rest. The site extracts the GPS data and shows you your run information (distance, number of calories, and information you entered like weather, how you felt, comments, etc.). GPS data can be downloaded in <a href="http://en.wikipedia.org/wiki/GPS_eXchange_Format" target="_blank">GPS eXchange Format (GPX)</a>, which any program or website should be able to import.

For privacy reasons, the site does not keep the data around. That means the download links are only valid for 20 minutes, and the user and run IDs are obfuscated. The server does not keep a log of user IDs, and only records the list of runs with a very low accuracy (about 10km or 6mi) in order to display them on a map. It also does not require a password, only a URL containing your numeric Nike+ ID.
<h2 id="how_it_works">How It Works</h2>
The key to the site is Nike's own API, which is not (technically) public. The fine folks at <a href="http://slowgeek.com/" target="_blank">SlowGeek</a> have figured out most of it, though, and I was able to fill in some gaps to be able to request the list of runs and then get all the individual runs' data.

This is also my first serious use of <a href="http://nodejs.org/" target="_blank">node.js</a>, a version of Google's V8 JavaScript engine that is used for server applications. Not only is node is written in JavaScript, and thus seamlessly integrates with the browser side, it also uses a very clever evented I/O model that makes it extremely fast and efficient. Similar to protovis, node makes extensive use of JavaScript language features like closures to structure the code. It takes a bit of getting used to, but it's a fantastic way to write code once you get it. Given the work that is being put into compiling JavaScript into native code lately, it also provides great performance.

If you want to take a look at how it all works, <a href="https://github.com/eagereyes/eagerfeet" target="_blank">the source code is available on github</a>.
<h2 id="try_it_out_let_me_know">Try It Out, Let Me Know!</h2>
If you're a Nike+ user, please <a href="http://eagerfeet.org/" target="_blank">give it a try</a> and let me know if there are any issues. I want to make this useful, so if it doesn't work, or you think it could be done better, tell me!


---
## Comments

<a href="http://socsci.tau.ac.il/poli-LCE/" rel="nofollow noopener" target="_blank">Josh Verienes -  Political Science MA</a> says…
>	The Nike+ technology is just amazing. That actually convinces you to start running and improve your performance. Its price is reasonably too and I like it.

Pete Davis says…
>	Worked great the first time, and I imported the gpx file straight into Dailymile.  The Nike + iPhone app gives me such great map data that I can't recreate on my own, because I run forest trails. Great app, bad website.  Nike is pretty strict with their data, so don't ever count on them making this easier for users :-)

<a href="http://smashrun.com/chris.lukic" rel="nofollow noopener" target="_blank">Chris Lukic</a> says…
>	This is really great stuff! 
>	
>	I'm impressed with how much you can accomplish with relatively little code in node.js. And there's so much that's appealing about the idea of using the same language on both ends of the wire.
>	
>	You're going to save a lot of people a lot of headaches with this.
>	
>	
>	

Christy says…
>	Thank you SO much for this! My friend uses a Garmin and I use the Nike gps watch but we both wanted to use Map My Run together. Their gps watch is great, but I agree with you that the Nike site's flash is fun at first but clunky and annoying after a while. Your site worked perfectly and it was EASY to save my data as a gpx file and upload it to Map My Run. You rock.

Peter says…
>	Hi there.  Do you think you will be able to help me download historic run data from the current version of the Nike + website together with the GPS data?  I have given up on the Nike GPS product (too unreliable) and have opted for a Garmin.  Would love to be able to migrate the data to the Garmin website. Good work!  P

<a href="http://sufferhub.com" rel="nofollow noopener" target="_blank">Brian Lockhart</a> says…
>	That's one of the most frustrating things about the current crop of fitness data sites - your data is locked up in private silos and it's challenging at best to get "your" data out if you want to play with it or upload it somewhere else.  GPX exporting is the current linqua franca for workout data, but hopefully more and more of these sites will start embracing open API formats that allow easier interactions with data.
>	
>	One of the best truly "open" implementations I've found so far is http://openfitapi.com which offers fitness site operators a standard .JSON method for handling workout data.  I've used it for my own (fledgeling) workout site,  <a href="http://sufferhub.com" rel="nofollow">SufferHub</a> and am looking forward to developers and endusers taking advantage of this open data method.  Hopefully more and more fitness data sites adopt this way of thinking?

Dean Oswald says…
>	I tried your export but it tells me that nothing can happen until you make a few changes to the code. Accurate?

ISS says…
>	I've set dependencies and their versions based on package.json; however, I am getting this error.
>	Any thought?
>	
>	Error: Most middleware (like session) is no longer bundled with Express and must be installed separately. Please see https://github.com/senchalabs/connect#middleware.
>	    at Function.Object.defineProperty.get (/usr/local/lib/node_modules/express/lib/express.js:89:13)
>	    at module.exports (/usr/local/lib/node_modules/connect-memcached/lib/connect-memcached.js:22:21)
>	    at Object. (/home/insop/workspace/eagerfeet/app.js:13:50)
>	    at Module._compile (module.js:456:26)
>	    at Object.Module._extensions..js (module.js:474:10)
>	    at Module.load (module.js:356:32)
>	    at Function.Module._load (module.js:312:12)
>	    at Function.Module.runMain (module.js:497:10)
>	    at startup (node.js:119:16)
>	    at node.js:906:3

Eve says…
>	Probably, you've already heard that Nike Company stopped the service of their webpage. Therefore, I cannot transfer my tracks from the watch to Nike+ webpage. Do you have an idea how to get the data exported stored on the internal memory of the watch? Thanks a lot for your support. 
>	
>	Best, 
>	Eve 
>	
>	Btw: I'm using Nike+ GPS Sportswatch (using TomTom from 2013)


