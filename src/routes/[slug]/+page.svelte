<script lang="ts">
    import { parse } from 'marked';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<svelte:head>
    <title>{data.title}</title>
    <meta name="description" content={data.title} />
</svelte:head>

<div class="text-column">
    {@html parse(data.content)}
</div>
