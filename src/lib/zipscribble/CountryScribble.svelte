<script>
// @ts-nocheck
	import { geoMercator, geoPath } from 'd3-geo';

	let { geoData, width, height } = $props();

	let paths = $derived.by(() => {
		if (!geoData || width <= 0 || height <= 0) return [];
		const projection = geoMercator().fitSize([width, height], geoData);
		const pathGen = geoPath(projection);
		if (geoData.type === 'FeatureCollection') {
			return geoData.features.map(f => pathGen(f));
		} else {
			// Plain geometry (e.g. LineString) — render as a single path
			return [pathGen(geoData)];
		}
	});
</script>

{#if paths.length > 0}
<g>
	{#each paths as d}
		<path {d} />
	{/each}
</g>
{/if}

<style>
	path {
		stroke: #333;
		stroke-width: .5px;
		stroke-linejoin: miter;
		fill: none;
	}

	@media (prefers-color-scheme: dark) {
		path {
			stroke: lightgray;
		}
	}
</style>
