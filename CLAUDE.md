# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About

eagereyes.org is a personal website about data visualization and visual communication by Robert Kosara. It's a SvelteKit static site that renders blog posts from Markdown files.

## Workflow

Do not `git push` unless explicitly asked to. Same with creating commits, only commit changes once given the go-ahead.

## Commands

```bash
npm run dev       # Start dev server
npm run build     # Build static site (output: build/)
npm run preview   # Preview built site
npm run check     # TypeScript + Svelte type checking
```

No test suite is configured.

## Architecture

This is a **SvelteKit static site** using `adapter-static`. All pages are prerendered at build time. The site uses **Svelte 5** with the new runes API (`$props()`, `$derived()`, `$state()`).

### Content Structure

Blog content lives outside `src/` in two places:

- `content/posts.json` — metadata array for all posts (slug, title, description, date, tags, featuredImage, archived, comments count)
- `content/blog/<year>/<slug>.md` — full Markdown content for each post
- `content/blog/<year>/<slug>+++comments.md` — comments for posts that have them (keyed by `comments > 0` in meta)
- `content/videos.json` — video metadata (slug, title, description, ytslug, blogpost, date)
- `content/papers.json` — academic paper metadata (includes `thumbnail` and `preview` as `PaperImage` objects)
- `content/galleries.json` — photo gallery metadata (slug, title, description, featuredImage, date, photos: `(Photo | Photo[])[]`)
- `content/apps.json` — app metadata (slug, title, description, image, url)

Blog posts are plain Markdown (no frontmatter). All metadata is in `posts.json`, not the files themselves.

Static content pages (about, contact, license, pie-charts, subscribe) live in `content/<slug>.md`. Some have YAML frontmatter that is stripped before rendering.

### Routing

| Route | Description |
|---|---|
| `/` | Homepage with recent blog posts, videos, photos, and apps |
| `/blog/` | All posts index |
| `/blog/<year>` | Posts filtered by year |
| `/blog/<year>/<slug>` | Single post |
| `/video/` | Video list |
| `/video/<slug>` | Single video |
| `/tag/<tag>` | Posts filtered by tag |
| `/publications/` | Papers list |
| `/publications/<key>` | Single paper (key uses `-` instead of `:`) |
| `/photos/` | Photo gallery index |
| `/photos/<slug>` | Single gallery with lightbox |
| `/photos/feed` | RSS feed for galleries |
| `/app/zipscribble-map` | Interactive ZIPScribble map |
| `/app/solargraph` | Interactive solargraph simulation |
| `/search` | Full-text search |
| `/<slug>` or `/<prefix>/<slug>` | Catch-all: serves content pages or 301 redirects |

The `/blog/[...slug]` route handles all three blog display modes via the `PageType` enum (`singlePost`, `oneYear`, `allPosts`).

The `src/routes/[...slug]/+page.server.ts` catch-all handles two things:
1. **Content pages** — slugs in `CONTENT_PAGES` map are read from `content/<slug>.md` and rendered as Markdown.
2. **Legacy redirects** — ~130 old URL paths in the `REDIRECTS` map issue 301s to their canonical locations. To add a redirect, add an entry to `REDIRECTS`; to add a new content page, add to both `CONTENT_PAGES` and create `content/<slug>.md`.

### Key Files

- `src/routes/+layout.svelte` — app shell with `Header.svelte` and global layout
- `src/routes/Header.svelte` — site navigation with active page highlighting
- `src/app.css` — global CSS variables (colors, fonts, layout widths)
- `src/lib/blog-utils.ts` — `BlogPost`, `FeaturedImage` types, `tagNames` map, `formatDate()`
- `src/lib/video-utils.ts` — `Video` type
- `src/lib/photo-utils.ts` — `Photo`, `FeaturedImage`, and `Gallery` types
- `src/lib/paper-utils.ts` — `Paper`, `PaperImage`, and `blankPaper`
- `src/lib/app-utils.ts` — `App` type
- `src/lib/BlogList.svelte` — reusable blog post list with filtering by year/tag/archived
- `src/lib/VideoList.svelte` — reusable video list
- `src/lib/GalleryList.svelte` — reusable gallery card list (`useHeading` prop toggles h2 vs p)
- `src/lib/AppList.svelte` — reusable app card list
- `src/lib/Lightbox.svelte` — fullscreen photo lightbox with keyboard nav (arrow keys, space, escape); parent owns index state; `onclose`/`onprev`/`onnext` callbacks
- `src/lib/Sidebar.svelte` — sidebar component used on blog post pages

