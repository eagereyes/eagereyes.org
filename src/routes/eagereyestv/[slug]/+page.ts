import { redirect } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

const redirects: Record<string, string> = {
    'eagereyestv-episode-1-the-datasaurus-anscombes-quartet-and-why-summary-statistics-need-to-be-taken-with-a-grain-of-salt': '/blog/2019/eagereyestv-episode-1-the-datasaurus-anscombes-quartet-and-why-summary-statistics-need-to-be-taken-with-a-grain-of-salt',
    'eagereyestv-what-is-data-part-2-are-images-data': '/blog/2019/eagereyestv-what-is-data-part-2-are-images-data',
    'new-video-florence-nightingales-famous-rose-chart-aka-coxcomb': '/blog/2021/new-video-florence-nightingales-famous-rose-chart-aka-coxcomb',
    'new-video-linear-vs-quadratic-change': '/blog/2021/new-video-linear-vs-quadratic-change',
};

export const entries: EntryGenerator = () =>
    Object.keys(redirects).map(slug => ({ slug }));

export const load: PageLoad = ({ params }) => {
    const url = redirects[params.slug];
    if (url) redirect(301, url);
    return {};
};
