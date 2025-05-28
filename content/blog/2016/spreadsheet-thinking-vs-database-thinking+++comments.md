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
