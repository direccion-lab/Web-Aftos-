import { navFloat, slideDown } from '@theme/animations'
import { media } from '@theme/breakpoints'
import styled, { keyframes } from 'styled-components'

const energyFlow = keyframes`
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`

const runeFlicker = keyframes`
  0%, 100% { opacity: 0.08; transform: scale(1); }
  20%       { opacity: 0.6;  transform: scale(1.1); }
  21%       { opacity: 0.08; transform: scale(1); }
  40%       { opacity: 0.4;  transform: scale(1.05); }
  41%       { opacity: 0.08; transform: scale(1); }
  80%       { opacity: 0.3;  transform: scale(1.08); }
`

const glitchLogo = keyframes`
  0%,  88%, 100% { clip-path: none; transform: translate(0,0); }
  89% { clip-path: inset(30% 0 40% 0); transform: translate(-5px, 0); }
  90% { clip-path: inset(10% 0 70% 0); transform: translate(5px, 0); }
  91% { clip-path: inset(60% 0 10% 0); transform: translate(-3px, 0); }
  92% { clip-path: inset(5%  0 85% 0); transform: translate(4px, 0); }
  93% { clip-path: none; transform: translate(0,0); }
`

const glitchR = keyframes`
  0%,  88%, 100% { clip-path: none; transform: translate(0,0); opacity: 0; }
  89% { clip-path: inset(30% 0 40% 0); transform: translate(4px,  1px); opacity: 1; }
  91% { clip-path: inset(60% 0 10% 0); transform: translate(-3px,-1px); opacity: 1; }
  93% { opacity: 0; }
`

const glitchB = keyframes`
  0%,  88%, 100% { clip-path: none; transform: translate(0,0); opacity: 0; }
  90% { clip-path: inset(10% 0 70% 0); transform: translate(-4px, 1px); opacity: 1; }
  92% { clip-path: inset(5%  0 85% 0); transform: translate(3px, -1px); opacity: 1; }
  93% { opacity: 0; }
`

const scanBeam = keyframes`
  0%          { transform: translateY(-100%); opacity: 0; }
  5%          { opacity: 1; }
  95%         { opacity: 1; }
  100%        { transform: translateY(2000%); opacity: 0; }
`

const heartbeat = keyframes`
  0%,100% { transform: scale(1);   filter: drop-shadow(0 0 2px currentColor); }
  14%      { transform: scale(1.4); filter: drop-shadow(0 0 8px currentColor); }
  28%      { transform: scale(1);   filter: drop-shadow(0 0 2px currentColor); }
  42%      { transform: scale(1.2); filter: drop-shadow(0 0 6px currentColor); }
  70%      { transform: scale(1);   filter: drop-shadow(0 0 2px currentColor); }
`

const shimmerLoop = keyframes`
  0%   { left: -80%; }
  100% { left: 160%; }
`

const cornerSpark = keyframes`
  0%,100% { opacity: 0.15; box-shadow: 0 0 2px currentColor; }
  50%      { opacity: 1;    box-shadow: 0 0 8px currentColor, 0 0 16px currentColor; }
`

const dataStream = keyframes`
  0%   { background-position: 0 0; }
  100% { background-position: 0 100px; }
`

const linkWipe = keyframes`
  0%   { transform: scaleX(0) skewX(-8deg); opacity: 0; }
  60%  { transform: scaleX(1) skewX(-8deg); opacity: 1; }
  100% { transform: scaleX(1) skewX(0deg);  opacity: 1; }
`

