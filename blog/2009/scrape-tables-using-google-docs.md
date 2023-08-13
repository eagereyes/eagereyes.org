---
title: "The Simple Way to Scrape an HTML Table: Google Docs"
description: "Raw data is the best data, but a lot of public data can still only be found in tables rather than as directly machine-readable files. One example is the FDIC's List of Failed Banks. Here is a simple trick to scrape such data from a website: Use Google Docs."
date: 2009-11-15 09:59:08
tags: data
featuredImage: https://media.eagereyes.org/wp-content/uploads/2009/11/google-import.png
outline: false
---

<p align="center"><img src="https://media.eagereyes.org/wp-content/uploads/2009/11/google-import.png" width="825" height="510" /></p>

# The Simple Way to Scrape an HTML Table: Google Docs

<a href="/data/dish-best-served-raw.html">Raw data is the best data</a>, but a lot of public data can still only be found in tables rather than as directly machine-readable files. One example is the FDIC's <a href="http://www.fdic.gov/bank/individual/failed/banklist.html">List of Failed Banks</a>. Here is a simple trick to scrape such data from a website: Use Google Docs.

The table on that page is even relatively nice because it includes some JavaScript to sort it. But a large table with close to 200 entries is still not exactly the best way to analyze that data.

After some digging around – and even considering writing my own throw-away extraction script –, I remembered having read something about <a href="http://docs.google.com/">Google Docs</a> being able to <a href="http://ouseful.wordpress.com/2008/10/14/data-scraping-wikipedia-with-google-spreadsheets/">import tables from websites</a>. And indeed, it has a very useful function called <em><a href="http://docs.google.com/support/bin/answer.py?hl=en&amp;answer=75507">ImportHtml</a></em> that will scrape a table from a page.

To extract a table, create a new spreadsheet and enter the following expression in the top left cell:

<pre>=ImportHtml(<em>URL</em>, "table", <em>num</em>)</pre>

<em>URL</em> here is the URL of the page (between quotation marks), "table" is the element to look for (Google Docs can also import lists), and <em>num</em> is the number of the element, in case there are more on the same page (which is rather common for tables). The latter supposedly starts at 1, but I had to use 0 to get it to pick up the correct table on the FDIC page.

Once this is done, Google Docs retrieves the data and inserts it into the spreadsheet, including the headers. The last step is to download the spreadsheet as a CSV file.

This is very simple and quick, and a much better idea than writing a custom script. Of course, the real solution would be to offer all data as a CSV file in addition to the table to begin with. But until that happens, we will need tools like this to get the data into a format that is actually useful.


_Posted by <a href="/about">Robert Kosara</a> on November 15, 2009_


<aside class="comments">

---
## Comments

<a href="http://peltiertech.com/WordPress/" rel="nofollow noopener" target="_blank">Jon Peltier</a> says…
>	<p>It took under a minute to set up a web query in Excel to extract the data. Data menu &gt; Import External Data &gt; New Web Query. Enter the URL, then select the table you want imported. Whenever you want, you can click on the imported table. The External Data toolbar pops up, and you can click on the icon with the exclamation point to update the query. It's a simple matter to save the sheet with the data as a CSV.</p>

