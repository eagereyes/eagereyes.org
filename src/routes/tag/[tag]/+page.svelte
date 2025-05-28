<script lang="ts">
	import type { PageProps } from './$types';
    import { PageType, tagNames, formatDate } from '$lib/blog-pages';
    import BlogList from '$lib/BlogList.svelte';

	let { data }: PageProps = $props();

</script>

<svelte:head>
    <!-- <title>{data.metadata.title}</title>
    <meta name="description" content={data.description} /> -->
</svelte:head>

<h1>Blog posts filed under <em>{data.tagName}</em></h1>

<BlogList posts={data.posts} tag={data.tag} />
