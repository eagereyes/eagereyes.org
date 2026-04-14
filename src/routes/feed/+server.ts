import type { RequestHandler } from './$types';
import { readFile } from 'node:fs/promises';
import { parse } from 'marked';
import posts from '../../../content/blog-meta.json';
import type { BlogPost } from '$lib/blog-utils';

export const prerender = true;

export const GET: RequestHandler = async () => {
    const recent = (posts as Array<BlogPost>)
        .slice(0, 20);

    const items = await Promise.all(recent.map(async (post) => {
        const [year] = post.date.split('-');
        const url = `https://eagereyes.org/blog/${year}/${post.slug}`;
        const pubDate = new Date(post.date).toUTCString();

        let content = post.description;
        try {
            const markdown = await readFile(`content/blog/${year}/${post.slug}.md`, 'utf-8');
            content = await parse(markdown) as string;
        } catch {
            // fall back to description
        }

        if (post.featuredImage?.render) {
            const img = post.featuredImage;
            const sizeAttrs = img.width && img.height ? ` width="${img.width}" height="${img.height}"` : '';
            content = `<img src="${img.src}" alt="${escapeXml(img.alt ?? '')}"${sizeAttrs} />\n` + content;
        }

        return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${content}]]></description>
    </item>`;
    }));

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>eagereyes</title>
    <link>https://eagereyes.org</link>
    <description>Data visualization and visual communication by Robert Kosara</description>
    <language>en-us</language>
    <atom:link href="https://eagereyes.org/feed" rel="self" type="application/rss+xml" />
${items.join('\n')}
  </channel>
</rss>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/rss+xml; charset=utf-8',
            'Cache-Control': 'max-age=3600'
        }
    });
};

function escapeXml(str: string): string {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}
