# A Protovis Primer, Part 3

After covering some <a href="http://protovis.org/">Protovis</a> <a href="/tutorials/protovis-primer-part-1">basics in part 1</a>, and some <a href="/tutorials/protovis-primer-part-2">more advanced techniques plus data loading in part 2</a>, this part is devoted mostly to using what we've already discussed in a more complex example. We'll also look at some basic interaction.

While Protovis requires more work to set up charts, it pays off when you want to do something beyond the typical chart types, or when you want to add interaction. You are not limited to any fixed set of charts, but can create any combination you want, or even something entirely new.

In this part of the tutorial, we will create <a href="/blog/2008/presidential-demographics-ii">a chart showing the lives and office terms of all U.S. presidents</a>. The chart is a basic life lines "waterfall" chart, with a few small twists. A basic version of the chart can be created in your favorite spreadsheet, but making it look a particular way or being able to interact is a different matter.

Here is a small part of it, showing only the last few presidents. Again, if you are reading this in Internet Explorer or a news reader, you will only see static images and not be able to interact. Go to <a href="/tutorials/protovis-primer-part-3">the tutorial website</a> to get a better idea how it works.


<p align="center"><img src="https://media.eagereyes.org/media/2010/protovis-primer/presidents-interaction.png" width="560" height="180" alt="presidents chart" /></p>

## Data Preparation

The data used for this example requires some introduction and a bit of preparation. This is what it looks like:

```js
<code lang="js">var presidents =
[
{
"name": "George Washington",
"born": 2353713,
"died": 2378480,
"term_began": 2374600,
"term_ended": 2377465
},
...
]</code>
```

The dates are encoded in single numbers, using the <a href="http://en.wikipedia.org/wiki/Julian_day">Julian Date</a>. This date measures the number of days between January 1st, 4713 BC and the given day. That might seem odd, but it's useful in many applications where a simple way of calculating the number of days between two dates is needed (e.g., in Astronomy). For our purposes, it is useful because it translates the rather unwieldy dates into a simple, linear numerical scale.

A slight complication comes from the presidents who are still around. Their dates of death (and end of office term, for Barack Obama) are set to -1. A function at the top of the program inserts today's date for these dates. You will see below why that makes our lives a lot easier going forward (we won't have to handle special cases).

```js
presidents = presidents.map(function(d) {
if (d.died &lt; 0)
    d.died = today;

if (d.term_ended &lt; 0)
    d.term_ended = today;

return d;
});
```

The <code>map</code> function is one of those functional programming constructs that JavaScript, being a functional language, has. It applies the function given to it to all elements in the array it is called from, and returns a new array containing the results of calling the function. The resulting array has the same number of elements as the one the function was called with. Here, we're replacing the <code>presidents</code> array with a new one which is tailored to the day when the function was called.

There are two functions in the code that convert from and to the Julian date used. I won't list them here, because they're rather technical, but you can <a href="http://github.com/eagereyes/Protovis-Primer">find them in the code</a>. The value for the <code>today</code> variable is generated using one of these functions.

```js
var today = toJulian(new Date());
```

## Setup

For the horizontal lines, we'll have to define a scale so the dates can be mapped to screen locations. We're defining a width of the overall chart, and then use a scale (see <a href="/tutorials/protovis-primer-part-2">part 2</a>) to scale the dates from the first date we might encounter (the birth date of the first president) to the last one (today).

```js
var width = 560;

var dates = pv.Scale.linear(presidents[0].born, today)
.range(0, width - 10);
```

As you can see here, I took no chances and actually used the <code>.born</code> field of the first element in the array. That makes it easier to subset the array, as I've done for the images in this article. No matter what part I choose, I don't have to update the scale manually (unless I start cutting at the end, so the end of the chart is not today).

There's also a bit of setup for the vertical part of the chart, but that one's simpler. I'm specifying a variable <code>h</code> for the height (thickness) of the bars, and <code>pad</code> for the padding/spacing in between. The total height of each element is <code>h+pad</code>, and when we multiply that by the number of objects in our array, we get the total height we need for the panel (plus a bit of space for a scale at the bottom).

```js
var h = 3;
var pad = 12;

var height = (h + pad) * presidents.length + 16;
```

And as before, we'll create a panel to contain the visualization, using these variables to size it according to the content.

```js
var vis = new pv.Panel()
.width(width).height(height);
```

## Life Lines

The lines representing both the lives and the office terms are fairly simple. I'm using the Bar mark here, but you could also use Rules if you wanted. If you followed the previous two installments, this should be fairly self-explanatory:

