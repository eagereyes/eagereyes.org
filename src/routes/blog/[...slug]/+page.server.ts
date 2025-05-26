import type { PageServerLoad} from './$types';
import { readFile } from 'node:fs/promises';
import { PageType } from './blog-pages';

interface BlogPost {
    slug: string,
    path: string,
    title: string,
    description: string,
    date: string,
    tags: Array<string>,
    featuredImage: string,
}

import posts from '../../../../content/blog-meta.json';

export const load: PageServerLoad = async ({ params }) => {
    let content = '';
	let error = null;
    let metaIndex = -1;
    let allPosts: Array<BlogPost> = posts as Array<BlogPost>;

    let display = PageType.allPosts;

    if (params.slug.length <= 5) {
        display = PageType.oneYear;
        const year = params.slug.substring(0, 4);
        allPosts = allPosts.filter(post => post.date.startsWith(year));
    } else {
        metaIndex = (posts as Array<BlogPost>).findIndex(post => `/blog/${params.slug}` === post.path);

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
        allPosts,
        content,
		error
    };
};