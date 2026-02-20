import { useNavigate } from 'react-router-dom'
import { TRANSLATION } from '@/i18n/translations/keys'
import { ROUTES } from '@/router/Routes.type'
import { CTABanner } from '../CTABanner/CTABanner'

export const DonationBanner = () => {
  const navigate = useNavigate()

  return (
    <CTABanner
      eyebrowKey={TRANSLATION.DONATION_BANNER.EYEBROW}
      titleKey={TRANSLATION.DONATION_BANNER.TITLE}
      descriptionKey={TRANSLATION.DONATION_BANNER.DESCRIPTION}
      ctaLabelKey={TRANSLATION.DONATION_BANNER.CTA}
      icon={<span style={{ fontSize: '1rem' }}>♥</span>}
      onCTAClick={() => navigate(ROUTES.DONATIONS)}
    />
  )
}
