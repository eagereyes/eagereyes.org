import type { PageServerLoad} from './$types';
import type { BlogPost } from '$lib/blog-utils';
import { tagNames } from '$lib/blog-utils';

import posts from '../../../../content/blog-meta.json';

export const load: PageServerLoad = async ({ params }) => {
    
    let tagName = params.tag in tagNames ? tagNames[params.tag] : params.tag;

    return {
        posts: posts as Array<BlogPost>,
        tag: params.tag as string || '',
        tagName,
    };
};
