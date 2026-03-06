import blogMeta from '../../../content/blog-meta.json';
import type { BlogPost } from '$lib/blog-utils';

export function load() {
	return { posts: blogMeta as BlogPost[] };
}
