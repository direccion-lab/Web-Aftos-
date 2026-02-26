import { fadeInUp, pulse } from '@theme/animations'
import { media } from '@theme/breakpoints'
import styled, { keyframes } from 'styled-components'

const scanBanner = keyframes`
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(200%); }
`

export const BannerWrapper = styled.section`
  width: 100%;
  padding: 0 24px;
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  ${media.minMd} {
    padding: 0 40px;
  }
`

export const BannerInner = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  padding: 52px 48px;
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.surface} 0%,
    ${({ theme }) => theme.colors.primary} 100%
  );
  border: 1px solid ${({ theme }) => theme.colors.accent}33;
  box-shadow:
    0 0 0 1px ${({ theme }) => theme.colors.accent}11,
    0 24px 80px rgba(0, 0, 0, 0.4),
    0 0 60px ${({ theme }) => theme.colors.accentMuted};
  animation: ${fadeInUp} 0.7s cubic-bezier(0.16, 1, 0.3, 1);

  /* shimmer sweep */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 40%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.colors.accent}0a,
      transparent
    );
    animation: ${scanBanner} 5s ease-in-out infinite;
    pointer-events: none;
  }

  /* grid RPG de fondo */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 40px,
        ${({ theme }) => theme.colors.accent}05 40px,
        ${({ theme }) => theme.colors.accent}05 41px
      ),
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 40px,
        ${({ theme }) => theme.colors.accent}05 40px,
        ${({ theme }) => theme.colors.accent}05 41px
      );
    pointer-events: none;
  }

  ${media.md} {
    flex-direction: column;
    text-align: center;
    padding: 40px 28px;
    gap: 28px;
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
  z-index: 1;
`

export const BGDecoration = styled.div`
  position: absolute;
  top: -40%;
  right: -5%;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    ${({ theme }) => theme.colors.accent}18 0%,
    transparent 65%
  );
  pointer-events: none;

  ${media.md} {
    top: -30%;
    right: -15%;
    width: 250px;
    height: 250px;
  }
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  min-width: 0;
  position: relative;
  z-index: 1;
`

export const Eyebrow = styled.span`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 3px;
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
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.accent};
  flex-shrink: 0;
`

export const Title = styled.h3`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 1.15;
  margin: 0;
  letter-spacing: 1px;
`

export const Description = styled.p`
  font-family: 'Rajdhani', sans-serif;
  font-size: clamp(0.88rem, 1.5vw, 0.95rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.65;
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
    ${({ theme }) => theme.colors.accent},
    ${({ theme }) => theme.colors.accentSoft}
  );
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  padding: 16px 36px;
  border-radius: 14px;
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 24px ${({ theme }) => theme.colors.accentMuted};
  z-index: 1;

  /* shimmer interno */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -80%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 8px 32px ${({ theme }) => theme.colors.accentMuted};

    &::before { left: 150%; }
  }

  &:active {
    transform: translateY(0) scale(0.98);
  }
`

export const CTAIcon = styled.span`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
`
