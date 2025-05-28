<a href="http://carlosscheidegger.wordpress.com" rel="nofollow noopener" target="_blank">Carlos Scheidegger</a> says…
>	Here's another analysis of the sensitivity problem caused by the electoral college:
>	
>	http://godplaysdice.blogspot.com/2008/07/translating-popular-votes-to-electoral.html
>	
>	To quote Michael Lugo:
>	
>	"Let V be the number of voters in a country like the United States which elects its president through an electoral college, and let E be the number of states in that country. Then let n = (log V)/(log E). For the United States at present, V is about 121 million (I'm using the turnout in the 2004 election), E is 51 (the District of Columbia is a "state" for the purposes of this discussion), and so n is about 4.7.
>	
>	This quantity n is called the "responsiveness" of the system, and its rough interpretation is that if the party in control receives (1/2 + ?) of the popular vote, then it will receive (1/2 + n?) of the electoral vote, for small ?."
>	
>	In the current case, according to http://www.fivethirtyeight.com, the popular vote stands at 51.9%-46.5%, so ? is roughly 0.0274. This underestimates the current electoral vote prediction of a fancier model (it predicts 304-234, against 538.com's 345-193), but it's a good order-of-magnitude approximation.

db says…
>	You can overlap Excel series easily. Select a series, choose Format, Selected Data Series from the menu, click the Options tab in the dialog that pops up, and there is an Overlap setting you can adjust.

<a href="http://PeltierTech.com/WordPress/" rel="nofollow noopener" target="_blank">Jon Peltier</a> says…
>	I thought the use of larger bars behind smaller bars was a clever, effective approach. It's actually pretty easy to construct in Excel with regular columns, not stacked, and a single extra column of data. I'll blog about it today if time permits.
>	
>	Aside to db: overlapping is fine, but one series always overlaps in front of the other. You need one more series, formatted like the behind data but plotted in the order that overlaps in front of the other two, and which has the value of the behind series if the behind series is smaller, otherwise zero.
>	
>	I actually found the shading behind the bottom 50% distracting. It produces some of the effect where a darker background makes the foreground appear lighter.

<a href="http://PeltierTech.com/WordPress/" rel="nofollow noopener" target="_blank">Jon Peltier</a> says…
>	My post didn't take very long:
>	
>	<a href="http://peltiertech.com/WordPress/2008/10/08/overlapped-bar-chart-longer-bars-in-back/" title="Overlapped Bar Chart - Longer Bars in Back">Overlapped Bar Chart - Longer Bars in Back</a>

<a href="http://had.co.nz" rel="nofollow noopener" target="_blank">Hadley Wickham</a> says…
>	Maybe you should learn R ;)

Robert Kosara says…
>	<p>Interesting, I don't think I had seen that (I actually did this a while ago). It's a bit hidden in those options, I mostly used the (very useful) inspector/toolbar in the Mac version of Excel.</p>

Robert Kosara says…
>	<p>Interesting, thanks! I'll try that. I agree about the gray being too dark, I'll lighten that a bit. I just kept all the lines to make it easier to read the numbers from the chart. But just keeping 50% and 100% isn't a bad idea, either.</p>

Robert Kosara says…
>	<p>You're right, I really need to get around to doing that. I have it sitting on my computer, but just haven't gotten around to doing anything with it.</p>

<a href="http://writeonly.wordpress.com" rel="nofollow noopener" target="_blank">Gregg Lind</a> says…
>	I think Hadley is being a little humble, so I'd amplify and suggest *in particular* learning ggplots2  plotting in R.  

susan says…
>	To make every vote in every state politically relevant and equal in presidential elections, support the National Popular Vote bill.
>	
>	The National Popular Vote bill would guarantee the Presidency to the candidate who receives the most popular votes in all 50 states (and DC). The bill would take effect only when enacted by states possessing a majority of the electoral votes (270 of 538). When the bill comes into effect, all the electoral votes from those states would be awarded to the presidential candidate who receives the most popular votes in all 50 states (and DC). 
>	
>	The National Popular Vote bill has been approved by 21 legislative chambers (one house in CO, AR, ME, NC, and WA, and two houses in MD, IL, HI, CA, MA, NJ, RI, and VT). It has been enacted into law in Hawaii, Illinois, New Jersey, and Maryland. These states have 50 (19%) of the 270 electoral votes needed to bring this legislation into effect.
>	
>	see  http://www.NationalPopularVote.com
>	

