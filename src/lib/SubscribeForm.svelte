<script lang="ts">
    let { compact = false }: { compact?: boolean } = $props();

    const LAMBDA_URL: string = import.meta.env.VITE_SUBSCRIBE_LAMBDA_URL ?? '';

    let email = $state('');
    let status = $state<'idle' | 'submitting' | 'success' | 'error'>('idle');
    let errorMessage = $state('');
    let loadTime = $state(0);

    $effect(() => {
        loadTime = Date.now();
    });

    async function handleSubmit(e: SubmitEvent) {
        e.preventDefault();
        status = 'submitting';
        errorMessage = '';

        try {
            const res = await fetch(LAMBDA_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, _timestamp: loadTime, _hp: '' }),
            });
            const data = await res.json();
            if (res.ok && data.ok) {
                status = 'success';
            } else {
                status = 'error';
                errorMessage = data.error ?? 'Something went wrong. Please try again.';
            }
        } catch {
            status = 'error';
            errorMessage = 'Network error. Please try again.';
        }
    }
</script>

{#if LAMBDA_URL}
<div class="subscribe-form" class:compact>
    {#if status === 'success'}
        <p class="success-message">Check your inbox for a confirmation email!</p>
    {:else}
        {#if !compact}
            <p class="description">Get notified when new posts are published</p>
        {/if}

        {#if status === 'error'}
            <p class="error-message">{errorMessage}</p>
        {/if}

        <form onsubmit={handleSubmit}>
            <!-- Honeypot -->
            <label class="visually-hidden" for="subscribe-hp">
                Leave this blank
                <input type="text" id="subscribe-hp" name="_hp" tabindex="-1" autocomplete="off" />
            </label>

            <div class="input-row">
                <input
                    id="subscribe-email"
                    type="email"
                    bind:value={email}
                    required
                    placeholder="your@email.com"
                    autocomplete="email"
                    disabled={status === 'submitting'}
                    aria-label="Email address"
                />
                <button type="submit" disabled={status === 'submitting'}>
                    {status === 'submitting' ? '…' : 'Subscribe'}
                </button>
            </div>
        </form>
    {/if}
</div>
{/if}

<style>
    .subscribe-form {
        margin-top: 1em;
    }

    h3 {
        margin-bottom: 0.25em;
    }

    .description {
        font-size: 0.9rem;
        opacity: 0.75;
        margin-bottom: 0.75em;
    }

    .input-row {
        display: flex;
        flex-direction: column;
        gap: 0.4em;
    }

    input[type='email'] {
        width: 100%;
        box-sizing: border-box;
        padding: 0.4rem 0.6rem;
        font-size: 0.95rem;
        font-family: inherit;
        border: 1px solid var(--color-border);
        border-radius: 6px;
        background: transparent;
        color: var(--color-text);
        transition: border-color 0.2s;
    }

    input[type='email']:focus {
        outline: none;
        border-color: var(--color-theme-1);
    }

    button {
        align-self: flex-start;
        padding: 0.4em 0.9em;
        background: var(--color-theme-1);
        color: white;
        border: none;
        border-radius: 6px;
        font-size: 0.95rem;
        cursor: pointer;
        transition: opacity 0.15s;
    }

    button:hover:not(:disabled) {
        opacity: 0.85;
    }

    button:disabled {
        opacity: 0.55;
        cursor: not-allowed;
    }

    .success-message {
        font-style: italic;
        font-size: 0.95rem;
    }

    .error-message {
        color: #c0392b;
        font-size: 0.875rem;
        margin-bottom: 0.4em;
    }

    .compact h3 {
        font-size: 0.95rem;
        font-weight: 600;
        margin-bottom: 0.4em;
    }
</style>
