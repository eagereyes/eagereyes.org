<script lang="ts">
	import type { PageProps } from './$types';
    import VideoList from '$lib/VideoList.svelte';

	let { data }: PageProps = $props();

</script>

<svelte:head>
{#if data.video.title.length}<title>{data.video.title} - Video</title>
{:else}<title>Videos – eagereyes</title>
{/if}
    <meta name="description" content={data.video.description} />
    <meta property="og:title" content={data.video.title} />
    <meta property="og:description" content={data.video.description} />
    <meta property="og:type" content="video.other" />
    <meta property="og:url" content={`https://eagereyes.org/video/${data.video.slug}`} />
    <meta property="og:image" content={`https://media.eagereyes.org/video-thumbs/${data.video.slug}.jpg`} />
</svelte:head>

{#if data.video.title}
<div class="video-page">
    <h1>{data.video.title}</h1>

    <div class="video-embed">
        <iframe src="https://www.youtube-nocookie.com/embed/{data.video.ytslug}" title={data.video.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <p><em>{data.video.description}</em></p>

    {#if data.video.blogpost}
    <p>See also <a href="{data.video.blogpost}">the related blog post</a>!</p>
    {/if}
</div>
{:else}

    <h1>Videos</h1>
    <div class="video-grid">
        <VideoList videos={data.videos} showDescriptions={true} />
    </div>

{/if}

<style>
    .video-page {
        max-width: 48rem;
        margin: 2rem auto 0;
        width: 100%;
    }

    .video-embed {
        aspect-ratio: 16 / 9;
        width: 100%;
        margin-bottom: 1rem;
    }

    .video-embed iframe {
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 4px;
    }

    .video-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }

    .video-grid :global(.video-card) {
        margin-bottom: 0;
    }

    @media (max-width: 600px) {
        .video-grid {
            grid-template-columns: 1fr;
        }
    }
</style>