---
title: "Nassi-Shneiderman Diagrams"
description: "Programming languages use words and symbols to represent structures like blocks and conditions. A visual representation of these structures seems useful to keep track of all the different cases, see the scope of variables, etc. Nassi-Shneiderman diagrams offer just such a representation."
date: 2016-08-28 20:16:03
tags: techniques
featuredImage: https://media.eagereyes.org/wp-content/uploads/2016/08/nassi-shneiderman-diagram.jpg
outline: false
---

# Nassi-Shneiderman Diagrams

Programming languages use words and symbols to represent structures like blocks and conditions. A visual representation of these structures seems useful to keep track of all the different cases, see the scope of variables, etc. Nassi-Shneiderman diagrams offer just such a representation.

The structure of programs is sometimes shown using flow charts: decisions create branches, repetitions can be seen by arrows that point back, etc. Flow charts are an adequate representation of assembly language programs, but they're a poor fit for the structured, high-level programming languages almost everybody has been using for many decades now.

In <a href="http://www.cs.umd.edu/hcil/members/bshneiderman/nsd/1973.pdf">a paper published in 1973</a>, Isaac Nassi and <a href="/influences/ben-shneiderman">Ben Shneiderman</a> described the idea for a more structured visual approach. Their diagrams are sometimes called <em>structured flowcharts</em>, but are much more commonly known as <em>Nassi-Shneiderman diagrams.</em>

For some reason, they caught on much more in the German-speaking world than in the U.S. or elsewhere. I remember being taught the diagrams, and how they were much better suited for structured programming than flowcharts, in high school. As a teenager, I drew a good number of these diagrams of sorting algorithms (in particular the confusing <em>QuickSort</em>) to figure out how they worked.

Structured flowcharts have some interesting properties. They are a much better structural fit for high-level programming languages than standard flow charts. High-level languages like C, Pascal, Java, Python, etc. have constructs like loops, blocks that define scope, ifs with a defined else structure (and often cascading if-elseif-elseif-…else structures), switch/case statements, function calls (including recursion), etc.

Assembly has no such thing, all it knows are conditional and unconditional jumps. Those are nicely captured in flow charts, but whether a jump is part of a loop or a condition is only apparent when looking at the larger structure of the program. A Nassi-Shneiderman diagram immediately shows you what the high-level construct is.

By keeping the structure compact, structured flowcharts also help you see when you're missing cases. Granted, this isn't practical to do while debugging of a complex program (though it could be if automated tools existed for that), but it's great for teaching and for beginning programmers to increase their understanding of what is going on (and reduce their frustration and random guessing when trying to fix things).

It's hard to find examples of Nassi-Shneiderman diagrams on the web. Here's a function printing out <a href="https://en.wikipedia.org/wiki/Fibonacci_number">the Fibonacci sequence</a> that I grabbed from <a href="http://cgi.csc.liv.ac.uk/~frans/OldLectures/COMP101/week8/dowhileLoops.html">an outdated COMP101 class website</a>. It should be fairly easy to figure out what the different elements mean from the context.

<p align="center"><img class="aligncenter size-full wp-image-9491" src="https://media.eagereyes.org/wp-content/uploads/2016/08/fibonacciClassNS1.png" alt="fibonacciClassNS1" width="463" height="272" /></p>

There is a short but helpful <a href="https://en.wikipedia.org/wiki/Nassi–Shneiderman_diagram">Wikipedia page on Nassi-Shneiderman diagrams</a>, and <a href="http://www.cs.umd.edu/hcil/members/bshneiderman/nsd/">Ben Shneiderman has a little page</a> up as well (though most of the links there are dead). <a href="http://www.breezetree.com/articles/nassi-shneiderman-diagram.htm">An article about how to create these diagrams in Excel</a> has some helpful illustrations as well. The <a href="http://www.cs.umd.edu/hcil/members/bshneiderman/nsd/1973.pdf">original paper is also available</a> in all its 1970s typewriter glory, hand-drawn illustrations and all.


_Posted by <a href="/about">Robert Kosara</a> on August 28, 2016_


<aside class="comments">

---
## Comments

<a href="http://www.dethwench.com" rel="nofollow noopener" target="_blank">Monika M. Wahi, MPH, CPH</a> says…
>	Thanks for turning me on to this! I'll have to try it. My first impression is that it takes up less space and looks more neat than the traditional flow chart. Also, it looks like there can't be too many decisions in the chart or the trees will get to tiny. FYI, I use Gliffy.com for my flow charts and I think it works really well - I recommend it:  https://www.gliffy.com/ (Just a personal note - I'm not connected with the Gliffy company in any way.)

Michael says…
>	Took me a second to understand the Fibonacci diagram, but once it clicks, it really does turn out to be a simple and effective way of explaining the program.

<a href="https://www.facebook.com/app_scoped_user_id/10154741115092339/" rel="nofollow noopener" target="_blank">Ger Tielemans</a> says…
>	Macro for Nassi-Shneiderman diagrams in Word:
>	https://core23.de/download/office-vorlagen/nassi-shneiderman-diagramm_word_vorlage.html

<a href="http:www.massey.ac.nz" rel="nofollow noopener" target="_blank">Chris Hansen</a> says…
>	Thanks Robert - learned something new, interesting and useful today. The original paper is well worth reading too and as an app developer very insightful.

</aside>

