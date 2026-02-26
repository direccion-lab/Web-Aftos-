import DiscordBg from '@assets/Discordx2.png'
import kickstarter from '@assets/KickStarterx2.png'
import trailer2 from '@assets/video-2.mp4'
import { HeroCarousel, type HeroSlide } from '@features/index'
import trailerVideo from '@/assets/trailer.mp4'
import { DonationBanner } from '@/components/DonationBanner/DonationBanner'
import { TRANSLATION } from '@/i18n/translations/keys'
import { SECTION_IDS } from '@/router/Routes.type'
import { AboutPage } from '../AboutPage/AboutPage'
import { ContactPage } from '../ContactPage/ContactPage'
import { GamePage } from '../GamePage/GamePage'
import { SponsorPage } from '../SponsorPage/SponsorPage'
import { TeamPage } from '../TeamPage/TeamPage'
import * as S from './HomePage.styled'

const SteamIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <title>steam</title>
    <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658a3.387 3.387 0 0 1 1.912-.59c.064 0 .128.003.19.007l2.862-4.148V8.9a4.528 4.528 0 0 1 4.524-4.524 4.528 4.528 0 0 1 4.524 4.524 4.528 4.528 0 0 1-4.524 4.524h-.105l-4.082 2.912c0 .054.003.108.003.163a3.403 3.403 0 0 1-3.4 3.4 3.404 3.404 0 0 1-3.349-2.828L.453 15.697A12.018 12.018 0 0 0 11.979 24c6.627 0 12-5.373 12-12s-5.373-12-12-12zM7.54 18.21l-1.473-.61a2.552 2.552 0 0 0 4.458-.895 2.545 2.545 0 0 0-.132-1.96 2.549 2.549 0 0 0-3.34-1.2l1.523.63a1.878 1.878 0 1 1-1.44 3.47l.404.565zm8.4-5.373a3.018 3.018 0 0 0 3.015-3.015 3.018 3.018 0 0 0-3.015-3.015 3.018 3.018 0 0 0-3.015 3.015 3.018 3.018 0 0 0 3.015 3.015zm-.004-4.521a1.51 1.51 0 0 1 1.509 1.509 1.51 1.51 0 0 1-1.509 1.509 1.51 1.51 0 0 1-1.509-1.509 1.51 1.51 0 0 1 1.509-1.509z" />
  </svg>
)

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <title>Discord</title>
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
)

export const HomePage = () => {
  const slides: HeroSlide[] = [
    {
      id: 'afesis',
      backgroundImage: '',
      backgroundVideo: trailerVideo,
      logoImage: '/images/hero/game-1-logo.png',
      titleKey: TRANSLATION.HOME.SLIDE_1_TITLE,
      descriptionKey: TRANSLATION.HOME.SLIDE_1_DESC,
      actionLinks: [
        {
          icon: <SteamIcon />,
          label: 'Steam',
          url: 'https://store.steampowered.com/app/4352080/Afesis_los_cuatro_peldaos/',
        },
      ],
    },
    {
      id: 'studio',
      backgroundImage: '',
      backgroundVideo: trailer2,
      titleKey: TRANSLATION.HOME.SLIDE_4_TITLE,
      descriptionKey: TRANSLATION.HOME.SLIDE_4_DESC,
    },
    {
      id: 'game-2',
      backgroundImage: kickstarter,
      logoImage: '',
      titleKey: TRANSLATION.HOME.SLIDE_2_TITLE,
      descriptionKey: TRANSLATION.HOME.SLIDE_2_DESC,
    },
    {
      id: 'game-3',
      backgroundImage: DiscordBg,
      logoImage: '',
      titleKey: TRANSLATION.HOME.SLIDE_3_TITLE,
      descriptionKey: TRANSLATION.HOME.SLIDE_3_DESC,
      actionLinks: [
        {
          icon: <DiscordIcon />,
          label: 'Discord',
          url: 'https://discord.com/invite/WSTx2shcYs',
        },
      ],
    },
  ]

  return (
    <S.PageWrapper>
      <div>
        <HeroCarousel slides={slides} autoAdvanceMs={20000} />
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
