<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

    let paper = data.paper;
</script>

<svelte:head>
    <title>Paper: {paper.title}</title>
    <!-- <meta name="description" content={data.description} /> -->
</svelte:head>

<h1>
    {paper.title}
</h1>

{#if "_thumb" in paper}
    <img src="https://media.eagereyes.org{paper._thumb}" alt="Thumbnail for {paper.title}" />
{/if}

<article>
    <p><strong>Authors:</strong> {paper.author.split(' and ').join(', ')}</p>
    <p><em>{paper.abstract}</em></p>
</article>