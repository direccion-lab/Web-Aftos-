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

export const SectionDivider = styled.div`
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
  margin: 0 auto 40px;
`

export const GridTitle = styled.h2`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;
`

export const SponsorGrid = styled.div`
  max-width: ${BREAKPOINTS.xl}px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  ${media.lg} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${media.md} {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  ${media.xs} {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
`

export const CTAWrapper = styled.div`
  padding-bottom: 80px;

  ${media.minMd} {
    padding-bottom: 100px;
  }
`
