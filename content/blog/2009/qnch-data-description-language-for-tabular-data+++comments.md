[Hadley Wickham](http://had.co.nz) says…
> How about using the same yaml format as the infochimps team? e.g. [http://blog.infochimps.org/2008/09/10/whats-next-infinite-monkeywrench-starting-to-take-form/](http://blog.infochimps.org/2008/09/10/whats-next-infinite-monkeywrench-starting-to-take-form/ ) and [http://wiki.github.com/infochimps/imw](http://wiki.github.com/infochimps/imw)

Robert Kosara says…
> I'm not seeing any documentation what that format actually looks like, though.

Xiaoyu Wang says…
> Very interesting. I wonder how much does one need to convert traditional csv file or other tabular formats into the YAML format? Will there be any automated converter?
>
> I would have concerns that if there is no such easy conversion. Personally, lots of good approaches will not be adopted:
>
> <span style="white-space: pre;"> </span>A. if it is not backward compatible
>
> <span style="white-space: pre;"> </span>B. if it requests too much effort to be backward compatible.
>
> However, I do see this format useful in my current project. I would like to discuss further with you later this year, sir. :)

Robert Kosara says…
> It's for describing data properties, not for data storage. But yes, you'll very likely see some of it when we continue our project. ;)

Mario Drobics says…
> To me the approach seems very useful and I very much appreciate your initiative. What may help to start using such a data description file would be a tool, which extractes as much of this information from the original data set as possible (e.g. categorical, numerical, max/min, etc.). This will not always be correct, but will provide a basis for further manual adjustments.

Robert Kosara says…
> The Data Wizard in the Parallel Sets program already does most of that, actually. It's just not exposed right now for purposes other than importing data into the database to visualize. You should try it out ;)

[Gerad Suyderhoud](http://business.swivel.com) says…
> Definitely a nice stake in the ground.  I see several things missing from a quick glance.
>
> 1. escape-character - if you have a quotation character, you need some way to escape it so that you can include your quotation character in a string.  Typical, C-style is with a backslash '\'.  However CSV tends to double the quotes "" (so it's more than a character, it's a method).
> 2. source - many data sets are combined from multiple sources
> 3. columns / dimensions - what about dates? In addition, you probably want to specify a date format is 1/2/03 January 2 or February 1?  It depends.
>
> As an aside, I'd stick with columns as a name rather than dimensions.  My understanding of a dimension is that it's a column that you would possibly aggregate or filter by:  a subset of the columns.  Plus everybody knows what a column is.  Most people are confused by the term dimensions.
