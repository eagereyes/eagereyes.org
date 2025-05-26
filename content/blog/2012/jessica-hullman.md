---
title: "Watchlist: Jessica Hullman"
description: "Among the papers that stood out at InfoVis 2011 were two that shared an author, and that were presented in the same session by the same person: Jessica Hullman. These papers were Benefitting InfoVis with Visual Difficulties (with Eytan Adar and Priti Shah) and Visualization Rhetoric: Framing Effects in Narrative Visualization (with Nicholas Diakopoulos)."
date: 2012-02-08 22:30:00
tags: journalism
featuredImage: 
---

# Watchlist: Jessica Hullman

Among the papers that stood out at InfoVis 2011 were two that shared an author, and that were presented in the same session by the same person: <a href="http://www-personal.umich.edu/~jhullman/">Jessica Hullman</a>. These papers were <em><a href="http://www-personal.umich.edu/~jhullman/hullman_adar_shah_infovis11.pdf">Benefitting InfoVis with Visual Difficulties</a></em> (with Eytan Adar and Priti Shah) and <em><a href="http://www-personal.umich.edu/~jhullman/hullman_diakopoulos_infovis11.pdf">Visualization Rhetoric: Framing Effects in Narrative Visualization</a></em> (with Nicholas Diakopoulos).

Now I admit that I have a particular interest in both topics: cognitive issues in visualization and visual rhetoric/storytelling. But both topics are increasingly recognized as important by others in the field, which explains not only why the papers were accepted, but also the Best Paper Honorable Mention for the <em>Visual Difficulties</em> paper.

The <em>Visualization Rhetoric</em> paper describes the use of visualization in the telling of news stories. While we like to think of data visualization as an objective science, there are many subtle and not-so-subtle ways in which a visualization can be framed and manipulated to tell different kinds of stories. The paper describes some of these choices in examples and touches on many issues that are not typically considered in visualization, like connotations, cultural codes and conventions, etc. It's a great addition to Segel and Heer's storytelling paper from 2010 and a treasure trove of ideas and issues to think about when looking at how visualization is used in the media.

A recent paper on learning found that making tasks more difficult can be beneficial for learning. In particular, the use of difficult fonts can improve people's retention of facts from a piece of text. The <em>Visual Difficulties</em> paper examines how this idea might apply to visualization. This is clearly a speculative paper, and the authors are careful to discuss issues with findings like preferences for certain visualizations versus people's actual performance using them. The entire idea is counter-intuitive to begin with, but the ideas presented and the entire direction of the paper are intriguing. What the paper lacks are concrete designs or experiments that show how difficulties actually benefit people using a visualization, though I have no doubt that somebody will conduct such a study soon.

In addition to the papers themselves, the presentations were also remarkable: Jessica referred the audience to the papers for more details. While it sounds trivial, a common mistake is trying to pack every little detail of the paper into a 15-minute presentation, rather than giving a good motivation and clear, concise idea of the work.

## And Now A Long Defense Against Stephen Few

In his <a href="http://www.perceptualedge.com/articles/visual_business_intelligence/visual_difficulties.pdf">October/November/December 2011 Visual Business Intelligence Newsletter</a>, Stephen Few attacked Hullman's <em>Visual Difficulties</em> paper at some length. Unfortunately, many of his arguments seem to be based on a superficial reading of the paper that glosses over some important details of the arguments the authors are making.

He essentially opens his critique with a large picture of a 3D pie chart, criticizing Hullman et al.'s endorsement of 3D charts. What they say, however, is a lot more nuanced. They clearly report findings that show that 3D charts typically decrease performance (Section 1.2.1). The point they make is about preference and engagement, and is clearly phrased as a possibility and not a recommendation.

Steve also dissects their supposed misunderstanding of chart junk. This is largely based on what is clearly a typo in the beginning of Section 3.1.2 in the paper: "Charts with higher data-ink ratios have conventionally been equated with ‘embellishment’ or ‘decoration’." It's obvious from the rest of the paper that the authors understand what chart junk is, though, and they correctly use the data-ink-ratio in other parts of the paper, including a few sentences later in the same paragraph as the incorrect use.

Another point of criticism is the question of metrics. When Hullman et al. use a study on people's preferences as an argument for 3D charts. They do not claim that they are more effective, as Steve suggests, but correctly talk about preference. In fact, they clearly contrast preference to performance, stating that performance is in fact decreased by 3D effects.

