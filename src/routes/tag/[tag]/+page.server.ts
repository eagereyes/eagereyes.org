import type { PageServerLoad, EntryGenerator } from './$types';
import type { BlogPost } from '$lib/blog-utils';
import { tagNames } from '$lib/blog-utils';
import { redirect } from '@sveltejs/kit';

import posts from '../../../../content/posts.json';

const TAG_REDIRECTS: Record<string, string> = {
    'applications': '/tag/application',
    'book-reviews': '/tag/book-review',
    'techniques': '/tag/technique',
};

export const entries: EntryGenerator = () => {
    const tags = new Set<string>();
    for (const post of posts as Array<BlogPost>) {
        for (const tag of post.tags ?? []) {
            tags.add(tag);
        }
    }
    return [
        ...[...tags].map(tag => ({ tag })),
        ...Object.keys(TAG_REDIRECTS).map(tag => ({ tag })),
    ];
};

export const load: PageServerLoad = async ({ params }) => {

    const redirectTarget = TAG_REDIRECTS[params.tag];
    if (redirectTarget) redirect(301, redirectTarget);

    let tagName = params.tag in tagNames ? tagNames[params.tag] : params.tag;

    const nonArchivedPosts = (posts as Array<BlogPost>).filter(p => !p.archived);
    const allYears = [...new Set(nonArchivedPosts.map(post => post.date.substring(0, 4)))].sort((a, b) => b.localeCompare(a));
    const yearCounts = Object.fromEntries(allYears.map(y => [y, nonArchivedPosts.filter(p => p.date.startsWith(y)).length]));
    const allTags = [...new Set(nonArchivedPosts.flatMap(p => p.tags ?? []))];
    const tagCounts = Object.fromEntries(allTags.map(tag => [tag, nonArchivedPosts.filter(p => (p.tags ?? []).includes(tag)).length]));
    const sortedTags = allTags.sort((a, b) => tagCounts[b] - tagCounts[a]);

    return {
        posts: posts as Array<BlogPost>,
        tag: params.tag as string || '',
        tagName,
        allYears,
        yearCounts,
        sortedTags,
        tagCounts,
    };
};
