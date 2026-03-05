import type { PageServerLoad } from './$types';
import { readFile } from 'node:fs/promises';
import { error } from '@sveltejs/kit';

const ALLOWED_SLUGS = ['about', 'contact', 'license', 'subscribe'];

const TITLES: Record<string, string> = {
    about: 'About EagerEyes',
    contact: 'Contact Robert Kosara',
    license: 'License',
    subscribe: 'Subscribe'
};

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
    if (!ALLOWED_SLUGS.includes(params.slug)) {
        error(404, 'Not found');
    }

    let content = await readFile(`content/${params.slug}.md`, 'utf-8');

    // Strip frontmatter if present
    if (content.startsWith('---')) {
        const end = content.indexOf('---', 3);
        if (end !== -1) {
            content = content.slice(end + 3).trimStart();
        }
    }

    return {
        slug: params.slug,
        title: TITLES[params.slug],
        content
    };
};
