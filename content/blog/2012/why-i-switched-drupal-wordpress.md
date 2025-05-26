---
title: "Why I Switched From Drupal to WordPress"
description: "After more than five years, switching the content management system (CMS) on eagereyes was not an easy decision. I've been thinking about doing that for a while though, and I want to explain my reasons and what I expect WordPress to do better than Drupal below. This should also be useful for anybody who is on the fence about starting a blog (or has a blog that hasn't been updated in a while)."
date: 2012-01-02 21:33:11
tags: meta
featuredImage: https://media.eagereyes.org/wp-content/uploads/2011/12/features.png
---

<p align="center"><img class="alignnone size-full wp-image-1551" title="New Features" src="https://media.eagereyes.org/wp-content/uploads/2011/12/features.png" alt="" width="600" height="142" /></p>

# Why I Switched From Drupal to WordPress

After <a title="Five Years of EagerEyes" href="/blog/2011/five-years-of-eagereyes">more than five years</a>, switching the content management system (CMS) on <a href="/">eagereyes</a> was not an easy decision. I've been thinking about doing that for a while though, and I want to explain my reasons and what I expect WordPress to do better than Drupal below. This should also be useful for anybody who is on the fence about starting a blog (or has a blog that hasn't been updated in a while).

The key issue is really simple: maximize blogging, minimize administrative stuff. It gets a bit more complicated when looking at the details, but that's really the main thing I want from WordPress: let me be efficient about the little administrative things, stop me from tinkering endlessly with stuff, and help me focus on the writing.

## What's Wrong With Drupal

Drupal is simply too big and powerful. It can do anything, which was why I picked it. I spent a lot of time trying out all kinds of CMSs back before I started this site, and I ended up with Drupal because it was able to do all the things I wanted it to do. Others were missing things that I insisted on, like being able to pick custom URLs for my postings (more on that below).

But Drupal's versatility and power is also its own enemy. Because sites can be built in such different ways, themes tend to not work very well. I tried out a number of themes over the years, and none of them worked well on my setup without major tweaking. That also means that there really isn't a theme industry like there is for WordPress, and the existing Drupal themes tend to be rather crappy and generic.

What would make more sense for Drupal is for third parties to build platforms on top of it, complete with themes that fit those. Oddly, this is what is happening in WordPress-land now, where it was much more of a pain to do until recently. It's really too bad Drupal missed the boat here, it would have been perfect for this.

The Drupal Way may be clever engineering, but it isn't exactly obvious how to do many things. Views are one of those features that let you do a lot of cool stuff, but that also are so damn complicated that many people give up after fighting them for a while. I did, anyway, and I doubt that I'm the only one. Some things I wanted to do just never worked the way I wanted them to, so eventually I just moved on. But the frustration and amount of time invested was still painful.

## WordPress to the Rescue

I'm not going to claim that WordPress does everything right, but it does the things I need. That is actually a fairly recent thing, from what I have seen. WordPress 3.3, which was released December 12, now makes it possible to use categories in the "slug" (that's WordPress-speak for URL) without a performance penalty. WordPress's way of handling URLs is completely beyond me (why not just let me pick any old URL like Drupal does and do a simple lookup instead of trying to parse the components?), but I was able to make it work. Part of this has to do with my existing, informal URL scheme that I've used for years. Since most URLs on the site are fairly predictable, it wasn't too difficult to create a matching scheme of categories.

A lot of URLs still had to change, and I went to some lengths to make sure those would be forwarded properly. One thing I did for a while was pretend that the site was really based on files by attaching .html to all the URLs. WordPress won't let me do that, so there is now a generic forwarding rule that chops off the .html when it finds it. Some of the oldest pages on the site also used CamelCase in their URLs (a horrible idea I abandoned fairly quickly). Some of the most popular postings on the site did that though, and those needed special redirect rules. There are also a number of postings that really should have gone into a category but I only decided to create the category or section later, like the papers. Those were moved while I was at it and redirection rules applied. I also decided to finally split the <a title="ZIPScribble Maps" href="/zipscribble-maps">ZIPScribble maps pages into separate ones by country</a>, so I could create the nifty little menu at the top of the page.

I actually made a list of all the old and new URLs and wrote a little script that tested whether all the required pages existed and all the redirects worked before I switched the site over. There are still a few issues with URLs that I am cleaning up as I look through the page-not-found errors, but overall things have been smooth.

