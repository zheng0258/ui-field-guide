import type { Platform } from '../schema/constants'

/**
 * Demos are plain HTML files at `src/demos/<platform>/<id>.html`: the same markup is rendered live
 * and shown as source. An optional `<id>.thumb.html` replaces it in thumbnails, for overlays whose
 * interesting state (open) cannot be shown without interaction.
 */
const files = import.meta.glob<string>('./*/*.html', { query: '?raw', import: 'default', eager: true })

export interface Demo {
  html: string
  thumb: string
}

const FILE_PATTERN = /^\.\/(?<platform>[^/]+)\/(?<id>[^/.]+)(?<thumb>\.thumb)?\.html$/

const demos = new Map<string, Demo>()
const thumbs = new Map<string, string>()
for (const [path, html] of Object.entries(files)) {
  const groups = FILE_PATTERN.exec(path)?.groups
  if (!groups) continue
  const key = `${groups.platform}/${groups.id}`
  if (groups.thumb) thumbs.set(key, html)
  else demos.set(key, { html, thumb: html })
}
for (const [key, thumb] of thumbs) {
  const demo = demos.get(key)
  if (demo) demos.set(key, { ...demo, thumb })
}

export function findDemo(platform: Platform, id: string): Demo | undefined {
  return demos.get(`${platform}/${id}`)
}

export function demoKeys(): string[] {
  return [...demos.keys()]
}
