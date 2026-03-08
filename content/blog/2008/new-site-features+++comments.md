MattK says…
> I like the great work you are doing here - and got excited about the openid.
>
> But I think you miss the point on OpenID.  I shouldn't have to *register*.  I already did register my openid!  If it authenticates, it's me.  OpenID is valuable when I can just go to your site, authenticate myself and comment.  Having to put in a registration and email and go back and verify that seems silly when I can authenticate who I am, I'm the guy who controls http://www.morelightmorelight.com/id !

Robert Kosara says…
> Thanks! I agree about OpenID, but that's the way it's implemented in Drupal. It needs a local user entry in the database, but it could create that transparently. The problem is that [OpenID is not a trust system](http://drupal.org/handbook/modules/openid), so I doubt it will be implemented in this way.
>
> The advantage of OpenID right now is that you're able to use the same login and password across all sites, and won't have to make up a new password (or reuse one over and over) for every single one. It's not a perfect system, but it's better than nothing.
