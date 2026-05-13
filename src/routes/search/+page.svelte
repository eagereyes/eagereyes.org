<script lang="ts">
	import { onMount } from 'svelte';
	import type { BlogPost } from '$lib/blog-utils';
	import type { SearchPage } from './+page.server';

	type SearchResult = { slug: string; title: string; description?: string; date?: string; url?: string };

	let { data } = $props();
	const posts: BlogPost[] = $derived(data.posts);
	const pages: SearchPage[] = $derived(data.pages);
	const totalCount = $derived(posts.length + pages.length);

	let query = $state('');
	let results: SearchResult[] = $state([]);
	let searched = $state(false);
	let index: any;

	onMount(async () => {
		const [FlexSearch, bodyData] = await Promise.all([
			import('flexsearch'),
			fetch('/search-data.json').then(r => r.json())
		]);

		const bodyMap = new Map<string, string>(bodyData.map((d: { slug: string; body: string }) => [d.slug, d.body]));

		index = new FlexSearch.Document({
			document: {
				id: 'slug',
				index: ['title', 'description', 'body'],
				store: true
			}
		});
		for (const post of posts) {
			index.add({ ...post, body: bodyMap.get(post.slug) ?? '' } as any);
		}
		for (const page of pages) {
			index.add({ ...page, body: bodyMap.get(page.slug) ?? '' } as any);
		}

		const q = new URLSearchParams(window.location.search).get('q');
		if (q) {
			query = q;
			runSearch();
		}
	});

	function escapeHtml(text: string): string {
		return text
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;');
	}

	function escapeRegex(s: string): string {
		return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	function highlight(text: string, q: string): string {
		const safe = escapeHtml(text);
		const terms = q.trim().split(/\s+/).filter(Boolean).map(escapeRegex);
		if (!terms.length) return safe;
		const pattern = new RegExp(`(${terms.join('|')})`, 'gi');
		return safe.replace(pattern, '<mark>$1</mark>');
	}

	function runSearch() {
		searched = true;
		if (!query.trim() || !index) {
			results = [];
			searched = false;
			return;
		}
		const raw = index.search(query, { enrich: true });
		const seen = new Set<string>();
		const found: SearchResult[] = [];
		for (const field of raw) {
			for (const { doc } of field.result) {
				if (!seen.has(doc.slug)) {
					seen.add(doc.slug);
					found.push(doc as SearchResult);
				}
			}
		}
		results = found;
	}

	function resultUrl(result: SearchResult) {
		if (result.url) return result.url;
		const year = result.date!.slice(0, 4);
		return `/blog/${year}/${result.slug}`;
	}
</script>

<svelte:head>
	<title>Search – eagereyes</title>
</svelte:head>

<div class="search-page">
	<input
		type="search"
		placeholder="Search posts…"
		bind:value={query}
		oninput={runSearch}
	/>

	{#if results.length > 0}
		<p class="result-count">{results.length} result{results.length !== 1 ? 's' : ''} for "<em>{query}</em>"</p>
		<ul>
			{#each results as result}
				<li>
					<a href={resultUrl(result)}>{@html highlight(result.title, query)}</a>
					{#if result.date}<span class="date">{result.date.slice(0, 10)}</span>{/if}
					{#if result.description}
						<p>{@html highlight(result.description, query)}</p>
					{/if}
				</li>
			{/each}
		</ul>
	{:else if searched && query.trim()}
		<p class="empty-state">No results for "<em>{query}</em>" — try different keywords or check your spelling.</p>
	{:else if !query.trim()}
		<p class="empty-state">Search across {totalCount} posts and pages.</p>
	{/if}
</div>

<style>
	.search-page {
		max-width: 48rem;
		margin: 0 auto;
	}

	input[type='search'] {
		width: 100%;
		padding: 0.5rem 0.75rem;
		font-size: 1.1rem;
		border: 2px solid var(--color-border);
		border-radius: 4px;
		background: var(--color-bg-1);
		color: var(--color-text);
		margin-bottom: 1.5rem;
	}

	.result-count {
		font-size: 0.9rem;
		opacity: 0.65;
		margin-bottom: 1rem;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	li a {
		font-weight: 700;
		font-size: 1.05rem;
	}

	.date {
		margin-left: 0.75rem;
		font-size: 0.85rem;
		color: var(--color-text);
		opacity: 0.6;
	}

	li p {
		margin: 0.25rem 0 0;
		font-size: 0.9rem;
	}

	.empty-state {
		opacity: 0.6;
	}

	:global(mark) {
		background: color-mix(in srgb, var(--color-theme-1) 25%, transparent);
		color: inherit;
		border-radius: 2px;
		padding: 0 1px;
	}
</style>
