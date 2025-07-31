import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'it', 'de'],
  
  defaultLocale: 'en',
  
  pathnames: {
    '/': '/',
    '/about': {
      en: '/about',
      it: '/chi-siamo', 
      de: '/uber-uns'
    }
  }
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);