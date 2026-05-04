<script lang="ts">
	// @ts-nocheck
	import { untrack } from 'svelte';
	import { solarPosition } from '$lib/solargraph/solarPosition.js';

	let { period, city = 'seattle', lat = 47.6, lon = -122.3, splatScale = 1.0, exposureScale = 1.0, maxInstances = Infinity, onsplatsloaded } = $props();

	// Azimuth projection window: 270° centered on South (180°)
	const AZ_MIN   = 45;   // NE
	const AZ_MAX   = 315;  // NW
	const AZ_RANGE = AZ_MAX - AZ_MIN;

	// Exponential tone-map scale. Physical lum values peak around 0.005–0.01,
	// so scale=200 puts the "half-life" (mapped=0.63) right at the expected peak.
	const TONE_SCALE = 200.0;

	// ── Physical camera model ─────────────────────────────────────────────────
	// (Section 4 of SOLARGRAPH_SPEC.md)

	const SUN_THETA = 0.00925;   // rad, angular diameter of sun
	const LAMBDA    = 5.5e-7;    // m, peak visible wavelength
	const K_LUX     = 120;       // lux per W/m²
	const C_CALIB   = 2.5;       // incident light meter calibration constant
	const MAX_DNI   = 1200;      // W/m², normalization ceiling for GPU data

	// Camera geometry — optimal pinhole for p = 0.10 m can depth
	const P     = 0.10;                         // m, pinhole-to-film distance
	const A     = Math.sqrt(2.44 * LAMBDA * P); // m, optimal aperture diameter

	// Blur radius: quadrature sum of geometric disk, Airy diffraction, penumbra
	const R_GEO   = (P * SUN_THETA) / 2;
	const R_DIFF  = (2.44 * LAMBDA * P) / A;
	const R_TOTAL = 0.5 * Math.sqrt((P * SUN_THETA) ** 2 + R_DIFF ** 2 + A ** 2);

	// E_peak scale factor: maps DNI (W/m²) → lux accumulated per sample
	// E_image = DNI * (a / (p * θ))²;  E_peak = E_image * (r_geo / r_total)²
	// intensity_scale = (a/(p*θ))² * (r_geo/r_total)² * k_lux/C / MAX_DNI
	// Dividing by MAX_DNI keeps per-sample GPU values in a reasonable range.
	const INTENSITY_SCALE =
		(A / (P * SUN_THETA)) ** 2 *
		(R_GEO / R_TOTAL) ** 2 *
		(K_LUX / C_CALIB) /
		MAX_DNI;

	const BASE_URL = '/solargraph-data';

	// Reserve 5% of vertical space above the highest arc
	const TOP_PADDING = 0.05;

	// ── Shaders ───────────────────────────────────────────────────────────────

	// Instanced Gaussian splat.
	// Per-vertex (divisor 0): a_quad — unit quad [-1..1]
	// Per-instance (divisor 1): a_instance — vec4(azNorm, elevNorm, dniNorm, elevLinear)
	//   elevLinear = el_rad (elevation in radians), used for airmass color
	const SPLAT_VERT = `#version 300 es
in vec2 a_quad;
in vec4 a_instance;
uniform vec2 u_canvas;
uniform float u_radius;
out vec2 v_offset_px;
out float v_dni;
out vec3 v_color;
void main() {
    v_offset_px = a_quad * u_radius;
    v_dni = a_instance.z;

    // Horizon reddening: airmass = 1/sin(el), clamped to [1,10]
    float el_rad = a_instance.w;
    float airmass = clamp(1.0 / max(sin(el_rad), 0.001), 1.0, 10.0);
    float t = (airmass - 1.0) / 9.0;
    // Interpolate from white (high sun) to deep orange-red (near horizon)
    v_color = mix(vec3(1.0, 1.0, 1.0), vec3(1.0, 0.5, 0.1), t);

    vec2 center_clip = a_instance.xy * 2.0 - 1.0;
    vec2 offset_clip = v_offset_px / (u_canvas * 0.5);
    gl_Position = vec4(center_clip + offset_clip, 0.0, 1.0);
}`;

	const SPLAT_FRAG = `#version 300 es
precision highp float;
in vec2 v_offset_px;
in float v_dni;
in vec3 v_color;
uniform float u_sigma;
uniform float u_intensity_scale;
out vec4 outValue;
void main() {
    float r2 = dot(v_offset_px, v_offset_px);
    float energy = u_intensity_scale * v_dni * exp(-r2 / (2.0 * u_sigma * u_sigma));
    outValue = vec4(v_color * energy, 0.0);
}`;

	const QUAD_VERT = `#version 300 es
in vec2 a_pos;
out vec2 v_uv;
void main() {
    v_uv = a_pos * 0.5 + 0.5;
    gl_Position = vec4(a_pos, 0.0, 1.0);
}`;

	// Tone map using R as luminance (R ≥ G ≥ B always, since color mixes preserve this).
	// Color ratios G/R and B/R are preserved through the tone-map curve.
	const TONEMAP_FRAG = `#version 300 es
precision highp float;
uniform sampler2D u_accum;
uniform float u_scale;
in vec2 v_uv;
out vec4 outColor;
void main() {
    vec3 accum = texture(u_accum, v_uv).rgb;
    float lum = accum.r;
    if (lum <= 0.0) {
        outColor = vec4(0.0, 0.0, 0.0, 0.0);
        return;
    }
    // Exponential tone-map: reaches display-white for physically-small lum values.
    // Log curve would need lum≈1 to reach output 1.0, but actual peaks are ~0.005–0.01.
    float mapped = 1.0 - exp(-lum * u_scale);
    float bright = pow(max(mapped, 0.0), 1.0 / 2.2);
    // Premultiplied alpha: rgb already scaled by bright, alpha=bright.
    // Browser composites: canvas_rgb + bg * (1 - bright), so dim areas
    // blend with the CSS dark blue background instead of appearing black.
    outColor = vec4(bright, bright * accum.g / lum, bright * accum.b / lum, bright);
}`;

	// ── WebGL init ────────────────────────────────────────────────────────────

	function compileShader(gl, type, src) {
		const shader = gl.createShader(type);
		gl.shaderSource(shader, src);
		gl.compileShader(shader);
		if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
			throw new Error(`Shader error: ${gl.getShaderInfoLog(shader)}`);
		return shader;
	}

	function createProgram(gl, vertSrc, fragSrc) {
		const prog = gl.createProgram();
		gl.attachShader(prog, compileShader(gl, gl.VERTEX_SHADER, vertSrc));
		gl.attachShader(prog, compileShader(gl, gl.FRAGMENT_SHADER, fragSrc));
		gl.linkProgram(prog);
		if (!gl.getProgramParameter(prog, gl.LINK_STATUS))
			throw new Error(`Link error: ${gl.getProgramInfoLog(prog)}`);
		return prog;
	}

	function initGL(canvas) {
		const gl = canvas.getContext('webgl2', { antialias: false, premultipliedAlpha: true });
		if (!gl) throw new Error('WebGL2 not available');

		try { gl.drawingBufferColorSpace = 'display-p3'; } catch (_) {}

		if (!gl.getExtension('EXT_color_buffer_float'))
			throw new Error('EXT_color_buffer_float not supported');

		const quadVBO = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, quadVBO);
		gl.bufferData(gl.ARRAY_BUFFER,
			new Float32Array([-1,-1, 1,-1, -1,1, 1,-1, 1,1, -1,1]),
			gl.STATIC_DRAW);

		// Splat program + instanced VAO
		// a_quad (vec2, divisor 0) + a_instance (vec4, divisor 1)
		const splatProg   = createProgram(gl, SPLAT_VERT, SPLAT_FRAG);
		const instanceVBO = gl.createBuffer();
		const splatVAO    = gl.createVertexArray();
		gl.bindVertexArray(splatVAO);
		gl.bindBuffer(gl.ARRAY_BUFFER, quadVBO);
		const quadLoc = gl.getAttribLocation(splatProg, 'a_quad');
		gl.enableVertexAttribArray(quadLoc);
		gl.vertexAttribPointer(quadLoc, 2, gl.FLOAT, false, 0, 0);
		gl.vertexAttribDivisor(quadLoc, 0);
		gl.bindBuffer(gl.ARRAY_BUFFER, instanceVBO);
		const instLoc = gl.getAttribLocation(splatProg, 'a_instance');
		gl.enableVertexAttribArray(instLoc);
		gl.vertexAttribPointer(instLoc, 4, gl.FLOAT, false, 0, 0);
		gl.vertexAttribDivisor(instLoc, 1);
		gl.bindVertexArray(null);

		const tmProg  = createProgram(gl, QUAD_VERT, TONEMAP_FRAG);
		const quadVAO = gl.createVertexArray();
		gl.bindVertexArray(quadVAO);
		gl.bindBuffer(gl.ARRAY_BUFFER, quadVBO);
		gl.enableVertexAttribArray(gl.getAttribLocation(tmProg, 'a_pos'));
		gl.vertexAttribPointer(gl.getAttribLocation(tmProg, 'a_pos'), 2, gl.FLOAT, false, 0, 0);
		gl.bindVertexArray(null);

		const accumTex = gl.createTexture();
		const fbo      = gl.createFramebuffer();

		return {
			gl, splatProg, tmProg, instanceVBO, splatVAO, quadVAO, accumTex, fbo,
			uCanvas:         gl.getUniformLocation(splatProg, 'u_canvas'),
			uRadius:         gl.getUniformLocation(splatProg, 'u_radius'),
			uSigma:          gl.getUniformLocation(splatProg, 'u_sigma'),
			uIntensityScale: gl.getUniformLocation(splatProg, 'u_intensity_scale'),
			uAccum:          gl.getUniformLocation(tmProg,    'u_accum'),
			uScale:          gl.getUniformLocation(tmProg,    'u_scale'),
			texW: 0, texH: 0,
		};
	}

	function resizeAccumTexture(state, w, h) {
		if (state.texW === w && state.texH === h) return;
		const { gl, accumTex, fbo } = state;
		gl.bindTexture(gl.TEXTURE_2D, accumTex);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, w, h, 0, gl.RGBA, gl.FLOAT, null);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
		gl.bindTexture(gl.TEXTURE_2D, null);
		gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
		gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, accumTex, 0);
		gl.bindFramebuffer(gl.FRAMEBUFFER, null);
		state.texW = w;
		state.texH = h;
	}

	// ── Binary data loading ───────────────────────────────────────────────────

	function binUrl(p: string): string {
		return `${BASE_URL}/${city}_${p}.bin`;
	}

	// 5-minute NSRDB data: minimum sub-steps per interval (= 1 min resolution).
	const STEPS_PER_INTERVAL = 5;
	// Treat consecutive samples as a gap when sky angular separation exceeds this.
	// Max real sun movement in 5 min ≈ 1.25°; 4° catches day-boundary and cloud gaps.
	const GAP_THRESHOLD_DEG = 4;
	// Secondary gap guard for near-zenith cities (e.g. Miami): sky angular separation
	// stays tiny across short cloud gaps there, so also check azimuth difference.
	// Max genuine 5-min azimuth change ≈ 28° (Miami near solstice); 40° gives margin.
	const AZ_GAP_THRESHOLD = 40;
	// 5-minute interval in seconds
	const INTERVAL_SEC = 5 * 60;

	/** Great-circle angular separation between two sun positions (degrees). */
	function skyAngSep(az1: number, el1: number, az2: number, el2: number): number {
		const r = Math.PI / 180;
		const dot = Math.sin(el1*r)*Math.sin(el2*r) + Math.cos(el1*r)*Math.cos(el2*r)*Math.cos((az2-az1)*r);
		return Math.acos(Math.min(1, Math.max(-1, dot))) / r;
	}

	/**
	 * Decode the binary buffer (header + uint16 offsets + float16 DNIs), compute sun
	 * positions analytically at full float64 precision, and return Float32Array of
	 * [azNorm, elevNorm, dniNorm, el_rad] quads for the GPU.
	 * Sub-step positions are computed from the actual solar ephemeris — no interpolation
	 * artifacts from float16 quantization.
	 */
	function processRawData(buf: ArrayBuffer, sigmaAzDeg: number): Float32Array {
		const view     = new DataView(buf);
		const startSec = view.getUint32(0, true);
		const n        = view.getUint32(4, true);
		const offsets  = new Uint16Array(buf, 8, n);
		const dnis     = new Float16Array(buf, 8 + n * 2, n);

		// Compute all sample positions upfront (float64, no quantization noise)
		const azs = new Float64Array(n);
		const els = new Float64Array(n);
		for (let i = 0; i < n; i++) {
			const pos = solarPosition(startSec + offsets[i] * INTERVAL_SEC, lat, lon);
			azs[i] = pos.az;
			els[i] = pos.el;
		}

		let maxElSeen = 0;
		for (let i = 0; i < n; i++) if (els[i] > maxElSeen) maxElSeen = els[i];
		const maxElevDeg = maxElSeen || 66;
		maxElevDegState = maxElevDeg;
		const tanMaxElev = Math.tan(maxElevDeg * Math.PI / 180);

		const pts: number[] = [];

		function pushPoint(az: number, el: number, dniScaled: number) {
			if (az < AZ_MIN || az > AZ_MAX) return;
			const elClamped = Math.min(el, maxElevDeg);
			const elRad = elClamped * Math.PI / 180;
			pts.push(
				(az - AZ_MIN) / AZ_RANGE,
				Math.tan(elRad) / tanMaxElev * (1 - TOP_PADDING),
				dniScaled,
				elRad,
			);
		}

		for (let i = 0; i < n; i++) {
			const az1 = azs[i], el1 = els[i], dni1 = dnis[i];

			let doInterp = false;
			let az2 = 0, el2 = 0, dni2 = 0;

			if (i < n - 1) {
				az2 = azs[i + 1]; el2 = els[i + 1]; dni2 = dnis[i + 1];
				doInterp = skyAngSep(az1, el1, az2, el2) < GAP_THRESHOLD_DEG
				        && Math.abs(az2 - az1) < AZ_GAP_THRESHOLD;
			}

			const steps = doInterp
				? Math.max(STEPS_PER_INTERVAL, Math.ceil(Math.abs(az2 - az1) / (2 * sigmaAzDeg)))
				: STEPS_PER_INTERVAL;

			pushPoint(az1, el1, dni1 / MAX_DNI / steps);

			if (doInterp) {
				// Sub-step positions from the solar ephemeris — smooth and quantization-free.
				const offsetDiff = offsets[i + 1] - offsets[i];
				for (let t = 1; t < steps; t++) {
					const f   = t / steps;
					const pos = solarPosition(startSec + (offsets[i] + f * offsetDiff) * INTERVAL_SEC, lat, lon);
					pushPoint(pos.az, pos.el, (dni1 + f * (dni2 - dni1)) / MAX_DNI / steps);
				}
			}
		}

		return new Float32Array(pts);
	}

	// ── Render ────────────────────────────────────────────────────────────────

	function renderFrame(state, w, h, splatData, maxInstances = Infinity) {
		const { gl, splatProg, tmProg, instanceVBO, splatVAO, quadVAO,
		        accumTex, fbo, uCanvas, uRadius, uSigma, uIntensityScale, uAccum, uScale } = state;

		// Physical blur sigma for cylindrical film of radius P.
		// Arc length of our 270° window = AZ_RANGE * π/180 * P metres.
		const pixelsPerMetre = w / ((AZ_RANGE * Math.PI / 180) * P);
		const sigmaPhysical  = R_TOTAL * pixelsPerMetre;
		const sigma          = Math.max(1.5, sigmaPhysical) * splatScale;
		const radius         = sigma * 3.5;

		gl.viewport(0, 0, w, h);

		// Pass 1 — accumulate Gaussian splats additively into the R32F FBO
		gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
		gl.clearColor(0, 0, 0, 0);
		gl.clear(gl.COLOR_BUFFER_BIT);
		gl.enable(gl.BLEND);
		gl.blendFunc(gl.ONE, gl.ONE);

		gl.useProgram(splatProg);
		gl.bindVertexArray(splatVAO);
		gl.bindBuffer(gl.ARRAY_BUFFER, instanceVBO);
		gl.bufferData(gl.ARRAY_BUFFER, splatData, gl.STREAM_DRAW);
		gl.uniform2f(uCanvas, w, h);
		gl.uniform1f(uRadius, radius);
		gl.uniform1f(uSigma,  sigma);
		gl.uniform1f(uIntensityScale, INTENSITY_SCALE * exposureScale);

		gl.drawArraysInstanced(gl.TRIANGLES, 0, 6, Math.min(splatData.length / 4, maxInstances));

		// Pass 2 — log tone-map + warm colorize to screen
		gl.bindFramebuffer(gl.FRAMEBUFFER, null);
		gl.disable(gl.BLEND);
		gl.clearColor(0.0, 0.0, 0.0, 0.0);
		gl.clear(gl.COLOR_BUFFER_BIT);

		gl.useProgram(tmProg);
		gl.bindVertexArray(quadVAO);
		gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, accumTex);
		gl.uniform1i(uAccum, 0);
		gl.uniform1f(uScale, TONE_SCALE);
		gl.drawArrays(gl.TRIANGLES, 0, 6);

		gl.bindVertexArray(null);
	}

	// ── Svelte reactive state ─────────────────────────────────────────────────

	let container = $state<HTMLDivElement | null>(null);
	let canvas    = $state<HTMLCanvasElement | null>(null);
	let width     = $state(0);
	let height    = $state(0);

	let glState: ReturnType<typeof initGL> | null = null;

	// rawData is plain (not reactive) — only used as input to processRawData.
	// splatCache is reactive so the render effect re-runs when it changes.
	let rawData: ArrayBuffer | null = null;
	let rawKey = $state('');
	let splatCache    = $state<Float32Array | null>(null);
	let loadingMsg    = $state<string | null>(null);
	let maxElevDegState = $state(66);

	$effect(() => {
		if (!container) return;
		const observer = new ResizeObserver((entries) => {
			const r = entries[0].contentRect;
			width  = Math.round(r.width);
			height = Math.round(r.height);
		});
		observer.observe(container);
		return () => observer.disconnect();
	});

	// Fetch effect: re-runs on period or city change.
	// rawData is plain so reading it here creates no reactive dependency.
	$effect(() => {
		const p = period;
		const c = city;
		const ac = new AbortController();

		loadingMsg = 'Loading…';
		splatCache = null;
		rawData    = null;

		(async () => {
			try {
				const resp = await fetch(binUrl(p), { signal: ac.signal });
				if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
				rawData = await resp.arrayBuffer();
				rawKey  = `${c}_${p}`;  // reactive trigger → fires process effect
			} catch (err) {
				if ((err as Error).name === 'AbortError') return;
				console.error('Solargraph fetch failed:', err);
				loadingMsg = 'Failed to load data';
			}
		})();

		return () => ac.abort();
	});

	// Process effect: re-runs when new data arrives (rawKey), canvas resizes (width),
	// or splatScale changes — so adaptive step count stays calibrated to rendering params.
	$effect(() => {
		const key = rawKey;
		const w   = width;
		const cs  = splatScale;

		if (!rawData || w === 0) return;

		// Sigma in azimuth-degrees: how wide one splat is in the projected space.
		// pixPerMetre → sigma_px (before splatScale) → sigma_px * cs → degrees via /w*AZ_RANGE
		const pixPerMetre = w / ((AZ_RANGE * Math.PI / 180) * P);
		const sigmaAzDeg  = Math.max(1.5, R_TOTAL * pixPerMetre) * cs / w * AZ_RANGE;

		const processed = processRawData(rawData, sigmaAzDeg);
		splatCache = processed;
		untrack(() => onsplatsloaded?.(processed.length / 4));
		loadingMsg = null;
	});

	// Renderer: re-runs on canvas size, splatScale, exposureScale, maxInstances, or splatCache
	$effect(() => {
		const w = width, h = height, sc = splatScale, es = exposureScale, mi = maxInstances;
		const data = splatCache;
		if (!canvas || w === 0 || h === 0) return;

		canvas.width  = w;
		canvas.height = h;

		if (!glState) glState = initGL(canvas);
		resizeAccumTexture(glState, w, h);

		if (data && data.length > 0) {
			renderFrame(glState, w, h, data, mi);
		} else {
			const { gl } = glState;
			gl.viewport(0, 0, w, h);
			gl.clearColor(0.031, 0.031, 0.059, 1);
			gl.clear(gl.COLOR_BUFFER_BIT);
		}
	});
