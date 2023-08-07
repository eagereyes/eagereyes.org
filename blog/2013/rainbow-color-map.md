---
title: "How The Rainbow Color Map Misleads"
description: "Colors are perhaps the visual property that people most often misuse in visualization without being aware of it. Variations of the rainbow colormap are very popular, and at the same time the most problematic and misleading."
date: 2013-07-07 20:12:19
tags: attention
featuredImage: https://media.eagereyes.org/wp-content/uploads/2013/07/evapotranspiration-legend.jpg
---

# How The Rainbow Color Map Misleads

Colors are perhaps the visual property that people most often misuse in visualization without being aware of it. Variations of the rainbow colormap are very popular, and at the same time the most problematic and misleading.

The rainbow color map is based on the colors in the light spectrum, and is sometimes done correctly, sometimes the colors are in the wrong order. Quick, name the colors in the rainbow in order! See, that's part of the problem. Even if they were used consistently, nobody would know the right sequence anyway. Here is an image to jog your memory, <a href="https://en.wikipedia.org/wiki/Rainbow">courtesy of Wikipedia</a>.

<p align="center"><img class="aligncenter size-full wp-image-2439" alt="Rainbow" src="https://media.eagereyes.org/wp-content/uploads/2013/07/rainbow.png" width="372" height="53" /></p>

Now take a look at this map from <a href="http://onlinelibrary.wiley.com/doi/10.1111/jawr.12010/full">a paper on water resources published in the <em>Journal of the American Water Resources Association</em></a>, which I found on <a href="http://cliffmass.blogspot.com/2013/06/evaporation-versus-precipitation-which.html">Cliff Mass’s fantastic weather blog</a>. It describes the amount of evapotranspiration (loss of rain water through evaporation) by county for the 48 contiguous U.S. states.

<p align="center"><img class="aligncenter size-medium wp-image-2429" alt="Evapotranspiration Map" src="https://media.eagereyes.org/wp-content/uploads/2013/07/evapotranspiration-map.jpg" width="600" height="483" /></p>

Do you see the how the country is divided down the middle? The Eastern half seems to be all dark green and blue, while the Western half is all light greens, yellow and orange. Surely, there is a huge difference between the two.

But let’s take a closer look at the legend.

<p align="center"><img class="aligncenter size-full wp-image-2427" alt="Evapotranspiration Legend" src="https://media.eagereyes.org/wp-content/uploads/2013/07/evapotranspiration-legend.jpg" width="478" height="193" /></p>

As it turns out, the values change smoothly, but the colors do not. There are two problems here: abrupt changes in luminance (perceived brightness of a color) as well as switching between different hues.

## Luminance

The combination of smoothly varying and abruptly changing luminance makes it appear as if there were clearly defined regions on the map. A version of the legend that only shows luminance, without hue, makes this a bit more obvious.

<p align="center"><img class="aligncenter size-full wp-image-2428" alt="Evapotranspiration Legend Gray" src="https://media.eagereyes.org/wp-content/uploads/2013/07/evapotranspiration-legend-gray.jpg" width="478" height="193" /></p>

The color for 0.3–0.39 is darker than the neighboring colors, the luminance for 0.5–0.59, 0.6–0.69, and 0.7–0.79 is virtually the same, and then there is a big jump to 0.8–0.89. The step size in terms of the data is no different, it’s simply an artifact of the color scheme.

## Hue

What is more, the hue changes. As I have explained before, <a href="/blog/2011/you-only-see-colors-you-can-name">color names influence our perception of color</a>. So let’s look at the full-color version of the legend again, and enumerate the hues.

<p align="center"><img class="aligncenter size-full wp-image-2427" alt="Evapotranspiration Legend" src="https://media.eagereyes.org/wp-content/uploads/2013/07/evapotranspiration-legend.jpg" width="478" height="193" /></p>

