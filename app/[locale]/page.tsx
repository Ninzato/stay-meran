import { Header, Footer, FooterAnimationWrapper } from '@/components/layout';
import { HeroSection } from '@/components/features/hero';
import {
  IntroSection,
  WhyMeranoSection,
  NatureSection,
  IntroAnimationWrapper,
  WhyMeranoAnimationWrapper
} from '@/components/features/sections';
import { AccommodationsGrid } from '@/components/features/accommodations';
import {
  TestimonialsGrid,
  TestimonialAnimationWrapper
} from '@/components/features/testimonials';
import { FinalCtaSection, FinalCtaAnimationWrapper } from '@/components/features/cta';
import type { Locale } from '@/lib/i18n/config';
import {
  getAccommodationsServer,
  getTestimonialsServer,
  getHeroContentServer,
  getSectionContentServer,
  getCTAContentServer
} from '@/lib/sanity/server';

interface HomeProps {
  params: Promise<{
    locale: Locale;
  }>;
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;
  const [accommodations, testimonials, heroContent, sections, ctaContent] =
    await Promise.all([
      getAccommodationsServer(locale),
      getTestimonialsServer(locale),
      getHeroContentServer(locale),
      getSectionContentServer(locale),
      getCTAContentServer(locale)
    ]);

  const introContent = sections.find(section => section.id === 'intro');
  const whyMeranoContent = sections.find(
    section => section.id === 'why-merano'
  );
  const natureContent = sections.find(
    section => section.id === 'breathtaking-nature'
  );
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />

      <main>
        {heroContent && <HeroSection heroContent={heroContent} />}

        <IntroAnimationWrapper
          id="our-stays"
          className="min-h-screen"
        >
          {introContent && <IntroSection sectionContent={introContent} />}
          <AccommodationsGrid accommodations={accommodations} />
        </IntroAnimationWrapper>

        <WhyMeranoAnimationWrapper
          id="why-merano"
          className="min-h-screen bg-blue-100 py-10"
        >
          {whyMeranoContent && (
            <WhyMeranoSection sectionContent={whyMeranoContent} />
          )}
          {natureContent && <NatureSection sectionContent={natureContent} />}
        </WhyMeranoAnimationWrapper>

        <TestimonialAnimationWrapper id="testimonial-grid">
          <TestimonialsGrid testimonials={testimonials} />
        </TestimonialAnimationWrapper>

        <FinalCtaAnimationWrapper id="final-cta">
          {ctaContent && <FinalCtaSection ctaContent={ctaContent} />}
        </FinalCtaAnimationWrapper>
      </main>

      <FooterAnimationWrapper id="footer">
        <Footer />
      </FooterAnimationWrapper>
    </div>
  );
}
