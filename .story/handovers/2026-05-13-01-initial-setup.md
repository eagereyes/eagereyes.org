# Initial Storybloq Setup — eagereyes.org

## Session Summary

First storybloq setup session for eagereyes.org. Analyzed the existing codebase and created the initial roadmap structure.

## Project Overview

- **Site:** eagereyes.org — Robert Kosara's personal website about data visualization and visual communication
- **Stack:** SvelteKit static site, Svelte 5 (runes API), TypeScript, adapter-static
- **Stage:** Mature, running in production. Hundreds of commits; recent work was a large content migration.

## Phases Created

| Phase | Name | Status | Notes |
|-------|------|--------|-------|
| p1 | Foundation | complete | Core SvelteKit infrastructure, all content types |
| p2 | Content Migration | complete | H1 stripping (571 posts), featuredImage.render, file renames |
| p3 | Reader Engagement | complete | Comment Lambda, newsletter Lambda, subscribe form, RSS |
| p4 | Site Polish | active | SEO, accessibility, performance, ongoing improvements |
| p5 | New Features | planned | Future interactive apps, search, content types |

## Tickets Created

- T-001: Audit Open Graph / meta description tags (p4)
- T-002: Add JSON-LD structured data for posts and publications (p4)
- T-003: Performance audit — image sizing, lazy loading, LCP (p4)
- T-004: Verify newsletter Lambda deployment (p4)
- T-005: Improve search UX — matched term highlighting (p4)
- T-006: New interactive data viz app — placeholder (p5)
- T-007: Video transcripts / captions (p5)
- T-008: Tag cloud / tag browsing (p5)

## Infrastructure Notes

- Comment system: AWS Lambda (`lambda/`) + GitHub PR moderation flow
- Newsletter: AWS Lambda (`lambda-newsletter/`) + DynamoDB + SES
- Both Lambdas use TypeScript/ESM, Node 22.x, `GITHUB_TOKEN` / `SES_FROM` env vars
- `.gitignore` updated to exclude `.story/snapshots/`, `.story/sessions/`, `.story/status.json`
