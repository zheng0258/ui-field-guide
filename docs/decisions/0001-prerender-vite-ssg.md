# 0001 — Prerender with vite-ssg, not VitePress

- Status: accepted
- Date: 2026-10-28

## Context

Handoff phase 0 asks for a small comparison of VitePress and `vite-ssg`, one concept page each, before
choosing how every concept becomes a static HTML page.

Both spikes render `content/component/popup-select.yaml` to a prerendered page that shows all four
platform names with JavaScript disabled.

| | vite-ssg (this repo) | VitePress 1.6.4 (spike) |
| --- | --- | --- |
| Dynamic pages from YAML | `includedRoutes` + a Vite virtual module | `[id].paths.ts` + `*.data.ts` loader |
| Page authoring | Plain Vue SFC + vue-router | Markdown with embedded Vue; theme owns layout |
| Client JS, one concept page | ~162 KB total (all routes, Fuse.js included) | ~165 KB (default theme, no search) |
| Custom UI (search, platform switch, XState panels) | Ordinary app code | Must fight or replace the docs theme |
| Build-time validation | Content plugin fails the build on any schema issue | Possible in a data loader, less direct |

## Decision

Use `vite-ssg`. The site is an app with docs-like pages, not a docs site with a few widgets: the
upcoming state panels, demos, theme switch and search are all custom Vue, and VitePress's theme
and Markdown-first routing would mostly be in the way. Bundle size is a wash.

## Consequences

- Each concept is `/c/<id>/index.html`; the catch-all route is copied to `404.html` for static hosts.
- No built-in Markdown pipeline. If long-form articles appear (style and pattern write-ups),
  revisit with `unplugin-vue-markdown` rather than switching frameworks.