### CSS / Theming

Global CSS variables are defined in `src/app.css` under `:root`. Dark mode uses `@media (prefers-color-scheme: dark)`. Key variables: `--color-theme-1` (purple), `--color-theme-2` (blue), `--color-text`, `--color-bg-1`, `--color-border`.

### Data Flow

Server-side load functions (`+page.server.ts`) import JSON data files directly and pass them as page props. Markdown is read from disk using `node:fs/promises` and rendered client-side with the `marked` library (`parse()` from `marked`).

### Tags

The `tagNames` map in `src/lib/blog-utils.ts` maps tag slugs to display names. Tags not in this map fall back to the raw slug.

### Image Dimensions

All image objects throughout the site (`FeaturedImage`, `Photo`, `PaperImage`) carry optional `width` and `height` integers. These are passed to `<img>` tags so browsers can reserve space before images load (CSS still controls rendered size). Run `node scripts/fetch-photo-dimensions.mjs` to populate missing dimensions — it handles `content/galleries.json` (gallery photos and featuredImages), `content/posts.json` (post featuredImages), and `content/papers.json` (thumbnail and preview images) in one pass, skipping entries that already have dimensions.

### FeaturedImage

`FeaturedImage` is defined in `src/lib/blog-utils.ts` and `src/lib/photo-utils.ts` (same shape: `{ src, width?, height?, alt?, render? }`). It is used by `BlogPost`, `Gallery`, and (as `PaperImage`) `Paper`.

For blog posts, when `featuredImage.render` is `true`, the single-post page renders the image above the article body via `.post-featured-image`. The markdown source no longer contains a leading `<figure>` in these cases — it was stripped during a migration. When adding a new post with a leading image, set `"render": true` on the featuredImage in `posts.json` instead of embedding a `<figure>` in the markdown.

### Photo Galleries

Photos are stored in `content/galleries.json` as an array of `Gallery` objects. Each gallery has a `photos` field typed as `(Photo | Photo[])[]` — a list of rows where a single photo is a plain `{ src, alt, width?, height? }` object and a pair is a two-element array. The gallery detail page normalizes rows with `Array.isArray(row) ? row : [row]` and flattens to `Photo[]` for the lightbox using `flatMap`.

Each gallery also has a `featuredImage` object (`{ src, width?, height? }`) used by `GalleryList.svelte` for card thumbnails and the OG image meta tag.

The `Lightbox` component is stateless — the parent (`+page.svelte`) owns `lightboxIndex` as `$state(-1)` and passes it as `index`. The lightbox uses `$effect` to toggle `document.body.style.overflow = 'hidden'` while open (always returns cleanup). `<svelte:window onkeydown>` is at the component top level (not inside `{#if}`) with an early-return guard when `index < 0`.

The `/photos/feed` route serves an RSS feed from `src/routes/photos/feed/+server.ts`.

### Apps

Apps are stored in `content/apps.json`. The home page sidebar shows apps via `AppList.svelte`. Currently only the ZIPScribble Map is listed.

### Home Page Sidebar

The right column (`src/routes/+page.svelte`) stacks: **Videos** (3) → **Photos** (2 most recent) → **Apps**. Each section except Videos is separated by a border-top with `margin-top: 1.5em`. The "More…" links use a muted style (`opacity: 0.6`) that brightens on hover.

### Header Navigation

On desktop: all nav items visible. On mobile (≤768px): Apps/Videos/Photos/Papers/About collapse into a "More ▾" dropdown. The `moreActive` derived checks all collapsed paths for active highlighting. The `li[aria-current='page'] > a` selector uses `>` (direct child) to prevent dropdown items from inheriting the active highlight.

### Comment System

New comments are submitted via `src/lib/CommentForm.svelte`, which POSTs to an AWS Lambda (source in `lambda/`). The Lambda creates a GitHub branch, appends the comment to `content/blog/<year>/<slug>+++comments.md`, and opens a PR for moderation. Merging the PR publishes the comment on the next deploy.

Comment format in `+++comments.md` files:
```
[Author Name](https://url) says…
> Comment text

Next Author says…
> Their comment
```

`CommentForm` is shown on non-archived single posts; archived posts show a static "disabled" message. The form sets `loadTime = Date.now()` on mount (via `$effect`) and sends it as `_timestamp` — the Lambda rejects submissions under 3 seconds. A hidden `_hp` honeypot field is silently discarded server-side if non-empty.

