---
title: "A Critique of Chernoff Faces"
description: "Chernoff Faces are discussed in every information visualization course, and are referenced in many papers that talk about glyphs. Yet the only serious use of faces in visualization is for calibration, not for data display. Faces are so special that we better know their perceptual properties really well before we can use them, which we don't."
date: 2007-02-25 12:59:13
tags: criticism
featuredImage: https://media.eagereyes.org/media/attachments/ChernoffFaces1.png
---

# A Critique of Chernoff Faces

<p align="center"><img title="Chernoff Faces" src="https://media.eagereyes.org/media/attachments/ChernoffFaces1.png" alt="Chernoff Faces" width="541" height="205" border="0" /></p>

Chernoff Faces are discussed in every information visualization course, and are referenced in many papers that talk about glyphs. Yet the only serious use of faces in visualization is for calibration, not for data display. Faces are so special that we better know their perceptual properties really well before we can use them, which we don't.

Chernoff's <a href="#chernoff">paper from 1973 [1]</a> proposed simplified face shapes to represent a number of variables in a data set, by mapping numbers to the size and curvature of the face, position of the eyes, length of the nose, position of the mouth, etc. Chernoff claims that up to 18 data dimensions can be displayed with the method, allowing the user to visually cluster the data. These faces are a type of <em>glyph</em>, a graphical object whose properties represent data values.

## Face Perception

Let's assume your best friend is not sitting right in front of you. Can you precisely describe his or her face? Can you describe the differences between the faces of your two best friends so that a stranger would be able to tell them apart?

Face perception works in a holistic and hierarchical way. We do not see a nose, ears, eyes, eyebrows, etc., and then piece them together (at least not consciously). Rather, we recognize a person. The face is so much connected to the personality that we (think we) are able to tell something about a person's character just from looking at his or her face, and certainly about his/her mood. That is also why we immediately see a face that is drawn as a bunch of lines to be happy or sad: we can't help it.

What is even more problematic, however, is that there is a strong hierarchy in which features we look at, and how we identify people. There are features that are clearly much more important (eyes, lips) than others (overall shape). Thus, representing data through these visual features means that some data will be much more visible than others.

## Faces where there are none: Pareidolia

Seeing a face means two things: recognizing a shape as a face, and (possibly) recognizing the person from the face. Both are incredibly important tasks, and we are very good at both of them. So good, in fact, that we see faces even where there are none.

The fact that we see a few lines as a (Chernoff) face is testament to this. Even an image that is reduced to two points, two lines, and a circle, is seen as a face that can be curious or scared, happy or sad. This is also how caricatures and cartoons work: a distorted or reduced face, even when attached to a thing or an animal, is recognized as a face, and the attached object as a person. This also works for the design of certain objects like cars, which have headlight "eyes."

The fact that we have faces around us almost everywhere we look makes it hard to appreciate this phenomenon. So let's look at some faces that appear where there clearly are none. This effect is called <a href="http://en.wikipedia.org/wiki/Pareidolia">Pareidolia</a>.

Perhaps the most famous example is the "<a href="http://en.wikipedia.org/wiki/Face_on_Mars">Face on Mars</a>", which was photographed by a Viking probe in the 1970s. It inspired a lot of speculation about life on Mars (and some <a href="http://www.imdb.com/title/tt0183523/">crappy movies</a>), but it later was shown – not surprisingly – to not be a face at all.

<table style="height: 199px;" width="391" border="0" align="center">
<tbody>
<tr valign="top">
<td align="center"><img title="&quot;The Face on Mars&quot;" src="https://media.eagereyes.org/media/attachments/Martian_face_viking_cropped.jpg" alt="&quot;The Face on Mars&quot;" width="200" height="175" border="0" /></td>
<td align="center"><img title="A different view" src="https://media.eagereyes.org/media/attachments/MGS_Cydonia3-small.jpg" alt="A different view" width="175" height="175" border="0" /></td>
</tr>
</tbody>
</table>

In times of Google Maps, faces can also be found on closer planets. The ones in the following images are called "<a href="http://maps.google.com/maps?f=q&amp;hl=en&amp;ie=UTF8&amp;om=1&amp;z=17&amp;ll=50.01089,-110.112405&amp;spn=0.005212,0.009838&amp;t=h">Medicine Man</a>" (even wearing an iPod!) and "<a href="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;z=12&amp;ll=-16.348144,-71.967659&amp;spn=0.256306,0.314827&amp;t=k&amp;om=1">Face of God</a>" (or perhaps <a href="http://en.wikipedia.org/wiki/Slartibartfast">Slartibartfast</a>?). What is interesting especially in the left image is that the face is clearly visible, while the hair/headdress makes much less visual sense.

