<script>
	import App from '$lib/zipscribble/App.svelte';

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
	<meta name="description" content="Interactive US ZIP code scribble map" />
	<meta property="og:title" content="The ZIPScribble Map – eagereyes" />
	<meta property="og:description" content="What happens if you draw a line through every ZIP/postal code?" />
	<meta property="og:image" content="https://media.eagereyes.org/media/og-images/zipscribble-og.png" />
</svelte:head>

<h1>The ZIPScribble Map</h1>
<p>Mouse over the navigator on the  bottom to show individual states and numerical ZIP code ranges. </p>

<div class="zipscribble-page">
	<div class="toolbar">
		<button onclick={toggleFullscreen}>&#x26F6; Fullscreen</button>
	</div>
	<div class="map-container" bind:this={container}>
		<App />
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
		justify-content: flex-end;
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
</style>