<a href="http://www.treelab.org" rel="nofollow noopener" target="_blank">Enrico Poli</a> says…
>	<p>This is a very nice trick. For more complex data extraction needs, I&rsquo;ve been playing with Open Dapper (<a href="http://www.dapper.net/open/">http://www.dapper.net/open/</a>) and I found it quite powerful: it&rsquo;s able to extract data from almost any page showing any kind of regularity &ndash; not just tables &ndash; and export it at least as csv or rss (and you can access the rss from an url which stays live, updating the feed as the original page update etc.)</p>
>	<p>(I&rsquo;ve searched the site for &ldquo;Dapper&rdquo; and the search engine returns no results, so I thought it could be useful to point it to you &ndash; thanks for this blog and for your work!)</p>

<a href="http://ouseful.info" rel="nofollow noopener" target="_blank">Tony Hirst</a> says…
>	<p>Hi</p>
>	<p>Some time ago I posted a walkthrough of how to scrape data from Wikipedia with Google docs, and then annotate the CSV output of the scraped data with geodata in Yahoo Pipes:</p>
>	<p><a title="Permanent Link to &quot;Data Scraping Wikipedia with Google Spreadsheets&quot;" href="http://ouseful.wordpress.com/2008/10/14/data-scraping-wikipedia-with-google-spreadsheets/">Data Scraping Wikipedia with Google Spreadsheets</a></p>

Robert Kosara says…
>	<p>Excel for the Mac doesn't have that function, though. </p>

Robert Kosara says…
>	<p>I haven't seen that one before, I'll have to try it out.</p>

Robert Kosara says…
>	<p>That's probably where I saw this. I actually did this a while ago and couldn't find the page where I had seen the ImportHtml trick when I wrote the posting. I'll add a link.</p>

<a href="http://data.timgraham.net" rel="nofollow noopener" target="_blank">Tim</a> says…
>	<p>I would just use yahoo pipes for this. Very easy (with a small investment of time to learn), and very flexible too. Great tool for scraping.</p>

<a href="http://i-ocean.blogspot.com/" rel="nofollow noopener" target="_blank">derek</a> says…
>	<p>I would be very grateful for a reliable way to scrape PDF tables. </p>

Bill Dedman says…
>	<p>Why not copy and paste this table into Excel. The rule: If it's a table, just paste it.</p>

Robert Kosara says…
>	<p>The good thing about HTML is that tables are very clearly structured in the markup. That's not the case in PDF, where it's just stuff that happens to line up and maybe lines that are drawn in-between. Best option is probably to copy&amp;paste from the PDF into Excel or another spreadsheet app.</p>

<a href="http://chartsgraphs.wordpress.com" rel="nofollow noopener" target="_blank">D Kelly O'Day</a> says…
>	<p>Let's combine your climate data and web scrapping posts.</p>
>	<p>Here's an example where I scrapped climate science data for a visualization of the IR absorption properties of 5 greenhouse gases.</p>
>	<p> </p>
>	<p align="center"><img src="http://chartsgraphs.files.wordpress.com/2009/12/nist_5_ghg_spectra1.png" alt="" width="539" height="538" /></p>
>	<p>I wanted to scrap the spectrum data from 5 NIST Chemistry Webbook data web pages and generate this chart automatically.</p>
>	<p>Jon Peltier is right about Excel's external data capabilities, however, Jon would need a VBA procedure to retreive the data and reproduce my 5 panel chart.</p>
>	<p>Bill Dedman's suggestion about using Excel's cut and paste approach would be quite time consuming and Bill would have a challenge generating the 5 panel chart.</p>
>	<p>Here's a link to my post, it includes a link to my R script, available on Google docs.</p>
>	<p>http://chartsgraphs.wordpress.com/2009/12/07/understanding-the-science-of-co2%E2%80%99s-role-in-climate-change-3-%E2%80%93-how-green-house-gases-trap-heat/</p>
>	<p> </p>
>	<p> </p>

Jay says…
>	using something like HTML::TableContentParser or HTML::TableExtract and a cron job if i needed to keep it up to date.

<a href="http://androidgeeky.weebly.com" rel="nofollow noopener" target="_blank">David G.</a> says…
>	Awesome feature.. great tutorial--
>	
>	Thanks
>	
>	--
>	androidgeeky.weebly.com

ftr says…
>	For Firefix users there is the Table2Clipboard extension that works well here, at https://addons.mozilla.org/fr/firefox/addon/dafizilla-table2clipboard/
>	
>	And there is TableTools2, too, at http://datatables.net/forums/discussion/3726/tabletools-2-released/p1

kristineh says…
>	This is a great website, but you have some syntax errors: 
>	
>	=ImportHtml(URL, “table”, num)
>	
>	should be:
>	=ImportHtml(URL; “table”; num)

Christopher says…
>	I tried the method you described, I keep getting a parse error.  Any idea what I am doing wrong?

JD Markland says…
>	The table to clipboard method is by far the easiest. Thanks for the great posts!

ftr says…
>	I ocr them with FineReader

<a href="http://perfectnewgadgets.blogspot.com/" rel="nofollow noopener" target="_blank">TechView</a> says…
>	You could have used MS Excel's "Data--&gt;From Web" option to fetch tables from web sites. It's more easy and workable. And it could be updated automatically also when spreadsheet opens every time. Cheers...

<a href="http://gravatar.com/marktbullock" rel="nofollow noopener" target="_blank">Mark Bullock</a> says…
>	@TechView - this doesn't work for Office for Mac 2011.
>	The work-around is to construct a query and then "Get External Data", "Run Saved query".

Kevin says…
>	Hi, good post, how do you find the table number in this example? tks

Kevin says…
>	@ Jon Peltier --&gt; How do I do this in excel 10, if I use this http://www.fdic.gov/bank/individual/failed/banklist.html
>	as an example it does not work, it just imports the whole page and not just the table as the google docs does. 
>	So Google Docs is alot better from what i have seen....

<a href="http://twitter.com/lyda" rel="nofollow noopener" target="_blank">Kevin Lyda (@lyda)</a> says…
>	Just curious, why all the defensive posts from Excel users?

<a href="http://gravatar.com/wguteamsmith" rel="nofollow noopener" target="_blank">wguteamsmith</a> says…
>	i'm a newbie with complex ideas and no programming skills. i need to extract table data from an internal web portal page. i can't find the table id. i'm in firefox and viewed the frame source. all i can find is a table class. thoughts? ideas? if i can make this work, i've just saved myself hours per week.

<a href="http://www.reconversionprofessionnelle.org/" rel="nofollow noopener" target="_blank">arthur huppe</a> says…
>	Awesome. I bought a list of directories and I would like to import it to my google doc account. This article helped me. Thank you so much.

<a href="http://skyul.com" rel="nofollow noopener" target="_blank">Alexandru Cobuz</a> says…
>	I didn't even know that Excel was capable of this. Great tip!
>	Ha, even a beginner could scrape some data with this.

Jason Pittman says…
>	Another good way to import data into a spreadsheet is from JSON data.  If you use json-csv.com you can upload text or enter a URL and a spreadsheet will be produced.

Alex says…
>	Data menu &gt; Import External Data &gt; New Web Query
>	
>	just find this today....i was doing it by hand for years.....thanks man!

<a href="http://www.spraycreek.ca/" rel="nofollow noopener" target="_blank">tbanwell</a> says…
>	This was a great help for me; using it to pull cattle price data.  Using 'Table 0' was the tip that saved me.  Thanks!

Bob says…
>	Minor error - code needs quotes around URL, like this 
>	=ImportHtml("http://example.com/", "table", 0)

<a href="http://blog.tkacprow.pl" rel="nofollow noopener" target="_blank">Tom</a> says…
>	Thanks definitely useful - I didn't know Google docs had this feature.
>	I approached this issue however differently making my own Add-In and UDF functions so that there would be no need of writing VBA as in the Google example:
>	
>	http://blog.tkacprow.pl/excel-tools/excel-scrape-html-add/
>	
>	Gettting a href is easy:
>	=GetElementByRegex("[URL]";"href=""(.*?)"")
>	
>	A more elaborate example as yours above, of getting the tables contents in Excel, is also not that complicated and just requires nesting of the UDF:
>	=GeRegex(
>	       GetRegex(
>	             GetElementByRegex("[URL]";"([^""]*?)";0);
>	             "(?:(.|\n)*?)";0); 
>	       "(?:(.|\n)*?)";0) 
>	
>	gets the first  cell contents of the first  row and the first  table. Changing the "0" to higher numbers will get the next rows, cells etc. so the formulas can be dragged like other excel formulas :).
>	
>	Hope this will interest you!

<a href="http://gravatar.com/grantkaye" rel="nofollow noopener" target="_blank">Grant Kaye</a> says…
>	Hi Robert, thanks for this brief tutorial. I'm wondering if your technique can be applied to automatically gather weather sensor data once a day at a specific time and feed the data into a Google Doc spreadsheet? For example: http://weather.uwyo.edu/cgi-bin/wyowx.fcgi?TYPE=SFLIST&amp;DATE=CURRENT&amp;HOUR=CURRENT&amp;UNITS=A&amp;&amp;STATION=PACV

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	No, because the table on that page is just raw text, not HTML. I don't know if something like <a href="https://import.io" rel="nofollow">import.io</a> would work, but worth a try. You'd need to extract the text table and then run that through something that can parse tab-separated data, like Google Refine or Data Wrangler.

<a href="https://www.facebook.com/magicjuand" rel="nofollow noopener" target="_blank">Juan J. Pérez</a> says…
>	I was wondering if there is a way to scrape only certain rows?

<a href="https://www.facebook.com/magicjuand" rel="nofollow noopener" target="_blank">Juan J. Pérez</a> says…
>	also, if I can select a column only when a cell matches the criteria, for example, I'm doing a data scraping from the fire rescue website, on that table there are some rows I dont want on my page and I only want calls from a certain unit number.http://www.orangecountyfl.net/EmergencySafety/FireRescueActiveCalls.aspx#.VLlBL8bnjKA

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	Not on import, but once the data is imported, you can sort, filter, etc. in Google Docs. Click a column header to highlight it, then pick Data->Filter from the menu. When you then click on the first row in that column, you get a dropdown that lets you filter, etc.

<a href="http://alexgerdom.wordpress.com" rel="nofollow noopener" target="_blank">alexgerdom</a> says…
>	Tabula ( http://tabula.Technology/ ) may work for you. I haven't had too much time to play around with it yet, but it shows some promise. The PDF would need to be OCR'd first, and they say it still struggles with headers. But if you have a really dense table that needs scraped, I'm sure there are worse things out there.

Craig says…
>	The page I want to scrape has a submit button on it.  Is there a way to get the form to submit and use this method?  The default form information is all I need from the table.

Nate says…
>	Robert,
>	This is a great resource, thank you.  I've been trying to grab the table data from this website: http://som.yale.edu/faculty-research/our-centers-initiatives/international-center-finance/data/stock-market-confidence-indices/united-states-valuation-index 
>	
>	The Googlesheets function
>	=importHTML("http://www.spindices.com/indices/real-estate/sp-case-shiller-20-city-composite-home-price-index","table",0)
>	returns the #N/A "imported content is empty" error, as does changing the index to 1, or 2, etc. 
>	
>	I thought I might be able to use the importXML function, and the HTML from the site i'm attempting to retrieve data from shows:
>	
>	
>	  
>	    
>	      
>	        
>	        
>	          Valuation Index - Institutional
>	          
>	            Date
>	            Index Value
>	            Standard Error
>	          
>	
>	Oct 1989
>	80.58
>	3.36
>	
>	And so on.
>	
>	I included the start of the data I want from the first row for Oct 1989.  Since the table doesn't appear to have an id, I've tried are "//table/", "//td", "//td/", "//div/" and can't get the function to return anything so it appears I'm missing some fundamental concept.  This can't be that hard. Do you have any suggestions?

Kevin Stirtz says…
>	Hi John - Just curious if Excel can scrape multiple URLs this way. Thanks

SGIII says…
>	Just wanted to chime in to say how helpful this is, Robert.

aestuehler says…
>	I have read all the posts and tried a variety of approaches but I am not able to extract the data I am looking for with these methods. The website appears to not have a table or list behind the data so that may be the problem - I am not sure.  I am looking to extract all of the camps listed in the New England states (CT, ME, MA, NH, RI, VT) from this site: find.acacamps.org. Using the excel approach returns no data (after I select the table created after the search).  Google sheets just returns the text on the screen from either a table  (0 - 4) or list.
>	
>	Any other suggestions please?

Bob G Grieger says…
>	I captured the first table OK.  How do I automatically capture the next 50 pagination sheets?
>	
>	Thanks for this article.

Josh says…
>	I think I'm having the same issue as Bob above. I'm pulling stats from here: http://www.cbssports.com/collegebasketball/stats/teamsort/NCAAB/DEFENSIVE/regularseason/yearly
>	
>	The default is for the page to load the first 50ish rows and then you have to select an option at the bottom to turn to the next page or view all records (neither of which are at a different URL). Any way to use this or other tools to work around this issue?
>	
>	Thanks!

SK says…
>	Brilliant one ! Thank you :) 
>	
>	I improvised a little on it. My challenge was to have information extracted from multiple urls present on one url.
>	
>	So with the help of data miner I got all urls extracted on one google spreadsheet, then using importhtml, instead of url, I gave cell address where urls are present to fetch data.
>	
>	This has worked well for me.
>	
>	Only challenge is the field of email id coming as protected whereas I can see email id mentioned on webpage. This is something still not resolved. Any view?

glennhenshaw says…
>	This is good to know. 
>	
>	You can also use python's pandas library
>	
>	1) highlight the table
>	2) import pandas as pd
>	3) table = pd.read_clipboard()

