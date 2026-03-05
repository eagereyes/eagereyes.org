import { redirect } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

const redirects: Record<string, string> = {
    'from-data-to-trends': '/blog/2012/from-data-to-trends',
    'glimpse-into-new-york-times-graphics-department': '/blog/2012/glimpse-into-new-york-times-graphics-department',
    'the-explanatory-power-of-data-points': '/blog/2013/the-explanatory-power-of-data-points',
    'when-bars-point-down': '/blog/2014/when-bars-point-down',
    'storytelling-minard-vs-nightingale': '/blog/2012/storytelling-minard-vs-nightingale'
};

export const entries: EntryGenerator = () =>
    Object.keys(redirects).map(slug => ({ slug }));

export const load: PageLoad = ({ params }) => {
    const url = redirects[params.slug];
    if (url) redirect(301, url);
    return {};
};
