import Image from 'next/image';
import { Section } from '@/components/ui';
import type { SectionContent } from '@/lib/types/content';

interface NatureSectionProps {
  sectionContent: SectionContent;
}

export function NatureSection({ sectionContent }: NatureSectionProps) {

  return (
    <Section className="mt-14">
      <div className="flex flex-col gap-5 2xl:flex-row 2xl:gap-20">
        {/* Left: Content */}
        <div className="order-2 flex flex-col gap-14 2xl:order-1">
          <div className="flex h-fit w-full flex-shrink-0 flex-col gap-2 rounded-r-xl rounded-b-xl bg-white p-5 2xl:relative 2xl:w-[409px] 2xl:before:absolute 2xl:before:top-0 2xl:before:-left-[50vw] 2xl:before:h-full 2xl:before:w-[50vw] 2xl:before:bg-white 2xl:before:content-['']">
            {/* Title */}
            <h2 className="tracking-tightest text-xl leading-[1.5em] font-medium text-blue-900 2xl:text-2xl">
              {sectionContent.title}
            </h2>

            {/* Description */}
            <p className="tracking-tightest leading-[1.5em] font-light text-blue-800">
              {sectionContent.content}
            </p>
          </div>
          <div className="hidden 2xl:block">
            <h2 className="tracking-tightest text-2xl leading-[1.5em] font-medium text-blue-500">
              Rich Culture
            </h2>
          </div>
          <div className="hidden 2xl:block">
            <h2 className="tracking-tightest text-2xl leading-[1.5em] font-medium text-blue-500">
              Culinary Deligths
            </h2>
          </div>
          <div className="hidden 2xl:block">
            <h2 className="tracking-tightest text-2xl leading-[1.5em] font-medium text-blue-500">
              Wellness Relaxation
            </h2>
          </div>
        </div>

        <div className="order-3 flex w-full justify-center gap-2 2xl:hidden">
          <div className="h-1 w-6 rounded-full bg-blue-900"></div>
          <div className="h-1 w-6 rounded-full bg-blue-800/70"></div>
          <div className="h-1 w-6 rounded-full bg-blue-800/70"></div>
          <div className="h-1 w-6 rounded-full bg-blue-800/70"></div>
        </div>

        {/* Right: Image */}
        <div className="relative order-1 w-full flex-grow overflow-hidden rounded-xl 2xl:order-2">
          {sectionContent.image && (
            <Image
              src={sectionContent.image}
              alt="Breathtaking nature in Merano"
              width={711}
              height={488}
              sizes="(max-width: 768px) 361px, 306px"
              className="object-cover"
            />
          )}
          <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 gap-2 2xl:flex">
            <div className="h-1 w-6 rounded-full bg-white"></div>
            <div className="h-1 w-6 rounded-full bg-white/70"></div>
            <div className="h-1 w-6 rounded-full bg-white/70"></div>
            <div className="h-1 w-6 rounded-full bg-white/70"></div>
          </div>
        </div>
      </div>
    </Section>
  );
}
