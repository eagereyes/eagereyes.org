<a href="http://www.rockitbaby.de" rel="nofollow noopener" target="_blank">Michael Schieben</a> says…
>	I like your work. Thank you for updating and sharing the data! Do you read this file http://www.apple.com/autopush/us/itunes/includes/countdown.inc ? 

Robert Kosara says…
>	That's the one. There's no magic behind the data gathering, my script simply downloads that file, checks if it's different than the previous version, and interpolates values in case there's a gap.

<a href="http://graphics.stanford.edu/~mbostock" rel="nofollow noopener" target="_blank">Mike Bostock</a> says…
>	Nice visualization, Robert. I like the mouseover interaction and the emphasis on the daily cycle! I also like that you deal appropriately with missing data.
>	
>	The next version of Protovis (<a href="http://gitorious.org/protovis">in development</a>) will support CSV parsing and number formatting: comma-grouping, perhaps rounding to billions / scientific notation / etc. We'll also improve the existing date parsing and formatting, so it's easier to convert between system- and human-readable representations.

Vani Murarka says…
>	What does the circular view convey, that the bottom view does not?
>	
>	That Thursdays have the lowest rate of download (being the innermost circle), and Sundays the highest (being the outermost circle) is easier to perceive in the circular view, even though this is conveyed in the bottom view too. However, is there any other significant strength of the circular view that is not achieved in the bottom view?

Robert Kosara says…
>	The circular view directly overlays the days, so you can tell how different they are. You can't read exact differences, but larger/smaller is quite apparent. Another way to do this would be to overlay them in a rectangular view, but that disconnects the beginning and end of each day. I wanted to see what happens during the night as well as during the day, so I thought that the circle was a better choice.
