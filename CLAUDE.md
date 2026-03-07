# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About

eagereyes.org is a personal website about data visualization and visual communication by Robert Kosara. It's a SvelteKit static site that renders blog posts from Markdown files.

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

- `content/blog-meta.json` — metadata array for all posts (slug, title, description, date, tags, featuredImage, archived, comments count)
- `content/blog/<year>/<slug>.md` — full Markdown content for each post
- `content/blog/<year>/<slug>+++comments.md` — comments for posts that have them (keyed by `comments > 0` in meta)
- `content/videos.json` — video metadata (slug, title, description, ytslug, blogpost, date)
- `content/papers.json` — academic paper metadata

Blog posts are plain Markdown (no frontmatter). All metadata is in `blog-meta.json`, not the files themselves.

Static content pages (about, contact, license, pie-charts, subscribe) live in `content/<slug>.md`. Some have YAML frontmatter that is stripped before rendering.

### Routing

| Route | Description |
|---|---|
| `/` | Homepage with recent blog posts and videos |
| `/blog/` | All posts index |
| `/blog/<year>` | Posts filtered by year |
| `/blog/<year>/<slug>` | Single post |
| `/video/` | Video list |
| `/video/<slug>` | Single video |
| `/tag/<tag>` | Posts filtered by tag |
| `/publications/` | Papers list |
| `/publications/<key>` | Single paper (key uses `-` instead of `:`) |
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
- `src/lib/blog-utils.ts` — `BlogPost` type, `tagNames` map, `formatDate()`
- `src/lib/video-utils.ts` — `Video` type
- `src/lib/BlogList.svelte` — reusable blog post list with filtering by year/tag/archived
- `src/lib/VideoList.svelte` — reusable video list
- `src/lib/Sidebar.svelte` — sidebar component used on blog post pages

### CSS / Theming

Global CSS variables are defined in `src/app.css` under `:root`. Dark mode uses `@media (prefers-color-scheme: dark)`. Key variables: `--color-theme-1` (purple), `--color-theme-2` (blue), `--color-text`, `--color-bg-1`, `--color-border`.

### Data Flow

Server-side load functions (`+page.server.ts`) import JSON data files directly and pass them as page props. Markdown is read from disk using `node:fs/promises` and rendered client-side with the `marked` library (`parse()` from `marked`).

### Tags

The `tagNames` map in `src/lib/blog-utils.ts` maps tag slugs to display names. Tags not in this map fall back to the raw slug.
