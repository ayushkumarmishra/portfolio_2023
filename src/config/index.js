export const config = {
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    email: import.meta.env.VITE_CONTACT_EMAIL_SENT,
  },
  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL,
    phone: import.meta.env.VITE_CONTACT_PHONE,
    location: import.meta.env.VITE_CONTACT_LOCATION,
  },
  social: {
    linkedin: import.meta.env.VITE_LINKEDIN_URL,
    github: import.meta.env.VITE_GITHUB_URL,
    instagram: import.meta.env.VITE_INSTAGRAM_URL,
  },
}; 