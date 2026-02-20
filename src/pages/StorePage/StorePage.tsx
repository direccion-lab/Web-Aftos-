import { ShoppingBag } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { TRANSLATION } from '@/i18n/translations/keys'
import * as S from './StorePage.styled'

export const StorePage = () => {
  const { t } = useTranslation()

  return (
    <S.PageWrapper>
      <S.Container>
        <S.IconWrapper>
          <ShoppingBag size={48} />
        </S.IconWrapper>
        <S.Title>{t(TRANSLATION.STORE.PAGE_TITLE)}</S.Title>
        <S.Subtitle>{t(TRANSLATION.STORE.SUBTITLE)}</S.Subtitle>
        <S.ComingSoonBadge>{t(TRANSLATION.STORE.COMING_SOON)}</S.ComingSoonBadge>
      </S.Container>
    </S.PageWrapper>
  )
}
