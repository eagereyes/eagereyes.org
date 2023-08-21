import { type TransformContext } from 'vitepress';
import { type HeadConfig } from 'vitepress';

/*
<meta property="og:title" content="How to Become an SEO Expert (8 Steps)" />
<meta property="og:description" content="Get from SEO newbie to SEO pro in 8 simple steps." />
<meta property="og:image" content="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png" />
*/
export default async function transformHead(context: TransformContext) {

    const fm = context.pageData.frontmatter;
    const url = 'https://eagereyes.org/'+context.pageData.relativePath.slice(0, -3);

    let head = <HeadConfig[]>[];

    if (context.pageData.filePath === 'index.md') {
        head.concat([
            [ 'meta', {property: 'og:title', content: 'eagereyes.org' } ],
            [ 'meta', {property: 'og:description', content: 'Visualization and Visual Communication' } ],
            // [ 'meta', {property: 'og:image', content: fm.featuredImage} ],
            [ 'meta', {property: 'og:url', content: 'https://eagereyes.org/' } ],
            [ 'meta', {property: 'og:type', content: 'website' } ]
        ]);
    } else {
        head.concat([
            // OpenGraph
            [ 'meta', {property: 'og:title', content: fm.title } ],
            [ 'meta', {property: 'og:description', content: fm.description } ],
            [ 'meta', {property: 'og:image', content: fm.featuredImage} ],
            [ 'meta', {property: 'og:url', content: url } ],
            [ 'meta', {property: 'og:type', content: 'article' } ],
        ]);
    }

    // Twitter Cards
    // https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started
    head.concat([
            [ 'meta', {name: 'twitter:card', content: fm.featuredImage ? 'summary_large_image' : 'summary' } ],
            [ 'meta', {name: 'twitter:site', content: '@eagereyes' } ],
            [ 'meta', {name: 'twitter:creator', content: '@eagereyes' } ]
    ]);

    if (fm.date) {
        head.push([ 'meta', {property: 'article:published_time', content: (new Date(fm.date).toISOString())}]);
    }

    return head;
}
