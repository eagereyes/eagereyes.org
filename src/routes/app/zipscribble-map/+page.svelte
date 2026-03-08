<script>
	import App from '$lib/zipscribble/App.svelte';

	const COUNTRIES = [
		{ code: 'US', name: 'United States' },
		{ code: 'AR', name: 'Argentina' },
		{ code: 'AT', name: 'Austria' },
		{ code: 'AU', name: 'Australia' },
		{ code: 'BE', name: 'Belgium' },
		{ code: 'BG', name: 'Bulgaria' },
		{ code: 'BR', name: 'Brazil' },
		{ code: 'CA', name: 'Canada' },
		{ code: 'CH', name: 'Switzerland' },
		{ code: 'CZ', name: 'Czech Republic' },
		{ code: 'DE', name: 'Germany' },
		{ code: 'DK', name: 'Denmark' },
		{ code: 'ES', name: 'Spain' },
		{ code: 'FI', name: 'Finland' },
		{ code: 'FR', name: 'France' },
		{ code: 'GB', name: 'United Kingdom' },
		{ code: 'GL', name: 'Greenland' },
		{ code: 'HR', name: 'Croatia' },
		{ code: 'HU', name: 'Hungary' },
		{ code: 'IN', name: 'India' },
		{ code: 'IS', name: 'Iceland' },
		{ code: 'IT', name: 'Italy' },
		{ code: 'JP', name: 'Japan' },
		{ code: 'LT', name: 'Lithuania' },
		{ code: 'MX', name: 'Mexico' },
		{ code: 'NL', name: 'Netherlands' },
		{ code: 'NO', name: 'Norway' },
		{ code: 'NZ', name: 'New Zealand' },
		{ code: 'PH', name: 'Philippines' },
		{ code: 'PK', name: 'Pakistan' },
		{ code: 'PL', name: 'Poland' },
		{ code: 'PT', name: 'Portugal' },
		{ code: 'RU', name: 'Russia' },
		{ code: 'SE', name: 'Sweden' },
		{ code: 'SI', name: 'Slovenia' },
		{ code: 'SK', name: 'Slovakia' },
		{ code: 'TH', name: 'Thailand' },
		{ code: 'ZA', name: 'South Africa' },
	];

	let country = $state('US');
	let container = $state();

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

<h1>The ZIPScribble Map</h1>
{#if country === 'US'}
<p>Mouse over the navigator on the bottom to show individual states and numerical ZIP code ranges.</p>
{:else}
<p>Select a country from the dropdown to see its postal code scribble.</p>
{/if}

<div class="zipscribble-page">
	<div class="toolbar">
		<select bind:value={country} aria-label="Select country">
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
