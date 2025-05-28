<a href="http://www.cartogrammar.com/blog" rel="nofollow noopener" target="_blank">Andy Woodruff</a> says…
>	This brings to mind the issue of perceptual scaling in cartography, where proportional symbols are deliberately exaggerated in area to make up for a supposed tendency of people to underestimate areas (of circles in particular).  John Krygier has a <a href="http://makingmaps.wordpress.com/2007/08/28/perceptual-scaling-of-map-symbols/">nice summary of perceptual scaling</a> and the debate over it.  Though there seems to be no consensus on such a thing now, perhaps there are occasions where perceptual accuracy is more important than data accuracy (but then, perhaps we shouldn't give in to it).  I will say that if I were asked to identify a circle twice the size of another circle, without stopping to think first I probably would point to a linearly scaled circle that's actually four times the size.

Robert Kosara says…
>	<p>Good point, there are of course more issues here. But the perceptual scaling is also highly dependent on context (the posting you linked to shows that towards the end), so scaling is very tricky. Perhaps the best bet is to stick to correct sizes and provide mouse-over tooltips &ndash; or simply use a different visual cue than area (which is hard to do in maps, I know).</p>

<a href="http://carlosscheidegger.wordpress.com" rel="nofollow noopener" target="_blank">Carlos Scheidegger</a> says…
>	This scaling issue has always been a pet peeve of mine - and (coming from my scivis background) it always amazes me that there's no discussion in techniques such as Wijk's image-based flow visualization or even in basic things like glyph plots for vector fields.
>	
>	But to bring this back to infovis: has anyone looked at what happens to this perception on parallel coordinates? In particular, I always wonder about the difference in perception with positively correlated variables and negatively correlated ones, since their projected areas are quite different. And in that case, there does not seem to be a simple coordinate transformation that fixes it.

<a href="http://indiemaps.com/blog/" rel="nofollow noopener" target="_blank">Zachary Forest Johnson</a> says…
>	Your point is well taken that visual designers need to be aware of their scaling decisions.  I'm not sure if this means we always need to scale our areal symbols linearly.  Andy brings up a great point above about perceptual scaling.  In the Intro to Cartography class I TA'd for 3 semesters, we'd discuss linear v. perceptual scaling for proportional symbols.  On the upside, perceptual scaling leads to more accurate judgments on average.  Since the research of Stevens and Flannery, though, such corrections have been problematized, as there is very high variance within the population.  While increasing the legibility of a graphic for some, perceptual scaling reduces it for others who estimate area in a more linear fashion.  And if you read William S. Cleveland (1985), he suggests that the "sensible solution to the problem of area judgments is to avoid them."
>	
>	Let's not go that far.  But I do think there are reasons for cartographers and other visual designers to stick to strict linear scaling.  At least this creates a common baseline, and may lead users to actually improve their estimations as they use charts and maps by different authors (esp. if, as you suggest, the graphic is interactive and the user is able to check their estimates against exact values).  If these different charts all utilized different scaling methods or exponents, though, users would constantly have to estimate areas in different ways to form accurate judgments.
>	
>	One final note on the graphic that starts out your post.  I agree that the symbols aren't correctly scaled by area.  But they are scaled correctly by height, which is a more effective visual variable anyway.  This only works if the user is aware of the scaling method, and is able to separate the width and height dimensions of the symbol (considering the width dimension in this case to just be noise).  And I think it's an open question as to whether we can effectively do this.  But this type of scaling is used in tag clouds, in which the height of the symbol is to be read, not the overall area of the text.  This is something I talk about <a href="http://indiemaps.com/blog/2008/04/how-tag-clouds-work/">here</a>.
>	

<a href="http://indiemaps.com/blog/" rel="nofollow noopener" target="_blank">Zachary Forest Johnson</a> says…
>	In that last paragraph, I'm referring to the second image in your post (the Princeton-produced one), not the "graphic that starts out your post".

Robert Kosara says…
>	<p>The problem with that first chart especially is that the different shapes are difficult to compare. Look for example at the difference between KFC and Wendy's: the boxes are essentially the same size, the only thing that goes higher is the little "head" on the Wendy's logo. Are you really comparing the heights or are you looking at the overall size (which is much closer to area). The correct thing to do here would be to use a boring old bar chart and put the logos below the bars as labels.</p>
>	<p>Also, regarding tag clouds: those are a particularly poor visualization in my humble opinion. They may give you a rough idea of which words occurred most frequently, but it's very hard to compare them. Also, the folks at Many Eyes use the <a href="http://manyeyes.alphaworks.ibm.com/blog/2007/03/06/sometimes-a-picture-is-a-thousand-words/">square root to scale the words</a> because of the area perception. In addition, these also have a bunch of other problems, like overemphasizing long words and words with few synonyms, not counting compound words, etc.</p>

<a href="http://indiemaps.com/blog/" rel="nofollow noopener" target="_blank">Zachary Forest Johnson</a> says…
>	I had no idea Many Eyes used area scaling on their tag cloud symbols.  Very interesting!  But I wonder how effective they are, as the vast majority of the tag clouds we encounter do use font size (so word height, not area) to convey # of occurrences.  Many Eyes may be more theoretically correct, but I wonder how they'd stand up to empirical testing.  Of course, I'm not saying that designers need to continue using ineffective representations just because they are ingrained, but the consequences of making users relearn a symbology they're pretty familiar with should be considered as well.
>	
>	I agree that the problem with the Princeton graphic is the use of irregular and complex shapes to represent quantitative data.  But I doubt the graphic would be any easier to read if the same symbols were scaled correctly by area.  With such complex shapes, accurate area estimations would be nearly impossible.  Agreed, though — a bar chart, utilizing the viz variable of length but without the confusing noise of varying widths, would do just fine here.

Robert Kosara says…
>	<p>I don't think we're anywhere near understanding the perceptual and cognitive issues of the visualizations we use. There is a lot more work to be done to have a decent basis for not just producing visualizations, but actually knowing what to look for when trying to find specific structures.</p>

<a href="http://www.cartogrammar.com/blog" rel="nofollow noopener" target="_blank">Andy Woodruff</a> says…
>	<em>"the confusing noise of varying widths"</em>
>	
>	Indeed, why vary the symbols in two dimensions when the data only vary in one?  That to me seems like the first problem with the fast food chart.

<a href="http://PeltierTech.com/WordPress/" rel="nofollow noopener" target="_blank">Jon Peltier</a> says…
>	Area scaling is definitely a problem. I deal mostly with Excel graphics, and among the most popular chart types is the pie chart, with donut charts a close second. I think radar charts are not as popular, because they're lower in the options, and users don't scroll that far.
>	
>	One option to include the logo with the data is to make a bar chart that is built up of a stack of logos, where the number of logos is proportional to the value. A tall stack of golden arches might be frightening.
>	
>	The better option is either a logo below the base of the bars, or above the top end of the bars. Or make a chart with horizontal bars, with the name spelled out along the vertical axis, and the logo to the right of the appropriate bar.
>	
>	Using the logo as a category indicator is less likely to misrepresent the information in the chart than trying to scale the logo in some way to capture the value.

Joe Mako says…
>	Is there software available that generates a Coxcomb Chart or a Polar-Area Diagram?

Joe Mako says…
>	While trying to find a way to generate a coxcomb chart, I came across this article (http://dd.dynamicdiagrams.com/?p=428), it shows that Florence Nightingale did not represent the number of deaths on area, but actually the radius, and therefore, it was deceptive.

Robert Kosara says…
>	<p>I just came across <a href="http://www.sciencenews.org/view/generic/id/38937/title/Math_Trek__Florence_Nightingale_The_passionate_statistician">this article</a> that says that she did it wrong in the beginning, but then corrected her mistake. I read somewhere else that she got this right, though I can't point to a source right now. So I think I'll stick to the story of scaling by area.</p>

<a href="http://indiemaps.com/blog/" rel="nofollow noopener" target="_blank">Zachary Forest Johnson</a> says…
>	I don't know of any software, tho I've created Actionscript 3 code, which can be used on many platforms with the free Flex SDK: http://indiemaps.com/blog/2008/10/nightingales-roses-in-actionscript-3/

Silvina says…
>	Haven't read all the comment, but if we think how perception is logarithmic, then it makes sense to give up linearity. I guess it will depend on the application, but it should maybe be explicited.

lewis says…
>	objects may be larger/smaller than they appear
