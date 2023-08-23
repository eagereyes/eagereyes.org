---
title: "The US ZIPScribble Map"
description: "What would happen if you were to connect all the ZIP codes in the US in ascending order? Is there a system behind the assignment of ZIP codes? Are they organized in a grid? The result is surprising and much more interesting than expected."
date: 2006-12-01 09:00:18
tags: 
featuredImage: https://media.eagereyes.org/media/attachments/ZIPScribbleMap-color-names-borders.png
outline: false
---

# The US ZIPScribble Map

What would happen if you were to connect all the ZIP codes in the US in ascending order? Is there a system behind the assignment of ZIP codes? Are they organized in a grid? The result is surprising and much more interesting than expected.

The idea for the ZIPScribble came from playing with Ben Fry's excellent <a href="http://benfry.com/zipdecode/">zipdecode</a>. That little applet allows you to explore the ZIP codes interactively, and reveals some very interesting patterns. What it does not give you, however, is an idea of the overall structure of the ZIP space. Jeffrey Heer has <a href="http://prefuse.org/gallery/zipdecode/">reimplemented zipdecode</a> using his <a href="http://prefuse.org/">prefuse</a> toolkit, and provides a file containing ZIP codes and coordinates. So off I went on a little programming exercise to see what simply connecting the dots would do.

<p align="center"><img title="ZIPScribble Map b/w" src="https://media.eagereyes.org/media/attachments/ZIPScribbleMap.jpg" alt="ZIPScribble Map b/w" width="600" height="350" border="0" /></p>
<p align="center">(<a href="https://media.eagereyes.org/media/attachments/ZIPScribbleMap.pdf" target="_blank">ZIPScribble Map PDF</a>)</p>

The patterns and density distribution are readily apparent, and can in fact be seen much better than when only the dots are drawn. The scribbling quality of the lines (looks like somebody was bored while talking on the phone) lead to the clever name for the map. So let's enhance the map, and see if those apparent borders are in fact state lines or just artifacts.

<p align="center"><img title="ZIPScribble Map color" src="https://media.eagereyes.org/media/attachments/ZIPScribbleMap-color.png" alt="ZIPScribble Map color" width="600" height="350" border="0" /></p>
<p align="center">(<a href="https://media.eagereyes.org/media/attachments/ZIPScribbleMap-color.pdf" target="_blank">ZIPScribble Map Color PDF</a>)</p>

Not surprisingly, some of the white lines really separate states, others don't. For the non-US folks (like yours truly), it makes sense to add state names for better readability, and also to disambiguate some problems with the rather simplistic coloring algorithm.

<p align="center"><img title="ZIPScribble Map color, names" src="https://media.eagereyes.org/media/attachments/ZIPScribbleMap-color-names.png" alt="ZIPScribble Map color, names" width="600" height="350" border="0" /></p>
<p align="center">(<a href="https://media.eagereyes.org/media/attachments/ZIPScribbleMap-color-names.pdf" target="_blank">ZIPScribble Map Color with Names PDF</a>)</p>

Adding the colors clearly adds information, but it also removes some of the mystery. The scribble quality is much more apparent from the monochrome version (nobody has lots of differently colored pens lying around). The colored version looks more interesting, but also looks much more like any other map than the monochrome version.

Since the lines between the denser areas could still be artifacts, let's add a backdrop to see if they really are state lines.

<p align="center"><img title="ZIPScribble Map Color Names Borders" src="https://media.eagereyes.org/media/attachments/ZIPScribbleMap-color-names-borders.png" alt="ZIPScribble Map Color Names Borders" width="600" height="350" border="0" /></p>
<p align="center">(<a href="https://media.eagereyes.org/media/attachments/ZIPScribbleMap-borders.pdf" target="_blank">ZIPScribble Map B/W with Borders</a>) (<a href="https://media.eagereyes.org/media/attachments/ZIPScribbleMap-color-names-borders.pdf" target="_blank">ZIPScribble Map Color with Borders PDF</a>)</p>

As some of the comments below have mentioned, Alaska and Hawaii are missing from this map. Here are these two states, they will eventually be included in the map above, and also a PDF of them will be available.

<p align="center"><img title="ZIPScribble of Alaska and Hawaii" src="https://media.eagereyes.org/media/attachments/ZIPScribble-AKHI.png" alt="ZIPScribble of Alaska and Hawaii" width="600" height="272" border="0" /></p>

Is this visualization? Sure, because it shows data. The pictures are not interactive (though there is <a href="/zipscribble-maps/interactive-zipscribble-map#US">an interactive version as well</a>), but they do allow some insight into the patterns created by the numbers. Is it useful? Probably not. But it sure is surprising and interesting, rather like a fractal image.

<hr />

