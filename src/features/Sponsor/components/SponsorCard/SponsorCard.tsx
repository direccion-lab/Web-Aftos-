import { ExternalLink } from 'lucide-react'
import * as S from './SponsorCard.styled'

export interface SponsorData {
  id: string
  name: string
  initials: string
  websiteUrl: string
}

interface SponsorCardProps {
  sponsor: SponsorData
  index: number
}

export const SponsorCard = ({ sponsor, index }: SponsorCardProps) => {
  return (
    <S.Card $index={index} href={sponsor.websiteUrl} target="_blank" rel="noopener noreferrer">
      <S.ExternalIcon>
        <ExternalLink size={14} />
      </S.ExternalIcon>

      <S.LogoWrapper>
        <S.LogoInitials>{sponsor.initials}</S.LogoInitials>
      </S.LogoWrapper>

      <S.SponsorName>{sponsor.name}</S.SponsorName>
    </S.Card>
  )
}
