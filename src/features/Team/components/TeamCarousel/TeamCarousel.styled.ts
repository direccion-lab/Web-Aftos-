import { fadeInUp, pulse } from '@theme/animations'
import { media } from '@theme/breakpoints'
import styled from 'styled-components'

export const CarouselSection = styled.section`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  animation: ${fadeInUp} 0.6s ease backwards;
  animation-delay: 0.2s;
`

export const CarouselHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;

  ${media.sm} {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
`

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
`

export const EyebrowDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accent};
  animation: ${pulse} 2s ease-in-out infinite;
  box-shadow: 0 0 8px ${({ theme }) => theme.colors.accentMuted};
`

export const Title = styled.h2`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;
`

export const NavButtons = styled.div`
  display: flex;
  gap: 8px;
`

export const NavButton = styled.button<{ $disabled: boolean }>`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid ${({ $disabled, theme }) =>
    $disabled ? theme.colors.borderLight : theme.colors.border};
  background: ${({ $disabled, theme }) => ($disabled ? 'transparent' : theme.colors.surface)};
  color: ${({ $disabled, theme }) =>
    $disabled ? theme.colors.textMuted : theme.colors.textSecondary};
  font-size: 1.2rem;
  cursor: ${({ $disabled }) => ($disabled ? 'default' : 'pointer')};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
  opacity: ${({ $disabled }) => ($disabled ? 0.4 : 1)};

  &:hover {
    ${({ $disabled, theme }) =>
      !$disabled &&
      `
      background: ${theme.colors.surfaceHover};
      border-color: ${theme.colors.accentMuted};
      color: ${theme.colors.textPrimary};
      transform: translateY(-1px);
    `}
  }

  &:active {
    ${({ $disabled }) =>
      !$disabled &&
      `
      transform: translateY(0) scale(0.95);
    `}
  }

  ${media.xs} {
    width: 38px;
    height: 38px;
  }
`

export const TrackWrapper = styled.div`
  overflow-x: hidden;
  overflow-y: visible;
  border-radius: 16px;
  padding: 8px 0;
  margin: -8px 0;
`

export const Track = styled.div<{ $offset: number }>`
  display: flex;
  gap: 20px;
  transform: translateX(${({ $offset }) => $offset}px);
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);

  ${media.md} {
    gap: 16px;
  }

  ${media.xs} {
    gap: 12px;
  }
`

export const Card = styled.div`
  position: relative;
  flex: 0 0 280px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  overflow: hidden;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-6px);
    border-color: ${({ theme }) => theme.colors.accent}44;
    box-shadow: 0 12px 40px ${({ theme }) => theme.colors.borderLight},
      0 0 30px ${({ theme }) => theme.colors.accentMuted};
  }

  ${media.md} {
    flex: 0 0 240px;
  }

  ${media.xs} {
    flex: 0 0 200px;
    border-radius: 12px;
  }
`

export const AvatarWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.surface} 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  ${media.xs} {
    aspect-ratio: 1.1;
  }
`

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const AvatarInitials = styled.span`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 4px;
  text-transform: uppercase;
  user-select: none;
  opacity: 0.6;

  ${media.xs} {
    font-size: 2.2rem;
    letter-spacing: 3px;
  }
`

export const RoleBadge = styled.span`
  position: absolute;
  bottom: 12px;
  left: 12px;
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 5px 12px;
  border-radius: 6px;
  backdrop-filter: blur(8px);
  background: ${({ theme }) => theme.colors.accentMuted};
  border: 1px solid ${({ theme }) => theme.colors.accent}44;
  color: ${({ theme }) => theme.colors.accent};

  ${media.xs} {
    font-size: 0.6rem;
    padding: 4px 8px;
    letter-spacing: 1px;
    bottom: 8px;
    left: 8px;
  }
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 20px;

  ${media.xs} {
    padding: 14px;
    gap: 3px;
  }
`

export const MemberName = styled.h3`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
  line-height: 1.3;
  transition: color 0.25s ease;

  ${Card}:hover & {
    color: ${({ theme }) => theme.colors.accent};
  }

  ${media.xs} {
    font-size: 0.95rem;
  }
`

export const MemberRole = styled.span`
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.8px;
  color: ${({ theme }) => theme.colors.textSecondary};

  ${media.xs} {
    font-size: 0.7rem;
  }
`

export const MemberBio = styled.p`
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.82rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.5;
  margin: 8px 0 0;

  ${media.xs} {
    font-size: 0.75rem;
    line-height: 1.4;
    margin: 4px 0 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 8px;
  padding: 0 20px 20px;

  ${media.xs} {
    padding: 0 14px 14px;
    gap: 6px;
  }
`

export const SocialLink = styled.a`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  background: ${({ theme }) => theme.colors.divider};
  color: ${({ theme }) => theme.colors.textMuted};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accentMuted};
    color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.accentMuted};
    transform: translateY(-2px);
  }

  ${media.xs} {
    width: 28px;
    height: 28px;
    border-radius: 6px;
  }
`

export const Indicators = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 28px;

  ${media.xs} {
    margin-top: 20px;
    gap: 6px;
  }
`

export const Indicator = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? '28px' : '8px')};
  height: 4px;
  border-radius: 2px;
  border: none;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  background: ${({ $active, theme }) => ($active ? theme.colors.accent : theme.colors.border)};
  box-shadow: ${({ $active, theme }) =>
    $active ? `0 0 10px ${theme.colors.accentMuted}` : 'none'};

  &:hover {
    background: ${({ $active, theme }) => ($active ? theme.colors.accent : theme.colors.textMuted)};
  }
`