```js
vis.add(pv.Bar)
.data(presidents)
.left(function(d) dates(d.born))
.width(function(d) dates(d.died) - dates(d.born))
.height(h)
.top(function() ((h + pad) * this.index) + pad)
.fillStyle("#ddd")
```

We're telling the bars where the data comes from, and how to map it to its attributes. The <code>.left</code> and <code>.width</code> attributes use the dates scale we defined above to map the Julian dates stored in the data to screen locations. The y axis is handled differently, with an explicit calculation. We're using the <code>this.index</code> variable again, like in the bar charts last time, to create a sequence of objects.

The bars are ordered from the top down, so I'm using the <code>.top</code> attribute instead of <code>.bottom</code>. This not only means that I'm specifying a different point, it also changes the coordinate system: 0 is now at the top, not at the bottom (which it would be if I used <code>.bottom</code>). This makes the definition a bit more elegant, but I could do the same with <code>.bottom</code> by subtracting from <code>height</code>.

You may have noticed that the semicolon at the end is missing. This is because we want to attach a label so we know who's who:

```js
.anchor("left").add(pv.Label)
.textAlign("left")
.textBaseline("bottom")
.text(function(d) d.name)
.textStyle("#333");
```

Since the anchored label is passed the same data item the original object uses, we have to extract the name attribute. Everything else is just for proper alignment and styling.

In addition to the lives, we care about the presidents' office terms. This works essentially the same way, it just uses a darker shade of gray and doesn't involve a label.

```js
vis.add(pv.Bar)
.data(presidents)
.left(function(d) dates(d.term_began))
.width(function(d) dates(d.term_ended)
- dates(d.term_began))
.height(3)
.top(function() ((h + pad) * this.index) + pad)
.fillStyle("#ddd");
```

So far, we've handled them all the same way, no matter if they are still alive or not. That works because we earlier set the values so that none of them was past <code>today</code>, so none of the bars can go off the right edge. Now, let's add a little indicator to show which ones are still around. This is a thin line that we're adding to the right end of the life line. In the original version, I had a little triangle there that turned the bars into arrows, but that doesn't work very well with these thinner bars.

The line is another bar, this one only a single pixel high. Other than that, the mapping is fairly straight-forward. The only thing to note is that we need a <code>.visible</code> attribute to only show it for those few people who are still around. Also, the <code>.fillStyle</code> has to be different for the president who is still in office. Since the office bar is darker, it only makes sense to also make the extension darker in this case. I will explain the <code>?</code> operator a little further down, because we'll also use it for the interaction, but basically it's a conditional expression: if the first part is true, it returns the part right after the <code>?</code>, otherwise it returns the part after the <code>:</code>.

```js
vis.add(pv.Bar)
.data(presidents)
.visible(function(d) d.died == today)
.left(function(d) dates(d.died))
.top(function() ((h + pad) * this.index) + pad + 1)
.height(1)
.width(10)
.fillStyle(function() (this.index == presidents.length-1)
? "#333": "#ddd");
```

So let's look at what we have so far:

<p align="center"><img src="https://media.eagereyes.org/media/2010/protovis-primer/presidents-basic.png" width="560" height="180" alt="presidents chart" /></p>

## Interaction Setup

There are several ways to create interactivity in Protovis. The general way so far has been to put a transparent object over the entire panel (or at least the parts that you want to interact with), catch mouse events, and figure out what to do with them. Protovis 3.2 introduces behaviors, which are much more elegant and specific, but also have their own pitfalls.

The interaction we're going to build is a simple mouse-over that will show some lines to better compare different life lines, and a label showing actual dates. To do this, we'll need to capture mouse events when the mouse pointer is over an object. This is done by specifying a behavior for the entire panel:

```js
var vis = new pv.Panel()
.width(width).height(height)
.event("mousemove",
pv.Behavior.point(Infinity).collapse("x"));
```

