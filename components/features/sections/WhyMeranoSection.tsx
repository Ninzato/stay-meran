import { Container } from '@/components/ui';
import { mockSections } from '@/lib/constants';

export function WhyMeranoSection() {
  const whyMeranoContent = mockSections.find(section => section.id === 'why-merano');

  if (!whyMeranoContent) return null;

  return (
    <section className="bg-background py-16">
      <Container>
        <div className="mx-auto max-w-4xl">
          {/* Title */}
          <h2 className="text-foreground mb-8 text-3xl font-bold md:text-4xl">{whyMeranoContent.title}</h2>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground/80 text-lg leading-relaxed">{whyMeranoContent.content}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