const particleFly = keyframes`
  0%   { transform: translateY(0)   scale(1);   opacity: 1; }
  100% { transform: translateY(-20px) scale(0); opacity: 0; }
`

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
  border-radius: 20px;
  overflow: hidden;

  background: ${({ theme }) => theme.colors.overlay};
  backdrop-filter: blur(32px) saturate(180%);

  box-shadow:
    0 0 0 1px ${({ theme }) => theme.colors.accent}55,
    0 0 0 2px ${({ theme }) => theme.colors.accent}11,
    0 8px 48px rgba(0,0,0,0.6),
    0 0 60px ${({ theme }) => theme.colors.accent}0a,
    inset 0 1px 0 ${({ theme }) => theme.colors.accent}22,
    inset 0 -1px 0 ${({ theme }) => theme.colors.accent}11;

  transition: box-shadow 0.4s ease;

  &:hover {
    box-shadow:
      0 0 0 1px ${({ theme }) => theme.colors.accent}88,
      0 0 0 2px ${({ theme }) => theme.colors.accent}22,
      0 12px 60px rgba(0,0,0,0.7),
      0 0 80px ${({ theme }) => theme.colors.accent}18,
      inset 0 1px 0 ${({ theme }) => theme.colors.accent}44,
      inset 0 -1px 0 ${({ theme }) => theme.colors.accent}22;
  }
`

export const DataStream = styled.div`
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    180deg,
    transparent 0px,
    transparent 4px,
    ${({ theme }) => theme.colors.accent}04 4px,
    ${({ theme }) => theme.colors.accent}04 5px
  );
  background-size: 100% 100px;
  animation: ${dataStream} 8s linear infinite;
  pointer-events: none;
  border-radius: 20px;
  z-index: 0;
`

export const ScanBeam = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    ${({ theme }) => theme.colors.accent}66 20%,
    ${({ theme }) => theme.colors.accent}cc 50%,
    ${({ theme }) => theme.colors.accent}66 80%,
    transparent 100%
  );
  box-shadow: 0 0 12px ${({ theme }) => theme.colors.accent}88;
  animation: ${scanBeam} 5s ease-in-out infinite;
  pointer-events: none;
  z-index: 3;
`

export const TopEnergyLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    ${({ theme }) => theme.colors.accent} 20%,
    #ffffff88 50%,
    ${({ theme }) => theme.colors.accent} 80%,
    transparent 100%
  );
  background-size: 300% 100%;
  animation: ${energyFlow} 4s ease infinite;
  z-index: 4;
`

export const BottomGlow = styled.div`
  position: absolute;
  bottom: 0;
  left: 10%;
  right: 10%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    ${({ theme }) => theme.colors.accent}44,
    transparent
  );
  z-index: 1;
`

export const Corner = styled.div<{ $pos: 'tl' | 'tr' | 'bl' | 'br' }>`
  position: absolute;
  width: 10px;
  height: 10px;
  z-index: 5;
  pointer-events: none;
  color: ${({ theme }) => theme.colors.accent};
  animation: ${cornerSpark} 2.5s ease-in-out infinite;

  ${({ $pos }) =>
    $pos === 'tl' &&
    `
    top: 0; left: 0;
    border-top: 2px solid currentColor;
    border-left: 2px solid currentColor;
    border-radius: 3px 0 0 0;
    animation-delay: 0s;
  `}
  ${({ $pos }) =>
    $pos === 'tr' &&
    `
    top: 0; right: 0;
    border-top: 2px solid currentColor;
    border-right: 2px solid currentColor;
    border-radius: 0 3px 0 0;
    animation-delay: 0.6s;
  `}
  ${({ $pos }) =>
    $pos === 'bl' &&
    `
    bottom: 0; left: 0;
    border-bottom: 2px solid currentColor;
    border-left: 2px solid currentColor;
    border-radius: 0 0 0 3px;
    animation-delay: 1.2s;
  `}
  ${({ $pos }) =>
    $pos === 'br' &&
    `
    bottom: 0; right: 0;
    border-bottom: 2px solid currentColor;
    border-right: 2px solid currentColor;
    border-radius: 0 0 3px 0;
    animation-delay: 1.8s;
  `}
`

export const RuneField = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 60px;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`

export const Rune = styled.span<{ $delay: number; $size: number }>`
  font-size: ${({ $size }) => $size}rem;
  color: ${({ theme }) => theme.colors.accent};
  animation: ${runeFlicker} ${({ $delay }) => 3 + $delay}s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;
  user-select: none;
  line-height: 1;
`

export const NavInner = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 60px;

  ${media.minMd} {
    padding: 0 28px;
  }
`

export const NavSpacer = styled.div`
  height: 100px;
  ${media.minMd} { height: 104px; }
