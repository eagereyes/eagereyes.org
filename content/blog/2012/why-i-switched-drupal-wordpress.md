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