<p align="center"><img title="Faces found on Google Maps: &quot;Medicine Man&quot; and &quot;Face of God&quot;" src="https://media.eagereyes.org/media/attachments/GoogleMapsFaces.jpg" alt="Faces found on Google Maps: &quot;Medicine Man&quot; and &quot;Face of God&quot;" width="600" height="308" border="0" /></p>

Finally, there are faces in our every-day non-visual communication: smilies. Two or more punctuation characters can express joy, astonishment, shock, and affection. Who would have thought that these mundane characters that just structure the more important text could convey so much meaning?

<p align="center"><img title="Smilies" src="https://media.eagereyes.org/media/attachments/smilies.png" alt="Smilies" width="325" height="70" border="0" /></p>

## Faces in Visualization

<a href="#rogowitz">The Which Blair Project [2]</a>  uses faces to calibrate displays without the need for special hardware. It works on the simple principle that we see a face when the luminance values that are mapped to the gray levels of a photograph are monotonically increasing in brightness. This way, a large number (maybe 100) possible color maps can be presented to the user, who then simply clicks on the images where s/he sees a face. This is completely effortless thanks to our natural ability to see faces.

<p align="center"><img title="The Which Blair Project, Rogowitz and Kalvin, 2001" src="https://media.eagereyes.org/media/attachments/whichblair.jpg" alt="The Which Blair Project, Rogowitz and Kalvin, 2001" width="561" height="262" border="0" /></p>

An extension of this idea is <a href="#kindlmann">Face-based Luminance Matching [3]</a>, which lets the user not just select, but also construct color maps. To do this, a two-tone image of a portrait is shown using a gray level and a color, in both possible configurations (i.e., one quarter of the image below). The user moves a slider towards the side where s/he sees the face, changing the value of the color. When the point is crossed where color and gray appear equally bright, the face appears to jump to the other image. That way, the user has found a color with the same perceived brightness as the gray once s/he cannot decide where the face is anymore.

<p align="center"><img title="Kindlmann et al" src="https://media.eagereyes.org/media/attachments/kindlmann_faces.png" alt="Kindlmann et al" width="440" height="440" border="0" /></p>

## Other Glyphs

Apart from the reasons stated above that show how peculiar faces are, there is also another reason that make Chernoff Faces a strange choice: faces for <em>everything</em>? Why should faces work for any type of data?

General glyphs can be tailored for any data, and can also be based on metaphors. Take the following glyph for visualizing patient data in an intensive care unit (ICU) as an example. The <a href="#horn">VIE-VISU [4]</a> system is loosely based on the human shape, without invoking it too strongly and thus creating a <a href="http://en.wikipedia.org/wiki/Gestalt_psychology">gestalt</a>. Could they have used a face? Definitely. But which values do you represent with the eyes? Which make the face smile or look sad?

<p align="center"><img title="VIE-VISU, Horn et al, 2001" src="https://media.eagereyes.org/media/attachments/VIEVISU-small.png" alt="VIE-VISU, Horn et al, 2001" width="386" height="187" border="0" /></p>

## Hard Evidence

In addition to the circumstantial evidence above, there is a small amount of relevant work in visualization that has actual scientific weight.

<a href="#ware">Colin Ware [5]</a> recognizes the object-like appearance of Chernoff Faces, which is useful for perception. However, he goes on to caution readers that there are likely strong interactions between the different features, and that "the perceptual space of Chernoff Faces is likely to be extremely nonlinear" (pp. 264-266).

<a href="#morris">Morris et al. [6]</a> examined the <a href="http://www.csc.ncsu.edu/faculty/healey/PP/">preattentive</a> nature of Chernoff Faces, and found no evidence for it. Rather, comparing facial features is a serial search task, and is not helped at all by our (possibly preattentive) ability to quickly recognize familiar faces. They also found that a hierarchy of features exists, with eye size and eyebrow slant being the easiest to perceive and to compare.

## Conclusions

Faces are clearly special and their perception is poorly understood. While we can recognize a face very quickly, differentiating between and comparing features is much more difficult. All this makes faces a bad choice for visualization. While compelling anecdotal and circumstantial evidence exists, more hard scientific work is clearly needed for a final judgment.

