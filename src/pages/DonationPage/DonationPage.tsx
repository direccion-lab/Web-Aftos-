import { useTranslation } from 'react-i18next'
import { TRANSLATION } from '@/i18n/translations/keys'
import * as S from './DonationPage.styled'

const DONATION_BASE_URL = 'https://fundacion-methos.es/colabora-new/'

const buildDonationUrl = (amount: string) => {
  const params = new URLSearchParams({
    amount,
    proyecto: 'Aftos studio',
  })
  return `${DONATION_BASE_URL}?${params.toString()}`
}

export const DonationPage = () => {
  const { t } = useTranslation()

  const tiers = [
    {
      icon: '🌱',
      nameKey: TRANSLATION.DONATIONS.TIER_1_NAME,
      price: '25',
      descriptionKey: TRANSLATION.DONATIONS.TIER_1_DESC,
      perks: [TRANSLATION.DONATIONS.TIER_1_PERK_1],
    },
    {
      icon: '🎮',
      nameKey: TRANSLATION.DONATIONS.TIER_2_NAME,
      price: '50',
      descriptionKey: TRANSLATION.DONATIONS.TIER_2_DESC,
      perks: [TRANSLATION.DONATIONS.TIER_2_PERK_1, TRANSLATION.DONATIONS.TIER_2_PERK_2],
    },
    {
      icon: '👕',
      nameKey: TRANSLATION.DONATIONS.TIER_3_NAME,
      price: '100',
      descriptionKey: TRANSLATION.DONATIONS.TIER_3_DESC,
      perks: [
        TRANSLATION.DONATIONS.TIER_3_PERK_1,
        TRANSLATION.DONATIONS.TIER_3_PERK_2,
        TRANSLATION.DONATIONS.TIER_3_PERK_3,
      ],
      featured: true,
      badgeKey: TRANSLATION.DONATIONS.POPULAR_BADGE,
    },
    {
      icon: '🧥',
      nameKey: TRANSLATION.DONATIONS.TIER_4_NAME,
      price: '150',
      descriptionKey: TRANSLATION.DONATIONS.TIER_4_DESC,
      perks: [
        TRANSLATION.DONATIONS.TIER_4_PERK_1,
        TRANSLATION.DONATIONS.TIER_4_PERK_2,
        TRANSLATION.DONATIONS.TIER_4_PERK_3,
      ],
    },
    {
      icon: '🎒',
      nameKey: TRANSLATION.DONATIONS.TIER_5_NAME,
      price: '250',
      descriptionKey: TRANSLATION.DONATIONS.TIER_5_DESC,
      perks: [
        TRANSLATION.DONATIONS.TIER_5_PERK_1,
        TRANSLATION.DONATIONS.TIER_5_PERK_2,
        TRANSLATION.DONATIONS.TIER_5_PERK_3,
        TRANSLATION.DONATIONS.TIER_5_PERK_4,
        TRANSLATION.DONATIONS.TIER_5_PERK_5,
      ],
    },
    {
      icon: '📌',
      nameKey: TRANSLATION.DONATIONS.TIER_6_NAME,
      price: '500',
      descriptionKey: TRANSLATION.DONATIONS.TIER_6_DESC,
      perks: [
        TRANSLATION.DONATIONS.TIER_6_PERK_1,
        TRANSLATION.DONATIONS.TIER_6_PERK_2,
        TRANSLATION.DONATIONS.TIER_6_PERK_3,
        TRANSLATION.DONATIONS.TIER_6_PERK_4,
        TRANSLATION.DONATIONS.TIER_6_PERK_5,
        TRANSLATION.DONATIONS.TIER_6_PERK_6,
      ],
    },
    {
      icon: '🏆',
      nameKey: TRANSLATION.DONATIONS.TIER_7_NAME,
      price: '1000',
      descriptionKey: TRANSLATION.DONATIONS.TIER_7_DESC,
      perks: [
        TRANSLATION.DONATIONS.TIER_7_PERK_1,
        TRANSLATION.DONATIONS.TIER_7_PERK_2,
        TRANSLATION.DONATIONS.TIER_7_PERK_3,
        TRANSLATION.DONATIONS.TIER_7_PERK_4,
        TRANSLATION.DONATIONS.TIER_7_PERK_5,
        TRANSLATION.DONATIONS.TIER_7_PERK_6,
        TRANSLATION.DONATIONS.TIER_7_PERK_7,
      ],
    },
  ]

  const handleDonate = (price: string) => {
    window.open(buildDonationUrl(price), '_blank', 'noopener,noreferrer')
  }

  return (
    <S.PageWrapper>
      <S.HeroArea>
        <S.HeroDecoration />
        <S.HeartIcon>♥</S.HeartIcon>
        <S.Eyebrow>
          <S.EyebrowDot />
          {t(TRANSLATION.DONATIONS.EYEBROW)}
        </S.Eyebrow>
        <S.Title>{t(TRANSLATION.DONATIONS.TITLE)}</S.Title>
        <S.Subtitle>{t(TRANSLATION.DONATIONS.SUBTITLE)}</S.Subtitle>
      </S.HeroArea>

      <S.TiersSection>
        <S.TiersGrid>
          {tiers.map((tier) => (
            <S.TierCard key={tier.price} $featured={tier.featured}>
              {tier.badgeKey && <S.TierBadge>{t(tier.badgeKey)}</S.TierBadge>}
              <S.TierIcon>{tier.icon}</S.TierIcon>
              <S.TierName>{t(tier.nameKey)}</S.TierName>
              <S.TierPrice>
                €{tier.price} <span>/ {t(TRANSLATION.DONATIONS.ONE_TIME)}</span>
              </S.TierPrice>
              <S.TierDescription>{t(tier.descriptionKey)}</S.TierDescription>
              <S.TierPerks>
                {tier.perks.map((perkKey) => (
                  <S.Perk key={perkKey}>{t(perkKey)}</S.Perk>
                ))}
              </S.TierPerks>
              <S.TierButton $featured={tier.featured} onClick={() => handleDonate(tier.price)}>
                {t(TRANSLATION.DONATIONS.DONATE_CTA)}
              </S.TierButton>
            </S.TierCard>
          ))}
        </S.TiersGrid>
      </S.TiersSection>

      <S.TaxSection>
        <S.TaxCard>
          <S.TaxHeader>
            <S.TaxIcon>📋</S.TaxIcon>
            <S.TaxTitle>{t(TRANSLATION.DONATIONS.TAX_TITLE)}</S.TaxTitle>
          </S.TaxHeader>
          <S.TaxSubtitle>{t(TRANSLATION.DONATIONS.TAX_SUBTITLE)}</S.TaxSubtitle>

          <S.TaxHighlight>
            <S.TaxHighlightTitle>{t(TRANSLATION.DONATIONS.TAX_BENEFIT_INTRO)}</S.TaxHighlightTitle>
            <S.TaxHighlightDesc>{t(TRANSLATION.DONATIONS.TAX_BENEFIT_DESC)}</S.TaxHighlightDesc>
          </S.TaxHighlight>

          <S.TaxColumns>
            <S.TaxColumn>
              <S.TaxColumnTitle>{t(TRANSLATION.DONATIONS.TAX_INDIVIDUALS)}</S.TaxColumnTitle>
              <S.TaxRow>
                <S.TaxRowLabel>{t(TRANSLATION.DONATIONS.TAX_FIRST_250)}</S.TaxRowLabel>
                <S.TaxRowValue>
                  {t(TRANSLATION.DONATIONS.TAX_DEDUCTION)} <strong>80%</strong>
                </S.TaxRowValue>
              </S.TaxRow>
              <S.TaxRow>
                <S.TaxRowLabel>{t(TRANSLATION.DONATIONS.TAX_ABOVE_250)}</S.TaxRowLabel>
                <S.TaxRowValue>
                  {t(TRANSLATION.DONATIONS.TAX_DEDUCTION)} <strong>40%</strong>
                </S.TaxRowValue>
              </S.TaxRow>
              <S.TaxRow>
                <S.TaxRowLabel>{t(TRANSLATION.DONATIONS.TAX_RECURRING)}</S.TaxRowLabel>
                <S.TaxRowValue>
                  {t(TRANSLATION.DONATIONS.TAX_DEDUCTION)} <strong>45%</strong>
                </S.TaxRowValue>
              </S.TaxRow>
            </S.TaxColumn>

            <S.TaxColumn>
              <S.TaxColumnTitle>{t(TRANSLATION.DONATIONS.TAX_COMPANIES)}</S.TaxColumnTitle>
              <S.TaxRow>
                <S.TaxRowLabel>{t(TRANSLATION.DONATIONS.TAX_GENERAL)}</S.TaxRowLabel>
                <S.TaxRowValue>
                  {t(TRANSLATION.DONATIONS.TAX_DEDUCTION)} <strong>40%</strong>
                </S.TaxRowValue>
              </S.TaxRow>
              <S.TaxRow>
                <S.TaxRowLabel>{t(TRANSLATION.DONATIONS.TAX_RECURRING_COMPANY)}</S.TaxRowLabel>
                <S.TaxRowValue>
                  {t(TRANSLATION.DONATIONS.TAX_DEDUCTION)} <strong>50%</strong>
                </S.TaxRowValue>
              </S.TaxRow>
            </S.TaxColumn>
          </S.TaxColumns>
        </S.TaxCard>
      </S.TaxSection>
    </S.PageWrapper>
  )
}
