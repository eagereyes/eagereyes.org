import path from 'path'
import { writeFileSync } from 'fs'
import { Feed } from 'feed'
import { ContentData, createContentLoader, type SiteConfig } from 'vitepress'

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
    copyright:
      'Copyright (c) 2006-present, Robert Kosara'
  })

  // load by year and push into array to load less unnecessary stuff
  let posts = <ContentData[]>[];
  
  let year = (new Date()).getFullYear();

  while (posts.length < NUMPOSTS) {
    const newPosts = await createContentLoader(`blog/${year}/*.md`, {
      excerpt: true,
      render: true
    }).load();
    
    posts = posts.concat(...newPosts);

    year -= 1;
  }

  // sort in reverse chronological order
  posts.sort(
    (a, b) =>
      +new Date(b.frontmatter.date as string) -
      +new Date(a.frontmatter.date as string)
  )

  // remove index pages
  posts = posts.filter(d => !d.url.endsWith('/'));

  // only include NUMPOSTS posts
  posts = posts.slice(0, NUMPOSTS);

  for (const { url, excerpt, frontmatter, html } of posts) {
    feed.addItem({
      title: frontmatter.title,
      id: `${baseUrl}${url}`,
      link: `${baseUrl}${url}`,
      description: frontmatter.description,
      content: html,
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
  writeFileSync(path.join(config.outDir, 'feed.xml'), feed.rss2())
}
