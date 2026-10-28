# 0002 — Platform-first navigation, Web demos first

- Status: accepted
- Date: 2026-10-28

## Context

Phase 0 shipped one page per concept (`/c/<id>`) with four platform names side by side and no
visuals. In use, people arrive knowing which platform they are looking at, and recognise a
component by sight before they know its name; a text list of 10 items did not support that.

## Decision

- Navigation is **platform → component**: `/` picks a platform, `/<platform>` shows that
  platform's components grouped by category with a thumbnail each, `/<platform>/<id>` shows the
  live demo, its source, the four-platform names (current one highlighted) and the prompt.
- The data model is unchanged: one platform-neutral concept per YAML file. Pages are a
  platform-scoped *view* of a concept, so cross-platform links stay one click away.
- `category` becomes a fixed enum (`actions`, `navigation`, `disclosure`, `overlays`, `input`,
  `data`, `status`, `containers`), taken from the Web component table.
- **Web demos come first** (all ~45 Web components), ahead of the handoff's macOS-first order:
  native HTML and ARIA patterns make the demos authentic rather than recreations, and every
  concept already has a Web column. macOS, iOS and Android pages list names and APIs and show a
  "demo in progress" placeholder until their demos land.
- A demo is a plain HTML file, `src/demos/<platform>/<id>.html`, rendered live and shown as source
  from the same file. Thumbnails reuse it inert and zoomed out; `<id>.thumb.html` overrides it for
  overlays whose interesting state is "open". Shared behaviors (dialogs, tabs, toasts, tree,
  carousel, sorting, context menu) attach by data attributes and ARIA roles in
  `src/demos/behaviors.ts`.

## Consequences

- `/c/<id>` URLs from phase 0 no longer exist.
- Each platform's demo set needs its own stylesheet (`src/demos/<platform>/*.css`); macOS demos
  will use the generated tokens, Web demos use a hand-written neutral palette.
- `tests/schema/demos.test.ts` keeps demos and concepts in sync.
