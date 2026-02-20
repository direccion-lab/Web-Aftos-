import { fadeIn, fadeInUp, pulse, shimmerLine } from '@theme/animations'
import { media } from '@theme/breakpoints'
import styled from 'styled-components'

export const PageWrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeroArea = styled.section`
  position: relative;
  width: 100%;
  padding: 80px 24px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;

  ${media.minMd} {
    padding: 100px 40px 80px;
  }
`

export const HeroDecoration = styled.div`
  position: absolute;
  top: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    ${({ theme }) => theme.colors.accentMuted} 0%,
    transparent 70%
  );
  pointer-events: none;
  opacity: 0.3;

  ${media.md} {
    width: 400px;
    height: 400px;
  }
`

export const Eyebrow = styled.span`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  z-index: 1;
  animation: ${fadeInUp} 0.5s ease backwards;
  animation-delay: 0.1s;
`

export const EyebrowDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accent};
  animation: ${pulse} 2s ease-in-out infinite;
  box-shadow: 0 0 8px ${({ theme }) => theme.colors.accentMuted};
`

export const Title = styled.h2`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: 3px;
  text-transform: uppercase;
  margin: 16px 0 12px;
  position: relative;
  z-index: 1;
  animation: ${fadeInUp} 0.5s ease backwards;
  animation-delay: 0.2s;
`

export const Subtitle = styled.p`
  font-family: 'Rajdhani', sans-serif;
  font-size: clamp(0.92rem, 1.8vw, 1.05rem);
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  max-width: 560px;
  margin: 0;
  position: relative;
  z-index: 1;
  animation: ${fadeInUp} 0.5s ease backwards;
  animation-delay: 0.3s;
`

/* ---- Form Section ---- */

export const FormSection = styled.section`
  width: 100%;
  max-width: 720px;
  padding: 0 24px 80px;
  animation: ${fadeIn} 0.6s ease backwards;
  animation-delay: 0.4s;

  ${media.minMd} {
    padding: 0 40px 100px;
  }
`

export const FormCard = styled.form`
  position: relative;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.surface} 0%,
    ${({ theme }) => theme.colors.primary} 100%
  );
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  padding: 48px 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow: hidden;
  box-shadow: 0 4px 40px ${({ theme }) => theme.colors.borderLight},
    inset 0 1px 0 ${({ theme }) => theme.colors.borderLight};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${({ theme }) => theme.colors.accent} 30%,
      ${({ theme }) => theme.colors.accentSoft} 70%,
      transparent 100%
    );
    opacity: 0.6;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 60%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.colors.accentMuted},
      transparent
    );
    animation: ${shimmerLine} 8s ease-in-out infinite;
    pointer-events: none;
  }

  ${media.md} {
    padding: 36px 24px;
    gap: 20px;
  }
`

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  ${media.sm} {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Label = styled.label`
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textSecondary};
`

export const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.divider};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent}66;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.accentMuted};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`

export const Select = styled.select`
  width: 100%;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.divider};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%238A94B2' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 14px center;
  background-size: 16px;
  padding-right: 40px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent}66;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.accentMuted};
  }
`

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 140px;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.divider};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  outline: none;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent}66;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.accentMuted};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`

export const SubmitButton = styled.button`
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 36px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.accent} 0%,
    ${({ theme }) => theme.colors.accentSoft} 100%
  );
  color: ${({ theme }) => theme.colors.primary};
  font-family: 'Rajdhani', 'Barlow Condensed', sans-serif;
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px ${({ theme }) => theme.colors.accentMuted};
  position: relative;
  z-index: 1;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px ${({ theme }) => theme.colors.accentMuted};
  }

  &:active {
    transform: translateY(0) scale(0.98);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  ${media.sm} {
    align-self: stretch;
    justify-content: center;
  }
`

/* ---- Feedback Toast ---- */

export const FeedbackToast = styled.div<{ $type: 'success' | 'error' }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-radius: 12px;
  background: ${({ $type, theme }) =>
    $type === 'success' ? `${theme.colors.success}15` : `${theme.colors.error}15`};
  border: 1px solid ${({ $type, theme }) =>
    $type === 'success' ? `${theme.colors.success}33` : `${theme.colors.error}33`};
  animation: ${fadeInUp} 0.4s ease;
  position: relative;
  z-index: 1;
`

export const FeedbackIcon = styled.span<{ $type: 'success' | 'error' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ $type, theme }) =>
    $type === 'success' ? `${theme.colors.success}20` : `${theme.colors.error}20`};
  color: ${({ $type, theme }) => ($type === 'success' ? theme.colors.success : theme.colors.error)};
  flex-shrink: 0;
`

export const FeedbackText = styled.p`
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 1.5;
  margin: 0;
`

export const Spinner = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`
