import type { RequestHandler } from './$types';
import posts from '../../../content/blog-meta.json';
import type { BlogPost } from '$lib/blog-utils';

export const prerender = true;

const STATIC_PAGES = [
    { url: 'https://eagereyes.org/', priority: '1.0' },
    { url: 'https://eagereyes.org/blog/', priority: '0.9' },
    { url: 'https://eagereyes.org/video/', priority: '0.8' },
    { url: 'https://eagereyes.org/app/zipscribble-map', priority: '0.8' },
    { url: 'https://eagereyes.org/publications/', priority: '0.8' },
    { url: 'https://eagereyes.org/about', priority: '0.7' },
    { url: 'https://eagereyes.org/pie-charts', priority: '0.7' },
];

export const GET: RequestHandler = async () => {
    const staticUrls = STATIC_PAGES.map(({ url, priority }) => `  <url>
    <loc>${url}</loc>
    <priority>${priority}</priority>
  </url>`);

    const postUrls = (posts as Array<BlogPost>).map((post) => {
        const [year] = post.date.split('-');
        const url = `https://eagereyes.org/blog/${year}/${post.slug}`;
        const lastmod = post.date.split('T')[0];
        return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>0.6</priority>
  </url>`;
    });

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls.join('\n')}
${postUrls.join('\n')}
</urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'max-age=86400'
        }
    });
};
