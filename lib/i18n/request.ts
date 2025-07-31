import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  
  console.log('🚀 getRequestConfig called with requestLocale:', locale);
  
  if (!locale || !routing.locales.includes(locale as (typeof routing.locales)[number])) {
    console.log('⚠️ Invalid locale detected, falling back to default:', routing.defaultLocale);
    locale = routing.defaultLocale;
  }

  console.log('📂 Loading messages for locale:', locale);
  const messages = (await import(`../../messages/${locale}.json`)).default;
  console.log('✅ Messages loaded successfully for:', locale);

  return {
    locale,
    messages
  };
});