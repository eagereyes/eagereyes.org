---
title: "JavaScript: The Key to In-Browser Visualization"
description: "Most data visualization on the web consists of static images. Typical interactive visualizations use Flash or Java, both of which have drawbacks and require plugins, don't work on mobile devices, etc. A number of recent visualization tools based on JavaScript promise to finally bring visualization to life on the web. The ways they work differ, but they all profit from recent advances in JavaScript performance across all modern browsers."
date: 2010-02-11 00:05:25
tags: 
featuredImage: https://media.eagereyes.org/media/2010/protovis-code.png
---

<p align="center"><img src="https://media.eagereyes.org/media/2010/protovis-code.png" width="560" height="144" alt="Some Protovis code" /></p>

# JavaScript: The Key to In-Browser Visualization

Most data visualization on the web consists of static images. Typical interactive visualizations use Flash or Java, both of which have drawbacks and require plugins, don't work on mobile devices, etc. A number of recent visualization tools based on JavaScript promise to finally bring visualization to life on the web. The ways they work differ, but they all profit from recent advances in JavaScript performance across all modern browsers.

## JavaScript and the Death of Flash

You've probably heard of JavaScript (JS), and your view of it is likely skewed and outdated. To users, JavaScript used to mean overloaded, slow, buggy websites; to developers, it meant an annoying, difficult to master language that severely limited what they could do. Both have changed tremendously over the last few years. Today's browsers compile JavaScript into native code that runs incredibly fast. Toolkits like jQuery make it easier to write code that will run on all browsers, and to get easy access to those features they need most. Developers also seem to finally understand that JS is not like Java (even if the name suggests that), and are <a href="http://javascript.crockford.com/">working with the language, rather than against it</a>.

Much has been written recently about Flash's coming demise. This is largely a result of frustration with its poor performance on the Mac, and the fact that HTML 5 provides alternatives for movie streaming and enough flexibility and power to implement almost anything in pure HTML and JavaScript. Mobile devices are gaining importance, but most of them do not support Flash (mostly due to its high demand on CPU speed and memory), and are unlikely to do so in the near future.

Java has largely disappeared from the web, and is unlikely to make a comeback. While it is still installed on many people's computers, loading a Java applet takes much longer than for Flash, and the programmer's control over the look and feel of the applet is very limited. Java is also a bit of a memory hog, and communication between the browser and the applet is almost non-existant.

In the long run, the native support of JavaScript in the browser will win over anything that requires a plugin. Functionality that does not rely on external code, the loading of a plugin, etc., will be faster, more reliable, and better integrated into the browser than anything Flash, Java, etc. can provide.

## Charting Plugins for jQuery et al.

<a href="http://jquery.com/">jQuery</a> is a popular JavaScript library that provides a lot of commonly needed functionality. It has a number of plugins, among them the rather clever <a href="http://www.filamentgroup.com/lab/update_to_jquery_visualize_accessible_charts_with_html5_from_designing_with/">visualize plugin</a> (<a href="http://github.com/em-/jquery-visualize">available on github</a>). It can create some standard charts, like line and bar charts. What is really clever about it is that its data representation is an HTML table. That means that it is trivial to add a chart to a page that already contains a table. It can even react to change events if the table is user-editable, and update the chart accordingly. 

Once you start looking around, you actually find <a href="http://sixrevisions.com/javascript/20-fresh-javascript-data-visualization-libraries/"> a ton of JavaScript visualization libraries </a>, but they all tend to do the same things in very similar ways: line charts, bar charts, maybe pie charts. Many of them are also plugins for jQuery or some other general toolkit. While they are clearly useful to get some charts onto a page, they do not go beyond the usual chart types.

Since these libraries are all based on the HTML 5 canvas element and SVG (Scalable Vector Graphics), they do not work in Internet Explorer. <a href="http://code.google.com/p/explorercanvas/">Excanvas</a> translates between SVG and IE's VML. There are mixed reports on how well it works, so IE support is not a given yet, but it will likely be solved soon.

## Protovis

While also written in JavaScript, <a href="http://protovis.org/">Protovis</a> stands out because of its flexibility and power. While the other toolkits all have a set of charts they can produce, Protovis allows the developer to create entirely new ones based on primitives. The framework makes great use of JavaScript language features and conventions to essentially provide a declarative style of programming that states <em>what</em> to do and <em>where</em> to get the data from, and leaves the <em>how</em> to Protovis.

It takes a bit of time and effort to get used to the idea, despite of the examples and documentation. But this is a very powerful and flexible way to define visualizations. Not only is it possible to create entirely new visualizations with it, prototyping variations on existing techniques is also very easy. This makes it possible to explore the design space of visualization, something that is seldom done due to the amount of work involved in changing an implementation.

The declarative style, once there are more examples and tutorials available, will also make it possible for people with little programming experience to create interesting new visualizations. This opens up quite a bit of power to artists and designers, and makes data-based elements on websites more attractive to them.

## Tableau Public

All the tools described above load the data into the browser and perform all the rendering on the client. This has the advantage that no server infrastructure is needed, other than a simple http server that provides the necessary files. The same page can also be loaded from a local directory instead, and the server does not have to worry much about a visualization becoming too popular: the load increase with more users is very small (and mostly data transfer, not CPU load).

<a href="http://www.tableausoftware.com/public/">Tableau Public</a> uses a very different approach. It renders all the views on a server, while the JavaScript that runs in the browser simply downloads the resulting images and communicates mouse interactions back to the server. This means that even very large data sets can be used (that would not fit into the user's main memory), but the server becomes a bottleneck much more quickly.

One of the reasons for doing this is of course the fact that Tableau is a commercial company, while all the other toolkits are open source. It is next to impossible to protect intellectual property in JS code from prying eyes. The server-based approach means that the client-side code can be minimized, and might not change at all when new features are introduced.

## The Future of Visualization on the Web

JavaScript for visualization is clearly the way to go. It's fast, versatile, works much better than Flash or Java, and is obviously way ahead of static images (like Google Charts). Modern browsers provide many of the necessary user interface elements for most applications, making it easy to seamlessly integrate visualizations into a webpage. With the growing use of mobile devices, JS-based solutions will gain even more popularity.

Its unique language features, if used in the right way, can also be the basis for some very innovative and powerful ideas about how to prototype new visualization techniques.

JavaScript is the tool for finally bringing visualization to the masses.

[[PostedBy]]

<aside class="comments">

---
## Comments

<a href="http://www.javiertordable.com" rel="nofollow noopener" target="_blank">Javier Tordable</a> says…
>	Great post. I just wrote a post myself about the new Google Chart Tools, as a nice example of Javascript visualizations that are easy to create and I took a quote from here:
>	<a href="http://www.javiertordable.com/blog/2010/02/17/new-google-chart-tools">
>	http://www.javiertordable.com/blog/2010/02/17/new-google-chart-tools
>	</a>
>	
>	

</aside>