**Lambda** (`lambda/`): TypeScript, ESM (`"type": "module"`), compiled with `tsc` to `dist/`. Deploy: `npm run package` zips `dist/`, `node_modules/`, and `package.json` for upload to AWS Lambda (Node 22.x, 15s timeout). Env vars required: `GITHUB_TOKEN`, `GITHUB_OWNER`, `GITHUB_REPO`, `ALLOWED_ORIGIN`. CORS must also be configured at the API Gateway level (HTTP API → CORS settings), not just in Lambda response headers.

`VITE_COMMENT_LAMBDA_URL` must be set at build time — locally via `.env`, in CI via a GitHub Actions secret (already wired in `.github/workflows/deploy.yml`).

### Email Subscription System

Subscribers are stored in DynamoDB (`eagereyes-subscribers` table, PK: `email`, GSI: `token-index` on `token`). Each record has `confirmed` (bool), `unsubscribed` (bool), and `token` (UUID used for confirm/unsubscribe links). A special `_last_sent` record tracks the last newsletter slug to prevent duplicate sends.

**Lambda** (`lambda-newsletter/`): same TypeScript/ESM/Node 22.x pattern as the comment Lambda. Single handler with path-based routing:
- `POST /subscribe` — honeypot + 3s timing check, writes unconfirmed record, sends confirmation email via SES
- `GET /confirm?token=` — marks confirmed, redirects to `/subscribe/confirmed`
- `GET /unsubscribe?token=` — marks unsubscribed, returns inline HTML page
- `POST /send` — protected by `X-Send-Key` header; if `auto:true` fetches `/posts.json` from the live site, skips if same slug as `_last_sent`; sends HTML email to all confirmed subscribers

CORS must be configured at the API Gateway level. `SES_FROM` supports display names: `"eagereyes news <newsletter@eagereyes.org>"`.

`VITE_SUBSCRIBE_LAMBDA_URL` is the base API Gateway URL (no trailing path). The subscribe form posts to `${LAMBDA_URL}/subscribe`. Set at build time via `.env` / GitHub Actions secret.

**Local scripts** (`lambda-newsletter/scripts/`, run with `npx tsx`):
- `import.ts <emails.txt>` — bulk-import emails as unconfirmed; skips existing records
- `send-reconfirm.ts <message.txt> "<subject>"` — sends custom intro email + confirm button to all unconfirmed
- `stats.ts` — confirmed/unconfirmed/unsubscribed counts
- `list.ts [confirmed|unconfirmed|unsubscribed]` — list emails with status

All scripts load env vars from `lambda-newsletter/.env`. See `lambda-newsletter/SETUP.md` for full AWS setup instructions.

**Site**: `src/lib/SubscribeForm.svelte` (hidden when `VITE_SUBSCRIBE_LAMBDA_URL` is unset), `src/routes/subscribe/+page.svelte`, `src/routes/subscribe/confirmed/+page.svelte`. Form is also embedded in the blog post sidebar (`src/lib/Sidebar.svelte`) and home page right column (`src/routes/+page.svelte`).

Auto-newsletter: `.github/workflows/deploy.yml` has a `notify` job that runs after deploy and calls `POST /send` with `{"auto": true}`.

### Solargraph

The interactive solargraph lives at `/app/solargraph` (`src/routes/app/solargraph/`) and `src/lib/solargraph/`.

- `+page.svelte` — city/period selectors (CITIES, PERIOD_PAIRS), period-type toggle (full/summer/winter), playback controls, analemma checkbox; passes `lat`/`lon` to canvas
- `SolargraphCanvas.svelte` — WebGL2 renderer; two-pass Gaussian splat accumulation into RGBA32F FBO, then exponential tone-map to screen
- `solarPosition.ts` — NOAA solar position algorithm (~0.01° accuracy, 2000–2050); returns azimuth (N=0°, clockwise) and refraction-corrected elevation

**Binary data format** (`static/solargraph-data/<city>_<period>.bin`):
```
Bytes 0–3   : uint32 LE — period start (Unix seconds, at solstice)
Bytes 4–7   : uint32 LE — N (sample count)
Bytes 8..   : uint16 LE × N — sample offsets in 5-min units from period start
Bytes 8+2N..: float16 LE × N — DNI values (W/m²)
```
Sun position is **not stored** — it is computed analytically in the browser from the timestamp. This avoids float16 quantization noise (~0.125° azimuth).

