import gameCover from '@assets/game.png'
import ANIMATICA from '@assets/trailer.mp4'
import { GameCard, type GameData } from '@features/index'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { GameModal } from '@/components/GameModal/GameModal'
import { TRANSLATION } from '@/i18n/translations/keys'
import * as S from './GamePage.styled'

const GAMES: GameData[] = [
  {
    id: 'afesis',
    coverImage: gameCover,
    previewVideo: ANIMATICA,
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
            <button
              key={game.id}
              type="button"
              onClick={() => setModalOpen(true)}
              style={{
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                padding: 0,
                width: '100%',
              }}
            >
              <GameCard game={game} index={index} />
            </button>
          ))}
        </S.GamesGrid>
      </S.Container>

      <GameModal isOpen={modalOpen} onClose={() => setModalOpen(false)} coverImage={gameCover} />
    </S.PageWrapper>
  )
}