See also <a href="/zipscribble-maps/interactive-zipscribble-map#US">the interactive version</a>!

There is also the <a href="/blog/2006/travelling-presidential-candidate-map">Travelling Presidential Candidate Map</a> and the <a href="/zipscribble-maps/">growing ZIPScribble map family</a>.

Updates 1/3/2007: changed projection, higher resolution images, added borders backdrop, improved coloring, added AK and HI. <a href="/blog/2007/improved-zipscribble-maps-more-countries-to-come">More details here</a>.

<a href="/blog/2007/more-zipscribble-maps">Maps for a dozen more countries</a> are now online.


_Posted by <a href="/about">Robert Kosara</a> on December 01, 2006_


<aside class="comments">

---
## Comments

Anonymous says…
>	Robert, this is fascinating.  I love the separation between states, and I particularly love how it shows relative density.  Nicely done!

Anonymous says…
>	I wish to move to Utah forthwith.

Anonymous says…
>	it would be interesting to overlay a true map of the states and see how well it lines up.

Anonymous says…
>	In my experience, it seems like a lot of zip codes are ordered by small blocks alphabetically surrounding a city. You can kind of see this by how the region scribbles don't usually connect to each other. The exceptions are cool though.

Spencer says…
>	As I understand it, the first 3 digits of the zip code indicate a distribution center.  Some distribution centers have several 3 digit codes assigned.  The last 2 digits are assigned in alphabetical order to communities served by the distribution center.
>	
>	So, I live in Ann Arbor, which is served by a distribution center in Detroit.  My zip code (at work) is 48104.  Down the road a few miles is the city of Ypsilanti, which includes a zip code 48197.  The city of Detroit has zip codes starting 482.  So we can see that the Detroit distribution center belongs to at least 481 and 482.
>	
>	Apparently, a distribution center in one state does not serve communities in a neighboring state, so we get white lines between states with (almost) no scribbles crossing them.
>	
>	Wikipedia's <a href="http://en.wikipedia.org/wiki/Zip_code">zip code article</a> says "the first three digits of the ZIP code, ... describe the region of the country". See it for lots more info.

Anonymous says…
>	like area codes, postal codes/zip are divided by state so I am sure the map would match up nicely, or so I hope.

Anonymous says…
>	Note the white space where we tested all those nukes in nevada, not many living there in the north. Zip density is also related to population.

fatbear says…
>	are WV and OH - strange - or is it that our esteemed international mapmaker didn't vary the color between those two?
>	
>	On a political/historical note, the northwest-facing of WV may be part of the reason WV broke off from VA during the Civil War and joined the North.
>	
>	The other artefact I notice is the straight white line going south from Chicago all the way to the Gulf - essentially follows the IL/IN border, but then cuts across KY and TN before lining up with the MS/AL border into the Gulf.  No straightline mountains there IIRC.  The KY & TN portions of the line are the only non-border non-water non-mountain range that are like that anywhere....

Anonymous says…
>	What about Alaska and Hawaii?  They are in the US too.

fogtop says…
>	The represented distribution in the area of the country I'm most familiar with, Long Island, doesn't appear to conform to reality. I don't understand the points of convergence. Why do so many lines appear to converge on a point at the end of the Island?   There are many other towns in between with their own zip codes which are not along these straight lines.  It's almost as if the whole 119 prefix is conflated.
>	

Anonymous says…
>	What would happen if you assign a seperate color per first number, like 0xxxx would be blue, 1xxxx would be purple, 2xxxx would be green, etc. maybe even arrange those colors according to the color spectrum and them number from there. It might be interesting to see where the colors track to. 

Robert Kosara says…
>	<p>It&#39;s your esteemed international mapmaker&#39;s simplistic color assignment algorithm&#39;s fault. ;) I tried a few variations, and I completely missed that problem. Sorry about that. I&#39;ll redo it either with a better algorithm or simply by hand.</p><p>The long line is a combination of state lines plus the Kentucky Lake (which cuts through KY and TN). You can find that quite easily using Google Maps. But you&#39;re right, this is kind of an artifact that comes from not caring about what separates connected ZIP codes clusters. </p>

Robert Kosara says…
>	I agree, I just left them out to make things simpler for the program. I&#39;ll post an update in a week or so with the missing states added.

Anonymous says…
>	It's nice but the fact that OH and WV are both orange, and NE and IA are both purple make this fall just a bit short of ideal. I realize that this was not put together by a cartographer, but worst case scenario, you could borrow a color scheme from a pre-existing map that lacks these flaws.

Robert Kosara says…
>	Interesting idea! I will have to think about that, because it may lead to some very weird colors. But definitely something to try.

