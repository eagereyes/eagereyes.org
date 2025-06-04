<script lang="ts">
	import type { PageProps } from './$types';
    import { PageType, tagNames, formatDate } from '$lib/blog-utils';
    import BlogList from '$lib/BlogList.svelte';

    import { parse } from 'marked';

	let { data }: PageProps = $props();

    let archivedPosts = data.allPosts.filter(post => post.archived);
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
    
    Posted by <a href="/about">Robert Kosara</a> on {formatDate(data.meta?.date)}.
    {#if data.meta?.tags && data.meta.tags.length > 0}
    Filed under {@html data.meta.tags.map(tag => `<a href="/tag/${tag}">${tagNames[tag]}</a>`).join(', ')}.
    {/if}
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
                <p class="nextpost"><em><a href="/blog/{data.nextPost.date.substring(0, 4)}/{data.nextPost.slug}">{data.nextPost.title}</a></em></p>
            {/if}
        </div>
    </div>
{/if}

{#if data.numComments > 0}
    <hr />
    <h2 class="comments">Comments</h2>
    <aside>
        <p class="commentscomment">There are {data.numComments} comments on this post. Posting new comments was disabled in 2020.</p>
        {@html parse(data.comments)}
    </aside>
{/if}

{/if}

<style>

    .navigation {
        width: 100%;
        margin-top: 2em;
    }

    .prevnext {
        display: inline-block;
        width: 40%;
        vertical-align: top;
    }

    .next {
        float: right;
        text-align: right;
    }

    .comments {
        margin-bottom: 0;
    }

    .commentscomment {
        margin-top: 0;
        font-style: italic;
        color: #999;
    }

</style>