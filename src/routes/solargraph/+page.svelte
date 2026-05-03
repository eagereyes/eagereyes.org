<script lang="ts">
	import SolargraphCanvas from '$lib/solargraph/SolargraphCanvas.svelte';
	import { getDateRange } from '$lib/solargraph/solstice.js';

	const YEARS = Array.from({ length: 11 }, (_, i) => 2016 + i);
	const fmt = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

	let year = $state(2026);
	let season = $state<'summer' | 'winter'>('summer');
	let splatScalePct = $state(100); // 50–200%

	const rangeLabel = $derived.by(() => {
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
			<select bind:value={year} aria-label="Select year">
				{#each YEARS as y}
					<option value={y}>{y}</option>
				{/each}
			</select>
			<div class="season-toggle">
				<button onclick={() => season = 'summer'} class:active={season === 'summer'}>Summer</button>
				<button onclick={() => season = 'winter'} class:active={season === 'winter'}>Winter</button>
			</div>
			<label class="splat-size">
				<span>Size {splatScalePct}%</span>
				<input type="range" min="50" max="200" step="5" bind:value={splatScalePct} />
			</label>
		</div>
		<span class="range-label">{rangeLabel}</span>
	</div>
	<div class="canvas-container">
		<SolargraphCanvas {year} {season} splatScale={splatScalePct / 100} />
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

	.season-toggle {
		display: flex;
		gap: 0;
	}

	.season-toggle button:first-child {
		border-radius: 5px 0 0 5px;
	}

	.season-toggle button:last-child {
		border-radius: 0 5px 5px 0;
		border-left: none;
	}

	.splat-size {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.85rem;
		color: var(--color-text);
	}

	.splat-size span {
		min-width: 5.5ch;
	}

	.range-label {
		font-size: 0.85rem;
		opacity: 0.5;
	}

	.canvas-container {
		flex: 1;
		min-height: 0;
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

	button {
		padding: 0.3rem 0.7rem;
		font-size: 0.85rem;
		border: 1px solid var(--color-border);
		background: transparent;
		color: var(--color-text);
		cursor: pointer;
		transition: background-color 0.15s, color 0.15s;
	}

	button:hover {
		background-color: color-mix(in srgb, var(--color-theme-1) 10%, transparent);
		color: var(--color-theme-1);
		border-color: var(--color-theme-1);
	}

	button.active {
		background-color: color-mix(in srgb, var(--color-theme-1) 15%, transparent);
		color: var(--color-theme-1);
		border-color: var(--color-theme-1);
	}
</style>