Robert Kosara says…
>	I use a simple algorithm for assigning colors that is basically based on hoping that it&#39;ll work, and checking the result by looking at the picture. I missed OH/WV, but NE and IA were separated well enough by the line that I thought I could just leave them like that. But I agree that it&#39;s not optimal, and I will change it.

Robert Kosara says…
>	<div id="body1388853" class="commentbody">               <p>If I had known all that, I probably wouldn&#39;t have tried. Isn&#39;t it cool how far a bit of ignorance can get you? ;)</p>  <p>Thanks for the explanations, that is really interesting. Also, I&#39;m not claiming to have discovered some natural phenomenon here, these are of course designed by people who put a lot of work into spacing them well and allowing for future growth. But it&#39;s still fascinating what complex patterns there are, I would have expected something much more rigid and straight-forward, like a grid.</p>           </div>

<a href="http://zsmith.net" rel="nofollow noopener" target="_blank">Anonymous</a> says…
>	It resembles art without being art. (Art has soul.)

<a href="http://free-conversant.com/thom/main" rel="nofollow noopener" target="_blank">th0m</a> says…
>	I see, mostly, truck routes mirroring our national highway system, and that the far west is a burnt-out super-volcano. Notice that the mail "always gets through" and the accessibility of some areas to be classified almost generates a relief effect. 

Anonymous says…
>	Living in Utah- aside from four/five months of ridiculously good powder, I wouldn't recommend it.

