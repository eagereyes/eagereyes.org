# InfoVis Contest 2007 Data

Like in the last few years, the <a href="http://conferences.computer.org/infovis/infovis2007/">InfoVis Conference 2007</a> is holding a data visualization contest. While the data is available late this year, we hope that by providing it in a very accessible format (XML), and also supplying program code to get you started (at least if you're using Java), we will attract more submissions. The focus is also more on the design than the data analysis this year, and the questions are much more open-ended (in fact, you can make up your own!).

## The Data

<ul>
	<li>All US movies released from 2000 to 2006 (around 20,000)</li>
	<li>For each movie
<ul>
	<li>director(s)</li>
	<li>cinematographer(s)</li>
	<li>first ten billed actors and actresses (i.e., a maximum of 20 acting persons)</li>
	<li>genre(s)</li>
	<li>US release date</li>
	<li>IMDB ratings (numerical rating and number of users that contributed)</li>
	<li>Netflix ratings, if available (number of ratings, mean, standard deviation)</li>
	<li>box office earnings in year of release (if available)</li>
	<li>Oscars, if any</li>
</ul>
</li>
</ul>
Information can be missing, though all movies in the data base will at least have one director and one actor or actress. If there were no ratings from either IMDB or Netflix, the corresponding <em>numRatings</em> fields will be 0 (and the rating value meaningless). Box office earnings are reported as -1 if unknown. The exact release date can be missing, but the year is known for all movies. Lists of items (like genres, Oscars, cinematographers) will simply be empty if there are none.

The data is produced by a program (see below) in two formats: serialized Java objects and XML.

## Source Code

The package also contains the source code used for the conversion, as well as readers that regenerate the representation in memory from a serialized file or from XML. These classes can serve as starting points for your work. A few key classes and methods (all these classes are in the package infovis07contest.data):
<ul>
	<li><em>MovieDB</em> is the central class that contains all the other data. Its contains a single class variable <em>instance</em>. It has the following important methods:
<ul>
	<li><em>readXMLFile</em>(String filename) parses an XML file to fill the instance with data. All existing data in the instance is lost. This is the preferred method, and is considerably faster for the entire data set (though will be slower for small subsets).</li>
	<li><em>readSerializedFile</em>(String filename) reads in the instance from objects dumped into a file using Java serialization.</li>
</ul>
</li>
	<li><em>Movie</em>, <em>Person</em>, <em>Genre</em>, and <em>Oscar</em> should be self-explanatory.</li>
</ul>
In addition, you will need the <a href="http://xerces.apache.org/xerces-j/">Xerces for Java</a> XML parser.

## The Data Package

The data set is based on data that cannot be redistributed in altered form, which is why you need to download a program package that will create the actual data when run.
<ul>
	<li><a href="https://media.eagereyes.org/media/attachments/InfoVisContest2007.jar">Data Generation Program</a> (200MB) – last changed 20-Apr-2007 17:00 EST (23:00 GMT)</li>
	<li><a href="https://media.eagereyes.org/media/attachments/moviedb.dtd">DTD</a> for the generated XML file – last changed 09-Mar-2007 16:05 EST (21:05 GMT)<a href="https://media.eagereyes.org/media/attachments/moviedb.dtd">
</a></li>
	<li>Optional data from <a href="http://www.netflixprize.com/">Netflix Prize</a>. You have to register to be able to download the data (around 300MB zipped, 2GB unpacked).</li>
</ul>
Run the program using the following command (requires Java 1.5) from the shell/command line. Select a file in the directory where you unzipped the Netflix data, and then hit Start. It also works without the Netflix data, it then just skips that step.

>	
>	<pre>java -Xmx256M -jar InfoVisContest2007.jar</pre>
>	

## Questions and Tasks

See the <a href="http://www.apl.jhu.edu/Misc/Visualization/tasks.html">contest website</a>.

## FAQ

<h3>Why do I have to download and run a 200MB program to produce 16MB of XML?</h3>
The reason are IMDB's licensing terms. We can redistribute their files, but we cannot alter them when we do that. You only have to run the program once, and you can delete it once all the contest data has been generated.
<h3>What is the Netflix data?</h3>
Netflix has a <a href="http://www.netflixprize.com/">contest</a> where it is looking for a way to significantly improve its recommendation service. Their data consists of ratings for 17,770 movies from about 100,000 costumers. This also includes a lot of direct-to-video releases, special editions, and movies that were made before 2000, which brings the number of Netflix ratings in this dataset down to around 1,400. Those ratings are interesting though because we do not only know the average, but also the standard deviation.

You have to register on the site to be able to download the data. We cannot redistribute the data, even in its original form. If you use the Netflix data, we recommend you look at the <a href="http://www.netflixprize.com/community/index.php">Netflix Prize Forums</a>.
<h3>Where does all this data come from?</h3>
<ul>
	<li>Most of it is from <a href="http://imdb.com/">The Internet Movie Database (IMDB)</a>.</li>
	<li>Box office numbers come from <a href="http://the-numbers.com/">The-Numbers.com</a>.</li>
	<li>Oscar information can be found all over the web, with the source of it all of course being <a href="http://oscar.com/">Oscar.com</a>.</li>
</ul>
Thanks to <a href="http://www.cs.brown.edu/people/cziemki/">Caroline Ziemkiewicz</a> for help with the data collection.
<h3>What is the license on this dataset?</h3>
All the data sources we use are openly accessible and are likely to remain so. Their data is therefore licensed under their respective terms. The program code available from this page to digest and represent the data is hereby put in the public domain. This page and the dataset will remain online after the end of the contest.
<h3>Where do I submit my results?</h3>
That and more information can be found on the <a href="http://www.apl.jhu.edu/Misc/Visualization/">InfoVis 2007 Contest Website</a>.
