<script>
	import { onMount } from 'svelte';
	import App from '$lib/zipscribble/App.svelte';

	const COUNTRIES = [
		{ code: 'US', name: 'United States' },
		{ code: 'AR', name: 'Argentina' },
		{ code: 'AU', name: 'Australia' },
		{ code: 'AT', name: 'Austria' },
		{ code: 'BE', name: 'Belgium' },
		{ code: 'BR', name: 'Brazil' },
		{ code: 'BG', name: 'Bulgaria' },
		{ code: 'CA', name: 'Canada' },
		{ code: 'HR', name: 'Croatia' },
		{ code: 'CZ', name: 'Czech Republic' },
		{ code: 'DK', name: 'Denmark' },
		{ code: 'FI', name: 'Finland' },
		{ code: 'FR', name: 'France' },
		{ code: 'DE', name: 'Germany' },
		{ code: 'GL', name: 'Greenland' },
		{ code: 'HU', name: 'Hungary' },
		{ code: 'IS', name: 'Iceland' },
		{ code: 'IN', name: 'India' },
		{ code: 'IT', name: 'Italy' },
		{ code: 'JP', name: 'Japan' },
		{ code: 'LT', name: 'Lithuania' },
		{ code: 'MX', name: 'Mexico' },
		{ code: 'NL', name: 'Netherlands' },
		{ code: 'NZ', name: 'New Zealand' },
		{ code: 'NO', name: 'Norway' },
		{ code: 'PK', name: 'Pakistan' },
		{ code: 'PH', name: 'Philippines' },
		{ code: 'PL', name: 'Poland' },
		{ code: 'PT', name: 'Portugal' },
		{ code: 'RU', name: 'Russia' },
		{ code: 'SK', name: 'Slovakia' },
		{ code: 'SI', name: 'Slovenia' },
		{ code: 'ZA', name: 'South Africa' },
		{ code: 'ES', name: 'Spain' },
		{ code: 'SE', name: 'Sweden' },
		{ code: 'CH', name: 'Switzerland' },
		{ code: 'TH', name: 'Thailand' },
		{ code: 'GB', name: 'United Kingdom' },
	];

	const VALID_CODES = new Set(COUNTRIES.map(c => c.code));

	function countryFromHash() {
		const code = window.location.hash.slice(1).toUpperCase();
		return VALID_CODES.has(code) ? code : 'US';
	}

	let country = $state('US');
	let container = $state();

	onMount(() => {
		country = countryFromHash();
		const onHashChange = () => { country = countryFromHash(); };
		window.addEventListener('hashchange', onHashChange);
		return () => window.removeEventListener('hashchange', onHashChange);
	});

	function setCountry(code) {
		country = code;
		if (code === 'US') {
			history.replaceState(null, '', window.location.pathname);
		} else {
			history.replaceState(null, '', `#${code}`);
		}
	}

	function toggleFullscreen() {
		if (!document.fullscreenElement) {
			container.requestFullscreen();
		} else {
			document.exitFullscreen();
		}
	}
</script>

<svelte:head>
	<title>The ZIPScribble Map</title>
	<meta name="description" content="Interactive postal code scribble map" />
	<meta property="og:title" content="The ZIPScribble Map – eagereyes" />
	<meta property="og:description" content="What happens if you draw a line through every ZIP/postal code?" />
	<meta property="og:image" content="https://media.eagereyes.org/media/og-images/zipscribble-og.png" />
</svelte:head>

<h1>The ZIPScribble Map <a href="/app/zipscribble-map/about" class="about-link">About</a></h1>
{#if country === 'US'}
<p>Mouse over the navigator on the bottom to show individual states and numerical ZIP code ranges.</p>
{:else}
<p>Select a country from the dropdown to see its postal code scribble.</p>
{/if}

<div class="zipscribble-page">
	<div class="toolbar">
		<select value={country} onchange={e => setCountry(e.currentTarget.value)} aria-label="Select country">
			{#each COUNTRIES as c}
				<option value={c.code}>{c.name}</option>
			{/each}
		</select>
		<button onclick={toggleFullscreen}>&#x26F6; Fullscreen</button>
	</div>
	<div class="map-container" bind:this={container}>
		<App {country} />
	</div>
</div>

<style>
	.zipscribble-page {
		display: flex;
		flex-direction: column;
		height: calc(100vh - 80px);
	}

	.toolbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem 1rem;
	}

	.about-link {
		font-size: 0.4em;
		font-weight: normal;
		color: var(--color-theme-1);
		border: 1px solid var(--color-theme-1);
		border-radius: 1em;
		padding: 0.2em 0.7em;
		vertical-align: middle;
		margin-left: 0.6em;
		text-decoration: none;
		white-space: nowrap;
	}

	.about-link:hover {
		background-color: var(--color-theme-1);
		color: white;
	}

.map-container {
		flex: 1;
		min-height: 0;
	}

	.map-container:fullscreen {
		width: 100vw;
		height: 100vh;
	}

	.toolbar button {
		padding: 0.3rem 0.7rem;
		font-size: 0.85rem;
		border: 1px solid var(--color-border);
		border-radius: 5px;
		background: transparent;
		color: var(--color-text);
		cursor: pointer;
		transition: background-color 0.15s, color 0.15s;
	}

	.toolbar button:hover {
		background-color: color-mix(in srgb, var(--color-theme-1) 10%, transparent);
		color: var(--color-theme-1);
		border-color: var(--color-theme-1);
	}
</style>
