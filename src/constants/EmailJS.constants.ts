/**
 * EmailJS Configuration
 *
 * Para configurar EmailJS:
 *
 * 1. Crea una cuenta gratis en https://www.emailjs.com
 * 2. Ve a "Email Services" y conecta tu servicio de email (Gmail, Outlook, etc.)
 *    → Copia el Service ID (ej: "service_abc123")
 * 3. Ve a "Email Templates" y crea un template con estas variables:
 *    - {{from_name}}  → Nombre del remitente
 *    - {{from_email}} → Email del remitente
 *    - {{subject}}    → Asunto del mensaje
 *    - {{message}}    → Cuerpo del mensaje
 *    → Copia el Template ID (ej: "template_xyz789")
 * 4. Ve a "Account" > "General" y copia tu Public Key
 * 5. Reemplaza los valores de abajo con tus IDs reales
 *
 * Ejemplo de template en EmailJS:
 *   Subject: New contact from {{from_name}} - {{subject}}
 *   Body:
 *     Name: {{from_name}}
 *     Email: {{from_email}}
 *     Subject: {{subject}}
 *     Message: {{message}}
 */

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID',
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID',
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY',
} as const
