import type { PageServerLoad, EntryGenerator } from './$types';
import { error } from '@sveltejs/kit';

import type { Gallery } from '$lib/photo-utils';

import galleries from '../../../../content/galleries.json';

export const entries: EntryGenerator = () => {
    return [
        {},
        ...(galleries as Array<Gallery>).map(g => ({ slug: g.slug }))
    ];
};

export const load: PageServerLoad = async ({ params }) => {

    if (params.slug) {
        const gallery = (galleries as Array<Gallery>).find(g => g.slug === params.slug);
        if (!gallery) error(404, `Gallery "${params.slug}" not found`);
        return { gallery, galleries: [] };
    }

    return {
        gallery: null,
        galleries: galleries as Array<Gallery>,
    };
};
