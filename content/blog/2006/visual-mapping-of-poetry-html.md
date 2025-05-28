# The Visual Mapping of Poetry

Visualization people often talk about <em>mapping</em>. Mapping is the process that translates data into a visual representation, and the main challenge in the visualization of abstract data. A good mapping is one that leads to insights into the data, while a bad mapping does not. It is important, however, to keep in mind what the purpose of the depiction is, or one runs the risk of applying the wrong standards.

Enrico Bertini <a href="http://diuf.unifr.ch/people/bertinie/visuale/2006/11/visual_poetry_mimicking_textar_1.html">criticized the following image</a> for being a bad visualization on his <a href="http://diuf.unifr.ch/people/bertinie/visuale/">Visuale Blog</a>:

<a href="http://www.esono.com/boris/projects/poetry06/"><img title="poetry on the road 06" src="https://media.eagereyes.org/media/attachments/poetry06_plakat-detail.png" alt="poetry on the road 06" width="539" height="382" /></a>

The image was made for a <a href="http://www.esono.com/boris/projects/poetry06/">poster and book about a poetry festival</a>. The following describes how they did it:

>	 We assigned a numerical value to every letter of the alphabet. Adding the values of all letters, one gets a number that represents the overall word. (For example, the number 99 would represent the word »poetry«.)
>	
>	 Using this system, an entire poem could be arranged on a circular path. The diameter of the circle is based on the length of the poem. So you can see the short poems in the centre of the poster, while the longer ones form the outer circles.
>	
>	Red rings on the circular path represent a number. As many different words can share the same number (»poetry« shares the 99 with words like »thought« and »letters«), most rings represents different words. The thickness of the ring depends on the amount of words that share the same number.

The organized chaos in the image certainly looks great, and makes for a beautiful poster and book cover. Each poem was also identified in the book by its ring of the whole image, thus giving it a certain visual identity.

But is it a good visualization? Clearly not. Mapping words in such an arbitrary fashion destroys a lot of information (completely unrelated words are mapped to the same number), and the way they are arranged does not give us any clues about the contents of the poems either. The different red circles and the apparent pattern that most words are on the right of the image are simply an artifact of the encoding that puts most words into a small range of values, and a few longer ones further away.

Is it a visualization? It clearly is something visual created from data, but the answer to this question depends on your definition of visualization – which makes this an interesting example to ponder.

Visualization in the analytical sense requires that the data be mapped onto the screen so that it is possible to understand or read the data from the depiction. This is similar to what is called a <a href="http://en.wikipedia.org/wiki/Bijective_function">bijective</a> function in mathematics. A visualization can never be truly bijective of course, due to the limited range and resolution of all the visual parameters of a computer screen. But at least getting an idea of the patterns present in the data, and a good approximation of the original data is required in visualization.

So in terms of a mapping or function, the poetry poster is similar to a <a href="http://en.wikipedia.org/wiki/Hash_function">hash function</a>, which only works in one direction, and has a very high likelihood of creating different output for different inputs. Like a fingerprint, two hash functions that are different tell you that the underlying data was different, but will not convey any information about what the original data actually contained (or what the person the finger belongs to is like).

These above image is conceptually similar to J.P. Lewis et al's <a href="http://scribblethink.org/Work/VisualIDs/visualids.html">VisualIDs</a>, which create arbitrary (but unique) icons for different documents. They are also the opposite of <a href="/blog/2006/informative-art">informative art</a>, which has the goal of being bijective and aesthetically pleasing at the same time.

A comparison of these images to visualization (Bertini mentions <a href="http://www.textarc.org/">TextArc</a> as the better way of doing this) therefore misses the point. It may be a bit elaborate for a simple icon, but it is still no more than one unique image per poem. Also looking at the archive of <a href="http://www.esono.com/boris/projects/poetry05/">designs</a> <a href="http://www.esono.com/boris/projects/poetry04/"> for</a> <a href="http://www.esono.com/boris/projects/poetry03/"> earlier </a> <a href="http://www.esono.com/boris/projects/poetry02/">posters</a>, it becomes even more obvious that the goal is not to visually analyze, but merely to represent.
