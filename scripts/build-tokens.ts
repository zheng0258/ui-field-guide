import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { MeasurementSchema, renderTokens } from './tokens'

const root = join(import.meta.dirname, '..')
const source = 'tools/measure-macos/output/macos.json'
const target = 'src/tokens/macos.css'

const parsed = MeasurementSchema.safeParse(JSON.parse(readFileSync(join(root, source), 'utf8')))
if (!parsed.success) {
  process.stderr.write(`invalid measurement in ${source}:\n${parsed.error.message}\n`)
  process.exit(1)
}

writeFileSync(join(root, target), renderTokens(parsed.data, source))
process.stdout.write(`wrote ${target}\n`)
