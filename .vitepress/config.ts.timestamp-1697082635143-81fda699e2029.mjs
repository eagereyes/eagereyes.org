// .vitepress/config.ts
import { defineConfig } from "file:///Users/rkosara/Documents/Sites/eagereyes/node_modules/vitepress/dist/node/index.js";
import { readFileSync } from "node:fs";

// .vitepress/genFeed.ts
import path from "path";
import { writeFileSync } from "fs";
import { Feed } from "file:///Users/rkosara/Documents/Sites/eagereyes/node_modules/feed/lib/feed.js";

// .vitepress/loadPosts.ts
import { createContentLoader } from "file:///Users/rkosara/Documents/Sites/eagereyes/node_modules/vitepress/dist/node/index.js";
async function loadPosts(numPosts, render) {
  let posts = [];
  let year = (/* @__PURE__ */ new Date()).getFullYear();
  while (posts.length < numPosts) {
    const newPosts = await createContentLoader(`blog/${year}/*.md`, {
      excerpt: false,
      render
    }).load();
    posts = posts.concat(...newPosts);
    year -= 1;
  }
  posts.sort(
    (a, b) => +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
  );
  posts = posts.filter((d) => !d.url.endsWith("/"));
  posts = posts.slice(0, numPosts);
  return posts;
}
var loadPosts_default = loadPosts;

// .vitepress/genFeed.ts
var baseUrl = `https://eagereyes.org`;
var NUMPOSTS = 20;
async function genFeed(config) {
  const feed = new Feed({
    title: "eagereyes.org",
    description: "Visualization and Visual Communication",
    id: `${baseUrl}/`,
    link: `${baseUrl}/`,
    language: "en",
    image: "https://media.eagereyes.org/wp-content/uploads/2016/09/winky-e-favicon-256.png",
    favicon: `https://media.eagereyes.org/wp-content/uploads/2016/09/winky-e-favicon-256.png`,
    copyright: "Copyright (c) 2006-present, Robert Kosara",
    feedLinks: {
      rss: "https://eagereyes.org/feed",
      atom: "https://eagereyes.org/atom"
    }
  });
  const posts = await loadPosts_default(NUMPOSTS, true);
  for (const { url, excerpt, frontmatter, html } of posts) {
    feed.addItem({
      title: frontmatter.title,
      id: `${baseUrl}${url}`,
      link: `${baseUrl}${url}`,
      description: frontmatter.description,
      content: html == null ? void 0 : html.split("<aside")[0].replace(/<PostedBy ?\/>/, ""),
      author: [
        {
          name: "Robert Kosara",
          link: "https://eagereyes.org/about"
        }
      ],
      date: frontmatter.date
    });
  }
  writeFileSync(path.join(config.outDir, "rss.xml"), feed.rss2());
  writeFileSync(path.join(config.outDir, "feed.xml"), feed.rss2());
  writeFileSync(path.join(config.outDir, "atom.xml"), feed.atom1());
}

// .vitepress/transformHead.ts
async function transformHead(context) {
  const fm = context.pageData.frontmatter;
  const url = "https://eagereyes.org/" + context.pageData.relativePath.slice(0, -3);
  let head = [];
  if (context.pageData.filePath === "index.md") {
    head = head.concat([
      ["meta", { property: "og:title", content: "eagereyes.org" }],
      ["meta", { property: "og:description", content: "Visualization and Visual Communication" }],
      // [ 'meta', {property: 'og:image', content: fm.featuredImage} ],
      ["meta", { property: "og:url", content: "https://eagereyes.org/" }],
      ["meta", { property: "og:type", content: "website" }]
    ]);
  } else {
    head = head.concat([
      ["meta", { property: "og:title", content: fm.title }],
      ["meta", { property: "og:description", content: fm.description }],
      ["meta", { property: "og:image", content: fm.featuredImage }],
      ["meta", { property: "og:url", content: url }],
      ["meta", { property: "og:type", content: "article" }]
    ]);
  }
  head = head.concat([
    ["meta", { name: "twitter:card", content: fm.featuredImage ? "summary_large_image" : "summary" }],
    ["meta", { name: "twitter:site", content: "@eagereyes" }],
    ["meta", { name: "twitter:creator", content: "@eagereyes" }]
  ]);
  if (fm.date) {
    head.push(["meta", { property: "article:published_time", content: new Date(fm.date).toISOString() }]);
  }
  return head;
}

