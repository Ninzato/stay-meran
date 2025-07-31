import type { Locale } from '@/lib/i18n/config'
import type { 
  SanityAccommodation, 
  SanityTestimonial, 
  SanityHeroContent, 
  SanitySectionContent, 
  SanityCTAContent 
} from './queries'
import { urlFor } from './client'

// Transform Sanity data to component-compatible formats
export function transformAccommodation(
  sanityAccommodation: SanityAccommodation,
  locale: Locale
) {
  return {
    id: sanityAccommodation.id || '',
    title: sanityAccommodation.title?.[locale] || sanityAccommodation.title?.en || '',
    subtitle: sanityAccommodation.subtitle?.[locale] || sanityAccommodation.subtitle?.en || '',
    description: sanityAccommodation.description?.[locale] || sanityAccommodation.description?.en || '',
    image: sanityAccommodation.image ? urlFor(sanityAccommodation.image).url() : '',
    price: sanityAccommodation.price || '',
    discoverMoreLink: sanityAccommodation.discoverMoreLink || ''
  }
}

export function transformTestimonial(
  sanityTestimonial: SanityTestimonial,
  locale: Locale
) {
  return {
    id: sanityTestimonial.id || '',
    guestName: sanityTestimonial.guestName || '',
    guestPhoto: sanityTestimonial.guestPhoto ? urlFor(sanityTestimonial.guestPhoto).url() : '',
    quote: sanityTestimonial.quote?.[locale] || sanityTestimonial.quote?.en || ''
  }
}

export function transformHeroContent(
  sanityHeroContent: SanityHeroContent,
  locale: Locale
) {
  return {
    title1: sanityHeroContent.title1?.[locale] || sanityHeroContent.title1?.en || '',
    title2: sanityHeroContent.title2?.[locale] || sanityHeroContent.title2?.en || '',
    subtitle: sanityHeroContent.subtitle?.[locale] || sanityHeroContent.subtitle?.en || '',
    backgroundImage: sanityHeroContent.backgroundImage ? urlFor(sanityHeroContent.backgroundImage).url() : '',
    searchPlaceholder: sanityHeroContent.searchPlaceholder?.[locale] || sanityHeroContent.searchPlaceholder?.en || ''
  }
}

export function transformSectionContent(
  sanitySectionContent: SanitySectionContent,
  locale: Locale
) {
  return {
    id: sanitySectionContent.id || '',
    title: sanitySectionContent.title ? (sanitySectionContent.title?.[locale] || sanitySectionContent.title?.en || '') : '',
    content: sanitySectionContent.content?.[locale] || sanitySectionContent.content?.en || '',
    image: sanitySectionContent.image ? urlFor(sanitySectionContent.image).url() : undefined
  }
}

export function transformCTAContent(
  sanityCTAContent: SanityCTAContent,
  locale: Locale
) {
  return {
    title: sanityCTAContent.title?.[locale] || sanityCTAContent.title?.en || '',
    subtitle: sanityCTAContent.subtitle?.[locale] || sanityCTAContent.subtitle?.en || '',
    buttonText: sanityCTAContent.buttonText?.[locale] || sanityCTAContent.buttonText?.en || '',
    buttonHref: sanityCTAContent.buttonHref || '',
    backgroundImage: sanityCTAContent.backgroundImage ? urlFor(sanityCTAContent.backgroundImage).url() : ''
  }
}