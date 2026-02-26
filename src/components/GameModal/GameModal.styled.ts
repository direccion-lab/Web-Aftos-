import { fadeIn, fadeInUp } from '@theme/animations'
import { media } from '@theme/breakpoints'
import styled, { keyframes } from 'styled-components'

const glitch = keyframes`
  0%, 100% { clip-path: inset(0 0 100% 0); transform: translate(0); }
  10% { clip-path: inset(10% 0 60% 0); transform: translate(-4px, 1px); }
  20% { clip-path: inset(40% 0 30% 0); transform: translate(4px, -1px); }
  30% { clip-path: inset(70% 0 10% 0); transform: translate(-2px, 2px); }
  40% { clip-path: inset(20% 0 70% 0); transform: translate(3px, -2px); }
  50% { clip-path: inset(55% 0 20% 0); transform: translate(-3px, 1px); }
  60% { clip-path: inset(80% 0 5%  0); transform: translate(2px, -1px); }
  70% { clip-path: inset(30% 0 50% 0); transform: translate(-4px, 2px); }
  80% { clip-path: inset(5%  0 80% 0); transform: translate(4px, -2px); }
  90% { clip-path: inset(60% 0 15% 0); transform: translate(-2px, 1px); }
`

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(255,255,255,0.1), 0 0 60px rgba(255,255,255,0.05); }
  50%       { box-shadow: 0 0 40px rgba(255,255,255,0.2), 0 0 100px rgba(255,255,255,0.1); }
`

const floatDown = keyframes`
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(5px); }
`

const scanline = keyframes`
  0%   { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
`

const runeGlow = keyframes`
  0%, 100% { opacity: 0.3; }
  50%       { opacity: 1; }
`

export const Overlay = styled.div<{ $visible: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.88);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'all' : 'none')};
  transition: opacity 0.4s ease;
`

export const Modal = styled.div<{ $visible: boolean }>`
  position: relative;
  width: 100%;
  max-width: 90%;
  max-height: 70vh;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  overflow-y: auto;
  overflow-x: hidden;
  animation: ${({ $visible }) => ($visible ? fadeInUp : 'none')} 0.4s ease;

  border: 1px solid transparent;
  background-clip: padding-box;
  box-shadow:
    0 0 0 1px ${({ theme }) => theme.colors.accent}55,
    0 32px 100px rgba(0, 0, 0, 0.7),
    0 0 80px ${({ theme }) => theme.colors.accentMuted},
    inset 0 1px 0 ${({ theme }) => theme.colors.accent}22;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.accent}66;
    border-radius: 2px;
  }

  ${media.sm} {
    max-height: 92vh;
    border-radius: 14px;
  }
`

export const ModalHeader = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${({ theme }) => theme.colors.accent}33;

  background:
    linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.85)),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 40px,
      ${({ theme }) => theme.colors.accent}08 40px,
      ${({ theme }) => theme.colors.accent}08 41px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 40px,
      ${({ theme }) => theme.colors.accent}08 40px,
      ${({ theme }) => theme.colors.accent}08 41px
    ),
    radial-gradient(ellipse at 30% 50%, ${({ theme }) => theme.colors.accent}22, transparent 60%),
    ${({ theme }) => theme.colors.surface};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      transparent 50%,
      ${({ theme }) => theme.colors.accent}05 50%
    );
    background-size: 100% 4px;
    pointer-events: none;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.colors.accent}88,
      transparent
    );
    animation: ${scanline} 3s linear infinite;
    z-index: 2;
  }

  ${media.sm} {
    height: 140px;
  }
`

export const HeaderRunes = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
  z-index: 3;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.accent};

  span {
    animation: ${runeGlow} 2s ease-in-out infinite;

    &:nth-child(2) { animation-delay: 0.4s; font-size: 2.8rem; }
    &:nth-child(3) { animation-delay: 0.8s; }
    &:nth-child(4) { animation-delay: 1.2s; }
    &:nth-child(5) { animation-delay: 1.6s; }
  }
`

export const CloseButton = styled.button`
  position: sticky;
  top: 16px;
  float: right;
  margin-right: 16px;
  z-index: 10;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.accent}44;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  backdrop-filter: blur(8px);

  &:hover {
    background: ${({ theme }) => theme.colors.accent}22;
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 12px ${({ theme }) => theme.colors.accent}44;
  }
`