<hr />

<a name="chernoff"></a>[1] Herman Chernoff, <a href="http://links.jstor.org/sici?sici=0162-1459%28197306%2968%3A342%3C361%3ATUOFTR%3E2.0.CO%3B2-2">The Use of Faces to Represent Points in K-Dimensional Space Graphically</a>, <em>Journal of the American Statistical Association</em>, vol. 68, no. 342, pp. 361–368, 1973.

<a name="rogowitz"></a>[2] Bernice E. Rogowitz, Alan D. Kalvin, <em><a href="http://researchweb.watson.ibm.com/visualanalysis/papers/WhichBlair-Viz01Rogowitz_Kalvin._final.pdf">The "Which Blair Project": A Quick Visual Method for Evaluating Perceptual Color Maps</a></em>, Proceedings Visualization, pp. 183–190, IEEE CS Press, 2001.

<a name="kindlmann"></a>[3] Gordon Kindlmann, Erik Reinhard, Sarah Creem, <em><a href="http://www.cs.utah.edu/~gk/papers/vis02/FaceLumin.pdf">Face-based Luminance Matching for Perceptual Colormap Generation</a></em>, Proceedings Visualization, pp. 299–306, IEEE CS Press, 2002.

<a name="horn"></a>[4] Werner Horn, Christian Popow, Lukas Unterasinger, Support for Fast Comprehension of ICU Data: Visualization Using Metaphor Graphics, <em>Methods of Information in Medicine</em>, vol. 40, pp. 421–424, 2001.

<a name="ware"></a>[5] Colin Ware, Information Visualization: Perception for Design, Morgan Kaufmann Publishers, 2004.

<a name="morris"></a>[6] Christopher J. Morris, David S. Ebert, Penny Rheingans, <em><a href="http://www.research.ibm.com/people/c/cjmorris/publications/Chernoff_990402.pdf">An Experimental Analysis of the Pre-Attentiveness of Features in Chernoff Faces</a></em>, Proceedings Applied Imagery Pattern Recognition, pp. 12–17, 1999.


<PostedBy />


<aside class="comments">

---
## Comments

<a href="http://bizviz.jorgecamoes.com" rel="nofollow noopener" target="_blank">Jorge Camoes</a> says…
>	An interesting study (Michael D. Lee and Rachel E. Reilly, 2003, &quot;An Empirical Evaluation of Chernoff Faces, Star Glyphs, and Spatial Visualizations for Binary Data&quot;), &quot;found that both glyph visualizations lead to slow, inaccurate answers being given with low confidence&quot;.
>   I think Chernoff faces are the pie charts of multidimensional visualization. One of the problems with both designs is the familiar metaphor. We shouldn&#39;t try too hard to translate abstract data into some identifiable images. Not only there are cognitive/perceptual issues to be solve but also you can&#39;t just remove your social stereotypes from the analysis of something as powerful as a face.
>   For continuous data you always have things like scatter plot matrices, but you must be sure that your audience understands them...

Anonymous says…
>	Hey, I like pie charts! They have a lot of advantages, unlike chernoff faces. So far I have seen no scientific studies that point out problems with pie charts.

<a href="http://bizviz.jorgecamoes.com" rel="nofollow noopener" target="_blank">Jorge Camoes</a> says…
>	There are a lot of studies. Try authors like William Cleveland. Edward Tufte and Jacques Bertin have also strong opinions on the subject (against).
>	

anonymous #2 says…
>	I'd like to second the note from the previous "anonymous" on pie charts: can any reader point to specific citations of studies on pie charts? Note that an experiment showing that, say, people have a harder time comparing angles than lengths is <strong>not</strong> the same as a study on pie charts. Neither is an essay in which someone guesses that pie charts are bad because people are not great at judging angles or areas.
>	My intuition is the overall effect of a pie chart comes from a lot of interacting factors and in fact pies can be pretty effective.

Robert Kosara says…
>	I don&#39;t know of study that would adress exactly that. There is good circumstantial evidence from tons of studies on basic perception, though. There may also be some material on this in <a href="/references/Ware_2004.html">Colin Ware&#39;s book<sup>(ref)</sup></a>. Looks like a good idea for a bunch of user studies, though ...

