import { fadeInUp, pulse } from '@theme/animations'
import { media } from '@theme/breakpoints'
import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  border-top: 1px solid ${({ theme }) => theme.colors.borderLight};
  padding: 60px 24px 32px;
  animation: ${fadeInUp} 0.5s ease;

  ${media.minMd} {
    padding: 80px 40px 40px;
  }
`

export const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 48px;
`

export const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 40px;

  ${media.lg} {
    grid-template-columns: 1.5fr 1fr 1fr;
  }

  ${media.md} {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  ${media.xs} {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`

export const BrandColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Logo = styled.span`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 1.3rem;
  font-weight: 800;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  gap: 4px;
`

export const LogoAccent = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`

export const BrandDescription = styled.p`
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.85rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
  margin: 0;
  max-width: 280px;
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 4px;
`

export const SocialLink = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  background: ${({ theme }) => theme.colors.divider};
  color: ${({ theme }) => theme.colors.textMuted};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accentMuted};
    color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.accentMuted};
    transform: translateY(-2px);
  }
`

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const ColumnTitle = styled.span`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  display: flex;
  align-items: center;
  gap: 8px;
`

export const ColumnDot = styled.span`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accent};
  animation: ${pulse} 2s ease-in-out infinite;
`

export const FooterLink = styled.button`
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s ease;
  letter-spacing: 0.3px;

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
    transform: translateX(4px);
  }
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    ${({ theme }) => theme.colors.borderLight},
    transparent
  );
`

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  ${media.sm} {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
`

export const Copyright = styled.span`
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.78rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: 0.5px;
`

export const MadeWith = styled.span`
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.78rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 4px;
`

export const Heart = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.9rem;
`