But my main insight is this: WordPress was built as a simple blogging tool first, then complexity was added to it. The focus is still on blogging though, even with new features like custom post types, etc. that make it more of a general-purpose system. Drupal was built as a general-purpose system from the beginning, and in trying to stay general, it feels a lot less focused and seemingly simple things become much more complicated than necessary (just ask any Drupal user why there isn't a pointer to the previous and next posting on every page).

## The Ugly Underbelly

When you dig a little deeper, you do find problems in WordPress, of course. The most glaring issue is clearly performance: WordPress is slow. Very slow. Slower than Drupal. But what it has going for it are <a href="http://wordpress.org/extend/plugins/w3-total-cache/">amazingly effective caching systems</a> that make that almost a non-issue. Who cares that every single page view requires dozens of scripts and database queries? If the whole thing is cached so it can be retrieved in under a millisecond the second time it is requested, most people will see a really fast site. I could worry about efficiency and hand-code my own CMS (that thought torments me every few months, in fact), or I could just let it go and write another scathing critique of somebody's pie chart. The latter is clearly the more pragmatic approach.

The same is true for the design, which despite its simplicity consists of about a million nested divs. I could shave off a few microseconds of rendering time and probably more than 10% of the page size by getting rid of all the unnecessary stuff. But the result would not look any different, and when the site renders quickly even on a smartphone, who cares? In return, I can move things around, pick a wider template for individual posts, and do a lot of other useful things that would have required a lot of hand-tweaking before.

## The Result

The point, though, is that the result works. The new site now uses a design that I have not built myself, and where I have changed practically nothing. No longer is the theme based on whatever design technique I just figured out how to do (rounded corners! inner shadows!) or my idea of using space. Instead, the theme is simple, beautiful, and doesn't try to compete with the content.

And I'm finally <a title="Starting Your Own Visualization Blog" href="/blog/2009/starting-your-own-visualization-blog">practicing what I'm preaching</a>. Rather than obsessing about performance or elegance, and rather than insisting on a particular way of doing things, I actually do things. And that is all that counts.


<PostedBy />


<aside class="comments">

---
## Comments

<a href="http://www.spreadsheetbudget.com" rel="nofollow noopener" target="_blank">Jon</a> says…
>	I just started a blog and did it on Drupal. The reason I decided to use drupal is because it is more versatile and I plan on selling software products, possibly do a forum, and possibly a wiki.
>	
>	Did I make the right decision? I don't know. Is WordPress powerful enough to do those things?
>	
>	Nice to see your opinions on the matter for pure blogging. When I set up my wife's blog, I'll choose WordPress.

<a href="http://blog.softartisans.com" rel="nofollow noopener" target="_blank">Claire</a> says…
>	I just moved our company blog off Confluence (hideous) and onto--after much persuasion--Wordpress. It's much more intuitive for simple, content-focused sites than is Drupal.

ERB says…
>	I read your stuff through a RSS reader, so the platform for this end-user is largely irrelevant. That's not a criticism, mind-you: I'm a fan of Wordpress because it's just enough functionality to feel like you have options, but not enough to feel overwhelmed by them.

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	The e-commerce part is definitely doable in WordPress, though I don't have any experience with that. I've seen it done though, a lot of theme websites have WordPress-based stores.
>	
>	As for the wiki, that will have to be done in a separate system anyway. I've seen attempts at doing Wikis directly in Drupal, and they're terrible. And there's also good forum software that talks to WordPress. Granted, it's not integrated as well as the Drupal forum, but it works.
>	
>	So I don't think that it's a question of features necessarily. It's a question of priorities: do you want to be able to tinker and build things a certain way, or do you want to be able to make more use of existing work that fits together and works (mostly)?

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	Interesting point. One of the things I like about this theme is that it actually looks a lot like my newsreader. There are many sites I prefer reading in it (and in Safari's Reader mode), because the layout is just much more pleasant that way.
>	
>	But I do get about the same number of people visiting the site per week as I have news subscribers, so it makes sense to have a decent-looking website. Also, the newsreader folks don't tend to explore things on the site nearly as much as people who come here. And people need to find the site before they subscribe, of course (and not nearly everybody who comes here also subscribes to the feed).

<a href="http://wpspy.net" rel="nofollow noopener" target="_blank">WPSPY</a> says…
>	To simply put it WordPress just works.

<a href="http://www.infopeer.com" rel="nofollow noopener" target="_blank">Mark Nett</a> says…
>	I too agree with you! the themes designed for Drupal are less &amp; crappy.In the first thought I also thought of using drupal but due to lack of attractive themes I had to go for joomla!
>	
>	But after working on joomla &amp; comparing to WordPress I felt the SEO &amp; performance part of joomla are inferior to WordPress, in the next moment I switched over to WordPress.
>	
>	I'm not a coder so not sure of tweaking joomla for performance &amp; SEO, but for WordPress you don't need that much of knowledge as you find tons of information &amp; help.

<a href="http://vis4.net/blog/" rel="nofollow noopener" target="_blank">Gregor</a> says…
>	Hi Robert,
>	
>	One of the good things of wordpress is, that for everything you don't like about it, there's a plugin which will fix your problem. 
>	
>	For instance, there is <b>W3 Total Cache</b> for boosting performance. Hopefully your web server allows you to cache your stuff in memcache. Mine does and WP is *a lot* faster this way.
>	
>	Also you want <b>Login LockDown</b> which makes the WP login form much more secure. It will block requests from IPs that entered the wrong password three times.
>	
>	Then there is <b>Organize Series</b> which is great if you want to write, well, multiple posts that belong to a series. 
>	
>	<b>Top Level Categories</b> allows you to skip the /category/ part in your categories urls. Handy if you just want something like http://mydomain.com/tutorials/
>	
>	The plugin <b>Redirection</b> is perfect if you want to keep some old links working, or have any other redirection-based tasks to do.
>	
>	Make sure to install <b>WordPress Database Backup</b>. It will send zipped backups of your WP database to an email address of your choice. <b>Wordpress Backup (by BTE)</b> will even send you a ZIP with all your post images.
>	
>	Hope this is helpful in some way. I'm blogging with wordpress for 3 years now and I simply love it.
>	
>	Best,
>	Gregor

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	Great pointers, thanks! I'm already using W3 Total Cache, and I have other plugins to take care of the /category/ part of URLs. Backups are also handled separately and redundantly by different programs and services, so no worries there ;)
>	
>	Login Lockdown looks like a good idea, I'll definitely install that. I also like the Organize Series plugin, since I have quite a few of those. Though I wonder if that might be a nightmare to add now that I have the site's structure already set up.

<a href="http://spreadsheetbudget.com" rel="nofollow noopener" target="_blank">Jon</a> says…
>	I switched to WordPress from Drupal. Yes, it is night and day. Luckily I was just setting up my website so it was a big deal to just repost posts I had done before, I imagine it is a bit of a pain to port everything. Things that should be simple and built don't seem to be for Drupal. Thanks for the advice.
>	
>	Gregor, great list, I'll be checking them out.

<a href="http://robbdavis.com" rel="nofollow noopener" target="_blank">robb davis</a> says…
>	Wordpress is better for blogs; Drupal is better for most everything else. That's not really hot off the presses type news.
>	
>	Agree with you about the Drupal themes though... some of the out of the box themes that make it through the approval process are shockingly bad.

Steve says…
>	Actually, Wordpress is not just better for blogs, it's better for most CMS needs.  That's the news!  In fact the latest Wordpress survey found over 90% of Wordpress users are using it as a CMS, not just for blogging.
>	
>	The reality is while Drupal might offer an amazing set of options and might be great for some intense applications, for many it is overkill and a lot of content creation is lost in the process of tinkering to get things right.

<a href="http://vislives.com" rel="nofollow noopener" target="_blank">Chris Pudney</a> says…
>	Interesting comments as I recently moved off WordPress (hosted at wordpress.com) because
>	
>	1. the ability to embed media is restricted
>	
>	2. WP started showing adverts
>	
>	I know the latter (and possibly former) can be worked around by paying more money but I decided to simply shift.  So VisLives.com is now hosted by blogger.com.  Even though it's far less powerful it's much simpler to use and I can embed easily.

<a href="http://www.echteinfach.tv/" rel="nofollow noopener" target="_blank">EETV</a> says…
>	We plan to move from Blogger (that we are using a long time already) to Wordpress. 
>	
>	Thanks for the advices given here, that encouraged us to take this big step (more than 200 posts)!
>	
>	Custom URLs (slugs) is a big plus, categories in URL as well. Not to forget: Cache = fast sites for visitors. And the feature to add unlimited static pages, this make WP worth it!

<a href="http://www.linkedin.com/company/beckerconsultingservices" rel="nofollow noopener" target="_blank">skbecker</a> says…
>	Thanks for the informative post and valuable associated comments. I want to get a dormant blog, now in mid-setup on Typepad, up and running.
>	
>	Looking at platforms several years ago, Typepad seemed flexible and simpler than evaluating Wordpress.com v Wordpress.org. Now, although Typepad blogs remain, the action is toward Wordpress...everywhere.
>	
>	I can see strong reasons FOR Wordpress but wonder: Am I missing some negative about Typepad, or are the plusses of Wordpress so compelling...?
>	
>	Would appreciate any thoughts and suggestions à la Gregor's re Wordpress (thanks). I don't code and don't want to maintain the back end but need the blog (will add site to it) to demonstrate professional focus on visual communication.
>	
>	Thanks! Susan

<a href="http://www.pdvictor.com" rel="nofollow noopener" target="_blank">Peter Drinnan</a> says…
>	Drupal sites are relatively easy to setup but maintenance is another story altogether. The cache can eat up all your server space if you don't monitor it and updates are like juggling cats. I can update a WordPress site in minutes. Updating a Drupal site usually takes hours or longer. I don't get it. Wordpres and Drupal are only a couple of years apart but somewhere along the Drupal devs took a turn into crazy land and just kept on going.

<a href="http://www.dimensionsinmathematics.com" rel="nofollow noopener" target="_blank">Dimensions in Mathematics</a> says…
>	I still think Drupal is best. You're right it has a lot of administrative stuff and more complex, but that's the beauty of it.

<a href="http://www.onecebu.com" rel="nofollow noopener" target="_blank">OneCebu Team</a> says…
>	It maybe true if we stick to your requirement which is purely blogging. But for me, I picked Drupal because of its robustness and scalability.

Jt says…
>	Eh, sounds to me like you just gave up learning Drupal. It does everything better, once you know how. Granted if you don't need it to do anything else then WordPress is definitely simpler to use. But if you're interested in making powerful database driven websites with rich functionality without even coding, then Drupal is definitely it.

Steven says…
>	I would agree with the consensus that Wordpress fits most needs however as a Drupal developer I am enticed by the power and extra possibilities of Drupal. 
>	My criticism of Wordpress is that many plugins are commercial e.g. WPML (for Multilingual CMS). The lacking of open source multilingualism in WP was the main reason I switched to Drupal from WP. Many may argue that it is a small fee but if you are developing for numerous clients on numerous domains then a per domain licence defeats the purpose, i believe. 
>	My criticism of Drupal would be the above mentioned learning curve and the difficulty of updating. With Drush, that is now easier but Drush isn't common on shared hosting and therefore the download, drush updating and then upload process is a little tedious.

<a href="http://garan.org" rel="nofollow noopener" target="_blank">Garan</a> says…
>	Hi Robert - 12 months on do you still think it was the right thing to do?  I'm contemplating the switch for similar reasons..
>	
>	Garan.

<a href="/about" rel="nofollow noopener" target="_blank">Robert Kosara</a> says…
>	I'm still happy with my switch, and I haven't looked back. WP is still doing everything I need it to, and it has been stable and reliable.

<a href="http://drupalmint.com/" rel="nofollow noopener" target="_blank">DrupalMint</a> says…
>	In case of personal blogs and a small websites Wordpress supports in beteer manner. Comes, for the case of E-Commerce websites, I do not think so that the Wordpress does not support at much as Drupal supports.

BigJon says…
>	I am a coder.
>	I've recently started with Drupal.
>	And OMG! I think not a single module is bug free! ! ! ! ! And when you start mixing and matching modules the headaches increase exponentially.
>	Also, many of the modules are written by noobs -good work boys, but you've clearly never worked for a living, nor read a book on php. hideous coding.
>	As for the documentation...
>	"in the land of the blind, the man with one eye is king!"

Jon says…
>	I am in the process of planning a move from Drupal to Wordpress. How did you move the content?

Luis Herrera says…
>	I appreciate this review. This was quite helpful.   :)

<a href="https://plus.google.com/104041231265800134815" rel="nofollow noopener" target="_blank">Zdenek Zraly</a> says…
>	We are just building e-commerce site within WordPress using WooCommerce and the admin interface that cannot be cached is sometimes really slow when editing a product esp. for products with many attributes. But otherwise it works great.

Paulo Werdana says…
>	The real deciding factor comes down to what you really need your site to do in the end and how much effort and time you are willing to put into it. Being an experienced IT specialist - I left robust and powerful Drupal in favor of more popular WordPress and don’t regret about that. I consider WordPress to be one-fits-all solution - hardly any other CMS comes close to it in terms of multifunctionality and flexibility. By the way, I managed to switch from Drupal to WordPress within my coffee break (found an online converter which performs migration with minimal human involvement - CMS2CMS)

</aside>