Holden says…
>	It is a manual process. Get the url of the 50-100 result set and use it in the next cell or sheet of the G sheets. 
>	
>	I too would be interested if there was a simpler method.

<a href="http://astapramuditya.wordpress.com" rel="nofollow noopener" target="_blank">astapramuditya</a> says…
>	Thanks!

Peter says…
>	Hi,
>	
>	Do you know the method (maybe by use of the script) how to load the content of the website in case when it is loaded dynamically (ajax)? 
>	
>	Thanks,
>	Peter

Alexandro Trese says…
>	Just saved me hours of time, thanks!

Jennifer Jennifer says…
>	You mean Google Sheets. Google Docs is a word processor, like MS Word.

<a href="https://www.commentmaison.com/" rel="nofollow noopener" target="_blank">Jérémy</a> says…
>	That's what I was looking for ! So simple and so helpful. thank you

Gonçalo Couto says…
>	Thanks for sharing.
>	Great trick!

Rahul says…
>	how to know the table numbers. some tables are easily appearing by trying 1,2,3 but some are not

Ryan Stoddard says…
>	exactly... I have been trying to scrape the "miscellaneous stats" table from Basketball Reference for a while now... the tables available are 1-6 and anything after that it comes up N/A.... maybe the table is labeled a random number?

</aside>

