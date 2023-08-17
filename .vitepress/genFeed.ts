import path from 'path'
import { writeFileSync } from 'fs'
import { Feed } from 'feed'
import { type SiteConfig } from 'vitepress'
import loadPosts from './loadPosts'

const baseUrl = `https://eagereyes.org`

const NUMPOSTS = 20;

export async function genFeed(config: SiteConfig) {
  const feed = new Feed({
    title: 'eagereyes.org',
    description: 'Visualization and Visual Communication',
    id: baseUrl,
    link: baseUrl,
    language: 'en',
    image: 'https://media.eagereyes.org/wp-content/uploads/2016/09/winky-e-favicon-256.png',
    favicon: `https://media.eagereyes.org/wp-content/uploads/2016/09/winky-e-favicon-256.png`,
    copyright: 'Copyright (c) 2006-present, Robert Kosara',
    feedLinks: {
      rss: "https://eagereyes.org/feed",
      atom: "https://eagereyes.org/atom"
    },
  })

  const posts = await loadPosts(NUMPOSTS, true);

  for (const { url, excerpt, frontmatter, html } of posts) {
    feed.addItem({
      title: frontmatter.title,
      id: `${baseUrl}${url}`,
      link: `${baseUrl}${url}`,
      description: frontmatter.description,
      content: html?.split('<aside')[0],
      author: [
        {
          name: "Robert Kosara",
          link: "https://eagereyes.org/about"
        }
      ],
      date: frontmatter.date
    })
  }

  writeFileSync(path.join(config.outDir, 'rss.xml'), feed.rss2())
  // so eagereyes.org/feed works…
  writeFileSync(path.join(config.outDir, 'feed.xml'), feed.rss2())
  // Atom feed, why not?
  writeFileSync(path.join(config.outDir, 'atom.xml'), feed.atom1())
}
