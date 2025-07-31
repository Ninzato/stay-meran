export const defaultLocale = 'en' as const;
export const locales = ['en', 'it', 'de'] as const;

export type Locale = (typeof locales)[number];

export const pathnames = {
  '/': '/',
  '/about': {
    en: '/about',
    it: '/chi-siamo',
    de: '/uber-uns'
  }
};

export const localePrefix = 'always';

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;