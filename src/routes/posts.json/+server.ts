import { json } from '@sveltejs/kit';
import blogMeta from '../../../content/posts.json';

export const prerender = true;

export function GET() {
    return json(blogMeta);
}
