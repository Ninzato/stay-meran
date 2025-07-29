import Image from 'next/image';
import { Container } from '@/components/ui';
import { HeroSearch } from './HeroSearch';
import { mockHeroContent } from '@/lib/constants';

export function HeroSection() {
  return (
    <div className="px-2 pt-2 md:px-7 md:pt-7">
      <div className="relative flex h-[788px] w-full items-center justify-center overflow-hidden rounded-xl">
        {/* Background Image */}
        <div>
          <Image
            src={mockHeroContent.backgroundImage}
            alt="Merano landscape"
            fill
            className="object-fill"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <Container className="relative z-10 text-center text-white">
          <div className="mx-auto max-w-4xl space-y-8">
            {/* Subtitle */}
            <p className="text-base tracking-widest uppercase md:text-2xl">
              {mockHeroContent.subtitle}
            </p>

            {/* Main Title */}
            <h1 className="tracking-tightest flex flex-col text-[50px] leading-tight font-medium md:text-7xl">
              <span>{mockHeroContent.title1}</span>
              <span>{mockHeroContent.title2}</span>
            </h1>

            {/* Search Bar */}
            <div className="pt-8">
              <HeroSearch />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
