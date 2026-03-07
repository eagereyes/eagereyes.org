<script lang="ts">

import type { Gallery } from '$lib/photo-utils';

let {
        galleries,
        numGalleries = -1,
        useHeading = true
    }: {
        galleries: Gallery[],
        numGalleries?: number,
        useHeading?: boolean
    } = $props();

let filteredGalleries = $derived(galleries.slice(0, numGalleries === -1 ? galleries.length : numGalleries));

</script>

{#each filteredGalleries as gallery}
    <article class="gallery-card">
        <a class="card-image-link" href="/photo/{gallery.slug}" tabindex="-1" aria-hidden="true">
            <div class="card-image">
                <img src={gallery.featuredImage} alt="{gallery.title} featured photo" loading="lazy" />
            </div>
        </a>
        <div class="card-body">
            {#if useHeading}
                <h2 class="card-title">
                    <a href="/photo/{gallery.slug}">{gallery.title}</a>
                </h2>
            {:else}
                <p class="card-title">
                    <a href="/photo/{gallery.slug}">{gallery.title}</a>
                </p>
            {/if}
            <p class="card-description">{gallery.description}</p>
        </div>
    </article>
{/each}

<style>
    /* Card */
    .gallery-card {
        display: flex;
        flex-direction: column;
        border: 1px solid var(--color-border);
        border-radius: 6px;
        overflow: hidden;
        margin-bottom: 2rem;
        background-color: var(--color-bg-1);
        transition: box-shadow 0.2s ease, transform 0.2s ease;
    }

    .gallery-card:hover {
        box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);
        transform: translateY(-2px);
    }

    @media (prefers-color-scheme: dark) {
        .gallery-card:hover {
            box-shadow: 0 6px 24px rgba(0, 0, 0, 0.5);
        }
    }

    /* Image container: forces 3:2 aspect ratio */
    .card-image {
        aspect-ratio: 3 / 2;
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

    .gallery-card:hover .card-image img {
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
