import { SponsorCard, type SponsorData } from '@features/index'
import { Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { CTABanner } from '@/components/CTABanner/CTABanner'
import { HeroSection } from '@/components/HeroSection/HeroSection'
import { TRANSLATION } from '@/i18n/translations/keys'
import { SECTION_IDS } from '@/router/Routes.type'
import * as S from './SponsorPage.styled'

const SPONSORS: SponsorData[] = [
  {
    id: 'fundacion-methos',
    name: 'Fundación Methos',
    initials: 'FM',
    websiteUrl: 'https://fundacion-methos.es',
  },
]

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export const SponsorPage = () => {
  const { t } = useTranslation()

  return (
    <S.PageWrapper>
      <HeroSection
        eyebrowKey={TRANSLATION.SPONSORS.EYEBROW}
        titleKey={TRANSLATION.SPONSORS.PAGE_TITLE}
        subtitleKey={TRANSLATION.SPONSORS.SUBTITLE}
      />

      <S.GridSection>
        <S.GridHeader>
          <S.GridTitle>{t(TRANSLATION.SPONSORS.GRID_TITLE)}</S.GridTitle>
        </S.GridHeader>
        <S.SponsorGrid>
          {SPONSORS.map((sponsor, index) => (
            <SponsorCard key={sponsor.id} sponsor={sponsor} index={index} />
          ))}
        </S.SponsorGrid>
      </S.GridSection>

      <S.CTAWrapper>
        <CTABanner
          eyebrowKey={TRANSLATION.SPONSORS.CTA_EYEBROW}
          titleKey={TRANSLATION.SPONSORS.CTA_TITLE}
          descriptionKey={TRANSLATION.SPONSORS.CTA_DESCRIPTION}
          ctaLabelKey={TRANSLATION.SPONSORS.CTA_BUTTON}
          icon={<Mail size={16} />}
          onCTAClick={() => scrollToSection(SECTION_IDS.CONTACT)}
        />
      </S.CTAWrapper>
    </S.PageWrapper>
  )
}
