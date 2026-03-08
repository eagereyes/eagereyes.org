# Trifacta Wrangler for cleaning and reshaping data

Wrangling data into a shape that can be used to create visualizations is a huge problem with few available tools. [Trifacta Wrangler](http://trifacta.com/trifacta-wrangler) is a powerful new tool that is free to use.

Data comes in all shapes and sizes, and those are often not conducive to working with it right away. Date formats might be weird, columns may need to be split or merged, and there is often the need to unpivot the data (turn columns into rows). This is a particular problem with government data.

[Trifacta](https://www.trifacta.com/) is a young startup that was founded by Jeff Heer, Joe Hellerstein, and Sean Kandel. Its product is an extension of their 2011 [Data Wrangler](http://vis.stanford.edu/wrangler/) paper and online tool, but with many more features and able to deal with much larger data.

While the old Data Wrangler is still around, it is no longer supported and it’s also pretty slow for some operations (in particular unpivots with many rows and columns). The other alternative, [OpenRefine](http://openrefine.org) (formerly Google Refine), is now “community supported.” While it hasn’t been entirely abandoned, there is no current release version, the beta is years old, and the whole thing is just way behind how computing is done these days (Java?!).

<figure><img src="https://media.eagereyes.org/wp-content/uploads/2015/10/trifacta-welcome.png" alt="trifacta-welcome" width="660" height="309"/></figure>

[Trifacta Wrangler](http://trifacta.com/trifacta-wrangler) is limited to 100MB of input data, which should be sufficient for many people’s needs. They support CSV, TSV, JSON, and Excel files (both XLSX and old-fashioned XLS). The output can be CSV, JSON, or TDE (Tableau Data Engine). The app runs on the desktop, but it needs an Internet connection (all the wrangling is done locally though, and your data stays on your machine) and you have to sign up for a free account with Trifacta.

In addition to the usual data cleaning operations like splitting and merging columns, Wrangler can also nest values, compute aggregates, and a number of other things. The best way to figure it out is to use it with a real dataset that you want to wrangle into a better shape and just try out lots of things. All actions can be undone, and you can edit the script the tool generates from the actions you perform.

<figure><img src="https://media.eagereyes.org/wp-content/uploads/2015/10/trifacta-transformer.png" alt="trifacta-transformer" width="660" height="309"/></figure>

The app is designed very nicely with many features and a built-in tutorial (which can get in the way a bit at first, but it’s worthwhile to read what it tells you). It is targeted partly towards Tableau users (hence the support for TDE as output), including [Tableau Public](https://public.tableau.com/s/), but it is certainly not restricted to that.

Given Trifacta Wrangler’s power and support, and the dismal state of the only other freely available tool, I think that Wrangler will be the go-to choice for data wrangling for most people going forward.
