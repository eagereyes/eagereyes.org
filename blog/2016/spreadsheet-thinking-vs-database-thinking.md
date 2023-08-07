---
title: "Spreadsheet Thinking vs. Database Thinking"
description: "The shape of a dataset is hugely important to how well it can be handled by different software. The shape defines how it is laid out: wide as in a spreadsheet, or long as in a database table. Each has its use, but it's important to understand their differences and when each is the right choice."
date: 2016-04-24 19:25:28
tags: attention
featuredImage: https://media.eagereyes.org/wp-content/uploads/2016/04/image.jpeg
---

# Spreadsheet Thinking vs. Database Thinking

The shape of a dataset is hugely important to how well it can be handled by different software. The shape defines how it is laid out: wide as in a spreadsheet, or long as in a database table. Each has its use, but it's important to understand their differences and when each is the right choice.

## Wide and Two-Dimensional: The Spreadsheet

Spreadsheets are laid out in two dimensions. That's probably their most fundamental and most important feature. They make sense to us because we can easily think in terms of a grid that organizes things in a logical manner.

<p align="center"><img class="aligncenter size-full wp-image-9223" src="https://eagereyes.org/wp-content/uploads/2016/04/image.jpeg" alt="Spreadsheet" width="655" height="230" /></p>

The grid layout is efficient because it means you don't have to repeat what is being shown. In this example of unemployment data, each row is a year and each column a month. If you're looking for, say, April 2010, you know where to look. And you can read time across or down, depending on whether you're looking to compare between months or year over year.

Calculations also present themselves: sum the rows across (not in this particular example), sum the columns down, get the average, create a new column with the difference of each row from the overall mean, etc.

There are limitations, of course. If you want to break the data down in more than two ways, you need to create multiple tables. The same is true when adding more numbers in each of the cells. You might want to compare unemployment to labor force or education, but they're in different tables, making this complicated.

For data analysis tools, spreadsheets also pose the challenge that their formats can vary widely and are often inconsistent in subtle but problematic ways. One issue is that there is usually stuff around the actual data to explain things, making it hard for a program to even just reliably figure out what the actual data is.

Another problem is that column headings don't tell you what they mean. In the example above, <i>Year</i> means that each of the numbers in that column is a year. But <i>Jan</i>, <i>Feb</i>, etc. don't, they are actually part of the date, and thus part of the data. How is a program supposed to tell them apart?

There are many other conventions in spreadsheets that make sense to people – of course the column in this table is the same as in the one above, of course that single label applies to all rows, etc. –, but are impossible for a machine to figure out.

## Long and Skinny: The Database

The opposite of the spreadsheet is the database table. Instead of laying out the data in two dimensions, it's a long list. It has columns, but not nearly as many (for the same dataset).

<p align="center"><img class="aligncenter wp-image-9224" src="https://eagereyes.org/wp-content/uploads/2016/04/image-1.jpeg" alt="Database" width="169" height="215" /></p>

Instead, each column has a role. In our unemployment rate example, there is one column for the year, one for the month, and then a final column for the actual value. This is not a good format for a human, but machines love it.

This format causes repetition. The first row represents January 2006, so it has to contain the year 2006 and then the month January. The next entry, February 2006, has to repeat the year. And a year later, the month repeats again. It seems like a lot of effort to represent data this way, but this way it's all specified. And most databases today can compress this kind of repetitive data so it takes up very little space.

The uniform structure of this format makes it easy to perform all sorts of operations, like filtering out certain values, calculating differences, averages, etc., and all the other things databases are good at.

This format is also much more flexible when it comes to adding more ways of breaking down the data, or adding more measurements. Do you want to have an unemployment rate per state? In the spreadsheet model, you have to make many tables, one for each state. Or you can make larger tables for each state by month, and different tables for each year. This might seem odd, but it would allow comparison between states over each year.

In the long-and-skinny format, you just add a state column and let the machine worry about it. Draw a chart with a line per state over time? Calculate year-over-year change for each? Etc.

Columns that break up the data like that are called <i>dimensions</i>. Database tables often contain dozens of them. The numbers associated with each combination of dimension values are called <i>measures</i>. And those are also easy to add. Want the labor force in addition to the unemployment rate? Just add a column. Same for population, cost of living, etc.

Having all that data in the same place makes for many possible comparisons that are up to the person asking questions, and don't need to be prepared as tables beforehand. That's why it's much better for data to be machine-friendly than human-readable: a machine can turn the machine-friendly data into all sorts of human-readable formats, but the opposite is much more difficult and error-prone.

## Turn One Into The Other: (Un-)Pivot

The two shapes look different and they're useful in different contexts. But they represent exactly the same data. Each can also be transformed into the other. Though whether that is easy or not depends on the tools at hand and some specifics of the data.

The term for turning the long-skinny database format into the wide spreadsheet format is usually <i>to pivot</i> the data. This operation is pretty easy because the machine knows where to find the data, and just needs to be told which dimensions to use to make columns and which measures to include.

The other operation, the <i>unpivot,</i> is much more difficult and error-prone. When the data is already in proper table format (with all the stuff around the pure data removed), it works well though. Tools like <a href="https://eagereyes.org/blog/2015/trifacta-wrangler-for-cleaning-and-reshaping-data">Trifacta Wrangler</a> and Tableau can perform unpivots (though Tableau calls it pivot, just to be different).

## No Right Shape

