# Prior Work We Missed In Our Connected Scatterplots Paper

In 2016, Steve Haroz, Steven Franconeri, and I published [a paper on a technique commonly called the Connected Scatterplot](/papers/the-connected-scatterplot-for-presenting-paired-time-series). It turns out that somebody else had research on essentially the same chart 15 years earlier, which we were not aware of. Our work is quite different, but it’s interesting context and it’s also worth reflecting on how we missed this piece of relevant prior work.

In four papers published from 1999 through 2003, David Peebles, Peter Cheng, and Nigel Shadbolt looked into charts that might look familiar if you’ve seen our Connected Scatterplot paper. In the figure below, I put together Figure 1 from [Peebles, Cheng, and Shadbolt 1999](https://peebles.sdfeu.org/papers/pee_che_sha1999.pdf) with the teaser/Figure 1 from our paper. Guess which one is which.

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2020/08/teasers.png" alt="" class="wp-image-44159" width="660" height="660" /></p>

Peebles and Cheng (who are on three of the four papers, Shadbolt is only on one, so I’ll just refer to the two from here) are psychologists, at the time working at the University of Nottingham. [Peebles is now at the University of Huddersfield](https://pure.hud.ac.uk/en/persons/david-peebles/publications/), [Cheng at the University of Sussex](http://users.sussex.ac.uk/~peterch/). I actually must have crossed paths with Peter Cheng many years ago at the *Thinking with Diagrams* workshop and *Diagrams* conference in the late 90s and early 2000s.

## Terminology

One key difference is what they call their charts. They named the one on the left in the image above *Combined Single Unary (CSU),* and the one on the right *Double Unary Parametric (DUP)* chart (the corresponding terms in our paper are *dual-axis line chart* and *connected scatterplot*). The term “scatterplot” never appears in any of their papers, and they also don’t seem to have been aware of the Beveridge or Philips curves that inspired the connected scatterplot in news graphics.

Interestingly, they do reference Bertin as well as Cleveland and McGill’s classic 1985 paper, and also work by Kosslyn and Pinker that isn’t terribly well known in visualization but certainly would be known to diagrammatic-reasoning folks or psychologists with an interest in statistical graphics and visualization.

## Timing

It’s also interesting to note that their research not only predates ours by a decade and half, but it was also published years before the first use of the connected scatterplot technique in news graphics, which was in 2008.

Papers from 20 years ago are recent enough at this point that they’re easily available online. In fact, David Peebles has them all linked as PDFs directly from [his publications page](https://peebles.sdfeu.org/pubs.html). Missing some obscure 1960s papers that are only available from a library would be easier to defend than ones that are out there, and presumably have been all along, if only we had known what to search for.

## Tasks

Another difference is how they expect people to use the charts. Most of Peebles and Cheng’s examples and tasks use time series, but they don’t seem to consider time a key factor for the chart. They ask mostly value-retrieval questions, like “What was the value of gas production in 1977?” and treat the charts more like diagrams than charts.

We completely focused on time series, since that is the way the chart is used in news graphics, and I’ve only seen one chart that doesn’t entirely rely on time along the connecting line. Our questions were different because of that, focusing on understanding the direction of and relative phase of the two time series, plus we also looked at engagement and memory.

Peebles and Cheng instead want to model the cognitive tasks behind reading these charts and use eye tracking to validate their models.

## Traveling Together

So how did we miss them? I think it’s mostly a matter of terminology, but we also probably didn’t expect to find much on this unusual chart type in the psychology literature. Steven Franconeri actually came across the papers earlier this year, more or less by chance.

I’m not actually sure where the term *connected scatterplot* even originates. It may have been used by Amanda Cox first, but I’m not sure. I do remember us discussing a few alternatives while working on this project, but none of them ever stuck. Even so, we never thought of calling them *Double Unary Parametric charts.* 

But either way, we should have been aware of this work as a matter of principle. It’s also sad to be missing several papers done by fellow travelers on such an obscure topic. It turns out we weren’t the only ones thinking about these crazy charts – or the first ones.

<hr class="wp-block-separator"/>

Peebles, D., Cheng, P. C.-H., &amp; Shadbolt, N. R. (1999). [Multiple processes in graph-based reasoning](https://peebles.sdfeu.org/papers/pee_che_sha1999.pdf). In M. Hahn, &amp; S. C. Stoness (Eds.). *Proceedings of the Twenty First Annual Conference of the Cognitive Science Society*. Mahwah, NJ : Lawrence Erlbaum. 

Peebles, D., &amp; Cheng, P. C.-H. (2001). [Graph-based reasoning: From task analysis to cognitive explanation](https://peebles.sdfeu.org/papers/pee_che_cogsci2001.pdf). In J. D. Moore &amp; K. Stenning. (Eds.). *Proceedings of the Twenty Third Annual Conference of the Cognitive Science Society*. Mahwah, NJ: Lawrence Erlbaum.

Peebles, D., &amp; Cheng, P. C.-H. (2002). [Extending task analytic models of graph-based reasoning: A cognitive model of problem solving with Cartesian graphs in ACT-R/PM](https://peebles.sdfeu.org/papers/pee_che2002.pdf). *Cognitive Systems Research*, 3, 77-86. 

Peebles, D., &amp; Cheng, P. C.-H. (2003). [Modeling the effect of task and graphical representation on response latency in a graph reading task](https://peebles.sdfeu.org/papers/pee_che2003.pdf). *Human Factors*, 45, 28-46.
