import { keyframes } from 'styled-components'

export const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

export const pulse = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`

export const shimmerLine = keyframes`
  0% { left: -100%; }
  100% { left: 200%; }
`

export const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
`

export const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`

export const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
`

export const navFloat = keyframes`
  from { opacity: 0; transform: translateX(-50%) translateY(-20px); }
  to { opacity: 1; transform: translateX(-50%) translateY(0); }
`

export const glowPulse = keyframes`
  0%, 100% { opacity: 0; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1); }
`

export const scanline = keyframes`
  0% { left: -100%; }
  100% { left: 200%; }
`

export const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`