Lemon says…
>	Any chance of a Canadian Version.  Postal Codes here are based on similar system (don't ask me, I barely use Canada Post anymore).  Codes are A1A 1A1
>	Alternating Letters and Numbers.  
>	
>	I guess it was too difficult to take the Zip Code system, double it and add 32.
>	
>	But I digress.
>	
>	Cheers on the excellent work!

Robert Kosara says…
>	If you point me to a dataset, I&#39;ll be happy to do a Canada version. I recently found a dataset for Germany, and I will work with that as soon as I find some time. It&#39;s only a question of getting the data; but for many countries, you have to pay for it, unfortunately.

Elricofamber says…
>	Ever thought of doing a histoical version? To see how the system evoled thru our history and to see how much forthought was given to future numbers.

<a href="http://www.onebluesun.org/trj" rel="nofollow noopener" target="_blank">the Rising Jurist</a> says…
>	<cite>Each little dense center seems to be a county, though this needs some further investigation.</cite>
>	
>	The clusters appear, in most cases, to span more than one county. For instance, there are ten times as many counties in Kentucky as there are zip code clusters. In fact, that holds true (roughly) for Tennessee and Wisconsin as well. These are all states I've lived in, so I am just noticing that off hand. Perhaps there is something to that division scheme.

Anonymous says…
>	have a desire for many wives and a crazy dominant religion?

Spencer says…
>	Glad you tried.

S. Longer says…
>	The cluster areas can cover more than one county depending on the type of distribution center. There are three main types (BMC)Bulk Mail Center will cover the largest areas as they are mostly all automated and recieve bulk mailings such as mail order catalogs.(ASF)Auxiliary Service Facilities are similar BMC's but less automated. (SCF)Sectional Center Facility, this is a center that handles three digit but can cover more than one three digit area.

S. Longer says…
>	<p><a href="http://www.usps.com/bulkmailcenters/officeinfo.htm">http://www.usps.com/bulkmailcenters/officeinfo.htm</a><br />Clicking on a BMC or ASF name will list what zip codes they service.</p>

Sewerman says…
>	You can probably find a quickie implementation of a Graph-Coloring algorithm that'll fix the colors.

Robert Kosara says…
>	So what is it, then? Trying to be art without being art would be kitsch, right?

Robert Kosara says…
>	That would certainly be interesting, but I doubt that I would be able to find the necessary data. Also, this would go back only about fourty years, which is when the ZIP codes were introduced. Before that, city names were used. 

Robert Kosara says…
>	I actually tried that quickly after I had written that statement, but thought that there was a bug in my code - because it didn&#39;t show any correlation between the clusters and counties. In light of what you are saying, it makes perfect sense now.

Anonymous says…
>	Mormons haven't practiced polygamy since before the telephone was invented.

Anonymous says…
>	but people have always practised being closed minded…

Robert Kosara says…
>	... now please leave it alone.

Anonymous says…
>	why? its fun

<a href="http://www.habbohotel.com" rel="nofollow noopener" target="_blank">Not Bob</a> says…
>	Woah...
>	That's pretty weird/cool/freaky.
>	I wonder what the UK would look like?
>	Probably the same.

Matt says…
>	The UK is atually based on a different system thats very easy to guess where places are.
>	
>	a Typical Post code is @@## #@@ (@=Letter, #=Number)
>	
>	How does it work?
>	
>	@@ corosponds to a master sorting office, (HU = HULL, SL=Slough, RG=Reading)
>	## corosponds to a sub office (SL1, SL2, SL3, SL4 (which are clearly defined zones))
>	#@@ corosponds to a Street, so from a post code thats only 7 chars long, you can get the exact street name (big streets have more than one postcode).
>	
>	The exact system is unknown, however its the last #@@ that is hard to work out. 
>	
>	## 1 Is normally the center of the area, so SL1 is central Slough
>	## 2+ Normally works like a clock starting at north (Not Always) so SL2 is north slough, SL3 is east slough, SL4 is to the south and so on. This isnt always the case, depending on population when the codes where first assigned, it may be that SL2 is north, SL3 is North East and SL4 is East. Once it has gone round full circle, it normally continues on a wider area. So if you have SL1 as Central, SL2 as North, SL3 as East, SL4 as South, SL5 as West, then SL6 would be above SL2 (say North North) SL7 would be North North East East and so on. This makes guessing a location eay. If you are in SL3, SL2 and SL4 will be close, while SL5 will be accross town. 
>	
>	I think if you tried to do a UK map, you would find that all areas where almost swerly circles, and there would be perfect borders for all the countys.
>	
>	And just as a heads up, if you want to write to santa, he has his own postcode... SAN TA1

Leitey says…
>	"Each little dense center seems to be a county, though this needs some further investigation."  I'm from Indiana, so I'll use that as my reference, but there are appear to be approximatly 13 subregions (the dense centers) in Indiana, but there are 92 counties.  They aren't aligned with Congressional districts either.

Anonymous says…
>	you should do one of the uk.... now that would be hard to do, every 1/3rd of a  street has a totaly different different post code. 

Pete says…
>	Well if he added Alaska then he would have to add Hawaii also Puerto Rico the Virgin Islands and all other US areas and lets not forget the APO's that cover the full globe.....

Robert Kosara says…
>	but it&#39;s off-topic and only leads to flame wars. I have deleted a few offensive comments, and will do the same with any kind of political or religious bickering. This site is about visualization, and while I am happy to have some not-so-topical discussions here, this is where I draw the line. There are plenty of other websites out there where you can fight this out.

Robert Kosara says…
>	I do have the data for Alaska and Hawaii, not sure about Puerto Rico. Since Alaska isn&#39;t very densely populated, it will probably be hard to make out its shape just from the ZIP scribbles, though. But I&#39;ll give it a try and post it here in a few days.

Robert Kosara says…
>	thanks! I expect Germany to look similar, since they switched to five digits only about 15 years ago (when the two Germanies reunited), and probably didn&#39;t have much &quot;organic&quot; growth. But then, I had not expected the US codes to be as interesting, so we&#39;ll see. <br /> 

The Vandal Bandit says…
>	Very nice work!  I love how it all plays out and am sure that with some other simple algorithms you could create quite a variety of maps.  
>	
>	Any chance of doing an Area Code version, or are those numbers a little more random?

Anonymous says…
>	Thank you very much! I really appreciate you stopping that! Really...what's the point of challenging other people's beleifs? It doesn't get anyone anywhere. Thank you, Robert! :)

Anonymous says…
>	Your map is extremely interesting. The white lines show up clearly for another reason closely related to those reasons already stated. Each "scribble" is a straight line from the geographical center of a 5-digit Zip Code to the Distribution Center. Even if a town butts up against a state line, the center of that town will be far enough from the state line that the scribble will not go all the way to the border, creating a generally scribble-free area between states. The few places where scribbles cross state lines are where the mileage, travel difficulty or relative sparcity of population overcomes the advantages of having a given location's Distribution Center remain within the same US state.  Dave, current USPS letter carrier, former USPS distribution clerk.

Anonymous says…
>	I don't believe ANY ZIP code or postal delivery area covers more than one state. Someone will correct me if I am wrong, I'm sure.

<a href="http://szeiger.de" rel="nofollow noopener" target="_blank">Stefan Zeiger</a> says…
>	I spent the last few hours writing my own version of a zip scribble program so I could see how this would look for Germany. For those who are interested, <a href="http://szeiger.de/zipmap/">here's the German map I made</a>. There are fewer data points than on the US map but the distribution seems to be similar.

Robert Kosara says…
>	Well done! Looks very similar, it&#39;s just denser in the south, and less dense in the northeast - which surprises me a bit, I didn&#39;t think that eastern Germany would be much sparser in terms of population than the west. What is also interesting is that I can&#39;t seem to make out where Berlin is, which should be much denser than the areas around it.

<a href="http://szeiger.de" rel="nofollow noopener" target="_blank">Stefan Zeiger</a> says…
>	The two northeastern states, Brandenburg and Mecklenburg-Vorpommern, actually have the lowest population density of all German states (73 and 87 per km² vs the German average of 231 according to <a href="http://de.wikipedia.org/wiki/Liste_der_deutschen_Bundesl%C3%A4nder,_geordnet_nach_Bev%C3%B6lkerungsdichte">Wikipedia</a>). 
>	
>	The blank spot where Berlin should be is unfortunately due to the zip code data I had available. It contains one coordinate pair per city and not per zip code, so cities with multiple zip codes won't show up on the map as prominently as they should.
>	
>	There are also cases where zip codes are shared by multiple small villages. For those, I have only used one location per zip code.

<a href="http://szeiger.de" rel="nofollow noopener" target="_blank">Stefan Zeiger</a> says…
>	I've updated the German map with more current and more precise data from OpenGeoDB. Now you can see Berlin :)
>	
>	I've also added a similar map made from area codes instead of zip codes. It's not as interesting as the zip code map though.

Robert Kosara says…
>	<p>Very cool, Berlin clearly stands out (as it should! ;). One thing I did to make it look nicer was not to draw lines between ZIP codes that connect different states. That elminiates a few of the lines that cut across and stand out a bit. But very nice indeed!</p><p>The area code map is quite chaotic, I wonder what that tells us about the people who designed those vs. the Postleitzahlen? ;) </p>

