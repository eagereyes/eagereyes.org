import { redirect } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

const redirects: Record<string, string> = {
    'banking-45-degrees': '/blog/2013/banking-45-degrees',
    'baselines': '/blog/2013/baselines',
    'data-continuous-vs-categorical': '/blog/2013/data-continuous-vs-categorical',
    'means': '/blog/2013/means',
    'rainbow-color-map': '/blog/2013/rainbow-color-map',
    'putting-data-into-context': '/blog/2014/putting-data-into-context',
    'visualization-research-engineering': '/blog/2015/visualization-research-engineering',
    'row-level-thinking-vs-cube-thinking': '/blog/2016/row-level-thinking-vs-cube-thinking',
    'spreadsheet-thinking-vs-database-thinking': '/blog/2016/spreadsheet-thinking-vs-database-thinking',
    'encoding-vs-decoding': '/blog/2017/encoding-vs-decoding',
};

export const entries: EntryGenerator = () =>
    Object.keys(redirects).map(slug => ({ slug }));

export const load: PageLoad = ({ params }) => {
    const url = redirects[params.slug];
    if (url) redirect(301, url);
    return {};
};