// .vitepress/config.ts
var config_default = defineConfig({
  title: "eagereyes.org",
  titleTemplate: ":title - eagereyes.org",
  description: "Visualization and Visual Communication",
  cleanUrls: true,
  base: "/",
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    siteTitle: false,
    logo: { light: "https://media.eagereyes.org/eagereyes-logo-dark.svg", dark: "https://media.eagereyes.org/eagereyes-logo-light.svg", alt: "eagereyes Logo" },
    nav: [
      { text: "Practical", items: [
        { text: "Pie Charts", link: "/pie-charts" },
        { text: "Visualization Basics", link: "/tag/basics" },
        { text: "YouTube Videos", link: "/tag/eagereyestv" },
        { text: "Book Reviews", link: "/tag/book-reviews" },
        { text: "Blog", link: "/blog/" }
      ] },
      { text: "Academic", items: [
        { text: "My Publications", link: "/publications/" },
        { text: "Conference Reports", link: "/tag/conference" },
        { text: "Peer Review", link: "/tag/peer-review" },
        { text: "Lists of Influences", link: "/tag/influences" },
        { text: "Common Speaking Mistakes", link: "/blog/2016/common-speaking-mistakes-to-avoid" },
        { text: "Criticism", link: "/tag/criticism" }
      ] },
      { text: "Admin", items: [
        { text: "About", link: "/about" },
        { text: "Contact", link: "/contact" },
        { text: "License", link: "/license" }
      ] }
    ],
    sidebar: {
      "/blog/": JSON.parse(readFileSync("sidebar.json", "utf-8"))
    },
    footer: {
      message: '<a href="/license">All materials available under CC-BY-SA</a>',
      copyright: "Copyright \xA92006\u2013present Robert Kosara"
    },
    socialLinks: [
      { icon: "mastodon", link: "https://mastodon.social/@eagereyes" },
      { icon: "youtube", link: "https://youtube.com/@eagereyes" },
      { icon: "linkedin", link: "https://linkedin.com/in/rkosara/" },
      { icon: "twitter", link: "https://twitter.com/@eagereyes" },
      {
        icon: { svg: '<svg width="100%" height="100%" viewBox="0 0 11 11" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M3,9.5c0,0.823 -0.677,1.5 -1.5,1.5c-0.823,0 -1.5,-0.677 -1.5,-1.5c0,-0.823 0.677,-1.5 1.5,-1.5c0.823,0 1.5,0.677 1.5,1.5Zm-3,-8.5c0,-0.549 0.451,-1 1,-1c5.523,0 10,4.477 10,10c0,0.549 -0.451,1 -1,1c-0.549,0 -1,-0.451 -1,-1c0,-4.389 -3.611,-8 -8,-8c-0.549,0 -1,-0.451 -1,-1Zm0,4c0,-0.549 0.451,-1 1,-1c3.292,-0 6,2.708 6,6c0,0.549 -0.451,1 -1,1c-0.549,0 -1,-0.451 -1,-1c0,-2.194 -1.806,-4 -4,-4c-0.549,0 -1,-0.451 -1,-1Z" style="fill-rule:nonzero;"/></svg>' },
        link: "https://eagereyes.org/feed"
      }
    ],
    search: {
      provider: "local"
    },
    outlineTitle: "Contents"
  },
  head: [
    ["meta", { name: "author", content: "Robert Kosara" }],
    ["link", {
      rel: "icon",
      sizes: "32x32",
      "href": "https://media.eagereyes.org/wp-content/uploads/2016/09/winky-e-favicon-256.png"
    }],
    ["link", {
      rel: "icon",
      sizes: "192x192",
      "href": "https://media.eagereyes.org/wp-content/uploads/2016/09/winky-e-favicon-256.png"
    }],
    ["link", {
      rel: "apple-touch-icon",
      "href": "https://media.eagereyes.org/wp-content/uploads/2016/09/winky-e-favicon-256.png"
    }],
    ["meta", {
      name: "msapplication-TileImage",
      "content": "https://media.eagereyes.org/wp-content/uploads/2016/09/winky-e-favicon-256.png"
    }],
    ["link", { rel: "alternate", type: "application/rss+xml", title: "eagereyes RSS Feed", href: "https://eagereyes.org/feed" }],
    ["link", { rel: "alternate", type: "application/atom+xml", title: "eagereyes Atom Feed", href: "https://eagereyes.org/atom" }],
    [
      "script",
      { async: "", src: "https://www.googletagmanager.com/gtag/js?id=G-PDJZL25VMX" }
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			
			gtag('config', 'G-PDJZL25VMX');`
    ]
  ],
  sitemap: {
    hostname: "https://eagereyes.org"
  },
  // generate open-graph and Twitter card header fields
  transformHead,
  // generate the RSS and Atom feeds
  buildEnd: genFeed
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcudHMiLCAiLnZpdGVwcmVzcy9nZW5GZWVkLnRzIiwgIi52aXRlcHJlc3MvbG9hZFBvc3RzLnRzIiwgIi52aXRlcHJlc3MvdHJhbnNmb3JtSGVhZC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9ya29zYXJhL0RvY3VtZW50cy9TaXRlcy9lYWdlcmV5ZXMvLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3Jrb3NhcmEvRG9jdW1lbnRzL1NpdGVzL2VhZ2VyZXllcy8udml0ZXByZXNzL2NvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvcmtvc2FyYS9Eb2N1bWVudHMvU2l0ZXMvZWFnZXJleWVzLy52aXRlcHJlc3MvY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzJ1xuaW1wb3J0IHsgcmVhZEZpbGVTeW5jIH0gZnJvbSAnbm9kZTpmcyc7XG5pbXBvcnQgeyBnZW5GZWVkIH0gZnJvbSAnLi9nZW5GZWVkJztcbmltcG9ydCB0cmFuc2Zvcm1IZWFkIGZyb20gJy4vdHJhbnNmb3JtSGVhZCc7XG5cbi8vIGh0dHBzOi8vdml0ZXByZXNzLmRldi9yZWZlcmVuY2Uvc2l0ZS1jb25maWdcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG5cdHRpdGxlOiBcImVhZ2VyZXllcy5vcmdcIixcblx0dGl0bGVUZW1wbGF0ZTogJzp0aXRsZSAtIGVhZ2VyZXllcy5vcmcnLFxuXHRkZXNjcmlwdGlvbjogXCJWaXN1YWxpemF0aW9uIGFuZCBWaXN1YWwgQ29tbXVuaWNhdGlvblwiLFxuXG5cdGNsZWFuVXJsczogdHJ1ZSxcblx0YmFzZTogJy8nLFxuXG5cdC8vIGh0dHBzOi8vdml0ZXByZXNzLmRldi9yZWZlcmVuY2UvZGVmYXVsdC10aGVtZS1jb25maWdcblx0dGhlbWVDb25maWc6IHtcblxuXHRcdHNpdGVUaXRsZTogZmFsc2UsXG5cdFx0bG9nbzogeyBsaWdodDogJ2h0dHBzOi8vbWVkaWEuZWFnZXJleWVzLm9yZy9lYWdlcmV5ZXMtbG9nby1kYXJrLnN2ZycsIGRhcms6ICdodHRwczovL21lZGlhLmVhZ2VyZXllcy5vcmcvZWFnZXJleWVzLWxvZ28tbGlnaHQuc3ZnJywgYWx0OiAnZWFnZXJleWVzIExvZ28nIH0sXG5cblx0XHRuYXY6IFtcblx0XHRcdHsgdGV4dDogJ1ByYWN0aWNhbCcsIGl0ZW1zOiBbXG5cdFx0XHRcdHsgdGV4dDogJ1BpZSBDaGFydHMnLCBsaW5rOiAnL3BpZS1jaGFydHMnIH0sXG5cdFx0XHRcdHsgdGV4dDogJ1Zpc3VhbGl6YXRpb24gQmFzaWNzJywgbGluazogJy90YWcvYmFzaWNzJyB9LFxuXHRcdFx0XHR7IHRleHQ6ICdZb3VUdWJlIFZpZGVvcycsIGxpbms6ICcvdGFnL2VhZ2VyZXllc3R2JyB9LFxuXHRcdFx0XHR7IHRleHQ6ICdCb29rIFJldmlld3MnLCBsaW5rOiAnL3RhZy9ib29rLXJldmlld3MnIH0sXG5cdFx0XHRcdHsgdGV4dDogJ0Jsb2cnLCBsaW5rOiAnL2Jsb2cvJyB9LFxuXHRcdFx0XX0sXG5cdFx0XHR7IHRleHQ6ICdBY2FkZW1pYycsIGl0ZW1zOiBbXG5cdFx0XHRcdHsgdGV4dDogJ015IFB1YmxpY2F0aW9ucycsIGxpbms6ICcvcHVibGljYXRpb25zLycgfSxcblx0XHRcdFx0eyB0ZXh0OiAnQ29uZmVyZW5jZSBSZXBvcnRzJywgbGluazogJy90YWcvY29uZmVyZW5jZScgfSxcblx0XHRcdFx0eyB0ZXh0OiAnUGVlciBSZXZpZXcnLCBsaW5rOiAnL3RhZy9wZWVyLXJldmlldycgfSxcblx0XHRcdFx0eyB0ZXh0OiAnTGlzdHMgb2YgSW5mbHVlbmNlcycsIGxpbms6ICcvdGFnL2luZmx1ZW5jZXMnIH0sXG5cdFx0XHRcdHsgdGV4dDogJ0NvbW1vbiBTcGVha2luZyBNaXN0YWtlcycsIGxpbms6ICcvYmxvZy8yMDE2L2NvbW1vbi1zcGVha2luZy1taXN0YWtlcy10by1hdm9pZCcgfSxcblx0XHRcdFx0eyB0ZXh0OiAnQ3JpdGljaXNtJywgbGluazogJy90YWcvY3JpdGljaXNtJyB9LFxuXHRcdFx0XX0sXG5cdFx0XHR7IHRleHQ6ICdBZG1pbicsIGl0ZW1zOiBbXG5cdFx0XHRcdFx0eyB0ZXh0OiAnQWJvdXQnLCBsaW5rOiAnL2Fib3V0JyB9LFxuXHRcdFx0XHRcdHsgdGV4dDogJ0NvbnRhY3QnLCBsaW5rOiAnL2NvbnRhY3QnIH0sXG5cdFx0XHRcdFx0eyB0ZXh0OiAnTGljZW5zZScsIGxpbms6ICcvbGljZW5zZScgfSxcblx0XHRcdFx0XSB9LFxuXHRcdF0sXG5cblx0XHRzaWRlYmFyOiB7XG5cdFx0XHQnL2Jsb2cvJzogSlNPTi5wYXJzZShyZWFkRmlsZVN5bmMoJ3NpZGViYXIuanNvbicsICd1dGYtOCcpKVxuXHRcdH0sXG5cblx0XHRmb290ZXI6IHtcblx0XHRcdG1lc3NhZ2U6ICc8YSBocmVmPVwiL2xpY2Vuc2VcIj5BbGwgbWF0ZXJpYWxzIGF2YWlsYWJsZSB1bmRlciBDQy1CWS1TQTwvYT4nLFxuXHRcdFx0Y29weXJpZ2h0OiAnQ29weXJpZ2h0IFx1MDBBOTIwMDZcdTIwMTNwcmVzZW50IFJvYmVydCBLb3NhcmEnXG5cdFx0fSxcblxuXHRcdHNvY2lhbExpbmtzOiBbXG5cdFx0XHR7IGljb246ICdtYXN0b2RvbicsIGxpbms6ICdodHRwczovL21hc3RvZG9uLnNvY2lhbC9AZWFnZXJleWVzJyB9LFxuXHRcdFx0eyBpY29uOiAneW91dHViZScsIGxpbms6ICdodHRwczovL3lvdXR1YmUuY29tL0BlYWdlcmV5ZXMnIH0sXG5cdFx0XHR7IGljb246ICdsaW5rZWRpbicsIGxpbms6ICdodHRwczovL2xpbmtlZGluLmNvbS9pbi9ya29zYXJhLycgfSxcblx0XHRcdHsgaWNvbjogJ3R3aXR0ZXInLCBsaW5rOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9AZWFnZXJleWVzJyB9LFxuXHRcdFx0eyBpY29uOiB7IHN2ZzogJzxzdmcgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHZpZXdCb3g9XCIwIDAgMTEgMTFcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgeG1sbnM6c2VyaWY9XCJodHRwOi8vd3d3LnNlcmlmLmNvbS9cIiBzdHlsZT1cImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyO1wiPjxwYXRoIGQ9XCJNMyw5LjVjMCwwLjgyMyAtMC42NzcsMS41IC0xLjUsMS41Yy0wLjgyMywwIC0xLjUsLTAuNjc3IC0xLjUsLTEuNWMwLC0wLjgyMyAwLjY3NywtMS41IDEuNSwtMS41YzAuODIzLDAgMS41LDAuNjc3IDEuNSwxLjVabS0zLC04LjVjMCwtMC41NDkgMC40NTEsLTEgMSwtMWM1LjUyMywwIDEwLDQuNDc3IDEwLDEwYzAsMC41NDkgLTAuNDUxLDEgLTEsMWMtMC41NDksMCAtMSwtMC40NTEgLTEsLTFjMCwtNC4zODkgLTMuNjExLC04IC04LC04Yy0wLjU0OSwwIC0xLC0wLjQ1MSAtMSwtMVptMCw0YzAsLTAuNTQ5IDAuNDUxLC0xIDEsLTFjMy4yOTIsLTAgNiwyLjcwOCA2LDZjMCwwLjU0OSAtMC40NTEsMSAtMSwxYy0wLjU0OSwwIC0xLC0wLjQ1MSAtMSwtMWMwLC0yLjE5NCAtMS44MDYsLTQgLTQsLTRjLTAuNTQ5LDAgLTEsLTAuNDUxIC0xLC0xWlwiIHN0eWxlPVwiZmlsbC1ydWxlOm5vbnplcm87XCIvPjwvc3ZnPid9LFxuXHRcdFx0IFx0bGluazogJ2h0dHBzOi8vZWFnZXJleWVzLm9yZy9mZWVkJyB9XG5cdFx0XSxcblxuXHRcdHNlYXJjaDoge1xuXHRcdFx0cHJvdmlkZXI6ICdsb2NhbCdcblx0XHR9LFxuXG5cdFx0b3V0bGluZVRpdGxlOiAnQ29udGVudHMnLFxuXHR9LFxuXG5cdGhlYWQ6IFtcblx0XHRbICdtZXRhJywge25hbWU6ICdhdXRob3InLCBjb250ZW50OiAnUm9iZXJ0IEtvc2FyYScgfV0sXG5cdFx0WyAnbGluaycsIHtyZWw6ICdpY29uJywgc2l6ZXM6IFwiMzJ4MzJcIixcblx0XHRcdCdocmVmJzogXCJodHRwczovL21lZGlhLmVhZ2VyZXllcy5vcmcvd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDkvd2lua3ktZS1mYXZpY29uLTI1Ni5wbmdcIiB9IF0sXG5cdFx0WyAnbGluaycsIHtyZWw6ICdpY29uJywgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuXHRcdFx0J2hyZWYnOiBcImh0dHBzOi8vbWVkaWEuZWFnZXJleWVzLm9yZy93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS93aW5reS1lLWZhdmljb24tMjU2LnBuZ1wiIH0gXSxcblx0XHRbICdsaW5rJywge3JlbDogJ2FwcGxlLXRvdWNoLWljb24nLFxuXHRcdFx0J2hyZWYnOiBcImh0dHBzOi8vbWVkaWEuZWFnZXJleWVzLm9yZy93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS93aW5reS1lLWZhdmljb24tMjU2LnBuZ1wiIH0gXSxcblx0XHRbICdtZXRhJywge25hbWU6ICdtc2FwcGxpY2F0aW9uLVRpbGVJbWFnZScsXG5cdFx0XHQnY29udGVudCc6IFwiaHR0cHM6Ly9tZWRpYS5lYWdlcmV5ZXMub3JnL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzA5L3dpbmt5LWUtZmF2aWNvbi0yNTYucG5nXCIgfSBdLFxuXHRcdFsgJ2xpbmsnLCB7cmVsOiBcImFsdGVybmF0ZVwiLCB0eXBlOiBcImFwcGxpY2F0aW9uL3Jzcyt4bWxcIiwgdGl0bGU6IFwiZWFnZXJleWVzIFJTUyBGZWVkXCIsIGhyZWY6IFwiaHR0cHM6Ly9lYWdlcmV5ZXMub3JnL2ZlZWRcIn0gXSxcblx0XHRbICdsaW5rJywge3JlbDogXCJhbHRlcm5hdGVcIiwgdHlwZTogXCJhcHBsaWNhdGlvbi9hdG9tK3htbFwiLCB0aXRsZTogXCJlYWdlcmV5ZXMgQXRvbSBGZWVkXCIsIGhyZWY6IFwiaHR0cHM6Ly9lYWdlcmV5ZXMub3JnL2F0b21cIn0gXSxcblx0XHRbXG5cdFx0XHQnc2NyaXB0Jyxcblx0XHRcdHthc3luYzogJycsIHNyYzogXCJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPUctUERKWkwyNVZNWFwifVxuXHRcdF0sXG5cdFx0W1xuXHRcdFx0J3NjcmlwdCcsXG5cdFx0XHR7fSxcblx0XHRcdGB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcblx0XHRcdGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cblx0XHRcdGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XG5cdFx0XHRcblx0XHRcdGd0YWcoJ2NvbmZpZycsICdHLVBESlpMMjVWTVgnKTtgXG5cdFx0XVxuXHRdLFxuXG5cdHNpdGVtYXA6IHtcblx0XHRob3N0bmFtZTogJ2h0dHBzOi8vZWFnZXJleWVzLm9yZydcblx0fSxcblxuXHQvLyBnZW5lcmF0ZSBvcGVuLWdyYXBoIGFuZCBUd2l0dGVyIGNhcmQgaGVhZGVyIGZpZWxkc1xuXHR0cmFuc2Zvcm1IZWFkOiB0cmFuc2Zvcm1IZWFkLFxuXG5cdC8vIGdlbmVyYXRlIHRoZSBSU1MgYW5kIEF0b20gZmVlZHNcblx0YnVpbGRFbmQ6IGdlbkZlZWRcbn0pXG5cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3Jrb3NhcmEvRG9jdW1lbnRzL1NpdGVzL2VhZ2VyZXllcy8udml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvcmtvc2FyYS9Eb2N1bWVudHMvU2l0ZXMvZWFnZXJleWVzLy52aXRlcHJlc3MvZ2VuRmVlZC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvcmtvc2FyYS9Eb2N1bWVudHMvU2l0ZXMvZWFnZXJleWVzLy52aXRlcHJlc3MvZ2VuRmVlZC50c1wiO2ltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgeyB3cml0ZUZpbGVTeW5jIH0gZnJvbSAnZnMnXG5pbXBvcnQgeyBGZWVkIH0gZnJvbSAnZmVlZCdcbmltcG9ydCB7IHR5cGUgU2l0ZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcbmltcG9ydCBsb2FkUG9zdHMgZnJvbSAnLi9sb2FkUG9zdHMnXG5cbmNvbnN0IGJhc2VVcmwgPSBgaHR0cHM6Ly9lYWdlcmV5ZXMub3JnYFxuXG5jb25zdCBOVU1QT1NUUyA9IDIwO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuRmVlZChjb25maWc6IFNpdGVDb25maWcpIHtcbiAgY29uc3QgZmVlZCA9IG5ldyBGZWVkKHtcbiAgICB0aXRsZTogJ2VhZ2VyZXllcy5vcmcnLFxuICAgIGRlc2NyaXB0aW9uOiAnVmlzdWFsaXphdGlvbiBhbmQgVmlzdWFsIENvbW11bmljYXRpb24nLFxuICAgIGlkOiBgJHtiYXNlVXJsfS9gLFxuICAgIGxpbms6IGAke2Jhc2VVcmx9L2AsXG4gICAgbGFuZ3VhZ2U6ICdlbicsXG4gICAgaW1hZ2U6ICdodHRwczovL21lZGlhLmVhZ2VyZXllcy5vcmcvd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDkvd2lua3ktZS1mYXZpY29uLTI1Ni5wbmcnLFxuICAgIGZhdmljb246IGBodHRwczovL21lZGlhLmVhZ2VyZXllcy5vcmcvd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDkvd2lua3ktZS1mYXZpY29uLTI1Ni5wbmdgLFxuICAgIGNvcHlyaWdodDogJ0NvcHlyaWdodCAoYykgMjAwNi1wcmVzZW50LCBSb2JlcnQgS29zYXJhJyxcbiAgICBmZWVkTGlua3M6IHtcbiAgICAgIHJzczogXCJodHRwczovL2VhZ2VyZXllcy5vcmcvZmVlZFwiLFxuICAgICAgYXRvbTogXCJodHRwczovL2VhZ2VyZXllcy5vcmcvYXRvbVwiXG4gICAgfSxcbiAgfSlcblxuICBjb25zdCBwb3N0cyA9IGF3YWl0IGxvYWRQb3N0cyhOVU1QT1NUUywgdHJ1ZSk7XG5cbiAgZm9yIChjb25zdCB7IHVybCwgZXhjZXJwdCwgZnJvbnRtYXR0ZXIsIGh0bWwgfSBvZiBwb3N0cykge1xuICAgIGZlZWQuYWRkSXRlbSh7XG4gICAgICB0aXRsZTogZnJvbnRtYXR0ZXIudGl0bGUsXG4gICAgICBpZDogYCR7YmFzZVVybH0ke3VybH1gLFxuICAgICAgbGluazogYCR7YmFzZVVybH0ke3VybH1gLFxuICAgICAgZGVzY3JpcHRpb246IGZyb250bWF0dGVyLmRlc2NyaXB0aW9uLFxuICAgICAgY29udGVudDogaHRtbD8uc3BsaXQoJzxhc2lkZScpWzBdLnJlcGxhY2UoLzxQb3N0ZWRCeSA/XFwvPi8sICcnKSxcbiAgICAgIGF1dGhvcjogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJSb2JlcnQgS29zYXJhXCIsXG4gICAgICAgICAgbGluazogXCJodHRwczovL2VhZ2VyZXllcy5vcmcvYWJvdXRcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgZGF0ZTogZnJvbnRtYXR0ZXIuZGF0ZVxuICAgIH0pXG4gIH1cblxuICB3cml0ZUZpbGVTeW5jKHBhdGguam9pbihjb25maWcub3V0RGlyLCAncnNzLnhtbCcpLCBmZWVkLnJzczIoKSlcbiAgLy8gc28gZWFnZXJleWVzLm9yZy9mZWVkIHdvcmtzXHUyMDI2XG4gIHdyaXRlRmlsZVN5bmMocGF0aC5qb2luKGNvbmZpZy5vdXREaXIsICdmZWVkLnhtbCcpLCBmZWVkLnJzczIoKSlcbiAgLy8gQXRvbSBmZWVkLCB3aHkgbm90P1xuICB3cml0ZUZpbGVTeW5jKHBhdGguam9pbihjb25maWcub3V0RGlyLCAnYXRvbS54bWwnKSwgZmVlZC5hdG9tMSgpKVxufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvcmtvc2FyYS9Eb2N1bWVudHMvU2l0ZXMvZWFnZXJleWVzLy52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9ya29zYXJhL0RvY3VtZW50cy9TaXRlcy9lYWdlcmV5ZXMvLnZpdGVwcmVzcy9sb2FkUG9zdHMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3Jrb3NhcmEvRG9jdW1lbnRzL1NpdGVzL2VhZ2VyZXllcy8udml0ZXByZXNzL2xvYWRQb3N0cy50c1wiO2ltcG9ydCB7IENvbnRlbnREYXRhLCBjcmVhdGVDb250ZW50TG9hZGVyIH0gZnJvbSAndml0ZXByZXNzJ1xuXG5hc3luYyBmdW5jdGlvbiBsb2FkUG9zdHMobnVtUG9zdHM6bnVtYmVyLCByZW5kZXI6Ym9vbGVhbikge1xuICAgIC8vIGxvYWQgYnkgeWVhciBhbmQgcHVzaCBpbnRvIGFycmF5IHRvIGxvYWQgbGVzcyB1bm5lY2Vzc2FyeSBzdHVmZlxuICAgIGxldCBwb3N0cyA9IDxDb250ZW50RGF0YVtdPltdO1xuICBcbiAgICBsZXQgeWVhciA9IChuZXcgRGF0ZSgpKS5nZXRGdWxsWWVhcigpO1xuICBcbiAgICB3aGlsZSAocG9zdHMubGVuZ3RoIDwgbnVtUG9zdHMpIHtcbiAgICAgIGNvbnN0IG5ld1Bvc3RzID0gYXdhaXQgY3JlYXRlQ29udGVudExvYWRlcihgYmxvZy8ke3llYXJ9LyoubWRgLCB7XG4gICAgICAgIGV4Y2VycHQ6IGZhbHNlLFxuICAgICAgICByZW5kZXJcbiAgICAgIH0pLmxvYWQoKTtcbiAgICAgIFxuICAgICAgcG9zdHMgPSBwb3N0cy5jb25jYXQoLi4ubmV3UG9zdHMpO1xuICBcbiAgICAgIHllYXIgLT0gMTtcbiAgICB9XG4gIFxuICAgIC8vIHNvcnQgaW4gcmV2ZXJzZSBjaHJvbm9sb2dpY2FsIG9yZGVyXG4gICAgcG9zdHMuc29ydChcbiAgICAgIChhLCBiKSA9PlxuICAgICAgICArbmV3IERhdGUoYi5mcm9udG1hdHRlci5kYXRlIGFzIHN0cmluZykgLVxuICAgICAgICArbmV3IERhdGUoYS5mcm9udG1hdHRlci5kYXRlIGFzIHN0cmluZylcbiAgICApXG4gIFxuICAgIC8vIHJlbW92ZSBpbmRleCBwYWdlc1xuICAgIHBvc3RzID0gcG9zdHMuZmlsdGVyKGQgPT4gIWQudXJsLmVuZHNXaXRoKCcvJykpO1xuICBcbiAgICAvLyBvbmx5IGluY2x1ZGUgTlVNUE9TVFMgcG9zdHNcbiAgICBwb3N0cyA9IHBvc3RzLnNsaWNlKDAsIG51bVBvc3RzKTtcbiAgXG4gICAgcmV0dXJuIHBvc3RzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkUG9zdHM7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9ya29zYXJhL0RvY3VtZW50cy9TaXRlcy9lYWdlcmV5ZXMvLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3Jrb3NhcmEvRG9jdW1lbnRzL1NpdGVzL2VhZ2VyZXllcy8udml0ZXByZXNzL3RyYW5zZm9ybUhlYWQudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3Jrb3NhcmEvRG9jdW1lbnRzL1NpdGVzL2VhZ2VyZXllcy8udml0ZXByZXNzL3RyYW5zZm9ybUhlYWQudHNcIjtpbXBvcnQgeyB0eXBlIFRyYW5zZm9ybUNvbnRleHQgfSBmcm9tICd2aXRlcHJlc3MnO1xuaW1wb3J0IHsgdHlwZSBIZWFkQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzJztcblxuLypcbjxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiSG93IHRvIEJlY29tZSBhbiBTRU8gRXhwZXJ0ICg4IFN0ZXBzKVwiIC8+XG48bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdldCBmcm9tIFNFTyBuZXdiaWUgdG8gU0VPIHBybyBpbiA4IHNpbXBsZSBzdGVwcy5cIiAvPlxuPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCJodHRwczovL2FocmVmcy5jb20vYmxvZy93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8xMi9mYi1ob3ctdG8tYmVjb21lLWFuLXNlby1leHBlcnQucG5nXCIgLz5cbiovXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB0cmFuc2Zvcm1IZWFkKGNvbnRleHQ6IFRyYW5zZm9ybUNvbnRleHQpIHtcblxuICAgIGNvbnN0IGZtID0gY29udGV4dC5wYWdlRGF0YS5mcm9udG1hdHRlcjtcbiAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9lYWdlcmV5ZXMub3JnLycrY29udGV4dC5wYWdlRGF0YS5yZWxhdGl2ZVBhdGguc2xpY2UoMCwgLTMpO1xuXG4gICAgbGV0IGhlYWQgPSA8SGVhZENvbmZpZ1tdPltdO1xuXG4gICAgLy8gT3BlbkdyYXBoXG4gICAgaWYgKGNvbnRleHQucGFnZURhdGEuZmlsZVBhdGggPT09ICdpbmRleC5tZCcpIHtcbiAgICAgICAgaGVhZCA9IGhlYWQuY29uY2F0KFtcbiAgICAgICAgICAgIFsgJ21ldGEnLCB7cHJvcGVydHk6ICdvZzp0aXRsZScsIGNvbnRlbnQ6ICdlYWdlcmV5ZXMub3JnJyB9IF0sXG4gICAgICAgICAgICBbICdtZXRhJywge3Byb3BlcnR5OiAnb2c6ZGVzY3JpcHRpb24nLCBjb250ZW50OiAnVmlzdWFsaXphdGlvbiBhbmQgVmlzdWFsIENvbW11bmljYXRpb24nIH0gXSxcbiAgICAgICAgICAgIC8vIFsgJ21ldGEnLCB7cHJvcGVydHk6ICdvZzppbWFnZScsIGNvbnRlbnQ6IGZtLmZlYXR1cmVkSW1hZ2V9IF0sXG4gICAgICAgICAgICBbICdtZXRhJywge3Byb3BlcnR5OiAnb2c6dXJsJywgY29udGVudDogJ2h0dHBzOi8vZWFnZXJleWVzLm9yZy8nIH0gXSxcbiAgICAgICAgICAgIFsgJ21ldGEnLCB7cHJvcGVydHk6ICdvZzp0eXBlJywgY29udGVudDogJ3dlYnNpdGUnIH0gXVxuICAgICAgICBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBoZWFkID0gaGVhZC5jb25jYXQoW1xuICAgICAgICAgICAgWyAnbWV0YScsIHtwcm9wZXJ0eTogJ29nOnRpdGxlJywgY29udGVudDogZm0udGl0bGUgfSBdLFxuICAgICAgICAgICAgWyAnbWV0YScsIHtwcm9wZXJ0eTogJ29nOmRlc2NyaXB0aW9uJywgY29udGVudDogZm0uZGVzY3JpcHRpb24gfSBdLFxuICAgICAgICAgICAgWyAnbWV0YScsIHtwcm9wZXJ0eTogJ29nOmltYWdlJywgY29udGVudDogZm0uZmVhdHVyZWRJbWFnZX0gXSxcbiAgICAgICAgICAgIFsgJ21ldGEnLCB7cHJvcGVydHk6ICdvZzp1cmwnLCBjb250ZW50OiB1cmwgfSBdLFxuICAgICAgICAgICAgWyAnbWV0YScsIHtwcm9wZXJ0eTogJ29nOnR5cGUnLCBjb250ZW50OiAnYXJ0aWNsZScgfSBdLFxuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICAvLyBUd2l0dGVyIENhcmRzXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIudHdpdHRlci5jb20vZW4vZG9jcy90d2l0dGVyLWZvci13ZWJzaXRlcy9jYXJkcy9ndWlkZXMvZ2V0dGluZy1zdGFydGVkXG4gICAgaGVhZCA9IGhlYWQuY29uY2F0KFtcbiAgICAgICAgICAgIFsgJ21ldGEnLCB7bmFtZTogJ3R3aXR0ZXI6Y2FyZCcsIGNvbnRlbnQ6IGZtLmZlYXR1cmVkSW1hZ2UgPyAnc3VtbWFyeV9sYXJnZV9pbWFnZScgOiAnc3VtbWFyeScgfSBdLFxuICAgICAgICAgICAgWyAnbWV0YScsIHtuYW1lOiAndHdpdHRlcjpzaXRlJywgY29udGVudDogJ0BlYWdlcmV5ZXMnIH0gXSxcbiAgICAgICAgICAgIFsgJ21ldGEnLCB7bmFtZTogJ3R3aXR0ZXI6Y3JlYXRvcicsIGNvbnRlbnQ6ICdAZWFnZXJleWVzJyB9IF1cbiAgICBdKTtcblxuICAgIGlmIChmbS5kYXRlKSB7XG4gICAgICAgIGhlYWQucHVzaChbICdtZXRhJywge3Byb3BlcnR5OiAnYXJ0aWNsZTpwdWJsaXNoZWRfdGltZScsIGNvbnRlbnQ6IChuZXcgRGF0ZShmbS5kYXRlKS50b0lTT1N0cmluZygpKX1dKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGVhZDtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVUsU0FBUyxvQkFBb0I7QUFDOVYsU0FBUyxvQkFBb0I7OztBQ0RzUyxPQUFPLFVBQVU7QUFDcFYsU0FBUyxxQkFBcUI7QUFDOUIsU0FBUyxZQUFZOzs7QUNGa1QsU0FBc0IsMkJBQTJCO0FBRXhYLGVBQWUsVUFBVSxVQUFpQixRQUFnQjtBQUV0RCxNQUFJLFFBQXVCLENBQUM7QUFFNUIsTUFBSSxRQUFRLG9CQUFJLEtBQUssR0FBRyxZQUFZO0FBRXBDLFNBQU8sTUFBTSxTQUFTLFVBQVU7QUFDOUIsVUFBTSxXQUFXLE1BQU0sb0JBQW9CLFFBQVEsSUFBSSxTQUFTO0FBQUEsTUFDOUQsU0FBUztBQUFBLE1BQ1Q7QUFBQSxJQUNGLENBQUMsRUFBRSxLQUFLO0FBRVIsWUFBUSxNQUFNLE9BQU8sR0FBRyxRQUFRO0FBRWhDLFlBQVE7QUFBQSxFQUNWO0FBR0EsUUFBTTtBQUFBLElBQ0osQ0FBQyxHQUFHLE1BQ0YsQ0FBQyxJQUFJLEtBQUssRUFBRSxZQUFZLElBQWMsSUFDdEMsQ0FBQyxJQUFJLEtBQUssRUFBRSxZQUFZLElBQWM7QUFBQSxFQUMxQztBQUdBLFVBQVEsTUFBTSxPQUFPLE9BQUssQ0FBQyxFQUFFLElBQUksU0FBUyxHQUFHLENBQUM7QUFHOUMsVUFBUSxNQUFNLE1BQU0sR0FBRyxRQUFRO0FBRS9CLFNBQU87QUFDWDtBQUVBLElBQU8sb0JBQVE7OztBRDdCZixJQUFNLFVBQVU7QUFFaEIsSUFBTSxXQUFXO0FBRWpCLGVBQXNCLFFBQVEsUUFBb0I7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