`

export const Logo = styled.div`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  cursor: pointer;
  user-select: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.6rem;
  position: relative;

  &:hover { opacity: 1; }
`

export const LogoImg = styled.div`
  position: relative;
  width: 38px;
  height: 38px;

  img {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    transition: filter 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    background: radial-gradient(circle, ${({ theme }) => theme.colors.accent}44, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${Logo}:hover & {
    img { filter: drop-shadow(0 0 8px ${({ theme }) => theme.colors.accent}88); }
    &::after { opacity: 1; }
  }
`

export const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const LogoMain = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 4px;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-transform: uppercase;
  position: relative;
  animation: ${glitchLogo} 8s steps(1) infinite;

  &::before {
    content: attr(data-text);
    position: absolute;
    inset: 0;
    color: #ff2266;
    mix-blend-mode: screen;
    animation: ${glitchR} 8s steps(1) infinite;
  }

  &::after {
    content: attr(data-text);
    position: absolute;
    inset: 0;
    color: #00ddff;
    mix-blend-mode: screen;
    animation: ${glitchB} 8s steps(1) 0.08s infinite;
  }
`

export const LogoSub = styled.span`
  font-size: 0.58rem;
  font-weight: 500;
  letter-spacing: 7px;
  color: ${({ theme }) => theme.colors.accent};
  text-transform: uppercase;
  opacity: 0.8;
`

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;

  ${media.md} { display: none; }
`

export const NavLinkWrapper = styled.div`
  position: relative;
`

export const LinkBg = styled.div`
  position: absolute;
  inset: 2px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.accent}18;
  transform: scaleX(0) skewX(-8deg);
  transform-origin: left;
  transition: none;
`

export const Particle = styled.div`
  position: absolute;
  bottom: 6px;
  left: 50%;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accent};
  box-shadow: 0 0 6px ${({ theme }) => theme.colors.accent};
  opacity: 0;
  pointer-events: none;
`

export const LinkText = styled.span`
  position: relative;
  z-index: 1;
  transition: color 0.2s ease, text-shadow 0.2s ease;
`

export const ActiveBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 2px;
  background: ${({ theme }) => theme.colors.accent};
  border-radius: 1px;
  box-shadow:
    0 0 8px  ${({ theme }) => theme.colors.accent},
    0 0 20px ${({ theme }) => theme.colors.accent}66;
`

export const NavLink = styled.button<{ $active: boolean }>`
  position: relative;
  background: ${({ $active, theme }) => ($active ? `${theme.colors.accent}18` : 'transparent')};
  border: none;
  border: 1px solid ${({ $active, theme }) => ($active ? `${theme.colors.accent}44` : 'transparent')};
  color: ${({ $active, theme }) => ($active ? theme.colors.accent : theme.colors.textSecondary)};
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 10px 18px;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  transition: color 0.25s ease, border-color 0.25s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent}33;

    ${LinkText} {
      text-shadow: 0 0 12px ${({ theme }) => theme.colors.accent}88;
    }

    ${LinkBg} {
      animation: ${linkWipe} 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    ${Particle} {
      animation: ${particleFly} 0.6s ease forwards;

      &:nth-child(2) { left: 30%; animation-delay: 0.1s; }
      &:nth-child(3) { left: 70%; animation-delay: 0.2s; }
    }
  }

  &:active { transform: scale(0.96); }
`

export const HoverGlow = styled.div``

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  ${media.md} { display: none; }
`

export const LangButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.25s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.colors.accent}0a;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.25s ease;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent}55;
    transform: translateY(-1px);
    &::before { transform: scaleX(1); }
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
  position: relative;
  z-index: 1;
`

export const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  &:hover { transform: scale(1.15) rotate(20deg); }
  &:active { transform: scale(0.9) rotate(-10deg); }
`

export const ToggleTrack = styled.div`
  width: 46px;
  height: 24px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.accent}66;
  position: relative;
  box-shadow:
    inset 0 2px 6px rgba(0,0,0,0.3),
    0 0 10px ${({ theme }) => theme.colors.accentMuted};