</script>

<div class="canvas-wrap" bind:this={container}>
	<canvas bind:this={canvas}></canvas>
	<svg class="overlay" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
		<line x1="0%" y1="100%" x2="100%" y2="100%"
			stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
		{#each [
			{ label: 'NE', x: '0.5%',   anchor: 'start'  },
			{ label: 'E',  x: '16.67%', anchor: 'middle' },
			{ label: 'S',  x: '50%',    anchor: 'middle' },
			{ label: 'W',  x: '83.33%', anchor: 'middle' },
			{ label: 'NW', x: '99.5%',  anchor: 'end'    },
		] as c}
			<line x1={c.x} y1="97%" x2={c.x} y2="100%"
				stroke="rgba(255,255,255,0.35)" stroke-width="1"/>
			<text x={c.x} y="96.5%" text-anchor={c.anchor}
				font-size="11" font-family="system-ui, sans-serif"
				fill="rgba(255,255,255,0.4)">{c.label}</text>
		{/each}
		{#each Array.from({ length: Math.floor(maxElevDegState / 10) }, (_, i) => (i + 1) * 10) as el}
			{@const yNorm = Math.tan(el * Math.PI / 180) / Math.tan(maxElevDegState * Math.PI / 180) * (1 - TOP_PADDING)}
			{@const yPct = (1 - yNorm) * 100}
			<line x1="95%" y1="{yPct}%" x2="100%" y2="{yPct}%"
				stroke="rgba(255,255,255,0.25)" stroke-width="1"/>
			<text x="94.5%" y="{yPct}%" text-anchor="end" dominant-baseline="middle"
				font-size="10" font-family="system-ui, sans-serif"
				fill="rgba(255,255,255,0.35)">{el}°</text>
		{/each}
		{#if loadingMsg}
			<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"
				font-size="14" font-family="system-ui, sans-serif"
				fill="rgba(255,255,255,0.5)">{loadingMsg}</text>
		{/if}
	</svg>
</div>

<style>
	.canvas-wrap {
		aspect-ratio: 2 / 1;
		width: 100%;
		position: relative;
		background: #0d1526;
	}

	canvas {
		display: block;
		width: 100%;
		height: 100%;
	}

	.overlay {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		overflow: visible;
	}
</style>
