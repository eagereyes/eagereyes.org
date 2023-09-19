---
title: "A Protovis Primer, Part 1"
description: "Protovis is a very powerful visualization toolkit. Part of what makes it special is that it is written in JavaScript and runs in the browser without the need for any plugins. Its clever use of JavaScript's language features makes it very elegant, but it can also be confusing to people who are not familiar with functional programming concepts and the finer points of JavaScript. This multi-part tutorial shows how to create a visualization (my interactive Presidents Chart) in Protovis, and explains the concepts that are involved along the way."
date: 2010-06-02 23:43:08
tags: tutorials
featuredImage: 
---

# A Protovis Primer, Part 1

<a href="http://vis.stanford.edu/protovis/docs/">Protovis</a> is a very powerful visualization toolkit. Part of what makes it special is that it is written in JavaScript and runs in the browser without the need for any plugins. Its clever use of JavaScript's language features makes it very elegant, but it can also be confusing to people who are not familiar with functional programming concepts and the finer points of JavaScript. This multi-part tutorial shows how to create a visualization (my <a href="/blog/2008/presidential-demographics-ii">interactive Presidents Chart</a>) in Protovis, and explains the concepts that are involved along the way.
<!--break-->
This introduction is based on my experiences with using Protovis in my <em>Visualization and Visual Communication</em> class earlier this spring. While the concepts involved are really not that difficult, they are rather foreign to students who have not been exposed to functional programming. And since that is also the case for a lot of hobbyists and people wanting to do visualization who do not have a computer science background, I imagine they run into the same problems.

This has grown from being a single article into several parts (and is still expanding). Let me know if there are things that you don't understand or that you think need to be covered in more detail, so I can tailor the next parts accordingly.

Protovis requires a modern browser, which means any recent version of Safari, Chrome, FireFox, or Opera. Internet Explorer does not work, because it does not support the HTML5 Canvas element. The visualizations in this article are all Protovis drawings (check out the source code!), with a fall-back to images for RSS readers and IE users. There is no real difference at this point, but once we get to interaction, you will want to read this in a supported browser.

## A Simple Example

Let's start with a simple example, taken almost verbatim from the <a href="http://vis.stanford.edu/protovis/protovis.pdf">Protovis paper presented at InfoVis 2009 (PDF)</a>.

<p align="center"><img src="https://media.eagereyes.org/media/2010/protovis-primer/bars.png" width="150" height="140" alt="bars" /></p>

The following code creates this chart:

```js
var vis = new pv.Panel().width(150).height(140)
    .add(pv.Bar)
        .data([1, 1.2, 1.7, 1.5, .7, .2])
        .bottom(0).width(20)
        .height(function(d) d * 80)
        .left(function() this.index * 25)
    .root.render();
```

Let's look at this line by line. The first line defines a new <em>Panel</em>, the base element for any Protovis chart. The panel is the canvas on which everything is drawn (in fact, it becomes an actual <code>canvas</code> element in the webpage). This line also defines its size by calling two functions that set its width and height.

## Function Chaining

This brings us to the first bit of magic: Almost all functions in Protovis return the object they are called on. That makes it possible to chain function calls instead of having to repeat the variable name over and over. While this leads to more elegant, simpler code, it can make it a bit terse and more challenging to read. But consider the alternative:

```js
var vis = new pv.Panel();
vis.width(150);
vis.height(140);
var bar = vis.add(pv.Bar)
etc ...
```

Function chaining lets you treat functions like statements: I want a panel, and I want its width to be 150 and its height to be 140; this translates very directly into function calls. While this is not all there is to what Bostock and Heer call a &#8220;declarative style of programming,&#8221; it certainly is a big part of it.

## Marks

But back to our example. The second line adds something to the panel by calling the <code>add()</code> function. What is added is called a <em>mark</em>, a graphical element that can represent data. Let's briefly skip over the details of that and look at the last line: here, we need to call the render function of the panel to tell it to create the necessary infrastructure and start rendering. Since at this point, the functions being called are called on the bar mark that was added in the second line, we need a way to go back to the panel. This could be done by assigning the panel to a variable <code>vis</code> and calling <code>vis.render()</code>. The way it is done here is using the special variable <code>root</code>, which exists in all marks. It returns the panel that the mark sits on, so we can add other marks to it or call its functions.

The following code snippet is identical to the above. I just showed the other one first because it is the style that the Protovis examples are written in, so it makes sense to get familiar with it.

