export interface Accommodation {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  discoverMoreLink: string;
}

export const mockAccommodations: Accommodation[] = [
  {
    id: 'helles-apartment',
    title: 'Helles Apartment in Historisches Villa',
    subtitle: 'Historic Villa Apartment',
    description:
      'A bright and spacious apartment located in a beautiful historic villa in the heart of Merano. Features traditional Alpine architecture with modern amenities.',
    image: '/images/apartment-helles.png',
    discoverMoreLink: '/accommodations/helles-apartment'
  },
  {
    id: 'apartment-franz',
    title: 'Apartment Franz',
    subtitle: 'Modern Comfort',
    description:
      'Contemporary apartment with elegant furnishings and all modern conveniences. Perfect for couples or business travelers seeking comfort and style.',
    image: '/images/apartment-franz.png',
    discoverMoreLink: '/accommodations/apartment-franz'
  },
  {
    id: 'apartment-sissi',
    title: 'Apartment Sissi mit Balkon',
    subtitle: 'Balcony with Mountain Views',
    description:
      'Charming apartment featuring a private balcony with stunning mountain views. Ideal for those who want to wake up to the beauty of the Alps.',
    image: '/images/apartment-sissi.png',
    discoverMoreLink: '/accommodations/apartment-sissi'
  }
];
