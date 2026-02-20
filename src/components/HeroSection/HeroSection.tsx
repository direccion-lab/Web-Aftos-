import { useTranslation } from 'react-i18next'
import * as S from './HeroSection.styled'

interface HeroSectionProps {
  eyebrowKey: string
  titleKey: string
  subtitleKey: string
}

export const HeroSection = ({ eyebrowKey, titleKey, subtitleKey }: HeroSectionProps) => {
  const { t } = useTranslation()

  return (
    <S.Section>
      <S.Decoration />
      <S.Eyebrow>
        <S.EyebrowDot />
        {t(eyebrowKey)}
      </S.Eyebrow>
      <S.Title>{t(titleKey)}</S.Title>
      <S.Subtitle>{t(subtitleKey)}</S.Subtitle>
    </S.Section>
  )
}