<ul>
    <li><strong>White</strong> (0.0–0.09). That’s a really odd choice to start with, since the background of the map is also white, and non-colors like white, black, and gray should be used for special values like missing data, etc. But that’s a topic for another posting.</li>
    <li><strong>Pink</strong> (0.1–0.19 and 0.2–0.29). These two by themselves would be okay.</li>
    <li><strong>Purple</strong> (0.3–0.39). Different color, also much darker.</li>
    <li><strong>Blue</strong> (0.4–0.49 and 0.5–0.59). Different color again, and the ramp is going in the opposite direction from the pinks, with the brighter color now representing the higher value.</li>
    <li><strong>Green</strong> (0.6–0.69 and 0.7–0.79). Different color again, and the two are virtually the same.</li>
    <li><strong>Greenish yellow</strong> (0.8–0.89). Another switch in hue, and this time also a dramatic jump in luminance, for no discernible reason.</li>
    <li><strong>Yellow</strong> (0.9–0.99). Hue number seven, and we’re not done yet.</li>
    <li><strong>Orange and brown</strong> (1.0 and above). I’ll make this easy by lumping the final brown in with the oranges, even though you might argue that they are different colors (brown is actually just very dark, desaturated orange, but it still has its own name).</li>
</ul>

So there are eight distinct hues here, sudden jumps in luminance, and the luminance doesn’t even change in a consistent direction. This is a beautiful example of a terrible color map, and one that is incredibly common in the scientific literature.

There are certainly reasons for using more than one hue. If there are ranges of values that are meaningful and important for the discussion to be able to differentiate. Or if there is an inherent distinction, say above and below freezing for temperatures. But there is no indication of that here.

## Why Rainbows?

Given the issues, why are the rainbow colormap and its variants so popular? I think the answer is quite simple: it’s attractive. Using a single hue to show the data would be reasonably effective, but much less interesting to look at. What is more, if you’re looking to read off the individual values, the smooth ramp is actually worse because you can’t look for a particular hue anymore. The cost is that you create lots of artifacts in the map, though.

<p align="center"><img class="aligncenter size-full wp-image-2435" alt="Color Ramp" src="https://media.eagereyes.org/wp-content/uploads/2013/07/color-ramp.png" width="198" height="25" /></p>

There is a case to be made for color maps that have more than one or two hues, but that do not produce the sort of issues seen in this example. One approach is to use a color map where the luminance is constant or monotonically increasing (meaning, it never changes direction). Constant luminance leads to very dull colors, but a well-designed color map with increasing luminance can look quite attractive. ColorBrewer has a few of those, at least for two colors.

## Alternatives

Everybody in visualization knows <a href="http://colorbrewer2.org">ColorBrewer</a>. Everybody. It’s almost silly to link to it again here, because it’s so widely known. And yet every year, there are again papers that use horribly bad color maps. ColorBrewer requires some care when using, but it has explanations to help pick a good color map. ColorBrewer colors tend to be available in many visualization packages (D3, etc.), though mostly the categorical variants.

There is also <a href="https://kuler.adobe.com/">Adobe’s Kuler</a>, which lets you design color palettes, but which requires some knowledge to use well. There are also many attractive color schemes to explore on that web site, but those were not designed for data visualization.

A paper many people have heard of, but few have read, is <a href="http://ieeexplore.ieee.org/xpl/articleDetails.jsp?arnumber=4118486">Borland and Taylor’s <em>Rainbow Color Map (Still) Considered Harmful</em></a>. They use synthetic data to show the issues, and go into more detail than I have done here, but I think the effect is much more impressive when it’s shown with a real example published in a science journal.

When mapping a continuous value, a ramp with a single color is always a safe choice. It may not look exciting, but at least it does the data justice. Anything beyond a single hue needs to be done deliberately, and not just to liven up a boring-looking image.

## Conclusions

Despite its importance for perception and visualization, color continues to be a surprisingly little understood topic. People often seem to be content with default colors, or with an arbitrary selection that just happens to look good. But without great care when picking colors, you can do a lot of damage to your visualization.


_Posted by <a href="/about">Robert Kosara</a> on July 07, 2013_


<aside class="comments">

---
## Comments

