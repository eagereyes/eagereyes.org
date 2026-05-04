<script lang="ts">
	import SolargraphCanvas from '$lib/solargraph/SolargraphCanvas.svelte';
	import { getDateRange } from '$lib/solargraph/solstice.js';

	// Copied from scripts/solargraph/config.json — update here when adding new cities/periods
	const CITIES: { name: string; label: string; lat: number; lon: number }[] = [
		{ name: 'atlanta',     label: 'Atlanta, GA',      lat:  33.75, lon:  -84.39 },
		{ name: 'austin',      label: 'Austin, TX',       lat:  30.27, lon:  -97.74 },
		{ name: 'chicago',     label: 'Chicago, IL',      lat:  41.85, lon:  -87.65 },
		{ name: 'denver',      label: 'Denver, CO',       lat:  39.74, lon: -104.98 },
		{ name: 'forks',       label: 'Forks, WA',        lat:  47.94, lon: -124.39 },
		{ name: 'los-angeles', label: 'Los Angeles, CA',  lat:  34.05, lon: -118.24 },
		{ name: 'miami',       label: 'Miami, FL',        lat:  25.77, lon:  -80.19 },
		{ name: 'minneapolis', label: 'Minneapolis, MN',  lat:  44.98, lon:  -93.27 },
		{ name: 'new-york',    label: 'New York, NY',     lat:  40.71, lon:  -74.01 },
		{ name: 'phoenix',     label: 'Phoenix, AZ',      lat:  33.45, lon: -112.07 },
		{ name: 'portland',    label: 'Portland, OR',     lat:  45.52, lon: -122.68 },
		{ name: 'seattle',     label: 'Seattle, WA',      lat:  47.60, lon: -122.30 },
	];

	const PERIODS = [
		'summer2020', 'winter2020',
		'summer2021', 'winter2021',
		'summer2022', 'winter2022',
		'summer2023', 'winter2023',
		'summer2024',
	];

	const fmt = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

	let city          = $state('seattle');
	const selectedCity = $derived(CITIES.find(c => c.name === city) ?? CITIES[11]);
	let period        = $state('summer2024');
	let splatScalePct = $state(100);
	let exposureEV    = $state(0);

	// Playback — 60 processed quads ≈ 1 daylight hour (1-min interpolation)
	const QUADS_PER_HOUR = 60;
	let totalInstances = $state(0);
	let playHour       = $state(0);
	let isPlaying      = $state(false);
	let rafHandle: number | null = null;

	const totalHours   = $derived(Math.ceil(totalInstances / QUADS_PER_HOUR));
	const maxInstances = $derived(playHour >= totalHours ? Infinity : playHour * QUADS_PER_HOUR);

	function onSplatsLoaded(total: number) {
		totalInstances = total;
		playHour = 0;
		startPlay();
	}

	function stopPlay() {
		if (rafHandle !== null) { cancelAnimationFrame(rafHandle); rafHandle = null; }
		isPlaying = false;
	}

	function startPlay() {
		stopPlay();
		isPlaying = true;
		// Reset to beginning only if already at the end
		if (playHour >= totalHours) playHour = 0;
		const startHour = playHour;
		const remainingFraction = 1 - startHour / totalHours;
		const startTime = performance.now();
		function tick(now: number) {
			const t = Math.min((now - startTime) / (5000 * remainingFraction), 1);
			playHour = Math.round(startHour + t * (totalHours - startHour));
			if (t < 1) {
				rafHandle = requestAnimationFrame(tick);
			} else {
				isPlaying = false;
				rafHandle = null;
			}
		}
		rafHandle = requestAnimationFrame(tick);
	}

	// Reset playback when city or period changes
	$effect(() => {
		city; period;
		stopPlay();
		totalInstances = 0;
		playHour = 0;
	});

	function parsePeriod(p: string): { year: number; season: 'summer' | 'winter' } {
		const season = p.startsWith('summer') ? 'summer' : 'winter';
		const year = parseInt(p.replace(/^(summer|winter)/, ''));
		return { year, season };
	}

	function formatPeriod(p: string): string {
		const { year, season } = parsePeriod(p);
		if (season === 'summer') return `Summer/Fall ${year}`;
		return `Winter/Spring ${year}–${String(year + 1).slice(2)}`;
	}

	const rangeLabel = $derived.by(() => {
		const { year, season } = parsePeriod(period);
		const { start, end } = getDateRange(year, season);
		return `${fmt.format(start)} → ${fmt.format(end)}`;
	});
</script>

<svelte:head>
	<title>Solargraph — eagereyes</title>
	<meta name="description" content="Simulated solargraph showing the sun's path across the sky over a half-year period" />
</svelte:head>

<h1>Solargraph</h1>

<div class="solargraph-page">
	<div class="toolbar">
		<div class="toolbar-left">
			<select bind:value={city} aria-label="Select city">
				{#each CITIES as c}
					<option value={c.name}>{c.label}</option>
				{/each}
			</select>
			<select bind:value={period} aria-label="Select period">
				{#each PERIODS as p}
					<option value={p}>{formatPeriod(p)}</option>
				{/each}
			</select>
			<select bind:value={splatScalePct} aria-label="Splat size">
				{#each [50, 100, 150, 200] as pct}
					<option value={pct}>Size {pct}%</option>
				{/each}
			</select>
			<select bind:value={exposureEV} aria-label="Exposure">
				{#each [-2, -1, 0, 1, 2] as ev}
					<option value={ev}>{ev > 0 ? '+' : ''}{ev} EV</option>
				{/each}
			</select>
		</div>
		<span class="range-label">{rangeLabel}</span>
	</div>
	<div class="canvas-container">
		<SolargraphCanvas {period} {city} lat={selectedCity.lat} lon={selectedCity.lon}
			splatScale={splatScalePct / 200} exposureScale={Math.pow(2, exposureEV)}
			{maxInstances} onsplatsloaded={onSplatsLoaded} />
	</div>
	<div class="playback">
		<button onclick={isPlaying ? stopPlay : startPlay} disabled={totalInstances === 0}
			aria-label={isPlaying ? 'Stop' : 'Play'}>
			{isPlaying ? '⏹' : '▶'}
		</button>
		<input type="range" min="0" max={totalHours} step="1" bind:value={playHour}
			disabled={totalInstances === 0} />
	</div>
	<p class="attribution">Solar irradiance data from the <a href="https://nsrdb.nrel.gov/" target="_blank" rel="noopener">NREL National Solar Radiation Database (NSRDB)</a></p>
</div>

<style>
	.solargraph-page {
		display: flex;
		flex-direction: column;
		min-height: calc(100vh - 80px);
	}

	.toolbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem 1rem;
	}

	.toolbar-left {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.range-label {
		font-size: 0.85rem;
		opacity: 0.5;
	}

	.attribution {
		font-size: 0.75rem;
		opacity: 0.45;
		margin: 0;
		padding: 0.25rem 1rem 0;
	}

	.playback {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.4rem 1rem;
	}

	.playback input[type='range'] {
		flex: 1;
	}

	.playback button {
		padding: 0.2rem 0.6rem;
		font-size: 0.85rem;
		border: 1px solid var(--color-border);
		border-radius: 5px;
		background: transparent;
		color: var(--color-text);
		cursor: pointer;
	}

	.playback button:disabled {
		opacity: 0.35;
		cursor: default;
	}

	.canvas-container {
		width: 100%;
	}

	select {
		padding: 0.3rem 0.5rem;
		font-size: 0.85rem;
		border: 1px solid var(--color-border);
		border-radius: 5px;
		background: transparent;
		color: var(--color-text);
		cursor: pointer;
	}


</style>
