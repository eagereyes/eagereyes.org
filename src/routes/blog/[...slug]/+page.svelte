<script lang="ts">
	import type { PageProps } from './$types';
    import { PageType, tagNames, formatDate } from '$lib/blog-utils';
    import BlogList from '$lib/BlogList.svelte';

    import { parse } from 'marked';

	let { data }: PageProps = $props();

    let archivedPosts = $derived(data.allPosts.filter(post => post.archived));
</script>

<svelte:head>
    <title>{data.meta?.title} – eagereyes</title>
    <meta name="description" content={data.meta?.description} />
</svelte:head>

{#if data.display === PageType.allPosts}
    <h1>Blog Index</h1>
    <p>There are {data.allPosts.length} blog posts, {archivedPosts.length} of which are archived.</p>

    <BlogList posts={data.allPosts} archived={false} byYear={true} />

{:else if data.display === PageType.oneYear}
    <h1>Blog {data.allPosts[0].date.substring(0, 4)}</h1>

    <BlogList year={data.allPosts[0].date.substring(0, 4)} posts={data.allPosts} />
{:else }
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
    <h2 class="comments">Comments</h2>
    <aside>
        <p class="commentscomment">There {#if data.numComments === 1}is 1 comment{:else}are {data.numComments} comments{/if} on this post. Posting new comments was disabled in 2020.</p>
        {@html parse(data.comments)}
    </aside>
{/if}

{/if}

<style>

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
    .comments {
        margin-bottom: 0;
    }

    .commentscomment {
        margin-top: 0;
        font-style: italic;
        color: var(--color-text);
    }

</style>