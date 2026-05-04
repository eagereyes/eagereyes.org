# Solargraph Simulation — Technical Specification

## Overview

Simulate a pinhole camera solargraph from time-series solar irradiance data. The output
is a WebGL-rendered image showing the arc(s) of the sun across the sky over a half-year
period, as it would appear burned onto photographic paper inside a can camera.

---

## 1. Data Source

**Dataset:** NSRDB GOES CONUS PSM v4  
**Endpoint:** `GET /api/nsrdb/v2/solar/nsrdb-GOES-conus-v4-0-0-download.csv`  
**Base URL:** `https://developer.nrel.gov`  
**Auth:** Free API key — set `NREL_API_KEY` and `NREL_EMAIL` in repo-root `.env`  
**Coverage:** Continental US, 2018–present  
**Resolution:** 5-minute temporal, 2 km spatial

### Required API parameters

| Parameter | Value |
|---|---|
| `wkt` | `POINT(lon lat)` e.g. `POINT(-122.3 47.6)` |
| `attributes` | `dni,clearsky_dni,solar_zenith_angle` |
| `names` | Calendar year(s) to fetch |
| `interval` | `5` (minutes) |
| `utc` | `true` |
| `email` | NREL-registered email |
| `api_key` | NREL API key |

### Variables used

| NSRDB name | Units | Role |
|---|---|---|
| `dni` | W/m² | Direct beam irradiance — stored in binary |
| `clearsky_dni` | W/m² | Clear-sky model — used for cloud filtering only |
| `solar_zenith_angle` | degrees | Used indirectly via pvlib for elevation filter |

---

## 2. Time Periods

Each binary file covers one **solstice-to-solstice half-year**:

- `summer<year>` — summer solstice → winter solstice (e.g. Jun 20 → Dec 21)
- `winter<year>` — winter solstice → following summer solstice (e.g. Dec 21 → Jun 20)

Solstice dates are computed via the `ephem` library. The script fetches all
calendar years that overlap the period and trims to the exact solstice timestamps.

---

## 3. Cloud Filtering (Python)

pvlib is used **only** to compute `apparent_elevation` for the horizon filter.
Sun position is **not** stored in the binary — it is recomputed client-side.

A sample is **kept** if all three conditions hold:

```python
apparent_elevation > 0       # sun above horizon
dni > 0                      # non-zero direct beam
clearsky_ratio >= threshold  # clearsky_ratio = dni / clearsky_dni, clamped [0,1]
```

Default threshold: `0.15` (keeps hazy sun, drops fully overcast periods).
Override with `--threshold` flag or `clearsky_threshold` key in `config.json`.

---

## 4. Binary Format

Each city+period is stored as one `.bin` file under `static/solargraph-data/`.

```
Bytes 0–3   : uint32 LE  — period start as Unix timestamp (seconds)
Bytes 4–7   : uint32 LE  — N (number of samples)
Bytes 8 .. 8+2N-1        — uint16 LE × N — sample offsets in 5-min units from period start
Bytes 8+2N .. 8+4N-1     — float16 LE × N — DNI values (W/m²)
```

Total size: `8 + 4N` bytes. Typical N: 10,000–25,000 per half-year depending on location.

**Why offsets instead of positions:** Sun position is computed analytically in the
browser at float64 precision using the NOAA algorithm, avoiding float16 quantization
noise (~0.125° azimuth) that would otherwise cause visible wobble in the arcs.

### Generating / regenerating binary files

```bash
cd scripts/solargraph
pip install -r requirements.txt        # includes ephem, pvlib, numpy, pandas, requests
python fetch_data.py                   # all cities × all periods
python fetch_data.py --location-name seattle --period summer2024
```

Credentials are read from the repo-root `.env` file (`NREL_API_KEY`, `NREL_EMAIL`).

**Compatibility note:** `fetch_data.py` uses
`(index - pd.Timestamp("1970-01-01", tz="UTC")) // pd.Timedelta("1s")`
to convert DatetimeIndex to Unix seconds. This is intentionally version-independent;
`DatetimeIndex.astype("int64")` changed from nanoseconds to microseconds in pandas 3.0,
making the older `// 10**9` pattern silently wrong.

---

## 5. Physical Camera Model

The rendering simulates a real pinhole camera (can camera) with these parameters:

| Symbol | Value | Description |
|---|---|---|
| θ_☉ | 0.00925 rad | Angular diameter of sun |
| λ | 5.5 × 10⁻⁷ m | Peak visible wavelength (550 nm) |
| k_lux | 120 lux/(W/m²) | Luminous efficacy of sunlight |
| C | 2.5 | Incident-light meter calibration constant |
| p | 0.10 m | Pinhole-to-film distance (can depth) |
| a | √(2.44λp) ≈ 0.366 mm | Optimal aperture (minimises total blur) |

