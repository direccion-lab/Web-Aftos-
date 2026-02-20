import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TRANSLATION } from '@/i18n/translations/keys'
import * as S from './DonationPage.styled'

export const DonationPage = () => {
  const { t } = useTranslation()
  const [customAmount, setCustomAmount] = useState('')

  const tiers = [
    {
      icon: '☕',
      nameKey: TRANSLATION.DONATIONS.TIER_1_NAME,
      price: '3',
      descriptionKey: TRANSLATION.DONATIONS.TIER_1_DESC,
      perks: [TRANSLATION.DONATIONS.TIER_1_PERK_1, TRANSLATION.DONATIONS.TIER_1_PERK_2],
    },
    {
      icon: '🎮',
      nameKey: TRANSLATION.DONATIONS.TIER_2_NAME,
      price: '10',
      descriptionKey: TRANSLATION.DONATIONS.TIER_2_DESC,
      perks: [
        TRANSLATION.DONATIONS.TIER_2_PERK_1,
        TRANSLATION.DONATIONS.TIER_2_PERK_2,
        TRANSLATION.DONATIONS.TIER_2_PERK_3,
      ],
      featured: true,
      badgeKey: TRANSLATION.DONATIONS.POPULAR_BADGE,
    },
    {
      icon: '🏆',
      nameKey: TRANSLATION.DONATIONS.TIER_3_NAME,
      price: '25',
      descriptionKey: TRANSLATION.DONATIONS.TIER_3_DESC,
      perks: [
        TRANSLATION.DONATIONS.TIER_3_PERK_1,
        TRANSLATION.DONATIONS.TIER_3_PERK_2,
        TRANSLATION.DONATIONS.TIER_3_PERK_3,
        TRANSLATION.DONATIONS.TIER_3_PERK_4,
      ],
    },
  ]

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
              <S.TierButton $featured={tier.featured}>
                {t(TRANSLATION.DONATIONS.DONATE_CTA)}
              </S.TierButton>
            </S.TierCard>
          ))}
        </S.TiersGrid>
      </S.TiersSection>

      <S.CustomSection>
        <S.CustomCard>
          <S.CustomTextContent>
            <S.CustomTitle>{t(TRANSLATION.DONATIONS.CUSTOM_TITLE)}</S.CustomTitle>
            <S.CustomDescription>{t(TRANSLATION.DONATIONS.CUSTOM_DESC)}</S.CustomDescription>
          </S.CustomTextContent>
          <S.CustomInputGroup>
            <S.CurrencyLabel>€</S.CurrencyLabel>
            <S.AmountInput
              type="number"
              min="1"
              placeholder="0"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
            />
            <S.CustomButton>{t(TRANSLATION.DONATIONS.DONATE_CTA)}</S.CustomButton>
          </S.CustomInputGroup>
        </S.CustomCard>
      </S.CustomSection>
    </S.PageWrapper>
  )
}
