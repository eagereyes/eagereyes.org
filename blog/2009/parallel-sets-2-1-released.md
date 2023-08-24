---
title: "Parallel Sets 2.1 Released"
description: "We are happy to announce the release of Parallel Sets 2.1. The new version fixes a number of bugs and introduces a few new features. The biggest changes are under hood, with a new database model that can now handle much more complex datasets (in terms of number of dimensions and categories), and the new streaming import can load in datasets with a much larger number of records. We have also added a way to automatically sort categories by name and size, a screenshot function, and more. Upgrading is strongly recommended."
date: 2009-08-03 11:07:29
tags: 
featuredImage: https://media.eagereyes.org/media/2009/parsets-2.1-teaser.png
outline: false
---

<p align="center"><img src="https://media.eagereyes.org/media/2009/parsets-2.1-teaser.png" border="0" alt="Parallel Sets 2.1" width="560" height="243" /></p>

# Parallel Sets 2.1 Released

We are happy to announce the release of <a href="/parallel-sets">Parallel Sets 2.1</a>. The new version fixes a number of bugs and introduces a few new features. The biggest changes are under hood, with a new database model that can now handle much more complex datasets (in terms of number of dimensions and categories), and the new streaming import can load in datasets with a much larger number of records. We have also added a way to automatically sort categories by name and size, a screenshot function, and more. Upgrading is strongly recommended.

We have <strong>added a menu</strong>. We are still trying to figure out what to put in the menu, what to have available as buttons or other interactions, and also how many actions should be redundant between the two. Most of the menu options should be self-explanatory, and most are discussed below.

There is a new <strong>screenshot function</strong>. This is just the first step towards making it easier to export images. This first version saves the current display into a PNG file, which can be inserted easily into most word processing and presentation programs. This was requested by a user, and we appreciate the need for a better image export (especially vector graphics), but the amount of effort required for this is considerable.

There is now a way to <strong>reinitialize the database</strong>. While the data import is now more robust, and deleting botched imports should no longer fail, this provides a last resort when things go wrong. Reinitializing the database deletes all data, which is why the program warns you before it goes ahead:

<p style="text-align: center;"><img src="https://media.eagereyes.org/media/2009/parsets-reinit-db.png" border="0" alt="Reinitialized DB warning" width="533" height="247" /></p>
The <strong>View Menu</strong> lets you change some options about the display. You can turn <strong>tooltips</strong> on and off, turn on <strong>stronger highlights</strong> (requested by a user), and activate or deactivate <strong>anti-aliasing</strong>. The latter option is especially useful if the dimension labels have lines going through them, or fonts appear botched; turning off anti-aliasing seems to fix that in many cases (downloading new drivers should also help, as this is clearly a driver problem).

Another user-requested feature is being able to <strong>sort categories by name and size</strong>. This is done with little "buttons" that appear in the dimension bar when you mouse over the name of a dimension. Depending on which half of each of the two labels the mouse is over, sorting will be ascending or descending. Please try this out and let us know if you like the way this is implemented, or if it's too finicky. The goal was to make it accessible without it getting in the way.

<p style="text-align: center;"><img src="https://media.eagereyes.org/media/2009/parsets-reorder.png" border="0" alt="Reordering categories" width="500" height="60" /></p>
The new <strong>version check dialog</strong> now tells you what is new in the new version when there is an update. You obviously won't see that before 2.2 is released, though.

We have fixed a number of <strong>data import bugs</strong>. These include problems with duplicate column names (whether in the original data or after being "cleaned" for the database) and column names starting with digits. There was also a bug where the parser would sometimes ignore values, so we recommend re-importing your datasets for maximum accuracy. The errors are small (around 1%), but nonetheless embarrassing.

The new data model also can now deal with a <strong>much larger number of dimensions and categories</strong> in those dimensions. All imports are now streaming, so dataset size (number of records) is no longer limited by available memory. Very large datasets will cause the program to get slow, though (mostly adding/removing dimensions and categories, interaction in the view is not affected). If you experienced crashes when importing a file before, please try again. If it still doesn't work, <a href="/contact">let us know</a>!

A disk image for Mac OS X and an installer for Windows are available on the <a href="http://code.google.com/p/parsets/downloads/list">downloads page</a>. We no longer offer a source code package, because it really makes little sense to do this. If you are interested, read the <a href="http://code.google.com/p/parsets/wiki/SourceCodeAccess">instructions on how to get the source code</a> from the repository. That way, you will be able to stay up-to-date on the latest changes.

The next release is tentatively scheduled for early September. This is not a strict deadline, and it might get pushed back to late September. Deadlines and other projects unfortunately have priority, and have also pushed back this release further than originally anticipated.

As always, we want to hear from you! Submit bug reports and feature requests using the <a href="http://code.google.com/p/parsets/issues/list">Google Code issue tracker</a>, and <a href="/contact">send us your comments and complaints</a>!


<PostedBy />


<aside class="comments">

---
## Comments

<a href="http://www.boyandi.net" rel="nofollow noopener" target="_blank">Ilya Boyandin</a> says…
>	<p>Hello Robert,</p>
>	<p>first of all, thanks a lot for your work on Parallel Sets which I believe will prove to be a very useful tool!</p>
>	<p>But I have troubles visualizing the <a href="http://data.un.org/Data.aspx?q=refugees&amp;d=UNHCR&amp;f=indID:Type-Ref&amp;c=0,1,2,3,4,5,6&amp;s=yr:desc,asyEngName:asc,oriEngName:asc&amp;v=1">UN refugees data</a> with it. When I try to import <a href="http://dl.getdropbox.com/u/872077/parsets/refugees_2006-2008.csv">this file</a> with ParallelSets 2.1, it crashes. With the version 2.0 the file import works, but the data is not visualized in the way I expect it to. Each record in the dataset is a refugee flow from one contry to another. With Parallel Sets I'd like to be able to quickly compare the numbers of refugees moving from country to country. But when I import <a href="http://dl.getdropbox.com/u/872077/parsets/only_refugees_2008.csv">this simplified dataset</a> <a href="http://dl.getdropbox.com/u/872077/parsets/csv_import.png">marking the refugees column as "numerical"</a> it seems that the values in the "Refugees" column are just ignored in the vizualization and only the numbers of records with the corresponding values in the "Country of origin..." and "Country of asylum..." fields are counted instead.</p>
>	<p>For example, I'd like to compare the numbers of refugees coming from different countries to Austria and Switzerland. Here is what I get. All of the flows have the same width which is not very useful:</p>
>	<p align="center"><img src="http://dl.getdropbox.com/u/872077/parsets/at_vs_schw.png" alt="" /></p>
>	<p>How can I make the widths of the flows correspond to the numbers of refugees?</p>

Robert Kosara says…
>	<p>Thanks for the report, and sorry for the problems. I'll look into it. We're probably going to do a bugfix release soon, because there's a problem in the parser when there is a line with a different number of columns, and that will also include a fix for this.</p>

</aside>

