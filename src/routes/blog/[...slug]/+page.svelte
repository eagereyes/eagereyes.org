<script lang="ts">
	import type { PageProps } from './$types';
    import { PageType, formatDate } from '$lib/blog-utils';
    import { tagNames } from '$lib/blog-utils';
    import BlogList from '$lib/BlogList.svelte';
    import Sidebar from '$lib/Sidebar.svelte';

    import { parse } from 'marked';

	let { data }: PageProps = $props();

    let archivedPosts = $derived(data.allPosts.filter(post => post.archived));
    let years = $derived(data.allYears ?? []);
    let currentYear = $derived(data.display === PageType.oneYear ? data.allPosts[0]?.date.substring(0, 4) : undefined);
    let yearTotalCounts = $derived(Object.fromEntries(years.map(y => [y, data.allPosts.filter(p => p.date.startsWith(y)).length])));
    let archivedCount = $derived(currentYear ? data.allPosts.length - (data.yearCounts[currentYear] ?? 0) : 0);
    let showArchived = $state(false);
</script>

<svelte:head>
{#if data.display === PageType.allPosts}<title>Blog – eagereyes</title>
{:else if data.display === PageType.oneYear}<title>Blog {data.allPosts[0].date.substring(0, 4)} – eagereyes</title>
{:else}<title>{data.meta?.title} – eagereyes</title>
{/if}
    <meta name="description" content={data.meta?.description} />
{#if data.display === PageType.singlePost && data.meta}
    <meta property="og:title" content="{data.meta.title} – eagereyes" />
    <meta property="og:description" content={data.meta.description} />
    <meta property="og:type" content="article" />
    {#if data.meta.featuredImage}
    <meta property="og:image" content={data.meta.featuredImage} />
    {/if}
{/if}
</svelte:head>

{#if data.display === PageType.allPosts || data.display === PageType.oneYear}
    <div class="blog-layout">
        <div class="blog-content">
            {#if data.display === PageType.allPosts}
                <h1>Blog</h1>
                <!-- <p>There are {data.allPosts.length} blog posts, {archivedPosts.length} of which are archived.</p> -->

                {#each years as y}
                    <h2 class="year-header"><a href="/blog/{y}">{y}</a> <span class="year-count">({yearTotalCounts[y]}{yearTotalCounts[y] - data.yearCounts[y] > 0 ? ` post${yearTotalCounts[y] !== 1 ? 's' : ''}, ${yearTotalCounts[y] - data.yearCounts[y]} archived` : yearTotalCounts[y] === 1 ? ' post' : ' posts'})</span></h2>
                    <div class="post-grid">
                        <BlogList year={y} posts={data.allPosts} archived={false} />
                    </div>
                {/each}
            {:else}
                <h1>Blog {data.allPosts[0].date.substring(0, 4)} <span class="year-count">({data.allPosts.length}{archivedCount > 0 ? ` post${data.allPosts.length !== 1 ? 's' : ''}, ${archivedCount} archived` : data.allPosts.length === 1 ? ' post' : ' posts'})</span>{#if archivedCount > 0} <button class="archived-toggle" onclick={() => showArchived = !showArchived}>{showArchived ? 'hide archived' : 'show archived'}</button>{/if}</h1>
                <div class="post-grid">
                    <BlogList year={data.allPosts[0].date.substring(0, 4)} posts={data.allPosts} archived={showArchived} />
                </div>
            {/if}
        </div>

        <aside class="sidebar">
            <Sidebar
                years={years}
                yearCounts={data.yearCounts}
                sortedTags={data.sortedTags}
                tagCounts={data.tagCounts}
                currentYear={currentYear}
            />
        </aside>
    </div>
{:else}
<article>
    {@html parse(data?.content)}

    <hr />

    <p class="post-meta">
        Posted by <a href="/about">Robert Kosara</a> on {formatDate(data.meta?.date)}.
        {#if data.meta?.tags && data.meta.tags.length > 0}
        Filed under {@html data.meta.tags.map(tag => `<a href="/tag/${tag}">${tagNames[tag]}</a>`).join(', ')}.
        {/if}
    </p>
</article>

{#if data.prevPost || data.nextPost}
    <div class="navigation">
        <div class="prevnext">
            {#if data.prevPost}
                <p><em><a href="/blog/{data.prevPost.date.substring(0, 4)}/{data.prevPost.slug}">{data.prevPost.title}</a></em></p>
            {/if}
        </div>
        <div class="prevnext next">
            {#if data.nextPost}
                <p><em><a href="/blog/{data.nextPost.date.substring(0, 4)}/{data.nextPost.slug}">{data.nextPost.title}</a></em></p>
            {/if}
        </div>
    </div>
{/if}

{#if data.numComments > 0}
    <hr />
    <details class="comments-details">
        <summary><h2 class="comments">Comments ({data.numComments})</h2></summary>
        <aside>
            {@html parse(data.comments)}
        </aside>
        <p class="commentscomment">Posting new comments was disabled in 2020.</p>
    </details>
{/if}

{/if}

<style>

    .year-header {
        font-size: 1.5rem;
        font-weight: 700;
        margin: 2rem 0 1rem;
        padding-bottom: 0.4rem;
        border-bottom: 2px solid var(--color-border);
        letter-spacing: 0.03em;
        grid-column: 1 / -1;
    }

    .year-header:first-of-type {
        margin-top: 0;
    }

    .year-header a {
        color: var(--color-text);
        text-decoration: none;
    }

    .year-header a:hover {
        color: var(--color-theme-1);
    }

    .year-count {
        font-size: 0.65em;
        font-weight: 400;
        opacity: 0.5;
    }

    .archived-toggle {
        font-size: 0.28em;
        font-weight: 400;
        padding: 0.2em 0.5em;
        margin-left: 0.8em;
        border: 1px solid var(--color-border);
        border-radius: 4px;
        background: transparent;
        color: var(--color-text);
        opacity: 0.6;
        cursor: pointer;
        vertical-align: baseline;
        transition: opacity 0.15s, border-color 0.15s, color 0.15s;
    }

    .archived-toggle:hover {
        opacity: 1;
        border-color: var(--color-theme-1);
        color: var(--color-theme-1);
    }

    .post-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }

    .post-grid :global(.post-card) {
        margin-bottom: 0;
    }

    @media (max-width: 600px) {
        .post-grid {
            grid-template-columns: 1fr;
        }
    }

    .blog-layout {
        display: flex;
        gap: 2rem;
        align-items: flex-start;
    }

    .sidebar {
        width: 10rem;
        flex-shrink: 0;
        position: sticky;
        top: 1rem;
        padding-top: 5.5rem;
    }

    .blog-content {
        flex: 1;
        min-width: 0;
    }

    /* Blog post article */
    article {
        max-width: 48rem;
        margin: 2rem auto 0;
        width: 100%;
    }

    article :global(h1) {
        font-size: 2.6rem;
        font-weight: 700;
        line-height: 1.2;
        letter-spacing: -0.02em;
        margin-bottom: 1.75rem;
    }

    article :global(h2) {
        font-size: 1.4rem;
        font-weight: 700;
        margin-top: 2.5rem;
        margin-bottom: 0.5rem;
    }

    article :global(h3) {
        font-size: 1.1rem;
        font-weight: 600;
        margin-top: 2rem;
        margin-bottom: 0.35rem;
    }

    article :global(p) {
        line-height: 1.7;
    }

    article :global(figure) {
        max-width: 100%;
        margin: 2rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    article :global(figcaption) {
        text-align: center;
        font-style: italic;
        margin-top: 0.5rem;
    }

    article :global(figure img) {
        width: auto;
        max-width: 100%;
        height: auto;
        border-radius: 4px;
        margin: 0;
    }

    article :global(figure div) {
        max-width: 100%;
        flex-wrap: wrap;
    }

    article :global(img) {
        width: 100%;
        height: auto;
        border-radius: 4px;
        display: block;
        margin: 2rem 0;
    }

    /* Post metadata line */
    .post-meta {
        font-size: 0.88rem;
        opacity: 0.7;
        margin-top: 1rem;
    }

    /* Prev/next navigation */
    .navigation {
        max-width: 48rem;
        margin: 2rem auto 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 1rem;
    }

    .prevnext {
        flex: 1;
    }

    .next {
        text-align: right;
    }

    /* Comments */
    .comments-details {
        max-width: 48rem;
        margin: 0 auto;
        width: 100%;
    }

    .comments-details summary {
        cursor: pointer;
        list-style: none;
        user-select: none;
    }

    .comments-details summary::-webkit-details-marker {
        display: none;
    }

    .comments {
        margin-bottom: 0;
        display: inline;
    }

    .commentscomment {
        margin-top: 0;
        font-style: italic;
        color: var(--color-text);
    }

</style>