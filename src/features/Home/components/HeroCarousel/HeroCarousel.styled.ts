import styled, { css } from 'styled-components'

export const CarouselWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 85vh;
  min-height: 500px;
  max-height: 900px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    height: 75vh;
    min-height: 420px;
  }
`

export const SlideContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export const Slide = styled.div<{ $active: boolean; $direction: 'left' | 'right' }>`
  position: absolute;
  inset: 0;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 0.8s ease-in-out;
  pointer-events: ${({ $active }) => ($active ? 'auto' : 'none')};
`

export const SlideImage = styled.div<{ $src: string; $active: boolean }>`
  position: absolute;
  inset: 0;
  background-image: url(${({ $src }) => $src});
  background-size: cover;
  background-position: center;
  transform: ${({ $active }) => ($active ? 'scale(1)' : 'scale(1.05)')};
  transition: transform 6s ease-out, opacity 0.8s ease-in-out;
  will-change: transform;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      rgba(21, 26, 46, 0.88) 0%,
      rgba(21, 26, 46, 0.55) 40%,
      rgba(21, 26, 46, 0.15) 65%,
      transparent 100%
    );

    @media (max-width: 768px) {
      background: linear-gradient(
        to top,
        rgba(21, 26, 46, 0.95) 0%,
        rgba(21, 26, 46, 0.6) 50%,
        rgba(21, 26, 46, 0.3) 100%
      );
    }
  }
`

export const BottomVignette = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: linear-gradient(
    to top,
    ${({ theme }) => theme.colors.primary} 0%,
    transparent 100%
  );
  pointer-events: none;
  z-index: 2;
`

export const SlideContent = styled.div<{ $active: boolean }>`
  position: absolute;
  inset: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 8%;
  max-width: 700px;

  @media (max-width: 768px) {
    justify-content: flex-end;
    padding: 0 24px 100px;
    max-width: 100%;
  }
`

export const GameLogo = styled.img<{ $active: boolean }>`
  width: 220px;
  height: auto;
  margin-bottom: 24px;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transform: ${({ $active }) => ($active ? 'scale(1)' : 'scale(0.85)')};
  transition: opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s;
  filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.5));

  @media (max-width: 768px) {
    width: 160px;
    margin-bottom: 16px;
  }
`

export const SlideTitle = styled.h2<{ $active: boolean }>`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 700;
  color: #fff;
  line-height: 1.1;
  margin: 0 0 16px;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transform: ${({ $active }) => ($active ? 'translateY(0)' : 'translateY(30px)')};
  transition: opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s;
`

export const SlideDescription = styled.p<{ $active: boolean }>`
  font-family: 'Rajdhani', sans-serif;
  font-size: clamp(0.9rem, 2vw, 1.05rem);
  font-weight: 400;
  color: ${({ theme }) => theme.colors.tertiary};
  opacity: 0.85;
  line-height: 1.6;
  margin: 0;
  max-width: 480px;
  opacity: ${({ $active }) => ($active ? 0.85 : 0)};
  transform: ${({ $active }) => ($active ? 'translateY(0)' : 'translateY(20px)')};
  transition: opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s;
`

export const ArrowButton = styled.button<{ $side: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $side }) => ($side === 'left' ? 'left: 16px;' : 'right: 16px;')}
  z-index: 5;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  background: ${({ theme }) => theme.colors.overlay};
  backdrop-filter: blur(12px);
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  opacity: 0.6;

  &:hover {
    opacity: 1;
    border-color: ${({ theme }) => theme.colors.accentMuted};
    color: #fff;
    transform: translateY(-50%) scale(1.08);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }

  @media (min-width: 768px) {
    width: 52px;
    height: 52px;
    ${({ $side }) => ($side === 'left' ? 'left: 28px;' : 'right: 28px;')}
  }

  @media (max-width: 480px) {
    display: none;
  }
`

export const Indicators = styled.div`
  position: absolute;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    bottom: 28px;
  }
`

export const Indicator = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? '36px' : '12px')};
  height: 4px;
  border-radius: 2px;
  border: none;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  background: ${({ $active, theme }) =>
    $active ? theme.colors.accent : 'rgba(192, 213, 235, 0.25)'};
  box-shadow: ${({ $active, theme }) =>
    $active ? `0 0 12px ${theme.colors.accentMuted}` : 'none'};

  &:hover {
    background: ${({ $active, theme }) =>
      $active ? theme.colors.accent : 'rgba(192, 213, 235, 0.45)'};
  }
`

export const ProgressBar = styled.div<{ $active: boolean; $duration: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  z-index: 6;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.accent},
    ${({ theme }) => theme.colors.accentSoft}
  );
  ${({ $active, $duration }) =>
    $active
      ? css`
          width: 100%;
          transition: width ${$duration}ms linear;
        `
      : css`
          width: 0%;
          transition: none;
        `}
`
