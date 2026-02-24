const service = import.meta.env.VITE_SERVICE_ID
const template = import.meta.env.VITE_TEMPLATE_ID
const api_key = import.meta.env.VITE_PUBLIC_KEY

if (!service || !template || !api_key) {
  throw new Error('[EmailJS] Missing environment variables. Check your .env file.')
}

export const EMAILJS_CONFIG = {
  SERVICE_ID: service,
  TEMPLATE_ID: template,
  PUBLIC_KEY: api_key,
} as const
