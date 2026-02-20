export const BREAKPOINTS = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1200,
} as const

export const media = {
  xs: `@media (max-width: ${BREAKPOINTS.xs}px)`,
  sm: `@media (max-width: ${BREAKPOINTS.sm}px)`,
  md: `@media (max-width: ${BREAKPOINTS.md}px)`,
  lg: `@media (max-width: ${BREAKPOINTS.lg}px)`,
  minSm: `@media (min-width: ${BREAKPOINTS.sm + 1}px)`,
  minMd: `@media (min-width: ${BREAKPOINTS.md}px)`,
  minLg: `@media (min-width: ${BREAKPOINTS.lg}px)`,
} as const
