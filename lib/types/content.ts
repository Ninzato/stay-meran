// Content type interfaces
export interface Accommodation {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  price: string;
  discoverMoreLink: string;
}

export interface Testimonial {
  id: string;
  guestName: string;
  guestPhoto: string;
  quote: string;
}

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