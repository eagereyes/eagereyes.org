[Jon Peltier](http://peltiertech.com/WordPress/) says…
> It took under a minute to set up a web query in Excel to extract the data. Data menu &gt; Import External Data &gt; New Web Query. Enter the URL, then select the table you want imported. Whenever you want, you can click on the imported table. The External Data toolbar pops up, and you can click on the icon with the exclamation point to update the query. It's a simple matter to save the sheet with the data as a CSV.

[Enrico Poli](http://www.treelab.org) says…
> This is a very nice trick. For more complex data extraction needs, I&rsquo;ve been playing with Open Dapper ([http://www.dapper.net/open/](http://www.dapper.net/open/)) and I found it quite powerful: it&rsquo;s able to extract data from almost any page showing any kind of regularity &ndash; not just tables &ndash; and export it at least as csv or rss (and you can access the rss from an url which stays live, updating the feed as the original page update etc.)
>
> (I&rsquo;ve searched the site for &ldquo;Dapper&rdquo; and the search engine returns no results, so I thought it could be useful to point it to you &ndash; thanks for this blog and for your work!)

[Tony Hirst](http://ouseful.info) says…
> Hi
>
> Some time ago I posted a walkthrough of how to scrape data from Wikipedia with Google docs, and then annotate the CSV output of the scraped data with geodata in Yahoo Pipes:
>
> [Data Scraping Wikipedia with Google Spreadsheets](http://ouseful.wordpress.com/2008/10/14/data-scraping-wikipedia-with-google-spreadsheets/)

Robert Kosara says…
> Excel for the Mac doesn't have that function, though.

Robert Kosara says…
> I haven't seen that one before, I'll have to try it out.

Robert Kosara says…
> That's probably where I saw this. I actually did this a while ago and couldn't find the page where I had seen the ImportHtml trick when I wrote the posting. I'll add a link.

[Tim](http://data.timgraham.net) says…
> I would just use yahoo pipes for this. Very easy (with a small investment of time to learn), and very flexible too. Great tool for scraping.

[derek](http://i-ocean.blogspot.com/) says…
> I would be very grateful for a reliable way to scrape PDF tables.

Bill Dedman says…
> Why not copy and paste this table into Excel. The rule: If it's a table, just paste it.

Robert Kosara says…
> The good thing about HTML is that tables are very clearly structured in the markup. That's not the case in PDF, where it's just stuff that happens to line up and maybe lines that are drawn in-between. Best option is probably to copy&amp;paste from the PDF into Excel or another spreadsheet app.

[D Kelly O'Day](http://chartsgraphs.wordpress.com) says…
> Let's combine your climate data and web scrapping posts.
>
> Here's an example where I scrapped climate science data for a visualization of the IR absorption properties of 5 greenhouse gases.
>
> <img src="http://chartsgraphs.files.wordpress.com/2009/12/nist_5_ghg_spectra1.png" alt="" width="539" height="538" />
>
> I wanted to scrap the spectrum data from 5 NIST Chemistry Webbook data web pages and generate this chart automatically.
>
> Jon Peltier is right about Excel's external data capabilities, however, Jon would need a VBA procedure to retreive the data and reproduce my 5 panel chart.
>
> Bill Dedman's suggestion about using Excel's cut and paste approach would be quite time consuming and Bill would have a challenge generating the 5 panel chart.
>
> Here's a link to my post, it includes a link to my R script, available on Google docs.
>
> http://chartsgraphs.wordpress.com/2009/12/07/understanding-the-science-of-co2%E2%80%99s-role-in-climate-change-3-%E2%80%93-how-green-house-gases-trap-heat/

Jay says…
> using something like HTML::TableContentParser or HTML::TableExtract and a cron job if i needed to keep it up to date.

[David G.](http://androidgeeky.weebly.com) says…
> Awesome feature.. great tutorial--
>
> Thanks
>
> --
> androidgeeky.weebly.com

ftr says…
> For Firefix users there is the Table2Clipboard extension that works well here, at https://addons.mozilla.org/fr/firefox/addon/dafizilla-table2clipboard/
>
> And there is TableTools2, too, at http://datatables.net/forums/discussion/3726/tabletools-2-released/p1

kristineh says…
> This is a great website, but you have some syntax errors:
>
> =ImportHtml(URL, “table”, num)
>
> should be:
> =ImportHtml(URL; “table”; num)

Christopher says…
> I tried the method you described, I keep getting a parse error.  Any idea what I am doing wrong?

JD Markland says…
> The table to clipboard method is by far the easiest. Thanks for the great posts!

ftr says…
> I ocr them with FineReader

[TechView](http://perfectnewgadgets.blogspot.com/) says…
> You could have used MS Excel's "Data--&gt;From Web" option to fetch tables from web sites. It's more easy and workable. And it could be updated automatically also when spreadsheet opens every time. Cheers...

[Mark Bullock](http://gravatar.com/marktbullock) says…
> @TechView - this doesn't work for Office for Mac 2011.
> The work-around is to construct a query and then "Get External Data", "Run Saved query".

Kevin says…
> Hi, good post, how do you find the table number in this example? tks

Kevin says…
> @ Jon Peltier --&gt; How do I do this in excel 10, if I use this http://www.fdic.gov/bank/individual/failed/banklist.html
> as an example it does not work, it just imports the whole page and not just the table as the google docs does.
> So Google Docs is alot better from what i have seen....

[Kevin Lyda (@lyda)](http://twitter.com/lyda) says…
> Just curious, why all the defensive posts from Excel users?

[wguteamsmith](http://gravatar.com/wguteamsmith) says…
> i'm a newbie with complex ideas and no programming skills. i need to extract table data from an internal web portal page. i can't find the table id. i'm in firefox and viewed the frame source. all i can find is a table class. thoughts? ideas? if i can make this work, i've just saved myself hours per week.

[arthur huppe](http://www.reconversionprofessionnelle.org/) says…
> Awesome. I bought a list of directories and I would like to import it to my google doc account. This article helped me. Thank you so much.

[Alexandru Cobuz](http://skyul.com) says…
> I didn't even know that Excel was capable of this. Great tip!
> Ha, even a beginner could scrape some data with this.

Jason Pittman says…
> Another good way to import data into a spreadsheet is from JSON data.  If you use json-csv.com you can upload text or enter a URL and a spreadsheet will be produced.

Alex says…
> Data menu &gt; Import External Data &gt; New Web Query
>
> just find this today....i was doing it by hand for years.....thanks man!

[tbanwell](http://www.spraycreek.ca/) says…
> This was a great help for me; using it to pull cattle price data.  Using 'Table 0' was the tip that saved me.  Thanks!

Bob says…
> Minor error - code needs quotes around URL, like this
> =ImportHtml("http://example.com/", "table", 0)

[Tom](http://blog.tkacprow.pl) says…
> Thanks definitely useful - I didn't know Google docs had this feature.
> I approached this issue however differently making my own Add-In and UDF functions so that there would be no need of writing VBA as in the Google example:
>
> http://blog.tkacprow.pl/excel-tools/excel-scrape-html-add/
>
> Gettting a href is easy:
> =GetElementByRegex("[URL]";"href=""(.*?)"")
>
> A more elaborate example as yours above, of getting the tables contents in Excel, is also not that complicated and just requires nesting of the UDF:
> =GeRegex(
>        GetRegex(
>              GetElementByRegex("[URL]";"([^""]*?)";0);
>              "(?:(.|\n)*?)";0);
>        "(?:(.|\n)*?)";0)
>
> gets the first  cell contents of the first  row and the first  table. Changing the "0" to higher numbers will get the next rows, cells etc. so the formulas can be dragged like other excel formulas :).
>
> Hope this will interest you!

[Grant Kaye](http://gravatar.com/grantkaye) says…
> Hi Robert, thanks for this brief tutorial. I'm wondering if your technique can be applied to automatically gather weather sensor data once a day at a specific time and feed the data into a Google Doc spreadsheet? For example: http://weather.uwyo.edu/cgi-bin/wyowx.fcgi?TYPE=SFLIST&amp;DATE=CURRENT&amp;HOUR=CURRENT&amp;UNITS=A&amp;&amp;STATION=PACV

[Robert Kosara](/about) says…
> No, because the table on that page is just raw text, not HTML. I don't know if something like [import.io](https://import.io) would work, but worth a try. You'd need to extract the text table and then run that through something that can parse tab-separated data, like Google Refine or Data Wrangler.

[Juan J. Pérez](https://www.facebook.com/magicjuand) says…
> I was wondering if there is a way to scrape only certain rows?

[Juan J. Pérez](https://www.facebook.com/magicjuand) says…
> also, if I can select a column only when a cell matches the criteria, for example, I'm doing a data scraping from the fire rescue website, on that table there are some rows I dont want on my page and I only want calls from a certain unit number.http://www.orangecountyfl.net/EmergencySafety/FireRescueActiveCalls.aspx#.VLlBL8bnjKA

[Robert Kosara](/about) says…
> Not on import, but once the data is imported, you can sort, filter, etc. in Google Docs. Click a column header to highlight it, then pick Data->Filter from the menu. When you then click on the first row in that column, you get a dropdown that lets you filter, etc.

[alexgerdom](http://alexgerdom.wordpress.com) says…
> Tabula ( http://tabula.Technology/ ) may work for you. I haven't had too much time to play around with it yet, but it shows some promise. The PDF would need to be OCR'd first, and they say it still struggles with headers. But if you have a really dense table that needs scraped, I'm sure there are worse things out there.

Craig says…
> The page I want to scrape has a submit button on it.  Is there a way to get the form to submit and use this method?  The default form information is all I need from the table.

Nate says…
> Robert,
> This is a great resource, thank you.  I've been trying to grab the table data from this website: http://som.yale.edu/faculty-research/our-centers-initiatives/international-center-finance/data/stock-market-confidence-indices/united-states-valuation-index
>
> The Googlesheets function
> =importHTML("http://www.spindices.com/indices/real-estate/sp-case-shiller-20-city-composite-home-price-index","table",0)
> returns the #N/A "imported content is empty" error, as does changing the index to 1, or 2, etc.
>
> I thought I might be able to use the importXML function, and the HTML from the site i'm attempting to retrieve data from shows:
>
>           Valuation Index - Institutional
>
>             Date
>             Index Value
>             Standard Error
>
> Oct 1989
> 80.58
> 3.36
>
> And so on.
>
> I included the start of the data I want from the first row for Oct 1989.  Since the table doesn't appear to have an id, I've tried are "//table/", "//td", "//td/", "//div/" and can't get the function to return anything so it appears I'm missing some fundamental concept.  This can't be that hard. Do you have any suggestions?

Kevin Stirtz says…
> Hi John - Just curious if Excel can scrape multiple URLs this way. Thanks

SGIII says…
> Just wanted to chime in to say how helpful this is, Robert.

aestuehler says…
> I have read all the posts and tried a variety of approaches but I am not able to extract the data I am looking for with these methods. The website appears to not have a table or list behind the data so that may be the problem - I am not sure.  I am looking to extract all of the camps listed in the New England states (CT, ME, MA, NH, RI, VT) from this site: find.acacamps.org. Using the excel approach returns no data (after I select the table created after the search).  Google sheets just returns the text on the screen from either a table  (0 - 4) or list.
>
> Any other suggestions please?

Bob G Grieger says…
> I captured the first table OK.  How do I automatically capture the next 50 pagination sheets?
>
> Thanks for this article.

Josh says…
> I think I'm having the same issue as Bob above. I'm pulling stats from here: http://www.cbssports.com/collegebasketball/stats/teamsort/NCAAB/DEFENSIVE/regularseason/yearly
>
> The default is for the page to load the first 50ish rows and then you have to select an option at the bottom to turn to the next page or view all records (neither of which are at a different URL). Any way to use this or other tools to work around this issue?
>
> Thanks!

SK says…
> Brilliant one ! Thank you :)
>
> I improvised a little on it. My challenge was to have information extracted from multiple urls present on one url.
>
> So with the help of data miner I got all urls extracted on one google spreadsheet, then using importhtml, instead of url, I gave cell address where urls are present to fetch data.
>
> This has worked well for me.
>
> Only challenge is the field of email id coming as protected whereas I can see email id mentioned on webpage. This is something still not resolved. Any view?

glennhenshaw says…
> This is good to know.
>
> You can also use python's pandas library
>
> 1) highlight the table
> 2) import pandas as pd
> 3) table = pd.read_clipboard()

Holden says…
> It is a manual process. Get the url of the 50-100 result set and use it in the next cell or sheet of the G sheets.
>
> I too would be interested if there was a simpler method.

[astapramuditya](http://astapramuditya.wordpress.com) says…
> Thanks!

Peter says…
> Hi,
>
> Do you know the method (maybe by use of the script) how to load the content of the website in case when it is loaded dynamically (ajax)?
>
> Thanks,
> Peter

Alexandro Trese says…
> Just saved me hours of time, thanks!

Jennifer Jennifer says…
> You mean Google Sheets. Google Docs is a word processor, like MS Word.

[Jérémy](https://www.commentmaison.com/) says…
> That's what I was looking for ! So simple and so helpful. thank you

Gonçalo Couto says…
> Thanks for sharing.
> Great trick!

Rahul says…
> how to know the table numbers. some tables are easily appearing by trying 1,2,3 but some are not

Ryan Stoddard says…
> exactly... I have been trying to scrape the "miscellaneous stats" table from Basketball Reference for a while now... the tables available are 1-6 and anything after that it comes up N/A.... maybe the table is labeled a random number?
