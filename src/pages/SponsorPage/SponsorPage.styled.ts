import { fadeInUp } from '@theme/animations'
import { BREAKPOINTS, media } from '@theme/breakpoints'
import styled from 'styled-components'

export const PageWrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
`

export const GridSection = styled.section`
  width: 100%;
  padding: 48px 24px 60px;
  animation: ${fadeInUp} 0.6s ease backwards;
  animation-delay: 0.3s;

  ${media.minMd} {
    padding: 60px 40px 80px;
  }
`

export const GridHeader = styled.div`
  max-width: ${BREAKPOINTS.xl}px;
  margin: 0 auto 48px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const GridTitle = styled.h2`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;

  &::before {
    content: '';
    width: 3px;
    height: 22px;
    border-radius: 2px;
    background: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 8px ${({ theme }) => theme.colors.accent};
    flex-shrink: 0;
  }
`

export const GridSubtitle = styled.p`
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0 0 0 15px;
  letter-spacing: 0.5px;
`

export const SponsorGrid = styled.div`
  max-width: ${BREAKPOINTS.xl}px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  & > * {
    flex: 1 1 220px;
    max-width: 280px;
  }

  ${media.md} {
    gap: 16px;

    & > * {
      flex: 1 1 160px;
      max-width: 220px;
    }
  }

  ${media.xs} {
    gap: 12px;

    & > * {
      flex: 1 1 140px;
      max-width: 180px;
    }
  }
`

export const CTAWrapper = styled.div`
  padding-bottom: 80px;
  margin-top: auto;

  ${media.minMd} {
    padding-bottom: 100px;
  }
`