### Blur radius

Three contributions combined in quadrature:

```
r_geo   = (p × θ_☉) / 2            geometric image of sun disk
r_diff  = (2.44 × λ × p) / a       Airy diffraction disk radius
r_total = 0.5 × √(r_geo² + r_diff² + a²)
sigma   = max(1.5 px, r_total × pixels_per_metre) × splatScale
```

### Image-plane irradiance

```
E_image = DNI × (a / (p × θ_☉))²
E_peak  = E_image × (r_geo / r_total)²
intensity_scale = (a/(p×θ_☉))² × (r_geo/r_total)² × k_lux/C / MAX_DNI
```

`MAX_DNI = 1200 W/m²` normalises per-sample GPU values. `intensity_scale` is a
compile-time constant uploaded as a WebGL uniform.

---

## 6. Sun Position (Client-Side)

Solar position is computed in the browser from the stored Unix timestamp using the
**NOAA algorithm** (Jean Meeus, *Astronomical Algorithms*), implemented in
`src/lib/solargraph/solarPosition.ts`. Accuracy: ~0.01° for dates 2000–2050.

The function returns **azimuth** (N=0°, clockwise) and **apparent elevation**
(refraction-corrected via Bennett's formula) in degrees.

Sub-step positions between consecutive 5-minute samples are computed by calling
`solarPosition` at fractional offsets — giving smooth, quantization-free arc paths.

---

## 7. Projection

**Azimuth window:** 45° (NE) to 315° (NW) — 270° range centred on South.

```
x_norm = (azimuth - 45) / 270              horizontal [0, 1]
y_norm = tan(el_rad) / tan(maxEl_rad)      vertical [0, 1], tangent-compressed
         × (1 - TOP_PADDING)               reserve 5% above highest arc
```

The tangent y-mapping keeps arc spacing proportional to apparent angular separation,
matching the physical geometry of a flat film plane.

`maxEl_rad` is determined per-dataset as the maximum observed elevation, so arcs
always fill the canvas regardless of latitude or season.

---

## 8. WebGL Rendering

Two-pass pipeline implemented in `SolargraphCanvas.svelte`:

### Pass 1 — Accumulate splats (FBO)

- Instanced draw: one quad per sun sample
- Gaussian fragment shader accumulates `E_peak × Gaussian(r, sigma)` additively
- FBO uses `RGBA32F` (floating point), blend mode `ONE + ONE`
- Per-instance data: `vec4(azNorm, elevNorm, dniNorm, el_rad)`
- `el_rad` drives horizon reddening: interpolates white → `(1, 0.5, 0.1)` via airmass

### Pass 2 — Tone-map to screen

```glsl
float mapped = 1.0 - exp(-lum * TONE_SCALE);   // TONE_SCALE = 200
float bright = pow(mapped, 1.0/2.2);            // gamma
```

Output uses premultiplied alpha so dim areas blend with the CSS background.

---

## 9. Adaptive Interpolation

Between consecutive kept samples, `processRawData` inserts sub-steps so that
Gaussian splats overlap and form continuous arcs:

```
steps = max(STEPS_PER_INTERVAL,               // minimum: 5 (= 1-min resolution)
            ceil(|Δaz| / (2 × sigmaAzDeg)))   // ensure splat overlap at midpoint
```

`sigmaAzDeg` is the splat sigma expressed in azimuth degrees, recomputed whenever
canvas width or `splatScale` changes (via a reactive `$effect`).

**Gap detection:** A pair is treated as a cloud/day gap (no interpolation) if:
- sky angular separation > 4° (max genuine 5-min movement ≈ 1.25°), **or**
- |Δazimuth| > 40° (guards near-zenith cities where sky_sep stays small across gaps)

**Energy conservation:** each interval emits `steps` splats each with `1/steps`
of the interval's DNI, keeping total accumulated exposure correct.

---

## 10. Reactive Data Flow (Svelte 5)

```
fetch $effect (period, city) → downloads .bin → sets rawData (plain) + rawKey ($state)
process $effect (rawKey, width, splatScale) → processRawData() → splatCache ($state)
render $effect (splatCache, width, height, splatScale, exposureScale, maxInstances) → WebGL
```

`processRawData` is called in the process effect (not the fetch effect) so it
re-runs on canvas resize or splatScale change without re-fetching data.
`onsplatsloaded` is called inside `untrack()` to avoid reactive cycles.
