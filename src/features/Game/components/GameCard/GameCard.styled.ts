import { fadeInUp } from '@theme/animations'
import styled from 'styled-components'

export const Card = styled.article<{ $index: number }>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
  cursor: pointer;
  animation: ${fadeInUp} 0.5s ease backwards;
  animation-delay: ${({ $index }) => $index * 0.08}s;
`

export const CoverWrapper = styled.div`
  position: relative;
  aspect-ratio: 3 / 4;
  border-radius: 14px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  transition: all 0.3s ease;

  ${Card}:hover & {
    border-color: ${({ theme }) => theme.colors.border};
    box-shadow: 0 8px 40px ${({ theme }) => theme.colors.borderLight},
      0 0 0 1px ${({ theme }) => theme.colors.borderLight};
    transform: translateY(-4px);
  }
`

export const CoverImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.4s ease;

  ${Card}:hover & {
    opacity: 0;
  }
`

export const CoverVideo = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.4s ease;

  ${Card}:hover & {
    opacity: 1;
  }
`

export const Badge = styled.span<{ $variant: 'coming_soon' | 'new' | 'available' }>`
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 2;
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 5px 12px;
  border-radius: 6px;
  backdrop-filter: blur(8px);

  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'coming_soon':
        return `
          background: rgba(21, 26, 46, 0.7);
          border: 1px solid ${theme.colors.border};
          color: ${theme.colors.textPrimary};
        `
      case 'new':
        return `
          background: ${theme.colors.accentMuted};
          border: 1px solid ${theme.colors.accent};
          color: ${theme.colors.accent};
        `
      case 'available':
        return `
          background: rgba(74, 222, 159, 0.12);
          border: 1px solid rgba(74, 222, 159, 0.3);
          color: ${theme.colors.success};
        `
    }
  }}
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 4px;
`

export const GameTitle = styled.h3`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
  line-height: 1.3;
  transition: color 0.2s ease;

  ${Card}:hover & {
    color: ${({ theme }) => theme.colors.accent};
  }
`

export const GameGenre = styled.span`
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
`

export const Platforms = styled.div`
  display: flex;
  gap: 8px;
  padding: 0 4px;
  margin-top: 2px;
`

export const PlatformIcon = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textMuted};
  transition: color 0.2s ease;
  display: flex;
  align-items: center;

  ${Card}:hover & {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`
