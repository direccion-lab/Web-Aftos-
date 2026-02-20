import { fadeInUp } from '@theme/animations'
import { media } from '@theme/breakpoints'
import styled from 'styled-components'

export const PageWrapper = styled.main`
  width: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary};
  padding: 2rem;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  animation: ${fadeInUp} 0.6s ease-out;
`

export const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.accent};
  opacity: 0.8;
`

export const Title = styled.h1`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: 2px;
  text-transform: uppercase;

  ${media.md} {
    font-size: 2rem;
  }
`

export const Subtitle = styled.p`
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 500px;
  line-height: 1.6;
`

export const ComingSoonBadge = styled.span`
  display: inline-block;
  padding: 10px 24px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.accentMuted};
  color: ${({ theme }) => theme.colors.accent};
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: 1px solid ${({ theme }) => theme.colors.accent}33;
`
