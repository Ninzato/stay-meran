import Image from 'next/image';
import { Container } from '@/components/ui';
import { mockSections } from '@/lib/constants';

export function NatureSection() {
  const natureContent = mockSections.find(
    section => section.id === 'breathtaking-nature'
  );

  if (!natureContent) return null;

  return (
    <section className="bg-background py-16">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left: Content */}
          <div className="space-y-8">
            {/* Title */}
            <h2 className="text-foreground text-3xl font-bold md:text-4xl">
              {natureContent.title}
            </h2>

            {/* Description */}
            <p className="text-foreground/80 text-lg leading-relaxed">
              {natureContent.content}
            </p>

            {/* Bullet Points */}
            {natureContent.bulletPoints && (
              <div className="grid grid-cols-2 gap-4">
                {natureContent.bulletPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3"
                  >
                    <div className="bg-foreground h-2 w-2 flex-shrink-0 rounded-full" />
                    <span className="text-foreground/80 font-medium">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg lg:aspect-[3/4]">
            {natureContent.image && (
              <Image
                src={natureContent.image}
                alt="Breathtaking nature in Merano"
                fill
                className="object-cover"
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
