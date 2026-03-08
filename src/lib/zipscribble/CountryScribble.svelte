<script>
// @ts-nocheck
	import { geoMercator, geoPath } from 'd3-geo';

	let { geoData, worldData = null, width, height } = $props();

	const PADDING = 24;

	let projection = $derived.by(() => {
		if (!geoData || width <= 0 || height <= 0) return null;
		return geoMercator().fitExtent(
			[[PADDING, PADDING], [width - PADDING, height - PADDING]],
			geoData
		);
	});

	let basePaths = $derived.by(() => {
		if (!projection || !worldData) return [];
		const pathGen = geoPath(projection);
		return worldData.features.map(f => pathGen(f)).filter(Boolean);
	});

	let scribblePaths = $derived.by(() => {
		if (!projection) return [];
		const pathGen = geoPath(projection);
		if (geoData.type === 'FeatureCollection') {
			return geoData.features.map(f => pathGen(f));
		} else {
			return [pathGen(geoData)];
		}
	});
</script>

{#if scribblePaths.length > 0}
<g>
	{#each basePaths as d}
		<path {d} class="country" />
	{/each}
	{#each scribblePaths as d}
		<path {d} class="scribble" />
	{/each}
</g>
{/if}

<style>
	path.country {
		fill: #eee;
		stroke: white;
		stroke-width: 0.5px;
	}

	path.scribble {
		stroke: #333;
		stroke-width: 0.5px;
		stroke-linejoin: miter;
		fill: none;
	}

	@media (prefers-color-scheme: dark) {
		path.country {
			fill: #444;
			stroke: #333;
		}

		path.scribble {
			stroke: lightgray;
		}
	}
</style>