Notice the second line that binds a <code>pv.Behavior</code> to the <code>mousemove</code> event. The definition of the behavior says that we are interested in pointing, and that we do not care if the closest object is too far away (i.e., we're specifying a circle with radius infinity to capture objects). Also, we do not care about the x position, only y, so we'll tell Protovis to ignore that part when looking for the closest match.

This definition passes the events on to individual objects in the panel, which now have to handle them. In this case, because we are specifying a <code>point</code> behavior, the events that our objects receive are called <code>point</code> and <code>unpoint</code>. We'll add a little function to our basic life lines bars that looks like this:

```js
var activePresident = 0;

vis.add(pv.Bar)
[definition like first one above]
.event("point", function() {activePresident = this.index;
return vis;})
```

The <code>activePresiedent</code> variable contains the number of the president the user is pointing at. When the object receives a <code>point</code> event, it calls the function we specify, which updates that variable. Whatever that function returns is then repainted. Since we don't want to worry about precise repainting here, we'll just return the entire panel to be updated. With more complex visualizations, it can make sense to only update parts that have changed.

To keep this simple, we do not handle the <code>unpoint</code> event. That means that there is always one active president, making things easier further down.

## Reacting to Interaction

Now that we know which president's timeline the user is pointing at, we can do something to highlight it and add some information. This is what we'll do with the label to highlight it: use a darker color, so it stands out more. The only thing that differs from the definition above is the last line.

```js
.anchor("left").add(pv.Label)
.textAlign("left")
.textBaseline("bottom")
.text(function(d) d.name)
.textStyle(function() (activePresident == this.index)
? "#333" : "#ddd");
```

Because we are specifying a function, it gets re-evaluated every time the panel is redrawn. So whenever the <code>point</code> event is triggered, it will check whether the label is for the "active" president or not.

The operator used here is a shorter version of an <code>if</code> statement. We could also write the last line above like this:

```js
.textStyle(function() {
if (activePresident == this.index)
return "#333";
else
return "#ddd";
});
```

The first version is obviously more compact, and "more functional" (i.e., closer to the way <code>if</code> works in some functional languages). If used sparingly, this syntax can actually make code more readable. But it easily gets overused, especially when you start nesting expressions; so use with caution.

In addition to highlighting, we also want to have add some vertical lines that help the user compare the lives and office terms of different presidents. To do this, we'll add some Rules.

```js
vis.add(pv.Rule)
.left(function() dates(presidents[activePresident].born))
.bottom(0)
.strokeStyle("#aaa");
```

This very simply maps the current president's birth date to the x position using the <code>dates</code> scale, and it is also updated every time the panel is redrawn. We'll also add one for the ascension, end of office term, and date of death. Only with the latter two, we want to be careful for those special cases. So we add a simple rule to hide the lines when they are not needed:

```js
.visible(function() presidents[activePresident].term_ended
&amp;lt; today);
```

The same is done for the <code>.died</code> field. That means that we won't show the lines for those presidents still alive or in office.

## Text Label

Now this is all good and well, but what about exact dates and such? Because the interaction essentially centers around one variable, it's very easy to add more things that react without creating additional dependencies. Adding a label that displays the active president's name is as easy as this:

```js
vis.add(pv.Label)
.text(function() presidents[activePresident].name)
.left(0)
.bottom(52)
.font("bold 12pt sans-serif");
```

Same idea as above, and the rest is styling. That's not yet terribly useful though, because we're already seeing the name on the life line. But we can just as easily add the life and office terms:

```js
vis.add(pv.Label)
.text(function(d) {
var s = "Life: "+dateFormat.format(
toJSDate(presidents[activePresident].born))+" - ";
if (presidents[activePresident].died &amp;lt; today)
s += dateFormat.format(
toJSDate(presidents[activePresident].died));
return s;
})
.left(0)
.bottom(40);
```

The date here is printed using a date format function that is included in Protovis. To use that, we have to convert the date (which is a Julian date, remember) into a JavaScript object. The function <code>toJSDate()</code> does that. If you want to see the specifics of the date format or the function, check out the source code.

But since we are using the Julian date, there is one thing we can do very easily: figure out the age at the time of ascension.

```js
vis.add(pv.Label)
.text(function(d) "Ascension Age: "+
Math.floor((presidents[activePresident].term_began-
presidents[activePresident].born)/365.25))
.left(0)
.bottom(20);
```

The difference between the <code>term_began</code> and <code>born</code> fields is the number of days between them. By dividing by 365.25, we convert to years and even consider leap years (though it's unlikely to make a difference). Finally the value is rounded down to the next smaller integer using the <code>Math.floor()</code> function.

Here is the complete plot including the labels:


<p align="center"><img src="https://media.eagereyes.org/media/2010/protovis-primer/presidents-labels.png" width="560" height="240" alt="presidents chart" /></p>

And that's it! Interactive visualization in the browser! If you want to see the entire dataset, there is a <a href="/presidential-demographics-protovis">version of it one a separate page</a>. Also check out the <a href="http://github.com/eagereyes/Protovis-Primer">code on github</a>, or <a href="https://media.eagereyes.org/media/2010/protovis-primer/protovis-primer-part3.zip">download a ZIP file containing the full code and data file</a>.

<hr />

Previous:
<ul>
	<li><a href="/tutorials/protovis-primer-part-1">A Protovis Primer, Part 1</a></li>
	<li><a href="/tutorials/protovis-primer-part-2">A Protovis Primer, Part 2</a></li>
</ul>
