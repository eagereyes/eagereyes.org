import { redirect } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

const redirects: Record<string, string> = {
    'pushing-data-over-email': '/blog/2008/pushing-data-over-email',
    'a-look-at-climate-data': '/blog/2009/a-look-at-climate-data',
    'data-gov-browser': '/blog/2009/data-gov-browser',
    'dish-best-served-raw': '/blog/2009/dish-best-served-raw',
    'interactively-explore-climate-data': '/blog/2009/interactively-explore-climate-data',
    'scrape-tables-using-google-docs': '/blog/2009/scrape-tables-using-google-docs',
    'temperature-baseline-differences': '/blog/2009/temperature-baseline-differences',
};

export const entries: EntryGenerator = () =>
    Object.keys(redirects).map(slug => ({ slug }));

export const load: PageLoad = ({ params }) => {
    const url = redirects[params.slug];
    if (url) redirect(301, url);
    return {};
};
