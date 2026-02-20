import { media } from '@theme/breakpoints'
import styled from 'styled-components'

export const PageWrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding-bottom: 80px;

  ${media.minMd} {
    gap: 80px;
    padding-bottom: 100px;
  }
`

export const CarouselContainer = styled.div`
  width: 100%;
  padding: 0 24px;

  ${media.minMd} {
    padding: 0 40px;
  }
`
