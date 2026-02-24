import { X } from 'lucide-react'
import { useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { TRANSLATION } from '@/i18n/translations/keys'
import * as S from './GameModal.styled'

interface GameModalProps {
  isOpen: boolean
  onClose: () => void
}

export const GameModal = ({ isOpen, onClose }: GameModalProps) => {
  const { t } = useTranslation()

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose]
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleKeyDown])

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <S.Overlay $visible={isOpen} onClick={handleOverlayClick}>
      <S.Modal $visible={isOpen}>
        <S.CloseButton onClick={onClose} aria-label={t(TRANSLATION.GAME_MODAL.CLOSE)}>
          <X size={18} />
        </S.CloseButton>

        <S.Content>
          <S.ModalTitle>{t(TRANSLATION.GAMES.GAME_1_TITLE)}</S.ModalTitle>

          <S.Section>
            <S.SectionTitle>{t(TRANSLATION.GAME_MODAL.DESCRIPTION_TITLE)}</S.SectionTitle>
            <S.HighlightText>{t(TRANSLATION.GAME_MODAL.DESCRIPTION_SHORT)}</S.HighlightText>
            <S.Text>{t(TRANSLATION.GAME_MODAL.DESCRIPTION_FULL)}</S.Text>
          </S.Section>

          <S.Divider />

          <S.Section>
            <S.SectionTitle>{t(TRANSLATION.GAME_MODAL.STORY_TITLE)}</S.SectionTitle>
            <S.Text>{t(TRANSLATION.GAME_MODAL.STORY_DESC)}</S.Text>
          </S.Section>

          <S.Divider />

          <S.Section>
            <S.SectionTitle>{t(TRANSLATION.GAME_MODAL.FEATURES_TITLE)}</S.SectionTitle>
            <S.FeatureGrid>
              <S.FeatureCard>
                <S.FeatureTitle>{t(TRANSLATION.GAME_MODAL.FEATURE_1_TITLE)}</S.FeatureTitle>
                <S.FeatureDesc>{t(TRANSLATION.GAME_MODAL.FEATURE_1_DESC)}</S.FeatureDesc>
              </S.FeatureCard>
              <S.FeatureCard>
                <S.FeatureTitle>{t(TRANSLATION.GAME_MODAL.FEATURE_2_TITLE)}</S.FeatureTitle>
                <S.FeatureDesc>{t(TRANSLATION.GAME_MODAL.FEATURE_2_DESC)}</S.FeatureDesc>
              </S.FeatureCard>
              <S.FeatureCard>
                <S.FeatureTitle>{t(TRANSLATION.GAME_MODAL.FEATURE_3_TITLE)}</S.FeatureTitle>
                <S.FeatureDesc>{t(TRANSLATION.GAME_MODAL.FEATURE_3_DESC)}</S.FeatureDesc>
              </S.FeatureCard>
              <S.FeatureCard>
                <S.FeatureTitle>{t(TRANSLATION.GAME_MODAL.FEATURE_4_TITLE)}</S.FeatureTitle>
                <S.FeatureDesc>{t(TRANSLATION.GAME_MODAL.FEATURE_4_DESC)}</S.FeatureDesc>
              </S.FeatureCard>
            </S.FeatureGrid>
          </S.Section>

          <S.Divider />

          <S.InfoRow>
            <S.InfoBadge>
              <S.InfoLabel>{t(TRANSLATION.GAME_MODAL.LANGUAGES_TITLE)}</S.InfoLabel>
              <S.InfoValue>{t(TRANSLATION.GAME_MODAL.LANGUAGES_LIST)}</S.InfoValue>
            </S.InfoBadge>
            <S.InfoBadge>
              <S.InfoLabel>{t(TRANSLATION.GAME_MODAL.PLATFORMS_TITLE)}</S.InfoLabel>
              <S.InfoValue>{t(TRANSLATION.GAME_MODAL.PLATFORMS_DESC)}</S.InfoValue>
            </S.InfoBadge>
          </S.InfoRow>
        </S.Content>
      </S.Modal>
    </S.Overlay>
  )
}
