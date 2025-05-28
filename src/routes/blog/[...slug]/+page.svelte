<script lang="ts">
	import type { PageProps } from './$types';
    import { PageType, tagNames, formatDate } from '$lib/blog-utils';
    import BlogList from '$lib/BlogList.svelte';

    import { parse } from 'marked';

	let { data }: PageProps = $props();

    let archivedPosts = data.allPosts.filter(post => post.archived);
</script>

<svelte:head>
    <!-- <title>{data.metadata.title}</title>
    <meta name="description" content={data.description} /> -->
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
    <p>{data?.error}</p>
    <p>{data.prevPost?.title} – {data.nextPost?.title}</p>
    {@html parse(data?.content)}

    Posted by <a href="/about">Robert Kosara</a> on {formatDate(data.meta?.date)}.
    {#if data.meta?.tags && data.meta.tags.length > 0}
        Filed under {@html data.meta.tags.map(tag => `<a href="/tag/${tag}">${tagNames[tag]}</a>`).join(', ')}.
    {/if}
</article>
{/if}


