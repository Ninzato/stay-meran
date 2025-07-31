import { Section } from '@/components/ui';
import type { SectionContent } from '@/lib/types/content';

interface IntroSectionProps {
  sectionContent: SectionContent;
}

export function IntroSection({ sectionContent }: IntroSectionProps) {

  return (
    <Section
      id="our-stays"
      className="mt-16"
    >
      <div className="w-[361px] 2xl:w-[1065px]">
        <p className="tracking-tightest text-[32px] leading-[1.5em] font-medium text-blue-900 2xl:text-[44px]">
          {sectionContent.content}
        </p>
      </div>
    </Section>
  );
}
