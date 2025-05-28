<p align="center"><img src="https://media.eagereyes.org/media/2009/climate/climatediff-teaser.png" alt="Climate Differences" width="536" height="232" /></p>

# Temperature Baseline Differences

Tableau started the beta of its <a href="http://www.tableausoftware.com/">Tableau Public</a> program today, and what better way to kick the tires than to run some more climate data through it? Below, you can look at temperature data from 343 weather stations over twenty years (77172 obervations) to compare the difference from the baseline numbers in the 1970s and 2000s.

Tableau Public is in a closed beta right now, but a number of people were invited to try it out and post views. It will be free once it's out, and it looks like a promising next step towards interactive visualization on the web. Since you get the full Tableau functionality, it's also a great gateway drug to becoming a regular Tableau user (I am in no way affiliated with Tableau, but I use the program in my Visual Analytics class).

After the discussion about baseline data in <a href="/data/a-look-at-climate-data">previous postings</a>, I decided to crunch some more numbers. The view below is a first start, though more can obviously be done. The map lets you pick one of the stations that have produced gapless data from 1969 to 1978 and 1999 to 2008, and for which a baseline is available (<a href="https://media.eagereyes.org/media/2009/climate/climatedata-subset.csv.zip">CSV file available here</a>). These baselines were determined over the period from 1961 to 1990, so I chose a period of ten years that lies well within that range. The view below lets you compare those to the last ten years, to see how things have changed.

You can pick years for the left and right displays below the map to compare different years. While you can select any years you like, the idea is to compare years from the 70s to years from the 00s. Doing that, you will notice that while temperatures tended to vary around a difference of 0&ordm; from the baseline in the 1970s, they are now mostly above 0. It's getting warmer.

<p align="center"><img src="https://media.eagereyes.org/media/2009/climate-dashboard.png" width="551" height="719" /></p>
