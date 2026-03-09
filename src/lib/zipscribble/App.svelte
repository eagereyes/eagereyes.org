<script>
// @ts-nocheck
	import { csv, json } from 'd3-fetch';
	import { geoAlbers } from 'd3-geo';
	import { feature } from 'topojson-client';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	import ZIPScribble from './ZIPScribble.svelte';
	import Navigator from './Navigator.svelte';
	import Title from './Title.svelte';
	import CountryScribble from './CountryScribble.svelte';

	let { country = 'US', zoomEnabled = true, showBaseMap = true } = $props();

	const ZIPSFILENAME = `${base}/zipscribble-data/us-lower48.csv`;
	const STATESFILENAME = `${base}/zipscribble-data/us-states-20m.json`;
	const PROJECTION = geoAlbers();

	let SVGWIDTH = $state(800);
	let SVGHEIGHT = $state(600);
	const TITLEHEIGHT = 50;

	const STATECODES = ['', 'AL', 'AK', '', 'AZ', 'AR', 'CA', '', 'CO', 'CT',
						'DE', 'DC', 'FL', 'GA', '', 'HI', 'ID', 'IL', 'IN', 'IA',
						'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO',
						'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH',
						'OK', 'OR', 'PA', '', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
						'VT', 'VA', '', 'WA', 'WV', 'WI', 'WY'];

	let zipCodes = $state(null);
	let places = $state([]);
	let digits = $state([...Array(10)].map(d => {
					return {
						startOffset:	0,
						endOffset:		0,
						states:			[],
						secondDigits:	[...Array(10)].map(d => {
											return {
												startOffset:	0,
												endOffset:		0,
											}})
					}}));

	let states = $state([]);
	let countryGeoData = $state(null);
	let worldGeoData = $state(null);

	let zoomRange = $state([]);
	let highlightRange = $state([]);

	let title = $state('');
	let subtitle = $state('');

	$effect(() => {
		const c = country;
		zipCodes = null;
		states = [];
		countryGeoData = null;
		zoomRange = [];
		highlightRange = [];
		title = '';
		subtitle = '';
		if (c === 'US') {
			csv(ZIPSFILENAME).then(zips => {

				for (let z of zips) {
					const p = PROJECTION([z.lon, z.lat]);
					z.lon_proj = p[0];
					z.lat_proj = p[1];
				}

				let currentDigit = 0;
				let currentSecondDig = 0;
				let prevState = '';
				for (let rowNum = 0; rowNum < zips.length; rowNum += 1) {
					let z = zips[rowNum];
					if (Math.floor(z.zip/10000) > currentDigit) {
						digits[currentDigit].states[digits[currentDigit].states.length-1].endOffset = rowNum;
						digits[currentDigit].endOffset = rowNum;
						digits[currentDigit].secondDigits[currentSecondDig].endOffset = rowNum;
						currentDigit = Math.floor(z.zip/10000);
						digits[currentDigit].startOffset = rowNum;
						digits[currentDigit].secondDigits[0].startOffset = rowNum;
						currentSecondDig = 0;
					}
					if (Math.floor(z.zip/1000)-currentDigit*10 > currentSecondDig) {
						digits[currentDigit].secondDigits[currentSecondDig].endOffset = rowNum;
						currentSecondDig = Math.floor(z.zip/1000)-currentDigit*10;
						digits[currentDigit].secondDigits[currentSecondDig].startOffset = rowNum;
					}
					if (z.state !== prevState) {
						if (digits[currentDigit].states.length > 0) {
							digits[currentDigit].states[digits[currentDigit].states.length-1].endOffset = rowNum;
						}
						digits[currentDigit].states.push({
							state:			z.state,
							startOffset:	rowNum,
							endOffset:		rowNum
						});
						prevState = z.state;
					}
				}

				digits[9].endOffset = zips.length;
				digits[9].secondDigits[9].endOffset = zips.length;
				digits[9].states[digits[9].states.length-1].endOffset = zips.length;

				// remove (spurious?) extremely short runs of ZIPs and stitch states back together
				for (let d of digits) {
					d.states = d.states.filter(s => s.endOffset-s.startOffset > 2);
					let s = d.states[0];
					let i = 0;
					let newStates = [];
					do {
						while (i < d.states.length-1 && d.states[i+1].state === s.state) {
							i += 1;
							s.endOffset = d.states[i].endOffset;
						}
						newStates.push(s);
						i += 1;
						if (i < d.states.length) {
							s = d.states[i];
						}
					} while (i < d.states.length);
					d.states = newStates;
				}

				zipCodes = zips;

				let placeHash = {};

				for (let z of zips) {
					const p = `${z.place}, ${z.state}`;
					if (p in placeHash) {
						placeHash[p].zips += 1;
					} else {
						placeHash[p] = {
							name: p,
							firstZIP: z.zip,
							zips: 1
						}
					}
				}

				places = Object.values(placeHash);

				places.sort((a, b) => b.zips - a.zips);
			});

			json(STATESFILENAME).then(statesGeoJSON => {
				states = statesGeoJSON.features
					.filter(s => !['02', '15', '72'].includes(s.properties.STATE))
					.map(s => {
						let geo;
						if (s.geometry.type === 'Polygon')
							geo = [s.geometry.coordinates[0].map(coord => PROJECTION([coord[0], coord[1]]))];
						else
							geo = s.geometry.coordinates.map(p => p[0].map(coord => PROJECTION([coord[0], coord[1]])));
						return {
							'state': STATECODES[+s.properties.STATE],
							'geo': geo.map(a => a.map(p => { return {
								'lat_proj': p[1],
								'lon_proj': p[0]
								}}))
						}
					});
			});
		} else {
			json(`${base}/zipscribble-data/zipscribble_${c}.json`)
				.then(data => countryGeoData = data);
			if (!worldGeoData) {
				json(`${base}/zipscribble-data/world-50m.json`)
					.then(topo => worldGeoData = feature(topo, topo.objects.countries));
			}
		}
	});

	let svgElement = $state();

	onMount(() => {
		const observer = new ResizeObserver(() => resized());
		if (svgElement) observer.observe(svgElement);
	});

	function resized() {
		if (svgElement) {
			const rect = svgElement.getBoundingClientRect();
			SVGWIDTH = rect.width;
			SVGHEIGHT = rect.height;
		}
	}

</script>

<main>
	<svg width="100%" height="100%" bind:this={svgElement}>
		{#if country === 'US' && zipCodes}
			<ZIPScribble width={SVGWIDTH} height={SVGHEIGHT-60-TITLEHEIGHT} y={TITLEHEIGHT}
				{zipCodes} {states}
				{zoomRange} {highlightRange} {zoomEnabled} {showBaseMap} />
			<Title width={SVGWIDTH} height={TITLEHEIGHT}
				{title} {subtitle} />
			<Navigator y={SVGHEIGHT-60} width={SVGWIDTH}
				{digits} zips={zipCodes}
				bind:zoomRange={zoomRange} bind:highlightRange={highlightRange}
				bind:title={title} bind:subtitle={subtitle}
				/>
		{:else if country !== 'US' && countryGeoData}
			<CountryScribble geoData={countryGeoData} worldData={worldGeoData} width={SVGWIDTH} height={SVGHEIGHT} {showBaseMap} />
		{/if}
	</svg>
</main>

<style>
	main {
		margin: 0;
		width: 100%;
		height: 100%;
	}

	svg {
		background-color: white;
	}

	@media (prefers-color-scheme: dark) {
		svg {
			background-color: #111;
		}
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
