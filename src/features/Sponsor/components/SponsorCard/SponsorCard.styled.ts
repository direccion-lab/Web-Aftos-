import { fadeInUp } from '@theme/animations'
import styled from 'styled-components'

export const Card = styled.a<{ $index: number }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 32px 24px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  backdrop-filter: blur(12px);
  cursor: pointer;
  text-decoration: none;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  animation: ${fadeInUp} 0.5s ease backwards;
  animation-delay: ${({ $index }) => $index * 0.07}s;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 16px;
    background: radial-gradient(
      circle at 50% 0%,
      ${({ theme }) => theme.colors.accentMuted} 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.35s ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-6px);
    border-color: ${({ theme }) => theme.colors.accent}44;
    box-shadow: 0 12px 40px ${({ theme }) => theme.colors.borderLight},
      0 0 30px ${({ theme }) => theme.colors.accentMuted};

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-2px) scale(0.98);
  }
`

export const LogoWrapper = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.surface} 100%
  );
  border: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;
  z-index: 1;
  transition: all 0.35s ease;

  ${Card}:hover & {
    border-color: ${({ theme }) => theme.colors.accentMuted};
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.accentMuted};
    transform: scale(1.05);
  }
`

export const LogoInitials = styled.span`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 2px;
  text-transform: uppercase;
  user-select: none;
`

export const SponsorName = styled.span`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  position: relative;
  z-index: 1;
  transition: color 0.25s ease;

  ${Card}:hover & {
    color: ${({ theme }) => theme.colors.accent};
  }
`

export const ExternalIcon = styled.span`
  position: absolute;
  top: 12px;
  right: 12px;
  opacity: 0;
  transform: translate(-4px, 4px);
  transition: all 0.25s ease;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.75rem;
  z-index: 1;

  ${Card}:hover & {
    opacity: 1;
    transform: translate(0, 0);
    color: ${({ theme }) => theme.colors.accent};
  }
`
