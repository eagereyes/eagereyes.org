<script lang="ts">
	import { onMount } from 'svelte';
	import type { BlogPost } from '$lib/blog-utils';

	let { data } = $props();
	const posts: BlogPost[] = $derived(data.posts);

	let query = $state('');
	let results: BlogPost[] = $state([]);
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
		const found: BlogPost[] = [];
		for (const field of raw) {
			for (const { doc } of field.result) {
				if (!seen.has(doc.slug)) {
					seen.add(doc.slug);
					found.push(doc as BlogPost);
				}
			}
		}
		results = found;
	}

	function postUrl(post: BlogPost) {
		const year = post.date.slice(0, 4);
		return `/blog/${year}/${post.slug}`;
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
			{#each results as post}
				<li>
					<a href={postUrl(post)}>{post.title}</a>
					<span class="date">{post.date.slice(0, 10)}</span>
					{#if post.description}
						<p>{post.description}</p>
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
