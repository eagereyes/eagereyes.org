<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	function year(key: string) {
		return key.split(':').at(-1)!.slice(0, 4);
	}

	function authors(author: string) {
		return author.split(' and ').join(', ');
	}

	function truncate(text: string, max = 500) {
		if (text.length <= max) return text;
		const cut = text.lastIndexOf(' ', max);
		return text.slice(0, cut > 0 ? cut : max).trimEnd() + '…';
	}

	function formatCitation(paper: typeof data.paper): string {
		const yr = year(paper._key);
		const names = paper.author.split(' and ').map(s => s.trim());
		const authorStr = names.length === 1
			? names[0]
			: names.slice(0, -1).join(', ') + ', &amp; ' + names[names.length - 1];

		let cite = `${authorStr} (${yr}). ${paper.title}. `;

		if (paper._type === 'article') {
			cite += `<em>${paper.venue}</em>`;
			if (paper.volume) {
				cite += `, <em>${paper.volume}</em>`;
				if (paper.number) cite += `(${paper.number})`;
			}
			if (paper.pages) cite += `, ${paper.pages}`;
			cite += '.';
		} else {
			if (paper._type === 'inbook' && paper.editor) {
				cite += `In ${paper.editor} (Ed.), `;
			} else {
				cite += 'In ';
			}
			cite += `<em>${paper.venue}</em>`;
			if (paper.pages) cite += ` (pp. ${paper.pages})`;
			if (paper.publisher) cite += `. ${paper.publisher}`;
			cite += '.';
		}

		if (paper.doi) {
			cite += ` <a href="https://doi.org/${paper.doi}">https://doi.org/${paper.doi}</a>`;
		}

		return cite;
	}

	function toBibtex(paper: typeof data.paper): string {
		const type = paper._type;
		const key = paper._key;
		const yr = year(key);
		const venueField = type === 'article' ? 'journal' : 'booktitle';

		const fields: [string, string | number | undefined][] = [
			['author',    paper.author],
			['title',     paper.title],
			[venueField,  paper.venue],
			['year',      yr],
			['volume',    paper.volume],
			['number',    paper.number],
			['pages',     typeof paper.pages === 'string' ? paper.pages.replace('-', '--') : paper.pages],
			['publisher', paper.publisher],
			['editor',    paper.editor],
			['doi',       paper.doi],
			['note',      paper.note],
		];

		const body = fields
			.filter(([, v]) => v !== undefined && v !== null && v !== '')
			.map(([k, v]) => `  ${k} = {${v}}`)
			.join(',\n');

		return `@${type}{${key},\n${body}\n}`;
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

        <p class="paper-citation">{@html formatCitation(data.paper)}</p>
    </div>

    <details class="bibtex-block">
        <summary>BibTeX</summary>
        <pre><code>{toBibtex(data.paper)}</code></pre>
    </details>
    
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
            {#if paper.abstract}
                <p class="card-abstract">{truncate(paper.abstract)}{#if paper.abstract.length > 500} &nbsp;<a href="/publications/{paper._key.replaceAll(':', '-')}">[More]</a>{/if}</p>
            {/if}
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

    .paper-citation {
        margin: 0;
        font-size: 0.95rem;
        line-height: 1.6;
    }

    .paper-abstract {
        font-style: italic;
        line-height: 1.7;
        color: var(--color-text);
    }

    .bibtex-block {
        margin-top: 1.5rem;
    }

    .bibtex-block summary {
        cursor: pointer;
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--color-theme-1);
        user-select: none;
    }

    .bibtex-block pre {
        margin-top: 0.75rem;
        padding: 1rem;
        background: var(--color-bg-2, var(--color-bg-1));
        border: 1px solid var(--color-border);
        border-radius: 4px;
        overflow-x: auto;
        font-size: 0.85rem;
        line-height: 1.5;
    }

    .bibtex-block code {
        font-family: monospace;
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
