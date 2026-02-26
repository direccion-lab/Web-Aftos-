import { TeamCarousel, type TeamMember } from '@features/index'
import artLeadImg from '@/assets/art_lead.png'
import designImg from '@/assets/desing.png'
import digitalArtistImg from '@/assets/digital_artist.png'

import directorImg from '@/assets/director.png'
import juniorArtistImg from '@/assets/junior_artist.png'
import marketingImg from '@/assets/marketing.png'
import producerImg from '@/assets/producer.png'
import programmerImg from '@/assets/programmer.png'
import rrhhImg from '@/assets/rrhh.png'
import { HeroSection } from '@/components/HeroSection/HeroSection'
import { TRANSLATION } from '@/i18n/translations/keys'
import * as S from './TeamPage.styled'

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'javier',
    nameKey: TRANSLATION.TEAM.MEMBER_1_NAME,
    roleKey: TRANSLATION.TEAM.MEMBER_1_ROLE,
    bioKey: TRANSLATION.TEAM.MEMBER_1_BIO,
    initials: 'JP',
    image: directorImg,
    socials: [],
  },
  {
    id: 'alex',
    nameKey: TRANSLATION.TEAM.MEMBER_2_NAME,
    roleKey: TRANSLATION.TEAM.MEMBER_2_ROLE,
    bioKey: TRANSLATION.TEAM.MEMBER_2_BIO,
    initials: 'AG',
    image: producerImg,
    socials: [{ type: 'linkedin', url: 'https://linktr.ee/gaymingbeetle' }],
  },
  {
    id: 'julia',
    nameKey: TRANSLATION.TEAM.MEMBER_3_NAME,
    roleKey: TRANSLATION.TEAM.MEMBER_3_ROLE,
    bioKey: TRANSLATION.TEAM.MEMBER_3_BIO,
    initials: 'JG',
    image: artLeadImg,
    socials: [{ type: 'twitter', url: 'https://twitter.com/julgarod' }],
  },
  {
    id: 'daniel',
    nameKey: TRANSLATION.TEAM.MEMBER_4_NAME,
    roleKey: TRANSLATION.TEAM.MEMBER_4_ROLE,
    bioKey: TRANSLATION.TEAM.MEMBER_4_BIO,
    initials: 'DS',
    image: digitalArtistImg,
    socials: [],
  },
  {
    id: 'claudia',
    nameKey: TRANSLATION.TEAM.MEMBER_5_NAME,
    roleKey: TRANSLATION.TEAM.MEMBER_5_ROLE,
    bioKey: TRANSLATION.TEAM.MEMBER_5_BIO,
    initials: 'CL',
    image: juniorArtistImg,
    socials: [],
  },
  {
    id: 'ivan',
    nameKey: TRANSLATION.TEAM.MEMBER_6_NAME,
    roleKey: TRANSLATION.TEAM.MEMBER_6_ROLE,
    bioKey: TRANSLATION.TEAM.MEMBER_6_BIO,
    initials: 'IM',
    image: programmerImg,
    socials: [],
  },
  {
    id: 'gonzalo',
    nameKey: TRANSLATION.TEAM.MEMBER_7_NAME,
    roleKey: TRANSLATION.TEAM.MEMBER_7_ROLE,
    bioKey: TRANSLATION.TEAM.MEMBER_7_BIO,
    initials: 'GP',
    image: designImg,
    socials: [],
  },
  {
    id: 'fernando',
    nameKey: TRANSLATION.TEAM.MEMBER_8_NAME,
    roleKey: TRANSLATION.TEAM.MEMBER_8_ROLE,
    bioKey: TRANSLATION.TEAM.MEMBER_8_BIO,
    initials: 'FS',
    image: rrhhImg,
    socials: [],
  },
  {
    id: 'andrea',
    nameKey: TRANSLATION.TEAM.MEMBER_9_NAME,
    roleKey: TRANSLATION.TEAM.MEMBER_9_ROLE,
    bioKey: TRANSLATION.TEAM.MEMBER_9_BIO,
    initials: 'AB',
    image: marketingImg,
    socials: [],
  },
]

export const TeamPage = () => {
  return (
    <S.PageWrapper>
      <HeroSection
        eyebrowKey={TRANSLATION.TEAM.EYEBROW}
        titleKey={TRANSLATION.TEAM.PAGE_TITLE}
        subtitleKey={TRANSLATION.TEAM.SUBTITLE}
      />
      <S.CarouselContainer>
        <TeamCarousel
          members={TEAM_MEMBERS}
          eyebrowKey={TRANSLATION.TEAM.CAROUSEL_EYEBROW}
          titleKey={TRANSLATION.TEAM.CAROUSEL_TITLE}
        />
      </S.CarouselContainer>
    </S.PageWrapper>
  )
}
