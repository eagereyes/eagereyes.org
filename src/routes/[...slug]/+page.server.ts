import type { PageServerLoad, EntryGenerator } from './$types';
import { readFile } from 'node:fs/promises';
import { error, redirect } from '@sveltejs/kit';

const CONTENT_PAGES: Record<string, string> = {
    about: 'About EagerEyes',
    'pie-charts': 'Understanding Pie Charts',
};

const REDIRECTS: Record<string, string> = {
    // Top-level slugs
    'zipscribble-map': '/app/zipscribble-map',
    'zipscribble-maps': '/app/zipscribble-map',
    'parallel-sets': '/publications/Kosara-TVCG-2006',
    'contact': '/about#contact',
    'license': '/about#content-license',
    'subscribe': '/about#how-to-subscribe',

    // attention/[slug]
    'attention/banking-45-degrees': '/blog/2013/banking-45-degrees',
    'attention/baselines': '/blog/2013/baselines',
    'attention/data-continuous-vs-categorical': '/blog/2013/data-continuous-vs-categorical',
    'attention/means': '/blog/2013/means',
    'attention/rainbow-color-map': '/blog/2013/rainbow-color-map',
    'attention/putting-data-into-context': '/blog/2014/putting-data-into-context',
    'attention/visualization-research-engineering': '/blog/2015/visualization-research-engineering',
    'attention/row-level-thinking-vs-cube-thinking': '/blog/2016/row-level-thinking-vs-cube-thinking',
    'attention/spreadsheet-thinking-vs-database-thinking': '/blog/2016/spreadsheet-thinking-vs-database-thinking',
    'attention/encoding-vs-decoding': '/blog/2017/encoding-vs-decoding',

    // basics/[slug]
    'basics/banking-45-degrees': '/blog/2013/banking-45-degrees',
    'basics/baselines': '/blog/2013/baselines',
    'basics/data-continuous-vs-categorical': '/blog/2013/data-continuous-vs-categorical',
    'basics/putting-data-into-context': '/blog/2014/putting-data-into-context',
    'basics/row-level-thinking-vs-cube-thinking': '/blog/2016/row-level-thinking-vs-cube-thinking',
    'basics/spreadsheet-thinking-vs-database-thinking': '/blog/2016/spreadsheet-thinking-vs-database-thinking',
    'basics/encoding-vs-decoding': '/blog/2017/encoding-vs-decoding',
    'basics/rainbow-color-map': '/blog/2023/rainbow-colormaps-are-not-all-bad-paper',

    // criticism/[slug]
    'criticism/above-all-do-no-harm': '/blog/2011/above-all-do-no-harm',
    'criticism/anscombes-quartet': '/blog/2011/anscombes-quartet',
    'criticism/autism-diagnosis-accuracy': '/blog/2007/autism-diagnosis-accuracy',
    'criticism/changing-goals-data-visualization': '/blog/2012/changing-goals-data-visualization',
    'criticism/chart-junk-considered-useful-after-all': '/blog/2010/chart-junk-considered-useful-after-all',
    'criticism/chernoff-faces': '/blog/2007/chernoff-faces',
    'criticism/cognitive-dissonance-river-tyne': '/blog/2012/cognitive-dissonance-river-tyne',
    'criticism/cornelia-dean-am-i-making-myself-clear': '/blog/2010/cornelia-dean-am-i-making-myself-clear',
    'criticism/cost-of-a-sick-chart': '/blog/2009/cost-of-a-sick-chart',
    'criticism/criticism-visualization-criticism-criticism': '/blog/2012/criticism-visualization-criticism-criticism',
    'criticism/curing-a-sick-chart': '/blog/2009/curing-a-sick-chart',
    'criticism/data-display-vs-data-visualization': '/blog/2012/data-display-vs-data-visualization',
    'criticism/data-visualization-should-we-divide-it': '/blog/2010/data-visualization-should-we-divide-it',
    'criticism/definition-of-visualization': '/blog/2008/definition-of-visualization',
    'criticism/edward-tufte-one-day-course': '/blog/2012/edward-tufte-one-day-course',
    'criticism/fascinating-world-of-good-infographics': '/blog/2010/fascinating-world-of-good-infographics',
    'criticism/in-defense-of-pie-charts': '/blog/2011/in-defense-of-pie-charts',
    'criticism/informative-art': '/blog/2006/informative-art',
    'criticism/its-just-too-easy': '/blog/2013/its-just-too-easy',
    'criticism/joy-of-representation': '/blog/2007/joy-of-representation',
    'criticism/kaiser-fung-numbers-rule-your-world': '/blog/2010/kaiser-fung-numbers-rule-your-world',
    'criticism/many-eyes-18-months-later': '/blog/2013/many-eyes-18-months-later',
    'criticism/march-chart-madness': '/blog/2010/march-chart-madness',
    'criticism/metaphor-visualization-writing': '/blog/2012/metaphor-visualization-writing',
    'criticism/nsf-vis-challenge-2006': '/blog/2006/nsf-vis-challenge-2006',
    'criticism/one-chart-to-rule-them-all': '/blog/2011/one-chart-to-rule-them-all',
    'criticism/quo-vadis-many-eyes': '/blog/2012/quo-vadis-many-eyes',
    'criticism/review-alberto-cairo-functional-art': '/blog/2012/review-alberto-cairo-functional-art',
    'criticism/review-chabris-simons-invisible-gorilla': '/blog/2013/review-chabris-simons-invisible-gorilla',
    'criticism/review-isabel-meirelles-design-information': '/blog/2013/review-isabel-meirelles-design-information',
    'criticism/review-jon-schwabish-better-presentations': '/blog/2016/review-jon-schwabish-better-presentations',
    'criticism/review-manuel-lima-the-book-of-trees': '/blog/2014/review-manuel-lima-the-book-of-trees',
    'criticism/review-scott-christianson-100-diagrams-changed-world': '/blog/2013/review-scott-christianson-100-diagrams-changed-world',
    'criticism/review-steven-johnson-the-ghost-map': '/blog/2010/review-steven-johnson-the-ghost-map',
    'criticism/review-visual-thinking': '/blog/2008/review-visual-thinking',
    'criticism/review-visualize-visual-complexity-science-magazine': '/blog/2012/review-visualize-visual-complexity-science-magazine',
    'criticism/shaking-the-pretty-picture-stigma': '/blog/2009/shaking-the-pretty-picture-stigma',
    'criticism/sketch-of-infovis-science': '/blog/2007/sketch-of-infovis-science',
    'criticism/spss-viz-designer': '/blog/2008/spss-viz-designer',
    'criticism/swivel-part-2-solving-a-single-problem': '/blog/2010/swivel-part-2-solving-a-single-problem',
    'criticism/swivel-vs-many-eyes': '/blog/2007/swivel-vs-many-eyes',
    'criticism/tale-of-two-types': '/blog/2007/tale-of-two-types',
    'criticism/the-rise-and-fall-of-swivel': '/blog/2010/the-rise-and-fall-of-swivel',
    'criticism/the-visualization-cargo-cult': '/blog/2010/the-visualization-cargo-cult',
    'criticism/tufte-and-the-truth-about-the-challenger': '/blog/2011/tufte-and-the-truth-about-the-challenger',
    'criticism/visual-math-wrong': '/blog/2012/visual-math-wrong',
    'criticism/visualization-can-never-be-art': '/blog/2010/visualization-can-never-be-art',
    'criticism/visualization-criticism': '/blog/2006/visualization-criticism',

    // data/[slug]
    'data/pushing-data-over-email': '/blog/2008/pushing-data-over-email',
    'data/a-look-at-climate-data': '/blog/2009/a-look-at-climate-data',
    'data/data-gov-browser': '/blog/2009/data-gov-browser',
    'data/dish-best-served-raw': '/blog/2009/dish-best-served-raw',
    'data/interactively-explore-climate-data': '/blog/2009/interactively-explore-climate-data',
    'data/scrape-tables-using-google-docs': '/blog/2009/scrape-tables-using-google-docs',
    'data/temperature-baseline-differences': '/blog/2009/temperature-baseline-differences',

    // eagereyestv/[slug]
    'eagereyestv/eagereyestv-episode-1-the-datasaurus-anscombes-quartet-and-why-summary-statistics-need-to-be-taken-with-a-grain-of-salt': '/blog/2019/eagereyestv-episode-1-the-datasaurus-anscombes-quartet-and-why-summary-statistics-need-to-be-taken-with-a-grain-of-salt',
    'eagereyestv/eagereyestv-what-is-data-part-2-are-images-data': '/blog/2019/eagereyestv-what-is-data-part-2-are-images-data',
    'eagereyestv/new-video-florence-nightingales-famous-rose-chart-aka-coxcomb': '/blog/2021/new-video-florence-nightingales-famous-rose-chart-aka-coxcomb',
    'eagereyestv/new-video-linear-vs-quadratic-change': '/blog/2021/new-video-linear-vs-quadratic-change',

    // history/[slug]
    'history/the-repetitive-and-boring-history-of-visualization': '/blog/2016/the-repetitive-and-boring-history-of-visualization',

    // influences/[slug]
    'influences/alan-maceachren': '/blog/2007/alan-maceachren',
    'influences/chaomei-chen': '/blog/2007/chaomei-chen',
    'influences/colin-ware': '/blog/2007/colin-ware',
    'influences/jarke-van-wijk': '/blog/2007/jarke-van-wijk',
    'influences/pat-hanrahan': '/blog/2007/pat-hanrahan',
    'influences/penny-rheingans': '/blog/2007/penny-rheingans',
    'influences/series-introduction': '/blog/2007/series-introduction',
    'influences/jock-mackinlay': '/blog/2008/jock-mackinlay',
    'influences/ben-shneiderman': '/blog/2011/ben-shneiderman',
    'influences/nigel-holmes': '/blog/2012/nigel-holmes',

    // journalism/[slug]
    'journalism/from-data-to-trends': '/blog/2012/from-data-to-trends',
    'journalism/glimpse-into-new-york-times-graphics-department': '/blog/2012/glimpse-into-new-york-times-graphics-department',
    'journalism/the-explanatory-power-of-data-points': '/blog/2013/the-explanatory-power-of-data-points',
    'journalism/when-bars-point-down': '/blog/2014/when-bars-point-down',
    'journalism/storytelling-minard-vs-nightingale': '/blog/2012/storytelling-minard-vs-nightingale',
    'journalism/malofiej-20': '/blog/2012/malofiej-20',
    'journalism/data-need': '/blog/2012/data-need',
    'journalism/what-does-it-mean-to-inform': '/blog/2012/what-does-it-mean-to-inform',

    // papers/[slug]
    'papers/a-pair-of-pie-chart-papers': '/blog/2016/a-pair-of-pie-chart-papers',
    'papers/an-empire-built-on-sand': '/blog/2016/an-empire-built-on-sand',
    'papers/beyond-bertin': '/blog/2010/beyond-bertin',
    'papers/conceptualizing-visual-uncertainty-in-parallel-coordinates': '/blog/2012/conceptualizing-visual-uncertainty-in-parallel-coordinates',
    'papers/do-mechnical-turks-dream-of-square-pie-charts': '/blog/2010/do-mechnical-turks-dream-of-square-pie-charts',
    'papers/evaluation-of-the-impact-of-visual-embellishments-in-bar-charts': '/blog/2015/evaluation-of-the-impact-of-visual-embellishments-in-bar-charts',
    'papers/implied-dynamics-in-information-visualization': '/blog/2010/implied-dynamics-in-information-visualization',
    'papers/isotype-visualization': '/blog/2015/isotype-visualization',
    'papers/laws-of-attraction': '/blog/2010/laws-of-attraction',
    'papers/paper-an-argument-structure-for-data-stories': '/blog/2017/paper-an-argument-structure-for-data-stories',
    'papers/paper-finding-a-clear-path-structuring-strategies-for-visualization-sequences': '/blog/2017/paper-finding-a-clear-path-structuring-strategies-for-visualization-sequences',
    'papers/paper-readability-and-precision-in-pictorial-bar-charts': '/blog/2017/paper-readability-and-precision-in-pictorial-bar-charts',
    'papers/paper-storytelling-step-visualization': '/blog/2013/paper-storytelling-step-visualization',
    'papers/pargnostics': '/blog/2010/pargnostics',
    'papers/presentation-oriented-visualization-techniques': '/blog/2016/presentation-oriented-visualization-techniques',
    'papers/privacy': '/blog/2011/privacy',
    'papers/shaping-of-information-by-visual-metaphors': '/blog/2008/shaping-of-information-by-visual-metaphors',
    'papers/skipping-the-replication-crisis-in-visualization': '/blog/2018/skipping-the-replication-crisis-in-visualization',
    'papers/the-connected-scatterplot-for-presenting-paired-time-series': '/blog/2015/the-connected-scatterplot-for-presenting-paired-time-series',
    'papers/vis-criticism': '/blog/2008/vis-criticism',

    // portrait
    'portrait/danielle-albers-szafir': '/blog/2017/danielle-albers-szafir',
    'portrait/jason-dykes': '/blog/2018/jason-dykes',

    // section
    'section/criticism': '/tag/criticism',

    // techniques/[slug]
    'techniques/affordances': '/blog/2012/affordances',
    'techniques/blur-and-uncertainty': '/blog/2011/blur-and-uncertainty',
    'techniques/graphs-hairball': '/blog/2012/graphs-hairball',
    'techniques/isotype': '/blog/2013/isotype',
    'techniques/nassi-shneiderman-diagrams': '/blog/2016/nassi-shneiderman-diagrams',
    'techniques/parallel-coordinates': '/blog/2010/parallel-coordinates',
    'techniques/pie-charts': '/blog/2010/pie-charts',
    'techniques/sets-of-possible-occurrences': '/blog/2006/sets-of-possible-occurrences',
    'techniques/sonification-the-power-the-problems': '/blog/2017/sonification-the-power-the-problems',
    'techniques/spirals': '/blog/2011/spirals',
    'techniques/square-pie-charts': '/blog/2006/square-pie-charts',
    'techniques/stacked-bars-are-the-worst': '/blog/2016/stacked-bars-are-the-worst',
    'techniques/treemaps': '/blog/2008/treemaps',
    'techniques/venn-diagrams': '/blog/2012/venn-diagrams',

    // tutorials/[slug]
    'tutorials/protovis-primer-part-1': '/blog/2010/protovis-primer-part-1',
    'tutorials/protovis-primer-part-2': '/blog/2010/protovis-primer-part-2',
    'tutorials/protovis-primer-part-3': '/blog/2010/protovis-primer-part-3',

    // vis-potpourri/[slug]
    'vis-potpourri/march-2018': '/blog/2018/march-2018',
    'vis-potpourri/october-2017': '/blog/2017/october-2017',
    'vis-potpourri/september-2017': '/blog/2017/september-2017',

    // zipscribble-maps/[slug]
    'zipscribble-maps/australia': '/app/zipscribble-map#australia',
    'zipscribble-maps/austria': '/app/zipscribble-map#austria',
    'zipscribble-maps/canada': '/app/zipscribble-map#canada',
    'zipscribble-maps/france': '/app/zipscribble-map#france',
    'zipscribble-maps/germany': '/app/zipscribble-map#germany',
    'zipscribble-maps/hungary': '/app/zipscribble-map#hungary',
    'zipscribble-maps/interactive-zipscribble-map': '/app/zipscribble-map#interactive-zipscribble-map',
    'zipscribble-maps/italy': '/app/zipscribble-map#italy',
    'zipscribble-maps/netherlands': '/app/zipscribble-map#netherlands',
    'zipscribble-maps/norway': '/app/zipscribble-map#norway',
    'zipscribble-maps/spain': '/app/zipscribble-map#spain',
    'zipscribble-maps/sweden': '/app/zipscribble-map#sweden',
    'zipscribble-maps/switzerland': '/app/zipscribble-map#switzerland',
    'zipscribble-maps/united-states': '/app/zipscribble-map#united-states',
    'zipscribble-maps/travelling-presidential-candidate-map': '/app/zipscribble-map#travelling-presidential-candidate-map',
};

export const prerender = true;

export const entries: EntryGenerator = () => [
    ...Object.keys(CONTENT_PAGES).map(slug => ({ slug })),
    ...Object.keys(REDIRECTS).map(slug => ({ slug })),
];

export const load: PageServerLoad = async ({ params }) => {
    const slug = params.slug;

    const redirectTarget = REDIRECTS[slug];
    if (redirectTarget) redirect(301, redirectTarget);

    const title = CONTENT_PAGES[slug];
    if (!title) error(404, 'Not found');

    let content = await readFile(`content/${slug}.md`, 'utf-8');
    if (content.startsWith('---')) {
        const end = content.indexOf('---', 3);
        if (end !== -1) content = content.slice(end + 3).trimStart();
    }

    return { slug, title, content };
};
