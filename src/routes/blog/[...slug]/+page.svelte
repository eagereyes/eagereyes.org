<script lang="ts">
	import type { PageProps } from './$types';

    import {parse} from 'marked';

    const tagNames = {
		"basics": "Visualization Basics",
		"criticism": "Criticism",
		"isotype": "ISOTYPE",
		"paper": "Papers",
		"zipscribble": "ZipScribble Maps",
		"book-reviews": "Book Reviews",
		"eagereyestv": "EagerEyes Videos",
		"journalism": "Journalism",
		"peer-review": "Peer Review",
		"conference": "Conference Reports",
		"influences": "Lists of Influences",
		"meta": "Meta/Site News",
		"pie-charts": "Pie Charts",
    }

	let { data }: PageProps = $props();

    function formatDate(date: Date | string | undefined): string {
        if (!date) return '';
        const d = typeof date === 'string' ? new Date(date) : date;

        return d.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
</script>

<svelte:head>
    <!-- <title>{data.metadata.title}</title>
    <meta name="description" content={data.description} /> -->
</svelte:head>

<article>        
    <p>{data.filePath} – {data?.error}</p>
    <p>{data.meta?.title}</p>
    <p>{data.prevPost?.title} – {data.nextPost?.title}</p>
    {@html parse(data?.content.split('---\n')[2])}

    Posted by <a href="/about">Robert Kosara</a> on {formatDate(data.meta?.date)}.
    {#if data.meta?.tags}
        Filed under {@html data.meta.tags.map(tag => `<a href="/tag/${tag}">${tagNames[tag]}</a>`).join(', ')}.
    {/if}
</article>