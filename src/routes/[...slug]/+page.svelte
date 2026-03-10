<script lang="ts">
    import { marked } from 'marked';
    import { gfmHeadingId } from "marked-gfm-heading-id";
    import { onMount } from 'svelte';
    import Lightbox from '$lib/Lightbox.svelte';
    import type { PageData } from './$types';

    marked.use(gfmHeadingId());

    marked.use({
        renderer: {
            image({ href, title, text }) {
                const titleAttr = title ? ` title="${title}"` : '';
                return `<span class="lightbox-trigger" data-src="${href}" data-alt="${text ?? ''}">`
                     + `<img src="${href}" alt="${text ?? ''}"${titleAttr}>`
                     + `</span>`;
            }
        }
    });

    let { data }: { data: PageData } = $props();

    let photos = $state<{src: string, alt: string}[]>([]);
    let lightboxIndex = $state(-1);
    let container = $state<HTMLElement | undefined>();

    onMount(() => {
        if (!container) return;
        const imgs = Array.from(container.querySelectorAll<HTMLImageElement>('img'));
        photos = imgs.map(img => ({ src: img.src, alt: img.alt }));
        container.addEventListener('click', (e) => {
            const img = (e.target as HTMLElement).closest<HTMLImageElement>('img');
            if (!img) return;
            const idx = imgs.indexOf(img);
            if (idx >= 0) lightboxIndex = idx;
        });
    });
</script>

<svelte:head>
    <title>{data.title}</title>
    <meta name="description" content={data.title} />
</svelte:head>

<div class="text-column" bind:this={container}>
    {@html marked(data.content)}
</div>

<Lightbox
    {photos}
    index={lightboxIndex}
    onclose={() => lightboxIndex = -1}
    onprev={() => lightboxIndex--}
    onnext={() => lightboxIndex++}
/>

<style>
    .text-column :global(img) {
        width: 100%;
        height: auto;
        border-radius: 4px;
        display: block;
        margin: 2rem 0;
        cursor: pointer;
    }

    .text-column :global(figure) {
        max-width: 100%;
        margin: 2rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .text-column :global(figure img) {
        width: auto;
        max-width: 100%;
        height: auto;
        margin: 0;
    }

    .text-column :global(figcaption) {
        text-align: center;
        font-style: italic;
        margin-top: 0.5rem;
    }

    .text-column :global(.lightbox-trigger) {
        cursor: pointer;
        display: contents;
    }
</style>
