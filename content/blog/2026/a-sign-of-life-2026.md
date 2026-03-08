
<figure>
<img src="https://media.eagereyes.org/media/2026/curious-chipmunk.jpg" alt="A chipmunk looking over the edge of a rock"/>
</figure>

# A Sign of Life in 2026!

Well look at that, a new blog post! This site has been dormant for a while, but now it's ready to come back.

The short version is that I've created a new static site for it that's more modern and hopefully easier to navigate. It also makes it a lot easier to build new sections and add interactive pages and little apps.

I'm working on bringing back some of my old interactive pieces (which I'm now calling apps), most of which I broke in the transition to my previous static site version and never ended up fixing.

<figure>
<img src="https://media.eagereyes.org/media/2026/zipscribble-florida.png" alt="ZIPScribble map of the United States"/>
</figure>

In particular, [the ZIPScribble Map](https://eagereyes.org/app/zipscribble-map) is back and much better than before – though US-only for now. It has a new navigation bar along the bottom that lets you hover over ZIP code zones or states to highlight and zoom them. It's a little finicky and needs some refinement, but it's pretty interesting to explore.

## New static site

For anybody interested, the new site is built using [Svelte and SvelteKit](https://svelte.dev), and hosted on Github Pages. The original transition from WordPress was to a site I made with [VitePress](https://vitepress.dev), but that turned out to not be such a great fit after all. VitePress is works well for documentation sites, but it lacks flexibility and I found debugging issues with Vue components to be quite frustrating.

With Svelte, I built all the logic and structure myself, so it's easy to change and figure out where things might be going wrong. I also recently started using Claude Code, and as you can see [in the code repo](https://github.com/eagereyes/eagereyes.org), it has helped tremendously to finally get the site over the finish line.

I continue to be impressed by how much Claude Code can do (and I'm not even really pushing the boundaries, I think). I had it update the code for the ZIPScribble map from Svelte 3 to 5, fix some issues, and then integrate it into this site, all with just a few prompts. It also found DOIs for some of [my papers](https://eagereyes.org/publications) where they were missing or wrong, and it has also already built a new photo gallery section for me. The latter isn't live on the production site quite yet, but it's only waiting on me now  to pick photos and create the galleries.

## More to come

Stay tuned for more! You can [subscribe to the RSS/Atom feed](https://eagereyes.org/feed) or [follow me on BlueSky](https://bsky.app/profile/eagereyes.org) or [LinkedIn](https://www.linkedin.com/in/rkosara/). I might also bring back email subscriptions, but that's a bigger project.

There will be more updates on apps as I bring them back, new stuff like photo galleries, and a few other things I've been wanting to build. And of course there will even be the odd blog post on various topics like data visualization and related topics, and maybe even more videos, who knows!

