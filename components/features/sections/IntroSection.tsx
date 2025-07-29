// import { Container } from "@/components/ui";
import { mockSections } from '@/lib/constants';
import { Section } from '@/components/ui';

export function IntroSection() {
  const introContent = mockSections.find(section => section.id === 'intro');

  if (!introContent) return null;

  return (
    <Section className="mt-16">
      {/* <Container> */}
      <div className="w-[361px] md:w-[1065px]">
        <p className="tracking-tightest text-[32px] leading-[1.5em] font-medium text-blue-900 md:text-[44px]">
          {introContent.content}
        </p>
      </div>
      {/* </Container> */}
    </Section>
  );
}
