import { Gamepad2, Smartphone } from 'lucide-react'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import * as S from './GameCard.styled'

export type GameStatus = 'coming_soon' | 'new' | 'available'
export type GamePlatform = 'steam' | 'mobile'

export interface GameData {
  id: string
  coverImage: string
  previewVideo?: string
  titleKey: string
  genreKey: string
  status: GameStatus
  platforms: GamePlatform[]
}

interface GameCardProps {
  game: GameData
  index: number
}

const STATUS_LABEL_KEYS: Record<GameStatus, string> = {
  coming_soon: 'games.statusComingSoon',
  new: 'games.statusNew',
  available: 'games.statusAvailable',
}

const PLATFORM_ICONS: Record<GamePlatform, React.ReactNode> = {
  steam: <Gamepad2 size={16} />,
  mobile: <Smartphone size={16} />,
}

export const GameCard = ({ game, index }: GameCardProps) => {
  const { t } = useTranslation()
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => {})
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <S.Card $index={index} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <S.CoverWrapper>
        <S.CoverImage src={game.coverImage} alt={t(game.titleKey)} loading="lazy" />

        {game.previewVideo && (
          <S.CoverVideo
            ref={videoRef}
            src={game.previewVideo}
            muted
            loop
            playsInline
            preload="none"
          />
        )}

        <S.Badge $variant={game.status}>{t(STATUS_LABEL_KEYS[game.status])}</S.Badge>
      </S.CoverWrapper>

      <S.CardInfo>
        <S.GameTitle>{t(game.titleKey)}</S.GameTitle>
        <S.GameGenre>{t(game.genreKey)}</S.GameGenre>
      </S.CardInfo>

      <S.Platforms>
        {game.platforms.map((platform) => (
          <S.PlatformIcon key={platform} title={platform}>
            {PLATFORM_ICONS[platform]}
          </S.PlatformIcon>
        ))}
      </S.Platforms>
    </S.Card>
  )
}
