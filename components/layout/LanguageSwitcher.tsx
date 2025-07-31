'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

const languages = [
  { code: 'en', key: 'english' },
  { code: 'it', key: 'italian' },
  { code: 'de', key: 'german' }
];

export function LanguageSwitcher() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const currentLocale = useLocale();
  const t = useTranslations('languages');
  const pathname = usePathname();

  const currentLanguage =
    languages.find(lang => lang.code === currentLocale) || languages[0];

  const handleLanguageChange = (newLocale: string) => {
    setIsLanguageOpen(false);
    // Construct the new URL with the new locale
    const segments = pathname.split('/');
    segments[1] = newLocale; // Replace locale segment
    const newPath = segments.join('/');
    window.location.href = newPath;
  };

  return (
    <div className="relative hidden 2xl:block">
      <button
        onClick={() => setIsLanguageOpen(!isLanguageOpen)}
        className="flex items-center gap-3 text-white transition-colors hover:text-white/80"
      >
        <Image
          src="/icons/icon-world.svg"
          alt="Language"
          width={24}
          height={24}
        />
        <span className="font-dm-sans font-medium">
          {t(currentLanguage.key)}
        </span>
        <svg
          className={`h-4 w-4 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown */}
      {isLanguageOpen && (
        <div className="absolute top-full right-0 mt-2 w-[160px] overflow-hidden rounded-xl bg-blue-900 p-3">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`tracking-tightest w-full rounded-xl px-3 py-1 text-left leading-[2em] text-blue-400 transition-colors hover:bg-blue-800 ${
                currentLanguage.code === lang.code ? 'bg-blue-800' : ''
              }`}
            >
              {t(lang.key)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
