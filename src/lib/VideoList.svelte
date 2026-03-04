<script lang="ts">

import type { Video } from '$lib/video-utils';

let {   videos,
        numVideos = -1,
        showDescriptions = false,
        useHeading = true
    }: {
        videos: Video[],
        numVideos?: number,
        showDescriptions?: boolean,
        useHeading?: boolean
    } = $props();

let filteredVideos = $derived(videos.slice(0, numVideos === -1 ? videos.length : numVideos));

</script>

{#each filteredVideos as video}
    <article class="video-card">
        <a class="card-image-link" href="/video/{video.slug}" tabindex="-1" aria-hidden="true">
            <div class="card-image">
                <img src={`https://media.eagereyes.org/video-thumbs/${video.slug}.jpg`}
                        alt="{video.title} thumbnail" loading="lazy" />
            </div>
        </a>
        <div class="card-body">
            {#if useHeading}
                <h2 class="card-title">
                    <a href="/video/{video.slug}">{video.title}</a>
                </h2>
            {:else}
                <p class="card-title">
                    <a href="/video/{video.slug}">{video.title}</a>
                </p>
            {/if}
            {#if showDescriptions}
                <p class="card-description">{video.description}</p>
            {/if}
        </div>
    </article>
{/each}

<style>
    /* Card */
    .video-card {
        display: flex;
        flex-direction: column;
        border: 1px solid var(--color-border);
        border-radius: 6px;
        overflow: hidden;
        margin-bottom: 2rem;
        background-color: var(--color-bg-1);
        transition: box-shadow 0.2s ease, transform 0.2s ease;
    }

    .video-card:hover {
        box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);
        transform: translateY(-2px);
    }

    @media (prefers-color-scheme: dark) {
        .video-card:hover {
            box-shadow: 0 6px 24px rgba(0, 0, 0, 0.5);
        }
    }

    /* Image container: forces 16:9 */
    .card-image {
        aspect-ratio: 16 / 9;
        overflow: hidden;
        width: 100%;
        background-color: var(--color-bg-0);
    }

    .card-image-link {
        display: block;
        width: 100%;
        line-height: 0;
    }

    .card-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.3s ease;
    }

    .video-card:hover .card-image img {
        transform: scale(1.04);
    }

    /* Text area */
    .card-body {
        padding: 1rem 1.25rem 1.25rem;
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
    }

    .card-title {
        font-size: 1rem;
        margin: 0;
        line-height: 1.35;
    }

    .card-title a {
        color: var(--color-text);
        text-decoration: none;
    }

    .card-title a:hover {
        color: var(--color-theme-1);
        text-decoration: none;
    }

    .card-description {
        margin: 0;
        font-size: 0.95rem;
        line-height: 1.55;
        color: var(--color-text);
    }

</style>
