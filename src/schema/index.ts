import { z } from 'zod'
import { GUIDELINE_HOSTS } from './constants'

export * from './constants'

const KEBAB_CASE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const HAS_LATIN = /[A-Za-z]/

export const IdSchema = z.string().regex(KEBAB_CASE, 'id must be kebab-case')

const GuidelineSchema = z
  .url({ protocol: /^https$/ })
  .refine((value) => (GUIDELINE_HOSTS as readonly string[]).includes(new URL(value).hostname), {
    message: `guideline must be on one of: ${GUIDELINE_HOSTS.join(', ')}`,
  })

const PlatformEntrySchema = z.strictObject({
  name: z.string().min(1),
  api: z.record(z.string(), z.string().min(1)).refine((api) => Object.keys(api).length > 0, {
    message: 'api needs at least one framework entry',
  }),
  guideline: GuidelineSchema.optional(),
  states: z.array(z.string().min(1)).optional(),
  sizes: z.array(z.string().min(1)).optional(),
  demo: z.boolean().optional(),
})
export type PlatformEntry = z.infer<typeof PlatformEntrySchema>

const PlatformsSchema = z
  .strictObject({
    macos: PlatformEntrySchema.optional(),
    ios: PlatformEntrySchema.optional(),
    android: PlatformEntrySchema.optional(),
    web: PlatformEntrySchema.optional(),
  })
  .refine((platforms) => Object.keys(platforms).length > 0, {
    message: 'platforms needs at least one platform; omit platforms that have no equivalent',
  })

const PromptSchema = z.strictObject({
  keywords: z
    .array(z.string().regex(HAS_LATIN, 'keywords must be English terms'))
    .min(2, 'prompt.keywords needs at least 2 English terms; the first is the canonical name'),
  descriptors: z.array(z.string().min(1)).default([]),
  avoid: z.array(IdSchema).default([]),
  coding: z.string().min(1).nullable().default(null),
  image: z.string().min(1).nullable().default(null),
})

const BaseSchema = z.strictObject({
  id: IdSchema,
  name: z.strictObject({ en: z.string().min(1), zh: z.string().min(1) }),
  aliases: z.array(z.string().min(1)).default([]),
  describe: z.array(z.string().min(1)).default([]),
  category: z.string().min(1),
  confusedWith: z.array(IdSchema).default([]),
  prompt: PromptSchema,
  status: z.enum(['draft', 'verified']),
})

export const ComponentSchema = BaseSchema.extend({
  kind: z.literal('component'),
  platforms: PlatformsSchema,
})

export const StyleSchema = BaseSchema.extend({
  kind: z.literal('style'),
  traits: z.array(z.string().min(1)).min(1),
  cssKeys: z.array(z.string().min(1)).min(1),
  prompt: PromptSchema.extend({ image: z.string().min(1) }),
})

export const PatternSchema = BaseSchema.extend({
  kind: z.literal('pattern'),
  group: z.enum(['layout', 'feedback', 'motion', 'effect']),
  platforms: PlatformsSchema.optional(),
  cssKeys: z.array(z.string().min(1)).default([]),
})

export const ConceptSchema = z.discriminatedUnion('kind', [ComponentSchema, StyleSchema, PatternSchema])

export type Concept = z.infer<typeof ConceptSchema>
export type ComponentConcept = z.infer<typeof ComponentSchema>
export type Kind = Concept['kind']
export const KINDS = ['component', 'style', 'pattern'] as const satisfies readonly Kind[]
