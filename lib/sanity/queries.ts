import { client } from './client'
import type { Locale } from '@/lib/i18n/config'

// TypeScript interfaces for Sanity responses
export interface SanityAccommodation {
  _id: string
  id: string
  title: { [key in Locale]?: string }
  subtitle: { [key in Locale]?: string }
  description: { [key in Locale]?: string }
  image: {
    asset: {
      _ref: string
      _type: string
    }
    _type: string
  }
  price: string
  discoverMoreLink: string
  order: number
}

export interface SanityTestimonial {
  _id: string
  id: string
  guestName: string
  guestPhoto: {
    asset: {
      _ref: string
      _type: string
    }
    _type: string
  }
  quote: { [key in Locale]?: string }
  order: number
}

export interface SanityHeroContent {
  _id: string
  title1: { [key in Locale]?: string }
  title2: { [key in Locale]?: string }
  subtitle: { [key in Locale]?: string }
  backgroundImage: {
    asset: {
      _ref: string
      _type: string
    }
    _type: string
  }
  searchPlaceholder: { [key in Locale]?: string }
}

export interface SanitySectionContent {
  _id: string
  id: string
  title?: { [key in Locale]?: string }
  content: { [key in Locale]?: string }
  image?: {
    asset: {
      _ref: string
      _type: string
    }
    _type: string
  }
  order: number
}

export interface SanityCTAContent {
  _id: string
  title: { [key in Locale]?: string }
  subtitle: { [key in Locale]?: string }
  buttonText: { [key in Locale]?: string }
  buttonHref: string
  backgroundImage: {
    asset: {
      _ref: string
      _type: string
    }
    _type: string
  }
}

// GROQ Queries
export const ACCOMMODATIONS_QUERY = `*[_type == "accommodation"] | order(order asc) {
  _id,
  id,
  title,
  subtitle,
  description,
  image {
    asset->{
      _id,
      url
    }
  },
  price,
  discoverMoreLink,
  order
}`

export const TESTIMONIALS_QUERY = `*[_type == "testimonial"] | order(order asc) {
  _id,
  id,
  guestName,
  guestPhoto {
    asset->{
      _id,
      url
    }
  },
  quote,
  order
}`

export const HERO_CONTENT_QUERY = `*[_type == "heroContent"][0] {
  _id,
  title1,
  title2,
  subtitle,
  backgroundImage {
    asset->{
      _id,
      url
    }
  },
  searchPlaceholder
}`

export const SECTION_CONTENT_QUERY = `*[_type == "sectionContent"] | order(order asc) {
  _id,
  id,
  title,
  content,
  image {
    asset->{
      _id,
      url
    }
  },
  order
}`

export const CTA_CONTENT_QUERY = `*[_type == "ctaContent"][0] {
  _id,
  title,
  subtitle,
  buttonText,
  buttonHref,
  backgroundImage {
    asset->{
      _id,
      url
    }
  }
}`

// Data fetching functions
export async function getAccommodations(): Promise<SanityAccommodation[]> {
  try {
    const accommodations = await client.fetch(ACCOMMODATIONS_QUERY)
    return accommodations || []
  } catch (error) {
    console.error('Error fetching accommodations:', error)
    return []
  }
}

export async function getTestimonials(): Promise<SanityTestimonial[]> {
  try {
    const testimonials = await client.fetch(TESTIMONIALS_QUERY)
    return testimonials || []
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
}

export async function getHeroContent(): Promise<SanityHeroContent | null> {
  try {
    const heroContent = await client.fetch(HERO_CONTENT_QUERY)
    return heroContent || null
  } catch (error) {
    console.error('Error fetching hero content:', error)
    return null
  }
}

export async function getSectionContent(): Promise<SanitySectionContent[]> {
  try {
    const sections = await client.fetch(SECTION_CONTENT_QUERY)
    return sections || []
  } catch (error) {
    console.error('Error fetching section content:', error)
    return []
  }
}

export async function getCTAContent(): Promise<SanityCTAContent | null> {
  try {
    const ctaContent = await client.fetch(CTA_CONTENT_QUERY)
    return ctaContent || null
  } catch (error) {
    console.error('Error fetching CTA content:', error)
    return null
  }
}

// Helper function to get localized content
export function getLocalizedContent<T extends Record<Locale, string>>(
  content: T,
  locale: Locale
): string {
  return content[locale] || content.en || Object.values(content)[0] || ''
}