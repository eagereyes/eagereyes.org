<script lang="ts">
	import type { PageProps } from './$types';
    import { PageType, tagNames } from './blog-pages';

    import { parse } from 'marked';

	let { data }: PageProps = $props();

    function formatDate(date: Date | string | undefined): string {
        if (!date) return '';
        const d = typeof date === 'string' ? new Date(date) : date;

        return d.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    let years = new Set<string>(Array.from(data.allPosts, post => post.date.substring(0, 4)));
</script>

<svelte:head>
    <!-- <title>{data.metadata.title}</title>
    <meta name="description" content={data.description} /> -->
</svelte:head>

{#if data.display === PageType.allPosts}
    <h1>Blog Index</h1>
    <!-- <p>There are {data.allPosts.length} posts in the blog.</p> -->

    {#each years as year}
        <h2><a href="/blog/{year}">{year}</a></h2>
        <ul>
            {#each data.allPosts.filter(post => post.date.startsWith(year)) as post}
                <li><a href="/blog/{post.date.substring(0, 4)}/{post.slug}">{post.title}</a> ({formatDate(post.date)})</li>
            {/each}
        </ul>
    {/each}

{:else if data.display === PageType.oneYear}
    <h1>Blog {data.allPosts[0].date.substring(0, 4)}</h1>
    {#each data.allPosts as post}
        <article>
            <h2><a href="/blog/{post.date.substring(0, 4)}/{post.slug}">{post.title}</a></h2>
            <em>{@html post.description}</em> ({formatDate(post.date)})
        </article>
    {/each}
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


