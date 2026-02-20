import { useTranslation } from 'react-i18next'
import { HeroSection } from '@/components/HeroSection/HeroSection'
import { TRANSLATION } from '@/i18n/translations/keys'
import * as S from './AboutPage.styled'

export const AboutPage = () => {
  const { t } = useTranslation()

  return (
    <S.PageWrapper>
      <HeroSection
        eyebrowKey={TRANSLATION.ABOUT.EYEBROW}
        titleKey={TRANSLATION.ABOUT.TITLE}
        subtitleKey={TRANSLATION.ABOUT.SUBTITLE}
      />

      <S.ContentSection>
        <S.Block>
          <S.BlockEyebrow>
            <S.BlockEyebrowDot />
            {t(TRANSLATION.ABOUT.MISSION_EYEBROW)}
          </S.BlockEyebrow>
          <S.BlockTitle>{t(TRANSLATION.ABOUT.MISSION_TITLE)}</S.BlockTitle>
          <S.BlockDescription>{t(TRANSLATION.ABOUT.MISSION_DESC)}</S.BlockDescription>
        </S.Block>

        <S.Divider />

        <S.Block>
          <S.BlockEyebrow>
            <S.BlockEyebrowDot />
            {t(TRANSLATION.ABOUT.VISION_EYEBROW)}
          </S.BlockEyebrow>
          <S.BlockTitle>{t(TRANSLATION.ABOUT.VISION_TITLE)}</S.BlockTitle>
          <S.BlockDescription>{t(TRANSLATION.ABOUT.VISION_DESC)}</S.BlockDescription>
        </S.Block>

        <S.Divider />

        <S.Block>
          <S.BlockEyebrow>
            <S.BlockEyebrowDot />
            {t(TRANSLATION.ABOUT.VALUES_EYEBROW)}
          </S.BlockEyebrow>
          <S.BlockTitle>{t(TRANSLATION.ABOUT.VALUES_TITLE)}</S.BlockTitle>
          <S.ValuesGrid>
            <S.ValueCard>
              <S.ValueTitle>{t(TRANSLATION.ABOUT.VALUE_1_TITLE)}</S.ValueTitle>
              <S.ValueDescription>{t(TRANSLATION.ABOUT.VALUE_1_DESC)}</S.ValueDescription>
            </S.ValueCard>
            <S.ValueCard>
              <S.ValueTitle>{t(TRANSLATION.ABOUT.VALUE_2_TITLE)}</S.ValueTitle>
              <S.ValueDescription>{t(TRANSLATION.ABOUT.VALUE_2_DESC)}</S.ValueDescription>
            </S.ValueCard>
            <S.ValueCard>
              <S.ValueTitle>{t(TRANSLATION.ABOUT.VALUE_3_TITLE)}</S.ValueTitle>
              <S.ValueDescription>{t(TRANSLATION.ABOUT.VALUE_3_DESC)}</S.ValueDescription>
            </S.ValueCard>
          </S.ValuesGrid>
        </S.Block>
      </S.ContentSection>
    </S.PageWrapper>
  )
}