Michael Kingsley says…
>	Actually, there are a few rare cases where a ZIP Code crosses state boundaries.  Usually it is due to access problems, such as being on a military base or due to  constraints of the transporation network.
>	
>	One such case is Protem, Missouri (ZIP Code 65733).  Some of the Arkansas roads north of Bull Shoals Lake can best be accessed by the Protem delivery unit rather than an Arkansas post office.  Some examples of such roads include Ann Street, Kalijah Road, McBride Road, Red Oak Lane, and Vance Road on Highway Carrier Route H002 in ZIP Code 65733. McBride Road actually crosses across the state boundary. If you look at the road network in an online mapping program, you can see that a rural carrier from say, nearby Diamond City, AR (ZIP code 72644), on the south side of Bull Shoals Lake, would need to drive several miles to be able to access the roads listed above.
>	
>	For another example, Fort Campbell, Kentucky (ZIP Code 42223) also has some roads that exist within Tennessee.

Jerry says…
>	I could see adding AK and HI, but not the others since they're not states.  Being from AK (but living in FL currently) it would be interesting to see.  You'd definitely see where Anchorage and Fairbanks are considering 3/4 of the state's population lives in Anchorage.
>	
>	Surprisingly it looks like there are about 273 different zips ... and one area code.  News to me.

Anonymous says…
>	I learned years that my hometown, Agawam, MA has the lowest zip code in the country and have always been very proud of that!  If someone finds that I am wrong, please let me know.
>	
>	

Robert Kosara says…
>	Agawam has 01001 as its ZIP code, but the lowest on my list is Portsmouth, NH, with 00210. There are about 200 ZIPs below 01001. Sorry ;)

<a href="http://sbwineblog.journalspace.com" rel="nofollow noopener" target="_blank">wineguy</a> says…
>	Puerto Rico has 006xx ZIPs, and the US Virgin Islands are 007xx.  [Retired Clerk]

some_other_dave says…
>	QUOTE: One thing I did to make it look nicer was not to draw lines between ZIP codes that connect different states. That elminiates a few of the lines that cut across and stand out a bit.
>	
>	I personally think that the lines that cut across the state borders are among the more interesting features of the map.  Mostly because they are unexpected, at least to me.  I noted that there were several of those on the B&W map that were eliminated on the color map, and I was (slightly) disappointed.

