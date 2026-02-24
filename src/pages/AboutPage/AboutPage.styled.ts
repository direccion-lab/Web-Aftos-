import BANNER from '@assets/Banner_team.png'
import { fadeInUp, pulse } from '@theme/animations'
import { BREAKPOINTS, media } from '@theme/breakpoints'
import styled from 'styled-components'

export const PageWrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  padding-bottom: 80px;

  ${media.minMd} {
    gap: 80px;
    padding-bottom: 100px;
  }
`

export const ContentSection = styled.section`
  width: 100%;
  max-width: ${BREAKPOINTS.xl}px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  animation: ${fadeInUp} 0.6s ease backwards;
  animation-delay: 0.2s;

  ${media.minMd} {
    padding: 0 40px;
    gap: 64px;
  }
`

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const BlockEyebrow = styled.span`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  display: flex;
  align-items: center;
  gap: 8px;
`

export const BlockEyebrowDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accent};
  animation: ${pulse} 2s ease-in-out infinite;
  box-shadow: 0 0 8px ${({ theme }) => theme.colors.accentMuted};
`

export const BlockTitle = styled.h3`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;
`

export const BlockDescription = styled.p`
  font-family: 'Rajdhani', sans-serif;
  font-size: clamp(0.9rem, 1.5vw, 1.05rem);
  text-align: justify;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  margin: 0;
`

export const Divider = styled.div`
  width: 60px;
  height: 2px;
  margin: 0 auto;
  background: linear-gradient(
    90deg,
    transparent,
    ${({ theme }) => theme.colors.accent},
    transparent
  );
  opacity: 0.5;
`

export const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  ${media.md} {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`

export const ValueCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.accent}44;
    box-shadow: 0 12px 40px ${({ theme }) => theme.colors.borderLight},
      0 0 30px ${({ theme }) => theme.colors.accentMuted};
  }

  ${media.xs} {
    padding: 20px;
    border-radius: 12px;
  }
`

export const ValueTitle = styled.h4`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
  letter-spacing: 1px;
  text-transform: uppercase;
`

export const ValueDescription = styled.p`
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.88rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
  margin: 0;
`

export const Image = styled.div`
    background-image: url(${BANNER});
    border-radius: 16px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 400px;
`