Apart from Steve's somewhat superficial reading of the issue, the underlying question is a really interesting one: how should we measure effectiveness? The easy answer is to look at accuracy and response time, which has been the gold standard so far. But is that really all there is? Hullman et al. also report on a study by David Sprague and colleagues that looked at a music visualization and describe the contrast between people's preferences and performance. Participants in Sprague's study performed worse using an animated version of the visualization, but still clearly preferred that. Stephen Few quips that, "[as] we all know, people too often prefer things that aren’t good for them." – but I don't think it's quite that simple.

If we assume that analysis is the only way people use visualization, then perhaps accuracy and task completion time are the only metrics we should care about. But I see a lot of people do things other than analysis, and I'm starting to think that analysis is really just a small part of the bigger picture. When people get together to look at a visualization to discuss some data, they do many things in addition to (and on top of) analysis: storytelling, arguing, questioning, building scenarios, pointing to other visualizations, drawing hypothetical charts with their fingers, etc. There is no question that analysis is important, but it's not nearly all there is.

The power of visualization is not that it's such an accurate representation of data; in fact, there are many ways to represent data more precisely than using visualization, like a simple table of numbers. What visualization brings to the table is a much more holistic view of data, which a table simply cannot provide. The uses for this modality are consequently a bit more complex and varied. I also question Steve's assertion that recall of visualizations is not needed. I see a lot of workbooks here at Tableau that people look at every day or every week as part of their work, and they definitely want to be able to remember what they saw last time. Otherwise, what would be the point of creating them? They won't remember details, but they certainly know whatever features are important to them, stood out recently, etc.

I'm not saying that the paper is flawless, because it isn't. But it is an intriguing step into an entirely new direction. There is more work that needs to be done, more evidence that needs to be collected, and more papers need to be written. But the paper is not nearly as flawed as Steve makes it appear. I, for one, am looking forward to seeing more of Jessica's work.


<PostedBy />


<aside class="comments">

---
## Comments

Chris says…
>	I have an objection with the wording 'objective science'. If it is science, it is objective.

Al says…
>	"If we assume that analysis is the only way people use visualization..." This is really the crux of it. 
>	
>	Why is it that people in the infovis world almost always assume this? Where did this assumption historically originate from?
>	
>	If we're talking about _published_ data graphics (goods for a target audience of consumers/stakeholders) rather than general purpose concept demos or plugins for analysis suites like R and Tableau (tools for creators), these are never designed for the consumption of analysts for the purpose purely of detailed data analysis. Analysts have their own tools and skills. 
>	
>	Why would a company use resources designing _data-set-specific_ visuals or tools for data analysts? Analysts would rather approach the data their own way using their own tools. It would be like giving a cake-making kit to a chef. They'll keenly examine it, critique it, and offer their professional opinion of it, and if it's very good they might even be inspired by it, but they won't use it. It's not for them. They make cakes their own way.
>	
>	There is the world of data vis R&amp;D - concept demos, papers, plugins for analysis suites, etc - which are for data analysts and visualisation creators, and are about enabling new and exciting types of detailed analysis.
>	
>	Then there is produced data visualisations (info vis?) in the sense of tools and visuals for guided exploration of a specific data set(s). These are for interested or committed non-statisticians: people already interested in the meaning of that data, but not able to just pick up the raw data and analyse it in R. They are, first, about comprehension, exploration and learning/discovery, and second, about enabling detailed analysis (where doing this doesn't compromise a non-statistician's comprehension). Not achieving this second purpose is where flashy, intriguing, but shallow visualisations fall down.
>	
>	Then there are infographics - which are for people without a _committed_ interest in a topic (yet). They  are, first, about encouraging interest and attention in the meaning of the data, second, about comprehension exploration and learning/discovery (this is where all that bandwagon-jumping linkbait falls down), and third - for the very best in class - about enabling the detailed analysis which the most enthused consumers might now be inspired to want to do. Achieving this without compromising the essential first and second aims and losing the attention and interest of your difficult-to-reach audience is damn hard to do, but when it does work, the results are awesome.

Ken says…
>	I think that speed is a metric that applies to dashboards but is not universal.
>	
>	I'm reminded of recent findings that changing fonts in math texts helped high school students learn the material.
>	
>	<a href="http://wws.princeton.edu/news/DOppenheimer_Font/DOppenheimer_DisfluencySummary.pdf" rel="nofollow">A Summary of
>	“Fortune Favors the Bold (and the Italicized):
>	Effects of Disfluency on Educational Outcomes”</a>
>	
>	<q>"Disfluency has been shown to lead people to process information more deeply."</q>