<a href="http://steveharoz.com" rel="nofollow noopener" target="_blank">Steve Haroz</a> says…
>	Great post. I just thought I'd point out Cube Helix (http://www.mrao.cam.ac.uk/~dag/CUBEHELIX/cubetry.html). It's a color map that gradually increases luminance while varying hue.

<a href="http://www.cvast.tuwien.ac.at/~bilal" rel="nofollow noopener" target="_blank">Bilal</a> says…
>	Very nice examples and arguments against RainBow color map.
>	
>	As for ColorBrewer, it is surely a great tool to select good color scale.
>	But sometimes its categorical scales are suboptimal especially on geographical maps. A recent work proposes a perceptually-driven visibility optimization for these scales.
>	http://dx.doi.org/10.1109/TVCG.2012.315

<a href="http://cscheid.net" rel="nofollow noopener" target="_blank">Carlos</a> says…
>	Steve, the Cube Helix is a funny colormap. It "solves" the problem in that is provides a luminance axis on which the colormap is perceptually monotonic. But what, then, is the hue doing? I'm aware that the Cube Helix even does the right thing as far as hue rotations go, which is to do it through a (n approximately) perceptually-uniform color space; But I would argue then that the Hue does nothing favorable in that case. 
>	
>	In the best case, it is redundant (and while I've heard, and been taught, and taught :), that redundant cues are a good thing, I don't think I've ever seen good arguments and user studies actually attesting to that effect). In the worst case, it *distorts* the good perceptual uniformity of the luminance scale.
>	
>	Why is that? The issue is that the hue-rotation in Cube Helix (and in Polar LUV and other decent hue-based colorspaces) is only *locally* perceptually uniform. It doesn't change the fact that hue is essentially a parameterization of a circle, and, as such, you will always find three points within equal distances of each other. There is never such a thing in the real line, where for every three points a &lt; b &lt; c, d(a, c) = d(a,b) + d(b,c). Luminance gives this precisely; hue will *never* do it exactly, and will only do it approximately when hue changes are small (and hence not useful for perceptual encoding).
>	
>	As far as I am aware, there really is no good reason to use Hue in totally-ordered linear encodings. You *might* have a good reason to do it when you want to encode directions. Even there, there&#039;s good reasons not to do it, but then it&#039;s a different story, and I&#039;m not about to threadjack Robert&#039;s post any further :)

<a href="http://steveharoz.com" rel="nofollow noopener" target="_blank">Steve Haroz</a> says…
>	Carlos. While I agree that hue would be redundant, using a luminance map (black-&gt;white or white-&gt;blue) may not be the most aesthetically exciting choice (as Robert said). So, if a rainbow colormap is misleading because the luminance is all over the place, fixing the luminance inconsistency should negate the perceptual problems. As for the dimensional wrapping issue, again luminance disambiguates it. There's no evidence that redundant hue is harmful (in fairness, there's no evidence the other way either). However, if the commonly cited problems with a rainbow colormap are solved, why not use redundant hue to make a vis look better? The general question of harm or benefit of aesthetic choices is a topic that could go on forever ;)

<a href="http://theresamarierhyne.com/Theresa-Marie_Rhynes_Viewpoint/Blog/Blog.html" rel="nofollow noopener" target="_blank">Theresa-Marie Rhyne</a> says…
>	Thanks for this post on Rainbow color maps. 
>	
>	You note a very interesting example in the usage of color.  There are 13 discrete fraction of precipitation values that systematically increase in numeric progression.  This is a challenge for any color palette to handle.
>	
>	One question to ask would be if that many discrete values are needed for the data visualization.  
>	
>	ColorBrewer goes up to 11 discrete colors for a transitional color palette called a diverging color palette. See:  http://colorbrewer2.org/
>	
>	Color Brewer also has an option for 12 discrete colors under their "qualitative" option but this is not a transition of color palette like a rainbow color palette.  Rather the qualitative option is appropriate for categorical data and not data that has a systematic progressive change in numerical values.
>	
>	To see an example that could work and is colorful, go to colorbrewer, select 11 as the number of data classes, select the diverging option as the nature of your data, click on the colorblind safe option, select the RdYlBu color map.  It might be possible to add two more colors in the palette to get 13... but it might be more optimal to have discussions with the researchers about the data and their desire to have their specified 13 data ranges.
>	
>	Here is a URL to an image of this example of 11 discrete colors from Colorbrewer:
>	
>	http://theresamarierhyne.com/Theresa-Marie_Rhynes_Viewpoint/Blog/Entries/2013/7/10_Entry_1.html

