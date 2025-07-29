import Image from 'next/image';
import { Button, Container } from '@/components/ui';
import { mockFinalCTA } from '@/lib/constants';

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={mockFinalCTA.backgroundImage}
          alt="Find your perfect getaway"
          fill
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <Container className="relative z-10 text-center text-white">
        <div className="mx-auto max-w-4xl space-y-8">
          {/* Title */}
          <h2 className="text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
            {mockFinalCTA.title}
          </h2>

          {/* Subtitle/Description */}
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl">
            {mockFinalCTA.subtitle}
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              size="lg"
              className="bg-white px-8 py-4 text-lg font-semibold text-black hover:bg-white/90"
            >
              {mockFinalCTA.buttonText}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
