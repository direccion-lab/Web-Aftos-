import { GameCard, type GameData } from '@features/index'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TRANSLATION } from '@/i18n/translations/keys'
import { GameModal } from '@/components/GameModal/GameModal'
import * as S from './GamePage.styled'

const GAMES: GameData[] = [
  {
    id: 'afesis',
    coverImage: '/images/games/game-1-cover.jpg',
    previewVideo: '/videos/games/game-1-preview.mp4',
    titleKey: TRANSLATION.GAMES.GAME_1_TITLE,
    genreKey: TRANSLATION.GAMES.GAME_1_GENRE,
    status: 'coming_soon',
    platforms: ['steam', 'mobile'],
  },
]

export const GamePage = () => {
  const { t } = useTranslation()
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <S.PageWrapper>
      <S.Container>
        <S.Header>
          <S.Title>{t(TRANSLATION.GAMES.PAGE_TITLE)}</S.Title>
        </S.Header>

        <S.GamesGrid>
          {GAMES.map((game, index) => (
            <div key={game.id} onClick={() => setModalOpen(true)} style={{ cursor: 'pointer' }}>
              <GameCard game={game} index={index} />
            </div>
          ))}
        </S.GamesGrid>
      </S.Container>

      <GameModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </S.PageWrapper>
  )
}
