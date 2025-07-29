import { Header, Footer } from '@/components/layout';
import { HeroSection } from '@/components/features/hero';
import { IntroSection, WhyMeranoSection, NatureSection } from '@/components/features/sections';
import { AccommodationsGrid } from '@/components/features/accommodations';
import { TestimonialsGrid } from '@/components/features/testimonials';
import { FinalCtaSection } from '@/components/features/cta';

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Intro Section */}
        <IntroSection />

        {/* Accommodations Grid */}
        <AccommodationsGrid />

        {/* Why Merano Section */}
        <WhyMeranoSection />

        {/* Breathtaking Nature Section */}
        <NatureSection />

        {/* Testimonials Grid */}
        <TestimonialsGrid />

        {/* Final CTA Section */}
        <FinalCtaSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
