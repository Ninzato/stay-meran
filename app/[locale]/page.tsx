import { Header, Footer } from '@/components/layout';
import { HeroSection } from '@/components/features/hero';
import {
  IntroSection,
  WhyMeranoSection,
  NatureSection
} from '@/components/features/sections';
import { AccommodationsGrid } from '@/components/features/accommodations';
import { TestimonialsGrid } from '@/components/features/testimonials';
import { FinalCtaSection } from '@/components/features/cta';
import type { Locale } from '@/lib/i18n/config'
import {
  getAccommodationsServer,
  getTestimonialsServer,
  getHeroContentServer,
  getSectionContentServer,
  getCTAContentServer
} from '@/lib/sanity/server'

interface HomeProps {
  params: Promise<{
    locale: Locale
  }>
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params
  // Fetch all data server-side
  const [accommodations, testimonials, heroContent, sections, ctaContent] = await Promise.all([
    getAccommodationsServer(locale),
    getTestimonialsServer(locale),
    getHeroContentServer(locale),
    getSectionContentServer(locale),
    getCTAContentServer(locale)
  ])

  const introContent = sections.find(section => section.id === 'intro')
  const whyMeranoContent = sections.find(section => section.id === 'why-merano')
  const natureContent = sections.find(section => section.id === 'breathtaking-nature')
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        {heroContent && <HeroSection heroContent={heroContent} />}

        {/* Intro Section */}
        {introContent && <IntroSection sectionContent={introContent} />}

        {/* Accommodations Grid */}
        <AccommodationsGrid accommodations={accommodations} />

        <div className="bg-blue-100 py-10">
          {/* Why Merano Section */}
          {whyMeranoContent && <WhyMeranoSection sectionContent={whyMeranoContent} />}

          {/* Breathtaking Nature Section */}
          {natureContent && <NatureSection sectionContent={natureContent} />}
        </div>

        {/* Testimonials Grid */}
        <TestimonialsGrid testimonials={testimonials} />

        {/* Final CTA Section */}
        {ctaContent && <FinalCtaSection ctaContent={ctaContent} />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}