<a href="http://twitter.com/rsimmon" rel="nofollow noopener" target="_blank">Rob Simmon (@rsimmon)</a> says…
>	There is, in fact, a good reason to vary hue as well as luminance: it ameliorates some of the effect of nearby colors influencing one another (simultaneous contrast). See Colin Ware's work: Color sequences for univariate maps: theory, experiments and principles http://dx.doi.org/10.1109/38.7760  (among others). If the hues are carefully chosen and the transitions are calculated in perceptual color space,  it can significantly improve a visualization.

<a href="http://forthgo.com/blog/" rel="nofollow noopener" target="_blank">Xan Gregg</a> says…
>	Carlos, I think there is *some* value in small hue variation, such as yellow-green-blue: it extends the range of distinguishable colors. Or to put it in mathematical terms, the length of the curve through LUV space is longer if hue is varied. Yes, you do give up some global perceptual uniformity, but you can at least maintain local perceptual uniformity with a smooth curve. Global perceptual seems dubious anyway in a graph with lots of colors given how much color perception depends on context.
>	
>	More generally, thanks to Robert for writing on this subject. It has been vexing to me why rainbows are so common, even among "professionals". (It seems half the papers at VisWeek use rainbow color maps.) I think prettiness is only part of the appeal. Another part is the high range of distinguishable values, and another is that the categorical banding effect adds interest (even if misdirected). 
>	
>	Some scientists also cite their years of training in which they have internalized the ROYGBIV light frequency spectrum, but I don't think that overcomes millions of years visual evolution and doesn't explain why so many rainbow variations exist with few faithfully mimicking the color spectrum.

CB says…
>	"What is more, if you’re looking to read off the individual values, the smooth ramp is actually worse because you can’t look for a particular hue anymore."
>	What's the solution in this case where someone wants to actually be able to pick out rough values from a visualization? Use some colors like yellow-green-blue? How many can one use?

derek says…
>	Bernice Rogovitch and Roger Treinish, of PRAVDAColor, suggest a small limited arc around the color circle can help, and I agree.
>	So red/orange/yellow, or green/cyan/blue is okay: the fact that it's an incomplete arc of the color circle gets round the problem that a complete circle has no inherent direction, and the limited length of the arc avoids some of the cliff problems (but beware of yellow). As the previous commenters say, it helps if you can see a small hue change as well as just a luminance change. I've been in meetings where managers can use our shared knowledge of color names to say "see that blue bit?", where they would struggle to describe a luminance level.

<a href="http://cscheid.net" rel="nofollow noopener" target="_blank">Carlos</a> says…
>	My typical answer for a static visualization (that is, a plain old .JPG file) would be to use contour lines and a legend, or even writing the values themselves in a few carefully picked places throughout the map.
>	
>	In my view the best answer, if you have modern tooling, is to show the value interactively when you click on some spot on the map.

<a href="http://www.ifweassume.com" rel="nofollow noopener" target="_blank">James Davenport</a> says…
>	I've been a big proponent of CubeHelix for a few years now! I think the default settings are actually not that visually appealing, but the general parameterization through the "helix" allows you to vary the color scheme trivially. The added benefit of being easier for colorblind people to use makes it even better!

<a href="http://charlbotha.com/" rel="nofollow noopener" target="_blank">Charl Botha</a> says…
>	I feel in this case I may mention the short post written my Noeska Smit on the medvis.org blog: http://medvis.org/2012/08/21/rainbow-colormaps-what-are-they-good-for-absolutely-nothing/
>	
>	The post has been a great help in nudging members of the biomedical community in the right direction. :) (at ISBI 2010 in Rotterdam I stopped counting rainbow colourmaps after the first morning...)

