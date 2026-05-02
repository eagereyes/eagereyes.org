# Solargraph Simulation — Technical Specification

## Overview

Simulate a pinhole camera solargraph from time-series solar irradiance data. The output
is a rendered image showing the arc(s) of the sun across the sky over a given time
period, as it would appear burned onto photographic paper inside a can camera.

---

## 1. Data Source

**Dataset:** NSRDB GOES CONUS PSM v4  
**Endpoint:** `GET /api/nsrdb/v2/solar/nsrdb-GOES-conus-v4-0-0-download.json`  
**Base URL:** `https://developer.nlr.gov`  
**Auth:** Free API key from https://developer.nrel.gov/signup/  
**Format:** CSV (use `.csv` suffix on endpoint for direct download)  
**Coverage:** Continental US, 2018–present  
**Resolution:** 5-minute temporal, 2 km spatial  

### Required API parameters

| Parameter | Value |
|---|---|
| `wkt` | `POINT(-122.3 47.6)` (Seattle; adjust as needed) |
| `attributes` | `dni,clearsky_dni,solar_zenith_angle` |
| `names` | Year(s) to fetch, e.g. `2023` |
| `interval` | `5` (minutes) |
| `utc` | `true` |
| `email` | User's email (required by NREL) |
| `api_key` | User's NREL API key |

### Variables used

| NSRDB name | Units | Role |
|---|---|---|
| `dni` | W/m² | Direct beam irradiance from sun disk |
| `clearsky_dni` | W/m² | Modeled clear-sky DNI for same conditions |
| `solar_zenith_angle` | degrees | Sun's zenith angle (0 = overhead) |

`solar_elevation = 90 - solar_zenith_angle`

Note: GHI and DHI are **not needed** for sun disk rendering. They describe ambient scene
illumination, not the disk itself.

---

## 2. Sun Position

The NSRDB provides zenith angle but not azimuth. Compute full position using **pvlib**:

```python
import pvlib

solpos = pvlib.solarposition.get_solarposition(
    time=timestamps,        # pandas DatetimeIndex, UTC-localized
    latitude=47.6,
    longitude=-122.3,
    altitude=50             # meters, approximate for Seattle
)
# Output columns used:
#   apparent_elevation  — degrees above horizon, refraction-corrected
#   azimuth             — degrees East of North
```

Use `apparent_elevation` (not `elevation`) to account for atmospheric refraction near
the horizon.

Discard any timestep where `apparent_elevation <= 0` (sun below horizon).

---

## 3. Visibility / Cloud Filtering

Compute a clearsky ratio at each timestep:

```python
clearsky_ratio = dni / clearsky_dni   # clamp to [0, 1]
```

| Ratio | Interpretation |
|---|---|
| ≥ 0.85 | Clear sky — sharp bright disk |
| 0.4–0.85 | Partial cloud / haze — dimmed disk, possibly visible |
| < 0.4 | Overcast — disk not rendered (or rendered at very low intensity) |

The threshold for "visible enough to render" is a tunable parameter. A reasonable
default is `clearsky_ratio >= 0.15` — low enough to capture hazy sun but suppress
fully cloudy periods.

---

## 4. Physical Constants and Camera Parameters

### Fixed constants

| Symbol | Value | Description |
|---|---|---|
| θ_☉ | 0.00925 rad (0.53°) | Angular diameter of sun |
| λ | 5.5 × 10⁻⁷ m | Peak visible wavelength (550 nm) |
| k_lux | 120 | Luminous efficacy of sunlight (lux per W/m²) |
| C | 2.5 | Incident light meter calibration constant |

### Camera parameters (open/tunable)

| Symbol | Parameter | Typical value |
|---|---|---|
| `a` | Pinhole diameter (m) | 3–5 × 10⁻⁴ m (0.3–0.5 mm) |
| `p` | Pinhole-to-image-plane distance (m) | 0.05–0.20 m (can depth) |
| `W` | Image width (pixels) | 3000–6000 px |
| `H` | Image height (pixels) | — (derived from projection) |
| `fov_h` | Horizontal field of view (degrees) | 360° for cylindrical; configurable for flat |

---

## 5. Rendering Pipeline (per timestep)

### Step 1 — Discard invalid timesteps

Skip if:
- `apparent_elevation <= 0`
- `dni == 0`
- `clearsky_ratio < threshold` (default 0.15)

---

### Step 2 — Geometric disk size on image plane

The geometric radius of the projected sun disk:

```
r_geo = (p * θ_☉) / 2
      = p * 0.004625   [meters]
```

---

### Step 3 — Blur radius (diffraction + penumbra)

Three contributions combined in quadrature:

```
r_total = 0.5 * sqrt( (p * θ_☉)²  +  (2.44 * λ * p / a)²  +  a² )
```

