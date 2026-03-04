<script lang="ts">
	import type { PageProps } from './$types';
    import { PageType, tagNames, formatDate } from '$lib/blog-utils';
    import BlogList from '$lib/BlogList.svelte';

	let { data }: PageProps = $props();

</script>

<svelte:head>
    <!-- <title>{data.metadata.title}</title>
    <meta name="description" content={data.description} /> -->
</svelte:head>

<h1>Blog posts filed under <em>{data.tagName}</em></h1>

<div class="post-grid">
    <BlogList posts={data.posts} tag={data.tag} />
</div>

<style>
    .post-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }

    .post-grid :global(.post-card) {
        margin-bottom: 0;
    }
</style>
