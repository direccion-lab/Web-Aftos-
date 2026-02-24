import INSTRAGRAM from '@assets/instagram.png'
import LINKEDIN from '@assets/linkedin.png'
import STEAM from '@assets/steam.png'
import TIKTOK from '@assets/tik-tok.png'
import TWITTER from '@assets/x.png'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import { TRANSLATION } from '@/i18n/translations/keys'
import { ROUTES, SECTION_IDS } from '@/router/Routes.type'
import * as S from './Footer.styled'

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export const Footer = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const isHome = pathname === '/' || pathname === ROUTES.HOME

  const handleSectionClick = (sectionId: string) => {
    if (isHome) {
      scrollToSection(sectionId)
    } else {
      navigate(ROUTES.HOME)
      setTimeout(() => scrollToSection(sectionId), 100)
    }
  }

  return (
    <S.FooterWrapper>
      <S.FooterInner>
        <S.FooterTop>
          <S.BrandColumn>
            <S.Logo onClick={() => navigate(ROUTES.HOME)}>
              AFTOS<S.LogoAccent>STUDIO</S.LogoAccent>
            </S.Logo>
            <S.BrandDescription>{t(TRANSLATION.FOOTER.DESCRIPTION)}</S.BrandDescription>
            <S.SocialLinks>
              <S.SocialLink
                href="https://www.instagram.com/aftos_studio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={INSTRAGRAM} alt="x" />
              </S.SocialLink>
              <S.SocialLink
                href="https://x.com/Aftos_Studio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={TWITTER} alt="twitter" />
              </S.SocialLink>
              <S.SocialLink
                href="https://www.tiktok.com/@aftos_studio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={TIKTOK} alt="tiktok" />
              </S.SocialLink>
              <S.SocialLink
                href="https://www.linkedin.com/company/aftos-studio/?originalSubdomain=es"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LINKEDIN} alt="linkedin" />
              </S.SocialLink>
              <S.SocialLink
                href="https://store.steampowered.com/app/4352080/Afesis_los_cuatro_peldaos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={STEAM} alt="linkedin" />
              </S.SocialLink>
            </S.SocialLinks>
          </S.BrandColumn>

          <S.LinkColumn>
            <S.ColumnTitle>
              <S.ColumnDot />
              {t(TRANSLATION.FOOTER.COL_NAVIGATION)}
            </S.ColumnTitle>
            <S.FooterLink onClick={() => navigate(ROUTES.HOME)}>
              {t(TRANSLATION.NAV.HOME)}
            </S.FooterLink>
            <S.FooterLink onClick={() => handleSectionClick(SECTION_IDS.GAMES)}>
              {t(TRANSLATION.NAV.GAMES)}
            </S.FooterLink>
            <S.FooterLink onClick={() => handleSectionClick(SECTION_IDS.ABOUT)}>
              {t(TRANSLATION.NAV.ABOUT)}
            </S.FooterLink>
            <S.FooterLink onClick={() => navigate(ROUTES.STORE)}>
              {t(TRANSLATION.FOOTER.LINK_STORE)}
            </S.FooterLink>
          </S.LinkColumn>

          <S.LinkColumn>
            <S.ColumnTitle>
              <S.ColumnDot />
              {t(TRANSLATION.FOOTER.COL_COMMUNITY)}
            </S.ColumnTitle>
            <S.FooterLink onClick={() => handleSectionClick(SECTION_IDS.TEAM)}>
              {t(TRANSLATION.FOOTER.LINK_TEAM)}
            </S.FooterLink>
            <S.FooterLink onClick={() => handleSectionClick(SECTION_IDS.SPONSORS)}>
              {t(TRANSLATION.FOOTER.LINK_SPONSORS)}
            </S.FooterLink>
            <S.FooterLink onClick={() => navigate(ROUTES.DONATIONS)}>
              {t(TRANSLATION.NAV.DONATE)}
            </S.FooterLink>
          </S.LinkColumn>

          <S.LinkColumn>
            <S.ColumnTitle>
              <S.ColumnDot />
              {t(TRANSLATION.FOOTER.COL_CONTACT)}
            </S.ColumnTitle>
            <S.FooterLink onClick={() => handleSectionClick(SECTION_IDS.CONTACT)}>
              {t(TRANSLATION.NAV.CONTACT)}
            </S.FooterLink>
          </S.LinkColumn>
        </S.FooterTop>

        <S.Divider />

        <S.FooterBottom>
          <S.Copyright>{t(TRANSLATION.FOOTER.COPYRIGHT)}</S.Copyright>
          <S.MadeWith>
            {t(TRANSLATION.FOOTER.MADE_WITH)} <S.Heart>♥</S.Heart> Aftos Studio
          </S.MadeWith>
        </S.FooterBottom>
      </S.FooterInner>
    </S.FooterWrapper>
  )
}