- Term 1: geometric image of sun disk
- Term 2: Airy diffraction from finite aperture
- Term 3: geometric penumbra of aperture

At the **optimal aperture** (minimizes total blur):

```
a_opt = sqrt(2.44 * λ * p)
```

For `p = 0.10 m`: `a_opt ≈ 0.000366 m` (0.37 mm)  
For `p = 0.15 m`: `a_opt ≈ 0.000448 m` (0.45 mm)

The blur kernel is a Gaussian with:

```
sigma = r_total / 2   [meters, convert to pixels for rendering]
```

---

### Step 4 — Image plane irradiance

DNI is measured perpendicular to the beam, so no cosine correction is needed.
Power through aperture, spread over geometric disk area:

```
E_image = DNI * (a / (p * θ_☉))²   [W/m²]
```

Equivalently, in terms of f-number `N = p / a`:

```
E_image = DNI / (θ_☉² * N²)
```

---

### Step 5 — Peak brightness after blur spreading

Energy is conserved but spread over the larger blurred disk area:

```
E_peak = E_image * (r_geo / r_total)²   [W/m²]
```

---

### Step 6 — Convert to EV (for exposure simulation)

```
lux    = E_peak * 120
EV_100 = log2(lux / 2.5)
```

Reference: full midday sun through a clear sky gives DNI ≈ 900 W/m²,
which at a typical pinhole setup (a=0.4mm, p=100mm) yields EV_100 ≈ 4–7 —
much dimmer than direct sunlight (EV 15) because the pinhole collects very
little of the available flux.

---

### Step 7 — Horizon reddening (optional)

Airmass increases path length through atmosphere at low elevations:

```
airmass = 1 / sin(apparent_elevation_radians)
```

Use airmass to shift disk color toward orange/red. A simple approach: interpolate
disk RGB from white (airmass=1, high sun) toward `(1.0, 0.5, 0.1)` (airmass≥10,
near-horizon). Clamp airmass to 10 for this purpose.

---

### Step 8 — Project to image coordinates

For a **cylindrical projection** (natural for a can camera):

```
x_px = (azimuth / 360.0) * W
y_px = (1.0 - (apparent_elevation / max_elevation)) * H
```

For a **flat/rectangular projection**, use standard equirectangular or rectilinear
mapping depending on intended FoV.

Convert `r_total` from meters to pixels:

```
meters_per_pixel = (2 * p * tan(fov_h/2)) / W    # approximate
r_px = r_total / meters_per_pixel
```

---

### Step 9 — Accumulate onto image

For each timestep, splat a Gaussian blob:

```python
# pseudocode
image[y, x] += E_peak * gaussian_kernel(sigma=r_px)
```

Accumulate in linear light (not gamma-corrected). Apply tone mapping and gamma
at the end, after all timesteps are summed.

---

## 6. Tone Mapping

Solargraph paper has a roughly logarithmic response (like film). A reasonable
approximation:

```python
output = log1p(image * scale) / log1p(scale)
```

where `scale` controls how aggressively bright regions are compressed. Values
in the range 100–10000 give film-like results. Apply gamma 2.2 after tone mapping
for display.

Alternatively, expose for the median non-zero pixel and apply a fixed offset,
simulating the darkroom printing decision a photographer would make.

---

## 7. Suggested Implementation Stack

| Concern | Library |
|---|---|
| NSRDB data fetch | `requests` + pandas CSV read |
| Sun position | `pvlib` |
| Numerical pipeline | `numpy` |
| Image accumulation | `numpy` array, float32 |
| Output | `Pillow` or `imageio` for PNG/TIFF |

---

## 8. Open Parameters Summary

These should be exposed as configurable inputs:

| Parameter | Default | Notes |
|---|---|---|
| `latitude` | 47.6 | Seattle |
| `longitude` | -122.3 | Seattle |
| `year` | 2023 | NSRDB year to fetch |
| `a` (pinhole diameter) | `a_opt` | Can override; in meters |
| `p` (can depth) | 0.10 | Meters |
| `image_width` | 4000 | Pixels |
| `projection` | `cylindrical` | Or `rectilinear` |
| `fov_horizontal` | 360 | Degrees; 360 = full cylinder |
| `clearsky_threshold` | 0.15 | Minimum ratio to render disk |
| `tone_scale` | 1000 | Log tone map scale factor |
| `wavelength` | 5.5e-7 | Meters; affects diffraction term |

---

## 9. References

- NSRDB GOES CONUS API: https://developer.nrel.gov/docs/solar/nsrdb/nsrdb-GOES-conus-v4-0-0-download/
- pvlib solar position: https://pvlib-python.readthedocs.io/en/stable/reference/generated/pvlib.solarposition.get_solarposition.html
- Sengupta et al. (2018), "The National Solar Radiation Data Base (NSRDB)", *Renewable and Sustainable Energy Reviews* 89: 51–60
