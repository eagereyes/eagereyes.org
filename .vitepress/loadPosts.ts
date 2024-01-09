import { ContentData, createContentLoader } from 'vitepress'

async function loadPosts(numPosts:number, render:boolean) {
    // load by year and push into array to load less unnecessary stuff
    let posts = <ContentData[]>[];
  
    let year = (new Date()).getFullYear();
  
    while (posts.length < numPosts) {
      const newPosts = await createContentLoader(`blog/${year}/*.md`, {
        excerpt: false,
        render
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
    posts = posts.slice(0, numPosts);
  
    return posts;
}

export default loadPosts;
