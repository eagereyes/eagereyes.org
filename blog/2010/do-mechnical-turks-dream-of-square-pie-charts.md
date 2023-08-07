---
title: "Do Mechanical Turks Dream of Square Pie Charts?"
description: "User studies are an important part of visualization, but they also require a considerable amount of effort and time. In a paper presented at the BELIV workshop (part of CHI 2010), we discussed our experiences with running a number of visualization studies using Amazon's Mechanical Turk (MTurk) service. Using MTurk, we are able to run large studies in much less time than usual, and at very low cost. We also show how to avoid gaming the system, which had been reported in earlier work using MTurk."
date: 2010-04-18 19:33:26
tags: papers
featuredImage: https://media.eagereyes.org/media/2010/mturk-paper.jpg
outline: false
---

<p align="center"><img src="https://media.eagereyes.org/media/2010/mturk-paper.jpg" width="560" height="362" alt="MTurk Paper" /></p>

# Do Mechanical Turks Dream of Square Pie Charts?

User studies are an important part of visualization, but they also require a considerable amount of effort and time. In a paper presented at the <a href="http://www.beliv.org/beliv2010/index.php?title=Main_Page">BELIV workshop</a> (part of <a href="http://chi2010.org/">CHI 2010</a>), we discussed our experiences with running a number of visualization studies using <a href="http://mturk.com/">Amazon's Mechanical Turk</a> (MTurk) service. Using MTurk, we are able to run large studies in much less time than usual, and at very low cost. We also show how to avoid gaming the system, which had been reported in earlier work using MTurk.

Amazon named their service, rather cleverly, after <a href="http://en.wikipedia.org/wiki/The_Turk">The Turk</a>, a 19th-century chess-playing "robot" that was really operated by a human chess player hidden inside. The idea behind Mechanical Turk is similarly to hand off tasks that a computer can't solve to a human. These are usually very small, like figuring out if an image fits a product description, but can also be much more elaborate, like transcribing podcasts.

I realized a while ago that this would be an excellent way to conduct some types of visualization-related perception studies. The usual wisdom is that you need very tight control of the environment, screen resolution, distance from the screen, etc. We don't know these parameters when using MTurk, but if the effect is robust enough, it should work in most setups. This obviously rules out certain types of studies (like finding absolute size limits in perception), but still lets us do a lot of other things.

One problem that was found in earlier work by <a href="http://portal.acm.org/citation.cfm?id=1357054.1357127">Kittur, Chi, and Suh</a> was people trying to game the system. Our approach therefore includes tasks with known solutions, and we pay the participants based on accuracy. MTurk lets us pay a base amount that they get in any case (if we accept the results at all), plus a bonus that we can pick. For most of the tasks in our studies, we defined a reasonable window of accuracy around the correct solution that the participant would have to hit to be paid the bonus for each individual question. These were chosen to be easily doable (i.e., not to cheat them out of their bonuses), but still provide an incentive to take the task seriously and try harder.

Our results suggest that there has been very little cheating (though we did see some), and the quality of the data has been very high. We ran six studies over more than two years, most of which have been published (the rest are currently under review). We did get docked by reviewers once or twice who argued that MTurk data was not good enough, though.

So in this paper, we present a meta-analysis of the data we collected, plus a study we conducted only for the sake of testing the system (including the <a href="/blog/2008/engaging-readers-with-square-pie-waffle-charts">square pie charts/waffle charts</a> that inspired the title). We also discuss our experiences and offer some advice how to structure the study to get good results. Jeff Heer and Michael Bostock had a <a href="http://hci.stanford.edu/jheer/files/2010-MTurk-CHI.pdf">similar paper at CHI</a> (PDF), where they replicated some classic perception studies and also presented a wealth of experiences in designing and running studies on MTurk.

One question that came up in the presentation at BELIV was about our IRB applications. The IRB (Internal Review Board) needs to approve all studies involving human or animal subjects. A typical study protocol involves an Informed Consent form as its first step: the participant needs to be told about potential risks involved in the study, and has to sign a form confirming that he or she is aware of those risks. This is obviously impossible to do in a legally binding way over MTurk, and this was also my biggest concern before we ran our first study. But this turned out to be a very minor issue, as my institution (UNC Charlotte) already had criteria for online consent forms. Our studies also do not pose any realistic risk (we do not administer medications or subject people to seizure-inducing flickering), so the requirements for this step were simply not as strict.

While most studies were considerably faster than doing them in the lab, it still took an average of about a day or two to complete 50 participants. One outlier was a study we started one late Monday morning, which completed in just under two hours. We collected some statistics about when most tasks were completed, but predicting the best time is still not a very precise science. Monday morning (EST) seems to be a good choice, though.

We hope that this paper (as well as Heer and Bostock's) helps pave the way for more studies that use Mechanical Turk. The added speed and low cost make it much harder to find excuses for not doing studies. And running studies with lots of subjects, which are also more diverse than the usual college student population, will lead to much more robust results.

<hr>

Robert Kosara, Caroline Ziemkiewicz, <a href="/publications/Kosara-BELIV-2010">Do Mechanical Turks Dream of Square Pie Charts?</a> <em>Proceedings BEyond time and errors: novel evaLuation methods for Information Visualization (BELIV)</em>, ACM Press, 2010.


_Posted by <a href="/about">Robert Kosara</a> on April 18, 2010_


