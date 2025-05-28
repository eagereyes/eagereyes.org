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
