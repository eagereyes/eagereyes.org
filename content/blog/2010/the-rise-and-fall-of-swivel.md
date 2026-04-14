<figure><img src="https://media.eagereyes.org/media/2010/minor-swivel.png" alt="Swivel is about data" width="560" height="232"/></figure>

Earlier this summer, the visualization website Swivel.com disappeared from the internet. To find out what happened, I tracked down and interviewed Swivel's two founders, Brian Mulloy and Dmitry Dimov (I also did [a follow-up with VC Halsey Minor](/blog/2010/swivel-part-2-solving-a-single-problem)).

The following is an edited combination of two interviews I conducted separately with Brian Mulloy (who served as CEO for two years) and Dmitry Dimov (Chief of Product), interspersed with some additional thoughts. My main goal was to learn more about the thinking behind launching Swivel, what went wrong, and what we can learn about commercial visualization (and "visualization-as-a-service") from what happened to the company.

## YouTube for Data

>	**Kosara**: How did you get started?
>	
>	**Mulloy**: Dmitry and I started in enterprise software. We were selling multi-million dollar software licenses to financial and telecommunications companies to help them integrate their systems. We wanted to solve the integration problem through software as a service on the Internet, rather than running it in their data centers. We also wanted to visualize the data so that people could understand that the integration had value. Seeing all the data for your business in one spot would be really valuable.
>	
>	As we were getting close to launching the product in 2006, our advisors, Halsey Minor [founder of [CNET](http://www.cnet.com/)] and Ron Palmeri, saw the YouTube acquisition happen for $1.6bn. They started to wonder if there was a way to make our product into more of a general-purpose visualization story. In the end, we launched Swivel as what bloggers called "YouTube for Data." As you can
>	see, it was sort of a random walk into this space.
>	
>	**Kosara**: Was the moniker "YouTube for Data" actually your own term, or was it coined by somebody else?
>	
>	**Mulloy**: No, that was Michael Arrington's [of [Tech Crunch](http://techcrunch.com/)] term. He saw a demo and that's how he thought of it, because we had the commenting and what, at the time, were the canonical web 2.0 features. We never actually used it ourselves.

## Public Data vs. Private Data

It's interesting to see this switch from very a narrow focus to a broad visualization platform. They took it even further by inviting organizations to feed them their data directly. These datasets got the *Official Source* seal, which gave users the confidence that the data had not been tampered with.

> **Kosara**: Why were you interested in public data, like what you had under the Official Source program, and the vision [you presented at the OECD World Forum 2007](http://www.viddler.com/explore/JesseRobbins/videos/3/269.666/)?
>
> **Mulloy**: We wanted to get people engaged with data so we could build a better social visualization product. We hired Sara Wood, who was responsible for web technology at the World Health Organization ([WHO](http://www.who.int/en/)) in Geneva. She had blogged that Swivel was cool, and she had an idea to do something similar. I reached out to her because we wanted someone to help us with big data sets and to figure out how to make them more usable. Later, the [OECD](http://www.oecd.org/) actually contacted us to put their statistics into our product and we were blown away by that. That was the genesis of the Official Source program.
> 
> **Dimov**: Private data sources are sensitive, so we decided to focus on data that was public, but still relevant to our users. There was no problem with private data anymore, but it was still data that people cared about. I may not care about somebody else's public data, beyond just general interest, but I think a lot of people want to look at data that relates to them.

## Swivel as a Business

> **Kosara**: How large was Swivel? How many people, how many servers, how much money?
> 
> **Mulloy**: It was really cheap. We were five people at launch, and we only ever grew to twelve, and some of those were interns. We only had a single rack of servers, ten machines. We weren't streaming terabytes of video, the datasets were quite small, so the infrastructure requirements were not huge.
> 
> We got a Round A funding of two million dollars. By the time I left, we had spent about three to four million dollars on the idea.

## What Went Wrong

I was surprised by Swivel's disappearance not just because I had assumed that they were doing well, but also because if I'd had to pick a winner between Many Eyes and Swivel back in 2006, my money would have been on Swivel. When I wrote [my original review of the two sites](/blog/2007/swivel-vs-many-eyes), I noted Swivel's plan for paid accounts and Many Eyes's lack of a business plan.

> **Kosara**: You seemed to have a very clear idea about how to turn a profit by having paying users in addition to free accounts and the general public. How many paying users did you have in the end?
> 
> **Mulloy**: It was single digits. To be honest, many of the things you'll see with Swivel are more of a cautionary tale for a first-time CEO like me than for the space as an opportunity.
> 
> Somebody's going to solve this problem, and they're going to be a really, really big company, it's just a matter of time. We had a notion that we could do the revenue model in a way that would be purely web-oriented and self-serviced, at a really low cost of sale; following the model of [37signals](http://37signals.com/). I questioned this a few times, but my investor didn't want a huge enterprise sales force. You probably can build a profitable business model that way, but looking back now I think we would have served the company better by hiring a few sales people, really understanding what kinds of problems people were having with their data and going after it as a real money-maker.
> 
> **Kosara**: So what went wrong?
> 
> **Mulloy**: It all points back to this: the CEO was incompetent, or not as on the ball as he could have been. I couldn't have said this easily a year and a half ago, but now with more time between me and what happened, I think it was just a number of mistakes. We had phenomenal people, phenomenal investors, really talented people. When you look at what the guys and gals have done since Swivel, they're all really interesting, fun projects, that are making a difference. So I think I didn't orchestrate the business as well as I could have, and made a lot of little mistakes that added up to not being the success that it probably could have been.
> 
> I often talk to people, and they ask me: what did you do at Swivel, what can we learn from your mistakes? I'm really still very optimistic about the opportunity, I think a really good executive team with a lot of focus will make it into a really big business. It's just, it wasn't me.
> 
> **Dimov**: It had the feel of a big idea. There was a lot of interest, and there are so many things you can do with data, there are really no limits. But we weren't able to describe what the actual uses were: this is what you can do, this is why it's useful, so people would use it. We also weren't able to prioritize our features, and we had very limited resources in terms of how many developers we had, etc.
> 
> We had so much good feedback from people who touched Swivel, I don't think it was an issue of not being useful to people. There was such a huge variety of things to do, that as fresh entrepreneurs, we had difficulty saying: here's the one thing we're going to do. And many companies, even when they focus on one thing, realize that getting different kinds of data in from users is just really difficult.

*Single digits*. I double-checked this with Mulloy, they really had fewer than ten paying customers. I find that shocking, simply because of the statistics: Swivel had (tens of?) thousands of registered users, but fewer than one in a thousand bothered to pay for the service? Unbelievable.

## Is There A Need?

I asked Mulloy what he thought about Stuart Roseman's assessment of what led him [to shut down Verifiable.com](/blog/2010/end-of-verifiable-com). In particular, I was interested in the questions of what need people have for such a service, and how much effort they were willing to put into using it.

> **Mulloy**: Our hypothesis was that there are a whole bunch of people who are not analysts or statisticians, or visualization experts, who would really benefit from seeing, and engaging with, statistics. And, if we made it engaging, they would. That was our starting point. So we tried features which we got criticized for, rightly or wrongly, like blinging our graphs.
> 
> I think what we learned, like Roseman is saying, that the interface is not that important, that there are analysts who are really good at tools like R, SAS, etc. and prefer to continue to work in those tools to do powerful things with datasets. And people who are not inherently biased towards working with datasets, they are not going to do it. Except for what they see in the newspaper, like USA Today or the New York Times. That may be the end of it.

Brent Fitzgerald, a former employee of Swivel (and one of the speakers on an [InfoVis panel on Social Data Visualization](/blog/2007/infovis-2007-infovis-for-the-masses) that I organized at InfoVis 2007), nicely summed up the problem in an email:

> I guess one of my Swivel takeaways is that visualizations are tools or lenses, and people will create visualizations out of need, in the contexts in which they are needed. It's easier to start with the problem, then solve it, than the other way around.

## Visualization Expertise and the Community

What struck me as odd from the very beginning was that none of the people involved in Swivel or on its advisory board seemed to have any background in visualization, or were known in the field.

> **Mulloy**: We did have a visualization advisor, and we spent quite a bit of time with him; but I think he was so embarrassed that he asked not to be named on the website. He's a very prestigious, award-winning visualization expert, but we couldn't tell anybody because he was embarrassed.
> 
> **Kosara**: Do you think that "chart bling" (adding a background image to a chart) was the right kind of feature to focus on?
> 
> **Mulloy**: No, no I don't. We got slapped around quite a bit for that, and in retrospect it was a mistake. We never claimed to be experts in the field of visualization, and we probably deserved that beat-down.
> 
> **Kosara**: Would more involvement from the visualization community have made a difference?
> 
> **Mulloy**: Yes, definitely. And after that [bling backlash], we reached out to some academics here in the bay area who helped us. The onus was clearly on us, and we would have been better off to get that input sooner.

## Many Eyes and the Commercial Visualization Space

> **Kosara**: Was the competition with [Many Eyes](http://manyeyes.alphaworks.ibm.com/manyeyes/) perhaps a problem for Swivel's business?
> 
> **Mulloy**: We were very impressed with Many Eyes when they launched, and I actually went to Cambridge to hang out with Martin Wattenberg and Fernanda Viégas. Quite frankly, they had a level of horsepower that we just didn't have available to us. They're truly brilliant thinkers, and they're still doing things in this space. I can't say enough positive things about what they've accomplished and what we learned from how well they executed everything, from the design to the data integrity, it was just all so well done. We learned a lot, and it helped keep us honest about what we were trying to do.
> 
> They weren't just competition, they bested us right out of the gate. Which was a real bummer, because Dmitry and I spent the last five years before Swivel competing with IBM in our other job, and just when we thought we would be doing this web startup and never have to see IBM again, boom, one month later Many Eyes came along.
> 
> **Kosara**: Were there just too many visualization websites out there? Is there only room for one?
> 
> **Dimov**: I don't think that there are too many, because there really isn't one that's useful to me right now. Swivel was useful, but then I was an insider, so I knew how to make it work. But I don't think that anybody has built the right thing yet.

## The Final Months

Both Mulloy and Dimov left Swivel a while ago, so they could not comment on when and why the final decision to pull the plug was made. Dimov left in January 2008, only about two years after the site was launched; he is a co-founder of [Armageddon Energy](http://www.armageddonenergy.com/). Mulloy handed over the CEO position to Visnu Pitiyanuvath about two years ago, and originally stayed on as an advisor, but then also left; he is now with [Apigee](http://apigee.com/).

> **Kosara**: Why did you leave?
> 
> **Dimov**: We were stuck in neutral for a while. We launched in 2006, we had a lot of excitement in 2007, had the OECD approach as we went to Turkey [OECD World Forum in Istanbul, 2007], Google was interested, and there was no shortage of people wanting to invest. But we still were just a few developers, and we were really going around in circles; we didn't have a clear idea what version 1.0 of Swivel was going to look like.
> 
> This is the reality between a prototype and a working product: there are so many details that go into turning an original idea into a product, most people don't realize that. You can spend a lot of time on that in fact, to the point where a year goes by and all you've done is that you've fixed a bunch of bugs. So you can either scale back the features and only support a limited set of functionality, or scale up your team to support all of those things. And just for the data management you can spend a lot of time.
> 
> We had a great team, developers that could do anything, but it all takes time. I'm certainly wiser now, to know how easy it is to build a nice façade, and how much more work it is to really develop these features and make them truly functional.
> 
> **Kosara**: Right now, Swivel.com is completely dead, there's not even a placeholder page. Do you know when that happened and why?
> 
> **Dimov**: That was a surprise to me. I'm busy with my startup, so I rarely check in. I know that a few months ago, there were two developers who were essentially just keeping the site running. As far as I know, back in June or July, there was nobody actually there anymore, it was just a few servers that ran the site and everything was working as if the company was still there.
> 
> **Mulloy**: That was actually news to me too. When you reached out to me, I went to the site, and saw that it was gone. I really don't know what happened. To keep the data center running, somebody has to pay the data center vendor, and I guess they just stopped paying for it. It's strange.

(I am trying to contact people who were there after Mulloy and Dimov had left, in particular the VCs and the CEO, Visnu Pitiyanuvath.)

## The Future

> **Kosara**: Will there be a YouTube for data that's the same kind of success as the current YouTube?
> 
> **Mulloy**: No. I think it's a question of context. 99% of what made Hans Rosling's health data so interesting was Professor Rosling himself. He would swallow a sword that was on fire as part of his presentation. I think that that context needs to be there for people to engage with the data. On YouTube, you don't need context, you just play the video and then you watch the cat jump around and that's all you need.
> 
> **Kosara**: Do you think that efforts like [Apps for America](http://sunlightlabs.com/contests/appsforamerica/) and other public-data initiatives will make a difference and continue to attract developers and users?
> 
> **Mulloy**: Speaking from my heart, I would hope that these things continue, because this is something that really needs to stick if we want people to engage with data, and if they want their government and their world to be any better than it is. But speaking from my experience and with my brain, I'm afraid it's going to be a fun project on the supply side, but there isn't going to be any demand there. And it doesn't matter how great the mousetrap is that they build, I don't think it's going to last.
> 
> **Kosara**: That seems really gloomy. Back in 2006 and 2007, there seemed to be this gold rush around visualization for the masses and public data. Do you think we'll see anything like it again?
> 
> **Mulloy**: It'll come back. It was a flowering. kind of a golden era. But it'll come back. I'm optimistic that there will be another flowering like that.
> 
> **Kosara**: Is there a need for visualization-as-a-service? Do companies want to hand their data over to a third party to analyze it?
> 
> **Mulloy**: No. I don't think they do. But there is one thing that changes this, and that is mobile devices. We're going back to a client-server model, where mobile applications need to access rich data to be of value, and they do that through APIs. Companies will need to open APIs if they want developers to build interesting apps based on their data. And once these APIs are there for mobile phones, you can access that data from anything, like a television or a game console. And we'll be able to build visualizations with that.

See also [my follow-up with VC Halsey Minor](/blog/2010/swivel-part-2-solving-a-single-problem)

---

Hat-tip to John Bolton (of the [Arizona Daily Star](http://www.azstarnet.com/)), who originally alerted me to the fact that Swivel was gone. He was an avid user of the site (like [many journalists](http://datajournalism.stanford.edu/), it appears), using the embedding features that are now also gone, of course. He nicely summarized the problem for users:
> These free tools on the web are easy to use, easy to lose. A cautionary tale.
