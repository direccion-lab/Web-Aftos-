import { fadeIn, fadeInUp, pulse } from '@theme/animations'
import { media } from '@theme/breakpoints'
import styled from 'styled-components'

export const Section = styled.section`
  position: relative;
  width: 100%;
  padding: 80px 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
  animation: ${fadeIn} 0.6s ease;

  ${media.minMd} {
    padding: 100px 40px 0;
  }
`

export const Decoration = styled.div`
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
  margin: 3rem 0rem;
`
