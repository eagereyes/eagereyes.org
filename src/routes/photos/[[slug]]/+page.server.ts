import type { PageServerLoad, EntryGenerator } from './$types';

import type { Gallery } from '$lib/photo-utils';
import { blankGallery } from '$lib/photo-utils';

import galleries from '../../../../content/photos.json';

export const entries: EntryGenerator = () => {
    return [
        {},
        ...(galleries as Array<Gallery>).map(g => ({ slug: g.slug }))
    ];
};

export const load: PageServerLoad = async ({ params }) => {

    let gallery = blankGallery;

    if (params.slug) {
        gallery = (galleries as Array<Gallery>).find(g => g.slug === params.slug) || blankGallery;
    }

    return {
        gallery,
        galleries: galleries as Array<Gallery>,
    };
};
