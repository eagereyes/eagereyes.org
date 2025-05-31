import type { PageServerLoad } from './$types';

import type { Video } from '$lib/video-utils';
import { blankVideo } from '$lib/video-utils';

import videos from '../../../../content/videos.json';

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