<script lang="ts">
    import type { Photo } from '$lib/photo-utils';

    let { photos, index, onclose, onprev, onnext }: {
        photos: Photo[],
        index: number,
        onclose: () => void,
        onprev: () => void,
        onnext: () => void,
    } = $props();

    let photo = $derived(index >= 0 ? photos[index] : null);
    let hasPrev = $derived(index > 0);
    let hasNext = $derived(index < photos.length - 1);

    $effect(() => {
        document.body.style.overflow = index >= 0 ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    });

    function handleKey(e: KeyboardEvent) {
        if (index < 0) return;
        if (e.key === 'Escape') { onclose(); return; }
        if (e.key === 'ArrowLeft') { if (hasPrev) onprev(); return; }
        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            if (hasNext) onnext();
        }
    }
</script>

<svelte:window onkeydown={handleKey} />

{#if index >= 0 && photo}
<div
    class="overlay"
    role="dialog"
    aria-modal="true"
    aria-label="Photo lightbox"
    tabindex="-1"
    onclick={onclose}
>
    <button
        class="nav-btn prev"
        disabled={!hasPrev}
        aria-label="Previous photo"
        onclick={(e) => { e.stopPropagation(); onprev(); }}
    >&#8249;</button>

    <div class="lightbox-content" onclick={(e) => e.stopPropagation()}>
        <img src={photo.src} alt={photo.alt} />
        {#if photo.alt}
            <p class="caption">{photo.alt}</p>
        {/if}
    </div>

    <button
        class="nav-btn next"
        disabled={!hasNext}
        aria-label="Next photo"
        onclick={(e) => { e.stopPropagation(); onnext(); }}
    >&#8250;</button>

    <button
        class="close-btn"
        aria-label="Close"
        onclick={(e) => { e.stopPropagation(); onclose(); }}
    >&#x2715;</button>
</div>
{/if}

<style>
    .overlay {
        position: fixed;
        inset: 0;
        z-index: 1000;
        background: rgb(242, 242, 242);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: default;
    }

    @media (prefers-color-scheme: dark) {
        .overlay {
            background: rgb(18, 18, 18);
        }
    }

    .lightbox-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 90vw;
    }

    .lightbox-content img {
        max-width: 90vw;
        max-height: 80vh;
        width: auto;
        height: auto;
        object-fit: contain;
        display: block;
        border-radius: 2px;
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
    }

    @media (prefers-color-scheme: dark) {
        .lightbox-content img {
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
        }
    }

    .caption {
        margin: 0.75rem 0 0;
        color: rgba(0, 0, 0, 0.6);
        font-size: 0.875rem;
        text-align: center;
        max-width: 90vw;
        line-height: 1.4;
    }

    @media (prefers-color-scheme: dark) {
        .caption {
            color: rgba(255, 255, 255, 0.7);
        }
    }

    .nav-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0, 0, 0, 0.08);
        border: none;
        border-radius: 50%;
        color: rgba(0, 0, 0, 0.7);
        font-size: 2.5rem;
        line-height: 1;
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 0.15s, opacity 0.15s;
        padding: 0;
    }

    .nav-btn:hover:not(:disabled) {
        background: rgba(0, 0, 0, 0.15);
    }

    .nav-btn:disabled {
        opacity: 0.2;
        cursor: default;
    }

    @media (prefers-color-scheme: dark) {
        .nav-btn {
            background: rgba(255, 255, 255, 0.1);
            color: rgba(255, 255, 255, 0.8);
        }

        .nav-btn:hover:not(:disabled) {
            background: rgba(255, 255, 255, 0.2);
        }
    }

    .prev { left: 1rem; }
    .next { right: 1rem; }

    .close-btn {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: rgba(0, 0, 0, 0.08);
        border: none;
        border-radius: 50%;
        color: rgba(0, 0, 0, 0.7);
        font-size: 1.1rem;
        width: 2.25rem;
        height: 2.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 0.15s;
        padding: 0;
    }

    .close-btn:hover {
        background: rgba(0, 0, 0, 0.15);
    }

    @media (prefers-color-scheme: dark) {
        .close-btn {
            background: rgba(255, 255, 255, 0.1);
            color: rgba(255, 255, 255, 0.8);
        }

        .close-btn:hover {
            background: rgba(255, 255, 255, 0.2);
        }
    }
</style>
