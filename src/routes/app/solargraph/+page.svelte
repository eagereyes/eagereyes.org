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

	const PERIOD_PAIRS = [
		{ key: '2020-21', summer: 'summer2020', winter: 'winter2020' },
		{ key: '2021-22', summer: 'summer2021', winter: 'winter2021' },
		{ key: '2022-23', summer: 'summer2022', winter: 'winter2022' },
		{ key: '2023-24', summer: 'summer2023', winter: 'winter2023' },
	];

	const fmt = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

	let city          = $state('seattle');
	const selectedCity = $derived(CITIES.find(c => c.name === city) ?? CITIES[11]);
	let periodPair    = $state('2023-24');
	let periodType    = $state('full');  // 'full' for year pair, 'summer' or 'winter' for 6-month
	let splatScalePct = $state(100);
	let exposureEV    = $state(0);
	let showAnalemma  = $state(false);

	const selectedPeriodPair = $derived(PERIOD_PAIRS.find(p => p.key === periodPair) ?? PERIOD_PAIRS[PERIOD_PAIRS.length - 1]);

	// Determine which periods to use based on periodType
	// Note: Canvas always loads summerPeriod; winterPeriod is optional for combining.
	// When periodType='winter', we pass winter data as summerPeriod with winterPeriod=null
	const activeSummerPeriod = $derived.by(() => {
		if (periodType === 'winter') return selectedPeriodPair.winter;
		return selectedPeriodPair.summer;
	});
	const activeWinterPeriod = $derived(periodType === 'full' ? selectedPeriodPair.winter : null);

	// Playback — 60 processed quads ≈ 1 daylight hour (1-min interpolation)
	const QUADS_PER_HOUR = 60;
	let totalInstances = $state(0);
	let playHour       = $state(0);
	let isPlaying      = $state(false);
	let rafHandle: number | null = null;
	let shouldAutoplay = false;

	const totalHours   = $derived(Math.ceil(totalInstances / QUADS_PER_HOUR));
	const maxInstances = $derived(playHour >= totalHours ? Infinity : playHour * QUADS_PER_HOUR);

	function onSplatsLoaded(total: number) {
		totalInstances = total;
		if (shouldAutoplay) {
			shouldAutoplay = false;
			playHour = 0;
			startPlay();
		}
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
		city; periodPair;
		stopPlay();
		totalInstances = 0;
		playHour = 0;
		shouldAutoplay = true;
	});

	const rangeLabel = $derived.by(() => {
		const pp = selectedPeriodPair;
		const summerYear = parseInt(pp.summer.slice(6));
		if (periodType === 'full') {
			const summerStart = getDateRange(summerYear, 'summer').start;
			const winterYear = parseInt(pp.winter.slice(6));
			const winterEnd = getDateRange(winterYear, 'winter').end;
			return `${fmt.format(summerStart)} → ${fmt.format(winterEnd)}`;
		} else if (periodType === 'summer') {
			const { start, end } = getDateRange(summerYear, 'summer');
			return `${fmt.format(start)} → ${fmt.format(end)}`;
		} else {
			const winterYear = parseInt(pp.winter.slice(6));
			const { start, end } = getDateRange(winterYear, 'winter');
			return `${fmt.format(start)} → ${fmt.format(end)}`;
		}
	});
</script>

<svelte:head>
	<title>Solargraph — eagereyes</title>
	<meta name="description" content="Simulated solargraph showing the sun's path across the sky over a half-year period" />
</svelte:head>

<h1>Solargraph</h1>

<p>Simulated, interactive solargraph showing the sun's path across the sky from solstice to solstice.</p>

<div class="solargraph-page">
	<div class="toolbar">
		<div class="toolbar-left">
			<select bind:value={city} aria-label="Select city">
				{#each CITIES as c}
					<option value={c.name}>{c.label}</option>
				{/each}
			</select>
			<select bind:value={periodPair} aria-label="Select period">
				{#each PERIOD_PAIRS as pp}
					<option value={pp.key}>{pp.key}</option>
				{/each}
			</select>
			<select bind:value={periodType} aria-label="Select period type" disabled={showAnalemma}>
				<option value="full">Full Year</option>
				<option value="summer">Summer/Fall</option>
				<option value="winter">Winter/Spring</option>
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
			<label class="analemma-toggle">
				<input type="checkbox" bind:checked={showAnalemma} />
				Analemma
			</label>
		</div>
		<span class="range-label">{rangeLabel}</span>
	</div>
	<div class="canvas-container">
		<SolargraphCanvas
			summerPeriod={activeSummerPeriod}
			winterPeriod={activeWinterPeriod}
			{city} lat={selectedCity.lat} lon={selectedCity.lon}
			splatScale={splatScalePct / 200} exposureScale={Math.pow(2, exposureEV)}
			{maxInstances} {showAnalemma} onsplatsloaded={onSplatsLoaded} />
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

	.analemma-toggle {
		display: flex;
		align-items: center;
		gap: 0.4em;
		cursor: pointer;
		font-size: 0.85rem;
	}

	.analemma-toggle input[type='checkbox'] {
		cursor: pointer;
	}

</style>
