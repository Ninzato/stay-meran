import { useEffect, useState } from 'react'
import { useLocale } from 'next-intl'
import type { Locale } from '@/lib/i18n/config'
import {
  getAccommodations,
  getTestimonials,
  getHeroContent,
  getSectionContent,
  getCTAContent,
  type SanityAccommodation,
  type SanityTestimonial,
  type SanityHeroContent,
  type SanitySectionContent,
  type SanityCTAContent
} from '@/lib/sanity/queries'
import {
  transformAccommodation,
  transformTestimonial,
  transformHeroContent,
  transformSectionContent,
  transformCTAContent
} from '@/lib/sanity/types'

// Custom hooks for different content types
export function useAccommodations() {
  const locale = useLocale() as Locale
  const [accommodations, setAccommodations] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const data = await getAccommodations()
        const transformed = data.map(item => transformAccommodation(item, locale))
        setAccommodations(transformed)
        setError(null)
      } catch (err) {
        setError('Failed to fetch accommodations')
        console.error('Error fetching accommodations:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [locale])

  return { accommodations, loading, error }
}

export function useTestimonials() {
  const locale = useLocale() as Locale
  const [testimonials, setTestimonials] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const data = await getTestimonials()
        const transformed = data.map(item => transformTestimonial(item, locale))
        setTestimonials(transformed)
        setError(null)
      } catch (err) {
        setError('Failed to fetch testimonials')
        console.error('Error fetching testimonials:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [locale])

  return { testimonials, loading, error }
}

export function useHeroContent() {
  const locale = useLocale() as Locale
  const [heroContent, setHeroContent] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const data = await getHeroContent()
        if (data) {
          const transformed = transformHeroContent(data, locale)
          setHeroContent(transformed)
        }
        setError(null)
      } catch (err) {
        setError('Failed to fetch hero content')
        console.error('Error fetching hero content:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [locale])

  return { heroContent, loading, error }
}

export function useSectionContent() {
  const locale = useLocale() as Locale
  const [sections, setSections] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const data = await getSectionContent()
        const transformed = data.map(item => transformSectionContent(item, locale))
        setSections(transformed)
        setError(null)
      } catch (err) {
        setError('Failed to fetch section content')
        console.error('Error fetching section content:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [locale])

  return { sections, loading, error }
}

export function useCTAContent() {
  const locale = useLocale() as Locale
  const [ctaContent, setCTAContent] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const data = await getCTAContent()
        if (data) {
          const transformed = transformCTAContent(data, locale)
          setCTAContent(transformed)
        }
        setError(null)
      } catch (err) {
        setError('Failed to fetch CTA content')
        console.error('Error fetching CTA content:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [locale])

  return { ctaContent, loading, error }
}