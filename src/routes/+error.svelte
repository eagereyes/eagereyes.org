<script lang="ts">
    import { page } from '$app/state';
    import { onMount } from 'svelte';
    import { Document } from 'flexsearch';
    import type { BlogPost } from '$lib/blog-utils';

    const STOP_WORDS = new Set(['a', 'an', 'the', 'of', 'in', 'on', 'at', 'to', 'for',
        'and', 'or', 'with', 'by', 'from', 'is', 'was', 'are', 'were', 'be', 'been',
        'that', 'this', 'these', 'those', 'it', 'its', 'how', 'why', 'what', 'when',
        'vs', 'via', 'about', 'new', 'part']);

    let results: BlogPost[] = $state([]);

    function extractQuery(pathname: string): string {
        return pathname
            .split(/[\/\-_]+/)
            .map(s => s.toLowerCase())
            .filter(s => s.length > 2 && !STOP_WORDS.has(s) && !/^\d+$/.test(s))
            .join(' ');
    }

    function postUrl(post: BlogPost) {
        return `/blog/${post.date.slice(0, 4)}/${post.slug}`;
    }

    onMount(async () => {
        const query = extractQuery(window.location.pathname);
        if (!query) return;

        const [posts, bodyData] = await Promise.all([
            fetch('/blog-meta.json').then(r => r.json()),
            fetch('/search-data.json').then(r => r.json()),
        ]);

        const bodyMap = new Map<string, string>(
            bodyData.map((d: { slug: string; body: string }) => [d.slug, d.body])
        );

        const index = new Document({
            document: {
                id: 'slug',
                index: ['title', 'description', 'body'],
                store: true,
            },
        });

        for (const post of posts as Array<BlogPost>) {
            index.add({ ...post, body: bodyMap.get(post.slug) ?? '' } as any);
        }

        const raw = index.search(query, { enrich: true });
        const seen = new Set<string>();
        const found: BlogPost[] = [];
        for (const field of raw) {
            for (const { doc } of field.result) {
                if (doc && !seen.has(doc.slug as string)) {
                    seen.add(doc.slug as string);
                    found.push(doc as unknown as BlogPost);
                }
            }
        }
        results = found.slice(0, 10);
    });
</script>

<svelte:head>
    <title>Page not found – eagereyes</title>
</svelte:head>

<div class="error-page">
    <h1>Page not found</h1>
    <p>The page <code>{page.url.pathname}</code> doesn't exist.</p>

    {#if results.length > 0}
        <h2>You might be looking for…</h2>
        <ul>
            {#each results as post}
                <li>
                    <a href={postUrl(post)}>{post.title}</a>
                    <span class="date">{post.date.slice(0, 10)}</span>
                    {#if post.description}
                        <p>{post.description}</p>
                    {/if}
                </li>
            {/each}
        </ul>
    {/if}
</div>

<style>
    .error-page {
        max-width: 48rem;
    }

    code {
        font-size: 0.9em;
        background: color-mix(in srgb, var(--color-theme-1) 10%, transparent);
        padding: 0.1em 0.4em;
        border-radius: 3px;
    }

    h2 {
        margin-top: 2rem;
        font-size: 1.1rem;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }

    li a {
        font-weight: 700;
        font-size: 1.05rem;
    }

    .date {
        margin-left: 0.75rem;
        font-size: 0.85rem;
        opacity: 0.6;
    }

    li p {
        margin: 0.25rem 0 0;
        font-size: 0.9rem;
    }
</style>
