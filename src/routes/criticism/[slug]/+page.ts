import { redirect } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

const redirects: Record<string, string> = {
    'above-all-do-no-harm': '/blog/2011/above-all-do-no-harm',
    'anscombes-quartet': '/blog/2011/anscombes-quartet',
    'autism-diagnosis-accuracy': '/blog/2007/autism-diagnosis-accuracy',
    'changing-goals-data-visualization': '/blog/2012/changing-goals-data-visualization',
    'chart-junk-considered-useful-after-all': '/blog/2010/chart-junk-considered-useful-after-all',
    'chernoff-faces': '/blog/2007/chernoff-faces',
    'cognitive-dissonance-river-tyne': '/blog/2012/cognitive-dissonance-river-tyne',
    'cornelia-dean-am-i-making-myself-clear': '/blog/2010/cornelia-dean-am-i-making-myself-clear',
    'cost-of-a-sick-chart': '/blog/2009/cost-of-a-sick-chart',
    'criticism-visualization-criticism-criticism': '/blog/2012/criticism-visualization-criticism-criticism',
    'curing-a-sick-chart': '/blog/2009/curing-a-sick-chart',
    'data-display-vs-data-visualization': '/blog/2012/data-display-vs-data-visualization',
    'data-visualization-should-we-divide-it': '/blog/2010/data-visualization-should-we-divide-it',
    'definition-of-visualization': '/blog/2008/definition-of-visualization',
    'edward-tufte-one-day-course': '/blog/2012/edward-tufte-one-day-course',
    'fascinating-world-of-good-infographics': '/blog/2010/fascinating-world-of-good-infographics',
    'in-defense-of-pie-charts': '/blog/2011/in-defense-of-pie-charts',
    'informative-art': '/blog/2006/informative-art',
    'its-just-too-easy': '/blog/2013/its-just-too-easy',
    'joy-of-representation': '/blog/2007/joy-of-representation',
    'kaiser-fung-numbers-rule-your-world': '/blog/2010/kaiser-fung-numbers-rule-your-world',
    'many-eyes-18-months-later': '/blog/2013/many-eyes-18-months-later',
    'march-chart-madness': '/blog/2010/march-chart-madness',
    'metaphor-visualization-writing': '/blog/2012/metaphor-visualization-writing',
    'nsf-vis-challenge-2006': '/blog/2006/nsf-vis-challenge-2006',
    'one-chart-to-rule-them-all': '/blog/2011/one-chart-to-rule-them-all',
    'quo-vadis-many-eyes': '/blog/2012/quo-vadis-many-eyes',
    'review-alberto-cairo-functional-art': '/blog/2012/review-alberto-cairo-functional-art',
    'review-chabris-simons-invisible-gorilla': '/blog/2013/review-chabris-simons-invisible-gorilla',
    'review-isabel-meirelles-design-information': '/blog/2013/review-isabel-meirelles-design-information',
    'review-jon-schwabish-better-presentations': '/blog/2016/review-jon-schwabish-better-presentations',
    'review-manuel-lima-the-book-of-trees': '/blog/2014/review-manuel-lima-the-book-of-trees',
    'review-scott-christianson-100-diagrams-changed-world': '/blog/2013/review-scott-christianson-100-diagrams-changed-world',
    'review-steven-johnson-the-ghost-map': '/blog/2010/review-steven-johnson-the-ghost-map',
    'review-visual-thinking': '/blog/2008/review-visual-thinking',
    'review-visualize-visual-complexity-science-magazine': '/blog/2012/review-visualize-visual-complexity-science-magazine',
    'shaking-the-pretty-picture-stigma': '/blog/2009/shaking-the-pretty-picture-stigma',
    'sketch-of-infovis-science': '/blog/2007/sketch-of-infovis-science',
    'spss-viz-designer': '/blog/2008/spss-viz-designer',
    'swivel-part-2-solving-a-single-problem': '/blog/2010/swivel-part-2-solving-a-single-problem',
    'swivel-vs-many-eyes': '/blog/2007/swivel-vs-many-eyes',
    'tale-of-two-types': '/blog/2007/tale-of-two-types',
    'the-rise-and-fall-of-swivel': '/blog/2010/the-rise-and-fall-of-swivel',
    'the-visualization-cargo-cult': '/blog/2010/the-visualization-cargo-cult',
    'tufte-and-the-truth-about-the-challenger': '/blog/2011/tufte-and-the-truth-about-the-challenger',
    'visual-math-wrong': '/blog/2012/visual-math-wrong',
    'visualization-can-never-be-art': '/blog/2010/visualization-can-never-be-art',
    'visualization-criticism': '/blog/2006/visualization-criticism',
};

export const entries: EntryGenerator = () =>
    Object.keys(redirects).map(slug => ({ slug }));

export const load: PageLoad = ({ params }) => {
    const url = redirects[params.slug];
    if (url) redirect(301, url);
    return {};
};
