<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2016/10/vis16-tuesday.jpg" width="720" height="540" /></p>

# VIS 2016 – Tuesday

The official opening of the main conference was today, Tuesday. The conference is now in full swing until Friday.

## Opening

Attendance at the conference is flat – Terry Yoo gave no precise numbers, but at least it's not shrinking. I figure they don't want to release precise numbers in the hope that there's just a bit of statistical fluctuation. It's a bit of a departure from previous years, though.

As in previous years, the opening presentation slides were straight out of the 1980s: blue gradient background, white text. We've moved on from red text on blue background at least, but it still blows my mind how this sort of thing is considered the right choice at a visualization conference. And not even just <em>a</em> visualization conference, but <em>VIS</em>.

## Keynote: Dr. Ricardo Hausmann

<a href="https://www.hks.harvard.edu/about/faculty-staff-directory/ricardo-hausmann">Hausmann is an economist at Harvard</a> and runs the group behind the <a href="http://atlas.cid.harvard.edu"><em>The Atlas of Economic Complexity</em></a>. The Atlas is the embodiment of Hausmann's theory that the wealth gap between nations (and also between regions within countries) can be modeled by network effects.

The talk was really fascinating. Hausmann started by pointing out the enormous gap between countries today (about 250:1 between the richest and the poorest). His argument is that that difference is largely due to technology and the tacit knowledge people have – the kind of knowledge that is not encoded and easily available, but that needs to be acquired by every individual. He also talked about the exponential growth that results from a country making a number of different things that can be combined into many more things (much like Scrabble letters let you make a lot more words when you add just one). That growth depends on the things being technology though (in a wide sense), not natural resources (which are a dead end).

There was a lot more in this excellent talk, but it's a bit too much to describe here.

## InfoVis

InfoVis had 37 papers accepted this year out of 165 submissions, for a 22.4% acceptance rate. This is up slightly from previous years, which is not a bad thing. Pushing too hard on the acceptance rate is not healthy for the field.

<a href="http://va.gatech.edu/vbd"><em>Visualization by Demonstration: An Interaction Paradigm for Visual Data Exploration</em></a> by Bahador Saket, Hannah Kim, Eli T. Brown, and Alex Endert shows an interesting new idea for how to construct visualizations. You show the system what you want to see in terms of encodings, and it figures out how to get there. This works well for things like size encodings, etc., where this would let you explore the data in a very unusual way: rather than trying to find the right measure that leads to what you need, you sketch what you want to see and it finds the fitting data.

It's certainly an unusual idea, but it has some limitations. There are a few interactions that seem a bit odd, like how to indicate that you want a bar chart when you're dealing with a scatterplot (by stacking points in the scatterplot) or the other way around (by moving points out bars).

<a href="https://idl.cs.washington.edu/papers/vega-lite"><em>Vega-Lite: A Grammar of Interactive Graphics</em></a> by Arvind Satyanarayan, Dominik Moritz, Kanit Wongsuphasawat, and Jeffrey Heer received the Best Paper award this year. Vega Lite is a sort of successor to Vega, which allows you to specify visualizations in a declarative way. Vega Lite is much more concise however, because it fills in defaults for things that are not specified, and provides many complex things out of the box (like a selection based on a Voronoi diagram, zooming and panning, brushing, etc.)

Vega is open source, and there is <a href="http://vega.github.io/vega-lite/">an online playground</a> to try it out. This is based on an earlier version than the paper presented though, but they hope to release an updated version soon. They are also seeing others build infrastructure on top of Vega-Lite, like <a href="https://github.com/ellisonbg/altair">a set of friendly Python bindings called <em>Altair</em></a>.

<a href="http://wpivis.github.io/hindsight"><em>HindSight: Encouraging Exploration through Direct Encoding of Personal Interaction History</em></a> by Mi Feng, Cheng Deng, Evan M. Peck, and Lane Harrison shows users their own histories to increase interaction and engagement. This is somewhat similar to the way browsers indicate visited links, but richer and with more of an idea of an Information scent.

Since I'm a bit sick, I ended up only attending a handful of talks and had to skip VisLies and the Art Show opening. Hopefully this will get me back into shape for more extensive reporting tomorrow, though.
