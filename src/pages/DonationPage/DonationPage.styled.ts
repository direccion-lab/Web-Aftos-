import { fadeIn, fadeInUp, float, pulse, shimmerLine } from '@theme/animations'
import { media } from '@theme/breakpoints'
import styled from 'styled-components'

export const PageWrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeroArea = styled.section`
  position: relative;
  width: 100%;
  padding: 80px 24px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;

  ${media.minMd} {
    padding: 100px 40px 80px;
  }
`

export const HeroDecoration = styled.div`
  position: absolute;
  top: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    ${({ theme }) => theme.colors.accentMuted} 0%,
    transparent 70%
  );
  pointer-events: none;
  opacity: 0.3;

  ${media.md} {
    width: 400px;
    height: 400px;
  }
`

export const Eyebrow = styled.span`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  z-index: 1;
  animation: ${fadeInUp} 0.5s ease backwards;
  animation-delay: 0.1s;
`

export const EyebrowDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accent};
  animation: ${pulse} 2s ease-in-out infinite;
  box-shadow: 0 0 8px ${({ theme }) => theme.colors.accentMuted};
`

export const Title = styled.h1`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: 3px;
  text-transform: uppercase;
  margin: 16px 0 12px;
  position: relative;
  z-index: 1;
  animation: ${fadeInUp} 0.5s ease backwards;
  animation-delay: 0.2s;
`

export const Subtitle = styled.p`
  font-family: 'Rajdhani', sans-serif;
  font-size: clamp(0.92rem, 1.8vw, 1.05rem);
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  max-width: 560px;
  margin: 0;
  position: relative;
  z-index: 1;
  animation: ${fadeInUp} 0.5s ease backwards;
  animation-delay: 0.3s;
`

export const HeartIcon = styled.div`
  font-size: 2.5rem;
  position: relative;
  z-index: 1;
  animation: ${float} 3s ease-in-out infinite;
  margin-bottom: 8px;
`

/* ---- Tiers Section ---- */

export const TiersSection = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px 60px;
  animation: ${fadeInUp} 0.6s ease backwards;
  animation-delay: 0.4s;

  ${media.minMd} {
    padding: 0 40px 80px;
  }
`

export const TiersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  ${media.lg} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.sm} {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`

export const TierCard = styled.div<{ $featured?: boolean }>`
  position: relative;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.surface} 0%,
    ${({ theme }) => theme.colors.primary} 100%
  );
  border: 1px solid ${({ $featured, theme }) =>
    $featured ? `${theme.colors.accent}44` : theme.colors.border};
  border-radius: 20px;
  padding: 36px 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;
  transition: all 0.3s ease;

  ${({ $featured, theme }) =>
    $featured &&
    `
    box-shadow: 0 0 40px ${theme.colors.accentMuted},
      inset 0 1px 0 ${theme.colors.accentMuted};
  `}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 60%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.colors.accentMuted},
      transparent
    );
    animation: ${shimmerLine} 8s ease-in-out infinite;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.accent}44;
    box-shadow: 0 8px 40px ${({ theme }) => theme.colors.borderLight},
      0 0 20px ${({ theme }) => theme.colors.accentMuted};
  }
`

export const TierBadge = styled.span`
  align-self: flex-start;
  padding: 4px 12px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.accentMuted};
  color: ${({ theme }) => theme.colors.accent};
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
`

export const TierIcon = styled.div`
  font-size: 2rem;
  line-height: 1;
`

export const TierName = styled.h3`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: 1px;
  margin: 0;
`

export const TierPrice = styled.div`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 1px;
  line-height: 1;

  span {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 400;
    letter-spacing: 0;
  }
`

export const TierDescription = styled.p`
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin: 0;
`

export const TierPerks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 8px 0 0;
  padding: 0;
`

export const Perk = styled.li`
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  display: flex;
  align-items: center;
  gap: 10px;

  &::before {
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.accent};
    flex-shrink: 0;
  }
`

export const TierButton = styled.button<{ $featured?: boolean }>`
  margin-top: auto;
  padding: 14px 24px;
  border-radius: 12px;
  border: ${({ $featured, theme }) => ($featured ? 'none' : `1px solid ${theme.colors.border}`)};
  background: ${({ $featured, theme }) =>
    $featured
      ? `linear-gradient(135deg, ${theme.colors.accent} 0%, ${theme.colors.accentSoft} 100%)`
      : 'transparent'};
  color: ${({ $featured, theme }) =>
    $featured ? theme.colors.primary : theme.colors.textSecondary};
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;

  ${({ $featured, theme }) => $featured && `box-shadow: 0 4px 20px ${theme.colors.accentMuted};`}

  &:hover {
    transform: translateY(-2px);
    ${({ $featured, theme }) =>
      $featured
        ? `box-shadow: 0 8px 30px ${theme.colors.accentMuted};`
        : `
      background: ${theme.colors.divider};
      color: ${theme.colors.textPrimary};
      border-color: ${theme.colors.accent}44;
    `}
  }

  &:active {
    transform: translateY(0) scale(0.98);
  }
`

/* ---- Tax Deduction Section ---- */

export const TaxSection = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px 80px;
  animation: ${fadeIn} 0.6s ease backwards;
  animation-delay: 0.5s;

  ${media.minMd} {
    padding: 0 40px 100px;
  }
`

export const TaxCard = styled.div`
  position: relative;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.surface} 0%,
    ${({ theme }) => theme.colors.primary} 100%
  );
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  padding: 48px 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow: hidden;
  box-shadow: 0 4px 40px ${({ theme }) => theme.colors.borderLight},
    inset 0 1px 0 ${({ theme }) => theme.colors.borderLight};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${({ theme }) => theme.colors.accent} 30%,
      ${({ theme }) => theme.colors.accentSoft} 70%,
      transparent 100%
    );
    opacity: 0.6;
  }

  ${media.md} {
    padding: 36px 28px;
  }
`

export const TaxHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const TaxIcon = styled.span`
  font-size: 2rem;
  line-height: 1;
`

export const TaxTitle = styled.h2`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;
`

export const TaxSubtitle = styled.p`
  font-family: 'Rajdhani', sans-serif;
  font-size: clamp(0.88rem, 1.5vw, 0.95rem);
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin: 0;
`

export const TaxHighlight = styled.div`
  padding: 24px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.accentMuted};
  border: 1px solid ${({ theme }) => theme.colors.accent}33;
`

export const TaxHighlightTitle = styled.h4`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0 0 8px;
`

export const TaxHighlightDesc = styled.p`
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.92rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 1.7;
  margin: 0;
`

export const TaxColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  ${media.md} {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`

export const TaxColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const TaxColumnTitle = styled.h4`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin: 0;
  padding-bottom: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
`

export const TaxRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.divider};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};

  ${media.xs} {
    flex-direction: column;
    text-align: center;
    gap: 4px;
  }
`

export const TaxRowLabel = styled.span`
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
`

export const TaxRowValue = styled.span`
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};
  white-space: nowrap;

  strong {
    color: ${({ theme }) => theme.colors.accent};
    font-size: 1.1rem;
    font-weight: 700;
  }
`
