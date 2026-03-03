<script lang="ts">

import BlogList from "$lib/BlogList.svelte";
import VideoList from "$lib/VideoList.svelte";

import type { PageProps } from './$types';

let { data }: PageProps = $props();

</script>

<svelte:head>
	<title>eagereyes.org – Visualization and Visual Communication</title>
	<meta name="description" content="eagereyes – Visualization and Visual Communication" />
</svelte:head>

<main>
	<section class="blog">
		<h1 class="section-header">Blog</h1>
		<div>
			<BlogList posts={data.posts} maxPosts={5} />
		</div>
	</section>

	<section class="videos">
		<h1 class="section-header">Videos</h1>
		<div>
			<VideoList videos={data.videos} numVideos={5} />
		</div>
	</section>

	<!-- <section class="apps">
		<h2>Apps</h2>
	</section> -->
</main>

<style>

	main {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		flex-wrap: wrap;
		gap: 2em;
		padding: 2em;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}

	h2 {
		width: 100%;
		margin-bottom: 0px;
	}

	.blog {
		flex: 0.66;
		width: 66%;
		border-right: 1px solid var(--color-border);
		padding-right: 1em;
	}

	.videos {
		flex: 0.34;
		width: 34%;
		height: 12em;
	}

</style>
