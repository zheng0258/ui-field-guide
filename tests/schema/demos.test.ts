import { readdirSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { readContentFiles } from '../../src/content/fs'
import { validateContent } from '../../src/content/validate'

const demoDir = join(import.meta.dirname, '..', '..', 'src', 'demos', 'web')
const files = readdirSync(demoDir).filter((name) => name.endsWith('.html'))
const demoIds = files.filter((name) => !name.endsWith('.thumb.html')).map((name) => name.replace(/\.html$/, ''))
const thumbIds = files.filter((name) => name.endsWith('.thumb.html')).map((name) => name.replace(/\.thumb\.html$/, ''))
const { concepts } = validateContent(readContentFiles())
const webIds = concepts
  .filter((concept) => 'platforms' in concept && concept.platforms?.web)
  .map((concept) => concept.id)

describe('Web demos', () => {
  it('exist for every concept with a Web entry', () => {
    expect(webIds.filter((id) => !demoIds.includes(id))).toEqual([])
  })

  it('belong to a concept with a Web entry', () => {
    expect(demoIds.filter((id) => !webIds.includes(id))).toEqual([])
  })

  it('only add thumbnails next to an existing demo', () => {
    expect(thumbIds.filter((id) => !demoIds.includes(id))).toEqual([])
  })
})
