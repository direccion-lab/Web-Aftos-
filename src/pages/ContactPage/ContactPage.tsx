import emailjs from '@emailjs/browser'
import { CheckCircle, Send, XCircle } from 'lucide-react'
import { type FormEvent, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { EMAILJS_CONFIG } from '@/constants/EmailJS.constants'
import { TRANSLATION } from '@/i18n/translations/keys'
import * as S from './ContactPage.styled'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

export const ContactPage = () => {
  const { t } = useTranslation()
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      )

      setStatus('success')
      resetForm()
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <S.PageWrapper>
      <S.HeroArea>
        <S.HeroDecoration />
        <S.Eyebrow>
          <S.EyebrowDot />
          {t(TRANSLATION.CONTACT.EYEBROW)}
        </S.Eyebrow>
        <S.Title>{t(TRANSLATION.CONTACT.TITLE)}</S.Title>
        <S.Subtitle>{t(TRANSLATION.CONTACT.SUBTITLE)}</S.Subtitle>
      </S.HeroArea>

      <S.FormSection>
        <S.FormCard ref={formRef} onSubmit={handleSubmit}>
          <S.FormRow>
            <S.FieldGroup>
              <S.Label htmlFor="contact-name">{t(TRANSLATION.CONTACT.LABEL_NAME)}</S.Label>
              <S.Input
                id="contact-name"
                name="name"
                type="text"
                placeholder={t(TRANSLATION.CONTACT.PLACEHOLDER_NAME)}
                value={formData.name}
                onChange={handleChange}
                disabled={status === 'sending'}
                required
              />
            </S.FieldGroup>
            <S.FieldGroup>
              <S.Label htmlFor="contact-email">{t(TRANSLATION.CONTACT.LABEL_EMAIL)}</S.Label>
              <S.Input
                id="contact-email"
                name="email"
                type="email"
                placeholder={t(TRANSLATION.CONTACT.PLACEHOLDER_EMAIL)}
                value={formData.email}
                onChange={handleChange}
                disabled={status === 'sending'}
                required
              />
            </S.FieldGroup>
          </S.FormRow>

          <S.FieldGroup>
            <S.Label htmlFor="contact-subject">{t(TRANSLATION.CONTACT.LABEL_SUBJECT)}</S.Label>
            <S.Select
              id="contact-subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              disabled={status === 'sending'}
              required
            >
              <option value="" disabled>
                {t(TRANSLATION.CONTACT.PLACEHOLDER_SUBJECT)}
              </option>
              <option value="general">{t(TRANSLATION.CONTACT.SUBJECT_GENERAL)}</option>
              <option value="collaboration">{t(TRANSLATION.CONTACT.SUBJECT_COLLAB)}</option>
              <option value="support">{t(TRANSLATION.CONTACT.SUBJECT_SUPPORT)}</option>
              <option value="press">{t(TRANSLATION.CONTACT.SUBJECT_PRESS)}</option>
              <option value="other">{t(TRANSLATION.CONTACT.SUBJECT_OTHER)}</option>
            </S.Select>
          </S.FieldGroup>

          <S.FieldGroup>
            <S.Label htmlFor="contact-message">{t(TRANSLATION.CONTACT.LABEL_MESSAGE)}</S.Label>
            <S.Textarea
              id="contact-message"
              name="message"
              placeholder={t(TRANSLATION.CONTACT.PLACEHOLDER_MESSAGE)}
              value={formData.message}
              onChange={handleChange}
              disabled={status === 'sending'}
              required
            />
          </S.FieldGroup>

          {status === 'success' && (
            <S.FeedbackToast $type="success">
              <S.FeedbackIcon $type="success">
                <CheckCircle size={18} />
              </S.FeedbackIcon>
              <S.FeedbackText>{t(TRANSLATION.CONTACT.SUCCESS)}</S.FeedbackText>
            </S.FeedbackToast>
          )}

          {status === 'error' && (
            <S.FeedbackToast $type="error">
              <S.FeedbackIcon $type="error">
                <XCircle size={18} />
              </S.FeedbackIcon>
              <S.FeedbackText>{t(TRANSLATION.CONTACT.ERROR)}</S.FeedbackText>
            </S.FeedbackToast>
          )}

          <S.SubmitButton type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? <S.Spinner /> : <Send size={16} />}
            {status === 'sending' ? t(TRANSLATION.CONTACT.SENDING) : t(TRANSLATION.CONTACT.SUBMIT)}
          </S.SubmitButton>
        </S.FormCard>
      </S.FormSection>
    </S.PageWrapper>
  )
}
