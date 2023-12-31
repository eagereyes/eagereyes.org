---
title: "New CMS, Users, More Coming"
description: "This website just got a facelift and a few new features. I transitioned it to Drupal 6, and in the process redid the theme from scratch. While the changes are not huge, it does look a bit more modern. There are also a few new features to facilitate commenting and discussion."
date: 2008-07-14 15:21:21
tags: 
featuredImage: 
---

# New CMS, Users, More Coming

This website just got a facelift and a few new features. I transitioned it to Drupal 6, and in the process redid the theme from scratch. While the changes are not huge, it does look a bit more modern. There are also a few new features to facilitate commenting and discussion.

## Users

You can now create a user on this site by simply providing a user name and email address, or using <a href="http://openid.net/get/">OpenID</a>. Why would you want to? When posting comments, your name no longer has the "not verified" next to it, you can skip the CAPTCHA, your comment appears immediately (and not when I get around to approving it), and - best of all! - you can use exciting formatting features like <strong>bold</strong> and <em>italics</em>.

If that's not enough to convince you, being a user also allows you to track responses to postings that you commented on, so you can stay informed what others are saying. Also, this is a bit of a test for me: if there is any interest, I want to add discussion forums to the site for a more open kind of exchange.

To create a user or login, use the login box at the top right. It will move down to a less prominent spot (below the bookmarks, probably) in about a week or so.

## Theme

As far as the theme is concerned, I have tried and failed to make it more minimalist. While I'm a big fan of minimalism, I don't seem to be able to do it myself. So I took the opposite route and actually added some ornamentation to the layout. And in staying true to this site's topic, I've taken a hint from <a href="/blog/2008/treemaps">Cushion Treemaps</a> to <span style="text-decoration: line-through;">sexy up</span> perceptually distinguish the menu.

I've tested the site in Safari 3.1, FireFox 3, and IE7. Please let me know if there are problems, especially in browsers I have not yet tested.

If you are using Internet Explorer 6, you will probably see images sticking out into the menu bars on the right and there will be a lot of empty space at the top. The latter is actually already a work-around to make the site usable at all in IE6. Resizing the window to make it as wide as possible should help with the sticking-out. I know that some of you might be stuck with IE6 because of corporate policies, but other than that, there is really no excuse for using such an outdated browser. IE6 users are also a very small minority on this site, so I really can't design around its limitations. If there is any way to upgrade your Internet Explorer (or replace it with something else), then by all means do it. 

As always, I am interested in what you think about the new theme, users, plans for discussion forums, the site in general, and anything else.


<PostedBy />


<aside class="comments">

---
## Comments

MattK says…
>	<p>I like the great work you are doing here - and got excited about the openid.</p>
>	<p>But I think you miss the point on OpenID.  I shouldn't have to <em>register</em>.  I already did register my openid!  If it authenticates, it's me.  OpenID is valuable when I can just go to your site, authenticate myself and comment.  Having to put in a registration and email and go back and verify that seems silly when I can authenticate who I am, I'm the guy who controls http://www.morelightmorelight.com/id !</p>
>	

Robert Kosara says…
>	<p>Thanks! I agree about OpenID, but that's the way it's implemented in Drupal. It needs a local user entry in the database, but it could create that transparently. The problem is that <a href="http://drupal.org/handbook/modules/openid">OpenID is not a trust system</a>, so I doubt it will be implemented in this way.</p>
>	<p>The advantage of OpenID right now is that you're able to use the same login and password across all sites, and won't have to make up a new password (or reuse one over and over) for every single one. It's not a perfect system, but it's better than nothing.</p>

</aside>