export const Content = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  animation: ${fadeIn} 0.5s ease backwards;
  animation-delay: 0.1s;

  ${media.sm} {
    padding: 24px;
    gap: 28px;
  }
`

export const ModalTitle = styled.h2`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 3px;
  text-transform: uppercase;
  margin: 0;
  line-height: 1.2;
  position: relative;

  /* capa glitch 1 */
  &::before {
    content: attr(data-text);
    position: absolute;
    inset: 0;
    color: #ff0055;
    animation: ${glitch} 4s infinite;
    animation-delay: 0.5s;
    mix-blend-mode: screen;
  }

  &::after {
    content: attr(data-text);
    position: absolute;
    inset: 0;
    color: #00eeff;
    animation: ${glitch} 4s infinite reverse;
    animation-delay: 1s;
    mix-blend-mode: screen;
  }
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const SectionTitle = styled.h3`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;

  &::before {
    content: '';
    width: 3px;
    height: 18px;
    border-radius: 2px;
    background: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 8px ${({ theme }) => theme.colors.accent};
  }
`

export const Text = styled.p`
  font-family: 'Rajdhani', sans-serif;
  font-size: clamp(0.88rem, 1.5vw, 0.95rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.75;
  margin: 0;
`

export const HighlightText = styled.p`
  font-family: 'Rajdhani', sans-serif;
  font-size: clamp(0.92rem, 1.5vw, 1rem);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 1.7;
  margin: 0;
  padding: 20px 24px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.accent}33;
  border-left: 3px solid ${({ theme }) => theme.colors.accent};
  box-shadow: inset 0 0 40px ${({ theme }) => theme.colors.accent}08;
`

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
  }

  &::before {
    background: linear-gradient(90deg, transparent, ${({ theme }) => theme.colors.accent}44);
  }

  &::after {
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.accent}44, transparent);
  }
`

export const DividerDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accent};
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.accent},
              0 0 20px ${({ theme }) => theme.colors.accent}88;
  flex-shrink: 0;
`

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;

  ${media.sm} {
    grid-template-columns: 1fr;
  }
`

export const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.surface};
  position: relative;
  overflow: hidden;
  cursor: default;
  transition: transform 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 12px;
    padding: 1px;
    background: linear-gradient(
      var(--angle, 0deg),
      transparent 40%,
      ${({ theme }) => theme.colors.accent}88,
      transparent 60%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    height: 60px;
    background: radial-gradient(
      circle at top left,
      ${({ theme }) => theme.colors.accent}22,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-3px);

    &::before { opacity: 1; }
    &::after  { opacity: 1; }
  }
`

export const FeatureIcon = styled.span`
  font-size: 1.4rem;
  line-height: 1;
`

export const FeatureTitle = styled.h4`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin: 0;
`

export const FeatureDesc = styled.p`
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
  margin: 0;
`

export const InfoRow = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
`

export const InfoBadge = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px 24px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.accent}22;
  flex: 1;
  min-width: 180px;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent}55;
  }
`

export const InfoLabel = styled.span`
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
`

export const InfoValue = styled.span`
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
`

export const DownloadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  width: 100%;
  padding: 20px 32px;
  border-radius: 14px;
  border: none;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.accent}dd,
    ${({ theme }) => theme.colors.accent}88
  );
  color: ${({ theme }) => theme.colors.primary};
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  animation: ${pulse} 3s ease-in-out infinite;


  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.25),
      transparent
    );
    transition: left 0.6s ease;
  }

  &::after {
    content: '⟨  ⟩';
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    font-size: 1.4rem;
    color: rgba(255,255,255,0.15);
    pointer-events: none;
    letter-spacing: 0;
  }

  &:hover {
    transform: translateY(-2px) scale(1.01);
    box-shadow:
      0 0 40px ${({ theme }) => theme.colors.accent}88,
      0 12px 40px ${({ theme }) => theme.colors.accent}44;

    &::before { left: 150%; }

    svg {
      animation: ${floatDown} 0.7s ease infinite;
    }
  }

  &:active {
    transform: translateY(0) scale(0.99);
  }

  svg {
    position: relative;
    z-index: 1;
    filter: drop-shadow(0 0 4px rgba(255,255,255,0.5));
  }

  span {
    position: relative;
    z-index: 1;
  }
`
