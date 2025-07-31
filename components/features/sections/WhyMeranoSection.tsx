import { Section } from '@/components/ui';
import type { SectionContent } from '@/lib/types/content';

interface WhyMeranoSectionProps {
  sectionContent: SectionContent;
}

export function WhyMeranoSection({ sectionContent }: WhyMeranoSectionProps) {

  return (
    <Section id="why-merano">
      <div>
        {/* Title */}
        {sectionContent.title && (
          <h2 className="tracking-tightest text-[32px] leading-[1.5em] font-medium text-blue-900 2xl:text-[44px]">
            {sectionContent.title}
          </h2>
        )}

        {/* Content */}
        <p className="tracking-tightest text-base leading-[2em] font-light text-blue-800 2xl:text-xl">
          {sectionContent.content}
        </p>
      </div>
    </Section>
  );
}
