import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import * as S from './CTABanner.styled'

interface CTABannerProps {
  eyebrowKey: string
  titleKey: string
  descriptionKey: string
  ctaLabelKey: string
  icon?: ReactNode
  onCTAClick: () => void
}

export const CTABanner = ({
  eyebrowKey,
  titleKey,
  descriptionKey,
  ctaLabelKey,
  icon,
  onCTAClick,
}: CTABannerProps) => {
  const { t } = useTranslation()

  return (
    <S.BannerWrapper>
      <S.BannerInner>
        <S.AccentLine />
        <S.BGDecoration />

        <S.TextContent>
          <S.Eyebrow>
            <S.EyebrowDot />
            {t(eyebrowKey)}
          </S.Eyebrow>
          <S.Title>{t(titleKey)}</S.Title>
          <S.Description>{t(descriptionKey)}</S.Description>
        </S.TextContent>

        <S.CTAButton onClick={onCTAClick}>
          {icon && <S.CTAIcon>{icon}</S.CTAIcon>}
          {t(ctaLabelKey)}
        </S.CTAButton>
      </S.BannerInner>
    </S.BannerWrapper>
  )
}
