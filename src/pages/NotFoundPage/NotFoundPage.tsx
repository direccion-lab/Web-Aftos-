import { Home } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { TRANSLATION } from '@/i18n/translations/keys'
import { ROUTES } from '@/router/Routes.type'
import * as S from './NotFoundPage.styled'

export const NotFoundPage = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <S.PageWrapper>
      <S.Container>
        <S.GlitchCode>404</S.GlitchCode>
        <S.Title>{t(TRANSLATION.NOT_FOUND.TITLE)}</S.Title>
        <S.Description>{t(TRANSLATION.NOT_FOUND.DESCRIPTION)}</S.Description>
        <S.HomeButton onClick={() => navigate(ROUTES.HOME)}>
          <Home size={16} />
          {t(TRANSLATION.NOT_FOUND.BUTTON)}
        </S.HomeButton>
      </S.Container>
    </S.PageWrapper>
  )
}
