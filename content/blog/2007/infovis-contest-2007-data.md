---
title: "InfoVis Contest 2007 Data"
description: "Like in the last few years, the InfoVis Conference 2007  is holding a data visualization contest. While the data is available late this year, we hope that by providing it in a very accessible format (XML), and also supplying program code to get  you started (at least if you&#39;re using Java), we will attract more submissions. The focus is also more on the design than the data analysis this year, and the questions are much more open-ended (in fact, you can make up your own!)."
date: 2007-03-07 16:24:40
tags: 
featuredImage: 
---

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


<PostedBy />


<aside class="comments">

---
## Comments

Hadley Wickham says…
>	Just to confirm - missing data is encoded as 0?

Robert Kosara says…
>	<p>Good question! I added a short description of missing values in the Data section above.</p>

Hadley Wickham says…
>	It also looks like any non-ASCII character is converted to an ?.  Obviously, this doesn't make much difference to the analysis, but would make titles like "?vangile du cochon cr?ole, L'" a little more interpretable.

Hadley Wickham says…
>	Great!  (Although in general it&#39;s a bad idea to use numbers for missing values, it&#39;s probably a limitation of the software that you&#39;re using).  Thanks.  It&#39;s awesome to have someone so responsive looking after the data. 

Robert Kosara says…
>	... in this case the semantics are clear. When there are no ratings, the number of ratings is 0. In that case, there is no point in even looking at the mean or standard deviation. But I changed it so that the ratings mean and std dev are NaN (not a number) in the code when there are no ratings, and the ratings are no longer written to the file if there are none (that includes the number of ratings). Box office earnings are now -1 (used to be 0) when nonexistant, and are no longer written to file in that case.

Robert Kosara says…
>	<p>Turns out Xerces doesn&#39;t do the UTF-8 encoding itself, but needs the OutputStream to handle that. So now the output is correct UTF-8, like the XML header promises, and no more mangled characters.</p><p>Thanks for all the bug reports! </p>

Hadley Wickham says…
>	You're welcome - it's great to have some one responsive who can fix them as they up.  The missing data looks much better too.
>	
>	One more thing - could you please comment on how you added the box office numbers?  Some very popular movies (lord of the rings series, memento, kill bill, new star wars, mission impossible 2) don't have any box office data, even though it is available on the-numbers.com.  
>	
>	Thanks again!

Robert Kosara says…
>	<p>The matching between IMDB and other sources is not easy. There are differences in how the names are arranged, and IMDB also numbers movies with the same title that come out in the same year - that happens more often than you&#39;d expect. I will look into this and try to improve the matching. The Netflix matching code tries a little harder, but there is clearly still room for improvement as well.</p>

Hadley Wickham says…
>	I think you've miscoded the missing release dates as the 1st of February, not the 1st of January.  (And if that is true, then there are 87 movies which were actually released on the 1st of Jan)

Robert Kosara says…
>	<p>Okay, no more encoding of missing values in numbers. You&#39;re right about the February, Java&#39;s handling of dates is not very logical. Jan 1 was chosen because it is a fairly uncommon release data, and a special day.</p><p>But no more! There is a separate field for the year now (required), and the release date is only there when we know it. It&#39;s also null in the objects if it&#39;s not there.</p><p>The new release &quot;Dances with Wolves&quot; is now available for download from the links above.</p>

James Shearer says…
>	Excellent dataset, Robert.  Contest should be lots o' fun this year.  I can't wait to get some free time to hack on this :)

Hadley Wickham says…
>	Thanks!  We'll make a statistician out of you yet ;)  And, yes, matching is always a bitch, but that's real life.

Mark Derthick says…
>	The IMdB requires explicit permission to use their data, except for individual personal use.  I assume, therefore, that I can't make my contest entry available over the web for others to try.  Is this correct?
>	

Robert Kosara says…
>	Mark, good question! I assume that you can put it online as long as you don&#39;t allow people to query the entire data (this is very reduced, anyway), and don&#39;t show all the details. I will clarify that with the IMDB folks, though.

<a href="http://emislej.googlepages.com/" rel="nofollow noopener" target="_blank">Ernesto Mislej</a> says…
>	Hi! 
>	I found this error in IMDBBootStrapper.java
>	The filename is hardcoded.
>	<code>
>	...
>	System.err.println("Parsing Netflix data ...");
>	dialog.step(11);
>	if (dialog.getNetflixPath().length() > 0) {
>		IMDBFileParser.parseFlatList(dialog.getNetflixPath()+File.separator+"movie_titles.txt", true, ",", new NetflixMovieListener(), "", 0, null);
>		System.err.println(MovieDB.instance.netflix.size()+" netflix ratings");
>		NetflixParser.parse(<strong>"/Users/rkosara/Documents/Research/netflix/training_set.tar"</strong>, dialog);
>		}
>	...		
>	</code>
>	
>	Greets, 
>	Ernesto

Robert Kosara says…
>	<p>Thanks for catching that bug! I have uploaded a new version of the program (sorry that this took some time ...). You can either download that or replace the offending line with the following in the code, and recompile:</p><blockquote><pre>NetflixParser.parse(dialog.getNetflixPath()+File.separator+&quot;training_set.tar&quot;, dialog); </pre></blockquote>

<a href="http://emislej.googlepages.com/" rel="nofollow noopener" target="_blank">Ernesto Mislej</a> says…
>	<p>Hi!</p><p>Can I add extra data, like plot outline keywords, to the dataset?  Like </p><p><a href="http://www.imdb.com/title/tt0082971/keywords">http://www.imdb.com/title/tt0082971/keywords</a> </p><p>I am designing an infovis prototype. To include this kind of textual information about the movies would be great.</p><p>Greets,</p><p>Ernesto</p>

Robert Kosara says…
>	<p>You are actually encouraged to do that. You can find all the raw IMDB data on their <a href="http://www.imdb.com/interfaces">Alternative Interfaces</a>  page. </p>

</aside>

