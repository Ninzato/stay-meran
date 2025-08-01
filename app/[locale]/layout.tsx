import type { Metadata } from 'next';
import { Inter, DM_Sans } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/lib/i18n/routing';
import '../globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  display: 'swap',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Stay Merano - Your Perfect Alpine Getaway',
  description: 'Discover luxury accommodations in the heart of Merano, South Tyrol. Experience the perfect blend of Alpine charm and modern comfort.'
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${dmSans.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}