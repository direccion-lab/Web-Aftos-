import type { ReactNode } from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import * as S from './HeroCarousel.styled'

export interface HeroSlideAction {
  icon: ReactNode
  label: string
  url: string
}

export interface HeroSlide {
  id: string
  backgroundImage: string
  backgroundVideo?: string
  logoImage?: string
  titleKey: string
  descriptionKey: string
  actionLinks?: HeroSlideAction[]
}

interface HeroCarouselProps {
  slides: HeroSlide[]
  autoAdvanceMs?: number
}

export const HeroCarousel = ({ slides, autoAdvanceMs = 7000 }: HeroCarouselProps) => {
  const { t } = useTranslation()
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const [progressActive, setProgressActive] = useState(true)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const total = slides.length

  const goTo = useCallback(
    (index: number, dir?: 'left' | 'right') => {
      if (index === current) return
      setDirection(dir ?? (index > current ? 'right' : 'left'))
      setCurrent(index)
      setProgressActive(false)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setProgressActive(true))
      })
    },
    [current]
  )

  const next = useCallback(() => {
    goTo((current + 1) % total, 'right')
  }, [current, total, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + total) % total, 'left')
  }, [current, total, goTo])

  useEffect(() => {
    if (autoAdvanceMs <= 0) return
    timerRef.current = setTimeout(next, autoAdvanceMs)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [autoAdvanceMs, next])

  useEffect(() => {
    setProgressActive(true)
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [prev, next])

  return (
    <S.CarouselWrapper>
      <S.SlideContainer>
        {slides.map((slide, index) => {
          const isActive = index === current
          return (
            <S.Slide key={slide.id} $active={isActive} $direction={direction}>
              <S.SlideImage $src={slide.backgroundImage} $active={isActive} />

              {slide.backgroundVideo && (
                <>
                  <S.SlideVideo
                    src={slide.backgroundVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    $active={isActive}
                  />
                  <S.SlideVideoOverlay />
                </>
              )}

              <S.SlideContent $active={isActive}>
                {slide.logoImage && (
                  <S.GameLogo src={slide.logoImage} alt="" $active={isActive} draggable={false} />
                )}
                <S.SlideTitle $active={isActive}>{t(slide.titleKey)}</S.SlideTitle>
                <S.SlideDescription $active={isActive}>
                  {t(slide.descriptionKey)}
                </S.SlideDescription>

                {slide.actionLinks && slide.actionLinks.length > 0 && (
                  <S.ActionLinksRow $active={isActive}>
                    {slide.actionLinks.map((action) => (
                      <S.ActionLink
                        key={action.url}
                        href={action.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {action.icon}
                        <span>{action.label}</span>
                      </S.ActionLink>
                    ))}
                  </S.ActionLinksRow>
                )}
              </S.SlideContent>
            </S.Slide>
          )
        })}
      </S.SlideContainer>

      <S.BottomVignette />

      <S.ArrowButton $side="left" onClick={prev} aria-label="Previous slide">
        ‹
      </S.ArrowButton>
      <S.ArrowButton $side="right" onClick={next} aria-label="Next slide">
        ›
      </S.ArrowButton>

      <S.Indicators>
        {slides.map((slide, index) => (
          <S.Indicator
            key={slide.id}
            $active={index === current}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </S.Indicators>

      {autoAdvanceMs > 0 && <S.ProgressBar $active={progressActive} $duration={autoAdvanceMs} />}
    </S.CarouselWrapper>
  )
}
