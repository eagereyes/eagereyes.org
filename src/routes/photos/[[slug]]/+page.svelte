<script lang="ts">
    import type { PageProps } from './$types';
    import GalleryList from '$lib/GalleryList.svelte';
    import Lightbox from '$lib/Lightbox.svelte';
    import type { Photo } from '$lib/photo-utils';

    let { data }: PageProps = $props();

    let lightboxIndex = $state(-1);
    let flatPhotos = $derived<Photo[]>(data.gallery.photos.flat());
</script>

<svelte:head>
{#if data.gallery.title.length}<title>{data.gallery.title} – Photos</title>
{:else}<title>Photos – eagereyes</title>
{/if}
    <meta name="description" content={data.gallery.description} />
    {#if data.gallery.title.length}
    <meta property="og:title" content={data.gallery.title} />
    <meta property="og:description" content={data.gallery.description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`https://eagereyes.org/photos/${data.gallery.slug}`} />
    <meta property="og:image" content={data.gallery.featuredImage} />
    {/if}
</svelte:head>

{#if data.gallery.title}
<div class="gallery-page">
    <h1>{data.gallery.title}</h1>
    <p class="gallery-description">{data.gallery.description}</p>

    <div class="photo-rows">
        {#each data.gallery.photos as row}
            <div class="photo-row" class:pair={row.length === 2}>
                {#each row as photo}
                    <figure class="photo-figure" onclick={() => lightboxIndex = flatPhotos.indexOf(photo)}>
                        <img src={photo.src} alt={photo.alt} loading="lazy" />
                        {#if photo.alt}
                            <figcaption>{photo.alt}</figcaption>
                        {/if}
                    </figure>
                {/each}
            </div>
        {/each}
    </div>
    <Lightbox
        photos={flatPhotos}
        index={lightboxIndex}
        onclose={() => lightboxIndex = -1}
        onprev={() => lightboxIndex--}
        onnext={() => lightboxIndex++}
    />
</div>
{:else}

    <h1>Photos</h1>
    <div class="gallery-grid">
        <GalleryList galleries={data.galleries} />
    </div>
    <p class="feed-link"><a href="/photos/feed">Photos RSS Feed</a></p>

{/if}

<style>
    /* Gallery listing grid */
    .gallery-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }

    .gallery-grid :global(.gallery-card) {
        margin-bottom: 0;
    }

    @media (max-width: 600px) {
        .gallery-grid {
            grid-template-columns: 1fr;
        }
    }

    .feed-link {
        margin-top: 2rem;
        text-align: center;
        font-size: 0.85rem;
        color: var(--color-text);
        opacity: 0.6;
    }

    .feed-link a {
        color: inherit;
        text-decoration: none;
    }

    .feed-link a:hover {
        opacity: 1;
        color: var(--color-theme-1);
        text-decoration: underline;
    }

    /* Gallery detail page */
    .gallery-description {
        font-size: 1.05rem;
        line-height: 1.6;
        color: var(--color-text);
        margin-bottom: 2rem;
    }

    .photo-rows {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .photo-row {
        display: flex;
        gap: 1rem;
    }

    .photo-figure {
        margin: 0;
        flex: 1;
        min-width: 0;
        cursor: pointer;
    }

    .photo-figure img {
        width: 100%;
        height: auto;
        display: block;
        border-radius: 4px;
    }

    figcaption {
        margin-top: 0.4rem;
        font-size: 0.85rem;
        color: var(--color-text);
        opacity: 0.7;
        line-height: 1.4;
    }

    @media (max-width: 600px) {
        .photo-row.pair {
            flex-direction: column;
        }
    }
</style>
