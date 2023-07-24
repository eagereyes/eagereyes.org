---
title: "Conference Acceptance Rates"
description: "Acceptance rates are one of the key ways of measuring the quality of conferences. I think it's time we collect that data for conferences relevant to visualization. I have put together a page for this, and have found some of that data. But I need your help to fill in the gaps and suggest other conferences that would be of interest."
date: 2010-06-07T00:20:04.000Z
tags: 
outline: false
---

# Conference Acceptance Rates

<a href="http://eagereyes.org/blog/2010/conference-acceptance-rates"><img src="http://eagereyes.org/media/2010/acceptance-rates.png" width="560" height="260" alt="acceptance rates over time" /></a>

Acceptance rates are one of the key ways of measuring the quality of conferences. I think it's time we collect that data for conferences relevant to visualization. I have put together <a href="http://eagereyes.org/service/acceptance-rates">a page for this</a>, and have found some of that data. But I need your help to fill in the gaps and suggest other conferences that would be of interest.

I originally only wanted to include the VisWeek conferences, but then I figured it would make sense to extend the list a little bit. So currently, there is InfoVis, Vis, VAST, EuroVis, AVI, UIST, and CHI. I am open to suggestions for further conferences to include, but I want to keep focusing on visualization. So even though CHI and UIST are included, I don't want to expand into HCI much more.

There is also missing data. Especially for InfoVis, IEEE Xplore doesn't have the prefaces for conferences before 2005. Some of the early Vis conferences and a few others are also missing. Please take a look at <a href="http://eagereyes.org/service/acceptance-rates">the list</a> and if you have access to proceedings for years where numbers are missing, <a href="http://eagereyes.org/contact">send them to me</a> or leave a comment below.

[raw]
<script src="http://eagereyes.org/media/protovis-r3.2.js" type="text/javascript"></script>
[/raw]

Given that this is about visualization conferences, I figured it would make sense to also visualize the data. The first visualization shows acceptance rates from 1990 to 2010. Not all of the missing lines are actually missing data, because the different conferences started at different times.

