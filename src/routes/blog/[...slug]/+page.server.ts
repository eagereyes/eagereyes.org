import type { PageServerLoad} from './$types';
import { readFile } from 'node:fs/promises';

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
    const filePath = `content/blog/${params.slug}.md`;
    let content = '';
	let error = null;

    const metaIndex = (posts as Array<BlogPost>).findIndex(post => `/blog/${params.slug}` === post.path);

    try {
        content = await readFile(filePath, 'utf-8');
    } catch (err: any) {
		error = String(err);
    }

    return {
        meta: posts[metaIndex],
        nextPost: metaIndex < posts.length ? posts[metaIndex + 1] : null,
        prevPost: metaIndex > 0 ? posts[metaIndex - 1] : null,
        filePath,
        content,
		error
    };
};