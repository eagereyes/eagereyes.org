<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	function year(key: string) {
		return key.slice(-4);
	}

	function authors(author: string) {
		return author.split(' and ').join(', ');
	}

</script>

<svelte:head>
    <title>Paper: {data.paper.title}</title>
    <!-- <meta name="description" content={data.description} /> -->
</svelte:head>

{#if data.paper.title.length}

<div class="single-paper">
    <h1>{data.paper.title}</h1>

    <div class="paper-body">
        {#if "_thumb" in data.paper}
            <img class="paper-thumb" src="https://media.eagereyes.org{data.paper._thumb}" alt="Thumbnail for {data.paper.title}" />
        {/if}

        <div class="paper-meta">
            <p class="meta-authors"><strong>Authors:</strong> {authors(data.paper.author)}</p>
            <p class="meta-venue"><em>{data.paper.venue}</em>, {year(data.paper._key)}</p>
            {#if data.paper.doi}
                <p class="meta-doi"><strong>DOI:</strong> <a href="https://doi.org/{data.paper.doi}">{data.paper.doi}</a></p>
            {/if}
        </div>
    </div>

    <p class="paper-abstract">{data.paper.abstract}</p>
</div>

{:else}

<h1>List of Publications</h1>

{#each data.papers as paper}
    <article class="paper-card">
        {#if "_thumb" in paper}
            <a class="card-thumb-link" href="/publications/{paper._key.replaceAll(':', '-')}" tabindex="-1" aria-hidden="true">
                <img class="card-thumb" src="https://media.eagereyes.org{paper._thumb}" alt="Thumbnail for {paper.title}" loading="lazy" />
            </a>
        {/if}
        <div class="card-body">
            <h2 class="card-title">
                <a href="/publications/{paper._key.replaceAll(':', '-')}">{paper.title}</a>
            </h2>
            <p class="card-byline">{authors(paper.author)} &mdash; <em>{paper.venue}</em>, {year(paper._key)}</p>
            <p class="card-abstract">{paper.abstract}</p>
        </div>
    </article>
{/each}

{/if}

{#if data.papers.length === 0}
    <p>No publications found.</p>
{/if}

<style>

    /* ── Single paper page ─────────────────────────── */

    .single-paper {
        max-width: 48rem;
        margin: 2rem auto 0;
        width: 100%;
    }

    .single-paper h1 {
        font-size: 2.4rem;
        font-weight: 700;
        line-height: 1.2;
        letter-spacing: -0.02em;
        margin-bottom: 1.5rem;
    }

    .paper-body {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 1.5rem;
    }

    .paper-thumb {
        width: 100%;
        height: auto;
        border-radius: 4px;
        border: 1px solid var(--color-border);
        display: block;
    }

    .paper-meta {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
    }

    .paper-meta p {
        margin: 0;
        line-height: 1.5;
        font-size: 0.95rem;
    }

    .paper-abstract {
        font-style: italic;
        line-height: 1.7;
        color: var(--color-text);
    }

    /* ── Publications list ─────────────────────────── */

    .paper-card {
        display: flex;
        flex-direction: row;
        gap: 1.25rem;
        align-items: flex-start;
        padding: 1.25rem 0;
        border-bottom: 1px solid var(--color-border);
    }

    .paper-card:first-of-type {
        border-top: 1px solid var(--color-border);
    }

    .card-thumb-link {
        flex-shrink: 0;
        display: block;
        line-height: 0;
    }

    .card-thumb {
        width: 200px;
        border-radius: 3px;
        border: 1px solid var(--color-border);
        display: block;
    }

    .card-body {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
    }

    .card-title {
        font-size: 1.1rem;
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
    }

    .card-byline {
        margin: 0;
        font-size: 0.88rem;
        opacity: 0.75;
        line-height: 1.4;
    }

    .card-abstract {
        margin: 0;
        font-size: 0.92rem;
        line-height: 1.6;
        color: var(--color-text);
    }


</style>