[raw]
<!--[if gt IE 8]><!-->
<script type="text/javascript+protovis"><!--

    var dataURL = "http://eagereyes.org/media/conferences.json";

    var contentWidth = 460;
    var contentHeight = 235;

    var legendWidth = 60;
    var leftWidth = 30;

    var bottomHeight = 25;
    var topPadding = 10;

    var width = leftWidth+contentWidth+legendWidth;
    var height = contentHeight+bottomHeight+topPadding;
    var lastYear = 2010;
    var firstYear = lastYear-20;

    var JSONdata = jQuery.ajax({ type: "GET", url: dataURL, async: false }).responseText;
    var conferences = JSON.parse(JSONdata);

    var numConferences = 0;

    for (var conference in conferences) {
        if (conferences.hasOwnProperty(conference)) {
            var conf = conferences[conference];
            // cut off years that are too far back
            if (conf.firstYear < firstYear) {
                conf.accepted = conf.accepted.slice(firstYear-conf.firstYear, conf.accepted.length);
                conf.submitted = conf.submitted.slice(firstYear-conf.firstYear, conf.submitted.length);
                conf.firstYear = firstYear;
            }

            // calculate acceptance rates
            var rates = [];
            for (var i = 0; i < conf.submitted.length; i++) {
                if (conf.submitted[i] > 0) {
                    rates[i] = conf.accepted[i]/conf.submitted[i];
                } else {
                    rates[i] = 0;
                }
            }
            conf.rates = rates;

            conf.colorIndex = numConferences;

            numConferences += 1;
        }
    }

    // yearsAligned and percentAligned align the coordinate to the full pixel+.5,
    // to avoid double-wide lines due to anti-aliasing
    var years = pv.Scale.linear(firstYear, lastYear).range(leftWidth, leftWidth+contentWidth);
    var yearsAligned = function(d) {
        return Math.round(years(d))+.5;
    }

    var percent = pv.Scale.linear(0, .5).range(bottomHeight, bottomHeight+contentHeight);
    var percentAligned = function(d) {
        return Math.round(percent(d))+.5;
    }

    var color = pv.Colors.category10(numConferences);

    // the year being pointed to by the mouse
    var activeYear = -1;

    // add a line for a conference to the chart. Also adds the indicator dots and value labels,
    // but they're invisible until triggered by the "point" pseudo-event
    var addLine = function(panel, conference, data, scale, percent) {
        panel.add(pv.Line)
            .data(data)
            .bottom(scale)
            .strokeStyle(color(conference.colorIndex))
            .lineWidth(2)
            .left(function() yearsAligned(conference.firstYear+this.index))
            .segmented(true)
            .visible(function(d) d > 0)
            .event("point", function() { activeYear = conference.firstYear+this.index; return this.parent; })
            .event("unpoint", function() { activeYear = -1; return this.parent; })
        .anchor().add(pv.Dot)
            .size(2)
            .fillStyle(color(conference.colorIndex))
            .strokeStyle(color(conference.colorIndex))
            .visible(function() activeYear == conference.firstYear+this.index)
        .anchor("top").add(pv.Label)
            .textBaseline("bottom")
            .textAlign("center")
            .text(function(d) (percent)?Math.round(d * 100)+"%":d);
    }

    // ugly global variable to make it easier to order conferences in the legend in a particular
    // way by calling the function below in the right sequence.
    var legendIndex = 0;

    // add a conference to the legend. Order is from top down.
    var addLegend = function(panel, conference) {
        panel.add(pv.Rule)
            .strokeStyle(color(conference.colorIndex))
            .bottom(contentHeight-legendIndex*15)
            .left(contentWidth+leftWidth+5)
            .width(15)
            .lineWidth(2)
        .anchor("right").add(pv.Label)
            .text(conference.shortName)
            .textBaseline("middle");

        legendIndex += 1;
    }

    var makeLegend = function(panel) {
        addLegend(panel, conferences.infovis);
        addLegend(panel, conferences.vis);
        addLegend(panel, conferences.eurovis);
        addLegend(panel, conferences.vast);
        addLegend(panel, conferences.uist);
        addLegend(panel, conferences.chi);
    }

    var acceptanceRates = new pv.Panel()
        .width(width).height(height)
        .fillStyle("#fff")
        .event("mousemove", pv.Behavior.point(Infinity).collapse("y"));

    // year indicator for mouse-over
    acceptanceRates.add(pv.Rule)
        .left(function() yearsAligned(activeYear))
        .visible(function() activeYear != -1)
        .strokeStyle("#ddd")
        .height(contentHeight)
        .bottom(bottomHeight);

    // horizontal background grid with % labels
    acceptanceRates.add(pv.Rule)
        .data(percent.ticks(10))
        .strokeStyle("#eee")
        .bottom(percentAligned)
        .width(contentWidth+3)
        .left(leftWidth-3)
    .anchor("left").add(pv.Label)
        .textBaseline("middle")
        .visible(function() this.index > 0 && this.index % 2 == 0)
        .text(function(d) Math.round(d*100) + "%");

    // years and year ticks
    acceptanceRates.add(pv.Rule)
        .data(pv.range(firstYear, lastYear+1))
        .left(yearsAligned)
        .bottom(bottomHeight-4)
        .height(4)
    .anchor("bottom").add(pv.Label)
        .textAlign("center")
        .textBaseline("top")
        .visible(function(d) (d % 5) == 0);

    // lines in the chart
    addLine(acceptanceRates, conferences.vis, conferences.vis.rates, percentAligned, true);
    addLine(acceptanceRates, conferences.chi, conferences.chi.rates, percentAligned, true);
    addLine(acceptanceRates, conferences.uist, conferences.uist.rates, percentAligned, true);
    addLine(acceptanceRates, conferences.vast, conferences.vast.rates, percentAligned, true);
    addLine(acceptanceRates, conferences.eurovis, conferences.eurovis.rates, percentAligned, true);
    addLine(acceptanceRates, conferences.infovis, conferences.infovis.rates, percentAligned, true); 

    makeLegend(acceptanceRates);

    // done.
    acceptanceRates.render();
