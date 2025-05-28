<a href="http://www.datadrivenconsulting.com" rel="nofollow noopener" target="_blank">Alex Kerin</a> says…
>	Just wanted to say thanks for these primers - Part one really helped me when creating the Protovis dashboard: http://www.datadrivenconsulting.com/2010/06/dashboards-without-bi-tool/
>	
>	I did not know about the JSON format - I've been using Excel and concatenate to create the data files, which is tiresome..
>	
>	If there is going to be another primer, perhaps you could also touch on (this.index), and (this.parent.index) as my lack of knowledge around these two had me stuck for hours trying to color the stacked bars individually 

Robert Kosara says…
>	There will definitely be more parts. I've still barely scratched the surface. I think I've got enough covered now to do what I had in mind initially in the next part: recreate the Presidents Chart in Protovis. After that, there's interaction, behaviors, different chart types, layouts, etc.
>	
>	Also, for JSON export from Excel: you can save as CSV and run that through a CSV-to-JSON converter (I linked to one close to the top above). Also, I'm pretty sure there must be JSON export plugins for Excel, you might want to google those.

<a href="http://graphics.stanford.edu/~mbostock/" rel="nofollow noopener" target="_blank">Mike Bostock</a> says…
>	Thanks again for another excellent tutorial! I made a variant of the earthquake visualization using a log-scale for magnitude on the y-axis and a date-scale for the x-axis:
>	
>	http://graphics.stanford.edu/~mbostock/quakes/quakes.html

Robert Kosara says…
>	Some date handling code for me to steal, thanks! ;)
>	
>	I'm not sure I agree about the log scale, though. The Richter scale already is logarithmic, so another log makes the differences appear even smaller than they actually are. I'm actually tempted to use some kind of exponential axis to more accurately show the real differences in what the numbers really mean in terms of power.

<a href="http://graphics.stanford.edu/~mbostock/" rel="nofollow noopener" target="_blank">Mike Bostock</a> says…
>	Yep, you're right. I reverted the log scale.

gnomic says…
>	I'm just trying to create some graphics at work and feel like I just need to know enough at the moment to set up an environment to hack the examples using the data I have (mostly in excel). I see an ajax call - not sure what  I need to do that - and then I've seen things about jquery, etc. that makes me realize I just need to know what I need to have to see up an effective working system, parse the data into json (both static and dynamic), and what I need to know in order to read through the online docs to find answers.
>	
>	Thanks. This is all very helpful 

<a href="http://technology.qatar.tamu.edu/rc" rel="nofollow noopener" target="_blank">Ali Sheharyar</a> says…
>	Thanks for the wonderful series of the Protovis tutorials. I look forward to more parts :).
>	
>	Thanks.

<a href="http://simon.auner.se" rel="nofollow noopener" target="_blank">Simon</a> says…
>	Thanks for these tutorials. I've been sketching on Protovis visualizations for a couple of weeks now as a school project, and these tutorials clarify a lot of stuff that I've achieved by trial-and-error up till now. Cheers!

Jakub says…
>	Thanks for these tutorials.
>	
>	I had a problem while trying to reuse your code. 
>	I changed following part of code:
>	var JSONdata = $.ajax({ type: "GET", url: dataURL,
>	        async: false }).responseText;
>	var earthquakes = JSON.parse(JSONdata);
>	
>	to
>	var earthquakes = [];
>	$.ajax({url: './earthquakes.json', async: false, dataType: 'json',
>		success : function (json) {
>		    earthquakes = json;
>		  }
>	}); 
>	
>	Two facets are shown here: 
>	1. - normally I can download the JSON file from your domain, but inside the js code it didn't work. So in this example I use the filesystem file.
>	2. I couldn't set the result (json content) to the variable, so I assigned the value inside the function called if success. 
>	
>	I'm a newbie in js, but I leave this comment for anybody who will have a problem I will not not why.
>	
>	

Matt says…
>	Like Jakub I'm new to JavaScript as well as Protovis.
>	
>	I'm getting an error at the JSON.parse statement.  My understanding is that my browser (Firefox 3.6.8) should handle this.  Is there something that I haven't installed?

Matt says…
>	I think the error is because the $.ajax statement is not retrieving the data from the URL correctly.  I can get JSON.parse to work if I use test strings.
>	
>	Everything else is great.  Thanks for the tutorial, it has really helped be get going with Protovis.

Jakub says…
>	I don't know it. I'm newbie too. 

Woods says…
>	I'm also getting the JSON.parse error mentioned above.

Kate says…
>	What if you wanted to show little icons instead of numbers for rules, for instance a flat line at zero and sharp up and down line for a high magnitude.  How would you include icons or images instead of numbers?

Bottleboot says…
>	I'm getting the same error. I posted a topic about it on stackoverflow, but no one knows the answer to this :(/

Merten says…
>	I had the same JSON issue with Firefox and Chrome. But Jakubs suggested solution handled it. Thanks!

reflect9 says…
>	i appreciate this!

<a href="http://chaos.weblogs.us" rel="nofollow noopener" target="_blank">Gangadhar</a> says…
>	The reason you can't access the remote host from the local machine is because of XSS restrictions. SO [link](http://stackoverflow.com/questions/5113481/ajax-or-get-function-get-receive-only-on-local-files)
>	Another way to get around this is, other than loading the file from the local is to start a simple HTTP server using python like this `python -m SimpleHTTPServer` and then have the .JSON file in the directory from where you ran the python command.
>	
>	Then you change the dataURL to http://localhost:8000/earthquakes.json

<a href="http://www.smagula.org" rel="nofollow noopener" target="_blank">Stefan</a> says…
>	I am teaching myself Protovis, and am really enjoying the example and the tutorial. Useful and inspiring.

<a href="Http://Ramblings.mcpher.com" rel="nofollow noopener" target="_blank">Bruce</a> says…
>	There were some comments on how to get json out of excel. Here are are a load of examples and downloadable applications calling web services and passing json directly  to and from excel.
>	
>	http://ramblings.mcpher.com/Home/excelquirks/json
>	
>	Bruce
