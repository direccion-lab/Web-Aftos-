import { fadeInUp } from '@theme/animations'
import { media } from '@theme/breakpoints'
import styled from 'styled-components'

export const PageWrapper = styled.main`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  padding: 40px 24px 80px;

  ${media.minMd} {
    padding: 60px 40px 100px;
  }
`

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 40px;
  animation: ${fadeInUp} 0.5s ease;

  ${media.sm} {
    flex-direction: column;
    gap: 20px;
  }
`

export const Title = styled.h1`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;
`

export const Filters = styled.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;
`

export const FilterButton = styled.button<{ $active: boolean }>`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.25s ease;
  white-space: nowrap;

  background: ${({ $active, theme }) =>
    $active ? theme.colors.accentMuted : theme.colors.divider};
  border: 1px solid ${({ $active, theme }) =>
    $active ? theme.colors.accent : theme.colors.borderLight};
  color: ${({ $active, theme }) => ($active ? theme.colors.accent : theme.colors.textSecondary)};

  &:hover {
    background: ${({ $active, theme }) =>
      $active ? theme.colors.accentMuted : theme.colors.border};
    color: ${({ $active, theme }) => ($active ? theme.colors.accent : theme.colors.textPrimary)};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0) scale(0.97);
  }
`

export const GamesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
  max-width: 720px;

  @media (max-width: 540px) {
    max-width: 100%;
    gap: 16px;
  }
`

export const EmptyState = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 24px;
  text-align: center;
  gap: 12px;
`

export const EmptyIcon = styled.span`
  font-size: 2.5rem;
  opacity: 0.4;
`

export const EmptyText = styled.p`
  font-family: 'Rajdhani', sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin: 0;
`