**Combined (full-year) binary format** — produced in-browser by `combineBinaryData()` when both summer and winter periods are loaded. Uses **Uint32** for offsets (not Uint16) because the winter offset relative to the summer start exceeds 65 535:
```
Bytes 0–3       : uint32 LE — summer period start (Unix seconds)
Bytes 4–7       : uint32 LE — combined N (sumN + winN)
Bytes 8..       : uint32 LE × N — sample offsets (5-min units from summer start)
Bytes 8+4N..    : float16 LE × N — DNI values
```
`processRawData` and `processAnalemmaData` auto-detect the format: `buf.byteLength === 8 + N*6` → Uint32 offsets; `=== 8 + N*4` → Uint16 offsets.

**Regenerating binary files** (requires NREL API key in repo-root `.env`):
```bash
cd scripts/solargraph
python fetch_data.py                                   # all 12 cities × 9 periods
python fetch_data.py --location-name seattle --period summer2024
```
The script uses `ephem` for solstice dates and `pvlib` for the above-horizon elevation filter only. The pandas timestamp conversion uses `(index - pd.Timestamp("1970-01-01", tz="UTC")) // pd.Timedelta("1s")` — `astype("int64") // 10**9` is wrong on pandas 3.0+ (returns microseconds, not nanoseconds).

**Rendering pipeline in `SolargraphCanvas.svelte`:**
1. Fetch effect downloads `.bin` on city/period change; when `winterPeriod` is set, both files are fetched and merged by `combineBinaryData()`. Result stored in `rawData` (plain) + `rawKey` ($state trigger).
2. Normal process effect runs on `rawKey`, `width`, or `splatScale` change — calls `processRawData()` which computes solar positions, applies adaptive sub-step interpolation (gap-aware, sigma-calibrated), and builds a `Float32Array` of `[azNorm, elevNorm, dniNorm, el_rad]` quads.
3. Analemma process effect runs when `showAnalemma` is true — calls `processAnalemmaData()` (see below).
4. Render effect uploads instance data to GPU and draws.

**Analemma mode** (`showAnalemma` prop / checkbox in `+page.svelte`):

`processAnalemmaData` selects one point per UTC-hour per calendar day, forming figure-8 analemma curves. Key design decisions:
- **Reference time**: position is computed at exactly **H:30:00 UTC** (`tsRef = Math.floor(ts/3600)*3600 + 1800`), not at the sample's actual timestamp. This guarantees all emitted points are at an identical clock time each day and eliminates sunrise/sunset azimuth artifacts (on transitional days when the sun rises just after the sample slot, the reference position is below the horizon and the day is cleanly excluded).
- **Sample selection**: among all samples within 4 minutes of :30 for a given day:hour, keep the one closest to :30. Its DNI is used for brightness; its timestamp is used only to compute `tsRef`.
- **No DNI filtering**: brightness encodes cloud cover naturally — cloudy points render dim and appear as gaps. Do not add a DNI threshold; it causes off-curve fallback samples to appear when the :30 sample is filtered.
- **`minuteDist > 4` gate**: only samples within 4 minutes of :30 are candidates. Natural 5-min data alignment always places the closest sample within 2–3 min of :30; anything farther means the sun rises/sets within that UTC hour and the reference-position check would exclude it anyway, but the gate is a cheap early exit.

**Adding cities or periods:** update `config.json` in `scripts/solargraph/`, re-run `fetch_data.py`, and mirror the CITIES/PERIOD_PAIRS arrays in `src/routes/app/solargraph/+page.svelte`.

### ZIPScribble App

The interactive ZIPScribble map lives under `src/routes/app/zipscribble-map/` and `src/lib/zipscribble/`.

- `App.svelte` — top-level component; accepts a `country` prop; uses `$effect` reactive on country to load data; uses `ResizeObserver` to track SVG dimensions
- `ZIPScribble.svelte` — US-only view with zoom/pan animation (`d3-interpolate`, `tweened`), `Navigator.svelte` bar, and `Title.svelte` panel
- `CountryScribble.svelte` — non-US view; renders a world base map (gray polygons) behind the postal code scribble; uses `geoMercator().fitExtent()` with 24px padding
- `static/zipscribble-data/` — static data files: `us-lower48.csv`, `us-states-20m.json`, `world-50m.json` (TopoJSON), and `zipscribble_<CC>.json` per country
- Country GeoJSON files come in two formats: `FeatureCollection` (most countries) and plain `LineString` (GL, IS, SI, TH) — handled by type check in `CountryScribble.svelte`
- World base map loaded once and cached (guarded by `if (!worldGeoData)`) across country switches
- Dependencies: `d3-geo`, `d3-fetch`, `d3-interpolate`, `topojson-client`, `world-atlas`