Mike says…
>	R is very powerful but the learning curve is steep, and to produce clean, elegant graphs takes a lot of work. The defaults are pretty ugly, and simply changing a line colour or thickness takes time & effort to learn how to do. If you'll be using it all the time, it is worth the investment of effort. If not, finding a flexible GUI system is the way to go.
>	
>	Excel can be very useful for wrangling data but is largely rubbish for graphs. Numbers can produce nice, clean output, but is very limited in the type of graphs and the degree to which they can be customised.
>	
>	A nice compromise between power and ease of use is Datagraph <a href="http://www.visualdatatools.com/DataGraph/">http://www.visualdatatools.com/DataGraph/</a> It has a unique "structured drawing" approach where graphs are created by layering different elements. It takes creating a few graphs to get the hang of: find an example file that is similar to what you want to achieve and work from there.
>	
>	It is focussed on 2D, publication quality figures, but has some very nice extra features, like animated output in the form of Quicktime movies. For those who remember the ease and flexibility of CricketGraph, it is a more than worthy successor.
>	
>	I've been using it for a few months to produce  a range of 2D scientific charts and am very happy with it. The developer is also very responsive, releasing fixes overnight on several occasions when I've asked for a new feature or found a problem. The demo is functional except I think for printing and exporting. Only $40 for the full version. Versus $0 for R, but what price do you place on time and heartache :)

<a href="http://i-ocean.blogspot.com/" rel="nofollow noopener" target="_blank">derek</a> says…
>	That is exactly the situation I'm in at the moment. I have R installed, and now I'm wondering when I will ever have time and thinking-space free to break through the learning barrier. 

<a href="http://www.tableausoftware.com/blog/electoral-college-impact" rel="nofollow noopener" target="_blank">Jock Mackinlay</a> says…
>	While recreating this overlapped bar view in Tableau with an extra column like Jon Peltier did for Excel, I found that I can improve the view  by sorting the bars by the percent of the popular vote because you can clearly see all the presidents that were helped by the Electoral college to get above 50%.  You can see the view in <a href="http://www.tableausoftware.com/blog/electoral-college-impact">my blog</a>.

<a href="http://chartsgraphs.wordpress.com" rel="nofollow noopener" target="_blank">Kelly O'Day</a> says…
>	<p>Having spent several years mastering Excel charts and VBA, I see the R learning as comparable to effective charting with Excel.</p>
>	<p>The only difference is that with R, I will have a really powerful tool with 100's of world class programmers developing new tools.</p>
>	<p>I'm documenting my R learning curve <a href="http://chartsgraphs.wordpress.com"> here</a>.</p>
>	<p>My strategy is to use Excel for all of my data manipulation, transfer data to R through CSV files. This reduces my learning curve to just the graphics aspects.</p>
>	<p>I'm using the Lattice package because of my interest in small multiples - trellis -lattice. I'm also using a VBA trick I picked up along the way, I save my code snippets and reuse them extensively so that once I learn something, I can reuse the snippet. Once you have few snippets under your belt, you can be off and running.</p>

Robert Kosara says…
>	<p>Very interesting! I like the trick with the column that's zero if one is larger, that should also work in Numbers and Excel. I'll try that and post some results here.</p>

<a href="http://godplaysdice.blogspot.com" rel="nofollow noopener" target="_blank">Michael Lugo</a> says…
>	Actually, given the data from October 8, you get that Obama would expect (1/2 + 4.7*.0274)*538 = 338 electoral votes, compared to 538.com's 345 at the time. 
>	
>	538.com right now has the popular vote at 52.4-46.0, so &epsilon; is about 0.0325; the expected electoral vote is then (1/2 + 4.7*.0325)*538 = 356, while 538.com's prediction is 351.   (It should be noted that the more refined model of which mine is a linearization predicts 354 EV for Obama.)
