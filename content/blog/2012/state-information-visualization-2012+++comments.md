Jakob says…
>	Re: infographics
>	Did you read my guest post on the visually blog? I've attempted to do the very thing you mentioned, i.e. describe ways in which infoposters can be reconciled with solid visualization practices.
>	
>	Eagerly awaiting your take on this!
>	Cheers,
>	Jakob

Al says…
>	I keep hearing that an academic data visualisation community exists, but I see little  actual evidence of these people beyond the occasional snooty comment or blog post bemoaning bright colours and over-quoting tufte ... What do these people do? Are they the people who keep churning out twitter visualisations? Or do they all work on nothing but closed BI apps and R plugins? Are there any journals that are actually worth following? 
>	
>	Re infographics getting interesting: the elephant in the room here is how much booming demand has outstripping the number of designers with specialist data skills. Things will change as skills catch up - and any visually orientated guides to stats and best practices will speed this up.

<a href="http://periscopic.com" rel="nofollow noopener" target="_blank">Dino Citraro</a> says…
>	"...the occasional snooty comment or blog post ..."
>	
>	Was this meant to be recursive?

D.A. says…
>	One major pressure in the academic data visualization community is to publish. There are a variety of reasons for this, but foremost among these is often to satisfy collaborators, tenure committees, and grant constraints. Unfortunately, this binds academia tightly to journals and conferences. The biggest place to find the academic community is going to be venues like VisWeek, EuroVis, and PacVis. If you're interested, Fell in Love with Data (http://fellinlovewithdata.com/) is one of the few blogs out there explicitly working to bridge the academic community with the visualization community at large.

Kevin says…
>	"Are there any journals that are actually worth following?"
>	
>	I'd be curious as well what journals most data visualization academics follow. I'm not an academic currently and funding myself to any of the viz conferences isn't feasible right now. I've come across some great academic articles through my blog feeds (probably here or FILWD) but having more centralized resources would be nice.

<a href="http://www.research.att.com/vis" rel="nofollow noopener" target="_blank">Stephen North</a> says…
>	Matrix based layout is interesting, but node-link layout algorithms are boring and more work is unnecessary?
>	
>	If it's a solved problem, why am I still seeing so few automatically generated layouts that even approach the quality of good hand-made diagrams?
>	
>	To me, it's all interesting, even metaphors and case studies. The cowboy and the farmer should be friends.

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	The academic visualization community has developed a lot of the techniques people use, like treemaps, parallel coordinates, etc. We also do a lot of work to figure out which of these techniques, whether developed in academia or elsewhere, work and for what kinds of data.
>	
>	Overquoting Tufte is a common thing for academics to do, unfortunately, but Tufte also provides a good counterpoint to the thoughtless overdecoration that is so common in information graphics.
>	
>	For academic journals, the main ones in information visualization are the <a href="http://www.computer.org/portal/web/tvcg" rel="nofollow">IEEE Transactions on Visualization and Computer Graphics (TVCG)</a>, the <a href="http://ivi.sagepub.com/" rel="nofollow">Information Visualization Journal</a>, and <a href="http://www.computer.org/portal/web/computingnow/cga" rel="nofollow">IEEE Computer Graphics and Applications</a>. The main conferences are <a href="http://visweek.org/" rel="nofollow">VisWeek</a> and <a href="http://eurovis.org/" rel="nofollow">EuroVis</a>.

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	I did not say that more work was unnecessary. What I said was that there is new work that is pointing into a direction that I think is a lot more promising than pure node-link diagrams. The typical hairballs won't be solved with better layout algorithms, the entire approach simply breaks down when you're dealing with large graphs.

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	It's a start, but I'm thinking about more concrete things that can be done. You argue about the differences and nuances, what I have in mind are future directions that go well beyond what is being done right now.

Al says…
>	Ha! good point well made, touche...

Al says…
>	Perfect, thanks! (thanks also to DA for the FILWD link)

<a href="http://www.deanmeyers.net" rel="nofollow noopener" target="_blank">Dean Meyers</a> says…
>	Interesting quick overview, and agreed that data visualization in journalism has more need than good practitioners. The infographic debate has just started (as so much of it looks like over-eager powerpoint slides strung together into one overwhelming sheet of factoids), particularly where the line between objectivity and the art of persuasion through visuals is drawn...or not. 
>	
>	Any thoughts on Wolfram's CDF (Computable Document Format) and other toolkits, or big data management? You didn't mention O'Reilly's Strata conferences, do they figure into your choices for finding/sharing information visualization resources?

<a href="http://blog.jochmann.me" rel="nofollow noopener" target="_blank">jakob</a> says…
>	Fair enough. I was asked to deliberate existing practices and worked out the underlying conceptual differences. Which may or may not help discover future directions. Anyway, have a great and productive 2012! Looking forward to reading about your new ideas.

<a href="http://cscheid.net" rel="nofollow noopener" target="_blank">Carlos</a> says…
>	"The typical hairballs won’t be solved with better layout algorithms"
>	
>	Ugh. I disagree with this statement in the strongest possible terms. (Which is, I really want to say "this sentence is a load of crap" but I'm afraid you will misread the tone :))
>	
>	We *know* that the current algorithms and drawing techniques are bad. But do you actually have evidence that no good algorithms exist? Without evidence, your statement is simply a fallacy of mixing existentials and universals.
>	
>	And, to ask an even more basic question: do you have evidence that matrix diagrams do a better job?
>	
>	Now you made me really push my "digression into lower bounds" digression in the graph visualization to the top of the priority queue :)

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	I can't prove that there will never be a good node-link algorithm, that is true. But I don't think that your position is much stronger: you're saying that we will eventually find one that works, but you don't have any evidence, either.
>	
>	I will write about matrix diagrams and some of the hybrid techniques soon. Matrix diagrams have their problems, but they allow some operations that are very useful. Plus, there are other techniques that go much more directly to the heart of the questions that are often what people are actually trying to ask. And those typically don't include "show me a hairball" ;)

<a href="http://cscheid.net" rel="nofollow noopener" target="_blank">Carlos</a> says…
>	I said nothing about eventually finding one good algorithm. The current situation is that we're still trying to find better algorithms for both diagrams, and we should be honest about that. You seem to think of algorithm research as unsexy ("yet another layout algorithm"), but that's the only way we know how to make progress: ugly bit by ugly bit. Eventually we'll know enough to decide if general statements like "no good algorithm exists" is true. We're not there right now, but we're working on it!

<a href="http://www.BioFabric.org" rel="nofollow noopener" target="_blank">Bill Longabaugh</a> says…
>	You predict that in 2012, for networks, "...we are on the verge of seeing some really interesting new techniques...".  Please have a look at BioFabric, which has just been released: www.BioFabric.org. The paper is at http://www.biomedcentral.com/1471-2105/13/275/ .  Instead of depicting nodes as points, it represents them as horizontal lines...this means it is scalable and unambiguous.
