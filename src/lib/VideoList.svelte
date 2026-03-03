<script lang="ts">

import type { Video } from '$lib/video-utils';

let {   videos,
        numVideos = -1
    }: {
        videos: Video[],
        numVideos?: number
    } = $props();

let filteredVideos = $derived(videos.slice(0, numVideos === -1 ? videos.length : numVideos));

</script>

{#each filteredVideos as video}
    <div class="video-item">
        <a href="/video/{video.slug}">
            <img src={`https://media.eagereyes.org/video-thumbs/${video.slug}.jpg`}
                    alt="{video.title} thumbnail" />
            <span class="video-title">{video.title}</span>
        </a>
    </div>
{/each}

<style>
    .video-item {
        margin-bottom: 1rem;
    }

    .video-item a {
        display: block;
        position: relative;
        color: white;
    }

    .video-item img {
        width: 100%;
        max-width: 350px;
        filter: brightness(0.6);
        height: auto;
        display: block;
    }
    .video-item a:hover img {
        filter: brightness(1);
    }
    .video-item img:hover {
        filter: brightness(1);
    }

    .video-title {
        position: absolute;
        max-width: 350px;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 2rem 0.75rem 0.75rem;
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.75));
        font-size: 18px;
        line-height: 1.3;
        text-shadow: 0 0 12px rgba(0, 0, 0, 0.8), 0 0 4px rgba(0, 0, 0, 0.6);
        transition: color 0.15s ease;
    }

    .video-item a:hover .video-title {
        color: var(--color-theme-1);
    }
</style>
