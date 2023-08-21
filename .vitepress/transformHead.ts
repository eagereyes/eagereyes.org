import { type TransformContext } from 'vitepress';

/*
<meta property="og:title" content="How to Become an SEO Expert (8 Steps)" />
<meta property="og:description" content="Get from SEO newbie to SEO pro in 8 simple steps." />
<meta property="og:image" content="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png" />
*/
export default async function transformHead(context: TransformContext) {
    const fm = context.pageData.frontmatter;
    const url = 'https://eagereeyes.org/'+context.pageData.relativePath.slice(0, -3);
    let head = [
        // OpenGraph
        [ 'meta', {property: 'og:title', content: fm.title } ],
        [ 'meta', {property: 'og:description', content: fm.description } ],
        [ 'meta', {property: 'og:image', content: fm.featuredImage} ],
        [ 'meta', {property: 'og:url', content: url } ],
        [ 'meta', {property: 'og:type', content: 'article' } ],
        [ 'meta', {property: 'article:published_time', content: (new Date(fm.Date).toISOString())}],
        // Twitter Cards
        // https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started
        [ 'meta', {name: 'twitter:card', content: fm.featuredImage ? 'summary_large_image' : 'summary' } ],
        [ 'meta', {name: 'twitter:site', content: '@eagereyes' } ],
        [ 'meta', {name: 'twitter:creator', content: '@eagereyes' } ]
    ];

    return head;
}
