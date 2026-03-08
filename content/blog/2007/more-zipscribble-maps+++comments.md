[Eva](http://science.easternblot.net) says…
> This is pretty cool. And just pretty, too! I was wondering if you had included the letters in the Dutch and Canadian postal codes? They both have systems that use unique codes per street/neighbourhood (approx.) and especially the map of Holland just seems too sparse.

Robert Kosara says…
> The program treats all postal codes as strings of characters, without caring about numbers or letters. There may very well be some interesting patterns to be found by ignoring the large scale, and just looking at the lowest levels. As it is though, the program treats all countries exactly the same.
>
> As for the Netherlands: what might be fooling us here is that the country is of course much smaller than, say, Spain, so it tends to look sparser at a comparable size. But it is very well possible that the data is simply incomplete.

John Smythe says…
> The letters in Dutch Zip Codes actually contain some redundancy, i.e. 1000 AA may refer to odd house numbers in one street, and 1000 AB to the even numbers.  That said, the Dutch zip code map would look a lot more dense when taking into account the two letters AFTER the digits.  I think they've been ignored in your map (perhaps because there's a space between the numbers and the letters?).

Carlos says…
> I just wish to say that I like the maps very much.  I am not related to what you do here.  I was just looking for an original way to present a map and got this, is just beautiful.
>
> I was wondering if more maps will be available, or where can I see maps from other countries, with this style.
>
> Thank you

Robert Kosara says…
> Thanks for the praise! ;) This work depends on the existence of ZIP/postal code location data, which is coming from [geonames.org](http://www.geonames.org/)
> (this data is only freely available for the US, other countries sell
> the data for quite some money). I will revisit these maps in a month or
> two to update them with newer data and possibly add new countries if
> sufficiently reliable data exists for them. I am also working on
> providing better PDF output and possibly making the program that draws
> the maps available online.

Jonathan says…
> An undertaking would be China's ZIPs. But a worthy one, I'd say.

Jude says…
> The Canada, Norway and Sweden maps seem to be suffering from a scale issue as the northern parts of each of these countries seem much larger compared to the southern parts. For example, the northernmost island Ellesmere Island in the Canadian map is almost twice the size of the province of Ontario when in actuality its 1/4 the size of Ontario. Changing the map projection would probably make these maps look much better as the southern population density for all three countries is much greater than the northern parts of those country.

Robert Kosara says…
> I am aware of that problem, and have to say that I just used the first projection that gave me usable results. I have done a bit of reading on map projections since I originally made these maps, and I am going to update them in a month or so – with better projections, among other things.

luzem says…
> In the spanish map Galicia lines are wrong the postal code numbre are distributed in four zones by the number 15xxx for A Coruña 36xxx for Pontevedra, 32xxx for Ourense and 27XXX for Lugo.
> Sorry

Anonymous says…
> If I understood well, this means that there should appear four separated (connected by a single line) regions in Galicia?

josep m. fernández says…
> Yes, and there are more errors. Ceuta has at least two postal codes (51001 and 51002).

[ifrit](http://cinemafriki.blogaliza.org) says…
> In Ceuta there are three Spanish postal codes: 51001, 51002 and 51003

Controlcé says…
> Sure, Spain is divided politically in Comunidades Autonomas (Galicia is one of them) but each CA is subdivided in provinces (what you call "regions", [see the link](http://en.wikipedia.org/wiki/Provinces_of_Spain)), each one with it's own ZIP codification. The codification is easy to assume as is assigned in an alphabetical order starting with Alava (01) and ending with Zaragoza (50) plus Ceuta and Melilla (51 and 52 -note, Ceuta actually has it's ZIP code-). [This link](http://en.wikipedia.org/wiki/List_of_postal_codes_in_Spain) could help you but the codes list is far incomplete. This means that has no sense to link all the zip codes of a region. Instead, doing it with provinces will make the map better represented (and prettier!) so please let me know if you need help to do a new improved version because I'll love it! :)

[Adrian Kuhn](http://www.iam.unibe.ch/~akuhn/blog) says…
> The scribble map of Switzerland misses the point of the US original. On the US original he explores the correlations of 10'000-blocks of ZIP codes and state boundaries. On the Swiss map however, he colors the lines be the cantons already! Which is obviously not the same since we have 26 cantons but only nine blocks of 1000 ZIP codes.
>
> [ZIP Scribble of Switzerland, --fixed!--](http://www.iam.unibe.ch/~akuhn/blog/2008/10/zip-code-map-of-switzerland/)

Robert Kosara says…
> The US map (and all other countries) are colored by states/provinces, not by the numerical zip codes. In fact, the zip codes are treated as strings, so that even "exotic" ones like the UK can be handled the same way.

[mathieu rajerison](http://datagistips.blogspot.com/) says…
> Hi,
>
> I followed the same principle as yours to order French departments by life level:
>
> If you want to have a look:
> http://datagistips.blogspot.com/2012/01/une-petite-carte-socio-niveau-de-vie.html
>
> Let me know what you think of it! ;)
>
> Mathieu

GLENN says…
> How about the Puerto Rico and the other US Territories?

[Robert Kosara](/about) says…
> Yeah, I know. Thing is, they have only a small number of ZIP codes, so you end up with just a handful of lines. And placing them on the map was pretty tricky, especially the static ones I made early on. But point taken, I'll see if I can include them in a real map version.
