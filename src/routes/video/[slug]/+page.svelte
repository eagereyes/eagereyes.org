<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

</script>

<svelte:head>
    <title>{data.video.title} - Video</title>
    <meta name="description" content={data.video.description} />
    <meta property="og:title" content={data.video.title} />
    <meta property="og:description" content={data.video.description} />
    <meta property="og:type" content="video.other" />
    <meta property="og:url" content={`https://eagereyes.org/video/${data.video.slug}`} />
    <meta property="og:image" content={`https://media.eagereyes.org/video-thumbs/${data.video.slug}.jpg`} />
</svelte:head>

<div class="video-page">
    <h1>{data.video.title}</h1>

    <iframe width="560" height="315" src="https://www.youtube.com/embed/{data.video.ytslug}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    <p><em>{data.video.description}</em></p>

    <p>See also <a href="{data.video.blogpost}">the related blog post</a>!</p>
</div>
