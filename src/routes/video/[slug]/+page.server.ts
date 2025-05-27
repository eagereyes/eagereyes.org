import type { PageServerLoad } from './$types';

interface Video {
    slug: string,
    title: string,
    description: string,
    ytslug: string,
    blogpost: string,
    date: string,
}

const blankVideo: Video = {
    slug: '',
    title: '',
    description: '',
    ytslug: '',
    blogpost: '',
    date: ''
};

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