<figure><img src="https://media.eagereyes.org/wp-content/uploads/2009/11/google-import.png" width="825" height="510"/></figure>

# The Simple Way to Scrape an HTML Table: Google Docs

[Raw data is the best data](/blog/2009/dish-best-served-raw), but a lot of public data can still only be found in tables rather than as directly machine-readable files. One example is the FDIC's [List of Failed Banks](http://www.fdic.gov/bank/individual/failed/banklist.html). Here is a simple trick to scrape such data from a website: Use Google Docs.

The table on that page is even relatively nice because it includes some JavaScript to sort it. But a large table with close to 200 entries is still not exactly the best way to analyze that data.

After some digging around – and even considering writing my own throw-away extraction script –, I remembered having read something about [Google Docs](http://docs.google.com/) being able to [import tables from websites](http://ouseful.wordpress.com/2008/10/14/data-scraping-wikipedia-with-google-spreadsheets/). And indeed, it has a very useful function called *[ImportHtml](http://docs.google.com/support/bin/answer.py?hl=en&amp;answer=75507)* that will scrape a table from a page.

To extract a table, create a new spreadsheet and enter the following expression in the top left cell:

=ImportHtml(*URL*, "table", *num*)

*URL* here is the URL of the page (between quotation marks), "table" is the element to look for (Google Docs can also import lists), and *num* is the number of the element, in case there are more on the same page (which is rather common for tables). The latter supposedly starts at 1, but I had to use 0 to get it to pick up the correct table on the FDIC page.

Once this is done, Google Docs retrieves the data and inserts it into the spreadsheet, including the headers. The last step is to download the spreadsheet as a CSV file.

This is very simple and quick, and a much better idea than writing a custom script. Of course, the real solution would be to offer all data as a CSV file in addition to the table to begin with. But until that happens, we will need tools like this to get the data into a format that is actually useful.
