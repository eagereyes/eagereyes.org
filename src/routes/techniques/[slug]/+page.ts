import { redirect } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

const redirects: Record<string, string> = {
    'affordances': '/blog/2012/affordances',
    'blur-and-uncertainty': '/blog/2011/blur-and-uncertainty',
    'graphs-hairball': '/blog/2012/graphs-hairball',
    'isotype': '/blog/2013/isotype',
    'nassi-shneiderman-diagrams': '/blog/2016/nassi-shneiderman-diagrams',
    'parallel-coordinates': '/blog/2010/parallel-coordinates',
    'pie-charts': '/blog/2010/pie-charts',
    'sets-of-possible-occurrences': '/blog/2006/sets-of-possible-occurrences',
    'sonification-the-power-the-problems': '/blog/2017/sonification-the-power-the-problems',
    'spirals': '/blog/2011/spirals',
    'square-pie-charts': '/blog/2006/square-pie-charts',
    'stacked-bars-are-the-worst': '/blog/2016/stacked-bars-are-the-worst',
    'treemaps': '/blog/2008/treemaps',
    'venn-diagrams': '/blog/2012/venn-diagrams',
};

export const entries: EntryGenerator = () =>
    Object.keys(redirects).map(slug => ({ slug }));

export const load: PageLoad = ({ params }) => {
    const url = redirects[params.slug];
    if (url) redirect(301, url);
    return {};
};