// -->
</script>

<noscript>
<!--<![endif]-->
<img src="http://eagereyes.org/media/2010/acceptance-rates.png" width="560" height="260" alt="acceptance rates over time" />
<!--[if gt IE 8]><!-->
</noscript>
<!--<![endif]-->
[/raw]

The following shows numbers of submissions. CHI's increase in submissions is impressive; even more impressive is that they kept their acceptance rate nearly constant through this enormous growth.

[raw]
<!--[if gt IE 8]><!-->
<script type="text/javascript+protovis"><!--
    var submissions = new pv.Panel()
        .width(width).height(height)
        .fillStyle("#fff")
        .event("mousemove", pv.Behavior.point(Infinity).collapse("y"));

    var submissionsScale = pv.Scale.linear(0, 1400).range(bottomHeight, bottomHeight+contentHeight);
    var submissionsScaleAligned = function(d) {
        return Math.round(submissionsScale(d))+.5;
    }

    // year indicator for mouse-over
    submissions.add(pv.Rule)
        .left(function() yearsAligned(activeYear))
        .visible(function() activeYear != -1)
        .strokeStyle("#ddd")
        .height(contentHeight)
        .bottom(bottomHeight);

    // horizontal background grid with labels
    submissions.add(pv.Rule)
        .data(submissionsScale.ticks(6))
        .strokeStyle("#eee")
        .bottom(submissionsScaleAligned)
        .width(contentWidth+3)
        .left(leftWidth-3)
    .anchor("left").add(pv.Label)
        .textBaseline("middle")
        .visible(function(d) d > 0);

    // years and year ticks
    submissions.add(pv.Rule)
        .data(pv.range(firstYear, lastYear+1))
        .left(yearsAligned)
        .bottom(bottomHeight-4)
        .height(4)
    .anchor("bottom").add(pv.Label)
        .textAlign("center")
        .textBaseline("top")
        .visible(function(d) (d % 5) == 0);

    // lines in the chart
    addLine(submissions, conferences.vis, conferences.vis.submitted, submissionsScaleAligned, false);
    addLine(submissions, conferences.chi, conferences.chi.submitted, submissionsScaleAligned, false);
    addLine(submissions, conferences.uist, conferences.uist.submitted, submissionsScaleAligned, false);
    addLine(submissions, conferences.vast, conferences.vast.submitted, submissionsScaleAligned, false);
    addLine(submissions, conferences.eurovis, conferences.eurovis.submitted, submissionsScaleAligned, false);
    addLine(submissions, conferences.infovis, conferences.infovis.submitted, submissionsScaleAligned, false);   

    makeLegend(submissions);

    // done.
    submissions.render();
// -->
</script>

<noscript>
<!--<![endif]-->
<img src="http://eagereyes.org/media/2010/submissions.png" width="560" height="260" alt="numbers of submissions over time" />
<!--[if gt IE 8]><!-->
</noscript>
<!--<![endif]-->
[/raw]

The next task is to look into impact factors for visualization journals. That information seems to be much harder to come by though, unfortunately. But it would be very worthwhile.

Follow <a href="http://eagereyes.org/acceptance-rates">this link to the acceptance rates data</a>. The data is also available in CSV and JSON formats in <a href="http://github.com/eagereyes/VisLitDB">a repository on github</a>.


---
## Comments

<a href="http://www.vizworld.com" rel="nofollow noopener" target="_blank">Randall Hand</a> says…
>	Does Acceptance Rate really correlate to Conference Quality?  I've never heard a convincing argument of this.
>	
>	Seems most of the conferences I know of with very low Acceptance Rates seem to suffer from the "in-crowd" syndrome, where they only accept papers from the same few people every year, no matter what they are.
>	
>	Perhaps something connecting the papers & acceptance rates with the number of other papers using them as a reference (to find "foundation" papers) would be more useful.

