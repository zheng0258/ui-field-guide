// Zod-free so browser code can import these without bundling the validator.
export const PLATFORMS = ['macos', 'ios', 'android', 'web'] as const
export type Platform = (typeof PLATFORMS)[number]

export const PLATFORM_LABELS: Record<Platform, string> = {
  macos: 'macOS',
  ios: 'iOS',
  android: 'Android',
  web: 'Web',
}

/** Hosts a `guideline` link may point to: Apple, Material / Android, W3C. */
export const GUIDELINE_HOSTS = [
  'developer.apple.com',
  'm3.material.io',
  'm2.material.io',
  'material.io',
  'developer.android.com',
  'www.w3.org',
  'w3.org',
] as const

/** Platform-neutral groupings, in the order platform pages list them. */
export const CATEGORIES = [
  'actions',
  'navigation',
  'disclosure',
  'overlays',
  'input',
  'data',
  'status',
  'containers',
] as const
export type Category = (typeof CATEGORIES)[number]

export const CATEGORY_LABELS: Record<Category, string> = {
  actions: '動作',
  navigation: '導覽',
  disclosure: '展開收合',
  overlays: '覆蓋層',
  input: '輸入',
  data: '資料',
  status: '狀態',
  containers: '容器',
}

export function isPlatform(value: unknown): value is Platform {
  return typeof value === 'string' && (PLATFORMS as readonly string[]).includes(value)
}
