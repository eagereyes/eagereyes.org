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
