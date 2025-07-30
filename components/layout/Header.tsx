'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Our Stays', href: '#our-stays' },
  { label: 'Why Merano', href: '#why-merano' },
  { label: 'About Us', href: '#about' }
];

const languages = [
  { code: 'EN', label: 'English (EN)' },
  { code: 'IT', label: 'Italy (IT)' },
  { code: 'DE', label: 'German (DE)' }
];

export function Header() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <header className="absolute top-0 right-0 left-0 z-50 pt-5 2xl:pt-[52px]">
      <div className="flex w-full max-w-screen-2xl items-center justify-center px-5 2xl:justify-between 2xl:px-16">
        {/* Invisible spacer to center main header */}
        <div className="hidden items-center gap-3 2xl:invisible 2xl:flex">
          <Image
            src="/icons/icon-world.svg"
            alt=""
            width={24}
            height={24}
          />
          <span className="font-dm-sans font-medium">English (EN)</span>
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        <div className="flex w-full items-center justify-between gap-8 rounded-full bg-[#404040]/20 px-2.5 py-1 outline outline-white/5 backdrop-blur-md 2xl:w-fit 2xl:pr-7">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="block"
            >
              <Image
                src="/icons/icon-logo-dummy.svg"
                alt="Logo"
                width={40}
                height={40}
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden items-center gap-2 2xl:flex">
            {navigation.map(item => (
              <Link
                key={item.label}
                href={item.href}
                className="font-dm-sans p-4 text-white transition-colors hover:text-white/80"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="p-4 text-white 2xl:hidden">
            <span className="font-dm-sans">Menu</span>
          </button>
        </div>

        {/* Language Selector */}
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
              {selectedLanguage.label}
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
                  onClick={() => {
                    setSelectedLanguage(lang);
                    setIsLanguageOpen(false);
                  }}
                  className={`tracking-tightest w-full rounded-xl px-3 py-1 text-left leading-[2em] text-blue-400 transition-colors hover:bg-blue-800 ${
                    selectedLanguage.code === lang.code ? 'bg-blue-800' : ''
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
