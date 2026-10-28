import { describe, expect, it } from 'vitest'
import { stringify } from 'yaml'
import { validateContent, type SourceFile } from '../../src/content/validate'

const componentData = (overrides: Record<string, unknown> = {}) => ({
  id: 'popup-select',
  kind: 'component',
  name: { en: 'Pop-up select', zh: '彈出式選擇' },
  category: 'input',
  platforms: {
    macos: { name: 'Pop-up button', api: { appkit: 'NSPopUpButton' } },
  },
  prompt: { keywords: ['macOS pop-up button', 'NSPopUpButton'] },
  status: 'draft',
  ...overrides,
})

const file = (data: Record<string, unknown>, path = `component/${String(data.id)}.yaml`): SourceFile => ({
  path,
  raw: stringify(data),
})

const messages = (files: SourceFile[]) => validateContent(files).issues.map((issue) => issue.message)

describe('validateContent', () => {
  it('accepts a minimal component and fills defaults', () => {
    const { concepts, issues } = validateContent([file(componentData())])
    expect(issues).toEqual([])
    expect(concepts[0]).toMatchObject({ aliases: [], confusedWith: [], prompt: { avoid: [], coding: null } })
  })

  it('rejects ids that are not kebab-case', () => {
    expect(messages([file(componentData({ id: 'PopupSelect' }), 'component/PopupSelect.yaml')])).toContainEqual(
      expect.stringContaining('kebab-case'),
    )
  })

  it('requires the id to match the file name', () => {
    expect(messages([file(componentData(), 'component/other.yaml')])).toContainEqual(
      expect.stringContaining('does not match file name'),
    )
  })

  it('requires the kind to match the folder', () => {
    expect(messages([file(componentData(), 'pattern/popup-select.yaml')])).toContainEqual(
      expect.stringContaining('does not match folder'),
    )
  })

  it('requires at least one platform on a component', () => {
    expect(messages([file(componentData({ platforms: {} }))])).toContainEqual(
      expect.stringContaining('at least one platform'),
    )
  })

  it('rejects empty platform objects', () => {
    expect(messages([file(componentData({ platforms: { macos: {} } }))]).length).toBeGreaterThan(0)
  })

  it('requires traits, cssKeys and prompt.image on a style', () => {
    const style = { ...componentData({ id: 'glassmorphism', kind: 'style' }), platforms: undefined }
    const issues = messages([file(style, 'style/glassmorphism.yaml')])
    expect(issues.some((message) => message.startsWith('traits'))).toBe(true)
    expect(issues.some((message) => message.startsWith('cssKeys'))).toBe(true)
    expect(issues.some((message) => message.startsWith('prompt.image'))).toBe(true)
  })

  it('requires at least two English prompt keywords', () => {
    expect(messages([file(componentData({ prompt: { keywords: ['NSPopUpButton'] } }))])).toContainEqual(
      expect.stringContaining('at least 2'),
    )
    expect(messages([file(componentData({ prompt: { keywords: ['下拉', '選單'] } }))])).toContainEqual(
      expect.stringContaining('English'),
    )
  })

  it('only allows guideline links on Apple, Material or W3C hosts', () => {
    const withGuideline = (guideline: string) =>
      componentData({ platforms: { macos: { name: 'Pop-up button', api: { appkit: 'NSPopUpButton' }, guideline } } })
    expect(messages([file(withGuideline('https://example.com/popup'))])).toContainEqual(
      expect.stringContaining('guideline must be on'),
    )
    expect(
      messages([file(withGuideline('https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons'))]),
    ).toEqual([])
  })

  it('reports dangling confusedWith and prompt.avoid references', () => {
    const issues = messages([
      file(
        componentData({ confusedWith: ['combobox'], prompt: { keywords: ['a b', 'c d'], avoid: ['pull-down-menu'] } }),
      ),
    ])
    expect(issues).toContain('confusedWith points at unknown id "combobox"')
    expect(issues).toContain('prompt.avoid points at unknown id "pull-down-menu"')
  })

  it('accepts references between existing concepts', () => {
    const issues = messages([
      file(componentData({ confusedWith: ['combobox'] })),
      file(componentData({ id: 'combobox', confusedWith: ['popup-select'] })),
    ])
    expect(issues).toEqual([])
  })

  it('reports duplicate ids', () => {
    expect(messages([file(componentData()), file(componentData())])).toContainEqual(
      expect.stringContaining('duplicate id'),
    )
  })

  it('reports invalid YAML without throwing', () => {
    expect(messages([{ path: 'component/broken.yaml', raw: 'id: [unclosed' }])).toContainEqual(
      expect.stringContaining('invalid YAML'),
    )
  })
})
