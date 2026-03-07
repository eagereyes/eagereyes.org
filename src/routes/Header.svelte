<script lang="ts">
	import { page } from '$app/state';

	let searchInput: HTMLInputElement;

	const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform);
	const shortcutHint = isMac ? '/ or ⌘K' : '/ or Ctrl+K';

	function handleKeydown(e: KeyboardEvent) {
		if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') return;
		if (e.key === '/' || (e.key === 'k' && (e.metaKey || e.ctrlKey))) {
			e.preventDefault();
			searchInput?.focus();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<header>
	<div class="corner">
		<a href="/">
			<img src="https://media.eagereyes.org/eagereyes-logo-dark.svg" class="logo" alt="eagereyes" />
		</a>
	</div>

	<nav>
		<ul>
			<li aria-current={page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={page.url.pathname.startsWith('/blog') || page.url.pathname.startsWith('/tag') ? 'page' : undefined}>
				<a href="/blog/">Blog</a>
			</li>
			<li aria-current={page.url.pathname.startsWith('/video') ? 'page' : undefined}>
				<a href="/video/">Videos</a>
			</li>
			<li aria-current={page.url.pathname.startsWith('/publications') ? 'page' : undefined}>
				<a href="/publications/">Papers</a>
			</li>
			<li aria-current={page.url.pathname.startsWith('/about') ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li class="dropdown" aria-current={page.url.pathname.startsWith('/app') ? 'page' : undefined}>
				<button class="dropdown-toggle" aria-haspopup="true">Apps ▾</button>
				<ul class="dropdown-menu">
					<li><a href="/app/zipscribble-map">ZIPScribble Map</a></li>
				</ul>
			</li>
		</ul>
	</nav>

	<div class="corner search-corner">
		<form action="/search/" method="get">
			<input type="search" name="q" placeholder="Search… ({shortcutHint})" aria-label="Search" bind:this={searchInput} />
		</form>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 64rem;
		width: 100%;
		margin: 0 auto;
		padding: 0.75rem 1rem;
		box-sizing: border-box;
	}

	.corner {
		width: 10em;
	}

	.corner a {
		display: flex;
		align-items: center;
	}

	.corner img.logo {
		width: 100%;
		padding-left: 1em;
	}

	.search-corner {
		width: 10em;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	.search-corner form {
		width: 100%;
	}

	.search-corner input[type='search'] {
		width: 100%;
		box-sizing: border-box;
		padding: 0.3rem 0.6rem;
		font-size: 0.8rem;
		border: 1px solid var(--color-border);
		border-radius: 6px;
		background: transparent;
		color: var(--color-text);
		transition: border-color 0.2s;
	}

	.search-corner input[type='search']:focus {
		outline: none;
		border-color: var(--color-theme-1);
	}

	nav {
		display: flex;
		justify-content: center;
	}

	ul {
		padding: 0;
		margin: 0;
		display: flex;
		align-items: center;
		gap: 0.25rem;
		list-style: none;
	}

	li {
		display: flex;
	}

	nav a {
		display: flex;
		align-items: center;
		padding: 0.35rem 0.6rem;
		color: var(--color-text);
		font-weight: 600;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		text-decoration: none;
		border-radius: 5px;
		transition: color 0.15s, background-color 0.15s;
	}

	nav a:hover {
		color: var(--color-theme-1);
		background-color: color-mix(in srgb, var(--color-theme-1) 8%, transparent);
	}

	li[aria-current='page'] a {
		color: var(--color-theme-1);
		background-color: color-mix(in srgb, var(--color-theme-1) 12%, transparent);
	}

	li.dropdown {
		position: relative;
	}

	.dropdown-toggle {
		display: flex;
		align-items: center;
		padding: 0.35rem 0.6rem;
		color: var(--color-text);
		font-weight: 600;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		background: none;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		transition: color 0.15s, background-color 0.15s;
	}

	.dropdown-toggle:hover,
	li.dropdown[aria-current='page'] .dropdown-toggle {
		color: var(--color-theme-1);
		background-color: color-mix(in srgb, var(--color-theme-1) 8%, transparent);
	}

	li.dropdown[aria-current='page'] .dropdown-toggle {
		background-color: color-mix(in srgb, var(--color-theme-1) 12%, transparent);
	}

	.dropdown-menu {
		display: none;
		position: absolute;
		top: 100%;
		right: 0;
		background: var(--color-bg-1);
		border: 1px solid var(--color-border);
		border-radius: 6px;
		padding: 0.25rem 0;
		min-width: 10rem;
		list-style: none;
		margin: 0.25rem 0 0;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		z-index: 100;
	}

	li.dropdown:hover .dropdown-menu,
	li.dropdown:focus-within .dropdown-menu {
		display: block;
	}

	.dropdown-menu li a {
		display: block;
		padding: 0.4rem 0.8rem;
		font-size: 0.8rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		border-radius: 0;
	}

	@media (max-width: 600px) {
		header {
			flex-direction: column;
			align-items: stretch;
			gap: 0.5rem;
			padding: 0.75rem 1rem 0.5rem;
		}

		.corner {
			width: auto;
			display: flex;
			justify-content: center;
		}

		.corner img.logo {
			padding-left: 0;
			width: 10em;
		}

		ul {
			justify-content: center;
			flex-wrap: wrap;
		}

		.search-corner {
			width: auto;
			justify-content: center;
		}
	}
</style>