Robert Kosara says…
>	There are certainly limits, a very low acceptance rate can be problematic. That's also the reason CHI didn't just decide to keep the number of papers constant and let the acceptance rate go down to 10% or so when submissions were increasing.
>	
>	But it's still meaningful. There's no question that a conference with a 25% rate will have higher-quality papers than one with 40% or more. A rate around 20-25% is probably the best: it's selective while still leaving room for new ideas. And it's also a question how democratic and open the community is, and if it's controlled by a few powerful people.
>	
>	Citation counts are another good metric, but much harder to come by. There's also a PageRank-like approach that looks at how highly cited the papers are that are citing your paper, etc. But the problem with that is getting the data, parsing references, etc.

<a href="http://www.theusRus.de/" rel="nofollow noopener" target="_blank">Martin Theus</a> says…
>	I am completely with you that extreme rates may be a hint that there is something wrong with the conference. But what makes a good conference? If it is just a "meeting" of the "best" papers, we are only generating CO2 by flying there. But seriously, meeting "the right" people, having the chance to bump into each others and exchange ideas is probably far more contributing to a  good conference. The citation count is probably another thing you need to believe in, and often there is the correlation you have been talking about.
>	
>	Good academic work is not necessarily bound to playing according to the commonly established system. Or vice versa, there is far too much happening in the community which just pays homage to the system. Both your suggested measures are tightly bound to the system - which may certainly be a good orientation to start off.
>	
>	Anyways, great that you collected the data!

<a href="http://www.cs.ubc.ca/~tmm" rel="nofollow noopener" target="_blank">Tamara Munzner</a> says…
>	I'm now back in my office after several weeks in Europe, and have access to my bookshelves again. Here's a bunch of the missing data:
>	
>	
>	conf, accept, submit, rate
>	
>	infovis95, 18, 37, 49%  
>	infovis96, 19, 34, 56%  
>	infovis97, 16, 27, 59%  
>	infovis98, 18, NA, NA  
>	infovis99, 19, 47, 40%  
>	infovis00, 20, NA, NA  
>	infovis01, 22, 63, 35%  
>	infovis02, 23, 78, 30%  
>	infovis03, 29, 90, 32%  
>	infovis04, 27, 89, 30%  
>	
>	vis90, 45, NA, NA  
>	vis91, 41, NA, NA  
>	vis92, 44, NA, NA  
>	vis93, 41, NA, NA  
>	
>	vast06, 26, 60, 43%  
>	
>	uist91, 24, NA, NA  
>	
>	InfoVis98 preface has no submission numbers. Chairs Graham Wills and John Dill.  
>	InfoVis 00 proceedings has no preface. Chairs Daniel Keim and Steve Roth.  
>	
>	Vis90 preface has no submission numbers. Chair Arie Kaufman.  
>	Vis91 preface has no submission numbers. Chairs Greg Nielson and Larry Rosenblum.  
>	Vis92 preface has no submission numbers. Chairs Arie Kaufman and Greg Nielson.  
>	Vis92 preface has no submission numbers. Chairs Greg Nielson and Dan Bergeron.  
>	
>	UIST91 has no preface. Chair was Jock Mackinlay.  
>	
>	Depending on your motivation level, you could ping the chairs to see if they have records for the missing years. It would be good to have the data, I'm quite irritated that they didn't include it in the first place for the archival record. 
>	
>	Cheers,
>	Tamara
>	

Robert Kosara says…
>	Thank you so much! I'll update the page and data files right away.
>	
>	Thanks also for the names of the chairs, I'm going to ask them for the missing acceptance rates. One problem I see with the move towards electronic proceedings is that they don't seem to include those prefaces (at least VisWeek 2009 didn't), and the digital libraries are sometimes missing pages.


