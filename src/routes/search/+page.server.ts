import blogMeta from '../../../content/blog-meta.json';
import type { BlogPost } from '$lib/blog-utils';

export type SearchPage = { slug: string; title: string; description: string; url: string };

const PAGES: SearchPage[] = [
	{ slug: 'about', title: 'About EagerEyes', description: 'About this site and its author, Robert Kosara.', url: '/about' },
	{ slug: 'pie-charts', title: 'Understanding Pie Charts', description: 'A guide to understanding and using pie charts.', url: '/pie-charts' },
];

export function load() {
	return { posts: blogMeta as BlogPost[], pages: PAGES };
}
