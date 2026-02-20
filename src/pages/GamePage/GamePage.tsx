import { GameCard, type GameData, type GamePlatform } from '@features/index'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TRANSLATION } from '@/i18n/translations/keys'
import * as S from './GamePage.styled'

const GAMES: GameData[] = [
  {
    id: 'game-1',
    coverImage: '/images/games/game-1-cover.jpg',
    previewVideo: '/videos/games/game-1-preview.mp4',
    titleKey: TRANSLATION.GAMES.GAME_1_TITLE,
    genreKey: TRANSLATION.GAMES.GAME_1_GENRE,
    status: 'coming_soon',
    platforms: ['steam'],
  },
  {
    id: 'game-2',
    coverImage: '/images/games/game-2-cover.jpg',
    previewVideo: '/videos/games/game-2-preview.mp4',
    titleKey: TRANSLATION.GAMES.GAME_2_TITLE,
    genreKey: TRANSLATION.GAMES.GAME_2_GENRE,
    status: 'new',
    platforms: ['steam', 'mobile'],
  },
  {
    id: 'game-3',
    coverImage: '/images/games/game-3-cover.jpg',
    previewVideo: '/videos/games/game-3-preview.mp4',
    titleKey: TRANSLATION.GAMES.GAME_3_TITLE,
    genreKey: TRANSLATION.GAMES.GAME_3_GENRE,
    status: 'available',
    platforms: ['mobile'],
  },
]

type FilterOption = 'all' | GamePlatform

const FILTER_OPTIONS: { key: FilterOption; labelKey: string }[] = [
  { key: 'all', labelKey: TRANSLATION.GAMES.FILTER_ALL },
  { key: 'steam', labelKey: TRANSLATION.GAMES.FILTER_STEAM },
  { key: 'mobile', labelKey: TRANSLATION.GAMES.FILTER_MOBILE },
]

export const GamePage = () => {
  const { t } = useTranslation()
  const [activeFilter, setActiveFilter] = useState<FilterOption>('all')

  const filteredGames = useMemo(() => {
    if (activeFilter === 'all') return GAMES
    return GAMES.filter((game) => game.platforms.includes(activeFilter))
  }, [activeFilter])

  return (
    <S.PageWrapper>
      <S.Container>
        <S.Header>
          <S.Title>{t(TRANSLATION.GAMES.PAGE_TITLE)}</S.Title>

          <S.Filters>
            {FILTER_OPTIONS.map(({ key, labelKey }) => (
              <S.FilterButton
                key={key}
                $active={activeFilter === key}
                onClick={() => setActiveFilter(key)}
              >
                {t(labelKey)}
              </S.FilterButton>
            ))}
          </S.Filters>
        </S.Header>

        <S.GamesGrid>
          {filteredGames.length > 0 ? (
            filteredGames.map((game, index) => <GameCard key={game.id} game={game} index={index} />)
          ) : (
            <S.EmptyState>
              <S.EmptyIcon>🎮</S.EmptyIcon>
              <S.EmptyText>{t(TRANSLATION.GAMES.EMPTY)}</S.EmptyText>
            </S.EmptyState>
          )}
        </S.GamesGrid>
      </S.Container>
    </S.PageWrapper>
  )
}
