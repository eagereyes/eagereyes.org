import { redirect } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

const redirects: Record<string, string> = {
    'alan-maceachren': '/blog/2007/alan-maceachren',
    'chaomei-chen': '/blog/2007/chaomei-chen',
    'colin-ware': '/blog/2007/colin-ware',
    'jarke-van-wijk': '/blog/2007/jarke-van-wijk',
    'pat-hanrahan': '/blog/2007/pat-hanrahan',
    'penny-rheingans': '/blog/2007/penny-rheingans',
    'series-introduction': '/blog/2007/series-introduction',
    'jock-mackinlay': '/blog/2008/jock-mackinlay',
    'ben-shneiderman': '/blog/2011/ben-shneiderman',
    'nigel-holmes': '/blog/2012/nigel-holmes',
};

export const entries: EntryGenerator = () =>
    Object.keys(redirects).map(slug => ({ slug }));

export const load: PageLoad = ({ params }) => {
    const url = redirects[params.slug];
    if (url) redirect(301, url);
    return {};
};
