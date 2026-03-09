<script lang="ts">
    let { slug }: { slug: string } = $props();

    const LAMBDA_URL = import.meta.env.VITE_COMMENT_LAMBDA_URL as string;

    let name = $state('');
    let url = $state('');
    let comment = $state('');
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
                body: JSON.stringify({ name, url, comment, slug, _timestamp: loadTime, _hp: '' }),
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

<div class="comment-form-wrap">
    <h3>Leave a comment</h3>

    {#if status === 'success'}
        <p class="success-message">
            Your comment has been submitted for review. Thank you!
        </p>
    {:else}
        {#if status === 'error'}
            <p class="error-message">{errorMessage}</p>
        {/if}

        <form onsubmit={handleSubmit}>
            <!-- Honeypot: visually hidden, must stay empty -->
            <label class="visually-hidden" for="comment-hp">
                Leave this blank
                <input type="text" id="comment-hp" name="_hp" tabindex="-1" autocomplete="off" />
            </label>

            <div class="field">
                <label for="comment-name">Name <span class="required">*</span></label>
                <input
                    id="comment-name"
                    type="text"
                    bind:value={name}
                    required
                    autocomplete="name"
                    disabled={status === 'submitting'}
                />
            </div>

            <div class="field">
                <label for="comment-url">Website <span class="optional">(optional)</span></label>
                <input
                    id="comment-url"
                    type="url"
                    bind:value={url}
                    autocomplete="url"
                    placeholder="https://"
                    disabled={status === 'submitting'}
                />
            </div>

            <div class="field">
                <label for="comment-text">Comment <span class="required">*</span></label>
                <textarea
                    id="comment-text"
                    bind:value={comment}
                    required
                    rows={5}
                    disabled={status === 'submitting'}
                ></textarea>
            </div>

            <button type="submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Submitting…' : 'Submit comment'}
            </button>
        </form>
    {/if}
</div>

<style>
    .comment-form-wrap {
        margin-top: 1.5em;
    }

    h3 {
        margin-bottom: 0.75em;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 0.9em;
    }

    .field {
        display: flex;
        flex-direction: column;
        gap: 0.3em;
    }

    label {
        font-size: 0.9rem;
        font-weight: 500;
        color: var(--color-text);
    }

    .required {
        color: var(--color-theme-1);
    }

    .optional {
        font-weight: 400;
        opacity: 0.6;
        font-size: 0.85em;
    }

    input[type='text'],
    input[type='url'],
    textarea {
        width: 100%;
        box-sizing: border-box;
        padding: 0.4rem 0.6rem;
        font-size: 1rem;
        font-family: inherit;
        border: 1px solid var(--color-border);
        border-radius: 6px;
        background: transparent;
        color: var(--color-text);
        transition: border-color 0.2s;
    }

    input[type='text']:focus,
    input[type='url']:focus,
    textarea:focus {
        outline: none;
        border-color: var(--color-theme-1);
    }

    textarea {
        resize: vertical;
        line-height: 1.5;
    }

    button {
        align-self: flex-start;
        padding: 0.45em 1.1em;
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
        color: var(--color-text);
    }

    .error-message {
        color: #c0392b;
        font-size: 0.9rem;
        margin-bottom: 0.25em;
    }
</style>