<a href="http://gravatar.com/ljegou" rel="nofollow noopener" target="_blank">Laurent Jégou</a> says…
>	Hello, thanks for this paper, always a useful reminder. In the french cartographic "tradition" we often rely on the "Semiology of graphics" by J. Bertin to choose color gradients.
>	
>	However, to help colleagues cartographers  and students, i developed an online tool to visualize colors relations (gradient structure) and proportions of an image : 
>	
>	http://www.geotests.net/couleurs/frequences_en.html
>	(Works locally, no upload required, execution by the browser).
>	
>	With it, one can summarize the use of color in an image. It's based on the HSL color wheel, and proportions are represented by proportional symbols.
>	
>	I'm preparing a paper about that tool, i'll be happy to have comments and suggestions, thanks!

<a href="http://theresamarierhyne.com/Theresa-Marie_Rhynes_Viewpoint/Blog/Blog.html" rel="nofollow noopener" target="_blank">Theresa-Marie Rhyne</a> says…
>	Hi Laurent:  
>	
>	I found your tool to be interesting in regard to the Rainbow Color Map discussion.  I used your tool on an example of a color blind safe Rainbow Color Map I created for a prior Visualization Project at the Scientific Computing and Imaging Institute at the University of Utah.
>	
>	In analyzing the final set of images with your color proportions analysis tool, it was found the the color proportions resulted in a complementary color distribution.  With the other colors in the rainbow palette having a much small proportion in the color distribution.  So it could be argued that while a Rainbow type color map was used, the net effect on the visualization was a complementary color distribution.  
>	
>	Here is an the entry to my Blog that show this example:
>	
>	http://theresamarierhyne.com/Theresa-Marie_Rhynes_Viewpoint/Blog/Entries/2013/7/24_Color_Proportions_Analysis_Tool.html
>	
>	Interesting results.
>	
>	Smiles.... Theresa-Marie

<a href="http://www.geotests.net/blog" rel="nofollow noopener" target="_blank">Laurent Jégou</a> says…
>	Thanks for this interesting use case, indeed, Theresa-Marie.
>	
>	Your visualization seems to show nearly dichotomic situations (i can't read the little texts at this resolution). They are represented by two opposite/complementary colors, perhaps their hue difference is an evocation of their meaning difference. I don't know if its by chance or by design.
>	
>	The principles established by Bertin link the type of variable relation to the type of color relations. As such, difference is represented by hue difference, gradation or progression by saturation/luminosity gradients. It corresponds to the perception principles, cf. Colin Ware's or Stephen Kosslyn books.

<a href="http://theresamarierhyne.com/Theresa-Marie_Rhynes_Viewpoint/Blog/Blog.html" rel="nofollow noopener" target="_blank">Theresa-Marie Rhyne</a> says…
>	Hi Laurent:
>	
>	Thanks for your comments as well.  Your tool verified the color pallette design of the visualization.  We developed a color blind safe rainbow colormap and were very aware we would have a dichotomic situation in regard to the display of the data. 
>	
>	Your tool is the first effective tool at presenting this intentional design of the visualization.  It was a thrill to see it depicted.
>	
>	Smiles.... Theresa-Marie

<a href="http://theresamarierhyne.com/Theresa-Marie_Rhynes_Viewpoint/Blog/Blog.html" rel="nofollow noopener" target="_blank">Theresa-Marie Rhyne</a> says…
>	Hi Laurent:
>	
>	Per your request, I added an enlarged detail of the my color example in a recent Blog entry at:
>	
>	http://theresamarierhyne.com/Theresa-Marie_Rhynes_Viewpoint/Blog/Entries/2013/7/25_Color_Proportions_-_Detail_of_Complementary_Analysis.html

<a href="http://www.geotests.net/blog/" rel="nofollow noopener" target="_blank">ljegou</a> says…
>	Hello, thanks for the update, Theresa-Marie, i fully understand, now. It's nice to see a real use for the tool, i was hoping it could be helpful out of my own teaching :-)
>	
>	Inspired by a remark from Robert Kosara on Twitter, i updated the tool to include an option to change the axes on the circle, between HSL and HLS, and added labels to those axes.

<a href="http://theresamarierhyne.com/Theresa-Marie_Rhynes_Viewpoint/Blog/Blog.html" rel="nofollow noopener" target="_blank">Theresa-Marie Rhyne</a> says…
>	Hi Lauret:
>	
>	Last week, I found a mountain plot visualization of Ozone concentrations that I did in the early 1990s while a government contractors at the US Environmental Protection Agency's Scientific Visualization Center.  We used a rainbow colormap.  It seemed like a fun notion to run your color proportions tool on the Ozone "Rainbow color map" visualization.
>	
>	Here is a URL to the results: http://theresamarierhyne.com/Theresa-Marie_Rhynes_Viewpoint/Blog/Entries/2013/8/2_Rainbow_Colors_and_Color_Portions.html
>	
>	The distribution of color is very much what was expected in our design of the visualization.  
>	
>	Thanks so much for your very insightful tool.  I am continuing to use it to examine previous and future work.
>	
>	Additionally, thanks to Robert for this terrific Blog post that resulted in many thoughtful comments.
>	
>	Smiles.... Theresa-Marie

<a href="http://www.geotests.net/blog" rel="nofollow noopener" target="_blank">ljegou</a> says…
>	Hi, it's really nice to see an useful usage of my tool :-)
>	
>	Following an idea of our host Robert Kosara, I just added the option to choose the colorspace for the color difference computation. In addition to the YUV default you have now the possibility to choose HSV, CIE L*a*b* and CIE L*u*v* (with a D65 white point).
>	
>	I thinks now its complete ! ;-)

