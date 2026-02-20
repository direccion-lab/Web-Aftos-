import { fadeInUp, pulse, shimmerLine } from '@theme/animations'
import { media } from '@theme/breakpoints'
import styled from 'styled-components'

export const BannerWrapper = styled.section`
  width: 100%;
  padding: 0 24px;
  display: flex;
  justify-content: center;

  ${media.minMd} {
    padding: 0 40px;
  }
`

export const BannerInner = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  padding: 48px 40px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.surface} 0%,
    ${({ theme }) => theme.colors.primary} 100%
  );
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 4px 40px ${({ theme }) => theme.colors.borderLight},
    inset 0 1px 0 ${({ theme }) => theme.colors.borderLight};
  animation: ${fadeInUp} 0.7s cubic-bezier(0.16, 1, 0.3, 1);

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
    animation: ${shimmerLine} 6s ease-in-out infinite;
    pointer-events: none;
  }

  ${media.md} {
    flex-direction: column;
    text-align: center;
    padding: 36px 28px;
    gap: 24px;
  }
`

export const AccentLine = styled.div`
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
`

export const BGDecoration = styled.div`
  position: absolute;
  top: -40%;
  right: -5%;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    ${({ theme }) => theme.colors.accentMuted} 0%,
    transparent 70%
  );
  pointer-events: none;
  opacity: 0.5;

  ${media.md} {
    top: -30%;
    right: -15%;
    width: 200px;
    height: 200px;
  }
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-width: 0;
`

export const Eyebrow = styled.span`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  display: flex;
  align-items: center;
  gap: 8px;

  ${media.md} {
    justify-content: center;
  }
`

export const EyebrowDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accent};
  animation: ${pulse} 2s ease-in-out infinite;
  box-shadow: 0 0 8px ${({ theme }) => theme.colors.accentMuted};
`

export const Title = styled.h3`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 1.2;
  margin: 0;
`

export const Description = styled.p`
  font-family: 'Rajdhani', sans-serif;
  font-size: clamp(0.88rem, 1.5vw, 0.95rem);
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin: 0;
  max-width: 520px;

  ${media.md} {
    max-width: 100%;
  }
`

export const CTAButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.accent} 0%,
    ${({ theme }) => theme.colors.accentSoft} 100%
  );
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  padding: 14px 32px;
  border-radius: 12px;
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px ${({ theme }) => theme.colors.accentMuted};
  z-index: 1;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px ${({ theme }) => theme.colors.accentMuted};
  }

  &:active {
    transform: translateY(0) scale(0.98);
  }
`

export const CTAIcon = styled.span`
  font-size: 1rem;
  display: flex;
  align-items: center;
`