```js
var vis = new pv.Panel().width(150).height(140);
vis.add(pv.Bar)
    .data([1, 1.2, 1.7, 1.5, .7, .2])
    .bottom(0).width(20)
    .height(function(d) d * 80)
    .left(function() this.index * 25);
vis.render();
```

Using variables is a good idea in general, especially when creating more complex visualizations. But the clever design of Protovis' functions makes it possible to all but eliminate them in many cases (at least as far as Protovis objects are concerned).

## Mark Properties

Now let's look at the definition of the bars, which is the same between both alternatives. The first statement defines an array of numbers, which are the data to be shown on the chart. We will later see data in variables and arrays of objects, not just numbers. But this kind of inline definition of the data is also possible. The square brackets delimit an array in JavaScript (and lots of other programming languages), numbers are listed with commas in between.

The line after the data statement specifies two important but constant parts of the layout. Since we're using bars, we have to specify at least their position (x and y), their width, and height. For a bar chart, it makes sense to have all the bars have the same width, so it is set to a number here. And since we want all bars to sit on the same baseline, we specify their y position as 0. The terminology here, <em>bottom</em>, has to do with the way locations and sizes can be specified in Protovis. I'll cover more of that later.

## More Fun With Functions

The next two lines is where it gets really interesting, and where a lot of confusion comes from. Remember that we are creating a bar chart here, but there is no loop to draw each of the bars. We specified the entire data array two lines earlier. Now how do we get Protovis to draw something?

The way Protovis works is that a definition like this tells it to iterate over the array of data it is given, instantiate a mark for each entry in the array, and evaluate all the information it is given about what to do with the mark. In the case of the <em>width</em> and <em>bottom</em> attributes, this is simple: we specified constants, so it just uses these same numbers for all of the bars it creates.

But we want the bars to represent the data by varying their height, how do we do that? The answer here is a function. Instead of specifying a number or variable, we assign a function to the height property. For every entry in the array, Protovis will call this function with the value, and use the result of the function as the height of the bar. The beauty of this approach is that JavaScript, unlike Java and most of the more common imperative languages, can use a function like a variable: you can pass it to another function, store it in a variable, and evaluate it by calling it.

As with the function chaining before, the particular style in which this is done in Protovis makes this a bit more difficult to understand. Here is the definition of the height again:

```js
.height(function(d) d * 80)
```

And here is the same definition in a more verbose style that is actually correct JavaScript (Protovis does some magic with function parsing that allows the sloppy but more compact style above):

```js
.height(function(d) {
    return d * 80;
})
```

Both statements do the exact same thing: they specify a function without a name (called an <em>anonymous function</em>) that takes one argument called <code>d</code>. The function returns the result of a simple computation, multiplying the value of that argument by 80. The unit here is pixels, which means that our highest bar will be 1.7 * 80 pixels high (1.7 is the maximum value in the data array).

