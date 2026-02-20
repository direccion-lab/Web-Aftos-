import { SponsorCard, type SponsorData, SponsorMarquee } from '@features/index'
import { Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { CTABanner } from '@/components/CTABanner/CTABanner'
import { HeroSection } from '@/components/HeroSection/HeroSection'
import { TRANSLATION } from '@/i18n/translations/keys'
import { SECTION_IDS } from '@/router/Routes.type'
import * as S from './SponsorPage.styled'

const SPONSORS: SponsorData[] = [
  {
    id: 'nexus-tech',
    name: 'Nexus Tech',
    initials: 'NT',
    websiteUrl: 'https://example.com',
  },
  {
    id: 'pixel-forge',
    name: 'Pixel Forge',
    initials: 'PF',
    websiteUrl: 'https://example.com',
  },
  {
    id: 'aurora-games',
    name: 'Aurora Games',
    initials: 'AG',
    websiteUrl: 'https://example.com',
  },
  {
    id: 'vortex-labs',
    name: 'Vortex Labs',
    initials: 'VL',
    websiteUrl: 'https://example.com',
  },
  {
    id: 'quantum-play',
    name: 'Quantum Play',
    initials: 'QP',
    websiteUrl: 'https://example.com',
  },
  {
    id: 'cyber-core',
    name: 'Cyber Core',
    initials: 'CC',
    websiteUrl: 'https://example.com',
  },
  {
    id: 'nova-digital',
    name: 'Nova Digital',
    initials: 'ND',
    websiteUrl: 'https://example.com',
  },
  {
    id: 'titan-studio',
    name: 'Titan Studio',
    initials: 'TS',
    websiteUrl: 'https://example.com',
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

      <SponsorMarquee sponsors={SPONSORS} />

      <S.SectionDivider />

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
