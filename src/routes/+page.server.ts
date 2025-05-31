import type { PageServerLoad} from './$types';

import posts from '../../content/blog-meta.json';
import videos from '../../content/videos.json';

import type { BlogPost } from '$lib/blog-utils';
import type { Video } from '$lib/video-utils';

export const load: PageServerLoad = async ({ params }) => {

    return {
        posts: posts as Array<BlogPost>,
        videos: videos as Array<Video>
    }

}
