import styled from 'styled-components'

export const PageWrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.primary};
`
