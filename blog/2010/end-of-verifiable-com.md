---
title: "The End of Verifiable.com"
description: "On August 1, 2010, the visualization website Verifiable.com will close. If you don't know Verifiable, I recommend checking them out despite this, it's an interesting site that has explored an important niche of the online visualization (visualization-as-a-service, if you will) world. Its demise can teach us a lot about how visualization for the masses works, and what we need to do to actually make it happen."
date: 2010-06-20 21:26:22
tags: 
featuredImage: https://media.eagereyes.org/media/2010/verifiable.png
---

<p align="center"><img src="https://media.eagereyes.org/media/2010/verifiable.png" width="560" height="247"></p>

# The End of Verifiable.com

On August 1, 2010, the visualization website Verifiable.com will close. If you don't know Verifiable, I recommend checking them out despite this, it's an interesting site that has explored an important niche of the online visualization (<em>visualization-as-a-service</em>, if you will) world. Its demise can teach us a lot about how visualization for the masses works, and what we need to do to actually make it happen.

Verifiable let you upload data and create visualizations. The interface was similar to <a href="http://www.tableausoftware.com/">Tableau</a>, though certainly not as powerful. But it provided a lot of ways of creating interesting visualizations, and was more analytical than <a href="http://manyeyes.alphaworks.ibm.com/manyeyes/">Many Eyes</a>.

What I liked best about Verifiable, and what all other visualization websites I know are still missing, was that you did not have to pick the type of visualization first. Just like in Tableau, you could switch data dimensions and visual mappings around to figure out what would work best for your data.

Like most online services, this one had a free tier, where your data and visualizations were public. With a paid account, everything was private, unless you chose to share it. It's kind of a typical setup where they tried to establish a popular service to get people interested, and convert some fraction of them into paying users.

## Lessons Learned the Hard Way

Stuart Roseman, Verifiable's "soon to be Ex-President," <a href="http://stuartroseman.com/post/619953720/out-with-the-old-business-in-with-the-new">presents his thoughts on what went wrong</a> and what their main stumbling blocks were. These are valuable lessons worth discussing a bit further. According to Roseman, any startup must:

<ol>
<li>serve a need actual people have RIGHT NOW</li>
<li>implement in such a way so that users don't have to do ANY work or expend ANY energy except for paying</li>
<li>avoid user interfaces like the plague.</li>
<li>be able to field something really quickly: not years, not months, but weeks.</li>
<li>get the product into users hands quickly and iterate on their daily needs often</li>
</ol>

As much as I hate to admit it, I think all visualization websites fail on point one. People don't feel a need to visualize data, we have to make them aware that visualization even exists, and that it can do something for them. The vast number of pretty but useless pictures on the web that are all called visualizations doesn't exactly help.

The few people who do want to visualize their data and are looking for this kind of service are most likely not interested in visualization web sites the way they exist today. Those people are mostly dealing with very valuable proprietary data that they don't want to (or aren't allowed to, per corporate policy) upload to a third party's web service. 

The second point, I'm not sure I agree with. It may be true that casual users will abandon a site where they have to do work pretty quickly; but those corporate users I'm thinking of are very eager to play with their data.

More general users are a different question, and I wonder if it even makes sense to mix the two. That may sound like a good idea to get lots of users that you can convert to paying customers, to raise awareness, etc. But ultimately, I think it makes it harder to focus on the power users that you'll make money from and eats up resources.

Point number three, avoiding user interfaces, is an interesting one. Since Verifiable was quite similar to Tableau, a comparison is perhaps in order. While Tableau has one of the most effective user interfaces once you know it, it's by no means obvious. I use Tableau in my <em>Visual Analytics</em> class, and I get complaints from students every year about how much time it takes them to figure out how to work with the program. It seems obvious when you see somebody else do it, but when you're working with it yourself for the first time, you easily get lost.

The thing about Tableau, and what makes it so powerful, is that the user interface is not primarily about visualization, but about data. What you are seeing is a visualization that you're building, but you mostly control the data. That is a virtue, but it also creates a disconnect that users need to get over before they're able to use it effectively (and without frustration).

Users who care about their data and what they can learn about it accept this very quickly, and actually appreciate it. But users who want to play with visualization settings don't like it, and will look for a different program. It may be that the same thing happened with Verifiable.com.

