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
      "Where Nature, Culture, and Relaxation Meet Nestled in the heart of the Alps, Merano is a captivating town known for its picturesque landscapes, vibrant cultural scene, and renowned wellness experiences. Whether you're exploring historic streets, indulging in world-class cuisine, or unwinding in thermal spas, Merano has something for every traveler.",
    image: '/images/merano-1.png'
  },
  {
    id: 'breathtaking-nature',
    title: 'Breathtaking Nature',
    content:
      'Surrounded by majestic mountains, rolling vineyards, and scenic walking trails.',
    image: '/images/merano-1.png'
  }
];

export const mockFinalCTA: CTAContent = {
  title: 'Find Your Stay Plan Your Perfect Getaway',
  subtitle:
    'Ready to experience Merano’s charm? Discover availability and book your ideal accommodation today. Whether you’re looking for a romantic escape, a cultural adventure, or a relaxing retreat, StayMeran has the perfect place for you.',
  buttonText: 'Book Your Stay',
  buttonHref: '/book',
  backgroundImage: '/images/hero.png'
};
