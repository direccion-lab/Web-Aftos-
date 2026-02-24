import { fadeIn, fadeInUp } from '@theme/animations'
import { media } from '@theme/breakpoints'
import styled from 'styled-components'

export const Overlay = styled.div<{ $visible: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'all' : 'none')};
  transition: opacity 0.3s ease;
`

export const Modal = styled.div<{ $visible: boolean }>`
  position: relative;
  width: 100%;
  max-width: 800px;
  max-height: 85vh;
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 24px;
  overflow-y: auto;
  overflow-x: hidden;
  animation: ${({ $visible }) => ($visible ? fadeInUp : 'none')} 0.4s ease;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.5),
    0 0 60px ${({ theme }) => theme.colors.accentMuted};

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    border-radius: 3px;
  }

  ${media.sm} {
    max-height: 90vh;
    border-radius: 16px;
  }
`

export const CloseButton = styled.button`
  position: sticky;
  top: 16px;
  float: right;
  margin-right: 16px;
  z-index: 10;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  backdrop-filter: blur(8px);

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
    color: ${({ theme }) => theme.colors.textPrimary};
    border-color: ${({ theme }) => theme.colors.accent}44;
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
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;
  line-height: 1.2;
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const SectionTitle = styled.h3`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;

  &::before {
    content: '';
    width: 4px;
    height: 20px;
    border-radius: 2px;
    background: ${({ theme }) => theme.colors.accent};
  }
`

export const Text = styled.p`
  font-family: 'Rajdhani', sans-serif;
  font-size: clamp(0.88rem, 1.5vw, 0.95rem);
  font-weight: 400;
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
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-left: 3px solid ${({ theme }) => theme.colors.accent};
`

export const Divider = styled.div`
  width: 60px;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    ${({ theme }) => theme.colors.accent},
    transparent
  );
  opacity: 0.5;
`

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  ${media.sm} {
    grid-template-columns: 1fr;
  }
`

export const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  border-radius: 14px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent}44;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px ${({ theme }) => theme.colors.borderLight};
  }
`

export const FeatureTitle = styled.h4`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0;
`

export const FeatureDesc = styled.p`
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.85rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
  margin: 0;
`

export const InfoRow = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`

export const InfoBadge = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px 24px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  flex: 1;
  min-width: 200px;
`

export const InfoLabel = styled.span`
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
`

export const InfoValue = styled.span`
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
`
