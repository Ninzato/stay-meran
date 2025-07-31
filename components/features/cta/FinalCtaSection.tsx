import Image from 'next/image';
import { Button, Section } from '@/components/ui';
import type { CTAContent } from '@/lib/types/content';

interface FinalCtaSectionProps {
  ctaContent: CTAContent;
}

export function FinalCtaSection({ ctaContent }: FinalCtaSectionProps) {

  return (
    <Section className="my-[106px] overflow-hidden">
      <div className="relative flex min-h-[504px] items-center justify-center rounded-xl">
        {/* Background Image */}
        <Image
          src={ctaContent.backgroundImage}
          alt="Find your perfect getaway"
          fill
          className="rounded-xl object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 rounded-xl bg-black/30" />

        {/* Content */}
        <div className="mx z-10 flex flex-col gap-6 text-center">
          {/* Title */}
          <h2 className="tracking-tightest mx-auto w-[337px] text-[32px] leading-[1.2em] text-white 2xl:w-[420px] 2xl:text-[44px] 2xl:font-medium">
            {ctaContent.title}
          </h2>

          {/* Subtitle/Description */}
          <p className="2xl:text-normal 2xl:font-base tracking-tightest mx-auto w-[337px] leading-[2em] text-blue-100 2xl:w-[808px]">
            {ctaContent.subtitle}
          </p>

          {/* CTA Button */}
          <div className="flex w-full justify-center">
            <Button
              variant="rounded"
              size="lg"
              className="w-full bg-white font-medium text-[#1E1E1E] hover:bg-white/90 2xl:w-fit"
            >
              <span>{ctaContent.buttonText}</span>
              <Image
                src="/icons/icon-arrow-right.svg"
                alt="arrow-right"
                width={24}
                height={24}
              />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
