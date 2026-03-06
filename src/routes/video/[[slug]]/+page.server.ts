import type { PageServerLoad, EntryGenerator } from './$types';

import type { Video } from '$lib/video-utils';
import { blankVideo } from '$lib/video-utils';

import videos from '../../../../content/videos.json';

export const entries: EntryGenerator = () => {
    return [
        {},
        ...(videos as Array<Video>).map(v => ({ slug: v.slug }))
    ];
};

export const load: PageServerLoad = async ({ params }) => {

    let video = blankVideo;

    if (params.slug) {
        video = (videos as Array<Video>).find(p => p.slug === params.slug) || blankVideo;
    }

    return {
        video,
        videos: videos as Array<Video>,
    };
};