Neither of these two data shapes is right or wrong. They each work well for their respective uses. The difficulty is that when data prepared with one use in mind is to be utilized for the other.

More fundamentally, it's crucial to know that these differences in data shape exist. That's the first step in trying to figure out why a particular dataset is so damn hard to work with in the tool of your choice. You won't be very happy with a wide dataset in Tableau, and neither with a long-and-skinny one in Excel.


_Posted by <a href="/about">Robert Kosara</a> on April 24, 2016_


<aside class="comments">

---
## Comments

<a href="http://jazzido.com" rel="nofollow noopener" target="_blank">Manuel</a> says…
>	Wickam summarized nicely these concepts in: http://vita.had.co.nz/papers/tidy-data.pdf

sharoz says…
>	Yeah, every since I started using the tidyr library in R, I don't see any distinction between the two. I agree, though, that GUI tools like Tableau and Excel make working with the "wrong" format very difficult.
>	
>	Robert, check out the Reshaping Data section in this cheatsheet - https://www.rstudio.com/wp-content/uploads/2015/02/data-wrangling-cheatsheet.pdf

SFdata says…
>	Trifacta Wrangler does not work in Linux.
>	(and they  simply don't even answer the comments
>	of Linux users at their site...).
>	Too bad...
>	
>	Robert, 
>	any similar "visual" tools that work in Linux?

<a href="http://www.adilyalcin.me" rel="nofollow noopener" target="_blank">Adil Yalcin</a> says…
>	Hi Robert,
>	
>	There are two ways to look into this. 1) Logical representation. 2) Analysis representation. I would not necessarily separate these cases as database vs. spreadsheet, because both representations you note can be within a spreadsheet or a database. We should abstract ourselves away from the storage and focus on it as a data organization problem.
>	
>	In terms of logical representation, you already noted both representations are equal. Wider matrix where the records are grouped by one field can be more compact. If you have more fields, the need for more indexing can increase the size to maintain computational efficiency. I would argue an ideal tool should be able to abstract away the details of how this data is actually stored, and offer alternative interfaces based on the task.
>	
>	In terms of analysis representation, the question is: "what is the units of analysis?" Do you want to analyze the trend by year, or do you want to analyze trends as "measurement" per each month? Both can be equally valid questions for analysis, but the one that is easier to grasp would depend on the domain and the underlying question. I think we are just complicating things by not asking the right question to clarify this unit of analysis. One form of representation is not more necessarily more friendly for machines or for people. The form picks its friend based on the unit of analysis, and the closest cognitive match of the data model. Our tools may prefer one representation over the other because of how we envisioned/designed our tools and solutions, so such preferences of our tools are artificial.
>	
>	I don't think separating concepts into measures and dimensions are very intuitive either. The proof is the many tutorials for Tableau which try to explain these concepts, and actually how different uses in charts mean different things. We need tools that will provide the right abstractions so that we don't "worry" about the abstraction layer, but worry about our questions. In a way, Tableau tries to do that under the hood, but when it fails, solutions may still be graphical, yet still complex.
>	
>	Lastly, the example data you gave can be also stored just a simple time series. The second "longer" table is almost a time series. However, to measure time, we do not need to separate it over months and years, we only need one logical value, a simple time representation. Any smart tool should have warned against such a use, or at least made it easier to encode the data as a list of measurements per time. We just shot ourselves in the foot because of some simple mistakes that we make in how to organize the data, and we don't even recognize our mistakes in many cases until it's too late further into the analysis, with a lot of time and effort spent. I think this is the major common underlying problem. Flipping the view of our tables is just one instance of it.

<a href="http://twitter.com/Brideau" rel="nofollow noopener" target="_blank">Ryan Brideau (@Brideau)</a> says…
>	It's also worth mentioning that spreadsheets can make use of the "long format" through pivot tables, so the nomenclature 'database' and 'spreadsheet' may create a bit of confusion.
>	
>	I'm not sure if anybody else experienced this, but my life became considerably easier using Tableau/Excel/Pandas when I found out there was a whole field dedicated to teaching how to model data for analysis. The best book I've found on it is the Data Warehouse Toolkit: https://www.amazon.ca/Data-Warehouse-Toolkit-Definitive-Dimensional/dp/1118530802/ref=sr_1_1?. While it might be geared toward people doing large-scale data warehousing, just reading the first 3 or 4 chapters is invaluable for anybody working with even reasonably complex data sets.

<a href="http://jazzido.com" rel="nofollow noopener" target="_blank">Manuel</a> says…
>	+1000 on the recommendation of the Kimball book. Dimensional modeling, IMHO, is very underappreciated by data practitioners. It provides clear nomenclature for concepts that we all come across every day.

<a href="http://www.thebiccountant.com/" rel="nofollow noopener" target="_blank">ImkeF</a> says…
>	If Excel is your spreadsheet tool, you can pivot and unpivot to your hearts contempt there already.
>	
>	Simple:  https://support.office.com/en-ie/article/Unpivot-columns-Power-Query-0f7bad4b-9ea1-49c1-9d95-f588221c7098?ui=en-US&amp;rs=en-IE&amp;ad=IE 
>	
>	Advanced: https://blogs.technet.microsoft.com/gilraviv/2015/10/18/transform-any-nested-table-to-pivot-table-with-function-query/ or back: http://www.thebiccountant.com/2015/08/12/how-to-pivot-multiple-measurescolumns-in-power-query/

</aside>

