<script lang="ts">

import type { App } from '$lib/app-utils';

let { apps }: { apps: App[] } = $props();

</script>

{#each apps as app}
    <article class="app-card">
        <a class="card-image-link" href={app.url} tabindex="-1" aria-hidden="true">
            <div class="card-image">
                <img src={app.image} alt="{app.title} screenshot" loading="lazy" />
            </div>
        </a>
        <div class="card-body">
            <p class="card-title">
                <a href={app.url}>{app.title}</a>
            </p>
            <p class="card-description">{app.description}</p>
        </div>
    </article>
{/each}

<style>
    .app-card {
        display: flex;
        flex-direction: column;
        position: relative;
        border: 1px solid var(--color-border);
        border-radius: 6px;
        overflow: hidden;
        margin-bottom: 2rem;
        background-color: var(--color-bg-1);
        transition: box-shadow 0.2s ease, transform 0.2s ease;
        cursor: pointer;
    }

    .app-card:hover {
        box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);
        transform: translateY(-2px);
    }

    @media (prefers-color-scheme: dark) {
        .app-card:hover {
            box-shadow: 0 6px 24px rgba(0, 0, 0, 0.5);
        }
    }

    .card-image {
        aspect-ratio: 16 / 9;
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

    .app-card:hover .card-image img {
        transform: scale(1.04);
    }

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

    .card-title a::after {
        content: "";
        position: absolute;
        inset: 0;
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
