import { fadeInUp, glowPulse } from '@theme/animations'
import { media } from '@theme/breakpoints'
import styled, { keyframes } from 'styled-components'

const glitch = keyframes`
  0%, 100% { text-shadow: 2px 0 rgba(255, 215, 88, 0.6), -2px 0 rgba(90, 158, 245, 0.6); }
  25% { text-shadow: -2px 0 rgba(255, 215, 88, 0.6), 2px 0 rgba(90, 158, 245, 0.6); }
  50% { text-shadow: 2px 2px rgba(255, 215, 88, 0.6), -2px -2px rgba(90, 158, 245, 0.6); }
  75% { text-shadow: -2px 2px rgba(255, 215, 88, 0.6), 2px -2px rgba(90, 158, 245, 0.6); }
`

export const PageWrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary};
  padding: 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      ${({ theme }) => theme.colors.accentMuted} 0%,
      transparent 70%
    );
    animation: ${glowPulse} 4s ease-in-out infinite;
    pointer-events: none;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  animation: ${fadeInUp} 0.6s ease-out;
  position: relative;
  z-index: 1;
`

export const GlitchCode = styled.h1`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: 8px;
  line-height: 1;
  animation: ${glitch} 3s ease-in-out infinite;

  ${media.md} {
    font-size: 6rem;
  }
`

export const Title = styled.h2`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: 2px;
  text-transform: uppercase;

  ${media.md} {
    font-size: 1.4rem;
  }
`

export const Description = styled.p`
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 420px;
  line-height: 1.6;
`

export const HomeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 1rem;
  padding: 12px 28px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.accent} 0%,
    ${({ theme }) => theme.colors.accentSoft} 100%
  );
  color: ${({ theme }) => theme.colors.primary};
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px ${({ theme }) => theme.colors.accentMuted};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 28px ${({ theme }) => theme.colors.accentMuted};
  }

  &:active {
    transform: translateY(0);
  }
`
