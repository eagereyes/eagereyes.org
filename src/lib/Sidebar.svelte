<script lang="ts">
    import { untrack } from 'svelte';
    import { tagNames } from '$lib/blog-utils';
    import SubscribeForm from '$lib/SubscribeForm.svelte';

    interface Props {
        years: string[];
        yearCounts: Record<string, number>;
        sortedTags: string[];
        tagCounts: Record<string, number>;
        defaultTab?: 'years' | 'tags';
        currentYear?: string;
        currentTag?: string;
    }

    let { years, yearCounts, sortedTags, tagCounts, defaultTab = 'years', currentYear, currentTag }: Props = $props();
    // svelte-ignore state_referenced_locally
    let activeTab = $state(defaultTab);
    $effect(() => { const tab = defaultTab; untrack(() => { activeTab = tab; }); });
    let alphabeticalTags = $derived([...sortedTags].sort((a, b) => (tagNames[a] ?? a).localeCompare(tagNames[b] ?? b)));
</script>

<div class="sidebar-tabs">
    <button class:active={activeTab === 'years'} onclick={() => activeTab = 'years'}>Years</button>
    <button class:active={activeTab === 'tags'} onclick={() => activeTab = 'tags'}>Tags</button>
</div>

{#if activeTab === 'years'}
    <nav class="year-nav">
        {#each years as year}
            <a href="/blog/{year}" class:current={year === currentYear}>{year} <span class="count">({yearCounts[year]})</span></a>
        {/each}
    </nav>
{:else}
    <nav class="tag-nav">
        {#each alphabeticalTags as tag}
            <a href="/tag/{tag}" class:current={tag === currentTag}>{tagNames[tag] ?? tag} <span class="count">({tagCounts[tag]})</span></a>
        {/each}
    </nav>
{/if}

<div class="subscribe-section">
    <p class="subscribe-heading">Subscribe</p>
    <SubscribeForm compact />
</div>

<style>
    .sidebar-tabs {
        display: flex;
        gap: 0.25rem;
        margin-bottom: 0.5rem;
    }

    .sidebar-tabs button {
        flex: 1;
        padding: 0.25rem 0.4rem;
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        border: none;
        border-radius: 4px;
        background: transparent;
        color: var(--color-text);
        opacity: 0.4;
        cursor: pointer;
        transition: opacity 0.15s, background-color 0.15s, color 0.15s;
    }

    .sidebar-tabs button:hover {
        opacity: 0.7;
    }

    .sidebar-tabs button.active {
        background: color-mix(in srgb, var(--color-theme-1) 12%, transparent);
        color: var(--color-theme-1);
        opacity: 1;
    }

    .year-nav,
    .tag-nav {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    .year-nav a,
    .tag-nav a {
        padding: 0.2rem 0.5rem;
        border-radius: 4px;
        font-size: 0.9rem;
        text-decoration: none;
        color: var(--color-text);
        transition: color 0.15s, background-color 0.15s;
    }

    .year-nav a:hover,
    .year-nav a.current,
    .tag-nav a:hover,
    .tag-nav a.current {
        background: color-mix(in srgb, var(--color-theme-1) 12%, transparent);
        color: var(--color-theme-1);
    }

    .subscribe-section {
        margin-top: 1.25rem;
        padding-top: 1.25rem;
        border-top: 1px solid var(--color-border);
    }

    .subscribe-heading {
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        opacity: 0.4;
        margin: 0 0 0.4rem 0;
        padding: 0 0.5rem;
    }

    .count {
        opacity: 0.5;
        font-size: 0.8em;
    }
</style>
