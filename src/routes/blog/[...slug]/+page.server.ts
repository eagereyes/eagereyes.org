import type { PageServerLoad} from './$types';
import { readFile } from 'node:fs/promises';
import { PageType } from '$lib/blog-utils';
import type { BlogPost } from '$lib/blog-utils';

import posts from '../../../../content/blog-meta.json';

export const load: PageServerLoad = async ({ params }) => {
    let content = '';
	let error = null;
    let metaIndex = -1;
    let allPosts: Array<BlogPost> = posts as Array<BlogPost>;

    let display = PageType.allPosts;

    if (params.slug.length > 0 && params.slug.length <= 5) {
        display = PageType.oneYear;
        const year = params.slug.substring(0, 4);
        allPosts = allPosts.filter(post => post.date.startsWith(year));
    } else if (params.slug.length > 5) {
        const shortSlug = params.slug.split('/')[1];
        metaIndex = (posts as Array<BlogPost>).findIndex(post => shortSlug === post.slug);

        try {
            content = await readFile(`content/blog/${params.slug}.md`, 'utf-8');
            display = PageType.singlePost;
        } catch (err: any) {
            error = String(err);
        }
    }

    return {
        display,
        meta: metaIndex >= 0 ? posts[metaIndex] : null,
        nextPost: metaIndex < posts.length ? posts[metaIndex + 1] : null,
        prevPost: metaIndex > 0 ? posts[metaIndex - 1] : null,
        allPosts: display == PageType.singlePost ? [] : allPosts,
        content,
		error
    };
};