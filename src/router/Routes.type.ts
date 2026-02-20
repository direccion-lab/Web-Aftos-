const BASE_PATH = '/'

export const ROUTES = {
  HOME: BASE_PATH,
  STORE: `${BASE_PATH}store`,
  DONATIONS: `${BASE_PATH}donations`,
} as const

export const SECTION_IDS = {
  GAMES: 'games',
  ABOUT: 'about',
  SPONSORS: 'sponsors',
  TEAM: 'team',
  CONTACT: 'contact',
} as const

export type RoutePath = typeof ROUTES.HOME | typeof ROUTES.STORE | typeof ROUTES.DONATIONS

export const ROUTES_LIST = [ROUTES.HOME, ROUTES.STORE, ROUTES.DONATIONS] as const
