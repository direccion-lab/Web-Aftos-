import type { SponsorData } from '../SponsorCard/SponsorCard'
import * as S from './SponsorMarquee.styled'

interface SponsorMarqueeProps {
  sponsors: SponsorData[]
}

export const SponsorMarquee = ({ sponsors }: SponsorMarqueeProps) => {
  const duplicatedSponsors = [...sponsors, ...sponsors]

  return (
    <S.MarqueeWrapper>
      <S.MarqueeTrack>
        {duplicatedSponsors.map((sponsor, index) => (
          <S.MarqueeItem key={`${sponsor.id}-${index}`}>
            <S.MarqueeLogo>
              <S.MarqueeInitials>{sponsor.initials}</S.MarqueeInitials>
              <S.MarqueeName>{sponsor.name}</S.MarqueeName>
            </S.MarqueeLogo>
          </S.MarqueeItem>
        ))}
      </S.MarqueeTrack>
    </S.MarqueeWrapper>
  )
}
