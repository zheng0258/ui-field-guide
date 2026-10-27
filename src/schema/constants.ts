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
