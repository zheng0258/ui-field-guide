# UI Field Guide

**Spot it, name it, prompt it.** A cross-platform UI component field guide: one concept, four platform
names — macOS, iOS, Android and Web — plus a ready-to-copy prompt for coding agents.

> Status: phase 0 (foundations). Content is `draft` until each API mapping is verified against official docs.

## How it works

- Pick a platform, then find the component by its thumbnail: `/web` → `/web/modal-dialog`.
  Each page has a live demo with its HTML source, the names on all four platforms, and a prompt.
  Web has all ~45 components with demos; macOS, iOS and Android list names and APIs, demos next.

- Every concept is one YAML file in `content/<kind>/<id>.yaml`, validated by a Zod discriminated union
  (`src/schema/`). Broken cross-references fail CI.
- Each concept is prerendered to its own static page with `vite-ssg`; search (Chinese, English,
  aliases, plain-language descriptions) runs client-side with Fuse.js.
- macOS design tokens are measured from real AppKit controls by a Swift script
  (`tools/measure-macos`) and turned into CSS custom properties — never hand-written.

## Develop

Requires Node 22+, pnpm 10 (`corepack enable` or `npx pnpm@10`), and macOS + Xcode command line tools
for token measurement.

```bash
pnpm install
pnpm dev
```

| Command                                    | What it does                                                           |
| ------------------------------------------ | ---------------------------------------------------------------------- |
| `pnpm content:check`                       | Validate all YAML and cross-references                                 |
| `pnpm test`                                | Schema, search, prompt and token tests                                 |
| `pnpm lint` / `pnpm typecheck`             | ESLint + Prettier / vue-tsc                                            |
| `pnpm build`                               | Prerender verified concepts to `dist/` (`INCLUDE_DRAFTS=1` for drafts) |
| `pnpm tokens:measure && pnpm tokens:build` | Re-measure macOS controls and regenerate `src/tokens/`                 |

## Docs

Start with [`docs/handoff.md`](docs/handoff.md); decisions live in [`docs/decisions/`](docs/decisions/).

## Legal

Unofficial reference. Not affiliated with or endorsed by Apple or Google. macOS and iOS are trademarks
of Apple Inc.; Android and Material Design are trademarks of Google LLC. No Apple fonts, SF Symbols
artwork or logos are included. Code is [MIT](LICENSE).
