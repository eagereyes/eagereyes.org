<script lang="ts">

import BlogList from "$lib/BlogList.svelte";
import VideoList from "$lib/VideoList.svelte";
import AppList from "$lib/AppList.svelte";

import type { PageProps } from './$types';

let { data }: PageProps = $props();

</script>

<svelte:head>
	<title>eagereyes.org – Visualization and Visual Communication</title>
	<meta name="description" content="eagereyes – Visualization and Visual Communication" />
</svelte:head>

<main>
	<section class="blog">
		<h1 class="section-header"><a href="/blog/">Blog</a></h1>
		<div>
			<BlogList posts={data.posts} maxPosts={5} />
		</div>
		<a href="/blog/" class="more">More…</a>
	</section>

	<div class="right-column">
		<section class="videos">
			<h1 class="section-header"><a href="/video/">Videos</a></h1>
			<div>
				<VideoList videos={data.videos} numVideos={5} useHeading={false} />
			</div>
			<a href="/video/" class="more">More…</a>
		</section>

		<section class="apps">
			<h1 class="section-header">Apps</h1>
			<div>
				<AppList apps={data.apps} />
			</div>
		</section>
	</div>
</main>

<style>

	main {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		flex-wrap: wrap;
		gap: 0;
		padding: 2em;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}

	.more {
		display: block;
		margin-top: 1em;
		text-align: right;
	}

	.section-header a {
		color: var(--color-text);
		text-decoration: none;
	}

	.section-header a:hover {
		color: var(--color-theme-1);
		text-decoration: underline;
	}

	.blog {
		flex: 0.66;
		width: 66%;
		border-right: 1px solid var(--color-border);
		padding-right: 1em;
	}

	.right-column {
		flex: 0.34;
		width: 34%;
		padding-left: 1em;
		display: flex;
		flex-direction: column;
	}

	.apps {
		border-top: 1px solid var(--color-border);
		padding-top: 1em;
	}

	@media (max-width: 768px) {
		main {
			flex-direction: column;
			padding: 1em;
		}

		.blog {
			width: 100%;
			border-right: none;
			padding-right: 0;
		}

		.right-column {
			width: 100%;
			padding-left: 0;
		}
	}

</style>
