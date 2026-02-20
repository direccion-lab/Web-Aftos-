import styled from 'styled-components'

export const SectionBackground = styled.section`
  width: 100%;
  min-height: 100vh; 
  background-size: cover;
  background-position: center;
  background-attachment: fixed; 
  background-repeat: no-repeat;
  background-color: #0b0d17; 
  display: flex;
  flex-direction: column;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(11, 13, 23, 0.4) 100%);
    pointer-events: none;
}
`
