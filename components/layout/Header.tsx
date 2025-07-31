import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { LanguageSwitcher } from './LanguageSwitcher';

export async function Header() {
  const t = await getTranslations('navigation');
  const tLang = await getTranslations('languages');

  const navigation = [
    { label: t('home'), href: '/' },
    { label: t('ourStays'), href: '#our-stays' },
    { label: t('whyMerano'), href: '#why-merano' },
    { label: t('aboutUs'), href: '#about' }
  ];

  return (
    <header className="absolute top-0 right-0 left-0 z-50 mx-auto w-[387px] pt-5 2xl:w-full 2xl:pt-[52px]">
      <div className="flex w-full max-w-screen items-center justify-center px-5 2xl:justify-between 2xl:px-16">
        {/* Invisible spacer to center main header */}
        <div className="hidden items-center gap-3 2xl:invisible 2xl:flex">
          <Image
            src="/icons/icon-world.svg"
            alt=""
            width={24}
            height={24}
          />
          <span className="font-dm-sans font-medium">{tLang('english')}</span>
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
            <span className="font-dm-sans">{t('menu')}</span>
          </button>
        </div>

        {/* Language Selector */}
        <LanguageSwitcher />
      </div>
    </header>
  );
}