The last two points (get the thing out the door quickly and iterate often) are typical agile development kinds of ideas. Those work with a focused user base that you can ask questions and get concrete ideas from, but not with casual users who want to play with baseball stats and global poverty data. For those users, you have to drive the tool forward, because you're presenting something new to them that they didn't realize was even possible. Power users will not (and shouldn't) tell you what to create, but at least they'll have a clear idea what they want to achieve with your tool.

## Key Obstacles

Roseman also discusses some key issues that stood in the way of becoming a more successful website:

<ol>
<li>how many edge cases there are in any complex user interface</li>
<li>how little patience users have for complex user interfaces</li>
<li>how hard it is to find clean data and upload it</li>
<li>how little interest people have in finding clean data and uploading it</li>
<li>how much time and skill it requires to find clean data and upload it</li>
<li>how much time and skill it requires to make a decent, thoughtful chart from that data</li>
<li>how impossible it is to test complex user interfaces (we even convinced the funfx guy to help out and we still failed to develop a decent overall easy to run test framework)</li>
<li>how fragile a complex flex based user interface is. fix one thing break another.</li>
</ol>

While the technical issues are certainly big practical problems, they equally apply to many other kinds of web services. The interesting point here, and the key idea behind Verifiable, is the difficulty of finding good, "clean" data that is also of interest to people. Despite the considerable amount of stuff now available on <a href="http://www.data.gov/">data.gov</a> and similar sites, there is no commensurate surge in web sites, visualizations, etc. Sure, there are exceptions, and some data makes big waves. But most of the data is probably never even looked at.

The truth is that most data is just not very interesting. Digging through all this data is difficult, and visualization doesn't necessarily help. Are you going to spend an hour or two playing with some financial dataset, only to find out that there's nothing interesting in it? And if you've done that once, how many more times are you going to do it?

## Visualization for the Masses – Done Right

I think the idea of visualization for the masses is a good one, but not if it's also done <em>by</em> the masses. This kind of effort has to be curated, there has to be an editor who has the instinct to look for and find interesting data, knows how to analyze it, and uses visual tools to present it. That model is not really different from journalism, all the talk about "citizen journalism" notwithstanding.

I think that what Verifiable's demise is showing is that visualization is too hard a sell right now to a public that has no idea what to do with it. A better way of making people see visualization's benefits is by presenting well-constructed, interesting examples that give people actual information. Over time, this will show them how visualization is more than just pretty pictures, and perhaps inspire them to try those tools themselves.

We tend to forget that all those things that now get a "citizen" prefix (journalism, science, etc.) first had to be figured out and developed by people who spent their entire lives doing them. Only through the commoditization of this knowledge, and the tools that are needed, has it become possible for people outside that realm to try their hands on those same things. Visualization tools may be readily available (though not all are created equal), but the knowledge how to use them well is not. In fact, a large part of that does not even exist yet. Before we have experts who really know what they are doing when it comes to visualization (and can point to evidence that they do), there won't be effective visualization by the masses.

Verifiable.com was the right idea, but it simply came too early. Give it another five to ten years, and the world will be ready for it.

[[PostedBy]]

<aside class="comments">

---
## Comments

<a href="http://www.labescape.com/" rel="nofollow noopener" target="_blank">Trevor Lohrbeer</a> says…
>	Reading through Stuart Roseman's post on why Verifiable.com failed, I think he came to the wrong conclusions. There is a strong need for visualization tools right now for which people are willing to pay. Just look to Tableau, Spotfire, Panopticon, JMP, Swivel and my own company, Lab Escape.
>	
>	I don't know what strategies Verifiable.com tried, so I can't comment specifically on why they failed. But some common mistakes include:
>	
>	<ol>
>	<li><b>Being Too Focused on the Product</b><br>
>	Selling visualization software involves creating a complete solution. Things like getting started guides, video training and solution guides, as well as architecting the entire buying process from evaluation through to payment. Dharmesh Shah from OnStartups posted an excellent article on this topic called From Minimally Viable To Maximally Buyable Product (spam filter won't let me post the link).</li>
>	<li><b>Not Understanding the Market</b><br>
>	Why will someone pay money for a visualization tool? Almost always the answer is to help them make money, by increasing revenue, reducing costs or avoiding risks. While allowing users to publish data and visualizations to participate in the social discourse is a noble goal, you need to identify the paying customer. For Verifiable.com, this could have been news organizations or private individuals. If they had a large amount of funding, they could have tried for the mass market approach and made money off of advertising or selling premium subscriptions to bloggers. But that's a big gamble. Right now private businesses are hungry for this type of functionality and willing to pay for it, so that's a good market to aim for.</li>
>	<li><b>Using the Wrong Applications as Examples</b><br>
>	Few people can abstract the value of a visualization with public data to their own data. We even run into issues showing one type of business data, such as network monitoring data, to someone needing to analyze a different type of data, such as sales management data. To be successful, you need targeted examples that get people comfortable with advanced visualization, in a domain language they already speak. 
>	For instance, the baseball data set used by University of Maryland to demonstrate the tree map application was useful because so many people understand baseball (though this is certainly not universal). Though even baseball wasn't ideal because the types of analyses you want to do with your own data set are often very different to those done for baseball. To solve this problem we've spent a lot of effort building out separate data sets and demos for different application areas. But this takes time and money, which you don't often anticipate when launching a visualization business.</li>
>	<li><b>Focus on Usability for the Whole Solution</b><br>
>	Rather than avoiding user interfaces, focus on usability. Get a usability expert to help, or read a lot of Jakob Nielsen and other usability experts. Also understand that what defines usable is relative to your audience and your training. As you've pointed out above, Tableau is often noted for having a good usable interface, but many people find it too confusing.  I see similar experiences with our product: some people love it, some people get confused. The goal, though, is to keep improving the usability (reducing clicks, creating a consistent UI interaction model, setting good defaults), then supplement that with training. Ultimately, an easy-to-use interface is one you are familiar with. And as interaction metaphors for data visualization tools become more commonplace among the general population, these tools automatically become easier to use. 15 years ago most users didn't know how to use the scrollbar on their browser, which would seem silly to us today.</li>
>	</ol>
>	
>	Ultimately, I think the reasons Verifiable.com failed were likely multiple and complex. One thing I am certain of, however, is that it wasn't because the market doesn't exist or that it's impossible to build good, usable interfaces for data visualization.

<a href="http://www.datadrivenconsulting.com" rel="nofollow noopener" target="_blank">Alex Kerin</a> says…
>	Could it be as simple as a marketing push that wasn't as strong as other offerings. While I'm hardly the knowledge-master of all things analytic, I had never heard of them.
>	
>	

<a href="http://mnvalleychurch.org/" rel="nofollow noopener" target="_blank">Church</a> says…
>	Thanks for making this information available about Verifiable. Interesting insights.

</aside>