Functions used in property definitions can do a lot more complex things. You can also assign functions to variables and reuse them in different definitions. But many functions used in visualization definitions in Protovis perform fairly straight-forward calculations or access data in more complex data structures (we'll get to that, too).

The last line in the bar definition works the same way as the height definition, with a small difference. We want our bars to be next to each other, not drawn on top of each other. Even though the mark is called <em>bar</em>, it is really more a general-purpose rectangle: it doesn't know anything about being a bar in a bar chart. That makes it very flexible and powerful, but it also means that you need to do a lot of things by hand that might seem obvious.

## Bar Layout

To move the bars, we specify their <em>left</em> property, which together with the <em>bottom</em> means we're specifying the lower left corner. Since this value will have to be different between the bars, we need to again specify a function. We are specifying everything at once, so there is no obvious way to order the bars and use that order to space them. Protovis therefore has a special variable that is available when it evaluates functions, which is called <code>this.index</code>. That variable's value is the index of the current value in the array, starting at 0 and going all the way to the size of the array minus 1.

```js
.left(function() this.index * 25);
```

Remember that we set the width of the bars to 20. Putting the bars at multiples of 25 means that we're leaving five pixels of space between them. You can easily tweak any of these numbers to change spacing, scaling, etc. Just remember that when you increase the scale factor, you will have to also change the size of the panel, or your bars will be cut off!

## Adding A Variable

The last step in this first part of this tutorial is simply to move the data into a variable. This is a simple but important step. To do this, we will define new variable <code>numbers</code> that contains the exact same numbers as above. The only other thing that changes is the <code>data()</code> function call that now uses the variable.

```js
var numbers = [1, 1.2, 1.7, 1.5, .7, .2];

new pv.Panel().width(150).height(140)
    .add(pv.Bar)
        .data(numbers)
        .bottom(0).width(20)
        .height(function(d) d * 80)
        .left(function() this.index * 25)
    .root.render();
```

Running this does not actually make any difference, which is what we intended. But it opens the doors to some more flexibility. What if we wanted the bars to change size depending on how much data there is? Let's define another variable for the panel, <code>panelWidth</code>, and calculate the width of the bars, <code>barWidth</code>, from the size of the array.

```js
var panelWidth = 150;

var barWidth = panelWidth/numbers.length;
```

The barWidth is the total space a bar takes up, including its spacing to the next bar. If we simply use this for our definition:

```js
new pv.Panel().width(panelWidth).height(140)
    .add(pv.Bar)
        .data(numbers)
        .bottom(0).width(barWidth)
        .height(function(d) d * 80)
        .left(function() this.index * barWidth)
    .root.render();
```

We end up with something slightly unexpected:

<p align="center"><img src="https://media.eagereyes.org/media/2010/protovis-primer/bars-toowide.png" width="150" height="140" alt="bars are too wide now" /></p>

We need to add some space between the bars again. Remember that we set the width to 20 earlier, but multiplied the index by 25. We need something similar here, so we'll introduce another variable, <code>barSpacing</code>. This will be subtracted from the <code>barWidth</code> in the width definition, so the bar does not use the entire width it got assigned.

```js
var barSpacing = 5;

new pv.Panel().width(panelWidth).height(140)
    .add(pv.Bar)
        .data(numbers)
        .bottom(0).width(barWidth-barSpacing)
        .height(function(d) d * 80)
        .left(function() this.index * barWidth)
    .root.render();
```

The result is a readable chart that looks like before:

<p align="center"><img src="https://media.eagereyes.org/media/2010/protovis-primer/bars.png" width="150" height="140" alt="bars again" /></p>

This may not look very exciting, but it gives us a lot of flexibility. Now we can change the width of the chart by simply changing the <code>panelWidth</code>, let's say to 250:

<p align="center"><img src="https://media.eagereyes.org/media/2010/protovis-primer/bars-wide.png" width="250" height="140" alt="wider bars" /></p>

As you can see, the bars have adapted to the new width. The spacing looks a bit odd because <code>barSpacing</code> is still a constant, but that would be easy to change, too. But what happens if we add more data to our <code>numbers</code> array?

```js
var numbers = [1, 1.2, 1.7, 1.5, .7, .2, .5, .9];
```

<p align="center"><img src="https://media.eagereyes.org/media/2010/protovis-primer/more-bars.png" width="250" height="140" alt="more bars" /></p>

The bars adapt to the number of values, because the barWidth depends on the number of values in the <code>numbers</code> array, <code>numbers.length</code>. This only works to a certain point, because our spacing is still constant; but it's a start.

This concludes the first part of this tutorial. The next parts will cover more complex layouts, Protovis scales, other mark types, reading of complex data, labels, etc.

## Start Playing!

If you want to play with Protovis, I am providing <a href="https://media.eagereyes.org/media/2010/protovis-primer/protovis-primer-part1.zip">a ZIP file with two simple HTML files</a>: one is the basic bar chart, the other one uses variables for the data and the widths.

I have also started <a href="http://github.com/eagereyes/Protovis-Primer">a repository on github</a> for people familiar with git.

<hr>

Next:

<ul>
<li><a href="/tutorials/protovis-primer-part-2">A Protovis Primer, Part 2</a></li>
<li><a href="/tutorials/protovis-primer-part-3">A Protovis Primer, Part 3</a></li>
</ul>


<PostedBy />


<aside class="comments">

---
## Comments

<a href="http://thejit.org" rel="nofollow noopener" target="_blank">Nicolas</a> says…
>	Nice Review! I've just seen they released a new version with new cool visualizations that looks really nice.
>	
>	BTW, I thought they didn't support IE because they used SVG and not Canvas. Actually even though IE does not support Canvas you can use ExCanvas to make it work, like with my toolkit (that does support IE): http://thejit.org . 
>	
>	There's an SVG like language in IE called VML, libraries like RaphaelJS add simple geometric primitives that translate into VML and SVG, Protovis could use that also to add support for IE.
>	
>	In regard with performance and readability, I don't really understand what all these functions calls is about. I don't want to be too negative but it'd seem that they're using the functional paradigm to do declarative suff. Why not just pass an object? It would save all function calls and would be more readable too:
>	
>	<code>
>	new pv.Panel({<br>
>	  width: bla,<br>
>	  height: bla,<br>
>	  left: bla,<br>
>	  data: []<br>
>	});
>	</code>
>	
>	Anyway, nice review.

<a href="http://www.janwillemtulp.com" rel="nofollow noopener" target="_blank">Jan Willem Tulp</a> says…
>	Very good primer!

<a href="http://www.janwillemtulp.com" rel="nofollow noopener" target="_blank">Jan Willem Tulp</a> says…
>	BTW, also great that you've started a GitHub repository! Looking forward to read the next parts!

Robert Kosara says…
>	I haven't thought this through entirely, but you're probably right. It may be that a more declarative approach would be as flexible as the functions, and I'm sure it would be more readable. It doesn't really make the part about passing functions around easier for people who aren't familiar with this kind of thinking, though.
>	
>	As for IE: My understanding is that VML uses some other element, so it's both canvas and SVG that are missing. But I don't know the specifics of this. I've also seen various claims that different libraries make Protovis work with IE or not, but I didn't want to get distracted by that. Maybe in a later part.
>	
>	I also know thejit, but I haven't looked at it very carefully so far. It's on my list of things to do, though. ;)