<a href="http://bizviz.jorgecamoes.com" rel="nofollow noopener" target="_blank">Jorge Camoes</a> says…
>	I understand your point, but I think you can't break the link between a chart and its "perceptual mechanics". Because there is no pie. There are thousands of them and you would have to have a good sample to get some basic conclusions. And of course you would have to cross that with familiarity, previous knowledge and experience, etc. Too much work.
>	
>	The root of all prejudice against pie chars seems to be in the studies by Croxton in 1927 and 1932. You may want to take a look at <a href="http://www.psych.utoronto.ca/~spence/Spence%202005.pdf">this paper</a> for a balanced account. The author says "In my opinion, much of the adverse criticism of the pie has come from those who have wished it to do more than it could. The pie chart is a simple information graphic whose principal purpose is to show the relationship of a part to the whole. It is, by and large, the wrong choice as an exploratory device, and it is certainly not the correct choice when the graph maker or graph reader has a complicated purpose in mind, such as displaying small changes in proportion over time". I couldn't agree more.
>	
>	I am designing several charts/panels with the same dataset, ("household expenditure in European countries"). Perhaps you could take a look at <a href="http://bizviz.jorgecamoes.com/mil-dados-mil-graficos-parte-2/">the one with pie charts</a>. It is useless (because I am asking too much). Even "star glyphs", that are similar to Chernoff faces, perform better.
>	

<a href="http://murkythoughts.blogspot.com/" rel="nofollow noopener" target="_blank">MT</a> says…
>	If face perception is like language perception--another kind subject to pareidolia--then what we'd expect I think is a special sensitivity to what we call "facial expressions," or to those by which we "read" and communicate our mental and emotional states. "Disgust," for example. We develop our ability to discriminate the vowels of our native language as children and can't hear the distinctions in languages we try to learn as adult--for example Swedish, which has many more vowel sounds than English does (see Patricia Kuhl's work). The distinctions that we've learned to make effectively deafen us to new ones. If you used a continuous scale of vowel sounds to signify temperature or wind speed--in the same way that you might use the distance between the two eyes in a Chernoff cartoon--then the people you subjected to this data representation would get a very gappy and skewed perception of it. A gradual increase in temperature over time might look more like a hop and skip through several. Color theory might provide a better analogy (we perceive any given wavelength of light as a weighted sum of three colors, if I'm remembering right). It might be possible to develop a "face scale" to represent things other than mood and mental state and to do so with a flat or linear sensitivity--to the extent that our expressions convey how disgusted we are and not just whether or not we are disgusted. But I think the starting point for creating such a scale would have to be the faces of real people and really experiencing disgust to varying degrees. (Would you really want to represent annual burger sales with an animated face expressing varying disgust?) Representing data across several dimensions with facial expressions--using a degree of disgust plus a degree of anger, for example--strikes me as even more problematic . Maybe disgust and anger add together simply, but other real expressions must be mutually exclusive (joy + fear?) Also I wouldn't be surprised if many naturally occuring combinations carried learned significances, and so our perception of a continuum of combinations of the same two things in varying amounts would be gappy and skewed and maybe also compete with the meanings of the two things seperately.

<a href="http://gravatar.com/alexgerdom" rel="nofollow noopener" target="_blank">AG</a> says…
>	Would love to follow up on this reply when I get some time here. I took a topics course on Facial Perception last year, and had actually been thinking about the issue a little at the time. I ended up giving a presentation on Robin Thomas' 2001 paper "Characterizing Perceptual Interactions in Face Identification Using Multidimensional Signal Detection Theory"  as part of the course, and I could see how it could suggest problems for Chernoff faces. The paper was somewhat hard to find if I remember correctly, so I'll have to update with the volume it was published in when I get home.
>	
>	The study made use of schematic faces, that held facial contour constant. The setup varied eye separation, nose length, and mouth width with each of 3 subjects receiving 4 possible configurations to distinguish between. Responses were collected in observation-confusion matrices?(I'll have to check, might be identification-confusion?). In any case, they found perceptual dependency between eye separation and nose length. As well as between nose length and mouth width. One of the interpretations given was that the perceptual system maintains area over a triangle of bordering features (if the nose is perceived as longer then the eye separation will perceived as wider). 
>	
>	Introduction of perceptual decencies would seem to complicate thing for Chernoff faces. 
>	
>	(I will try and update my sometime over the next few weeks here, as I  wrap up with finals.)
>	
>	Citation for the study:
>	Thomas, R. D. (2001). Characterizing perceptual interactions in face identification using multidimensional signal detection theory. Computational, geometric, and process perspectives on facial cognition: Contexts and challenges, 193-228.

</aside>

