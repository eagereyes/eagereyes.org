<script lang="ts">
	import SolargraphCanvas from '$lib/solargraph/SolargraphCanvas.svelte';
	import { getDateRange } from '$lib/solargraph/solstice.js';

	// Copied from scripts/solargraph/config.json — update here when adding new periods
	const PERIODS = [
		'summer2020', 'winter2020',
		'summer2021', 'winter2021',
		'summer2022', 'winter2022',
		'summer2023', 'winter2023',
		'summer2024',
	];

	const fmt = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

	let period        = $state('summer2024');
	let splatScalePct = $state(100);
	let exposureEV    = $state(0);

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
		<SolargraphCanvas {period} splatScale={splatScalePct / 200} exposureScale={Math.pow(2, exposureEV)} />
	</div>
</div>

<style>
	.solargraph-page {
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

	.toolbar-left {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.range-label {
		font-size: 0.85rem;
		opacity: 0.5;
	}

	.canvas-container {
		flex: 1;
		min-height: 0;
		display: flex;
		justify-content: center;
		align-items: center;
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
