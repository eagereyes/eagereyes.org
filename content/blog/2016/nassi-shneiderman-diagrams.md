Programming languages use words and symbols to represent structures like blocks and conditions. A visual representation of these structures seems useful to keep track of all the different cases, see the scope of variables, etc. Nassi-Shneiderman diagrams offer just such a representation.

The structure of programs is sometimes shown using flow charts: decisions create branches, repetitions can be seen by arrows that point back, etc. Flow charts are an adequate representation of assembly language programs, but they're a poor fit for the structured, high-level programming languages almost everybody has been using for many decades now.

In [a paper published in 1973](http://www.cs.umd.edu/hcil/members/bshneiderman/nsd/1973.pdf), Isaac Nassi and [Ben Shneiderman](/blog/2011/ben-shneiderman) described the idea for a more structured visual approach. Their diagrams are sometimes called *structured flowcharts*, but are much more commonly known as *Nassi-Shneiderman diagrams.*

For some reason, they caught on much more in the German-speaking world than in the U.S. or elsewhere. I remember being taught the diagrams, and how they were much better suited for structured programming than flowcharts, in high school. As a teenager, I drew a good number of these diagrams of sorting algorithms (in particular the confusing *QuickSort*) to figure out how they worked.

Structured flowcharts have some interesting properties. They are a much better structural fit for high-level programming languages than standard flow charts. High-level languages like C, Pascal, Java, Python, etc. have constructs like loops, blocks that define scope, ifs with a defined else structure (and often cascading if-elseif-elseif-…else structures), switch/case statements, function calls (including recursion), etc.

Assembly has no such thing, all it knows are conditional and unconditional jumps. Those are nicely captured in flow charts, but whether a jump is part of a loop or a condition is only apparent when looking at the larger structure of the program. A Nassi-Shneiderman diagram immediately shows you what the high-level construct is.

By keeping the structure compact, structured flowcharts also help you see when you're missing cases. Granted, this isn't practical to do while debugging of a complex program (though it could be if automated tools existed for that), but it's great for teaching and for beginning programmers to increase their understanding of what is going on (and reduce their frustration and random guessing when trying to fix things).

It's hard to find examples of Nassi-Shneiderman diagrams on the web. Here's a function printing out [the Fibonacci sequence](https://en.wikipedia.org/wiki/Fibonacci_number) that I grabbed from [an outdated COMP101 class website](http://cgi.csc.liv.ac.uk/~frans/OldLectures/COMP101/week8/dowhileLoops.html). It should be fairly easy to figure out what the different elements mean from the context.

<figure><img src="https://media.eagereyes.org/wp-content/uploads/2016/08/fibonacciClassNS1.png" alt="fibonacciClassNS1" width="463" height="272"/></figure>

There is a short but helpful [Wikipedia page on Nassi-Shneiderman diagrams](https://en.wikipedia.org/wiki/Nassi–Shneiderman_diagram), and [Ben Shneiderman has a little page](http://www.cs.umd.edu/hcil/members/bshneiderman/nsd/) up as well (though most of the links there are dead). [An article about how to create these diagrams in Excel](http://www.breezetree.com/articles/nassi-shneiderman-diagram.htm) has some helpful illustrations as well. The [original paper is also available](http://www.cs.umd.edu/hcil/members/bshneiderman/nsd/1973.pdf) in all its 1970s typewriter glory, hand-drawn illustrations and all.
