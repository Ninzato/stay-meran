import Image from 'next/image';
import { HeroSearch } from './HeroSearch';
import { mockHeroContent } from '@/lib/constants';

export function HeroSection() {
  return (
    <div className="px-2 pt-2 md:px-7 md:pt-7">
      <div className="relative flex h-[788px] w-full items-end justify-center overflow-hidden rounded-xl p-3 2xl:items-center">
        {/* Background Image */}
        <div>
          <Image
            src={mockHeroContent.backgroundImage}
            alt="Merano landscape"
            fill
            className="object-cover 2xl:object-fill"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full text-center text-white">
          <div className="mx-auto flex max-w-4xl flex-col gap-[42px] 2xl:gap-8">
            {/* Subtitle */}
            <p className="text-base tracking-widest uppercase md:text-2xl">
              {mockHeroContent.subtitle}
            </p>

            {/* Main Title */}
            <h1 className="tracking-tightest flex flex-col text-[40px] leading-[1.2em] font-medium 2xl:text-7xl">
              <span>{mockHeroContent.title1}</span>
              <span>{mockHeroContent.title2}</span>
            </h1>

            {/* Search Bar */}
            <div className="pt-[10px] 2xl:pt-2">
              <HeroSearch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