Mark Grebner says…
>	Each state was assigned a range of ZIPs, which were generally contiguous.  As someone else noted, there are small issues near the border where mail is handled by an office located in another state for reasons of efficiency or history.
>	
>	Some 3-digit groups are assigned entirely to a single city.  For example, every 482xx ZIP is associated with "Detroit" - but that doesn't represent the legal entity, rather the postal delivery city.  In other words, it includes some close-in suburbs, and might not have been adjusted if Detroit had annexed territory located further away.  Within this kind of 3-digit group, the last two digits represent the "zones" which existed prior to the adoption of the "Zone Improvement Program", in about 1961.  Note the acronym:  ZIP.  Yes, that's the origin of the name.  So a letter than would have been addressed to "Detroit 26 Michigan" should after that have been addressed to "Detroit 48826 MI".  (The change to ZIPs more or less coincided with the adoption of the universal 2-character state abbreviations.)
>	
>	Where the city with the sorting office was not large enough to warrant the assignment of all 100 5-digit codes to itself, that city was assigned the lowest few codes, with all the ones above it assigned alphabetically.  (However, see note below.)  Thus Jackson Michigan is "49201" through "49204", but the rest of the codes are alphabetical, covering the small towns serviced out of the Jackson office.  In the case of Jackson, the sorting is all handled elsewhere now - in Lansing (489xx) - but the codes survived the relocation of the work.
>	
>	There are of course a number of entities which have been given an entire ZIP code of their own - mainly large businesses and Federal agencies.  The assignment of these codes doesn't follow any clear pattern, at least to my eye.
>	
>	Where the 3-digit prefix doesn't include an original sorting office, all the codes were assigned alphabetically.  In many cases, when it came time to assign a new code to a growing area, it wasn't possible to preserve alphabetical order, and the code was simply assigned for convenience from a range that wasn't likely to be needed.
>	
>	481xx, mentioned in another post, isn't "Detroit", but "Royal Oak" - at least that's where their mail is sorted.  I think it was originally handled (like 480xx, also) by Detroit.
>	
>	There seems to be an increasing trend by the USPS to leave these conventions behind, as they move away from dependence on human sortation (with its limited memory capacity) in favor of machine sortation (which doesn't need assistance from the alphabetical ordering of the numbers).  This is quite similar to gradual abandoment of the area code system for phone calls in the US, as switching equipment is brought online that handles and routes calls without regard to the number of digits dialed. 

Chris says…
>	I really like that....and I'll prolly get flamed for this but would you maybe do one of Canada? Our postal codes are similar....so it can probably be done, I just don't have the programming knowledge to do what you did (eep!) That's very cool tho.

<a href="http://www.truelifetales.com" rel="nofollow noopener" target="_blank">Truelife</a> says…
>	Now I want to see what underpopulated Australia would look like. I'm no programmer though. I can only just run this here browser machine. 

Robert Kosara says…
>	Sure, I would love to do all countries in the world - if I can find the data. I&#39;ll keep looking, though I know that for many places, you have to pay (and quite a bit, too) to get the data. But if anybody has pointers to data containing ZIP/postal code, latitude and logitude, I would <br />be very interested in hearing from you!

Anonymous says…
>	Australia Post has the data here
>	http://www1.auspost.com.au/postcodes/index.asp?sub=2
>	
>	Can't wait to see the result
>	
>	

Robert Kosara says…
>	That data does not have any location information that I can use. I sent them a request, let&#39;s see if they can provide some more detailed data.

Anonymous says…
>	Read a book.  I recommend "Under the Banner of Heaven" by Jon Krakauer.

Arthur Prokosch says…
>	Odd -- I was quite sure that all 00xxx were outside of the continental US. Maybe this is one of the conventions that is being circumvented now that machines are doing more of the sorting?
>	
>	Also -- Any idea why a search on usps.com doesn't list 00210 as a zip code for Portsmouth, NH, and shows now matches for where 00210 might be?

Robert Kosara says…
>	My list shows the ZIPs 210-215, which USPS doesn&#39;t seem to know (they show up again as 03801-03805, which also exist according to USPS), but there is also 501 and 544, which is for an IRS service center in Holtsville, NY. All others below 01000 are apparently not in the continental US, though.

Anonymous says…
>	As a native of New Hampshire, and a former resident of Portsmouth, I can tell you that the current ZIPs for that city are indeed 03801-03805.  
>	
>	I don't know why 00210-215 are associated with Portsmouth in your database, but I would speculate it may have something to do with federal or military installations in the area.  Does the federal government reserve the "00" prefix for itself?  Portsmouth NH is the home of the Portsmouth Naval Shipyard (actually physically in Kittery, Maine) and at the time the ZIP was implemented, Portsmouth was also home to Pease Air Force Base (half located in Portsmouth, and half in Newington, NH).  With the closure of the Air Base, part of the land is now home to the US Passport Processing Center, and the US Visa Processing Center.  Likely functions for unique federal zip codes.
>	
>	As an aside, the "03x" prefix is generally within the New Hampshire boundaries (01x is eastern Massachusetts, 02x is western Massachusetts, 04x is Maine, etc).  However, towns in south western Maine, bordering and nearly bordering NH have the "039" prefix and are serviced from New Hampshire.  This may have some historical connection (the shipyard has been operating since the early 1800's), but more likely it is a shorter distance to deliver mail from the NH side to these towns than it is to service them from an "04x" center based further north and east in the Portland, ME area.

<a href="http://www.thecomicshop.net/noise/" rel="nofollow noopener" target="_blank">Hank</a> says…
>	Absolutely useless for any of my needs, but interesting nonetheless from a visual and population density stand-point.

<a href="http://www.dustbury.com/" rel="nofollow noopener" target="_blank">CGHill</a> says…
>	The IRS has some exclusive ZIPs which don't fall into the usual pattern: one of these is Andover, MA 05501, which really sounds like it should be in Vermont.  Austin, TX 73301 borrows an Oklahoma number; Atlanta, GA 39901 is in Mississippi's range.
>	
>	And some southwestern-Georgia towns have been assigned 398xx numbers, also within the Mississippi range, mostly because Georgia is pretty much out of numbers.  (Similarly, parts of northern Virginia were given 201xx numbers, previously reserved for the District of Columbia.)
>	
>	There once was a time when Texarkana, AR and Texarkana, TX commingled numbers in the 755xx range; today, the Texas side is 75501 (or 75503, to the northwest side) and the Arkansas side is 71854.
>	
>	And there exists a legend that <a href="http://www.dustbury.com/backlog/2006/12/606_and_all_that.html">606xx was assigned to Chicago for reasons other than you might expect</a>.

Anonymous says…
>	I hadn't thought about the nuke testing. I just assumed it was because that area is mostly desert.

Anonymous says…
>	The Australian Bureau of Statistics www.abs.gov.au have digital boundaries in MapInfo format for Postal Areas. These are <strong>NOT</strong> postcodes but are an approximation of them. If you cannot find them on their web site (which is a horror to navigate) send an email to geography@abs.gov.au

<a href="http://www.nearby.org.uk/blog/2007/01/06/uk-zipscribble-map/" rel="nofollow noopener" target="_blank">Barry Hunter</a> says…
>	What a wonderful idea!
>	
>	I've just created a UK version along very similar lines: <a href="http://www.nearby.org.uk/blog/2007/01/06/uk-zipscribble-map/">UK ZIPScribble Map</a>

Anonymous says…
>	Well it's not sparsely populated because it's where the nuke testing happened, the nuke testing happened there because it's sparsely populated (which is because it's desert). Pretty big difference.

<a href="http://www.pro-article.com" rel="nofollow noopener" target="_blank">eric</a> says…
>	aww man why did you to color georgia pink!? you could of at least made it red or brown or something. anything but pink man.

Anonymous says…
>	Wow.  Glad somebody told what ZIP means, but Portland 12 Oregon did not become Portland 97212 Oregon, rather Portland OR 97212; before ZIP codes, mail witin a city would be addressed "City 12" and get there.  I believe the 2 letter state codes started at the same time as ZIP codes, but why did they not use the 2 letter state codes already used by the Coast Guard for boat licence numbers?  Now we have 2 Federal agencies with different codes for the same states.

Regina says…
>	This is very interesting! I already knew the zip codes were divided this way but it's cool to see it graphically like this.
>	
>	A similar scheme holds true for social security numbers, as well. If you get your SS# in New England, it will start with 0. If you get it in (I believe) California, it will start with 9. Note that this is where you *get* your number and not necessarily where you are born. Obviously, due to people moving about all the time, this is not as obvious as zip codes.

Anonymous says…
>	I'd be curious to know if some of the non-state white borders are county lines.

<a href="http://ert.livejournal.com" rel="nofollow noopener" target="_blank">Ert</a> says…
>	This is awesome.  It would make a nice poster.
>	
>	I'd love to see a lower-resolution version of this to see how the zip codes wander around the country.  Have you done a version with just the first two digits?
>	

Robert Kosara says…
>	Good idea, and yes I have thought about doing it. It&#39;s actually quite easy, I just haven&#39;t put any more time into this project. Another thing on my list is a kind of treemap with all the levels, not just one. I may get around to doing that in a month or so. So watch this space! ;)

Anonymous says…
>	The 00210-00215 were used for foreigners sending in applications to a processing center in Portsmouth for the Diversity Visa Lottery.  They no longer exist because the application is now online only.  

<a href="http://www.maponics.com" rel="nofollow noopener" target="_blank">Anonymous</a> says…
>	We offer free <a href=http://www.maponics.com/ZIP_Code_Maps/One_and_Two_Digit_ZIP_Code_Map/one_and_two_digit_zip_code_map.html> 1 and 2 digit ZIP Code maps</a> in PDF format for download, if that's helpful to anyone analyzing this map.   

<a href="http://www.ogre.nu/" rel="nofollow noopener" target="_blank">Anton Sherwood</a> says…
>	For <a href="http://www.ogre.nu/doodle/#dragontile">a very different project</a>, I assigned colors to numbers thus: the high bit became the high bit of the green channel; the next bit became the high bit of the red channel ... You could do the same, after scaling by a factor of (2^24/10^5).

<a href="http://www.ogre.nu/" rel="nofollow noopener" target="_blank">Anton Sherwood</a> says…
>	Better than my previous idea: if the zipcode is for example 61820, make green .62, red .10, blue .8.

<a href="http://www.yemkay.com" rel="nofollow noopener" target="_blank">Karthik</a> says…
>	Fascinating. Which tool did you use to generate these charts?

Dr. Burkey says…
>	One thing that may be mucking up the map in some areas is that a lot of Zip Codes are not for "towns".  Some buildings have their own zip codes (e.g. malls, large office buildings), and many post offices have a separate zip code for P.O. Boxes.  You will get a different picture of you deleted these.  One method I have used is to download the ZCTA centroids from the Census bureau, and delete those with zero people living there.

jo says…
>	Fun!
>	As a Geospatial Technology professional, though, I feel compelled to point out that zip codes in the US are designed for the use and efficiency of the US Postal Service - for the delivery of mail.  With this comes a few &quot;hiccups&quot; that you will run into:
>	(1) The majority of paper mail that is delivered goes to businesses, not personal home addresses.  While people do tend to live close to their employers, this map shows more information about the concentrations of both businesses and residents - and not just residents alone.  Taken to a Zip+4 level, this becomes more evident.
>	(2) Email is swiftly altering the paper mail delivery needs.
>	(3) Zip code boundaries are realigned from time to time as necessary.  In the year 2000, fully 20% of the US Zip Codes were altered in some way.
>	Good luck keeping up with all of those changes!  I can only presume that the situation is similar in other countries.
>	Thanks for making your work available.  My apologies if these topics came up elsewhere in the comments and I missed them.
>	Jo
>	
>	

<a href="http://www.saketvora.com" rel="nofollow noopener" target="_blank">Saket</a> says…
>	Thanks for doing this! enjoyed it

required says…
>	So the US is still expanding through the new occupied lands??

Anonymous says…
>	This is not a good book on Mormonisim. This book sensationalizes groups who do not subscribe to the Churches fundamental beliefs and it also blurs the lines between the religion and factions of extremesist that are not associated to the leadership of the church.

Marty Cohn says…
>	Hi Jurist:
>	
>	As a 25 year Postal worker, I know the answer to this.  The USPS doesn't look at counties/parishes at all in determining SCF (Sectional Center Facility) boundaries.  In sparsely populated rural areas it's pretty common to have a carrier cross county boundaries.
>	
>	In fact, there are a couple places where parts of 2 states are served by a single facility.  Carter Lake, IA is handled out of Omaha (due to a shift in the boundary when the Mississppi changed course).  Texarkana TX and AR are served by a single office as are Bristol TN and VA.

David says…
>	Are any zip codes shared between states. It always irritates me that online addresses ask for a menu pick from states if Zip could fill it in automatically.

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	Agreed, once you have the ZIP code, there is no need for city or state anymore, it should be auto-filled. There are several projects out there to do this, the latest even guesses the country from the ZIP/postal code (no idea how): <a href="http://daspecster.github.com/ziptastic/" rel="nofollow">ziptastic</a>

John says…
>	Robert,
>	
>	Interesting perspectives on ZIP Codes for sure!
>	
>	Could you by chance, use your data to make a origin specific ZIP Code ZONE map?  As you know the USPS uses ZONEs to determine postage and publishes interactive charts here .  But I cannot for the life of me find this information in a map form.
>	
>	
>	I could use a map showing Zones "flowing from" an origin ZIP Code.  How these Zones are color coded is not important but I would need to see the state boundaries.
>	
>	If this is something you could do and/or be interested in doing, let me know.
>	
>	Thanks for your consideration.

John says…
>	Hmm... My URL vanished.
>	
>	Here was supposed to be -- http://postcalc.usps.gov/Zonecharts

Nancy says…
>	Per http://www.zipboundary.com/zipcode_history.html --
>	
>	"Up until 2001 there were also six zip codes even lower than 00501 that were numbered from 00210 to 00215 (located in Portsmouth, New Hampshire) and were used by the Diversity Immigrant Visa program to receive applications from citizens of the six other continents."
>	
>	That URL has a lot of interesting info about ZIP codes.

Nancy says…
>	Oops... if I would have finished reading the comments above, I would have seen that someone had already provided the information about the Portsmouth ZIP codes.
>	
>	To add to some of the other comments about state boundaries, northeastern Arizona is served by the postal facility in Gallup, New Mexico, largely due to most of that area being American Indian reservation land and quite rural.  Also, parts of western Texas are served by New Mexico facilities as a matter of ease for the USPS; the TX towns are closer to the NM facilities than they are to TX facilities.

Dan says…
>	That straight white line heading south from Chicago is likely called the Mississippi River... not surprising that it separates zipcodes.
>	
>	WV &amp; OH are completely different colors, at least when I look at them - one's orange, the other's pink.

<a href="https://www.mokymai-kursai.lt/" rel="nofollow noopener" target="_blank">mokymai</a> says…
>	nice visualisation of the map.

</aside>

