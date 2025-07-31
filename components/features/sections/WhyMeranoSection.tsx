'use client';

import { Section } from '@/components/ui';
import { useSectionContent } from '@/lib/hooks/useSanityData';

export function WhyMeranoSection() {
  const { sections, loading, error } = useSectionContent();
  const whyMeranoContent = sections.find(
    section => section.id === 'why-merano'
  );

  if (loading) {
    return (
      <Section id="why-merano">
        <div>
          <div className="h-12 bg-gray-200 animate-pulse rounded mb-4"></div>
          <div className="h-16 bg-gray-200 animate-pulse rounded"></div>
        </div>
      </Section>
    );
  }

  if (error || !whyMeranoContent) {
    return (
      <Section id="why-merano">
        <div className="text-center text-gray-500">
          {error || 'Why Merano content not found'}
        </div>
      </Section>
    );
  }

  return (
    <Section id="why-merano">
      <div>
        {/* Title */}
        {whyMeranoContent.title && (
          <h2 className="tracking-tightest text-[32px] leading-[1.5em] font-medium text-blue-900 2xl:text-[44px]">
            {whyMeranoContent.title}
          </h2>
        )}

        {/* Content */}
        <p className="tracking-tightest text-base leading-[2em] font-light text-blue-800 2xl:text-xl">
          {whyMeranoContent.content}
        </p>
      </div>
    </Section>
  );
}
