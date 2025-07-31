import { client } from './client'
import type { Locale } from '@/lib/i18n/config'
import {
  ACCOMMODATIONS_QUERY,
  TESTIMONIALS_QUERY,
  HERO_CONTENT_QUERY,
  SECTION_CONTENT_QUERY,
  CTA_CONTENT_QUERY,
  type SanityAccommodation,
  type SanityTestimonial,
  type SanityHeroContent,
  type SanitySectionContent,
  type SanityCTAContent
} from './queries'
import {
  transformAccommodation,
  transformTestimonial,
  transformHeroContent,
  transformSectionContent,
  transformCTAContent
} from './types'

// Server-side data fetching functions for static generation
export async function getAccommodationsServer(locale: Locale) {
  try {
    const accommodations: SanityAccommodation[] = await client.fetch(ACCOMMODATIONS_QUERY)
    return accommodations.map(item => transformAccommodation(item, locale))
  } catch (error) {
    console.error('Error fetching accommodations:', error)
    return []
  }
}

export async function getTestimonialsServer(locale: Locale) {
  try {
    const testimonials: SanityTestimonial[] = await client.fetch(TESTIMONIALS_QUERY)
    return testimonials.map(item => transformTestimonial(item, locale))
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
}

export async function getHeroContentServer(locale: Locale) {
  try {
    const heroContent: SanityHeroContent = await client.fetch(HERO_CONTENT_QUERY)
    if (heroContent) {
      return transformHeroContent(heroContent, locale)
    }
    return null
  } catch (error) {
    console.error('Error fetching hero content:', error)
    return null
  }
}

export async function getSectionContentServer(locale: Locale) {
  try {
    const sections: SanitySectionContent[] = await client.fetch(SECTION_CONTENT_QUERY)
    return sections.map(item => transformSectionContent(item, locale))
  } catch (error) {
    console.error('Error fetching section content:', error)
    return []
  }
}

export async function getCTAContentServer(locale: Locale) {
  try {
    const ctaContent: SanityCTAContent = await client.fetch(CTA_CONTENT_QUERY)
    if (ctaContent) {
      return transformCTAContent(ctaContent, locale)
    }
    return null
  } catch (error) {
    console.error('Error fetching CTA content:', error)
    return null
  }
}