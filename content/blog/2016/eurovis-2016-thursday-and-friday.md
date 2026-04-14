[After Tuesday and Wednesday](/blog/2016/eurovis-2016-tuesday-and-wednesday), EuroVis continued for the rest of the week. There were papers about visualization, interaction, networks, and other stuff, a dinner in a former church, and finally the capstone. 

****First a little update: you can now [watch Anders Ynnerman's epic keynote](https://vimeo.com/groups/383543/videos/169967499).

## Coordinated Views and Interaction Design

Who says coordinated views have to be next to each other? [*Faceted Views of Varying Emphasis (FaVVEs): a framework for visualizing multi-perspective small multiples*](http://www.gicentre.net/favves)** **by** **Roger Beecham, Chris Rooney, Sebastian Meier, Cagatay Turkay, Aidan Slingsby, Jason Dykes, Jo Wood, and BL William Wong challenges that idea by superimposing rather than juxtaposing them. It works well with a map as the base layer, but it's a bit unclear if it would work nearly as well with a different base view. Still an intriguing idea, though.

**In*[ Designing Multiple Coordinated Visualizations for Tablets](http://www.cc.gatech.edu/gvu/ii/touch/),* Ramik Sadana and John Stasko presented ideas for how to interact with visualization applications on tablets. This might seem obvious, but there are many subtleties that make a big difference.

[*Visual Debugging Techniques for Reactive Data Visualization*](https://idl.cs.washington.edu/papers/vega-debugging)** **by Jane Hoffswell, Arvind Satyanarayan, Jeffrey Heer showed how you can debug Vega visualizations. This is particularly interesting because Vega is declarative, which makes debugging even harder than usual. You can try it out [directly in the Vega editor yourself](http://vega.github.io/vega-editor). A good companion to this is Arvind Satyanarayan's [OpenVis talk about Vega](https://youtu.be/Y8Fp9z-9DWc).

## **Time Series Data and Sequences**

**[*There is More to Streamgraphs than Movies: Better Aesthetics via Ordering and Lassoing*](http://yifanhu.net/PUB/StreamGraph.pdf) by Marco Di Bartolomeo and Yifan Hu showed some ideas how to improve the layout of [streamgraphs](http://leebyron.com/streamgraph/), especially for data that has large changes in the different streams. They optimize the baseline wiggle, which leads to cleaner graphs – however, in their direct comparison with the NY Times piece about movies, theirs was cleaner but also much less interesting. This paper won the Best Paper award. [Paper and code are available online](https://streamgraphs.github.io/index.html).

## **Networks and Graphs**

[*Using Visualization to Explore Original and Anonymized LBSN Data*](http://innovis.cpsc.ucalgary.ca/Publications/_GSUViz2016) by** **Ebrahim Tarameshloo, Mona Hosseinkhani Loorak, Philip Fong, and Sheelagh Carpendale presented a tool to compare location-based social network (LBSN) data in both its original and anonymized form. This is useful for the designers of the anonymization algorithms to see how well they work, and to see how much of the original patterns are lost.

## **Multidimensional and Geospatial Visualization**

[*SpaceCuts: Making Room for Visualizations on Maps*](https://bib.dbvis.de/publications/details/668) by Juri Buchmüller, Dominik Jäckle, Florian Stoffel, and Daniel Keim addresses the issue that when you're trying to overlay a visualization on a map, you end up occluding parts of it. To address this, they cut the map and push the pieces apart to create space for the visualization. It works pretty well, at least as long as the visualization part is comparatively small.

*Visualizing Time-Dependent Data Using Dynamic t-SNE* by Paulo E. Rauber, Alexandre X. Falcão, and Alexandru C., Telea showed how to animate t-SNE clustered data over time to make it easier to track the clusters. [Their code is available](https://github.com/paulorauber/thesne).

## **Design, Evaluation, and Applications**

*Judgment Error in Pie Chart Variations* by Robert Kosara and Drew Skau started off this session. This was the short paper in our [pie charts paper package](/papers/a-pair-of-pie-chart-papers). Reaction was positive again, with a number of good questions and some follow-up discussions at the conference dinner later on Thursday.

*Using icicle plots to encode the hierarchical structure of source code *by Ivan Bacher, Brian Mac Namee, John D Kelleher showed a tree visualization and interaction idea for a source code editor to show the hierarchical structure and allow navigation – a bit like a folding editor, but more visual. They have [a demo online](https://dl.dropboxusercontent.com/spa/96msnpkocwnj21h/p-001/public/index.html) (click “Load HTML” and then click around on both sides).

Understanding the impact of publications is important for large research institutions like CERN. In* Visualization of Publication Impact by *Eamonn Maguire, Javier Martin Montull, and Gilles Louppe showed a set of glyphs based on graphs (which Eamonn calls *glaphs*) to show the number of citations of a large set of papers. Their [code and some basic demos are available online](http://inspirehep.github.io/impact-graphs/).

## **Human-Computer Interaction

*Classic Techniques in New Domains: An Alternative Recipe* by Megan Monroe dealt with unusual data: recipes. By creating a sort of flow chart for a recipe, they show prep times to help less-organized cooks not lose their minds.

*Clarifying hypotheses by sketching data* by Mariana Marabou, Alan Blackwell,Advait Sardar, and Martin Spott presented a simple tool for sketching data and showing it in an "uncertain" way to think through an analysis before having the actual data available.

*CompaRing: Reducing Costs of Visual Comparison* by Christian Tominski is a neat idea for comparing elements of a visualization, in particular a map. It lays out the different objects around the one you're comparing with, and shows where they go. You can [play with it online yourself](http://www.informatik.uni-rostock.de/~ct/software/CompaRing/).

## Closing Session and Capstone

[Elmar Eisemann](http://graphics.tudelft.nl/~eisemann/), a professor of computer graphics and visualization at TU Delft, talked about some very impressive computer graphics work he and his group have done. It went a bit far into the realistic computer graphics area, but there were also some interesting examples of cleverly exploiting the limits of our perception to create images to appear to look better than they really are. One example is a panning shot where they can increase perceived quality by only re-rendering the low-frequency components of the scene, and combining them with the high frequencies of the first frame. It was definitely interesting, but a bit too heavy on the computer graphics, in my opinion.

[Next year's conference](http://eurovis2017.virvig.es) will take place in Barcelona, June 12–16.

## Final Thoughts

It was a good conference. Somehow, it just didn't excite me as much as last year's did. There were a good number of solid papers, but none that really knocked my socks off.

It was well organized and went very smoothly. The only thing I didn't like was that the opening and closing sessions were just too long. The analysis of keywords used in reviews went on for way too long and was of little value. The awards ceremony part at the end could also be much shorter and more fun, rather than the awkward affair they almost universally are.

Groningen is a beautiful little town. It's also quite lively, due to the large number of university students (about a third of the population). The conference dinner this time took place in a former church, with fantastic food. It couldn't quite compete with the [convent last year](/blog/2015/report-eurovis-2015) where they made our food by hand, but that's a tough one to follow. The deserts were out of this world, though.
