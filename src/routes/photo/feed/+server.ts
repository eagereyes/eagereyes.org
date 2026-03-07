import type { RequestHandler } from './$types';
import galleries from '../../../../content/photos.json';
import type { Gallery } from '$lib/photo-utils';

export const prerender = true;

export const GET: RequestHandler = async () => {
    const items = (galleries as Array<Gallery>).map((gallery) => {
        const url = `https://eagereyes.org/photo/${gallery.slug}`;
        const pubDate = new Date(gallery.date).toUTCString();

        return `    <item>
      <title>${escapeXml(gallery.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[<img src="${gallery.featuredImage}" alt="${escapeXml(gallery.title)}" /><p>${escapeXml(gallery.description)}</p>]]></description>
    </item>`;
    });

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>eagereyes Photos</title>
    <link>https://eagereyes.org/photo/</link>
    <description>Photo galleries by Robert Kosara</description>
    <language>en-us</language>
    <atom:link href="https://eagereyes.org/photo/feed" rel="self" type="application/rss+xml" />
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
