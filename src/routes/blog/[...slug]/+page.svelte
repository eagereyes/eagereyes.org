<script lang="ts">
	import type { PageProps } from './$types';
    import { PageType, tagNames, formatDate } from '$lib/blog-pages';
    import BlogList from '$lib/BlogList.svelte';

    import { parse } from 'marked';

	let { data }: PageProps = $props();

    let years = new Set<string>(Array.from(data.allPosts, post => post.date.substring(0, 4)));

    let archivedPosts = data.allPosts.filter(post => post.archived);
</script>

<svelte:head>
    <!-- <title>{data.metadata.title}</title>
    <meta name="description" content={data.description} /> -->
</svelte:head>

{#if data.display === PageType.allPosts}
    <h1>Blog Index</h1>
    <!-- <p>There are {data.allPosts.length} blog posts, {archivedPosts.length} of which are archived.</p>

    {#each years as year}
        <h2><a href="/blog/{year}">{year}</a></h2>
        <ul>
            {#each data.allPosts.filter(post => post.date.startsWith(year) && !post.archived) as post}
                <li><a href="/blog/{post.date.substring(0, 4)}/{post.slug}">{post.title}</a> ({formatDate(post.date)})</li>
            {/each}
        </ul>
    {/each} -->

    <BlogList posts={data.allPosts} archived={false} byYear={true} />

{:else if data.display === PageType.oneYear}
    <h1>Blog {data.allPosts[0].date.substring(0, 4)}</h1>

    <BlogList year={data.allPosts[0].date.substring(0, 4)} posts={data.allPosts} />
{:else }
<article>        
    <p>{data?.error}</p>
    <p>{data.meta?.title}</p>
    <p>{data.prevPost?.title} – {data.nextPost?.title}</p>
    {@html parse(data?.content.split('---\n')[2])}

    Posted by <a href="/about">Robert Kosara</a> on {formatDate(data.meta?.date)}.
    {#if data.meta?.tags}
        Filed under {@html data.meta.tags.map(tag => `<a href="/tag/${tag}">${tagNames[tag]}</a>`).join(', ')}.
    {/if}
</article>
{/if}


