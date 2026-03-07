import { readFile, writeFile } from 'node:fs/promises';

const blogMeta = JSON.parse(await readFile('content/blog-meta.json', 'utf-8'));

function stripMarkdown(md) {
	return md
		.replace(/---[\s\S]*?---/, '')             // YAML frontmatter
		.replace(/```[\s\S]*?```/g, '')            // fenced code blocks
		.replace(/`[^`]*`/g, '')                   // inline code
		.replace(/!\[.*?\]\(.*?\)/g, '')           // images
		.replace(/\[([^\]]+)\]\(.*?\)/g, '$1')    // links -> text
		.replace(/^#{1,6}\s+/gm, '')              // headers
		.replace(/[*_]{1,3}([^*_\n]+)[*_]{1,3}/g, '$1') // bold/italic
		.replace(/^\s*[-*+]\s+/gm, '')            // list markers
		.replace(/\n{3,}/g, '\n\n')               // excess blank lines
		.trim();
}

const posts = await Promise.all(blogMeta.map(async (post) => {
	const year = post.date.slice(0, 4);
	try {
		const md = await readFile(`content/blog/${year}/${post.slug}.md`, 'utf-8');
		return { slug: post.slug, body: stripMarkdown(md) };
	} catch {
		return { slug: post.slug, body: '' };
	}
}));

const CONTENT_PAGES = ['about', 'pie-charts'];
const pages = await Promise.all(CONTENT_PAGES.map(async (slug) => {
	try {
		const md = await readFile(`content/${slug}.md`, 'utf-8');
		return { slug, body: stripMarkdown(md) };
	} catch {
		return { slug, body: '' };
	}
}));

await writeFile('static/search-data.json', JSON.stringify([...posts, ...pages]));
console.log(`Built search data for ${posts.length} posts and ${pages.length} pages`);
