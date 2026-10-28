import { describe, expect, it } from 'vitest'
import { readContentFiles } from '../../src/content/fs'
import { formatIssues, validateContent } from '../../src/content/validate'

describe('content/', () => {
  const { concepts, issues } = validateContent(readContentFiles())

  it('passes schema validation and cross-reference checks', () => {
    expect(issues, formatIssues(issues)).toEqual([])
  })

  it('covers the Web component list (about 45 items)', () => {
    expect(concepts.filter((concept) => concept.kind === 'component').length).toBeGreaterThanOrEqual(45)
  })
})
