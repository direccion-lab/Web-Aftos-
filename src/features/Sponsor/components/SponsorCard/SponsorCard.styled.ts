import { fadeInUp } from '@theme/animations'
import styled from 'styled-components'

export const Card = styled.a<{ $index: number }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 36px 24px 28px;
  border-radius: 18px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  cursor: pointer;
  text-decoration: none;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  animation: ${fadeInUp} 0.5s ease backwards;
  animation-delay: ${({ $index }) => $index * 0.07}s;
  overflow: hidden;

  /* glow superior al hover */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.colors.accent},
      transparent
    );
    opacity: 0;
    transition: opacity 0.35s ease;
  }

  /* radial glow fondo */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 18px;
    background: radial-gradient(
      circle at 50% 0%,
      ${({ theme }) => theme.colors.accent}18 0%,
      transparent 65%
    );
    opacity: 0;
    transition: opacity 0.35s ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: ${({ theme }) => theme.colors.accent}55;
    box-shadow:
      0 16px 48px rgba(0, 0, 0, 0.3),
      0 0 30px ${({ theme }) => theme.colors.accentMuted};

    &::before { opacity: 1; }
    &::after  { opacity: 1; }
  }

  &:active {
    transform: translateY(-2px) scale(0.98);
  }
`

export const TierBadge = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  background: ${({ theme }) => theme.colors.accent}18;
  border: 1px solid ${({ theme }) => theme.colors.accent}33;
  padding: 2px 8px;
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.25s ease;

  ${Card}:hover & {
    opacity: 1;
  }
`

export const LogoWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 18px;
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
    border-color: ${({ theme }) => theme.colors.accent}55;
    box-shadow:
      0 0 0 4px ${({ theme }) => theme.colors.accent}11,
      0 0 20px ${({ theme }) => theme.colors.accentMuted};
    transform: scale(1.08);
  }
`

export const LogoInitials = styled.span`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 2px;
  text-transform: uppercase;
  user-select: none;
`

export const SponsorName = styled.span`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary};
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  position: relative;
  z-index: 1;
  transition: color 0.25s ease;
  line-height: 1.3;

  ${Card}:hover & {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`

export const ExternalIcon = styled.span`
  position: absolute;
  top: 12px;
  right: 12px;
  opacity: 0;
  transform: translate(-3px, 3px);
  transition: all 0.25s ease;
  color: ${({ theme }) => theme.colors.accent};
  z-index: 1;

  ${Card}:hover & {
    opacity: 1;
    transform: translate(0, 0);
  }
`
