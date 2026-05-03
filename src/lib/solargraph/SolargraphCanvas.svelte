<script lang="ts">
	// @ts-nocheck
	import { getDateRange } from './solstice.js';

	let { year, season, splatScale = 1.0 } = $props();

	const LAT = 47.6;
	const LON = -122.3;
	const MAX_ELEV_DEG = 66;

	// Azimuth projection window: 270° centered on South (180°)
	const AZ_MIN   = 45;   // NE
	const AZ_MAX   = 315;  // NW
	const AZ_RANGE = AZ_MAX - AZ_MIN;

	const TONE_SCALE = 1000.0;

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

	const BASE_URL     = '/solargraph-data';
	const LOCATION_NAME = 'seattle';

	// ── Shaders ───────────────────────────────────────────────────────────────

	// Instanced Gaussian splat.
	// Per-vertex (divisor 0): a_quad — unit quad [-1..1]
	// Per-instance (divisor 1): a_instance — vec3(azNorm, elevNorm, dniNorm)
	const SPLAT_VERT = `#version 300 es
in vec2 a_quad;
in vec3 a_instance;
uniform vec2 u_canvas;
uniform float u_radius;
out vec2 v_offset_px;
out float v_dni;
void main() {
    v_offset_px = a_quad * u_radius;
    v_dni = a_instance.z;
    vec2 center_clip = a_instance.xy * 2.0 - 1.0;
    vec2 offset_clip = v_offset_px / (u_canvas * 0.5);
    gl_Position = vec4(center_clip + offset_clip, 0.0, 1.0);
}`;

	const SPLAT_FRAG = `#version 300 es
precision highp float;
in vec2 v_offset_px;
in float v_dni;
uniform float u_sigma;
uniform float u_intensity_scale;
out float outValue;
void main() {
    float r2 = dot(v_offset_px, v_offset_px);
    outValue = u_intensity_scale * v_dni * exp(-r2 / (2.0 * u_sigma * u_sigma));
}`;

	const QUAD_VERT = `#version 300 es
in vec2 a_pos;
out vec2 v_uv;
void main() {
    v_uv = a_pos * 0.5 + 0.5;
    gl_Position = vec4(a_pos, 0.0, 1.0);
}`;

	// Warm tint: r=1.0, g=0.784, b=0.314 (≈ rgba(255,200,80))
	const TONEMAP_FRAG = `#version 300 es
precision highp float;
uniform sampler2D u_accum;
uniform float u_scale;
in vec2 v_uv;
out vec4 outColor;
void main() {
    float v = texture(u_accum, v_uv).r;
    float mapped = log(1.0 + v * u_scale) / log(1.0 + u_scale);
    float g = pow(max(mapped, 0.0), 1.0 / 2.2);
    outColor = vec4(g, g * 0.784, g * 0.314, 1.0);
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
		const gl = canvas.getContext('webgl2', { antialias: false, premultipliedAlpha: false });
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
		// a_quad (vec2, divisor 0) + a_instance (vec3, divisor 1)
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
		gl.vertexAttribPointer(instLoc, 3, gl.FLOAT, false, 0, 0);
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
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.R32F, w, h, 0, gl.RED, gl.FLOAT, null);
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

	function binUrl(y: number, s: string): string {
		return `${BASE_URL}/${s}${y}_${LOCATION_NAME}.bin`;
	}

	/**
	 * Decode Float16Array triplets [az_deg, el_deg, dni_Wm2] and return
	 * Float32Array of [azNorm, elevNorm, dniNorm] triplets for the GPU.
	 * Samples outside the azimuth window are discarded.
	 */
	function processRawData(raw: Float16Array): Float32Array {
		const pts: number[] = [];
		for (let i = 0; i < raw.length - 2; i += 3) {
			const az  = raw[i];
			const el  = raw[i + 1];
			const dni = raw[i + 2];
			if (az < AZ_MIN || az > AZ_MAX) continue;
			pts.push(
				(az - AZ_MIN) / AZ_RANGE,
				Math.min(el, MAX_ELEV_DEG) / MAX_ELEV_DEG,
				dni / MAX_DNI,
			);
		}
		return new Float32Array(pts);
	}

	// ── Render ────────────────────────────────────────────────────────────────

	function renderFrame(state, w, h, splatData) {
		const { gl, splatProg, tmProg, instanceVBO, splatVAO, quadVAO,
		        accumTex, fbo, uCanvas, uRadius, uSigma, uIntensityScale, uAccum, uScale } = state;

		// Physical blur sigma for cylindrical film of radius P.
		// Arc length of our 270° window = AZ_RANGE * π/180 * P metres.
		// pixels_per_metre = w / that arc length.
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
		gl.uniform1f(uIntensityScale, INTENSITY_SCALE);

		gl.drawArraysInstanced(gl.TRIANGLES, 0, 6, splatData.length / 3);

		// Pass 2 — log tone-map + warm colorize to screen
		gl.bindFramebuffer(gl.FRAMEBUFFER, null);
		gl.disable(gl.BLEND);
		gl.clearColor(0.031, 0.031, 0.059, 1); // #08080f
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

	let glState:    ReturnType<typeof initGL> | null = null;
	let splatCache: Float32Array | null = null;
	let cacheKey = '';

	let loadingMsg = $state<string | null>(null);

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

	// Data loader: cancels any in-flight fetch when year/season changes
	$effect(() => {
		const y = year, s = season;
		const key = `${y}-${s}`;
		if (key === cacheKey) return;

		const ac = new AbortController();
		loadingMsg = 'Loading…';

		(async () => {
			try {
				const resp = await fetch(binUrl(y, s), { signal: ac.signal });
				if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
				const buf = await resp.arrayBuffer();
				const f16 = new Float16Array(buf);
				splatCache = processRawData(f16);
				cacheKey   = key;
				loadingMsg = null;
			} catch (err) {
				if ((err as Error).name === 'AbortError') return;
				console.error('Solargraph fetch failed:', err);
				loadingMsg = `Failed to load data`;
				splatCache = null;
				cacheKey   = '';
			}
		})();

		return () => ac.abort();
	});

	// Renderer: re-runs on size, splatScale, or when new data arrives
	$effect(() => {
		const w = width, h = height, sc = splatScale;
		void loadingMsg; // depend on loading state so we re-render when data arrives
		if (!canvas || w === 0 || h === 0) return;

		canvas.width  = w;
		canvas.height = h;

		if (!glState) glState = initGL(canvas);
		resizeAccumTexture(glState, w, h);

		if (splatCache && splatCache.length > 0) {
			renderFrame(glState, w, h, splatCache);
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
		{#if loadingMsg}
			<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"
				font-size="14" font-family="system-ui, sans-serif"
				fill="rgba(255,255,255,0.5)">{loadingMsg}</text>
		{/if}
	</svg>
</div>

<style>
	.canvas-wrap {
		width: 100%;
		height: 100%;
		position: relative;
		background: #08080f;
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
