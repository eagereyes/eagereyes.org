---
title: "SPSS Viz Designer"
description: "SPSS recently released their new Viz Designer, a visualization engine built on Leland Wilkinson's work (The Grammar of Graphics and nViZn). The comparison with&nbsp;Tableau&nbsp;is unavoidable since both are based on the same underlying ideas. Right now, Viz Designer does not look good in that comparison.&nbsp;"
date: 2008-09-13 20:30:40
tags: criticism
featuredImage: https://media.eagereyes.org/media/2008/vizdesigner.jpg
outline: false
---

# SPSS Viz Designer

<p align="center"><img src="https://media.eagereyes.org/media/2008/vizdesigner.jpg" border="0" alt="SPSS Viz Designer" /></p>

SPSS recently released their new <a href="http://www.spss.com/VizDesigner/">Viz Designer</a>, a visualization engine built on Leland Wilkinson's work (<em><a href="http://www.amazon.com/Grammar-Graphics-Statistics-Computing/dp/0387245448/">The Grammar of Graphics</a></em> and <a href="http://www.spss.com/research/Wilkinson/nViZn/nvizn.html">nViZn</a>). The comparison with&nbsp;<a href="http://tableausoftware.com/">Tableau</a>&nbsp;is unavoidable since both are based on the same underlying ideas. Right now, Viz Designer does not look good in that comparison.&nbsp;

In fact, it would be easy to slam the program. The user interface has a certain engineering look to it that reminds me of early GUI programs. There is also very little exploration and basically no interaction with the created graphics. There is also very little intelligence about the data, like detection of categorical vs. continuous dimensions. But then, the program is built on a very powerful basis and there is a large enough organization behind it to carry it over the first few, rough, releases. And there is also room for a different approach than Tableau, even though I think they're doing a lot of things right.

One feature the folks who demoed the program for me stressed quite a bit is how the look and feel of a graph can be stored as a stylesheet and applied to other graphs to provide a unified look across a corporation. In a similar vein, visualization specifications can be stored as templates and applied to different data (with some restrictions that can be defined in the program). Both are integrated with a server, so that central maintenance of stylesheets and templates is possible, and users always access the latest versions.

Templates become a part of the library of visualizations that the program offers when the user opens a dataset and selects dimensions to be shown. This is an advantage and a disadvantage at the same time. While it makes good use of the underlying engine and provides the means for users to seamlessly extend the library of visualization templates, it also means that Viz Designer's elementary unit is a single chart. This is quite unlike Tableau, where it is easy to switch between visualizations, add new ones on additional pages, and combine them into dashboards. Viz Designer graphs can be saved as images or be embedded in SPSS documents and edited directly from there (by double-clicking the image).

The most obvious feature in Viz Designer is that the bottom half of the window is filled with code that describes the visualization in what SPSS calls VizML (Tableau calls their definition language VizQL) or GPL (the language defined in <em>The Grammar of Graphics</em>). The idea is that power users would be able to create or modify graphs directly in that language. While SPSS undoubtedly has users that are comfortable with programming and know its language very well, I have my doubts if those same users would be able to use a complex, declarative language to define visualizations. And even if, how visually effective will those be? Tableau steers the user in a way that makes it difficult to produce bad visualizations, and its user interface is powerful enough to allow a lot of flexibility without the need for tinkering with VizQL (though that would undoubtedly be a cool feature).

Viz Designer was made for producing graphics as the result of statistical analysis. As such, it does not currently have any exploratory tools. While this might be enough for people used to working with static graphs, it is a striking omission to somebody who is used to more interactive work. The ease with which the visualization can be changed, different dimensions added and removed, and especially the hierarchical layout of categorical dimensions (and the hierarchical treatment of time) make exploring a dataset in Tableau fun and interesting. None of that is currently possible in Viz Designer, and even something as basic as stacked dimensions on an axis requires some tricks or VizML hacking.

One area were Viz Designer is clearly ahead is its integration with SPSS. While that might seem obvious, it offers a vast array of data analysis capabilities and of course also allows them to tap into their existing user base. SPSS is also planning on hosting a repository of user-contributed templates on its website, so they will be able to learn from others and presumably discuss their creations. That is undoubtedly a good idea, and one that even Tableau could learn from (though to be fair, they have <a href="http://www.tableaucustomerconference.com/">their own user conference</a>).

Exposing the underlying engine and definition language is also interesting and might lead to some really interesting things. Involving their users is also a good thing and will certainly get people interested. In terms of features and interaction they still have a long way to go, though, and time will tell if Viz Designer can be more than a static back end to the actual (non-visual) analysis.


_Posted by <a href="/about">Robert Kosara</a> on September 13, 2008. Filed under [criticism](/section/criticism)._


