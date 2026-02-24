import ISOTIPO from '@assets/isotipo.png'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import { TRANSLATION } from '@/i18n/translations/keys'
import { ROUTES, SECTION_IDS } from '@/router/Routes.type'
import * as S from './Navbar.styled'

type NavItem =
  | { type: 'section'; labelKey: string; sectionId: string }
  | { type: 'route'; labelKey: string; path: string }

const NAV_ITEMS: NavItem[] = [
  {
    type: 'section',
    labelKey: TRANSLATION.NAV.GAMES,
    sectionId: SECTION_IDS.GAMES,
  },
  {
    type: 'section',
    labelKey: TRANSLATION.NAV.ABOUT,
    sectionId: SECTION_IDS.ABOUT,
  },
  {
    type: 'section',
    labelKey: TRANSLATION.NAV.CONTACT,
    sectionId: SECTION_IDS.CONTACT,
  },
  { type: 'route', labelKey: TRANSLATION.NAV.STORE, path: ROUTES.STORE },
]

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

interface NavbarProps {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

export const Navbar = ({ theme, onToggleTheme }: NavbarProps) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { t, i18n } = useTranslation()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isDark = theme === 'dark'
  const currentLang = i18n.language
  const isHome = pathname === '/' || pathname === ROUTES.HOME

  const toggleLang = () => {
    const cycle: Record<string, string> = { es: 'en', en: 'ru', ru: 'es' }
    i18n.changeLanguage(cycle[currentLang] ?? 'es')
  }

  const handleNavClick = (item: NavItem) => {
    if (item.type === 'section') {
      if (isHome) {
        scrollToSection(item.sectionId)
      } else {
        navigate(ROUTES.HOME)
        setTimeout(() => scrollToSection(item.sectionId), 100)
      }
    } else {
      navigate(item.path)
    }
  }

  const getKey = (item: NavItem) => (item.type === 'section' ? item.sectionId : item.path)

  const isActive = (item: NavItem) => {
    if (item.type === 'route') return pathname === item.path
    return false
  }

  return (
    <section style={{ position: 'absolute' }}>
      <S.NavWrapper>
        <S.Nav>
          <S.GlowLine />

          <S.NavInner>
            <S.Logo onClick={() => navigate(ROUTES.HOME)}>
              <div>
                <img src={ISOTIPO} alt="" width={35} height={35} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <S.LogoMain>AFTOS</S.LogoMain>
                <S.LogoSub>STUDIO</S.LogoSub>
              </div>
            </S.Logo>

            <S.NavLinks>
              {NAV_ITEMS.map((item) => (
                <S.NavLinkWrapper key={getKey(item)}>
                  <S.NavLink $active={isActive(item)} onClick={() => handleNavClick(item)}>
                    <S.LinkText>{t(item.labelKey)}</S.LinkText>
                    <S.HoverGlow />
                    {isActive(item) && <S.ActiveBar />}
                  </S.NavLink>
                </S.NavLinkWrapper>
              ))}
            </S.NavLinks>

            <S.RightSection>
              <S.LangButton onClick={toggleLang}>
                <S.LangFlag>
                  {currentLang === 'es' ? '🇪🇸' : currentLang === 'en' ? '🇬🇧' : '🇷🇺'}
                </S.LangFlag>
                <S.LangCode>{currentLang.toUpperCase()}</S.LangCode>
              </S.LangButton>

              <S.ThemeToggle onClick={onToggleTheme}>
                <S.ToggleTrack>
                  <S.ToggleThumb $isDark={isDark}>{isDark ? '🌙' : '☀️'}</S.ToggleThumb>
                </S.ToggleTrack>
              </S.ThemeToggle>

              <S.DonateButton onClick={() => navigate(ROUTES.DONATIONS)}>
                <S.DonateIcon>♥</S.DonateIcon>
                {t(TRANSLATION.NAV.DONATE)}
              </S.DonateButton>
            </S.RightSection>

            <S.MobileRight>
              <S.ThemeToggleMini onClick={onToggleTheme}>{isDark ? '🌙' : '☀️'}</S.ThemeToggleMini>
              <S.Hamburger onClick={() => setMobileOpen(!mobileOpen)} $open={mobileOpen}>
                <span />
                <span />
                <span />
              </S.Hamburger>
            </S.MobileRight>
          </S.NavInner>

          <S.MobileMenu $open={mobileOpen}>
            {NAV_ITEMS.map((item) => (
              <S.MobileLink
                key={getKey(item)}
                $active={isActive(item)}
                onClick={() => {
                  handleNavClick(item)
                  setMobileOpen(false)
                }}
              >
                {t(item.labelKey)}
              </S.MobileLink>
            ))}

            <S.MobileLangRow>
              <S.MobileLangButton
                $active={currentLang === 'es'}
                onClick={() => i18n.changeLanguage('es')}
              >
                🇪🇸 ES
              </S.MobileLangButton>
              <S.MobileLangButton
                $active={currentLang === 'en'}
                onClick={() => i18n.changeLanguage('en')}
              >
                🇬🇧 EN
              </S.MobileLangButton>
              <S.MobileLangButton
                $active={currentLang === 'ru'}
                onClick={() => i18n.changeLanguage('ru')}
              >
                🇷🇺 RU
              </S.MobileLangButton>
            </S.MobileLangRow>

            <S.MobileDonate
              onClick={() => {
                navigate(ROUTES.DONATIONS)
                setMobileOpen(false)
              }}
            >
              <S.DonateIcon>♥</S.DonateIcon>
              {t(TRANSLATION.NAV.DONATE)}
            </S.MobileDonate>
          </S.MobileMenu>
        </S.Nav>
      </S.NavWrapper>
      <S.NavSpacer />
    </section>
  )
}
