import { readdirSync, readFileSync } from 'node:fs'
import { join, relative, sep } from 'node:path'
import type { SourceFile } from './validate'

export const CONTENT_DIR = join(import.meta.dirname, '..', '..', 'content')

function walk(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) return walk(full)
    return entry.name.endsWith('.yaml') ? [full] : []
  })
}

export function readContentFiles(dir: string = CONTENT_DIR): SourceFile[] {
  return walk(dir).map((full) => ({
    path: relative(dir, full).split(sep).join('/'),
    raw: readFileSync(full, 'utf8'),
  }))
}
