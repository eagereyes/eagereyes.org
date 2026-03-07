<script lang="ts">
	import { page } from '$app/state';
</script>

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
		</ul>
	</nav>

	<div class="corner search-corner">
		<form action="/search/" method="get">
			<input type="search" name="q" placeholder="Search…" aria-label="Search" />
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
