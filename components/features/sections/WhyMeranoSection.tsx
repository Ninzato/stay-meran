import { Section } from '@/components/ui';
import { mockSections } from '@/lib/constants';

export function WhyMeranoSection() {
  const whyMeranoContent = mockSections.find(
    section => section.id === 'why-merano'
  );

  if (!whyMeranoContent) return null;

  return (
    <Section id="why-merano">
      <div>
        {/* Title */}
        <h2 className="tracking-tightest text-[32px] leading-[1.5em] font-medium text-blue-900 md:text-[44px]">
          {whyMeranoContent.title}
        </h2>

        {/* Content */}
        <p className="tracking-tightest text-base leading-[2em] font-light text-blue-800 2xl:text-xl">
          {whyMeranoContent.content}
        </p>
      </div>
    </Section>
  );
}
