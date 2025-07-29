import Image from 'next/image';
import { Section } from '@/components/ui';
import { mockSections } from '@/lib/constants';

export function NatureSection() {
  const natureContent = mockSections.find(
    section => section.id === 'breathtaking-nature'
  );

  if (!natureContent) return null;

  return (
    <Section className="mt-14">
      <div className="flex flex-col gap-20 2xl:flex-row">
        {/* Left: Content */}
        <div className="order-2 flex flex-col gap-14 2xl:order-1">
          <div className="flex h-fit w-[409px] flex-shrink-0 flex-col gap-2 rounded-r-xl rounded-b-xl bg-white py-5 2xl:relative 2xl:before:absolute 2xl:before:top-0 2xl:before:-left-[50vw] 2xl:before:h-full 2xl:before:w-[50vw] 2xl:before:bg-white 2xl:before:content-['']">
            {/* Title */}
            <h2 className="tracking-tightest text-xl leading-[1.5em] font-medium text-blue-900 2xl:text-2xl">
              {natureContent.title}
            </h2>

            {/* Description */}
            <p className="tracking-tightest leading-[1.5em] font-light text-blue-800">
              {natureContent.content}
            </p>
          </div>
          <div>
            <h2 className="tracking-tightest text-2xl leading-[1.5em] font-medium text-blue-500">
              Rich Culture
            </h2>
          </div>
          <div>
            <h2 className="tracking-tightest text-2xl leading-[1.5em] font-medium text-blue-500">
              Culinary Deligths
            </h2>
          </div>
          <div>
            <h2 className="tracking-tightest text-2xl leading-[1.5em] font-medium text-blue-500">
              Wellness Relaxation
            </h2>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative order-1 w-full flex-grow overflow-hidden rounded-xl 2xl:order-2">
          {natureContent.image && (
            <Image
              src={natureContent.image}
              alt="Breathtaking nature in Merano"
              width={711}
              height={488}
              sizes="(max-width: 768px) 361px, 306px"
              className="object-cover"
            />
          )}
          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
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
