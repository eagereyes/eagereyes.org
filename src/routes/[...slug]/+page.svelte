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
