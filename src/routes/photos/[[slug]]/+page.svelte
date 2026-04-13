<script lang="ts">
    import type { PageProps } from './$types';
    import GalleryList from '$lib/GalleryList.svelte';
    import Lightbox from '$lib/Lightbox.svelte';
    import type { Photo } from '$lib/photo-utils';

    let { data }: PageProps = $props();

    let lightboxIndex = $state(-1);
    let flatPhotos = $derived<Photo[]>(data.gallery.photos.flatMap(row => Array.isArray(row) ? row : [row]));
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
    <meta property="og:image" content={data.gallery.featuredImage.src} />
    {/if}
</svelte:head>

{#if data.gallery.title}
<div class="gallery-page">
    <h1>{data.gallery.title}</h1>
    <p class="gallery-description">{data.gallery.description}</p>

    <div class="photo-rows">
        {#each data.gallery.photos as row}
            {@const rowPhotos = Array.isArray(row) ? row : [row]}
            <div class="photo-row" class:pair={rowPhotos.length === 2}>
                {#each rowPhotos as photo}
                    <figure class="photo-figure"
                        role="button"
                        tabindex="0"
                        onclick={() => lightboxIndex = flatPhotos.indexOf(photo)}
                        onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); lightboxIndex = flatPhotos.indexOf(photo); } }}
                    >
                        <img src={photo.src} alt={photo.alt} loading="lazy" width={photo.width} height={photo.height} />
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
    <p class="back-link"><a href="/photos/">← All galleries</a></p>
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

    .back-link {
        margin-top: 2rem;
        font-size: 0.85rem;
    }

    .back-link a {
        color: var(--color-text);
        text-decoration: none;
        opacity: 0.6;
    }

    .back-link a:hover {
        opacity: 1;
        color: var(--color-theme-1);
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

    @media (max-width: 600px) {
        .photo-row.pair {
            flex-direction: column;
        }
    }
</style>
