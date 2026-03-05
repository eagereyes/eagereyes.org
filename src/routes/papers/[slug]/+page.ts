import { redirect } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

const redirects: Record<string, string> = {
    'a-pair-of-pie-chart-papers': '/blog/2016/a-pair-of-pie-chart-papers',
    'an-empire-built-on-sand': '/blog/2016/an-empire-built-on-sand',
    'beyond-bertin': '/blog/2010/beyond-bertin',
    'conceptualizing-visual-uncertainty-in-parallel-coordinates': '/blog/2012/conceptualizing-visual-uncertainty-in-parallel-coordinates',
    'do-mechnical-turks-dream-of-square-pie-charts': '/blog/2010/do-mechnical-turks-dream-of-square-pie-charts',
    'evaluation-of-the-impact-of-visual-embellishments-in-bar-charts': '/blog/2015/evaluation-of-the-impact-of-visual-embellishments-in-bar-charts',
    'implied-dynamics-in-information-visualization': '/blog/2010/implied-dynamics-in-information-visualization',
    'isotype-visualization': '/blog/2015/isotype-visualization',
    'laws-of-attraction': '/blog/2010/laws-of-attraction',
    'paper-an-argument-structure-for-data-stories': '/blog/2017/paper-an-argument-structure-for-data-stories',
    'paper-finding-a-clear-path-structuring-strategies-for-visualization-sequences': '/blog/2017/paper-finding-a-clear-path-structuring-strategies-for-visualization-sequences',
    'paper-readability-and-precision-in-pictorial-bar-charts': '/blog/2017/paper-readability-and-precision-in-pictorial-bar-charts',
    'paper-storytelling-step-visualization': '/blog/2013/paper-storytelling-step-visualization',
    'pargnostics': '/blog/2010/pargnostics',
    'presentation-oriented-visualization-techniques': '/blog/2016/presentation-oriented-visualization-techniques',
    'privacy': '/blog/2011/privacy',
    'shaping-of-information-by-visual-metaphors': '/blog/2008/shaping-of-information-by-visual-metaphors',
    'skipping-the-replication-crisis-in-visualization': '/blog/2018/skipping-the-replication-crisis-in-visualization',
    'the-connected-scatterplot-for-presenting-paired-time-series': '/blog/2015/the-connected-scatterplot-for-presenting-paired-time-series',
    'vis-criticism': '/blog/2008/vis-criticism',
};

export const entries: EntryGenerator = () =>
    Object.keys(redirects).map(slug => ({ slug }));

export const load: PageLoad = ({ params }) => {
    const url = redirects[params.slug];
    if (url) redirect(301, url);
    return {};
};
