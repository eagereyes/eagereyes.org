<script lang="ts">
    import type { PageProps } from './$types';
    import BlogList from '$lib/BlogList.svelte';
    import Sidebar from '$lib/Sidebar.svelte';

    let { data }: PageProps = $props();
</script>

<svelte:head>
    <title>{data.tagName} – eagereyes</title>
    <meta name="description" content="Blog posts about {data.tagName} on eagereyes." />
    <meta property="og:title" content="{data.tagName} – eagereyes" />
    <meta property="og:description" content="Blog posts about {data.tagName} on eagereyes." />
    <meta property="og:type" content="website" />
</svelte:head>

<div class="blog-layout">
    <div class="blog-content">
        <h1>Blog posts filed under <em>{data.tagName}</em></h1>
        <div class="post-grid">
            <BlogList posts={data.posts} tag={data.tag} />
        </div>
    </div>

    <aside class="sidebar">
        <Sidebar
            years={data.allYears}
            yearCounts={data.yearCounts}
            sortedTags={data.sortedTags}
            tagCounts={data.tagCounts}
            defaultTab="tags"
            currentTag={data.tag}
        />
    </aside>
</div>

<style>
    .blog-layout {
        display: flex;
        gap: 2rem;
        align-items: flex-start;
    }

    .blog-content {
        flex: 1;
        min-width: 0;
    }

    .sidebar {
        width: 10rem;
        flex-shrink: 0;
        position: sticky;
        top: 1rem;
        padding-top: 5.5rem;
    }

    .post-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }

    .post-grid :global(.post-card) {
        margin-bottom: 0;
    }

    @media (max-width: 768px) {
        .post-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
