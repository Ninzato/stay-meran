import Image from 'next/image';
import { HeroSearch } from './HeroSearch';

interface HeroContent {
  title1: string;
  title2: string;
  subtitle: string;
  backgroundImage: string;
  searchPlaceholder: string;
}

interface HeroSectionProps {
  heroContent: HeroContent;
}

export function HeroSection({ heroContent }: HeroSectionProps) {

  return (
    <div className="mx-auto w-[387px] px-2 pt-2 2xl:w-full 2xl:px-7 2xl:pt-7">
      <div className="relative flex h-[788px] w-full items-end justify-center overflow-hidden rounded-xl p-3 2xl:items-center">
        {/* Background Image */}
        <div>
          <Image
            src={heroContent.backgroundImage}
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
            <p className="text-base tracking-widest uppercase 2xl:text-2xl">
              {heroContent.subtitle}
            </p>

            {/* Main Title */}
            <h1 className="tracking-tightest flex flex-col text-[40px] leading-[1.2em] font-medium 2xl:text-7xl">
              <span>{heroContent.title1}</span>
              <span>{heroContent.title2}</span>
            </h1>

            {/* Search Bar */}
            <div className="pt-[10px] 2xl:pt-2">
              <HeroSearch searchPlaceholder={heroContent.searchPlaceholder} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
