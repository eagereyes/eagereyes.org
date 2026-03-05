import { redirect } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

const redirects: Record<string, string> = {
    'australia': '/app/zipscribble-map#australia',
    'austria': '/app/zipscribble-map#austria',
    'canada': '/app/zipscribble-map#canada',
    'france': '/app/zipscribble-map#france',
    'germany': '/app/zipscribble-map#germany',
    'hungary': '/app/zipscribble-map#hungary',
    // interactive map needs to point to blog post instead
    'interactive-zipscribble-map': '/app/zipscribble-map#interactive-zipscribble-map',
    'italy': '/app/zipscribble-map#italy',
    'netherlands': '/app/zipscribble-map#netherlands',
    'norway': '/app/zipscribble-map#norway',
    'spain': '/app/zipscribble-map#spain',
    'sweden': '/app/zipscribble-map#sweden',
    'switzerland': '/app/zipscribble-map#switzerland',
    'united-states': '/app/zipscribble-map#united-states',
    'travelling-presidential-candidate-map': '/app/zipscribble-map#travelling-presidential-candidate-map',
};

export const entries: EntryGenerator = () =>
    Object.keys(redirects).map(slug => ({ slug }));

export const load: PageLoad = ({ params }) => {
    const url = redirects[params.slug];
    if (url) redirect(301, url);
    return {};
};
