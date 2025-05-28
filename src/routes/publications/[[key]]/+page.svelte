<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

</script>

<svelte:head>
    <title>Paper: {data.paper.title}</title>
    <!-- <meta name="description" content={data.description} /> -->
</svelte:head>

{#if data.paper.title.length}

<h1>
    {data.paper.title}
</h1>

{#if "_thumb" in data.paper}
    <img src="https://media.eagereyes.org{data.paper._thumb}" alt="Thumbnail for {data.paper.title}" />
{/if}

<article>
    <p><strong>Authors:</strong> {data.paper.author.split(' and ').join(', ')}</p>
    <p><em>{data.paper.abstract}</em></p>
</article>

{:else}

<h1>List of Publications</h1>

{#each data.papers as paper}
    <article>
        <h2><a href="/publications/{paper._key.replaceAll(':', '-')}">{paper.title}</a></h2>
        <p><strong>Authors:</strong> {paper.author.split(' and ').join(', ')}</p>
        <p><em>{paper.abstract}</em></p>
    </article>
{/each}

{/if}

{#if data.papers.length === 0}
    <p>No publications found.</p>

{/if}
