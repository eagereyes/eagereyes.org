import type { PageServerLoad, EntryGenerator } from './$types';
import { readFile } from 'node:fs/promises';
import { PageType } from '$lib/blog-utils';
import type { BlogPost } from '$lib/blog-utils';

import posts from '../../../../content/blog-meta.json';

export const entries: EntryGenerator = () => {
    const allPosts = posts as Array<BlogPost>;
    const allYears = [...new Set(allPosts.map(post => post.date.substring(0, 4)))];
    return [
        { slug: '' },
        ...allYears.map(year => ({ slug: year })),
        ...allPosts.map(post => ({ slug: `${post.date.substring(0, 4)}/${post.slug}` }))
    ];
};

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

    const nonArchivedPosts = (posts as Array<BlogPost>).filter(p => !p.archived);
    const allYears = [...new Set(nonArchivedPosts.map(post => post.date.substring(0, 4)))].sort((a, b) => b.localeCompare(a));
    const yearCounts = Object.fromEntries(allYears.map(y => [y, nonArchivedPosts.filter(p => p.date.startsWith(y)).length]));
    const allTags = [...new Set(nonArchivedPosts.flatMap(p => p.tags ?? []))];
    const tagCounts = Object.fromEntries(allTags.map(tag => [tag, nonArchivedPosts.filter(p => (p.tags ?? []).includes(tag)).length]));
    const sortedTags = allTags.sort((a, b) => tagCounts[b] - tagCounts[a]);

    const typedPosts = posts as Array<BlogPost>;
    return {
        display,
        meta: metaIndex >= 0 ? typedPosts[metaIndex] : null,
        nextPost: nextIndex < posts.length ? typedPosts[nextIndex] : null,
        prevPost: prevIndex >= 0 ? typedPosts[prevIndex] : null,
        allPosts: display == PageType.singlePost ? [] : allPosts,
        allYears,
        yearCounts,
        sortedTags,
        tagCounts,
        numComments: posts[metaIndex] ? posts[metaIndex].comments : 0,
        comments,
        content,
		error
    };
};