`

export const ToggleThumb = styled.div<{ $isDark: boolean }>`
  position: absolute;
  top: 2px;
  left: ${({ $isDark }) => ($isDark ? '2px' : '22px')};
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65rem;
  transition: all 0.45s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  box-shadow: 0 0 8px ${({ theme }) => theme.colors.accent}88;
`

export const DonateIcon = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.primary};
  animation: ${heartbeat} 1.4s ease-in-out infinite;
  display: flex;
  align-items: center;
`

export const DonateButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 7px;
  border: none;
  padding: 9px 20px;
  border-radius: 10px;
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.primary};

  /* fondo vivo */
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.accent} 0%,
    ${({ theme }) => theme.colors.accentSoft} 50%,
    ${({ theme }) => theme.colors.accent} 100%
  );
  background-size: 200% 200%;
  animation: ${energyFlow} 3s ease infinite;

  /* borde interior */
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.25),
    inset 0 -1px 0 rgba(0,0,0,0.2),
    0 4px 20px ${({ theme }) => theme.colors.accent}66,
    0 0 40px ${({ theme }) => theme.colors.accent}22;

  /* shimmer constante */
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
      rgba(255,255,255,0.35),
      transparent
    );
    animation: ${shimmerLoop} 2s ease-in-out infinite;
    pointer-events: none;
  }

  /* texto */
  span { position: relative; z-index: 1; }

  &:hover {
    transform: translateY(-3px) scale(1.04);
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.3),
      inset 0 -1px 0 rgba(0,0,0,0.2),
      0 8px 32px ${({ theme }) => theme.colors.accent}88,
      0 0 60px ${({ theme }) => theme.colors.accent}44;
  }

  &:active {
    transform: translateY(-1px) scale(0.98);
  }
`

// ══════════════════════════════════════════════════════════════
// MOBILE
// ══════════════════════════════════════════════════════════════

export const MobileRight = styled.div`
  display: none;
  align-items: center;
  gap: 8px;

  ${media.md} { display: flex; }
`

export const ThemeToggleMini = styled.button`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.accent}44;
  border-radius: 8px;
  padding: 6px 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  line-height: 1;

  &:hover { transform: rotate(20deg) scale(1.1); }
`

export const Hamburger = styled.button<{ $open: boolean }>`
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;

  ${media.md} { display: flex; }

  span {
    display: block;
    width: 22px;
    height: 2px;
    background: ${({ $open, theme }) => ($open ? theme.colors.accent : theme.colors.textSecondary)};
    border-radius: 2px;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    box-shadow: ${({ $open, theme }) => ($open ? `0 0 8px ${theme.colors.accent}` : 'none')};

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
  padding: 8px 20px 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.accent}22;
  animation: ${slideDown} 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  z-index: 2;
  background: ${({ theme }) => theme.colors.accent}04;

  @media (min-width: 769px) { display: none; }
`

export const MobileLink = styled.button<{ $active: boolean }>`
  background: ${({ $active, theme }) => ($active ? `${theme.colors.accent}14` : 'transparent')};
  border: none;
  border-left: 2px solid ${({ $active, theme }) => ($active ? theme.colors.accent : 'transparent')};
  color: ${({ $active, theme }) => ($active ? theme.colors.accent : theme.colors.textSecondary)};
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: left;
  padding: 14px 16px;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 0 8px 8px 0;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.accent}10;
    border-left-color: ${({ theme }) => theme.colors.accent}66;
    text-shadow: 0 0 8px ${({ theme }) => theme.colors.accent}66;
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
  border: 1px solid ${({ $active, theme }) => ($active ? theme.colors.accent : theme.colors.borderLight)};
  background: ${({ $active, theme }) => ($active ? `${theme.colors.accent}18` : 'transparent')};
  color: ${({ $active, theme }) => ($active ? theme.colors.accent : theme.colors.textSecondary)};
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent}66;
    background: ${({ theme }) => theme.colors.accent}0f;
  }
`

export const MobileDonate = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.accent} 0%,
    ${({ theme }) => theme.colors.accentSoft} 100%
  );
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  padding: 16px;
  border-radius: 12px;
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 20px ${({ theme }) => theme.colors.accent}44;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px ${({ theme }) => theme.colors.accent}66;
  }
`
