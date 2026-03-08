Hadley Wickham says…
> Just to confirm - missing data is encoded as 0?

Robert Kosara says…
> Good question! I added a short description of missing values in the Data section above.

Hadley Wickham says…
> It also looks like any non-ASCII character is converted to an ?.  Obviously, this doesn't make much difference to the analysis, but would make titles like "?vangile du cochon cr?ole, L'" a little more interpretable.

Hadley Wickham says…
> Great!  (Although in general it&#39;s a bad idea to use numbers for missing values, it&#39;s probably a limitation of the software that you&#39;re using).  Thanks.  It&#39;s awesome to have someone so responsive looking after the data.

Robert Kosara says…
> ... in this case the semantics are clear. When there are no ratings, the number of ratings is 0. In that case, there is no point in even looking at the mean or standard deviation. But I changed it so that the ratings mean and std dev are NaN (not a number) in the code when there are no ratings, and the ratings are no longer written to the file if there are none (that includes the number of ratings). Box office earnings are now -1 (used to be 0) when nonexistant, and are no longer written to file in that case.

Robert Kosara says…
> Turns out Xerces doesn&#39;t do the UTF-8 encoding itself, but needs the OutputStream to handle that. So now the output is correct UTF-8, like the XML header promises, and no more mangled characters.
>
> Thanks for all the bug reports!

Hadley Wickham says…
> You're welcome - it's great to have some one responsive who can fix them as they up.  The missing data looks much better too.
>
> One more thing - could you please comment on how you added the box office numbers?  Some very popular movies (lord of the rings series, memento, kill bill, new star wars, mission impossible 2) don't have any box office data, even though it is available on the-numbers.com.
>
> Thanks again!

Robert Kosara says…
> The matching between IMDB and other sources is not easy. There are differences in how the names are arranged, and IMDB also numbers movies with the same title that come out in the same year - that happens more often than you&#39;d expect. I will look into this and try to improve the matching. The Netflix matching code tries a little harder, but there is clearly still room for improvement as well.

Hadley Wickham says…
> I think you've miscoded the missing release dates as the 1st of February, not the 1st of January.  (And if that is true, then there are 87 movies which were actually released on the 1st of Jan)

Robert Kosara says…
> Okay, no more encoding of missing values in numbers. You&#39;re right about the February, Java&#39;s handling of dates is not very logical. Jan 1 was chosen because it is a fairly uncommon release data, and a special day.
>
> But no more! There is a separate field for the year now (required), and the release date is only there when we know it. It&#39;s also null in the objects if it&#39;s not there.
>
> The new release &quot;Dances with Wolves&quot; is now available for download from the links above.

James Shearer says…
> Excellent dataset, Robert.  Contest should be lots o' fun this year.  I can't wait to get some free time to hack on this :)

Hadley Wickham says…
> Thanks!  We'll make a statistician out of you yet ;)  And, yes, matching is always a bitch, but that's real life.

Mark Derthick says…
> The IMdB requires explicit permission to use their data, except for individual personal use.  I assume, therefore, that I can't make my contest entry available over the web for others to try.  Is this correct?

Robert Kosara says…
> Mark, good question! I assume that you can put it online as long as you don&#39;t allow people to query the entire data (this is very reduced, anyway), and don&#39;t show all the details. I will clarify that with the IMDB folks, though.

[Ernesto Mislej](http://emislej.googlepages.com/) says…
> Hi!
> I found this error in IMDBBootStrapper.java
> The filename is hardcoded.
> `
> ...
> System.err.println("Parsing Netflix data ...");
> dialog.step(11);
> if (dialog.getNetflixPath().length() > 0) {
> 	IMDBFileParser.parseFlatList(dialog.getNetflixPath()+File.separator+"movie_titles.txt", true, ",", new NetflixMovieListener(), "", 0, null);
> 	System.err.println(MovieDB.instance.netflix.size()+" netflix ratings");
> 	NetflixParser.parse(**"/Users/rkosara/Documents/Research/netflix/training_set.tar"**, dialog);
> 	}
> ...
> `
>
> Greets,
> Ernesto

Robert Kosara says…
> Thanks for catching that bug! I have uploaded a new version of the program (sorry that this took some time ...). You can either download that or replace the offending line with the following in the code, and recompile:
> > `NetflixParser.parse(dialog.getNetflixPath()+File.separator+&quot;training_set.tar&quot;, dialog);`
>

[Ernesto Mislej](http://emislej.googlepages.com/) says…
> Hi!
>
> Can I add extra data, like plot outline keywords, to the dataset?  Like
>
> [http://www.imdb.com/title/tt0082971/keywords](http://www.imdb.com/title/tt0082971/keywords)
>
> I am designing an infovis prototype. To include this kind of textual information about the movies would be great.
>
> Greets,
>
> Ernesto

Robert Kosara says…
> You are actually encouraged to do that. You can find all the raw IMDB data on their [Alternative Interfaces](http://www.imdb.com/interfaces)  page.
