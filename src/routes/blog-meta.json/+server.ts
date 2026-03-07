import { json } from '@sveltejs/kit';
import blogMeta from '../../../content/blog-meta.json';

export const prerender = true;

export function GET() {
    return json(blogMeta);
}
