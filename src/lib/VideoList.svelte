<script lang="ts">

import type { Video } from '$lib/video-utils';

let {   videos,
        numVideos = -1
    }: {
        videos: Video[],
        numVideos?: number
    } = $props();

let filteredVideos = videos.slice(0, numVideos === -1 ? videos.length : numVideos);

</script>

{#each filteredVideos as video}
    <a href="/video/{video.slug}"><img src={`https://media.eagereyes.org/video-thumbs/${video.slug}.jpg`}
            alt="{video.title} thumbnail"
            width="192" /></a>
    <p><a href="/video/{video.slug}">{video.title}</a></p>
{/each}
