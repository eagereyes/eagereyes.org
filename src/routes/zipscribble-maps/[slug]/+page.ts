import { redirect } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

const redirects: Record<string, string> = {
    'australia': '/zipscribble-map#australia',
    'austria': '/zipscribble-map#austria',
    'canada': '/zipscribble-map#canada',
    'france': '/zipscribble-map#france',
    'germany': '/zipscribble-map#germany',
    'hungary': '/zipscribble-map#hungary',
    // interactive map needs to point to blog post instead
    'interactive-zipscribble-map': '/zipscribble-map#interactive-zipscribble-map',
    'italy': '/zipscribble-map#italy',
    'netherlands': '/zipscribble-map#netherlands',
    'norway': '/zipscribble-map#norway',
    'spain': '/zipscribble-map#spain',
    'sweden': '/zipscribble-map#sweden',
    'switzerland': '/zipscribble-map#switzerland',
    'united-states': '/zipscribble-map#united-states',
};

export const entries: EntryGenerator = () =>
    Object.keys(redirects).map(slug => ({ slug }));

export const load: PageLoad = ({ params }) => {
    const url = redirects[params.slug];
    if (url) redirect(301, url);
    return {};
};
