<script lang="ts">
	import { page } from '$app/state';
	import github from '$lib/images/github.svg';
</script>

<header>
	<div class="corner">
		<a href="/">
			<img src="https://media.eagereyes.org/eagereyes-logo-dark.svg" class="logo" alt="eagereyes" />
		</a>
	</div>

	<nav>
		<ul>
			<li aria-current={page.url.pathname.startsWith('/blog') ? 'page' : undefined} class="even narrow">
				<a href="/blog/">Blog</a>
			</li>
			<li aria-current={page.url.pathname.startsWith('/video') ? 'page' : undefined} class="odd">
				<a href="/video/">Videos</a>
			</li>
			<li aria-current={page.url.pathname.startsWith('/app') ? 'page' : undefined} class="even narrow">
				<a href="/">Apps</a>
			</li>
			<li aria-current={page.url.pathname.startsWith('/publications') ? 'page' : undefined} class="odd">
				<a href="/publications/">Papers</a>
			</li>
			<li aria-current={page.url.pathname.startsWith('/about') ? 'page' : undefined} class="even">
				<a href="/about/">About</a>
			</li>
		</ul>
	</nav>

	<div class="corner">
		<a href="https://github.com/eagereyes">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		max-width: 64rem;
		width: 100%;
		margin: 0 auto;
	}

	.corner {
		width: 10em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
		margin-left: 1em;
		margin-top: 1em;
	}

	.corner img.logo {
		width: 100%;
		padding-left: 2em;
	}

	nav {
		display: flex;
		justify-content: center;
		/* --background: rgb(232, 232, 232); */
	}

	ul {
		position: relative;
		padding: 0;
		padding-top: 1em;
		margin: 0;
		height: 2em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page'] a {
		color: black;
	}

	li[aria-current='page']::before {
		content: '';
		width: 4em;
		height: 2em;
		left: 50%;
		background: rgb(255, 239, 202);
		transform: translateX(-50%) rotate(-5deg);
		border-radius: 2px;
		position: absolute;
		mix-blend-mode: darken;
		pointer-events: none;
	}

	li[aria-current='page'].narrow::before {
		width: 3.5em;
	}

	@media (prefers-color-scheme: dark) {
		li[aria-current='page']::before {
			background: rgb(171, 120, 0);
			mix-blend-mode: lighten;
		}

		li[aria-current='page'] a {
			color: white;
		}

	}

	li[aria-current='page'].even::before {
		transform: translateX(-50%) rotate(5deg);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
		text-decoration-line: underline;
		text-decoration-style: wavy;
		text-decoration-thickness: from-font;
	}
</style>
