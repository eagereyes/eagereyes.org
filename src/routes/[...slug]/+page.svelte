<script lang="ts">
    import { marked } from 'marked';
    import { gfmHeadingId } from "marked-gfm-heading-id";
    import type { PageData } from './$types';

    marked.use(gfmHeadingId());

    let { data }: { data: PageData } = $props();
</script>

<svelte:head>
    <title>{data.title}</title>
    <meta name="description" content={data.title} />
</svelte:head>

<div class="text-column">
    {@html marked(data.content)}
</div>

<style>
    .text-column :global(img) {
        width: 100%;
        height: auto;
        border-radius: 4px;
        display: block;
        margin: 2rem 0;
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
</style>