<a href="http://www.datadrivenconsulting.com" rel="nofollow noopener" target="_blank">Alex Kerin</a> says…
>	I believe that Protovis is indicative of the future of interactive web-based visualizations, and even dashboards. I created [this animated Dorling Cartogram](http://www.datadrivenconsulting.com/2010/05/dorling-cartogram-of-unemployment-1980-2009/) by hacking the code they showed in the ACM paper, and changing the data source.
>	
>	It didn't take that long to understand what was going on - there's no way I would have been able to create this in Flash without manually drawing the chart time slices. 
>	
>	Great review, and great job by the contributors to Protovis (and jQuery, etc. etc.)

Robert Kosara says…
>	[That's what I've been saying all along!](http://eagereyes.org/blog/2010/javascript-key-to-in-browser-visualization)

Anonymous says…
>	Protovis looks awesome, but real world use is not 
>	going to happen until they address the IE problem.
>	
>	IE 6, 7, and 8 can't be ignored. 
>	
>	http://code.google.com/p/protovis-js/issues/detail?id=15

<a href="http://www.oecd.org/statistics/factblog" rel="nofollow noopener" target="_blank">Jérôme Cukier</a> says…
>	Keep it up Robert. I really like this series :)

<a href="http://www.bizintelguru.com" rel="nofollow noopener" target="_blank">John C. Munoz</a> says…
>	Thanks for the excellent tutorial. I don't know JavaScript, but found what your wrote to be easy to understand. 
>	
>	Along the lines of what Alex Kerin wrote above, I hope to use Provotis as a dashboard creation tool. I currently use Excel with a $250 plug in from XLCubed, which allows for crisp and small sparklines, bullet charts, and bar charts. But these dashboards on the web can only be presented in static image form. And updating them is usually an offline process. 
>	
>	I'd love to see if protovis can be made to layout a grid type canvas on which to paint a good dashboard with live data.
>	
>	Thanks,
>	
>	John C. Munoz
>	http://www.bizintelguru.com

Robert Kosara says…
>	It's certainly possible. I'll cover multiple panels and layouts later, those should make it easier to build a dashboard. It's easy to modify the data the chart is based on for dynamic visualization, you can check out the Protovis examples to see that. I'll also talk about that at some point in the future.

Derek says…
>	@Nicolas: "There's an SVG like language in IE called VML, libraries like RaphaelJS add simple geometric primitives that translate into VML and SVG, Protovis could use that also to add support for IE."
>	
>	I'd rather __not__ see this happen at all; Microsoft should be moving in support of open standards, rather than developers having to support proprietary and closed standards.  Google's plug-in can be used to create static images for those on insist on using a non-standards compliant browser.

Adam says…
>	Well, *I* think the jquery-like syntax is more readable.. the inheritance concept seems more 'intuitive'.. Anyway Nicolas is right about protovis using SVG (it might have used canvas but the current version definitely uses svg). As for vml, you could say svg is the w3c standardized version of microsofts vml.
>	Btw, I couldn't find the presidents' chart mentioned in the post..?

Adam says…
>	Not true, you could just display a screenshot of the image for IE. Once you wrap your head around the concepts, protovis enables even static visualizations that are both easy and rich

<a href="http://www.ruggeromotta.com" rel="nofollow noopener" target="_blank">ruggero</a> says…
>	this tutorial is great! you teached the meaning of the javascript syntax and also why you're using it... and it's what I was looking for..
>	I' can't wait for the next part!

Daniel says…
>	Thank you very much for 2 great articles - looking very much forward to the next one!
>	
>	Excuse my chutzpah, but here's a short wish-list.
>	
>	- Would be wonderful to learn more about tweaking a stack / stream graph. For example recreating the Crimean War stack graph here:
>	http://vis.stanford.edu/protovis/jsdoc/symbols/pv.Layout.Stack.html
>	
>	- I know protovis' animation features are being worked on but what can be done right now? Using generic javascript or intrinsic features ...
>	
>	Thanks once again!

<a href="http://www.roonga.com.au" rel="nofollow noopener" target="_blank">Ravi</a> says…
>	This gave me a heads up into Protovis.  Thank you.

<a href="http://www.inetsoft.com/company/visualization_tools/" rel="nofollow noopener" target="_blank">Visualization Tool Guy</a> says…
>	I like the graphics style for the charting engine. We could use something like this. Thanks for the tutorial.

<a href="http://www.jzarracina.com" rel="nofollow noopener" target="_blank">Javier Z.</a> says…
>	Thanks so much for the primer. it's a great introduction and is much appreciated.
>	I'll follow the series with interest.

<a href="http://tungwaiyip.info/" rel="nofollow noopener" target="_blank">Wai Yip Tung</a> says…
>	Protovis definitely uses SVG, not HTML5 canvas. From the second paragraph of its own home page:
>	
>	"Protovis is free and open-source, provided under the BSD License. It uses JavaScript and SVG for web-native visualizations; no plugin required (though you will need a modern web browser)!"
>	
>	In either case, no IE8 support.

santhosh says…
>	You have no idea how much you have helped me. I had to figure out how protovis works for integration into one of my projects and you are a lifesaver.

Román says…
>	IS it possible to make a chart appear in an specific div?

MySchizo Buddy says…
>	I have a request for another article in this series. This is related to scientific publications.
>	More than one y-axis or x-axis on the same graph like (http://plot.micw.eu/uploads/Main/linlog.png)
>	
>	Subview of a graph like this image (http://plot.micw.eu/uploads/Main/xps.png)

<a href="http://blizzardzblogs.blogspot.com/" rel="nofollow noopener" target="_blank">Venkat</a> says…
>	Thanks for the great primer.

Ore-ofe says…
>	really nice tutorial for beginners.............I'm almost feeling like a guru

Scap says…
>	This tutorial really should be linked to from the protovis homepage! Very useful. Thank you.

<a href="http://www.taseiger.com" rel="nofollow noopener" target="_blank">Eiger</a> says…
>	Aw, this became an incredibly good quality article. In principle I would like to produce this way way too * spending time along with true hard work to generate a very good document... nevertheless exactly what can I have faith that... My spouse and i delay doing things much and don't apparently go accomplished. There are additional alternatives for beginning ache. 
>	<a href="http://www.taseiger.com/"><strong>eiger</strong></a> and
>	<a href="http://www.eigerbandung.com/"><strong>eiger</strong></a>
>	

<a href="http://www.taseiger.com" rel="nofollow noopener" target="_blank">Eiger</a> says…
>	Aw, this became an incredibly good quality article. In principle I would like to produce this way way too * spending time along with true hard work to generate a very good document... nevertheless exactly what can I have faith that... My spouse and i delay doing things much and don't apparently go accomplished. There are additional alternatives for beginning ache. 
>	
>	<a href="http://www.taseiger.com/"><strong>eiger</strong></a>
>	<a href="http://www.eigerbandung.com/"><strong>eiger</strong></a>

laertes13 says…
>	I've been searching for an HTML way to make charts after getting frustrated with Flex's complexity. I'd messed with Protovis a bit, but couldn't get my head around it. After your tutorial, I smiled big while adjusting the bar spacing and widths. So, simple. Thank you!

</aside>

