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
		<h2>Blog</h2>
		<p>
			<BlogList posts={data.posts} maxPosts={5} />
		</p>
	</section>

	<section class="videos">
		<h2>Videos</h2>
		<p>
			<VideoList videos={data.videos} numVideos={5} />
		</p>
	</section>

	<!-- <section class="apps">
		<h2>Apps</h2>
	</section> -->
</main>

<style>

	main {
		display: flex;
		flex-direction: row;
		justify-content: top;
		flex-wrap: wrap;
		gap: 2em;
		padding: 2em;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: top;
	}

	h2 {
		width: 100%;
		margin-bottom: 0px;
	}

	p {
		margin-top: 0px;
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
