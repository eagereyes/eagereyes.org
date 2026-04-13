<script lang="ts">
	import type { PageProps } from './$types';
	import type { Paper } from '$lib/paper-utils';

	let { data }: PageProps = $props();
	let currentPaper = $derived(data.paper as Paper);

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

	function formatCitation(paper: typeof currentPaper): string {
		const yr = year(paper._key);
		const names = paper.author.split(' and ').map(s => s.trim());
		const authorStr = names.length === 1
			? names[0]
			: names.slice(0, -1).join(', ') + ', &amp; ' + names[names.length - 1];

		const titleLinked = paper._pdf !== 'no'
			? `<a href="${pdfUrl(paper._key)}">${paper.title}</a>`
			: paper.title;
		let cite = `${authorStr} (${yr}). ${titleLinked}. `;

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
			cite += ` <a href="https://dx.doi.org/${paper.doi}">DOI: ${paper.doi}</a>`;
		}

		return cite;
	}

	function pdfUrl(key: string) {
		const yr = year(key);
		return `https://media.eagereyes.org/papers/${yr}/${key.replaceAll(':', '-')}.pdf`;
	}


	function toBibtex(paper: typeof currentPaper): string {
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
{#if currentPaper.title.length}<title>Paper: {currentPaper.title} – eagereyes</title>
{:else}<title>Robert Kosara's Publications – eagereyes</title>
{/if}
    <!-- <meta name="description" content={data.description} /> -->
</svelte:head>

{#if currentPaper.title.length}

<div class="single-paper">
    <h1>{currentPaper.title}</h1>

    <div class="paper-body">
        {#if currentPaper._pdf !== 'no'}
            <img class="paper-thumb"
                src={currentPaper.preview?.src}
                alt="Preview for {currentPaper.title}"
                width={currentPaper.preview?.width}
                height={currentPaper.preview?.height}
            />
        {/if}

        <p class="paper-citation">{@html formatCitation(currentPaper)}</p>
        <div class="paper-pills">
            {#if currentPaper._pdf !== 'no'}<a class="pill" href={pdfUrl(currentPaper._key)}>PDF</a>{/if}
            {#if currentPaper.doi}<a class="pill" href="https://dx.doi.org/{currentPaper.doi}">DOI</a>{/if}
            {#if currentPaper.talk}<a class="pill" href={currentPaper.talk}>Talk</a>{/if}
            {#if currentPaper.data}<a class="pill" href={currentPaper.data}>Data</a>{/if}
        </div>
    </div>

    <details class="bibtex-block">
        <summary>BibTeX</summary>
        <pre><code>{toBibtex(currentPaper)}</code></pre>
    </details>
    
    <p class="paper-abstract">{currentPaper.abstract}</p>

</div>

{:else}

<h1>Robert Kosara's Publications</h1>

{#each data.papers as paper}
    <article class="paper-card">
        <a class="card-link" href="/publications/{paper._key.replaceAll(':', '-')}" aria-label={paper.title}></a>
        {#if paper._pdf !== 'no'}
            <img class="card-thumb"
                src={paper.thumbnail?.src}
                alt="Thumbnail for {paper.title}"
                loading="lazy"
                width={paper.thumbnail?.width}
                height={paper.thumbnail?.height}
            />
        {/if}
        <div class="card-body">
            <h2 class="card-title">{paper.title}</h2>
            <p class="card-byline">{authors(paper.author)} &mdash; <em>{paper.venue}</em>, {year(paper._key)}</p>
            {#if paper.abstract}
                <p class="card-abstract">{truncate(paper.abstract)}{#if paper.abstract.length > 500} &nbsp;<a href="/publications/{paper._key.replaceAll(':', '-')}">[More]</a>{/if}</p>
            {/if}
            {#if paper._pdf !== 'no' || paper.doi || paper.talk || paper.data}
                <div class="paper-pills">
                    {#if paper._pdf !== 'no'}<span class="pill pill-outline">PDF</span>{/if}
                    {#if paper.doi}<span class="pill pill-outline">DOI</span>{/if}
                    {#if paper.talk}<span class="pill pill-outline">Talk</span>{/if}
                    {#if paper.data}<span class="pill pill-outline">Data</span>{/if}
                </div>
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
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        display: block;
    }

    .paper-citation {
        margin: 0;
        font-size: 0.95rem;
        line-height: 1.6;
    }

    .paper-pills {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
    }

    .pill {
        display: inline-block;
        padding: 0.2em 0.65em;
        border-radius: 999px;
        font-size: 0.8rem;
        font-weight: 600;
        text-decoration: none;
        background: var(--color-theme-1);
        color: #fff;
    }

    .pill:hover {
        opacity: 0.85;
    }

    .pill-outline {
        background: transparent;
        color: var(--color-theme-1);
        box-shadow: inset 0 0 0 1.5px var(--color-theme-1);
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
        position: relative;
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

    .paper-card:hover {
        background: var(--color-bg-2, var(--color-bg-1));
    }

    .card-link {
        position: absolute;
        inset: 0;
    }

    .card-thumb {
        flex-shrink: 0;
        width: 200px;
        height: auto;
        border-radius: 3px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        display: block;
    }

    @media (max-width: 600px) {
        .paper-card {
            flex-direction: column;
        }

        .card-thumb {
            width: 100%;
        }
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
