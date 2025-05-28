<a href="http://www.vizworld.com" rel="nofollow noopener" target="_blank">Randall HAnd</a> says…
>	Parallel Coordinates are also available in VisIt.

John says…
>	I realize all the axes go from low on the bottom to high on the top, but wouldn't it be more clear to reverse that for the mpg? Then there'd be less crossing and more visual clarity about the relationship between fuel efficiency and cylinders?
>	
>	(If this were a European chart,you'd be there already, because it would likely be liters required to go100km, rather than mpg, i.e., the effective inverse of the existing axis.)

Robert Kosara says…
>	It depends on how you look at it. If you want higher to be better, the current layout works well, even if there are more crossings. Also, I think that crossings actually help see some of the patterns when the lines cross at close to 90º angles. I also wanted to show the crossing-over, so it works well for the example. But in most programs you can easily flip axes.

<a href="http://carlosscheidegger.wordpress.com" rel="nofollow noopener" target="_blank">Carlos Scheidegger</a> says…
>	(In case you haven't) You should take a look at Heinrich and Weiskopf's Continuous Parallel Coordinates from last year: http://www.vis.uni-stuttgart.de/~weiskopf/publications/vis09_pc.pdf . It is, I think, one of the possible ways of coping with more than a few thousand data points in a well-principled way (and it looks pretty nice). I'd like to see it applied to "discrete" data as well, and the way to do that is simple - one just does "beams" of non-zero thickness lines, and looks at the density per pixel.
>	
>	On an entirely different note, the main problem I have with parallel coordinates is that I think they appear to give a full one-to-one mapping between the R^n datasets and PC plots, but it's not the case. In a sense, you think you're looking at the full n-dimension representation of the data (one line per one full plot), but really you're looking at a semantic equivalent to n-1 scatterplots. 
>	
>	To give a concrete example, there exists two different three-d datasets such that their parallel coordinates plots are the same (under the identity axis ordering): S1 = ((0,2,1), (1,2,3)) and S2 = ((0,2,3), (1,2,1)). I'd like to understand better how to make parallel coordinates-like plots that don't have such issues. I'm sure people have looked at the obvious things like quadratic splines for encoding consecutive dimension triples, etc. but I wonder if there's a better overall approach; I find that does not help much in this situation either. (Oh look, trivial paper idea: select the view for which there's the least amount of "visualization space loss". This must have been done before)

<a href="http://www.theusRus.de/" rel="nofollow noopener" target="_blank">Martin Theus</a> says…
>	There are <strong>three</strong> advanced points that should be added to this post:<br> <br>
>	(i) The Cars data is really tiny, i.e., one of the major problems of parallel coordinate overplotting is no issue here. Parallel coordinate definitely need things like <strong>alpha transparency</strong> in order to be scalable.<br>
>	(ii) (interactive) <strong>Reordering</strong> of the axes is quite crucial. Otherwise you will get stuck with some default order in the dataset, which will make you miss most of the adjacencies - and adjacencies are what shows interesting information in this kind of plot.<br>
>	(iii) The <strong>scaling</strong> of each axis between its min and max value is somewhat arbitrary, as these values are not robust at all. <strong>Alignment</strong> at mean or median, or at some predefined value can make a huge difference in conjunction with individual or common scalings.<br> <br>
>	All these features can be found in e.g. <a href="http://www.theusRus.de/Mondrian">Mondrian</a>, so you may try it out and see yourself.<br><br>
>	PS:<br>
>	Parallel coordinates are a powerful tool, but we should not forget that the good old scatterplot helps much more when we only look at the relationship of two variables - unless you are <a href="http://www.math.tau.ac.il/~aiisreal/">Alfred Inselberg</a>.

<a href="http://www.visualquest.in/" rel="nofollow noopener" target="_blank">Paresh</a> says…
>	Parallel Coordinates is a fascinating technique.
>	
>	I have recently explored the potential of analyzing multi dimensional data using this technique in Excel  on my blog www.visualquest.in  
>	
>	Though I have not dealt with this in my post, it should be easy to re-order the axis. 
>	
>	
>	
>	
>	

<a href="http://www.cs.tau.ac.il/~aiisreal/" rel="nofollow noopener" target="_blank">Alfred Inselberg</a> says…
>	Thanks to Martin Theus for the nice remark. I suggest that  you look at my book
>	
>	Parallel Coordinates - This book is about visualization, systematically incorporating the fantastic human pattern recognition into the problem-solving ... www.springer.com/mathematics/.../978-0-387-21507-5 -
>	
>	especially in Ch. 10 with many examples of multivariate datasets.  To summarize:
>	
>	1. Information is ocncentrated at the "crossings". The key is to find patterns and once they are  discovered much "clutter" can be discarded. 
>	2. The exploration needs to be INTERACTIVE and the misnamed "overplotting problem" usually turns out to be a blessing
>	3. The axis ordering has been studied and there are some neat results.
>	4. Direct exploration does not always work and there are modern methods which overcome many of the difficulties.
>	5. A research effort on Intelligent processing of datasets is proposed to extract
>	multivariate relations and display them as 2-D patterns ("multidimensional graphs") without any display clutter. This is where our efforts are best directed rather than in proposing "variants" (with no underlying geometridal understanding) which have NOT had any notable success IN GENERAL.
>	
>	Best regards
>	
>	AI 
>	
>	.

Luigi says…
>	I perfectly agree with you. 
>	
>	About your idea: I think that it is possible to define some measure for "visualization space loss", especially when having class-labeled data objects. On one hand, one can compute some class separability value within the multi-dimensional space; on the other hand, relying on visual proximities among the polylines (or curves), it is possible to do the same in the 2-dimensional space. The information loss would then be easy to evaluate.
>	
>	In my opinion, I would like to see more sophisticated (and analytical) ways to evaluate and thus propose data projections.

Muhammad Asaduzzaman says…
>	Very good description. Helps me a lot.

<a href="http://www.ppcl.com" rel="nofollow noopener" target="_blank">Robin Brooks</a> says…
>	Industrial users wanting a fully-supported commercial offering of parallel coordinates called CVE and developed over many years starting from Prof. Inselbergs original IBM PVE product should visit www.ppcl.com. And, as Prof Inselberg points out, over-plotting is not a problem.

<a href="http://uphcm.edu.vn" rel="nofollow noopener" target="_blank">Tan Nguyên</a> says…
>	Advantages and limitations of Parallel Coordinates
>	
>	data I use as pharmaceuticals

Many says…
>	Hi Robert,
>	I know this is old but I want to thank you for it anyway.
>	I learned a lot about this kind of visualization and it served me as a point of inspiration to learn more and more important to do this:
>	
>	https://github.com/usmany/paralellData
>	
>	I was able to render the data directly to Illustrator using javascript ;)
>	
>	Thank you very much again

<a href="https:www.ppcl.com" rel="nofollow noopener" target="_blank">Robin Brooks</a> says…
>	The Wikipedia entry lists a number of software products able to create parallel coordinate plots but not PPCL's C-Visual Explorer (CVE) which is probably the most developed and functional product available and is used by many large corporations. We support datasets of 1000+ variables and the number of points is only limited by addressing in  64-bits. The better sizing comparison is based on the product of Rows X Variables. CVE could manage 80M in a 32-bit environment before starting to degrade, we have reached over 120M in a Windows environment and have not yet encountered a maximum. Over-plotting is not a problem when the plot is supported by a built-in boolean query system that, we think, is much easier to use than brushing.
