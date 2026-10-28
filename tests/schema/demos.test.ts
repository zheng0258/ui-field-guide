import { existsSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { readContentFiles } from '../../src/content/fs'
import { validateContent } from '../../src/content/validate'
import { PLATFORMS, type Platform } from '../../src/schema'

/** Platforms whose demo set is complete; every concept on them must have a demo. */
const COMPLETE: readonly Platform[] = ['web', 'macos', 'ios', 'android']

const { concepts } = validateContent(readContentFiles())
const demosRoot = join(import.meta.dirname, '..', '..', 'src', 'demos')

function demoFiles(platform: Platform) {
  const dir = join(demosRoot, platform)
  const files = existsSync(dir) ? readdirSync(dir).filter((name) => name.endsWith('.html')) : []
  return {
    demos: files.filter((name) => !name.endsWith('.thumb.html')).map((name) => name.replace(/\.html$/, '')),
    thumbs: files.filter((name) => name.endsWith('.thumb.html')).map((name) => name.replace(/\.thumb\.html$/, '')),
  }
}

const idsOn = (platform: Platform) =>
  concepts.filter((concept) => 'platforms' in concept && concept.platforms?.[platform]).map((concept) => concept.id)

describe.each(PLATFORMS)('%s demos', (platform) => {
  const { demos, thumbs } = demoFiles(platform)
  const ids = idsOn(platform)

  it.runIf(COMPLETE.includes(platform))('exist for every concept on the platform', () => {
    expect(ids.filter((id) => !demos.includes(id))).toEqual([])
  })

  it('belong to a concept on the platform', () => {
    expect(demos.filter((id) => !ids.includes(id))).toEqual([])
  })

  it('only add thumbnails next to an existing demo', () => {
    expect(thumbs.filter((id) => !demos.includes(id))).toEqual([])
  })
})
