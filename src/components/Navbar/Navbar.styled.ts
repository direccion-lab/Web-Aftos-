import { glowPulse, navFloat, scanline, shimmer, slideDown } from '@theme/animations'
import { media } from '@theme/breakpoints'
import styled from 'styled-components'

export const NavWrapper = styled.div`
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: calc(100% - 32px);
  max-width: 1100px;
  animation: ${navFloat} 0.6s cubic-bezier(0.16, 1, 0.3, 1);

  ${media.minMd} {
    top: 20px;
    width: calc(100% - 80px);
  }
`

export const Nav = styled.nav`
  position: relative;
  background: ${({ theme }) => theme.colors.overlay};
  backdrop-filter: blur(24px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  box-shadow: 0 8px 32px ${({ theme }) => theme.colors.border},
    0 0 0 1px ${({ theme }) => theme.colors.borderLight};
  overflow: hidden;
  transition: background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
`

export const GlowLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    ${({ theme }) => theme.colors.accentMuted},
    transparent
  );
  transition: background 0.4s ease;
`

export const NavInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 56px;

  ${media.minMd} {
    padding: 0 28px;
  }
`

export const NavSpacer = styled.div`
  height: 96px;

  ${media.minMd} {
    height: 100px;
  }
`

export const Logo = styled.div`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: 2px;
  cursor: pointer;
  text-transform: uppercase;
  user-select: none;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
    letter-spacing: 3px;
  }
`

export const LogoAccent = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 400;
  margin-left: 4px;
`

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;

  ${media.md} {
    display: none;
  }
`

export const NavLinkWrapper = styled.div`
  position: relative;
`

export const HoverGlow = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
  background: radial-gradient(
    ellipse at center,
    ${({ theme }) => theme.colors.accentMuted} 0%,
    transparent 70%
  );
  pointer-events: none;
`

export const LinkText = styled.span`
  position: relative;
  z-index: 1;
`

export const ActiveBar = styled.div`
  position: absolute;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 2px;
  background: ${({ theme }) => theme.colors.accent};
  border-radius: 1px;
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.accent}99,
    0 0 20px ${({ theme }) => theme.colors.accent}44;
`

export const NavLink = styled.button<{ $active: boolean }>`
  position: relative;
  background: ${({ $active, theme }) => ($active ? theme.colors.accentMuted : 'none')};
  border: none;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.textPrimary : theme.colors.textSecondary};
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  padding: 10px 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 10px;
  overflow: hidden;

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
    transition: none;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
    background: ${({ theme }) => theme.colors.accentMuted};
    transform: translateY(-1px);

    ${HoverGlow} {
      opacity: 1;
      animation: ${glowPulse} 2s ease-in-out infinite;
    }

    &::before {
      animation: ${scanline} 0.8s ease-in-out;
    }
  }

  &:active {
    transform: translateY(0) scale(0.97);
  }
`

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  ${media.md} {
    display: none;
  }
`

export const LangButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background: ${({ theme }) => theme.colors.divider};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.border};
    transform: translateY(-1px);
  }
`

export const LangFlag = styled.span`
  font-size: 0.9rem;
  line-height: 1;
`

export const LangCode = styled.span`
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.textSecondary};
`

export const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1) rotate(10deg);
  }

  &:active {
    transform: scale(0.95);
  }
`

export const ToggleTrack = styled.div`
  width: 44px;
  height: 24px;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.surface}
  );
  border: 1px solid ${({ theme }) => theme.colors.accentMuted};
  position: relative;
  transition: all 0.4s ease;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2),
    0 0 8px ${({ theme }) => theme.colors.accentMuted};
`

export const ToggleThumb = styled.div<{ $isDark: boolean }>`
  position: absolute;
  top: 2px;
  left: ${({ $isDark }) => ($isDark ? '2px' : '22px')};
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.surface};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65rem;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`

export const DonateIcon = styled.span`
  font-size: 0.85rem;
  transition: transform 0.3s;
`

export const DonateButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.accent} 0%,
    ${({ theme }) => theme.colors.accentSoft} 100%
  );
  background-size: 200% auto;
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  padding: 8px 16px;
  border-radius: 10px;
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 12px ${({ theme }) => theme.colors.accentMuted};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 24px ${({ theme }) => theme.colors.accentMuted};
    animation: ${shimmer} 2s linear infinite;

    ${DonateIcon} {
      transform: scale(1.3);
    }
  }

  &:active {
    transform: translateY(0);
  }
`

export const MobileRight = styled.div`
  display: none;
  align-items: center;
  gap: 8px;

  ${media.md} {
    display: flex;
  }
`

export const ThemeToggleMini = styled.button`
  background: ${({ theme }) => theme.colors.divider};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: 8px;
  padding: 6px 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  line-height: 1;

  &:hover {
    transform: rotate(20deg);
  }
`

export const Hamburger = styled.button<{ $open: boolean }>`
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 1001;

  ${media.md} {
    display: flex;
  }

  span {
    display: block;
    width: 22px;
    height: 2px;
    background: ${({ theme }) => theme.colors.textSecondary};
    border-radius: 2px;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);

    &:nth-child(1) {
      transform: ${({ $open }) => ($open ? 'rotate(45deg) translate(5px, 5px)' : 'none')};
    }

    &:nth-child(2) {
      opacity: ${({ $open }) => ($open ? 0 : 1)};
      transform: ${({ $open }) => ($open ? 'translateX(10px)' : 'none')};
    }

    &:nth-child(3) {
      transform: ${({ $open }) => ($open ? 'rotate(-45deg) translate(5px, -5px)' : 'none')};
    }
  }
`

export const MobileMenu = styled.div<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? 'flex' : 'none')};
  flex-direction: column;
  padding: 8px 20px 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
  animation: ${slideDown} 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  @media (min-width: 769px) {
    display: none;
  }
`

export const MobileLink = styled.button<{ $active: boolean }>`
  background: ${({ $active, theme }) => ($active ? theme.colors.accentMuted : 'none')};
  border: none;
  border-left: 2px solid ${({ $active, theme }) => ($active ? theme.colors.accent : 'transparent')};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.textPrimary : theme.colors.textSecondary};
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: left;
  padding: 14px 16px;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 0 8px 8px 0;

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
    background: ${({ theme }) => theme.colors.divider};
  }
`

export const MobileLangRow = styled.div`
  display: flex;
  gap: 8px;
  padding: 12px 16px 4px;
`

export const MobileLangButton = styled.button<{ $active: boolean }>`
  flex: 1;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid ${({ $active, theme }) =>
    $active ? theme.colors.accentMuted : theme.colors.borderLight};
  background: ${({ $active, theme }) => ($active ? theme.colors.accentMuted : 'transparent')};
  color: ${({ $active, theme }) => ($active ? theme.colors.accent : theme.colors.textSecondary)};
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.2s;
`

export const MobileDonate = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.accent} 0%,
    ${({ theme }) => theme.colors.accentSoft} 100%
  );
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  padding: 14px;
  border-radius: 10px;
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 4px 20px ${({ theme }) => theme.colors.accentMuted};
    transform: translateY(-1px);
  }
`
