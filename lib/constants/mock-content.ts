export interface HeroContent {
  title1: string;
  title2: string;
  subtitle: string;
  backgroundImage: string;
  searchPlaceholder: string;
}

export interface SectionContent {
  id: string;
  title: string;
  content: string;
  image?: string;
  bulletPoints?: string[];
}

export interface CTAContent {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
  backgroundImage: string;
}

export const mockHeroContent: HeroContent = {
  title1: 'Three Unique Stays',
  title2: 'in the Heart of Merano',
  subtitle: 'STAY MERAN',
  backgroundImage: '/images/hero.png',
  searchPlaceholder: 'Search for your perfect stay...'
};

export const mockSections: SectionContent[] = [
  {
    id: 'intro',
    title: '',
    content:
      'StayMeran offers a curated selection of three unique accommodations, each designed to provide an unforgettable stay in Merano.'
  },
  {
    id: 'why-merano',
    title: 'Why stay in Merano?',
    content:
      "Where Italian Culture and Bavarian Alpine Freedom in the heart of the Alps, Merano is a delightful town known for its incredible landscapes, thermal baths and relaxing atmosphere to the soul relaxation, wellness, and ultimate taste. Whether you're seeking outdoor adventure or simply want to indulge in the local culture and cuisine, Merano offers the perfect backdrop for your next getaway.",
    image: '/images/merano-1.png'
  },
  {
    id: 'breathtaking-nature',
    title: 'Breathtaking Nature',
    content: 'Surrounded by alpine meadows, hiking/biking trails and stunning mountain ranges.',
    bulletPoints: ['Hiking Trails', 'Culinary Delights', 'Thermal Springs', 'Alpine Adventure'],
    image: '/images/merano-1.png'
  }
];

export const mockFinalCTA: CTAContent = {
  title: 'Find Your Stay Plan Your Perfect Getaway',
  subtitle:
    "Ready to experience unforgettable moments? Choose between our unique accommodations and book your perfect getaway with us. Whether you're coming from adventure, culture and luxury. Our bed is warm awaiting your arrival, whether your mountain views or historic charm.",
  buttonText: 'Book Your Stay',
  buttonHref: '/book',
  backgroundImage: '/images/hero.png'
};