George says…
>	Personally I totally agree with Few on his viewpoint of these papers. I don't think I can do a better job in defending it. And I am sorry but his analysis is not superficial, and if you have read his work - you would know his position.
>	
>	I do want to tackle one point you make: " The power of visualization is not that it’s such an accurate representation of data ... more holistic view of data, which a table simply cannot provide"
>	
>	I think no one here is arguing that sometimes tables are better than visualizations, and sometimes a visualization is better than a table (Few has covered this over over himself). The argument is that some visualization have problems - simple problems that have been clearly documented and proven by several people, and not just Few.
>	
>	Pie charts are useless in 3d, or 2d (or 4D if someone events it). A simple usability test will show you that most people can't comprehend easily whets in the chart. People are looking at data to get insights, and understand it quickly. Any form of display that makes it hard, is bound to fail.
>	
>	Lastly, one point I want to make - as a designer of analytic interfaces for companies I find most of the work from the infovis community to be USELESS. Sure they try new things, they test the limits, but honestly the majority of these papers rarely can be applied are worth applying in real world. I think these researchers need to go on the field and properly test their concepts. (and I am sorry but doing a catalog of charts built by other companies and giving your opinion without any proper testing of it - shouldn't be called research)

<a href="http://www.levinsonleeconsulting.com" rel="nofollow noopener" target="_blank">Stephanie Lee</a> says…
>	Thank you for sharing these papers! Few's article sets up a silly strawman with that ridiculous pie chart and, I think, deliberately misunderstands one of the benefits of academic research: standing on the shoulders of giants and pushing us to think differently about things (you know, learning!). Hullman wrote an academic paper and it should be read as such.
>	
>	I create quantitative graphics in my work as an economist. I work on securities litigation, so my audience is a judge or arbitration panel (usually lawyers by training) that doesn't understand the material all that well. I want to do anything I can to help them learn (even if it means you take a few minutes to explain something to everyone) and understand the analysis. If people feel that you taught them the idea, rather than just stating the conclusion, they find you more credible. That sometimes means repeating certain elements in a graphic (putting information in the title and in the legend and in a caption) or presenting information in a less-than-perfectly-efficient manner because it is expected (say, if the opposing economic expert witness has already used a certain format - better to stick with it than introduce a different format for everyone to learn). Efficiency is nice but the ultimate goal is to convince everyone of something (like, my client's argument is the right one).
>	
>	Visualizations are used in so many different contexts I don't think you can have absolute rules. Like good writing, you have to use whatever works in your situation.

Jamie says…
>	@stephanie
>	"Visualizations are used in so many different contexts I don’t think you can have absolute rules. Like good writing, you have to use whatever works in your situation."
>	
>	A point Few has made himself many times.

<a href="http://cscheid.net" rel="nofollow noopener" target="_blank">Carlos</a> says…
>	Have you read Kahnemann's "Thinking, Fast and Slow" yet? I'm about halfway through it, and he mentions the "harder font, better recall" experiment at length at some point.
>	
>	Every 10 pages or so he points to some experiment in psychology which I think "someone *must* relate this back to visualization".
>	
>	There's one idea that keeps popping back in my mind every time. He describes in many occasions how people construct deep, internally consistent stories and narratives which they use to give explanations for quantitative estimates.
>	
>	Typically the experiment goes like this: two similar descriptions of the same dataset imply two entirely different (but both plausible and "consistent") stories, which *wildly* change people's quantitative estimates of probabilities.
>	
>	To me, that says a lot about story-telling in vis. But not in a good way! (*ducks for cover*)

Meic Goodyear says…
>	That's a bit naive. However objective one tries to be the role of the observer is crucial to any observation, and that is bound to be subjective. Also, a lot of very good scientists use Bayesian statistics, where subjective probabilities are important to the process.

Al says…
>	*cough*
>	<a href="http://www.perceptualedge.com/articles/visual_business_intelligence/rules_for_using_color.pdf" rel="nofollow">Practical Rules for Using Color in Charts</a>
>	*cough*
>	<a href="http://www.perceptualedge.com/articles/b-eye/encoding_values_in_graph.pdf" rel="nofollow">Rules for Encoding Values in Graph</a>
>	
>	Got any links or quotes? Seems like an odd thing to come from a guy who made a living inventing and listing absolute Rules and Mistakes...

Jamie says…
>	cough cough?
>	
>	I am not sure I see the point you're trying to make.
>	
>	Yes, there are some basic rules on how to effectively display data.  How is that contradictory to the idea that context is an important factor in how you apply those rules?

Jamie says…
>	Note also that as you read the articles that you posted, the "absolutes" you bemoan primarily consist of statements such as "if you want to achieve x, then follow this general guideline" or basic common sense rules about what type of chart is best for what type of data display.

</aside>

