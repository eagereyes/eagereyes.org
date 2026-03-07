<script lang="ts">
	import { onMount } from 'svelte';
	import type { BlogPost } from '$lib/blog-utils';
	import type { SearchPage } from './+page.server';

	type SearchResult = { slug: string; title: string; description?: string; date?: string; url?: string };

	let { data } = $props();
	const posts: BlogPost[] = $derived(data.posts);
	const pages: SearchPage[] = $derived(data.pages);

	let query = $state('');
	let results: SearchResult[] = $state([]);
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
			index.add({ ...post, body: bodyMap.get(post.slug) ?? '' });
		}
		for (const page of pages) {
			index.add({ ...page, body: bodyMap.get(page.slug) ?? '' });
		}

		const q = new URLSearchParams(window.location.search).get('q');
		if (q) {
			query = q;
			runSearch();
		}
	});

	function runSearch() {
		if (!query.trim() || !index) {
			results = [];
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
		<ul>
			{#each results as result}
				<li>
					<a href={resultUrl(result)}>{result.title}</a>
					{#if result.date}<span class="date">{result.date.slice(0, 10)}</span>{/if}
					{#if result.description}
						<p>{result.description}</p>
					{/if}
				</li>
			{/each}
		</ul>
	{:else if query.trim()}
		<p class="no-results">No results for "{query}"</p>
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

	.no-results {
		opacity: 0.6;
	}
</style>