<a href="http://gravatar.com/sojosol" rel="nofollow noopener" target="_blank">sojosol</a> says…
>	I'm interested in how we accommodate for accessibility in all of this. How do we create useful color schemes that can still be used by people with visual impairments like color-blindness and age-related changes in visual acuity and contrast sensitivity. Any suggestions and/or recommendations for further reading?

<a href="http://theresamarierhyne.com/Theresa-Marie_Rhynes_Viewpoint/Blog/Blog.html" rel="nofollow noopener" target="_blank">Theresa-Marie Rhyne</a> says…
>	Hi, there are a number of tools that allow for evaluating how effective a infographic or visualization is viewed by individuals with color blindness.  Vischeck simulates Color Blindness Vision and lets one enter a particular image to evaluate how a given image is viewed by individuals with particular color blindnesses: http://www.vischeck.com/vischeck/
>	
>	Colorbrewer has a "colorblind safe" option that can be selected to limit the color schemes if it is desired to address this particular issue with the provided ColorBrewer maps: colorbrewer2.org.
>	
>	Color Scheme Designer provides a Colorblind menu option to address various types of color blindness: http://colorschemedesigner.com/

<a href="http://www.geotests.net/blog" rel="nofollow noopener" target="_blank">ljegou</a> says…
>	Hi Sojosol, Cynthia Brewer, the author of the online tool ColorBrewer, has published a paper about this tool, with references about colorblind accessibility :
>	https://www.researchgate.net/publication/7315054_Basic_mapping_principles_for_visualizing_cancer_data_using_Geographic_Information_Systems_%28GIS%29
>	
>	There are several papers on the topic in Human Factors and Ergonomics journals : http://hfs.sagepub.com/content/35/1/71.short and Computer Science : https://dl.acm.org/citation.cfm?id=1389291

... says…
>	<blockquote>Cube Helix even does the right thing as far as hue rotations go, which is to do it through a (n approximately) perceptually-uniform color space</blockquote>
>	
>	I don't think that's right.  The "cube" in cubehelix is RGB space, so it's not a perceptually-uniform color space.  Would be improved by using a helix in Lch space, I think.

</aside>

