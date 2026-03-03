<script lang="ts">

import type { BlogPost } from '$lib/blog-utils';
import { formatDate, tagNames } from '$lib/blog-utils';

let {
        year = undefined,
        tag = undefined,
        archived = false,
        byYear = false,
        maxPosts = -1,
        posts
    } : {
        year?: string,
        tag?: string,
        archived?: boolean,
        byYear?: boolean,
        maxPosts?: number,
        posts: BlogPost[]
    } = $props();

let filteredPosts = $derived(posts.filter(post => {
    let include = true;
    include &&= archived || !post.archived;
    include &&= (year === undefined) || post.date.startsWith(year);
    include &&= (tag === undefined) || post.tags.includes(tag);

    return include;
}).slice(0, maxPosts === -1 ? posts.length : maxPosts));

let postsByYear = $derived.by(() => {
    const tempPosts: {[key: string]: BlogPost[]} = {};
    filteredPosts.forEach(post => {
        const postYear = post.date.substring(0, 4);
        if (!tempPosts[postYear]) {
            tempPosts[postYear] = [];
        }
        tempPosts[postYear].push(post);
    });
    return Object.entries(tempPosts).reverse().map(([year, posts]) => ({
        year,
        posts
    }));
});

</script>

{#each postsByYear as { year, posts }}

    {#if byYear}
        <h2 class="year-header"><a href="/blog/{year}">{year}</a></h2>
    {/if}

    {#each posts as post}
        <article class="post-card" class:no-image={!post.featuredImage}>
            {#if post.featuredImage}
            <a class="card-image-link" href="/blog/{post.date.substring(0, 4)}/{post.slug}" tabindex="-1" aria-hidden="true">
                <div class="card-image">
                    <img src={post.featuredImage} alt={post.title} loading="lazy" />
                </div>
            </a>
            {/if}
            <div class="card-body">
                <h2 class="card-title">
                    <a href="/blog/{post.date.substring(0, 4)}/{post.slug}">{post.title}</a>
                </h2>
                <p class="card-description">{@html post.description}</p>
                {#if post.tags && post.tags.length > 0}
                <div class="card-tags">
                    {#each post.tags as t}
                        <a href="/tag/{t}" class="tag">{tagNames[t] ?? t}</a>
                    {/each}
                </div>
                {/if}
            </div>
        </article>
    {/each}

{/each}

<style>
    /* Year grouping header */
    .year-header {
        font-size: 1.5rem;
        font-weight: 700;
        margin: 2rem 0 1rem;
        padding-bottom: 0.4rem;
        border-bottom: 2px solid var(--color-border);
        letter-spacing: 0.03em;
    }

    .year-header:first-child {
        margin-top: 0;
    }

    .year-header a {
        color: var(--color-text);
        text-decoration: none;
    }

    .year-header a:hover {
        color: var(--color-theme-1);
        text-decoration: none;
    }

    /* Card */
    .post-card {
        display: flex;
        flex-direction: column;
        border: 1px solid var(--color-border);
        border-radius: 6px;
        overflow: hidden;
        margin-bottom: 2rem;
        background-color: var(--color-bg-1);
        transition: box-shadow 0.2s ease, transform 0.2s ease;
    }

    .post-card:hover {
        box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);
        transform: translateY(-2px);
    }

    @media (prefers-color-scheme: dark) {
        .post-card:hover {
            box-shadow: 0 6px 24px rgba(0, 0, 0, 0.5);
        }
    }

    /* Image container: forces 16:9 */
    .card-image {
        aspect-ratio: 16 / 9;
        overflow: hidden;
        width: 100%;
        background-color: var(--color-bg-0);
    }

    .card-image-link {
        display: block;
        width: 100%;
        line-height: 0;
    }

    .card-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.3s ease;
    }

    .post-card:hover .card-image img {
        transform: scale(1.04);
    }

    /* Text area */
    .card-body {
        padding: 1rem 1.25rem 1.25rem;
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
    }

    .card-title {
        font-size: 1.15rem;
        font-weight: 700;
        margin: 0;
        line-height: 1.35;
    }

    .card-title a {
        color: var(--color-text);
        text-decoration: none;
    }

    .card-title a:hover {
        color: var(--color-theme-1);
        text-decoration: none;
    }

    .card-description {
        margin: 0;
        font-size: 0.95rem;
        line-height: 1.55;
        color: var(--color-text);
    }

    .no-image .card-body {
        padding-top: 1.25rem;
    }

    .card-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.35rem;
        margin-top: 0.4rem;
    }

    .tag {
        font-size: 0.78rem;
        padding: 0.15rem 0.5rem;
        border-radius: 3px;
        background: var(--color-bg-0);
        border: 1px solid var(--color-border);
        color: var(--color-text);
        text-decoration: none;
        opacity: 0.8;
    }

    .tag:hover {
        opacity: 1;
        border-color: var(--color-theme-1);
        color: var(--color-theme-1);
    }

</style>