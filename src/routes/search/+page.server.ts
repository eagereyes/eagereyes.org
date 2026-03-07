import blogMeta from '../../../content/blog-meta.json';
import type { BlogPost } from '$lib/blog-utils';
import { readFile } from 'node:fs/promises';

export type SearchPage = { slug: string; title: string; description: string; url: string };

const PAGE_TITLES: Record<string, string> = {
	'about': 'About EagerEyes',
	'pie-charts': 'Understanding Pie Charts',
};

function extractFrontmatterField(md: string, field: string): string {
	const match = md.match(/^---\n([\s\S]*?)\n---/);
	if (!match) return '';
	const line = match[1].split('\n').find(l => l.startsWith(field + ':'));
	return line ? line.slice(field.length + 1).trim() : '';
}

async function loadPages(): Promise<SearchPage[]> {
	return Promise.all(
		Object.entries(PAGE_TITLES).map(async ([slug, title]) => {
			const md = await readFile(`content/${slug}.md`, 'utf-8');
			const description = extractFrontmatterField(md, 'description');
			return { slug, title, description, url: `/${slug}` };
		})
	);
}

export async function load() {
	const pages = await loadPages();
	return { posts: blogMeta as BlogPost[], pages };
}
