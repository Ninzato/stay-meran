import Image from 'next/image';
import { HeroSearch } from './HeroSearch';
import { HeroAnimationWrapper } from './HeroAnimationWrapper';
import type { HeroContent } from '@/lib/types/content';

interface HeroSectionProps {
  heroContent: HeroContent;
}

export function HeroSection({ heroContent }: HeroSectionProps) {
  return (
    <div className="mx-auto w-[387px] px-2 py-2 2xl:w-full 2xl:px-7 2xl:py-7">
      <HeroAnimationWrapper className="relative flex h-[calc(100vh-1rem)] w-full items-end justify-center overflow-hidden rounded-xl p-3 2xl:h-[calc(100vh-3.5rem)] 2xl:items-center">
        <Image
          src={heroContent.backgroundImage}
          alt="Merano landscape"
          fill
          className="object-cover 2xl:object-fill"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 w-full text-center text-white">
          <div className="mx-auto flex max-w-4xl flex-col gap-[42px] 2xl:gap-8">
            <p className="text-base tracking-widest uppercase 2xl:text-2xl">
              {heroContent.subtitle}
            </p>

            <h1 className="tracking-tightest flex flex-col text-[40px] leading-[1.2em] font-medium 2xl:text-7xl">
              <span>{heroContent.title1}</span>
              <span>{heroContent.title2}</span>
            </h1>

            <div className="pt-[10px] 2xl:pt-2">
              <HeroSearch searchPlaceholder={heroContent.searchPlaceholder} />
            </div>
          </div>
        </div>
          <div className="absolute bottom-9 z-10 hidden right-14 gap-2 2xl:flex">
            <div className="h-1 w-6 rounded-full bg-white"></div>
            <div className="h-1 w-6 rounded-full bg-white/70"></div>
            <div className="h-1 w-6 rounded-full bg-white/70"></div>
            <div className="h-1 w-6 rounded-full bg-white/70"></div>
          </div>
      </HeroAnimationWrapper>
    </div>
  );
}
