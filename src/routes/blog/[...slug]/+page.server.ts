import type { PageServerLoad} from './$types';
import { readFile } from 'node:fs/promises';
import { PageType } from '$lib/blog-utils';
import type { BlogPost } from '$lib/blog-utils';

import posts from '../../../../content/blog-meta.json';

export const load: PageServerLoad = async ({ params }) => {
    let content = '';
    let comments = '';
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

        if (posts[metaIndex] && posts[metaIndex].comments > 0) {
            try {
                comments = await readFile(`content/blog/${params.slug}+++comments.md`, 'utf-8');
            } catch (err: any) {
                error = String(err);
            }
        }

    }
    const nextIndex = posts.findIndex((post, index) => index > metaIndex && ! post.archived);
    const prevIndex = posts.findLastIndex((post, index) => index < metaIndex && ! post.archived);

    return {
        display,
        meta: metaIndex >= 0 ? posts[metaIndex] : null,
        nextPost: nextIndex < posts.length ? posts[nextIndex] : null,
        prevPost: prevIndex >= 0 ? posts[prevIndex] : null,
        allPosts: display == PageType.singlePost ? [] : allPosts,
        numComments: posts[metaIndex] ? posts[metaIndex].comments : 0,
        comments,
        content,
		error
    };
};