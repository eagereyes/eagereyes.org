<p align="center"><img src="https://media.eagereyes.org/media/2011/eagerfeet-header.png" alt="" width="600" height="93" /></p>

# EagerFeet.org: Free Your Nike+ GPS Data

While Nike+ is a neat app and website that gets a lot of people running, it becomes limiting quite quickly: the site is slow and tedious to use, and the cuteness factor wears off fairly quickly to reveal very limited usefulness. There are lots of better services, but many people are reluctant to switch unless they can take their data with them. EagerFeet was designed to let you do just that: you can export all your run GPS data as GPX files, which you can then import into other programs and websites. And even though it's still April, this is a real site and not a joke.

## Running and Data

Part of my motivation to start running last September was the ability to collect data. The other parts were getting into shape and losing weight, but what pushed me over the edge (and made me leave the gym behind) was the ability to really see what I was doing. Being able to track your runs, compare how well you did on the same route over time, how much you're improving your speed and distance, etc. are great motivators; not to mention the ability to compare with others.

What Nike+ does right is make it easy to get started and make it fun to look at your data. Unfortunately, their clunky Flash site gets old really soon. It takes forever to switch between runs, and the whole thing just tends to hang after a few minutes of use and stop responding. Other apps and services (I'm a happy <a href="http://runkeeper.com/" target="_blank">RunKeeper</a> user) offer much better websites and apps.

A lot of people are posting on the RunKeeper forum that they would switch if they could take their data with them. So after some digging, I wrote <a href="https://github.com/eagereyes/nike2gpx" target="_blank">a tool to extract individual runs' GPS data</a> a while ago. It wasn't exactly usable for normal people, but it was a start, and it showed me how useful it was to be able to take my data with me. Having my entire run history in one place is great, and it shows the power of locking up your users' data: they're going to stick with your service, despite its problems.

EagerFeet was built to make it easy for anybody to take their data with them. Just log into Nike+, grab the URL of a run, and let EagerFeet do the rest. The site extracts the GPS data and shows you your run information (distance, number of calories, and information you entered like weather, how you felt, comments, etc.). GPS data can be downloaded in <a href="http://en.wikipedia.org/wiki/GPS_eXchange_Format" target="_blank">GPS eXchange Format (GPX)</a>, which any program or website should be able to import.

For privacy reasons, the site does not keep the data around. That means the download links are only valid for 20 minutes, and the user and run IDs are obfuscated. The server does not keep a log of user IDs, and only records the list of runs with a very low accuracy (about 10km or 6mi) in order to display them on a map. It also does not require a password, only a URL containing your numeric Nike+ ID.

## How It Works

The key to the site is Nike's own API, which is not (technically) public. The fine folks at <a href="http://slowgeek.com/" target="_blank">SlowGeek</a> have figured out most of it, though, and I was able to fill in some gaps to be able to request the list of runs and then get all the individual runs' data.

This is also my first serious use of <a href="http://nodejs.org/" target="_blank">node.js</a>, a version of Google's V8 JavaScript engine that is used for server applications. Not only is node is written in JavaScript, and thus seamlessly integrates with the browser side, it also uses a very clever evented I/O model that makes it extremely fast and efficient. Similar to protovis, node makes extensive use of JavaScript language features like closures to structure the code. It takes a bit of getting used to, but it's a fantastic way to write code once you get it. Given the work that is being put into compiling JavaScript into native code lately, it also provides great performance.

If you want to take a look at how it all works, <a href="https://github.com/eagereyes/eagerfeet" target="_blank">the source code is available on github</a>.

## Try It Out, Let Me Know!

If you're a Nike+ user, please give it a try and let me know if there are any issues. I want to make this useful, so if it doesn't work, or you think it could be done better, tell me!
