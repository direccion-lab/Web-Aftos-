import { HeroCarousel, type HeroSlide } from '@features/index'
import { DonationBanner } from '@/components/DonationBanner/DonationBanner'
import { TRANSLATION } from '@/i18n/translations/keys'
import { SECTION_IDS } from '@/router/Routes.type'
import { AboutPage } from '../AboutPage/AboutPage'
import { ContactPage } from '../ContactPage/ContactPage'
import { GamePage } from '../GamePage/GamePage'
import { SponsorPage } from '../SponsorPage/SponsorPage'
import { TeamPage } from '../TeamPage/TeamPage'
import * as S from './HomePage.styled'

export const HomePage = () => {
  const slides: HeroSlide[] = [
    {
      id: 'game-1',
      backgroundImage: '/images/hero/game-1-bg.jpg',
      logoImage: '/images/hero/game-1-logo.png',
      titleKey: TRANSLATION.HOME.SLIDE_1_TITLE,
      descriptionKey: TRANSLATION.HOME.SLIDE_1_DESC,
    },
    {
      id: 'game-2',
      backgroundImage: '/images/hero/game-2-bg.jpg',
      logoImage: '/images/hero/game-2-logo.png',
      titleKey: TRANSLATION.HOME.SLIDE_2_TITLE,
      descriptionKey: TRANSLATION.HOME.SLIDE_2_DESC,
    },
    {
      id: 'game-3',
      backgroundImage: '/images/hero/game-3-bg.jpg',
      logoImage: '/images/hero/game-3-logo.png',
      titleKey: TRANSLATION.HOME.SLIDE_3_TITLE,
      descriptionKey: TRANSLATION.HOME.SLIDE_3_DESC,
    },
    {
      id: 'studio',
      backgroundImage: '/images/hero/studio-bg.jpg',
      titleKey: TRANSLATION.HOME.SLIDE_4_TITLE,
      descriptionKey: TRANSLATION.HOME.SLIDE_4_DESC,
    },
  ]

  return (
    <S.PageWrapper>
      <div>
        <HeroCarousel slides={slides} autoAdvanceMs={7000} />
      </div>
      <div>
        <DonationBanner />
      </div>
      <section id={SECTION_IDS.GAMES}>
        <GamePage />
      </section>
      <section id={SECTION_IDS.ABOUT}>
        <AboutPage />
      </section>
      <section id={SECTION_IDS.SPONSORS}>
        <SponsorPage />
      </section>
      <section id={SECTION_IDS.TEAM}>
        <TeamPage />
      </section>
      <section id={SECTION_IDS.CONTACT}>
        <ContactPage />
      </section>
    </S.PageWrapper>
  )
}
