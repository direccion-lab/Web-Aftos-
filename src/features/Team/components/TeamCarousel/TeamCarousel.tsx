import { ChevronLeft, ChevronRight, Github, Linkedin, Twitter } from 'lucide-react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import * as S from './TeamCarousel.styled'

export interface TeamMemberSocial {
  type: 'github' | 'linkedin' | 'twitter'
  url: string
}

export interface TeamMember {
  id: string
  nameKey: string
  roleKey: string
  bioKey: string
  initials: string
  image?: string
  socials: TeamMemberSocial[]
}

interface TeamCarouselProps {
  members: TeamMember[]
  titleKey: string
  eyebrowKey: string
}

const SOCIAL_ICONS = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
}

const CARD_WIDTH = 280
const CARD_GAP = 20
const CARD_WIDTH_TABLET = 240
const CARD_GAP_TABLET = 16
const CARD_WIDTH_MOBILE = 200
const CARD_GAP_MOBILE = 12

export const TeamCarousel = ({ members, titleKey, eyebrowKey }: TeamCarouselProps) => {
  const { t } = useTranslation()
  const [visibleCards, setVisibleCards] = useState(4)
  const trackRef = useRef<HTMLDivElement>(null)

  const getCardDimensions = useCallback(() => {
    const w = typeof window !== 'undefined' ? window.innerWidth : 1200
    if (w <= 480) return { cardW: CARD_WIDTH_MOBILE, gap: CARD_GAP_MOBILE }
    if (w <= 768) return { cardW: CARD_WIDTH_TABLET, gap: CARD_GAP_TABLET }
    return { cardW: CARD_WIDTH, gap: CARD_GAP }
  }, [])

  const updateVisibleCards = useCallback(() => {
    if (!trackRef.current?.parentElement) return
    const containerWidth = trackRef.current.parentElement.offsetWidth
    const { cardW, gap } = getCardDimensions()
    const count = Math.floor((containerWidth + gap) / (cardW + gap))
    setVisibleCards(Math.max(1, count))
  }, [getCardDimensions])

  useEffect(() => {
    updateVisibleCards()
    window.addEventListener('resize', updateVisibleCards)
    return () => window.removeEventListener('resize', updateVisibleCards)
  }, [updateVisibleCards])

  const [currentPage, setCurrentPage] = useState(0)

  const totalPages = Math.ceil(members.length / visibleCards)
  const canPrev = currentPage > 0
  const canNext = currentPage < totalPages - 1

  const goToPage = useCallback(
    (page: number) => {
      setCurrentPage(Math.max(0, Math.min(page, totalPages - 1)))
    },
    [totalPages]
  )

  const prev = useCallback(() => {
    if (canPrev) setCurrentPage((p) => p - 1)
  }, [canPrev])

  const next = useCallback(() => {
    if (canNext) setCurrentPage((p) => p + 1)
  }, [canNext])

  const offset = useMemo(() => {
    const { cardW, gap } = getCardDimensions()
    const index = currentPage * visibleCards
    const maxIndex = Math.max(0, members.length - visibleCards)
    return -(Math.min(index, maxIndex) * (cardW + gap))
  }, [currentPage, visibleCards, members.length, getCardDimensions])

  return (
    <S.CarouselSection>
      <S.CarouselHeader>
        <S.HeaderLeft>
          <S.Eyebrow>
            <S.EyebrowDot />
            {t(eyebrowKey)}
          </S.Eyebrow>
          <S.Title>{t(titleKey)}</S.Title>
        </S.HeaderLeft>

        <S.NavButtons>
          <S.NavButton $disabled={!canPrev} onClick={prev} aria-label="Previous members">
            <ChevronLeft size={18} />
          </S.NavButton>
          <S.NavButton $disabled={!canNext} onClick={next} aria-label="Next members">
            <ChevronRight size={18} />
          </S.NavButton>
        </S.NavButtons>
      </S.CarouselHeader>

      <S.TrackWrapper>
        <S.Track ref={trackRef} $offset={offset}>
          {members.map((member) => (
            <S.Card key={member.id}>
              <S.AvatarWrapper>
                {member.image ? (
                  <S.AvatarImage src={member.image} alt={t(member.nameKey)} />
                ) : (
                  <S.AvatarInitials>{member.initials}</S.AvatarInitials>
                )}
                <S.RoleBadge>{t(member.roleKey)}</S.RoleBadge>
              </S.AvatarWrapper>

              <S.CardInfo>
                <S.MemberName>{t(member.nameKey)}</S.MemberName>
                <S.MemberRole>{t(member.roleKey)}</S.MemberRole>
                <S.MemberBio>{t(member.bioKey)}</S.MemberBio>
              </S.CardInfo>

              {member.socials.length > 0 && (
                <S.SocialLinks>
                  {member.socials.map((social) => {
                    const Icon = SOCIAL_ICONS[social.type]
                    return (
                      <S.SocialLink
                        key={social.type}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon size={14} />
                      </S.SocialLink>
                    )
                  })}
                </S.SocialLinks>
              )}
            </S.Card>
          ))}
        </S.Track>
      </S.TrackWrapper>

      {totalPages > 1 && (
        <S.Indicators>
          {Array.from({ length: totalPages }, (_, i) => (
            <S.Indicator
              key={`page-${i}-of-${totalPages}`}
              $active={i === currentPage}
              onClick={() => goToPage(i)}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </S.Indicators>
      )}
    </S.CarouselSection>
  )
}
