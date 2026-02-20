import { scroll } from '@theme/animations'
import { media } from '@theme/breakpoints'
import styled from 'styled-components'

export const MarqueeWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 32px 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 80px;
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.primary} 0%,
      transparent 100%
    );
  }

  &::after {
    right: 0;
    background: linear-gradient(
      to left,
      ${({ theme }) => theme.colors.primary} 0%,
      transparent 100%
    );
  }

  ${media.minMd} {
    padding: 48px 0;

    &::before,
    &::after {
      width: 120px;
    }
  }
`

export const MarqueeTrack = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} 30s linear infinite;

  ${MarqueeWrapper}:hover & {
    animation-play-state: paused;
  }
`

export const MarqueeItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 40px;
  flex-shrink: 0;

  ${media.md} {
    padding: 12px 28px;
  }
`

export const MarqueeLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  transition: all 0.3s ease;
  user-select: none;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accentMuted};
    background: ${({ theme }) => theme.colors.surfaceHover};
    box-shadow: 0 4px 16px ${({ theme }) => theme.colors.borderLight};
  }
`

export const MarqueeInitials = styled.span`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 2px;
  line-height: 1;
`

export const MarqueeName = styled.span`
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.82rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary};
  letter-spacing: 0.5px;
  text-transform: uppercase;
  white-space: nowrap;
`
