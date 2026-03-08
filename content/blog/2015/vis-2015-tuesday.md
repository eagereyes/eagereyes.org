<figure><img src="https://media.eagereyes.org/wp-content/uploads/2015/10/vis15-tue-teaser.png" alt="" width="825" height="510"/></figure>

# VIS 2015 – Tuesday

IEEE VIS 2015 started today. The first sessions included network visualization and projections, as well as a panel on the use of color in visualization.

As usual, this is very selective: only the things I happened to see, and of those only the ones I felt strongly enough to mention here. You can follow the conference under the <span class="externalcitation">[#IEEEVIS hashtag on Twitter](https://twitter.com/hashtag/ieeevis)</span>, though that is also biased towards InfoVis and VAST. I haven’t heard a peep from the SciVis cave.

## VIS Running Club

The amazingly well-organized VIS Running Club set out on its first run this morning at 6:30am. You can see the [route we ran here](https://www.strava.com/activities/421307356). We’ll be doing this again tomorrow morning (unless it's raining too hard) and Thursday, so if you missed the fun today, you have another chance!

## Opening Session, Donna Cox

The opening session tends to be pretty formulaic and boring until they get to the keynote speaker. This year was no exception, but they also added a new level of awkwardness. On the plus side, the slides didn’t make me want to poke my eyes out this year.

Also, I need to take credit here for my relentless whining. I sent a long list of specific complaints about the slides, the printed program, etc. to the chairs last year, and – [it worked](https://twitter.com/tamaramunzner/status/656382598860505089)!

The keynote speaker this year was [Donna Cox](http://www.ncsa.illinois.edu/People/cox/), who is a renowned digital artist and very early visualization person. Her work isn’t really the type of visualization usually discussed at VIS, since her interest is in creating imagery and movies that explain scientific facts to general audiences. She had some very interesting points about making things approachable though, and showed some amazing work. Among other things, she was involved in several IMAX movies.

Cox also showed lots of great pictures from the 1980s, including one of Pat Hanrahan (who was then her colleague at UW Madison) in 1983. Also [this cray picture of her on a Cray](https://twitter.com/misslake/status/659002098269442048).

# InfoVis Opening

This year, InfoVis received 178 submissions, of which 38 were accepted, for an acceptance rate of 21.3%. That’s pretty good, and it’s interesting to see the increase in submissions from the previous years. I haven’t seen the numbers for VAST and SciVis, but I’ll eventually update my acceptance rates page here (no link since it’s embarrassingly out of date).

## Projections

*A comparative study between RadViz and Star Coordinates* by Manuel Rubio-Sanchez, Francisco Diaz, Laura Raya, and Alberto Sanchez looked at the differences between the two visualization techniques. It was an interesting analysis that picked apart some of the finer points about how they work and how they are related. Interestingly, rather than running a study, they modeled user behavior and based their analysis on that. I liked the way they went into great depth about how the techniques responded to different data and what use cases made sense for which.

*[Probing Projections: Interaction Techniques for Interpreting Arrangements and Errors of Dimensionality Reductions](http://julianstahnke.com/probing-projections/)* by Julian Stahnke, Marian Dörk, Boris Müller, and Andreas Thom described an interactive tool to look at projections of high-dimensional data and see what the distances actually mean in the original data. This is a common problem that I haven’t seen any solutions for. You can play with the system online, it works nicely in the browser. The presentation was really good too, a number of people on Twitter wondered why this hadn’t gotten at least an honorable mention for the best paper.

## Color Panel

The panel *Color Mapping in VIS: Perspectives on Optimal Solutions* with David Borland, Kenneth Moreland, Bernice Rogowitz, Francesca Samsel, Maureen Stone, and Cynthia Brewer (organized by Thersa-Marie Rhyne, who unfortunately couldn’t make it) discussed various issues around the use of color in visualization.

Many of the topics weren’t exactly new ([rainbow color maps are bad](/basics/rainbow-color-map), etc.), but the room was packed and they covered a lot of ground. It was also interesting to finally see Cynthia Brewer, of [ColorBrewer](http://colorbrewer2.org/) fame, speak at VIS; I don’t think I’d ever seen her before.

One thing I felt they kind of danced around without really addressing it was *why* people in business and science like to use more color than is considered a good idea, including the rainbow color map and repeating color maps. I’ll have some more to say on this in another posting soon.

## Networks

*[SchemeLens: A Content-Aware Vector-Based Fisheye Technique for Navigating Large Systems Diagrams](http://www.gillesbailly.fr/publis/BAILLY_SchemeLens.pdf)* by Aurelie Cohe, Bastien Liutkus, Gilles Bailly, James Eagan, and Eric Lecolinet is an approach to focus+context interaction that lets a user interact with a network diagram to more clearly see items of interest. The work was pretty similar to generalized fisheye views, and I wasn’t entirely clear what the contribution really was. They also had some pretty specific constraints, like keeping connected elements aligned when zooming.

The Best Paper Award at InfoVis this year went to *[HOLA: Human-like Orthogonal Network Layout](http://marvl.infotech.monash.edu/~dwyer/papers/hola2015.pdf)* by Steve Kieffer, Tim Dwyer, Kim Marriott, and Michael Wybrow. They studied how people would actually lay out graphs and derived the criteria for an algorithm for that. There had been work in that direction before ([Like van Ham and Rogowitz’s 2008 InfoVis paper](http://repository.tue.nl/651333)), but that never culminated in an actual algorithm. There are some interesting constraints that they found that usually aren’t considered in laying out graphs, like *gridiness*, symmetry, the layout of tree-like subgraphs on the outside, etc.

## Party!

The day ended (at least for me) with the Utah Party. I missed yesterday's Austrian Party, but there's also the West Coast Party tomorrow night after the banquet. The Utah Party took place at a pub with waitresses in some very well done costumes and a dancing roomba/broom/skull thing ('cause Halloween). We'll see if the West Coast will be able to top that.
